import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Web3MarketingFAQ() {
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
            What marketing strategies will I learn?
          </AccordionTrigger>
          <AccordionContent>
            You&apos;ll learn decentralized marketing strategies, tokenomics,
            blockchain analytics, content marketing, and Web3-specific social
            media approaches.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How much is the investment?</AccordionTrigger>
          <AccordionContent>
            The course requires a one-time payment of $70 for full access.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What&apos;s the course length?</AccordionTrigger>
          <AccordionContent>
            The program runs for 1 month, covering all aspects of Web3
            marketing.
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
          <AccordionTrigger>Do I need marketing experience?</AccordionTrigger>
          <AccordionContent>
            While traditional marketing knowledge is helpful, the course teaches
            Web3-specific marketing from the ground up.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What tools will I work with?</AccordionTrigger>
          <AccordionContent>
            You&apos;ll learn blockchain analytics tools, Web3 social media
            platforms, and marketing metrics specific to the blockchain space.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can I start working as a Web3 marketer after this?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you&apos;ll have the skills to market Web3 products and
            understand the unique aspects of blockchain marketing.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
