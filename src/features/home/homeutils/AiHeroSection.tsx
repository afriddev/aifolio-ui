import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function AIHeroSection() {
  return (
    <div className="flex items-center justify-center gap-12 mt-32 w-[80%] max-w-7xl mx-auto">
      <div className="w-[35%]">
        <img
          alt="AI Hero"
          src="/people-discuss.jpg"
          className="w-[25vw] rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col gap-8 w-[50%]">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-foreground tracking-tight">
            Stay Relevant in the Age of AI
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Become the AI hero your team needs with Cortexvia. Our platform
            empowers you to create RAG-powered chatbots that enhance customer
            support, streamline employee workflows, and drive business
            growth—all with minimal effort and maximum impact.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-foreground/80">
          <div className="flex items-center gap-3">
            <FaStar className="w-5 h-5 text-constructive" />
            <span>
              <strong>Effortless Setup:</strong> Build and deploy AI chatbots in
              minutes using intuitive tools, no coding required.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="w-5 h-5 text-constructive" />
            <span>
              <strong>Actionable Insights:</strong> Leverage RAG to deliver
              precise, data-driven responses from your documents and videos.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="w-5 h-5 text-constructive" />
            <span>
              <strong>Scalable Impact:</strong> Boost efficiency and customer
              satisfaction with customizable, high-performance AI solutions.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="w-5 h-5 text-constructive" />
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
