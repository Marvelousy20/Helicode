"use client";

import { useEffect } from "react";
import { ChevronRight, Loader2 } from "lucide-react";

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
  courses: any;
  paymentType: string;
  currencyName: string;
  isPaystackLoading: boolean;
  isCoinsubLoading: boolean;
  onPaymentMethodSelect: (method: "paystack" | "coinsub") => void;
  isValid: boolean;
}

export default function CourseInfo({
  courses,
  paymentType,
  currencyName,
  isCoinsubLoading,
  isPaystackLoading,
  onPaymentMethodSelect,
  isValid,
}: CoursesProps) {
  // Determine price based on selected payment type and currency
  const getCurrencySymbol = () => (currencyName === "NGN" ? "₦" : "$");

  const price = courses?.data?.[0]
    ? paymentType === "fixed"
      ? courses.data[0].price?.[currencyName]
      : courses.data[0].recurrentPrice?.[currencyName]
    : "";

  // const price =
  //   paymentType === "fixed" && currencyName === "NGN"
  //     ? courses?.data[0]?.price?.NGN
  //     : paymentType === "fixed" && currencyName === "USD"
  //     ? courses?.data[0]?.price?.USD
  //     : paymentType === "recurrent" && currencyName === "NGN"
  //     ? courses?.data[0]?.recurrentPrice?.NGN
  //     : paymentType === "recurrent" && currencyName === "USD"
  //     ? courses?.data[0]?.recurrentPrice?.USD
  //     : "";

  useEffect(() => {
    if (typeof window !== "undefined" && !window.fbq) {
      window.fbq = function (...args: any[]) {
        if (window.fbq.callMethod) {
          window.fbq.callMethod(...args);
        } else {
          window.fbq.queue = window.fbq.queue || [];
          window.fbq.queue.push([...args]);
        }
      };
      window.fbq.queue = [];
      window.fbq.version = "2.0";
      window.fbq.loaded = true;
    }
  }, []);

  // Track payment method selection
  const handlePaymentSelection = (method: "paystack" | "coinsub") => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        paymentMethod: method,
      });
    }

    onPaymentMethodSelect(method);
  };

  // Render payment button with loading state
  const renderPaymentButton = (
    method: "paystack" | "coinsub",
    label: string,
    isLoading: boolean
  ) => (
    <div className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center">
      <button
        className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] hover:bg-black rounded-md py-3 px-6 w-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        role="button"
        type="submit"
        disabled={isPaystackLoading || isCoinsubLoading || !isValid}
        onClick={() => handlePaymentSelection(method)}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <p className="flex items-center gap-2">
            {label} <ChevronRight size={20} />
          </p>
        )}
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-medium">Course Information</h1>
      {courses?.data?.[0] && (
        <>
          <h1 className="font-medium mt-10">{courses.data[0].name}</h1>

          <div className="space-y-10 mt-5">
            <div className="flex justify-between">
              <h3 className="font-normal">Price</h3>
              <p className="font-semibold">
                {getCurrencySymbol()}
                {price}
              </p>
            </div>

            <div>
              {renderPaymentButton(
                "paystack",
                "Make Payment",
                isPaystackLoading
              )}

              <div className="text-center my-6">OR</div>

              {renderPaymentButton(
                "coinsub",
                "Pay with Crypto",
                isCoinsubLoading
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
