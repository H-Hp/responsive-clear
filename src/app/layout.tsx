import './globals.css'

import type { Metadata } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";

export const metadata = {
  title: 'Responsive Clear',
  description: '簡単・高速なレスポンシブデザインチェックツール。複数デバイス同時プレビュー、カスタムサイズ設定可能。ウェブデザイナー・開発者向けの必須ツールでサイトの表示を最適化。無料で今すぐ使えます！',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="jp">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleAnalytics />
      </head>
      <body>
        {children}

      </body>
    </html>
  )
}
