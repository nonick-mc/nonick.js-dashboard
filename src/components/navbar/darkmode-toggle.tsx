'use client';

import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/react';
import { Moon, Sun } from 'react-feather';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true) }, []);
  if (!mounted) return <Button isIconOnly isDisabled isLoading variant='light' />

  return (
    <Button
      isIconOnly
      variant='light'
      onClickCapture={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' && <Moon size={20} />}
      {theme === 'light' && <Sun size={20} />}
    </Button>
  )
}