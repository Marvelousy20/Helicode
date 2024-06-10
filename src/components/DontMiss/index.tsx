import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const DontMissOut = () => {
  return (
    <section className="bg-[#0B0B1E] my-12 lg:my-24 p-10">
      <div className="flex justify-between itesm-center">
        <div>
          <h1 className="font-bold text-[2.5rem]">
            Don’t miss out on <br /> updates
          </h1>
          <p className="mt-6">
            Stay in the loop with everything you need to know.
          </p>
        </div>
        <div>
          <div className="flex">
            <Input
              placeholder="Enter your email"
              className="bg-[#1c1c2e] rounded-none outline-none border-none text-white"
            />
            <Button>
              Subscribe <MdArrowForwardIos size={16} />
            </Button>
          </div>
          <p className="text-sm mt-1">
            We will not share your info with 3rd parties without consent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DontMissOut;
