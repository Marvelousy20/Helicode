import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mt-[3.9rem] lg:py-[4.5rem] text-center border border-dashed border-[#5D5D5D] px-6 py-10 lg:px-0">
      <div className="max-w-[53rem] mx-auto">
        <h4 className="uppercase text-[#8D58FF] text-sm">
          A University made for the future
        </h4>

        <h1 className="text-[2.5rem] leading-[45.96px] lg:text-[4.5rem] font-extrabold lg:leading-[82.73px] mt-4">
          Next-Gen Education for Anyone, Anywhere.
        </h1>

        <h3 className="text-lg mt-4">
          Kickstart your Web3 career and build real world projects, guided by
          industry leading experts.
        </h3>

        <div className="flex justify-center mt-10">
          <a href="https://tally.so/r/mZd1Za">
            <Button className="flex items-center gap-3">
              Apply Now <MdArrowForwardIos size={16} className="" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
