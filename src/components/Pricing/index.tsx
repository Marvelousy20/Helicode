import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
        <h2 className="">{planType}</h2>
      </div>
      <p className="text-[#8B8B8B] mt-1">{description}</p>

      <hr className="border-[#2D2F32] mt-6" />

      <ul className="mt-4">
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
        <span className="text-[3.75rem] font-medium">${currentPrice}</span>
        {originalPrice && (
          <span className="line-through text-[#2D2F32] ml-4 text-[3.75rem] font-medium">
            ${originalPrice}
          </span>
        )}
      </div>

      <button
        onClick={onClick}
        className="mt-6 bg-[#8D58FF] text-white font-medium py-3.5 flex items-center justify-center w-full text-sm border-4 border-[#8D58FF4D] rounded-[6px]"
      >
        {buttonLabel} <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default PricingCard;
