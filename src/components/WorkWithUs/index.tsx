import Image from "next/image";

const WorkWithUs = () => {
  return (
    <section className="lg:py-[7.5rem]">
      <div className="max-w-[57rem] mx-auto text-center">
        <div className="">
          <h1 className="font-extrabold lg:text-[3rem]">Work With Us!</h1>

          <h4 className="mt-6 px-4">
            Partner with us at HeliCode as we embark on a mission to empower
            businesses and companies eager to venture into the space of
            blockchain technology. Together, we&apos;ll navigate the intricacies
            of this innovative landscape, providing tailored training and
            support to ensure your successful integration into the blockchain
            ecosystem. Let&apos;s work together to unlock the full potential of
            blockchain for your organization&apos;s growth and success.
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-16 text-start">
          <div className="border border-dashed border-[#5D5D5D] lg:p-9">
            <Image
              src="/businesses.svg"
              alt="knowledge"
              width={61}
              height={60}
            />

            <h3 className="mt-10 font-bold text-xl">For Businesses</h3>
            <p className="mt-6">
              Tailored solutions for businesses seeking to harness the power of
              cutting-edge technologies, driving innovation, efficiency, and
              growth.
            </p>
          </div>

          <div className="border border-dashed border-[#5D5D5D] lg:p-9">
            <Image src="/talents.svg" alt="test" width={69} height={60} />

            <h3 className="mt-10 font-bold text-xl">For Talents</h3>
            <p className="mt-6">
              Unlock your potential with opportunities tailored for talents
              seeking to thrive in dynamic and rewarding environments, where
              innovation meets passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
