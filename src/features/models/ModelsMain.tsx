import { Button } from "@/components/ui/button";
import AllModelsSection from "./utils/AllModelsSection";
import { MotionDiv, MotionParagraph, MotionH2, MotionH5, AnimateWithType } from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function ModelsMain() {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      animate="visible"
      className="flex items-center w-full justify-center mt-12 lg:mt-20"
    >
      <div className="flex flex-col gap-12 lg:gap-16 px-2 lg:px-0 w-full  lg:max-w-[70vw] items-center justify-center">
        <AnimateWithType type="smoothFade" className="flex flex-col gap-8 w-full border-b pb-16 items-center justify-center text-center">
          <MotionH5 variant="smoothFade" className="text-primary [word-spacing:8px] text-xs lg:text-sm uppercase">
            PERFORMANCE, SPEED, AND CHOICE
          </MotionH5>
          <MotionH2 variant="zoomIn" className="text-4xl lg:text-5xl font-light">
            Model Pricing & Performance
          </MotionH2>
          <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70 max-w-[80%]">
            Choose from a range of Cortexvia models optimized for every use case—from lightweight inference to high-speed enterprise workloads. Compare throughput, context size, and daily token capacity across tiers.
          </MotionParagraph>
          <MotionDiv variant="pulse">
            <Button className="h-10 px-6">Explore Models</Button>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType type="smoothFade" className="flex lg:flex-row flex-col items-center justify-center gap-12 bg-white px-6 py-10 lg:p-16 rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            About Our Models
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex w-full lg:w-1/2 flex-col gap-6">
            <MotionH5 variant="smoothFade" className="font-medium text-lg lg:text-xl">
              Engineered for Speed, Built for Developers
            </MotionH5>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Cortexvia models are classified into tiers. Each tier offers a unique balance of model size, speed, and token throughput—giving you complete control over cost and performance.
            </MotionParagraph>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              The <strong>Free Tier</strong> provides access to entry-level models under 200 TPS for testing and light workloads. Upgrade to the <strong>Developer Tier</strong> for advanced models with higher throughput (500–3000 TPS) and larger context windows.
            </MotionParagraph>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Enterprise customers can deploy private or hybrid setups with dedicated compute, custom scaling, and unlimited throughput.{" "}
              <a href="mailto:support@cortexvia.com" className="text-primary underline ml-1">Contact us</a> to discuss enterprise deployments.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Get Started</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>

        <AllModelsSection />

        <AnimateWithType type="pulse" className="flex lg:flex-row flex-col items-center justify-center gap-12 bg-white px-6 py-10 lg:p-16 rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            Batch Inference API
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col gap-6 w-full lg:w-1/2">
            <MotionH5 variant="smoothFade" className="font-medium text-lg lg:text-xl">
              Scale Model Workloads Efficiently
            </MotionH5>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              The Cortexvia Batch API lets you process large volumes of model requests asynchronously—ideal for generating embeddings, document summaries, or multi-query jobs. Run thousands of model calls without affecting your real-time limits.
            </MotionParagraph>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Enjoy <strong>up to 50% lower cost</strong> for bulk tasks, with flexible processing windows ranging from <strong>24 hours to 7 days</strong>. Designed for developers handling large inference pipelines.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Learn More</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>

        <AnimateWithType type="smoothFade" className="flex items-center justify-center gap-12 bg-white px-6 py-10 lg:p-16 lg:flex-row flex-col rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            Multi-Model Routing
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col w-full lg:w-1/2 gap-6">
            <MotionH5 variant="smoothFade" className="font-medium text-lg lg:text-xl">
              Intelligent Model Selection for Every Task
            </MotionH5>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Cortexvia automatically routes requests to the optimal model based on your speed tier, cost target, or use case. Whether you’re generating text, embeddings, or reranking search results, the platform ensures every query is handled efficiently.
            </MotionParagraph>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Choose between <strong>Normal</strong> (100–300 TPS), <strong>Medium</strong> (500–1000 TPS), and <strong>Flash</strong> (1500–3000 TPS) speeds to balance cost and throughput. You can also define model routing rules for specific tasks in your project dashboard.
            </MotionParagraph>
            <MotionParagraph variant="smoothFade" className="text-base lg:text-lg text-foreground/70">
              Learn more about adaptive routing and performance tuning in the{" "}
              <a href="https://docs.cortexvia.com/api" className="text-primary underline">Model API Documentation</a>.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Read Documentation</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>
      </div>
    </motion.div>
  );
}

export default ModelsMain;