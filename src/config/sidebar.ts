import { SidebarItemProps } from '@/components/sidebar/sidebar-item';
import { CheckSquare, FileText, Flag, Home, Link, Share, UserCheck } from 'react-feather';

interface SidebarConfig {
  items: {
    unCategorized: Omit<SidebarItemProps, 'guildId'>[],
    feature: Omit<SidebarItemProps, 'guildId'>[],
  }
}

const sidebarConfig: SidebarConfig = {
  items: {
    unCategorized: [
      {
        label: 'ホーム',
        itemId: 'home',
        icon: Home,
      }
    ],
    feature: [
      {
        label: '入退室メッセージ',
        itemId: 'join-and-leave-message',
        icon: UserCheck,
      },
      {
        label: 'サーバー内通報',
        itemId: 'report-to-admin',
        icon: Flag,
      },
      {
        label: 'メッセージURL展開',
        itemId: 'message-expansion',
        icon: Link,
      },
      {
        label: 'イベントログ',
        itemId: 'log',
        icon: FileText,
      },
      {
        label: '自動認証レベル変更',
        itemId: 'auto-change-verificationlevel',
        icon: CheckSquare,
      },
      {
        label: '自動アナウンス公開',
        itemId: 'auto-public-announce',
        icon: Share,
      }
    ]
  }
}

export default sidebarConfig;