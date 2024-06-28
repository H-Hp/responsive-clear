import { useEffect } from "react";

function TwitterShareButton() {
  useEffect(() => {
    // Twitterのスクリプトを動的にロード
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    // コンポーネントのアンマウント時にスクリプトを削除することで、リソースをクリーンアップ
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a 
href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
className="twitter-share-button"
data-show-count="false"
data-text="ResponsiveClear : サイトのレスポンシブチェックツール"
data-url="https://responsive-clear.online">
Tweet
</a>
  );
}

export default TwitterShareButton;
