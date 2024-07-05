import './globals.css'

import type { Metadata } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";

import { headers } from 'next/headers';

export const metadata = {
  title: 'Responsive Clear',
  description: '簡単・高速なレスポンシブデザインチェックツール。複数デバイス同時プレビュー、カスタムサイズ設定可能。ウェブデザイナー・開発者向けの必須ツールでサイトの表示を最適化。無料で今すぐ使えます！',
  alternates: {
    canonical: 'https://responsive-clear.online',
  },
  icons: {
    icon: '/favicon.svg',
    // Apple Touch Icon
    apple: '/favicon256x256.png',
  },
  openGraph: {
    title: 'ResponsiveClear',
    description: 'サイトのレスポンシブチェックツール',
    url: 'https://responsive-clear.online',
    siteName: 'ResponsiveClear',
    images: [
      {
        url: 'https://responsive-clear.online/Logo.png',
        width: 240,
        height: 240,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@RollTall',
    creator: '@YourTwitterHandle',
    title: 'ResponsiveClear',
    description: 'サイトのレスポンシブチェックツール',
    images: ['https://responsive-clear.online/Logo.png'],
  },
}

//動的レンダリング矯正/vercelとnextの問題でxのシェアカードを表示させるため
export const dynamic = 'force-dynamic'


const faqSchema ={
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "レスポンシブチェックツール",
  "description": "Webサイトのレスポンシブ対応をチェックするツール",
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "creator": {
    "@type": "Person",
    "name": "RollTall"
  },
  "author": {
    "@type": "Person",
    "name": "RollTall"
  }
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  let fullUrl;
  // サーバーサイドレンダリング時
  if (typeof window === 'undefined') {
    const headersList = headers();
    const domain = headersList.get('host') || '';
    fullUrl = `${headersList.get('x-forwarded-proto')}://${domain}${headersList.get('x-invoke-path')}`;
    //return <div>完全なURL（サーバーサイド）: {fullUrl}</div>;
  }

  // クライアントサイドレンダリング時
  //return <div>完全なURL（クライアントサイド）: {fullUrl}</div>;

  return (
    <html lang="jp">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Schema.org */}
        <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
        </script>
        
        <GoogleAnalytics />
      </head>
      <body>
      {fullUrl}
        {children}

      </body>
    </html>
  )
}
