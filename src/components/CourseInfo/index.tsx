import Image from "next/image";

interface InfoProp {
  imgLink: string;
  heading: string;
  text: string;
}

interface InfoComponentProps {
  info: InfoProp[];
}

export default function CourseInfo({ info }: InfoComponentProps) {
  return (
    <section className="max-w-7xl pt-8 lg:px-24 lg:pt-12 max-w5xl mx-auto">
      <div
        className="p-6 lg:py-6 lg:px-[72px] flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between border border-dashed border-[#343434] borderb-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(141, 88, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        {info.map((info, i) => (
          <div key={i} className="flex items-center">
            <Image
              src={info.imgLink}
              alt="icon"
              width={40}
              height={40}
              className="mr-5"
            />
            <div className=" space-y-1">
              <h3 className=" text-[#8B8B8B]">{info.heading}</h3>
              <p className=" font-medium text-base">{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
