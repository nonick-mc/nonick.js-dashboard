import React from 'react';
import Link from 'next/link';
import { Navbar as NextUiNavbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import NoNICKjsLogo from '../logo/nonickjs-logo';
import appbarConfig from '@/config/appbar';
import DarkModeToggle from './darkmode-toggle';
import UserDropdown from './user-dropdown';

export function HomeNavbar() {
  return (
    <NextUiNavbar
      className='py-2'
      maxWidth='xl'
      position='sticky'
      isBlurred
    >
      <NavbarBrand>
        <NoNICKjsLogo width={150} height={50} />
      </NavbarBrand>
      
      <NavbarContent justify='center' >
        {appbarConfig.links.map(({ name, href }, index) => (
          <NavbarItem
            className='max-md:hidden'
            key={index}
            as={Link}
            href={href}
          >
            {name}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className='gap-2' justify='end'>
        <div className='flex items-center gap-1'>
          {appbarConfig.socials.map(({ href, icon }, index) => (
            <NavbarItem key={index} className='max-md:hidden'>
              <Button                
                isIconOnly
                as={Link}
                href={href}
                variant='light'
                target='_blank'
                rel='noreferrer noopener'
              >
                {React.createElement(icon, { size: 20 })}
              </Button>
            </NavbarItem>
          ))}
          <NavbarItem>
            <DarkModeToggle />
          </NavbarItem>
        </div>
        <NavbarItem className='max-sm:hidden'>
          <Button
            as={Link}
            href='/dashboard'
            color='primary'
            variant='flat'
          >
            ダッシュボード
          </Button>
        </NavbarItem>
      </NavbarContent>

    </NextUiNavbar>
  );
}

export function DashboardNavbar() {
  return (
    <NextUiNavbar
      className='py-2'
      maxWidth='xl'
      position='sticky'
      isBlurred
    >
      <NavbarBrand>
        <NoNICKjsLogo width={150} height={50} />
      </NavbarBrand>
      <NavbarContent className='items-center gap-2' justify='end'>

        <NavbarItem>
          <DarkModeToggle />
        </NavbarItem>

        <NavbarItem>
          <UserDropdown />
        </NavbarItem>

      </NavbarContent>
    </NextUiNavbar>
  );
}