"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Career from "@/components/Career";
import CourseInfo from "@/components/CourseInfo";
import CourseSyllabus from "@/components/CourseSyllabus";
import NewsLetter from "@/components/Newsletter";
import PricingCard from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { useGetDataAnalyticsQuery } from "@/redux/feature/courses/courseApi";
import { useRouter } from "next/navigation";
import SmartContractFAQ from "@/components/SmartContractFAQ";

const dataAnalyticsModule = [
  {
    number: 1,
    title: "Introduction to Data Analytics and Types of Analytics",
    topics: [
      {
        content: "What is Data Analytics?",
      },
      {
        content:
          "Difference between Data Analytics, Data Science, and Business Intelligence",
      },
      {
        content: "Analytics workflow and lifecycle",
      },
      {
        content:
          "Descriptive, Diagnostic, Predictive, and Prescriptive analytics",
      },
    ],
  },
  {
    number: 2,
    title: "Data Concepts and Tools Overview",
    topics: [
      {
        content: "Data types (structured, semi-structured, unstructured)",
      },
      {
        content: "Data sources and collection methods",
      },
      {
        content: "Ethics and data privacy (GDPR, HIPAA, local regulations)",
      },
      {
        content:
          "SExcel, SQL, Python, R, Tableau, Power BI Hands-on Project: Create a simple data analysis using a small dataset in Excel.",
      },
    ],
  },
  {
    number: 3,
    title: "Data Quality, Preprocessing, and Transformation",
    topics: [
      {
        content: "Identifying and handling missing data",
      },
      {
        content: "Detecting and removing duplicates",
      },
      {
        content: "Outlier detections and treatment",
      },
      {
        content: "Data normalization and standardization",
      },
      {
        content: "Encoding categorical variables",
      },
      {
        content: "Data formatting & validation",
      },
    ],
  },
  {
    number: 4,
    title: "Practical Tools",
    topics: [
      {
        content: "Excel functions for cleaning",
      },
      {
        content: "Python (Pandas) for preprocessing",
      },
      {
        content: "SQL queries for cleaning data",
      },
      {
        content:
          "Hands-on Project: Clean and prepare a messy dataset for further analysis.",
      },
    ],
  },
  {
    number: 5,
    title: "Excel for Analytics",
    topics: [
      {
        content: "PivotTabls & PivotCharts",
      },
      {
        content:
          "Advanced formulas (VLOOKUP, INDEX-MATCH, TEXT, DATE, IF, SUMIF, etc.)",
      },
      {
        content: "Conditional formatting for insights",
      },
    ],
  },
  {
    number: 6,
    title: "FSQL for Data Analytics",
    topics: [
      {
        content: "Basics (SELECT, WHERE, ORDER BY, GROUP BY)",
      },
      {
        content: "Joins, Subqueries, and Aggregations",
      },
      {
        content: "Window functions and Common Table Expressions (CTEs)",
      },
      {
        content:
          "Hands-on Project: Use SQL to query a database and Excel to visualize the results.",
      },
    ],
  },
  {
    number: 7,
    title: "Descriptive Statistics",
    topics: [
      {
        content: "Mean, Median, Mode, Variance, Standard Deviation",
      },
      {
        content: "Percentiles and Quartiles",
      },
    ],
  },
  {
    number: 8,
    title: "Inferential Statistics",
    topics: [
      {
        content: "Hypothesis testing (t-tests, chi-square)",
      },
      {
        content: "Confidence intervals",
      },
      {
        content: "Correlation and regression analysis",
      },
      {
        content: "Using Python (NumPy, SciPy, statsmodels) for statistics",
      },
      {
        content:
          "Hands-on Project: Perform statistical analysis on a business dataset to answer key questions.",
      },
    ],
  },
  {
    number: 9,
    title: "Principles of Data Visualization",
    topics: [
      {
        content: "Choosing the right chart for the data",
      },
      {
        content: "Color theory & design best practices",
      },
      {
        content: "Avoiding misleading visuals",
      },
    ],
  },
  {
    number: 10,
    title: "Visuallization Tools",
    topics: [
      {
        content: "Excel advanced charts",
      },
      {
        content:
          "Tableau basics (dashboards, calculated fields, interactivity)",
      },
      {
        content:
          "Hands-on Project: Create a dashboard for a real-world dataset in Tableau or Power BI.",
      },
    ],
  },
  {
    number: 11,
    title: "AI in Practice & MLOps",
    topics: [
      {
        content: "Model deployment (FastAPI, Docker, Streamlit/Gradio)",
      },
      {
        content: "Monitoring models in production",
      },
      {
        content: "Project: End-to-End ML pipeline (train, deploy, test)",
      },
    ],
  },
  {
    number: 12,
    title: "Business Analytics",
    topics: [
      {
        content: "KPIs and metrics tracking",
      },
      {
        content: "Cohort analysis, churn analysis",
      },
      {
        content: "Market basket analysis",
      },
    ],
  },

  {
    number: 12,
    title: "Predictive Analytics",
    topics: [
      {
        content: "Introduction to machine learning in analytics",
      },
      {
        content: "Linear regression, logistic regression basics",
      },
      {
        content: "Time-series forecasting (ARIMA, Prophet)",
      },
      {
        content:
          "Hands-on Project: Build a basic predictive model to forecast sales or demand.",
      },
    ],
  },
];

export default function Page() {
  const router = useRouter();
  const { data, isFetching, isLoading } = useGetDataAnalyticsQuery();

  const info = [
    {
      imgLink: "/Hashtag-Square.svg",
      heading: "Cohort",
      cohortTwo: "October 18, 2025",
    },
    {
      imgLink: "/Time.svg",
      heading: "Duration",
      text: "3 Months",
    },
    {
      imgLink: "/Location.svg",
      heading: "Location",
      text: "LIVE online",
    },
    {
      imgLink: "/Dollar.svg",
      heading: "Average Salary",
      text: "120,000",
    },
  ];

  const handleStartLearning = () => {
    router.push("/payment?course=Data%20Analytics");
  };

  isFetching && <p>Loading</p>;
  return (
    <main className="lg:py-5 mt-12">
      <div className=" h-[77dvh] lg:h-[75vh] p24 relative border border-dashed border-[#343434] max-w7xl max-w-[90rem] mx-auto">
        <div className="relative z-0 h-full">
          <div className="absolute left-0 top-10 lg:top-16 w-full h-[0.7px] w[2px] bg-[#343434]" />
          <div className="absolute left-6 lg:left-20 top-0 w-[0.7px] h-full w[2px] bg-[#343434]">
            <div className="absolute top-[40%] border border-[#8D58FF] h-[90px]" />
          </div>
          <div className="absolute left-0 bottom-10 lg:bottom-16 w-full h-[0.7px] w[2px] bg-[#343434]" />
          <div className="absolute right-6 lg:right-20 top-0 w-[0.7px] h-full w[2px] bg-[#343434]">
            <div className="absolute top-[40%] border border-[#8D58FF] h-[90px]" />
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(180deg, #080821 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className=" relativeflexjustify-centeritems-center hfull z-0 border[0.7px] border-[#343434] border-l-0 bgblack absolute right-6 lg:right-20 left-6 lg:left-20 top-10 lg:top-16 bottom-10 lg:bottom-16 m-[1.4px]"
        >
          <div className="relative flex flex-col justify-center items-center h-full text-center">
            <div className="flex items-center border border[#9960FF]/[20] border-[#99A9FF3D] py-[6px] px-3 rounded-full">
              <span className=" mr-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.57308 5.35384C6.98548 4.61404 7.19167 4.24414 7.49995 4.24414C7.80823 4.24414 8.01443 4.61404 8.42683 5.35384L8.53352 5.54524C8.65071 5.75547 8.70931 5.86058 8.80067 5.92994C8.89203 5.99929 9.00582 6.02504 9.23339 6.07653L9.44057 6.12341C10.2414 6.3046 10.6418 6.3952 10.7371 6.70154C10.8323 7.00788 10.5594 7.32709 10.0134 7.96551L9.87217 8.13068C9.71702 8.3121 9.63945 8.4028 9.60456 8.51502C9.56966 8.62724 9.58139 8.74827 9.60484 8.99032L9.6262 9.21069C9.70874 10.0625 9.75001 10.4884 9.5006 10.6777C9.2512 10.867 8.87629 10.6944 8.12648 10.3492L7.93249 10.2599C7.71942 10.1617 7.61288 10.1127 7.49995 10.1127C7.38703 10.1127 7.28049 10.1617 7.06742 10.2599L6.87343 10.3492C6.12362 10.6944 5.74871 10.867 5.49931 10.6777C5.2499 10.4884 5.29117 10.0625 5.37371 9.21069L5.39507 8.99032C5.41852 8.74827 5.43025 8.62724 5.39535 8.51502C5.36045 8.4028 5.28288 8.3121 5.12774 8.13068L4.9865 7.96551C4.44055 7.32709 4.16757 7.00788 4.26284 6.70154C4.3581 6.3952 4.75851 6.3046 5.55934 6.12341L5.76652 6.07653C5.99409 6.02504 6.10788 5.99929 6.19924 5.92994C6.2906 5.86058 6.3492 5.75547 6.46639 5.54524L6.57308 5.35384Z"
                    fill="#8D58FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 0.5C7.76972 0.5 7.98837 0.718652 7.98837 0.988372V2.2907C7.98837 2.56042 7.76972 2.77907 7.5 2.77907C7.23028 2.77907 7.01163 2.56042 7.01163 2.2907V0.988372C7.01163 0.718652 7.23028 0.5 7.5 0.5ZM11.7524 3.24762C11.9431 3.43834 11.9431 3.74756 11.7524 3.93828L11.5289 4.1618C11.3381 4.35252 11.0289 4.35252 10.8382 4.1618C10.6475 3.97108 10.6475 3.66186 10.8382 3.47114L11.0617 3.24762C11.2524 3.0569 11.5617 3.0569 11.7524 3.24762ZM3.24769 3.24769C3.43841 3.05697 3.74763 3.05697 3.93835 3.24769L4.16187 3.47121C4.35259 3.66193 4.35259 3.97115 4.16187 4.16187C3.97115 4.35259 3.66193 4.35259 3.47121 4.16187L3.24769 3.93835C3.05697 3.74763 3.05697 3.43841 3.24769 3.24769ZM0.5 7.5C0.5 7.23028 0.718652 7.01163 0.988372 7.01163H2.2907C2.56042 7.01163 2.77907 7.23028 2.77907 7.5C2.77907 7.76972 2.56042 7.98837 2.2907 7.98837H0.988372C0.718652 7.98837 0.5 7.76972 0.5 7.5ZM12.2209 7.5C12.2209 7.23028 12.4396 7.01163 12.7093 7.01163H14.0116C14.2813 7.01163 14.5 7.23028 14.5 7.5C14.5 7.76972 14.2813 7.98837 14.0116 7.98837H12.7093C12.4396 7.98837 12.2209 7.76972 12.2209 7.5ZM4.1618 10.8382C4.35252 11.0289 4.35252 11.3381 4.1618 11.5289L3.93842 11.7522C3.7477 11.943 3.43848 11.943 3.24776 11.7522C3.05704 11.5615 3.05704 11.2523 3.24776 11.0616L3.47114 10.8382C3.66186 10.6475 3.97108 10.6475 4.1618 10.8382ZM10.8382 10.8383C11.0289 10.6476 11.3381 10.6476 11.5289 10.8383L11.7522 11.0617C11.9429 11.2524 11.9429 11.5617 11.7522 11.7524C11.5615 11.9431 11.2523 11.9431 11.0616 11.7524L10.8382 11.529C10.6475 11.3383 10.6475 11.0291 10.8382 10.8383ZM7.5 12.2209C7.76972 12.2209 7.98837 12.4396 7.98837 12.7093V14.0116C7.98837 14.2813 7.76972 14.5 7.5 14.5C7.23028 14.5 7.01163 14.2813 7.01163 14.0116V12.7093C7.01163 12.4396 7.23028 12.2209 7.5 12.2209Z"
                    fill="#8D58FF"
                  />
                </svg>
              </span>
              <h3 className="text-xs lg:text-base">School of Engineering</h3>
            </div>
            <div className="px-4">
              <h1 className=" text-[1.9rem] font-medium lg:text-7xl pt-3 lg:pt-4">
                Data Analytics
              </h1>
              <p className="text-white opacity-80 mt-6 max-w-3xl lg:text-lg mx-auto">
                Our Data Analytics course is designed to equip you with the
                skills to transform raw data into meaningful insights. Through
                hands-on projects, real-world tools, and industry best
                practices, you’ll learn how to analyze, visualize, and interpret
                data to make smarter decisions.
              </p>
            </div>
            <div
              onClick={handleStartLearning}
              className="mt-12 border-4border-[#8D58FF4D] bg-[#8D58FF4D] rounded-xl p-[6px] cursor-pointer"
            >
              <div className="flex items-center border border-dashed border-[#4B0CF14D] bg-[#8D58FF] rounded-md py-3 px-6 transition-colors duration-300 hover:bg-primary/90">
                Start Learning <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseInfo info={info} />
      <CourseSyllabus modules={dataAnalyticsModule} title="Data Analytics" />

      <section className="max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto pb-[3.8rem] lg:pb-[7rem]">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-center lg:text-[3rem] text-[1.875rem] font-semibold">
            Pricing
          </h1>
          <div className="bg-[#8D58FF] rounded-[30px] bg-opacity-15 p-2 flex gap-2">
            <Image src="/starr.svg" alt="star" width={20} height={20} />
            <div className="text-[#8D58FF] text-xl font-normal">
              Early birds
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
          <PricingCard
            planType="Payment Plan"
            description="If you choose this payment plan, you will be required to pay once every 3 months."
            features={[
              "Course Material (Lifetime access)",
              "1 on 1 mentorship with the Instructor",
              "Access to Telegram and Discord community (Lifetime access)",
              "Live Classes and Hands-on Projects",
            ]}
            monthlyPrice={
              data?.data?.[0]?.price?.NGN ? `₦${data.data[0].price.NGN}` : "N/A"
            }
            currentPrice={
              data?.data?.[0]?.recurrentPrice?.USD
                ? `$${data?.data[0].recurrentPrice?.USD}`
                : "N/A"
            }
            buttonLabel="Apply now"
            recurrent
            discountPrice="80"
          />
          <PricingCard
            planType="One-time payment"
            description="If you choose this payment plan, you will be required to make a full payment."
            features={[
              "Course Material (Lifetime access)",
              "1 on 1 mentorship with the Instructor",
              "Access to Telegram and Discord community (Lifetime access)",
              "Live Classes and Hands-on Projects",
            ]}
            currentPrice={
              data?.data?.[0]?.price?.USD
                ? `$${data.data[0].price?.USD}`
                : "N/A"
            }
            noOfMonths={
              data?.data?.[0]?.recurrentPrice?.frequency
                ? `(${data.data[0].recurrentPrice.frequency})`
                : ""
            }
            buttonLabel="Apply now"
            discountPrice="80"
          />
        </div>
      </section>

      <section className=" max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto space-y-10">
        <h1 className="text-center lg:text-[3rem] text-[1.875rem] font-semibold">
          Start Your New Career Faster
        </h1>
        <Career />
      </section>

      <div className="max-w-7xl pt-8 lg:px-24 lg:pt-[6.25rem] mx-auto pb-[3.8rem] lg:pb-[7rem]">
        <Testimonial />
      </div>
      <div className="pt-28">{/* <SmartContractFAQ /> */}</div>
      <div className="pt-[3.8rem] lg:pt-[7.5rem]">
        <NewsLetter />
      </div>
    </main>
  );
}
