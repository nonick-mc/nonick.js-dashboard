import React from 'react';
import Providers from './provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サーバー選択'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}