"use client";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubscribersMutation } from "@/redux/feature/newsletter/newsletterApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(100, { message: "Email must be less than 100 characters" }),
});

export default function NewsLetter() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const [
    subscribers,
    {
      data: subscribersData,
      isLoading,
      error,
      isError,
      isSuccess: subscribersSuccess,
    },
  ] = useSubscribersMutation();

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setErrorMessage("");
      await subscribers(values).unwrap();
      setIsSuccess(true);
      reset();
    } catch (error: any) {
      setErrorMessage(
        error.data?.message || "Something went wrong! Please try again."
      );

      setError("root", {
        type: "manual",
        message:
          error.data?.message || "something went wrong! Please try again.",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-24 mt-20 lg:mt-[12rem]">
      <div className="bg-newsletter-gradient py-10 text-center rounded-[10px] relative overflow-hidden">
        <div className="absolute top-0 overflow-hidden hidden lg:block">
          <Image src="/biggest.svg" alt="img" width={1524} height={1205} />
        </div>

        <div className="absolute top-36 overflow-hidden hidden lg:block">
          <Image src="/bigger.svg" alt="img" width={1524} height={1205} />
        </div>

        <div className="absolute lg:top-72 overflow-hidden w-full hidden lg:block">
          <Image src="/big.svg" alt="img" width={1524} height={1205} />
        </div>

        <div className="absolute top-10 overflow-hidden block lg:hidden">
          <Image src="/1.png" alt="img" width={1524} height={1205} />
        </div>

        <div className="absolute top-32 overflow-hidden block lg:hidden">
          <Image src="/2.png" alt="img" width={1524} height={1205} />
        </div>

        <div className="absolute top-64 overflow-hidden block lg:hidden">
          <Image src="/3.png" alt="img" width={1524} height={1205} />
        </div>

        <div className="relative px-3">
          <div className="flex items-center justify-center">
            <div className="flex justify-center items-center gap-2 rounded-full w-[7.1rem] text-[0.6875rem] border border-[#F9F5FF] py-1">
              <Image src="/stars.svg" alt="star" width={19} height={18} />
              Get Updated
            </div>
          </div>

          <div className="text-[3rem] leading-[62px] font-semibold mt-2">
            Join our newsletter
          </div>

          <p className="max-w-[21rem] lg:max-w-[28rem] mx-auto leading-[24px] font-normal mt-2">
            Sign up to our mailing list below and be the first to know about new
            updates. Don&apos;t worry, we won&apos;t spam you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-2 mt-10 max-w-[]">
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Email Address"
                      className="w-[60%] md:w-[288px] bg-[#6830E1] text-white text-sm h-[44px] rounded-[8px] border border-[#8D58FF] placeholder:text-white px-6"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-[40%] md:w-[134px] flex justify-center items-center h-[44px] text-sm border-4 border-[#D4E8FF1F] rounded-[8px] px-5 bg-[#A382FF] transition-colors duration-300 hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe <ChevronRight size={18} />
                  </>
                )}
              </button>
            </div>

            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>

      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success!</DialogTitle>
            <DialogDescription>
              You have successfully subscribed to our newsletter.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
