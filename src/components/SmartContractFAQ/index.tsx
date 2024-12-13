import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SmartContractFAQ() {
  return (
    <div className="max-w-[77rem] mx-auto text-center lg:px-6">
      <div>
        <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>How much does the course cost?</AccordionTrigger>
          <AccordionContent>
            You can choose between two payment options: $60 monthly installments
            for 3 months, or a one-time payment of $162 which saves you 10%.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need prior coding experience?
          </AccordionTrigger>
          <AccordionContent>
            Having basic programming knowledge will help you get the most out of
            this course, as you&apos;ll be learning the Ethereum programming
            language.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How long is the course?</AccordionTrigger>
          <AccordionContent>
            The course runs for 3 months, giving you enough time to master the
            fundamentals and build practical projects.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What can I do after completing this course?
          </AccordionTrigger>
          <AccordionContent>
            You&apos;ll be able to create smart contracts, build decentralized
            applications, and develop scalable blockchain solutions. These
            skills are highly valuable in the growing web3 job market.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Will I get hands-on experience?</AccordionTrigger>
          <AccordionContent>
            Yes, the course includes practical projects where you&apos;ll write
            actual smart contracts and build blockchain systems using Solidity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
