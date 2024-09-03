import DontMissOut from "@/components/DontMiss";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Others from "@/components/Others";
import WorkWithUs from "@/components/WorkWithUs";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Journey />
      <WorkWithUs />
      <Testimonial />
      <Others />
      {/* <DontMissOut /> */}
    </main>
  );
}
