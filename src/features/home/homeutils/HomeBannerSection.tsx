import {
  AnimateWithType,
  MotionDiv,
  MotionH1,
  MotionH3,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";
import { GoDependabot } from "react-icons/go";

function HomeBannerSection() {
  return (
    <div className="flex  lg:w-[50%]  w-[95%] relative">
      <AnimateWithType className=" flex flex-col w-full   gap-10  h-[100vh]   items-center justify-center  ">
        <MotionDiv>
          <div className="flex justify-center gap-1 pb-5 lg:-mt-[10vh] items-center  ">
            <GoDependabot className="h-8 w-8  " />
            <MotionH3>Chatbots</MotionH3>
            <div className="border ml-2 border-foreground  rounded-xs  px-2  lg:h-8  flex items-center justify-center text-xs lg:text-lg">
              Beta
            </div>
          </div>
        </MotionDiv>
        <MotionH1>
          <MotionH1 className="text-center">
            Empower Your Knowledge with AI
          </MotionH1>
        </MotionH1>
        <MotionParagraph className="text-center ">
          Upload documents or YouTube videos, get instant answers, and access
          multiple AI models. Manage API keys, track usage, and integrate smart
          AI features seamlessly into your projects.
        </MotionParagraph>
        <AnimateWithType>
          <Button className=" px-10 py-3  rounded-lg">Start Building</Button>
        </AnimateWithType>
      </AnimateWithType>
    </div>
  );
}

export default HomeBannerSection;
