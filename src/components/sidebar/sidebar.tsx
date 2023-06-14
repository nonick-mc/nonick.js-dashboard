import sidebarConfig from '@/config/sidebar';
import SidebarMenu from './sidebar-menu';
import SidebarItem from './sidebar-item';
import GuildDropDown from './guild-dropdown/dropdown';
import { Home } from 'react-feather';
import NoNICKjsLogo from '../logo/nonickjs-logo';
import { Button } from '@nextui-org/button';
import { Suspense } from 'react';

export default function Sidebar({ guildId }: { guildId: string }) {
  return (
    <div className='w-72 p-6 flex flex-col gap-5 items-center h-screen border-r-1 border-default-500/25'>
      <NoNICKjsLogo width={150} height={50} />

      <Suspense fallback={<Button className='w-full h-12' isLoading/>}>
        <GuildDropDown guildId={guildId}/>
      </Suspense>

      {/* <SidebarItem guildId={guildId} label='ホーム' itemId='home' icon={Home} /> */}

      {/* <SidebarMenu title=''>
        {sidebarConfig.items.unCategorized.map((v, index) => (
          <SidebarItem {...v} guildId={guildId} key={index} />
        ))}
      </SidebarMenu>
      {sidebarConfig.items.feature.map((v, index) => (
        <SidebarItem {...v} guildId={guildId} key={index} />
      ))} */}
    </div>
  );
}