import { GitHub, Icon, Twitter } from 'react-feather';

interface AppbarConfig {
  links: Link[],
  socials: LinkButton[],
}

interface Link {
  name: string,
  href: string,
}

interface LinkButton {
  label: string,
  href: string,
  icon: Icon,
}

const appbarConfig: AppbarConfig = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: 'https://nonick-js.com' }
  ],
  socials: [
    { label: 'Twitter', href: 'https://twitter.com/nonick_js', icon: Twitter },
    { label: 'GitHub', href: 'https://github.com/nonick-js', icon: GitHub },
  ]
}

export default appbarConfig;