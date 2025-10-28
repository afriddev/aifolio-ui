import { Button } from "@/components/ui/button";
import {
  IoConstruct,
  IoDocumentText,
  IoAnalytics,
  IoPeopleCircle,
} from "react-icons/io5";

function NoCodeSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%]">
      <div className="flex flex-col lg:flex-row bg-white p-10 lg:p-20 gap-20 items-center">
        {/* Left Feature List */}
        <div className="flex flex-col gap-10 lg:gap-5 w-full text-foreground/80">
          {/* Effortless Setup */}
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoConstruct className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Effortless Setup:</strong> Build and launch intelligent
              chatbots with zero backend setup — Cortexvia takes care of RAG
              pipelines, model orchestration, and inference automatically.
            </span>
          </div>

          {/* Knowledge Retrieval */}
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoDocumentText className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Smart Knowledge Retrieval:</strong> Upload your documents
              or videos, and query them with Cortexvia’s RAG engines — SmartRAG,
              LightRAG, and GraphRAG — for contextual, grounded answers.
            </span>
          </div>

          {/* Analytics */}
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoAnalytics className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Real-Time Analytics:</strong> Monitor model usage, token
              flow, and costs through Cortexvia’s integrated analytics dashboard
              to optimize performance at scale.
            </span>
          </div>

          {/* Team Empowerment */}
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <div className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none">
              <IoPeopleCircle className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </div>
            <span>
              <strong>Team Empowerment:</strong> Enable secure, collaborative
              workflows with shared API keys, role-based access, and scalable
              multi-user infrastructure.
            </span>
          </div>

          <Button className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium w-fit">
            Watch Demo
          </Button>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col gap-4 lg:max-w-[35vw]">
          <h2 className="text-4xl lg:text-[70px] font-thin text-foreground tracking-tight">
            Create AI-Powered Apps with Minimal Coding
          </h2>
          <p className="text-foreground/70 text-base">
            Cortexvia’s SDKs and APIs let you design, connect, and deploy
            production-grade AI solutions effortlessly — from chatbots to data
            retrieval systems — without needing deep ML or backend expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoCodeSection;
