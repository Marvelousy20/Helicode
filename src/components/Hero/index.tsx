"use client";
import { useState, useEffect } from "react";

import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import VideoModal from "../VideoModal";

const Hero = () => {
  const [word, setWord] = useState("Fuel Your Ambitions");

  useEffect(() => {
    const phrases = ["Fuel Your Ambitions", "Build Your Dreams"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length; // This toggles between 0 and 1
      setWord(phrases[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="max-w-[90rem] max-w7xl mx-auto mt-8 lg:mt-12 lg:py-[5rem] text-center borer border-[#3B00BA] border-opacity-40 px-6 py-10 lg:px-[7.2rem] bg-hero-gradient rounded-[40px]">
        <div className="max-w-[62rem] mx-auto">
          {/* <h4 className=""> */}
          <div className="w-full rounded-gradient-border px-3 py-1.5 gap-2.5 text-sm flex items-center justify-center max-w-[16rem] mx-auto">
            <Image src="/star.svg" alt="star" width={14} height={14} />A School
            made for the Future
          </div>
          {/* </h4> */}

          <h1 className="text-[2.5rem] leading-[45.96px] lg:text-[4.5rem] font-extrabold lg:leading-[82.73px] mt-4">
            {/* Develop the Skills to Land a Job in Web3 */}
            {word}
          </h1>

          <h3 className="text-lg mt-8 opacity-80">
            Kickstart your Web3 career and build real world projects, guided by
            industry experts.
          </h3>

          <div className="mt-[2rem] flex justify-center ">
            <VideoModal url="https://youtu.be/lys-8VHFQ1o" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
