import React from 'react';
import Providers from './provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}