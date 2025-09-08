"use client";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useGetCountryQuery,
  useGetStateQuery,
} from "@/redux/feature/courses/courseApi";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import { Upload, X, CheckCircle } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useSubmitTalentMutation } from "@/redux/feature/courses/courseApi";
import { TalentPayload } from "@/redux/type";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

const talentFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  twitter: z.string().optional(),
  jobStatus: z.string().min(1, "Please select your current job status"),
  githubLink: z
    .string()
    .url({ message: "Invalid URL." })
    .optional()
    .or(z.literal("")),
  portfolioLink: z
    .string()
    .url({ message: "Invalid URL." })
    .optional()
    .or(z.literal("")),
  yearsOfExperience: z.string().min(1, "Please select years of experience"),
  salaryExpectation: z.string().min(1, "Please select salary expectation"),
  referral: z
    .string()
    .min(2, { message: "Please tell us how you heard about Helicode." }),
  linkedInUrl: z.string().url({ message: "Invalid URL." }),
  resume: z
    .any()
    .refine((file) => file?.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5MB.",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file?.type),
      { message: "Only PDF or Word documents are accepted." }
    ),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type TalentFormData = z.infer<typeof talentFormSchema>;

const roleOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "AI/ML Engineer",
  "Blockchain Developer",
  "Product Manager",
  "UX/UI Designer",
  "Quality Assurance Engineer",
  "Mobile Developer",
  "Security Specialist",
  "Cloud Engineer",
  "Site Reliability Engineer (SRE)",
  "Game Developer",
  "Embedded Systems Engineer",
  "Systems Analyst",
  "Network Engineer",
  "Database Administrator",
  "Technical Support Specialist",
];

const jobStatusOptions = [
  "Actively looking",
  "Open to opportunities",
  "Not looking",
  "Employed but interested",
];

const experienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5+ years",
  "10+ years",
];

const salaryOptions = [
  "$500-$4000 per month",
  "$4000-$10,000 per month",
  "$10,000 - $15,000 per month",
];

const referralOptions = [
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

export default function TalentApplicationForm() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const { data: countries = [], isLoading: countriesLoading } =
    useGetCountryQuery();

  const { data: states, isLoading: statesLoading } = useGetStateQuery(
    selectedCountry,
    { skip: !selectedCountry }
  );

  const [submitTalent, { isLoading: isSubmitting }] = useSubmitTalentMutation();

  const form = useForm<TalentFormData>({
    resolver: zodResolver(talentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      city: "",
      role: "",
      twitter: "",
      jobStatus: "",
      githubLink: "",
      portfolioLink: "",
      yearsOfExperience: "",
      salaryExpectation: "",
      referral: "",
      linkedInUrl: "",
      resume: null,
      termsAccepted: false,
    },
    mode: "onChange",
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    onDrop: (acceptedFiles: string | any[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setUploadedFile(file);
        form.setValue("resume", file, { shouldValidate: true });
      }
    },
  });

  const removeFile = () => {
    setUploadedFile(null);
    form.setValue("resume", null, { shouldValidate: true });
  };

  const onSubmit = async (data: TalentFormData) => {
    try {
      const formData = new FormData();

      // Append all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (key === "resume" && value instanceof File) {
          formData.append(key, value);
        } else if (key !== "resume" && key !== "termsAccepted") {
          formData.append(key, value as string);
        }
      });

      await submitTalent(formData).unwrap();

      setShowSuccessModal(true);
      form.reset();
      setUploadedFile(null);
      setSelectedCountry("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#080821] text-white p-10">
      <div>
        <h1 className="text-lg lg:text-3xl font-semibold">
          Talent Application
        </h1>
        <p className="text-lg font-normal mt-2">
          Work with leading global companies in AI and Web3. Set your own rates
          and get paid what you’re worth while building products that shape the
          future.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Last Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedInUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">LinkedIn URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.linkedin.com/in/yourprofile"
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Twitter */}
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  X (Formerly Twitter)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.x.com/in/yourprofile"
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Country*</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCountry(value);
                      form.setValue("city", ""); // Reset city when country changes
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                        <SelectValue placeholder="Nigeria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countriesLoading ? (
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">City*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                        <SelectValue placeholder="Lagos Island" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statesLoading ? (
                        <SelectItem value="loading">
                          Loading states...
                        </SelectItem>
                      ) : (
                        states?.map((state) => (
                          <SelectItem key={state.iso2} value={state.name}>
                            {state.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Resume Upload */}
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Resume*</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    {!uploadedFile ? (
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed border-[#454545] rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-primary/50 ${
                          isDragActive ? "border-primary bg-primary/5" : ""
                        }`}
                      >
                        <input {...getInputProps()} />
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          {isDragActive
                            ? "Drop your resume here"
                            : "Upload Resume"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Drag and drop or click to browse (PDF, DOC, DOCX)
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Upload className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {uploadedFile.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Role*</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Frontend Engineer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roleOptions.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  Current job status*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Actively looking" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobStatusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Github Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Github Link"
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="portfolioLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Portfolio Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Portfolio Link"
                    className="border border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  Total years of experience*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="More than 3 years" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experienceOptions.map((exp) => (
                      <SelectItem key={exp} value={exp}>
                        {exp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Salary Expectation */}
          <FormField
            control={form.control}
            name="salaryExpectation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  Salary Expectation*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="$40k - $60k per year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {salaryOptions.map((salary) => (
                      <SelectItem key={salary} value={salary}>
                        {salary}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* How did you hear about Helicode */}
          <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">
                  How did you hear about Helicode?*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-[#454545] data-[placeholder]:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14">
                      <SelectValue placeholder="Twitter" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {referralOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms and Conditions */}
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-muted-foreground">
                    Terms and Conditions*
                  </FormLabel>
                  <p className="text-sm text-muted-foreground">
                    I understand that Helicode has no obligation to connect me
                    with potential employers or to notify me if an application
                    has not been accepted. I also understand that I may have to
                    undergo a KYC process later in the application process if I
                    am accepted.
                  </p>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-[#8D58FF] hover:bg-primary/90 text-primary-foreground text-xs w-[131px]"
            disabled={isSubmitting || !form.formState.isValid}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-sm sm:max-w-md bg-card border-border">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground text-center">
              Application Submitted Succesfully!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-center">
              Thanks for submitting your profile. We’ll review your information
              and connect with you about upcoming opportunities.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
