import Image from "next/image";

const Journey = () => {
  return (
    <section className="pt-20 lg:pt-[7.5rem]">
      <div className="max-w-[62rem] mx-auto text-center">
        <div className="">
          <h1 className="font-extrabold text-[1.875rem] lg:text-[3rem] px-4 lg:px-0">
            Start your Web3 Journey
          </h1>

          <h4 className="mt-6 px-4">
            Helicode is committed to preparing every Web3 explorer for their
            adventure in the crypto world. With the Academy platform,
            you&apos;ll confidently take your first step into this new
            territory, then follow your own learning path to explore new areas
            of the blockchain. Let&apos;s get started.
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-16 text-start">
          <div className="border border-dashed border-[#5D5D5D] px-5 py-6 lg:p-9">
            <Image
              src="/knowledge.svg"
              alt="knowledge"
              width={376}
              height={200}
            />

            <h3 className="mt-10 font-bold text-2xl">Advance Your Knowledge</h3>
            <p className="mt-6">
              Learn everything from the basics to advanced topics in Web3 with
              content created in collaboration with top experts.
            </p>
          </div>

          <div className="border border-dashed border-[#5D5D5D] px-5 py-6 lg:p-9">
            <Image src="/test.svg" alt="test" width={319} height={200} />

            <h3 className="mt-10 font-bold text-2xl">Test Your Abilities</h3>
            <p className="mt-6">
              Assess your skills and knowledge with our comprehensive tests
              designed to challenge and enhance your abilities.
            </p>
          </div>

          <div className="border border-dashed border-[#5D5D5D] px-5 py-6 lg:p-9">
            <Image
              src="/knowledge.svg"
              alt="knowledge"
              width={376}
              height={200}
            />

            <h3 className="mt-10 font-bold text-2xl">Complete Quests</h3>
            <p className="mt-6">
              Embark on exciting missions and complete quests to gain new skills
              and unlock rewards.
            </p>
          </div>

          <div className="border border-dashed border-[#5D5D5D] px-5 py-6 lg:p-9">
            <Image
              src="/knowledge.svg"
              alt="knowledge"
              width={376}
              height={200}
            />

            <h3 className="mt-10 font-bold text-2xl">Earn Badges/Rewards</h3>
            <p className="mt-6">
              Assess your skills and knowledge with our comprehensive tests
              designed to challenge and enhance your abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
