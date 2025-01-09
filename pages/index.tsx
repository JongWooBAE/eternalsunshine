import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 Swiper 스타일
import "swiper/css/navigation"; // 내비게이션 추가 시 필요
import "swiper/css/pagination"; // 페이지네이션 추가 시 필요
import { Navigation, Pagination } from "swiper/modules"; // Swiper 모듈
import Image from "next/image";

const Home: NextPage = () => {
  const [copied, setCopied] = useState(false);
  const video_links = [
    [
      "대본 리딩",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqCkVgXx9HLxU2qzN4mU8PHO",
    ],
    [
      "동선",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqAIy5Fq5PgtJdsmFjHd7pi4",
    ],
    [
      "A팀 런",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqCeAGvOOJk5QKq5pBu_cGIW",
    ],
    [
      "B팀 런",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqA2hRWXblL1OxzrqV2Wn9Vu",
    ],
  ];
  const bankToCopy = " 3333322876997 카카오뱅크";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bankToCopy);
      setCopied(true);

      // 2초 후에 "복사됨" 메시지를 초기화
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("텍스트 복사 실패:", error);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // 드래그 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stageImages = [
    { url: "/stage/1.png", description: "" },
    { url: "/stage/2.png", description: "" },
    { url: "/stage/3.png", description: "" },
    { url: "/stage/4.png", description: "" },
    { url: "/stage/5.png", description: "" },
    { url: "/stage/6.png", description: "" },
    { url: "/stage/7.png", description: "" },
    { url: "/stage/8.png", description: "" },
  ];

  return (
    <div className="grid gap-10 py-10">
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">스케쥴 구글 스프레드시트</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1wNkUul0e7yvD1PfCDFpF9WCxeMcaXjjnf1nDv9o1oLA/edit?usp=drivesdk"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div>

      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">사진 드라이브</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://drive.google.com/drive/folders/1LjtTXQ456yPOo9p3a46bauxvuPcyt0Cl"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div> */}
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습일지</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://drive.google.com/drive/folders/1gwjeYe9GgpwuLhYDnZs3B_pm2z_TZ58H?usp=drive_link"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div> */}
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습실</h3>
        <div className="flex flex-col gap-2 mx-4">
          <span>군자역 부근 공간연습실</span>
          <span>서울 광진구 동일로 60길 54, 북해도 지하 1층</span>
          <span>입구 비밀번호 2535</span>
          <span>와이파이: iptime5G / PW : 19930212</span>
          <span>화장실: 경비열쇠 1469 종</span>
          <span>
            모임통장:
            <span onClick={handleCopy} className="text-blue-900">
              {bankToCopy}
            </span>
            {copied && (
              <span style={{ marginLeft: "10px", color: "green" }}>
                복사됨!
              </span>
            )}
          </span>

          <a
            href="https://map.naver.com/p/entry/place/1541745597?c=15.00,0,0,0,dh"
            className="border py-2 text-center"
          >
            네이버 길찾기
          </a>
        </div>
      </div>
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습 영상</h3>

        <div className="grid gap-1">
          <span className="mx-4 flex flex-col gap-2 text-center">
            {video_links.map((video_link, j) => (
              <a
                href={video_link[1]}
                className="border py-2"
                key={video_link[0]}
              >
                {video_link[0]}
              </a>
            ))}
          </span>
        </div>
      </div>
      <div className="grid gap-4">
      <h3 className="text-xl mx-10">무대</h3>
        <div
          ref={containerRef}
          className="flex overflow-x-scroll no-scrollbar gap-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {stageImages.map((image, index) => (
            <div key={image.url} className="min-w-[85vw] border mx-4">
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
