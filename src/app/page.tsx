'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  /*
  //documentを使う関数を入れる
  if (typeof window === 'object') {
    //documentを使う関数を入れる
    const button = document.getElementById('change-btn') as HTMLButtonElement;

    button.addEventListener('click', function() {
      const inputElement = document.getElementById('url-input') as HTMLInputElement;
      const input_url = inputElement.value;
      console.log(input_url); // 入力された値が出力されます
    
      const devices = ['iphone1', 'iphone2', 'ipad1', 'pc1'];
      
      devices.forEach(device => {
        const iframe = document.getElementById(`${device}_iframe`) as HTMLIFrameElement;
        iframe.src = input_url;
      });
    });
}
    */

const [url, setUrl] = useState<string>('');

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUrl(event.target.value);
};

const handleButtonClick = () => {  
  const devices = ['iphone1', 'iphone2', 'ipad1', 'pc1'];
  devices.forEach(device => {
    const iframe = document.getElementById(`${device}_iframe`) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = url;
    }
  });
};


  return (
    
  

    <div className="flex flex-col justify-between h-screen mx-auto max-w-full">


   

  <header
    className="flex items-center justify-center text-gray-200 text-2xl my-5"
    style={{ color: "black", margin: 0 }}
  >
    <div className="text-4xl ml-3 mr-3">ResponsiveClear</div>
    <div className="flex-grow px-4 p-5">
      <input
        type="text"
        value={url} 
        onChange={handleInputChange} 
        id="url-input"
        className="flex-grow  w-full px-4 border-2 border-gray-600"
        defaultValue="http://abehiroshi.la.coocan.jp/"
        placeholder="https://〜"
      />
      <button
        id="change-btn"
        onClick={handleButtonClick}
        className="inline-flex w-full gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-600 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-zinc-800 active:text-zinc-100/70 my-2 uppercase active:scale-[98%] transition-transform duration-100"
        style={{ backgroundColor: "#635BFF", color: "white" }}
      >
        レスポンシブチェック
      </button>
      {/*
  http://abehiroshi.la.coocan.jp/
  https://weathernews.jp/onebox/tenki/tokyo/13212/
  */}
    </div>
  </header>
  <a
    className="fixed left-4 top-4 md:right-14 md:top-6 text-xl text-gray"
    href="https://github.com/H-Hp/responsive-clear"
  >
    <button className="fixed right-12 top-4 md:right-12 md:top-6 text-xl github-button">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
      </svg>
    </button>
  </a>
  <button className="fixed right-4 top-4 md:right-6 md:top-6 text-xl text-gray animate-pulse-once info-button">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
      <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
    </svg>
  </button>
  <div className="flex w-full flex-grow overflow-hidden relative">
    <div id="chat" className="flex flex-col w-full lg:w-5/5 mr-4 mx-5 lg:mx-0">
      <div
        id="json-zu"
        className="border-2 border-gray-600 p-6 rounded-lg overflow-y-scroll flex-grow flex flex-col justify-end "
      >
        <div style={{ width: 1500 }}>
          <div className="smartphone-container">
            <div className="smartphone-item">
              <h3>iphone6/7/8/SE2nd/SE3nd</h3>
              <p>cssピクセル : 375x667</p>
              <p>
                検証モードでforeignObjectを選択し、計算済みタブから375px :
                667pxの比率になっていると確認できます。
              </p>
              1.781
              <svg
                width={150}
                height="267.15"
                viewBox="0 0 435 887"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* iPhoneの外枠 */}
                <rect
                  x={0}
                  y={0}
                  width={435}
                  height={887}
                  rx={60}
                  ry={60}
                  fill="#1c1c1e"
                />
                {/* 画面部分 */}
                <rect
                  x={20}
                  y={20}
                  width={395}
                  height={847}
                  rx={40}
                  ry={40}
                  fill="#000"
                />
                {/* ノッチ */}
                <path
                  d="M 158 0 
              L 277 0 
              Q 297 0 297 20 
              L 297 35 
              Q 297 55 277 55 
              L 158 55 
              Q 138 55 138 35 
              L 138 20 
              Q 138 0 158 0 
              Z"
                  fill="#1c1c1e"
                />
                {/* iframeを埋め込むための foreign object */}
                <foreignObject x={30} y={70} width={375} height={667}>
                  <iframe
                    src={url}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    id="iphone1_iframe"
                  ></iframe>
                </foreignObject>
              </svg>
            </div>
            <div className="smartphone-item">
              <h3>
                iphone12/iPhone12Pro/iPhone13/iPhone13Pro/iPhone14/iPhone14Pro
              </h3>
              <p>cssピクセル : 390x844</p>
              1:2.164
              <svg
                width={150}
                height="324.6"
                viewBox="0 0 430 932"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* iPhoneの外枠 */}
                <rect
                  x={0}
                  y={0}
                  width={430}
                  height={932}
                  rx={55}
                  ry={55}
                  fill="#1c1c1e"
                />
                {/* 画面部分 */}
                <rect
                  x={15}
                  y={15}
                  width={400}
                  height={902}
                  rx={45}
                  ry={45}
                  fill="#000"
                />
                {/* ノッチ */}
                <path
                  d="M 145 0 
               L 285 0 
               Q 305 0 305 20 
               L 305 35 
               Q 305 55 285 55 
               L 145 55 
               Q 125 55 125 35 
               L 125 20 
               Q 125 0 145 0 
               Z"
                  fill="#1c1c1e"
                />
                {/* iframeを埋め込むための foreign object */}
                <foreignObject x={20} y={55} width={390} height={844}>
                  <iframe
                    src={url}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    id="iphone2_iframe"
                  ></iframe>
                </foreignObject>
              </svg>
            </div>
            <div className="smartphone-item">コンテンツ3</div>
          </div>
          {/*
    <svg width="375" height="667" viewBox="0 0 375 667" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="375" height="667" rx="40" ry="40" fill="#1c1c1e" />
  <rect x="10" y="10" width="355" height="647" rx="30" ry="30" fill="#000" />
  
  <path d="M 158 0 
           L 217 0 
           Q 227 0 227 10 
           L 227 25 
           Q 227 35 217 35 
           L 158 35 
           Q 148 35 148 25 
           L 148 10 
           Q 148 0 158 0 
           Z" fill="#1c1c1e" />
  
  <circle cx="187.5" cy="640" r="20" fill="#2c2c2e" />
  
  <foreignObject x="10" y="35" width="355" height="592">
    <iframe xmlns="http://www.w3.org/1999/xhtml"
            src="https://weathernews.jp/onebox/tenki/tokyo/13212"
            style="width:100%; height:100%; border: none;">
    </iframe>
  </foreignObject>
</svg>
*/}
          {/*
  <svg width="280" height="500" viewBox="0 0 375 812" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="375" height="812" rx="40" ry="40" fill="#1c1c1e" />
      
      <rect x="12" y="12" width="351" height="788" rx="30" ry="30" fill="#000" />
      
      <path d="M 158 0 
               L 217 0 
               Q 227 0 227 10 
               L 227 25 
               Q 227 35 217 35 
               L 158 35 
               Q 148 35 148 25 
               L 148 10 
               Q 148 0 158 0 
               Z" fill="#1c1c1e" />
      
      <foreignObject x="12" y="12" width="351" height="788">
        <iframe xmlns="http://www.w3.org/1999/xhtml"
                src="https://weathernews.jp/onebox/tenki/tokyo/13212"
                style="width:100%; height:100%; border: none;">
        </iframe>
      </foreignObject>
    </svg>
*/}
          {/*
  <div class="iphone7-wrap">
      <iframe src="https://weathernews.jp/onebox/tenki/tokyo/13212/" frameborder="0"></iframe>
    </div>

 

    <svg width="500" height="800" viewBox="0 0 200 300">
      <iframe src="https://weathernews.jp/onebox/tenki/tokyo/13212/" frameborder="0" ></iframe>
      <image href="phone_035.svg" x="0" y="0" width="200" height="300" />
    </svg>
 */}
          {/*
  <img src="iPhone.png" alt="" id="iphone7_img">
  <iframe frameborder="0" id="iphone7_iframe" src="https://weathernews.jp/onebox/tenki/tokyo/13212/"></iframe>
  */}
          {/*タブレッド/iPad*/}
          <h3>iPad pro12.9インチモデル</h3>
          <p>cssピクセル : 1024 × 1366</p>
          <svg
            width={300}
            height={417}
            viewBox="0 0 1124 1566"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* iPadの外枠 */}
            <rect
              x={0}
              y={0}
              width={1124}
              height={1566}
              rx={60}
              ry={60}
              fill="#1c1c1e"
            />
            {/* 画面部分 */}
            <rect
              x={20}
              y={20}
              width={1084}
              height={1526}
              rx={40}
              ry={40}
              fill="#000"
            />
            {/* カメラ */}
            <circle cx={562} cy={40} r={10} fill="#3c3d3d" />
            {/* iframeを埋め込むための foreign object */}
            <foreignObject x={50} y={100} width={1024} height={1366}>
              <iframe
                src={url}
                style={{ width: "100%", height: "100%", border: "none" }}
                id="ipad1_iframe"
              ></iframe>
            </foreignObject>
          </svg>
          {/*
<svg width="330" height="600" viewBox="0 0 768 1024" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="768" height="1024" rx="50" ry="50" fill="#b1b3b6" />
    
    <rect x="20" y="20" width="728" height="984" rx="10" ry="10" fill="#000" />
    
    <circle cx="384" cy="1004" r="10" fill="#e2e3e4" />
    
    <circle cx="384" cy="20" r="5" fill="#3c3d3d" />
    
    <foreignObject x="20" y="20" width="728" height="984">
<iframe xmlns="http://www.w3.org/1999/xhtml"
        src="https://weathernews.jp/onebox/tenki/tokyo/13212"
        style="width:100%; height:100%; border: none;">
</iframe>
    </foreignObject>
  </svg>
*/}
          {/*PC*/}
          <h3>PC</h3>
          <p>cssピクセル : 1024 × 1366</p>
          <svg
            width={900}
            height={600}
            viewBox="0 0 2100 1400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* モニターの外枠 */}
            <rect
              x={50}
              y={50}
              width={2000}
              height={1180}
              rx={10}
              ry={10}
              fill="#333"
            />
            {/* 画面部分 */}
            <rect x={70} y={70} width={1960} height={1100} fill="#000" />
            {/* スタンド */}
            <path
              d="M 900 1230 L 1200 1230 L 1300 1350 L 800 1350 Z"
              fill="#333"
            />
            {/* iframeを埋め込むための foreign object */}
            <foreignObject x={90} y={80} width={1920} height={1080}>
              <iframe
                src={url}
                style={{ width: "100%", height: "100%", border: "none" }}
                id="pc1_iframe"
              ></iframe>
            </foreignObject>
          </svg>
          {/*
  <svg width="600" height="400" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="1000" height="600" rx="20" ry="20" fill="#888" />
    
    <rect x="120" y="70" width="960" height="560" fill="#000" />
    
    <rect x="50" y="650" width="1100" height="100" rx="10" ry="10" fill="#999" />
    
    <rect x="500" y="690" width="200" height="40" rx="5" ry="5" fill="#777" />
    
    <foreignObject x="120" y="70" width="960" height="560">
<iframe xmlns="http://www.w3.org/1999/xhtml"
        src="https://weathernews.jp/onebox/tenki/tokyo/13212"
        style="width:100%; height:100%; border: none;">
</iframe>
    </foreignObject>
  </svg>
*/}
          <p>
            デバイスを増やしすぎると画面が重くなるため、シェア率の高いデバイスのみになります
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}
