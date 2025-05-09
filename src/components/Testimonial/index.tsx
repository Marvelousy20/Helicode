import Image from "next/image";

const testimonials = [
  {
    name: "Omolola Ogunmola",
    handle: "@omolola-ogunmola",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "For someone who has always wanted to transition into tech for the longest time, studying at Helicodes has been nothing short of amazing! Every class I’ve attended has been really practical! Many thanks to the founders and instructors!",
    avatar: "/testimonials/ogunmola.svg",
  },
  {
    name: "Olawale Ololade",
    handle: "@olawale-ololade",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "But this journey has been about more than technical skills. I learned valuable lessons about life, ethics, and navigating the job market. I discovered that diligence is a lifestyle, that showing up daily is non-negotiable, and that improving by 1% each day adds up. These are the lessons I carry with me into the next chapter.",
    avatar: "/testimonials/olawale.svg",
  },
  {
    name: "Emmanuel Obuobi",
    handle: "@emmanuel-obuobi",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "I'm excited to share that I’ve successfully completed the Web3 Marketing Course with Helicode! A big thank you to the Helicode team for curating such an insightful program, and to everyone I connected with along the way — your shared knowledge and experiences made this even more valuable.",
    avatar: "/testimonials/emma.svg",
  },
  {
    name: "W3Danny",
    handle: "@_W3Danny",
    mediaIcon: "/testimonials/twitter.svg",
    description:
      "The journey is far from over, but every step I take in Web3 brings me closer to mastering this evolving space. Thanks to Helicode and my instructor faith_creator for making sure Africans can be creators as well. I'm excited for what’s ahead.",
    avatar: "/testimonials/w3danny.svg",
  },
  {
    name: "TiOluwani Bamigboye",
    handle: "@agbatochris",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "Started my Web3 Marketing lessons with Helicode and I'd say these guys are after my life– in a good way tho. They structured their classes in a way that they are intense and practical. Now I have to submit one of my assignments here. You guys should fear my coming!",
    avatar: "/testimonials/tiolu.svg",
  },
  {
    name: "Regina Dadzie",
    handle: "@regina-dadzie",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "I completed this article as part of my learning requirement for the Web3 Marketing Course by Helicode and Faith Samuel. Thank you Helicode for all the amazing learning experience.",
    avatar: "/testimonials/regina.svg",
  },
  {
    name: "Ruth (Afi) Agbozo",
    handle: "@ruthafiagbozo",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "Thank you to MEST Africa and Helicode for the opportunity to continuously learn in the tech space, specifically in Web3. Not because I want to be seen as a 'bookworm,' but to remain relevant in the ever-changing world I find myself in.",
    avatar: "/testimonials/ruth.svg",
  },
  {
    name: "Loula",
    handle: "@_Loula",
    mediaIcon: "/testimonials/twitter.svg",
    description:
      "Took a huge step transitioning into the web3 space and learning at Helicode has made it worthwhile! I’ve had just two classes and they’ve been a bomb! My instructor has been nothing short of amazing. She’s doing a great job making sure that the classes we’ve had are practical.",
    avatar: "/testimonials/loula.svg",
  },
  {
    name: "LIGHT",
    handle: "@onlydeelight",
    mediaIcon: "/testimonials/twitter.svg",
    description:
      "Today, I'm proud to call myself a Web3 growth marketer thanks to Helicode. I help projects build engaged communities, scale their presence and tell stories that matter.",
    avatar: "/testimonials/light.svg",
  },
  {
    name: "Mikeoriv",
    handle: "@mikeoriv",
    mediaIcon: "/testimonials/twitter.svg",
    description:
      "My first week of the Web3 Marketing course at Helicode has been so good. Thank you Faith_creator for the amazing classes, I'm having an awesome experience!",
    avatar: "/testimonials/mikeo.svg",
  },
  {
    name: "Lucent",
    handle: "@_Lucent1",
    mediaIcon: "/testimonials/twitter.svg",
    description:
      "If you’re looking to learn about Web3 and acquire the skills needed to get started in this industry or beyond, let me point you in the right direction. Helicode is an excellent place to begin.",
    avatar: "/testimonials/lucent.svg",
  },
  {
    name: "ekerettoteetim",
    handle: "@ekerettoteetim1",
    mediaIcon: "/testimonials/linkedin.svg",
    description:
      "The 1st class of the Web3 Marketing course by Helicode was a sweet cocktail I took a sip of. Massive shout-out to faith_creator for breaking concepts down clearly. With passion and euphoria, I assume this is the perfect place to master marketing in Web3.",
    avatar: "/testimonials/ekere.svg",
  },
];

export default function Testimonial() {
  return (
    <section className="text-center w-full flex justify-center">
      <div className="mx-auto">
        <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">
          What Our talents say about us
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#676767] border-dashed bg[#0B0B1E] max-w-[24.3rem] p-4 flex flex-col"
            >
              <h1 className="leading-[22px] text-left">
                {testimonial.description}
              </h1>

              <div className="flex-1 mt-9"></div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                  />
                  <div className="">
                    <h1 className="text-left font-normal md:text-base">
                      {testimonial.name}
                    </h1>
                    <h1 className="text-left text-xs text-opacity-60 text-white">
                      {testimonial.handle}
                    </h1>
                  </div>
                </div>

                <div>
                  <Image
                    src={testimonial.mediaIcon}
                    alt="media icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
