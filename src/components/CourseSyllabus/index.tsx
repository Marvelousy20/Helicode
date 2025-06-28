import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Topic {
  content: string;
}

interface Module {
  number: number;
  title: string;
  topics: Topic[];
}

interface CourseSyllabusProps {
  title: string;
  modules: Module[];
}

export default function CourseSyllabus({
  modules,
  title,
}: CourseSyllabusProps) {
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
          <p className=" text-[28px]">{title} Curriculum</p>
        </div>

        <Accordion type="single" className="mt-6 space-y-4" collapsible>
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#232323] bg-[#080821] flex flex-col p-4 lg:p-6 text-left space-y-6"
            >
              <AccordionTrigger className="!p-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/Graduate.svg"
                    width={40}
                    height={25}
                    alt="graduate-icon"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-normal">
                      Week {module.number}
                    </h2>
                    <h4 className="font-semibold text-xl md:text-3xl">
                      {module.title}
                    </h4>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-white leading-6">
                      {topic.content}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
