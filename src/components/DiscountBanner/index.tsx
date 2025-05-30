"use client";

import { m } from "framer-motion";
import { use, useEffect, useState } from "react";

type CountdownProps = {
  endDate: string;
};

export default function DiscountBanner({ endDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Helper: Calculates remaining time

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(endDate);
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }; // Countdown has ended
  };

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#8D58FF] pt-4 pb-6 space-y-4">
      <h1 className="text-lg lg:text-2xl text-center font-semibold">
        Enjoy Huge Discount Sales on Some of Our Web3 Courses. Learn for $30
      </h1>

      <p className="text-center font-bold">
        Discount ends in{" "}
        <span className="bg-white text-black font-semibold p-2 ml-5 rounded-[4px]">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      </p>
    </div>
  );
}
