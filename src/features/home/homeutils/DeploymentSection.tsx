import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import {  ToolsSvg } from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";
import {
  IoGlobeOutline,
  IoCloudUploadOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";

function DeploymentSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center">
      <div className="flex flex-col bg-white/50 gap-5 p-5 py-10 lg:p-20 lg:gap-10 items-center">
        <div className="flex flex-col gap-4 lg:items-center">
          <MotionH2 className="flex items-center gap-5 tracking-tight">
            <ToolsSvg />
            Deploy Anywhere with Powerful Integrations
          </MotionH2>
        </div>

        <div className="flex lg:flex-row flex-col lg:mt-16 mt-5 gap-10 lg:gap-10 w-full text-foreground/80">
          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoGlobeOutline className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Website Embedding:</strong> Deploy your AI chatbot
              directly to your website with a single snippet — fully responsive
              and themeable.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoCloudUploadOutline className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Cloud Integration:</strong> Connect to your data wherever
              it lives — from private databases to cloud drives, with secure API
              calls.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoChatbubbleEllipsesOutline className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Multi-Platform Chat:</strong> Integrate seamlessly with
              Slack, Microsoft Teams, or internal tools for cross-platform AI
              interactions.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoSettingsOutline className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Custom Workflows:</strong> Automate actions or trigger
              APIs using Cortexvia’s webhooks and SDKs for complete workflow
              control.
            </MotionParagraph>
          </div>

          
        </div>

        <AnimateWithType>
          <Button
            variant="outline"
            className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium bg-foreground text-background hover:bg-foreground/90  hover:text-white w-fit"
          >
            Deploy Your AI Assistant
          </Button>
        </AnimateWithType>
      </div>
    </div>
  );
}

export default DeploymentSection;