"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useEffect, useCallback, useRef} from "react";
import TwitterShareButton from "./components/TwitterShareButton";
import {useTranslations} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const [url, setUrl] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setIsValid(validateURL(event.target.value));
  };

  const handleButtonClick = () => {
    
    const devices = ["iphone1", "iphone2", "ipad1", "pc1"];
    devices.forEach((device) => {
      const iframe = document.getElementById(
        `${device}_iframe`,
      ) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.src = url;
      }
      
    });
  };


  //URLのバリデーション
  //const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(true);
  const validateURL = (input: string) => {
    try {
      new URL(input);
      return true;
    } catch (e) {
      return false;
    }
  };


  //モーダルの開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  // モーダルの外側をクリックしたときの処理
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    },
    [closeModal],
  );
  //モーダル外をクリックしたときにモーダルを閉じる
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    // クリーンアップ関数
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]);

  //
  const t = useTranslations('Index');
  const about = useTranslations('about');
  //return <h1>{t('title')}</h1>;

  return (
    <div className="flex flex-col justify-between h-screen mx-auto max-w-full">
      <header
        className="flex items-center justify-center text-gray-200 text-2xl my-5"
        style={{ color: "black", margin: 0 }}
      >
        <TwitterShareButton />

        <div className="text-4xl ml-3 mr-3">{t('title')}</div>
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
            {t('check-btn')}
          </button>
          {/*
  http://abehiroshi.la.coocan.jp/
  https://weathernews.jp/onebox/tenki/tokyo/13212/
  */}
        </div>
        {!isValid && url !== '' && <p style={{color: 'red'}}>無効なURLです</p>}


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
      <button
        onClick={openModal}
        className="fixed right-4 top-4 md:right-6 md:top-6 text-xl text-gray animate-pulse-once info-button"
      >
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
        <div
          id="chat"
          className="flex flex-col w-full lg:w-5/5 mr-4 mx-5 lg:mx-0"
        >
          <div
            id="json-zu"
            className="border-2 border-gray-600 p-6 rounded-lg overflow-y-scroll flex-grow flex flex-col justify-end "
          >
            <div style={{ width: 1500 }}>
              <div className="smartphone-container">
              <h3>{t('device-title1')}</h3>
                <div className="smartphone-item">
                  <h3>{t('mobile1-info1')}</h3>
                  <p>{t('mobile1-info2')}</p>
                  <p>{t('mobile1-info3')}</p>

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
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        id="iphone1_iframe"
                      ></iframe>
                    </foreignObject>
                  </svg>
                </div>
                <div className="smartphone-item">
                <h3>{t('mobile2-info1')}</h3>
                <p>{t('mobile2-info2')}</p>
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
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        id="iphone2_iframe"
                      ></iframe>
                    </foreignObject>
                  </svg>
                </div>
              </div>

              {/*タブレッド/iPad*/}
              <h3>{t('device-title2')}</h3>
              <h3>{t('tablet1-info1')}</h3>
              <p>{t('tablet1-info2')}</p>
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

              {/*PC*/}
              <h3>{t('device-title3')}</h3>
              <p>{t('pc1-info1')}</p>
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
              <p>
                {t('supplement-info1')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*<button id="openModal">モーダルを開く</button>*/}
      {isModalOpen && (
        <div
          id="myModal"
          className="modal"
          aria-hidden="false"
          role="dialog"
          aria-labelledby="about"
        >
          <div className="modal-content">
            <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <br />
                <br />
                <h2 className="text-3xl font-bold text-center mb-8 mt-8">
                {about('title1')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <p className="text-gray-600">
                    {about('title1-info')}
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <h2 className="text-3xl font-bold text-center mb-8 mt-8">
                {about('title2')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {about('title2-sub1')}
                    </h3>
                    <p className="text-gray-600">
                    {about('title2-sub1-info')}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {about('title2-sub2')}
                    </h3>
                    <p className="text-gray-600">
                    {about('title2-sub2-info')}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {about('title2-sub3')}
                    </h3>
                    <p className="text-gray-600">
                    {about('title2-sub3-info')}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {about('title2-sub4')}
                    </h3>
                    <p className="text-gray-600">
                    {about('title2-sub4-info')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <button
              id="reserve-btn"
              onClick={closeModal}
              className="inline-flex w-full gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-600 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-zinc-800 active:text-zinc-100/70 my-2 uppercase active:scale-[98%] transition-transform duration-100"
              style={{ backgroundColor: "#635BFF", color: "white" }}
            >
              {about('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
