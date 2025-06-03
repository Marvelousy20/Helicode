"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Career from "@/components/Career";
import CourseInfo from "@/components/CourseInfo";
import CourseSyllabus from "@/components/CourseSyllabus";
import Web3MarketingFAQ from "@/components/Web3MarketingFAQ";
import NewsLetter from "@/components/Newsletter";
import PricingCard from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { useGetMarketingQuery } from "@/redux/feature/courses/courseApi";
import Image from "next/image";

const web3MarketingModules = [
  {
    number: 1,
    title: "Introduction to Web3",
    topics: [
      {
        content:
          "Overview of Web3: Learn the Evolution from Web1 and Web2 to Web3 and the key concepts of decentralization, blockchain and smart contracts.",
      },
      {
        content:
          "Core Technologies: Understand the basics of Blockchain Technology, Cryptocurrencies and Decentralized Applications.",
      },
      {
        content:
          "Web3 Ecosystem: Deep dive into the Key Players of the Web3 Ecosystem such as Ethereum, Binance Smart Chain, Solana, Optimism. Learn about DAOs and NFTs.",
      },
    ],
  },
  {
    number: 2,
    title: "Web3 Marketing Fundamentals",
    topics: [
      {
        content:
          "Principles of Web3 Marketing: Understand the strategies used in decentralized marketing and how to take community centric approaches to build Transparency and trust in Marketing.",
      },
      {
        content:
          "Target Audience: Identify and Understand Web3 users and how to segment the Web3 Market.",
      },
      {
        content:
          "Branding and Positioning: You will learn how to develop a Web3 brand Identity and how to craft a unique value proposition.",
      },
    ],
  },
  {
    number: 3,
    title: "Content and Community Management",
    topics: [
      {
        content:
          "Content Creation for Web3: Learn how to create educational, promotional and thought leadership content used to engage members in decentralized communities.",
      },
      {
        content:
          "Discover social media strategies that drives the growth of Web3 platforms such as Twitter, Reddit and Discord by leveraging influencer partnerships and collaborations to successfully scale multiple Web3 projects.",
      },
      {
        content:
          "Platforms for content distribution: Medium, Substack and YouTube.",
      },
    ],
  },
  {
    number: 4,
    title: "Marketing Channels and Tools",
    topics: [
      {
        content:
          "Web3 Advertising: Learn the native ads in Decentralized Applications and Blockchain Networks.",
      },
      {
        content:
          "SEO and SEM: Learn how to optimize for blockchain-related search queries and how to use paid search strategies and ad placements to increase traffic and visibility from organic search results.",
      },
      {
        content:
          "Email Marketing and Newsletters: We will cover the process of building and managing a Web3 email list and learn how to create effective newsletters and campaigns.",
      },
    ],
  },
  {
    number: 5,
    title: "Metrics and Analytics",
    topics: [
      {
        content:
          "Key Performance Indicators: Learn how to measure engagement and growth in the contexts of Web3. You will also learn how to track a token and NFT performance.",
      },
      {
        content:
          "Tools for Web3 Analytics: You will get used to the tools for blockchain analytics platforms, social media and community metrics.",
      },
      {
        content:
          "Data Privacy and Security: You will learn how to ensure user data is protected and how compliance work in the decentralized data regulation space.",
      },
    ],
  },
  {
    number: 6,
    title: "Case Studies and Practical Applications",
    topics: [
      {
        content:
          "Successful Web3 Campaigns: Learn how to analyze successful marketing campaigns and their strategies to improve business growth, increase brand awareness, attract new customers and generate more sales.",
      },
      {
        content:
          "Hands-On Projects: Learn how to create and launch a mock marketing campaign typically used for promotional purposes. You will gain hands on experience on how to build and manage a community.",
      },
      {
        content:
          "Future Trends and Innovation: We will explore the emerging trends in Web3 marketing and how to prepare for future developments in Blockchain Technology.",
      },
    ],
  },
  {
    number: 7,
    title: "Assessment and Certification",
    topics: [
      {
        content: "Quizzes and assignments at the end of each module.",
      },
      {
        content: "Final Project: Comprehensive Web3 marketing plan.",
      },
      {
        content: "Certification upon successful completion of course.",
      },
    ],
  },
];

export default function Page() {
  const router = useRouter();
  const { data, isFetching, isLoading } = useGetMarketingQuery();

  const handleStartLearning = () => {
    router.push("/payment?course=Web3%20Marketing");
  };

  const info = [
    {
      imgLink: "/Hashtag-Square.svg",
      heading: "Start Date",
      // text: `${data?.data?.map((item) => item?.startDate) || "N/A"}`,
      // text: "November, 2024",
      cohortTwo: "July 18, 2025",
    },
    {
      imgLink: "/Time.svg",
      heading: "Duration",
      // text: `${data?.data?.map((item) => item?.duration) || "N/A"}`,
      text: "4 Weeks",
    },
    {
      imgLink: "/Location.svg",
      heading: "Location",
      text: "LIVE Online",
    },
    {
      imgLink: "/Dollar.svg",
      heading: "Average Salary",
      text: "80,000",
    },
  ];
  return (
    <main className="lg:py-5 mt-12">
      <div className=" h-[77dvh] lg:h-[75vh] p24 relative border border-dashed border-[#343434] max-w7xl max-w-[90rem] mx-auto">
        <div className="relative z-0 h-full">
          <div className="absolute left-0 top-10 lg:top-16 w-full h-[0.7px] w[2px] bg-[#343434]" />
          <div className="absolute left-6 lg:left-20 top-0 w-[0.7px] h-full w[2px] bg-[#343434]">
            <div className="absolute top-[40%] border border-[#8D58FF] h-[90px]" />
          </div>
          <div className="absolute left-0 bottom-10 lg:bottom-16 w-full h-[0.7px] w[2px] bg-[#343434]" />
          <div className="absolute right-6 lg:right-20 top-0 w-[0.7px] h-full w[2px] bg-[#343434]">
            <div className="absolute top-[40%] border border-[#8D58FF] h-[90px]" />
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(180deg, #080821 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className=" relativeflexjustify-centeritems-center hfull z-0 border[0.7px] border-[#343434] border-l-0 bgblack absolute right-6 lg:right-20 left-6 lg:left-20 top-10 lg:top-16 bottom-10 lg:bottom-16 m-[1.4px]"
        >
          <div className="relative flex flex-col justify-center items-center h-full text-center">
            <div className="flex items-center border border[#9960FF]/[20] border-[#99A9FF3D] py-[6px] px-3 rounded-full">
              <span className=" mr-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.57308 5.35384C6.98548 4.61404 7.19167 4.24414 7.49995 4.24414C7.80823 4.24414 8.01443 4.61404 8.42683 5.35384L8.53352 5.54524C8.65071 5.75547 8.70931 5.86058 8.80067 5.92994C8.89203 5.99929 9.00582 6.02504 9.23339 6.07653L9.44057 6.12341C10.2414 6.3046 10.6418 6.3952 10.7371 6.70154C10.8323 7.00788 10.5594 7.32709 10.0134 7.96551L9.87217 8.13068C9.71702 8.3121 9.63945 8.4028 9.60456 8.51502C9.56966 8.62724 9.58139 8.74827 9.60484 8.99032L9.6262 9.21069C9.70874 10.0625 9.75001 10.4884 9.5006 10.6777C9.2512 10.867 8.87629 10.6944 8.12648 10.3492L7.93249 10.2599C7.71942 10.1617 7.61288 10.1127 7.49995 10.1127C7.38703 10.1127 7.28049 10.1617 7.06742 10.2599L6.87343 10.3492C6.12362 10.6944 5.74871 10.867 5.49931 10.6777C5.2499 10.4884 5.29117 10.0625 5.37371 9.21069L5.39507 8.99032C5.41852 8.74827 5.43025 8.62724 5.39535 8.51502C5.36045 8.4028 5.28288 8.3121 5.12774 8.13068L4.9865 7.96551C4.44055 7.32709 4.16757 7.00788 4.26284 6.70154C4.3581 6.3952 4.75851 6.3046 5.55934 6.12341L5.76652 6.07653C5.99409 6.02504 6.10788 5.99929 6.19924 5.92994C6.2906 5.86058 6.3492 5.75547 6.46639 5.54524L6.57308 5.35384Z"
                    fill="#8D58FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 0.5C7.76972 0.5 7.98837 0.718652 7.98837 0.988372V2.2907C7.98837 2.56042 7.76972 2.77907 7.5 2.77907C7.23028 2.77907 7.01163 2.56042 7.01163 2.2907V0.988372C7.01163 0.718652 7.23028 0.5 7.5 0.5ZM11.7524 3.24762C11.9431 3.43834 11.9431 3.74756 11.7524 3.93828L11.5289 4.1618C11.3381 4.35252 11.0289 4.35252 10.8382 4.1618C10.6475 3.97108 10.6475 3.66186 10.8382 3.47114L11.0617 3.24762C11.2524 3.0569 11.5617 3.0569 11.7524 3.24762ZM3.24769 3.24769C3.43841 3.05697 3.74763 3.05697 3.93835 3.24769L4.16187 3.47121C4.35259 3.66193 4.35259 3.97115 4.16187 4.16187C3.97115 4.35259 3.66193 4.35259 3.47121 4.16187L3.24769 3.93835C3.05697 3.74763 3.05697 3.43841 3.24769 3.24769ZM0.5 7.5C0.5 7.23028 0.718652 7.01163 0.988372 7.01163H2.2907C2.56042 7.01163 2.77907 7.23028 2.77907 7.5C2.77907 7.76972 2.56042 7.98837 2.2907 7.98837H0.988372C0.718652 7.98837 0.5 7.76972 0.5 7.5ZM12.2209 7.5C12.2209 7.23028 12.4396 7.01163 12.7093 7.01163H14.0116C14.2813 7.01163 14.5 7.23028 14.5 7.5C14.5 7.76972 14.2813 7.98837 14.0116 7.98837H12.7093C12.4396 7.98837 12.2209 7.76972 12.2209 7.5ZM4.1618 10.8382C4.35252 11.0289 4.35252 11.3381 4.1618 11.5289L3.93842 11.7522C3.7477 11.943 3.43848 11.943 3.24776 11.7522C3.05704 11.5615 3.05704 11.2523 3.24776 11.0616L3.47114 10.8382C3.66186 10.6475 3.97108 10.6475 4.1618 10.8382ZM10.8382 10.8383C11.0289 10.6476 11.3381 10.6476 11.5289 10.8383L11.7522 11.0617C11.9429 11.2524 11.9429 11.5617 11.7522 11.7524C11.5615 11.9431 11.2523 11.9431 11.0616 11.7524L10.8382 11.529C10.6475 11.3383 10.6475 11.0291 10.8382 10.8383ZM7.5 12.2209C7.76972 12.2209 7.98837 12.4396 7.98837 12.7093V14.0116C7.98837 14.2813 7.76972 14.5 7.5 14.5C7.23028 14.5 7.01163 14.2813 7.01163 14.0116V12.7093C7.01163 12.4396 7.23028 12.2209 7.5 12.2209Z"
                    fill="#8D58FF"
                  />
                </svg>
              </span>
              <h3 className="text-xs lg:text-base">School of Marketing</h3>
            </div>
            <div className="px-4">
              <h1 className=" text-[1.9rem] font-medium lg:text-7xl pt-3 lg:pt-4">
                {/* {`${data?.data?.map((item) => item.name)}`} */}
                Web3 Marketing
              </h1>
              <p className=" text-white opacity-80 mt-6 max-w-3xl mx-auto lg:text-lg">
                For a Web3 product to scale, it has to be marketed properly to
                the right audience, or it risks failing before it has even
                begun.
              </p>
            </div>
            <div
              onClick={handleStartLearning}
              className="mt-12 border-4border-[#8D58FF4D] bg-[#8D58FF4D] rounded-xl p-[6px] cursor-pointer"
            >
              <div className="flex items-center border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6 transition-colors duration-300 hover:bg-primary/90">
                Start Learning <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseInfo info={info} />
      <CourseSyllabus
        modules={web3MarketingModules}
        title={`${data?.data?.map((item) => item.name)}`}
      />

      <section className=" max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto pb-[3.8rem] lg:pb-[7rem]">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-center lg:text-[3rem] text-[1.875rem] font-semibold">
            Pricing
          </h1>
          <div className="bg-[#8D58FF] rounded-[30px] bg-opacity-15 p-2 flex gap-2">
            <Image src="/starr.svg" alt="star" width={20} height={20} />
            <div className="text-[#8D58FF] text-xl font-normal">
              Early birds
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
          <PricingCard
            planType="One-time payment"
            description="If you choose this payment plan, you will be required to make a full payment."
            features={[
              "Course Material (Lifetime access)",
              "1 on 1 mentorship with the Instructor",
              "Access to Telegram and Discord community (Lifetime access)",
              "Live Classes and Hands-on Projects",
            ]}
            monthlyPrice={
              data?.data?.[0]?.price?.NGN ? `₦${data.data[0].price.NGN}` : "N/A"
            }
            currentPrice={
              data?.data?.[0]?.price?.USD
                ? `$${data.data[0].price?.USD}`
                : "N/A"
            }
            buttonLabel="Apply now"
            discountPrice="50"
            // onClick={handleApplyClick}
          />
        </div>
      </section>
      <section className=" max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto space-y-10">
        <h1 className="text-center lg:text-[3rem] text-[1.875rem] font-semibold">
          Start Your New Career Faster
        </h1>
        <Career />
      </section>

      <div className="max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto pb-[3.8rem] lg:pb-[7rem]">
        <Testimonial />
      </div>
      <div className="pt-28">
        <Web3MarketingFAQ />
      </div>
      <div className="pt-[3.8rem] lg:pt-[7.5rem]">
        <NewsLetter />
      </div>
    </main>
  );
}
