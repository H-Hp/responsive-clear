import './globals.css'

import type { Metadata } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";

export const metadata = {
  title: 'Responsive Clear',
  description: '簡単・高速なレスポンシブデザインチェックツール。複数デバイス同時プレビュー、カスタムサイズ設定可能。ウェブデザイナー・開発者向けの必須ツールでサイトの表示を最適化。無料で今すぐ使えます！',
}

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
  }
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

        {/* OGP */}
        <meta property="og:url" content="https://responsive-clear.online" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ResponsiveClear" />
        <meta property="og:site_name" content="ResponsiveClear" />
        <meta property="og:image" content="https://responsive-clear.online/Logo.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RollTall" />
        <meta name="twitter:description" content="サイトのレスポンシブチェックツール" />
        <meta name="twitter:image" content="https://responsive-clear.online/Logo.png" />

        {/* Schema.org */}
        <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
        </script>
        <GoogleAnalytics />
      </head>
      <body>
        {children}

      </body>
    </html>
  )
}
