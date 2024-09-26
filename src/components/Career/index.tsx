import Image from "next/image";

export default function Career() {
  const steps = [
    {
      title: "Learn the Skills",
      image: "/Book.svg",
      desc: "This expertly curated career path gives you all the knowledge and experience you need to start this career.",
    },

    {
      title: "Prep for interviews",
      image: "/Dialog.svg",
      desc: "This expertly curated career path gives you all the knowledge and experience you need to start this career.",
    },

    {
      title: "Learn the Skills",
      image: "/Hand_Stars.svg",
      desc: "This expertly curated career path gives you all the knowledge and experience you need to start this career.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {steps.map((step, i) => (
        <div
          key={i}
          className="border border-dashed border-[#343434] p-6 space-y-[0.813rem]"
        >
          <div className="flex space-x-2.5 items-center">
            <Image src={step.image} alt={step.image} width={40} height={40} />
            <p className="font-medium text-2xl">{step.title}</p>
          </div>

          <div className="leading-[24px] tracking-[-0.02em]">{step.desc}</div>
        </div>
      ))}
    </div>
  );
}
