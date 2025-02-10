import NewsLetter from "@/components/Newsletter";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="lg:pt-24 pt-10 lg:px-24 md:px-8 px-4">
      <div className="text-center flex flex-col justify-center items-center h-full">
        <h1 className=" text-[4.5rem] lg:text-[5rem] leading-[5rem] font-semibold">
          About Helicode
        </h1>
        <p className="mt-[0.65rem] lg: text-lg">
          Upgrade your skills and join the next wave of Global Web3 talent from
          Africa
        </p>
        <Link
          href="/"
          className="mt-8 border-4border-[#8D58FF4D] bg-[#8D58FF4D] rounded-xl p-[6px]"
        >
          <div className="flex items-center border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6">
            Work with Us <ChevronRight size={18} />
          </div>
        </Link>
      </div>
      {/* Our Vision & Our Mission */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-7 pt-[3.95rem] lg:pt-36 pb-[2.5rem] lg:pb-[7.5rem] ">
        {/* left */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-medium text-2xl border-b border-[#383838] pb-4 text-left">
            Our Vision
          </h1>
          <p className="pt-[3.15rem] max-w[37rem] font-light">
            Helicode envisions a future where African web3 professionals lead
            global technological innovation. One where our academy is the number
            one source for accessing quality and affordable talent for global
            industries. This surge of homegrown tech expertise will transform
            Africa&rsquo;s web3 landscape, fostering economic growth and
            enhancing quality of life across the continent. Ultimately, Helicode
            dreams of a world where collaboration between African tech talent
            and global industry leaders becomes the norm, sparking innovations
            that benefit humanity as a whole.
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-medium text-2xl border-b border-[#383838] pb-4 text-left">
            Our Mission
          </h1>
          <p className="pt[1.7rem] pt-[3.15rem] max-w[37rem] font-light">
            At Helicode, we aim to empower African talent with cutting-edge web3
            skills to enable access to global job opportunities. We are
            committed towards providing top-notch, affordable education
            that&rsquo;s accessible to all, regardless of background or
            location. Our goal is to nurture a new generation of African tech
            innovators, equipping them with the tools needed to compete on the
            world stage and shape the future of blockchain technology ultimately
            bridging the global tech divide.
          </p>
        </div>
      </div>
      <div className="pb-[4.63rem]">
        <NewsLetter />
      </div>
    </section>
  );
}
