import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";

function EmpowerSection() {
  return (
    <div className=" text-background   flex items-center gap-10 mt-32 relative ">
      <div className="">
        <img src="man-with-copy-space-futuristic-device.jpg" className="" />
      </div>

      <div className="flex w-[40vw] flex-col items-center justify-center absolute">
        <div className="flex  flex-col gap-12 ">
          <div className="flex items-start gap-6    rounded-xl p-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold ">
                Developers & AI Builders
              </h3>
              <ul className="flex flex-col gap-3 text-background/70">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Query RAG data seamlessly, no backend setup required.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Build scalable apps with intuitive SDKs and APIs.
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Use SmartRAG, GraphRAG for precise, grounded responses.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6    rounded-xl p-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold ">
                Business & Domain Experts
              </h3>
              <ul className="flex flex-col gap-3 text-background/70">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Upload docs, YouTube URLs for instant, actionable insights.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Get cited, streaming answers powered by your data.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Track costs and usage with intuitive dashboard tools.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Embed custom chatbots for seamless domain workflows.
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="flex items-start gap-6    rounded-xl p-6">
            <div>
              <img
                alt="End Users & Consumers"
                src="/end-users.png"
                className="w-[10vw] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold ">
                End Users & Consumers
              </h3>
              <ul className="flex flex-col gap-3 text-background/70">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Query knowledge base using simple natural language.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Chat with real-time context and memory support.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Enjoy fast AI responses across optimized speed tiers.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Benefit from secure, privacy-focused data processing.
                </li>
              </ul>
            </div>
          </div> */}

          <div className="flex items-start gap-6    rounded-xl p-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold ">
                Teams & Enterprise Leaders
              </h3>
              <ul className="flex flex-col gap-3 text-background/70">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Manage keys, roles, and logs for full compliance.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Scale up to 2500 tokens/sec with auto-scaling.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Self-host deployments for complete data control.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 ">
                    <FaCircleCheck className="w-4 h-4 text-constructive" />
                  </div>
                  Collaborate using alerts, dashboards, and community tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Button className="rounded-lg py-3 px-6">Explore Cortexvia Now</Button>
      </div>
    </div>
  );
}

export default EmpowerSection;
