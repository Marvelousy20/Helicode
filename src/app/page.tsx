"use client";

import DontMissOut from "@/components/DontMiss";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Others from "@/components/Others";
import WorkWithUs from "@/components/WorkWithUs";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import Part from "@/components/Part";
import DiscountBanner from "@/components/DiscountBanner";
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
      <DiscountBanner endDate="2025-01-18T00:00:00Z" />
      <div className="px-5 lg:px-20">
        <Hero />
        <Journey />
        <Partners />
        <Part />
        <WorkWithUs />
        <Testimonial />
        <NewsLetter />
        {/* <Others /> */}
      </div>
    </main>
  );
}
