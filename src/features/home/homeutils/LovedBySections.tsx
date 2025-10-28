import {
  AnimateWithType,
  MotionDiv,
  MotionH2,
  MotionH4,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Search,
  Zap,
  BarChart3,
  Key,
  BookOpen,
  Package,
  Code,
  Layers,
  Gauge,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Uploads",
    desc: "Upload documents (PDF, DOCX, TXT) or YouTube URLs. Cortexvia auto-extracts, embeds, and indexes your data securely.",
  },
  {
    icon: Search,
    title: "Intelligent RAG",
    desc: "Ask context-aware questions using SmartRAG, LightRAG, or GraphRAG—delivering grounded, accurate answers.",
  },
  {
    icon: Zap,
    title: "Fast Inference",
    desc: "Run multi-model AI inference with dynamic routing and streaming up to 2500 tokens/sec for real-time results.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Track token usage, API calls, and costs with real-time charts, alerts, and exportable usage reports.",
  },
  {
    icon: Key,
    title: "Secure API Keys",
    desc: "Generate and revoke Data or Model API keys with audit logs, role-based access, and auto-expiry protection.",
  },
  {
    icon: BookOpen,
    title: "SDK & Docs",
    desc: "Comprehensive RAG SDK and React Chatbot documentation with tutorials, examples, and API references.",
  },
  {
    icon: Package,
    title: "RAG Toolkit",
    desc: "Includes embeddings, reranking, and GraphRAG—integrate advanced retrieval into Python, JS, or Node apps.",
  },
  {
    icon: Code,
    title: "Chatbot Library",
    desc: "Plug-and-play React component supporting memory, themes, and streaming for enterprise chat interfaces.",
  },
  {
    icon: Layers,
    title: "Model Layer",
    desc: "Unified API for generation, embeddings, and reranking—switch model providers instantly with one endpoint.",
  },
  {
    icon: Gauge,
    title: "Speed Tiers",
    desc: "Scale performance across Normal, Medium, or Fast tiers—up to 2500 tokens/sec for high-throughput apps.",
  },
  {
    icon: Download,
    title: "Easy Setup",
    desc: "Install via npm, integrate instantly with REST APIs or SDKs, and deploy to FastAPI, Express, or custom stacks.",
  },
  {
    icon: BookOpen,
    title: "Developer Support",
    desc: "Access Discord, GitHub discussions, and email support for troubleshooting, feedback, and enterprise help.",
  },
];

export default function LovedBySections() {
  return (
    <div className="w-[95%] lg:w-[70%] mx-auto mt-20">
      <MotionDiv className="lg:text-center mb-12">
        <MotionH2 className="text-2xl lg:text-4xl font-medium">
          Loved by Innovators. Trusted by Enterprises.
        </MotionH2>
        <MotionParagraph className="text-foreground/70  mt-4 max-w-2xl mx-auto">
          Empower developers to build intelligent, secure, and scalable AI
          solutions with confidence.
        </MotionParagraph>
      </MotionDiv>

      <div className="grid grid-cols-1 bg-white/40 sm:grid-cols-2 lg:grid-cols-3 border border-border  overflow-hidden">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <MotionDiv
            key={i}
            className={`flex flex-col gap-4 items-start p-10 border-border 
              ${i < features.length - 3 ? "border-b" : ""} 
              ${i % 3 !== 2 ? "lg:border-r" : ""}`}
          >
            <Icon className="w-10 h-10 p-3 border" />

            <div className="flex flex-col ">
              <h3 className=" font-semibold">{title}</h3>
              <p className=" text-foreground/70">{desc}</p>
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="flex lg:flex-row flex-col border mt-20  overflow-hidden">
        <div className="p-10 lg:border-r bg-muted/30 flex items-center">
          <MotionH4>
            Empower your data with Cortexvia — start building intelligent,
            RAG-powered AI today.
          </MotionH4>
        </div>

        <div className="p-10 lg:border-r flex items-center">
          <MotionParagraph>
            Upload your documents, generate insights, and deploy
            production-grade assistants. Start for free and scale seamlessly
            with flexible usage tiers.
          </MotionParagraph>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <AnimateWithType type="smoothFade" className="flex flex-col gap-3">
            <Button className="rounded w-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="rounded w-full font-medium text-sm"
            >
              Watch Demo
            </Button>
          </AnimateWithType>
        </div>
      </div>
    </div>
  );
}
