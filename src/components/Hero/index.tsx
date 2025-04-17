"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import YouTubeVideo from "./youtube-video";
import Link from "next/link";
// import Link from "next/link";
// import VideoModal from "../VideoModal";

const Hero = () => {
  const [word, setWord] = useState("Fuel Your Ambitions");

  useEffect(() => {
    const phrases = ["Master Web3 with Us", "Secure Your Dream Job"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length; // This toggles between 0 and 1
      setWord(phrases[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="max-w-[90rem] mx-auto mt-8 lg:mt-12 lg:py-[5rem] text-center px-6 py-10 lg:px-[7.2rem] rounded-[40px]">
        <div className="w-full rounded-gradient-border px-3 py-1.5 gap-2.5 text-sm flex items-center justify-center max-w-[16rem] mx-auto">
          <Image src="/star.svg" alt="star" width={14} height={14} />A School
          made for the Future
        </div>

        <h1 className="text-[2.5rem] leading-[45.96px] lg:text-[4.5rem] font-extrabold lg:leading-[82.73px] mt-4">
          {word}
        </h1>

        <p className="text-white text-opacity-80 text-lg mt-6">
          Join the thousands of talent around the world using Helicode to
          upskill and land their dream job.
        </p>

        <div className="mt-10">
          <Link href="/payment">
            <Button>
              Apply Now <MdArrowForwardIos size={14} />
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <YouTubeVideo />
        </div>
      </section>
    </>
  );
};

export default Hero;
