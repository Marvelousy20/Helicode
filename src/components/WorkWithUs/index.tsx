import Image from "next/image";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const WorkWithUs = () => {
  return (
    <section className="py-20 lg:py-[7.5rem]">
      <div className="max-w-[57rem] mx-auto text-center">
        <div className="">
          <h1 className="font-extrabold text-[1.875rem] lg:text-[3rem]">
            Work With Us!
          </h1>

          <h4 className="mt-6 px-4 text-[#8B8B8B]">
            Partner with us at HeliCode as we embark on a mission to empower
            businesses and companies eager to venture into the space of
            blockchain technology.
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 lg:mt-16 text-start">
          <div className="border border-[#232323] bg-[#080821] rounded-[1.255rem] p-10 lg:p-9">
            <Image
              src="/businesses.svg"
              alt="knowledge"
              width={61}
              height={60}
            />

            <h3 className="mt-10 font-bold text-2xl">For Businesses</h3>
            <p className="mt-6 text-[#8B8B8B]">
              Tailored solutions for businesses seeking to harness the power of
              cutting-edge technologies, driving innovation, efficiency, and
              growth.
            </p>

            <Button className="mt-10">
              Get Started <MdArrowForwardIos size={16} className="ml-3" />
            </Button>
          </div>

          <div className="border border-[#232323] bg-[#080821] rounded-[1.255rem] p-10 lg:p-9">
            <Image src="/talents.svg" alt="test" width={69} height={60} />

            <h3 className="mt-10 font-bold text-2xl">For Talents</h3>
            <p className="mt-6 text-[#8B8B8B]">
              Unlock your potential with opportunities tailored for talents
              seeking to thrive in dynamic and rewarding environments, where
              innovation meets passion.
            </p>

            <Button className="mt-10">
              Get Started <MdArrowForwardIos size={16} className="ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
