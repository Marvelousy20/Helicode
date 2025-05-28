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
import NewsLetter from "@/components/Newsletter";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <main className="">
      <DiscountBanner endDate="2025-07-18T00:00:00Z" />
      <div className="px-5 lg:px-20">
        <Hero />
        <Explore />
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
