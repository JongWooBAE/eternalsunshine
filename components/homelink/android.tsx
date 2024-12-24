import React, { useRef } from "react";

const ANDROID = () => {
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

  const images = [
    { url: "/homelink/android/1.jpeg", description: "삼성인터넷에서 우측 하단 클릭" },
    { url: "/homelink/android/2.jpeg", description: "Description for Image 2" },
    { url: "/homelink/android/3.jpeg", description: "Description for Image 3" },
    { url: "/homelink/android/4.jpeg", description: "Description for Image 4" },
    { url: "/homelink/android/5.jpeg", description: "Description for Image 5" },
  ];

  return (
    <div className="container mx-auto py-4">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar gap-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-[300px] border">
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ANDROID;
