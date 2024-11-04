export default function Part() {
  return (
    <div className="mt-10 lg:mt-[6.5rem] bg-part-gradient rounded-[16px] px-4 py-10 lg:p-20 max-w-7xl mx-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-y-7">
        <h1 className="text-2xl lg:text-3xl font-semibold w-full">
          Be a part of <br /> Something Big
        </h1>

        <div className="flex justify-between w-full">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl lg:text-[2.5rem]">1200+</h1>
            <p className="opacity-60 text-xl lg:text-2xl mt-0.5">Learners</p>
          </div>

          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl lg:text-[2.5rem]">22+</h1>
            <p className="opacity-60 text-xl lg:text-2xl mt-0.5">Countries</p>
          </div>

          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl lg:text-[2.5rem]">5+</h1>
            <p className="opacity-60 text-xl lg:text-2xl mt-0.5">Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
