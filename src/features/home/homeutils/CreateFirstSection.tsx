import { AnimateWithType, MotionH1, MotionParagraph } from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";

function CreateFirstSection() {
  return (
    <div className="justify-center text-background   flex items-center gap-10 mt-5 lg:mt-32 relative ">
      <div>
        <img src="/home/bg-banner.png" className=" rounded  h-[100vh] opac  " />
      </div>

      <AnimateWithType className="flex absolute gap-10 flex-col w-full items-center">
        <MotionH1 className="text-4xl text-center lg:text-[60px] font-semibold">
          Create your first RAG workflow today
        </MotionH1>
        <MotionParagraph className="text-center  w-[95%] lg:w-[50%] text-background/90">
          Create your first RAG powered workflow in Cortexvia today: Simply
          upload a document, PDF, or YouTube video URL to build your knowledge
          base, then query it with natural language questions for context aware,
          cited responses. In minutes, integrate multi-model inference via our
          SDKs and deploy a fully customizable React chatbot streamlined for
          developers, scalable for teams, and hallucination-free for reliable
          results. No backend hassle, just pure AI acceleration.
        </MotionParagraph>
        <Button className=" mt-10 px-6 py-3 rounded-lg">
          Get Started for Free
        </Button>
      </AnimateWithType>
    </div>
  );
}

export default CreateFirstSection;
