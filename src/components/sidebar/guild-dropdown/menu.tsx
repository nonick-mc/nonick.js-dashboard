'use client';

import React from 'react';
import { DropdownMenu as NextDropdownMenu, DropdownItem } from '@nextui-org/react';
import { PlusCircle } from 'react-feather';
import homePageConfig from '@/config/homePage';

export default function DropdownMenu({ children }: { children: any }) {
  return (
    <NextDropdownMenu onAction={() => {}}>
      {children}
    </NextDropdownMenu>
  )
}