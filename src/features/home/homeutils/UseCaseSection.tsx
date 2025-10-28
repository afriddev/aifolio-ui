import {
  AnimateWithType,
  MotionH2,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import {
  AgentsSvg,
  CodingSvg,
  CustomerSupportSvg,
  PricingSvg,
  ProductivitySvg,
  UseCaseSvg,
} from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";
import { BsCodeSlash } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoClock } from "react-icons/go";

function UseCaseSection() {
  return (
    <div className="flex flex-col  items-center gap-20 ">
      <div className="flex gap-5 items-center">
        <UseCaseSvg /> <MotionH2>Use cases for Cortexvia</MotionH2>
      </div>

      <div className="flex lg:flex-row flex-col justify-center">
        <div className="border-t py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
          <CodingSvg />
          <MotionH5 className="text-foreground ">Developer Tools</MotionH5>
          <MotionParagraph className="text-foreground/70 lg:h-[15vh]">
            Build AI-powered applications with Cortexvia’s SDKs and APIs.
            Integrate SmartRAG, embeddings, and inference models to enhance
            productivity, automate queries, and accelerate code workflows.
          </MotionParagraph>
          <AnimateWithType className="mt-2">
            <Button variant="outline">Learn More</Button>
          </AnimateWithType>
        </div>

        <div className="border-t py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
          <AgentsSvg />
          <MotionH5 className="text-foreground ">
            AI Agents & Automation
          </MotionH5>
          <MotionParagraph className="text-foreground/70 lg:h-[15vh]">
            Create intelligent agents powered by Cortexvia’s RAG pipelines and
            model orchestration layer. Enable decision-making, tool selection,
            and real-time responses for enterprise automation.
          </MotionParagraph>
          <AnimateWithType className="mt-2">
            <Button variant="outline">Learn More</Button>
          </AnimateWithType>
        </div>

        <div className="border-t py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
          <ProductivitySvg />
          <MotionH5 className="text-foreground ">
            Business Intelligence
          </MotionH5>
          <MotionParagraph className="text-foreground/70 lg:h-[15vh]">
            Leverage Cortexvia to analyze company documents, reports, and
            emails. Summarize data, extract insights, and deliver contextual
            analytics using secure RAG and model APIs.
          </MotionParagraph>
          <AnimateWithType className="mt-2">
            <Button variant="outline">Learn More</Button>
          </AnimateWithType>
        </div>

        <div className="border-t border-b lg:border-b-0 py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
          <CustomerSupportSvg />
          <MotionH5 className="text-foreground ">Customer Support</MotionH5>
          <MotionParagraph className="text-foreground/70 lg:h-[15vh]">
            Power intelligent chatbots and virtual agents with Cortexvia’s
            contextual retrieval system. Handle multi-step inquiries and support
            tickets with real-time accuracy and personalization.
          </MotionParagraph>
          <AnimateWithType className="mt-2">
            <Button variant="outline">Learn More</Button>
          </AnimateWithType>
        </div>
      </div>

      <div className="flex mt-3 flex-col items-center gap-10 justify-center w-full bg-white/50 p-20">
        <MotionH2 className="flex items-center  gap-5">
          <PricingSvg />
          How We Support AI-Driven Startups
        </MotionH2>

        <MotionParagraph className="text-lg text-foreground/70 text-center lg:w-[60%] mt-2">
          For venture-backed startups building with Cortexvia, our startup
          program provides API credits, developer resources, and advanced speed
          tiers to help you scale your AI products faster — from prototype to
          production.
        </MotionParagraph>

        <div className="flex lg:flex-row mt-20 flex-col justify-center  border-foreground/10">
          <div className="border-t py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
            <BsCodeSlash className="w-10 h-10 text-foreground/80" />
            <MotionH5 className="text-foreground ">Free API Credits</MotionH5>
            <MotionParagraph className="text-foreground/70">
              Get complimentary Cortexvia API credits to experiment, build RAG
              systems, and integrate AI features into your apps with zero
              upfront cost.
            </MotionParagraph>
          </div>

          <div className="border-t py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
            <GoClock className="w-10 h-10 text-foreground/80" />
            <MotionH5 className="text-foreground ">
              Extended Rate Limits
            </MotionH5>
            <MotionParagraph className="text-foreground/70">
              Enjoy increased token and request limits across speed tiers —
              ideal for startups scaling AI workloads or deploying production
              RAG assistants.
            </MotionParagraph>
          </div>

          <div className="border-t border-b lg:border-b-0 py-8 lg:border-l border-foreground/10 px-10 lg:border-t-0 lg:py-2 flex flex-col gap-4">
            <FaGlobeAmericas className="w-10 h-10 text-foreground/80" />
            <MotionH5 className="text-foreground ">
              Community & Mentorship
            </MotionH5>
            <MotionParagraph className="text-foreground/70">
              Get access to our developer community, AI-focused startup
              sessions, and mentorship from Cortexvia’s technical team to
              accelerate your growth.
            </MotionParagraph>
          </div>
        </div>
        <AnimateWithType className="mt-10">
          <Button variant={"outline"}>Apply Now</Button>
        </AnimateWithType>
      </div>
    </div>
  );
}

export default UseCaseSection;
