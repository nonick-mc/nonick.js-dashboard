'use server';

import { authOption } from '@/app/api/auth/[...nextauth]/auth';
import { ToasterToast } from '@/components/ui/use-toast';
import {
  AutomationSetting,
  EventLogSetting,
  GeneralSetting,
  MessageSetting,
  ModerateSetting,
  ServerData,
} from '@/database/models';
import { dbConnect } from '@/lib/mongoose/connect';
import { wait } from '@/lib/utils';
import { Model } from 'mongoose';
import { getServerSession } from 'next-auth';

const models = {
  automation: AutomationSetting,
  eventLog: EventLogSetting,
  general: GeneralSetting,
  message: MessageSetting,
  moderate: ModerateSetting,
} as const;

// ServerActionとして使う際はフォームの値以外をbind関数で固定するため、あえて型推論を緩和している

export async function updateSetting(
  target: keyof typeof models,
  type: string,
  guildId: string,
  values: unknown,
): Promise<Omit<ToasterToast, 'id'>> {
  try {
    await dbConnect();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const targetModel = models[target] as unknown as Model<any>;
    if (!targetModel) throw new Error('Invalid target model');

    const res = await targetModel
      .findOneAndUpdate(
        { serverId: guildId },
        { $set: { [type]: values } },
        { upsert: true, new: false },
      )
      .exec();

    await addAuditLog(guildId, type, res?.[type], values);
    await wait(1000); // Cooldown

    return {
      title: '設定を保存しました！',
      variant: 'success',
    };
  } catch (error) {
    console.error(error);
    return {
      title: '設定の保存に失敗しました',
      description: '時間をおいて再試行してください。',
      variant: 'destructive',
    };
  }
}

export async function addAuditLog(
  guildId: string,
  type: string,
  before: unknown,
  after: unknown,
) {
  const session = await getServerSession(authOption);
  if (!session) throw new Error('Invalid session');

  ServerData.updateOne(
    { serverId: guildId },
    {
      $push: {
        auditLog: {
          user: session.userId,
          type,
          date: Date.now(),
          before,
          after,
        },
      },
    },
  ).exec();
}