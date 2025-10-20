import { Button } from "@/components/ui/button";
import { GoDependabot } from "react-icons/go";

function HomeBannerSection() {
  return (
    <div className="flex ">
      <img src="home-bg-01.png" className="w-[60vw] h-[120vh]  -ml-[10vw]" />
      <div className=" flex flex-col w-full gap-10    min-h-[90vh]   items-center justify-center h-full">
        <div className="flex justify-center gap-1  -mt-[10vh] items-center ">
          <GoDependabot className="h-8 w-8  " />
          <h3 className="text-4xl ">Chatbots</h3>
          <div className="border ml-2 border-foreground  rounded-xs  px-2  h-8  flex items-center justify-center text-lg">
            Beta
          </div>
        </div>
        <h1 className=" text-[80px] text-center -mt-10">
          Empower Your Knowledge with AI
        </h1>
        <p className="text-xl w-[70%] text-foreground text-center">
          Upload documents or YouTube videos, get instant answers, and access
          multiple AI models. Manage API keys, track usage, and integrate smart
          AI features seamlessly into your projects.
        </p>
        <Button className="text-xl px-10 py-3  rounded">Start Building</Button>
      </div>
    </div>
  );
}

export default HomeBannerSection;
