"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSubscribersMutation } from "@/redux/feature/newsletter/newsletterApi";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "First name can only contain letters and spaces",
    }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "Last name can only contain letters and spaces",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(100, { message: "Email must be less than 100 characters" }),
});

const EmailCaptureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [
    payment,
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
      await payment(values).unwrap();
    } catch (error: any) {
      setError("root", {
        type: "manual",
        message:
          error.data?.message || "something went wrong! Please try again.",
      });
    }
  };

  useEffect(() => {
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (subscribersSuccess) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Join our newsletter</DialogTitle>
              <DialogDescription>
                Sign up to our mailing list below and be the first to know about
                new updates. Don&apos;t worry, we won&apos;t spam you.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 md:space-y-10"
            >
              <div className="space-y-2">
                <label htmlFor="firstname">First Name</label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="First Name"
                      id="firstname"
                      className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="lastname">Last Name</label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Last Name"
                      id="lastName"
                      className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Email"
                      id="email"
                      className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {errors.root && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.root.message}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="h-12 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <Alert className="border-green-500 bg-green-50">
              <CheckCircle className="h-4 w-4 text-greeen-500" />
              <AlertDescription>
                Thank you for subscribing! We&apos;ll be in touch soon.
              </AlertDescription>
            </Alert>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailCaptureModal;
