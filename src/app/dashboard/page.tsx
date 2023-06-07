import React, { Suspense } from 'react';
import { AvailableGuildCards } from '@/components/card/guild';
import { DashboardNavbar } from '@/components/navbar/navbar';
import { GuildCardSkeleton } from '@/components/skelton/guildcard';
import { Link } from '@nextui-org/link';
import homePageConfig from '@/config/homePage';

export default function Page() {
  return (
    <div>
      <DashboardNavbar />
      <div className='max-w-screen-xl mx-auto'>
        <div className='my-16 flex flex-col items-center gap-5'>
          <h1 className='text-center text-5xl font-black'>サーバーを選択</h1>
          <div className='bg-primary-500/25 p-3 rounded-lg'>
            <p>
              目的のサーバーが表示されませんか？
              <Link isExternal href={homePageConfig.botInvite} showAnchorIcon>サーバーにNoNICK.jsを導入</Link>
              しましょう。
            </p>
          </div>
        </div>

        <div className='mx-auto max-w-screen-lg flex flex-wrap items-center justify-center gap-5'>
          <Suspense fallback={
            <React.Fragment>
              <GuildCardSkeleton />
              <GuildCardSkeleton />
              <GuildCardSkeleton />
            </React.Fragment>
          }>
            <AvailableGuildCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
}