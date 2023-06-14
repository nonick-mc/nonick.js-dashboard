import React, { createContext } from 'react';
import { Metadata } from 'next';
import Sidebar from '@/components/sidebar/sidebar';
import { DashboardNavbar } from '@/components/navbar/navbar';

export const metadata: Metadata = {
  title: 'サーバー選択'
}

export default function Layout({
  params: { guildId }, children
}: {
  params: { guildId: string }, children: React.ReactNode
}) {
  return (
    <main className='h-screen flex flex-row justify-start'>
      <Sidebar guildId={guildId}/>
      <div className='flex flex-col flex-1'>
        <DashboardNavbar isHideLogo={true}/>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </main>
  )
}