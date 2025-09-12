import { Button } from "@/components/ui/button";

import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function BusinessPage() {
  return (
    <div className="max-w-[90rem] mx-auto mt-8 lg:mt-12 lg:py-[2rem] px-6 py-10 lg:px-[7.2rem] rounded-[40px]">
      <div className="bg-hero-gradient space-y-2 py-14 text-center">
        <h1 className="text-[2.5rem] lg:text-[4rem] font-semibold max-w-[53.2rem] mx-auto leading-[65px] lg:leading-[80px] tracking-[-2%]">
          Find and Hire Top Talent in AI and Web3
        </h1>
        <p className="p-4 text-lg leading-[32px] max-w-[49rem] mx-auto text-white text-opacity-80">
          Access a global pool of vetted professionals in AI, Web3, and emerging
          technologies, ready to join your team and deliver impact from day one.
        </p>

        <div className="!mt-12 flex justify-center">
          <a
            href="https://calendly.com/fiyinodebunmi/30min"
            className="flex items-center gap-2"
          >
            <div className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5">
              <Button className="bg-[#8D58FF]">
                Schedule a call
                <MdArrowForwardIos size={16} className="ml-1" />
              </Button>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-[5rem] lg:mt-[9rem] space-y-10 mb-10 lg:mb-20">
        <h1 className="text-[1.5rem] lg:text-[3rem] font-semibold text-center">
          Hire for any role, super fast
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2.5 border border-dashed p-6">
            <Image src="/book.svg" alt="book" width={40} height={40} />

            <h3 className="text-base lg:text-lg font-medium">
              1 week free, 0 risk
            </h3>
            <p className="text-sm lg:text-base">
              Get a 1-week free trial per hire with no card needed.
            </p>
          </div>

          <div className="space-y-2.5 border border-dashed p-6">
            <Image src="/trade-up.svg" alt="trade" width={40} height={40} />

            <h3 className="text-base lg:text-lg font-medium">
              Best talent at half the cost
            </h3>
            <p className="text-sm lg:text-base">
              Hire talent who have completed a rigorous 4+ hour vetting process,
              at an average rate of $1000/month.
            </p>
          </div>

          <div className="space-y-2.5 border border-dashed p-6">
            <Image src="/invoice.svg" alt="invoice" width={40} height={40} />

            <h3 className="text-base lg:text-lg font-medium">
              Global compliance and payroll
            </h3>
            <p className="text-sm lg:text-base">
              From payroll to employment laws and benefits, we manage the
              complexities of global hiring for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
