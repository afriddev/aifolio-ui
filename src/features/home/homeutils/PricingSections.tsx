import { IoCheckmarkCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";

function PricingSection() {
  return (
    <div className="flex flex-col items-center gap-12 mt-32 w-[70%] ">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-semibold text-foreground tracking-tight">
          Pricing Plans
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
          Unlock Cortexvia’s AI-driven potential with plans crafted for all
          users—hobbyists, developers, and enterprises. Seamlessly ingest data,
          query with RAG, and deploy custom chatbots, with INR pricing for
          Indian users in a clean, intuitive interface.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
        <div className="flex flex-col justify-between bg-bactext-background rounded-2xl p-8 border ">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Free Plan
            </h3>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-semibold text-foreground">$0 / ₹0</p>
              <span className="text-base text-foreground/50">/month</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Ideal for individuals and small projects to explore Cortexvia’s
              RAG and AI capabilities with no upfront cost.
            </p>
          </div>
          <ul className="flex flex-col gap-3 mt-6">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>10 document or YouTube uploads daily</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>10,000 tokens daily for inference</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>8,000 token context window</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Up to 50 PDF pages per upload</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Normal speed tier (200–500 tokens/sec)</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Basic RAG querying for reliable results</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Embed basic React chatbot</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Single Data API key for querying</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Community support via Discord</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Basic analytics dashboard</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Secure data encryption</span>
            </li>
          </ul>
          <Button className="mt-8 py-3  text-background rounded-xl font-medium transition-colors duration-200">
            Start Free
          </Button>
        </div>

        <div className="flex flex-col justify-between bg-bactext-background rounded-2xl p-8 border  relative">
          <div className="absolute top-4 right-4 bg-constructive text-background text-xs font-semibold px-3 py-1 rounded-full">
            Recommended
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Developer Plan
            </h3>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-semibold text-foreground">
                $20 / ₹1,650
              </p>
              <span className="text-base text-foreground/50">/month</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Built for developers and teams scaling high-performance AI
              applications with advanced RAG and robust deployment options.
            </p>
          </div>
          <ul className="flex flex-col gap-3 mt-6">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>100 document or YouTube uploads daily</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>1,000,000 tokens daily for inference</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>60,000 token context window</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Up to 500 PDF pages per upload</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Medium/Fast tiers (700–2500 tokens/sec)</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Advanced RAG (SmartRAG, GraphRAG)</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Customizable React chatbot with theming</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Multiple Data/Model API keys</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Secure key management with audit logs</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Priority email and Discord support</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Advanced analytics with custom reports</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Self-hosting for full data control</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="w-5 h-5 text-constructive" />
              <span>Batch processing for high-throughput</span>
            </li>
          </ul>
          <Button className="mt-8 py-3 rounded-xl font-medium transition-colors duration-200">
            Upgrade to Developer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
