import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

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

      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습 일지</h3>
        {notes.map((note, i) => (
          <div className="grid mx-4 gap-1" key={i}>
            <span
              onClick={() => changeSO(i, "note")}
              className="flex gap-1 items-center"
            >
              {noteOpen[i] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}

              <span>{note}</span>
            </span>
            {noteOpen[i] ? (
              <span className="mx-4 flex flex-col gap-2 text-center">
                {note_links[i].map((note_link, j) => (
                  <a href={note_link[1]} className="border py-2" key={j}>
                    {note_link[0]}
                  </a>
                ))}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div> */}

      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습 영상</h3>

        <div className="grid gap-1">
          <span className="mx-4 flex flex-col gap-2 text-center">
            {video_links.map((video_link, j) => (
              <a href={video_link[1]} className="border py-2" key={j}>
                {video_link[0]}
              </a>
            ))}
          </span>
        </div>
      </div>
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">무대 스케치</h3>
        <Image
          src="/stage1.jpeg"
          width={953}
          height={1132}
          alt="포스터"
          className="w-[98%]"
        />
        <Image
          src="/stage2.jpeg"
          width={953}
          height={1132}
          alt="포스터"
          className="w-[98%]"
        />
      </div>
    </div>
  );
};

export default Home;
