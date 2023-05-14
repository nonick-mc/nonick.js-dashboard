import { HomeAppBar } from '@/components/Appbar';
import { Button, Stack } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Page() {
  const { data: session, status } = useSession();

  return (
    <>
      <HomeAppBar/>
      <div className='px-16'>
        <h1 className='font-mplus1p font-black'>Product Page</h1>
        <Stack direction='row' spacing={2}>
          <Link href='/dashboard' passHref>
            <Button variant='contained'>
              サーバー選択
            </Button>
          </Link>
          <Link href='/dashboard/guild/1017' passHref>
            <Button variant='contained'>
              ダッシュボード
            </Button>
          </Link>
        </Stack>
      </div>
    </>
  )
}