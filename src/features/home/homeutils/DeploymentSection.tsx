import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";
import {
  IoGlobeOutline,
  IoCloudUploadOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
  IoGitBranchOutline,
} from "react-icons/io5";

function DeploymentSection() {
  return (
    <div className="flex flex-col items-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-white/50  lg:gap-10">
        <div className="flex flex-col gap-10 lg:gap-0 w-full text-foreground/80 p-5 lg:p-20">
          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <AnimateWithType
             
              className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
            >
              <IoGlobeOutline className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Website Embedding:</strong> Deploy your AI chatbot
              directly to your website with a single snippet — fully responsive
              and themeable.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <AnimateWithType
             
              className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
            >
              <IoCloudUploadOutline className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Cloud Integration:</strong> Connect to your data wherever
              it lives — from private databases to cloud drives, with secure API
              calls.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <AnimateWithType
             
              className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
            >
              <IoChatbubbleEllipsesOutline className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Multi-Platform Chat:</strong> Integrate seamlessly with
              Slack, Microsoft Teams, or internal tools for cross-platform AI
              interactions.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <AnimateWithType
             
              className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
            >
              <IoSettingsOutline className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Custom Workflows:</strong> Automate actions or trigger
              APIs using Cortexvia’s webhooks and SDKs for complete workflow
              control.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-3 lg:flex-row flex-col">
            <AnimateWithType
             
              className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
            >
              <IoGitBranchOutline className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>CI/CD Ready:</strong> Integrate into your dev pipeline
              with ease — automate deployments and updates using secure access
              tokens.
            </MotionParagraph>
          </div>

          <AnimateWithType>
            <Button className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium w-fit">
              Deploy Your AI Assistant
            </Button>{" "}
          </AnimateWithType>
        </div>

        <div className="flex p-10 lg:p-20 flex-col gap-4 lg:max-w-[35vw]">
          <MotionH2 className="text-4xl lg:text-[50px] font-thin text-foreground tracking-tight">
            Deploy Anywhere with Powerful Integrations
          </MotionH2>
        </div>
      </div>
    </div>
  );
}

export default DeploymentSection;
