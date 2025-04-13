import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function Explore() {
  const courses = [
    {
      name: "Blockchain Cybersecurity",
      description:
        "Learn the fundamentals of blockchain security, including how  cryptography ensures data integrity.",
      image: "/cybersecurity.svg",
      to: "/blockchain-cybersecurity",
    },

    {
      name: "Web3 Marketing",
      description:
        "Master strategies to grow communities, drive adoption and amplify blockchain projects.",
      image: "/marketing.svg",
      to: "/marketing",
    },
    {
      name: "Web3 Technical Writing",
      description:
        "Write clear, engaging documentation and content to simplify complex Web3 concepts.",
      image: "/technicalWriting.svg",
      to: "/technical-writing",
    },
    {
      name: "Smart Contract Development",
      description:
        "Learn the skills and knowledge to develop and deploy decentralized applications using Solidity.",
      image: "/smartContract.svg",
      to: "/smart-contract-development",
    },
    {
      name: "Web3 Research",
      description:
        "Learn to analyze trends, evaluate protocols and uncover insights in Web3.",
      image: "/research.svg",
      to: "/web3-research",
    },
    {
      name: "AI Agent",
      description:
        "Learn to analyze trends, evaluate protocols and uncover insights in Web3.",
      image: "/research.svg",
      to: "/ai-agent",
    },
  ];

  return (
    <div className="pt-20 lg:pt-[6.5rem]">
      <div className="max-w-[59rem] mx-auto text-center">
        <h1 className="font-extrabold text-[1.875rem] lg:text-[3rem] px-4 lg:px-0">
          Explore Our Technical and <br className="hidden lg:block" />{" "}
          Non-Technical Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 mt-8 lg:mt-11">
          {courses.map((course, id) => (
            <div
              key={id}
              className="bg-[#080821] grid lg:grid-cols-5 items-center gap-y-2 gap-x-7 px-6 py-7 text-start lg:min-h-[222px]"
            >
              <div className="col-span-2">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={167}
                  height={166}
                />
              </div>

              <div className="col-span-3 flex flex-col lg:justify-between h-full">
                <h3 className="font-semibold text-xl lg:text-2xl">
                  {course.name}
                </h3>
                <p className="mt-2 text-[#8B8B8B] text-sm leading-[22px]">
                  {course.description}
                </p>

                <Link
                  href={course.to}
                  className="text-[#8D58FF] mt-6 flex items-center gap-1"
                >
                  Learn More
                  <MdArrowForwardIos size={16} color="#8D58FF" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
