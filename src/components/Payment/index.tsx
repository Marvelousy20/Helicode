"use client";

import { useEffect, useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { z } from "zod";
import CourseInfo from "./courseInfo";
import {
  useGetAllCourseDetalsQuery,
  useGetAllCoursesQuery,
  useGetCountryQuery,
  useGetStateQuery,
  usePaymentMutation,
  usePayWithCoinsubMutation,
  usePayWithBlockradarMutation,
} from "@/redux/feature/courses/courseApi";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import { handleError } from "@/lib/handle-error";
import Link from "next/link";
import { BasePayload } from "@/redux/type";

type Country = {
  name: string;
  code: string;
};

type State = {
  name: string;
  code: string;
};

type CourseInfo = {
  name: string;
  fullPayment: number;
  monthlyPayment: number;
  description: string;
};

// Course information
export const coursesInfo: Record<string, CourseInfo> = {
  "Blockchain Cybersecurity": {
    name: "Blockchain Cybersecurity",
    fullPayment: 100,
    monthlyPayment: 75,
    description: "Learn to secure blockchain systems and smart contracts.",
  },
  "Technical Writing": {
    name: "Technical Writing",
    fullPayment: 150,
    monthlyPayment: 105,
    description:
      "Master the art of writing clear and concise technical documentation.",
  },
  "Smart Contract Auditing": {
    name: "Smart Contract Auditing",
    fullPayment: 120,
    monthlyPayment: 80,
    description:
      "Gain skills to audit and secure smart contracts on various blockchain platforms.",
  },
  "Zero Knowledge Proofs": {
    name: "Zero Knowledge Proofs",
    fullPayment: 110,
    monthlyPayment: 60,
    description:
      "Explore the fascinating world of cryptographic zero-knowledge proofs.",
  },
  "Product Design": {
    name: "Product Design",
    fullPayment: 140,
    monthlyPayment: 80,
    description: "Learn to create user-centered designs for digital products.",
  },
  Marketing: {
    name: "Marketing",
    fullPayment: 140,
    monthlyPayment: 80,
    description:
      "Develop strategies for effective digital marketing campaigns.",
  },
};

// Data for dropdowns
const ageRanges = ["18-24", "25-34", "35-44", "45+"] as const;
const cohorts = ["January 2025", "April 2025", "July 2025"] as const;

const courses = [
  "Blockchain Cybersecurity",
  "Technical Writing",
  "Smart Contract Auditing",
  "Zero Knowledge Proofs",
  "Product Design",
  "Marketing",
] as const;

const referralSources = [
  "Google",
  "Linkedin",
  "Twitter",
  "AIESEC Ghana",
  "Delppy",
  "Web3 Global Conference",
  "AIESEC Togo",
  "AIESEC Nigeria",
  "AIESEC Rwanda",
  "Web3UNILAG",
  "3VO",
  "Facebook",
  "Instagram",
  "Tiktok",
  "Other",
] as const;

// Gateway options
const gateways = [
  "paystack",
  "lemon-squeezy",
  "coinsub",
  "blockradar",
] as const;

const baseSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  discordUserName: z
    .string()
    .min(2, { message: "Discord Username is required" }),
  phoneNumber: z.string().min(10, { message: "Phone Number is required" }),
  ageRange: z.enum(ageRanges),
  country: z.string().min(1, { message: "Please select a country" }),
  state: z.string().min(1, { message: "Please select a state" }),
  course: z.string().min(1, { message: "Please select a course of interest" }),
  cohort: z.string().min(1, { message: "Please select a cohort" }),
  referralSource: z.enum(referralSources),
  referralCode: z.string().optional(),
  // gateway: z.enum(gateways),
});

const schema = z.discriminatedUnion("gateway", [
  // Paystack gateway
  z
    .object({
      gateway: z.literal("paystack"),
      paymentType: z.enum(["recurrent", "fixed"]),
      paymentCurrency: z.enum(["NGN", "USD"]),
    })
    .merge(baseSchema),
  // Lemon Squeezy gateway (always fixed payment, USD currency)
  z
    .object({
      gateway: z.literal("lemon-squeezy"),
      paymentType: z.literal("fixed"),
      paymentCurrency: z.literal("USD"),
    })
    .merge(baseSchema),
  // Coinsub gateway
  z
    .object({
      gateway: z.literal("coinsub"),
    })
    .merge(baseSchema),
  // Blockradar gateway
  z
    .object({
      gateway: z.literal("blockradar"),
    })
    .merge(baseSchema),
]);

export default function ContactInfo() {
  const { data: countries, isLoading } = useGetCountryQuery();
  const { data: allCourses, isLoading: coursesLoading } =
    useGetAllCoursesQuery();

  const searchParams = useSearchParams();
  const encodedCourse = searchParams.get("course") || "";

  let defaultCourse = "";
  if (encodedCourse) {
    try {
      defaultCourse = decodeURIComponent(encodedCourse);
    } catch (error) {
      console.warn(`Failed to decode course name: "${encodedCourse}"`, error);
      defaultCourse = "";
    }
  }

  const [hasSelectedCourse, setHasSelectedCourse] = useState(!!defaultCourse);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      discordUserName: "",
      phoneNumber: "",
      ageRange: "18-24",
      country: "",
      state: "",
      course: defaultCourse,
      referralSource: "Twitter",
      paymentCurrency: "NGN",
      paymentType: "fixed",
      gateway: "paystack",
      referralCode: "",
    },
    mode: "onChange",
  });

  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [showCoinsubDialog, setShowCoinsubModal] = useState(false);
  const [showBlockradarDialog, setShowBlockradarModal] = useState(false);

  const watchCountry = watch("country");
  const watchCourse = watch("course");
  const currencyName = watch("paymentCurrency");
  const watchPaymentType = watch("paymentType");
  const watchGateway = watch("gateway");

  // Handle gateway changes
  useEffect(() => {
    if (watchGateway === "lemon-squeezy") {
      setValue("paymentType", "fixed");
      setValue("paymentCurrency", "USD");
    }
  }, [watchGateway, setValue]);

  useEffect(() => {
    if (watchCourse && !hasSelectedCourse) {
      setHasSelectedCourse(true);
    }
  }, [watchCourse, hasSelectedCourse]);

  const { data: stateData, isLoading: stateLoading } = useGetStateQuery(
    watchCountry,
    { skip: !watchCountry }
  );

  const { data: courseDetail, isLoading: detailLoading } =
    useGetAllCourseDetalsQuery(watchCourse, {
      skip: !watchCourse,
    });

  // Payment mutations
  const [
    payment,
    {
      data: paymentData,
      isSuccess,
      isLoading: paystackLoading,
      error,
      isError,
    },
  ] = usePaymentMutation();

  const [
    payWithCoinsub,
    { data: coinsubData, isLoading: coinsubLoading, isSuccess: coinsubSuccess },
  ] = usePayWithCoinsubMutation();

  const [
    payWithBlockradar,
    {
      data: blockradarData,
      isLoading: blockradarLoading,
      isSuccess: blockradarSuccess,
    },
  ] = usePayWithBlockradarMutation();

  // Handle payment success
  useEffect(() => {
    if (isSuccess) {
      const message = paymentData?.message || "Payment successful";
      toast.success(<span>{message}</span>, {
        style: {
          border: "1px solid #22C55E",
          padding: "16px",
          color: "#0A0A0A",
        },
        iconTheme: {
          primary: "#22C55E",
          secondary: "#FAFAFA",
        },
        duration: 5000,
      });
      setPaymentDialogOpen(true);
      reset();
    }

    if (error) {
      handleError(error);
      console.error(error);
    }
  }, [paymentData?.message, isSuccess, error, reset]);

  // Handle coinsub success
  useEffect(() => {
    if (coinsubSuccess && coinsubData) {
      setShowCoinsubModal(true);
    }
  }, [coinsubSuccess, coinsubData]);

  // Handle blockradar success
  useEffect(() => {
    if (blockradarSuccess && blockradarData) {
      setShowBlockradarModal(true);
    }
  }, [blockradarSuccess, blockradarData]);

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const basePayload: BasePayload & { gateway: string } = {
      firstName: values.firstName,
      lastName: values.lastName,
      discordUserName: values.discordUserName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      ageRange: values.ageRange,
      country: values.country,
      state: values.state,
      course: values.course,
      cohort: values.cohort,
      referralSource: values.referralSource,
      referralCode: values.referralCode,
      gateway: values.gateway,
    };

    try {
      if (values.gateway === "paystack" || values.gateway === "lemon-squeezy") {
        // For fiat payments, add payment type and currency
        const fiatPayload = {
          ...basePayload,
          paymentType: values.paymentType,
          paymentCurrency: values.paymentCurrency,
        };
        await payment(fiatPayload).unwrap();
      } else if (values.gateway === "coinsub") {
        await payWithCoinsub(basePayload).unwrap();
      } else if (values.gateway === "blockradar") {
        await payWithBlockradar(basePayload).unwrap();
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleCoinsubSubmission = useCallback(() => {
    const { link, customerData } = coinsubData?.data || {};
    if (link && customerData) {
      const form = document.createElement("form");
      form.action = link;
      form.method = "POST";
      form.target = "_blank";

      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = "customerData";
      hiddenField.value = JSON.stringify(customerData);

      form.appendChild(hiddenField);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }
    setShowCoinsubModal(false);
  }, [coinsubData]);

  const handleBlockradarSubmission = useCallback(() => {
    const { link, customerData } = blockradarData?.data || {};
    if (link) {
      let url = link.startsWith("http") ? link : `https://${link}`;
      if (customerData) {
        const params = new URLSearchParams();
        params.append("customerData", JSON.stringify(customerData));
        url += `?${params.toString()}`;
      }
      window.open(url, "_blank");
    }
    setShowBlockradarModal(false);
  }, [blockradarData]);

  return (
    <div className="lg:px-24 md:px-8 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-5 gap-6 mt-8 items-start"
      >
        <div className="md:col-span-3 bg-[#080821] border border-[#232323] py-10">
          <h1 className="text-3xl font-medium px-10 mb-10">
            Contact Information
          </h1>

          <div className="px-10 space-y-6">
            <div className="flex space-x-4">
              <div className="space-y-2 w-full">
                <label
                  htmlFor="firstName"
                  className="font-medium text-2xl block"
                >
                  First Name*
                </label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="First Name"
                      id="firstName"
                      className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2 w-full">
                <label
                  htmlFor="lastName"
                  className="font-medium text-2xl block"
                >
                  Last Name*
                </label>
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
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-medium text-2xl block">
                Email*
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="example@gmail.com"
                    id="email"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="discord" className="font-medium text-2xl block">
                Discord Username*
              </label>
              <Controller
                name="discordUserName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Discord Username"
                    id="discord"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.discordUserName && (
                <p className="text-red-500">{errors.discordUserName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="font-medium text-2xl block"
              >
                Phone Number*
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Phone number"
                    id="phoneNumber"
                    className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="ageRange" className="font-medium text-2xl block">
                Age Range*
              </label>
              <Controller
                name="ageRange"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent className="border-[#454545] text-[#454545] w-full rounded-[8px] py-4">
                      {ageRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.ageRange && (
                <p className="text-red-500">{errors.ageRange.message}</p>
              )}
            </div>

            <div className="flex space-x-4">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-medium text-2xl block">Country</p>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {isLoading ? (
                          <SelectItem value="loading">
                            Loading countries...
                          </SelectItem>
                        ) : (
                          countries?.map((country: any) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="font-medium text-2xl block">State</p>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateLoading ? (
                          <SelectItem value="loading">
                            Loading states...
                          </SelectItem>
                        ) : (
                          stateData?.map((state) => (
                            <SelectItem key={state.iso2} value={state.name}>
                              {state.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="courseOfInterest"
                className="font-medium text-2xl block"
              >
                Course of interest*
              </label>
              <Controller
                name="course"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Select your course of interest" />
                    </SelectTrigger>

                    <SelectContent className="border-[#454545] text-[#454545] w-full rounded-[8px] py-4">
                      {coursesLoading ? (
                        <SelectItem value="loading">
                          <p>Loading courses...</p>
                        </SelectItem>
                      ) : (
                        allCourses?.data?.map((course, i) => (
                          <SelectItem key={i} value={course?.name}>
                            {course?.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.course && (
                <p className="text-red-500">{errors.course.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="cohort" className="font-medium text-2xl block">
                Cohort (Start Month)*
              </label>
              <Controller
                name="cohort"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Select your Cohort" />
                    </SelectTrigger>

                    <SelectContent className="border-[#454545] text-[#454545] w-full rounded-[8px] py-4">
                      {cohorts.map((cohort, i) => (
                        <SelectItem key={i} value={cohort}>
                          {cohort}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.cohort && (
                <p className="text-red-500">{errors.cohort.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="referralSource"
                className="font-medium text-2xl block"
              >
                Where did you find us*
              </label>
              <Controller
                name="referralSource"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Where did you find us" />
                    </SelectTrigger>
                    <SelectContent className="border-[#454545] text-[#454545] w-full rounded-[8px] py-4">
                      {referralSources.map((source, id) => (
                        <SelectItem key={id} value={source}>
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.referralSource && (
                <p className="text-red-500">{errors.referralSource.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="referralCode"
                className="font-medium text-2xl block"
              >
                Referral Code
              </label>
              <Controller
                name="referralCode"
                control={control}
                render={({ field }) => (
                  <Input
                    className="border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                    placeholder="Enter referral code (optional)"
                  />
                )}
              />
            </div>

            {/* Currency selection - only show for fiat gateways */}
            {(watchGateway === "paystack" ||
              watchGateway === "lemon-squeezy") && (
              <div className="space-y-2">
                <label className="font-medium text-2xl block">Currency*</label>
                <Controller
                  name="paymentCurrency"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid-cols-2"
                      disabled={watchGateway === "lemon-squeezy"} // Disable for lemon-squeezy
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="NGN"
                          id="NGN"
                          className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                          disabled={watchGateway === "lemon-squeezy"}
                        />
                        <label htmlFor="NGN" className="text-white">
                          NGN
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="USD"
                          id="USD"
                          className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                        />
                        <label htmlFor="USD" className="text-white">
                          USD
                        </label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {(watchGateway === "paystack" ||
                  watchGateway === "lemon-squeezy") &&
                  "paymentCurrency" in errors && (
                    <p className="text-red-500">
                      {errors?.paymentCurrency?.message}
                    </p>
                  )}
              </div>
            )}

            {/* Payment type - only show for fiat gateways */}
            {(watchGateway === "paystack" ||
              watchGateway === "lemon-squeezy") && (
              <div className="space-y-2">
                <label className="font-medium text-2xl block">
                  Payment Type*
                </label>
                <Controller
                  name="paymentType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid-cols-2"
                      disabled={watchGateway === "lemon-squeezy"} // Disable for lemon-squeezy
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="recurrent"
                          id="recurrent"
                          className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                          disabled={watchGateway === "lemon-squeezy"}
                        />
                        <label htmlFor="recurrent" className="text-white">
                          Monthly
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="fixed"
                          id="fixed"
                          className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                        />
                        <label htmlFor="fixed" className="text-white">
                          One time
                        </label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {(watchGateway === "paystack" ||
                  watchGateway === "lemon-squeezy") &&
                  "paymentType" in errors && (
                    <p className="text-red-500">
                      {errors?.paymentType?.message}
                    </p>
                  )}
              </div>
            )}
          </div>

          {/* Dialogs */}
          <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
            <DialogContent className="rounded-lg">
              <DialogHeader>
                <DialogTitle>Do you want to proceed?</DialogTitle>
                <DialogDescription className="flex items-center justify-center">
                  <Link href={paymentData?.data?.authorization_url ?? ""}>
                    <Button className="flex items-center justify-center mt-5">
                      Proceed
                    </Button>
                  </Link>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog open={showCoinsubDialog} onOpenChange={setShowCoinsubModal}>
            <DialogContent className="rounded-lg">
              <DialogHeader>
                <DialogTitle>Do you want to proceed?</DialogTitle>
                <DialogDescription className="flex items-center justify-center">
                  <Button
                    className="flex items-center justify-center mt-5"
                    onClick={handleCoinsubSubmission}
                  >
                    Proceed
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog
            open={showBlockradarDialog}
            onOpenChange={setShowBlockradarModal}
          >
            <DialogContent className="rounded-lg">
              <DialogHeader>
                <DialogTitle>Do you want to proceed?</DialogTitle>
                <DialogDescription className="flex items-center justify-center">
                  <Button
                    className="flex items-center justify-center mt-5"
                    onClick={handleBlockradarSubmission}
                  >
                    Proceed
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="md:col-span-2 bg-[#080821] p-10 border border-[#232323]">
          {hasSelectedCourse && courseDetail ? (
            <CourseInfo
              courses={courseDetail}
              paymentType={watchPaymentType}
              currencyName={currencyName}
              isPaystackLoading={paystackLoading}
              isCoinsubLoading={coinsubLoading}
              isBlockradarLoading={blockradarLoading}
              onGatewaySelect={(gateway) => setValue("gateway", gateway)}
              isValid={isValid}
              selectedGateway={watchGateway}
            />
          ) : (
            <div className="text-center py-10">
              <h1 className="text-3xl font-medium mb-5">Course Information</h1>
              {watchCourse ? (
                <p className="text-gray-400">Loading course details...</p>
              ) : (
                <p className="text-gray-400">
                  Please select a course to view details.
                </p>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
