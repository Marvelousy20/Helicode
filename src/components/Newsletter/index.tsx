import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="bg-newsletter-gradient py-10 text-center rounded-[10px] relative overflow-hidden">
      <div className="absolute top-0 overflow-hidden hidden lg:block">
        <Image src="/biggest.svg" alt="img" width={1524} height={1205} />
      </div>

      <div className="absolute top-36 overflow-hidden hidden lg:block">
        <Image src="/bigger.svg" alt="img" width={1524} height={1205} />
      </div>

      <div className="absolute lg:top-72 overflow-hidden w-full hidden lg:block">
        <Image src="/big.svg" alt="img" width={1524} height={1205} />
      </div>

      <div className="absolute top-10 overflow-hidden block lg:hidden">
        <Image src="/1.png" alt="img" width={1524} height={1205} />
      </div>

      <div className="absolute top-32 overflow-hidden block lg:hidden">
        <Image src="/2.png" alt="img" width={1524} height={1205} />
      </div>

      <div className="absolute top-64 overflow-hidden block lg:hidden">
        <Image src="/3.png" alt="img" width={1524} height={1205} />
      </div>

      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center gap-2 rounded-full w-[7.1rem] text-[0.6875rem] border border-[#F9F5FF] py-1">
            <Image src="/stars.svg" alt="star" width={19} height={18} />
            Get Updated
          </div>
        </div>

        <div className="text-[3rem] leading-[62px] font-semibold mt-2">
          Join our newsletter
        </div>

        <p className="max-w-[21rem] lg:max-w-[28rem] mx-auto leading-[24px] font-normal mt-2">
          Sign up to our mailing list below and be the first to know about new
          updates. Don&apos;t worry, we hate spam too.
        </p>

        <div className="flex justify-center gap-2 mt-10">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-[#6830E1] text-white text-sm h-[44px] rounded-[8px] border border-[#8D58FF] placeholder:text-white px-6"
          />
          <button className="flex items-center text-sm border-4 border-[#D4E8FF0A] rounded-[8px] px-5 bg-[#A382FF]">
            Subscribe <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}