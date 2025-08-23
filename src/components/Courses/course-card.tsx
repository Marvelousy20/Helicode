import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  course: string;
  level: string;
  duration: string;
  location: string;
  note: string;
  link: string;
  src: string;
  job: string;
}

export const CourseCard = ({
  course,
  duration,
  location,
  note,
  level,
  link,
  src,
  job,
}: CourseCardProps) => {
  return (
    <div className="border border-[#FFFFFF17] rounded-[16px] bg-[#FFFFFF12] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h5 className="text-[#8B8B8B] font-medium">{course}</h5>
        <div className="text-[#6DE786] text-sm bg-[#64E77E] bg-opacity-15 px-4 py-1 rounded-full">
          {level}
        </div>
      </div>
      <h1 className="font-bold text-2xl">{job}</h1>

      <div className="w-full">
        <Image
          src={src}
          alt={`${course} img`}
          width={340}
          height={238}
          className="w-full object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 340px"
        />
      </div>

      <h1 className="text-sm text-[#8B8B8B]">{note}</h1>

      <div className="flex gap-7">
        <div className="flex items-center gap-2">
          <Image src="/clock.png" alt="location" width={20} height={20} />
          <h3 className="font-medium">{duration}</h3>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/location.png" alt="location" width={20} height={20} />
          <h3 className="font-medium">{location}</h3>
        </div>
      </div>

      <div className="!mt-8">
        <Link href={link} className="w-full text-sm font-semibold">
          <p className="bg-[#8D58FF] py-3 text-center rounded-[8px]">
            Go to Course
          </p>
        </Link>
      </div>
    </div>
  );
};
