import {
  AnimateWithType,
  MotionDiv,
  MotionH1,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";
import { GoDependabot } from "react-icons/go";

function HomeBannerSection() {
  return (
    <div className="flex  lg:w-[50%]  w-[95%] relative">
      <AnimateWithType type="zoomIn" className=" flex flex-col w-full   gap-10  h-[90vh]   items-center justify-center  ">
        <MotionDiv>
          <div className="flex justify-center gap-1 pb-5 lg:-mt-[10vh] items-center  ">
            <GoDependabot className="h-8 w-8  " />
            <h3 className="text-xl lg:text-4xl ">Chatbots</h3>
            <div className="border ml-2 border-foreground  rounded-xs  px-2  lg:h-8  flex items-center justify-center text-xs lg:text-lg">
              Beta
            </div>
          </div>
        </MotionDiv>
        <MotionH1>
          <h1 className=" text-5xl lg:text-[80px] text-center -mt-10">
            Empower Your Knowledge with AI
          </h1>
        </MotionH1>
        <MotionParagraph className="  w-[95%] lg:text-xl lg:w-[90%] text-foreground text-center">
          Upload documents or YouTube videos, get instant answers, and access
          multiple AI models. Manage API keys, track usage, and integrate smart
          AI features seamlessly into your projects.
        </MotionParagraph>
        <AnimateWithType type="zoomIn">
          <Button className=" px-10 py-3  rounded-lg">Start Building</Button>
        </AnimateWithType>
      </AnimateWithType>
    </div>
  );
}

export default HomeBannerSection;
