"use client";
import NewsLetter from "@/components/Newsletter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export default function ContactUs() {
  // Zod Schema
  const Schema = z.object({
    name: z.string().min(5, { message: "Enter your name" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(5, { message: "Enter your subject" }),
    message: z.string().min(5, { message: "Enter your message" }),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof Schema>) => {
    // console.log(values);
  };

  return (
    <section className="lg:pt-24 pt-10">
      <div className="w-full flex flex-col lg:flex-row items-start gap-7">
        <div className="text-center flex flex-col items-start h-full lg:w-1/2 w-full border border-[#232323] bg-[#080821] p-10">
          <h1 className=" text-lg lg:text-2xl leading-10 font-medium">
            Contact US
          </h1>
          <p className="mt-[0.65rem] text-base font-normal">
            @ admin@helicode.com
          </p>
          <div className="flex items-center space-x-4 md:space-x-6 lg:mt-4">
            <div>
              <a
                href="https://x.com/Helicodexyz"
                className="flex items-center gap-2.5"
              >
                {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
                <Image src="/twitter.svg" alt="logo" width={20} height={20} />
                {/* </span> */}
                {/* <p className="text-[#A0A4A0] font-medium">Twitter</p> */}
              </a>
            </div>

            <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/helicodehq"
                className="flex items-center gap-2.5"
              >
                {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
                <Image src="/instagram.svg" alt="logo" width={20} height={20} />
                {/* </span> */}
                {/* <p className="text-[#A0A4A0] font-medium">Instagram</p> */}
              </a>
            </div>

            <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://discord.gg/PHzk33M8W8"
                className="flex items-center gap-2.5"
              >
                {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
                <Image src="/discord.svg" alt="logo" width={20} height={20} />
                {/* </span> */}
                {/* <p className="text-[#A0A4A0] font-medium">LinkedIn</p> */}
              </a>
            </div>

            <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://t.me/+w8hiLIcuh6dmYTI0"
                className="flex items-center gap-2.5"
              >
                {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
                <Image src="/telegram.svg" alt="logo" width={24} height={24} />
                {/* </span> */}
                {/* <p className="text-[#A0A4A0] font-medium">Telegram</p> */}
              </a>
            </div>

            <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/helicode/"
                className="flex items-center gap-2.5"
              >
                {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
                <Image src="/linkedin.svg" alt="logo" width={24} height={24} />
                {/* </span> */}
                {/* <p className="text-[#A0A4A0] font-medium">LinkedIn</p> */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full border border-[#232323] bg-[#080821] h-full p-10">
          <h1 className=" text-lg lg:text-2xl leading-10 font-medium pb-10">
            Send us a message
          </h1>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2 w-full">
              <label htmlFor="Name" className="font-medium text-2xl block">
                First Name*
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Name"
                    id="Name"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="Email" className="font-medium text-2xl block">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Email"
                    id="Email"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="firstName" className="font-medium text-2xl block">
                Subject
              </label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Subject"
                    id="Subject"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="Message" className="font-medium text-2xl block">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Message"
                    id="Message"
                    rows={10}
                    cols={10}
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent  rounded-[8px] py-4 px-6"
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="flex lg:items-end items-center lg:justify-end justify-normal">
              <div className="mt-6 flex items-center lg:w-1/3 w-full bg-[#8D58FF4D] rounded-xl p-[6px] text-center">
                <button
                  className="border border-dashed border-[#4B0CF14D] bg-[#8D58FF] hover:bg-black rounded-md py-3 px-6 w-full flex justify-center items-center"
                  role="button"
                  type="submit"
                >
                  <p className="flex items-center gap-2">
                    Send now <ChevronRight size={20} />
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="pb-[4.63rem]">
        <NewsLetter />
      </div>
    </section>
  );
}
