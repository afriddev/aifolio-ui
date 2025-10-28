import { Button } from "@/components/ui/button";
import {
  MotionDiv,
  MotionParagraph,
  MotionH4,
  AnimateWithType,
  MotionH2,
} from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function AllModelsSection() {
  const freeTierModels = [
    {
      name: "Cortexvia Mini",
      size: "8B",
      speed: "150 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "morelimit",
      modelName: "ministral-8b-2410",
    },
    {
      name: "Cortexvia Nemo",
      size: "12B",
      speed: "180 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "morelimit",
      modelName: "open-mistral-nemo-2407",
    },
    {
      name: "Cortexvia Small",
      size: "24B",
      speed: "120 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "morelimit",
      modelName: "mistral-small-2506",
    },
    {
      name: "Cortexvia Medium",
      size: "49B",
      speed: "100 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.3-nemotron-super-49b-v1",
    },
    {
      name: "Cortexvia Large",
      size: "123B",
      speed: "50 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "morelimit",
      modelName: "mistral-large-2411",
    },
    {
      name: "Cortexvia Flash Mini",
      size: "8B",
      speed: "2200TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "fast",
      modelName: "llama3.1-8b",
    },
    {
      name: "Cortexvia Flash Small",
      size: "70B",
      speed: "2100 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "fast",
      modelName: "llama-3.3-70b",
    },
    {
      name: "Cortexvia Flash Medium",
      size: "109B",
      speed: "2600 TPS",
      rpm: "10 req/min",
      rpd: "500 req/day",
      tpm: "20K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "fast",
      modelName: "llama-4-scout-17b-16e-instruct",
    },
  ];

  const developerTierModels = [
    {
      name: "Cortexvia Mini",
      size: "8B",
      speed: "150 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "morelimit",
      modelName: "ministral-8b-2410",
    },
    {
      name: "Cortexvia Nemo",
      size: "12B",
      speed: "180 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "morelimit",
      modelName: "open-mistral-nemo-2407",
    },
    {
      name: "Cortexvia Small",
      size: "24B",
      speed: "120 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "morelimit",
      modelName: "mistral-small-2506",
    },
    {
      name: "Cortexvia Medium",
      size: "49B",
      speed: "100 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.3-nemotron-super-49b-v1",
    },
    {
      name: "Cortexvia Large",
      size: "123B",
      speed: "50 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "morelimit",
      modelName: "mistral-large-2411",
    },
    {
      name: "Cortexvia Ultra",
      size: "235B",
      speed: "60 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "200K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
    },
    {
      name: "Cortexvia Flash Mini",
      size: "8B",
      speed: "2200 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "fast",
      modelName: "llama3.1-8b",
    },
    {
      name: "Cortexvia Flash Small",
      size: "70B",
      speed: "2100 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "fast",
      modelName: "llama-3.3-70b",
    },
    {
      name: "Cortexvia Flash Medium",
      size: "109B",
      speed: "2600 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "fast",
      modelName: "llama-4-scout-17b-16e-instruct",
    },
    {
      name: "Cortexvia Flash Super",
      size: "235B",
      speed: "1500 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "fast",
      modelName: "qwen-3-235b-a22b-instruct-2507",
    },
    {
      name: "Cortexvia Ultra Flash",
      size: "120B",
      speed: "3000 TPS",
      rpm: "100 req/min",
      rpd: "50K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "fast",
      modelName: "gpt-oss-120b",
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
      className="flex text-sm lg:text-base flex-col items-center w-full justify-center py-12 lg:py-20"
    >
      <div className="w-full flex flex-col gap-12 max-w-[90vw] lg:max-w-[70vw]">
        <MotionH2
          variant="zoomIn"
          className="text-3xl lg:text-4xl font-light text-center"
        >
          Cortexvia Model Performance & Throughput
        </MotionH2>

        <AnimateWithType type="pulse" className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <MotionH4
                variant="slideUpBounce"
                className="text-lg lg:text-xl font-medium"
              >
                Free Tier
              </MotionH4>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Speed: &lt;200 TPS | Daily Limit:{" "}
                <strong>10,000 Tokens/day</strong>
              </MotionParagraph>
            </div>
            <div className="text-right">
              <MotionParagraph
                variant="pulse"
                className="text-base lg:text-lg font-semibold"
              >
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  $0 / month
                </span>
              </MotionParagraph>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Includes 7+ models
              </MotionParagraph>
            </div>
          </div>
          <MotionDiv
            variant="pulse"
            as="tr"
            className="overflow-x-auto border-b hover:bg-gray-50 transition will-change-transform relative   "
            style={{ transformOrigin: "center" }}
          >
            <table className="w-full border-t border-foreground/20 text-left">
              <thead>
                <tr className="text-sm text-foreground/60 border-b">
                  <th className="py-3 px-4 font-medium min-w-[120px]">Model</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">Size</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">Speed</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">RPM</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">RPD</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">TPM</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">TPD</th>
                  <th className="py-3 px-4 text-right min-w-[150px]"></th>
                </tr>
              </thead>
              <tbody>
                {freeTierModels.map((m, idx) => (
                  <MotionDiv
                    key={idx}
                    variant="pulse"
                    as="tr"
                    className="border-b hover:bg-gray-50 transition will-change-transform relative"
                    style={{ transformOrigin: "center" }}
                  >
                    <td className="py-3 px-4 font-medium break-words">
                      {m.name}
                    </td>
                    <td className="py-3 px-4 break-words">{m.size}</td>
                    <td className="py-3 px-4 break-words">{m.speed}</td>
                    <td className="py-3 px-4 break-words">{m.rpm}</td>
                    <td className="py-3 px-4 break-words">{m.rpd}</td>
                    <td className="py-3 px-4 break-words">{m.tpm}</td>
                    <td className="py-3 px-4 break-words">{m.tpd}</td>
                    <td className="py-3 px-4 flex justify-end gap-2">
                      <MotionDiv variant="pulse">
                        <Button className="h-8 px-4 text-sm bg-primary text-white hover:opacity-90">
                          Try Now
                        </Button>
                      </MotionDiv>
                      <MotionDiv variant="pulse">
                        <Button className="h-8 px-4 text-sm" variant="outline">
                          Model Card
                        </Button>
                      </MotionDiv>
                    </td>
                  </MotionDiv>
                ))}
              </tbody>
            </table>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType type="pulse" className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <MotionH4
                variant="slideUpBounce"
                className="text-lg lg:text-xl font-medium"
              >
                Developer Tier
              </MotionH4>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Speed: 500–3000 TPS | Daily Limit:{" "}
                <strong>{"> "}1,000,000 Tokens/day</strong>
              </MotionParagraph>
            </div>
            <div className="text-right">
              <MotionParagraph
                variant="pulse"
                className="text-base lg:text-lg font-semibold"
              >
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  $20 / month
                </span>
              </MotionParagraph>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Includes 10+ high-speed models
              </MotionParagraph>
            </div>
          </div>
          <MotionDiv
            variant="pulse"
            as="tr"
            className="border-b overflow-x-auto hover:bg-gray-50 transition will-change-transform relative"
            style={{ transformOrigin: "center" }}
          >
            <table className="w-full border-t border-foreground/20 text-left">
              <thead>
                <tr className="text-sm text-foreground/60 border-b">
                  <th className="py-3 px-4 font-medium min-w-[120px]">Model</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">Size</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">Speed</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">RPM</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">RPD</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">TPM</th>
                  <th className="py-3 px-4 font-medium min-w-[80px]">TPD</th>
                  <th className="py-3 px-4 text-right min-w-[150px]"></th>
                </tr>
              </thead>
              <tbody>
                {developerTierModels.map((m, idx) => (
                  <MotionDiv
                    key={idx}
                    variant="pulse"
                    as="tr"
                    className="border-b hover:bg-gray-50 transition will-change-transform relative"
                    style={{ transformOrigin: "center" }}
                  >
                    <td className="py-3 px-4 font-medium break-words">
                      {m.name}
                    </td>
                    <td className="py-3 px-4 break-words">{m.size}</td>
                    <td className="py-3 px-4 break-words">{m.speed}</td>
                    <td className="py-3 px-4 break-words">{m.rpm}</td>
                    <td className="py-3 px-4 break-words">{m.rpd}</td>
                    <td className="py-3 px-4 break-words">{m.tpm}</td>
                    <td className="py-3 px-4 break-words">{m.tpd}</td>
                    <td className="py-3 px-4 flex justify-end gap-2">
                      <MotionDiv variant="pulse">
                        <Button className="h-8 px-4 text-sm bg-primary text-white hover:opacity-90">
                          Try Now
                        </Button>
                      </MotionDiv>
                      <MotionDiv variant="pulse">
                        <Button className="h-8 px-4 text-sm" variant="outline">
                          Model Card
                        </Button>
                      </MotionDiv>
                    </td>
                  </MotionDiv>
                ))}
              </tbody>
            </table>
          </MotionDiv>
        </AnimateWithType>

        <AnimateWithType
          type="pulse"
          className="flex items-center justify-between p-6 bg-white rounded border"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="flex items-center justify-between w-full"
          >
            <div>
              <MotionH4
                variant="slideUpBounce"
                className="text-lg lg:text-xl font-medium"
              >
                Enterprise Tier
              </MotionH4>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Unlimited RPM/TPM, private model hosting, and dedicated compute.
              </MotionParagraph>
            </div>
            <div className="text-right">
              <MotionParagraph
                variant="pulse"
                className="text-base lg:text-lg font-semibold"
              >
                Contact Sales
              </MotionParagraph>
              <MotionParagraph
                variant="pulse"
                className="text-foreground/60 text-sm lg:text-base"
              >
                Custom pricing & throughput scaling
              </MotionParagraph>
            </div>
          </motion.div>
        </AnimateWithType>
      </div>
    </motion.div>
  );
}

export default AllModelsSection;
