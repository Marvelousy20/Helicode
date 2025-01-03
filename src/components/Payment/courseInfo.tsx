import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { z } from "zod";
import { coursesInfo } from ".";
import { Single } from "@/redux/type";
import { FaSpinner } from "react-icons/fa";
import CoinsubSubcription from "./coinsubPayment";

interface payment {
  paymentPlan: string;
}

interface Course {
  id: string;
  price: {
    USD: string;
    NGN: string;
  };
  recurrentPrice: {
    USD: string;
    NGN: string;
    frequency: number;
  };
  name: string;
  duration: string;
  startDate: string;
  cohort: string;
}

interface CoursesProps {
  courses: Single | undefined;
  paymentType: string;
  currencyName: string;
  isLoading: boolean;
}

export default function CourseInfo({
  courses,
  paymentType,
  currencyName,
  isLoading,
}: CoursesProps) {
  const price =
    paymentType === "fixed" && currencyName === "NGN"
      ? courses?.data[0]?.price?.NGN
      : paymentType === "fixed" && currencyName === "USD"
      ? courses?.data[0]?.price?.USD
      : paymentType === "recurrent" && currencyName === "NGN"
      ? courses?.data[0]?.recurrentPrice?.NGN
      : paymentType === "recurrent" && currencyName === "USD"
      ? courses?.data[0]?.recurrentPrice?.USD
      : "";

  console.log(courses);

  return (
    <div>
      <h1 className="text-3xl font-medium">Course Information</h1>
      <h1 className="font-medium mt-10">{courses?.data[0]?.name}</h1>

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
          <p className="font-semibold">
            {paymentType === "fixed" && currencyName === "NGN" ? (
              <span>&#8358;</span>
            ) : paymentType === "fixed" && currencyName === "USD" ? (
              `$`
            ) : paymentType === "recurrent" && currencyName === "NGN" ? (
              <span>&#8358;</span>
            ) : paymentType === "recurrent" && currencyName === "USD" ? (
              `$`
            ) : (
              ""
            )}
            {price}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center">
          <button
            className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] hover:bg-black rounded-md py-3 px-6 w-full flex justify-center items-center"
            role="button"
            type="submit"
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <p className="flex items-center gap-2">
                Make Payment <ChevronRight size={20} />
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
