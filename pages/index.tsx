import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [noteOpen, setNoteOpen] = useState([false, false, false, false]);

  const [videoOpen, setVideoOpen] = useState([false, false, false, false]);

  const videos = [
    "동선",
  ];
  const video_links = [
    [
      [
        "24.12.21(토)",
        "https://www.youtube.com",
      ],
    ],
  ];
  const changeSO = (i: number, type: string) => {
    if (type == "note") {
      let newSO = noteOpen;
      newSO[i] = !newSO[i];
      setNoteOpen((prevState) => {
        return { ...prevState, newSO };
      });
    } else {
      // type == "video"
      let newSO = videoOpen;
      newSO[i] = !newSO[i];
      setVideoOpen((prevState) => {
        return { ...prevState, newSO };
      });
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
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">길찾기</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://map.naver.com/p/search/%EC%98%A8%EC%97%90%EC%96%B4%EC%97%B0%EC%8A%B5%EC%8B%A4/place/1604697097?c=15.00,0,0,0,dh"
            className="border py-2"
          >
            길찾기
          </a>
        </div>
      </div> */}

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
        {videos.map((video, i) => (
          <div className="grid mx-4 gap-1" key={i}>
            <span
              onClick={() => changeSO(i, "video")}
              className="flex gap-1 items-center"
            >
              {videoOpen[i] ? (
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

              <span>{video}</span>
            </span>
            {videoOpen[i] ? (
              <span className="mx-4 flex flex-col gap-2 text-center">
                {video_links[i].map((video_link, j) => (
                  <a href={video_link[1]} className="border py-2" key={j}>
                    {video_link[0]}
                  </a>
                ))}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">케스팅 스케쥴(임시 이미지)</h3>
        <Image
          src="/casting.png"
          width={953}
          height={1132}
          alt="포스터"
          className="w-[98%]"
        />
      </div> */}
    </div>
  );
};

export default Home;
