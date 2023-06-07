'use client';

import { PartialGuild } from '@/types';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'react-feather';
import { useState } from 'react';

export default function GuildCardContainer({ guilds }: { guilds: (PartialGuild & { isBotJoined: boolean })[] }) {
  const [query, setQuery] = useState('');

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <Input
        value={query}
        className='max-w-screen-sm px-6'
        type='string'
        placeholder='名前かIDで検索'
        onValueChange={setQuery}
        startContent={<Search className='text-default-400 text-xl'/>}
      />
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {
          guilds
            .filter(({ name, id }) => query ? (name.startsWith(query) || id.startsWith(query)) : true)
            .map((guild, index) => (
              <Card key={index} className="space-y-5 p-4" radius="2xl">
                <div className={`bg-black dark:bg-white flex items-center bg-cover bg-center justify-center w-80 h-36 rounded-lg overflow-hidden before:bg-inherit shadow-md`}>
                  <Image
                    className='border-4 border-default-200 rounded-full shadow-lg bg-default-700'
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                    width={80}
                    height={80}
                    alt={`${guild.name}'s icon`}
                  />
                </div>
                {/* <div className='relative w-72 h-32 rounded-lg overflow-hidden shadow-md'>
                  <Image
                    className='absolute blur-lg'
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                    width={320}
                    height={128}
                    alt={`${guild.name}'s icon`}
                  />
                  <Image
                    className='absolute transform-gpu top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 border-2 rounded-full shadow-lg'
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                    width={100}
                    height={100}
                    alt={`${guild.name}'s icon`}
                  />
                </div> */}

                <div className='w-full flex items-center justify-between justify-items-center'>
                  <div className="w-full space-y-3">
                    <h3 className='font-extrabold'>{guild.name}</h3>
                  </div>
                  <Link href={`/dashboard/guild/${guild.id}`} passHref>
                    <Button color='primary'>
                      設定
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
        }
      </div>
    </div>
  )

}