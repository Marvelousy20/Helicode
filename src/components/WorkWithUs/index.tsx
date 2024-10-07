import Image from "next/image";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const WorkWithUs = () => {
  return (
    <section className="py-16 lg:py-[7.5rem]">
      <div className="max-w-[57rem] mx-auto text-center">
        <div className="">
          <h1 className="font-extrabold text-[1.875rem] lg:text-[3rem]">
            Reach Your Full Potential
          </h1>

          <h4 className="mt-6 px-4 text-[#8B8B8B]">
            Build technical expertise and hands-on experience across your team
            with our interactive courses and top resources from leading experts.
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
              blockchain technology to drive innovation, efficiency, and growth.
            </p>

            <div className="mt-10">
              <div className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5">
                <Button className="">
                  Learn More <MdArrowForwardIos size={16} className="ml-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-[#232323] bg-[#080821] rounded-[1.255rem] p-10 lg:p-9">
            <Image src="/talents.svg" alt="test" width={69} height={60} />

            <h3 className="mt-10 font-bold text-2xl">For Talents</h3>
            <p className="mt-6 text-[#8B8B8B]">
              Unlock your FULL potential with a wide range career paths and
              opportunities for career development and growth.
            </p>

            <div className="mt-10">
              <div className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5">
                <Button className="">
                  Learn More <MdArrowForwardIos size={16} className="ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
