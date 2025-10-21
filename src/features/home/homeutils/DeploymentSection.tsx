
import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";

function DeploymentSection() {
  return (
    <div className="flex flex-col items-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%] ">
      <div className="flex flex-col-reverse lg:flex-row   items-center justify-center gap-12">
        <div className="flex flex-col gap-10 lg:w-[50%]">
          <div className="flex flex-col gap-6 lg:max-w-[35vw]">
            <h2 className="text-4xl font-semibold text-foreground tracking-tight">
              Deploy Anywhere with Powerful Integrations
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Seamlessly integrate your Cortexvia-powered AI assistant across
              your digital ecosystem. Use our flexible widgets and robust APIs
              to embed it on websites, apps, or connect with popular platforms
              like Slack, Microsoft Teams, and more—tailored to your workflow.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-foreground/80">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>Website Embedding:</strong> Add a customizable chatbot
                widget to your site with a single line of code, enhancing user
                engagement.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>API Integration:</strong> Build custom AI solutions with
                Data and Model APIs, supporting deep system integration.
              </span>
            </div>
          </div>

          <Button className="px-6 py-3  rounded-lg transition-colors duration-200 font-medium w-fit">
            Deploy Your AI Assistant
          </Button>
        </div>

        <div className="lg:w-[35%]">
          <img
            alt="Deployment"
            src="/deployment.jpg"
            className="w-[90vw] lg:w-[25vw] rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default DeploymentSection;
