import Image from "next/image";
import { MovingBorder, Button } from "../ui/moving-border";
import MovingBorderWrapper from "../ui/moving-border";

const Journey = () => {
  return (
    <section className="pt-20 lg:pt-[6.5rem]">
      <div className="max-w-[59rem] mx-auto text-center">
        <div className="">
          <h1 className="font-extrabold text-[1.875rem] lg:text-[3rem] px-4 lg:px-0">
            Start your Web3 Journey
          </h1>

          <h4 className="mt-6 px-4 text-[#8B8B8B]">
            Helicode is committed to preparing every Web3 explorer for their
            adventure in the crypto world. With the Academic platform,
            you&apos;ll confidently take your first step into this new career.
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:mt-16 text-start">
          <div className="card moving-border">
            <div className="card-inner px-5 py-6 lg:p-9">
              <Image
                src="/knowledge.svg"
                alt="knowledge"
                width={376}
                height={200}
              />

              <h3 className="mt-10 font-bold text-2xl">
                Advance Your Knowledge
              </h3>
              <p className="mt-6 text-[#828B9C]">
                Learn everything from basic to advanced topics for FREE in Web3
                with resources from industry leading experts such as Layer Two
                Blockchains, Bitcoin Basics and much more.
              </p>
            </div>
          </div>
          <div className="card moving-border">
            <div className="card-inner px-5 py-6 lg:p-9">
              <Image
                src="/card.svg"
                alt="test"
                width={376}
                height={200}
                className="w-full h-[200px]"
              />

              <h3 className="mt-10 font-bold text-2xl">Build a Skill</h3>
              <p className="mt-6 text-[#828B9C]">
                Learn advanced skills such as Smart Contract Development, Web3
                Data Analysis, Cybersecurity, Technical Writing and so much
                more!
              </p>
            </div>
          </div>
          <div className="card moving-border">
            <div className="card-inner px-5 py-6 lg:p-9">
              <Image
                src="/quest.svg"
                alt="knowledge"
                width={147}
                height={200}
              />

              <h3 className="mt-10 font-bold text-2xl">Mentorship</h3>
              <p className="mt-6 text-[#828B9C]">
                Join a community of like-minded Web3 enthusiasts. Get ideas from
                a global network of Web3 experts.
              </p>
            </div>
          </div>
          <div className="card moving-border">
            <div className="card-inner px-5 py-6 lg:p-9">
              <Image
                src="/badge.svg"
                alt="knowledge"
                width={200}
                height={200}
              />

              <h3 className="mt-10 font-bold text-2xl">Job Placement</h3>
              <p className="mt-6 text-[#828B9C]">
                Get hired through our job placements services leveraging our
                global partners building real world projects in Web3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
