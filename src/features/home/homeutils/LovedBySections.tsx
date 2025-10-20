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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5 justify-center">
        <h2 className="text-4xl font-bold">
          Loved by innovators. Trusted by enterprises.
        </h2>
        <p className="text-center text-lg max-w-[50vw] text-foreground/70 ">
          Empower developers to build intelligent apps — with the security,
          control, and compliance your organization requires. Refined through 5+
          years of AI infrastructure excellence.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <Upload className="w-6 h-6" />
          <p className="text-foreground">
            Upload documents or YouTube URLs for easy data ingestion
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <Search className="w-6 h-6" />
          <p className="text-foreground">
            Ask questions and get intelligent answers via RAG
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <Zap className="w-6 h-6" />
          <p className="text-foreground">
            Access multiple AI models for fast inference via API
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <BarChart3 className="w-6 h-6" />
          <p className="text-foreground">
            Track usage and manage Free/Developer plan tiers
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <Key className="w-6 h-6" />
          <p className="text-foreground">
            Generate Data API and Model API keys securely
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <BookOpen className="w-6 h-6" />
          <p className="text-foreground">
            Comprehensive documentation for SDK and API usage
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <Package className="w-6 h-6" />
          <p className="text-foreground">
            RAG SDK with SmartRAG, GraphRAG, embeddings & reranking
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
          <Code className="w-6 h-6" />
          <p className="text-foreground">
            React Chatbot Library for plug-and-play UI integration
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
          <Layers className="w-6 h-6" />
          <p className="text-foreground">
            Model API Layer supporting OpenAI, Groq, Cerebras & more
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-r">
          <Gauge className="w-6 h-6" />
          <p className="text-foreground">
            Speed Tiers: Fast (2000–2500 tokens/sec) to Normal
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-r">
          <Download className="w-6 h-6" />
          <p className="text-foreground">
            Simple npm installation for SDK and Chatbot
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10">
          <BookOpen className="w-6 h-6" />
          <p className="text-foreground">
            Perfect documentation for developers – SDKs, APIs, and integrations
          </p>
        </div>
      </div>
    </div>
  );
}

export default LovedBySections;
