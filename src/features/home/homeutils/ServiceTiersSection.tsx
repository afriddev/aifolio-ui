import {
  AnimateWithType,
  MotionH1,
  MotionH3,
  MotionH7,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { ServiceTiersSvg } from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";

function ServiceTiersSection() {
  return (
    <div className="flex flex-col w-[95%] items-center gap-12 mt-5 lg:mt-32 lg:w-[70%]">
      <div className="flex justify-between items-center w-full gap-10 bg-white/50  p-20 ">
        <div className="flex flex-col gap-5">
          <MotionH1>
            <ServiceTiersSvg />
          </MotionH1>
          <MotionH3>Service Tiers</MotionH3>
          <MotionParagraph className="max-w-xs">
            Choose the right tier to balance access, speed, and scalability —
            whether you’re experimenting, developing, or scaling production
            apps.
          </MotionParagraph>

          <AnimateWithType className="flex items-center gap-4 mt-4">
            <Button className="rounded bg-foreground text-background hover:bg-foreground/90">
              Learn more
            </Button>
            <Button className="rounded" variant="outline">
              Contact Sales
            </Button>
          </AnimateWithType>
        </div>

        <div className="flex flex-col gap-6 lg:max-w-[45%]">
          <div className="flex flex-col gap-1">
            <MotionH7 className="text-foreground text-lg">Free Tier</MotionH7>
            <MotionParagraph className="text-sm text-foreground/70">
              Ideal for exploration and prototypes. Includes 100 daily queries,
              2 document uploads, and access to core RAG models with up to 4K
              context memory.
            </MotionParagraph>
          </div>

          <div className="flex flex-col gap-1">
            <MotionH7 className="text-foreground text-lg">
              Developer Tier
            </MotionH7>
            <MotionParagraph className="text-sm text-foreground/70">
              Designed for independent developers and small teams. Offers
              unlimited queries, priority queueing, faster model speeds (up to
              2500 tokens/sec), and 64K context memory.
            </MotionParagraph>
          </div>

          <div className="flex flex-col gap-1">
            <MotionH7 className="text-foreground text-lg">
              Student Tier
            </MotionH7>
            <MotionParagraph className="text-sm text-foreground/70">
              For educational and research use. Get discounted access, learning
              credits, and sandbox APIs to experiment with Cortexvia SDKs and
              model integrations safely.
            </MotionParagraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTiersSection;
