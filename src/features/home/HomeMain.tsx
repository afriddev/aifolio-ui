import { Button } from "@/components/ui/button";
import { GoDependabot } from "react-icons/go";
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

function HomeMain() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[70%] flex justify-center flex-col">
        <div className="flex ">
          <img
            src="home-bg-01.png"
            className="w-[60vw] h-[120vh]  -ml-[10vw]"
          />
          <div className=" flex flex-col w-full gap-10    min-h-[90vh]   items-center justify-center h-full">
            <div className="flex justify-center gap-1  -mt-[10vh] items-center ">
              <GoDependabot className="h-8 w-8  " />
              <h3 className="text-4xl ">Chatbots</h3>
              <div className="border ml-2 border-foreground  rounded-xs  px-2  h-8  flex items-center justify-center text-lg">
                Beta
              </div>
            </div>
            <h1 className=" text-[80px] text-center -mt-10">
              Empower Your Knowledge with AI
            </h1>
            <p className="text-2xl w-[70%] text-center">
              Upload documents or YouTube videos, get instant answers, and
              access multiple AI models. Manage API keys, track usage, and
              integrate smart AI features seamlessly into your projects.
            </p>
            <Button className="text-xl px-10 py-3  rounded">
              Start Building
            </Button>
          </div>
        </div>

        <div className="-mt-[20vh] flex flex-col gap-10">
          <div className="flex flex-col items-center gap-5 justify-center">
            <h2 className="text-4xl font-bold">
              Loved by innovators. Trusted by enterprises.
            </h2>
            <p className="text-center text-lg max-w-[50vw] text-foreground/70 ">
              Empower developers to build intelligent apps — with the security,
              control, and compliance your organization requires. Refined
              through 5+ years of AI infrastructure excellence.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <Upload className="w-6 h-6" />
                <p className="text-foreground/70">Upload documents or YouTube URLs for easy data ingestion</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <Search className="w-6 h-6" />
                <p className="text-foreground/70">Ask questions and get intelligent answers via RAG</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
                <Zap className="w-6 h-6" />
                <p className="text-foreground/70">Access multiple AI models for fast inference via API</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <BarChart3 className="w-6 h-6" />
                <p className="text-foreground/70">Track usage and manage Free/Developer plan tiers</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <Key className="w-6 h-6" />
                <p className="text-foreground/70">Generate Data API and Model API keys securely</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
                <BookOpen className="w-6 h-6" />
                <p className="text-foreground/70">Comprehensive documentation for SDK and API usage</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <Package className="w-6 h-6" />
                <p className="text-foreground/70">RAG SDK with SmartRAG, GraphRAG, embeddings & reranking</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10 border-r">
                <Code className="w-6 h-6" />
                <p className="text-foreground/70">React Chatbot Library for plug-and-play UI integration</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full border-b pb-10">
                <Layers className="w-6 h-6" />
                <p className="text-foreground/70">Model API Layer supporting OpenAI, Groq, Cerebras & more</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-r">
                <Gauge className="w-6 h-6" />
                <p className="text-foreground/70">Speed Tiers: Fast (2000–2500 tokens/sec) to Normal</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10 border-r">
                <Download className="w-6 h-6" />
                <p className="text-foreground/70">Simple npm installation for SDK and Chatbot</p>
              </div>

              <div className="flex flex-col gap-3 items-center text-center pt-5 w-full pb-10">
                <BookOpen className="w-6 h-6" />
                <p className="text-foreground/70">Perfect documentation for developers – SDKs, APIs, and integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
