import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import Logo from '../logo';
import Link from 'next/link';
import AppBarConfig from '@/config/appbar';
import ToggleDarkMode from '../toggleDarkMode';
import React from 'react';

export default function Appbar() {
  const isExternalLink = (href: string) => !href.startsWith('/');

  return (
    <Navbar className='py-2' maxWidth='xl' position='sticky' isBlurred>
      <NavbarBrand>
        <Logo width={150} height={50}/>
      </NavbarBrand>
      <NavbarContent justify='center'>
        {AppBarConfig.links.map(({ name, href }, index) => (
          <NavbarItem
            className='hidden md:flex justify-start'
            as={Link}
            href={href}
            key={index}
            target={isExternalLink(href) ? '_blank' : '_self'}
            rel={isExternalLink(href) ? 'noreferrer noopener' : ''}
          >
            {name}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className='gap-2' justify='end'>
        <div className='flex items-center gap-1'>
          {AppBarConfig.linkButtons.map(({ href, icon }, index) => (
            <NavbarItem key={index}>
              <Button
                className='max-md:hidden'
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
            <ToggleDarkMode />
          </NavbarItem>
        </div>
        <NavbarItem className='max-md:hidden'>
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
    </Navbar>
  )
}