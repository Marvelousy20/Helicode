"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PricingCardProps {
  planType: "One-time payment" | "Monthly Payment";
  description: string;
  features: string[];
  currentPrice: string;
  nairaPrice?: string;
  originalPrice?: number;
  buttonLabel: string;
  noOfMonths?: string;
}
const PricingCard: React.FC<PricingCardProps> = ({
  planType,
  description,
  features,
  currentPrice,
  nairaPrice,
  originalPrice,
  buttonLabel,
  noOfMonths,
  // onClick,
}) => {
  const router = useRouter();
  return (
    <div className="bg-[#080821] p-6 border border-[#343434] border-dashed max-w-sm text-white">
      <Image src="/crown.svg" alt="crown" width={28} height={24} />
      <div className="flex items-center mt-3">
        <h2 className="text-2xl lg:text-[32px] font-medium">{planType}</h2>
      </div>
      <p className="text-[#8B8B8B] mt-1">{description}</p>

      <hr className="border-[#2D2F32] mt-6" />

      <div className="mt-6">
        {originalPrice && (
          <span className="line-through text-[#2D2F32] text-[3.5rem] lg:text-[3.75rem] font-medium">
            ${originalPrice}
          </span>
        )}
        <div className="flex flex-col gap-2">
          {/* <p className="text-[3.5rem] lg:text-[3.75rem] ml-4 font-medium">
            {nairaPrice}
          </p> */}
          <span className="text-[3.5rem] lg:text-[3.75rem] ml-4 font-medium">
            {currentPrice}
            <span className="text-2xl font-normal">
              {noOfMonths ? noOfMonths : ""}
            </span>
          </span>
        </div>
      </div>

      {/* <button
        onClick={onClick}
        className="mt-6 bg-[#8D58FF] text-white font-medium py-3.5 flex items-center justify-center w-full text-sm border-4 border-[#8D58FF4D] rounded-[6px]"
      >
        {buttonLabel} <ChevronRight size={18} />
      </button> */}
      <div
        className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center cursor-pointer"
        onClick={() => router.push("/payment")}
      >
        <div className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6 w-full flex justify-center items-center text-sm transition-colors duration-300 hover:bg-primary/90">
          {buttonLabel} <ChevronRight size={20} />
        </div>
      </div>

      <hr className="border-[#2D2F32] mt-6" />

      <ul className="mt-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mt-2 text-lg">
            <span className="mr-2">
              <Image src="/check.svg" alt="check" width={12.5} height={10.5} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
