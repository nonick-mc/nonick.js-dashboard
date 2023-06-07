import Image from 'next/image';
import Link from 'next/link';
import { HomeNavbar } from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import homePageConfig from '@/config/homePage';
import { WithIconCard } from '@/components/card/withicon';
import { ArrowRight, Book, MessageCircle, MoreHorizontal, Table } from 'react-feather';

import { Button } from '@nextui-org/button';
import { Spacer } from '@nextui-org/spacer';
import { Link as NextUiLink } from '@nextui-org/link';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';

export default function Page() {
  return (
    <main>
      <HomeNavbar />
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className='my-20 lg:my-28 flex flex-col gap-4 justify-center text-center'>
          <Image
            className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto rounded-3xl border-4 mb-4 pointer-events-none'
            src='/nonickjs.png'
            width={200}
            height={200}
            alt="nonick.js's avatar"
          />
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-black'>
            <span className='inline-block'>
              あなたの
            </span>
            <span className='inline-block'>
              サーバーを
            </span>
            <br/>
            <span className='inline-block bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text'>
              簡単・効率的
            </span>
            <span className='inline-block'>
              に管理しよう。
            </span>
          </h1>
          <p className='text-lg lg:text-xl text-gray-500'>
            <span className='inline-block'>
              Discordサーバーの管理をサポートする
            </span>
            <span className='inline-block'>
              多機能BOT
            </span>
          </p>
          <div className='flex gap-3 justify-center'>
            <Button
              as={Link}
              href={homePageConfig.botInvite}
              target='_blank'
              rel='noopener noreferrer'
              size='lg'
              color='primary'
              endIcon={<ArrowRight />}
            >
              導入する
            </Button>
            <Button
              as={Link}
              href={homePageConfig.guildInvite}
              target='_blank'
              rel='noopener noreferrer'
              size='lg'
              color='primary'
              variant='flat'
            >
              サポートサーバー
            </Button>
          </div>
        </div>

        <div>
          <div>
            <h1 className='text-center lg:text-left text-5xl font-black'>
              <span className='inline-block'>
                ユーザーに
              </span>
              <span className='inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text'>
                寄り添った
              </span>
              <span className='inline-block'>
                DiscordBOT。
              </span>
            </h1>
            <p className='text-center lg:text-left py-4 text-md lg:text-xl text-gray-500'>
              「BOTを使うのはなんだか難しそう...」と思ったことはありませんか？
              <span className='inline-block'>
                NoNICK.jsは「ユーザーに最大限寄り添う」をコンセプトに設計・開発されており、
                誰でもBOTを活用できることを目指しています。
              </span>
            </p>
          </div>
          <div className='py-4 grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch'>
            {homePageConfig.appeal.map((props, index) => (
              <WithIconCard key={index} {...props}/>
            ))}
          </div>
          <div className='flex flex-col lg:flex-row gap-2 my-4 p-4 md:p-8 items-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600'>
            <div className='flex flex-col mx-4 w-[500px] text-center'>
              <h1 className='my-5 font-extrabold text-4xl text-white'>
                ユーザーの声
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <Card className='p-4 select-none'>
                <CardHeader className='flex gap-3'>
                  <Image
                    className='rounded-lg'
                    src='/user/kanahiro.png'
                    width={40}
                    height={40}
                    alt="kanahiro's avatar"
                  />
                  <p>
                    かなひろ
                    <span className='text-gray-500'>
                      #1904
                    </span>
                  </p>
                </CardHeader>
                <CardBody >
                  ここぞという機能を取り備えていて大変ありがたいです。特に認証機能や自動アナウンス機能は大変助かっています。
                </CardBody>
                <CardFooter className='font-bold'>
                  <NextUiLink href='https://discord.gg/7qxp22R4jF' isExternal showAnchorIcon>
                    [MGMG & games]_official_server
                  </NextUiLink>
                </CardFooter>
              </Card>

              <Card className='p-4 select-none'>
                <CardHeader className='flex gap-3'>
                  <Image
                    className='rounded-lg'
                    src='/user/issyoniasobo.png'
                    width={40}
                    height={40}
                    alt="issyoniasobo's avatar"
                  />
                  <p>
                    issyoniasobo336
                    <span className='text-gray-500'>
                      #9465
                    </span>
                  </p>
                </CardHeader>
                <CardBody>
                  使いにくいところやバグを報告するとすぐに修正パッチが入る点が良いです。
                  開発者がすぐに返答してくれるところも◎。
                </CardBody>
                <CardFooter>
                  <p className='font-bold text-gray-500'>
                    サーバー非公開
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <Spacer y={28} />

        <div>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-black'>
              <span className='inline-block'>
                様々な機能を
              </span>
              <span className='inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>
                これ1つで。
              </span>
            </h1>
            <p className='py-4 text-md lg:text-xl text-gray-500'>
              <span className='inline-block'>
                NoNICK.jsは、サーバー管理をサポートする便利な機能を多数搭載しています。
              </span>
              <br className='hidden md:block'/>
              <span className='inline-block'>
                BOTを探すために時間を費やす必要はもうありません。
              </span>
            </p>
          </div>
          <div className='py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch'>
            {homePageConfig.feature.map((props, index) => (
              <WithIconCard key={index} {...props}/>
            ))}
          </div>
          <Card
            as={Link}
            href='https://docs.nonick-js.com/nonick-js/features/welcome-message/'
            target='_blank'
            rel='noopener noreferrer'
            isHoverable
            isPressable
          >
            <CardHeader className='flex justify-center gap-4'>
              <div className='flex w-11 h-11 rounded-full bg-primary-500/25 text-primary-500 fill-primary-500 items-center justify-center'>
                <MoreHorizontal />
              </div>
              <h4 className='m-0 font-extrabold text-xl'>
                全ての機能を見る
              </h4>
            </CardHeader>
          </Card>
        </div>

        <Spacer y={28} />

        <div>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-black'>
              <span className='inline-block'>
                拡張性と
              </span>
              <span className='inline-block bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>
                使いやすさ
              </span>
              <span className='inline-block'>
                を両立。
              </span>
            </h1>
            <p className='py-4 text-md lg:text-xl text-gray-500'>
              <span className='inline-block'>
                設定の幅はそのままに、
              </span>
              <span className='inline-block'>
                BOTを使ったことがない人でも簡単に使えるよう、様々な工夫を行っています。
              </span>
            </p>
          </div>
          <div className='py-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Card className='select-none p-4' isHoverable>
              <CardHeader className='flex items-center gap-4'>
                <div className={`flex w-11 h-11 rounded-full bg-orange-500/25 text-orange-500 fill-orange-500 items-center justify-center`}>
                  <Book />
                </div>
                <h4 className='m-0 font-extrabold text-xl'>
                  公式ドキュメント
                </h4>
              </CardHeader>
              <CardBody>
                <p>
                  導入方法から設定方法、各機能の使い方まで、
                  NoNICK.jsのほぼ全てをまとめた
                  <span className='font-bold'>
                    公式ドキュメント
                  </span>
                  を用意しています。ひと通り読むだけで、BOTをすぐに使えるようになります。
                </p>
              </CardBody>
              <CardFooter>
                <NextUiLink isExternal showAnchorIcon href='https://docs.nonick-js.com' className='font-bold'>
                  公式ドキュメントへアクセス
                </NextUiLink>
              </CardFooter>
            </Card>
            <Card className='select-none p-4' isHoverable>
              <CardHeader className='flex items-center gap-4'>
                <div className={`flex w-11 h-11 rounded-full bg-orange-500/25 text-orange-500 fill-orange-500 items-center justify-center`}>
                  <MessageCircle />
                </div>
                <h4 className='m-0 font-extrabold text-xl'>
                  サポートサーバー
                </h4>
              </CardHeader>
              <CardBody>
                <p>
                  公式ドキュメントを見てもわからないことがあった時には、
                  <span className='font-bold'>
                    サポートサーバー
                  </span>
                  に参加して、専用チャンネルで質問をすることができます！
                  送られた質問は開発者が丁寧に回答いたします。
                </p>
              </CardBody>
              <CardFooter>
                <NextUiLink isExternal showAnchorIcon href='https://discord.gg/fVcjCNn733' className='font-bold'>
                  サポートサーバーに参加
                </NextUiLink>
              </CardFooter>
            </Card>
            <Card className='select-none p-4' isHoverable>
              <CardHeader className='flex items-center gap-4'>
                <div className={`flex w-11 h-11 rounded-full bg-orange-500/25 text-orange-500 fill-orange-500 items-center justify-center`}>
                  <Table />
                </div>
                <h4 className='font-extrabold text-xl'>
                  ダッシュボード
                </h4>
              </CardHeader>
              <CardBody>
                <p>
                  ダッシュボードを使用すれば、ユーザーのニーズに合わせて、BOTを自分好みに設定することができます。
                  BOTをカスタマイズして、サーバーを更に便利にしよう！
                </p>
              </CardBody>
              <CardFooter>
                <NextUiLink showAnchorIcon isDisabled>ダッシュボードにアクセス (開発中)</NextUiLink>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Spacer y={28} />
      </div>
      <Footer />
    </main>
  )
}
