import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  planType: "One-time payment" | "Monthly";
  description: string;
  features: string[];
  currentPrice: number;
  originalPrice?: number;
  buttonLabel: string;
  onClick: () => void;
}
const PricingCard: React.FC<PricingCardProps> = ({
  planType,
  description,
  features,
  currentPrice,
  originalPrice,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="bg-[#080821] p-6 border border-[#343434] border-dashed max-w-sm text-white">
      <Image src="/crown.svg" alt="crown" width={28} height={24} />
      <div className="flex items-center mt-3">
        <h2 className="text-2xl lg:text-[32px] font-medium">{planType}</h2>
      </div>
      <p className="text-[#8B8B8B] mt-1">{description}</p>

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

      <hr className="border-[#2D2F32] mt-6" />

      <div className="mt-6">
        {originalPrice && (
          <span className="line-through text-[#2D2F32] text-[3.5rem] lg:text-[3.75rem] font-medium">
            ${originalPrice}
          </span>
        )}
        <span className="text-[3.5rem] lg:text-[3.75rem] ml-4 font-medium">
          ${currentPrice}
        </span>
      </div>

      {/* <button
        onClick={onClick}
        className="mt-6 bg-[#8D58FF] text-white font-medium py-3.5 flex items-center justify-center w-full text-sm border-4 border-[#8D58FF4D] rounded-[6px]"
      >
        {buttonLabel} <ChevronRight size={18} />
      </button> */}
      <Link
        href="/"
        className="mt-6 flex items-center justify-center w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center"
      >
        <div className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6 w-full flex justify-center items-center">
          {buttonLabel} <ChevronRight size={20} />
        </div>
      </Link>
    </div>
  );
};

export default PricingCard;
