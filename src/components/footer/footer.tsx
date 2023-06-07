import { Link } from '@nextui-org/link';
import NoNICKjsLogo from '../logo/nonickjs-logo';

export default function Footer() {
  return (
    <div className='bg-default-100 p-5'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-2 items-center justify-center'>
        <NoNICKjsLogo width={120} height={25}/>
        <p>
          <Link isExternal href='https://docs.nonick-js.com/important/teams-of-service/'>利用規約</Link>
          &nbsp;・&nbsp;
          <Link isExternal href='https://docs.nonick-js.com/important/privacy-policy/'>プライバシーポリシー</Link>
        </p>
        <p>©&nbsp;2022-2023&nbsp;NoNICK</p>
      </div>
    </div>
  )
}