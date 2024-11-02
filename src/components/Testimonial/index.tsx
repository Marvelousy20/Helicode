import Image from "next/image";

const testimonials = [
  {
    name: "Udochukwy Chikere",
    role: "Frontend Engineering",
    testimonial:
      "Helicode is a web3 academy that is designed to train and give you practical insight on different skill sets in the blockchain space. It was a great opportunity for me to be part of it.",
    avatar: "/udo.svg",
  },
  {
    name: "Sean D",
    role: "Blockchain Basics",
    testimonial:
      "I enjoyed the free master classes offered by Helicode. As a newbie in web3, I have a basic understanding of what blockchain and cryptocurrency is. I am looking forward to the smart contract development classes that will be held soon.",
    avatar: "/sean.svg",
  },
  {
    name: "Odun Adekunle",
    role: "UX Design",
    testimonial:
      "My experience with Helicode was AMAZING! Thank you for introducing me to this space. My understanding of web3 marketing and community management has grown far beyond what I used to know.",
    avatar: "/odun.svg",
  },
];

export default function Testimonial() {
  return (
    <section className="text-center w-full flex justify-center">
      <div className="mx-auto">
        <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">
          What Our Students say about us
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#676767] border-dashed bg[#0B0B1E] max-w-[24.3rem] h[22.5rem] h-[27rem] p-8 flex flex-col"
            >
              <div>
                <svg
                  width="54"
                  height="52"
                  viewBox="0 0 54 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.21 0.0599979L12.09 29.7H21.78V51.17H0.31V32.36L11.71 0.0599979H21.21ZM52.56 0.0599979L43.44 29.7H53.13V51.17H31.66V32.36L43.06 0.0599979H52.56Z"
                    fill="#8D58FF"
                  />
                </svg>
              </div>

              <h1 className="leading-[22px] text-left mt-10">
                {testimonial.testimonial}
              </h1>

              <div className="flex-1"></div>
              <div className="flex items-center gap-2">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                />
                <div className="">
                  <h1 className="text-left font-normal md:text-lg">
                    {testimonial.name}
                  </h1>
                  <h1 className="text-left text-sm text-opacity-60 text-white">
                    {testimonial.role}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
