import Image from "next/image";

interface CourseProp {
  heading: string;
  text: string;
}

interface CoursesComponentProps {
  courses: CourseProp[];
}

export default function CourseSyllabus({ courses }: CoursesComponentProps) {
  return (
    <section className=" max-w-7xl pt-8 lg:px-24 lg:pt-32 max-w5xl mx-auto">
      <div className="border border-dashed border-[#343434] px-5 py-10 lg:p-10">
        <div className="flex items-center">
          <span className=" mr-[10px]">
            <Image
              src="/course-icon.svg"
              width={50}
              height={50}
              alt="course-icon"
            />
          </span>
          <p className=" text-[28px]">Course Syllabus</p>
        </div>
        {/* List of courses */}
        <div className=" mt-6 space-y-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className=" border border-[#232323] bg-[#080821] flex flex-col lg:flex-row items-center p-4 lg:p-6 text-left space-y-6 lg:space-y-0"
            >
              <span className=" mr-auto lg:mr-6">
                <Image
                  src="/Graduate.svg"
                  width={40}
                  height={25}
                  alt="graduate-icon"
                />
              </span>
              <div className="text-left space-y-3">
                <h1 className=" text-xl font-medium">{course.heading}</h1>
                <p className="text-[#B3B3B3] leading-6">{course.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
