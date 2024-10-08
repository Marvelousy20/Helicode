import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const Others = () => {
  return (
    <section className="bg-others-gradient py-10 text-center w-full mt-32">
      <div className="max-w-[34rem] mx-auto">
        <h1 className="lg:text-[3rem] text-[1.875rem] font-extrabold">
          Find Others Like You
        </h1>
        <p className="mt-4">
          Participate in live events, collaborate in study groups, receive
          guidance, and co-create with fellow aspiring leaders.
        </p>

        <div className="mt-12 flex justify-center">
          <a href="https://t.me/+w8hiLIcuh6dmYTI0" className="">
            <Button className="flex items-center gap-3">
              Join Telegram Community <MdArrowForwardIos size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Others;

// background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(153, 153, 153, 0) 100%);
