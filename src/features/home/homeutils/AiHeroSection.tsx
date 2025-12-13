import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { SettingsSvg } from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";
import { CiFileOn } from "react-icons/ci";
import { IoAnalytics, IoRocketOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";

function AIHeroSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center  ">
      <div className="flex flex-col bg-white/50  gap-5  p-5 py-10   lg:p-20 lg:gap-10 items-center">
        <div className="flex flex-col gap-4 lg:items-center  ">
          <MotionH2 className="flex  items-center gap-5 tracking-tight">
            <SettingsSvg />
            Stay Relevant in the Age of AI
          </MotionH2>
        </div>

        <div className="flex lg:flex-row flex-col  lg:mt-16 mt-5 gap-10 lg:gap-10 w-full  text-foreground/80">
          <div className="flex  items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5 ">
              <IoRocketOutline className=" lg:w-8 w-6 h-6  lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>

            <MotionParagraph>
              <strong>Effortless Setup:</strong> Launch intelligent chatbots and
              RAG-powered assistants in minutes — no coding or backend setup
              needed.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5 ">
              <CiFileOn className=" lg:w-8 w-6 h-6  lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Smart Knowledge Retrieval:</strong> Upload documents or
              videos and query them using Cortexvia’s advanced RAG pipelines for
              grounded, factual insights.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5 ">
              <IoAnalytics className=" lg:w-8 w-6 h-6  lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Real-Time Analytics:</strong> Track API usage, token flow,
              and performance through the Cortexvia dashboard to optimize every
              interaction.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5 ">
              <PiUsersThreeLight className=" lg:w-8 w-6 h-6  lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Team Empowerment:</strong> Equip your developers and teams
              with secure access, collaborative API keys, and seamless SDK
              integrations.
            </MotionParagraph>
          </div>
        </div>
        <AnimateWithType>
          <Button
            variant={"outline"}
            className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium bg-foreground text-background hover:bg-foreground/90  hover:text-white w-fit"
          >
            Get Started with Cortexvia
          </Button>
        </AnimateWithType>
      </div>
    </div>
  );
}

export default AIHeroSection;
