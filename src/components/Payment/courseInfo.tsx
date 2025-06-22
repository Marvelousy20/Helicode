"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Loader2 } from "lucide-react";

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
  isBlockradarLoading: boolean;
  onGatewaySelect: (
    gateway: "paystack" | "lemon-squeezy" | "coinsub" | "blockradar"
  ) => void;
  isValid: boolean;
  selectedGateway: string;
}

export default function CourseInfo({
  courses,
  paymentType,
  currencyName,
  isCoinsubLoading,
  isPaystackLoading,
  isBlockradarLoading,
  onGatewaySelect,
  isValid,
  selectedGateway,
}: CoursesProps) {
  const [showFiatOptions, setShowFiatOptions] = useState(false);
  const [showCryptoOptions, setShowCryptoOptions] = useState(false);

  // Determine price based on selected payment type and currency
  const getCurrencySymbol = () => (currencyName === "NGN" ? "₦" : "$");

  const price = courses?.data?.[0]
    ? paymentType === "fixed"
      ? courses.data[0].price?.[currencyName]
      : courses.data[0].recurrentPrice?.[currencyName]
    : "";

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

  // Track gateway selection
  const handleGatewaySelection = (
    gateway: "paystack" | "lemon-squeezy" | "coinsub" | "blockradar"
  ) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        paymentGateway: gateway,
      });

      onGatewaySelect(gateway);
      setShowFiatOptions(false);
      setShowCryptoOptions(false);
    }
  };

  // Loading state based on selected gateway
  const getLoadingState = () => {
    switch (selectedGateway) {
      case "paystack":
      case "lemon-squeezy":
        return isPaystackLoading;
      case "coinsub":
        return isCoinsubLoading;
      case "blockradar":
        return isBlockradarLoading;
      default:
        return false;
    }
  };

  const getButtonText = () => {
    switch (selectedGateway) {
      case "paystack":
        return "Pay with Paystack";
      case "lemon-squeezy":
        return "Pay with Lemon Squeezy";
      case "coinsub":
        return "Pay with Coinsub";
      case "blockradar":
        return "Pay with Blockradar";
      default:
        return "Select Payment Method";
    }
  };

  const isLoading = getLoadingState();
  const isAnyLoading =
    isPaystackLoading || isCoinsubLoading || isBlockradarLoading;

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

            <div className="space-y-4">
              {/* FIAT Payment Section */}
              <div className="space-y-2">
                <div
                  className="flex items-center justify-between p-4 border border-[#454545] rounded-lg cursor-pointer hover:bg-[#1a1a2e] transition-colors"
                  onClick={() => setShowFiatOptions(!showFiatOptions)}
                >
                  <span className="text-white font-medium">Pay with FIAT</span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      showFiatOptions ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>

                {showFiatOptions && (
                  <div className="ml-4 space-y-2">
                    <button
                      type="button"
                      className="w-full text-left p-3 border border-[#353535] rounded-md hover:bg-[#2a2a3e] transition-colors text-white"
                      onClick={() => handleGatewaySelection("paystack")}
                    >
                      Pay with Paystack
                    </button>
                    <button
                      type="button"
                      className="w-full text-left p-3 border border-[#353535] rounded-md hover:bg-[#2a2a3e] transition-colors text-white"
                      onClick={() => handleGatewaySelection("lemon-squeezy")}
                    >
                      Pay with Lemon Squeezy
                    </button>
                  </div>
                )}
              </div>

              {/* Crypto Payment Section */}
              <div className="space-y-2">
                <div
                  className="flex items-center justify-between p-4 border border-[#454545] rounded-lg cursor-pointer hover:bg-[#1a1a2e] transition-colors"
                  onClick={() => setShowCryptoOptions(!showCryptoOptions)}
                >
                  <span className="text-white font-medium">
                    Pay with Crypto
                  </span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      showCryptoOptions ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>

                {showCryptoOptions && (
                  <div className="ml-4 space-y-2">
                    <button
                      type="button"
                      className="w-full text-left p-3 border border-[#353535] rounded-md hover:bg-[#2a2a3e] transition-colors text-white"
                      onClick={() => handleGatewaySelection("coinsub")}
                    >
                      Pay with Coinsub
                    </button>
                    <button
                      type="button"
                      className="w-full text-left p-3 border border-[#353535] rounded-md hover:bg-[#2a2a3e] transition-colors text-white"
                      onClick={() => handleGatewaySelection("blockradar")}
                    >
                      Pay with Blockradar
                    </button>
                  </div>
                )}
              </div>

              {/* Selected Payment Method Display */}
              {selectedGateway && (
                <div className="mt-6 p-3 bg-[#1a1a2e] border border-[#454545] rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">
                    Selected Payment Method:
                  </p>
                  <p className="text-white font-medium">{getButtonText()}</p>
                  {selectedGateway === "lemon-squeezy" && (
                    <p className="text-xs text-yellow-400 mt-1">
                      * Lemon Squeezy only supports one-time payments in USD
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center">
                <button
                  className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] hover:bg-black rounded-md py-3 px-6 w-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  role="button"
                  type="submit"
                  disabled={isAnyLoading || !isValid || !selectedGateway}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <p className="flex items-center gap-2">
                      {selectedGateway
                        ? getButtonText()
                        : "Select Payment Method"}{" "}
                      <ChevronRight size={20} />
                    </p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
