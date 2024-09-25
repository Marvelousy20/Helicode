"use client";

import DontMissOut from "@/components/DontMiss";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Others from "@/components/Others";
import WorkWithUs from "@/components/WorkWithUs";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import PricingCard from "@/components/Pricing";
import Career from "@/components/Career";
import NewsLetter from "@/components/Newsletter";

export default function Home() {
  const handleApplyClick = () => {
    console.log("Clicked");
  };

  return (
    <main className="">
      <Hero />
      <Journey />
      <WorkWithUs />
      <Testimonial />
      <Others />
      {/* <FAQ />
      <PricingCard
        planType="One-time payment"
        description="Unlock maximum value with a one-time payment and save 10%"
        features={["Everything included in Basic", "Mentorship Support"]}
        currentPrice={162}
        originalPrice={200}
        buttonLabel="Apply Now"
        onClick={handleApplyClick}
      />
      <Career />
      <NewsLetter /> */}
      {/* <DontMissOut /> */}
    </main>
  );
}
