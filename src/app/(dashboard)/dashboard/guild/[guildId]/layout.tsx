import { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from './sidebar';

export default function Layout({
  params: { guildId },
  children,
}: {
  params: { guildId: string };
  children: ReactNode;
}) {
  return (
    <div className='flex h-full py-3'>
      <Sidebar guildId={guildId} />
      <ScrollArea className='flex-1'>
        <div className='flex flex-col gap-4 px-4'>{children}</div>
      </ScrollArea>
    </div>
  );
}
