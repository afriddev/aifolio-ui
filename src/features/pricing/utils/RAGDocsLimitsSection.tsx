
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
    }
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
    <div className="flex flex-col items-center w-full justify-center py-24">
      <div className="w-full flex flex-col gap-16">
        <h2 className="text-5xl font-light text-center">
          Cortexvia RAG Data, Query & Speed Limits
        </h2>

        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-medium">Document & Video Limits</h4>
          <table className="w-full border-t border-foreground/20 text-left">
            <thead>
              <tr className="text-sm text-foreground/60 border-b">
                <th className="py-3 px-2">Limit Type</th>
                <th className="py-3 px-2">Free Tier</th>
                <th className="py-3 px-2">Developer Tier</th>
                <th className="py-3 px-2">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {docLimits.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-2 font-medium">{row.type}</td>
                  <td className="py-3 px-2">{row.free}</td>
                  <td className="py-3 px-2">{row.developer}</td>
                  <td className="py-3 px-2">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-medium"> Query & Message Limits</h4>
          <table className="w-full border-t border-foreground/20 text-left">
            <thead>
              <tr className="text-sm text-foreground/60 border-b">
                <th className="py-3 px-2">Parameter</th>
                <th className="py-3 px-2">Free Tier</th>
                <th className="py-3 px-2">Developer Tier</th>
                <th className="py-3 px-2">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {queryLimits.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-2 font-medium">{row.type}</td>
                  <td className="py-3 px-2">{row.free}</td>
                  <td className="py-3 px-2">{row.developer}</td>
                  <td className="py-3 px-2">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SPEED TIERS TABLE */}
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-medium">⚡ Query Speed Tiers</h4>
          <table className="w-full border-t border-foreground/20 text-left">
            <thead>
              <tr className="text-sm text-foreground/60 border-b">
                <th className="py-3 px-2">Speed Tier</th>
                <th className="py-3 px-2">Rate</th>
                <th className="py-3 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {speedTiers.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-2 font-medium">{row.speed}</td>
                  <td className="py-3 px-2">{row.rate}</td>
                  <td className="py-3 px-2">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="text-center text-foreground/60 text-lg mt-10">
          <p>
            All data and query limits refresh every 24 hours. Upgrade your tier
            for faster indexing, more document uploads, and higher query
            throughput.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RAGDocsLimitsSection;
