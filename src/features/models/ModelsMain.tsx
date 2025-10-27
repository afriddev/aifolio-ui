import { Button } from "@/components/ui/button";
import AllModelsSection from "./utils/AllModelsSection";

function ModelsMain() {
  return (
    <div className="flex items-center w-full justify-center mt-20">
      <div className="flex flex-col gap-10 lg:gap-20 px-2 w-full lg:w-[70%] items-center justify-center">
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-10 w-full border-b pb-20 items-center justify-center text-center">
          <h5 className="text-primary [word-spacing:8px] text-sm">
            {"PERFORMANCE, SPEED, AND CHOICE".toUpperCase()}
          </h5>
          <h2 className="text-5xl font-thin">Model Pricing & Performance</h2>
          <p className="text-foreground/70 lg:max-w-[80%]">
            Choose from a range of Cortexvia models optimized for every use
            case—from lightweight inference to high-speed enterprise workloads.
            Compare throughput, context size, and daily token capacity across
            tiers.
          </p>
          <Button>Explore Models</Button>
        </div>

        {/* ABOUT MODEL PRICING */}
        <div className="flex lg:flex-row flex-col items-center justify-center gap-20 bg-white px-5 py-10 lg:p-20 rounded">
          <h3 className="lg:w-[65%] text-5xl font-thin">About Our Models</h3>
          <div className="flex w-full flex-col gap-10">
            <h5 className="font-medium text-lg">
              Engineered for Speed, Built for Developers
            </h5>
            <p className="text-foreground/70">
              Cortexvia models are classified into tiers. Each tier offers a
              unique balance of model size, speed, and token throughput—giving
              you complete control over cost and performance.
            </p>
            <p className="text-foreground/70">
              The <strong>Free Tier</strong> provides access to entry-level
              models under 200 TPS for testing and light workloads. Upgrade to
              the <strong>Developer Tier</strong> for advanced models with
              higher throughput (500–3000 TPS) and larger context windows.
            </p>
            <p className="text-foreground/70">
              Enterprise customers can deploy private or hybrid setups with
              dedicated compute, custom scaling, and unlimited throughput.{" "}
              <a
                href="mailto:support@cortexvia.com"
                className="text-primary underline ml-1"
              >
                Contact us
              </a>{" "}
              to discuss enterprise deployments.
            </p>
            <Button className="w-fit h-fit">Get Started</Button>
          </div>
        </div>

        {/* MODEL LIMITS & PERFORMANCE SECTION */}
        <AllModelsSection />

        {/* BATCH INFERENCE SECTION */}
        <div className="flex lg:flex-row flex-col items-center justify-center gap-20 bg-white px-5 py-10 lg:p-20  rounded">
          <h3 className="lg:w-[65%] text-5xl font-thin">Batch Inference API</h3>
          <div className="flex flex-col gap-10 w-full">
            <h5 className="font-medium text-lg">
              Scale Model Workloads Efficiently
            </h5>
            <p className="text-foreground/70">
              The Cortexvia Batch API lets you process large volumes of model
              requests asynchronously—ideal for generating embeddings, document
              summaries, or multi-query jobs. Run thousands of model calls
              without affecting your real-time limits.
            </p>
            <p className="text-foreground/70">
              Enjoy <strong>up to 50% lower cost</strong> for bulk tasks, with
              flexible processing windows ranging from{" "}
              <strong>24 hours to 7 days</strong>. Designed for developers
              handling large inference pipelines.
            </p>
            <Button className="w-fit h-fit">Learn More</Button>
          </div>
        </div>

        {/* MULTI-MODEL ROUTING SECTION */}
        <div className="flex items-center justify-center gap-20 bg-white px-5 py-10 lg:p-20 lg:flex-row flex-col rounded">
          <h3 className="lg:w-[65%] text-5xl font-thin">Multi-Model Routing</h3>
          <div className="flex flex-col w-full gap-10">
            <h5 className="font-medium text-lg">
              Intelligent Model Selection for Every Task
            </h5>
            <p className="text-foreground/70">
              Cortexvia automatically routes requests to the optimal model based
              on your speed tier, cost target, or use case. Whether you’re
              generating text, embeddings, or reranking search results, the
              platform ensures every query is handled efficiently.
            </p>
            <p className="text-foreground/70">
              Choose between <strong>Normal</strong> (100–300 TPS),{" "}
              <strong>Medium</strong> (500–1000 TPS), and <strong>Flash</strong>{" "}
              (1500–3000 TPS) speeds to balance cost and throughput. You can
              also define model routing rules for specific tasks in your project
              dashboard.
            </p>
            <p className="text-foreground/70">
              Learn more about adaptive routing and performance tuning in the{" "}
              <a
                href="https://docs.cortexvia.com/api"
                className="text-primary underline"
              >
                Model API Documentation
              </a>
              .
            </p>
            <Button className="w-fit h-fit">Read Documentation</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelsMain;
