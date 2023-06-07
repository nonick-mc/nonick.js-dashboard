import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PartialGuild } from '@/types';
import { Discord } from '@/utils/constants';
import { hasPermission } from '@/utils/middlewares';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import React from 'react';

async function getUserGuilds(accessToken: string): Promise<PartialGuild[]> {
  const { data: userGuilds } = await axios.get<PartialGuild[]>(
    `${Discord.API}/users/@me/guilds`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  const { data: botGuilds } = await axios.get<PartialGuild[]>(
    `${Discord.API}/users/@me/guilds`,
    { headers: { Authorization: `Bot ${process.env.DISCORD_CLIENT_TOKEN}` } },
  );

  return userGuilds
    .filter((guild) => hasPermission(guild.permissions, Discord.Permissions.ManageGuild))
    .filter((guild) => botGuilds.some(botGuild => botGuild.id === guild.id));
}

export async function AvailableGuildCards() {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) return;

  const guilds = await getUserGuilds(session.accessToken);

  return (
    <React.Fragment>
      {guilds.map(({ id, name, icon }, index) => (
        <GuildCard
          key={index}
          id={id}
          name={name}
          icon={icon}
        />
      ))}
    </React.Fragment>
  )
}

export function GuildCard({ id, name, icon }: Pick<PartialGuild, 'id'|'name'|'icon'>) {
  return (
    <Link href={`/dashboard/guild/${id}`}>
      <Card
        className='border-2'
        isPressable
        isHoverable
        disableRipple
      >
        <CardHeader className='p-2 pb-0'>
          <div className='relative w-64 h-36 overflow-hidden rounded-lg drop-shadow-md select-none'>
            <Image
              className='absolute w-64 h-36 blur-lg z-0 bg-gray-200 dark:bg-gray-950'
              src={`https://cdn.discordapp.com/icons/${id}/${icon}.png`}
              width={320}
              height={320}
              alt='a'
            />
            <Image
              className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]
                border-white border-4 rounded-full z-10 shadow-lg bg-gray-200 dark:bg-gray-950'
              src={`https://cdn.discordapp.com/icons/${id}/${icon}.png`}
              width={90}
              height={90}
              alt='b'
            />
          </div>
        </CardHeader>
        <CardBody className='p-2 py-3'>
          <div className='mx-auto px-3 py-2 bg-gray-200 dark:bg-gray-950 rounded-xl'>
            <p>{name}</p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}