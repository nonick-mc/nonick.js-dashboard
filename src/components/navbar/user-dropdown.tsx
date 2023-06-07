'use client';

import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { Spinner } from '@nextui-org/spinner';
import { LogOut, Server } from 'react-feather';
import { useRouter } from 'next/navigation';

export default function UserDropdown() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true) }, []);
  if (!mounted) return <Spinner size='md' />

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar
          color='default'
          className='cursor-pointer'
          size='md'
          src={session?.user.image_url}
          isBordered
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => {
          switch(key) {
            case 'guild':
              router.push('/dashboard');
              break;
            case 'logout':
              signOut({ redirect: true, callbackUrl: '/' });
              break;
          }
        }}
      >
        <DropdownItem key='profile'>
          <p className='font-extrabold'>{session?.user.global_name}</p>
          <p className='text-sm text-gray-500'>@{session?.user.username}</p>
        </DropdownItem>
        <DropdownItem
          key='guild'
          startContent={<Server size={18}/>}
          showDivider
        >
          サーバー選択
        </DropdownItem>
        <DropdownItem
          className='text-danger'
          key='logout'
          color='danger'
          startContent={<LogOut size={18}/>}
        >
          ログアウト
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}