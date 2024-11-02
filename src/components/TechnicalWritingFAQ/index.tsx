import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Web3TechnicalWritingFAQ() {
  return (
    <div className="max-w-[77rem] mx-auto text-center lg:px-6">
      <div>
        <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What types of content will I learn to write?
          </AccordionTrigger>
          <AccordionContent>
            You&apos;ll learn to write whitepapers, API documentation, DApp
            guides, smart contract explanations, and community tutorials.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What&apos;s the cost structure?</AccordionTrigger>
          <AccordionContent>
            The course offers one option: A single payment of $70.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need technical background?</AccordionTrigger>
          <AccordionContent>
            While helpful, you don&apos;t need a technical background as the
            course covers blockchain fundamentals specifically for writers
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How long will I study?</AccordionTrigger>
          <AccordionContent>
            The program runs for one month, balancing theory with practical
            writing assignments.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            What will be in my portfolio after completing the course?
          </AccordionTrigger>
          <AccordionContent>
            You&apos;ll have samples of technical documentation, whitepapers,
            API guides, and tutorial content focused on web3 projects.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can I start freelancing after this course?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you&apos;ll have the skills to write technical content for
            blockchain projects, whitepapers, and documentation services.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
