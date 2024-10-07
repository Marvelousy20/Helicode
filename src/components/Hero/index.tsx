import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-4 lg:py-[6.5rem] text-center border border-[#3B00BA] border-opacity-40 px-6 py-10 lg:px-0 bg-hero-gradient rounded-[40px]">
      <div className="max-w-[62rem] mx-auto">
        {/* <h4 className=""> */}
        <div className="w-full rounded-gradient-border px-3 py-1.5 gap-2.5 text-sm flex items-center justify-center max-w-[18rem] mx-auto">
          <Image src="/star.svg" alt="star" width={14} height={14} />A School
          made for the Future
        </div>
        {/* </h4> */}

        <h1 className="text-[2.5rem] leading-[45.96px] lg:text-[4.5rem] font-extrabold lg:leading-[82.73px] mt-4">
          Develop the Skills to Land a Job in Web3
        </h1>

        <h3 className="text-lg mt-4 opacity-80">
          Kickstart your Web3 career and build real world projects, guided by
          industry experts.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
