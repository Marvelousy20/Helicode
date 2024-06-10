import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mt-[3.9rem] lg:py-[4.5rem] text-center border border-dashed border-[#5D5D5D]">
      <div className="max-w-[53rem] mx-auto">
        <h4 className="uppercase text-[#8D58FF] text-sm">
          A University made for the future
        </h4>

        <h1 className="lg:text-[4.5rem] font-extrabold leading-[82.73px] mt-4">
          Next-Gen Education for Anyone, Anywhere.
        </h1>

        <h3 className="text-lg mt-4">
          Kickstart your Web3 career and build real world projects, guided by
          industry leading experts.
        </h3>

        <Button className="mt-10 justify-center">
          Apply Now <MdArrowForwardIos size={16} className="ml-3" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
