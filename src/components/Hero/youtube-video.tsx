"use client"; // If using the App Router

import { useState } from "react";
import Image from "next/image";

const YouTubeVideo = () => {
  const [play, setPlay] = useState(false);
  const videoId = "lys-8VHFQ1o";

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {!play ? (
        <div
          className="relative cursor-pointer aspect-video group"
          onClick={() => setPlay(true)}
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="YouTube video thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-slate-900 bg-opacity-85 group-hover:bg-opacity-100 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 md:w-10 md:h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 opacity-70"></div>
        </div>
      ) : (
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
