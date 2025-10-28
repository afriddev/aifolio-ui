import { Button } from "@/components/ui/button";
import RAGDocsLimitsSection from "./utils/RAGDocsLimitsSection";
import { MotionDiv, MotionParagraph, MotionH2, MotionH5, AnimateWithType } from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function PricingMain() {
  return (
    <div className="flex items-center w-full justify-center mt-12 lg:mt-20">
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} initial="hidden" animate="visible" className="flex w-full px-2 lg:px-0 flex-col gap-16 lg:w-[70%] items-center justify-center">
        <AnimateWithType className="flex flex-col gap-8 w-full border-b pb-16 items-center justify-center text-center">
          <MotionH5 variant="fadeInUp" className="text-primary [word-spacing:8px] text-xs lg:text-sm uppercase">
            Simple, Scalable, and Transparent
          </MotionH5>
          <MotionH2  className="text-4xl lg:text-5xl font-light">
            Built for Every Builder
          </MotionH2>
          <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70 max-w-[80%]">
            Fast queries, reliable inference, and predictable pricing—so you can scale with confidence.
          </MotionParagraph>
          <MotionDiv variant="pulse">
            <Button className="h-10 px-6">Start Building</Button>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType className="flex lg:flex-row flex-col items-center justify-center gap-12 bg-white/50 px-6 py-10 lg:p-16 rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            About Our Pricing
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex w-full lg:w-1/2 flex-col gap-6">
            <MotionH5 variant="fadeInUp" className="font-medium text-lg lg:text-xl">
              No Hidden Costs, No Surprises
            </MotionH5>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Many AI providers use opaque or elastic pricing. Cortexvia keeps things simple—linear, transparent, and predictable. Whether you’re running a single RAG query or scaling enterprise workloads, you always know what you’ll pay.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Get started for free with the <strong>Free Tier</strong>—ideal for testing document uploads and RAG queries. When you’re ready to scale, move to the <strong>Developer Tier</strong> for higher Word limits, faster inference speeds, and extended API access.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              View full pricing details on your dashboard, and custom enterprise models or self-hosted options are available upon request.
              <a href="mailto:support@cortexvia.com" className="text-primary underline ml-1">Contact us</a> for tailored plans.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Get Started</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>

        <RAGDocsLimitsSection />

        <AnimateWithType className="flex lg:flex-row flex-col items-center justify-center gap-12 bg-white/50 px-6 py-10 lg:p-16 rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            Batch API
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col gap-6 w-full lg:w-1/2">
            <MotionH5 variant="fadeInUp" className="font-medium text-lg lg:text-xl">
              Process Large-Scale Workloads Asynchronously
            </MotionH5>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              The Cortexvia Batch API enables you to process thousands of RAG or inference requests asynchronously—ideal for bulk document processing, data indexing, and high-volume analytics. Run large jobs efficiently without affecting your real-time API rate limits.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Enjoy up to <strong>50% lower costs</strong> for batch workloads and flexible processing windows ranging from <strong>24 hours to 7 days</strong>. Upload your data, queue your tasks, and let Cortexvia handle the rest—scalable, reliable, and secure.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              For enterprise-scale deployments or private on-prem solutions, reach out via our <a href="/enterprise-access" className="text-primary underline">Enterprise Access Page</a>.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Learn More</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>

        <AnimateWithType className="flex lg:flex-row flex-col items-center justify-center gap-12 bg-white/50 px-6 py-10 lg:p-16 rounded-2xl">
          <MotionH2 variant="slideUpBounce" className="lg:w-1/2 text-4xl lg:text-5xl font-light">
            Multi-Model Inference
          </MotionH2>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col w-full lg:w-1/2 gap-6">
            <MotionH5 variant="fadeInUp" className="font-medium text-lg lg:text-xl">
              Intelligent Model Routing for Every Use Case
            </MotionH5>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Cortexvia’s inference layer seamlessly routes your requests across multiple AI models based on your preferred <strong>speed tier</strong>, <strong>cost target</strong>, or <strong>task type</strong>. Whether you’re generating text, embeddings, or reranking results, the platform optimizes performance automatically.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Choose between <strong>Normal</strong>, <strong>Medium</strong>, and <strong>Fast</strong> tiers to balance cost and throughput—perfect for scalable RAG pipelines or production applications. Pricing is transparently passed through to the underlying models and services used in each request.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg text-foreground/70">
              Learn more about model routing, latency optimization, and inference cost management in our <a href="https://docs.cortexvia.com/api" className="text-primary underline">API Documentation</a>.
            </MotionParagraph>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 w-fit">Read Documentation</Button>
            </MotionDiv>
          </motion.div>
        </AnimateWithType>
      </motion.div>
    </div>
  );
}

export default PricingMain;