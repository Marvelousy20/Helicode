import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlockchainCyberSecurityFAQ() {
  return (
    <div className="max-w-[77rem] mx-auto text-center lg:px-6">
      <div>
        <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="font-medium text-[#8B8B8B] leading-[-2em] mt-3">
          Everything you need to know about Helicode
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What security skills will I gain from this course?
          </AccordionTrigger>
          <AccordionContent>
            You&apos;ll learn threat modelling, smart contract security,
            penetration testing, cryptographic protocols, and regulatory
            compliance standards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How much does the program cost?</AccordionTrigger>
          <AccordionContent>
            The course offers two payment plans: $70 monthly for 3 months, or a
            one-time payment of $189 with a 10% discount.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            What background knowledge is needed?
          </AccordionTrigger>
          <AccordionContent>
            Basic understanding of blockchain technology is helpful, but the
            course starts with fundamentals before moving to advanced security
            concepts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How long is the security program?</AccordionTrigger>
          <AccordionContent>
            The course runs for 3 months, combining theoretical knowledge with
            practical security exercises.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Will I get hands-on security experience?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you&apos;ll work on real security audits, threat assessments,
            and penetration testing exercises.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            What certification or proof of completion do I receive?
          </AccordionTrigger>
          <AccordionContent>
            While not explicitly mentioned in the document, you&apos;ll build a
            portfolio of security assessments and practical project work
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
