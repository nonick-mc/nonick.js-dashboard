import React from 'react';

export default function SidebarMenu({
  title, children
}: {
  title: string, children: React.ReactNode
}) {
  return (
    <div className='flex flex-col gap-4'>
      <p>{title}</p>
      <div className='flex flex-col gap-2'>
        {children}
      </div>
    </div>
  )
}