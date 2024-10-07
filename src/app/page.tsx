"use client";

import DontMissOut from "@/components/DontMiss";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Others from "@/components/Others";
import WorkWithUs from "@/components/WorkWithUs";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import Part from "@/components/Part";
// import FAQ from "@/components/FAQ";
// import PricingCard from "@/components/Pricing";
// import Career from "@/components/Career";
import NewsLetter from "@/components/Newsletter";

export default function Home() {
  const handleApplyClick = () => {
    console.log("Clicked");
  };

  return (
    <main className="">
      <Hero />
      <Journey />
      <Partners />
      <Part />
      <WorkWithUs />
      <Testimonial />
      <NewsLetter />
      {/* <Others /> */}
    </main>
  );
}
