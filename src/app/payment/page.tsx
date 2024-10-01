import ContactInfo from "@/components/Payment/contactInfo";
import CourseInfo from "@/components/Payment/courseInfo";
import { z } from "zod";

// Data for dropdowns
export const ageRanges = ["18-24", "25-34", "35-44", "45+"] as const;
export const cohorts = [
  "January 2025",
  "April 2025",
  "July 2025",
  "October 2025",
] as const;
export const courses = [
  "Web3 UI/UX Design",
  "Blockchain Development",
  "Smart Contract Auditing",
] as const;
export const referralSources = [
  "AIESEC Ghana",
  "Social Media",
  "Friend Referral",
  "Online Ad",
] as const;

// Zod schema
export const schema = z.object({
  fullName: z.string().min(2, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(10, { message: "Phone Number is required" }),
  ageRange: z.enum(ageRanges),
  courseOfInterest: z.enum(courses),
  cohort: z.enum(cohorts),
  referralSource: z.enum(referralSources),
  paymentPlan: z.enum(["Full Payment", "Monthly Payment"]),
});

export default function page() {
  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("Submitting");
    console.log(values);
  };

  return (
    <div className="grid grid-cols-5 gap-6 mt-8 items-start">
      <div className="col-span-3 bg-[#080821] border border-[#232323]">
        <ContactInfo />
      </div>

      <div className="col-span-2 bg-[#080821] p-10 border border-[#232323]">
        <CourseInfo
          title="Marketing"
          desc="Embark on a visually detailed journey into the ecosystem of web3 design
        with Helicode's UI/UX program. This immersive 3-month course is for
        aspiring designers ready to take the decentralized web space head-on."
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
