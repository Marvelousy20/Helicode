import { CourseCard } from "@/components/Courses/course-card";

export default function Page() {
  return (
    <div className="lg:pt-24 pt-10 lg:px-24 md:px-8 px-4">
      <h2 className="text-center lg:text-5xl text-3xl font-semibold">
        Hands on courses for all levels
      </h2>

      <div className="grid grod-cols-1 lg:grid-cols-3 gap-10 mt-16">
        <CourseCard
          course="Web3 Marketing"
          duration="1 Month"
          location="Online"
          note="Master strategies to grow communities, drive adoption and amplify blockchain projects."
          level="Beginner"
          link="/marketing"
          src="/marketing.png"
          job="Web3 Marketer"
        />

        <CourseCard
          course="Blockchain Cybersecurity"
          duration="3 Months"
          location="Online"
          note="Learn the fundamentals of blockchain security, including how  cryptography ensures data integrity."
          level="Beginner"
          link="/blockchain-cybersecurity"
          src="/cybersecurity.png"
          job="Security Researcher"
        />

        <CourseCard
          course="Web3 Technical Writing"
          duration="1 Month"
          location="Online"
          note="Write clear, engaging documentation and content to simplify complex Web3 concepts."
          level="Beginner"
          link="/technical-writing"
          src="/technical.png"
          job="Technical Writer"
        />

        <CourseCard
          course="Smart Contract Development"
          duration="1 Month"
          location="Online"
          note="Learn the skills and knowledge to develop and deploy decentralized applications using Solidity."
          level="Beginner"
          link="/smart-contract-development"
          src="/smart-contract.png"
          job="Blockchain Developer"
        />

        <CourseCard
          course="Web3 Research"
          duration="3 Months"
          location="Online"
          note="Learn to analyze trends, evaluate protocols and uncover insights in Web3."
          level="Beginner"
          link="/web3-research"
          src="/web3-research.png"
          job="Web3 Researcher"
        />

        <CourseCard
          course="AI Agent"
          duration="1 Month"
          location="Online"
          note="Learn how to build AI agents that think, act, and solve problems on their own."
          level="Beginner"
          link="/ai-agent"
          src="/ai-agents.png"
          job="AI Agent"
        />
      </div>
    </div>
  );
}
