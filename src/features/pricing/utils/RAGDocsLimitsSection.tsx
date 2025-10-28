import {
  MotionDiv,
  MotionParagraph,
  MotionH2,
  MotionH4,
  AnimateWithType,
} from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function RAGDocsLimitsSection() {
  const docLimits = [
    {
      type: "Document Uploads",
      free: "2 files/day (max 50MB each)",
      developer: "200 files/day (max 100MB each)",
      enterprise: "Custom / Unlimited",
    },
    {
      type: "Supported Formats",
      free: "PDF",
      developer: "PDF, DOCX, TXT, Markdown",
      enterprise: "All text-based formats",
    },
    {
      type: "Video Uploads",
      free: "1 YouTube URL/day",
      developer: "50 URLs/day",
      enterprise: "Unlimited",
    },
    {
      type: "Processing Speed",
      free: "Standard Queue (up to 2 mins)",
      developer: "Priority Queue (10–30 sec)",
      enterprise: "Instant / Batch Upload API",
    },
  ];

  const queryLimits = [
    {
      type: "Daily Queries",
      free: "100 / day",
      developer: "Unlimited / day",
      enterprise: "Unlimited",
    },
    {
      type: "Messages per Conversation",
      free: "10 messages",
      developer: "< 100 messages",
      enterprise: "Unlimited",
    },
    {
      type: "Context Memory",
      free: "4K Tokens",
      developer: "64K Tokens",
      enterprise: "128K+ Tokens",
    },
  ];

  const speedTiers = [
    {
      speed: "Low Speed",
      rate: "50–200 Tokens/sec",
      desc: "Balanced mode for detailed, reasoning-heavy answers. Default for Free Tier.",
    },
    {
      speed: "Medium Speed",
      rate: "100–2000 Tokens/sec",
      desc: "Optimized for faster document retrieval and chat responses. Default for Developer Tier.",
    },
    {
      speed: "High Speed (Flash)",
      rate: "1000–3000 Tokens/sec",
      desc: "For production-grade RAG and real-time applications. Flash & Ultra models only.",
    },
  ];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate="visible"
      className="flex flex-col text-sm lg:text-base items-center w-full justify-center py-12 lg:py-20"
    >
      <div className="w-full flex flex-col gap-12 max-w-[90vw] lg:max-w-[70vw]">
        <MotionH2
          variant="zoomIn"
          className="text-3xl lg:text-4xl font-light text-center"
        >
          Cortexvia RAG Data, Query & Speed Limits
        </MotionH2>

        <AnimateWithType type="smoothFade" className="flex flex-col gap-6">
          <MotionH4
            variant="slideUpBounce"
            className="text-lg lg:text-xl font-medium"
          >
            Document & Video Limits
          </MotionH4>
          <MotionDiv
            variant="fadeInUp"
            as="tr"
            className="border-b  transition overflow-x-auto will-change-transform relative"
            style={{ transformOrigin: "center" }}
          >
            <table className="w-full border-t border-foreground/20 text-left">
              <thead>
                <tr className="text-sm text-foreground/60 border-b">
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Limit Type
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Free Tier
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Developer Tier
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {docLimits.map((row, i) => (
                  <MotionDiv
                    key={i}
                    variant="fadeInUp"
                    as="tr"
                    className="border-b  transition"
                  >
                    <td className="py-3 px-4 font-medium break-words">
                      {row.type}
                    </td>
                    <td className="py-3 px-4 break-words">{row.free}</td>
                    <td className="py-3 px-4 break-words">{row.developer}</td>
                    <td className="py-3 px-4 break-words">{row.enterprise}</td>
                  </MotionDiv>
                ))}
              </tbody>
            </table>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType type="smoothFade" className="flex flex-col gap-6">
          <MotionH4
            variant="slideUpBounce"
            className="text-lg lg:text-xl font-medium"
          >
            Query & Message Limits
          </MotionH4>
          <MotionDiv
            variant="fadeInUp"
            as="tr"
            className="border-b  transition overflow-x-auto will-change-transform relative"
            style={{ transformOrigin: "center" }}
          >
            <table className="w-full border-t border-foreground/20 text-left">
              <thead>
                <tr className="text-sm text-foreground/60 border-b">
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Parameter
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Free Tier
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Developer Tier
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {queryLimits.map((row, i) => (
                  <MotionDiv
                    key={i}
                    variant="fadeInUp"
                    as="tr"
                    className="border-b  transition"
                  >
                    <td className="py-3 px-4 font-medium break-words">
                      {row.type}
                    </td>
                    <td className="py-3 px-4 break-words">{row.free}</td>
                    <td className="py-3 px-4 break-words">{row.developer}</td>
                    <td className="py-3 px-4 break-words">{row.enterprise}</td>
                  </MotionDiv>
                ))}
              </tbody>
            </table>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType type="smoothFade" className="flex flex-col gap-6">
          <MotionH4
            variant="slideUpBounce"
            className="text-lg lg:text-xl font-medium"
          >
            ⚡ Query Speed Tiers
          </MotionH4>
          <MotionDiv
            variant="fadeInUp"
            as="tr"
            className="border-b  overflow-x-auto transition will-change-transform relative"
            style={{ transformOrigin: "center" }}
          >
            <table className="w-full border-t border-foreground/20 text-left">
              <thead>
                <tr className="text-sm text-foreground/60 border-b">
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Speed Tier
                  </th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">Rate</th>
                  <th className="py-3 px-4 font-medium min-w-[120px]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {speedTiers.map((row, i) => (
                  <MotionDiv
                    key={i}
                    variant="fadeInUp"
                    as="tr"
                    className="border-b  transition"
                  >
                    <td className="py-3 px-4 font-medium break-words">
                      {row.speed}
                    </td>
                    <td className="py-3 px-4 break-words">{row.rate}</td>
                    <td className="py-3 px-4 break-words">{row.desc}</td>
                  </MotionDiv>
                ))}
              </tbody>
            </table>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType
          type="smoothFade"
          className="text-center text-foreground/60 text-base lg:text-lg mt-8"
        >
          <MotionParagraph variant="fadeInUp">
            All data and query limits refresh every 24 hours. Upgrade your tier
            for faster indexing, more document uploads, and higher query
            throughput.
          </MotionParagraph>
        </AnimateWithType>
      </div>
    </motion.div>
  );
}

export default RAGDocsLimitsSection;
