import { Button } from "@/components/ui/button";
import RAGDocsLimitsSection from "./utils/RAGDocsLimitsSection";

function PricingMain() {
  return (
    <div className="flex items-center w-full justify-center mt-20">
      <div className="flex flex-col gap-20 w-[70%] items-center justify-center">
        <div className="flex flex-col gap-10 w-full border-b pb-20 items-center justify-center text-center">
          <h5 className="text-primary [word-spacing:8px] text-sm ">
            {"Simple, Scalable, and Transparent".toUpperCase()}
          </h5>
          <h2 className="text-5xl font-thin">Built for Every Builder</h2>
          <p className="text-foreground/70">
            Fast queries, reliable inference, and predictable pricing—so you can
            scale with confidence.
          </p>
          <Button>Start Building</Button>
        </div>

        <div className="flex items-center  justify-center gap-20 bg-white p-20 rounded">
          <h3 className="w-[65%] text-5xl font-thin ">About Our Pricing</h3>
          <div className="flex w-[100%] flex-col gap-10">
            <h5 className="font-medium text-lg">
              No Hidden Costs, No Surprises
            </h5>
            <p className="text-foreground/70">
              Many AI providers use opaque or elastic pricing. Cortexvia keeps
              things simple—linear, transparent, and predictable. Whether you’re
              running a single RAG query or scaling enterprise workloads, you
              always know what you’ll pay.
            </p>
            <p className="text-foreground/70">
              Get started for free with the <strong>Free Tier</strong>—ideal for
              testing document uploads and RAG queries. When you’re ready to
              scale, move to the <strong>Developer Tier</strong> for higher
              Word limits, faster inference speeds, and extended API access.
            </p>
            <p className="text-foreground/70">
              View full pricing details on your dashboard, and custom enterprise
              models or self-hosted options are available upon request.
              <a
                href="mailto:support@cortexvia.com"
                className="text-primary underline ml-1"
              >
                Contact us
              </a>{" "}
              for tailored plans.
            </p>
            <Button className="w-fit h-fit">Get Started</Button>
          </div>
        </div>
        <RAGDocsLimitsSection />

        <div className="flex items-center justify-center gap-20 bg-white p-20 rounded  ">
          <h3 className="w-[65%] font-thin text-5xl  ">Batch API</h3>
          <div className="flex flex-col gap-10 w-full">
            <h5 className="font-medium text-lg">
              Process Large-Scale Workloads Asynchronously
            </h5>
            <p className="text-foreground/70">
              The Cortexvia Batch API enables you to process thousands of RAG or
              inference requests asynchronously—ideal for bulk document
              processing, data indexing, and high-volume analytics. Run large
              jobs efficiently without affecting your real-time API rate limits.
            </p>
            <p className="text-foreground/70">
              Enjoy up to <strong>50% lower costs</strong> for batch workloads
              and flexible processing windows ranging from{" "}
              <strong>24 hours to 7 days</strong>. Upload your data, queue your
              tasks, and let Cortexvia handle the rest—scalable, reliable, and
              secure.
            </p>
            <p className="text-foreground/70">
              For enterprise-scale deployments or private on-prem solutions,
              reach out via our{" "}
              <a href="/enterprise-access" className="text-primary underline">
                Enterprise Access Page
              </a>
              .
            </p>
            <Button className="w-fit h-fit">Learn More</Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20 bg-white p-20 rounded ">
          <h3 className="w-[65%] text-5xl font-thin">Multi-Model Inference</h3>
          <div className="flex flex-col w-[100%] gap-10">
            <h5 className="font-medium text-lg">
              Intelligent Model Routing for Every Use Case
            </h5>
            <p className="text-foreground/70">
              Cortexvia’s inference layer seamlessly routes your requests across
              multiple AI models based on your preferred{" "}
              <strong>speed tier</strong>, <strong>cost target</strong>, or
              <strong> task type</strong>. Whether you’re generating text,
              embeddings, or reranking results, the platform optimizes
              performance automatically.
            </p>
            <p className="text-foreground/70">
              Choose between <strong>Normal</strong>, <strong>Medium</strong>,
              and <strong>Fast</strong> tiers to balance cost and throughput —
              perfect for scalable RAG pipelines or production applications.
              Pricing is transparently passed through to the underlying models
              and services used in each request.
            </p>
            <p className="text-foreground/70">
              Learn more about model routing, latency optimization, and
              inference cost management in our{" "}
              <a
                href="https://docs.cortexvia.com/api"
                className="text-primary underline"
              >
                API Documentation
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

export default PricingMain;
