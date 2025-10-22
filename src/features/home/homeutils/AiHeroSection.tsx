import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function AIHeroSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%] ">
      <div className="lg:w-[35%]">
        <img
          alt="AI Hero"
          src="/home/people-discuss.jpg"
          className="w-[90vw]  lg:w-[25vw] rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col gap-8  lg:w-[50%]">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-center text-foreground tracking-tight">
            Stay Relevant in the Age of AI
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Become the AI hero your team needs with Cortexvia. Our platform
            empowers you to create RAG-powered chatbots that enhance customer
            support, streamline employee workflows, and drive business
            growth—all with minimal effort and maximum impact.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-foreground/80">
          <div className="flex items-center gap-3">
            <div className="lg:w-5 lg:h-5 w-4 h-4">
              <FaStar className="lg:w-5 lg:h-5 w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Effortless Setup:</strong> Build and deploy AI chatbots in
              minutes using intuitive tools, no coding required.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="lg:w-5 lg:h-5 w-4 h-4">
              <FaStar className="lg:w-5 lg:h-5 w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Actionable Insights:</strong> Leverage RAG to deliver
              precise, data-driven responses from your documents and videos.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="lg:w-5 lg:h-5 w-4 h-4">
              <FaStar className="lg:w-5 lg:h-5 w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Scalable Impact:</strong> Boost efficiency and customer
              satisfaction with customizable, high-performance AI solutions.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="lg:w-5 lg:h-5 w-4 h-4">
              <FaStar className="lg:w-5 lg:h-5 w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Team Empowerment:</strong> Enable your team to harness AI
              with secure, easy-to-use tools and real-time analytics.
            </span>
          </div>
        </div>
        <Button className="mt-6  rounded-lg py-3 px-6  transition-colors duration-200 font-medium w-fit">
          Become an AI Hero
        </Button>
      </div>
    </div>
  );
}

export default AIHeroSection;
