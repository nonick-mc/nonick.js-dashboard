import { fetchGuild } from '@/utils/api/discord';
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { ChevronDown, PlusCircle } from 'react-feather';
import homePageConfig from '@/config/homePage';

export default async function GuildDropDown({ guildId }: { guildId: string }) {
  const { id, name, icon } = await fetchGuild(guildId, `Bot ${process.env.DISCORD_CLIENT_TOKEN}`);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className='w-full h-12'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                className='rounded-full'
                src={`https://cdn.discordapp.com/icons/${id}/${icon}.png`}
                width={25}
                height={25}
                alt='guild icon'
              />
              <p className='font-extrabold'>
                {name}
              </p>
            </div>
            <ChevronDown size={15}/>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          key={homePageConfig.botInvite}
          startContent={<PlusCircle />}
        >
          サーバーを追加
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}