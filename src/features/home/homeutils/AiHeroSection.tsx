import { Button } from "@/components/ui/button";
import {
  IoRocket,
  IoDocumentText,
  IoAnalytics,
  IoPeople,
} from "react-icons/io5";

function AIHeroSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%] ">
      <div className="flex flex-col lg:flex-row bg-white p-10 lg:p-20  gap-20 items-center">
        <div className="flex flex-col gap-4 lg:items-center ">
          <h2 className="text-4xl lg:text-[70px]  font-thin   text-foreground tracking-tight">
            Stay Relevant in the Age of AI
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:gap-5 w-full text-foreground/80">
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoRocket className="text-primary lg:w-5 w-5 h-5  lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Effortless Setup:</strong> Launch intelligent chatbots and
              RAG-powered assistants in minutes — no coding or backend setup
              needed.
            </span>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoDocumentText className="text-primary lg:w-5 w-5 h-5  lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Smart Knowledge Retrieval:</strong> Upload documents or
              videos and query them using Cortexvia’s advanced RAG pipelines for
              grounded, factual insights.
            </span>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoAnalytics className="text-primary lg:w-5 w-5 h-5  lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Real-Time Analytics:</strong> Track API usage, token flow,
              and performance through the Cortexvia dashboard to optimize every
              interaction.
            </span>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoPeople className="text-primary lg:w-5 w-5 h-5  lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Team Empowerment:</strong> Equip your developers and teams
              with secure access, collaborative API keys, and seamless SDK
              integrations.
            </span>
          </div>

          <Button className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium w-fit">
            Get Started with Cortexvia
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AIHeroSection;
