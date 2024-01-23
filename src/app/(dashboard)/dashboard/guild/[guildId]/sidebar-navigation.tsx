'use client';

// FIXME: Error: <svg> attribute width: Expected length, "inherit".

import dashboardConfig from '@/config/dashboard';
import { Chip, cn } from '@nextui-org/react';
import Link from 'next/link';
import { useParams, useSelectedLayoutSegments } from 'next/navigation';
import { createElement } from 'react';

export function SidebarNavigation() {
  const guildId = useParams().guildId as string;
  const segment = useSelectedLayoutSegments().find(
    (seg) => !/^\(.*\)$/.test(seg), // route groupsのパスを無視する
  );

  return (
    <div className='flex flex-col'>
      {dashboardConfig.sidebar.map(({ label, items }, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <ul key={index} className='flex flex-col gap-1'>
          {label && (
            <li>
              <p className='py-[9px] font-extrabold'>{label}</p>
            </li>
          )}
          {items.map(({ href, label, badge, icon }, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index}>
              <Link
                href={`/dashboard/guild/${guildId}${href}`}
                className={cn(
                  'flex w-full items-center justify-between rounded-md px-3 py-[9px] text-sm transition ease-in-out hover:bg-zinc-400/20',
                  { 'bg-zinc-400/20': `/${segment || ''}` === href },
                )}
              >
                <div className='flex items-center gap-3'>
                  {createElement(icon, { size: 20, iconStyle: 'Bold' })}
                  <span>{label}</span>
                </div>
                {badge && (
                  <Chip size='sm' classNames={{ base: 'h-auto py-0.5' }}>
                    {badge}
                  </Chip>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
