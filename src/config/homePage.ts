import { WithIconCardProps, Colors } from '@/components/card/withicon';
import {
  UserCheck,
  CheckSquare,
  Edit3,
  Shield,
  Terminal,
  Link,
  FileText,
  Flag,
  DollarSign,
  Zap,
  HelpCircle
} from 'react-feather';

export interface homePageConfigType {
  botInvite: string,
  guildInvite: string,
  appeal: WithIconCardProps[],
  feature: WithIconCardProps[],
}

const homePageConfig: homePageConfigType = {
  botInvite: 'https://discord.com/oauth2/authorize?client_id=970849754298863706&permissions=1186216467632&scope=bot%20applications.commands',
  guildInvite: 'https://discord.gg/fVcjCNn733',
  appeal: [
    {
      title: '無料で使用可能',
      description: '機能を開放するために料金を払う必要はありません。全ての機能を無料で使用することができ、BOTを最大限活用できます。',
      icon: DollarSign,
      color: Colors.Secondary,
    },
    {
      title: 'ユーザーの意見を大切に',
      description: 'ユーザーのフィードバックに積極的に耳を傾け、定期的に改善を行っています。サポートサーバーに参加すれば、追加してほしい機能をリクエストすることも可能です。',
      icon: Zap,
      color: Colors.Secondary,
    },
    {
      title: '充実したサポート',
      description: 'NoNICK.jsの使い方を網羅した公式ドキュメントはもちろん、サポートサーバーに参加していれば、BOTについて気軽に質問することができます！',
      icon: HelpCircle,
      color: Colors.Secondary,
    }
  ],
  feature: [
    {
      title: '入退室メッセージ',
      description: 'サーバーに新しいメンバーが入ってきたり、サーバーから抜けた時にメッセージを送信することができます。',
      icon: UserCheck,
      color: Colors.Primary,
    },
    {
      title: 'サーバー内通報',
      description: '不適切なメッセージやメンバーをサーバー内で通報できるようにし、モデレーターが迅速な対応を行いやすくできます。',
      icon: Flag,
      color: Colors.Primary,
    },
    {
      title: 'イベントログ',
      description: 'タイムアウトやBAN、メッセージ削除やVC入退室など、サーバー内の様々なアクションのログを送信できます。',
      icon: FileText,
      color: Colors.Primary,
    },
    {
      title: '埋め込み作成',
      description: '埋め込みを作成・送信することはもちろん、埋め込みにURLボタンやロール付与ボタンなどを追加することができます。',
      icon: Edit3,
      color: Colors.Primary,
    },
    {
      title: 'メッセージURL展開',
      description: 'DiscordのメッセージURLが送信された時、そのメッセージの内容（メッセージや画像）を送信することができます。',
      icon: Link,
      color: Colors.Primary,
    },
    {
      title: '自動認証レベル変更',
      description: 'Discordサーバーの認証レベルを指定した時間の間だけ変更し、サーバーのセキュリティを高めることができます。',
      icon: CheckSquare,
      color: Colors.Primary,
    },
    {
      title: '豊富なコマンド',
      description: '最大28日まで指定できるタイムアウトコマンドや、1秒単位で指定できる低速モードコマンドなど、便利なコマンドを搭載。',
      icon: Terminal,
      color: Colors.Primary,
    },
    {
      title: 'AutoMod Plus',
      description: 'Discord標準のAutoModでは設定が困難、もしくは手間のかかるワードフィルターを簡単に有効にすることができます。',
      icon:Shield,
      color: Colors.Primary,
    }
  ]
}

export default homePageConfig;