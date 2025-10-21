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

function LovedBySections() {
  return (
    <div className="flex flex-col mt-5 lg:mt-32 w-[95%] lg:w-[70%]">
      <div className="flex flex-col items-center gap-5 justify-center">
        <h2 className="text-4xl font-bold text-center">
          Loved by innovators. Trusted by enterprises.
        </h2>
        <p className="text-center lg:text-lg   lg:w-[50vw] text-foreground/70  ">
          Empower developers to build intelligent apps — with the security,
          control, and compliance your organization requires. Refined through 5+
          years of AI infrastructure excellence.
        </p>
      </div>
      <div className="flex flex-col  justify-between lg:flex-row mt-10  ">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <Upload className="w-6 h-6" />
          <p className="text-foreground px-4">
            Upload documents or YouTube URLs for easy data ingestion
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <Search className="w-6 h-6" />
          <p className="text-foreground px-4">
            Ask questions and get intelligent answers via RAG
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <Zap className="w-6 h-6" />
          <p className="text-foreground px-4">
            Access multiple AI models for fast inference via API
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <BarChart3 className="w-6 h-6" />
          <p className="text-foreground px-4">
            Track usage and manage Free/Developer plan tiers
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <Key className="w-6 h-6" />
          <p className="text-foreground px-4">
            Generate Data API and Model API keys securely
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <BookOpen className="w-6 h-6" />
          <p className="text-foreground px-4">
            Comprehensive documentation for SDK and API usage
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <Package className="w-6 h-6" />
          <p className="text-foreground px-4">
            RAG SDK with SmartRAG, GraphRAG, embeddings & reranking
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 lg:border-r">
          <Code className="w-6 h-6" />
          <p className="text-foreground px-4">
            React Chatbot Library for plug-and-play UI integration
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <Layers className="w-6 h-6" />
          <p className="text-foreground px-4">
            Model API Layer supporting Various models & more
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-b lg:border-b-0 lg:border-r">
          <Gauge className="w-6 h-6" />
          <p className="text-foreground px-4">
            Speed Tiers: Fast (2000–2500 tokens/sec) to Normal
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-b lg:border-b-0  lg:border-r">
          <Download className="w-6 h-6" />
          <p className="text-foreground px-4">
            Simple npm installation for SDK and Chatbot
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-b lg:border-b-0 ">
          <BookOpen className="w-6 h-6" />
          <p className="text-foreground px-4">
            Perfect documentation for developers – SDKs, APIs, and integrations
          </p>
        </div>
      </div>
    </div>
  );
}

export default LovedBySections;
