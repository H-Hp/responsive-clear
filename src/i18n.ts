import {getRequestConfig} from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
   //ユーザーの言語を取得
   const headersList = headers()
   const acceptLanguage = headersList.get('accept-language') || ''
   // 最も優先度の高い言語を取得
   const locale = acceptLanguage.split(',')[0].split('-')[0]
  //const locale = 'ja';
 
  return {
    locale,
    messages: (await import(`./app/i18n/${locale}.json`)).default
  };
});