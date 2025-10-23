import { Button } from "@/components/ui/button";

function AllModelsSection() {
  const freeTierModels = [
    {
      name: "Cortexvia Mini",
      size: "8B",
      speed: "150 TPS",
      rpm: "20 req/min",
      rpd: "800 req/day",
      tpm: "100K Tokens/min",
      tpd: "400K Tokens/day",
      provider: "morelimit",
      modelName: "ministral-8b-2410",
    },
    {
      name: "Cortexvia Nemo",
      size: "12B",
      speed: "180 TPS",
      rpm: "40 req/min",
      rpd: "2000 req/day",
      tpm: "50K Tokens/min",
      tpd: "200K Tokens/day",
      provider: "morelimit",
      modelName: "open-mistral-nemo-2407",
    },

    {
      name: "Cortexvia Small",
      size: "24B",
      speed: "120 TPS",
      rpm: "20 req/min",
      rpd: "500 req/day",
      tpm: "150K Tokens/min",
      tpd: "1000K Tokens/day",
      provider: "morelimit",
      modelName: "mistral-small-2506",
    },

    {
      name: "Cortexvia Medium",
      size: "49B",
      speed: "100 TPS",
      rpm: "40 req/min",
      rpd: "500 req/day",
      tpm: "100K Tokens/min",
      tpd: "300K Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.3-nemotron-super-49b-v1",
    },
    {
      name: "Cortexvia Large",
      size: "123B",
      speed: "50 TPS",
      rpm: "20 req/min",
      rpd: "1500 req/day",
      tpm: "100K Tokens/min",
      tpd: "300K Tokens/day",
      provider: "morelimit",
      modelName: "mistral-large-2411",
    },

    {
      name: "Cortexvia Flash Mini",
      size: "8B",
      speed: "2200 TPS",
      rpm: "10 req/min",
      rpd: "5000 req/day",
      tpm: "30K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "fast",
      modelName: "llama3.1-8b",
    },

    {
      name: "Cortexvia Flash Small",
      size: "70B",
      speed: "2100 TPS",
      rpm: "20 req/min",
      rpd: "5000 req/day",
      tpm: "30K Tokens/min",
      tpd: "100K Tokens/day",
      provider: "fast",
      modelName: "llama-3.3-70b",
    },

    {
      name: "Cortexvia Flash Medium",
      size: "109B",
      speed: "2600 TPS",
      rpm: "15 req/min",
      rpd: "5000 req/day",
      tpm: "30K Tokens/min",
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
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "6M Tokens/day",
      provider: "morelimit",
      modelName: "ministral-8b-2410",
    },
    {
      name: "Cortexvia Nemo",
      size: "12B",
      speed: "180 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "5M Tokens/day",
      provider: "morelimit",
      modelName: "open-mistral-nemo-2407",
    },

    {
      name: "Cortexvia Small",
      size: "24B",
      speed: "120 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "4M Tokens/day",
      provider: "morelimit",
      modelName: "mistral-small-2506",
    },

    {
      name: "Cortexvia Medium",
      size: "49B",
      speed: "100 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "4M Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.3-nemotron-super-49b-v1",
    },
    {
      name: "Cortexvia Large",
      size: "123B",
      speed: "50 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "morelimit",
      modelName: "mistral-large-2411",
    },

    {
      name: "Cortexvia Ultra",
      size: "235B",
      speed: "60 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "2M Tokens/day",
      provider: "gpu",
      modelName: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
    },

    {
      name: "Cortexvia Flash Mini",
      size: "8B",
      speed: "2200 TPS",
      rpm: "60 req/min",
      rpd: "20K req/day",
      tpm: "100K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "fast",
      modelName: "llama3.1-8b",
    },

    {
      name: "Cortexvia Flash Small",
      size: "70B",
      speed: "2100 TPS",
      rpm: "60 req/min",
      rpd: "14K req/day",
      tpm: "60K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "fast",
      modelName: "llama-3.3-70b",
    },

    {
      name: "Cortexvia Flash Medium",
      size: "109B",
      speed: "2600 TPS",
      rpm: "60 req/min",
      rpd: "14K req/day",
      tpm: "60K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "fast",
      modelName: "llama-4-scout-17b-16e-instruct",
    },

    {
      name: "Cortexvia Flash Super",
      size: "235B",
      speed: "1500 TPS",
      rpm: "60 req/min",
      rpd: "14K req/day",
      tpm: "60K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "fast",
      modelName: "qwen-3-235b-a22b-instruct-2507",
    },
    {
      name: "Cortexvia Ultra Flash",
      size: "120B",
      speed: "3000 TPS",
      rpm: "60 req/min",
      rpd: "14K req/day",
      tpm: "60K Tokens/min",
      tpd: "1M Tokens/day",
      provider: "fast",
      modelName: "gpt-oss-120b",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full justify-center py-24 ">
      <div className="w-full flex flex-col gap-16">
        <h2 className="text-5xl font-light text-center">
          Cortexvia Model Performance & Throughput
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-medium">Free Tier</h4>
              <p className="text-foreground/60 text-sm">
                Speed: &lt;200 TPS | Daily Limit:{" "}
                <strong>10,000 Tokens/day</strong>
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  $0 / month
                </span>
              </p>
              <p className="text-foreground/60 text-sm">Includes 7+ models</p>
            </div>
          </div>

          <table className="w-full border-t border-foreground/20 text-left">
            <thead>
              <tr className="text-sm text-foreground/60 border-b">
                <th className="py-3 px-2">Model</th>
                <th className="py-3 px-2">Size</th>
                <th className="py-3 px-2">Speed</th>
                <th className="py-3 px-2">RPM</th>
                <th className="py-3 px-2">RPD</th>
                <th className="py-3 px-2">TPM</th>
                <th className="py-3 px-2">TPD</th>
                <th className="py-3 px-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {freeTierModels.map((m, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-2 font-medium">{m.name}</td>
                  <td className="py-3 px-2">{m.size}</td>
                  <td className="py-3 px-2">{m.speed}</td>
                  <td className="py-3 px-2">{m.rpm}</td>
                  <td className="py-3 px-2">{m.rpd}</td>
                  <td className="py-3 px-2">{m.tpm}</td>
                  <td className="py-3 px-2">{m.tpd}</td>
                  <td className="py-3 px-2 flex justify-end gap-3">
                    <Button className="bg-primary text-white hover:opacity-90">
                      Try Now
                    </Button>
                    <Button variant="outline">Model Card</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-medium">Developer Tier</h4>
              <p className="text-foreground/60 text-sm">
                Speed: 500–3000 TPS | Daily Limit:{" "}
                <strong> {"> "}1,000,000 Tokens/day</strong>
              </p>
            </div>
            <div className="text-right">
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                $20 / month
              </span>

              <p className="text-foreground/60 text-sm">
                Includes 10+ high-speed models
              </p>
            </div>
          </div>

          <table className="w-full border-t border-foreground/20 text-left">
            <thead>
              <tr className="text-sm text-foreground/60 border-b">
                <th className="py-3 px-2">Model</th>
                <th className="py-3 px-2">Size</th>
                <th className="py-3 px-2">Speed</th>
                <th className="py-3 px-2">RPM</th>
                <th className="py-3 px-2">RPD</th>
                <th className="py-3 px-2">TPM</th>
                <th className="py-3 px-2">TPD</th>
                <th className="py-3 px-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {developerTierModels.map((m, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-2 font-medium">{m.name}</td>
                  <td className="py-3 px-2">{m.size}</td>
                  <td className="py-3 px-2">{m.speed}</td>
                  <td className="py-3 px-2">{m.rpm}</td>
                  <td className="py-3 px-2">{m.rpd}</td>
                  <td className="py-3 px-2">{m.tpm}</td>
                  <td className="py-3 px-2">{m.tpd}</td>
                  <td className="py-3 px-2 flex justify-end gap-3">
                    <Button className="bg-primary text-white hover:opacity-90">
                      Try Now
                    </Button>
                    <Button variant="outline">Model Card</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-6 bg-white rounded border">
          <div>
            <h4 className="text-2xl font-medium">Enterprise Tier</h4>
            <p className="text-foreground/60 text-sm">
              Unlimited RPM/TPM, private model hosting, and dedicated compute.
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Contact Sales</p>
            <p className="text-foreground/60 text-sm">
              Custom pricing & throughput scaling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllModelsSection;
