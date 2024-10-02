import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { z } from "zod";

interface CourseProps {
  title: string;
  desc: string;
}

export default function CourseInfo({ title, desc }: CourseProps) {
  return (
    <div>
      <h1 className="text-3xl font-medium">Course Information</h1>

      <h1 className="font-medium mt-10">{title}</h1>
      <p className="text-[#8B8B8B] leading-[28px] mt-5">{desc}</p>

      <div className="space-y-10 mt-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src="/coupon.svg" alt="coupon" width={30} height={30} />
            <h3 className="font-normal">Apply coupon code</h3>
          </div>
          <button className="font-normal bg-[#454545] rounded-full py-0.5 px-4">
            Add
          </button>
        </div>

        <div className="flex justify-between">
          <h3 className="font-normal">Price</h3>
          <p className="font-semibold">$100</p>
        </div>

        <div className="flex justify-between">
          <h3 className="font-normal">Charges</h3>
          <p className="font-semibold">$100</p>
        </div>

        <div className="flex justify-between">
          <h3 className="font-normal">Total</h3>
          <p className="font-semibold">$100</p>
        </div>

        <div className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center">
          <button
            className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6 w-full flex justify-center items-center"
            role="button"
            type="submit"
          >
            Make Payment <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
