'use client';

import { ConsoleWarningProvider } from '@/components/warning';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <ConsoleWarningProvider>
        <NextUIProvider navigate={router.push}>
          <ThemeProvider attribute='class' defaultTheme='dark'>
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </ConsoleWarningProvider>
    </SessionProvider>
  );
}
