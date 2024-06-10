import DontMissOut from "@/components/DontMiss";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Others from "@/components/Others";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Journey />
      <WorkWithUs />
      <Others />
      <DontMissOut />
    </main>
  );
}
