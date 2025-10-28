import { CiGlobe } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import { Lock } from "lucide-react";
import {
  AnimateWithType,
  MotionH2,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { SecuritySvg } from "@/apputils/SvgUtils";

function SecuritySection() {
  return (
    <div className="flex flex-col  items-center p-5  ">
      <div className="flex flex-col items-center justify-center gap-12">
        <AnimateWithType className="flex items-center justify-center">
          <div className="flex flex-col lg:w-[80%] gap-6  items-center justify-center">
            <div className="flex items-center gap-3 lg:gap-10">
              {/* <div>
                <img src="/home/soc-2.webp" className="w-32" />
              </div> */}
              <AnimateWithType className="flex items-center gap-5">
                <SecuritySvg />
                <MotionH2>Built-in protection for sensitive data</MotionH2>
              </AnimateWithType>
              {/* <div>
                <img src="/home/gdpr.webp" className="w-32" />
              </div> */}
            </div>
            <MotionParagraph className="items-center justify-center lg:text-center flex leading-relaxed">
              <div className="max-w-[100%] lg:max-w-[50%]">
                Cortexvia pairs enterprise-grade AI with rigorous security
                controls, enabling you to deploy AI agents swiftly while
                ensuring privacy, trust, and compliance with global standards.
              </div>
            </MotionParagraph>
          </div>
        </AnimateWithType>
        <div className="flex lg:flex-row flex-col   gap-10">
          <div className="flex  lg:flex-row flex-col  items-center gap-10 justify-center">
            <AnimateWithType className="flex gap-4 flex-col ">
              <div className="   w-fit h-fit ">
                <MdOutlineVerifiedUser className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/70" />
              </div>
              <div>
                <MotionH5>SOC 2 Type II Certification</MotionH5>
                <MotionParagraph className="text-foreground/70">
                  Independent auditors validate our controls annually so your
                  organization can rely on consistent safeguards.
                </MotionParagraph>
              </div>
            </AnimateWithType>

            <AnimateWithType className="flex gap-4 flex-col ">
              <div className="   w-fit h-fit ">
                <CiGlobe className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/70" />
              </div>
              <div>
                <MotionH5>GDPR-ready governance</MotionH5>
                <MotionParagraph className="text-foreground/70">
                  Data retention, erasure, and residency workflows respect
                  regional privacy obligations across the EU and beyond.
                </MotionParagraph>
              </div>
            </AnimateWithType>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            <AnimateWithType className="flex gap-4 flex-col ">
              <div className="   w-fit h-fit ">
                <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/70" />
              </div>
              <div>
                <MotionH5>Granular access controls</MotionH5>
                <MotionParagraph className="text-foreground/70">
                  Role-based permissions and scoped API tokens keep every
                  workspace isolated and auditable.
                </MotionParagraph>
              </div>
            </AnimateWithType>

            <AnimateWithType className="flex gap-4 flex-col ">
              <div className="   w-fit h-fit ">
                <HiServerStack className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/70" />
              </div>
              <div>
                <MotionH5>Encryption end-to-end</MotionH5>
                <MotionParagraph className="text-foreground/70">
                  Customer content stays encrypted at rest and in transit using
                  strong TLS and AES-256 standards.
                </MotionParagraph>
              </div>
            </AnimateWithType>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
