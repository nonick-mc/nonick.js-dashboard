'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Icon } from 'react-feather';
import { motion } from 'framer-motion'
import React from 'react';

export interface SidebarItemProps {
  guildId: string,
  itemId: string,
  label: string,
  icon: Icon,
}

export default function SidebarItem({ guildId, label, icon, itemId }: SidebarItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === `/dashboard/guild/${guildId}/${itemId}`;

  return (
    <motion.div
      className={
        `transition duration-100 px-4 py-3 items-center flex gap-3 cursor-pointer
        select-none rounded-lg
        ${isActive ? 'bg-default-500/25 hover:bg-default-500/10 text-primary-500' : 'hover:bg-gray-500/25'}`
      }
      whileTap={{ scale: 0.95 }}
      onClick={() => router.replace(`/dashboard/${guildId}/${itemId}`)}
    >
      {React.createElement(icon, { size: 20 })}
      <p className='text-black dark:text-white'>
        {label}
      </p>
    </motion.div>
  );
}