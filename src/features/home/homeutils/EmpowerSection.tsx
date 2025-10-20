function EmpowerSection() {
  return (
    <div className="justify-center flex flex-col items-center gap-10 mt-32 w-[70%] ">
      <h2 className="text-4xl  font-bold ">Empower All AI Users</h2>

      <div className="flex justify-between items-center gap-20">
        <div>
          <img
            alt="Developers & AI Builders"
            src="/developer-expert.png"
            className="w-[12vw]"
          />
        </div>
        <div className="flex flex-col gap-5 border-b pb-5 text-foreground/70  font-thin">
          <h3 className="text-xl font-semibold text-foreground">
            Developers & AI Builders
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Query RAG data
              seamlessly with no backend setup required.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Build scalable apps
              using intuitive SDKs and APIs.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Integrate OpenAI, Groq
              via unified API calls easily.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Use SmartRAG, GraphRAG
              for precise, grounded responses.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-5 border-b pb-5 text-foreground/70  ">
          <h3 className="text-xl font-semibold text-foreground">
            Business & Domain Experts
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Upload docs, YouTube
              URLs for instant actionable insights.
            </li>

            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Get cited, streaming
              answers powered by your data.
            </li>

            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Track costs and usage
              via intuitive dashboard tools.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Embed custom chatbots
              for seamless domain workflows.
            </li>
          </ul>
        </div>
        <div>
          <img
            alt="Business & Domain Experts"
            src="/business-experts.png"
            className="w-[12vw]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-20">
        <div>
          <img
            alt="End Users & Consumers"
            src="/end-users.png"
            className="w-[12vw]"
          />
        </div>
        <div className="flex flex-col gap-5 border-b pb-5 text-foreground/70  font-thin">
          <h3 className="text-xl font-semibold text-foreground">
            End Users & Consumers
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Query knowledge base
              using simple natural language.
            </li>

            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Chat with real-time
              context and memory support.
            </li>

            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Enjoy fast AI responses
              across speed tiers.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Benefit from secure,
              privacy-focused data processing.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-5 border-b pb-5 text-foreground/70  ">
          <h3 className="text-xl font-semibold text-foreground">
            Teams & Enterprise Leaders
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Manage keys, roles,
              logs for full compliance.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Scale up to 2500
              tokens/sec with auto-scaling.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div> Self-host deployments
              for complete data control.
            </li>

            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary "></div> Collaborate
              using alerts, dashboards, community resources.
            </li>
          </ul>
        </div>
        <div>
          <img
            alt="Teams & Enterprise Leaders"
            src="/enterprise-expert.png"
            className="w-[12vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default EmpowerSection;
