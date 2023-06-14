import { PartialGuild } from '@/types';
import { APIGuild } from 'discord-api-types/v10';
import { Discord } from '../constants';

export async function getGuilds(Authorization: string) {
  const res = await fetch(
    `${Discord.API}/users/@me/guilds`,
    { headers: { Authorization }, cache: 'no-store' }
  );

  if (!res.ok) throw new Error(`failed to fetch: ${res.status}`);
  return await res.json<PartialGuild[]>();
}

export async function fetchGuild(guildId: string, Authorization: string) {
  const res = await fetch(
    `${Discord.API}/guilds/${guildId}`,
    { headers: { Authorization } },
  );

  if (!res.ok) throw new Error(`failed to fetch: ${res.status}`);
  return await res.json<APIGuild>();
}