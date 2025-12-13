import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import {  TerminalSvg } from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";
import { IoConstruct, IoDocumentText, IoAnalytics, IoPeopleCircle } from "react-icons/io5";

function NoCodeSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center">
      <div className="flex flex-col bg-white/50 gap-5 p-5 py-10 lg:p-20 lg:gap-10 items-center">
        <div className="flex flex-col gap-4 lg:items-center">
          <MotionH2 className="flex items-center gap-5 tracking-tight">
            <TerminalSvg />
            Create AI-Powered Apps with Minimal Coding
          </MotionH2>
        </div>

        <div className="flex lg:flex-row flex-col lg:mt-16 mt-5 gap-10 lg:gap-10 w-full text-foreground/80">
          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoConstruct className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Effortless Setup:</strong> Build and launch intelligent
              chatbots with zero backend setup — Cortexvia takes care of RAG
              pipelines, model orchestration, and inference automatically.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoDocumentText className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Smart Knowledge Retrieval:</strong> Upload your documents
              or videos, and query them with Cortexvia’s RAG engines — SmartRAG,
              LightRAG, and GraphRAG — for contextual, grounded answers.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoAnalytics className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Real-Time Analytics:</strong> Monitor model usage, token
              flow, and costs through Cortexvia’s integrated analytics dashboard
              to optimize performance at scale.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoPeopleCircle className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Team Empowerment:</strong> Enable secure, collaborative
              workflows with shared API keys, role-based access, and scalable
              multi-user infrastructure.
            </MotionParagraph>
          </div>
        </div>

        <AnimateWithType>
          <Button
            variant="outline"
            className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium bg-foreground text-background hover:bg-foreground/90  hover:text-white w-fit"
          >
            Watch Demo
          </Button>
        </AnimateWithType>
      </div>
    </div>
  );
}

export default NoCodeSection;