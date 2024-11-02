import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { z } from "zod";
import { coursesInfo } from ".";
import { Single } from "@/redux/type";

// interface CourseProps {
//   title: string;
//   desc: string;
// }
interface payment {
  // course: string;
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
  paymentPlan: string;
  currencyName: string;
}

export default function CourseInfo({
  courses,
  paymentPlan,
  currencyName,
}: CoursesProps) {
  // const price =
  //   paymentPlan === "Full Payment" && currencyName === "NGN"
  //     ? courses?.data?.map((plan) => plan?.price?.NGN)
  //     : paymentPlan === "Full Payment" && currencyName === "USD"
  //     ? courses?.data?.map((plan) => plan?.price?.USD)
  //     : paymentPlan === "Monthly Payment" && currencyName === "NGN"
  //     ? courses?.data?.map((plan) => plan?.recurrentPrice?.NGN)
  //     : paymentPlan === "Monthly Payment" && currencyName === "USD"
  //     ? courses?.data?.map((plan) => plan?.recurrentPrice?.USD)
  //     : "";

  const price =
    paymentPlan === "Full Payment" && currencyName === "NGN"
      ? courses?.data[0].price?.NGN
      : paymentPlan === "Full Payment" && currencyName === "USD"
      ? courses?.data[0].price?.USD
      : paymentPlan === "Monthly Payment" && currencyName === "NGN"
      ? courses?.data[0].recurrentPrice?.NGN
      : paymentPlan === "Monthly Payment" && currencyName === "USD"
      ? courses?.data[0].recurrentPrice?.USD
      : "";

  return (
    <div>
      <h1 className="text-3xl font-medium">Course Information</h1>

      <h1 className="font-medium mt-10">{courses?.data[0].name}</h1>
      {/* <p className="text-[#8B8B8B] leading-[28px] mt-5">{`description`}</p> */}

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
            {paymentPlan === "Full Payment" && currencyName === "NGN" ? (
              <span>&#8358;</span>
            ) : paymentPlan === "Full Payment" && currencyName === "USD" ? (
              `$`
            ) : paymentPlan === "Monthly Payment" && currencyName === "NGN" ? (
              <span>&#8358;</span>
            ) : paymentPlan === "Monthly Payment" && currencyName === "USD" ? (
              `$`
            ) : (
              ""
            )}{" "}
            {price}
          </p>
        </div>

        {/* <div className="flex justify-between">
          <h3 className="font-normal">Charges</h3>
          <p className="font-semibold">$0</p>
        </div> */}

        {/* <div className="flex justify-between">
          <h3 className="font-normal">Total</h3>
          <p className="font-semibold">${100}</p>
        </div> */}

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
