import '../globals.css';
import { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Providers from './provider';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosansjp',
});

const siteName = 'NoNICK.js';
const description = 'Discordサーバーの管理をサポートする多機能BOT';
const url = 'https://nonick-js.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  themeColor: '#007af8',
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja-JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@nonick_js',
    creator: '@nonick_mc',
  },
  alternates: {
    canonical: url,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`${notoSansJp.variable} font-notosansjp`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
