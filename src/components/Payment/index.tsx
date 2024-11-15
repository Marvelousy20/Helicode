"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
} from "@/redux/feature/courses/courseApi";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { handleError } from "@/lib/handle-error";
import Link from "next/link";

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
const cohorts = ["November 2024", "January 2025"] as const;

// const courses = Object.keys(coursesInfo);
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
  "3VO",
  "Other",
] as const;

// Zod schema
const schema = z.object({
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
  // courseOfInterest: z.enum(courses),
  course: z.string().min(1, { message: "Please select a course of interest" }),
  cohort: z.string().min(1, { message: "Please select a cohort" }),
  referralSource: z.enum(referralSources),
  // paymentPlan: z.enum(["Full Payment", "Monthly Payment"]),
  paymentType: z.enum(["recurrent", "fixed"]),
  paymentCurrency: z.enum(["NGN", "USD"]),

  // paymentMethod: z.enum(["Credit card", "Bank Transfer", "Crypto"]),
});

export default function ContactInfo() {
  const { data: countries, isLoading } = useGetCountryQuery();

  const { data: allCourses, isLoading: coursesLoading } =
    useGetAllCoursesQuery();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
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
      course: "",
      // cohort: "",
      referralSource: "Twitter",
      // paymentPlan: "Full Payment",
      paymentCurrency: "NGN",
      // paymentMethod: "Credit card",
      paymentType: "fixed",
    },
  });

  const [show, setShow] = useState(false);

  const watchCountry = watch("country");
  const selectedCountry = watch("country");
  const watchCourse = watch("course");
  // const watchPaymentPlan = watch("paymentPlan");
  const currencyName = watch("paymentCurrency");
  const watchPaymentType = watch("paymentType");

  const { data: stateData, isLoading: stateLoading } = useGetStateQuery(
    selectedCountry,
    { skip: !selectedCountry }
  );

  // Get Course Details
  const { data: courseDetail, isLoading: detailLoading } =
    useGetAllCourseDetalsQuery(watchCourse);

  console.log(courseDetail);

  const [
    payment,
    { data: paymentData, isSuccess, isLoading: paymentLoading, error, isError },
  ] = usePaymentMutation();

  // if (isSuccess) {
  //   console.log(
  //     "User payment:",
  //     paymentData?.message,
  //     paymentData?.data?.authorization_url
  //   );
  //   window.open(paymentData?.data?.authorization_url);
  // }

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
      // window.open(paymentData?.data?.authorization_url, "_blank");
      setShow(true);
      reset();
    }

    if (error) {
      handleError(error);
      console.log(error);
    }
  }, [paymentData?.message, isSuccess, error]);

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("Allvalues:", values);
    payment(values);
  };

  // useEffect(() => {
  //   setShow(true);
  // }, []);

  return (
    <div>
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
                      {/* {detailLoading ? (
                        <SelectItem value="loading">
                          Loading cohort...
                        </SelectItem>
                      ) : (
                        courseDetail?.data?.map((cohort, i) => (
                          <SelectItem key={i} value={cohort?.cohort}>
                            {cohort?.cohort}
                          </SelectItem>
                        ))
                        
                      )} */}
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
                      {referralSources.map((source) => (
                        <SelectItem key={source} value={source}>
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

            {/* <div className="space-y-2">
              <label
                htmlFor="referralSource"
                className="font-medium text-2xl block"
              >
                Payment Plan*
              </label>
              <Controller
                name="paymentPlan"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid-cols-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Full Payment"
                        id="full-payment"
                        className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="full-payment" className="text-white">
                        Full Payment
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Monthly Payment"
                        id="monthly-payment"
                        className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="monthly-payment" className="text-white">
                        Monthly Payment
                      </label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.paymentPlan && (
                <p className="text-red-500">{errors.paymentPlan.message}</p>
              )}
            </div> */}

            {/* currency name */}

            <div className="space-y-2">
              <label
                htmlFor="referralSource"
                className="font-medium text-2xl block"
              >
                Currency*
              </label>
              <Controller
                name="paymentCurrency"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid-cols-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="NGN"
                        id="NGN"
                        className=" border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="full-payment" className="text-white">
                        NGN
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="USD"
                        id="USD"
                        className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="monthly-payment" className="text-white">
                        USD
                      </label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.paymentCurrency && (
                <p className="text-red-500">
                  {errors.paymentCurrency?.message}
                </p>
              )}
            </div>

            {/* payment type */}

            <div className="space-y-2">
              <label
                htmlFor="referralSource"
                className="font-medium text-2xl block"
              >
                Payment Type*
              </label>
              <Controller
                name="paymentType"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid-cols-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="recurrent"
                        id="recurrent"
                        className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="full-payment" className="text-white">
                        Monthly
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="fixed"
                        id="fixed"
                        className="border-white text-white focus:ring-white data-[state=checked]:bg-white w-2.5 h-2.5"
                      />
                      <label htmlFor="monthly-payment" className="text-white">
                        One time
                      </label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.paymentType && (
                <p className="text-red-500">{errors.paymentType?.message}</p>
              )}
            </div>
          </div>

          {/* <div className="py-10">
            <hr className="border-[#454545]" />
          </div> */}

          {/* <div className="space-y-2 px-10">
            <label
              htmlFor="referralSource"
              className="font-medium text-2xl block mb-10"
            >
              Payment method*
            </label>
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="gap-y-6"
                >
                  <div className="flex justify-between bg-[#232323] items-center space-x-2 py-4 rounded-[8px] px-6">
                    <label htmlFor="credit-card" className="text-white">
                      Credit card
                    </label>
                    <RadioGroupItem value="Credit card" id="credit-card" />
                  </div>
                  <div className="flex items-center justify-between bg-[#232323] space-x-2 py-4 rounded-[8px] px-6">
                    <label htmlFor="bank-transfer" className="text-white">
                      Bank Transfer
                    </label>
                    <RadioGroupItem value="Bank Transfer" id="bank-transfer" />
                  </div>
                  <div className="flex items-center justify-between bg-[#232323] space-x-2 py-4 rounded-[8px] px-6">
                    <label htmlFor="crypto" className="text-white">
                      Crypto
                    </label>
                    <RadioGroupItem value="Crypto" id="crypto" />
                  </div>
                </RadioGroup>
              )}
            />
            {errors.paymentMethod && (
              <p className="text-red-500">{errors.paymentMethod.message}</p>
            )}
          </div> */}

          {/* <div className="px-10">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div> */}
          <Dialog onOpenChange={setShow} open={show}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent className=" rounded-lg">
              <DialogHeader>
                <DialogTitle>Do you want to proceed?</DialogTitle>
                <DialogDescription className="flex items-center justify-center">
                  <Button className="flex items-center justify-center mt-5">
                    <Link href={paymentData?.data?.authorization_url ?? ""}>
                      Proceed
                    </Link>
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="md:col-span-2 bg-[#080821] p-10 border border-[#232323]">
          <CourseInfo
            courses={courseDetail}
            paymentType={watchPaymentType}
            currencyName={currencyName}
            isLoading={paymentLoading}
          />
        </div>
      </form>
    </div>
  );
}
