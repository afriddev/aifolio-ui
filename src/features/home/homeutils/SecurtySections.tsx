import { CiGlobe } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import { Lock } from "lucide-react";
import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";

function SecuritySection() {
  return (
    <div className="flex flex-col w-[95%] items-center gap-12 mt-5 lg:mt-32 lg:w-[70%] ">
      <div className="flex flex-col items-center justify-center gap-12">
        <AnimateWithType
          type="smoothFade"
          className="flex items-center justify-center"
        >
          <div className="flex flex-col lg:w-[60%] gap-6  items-center justify-center">
            <MotionH2 className="text-base font-semibold text-secondary tracking-tight">
              SECURITY & COMPLIANCE
            </MotionH2>
            <div className="flex items-center gap-3 lg:gap-10">
              <div>
                <img src="/home/soc-2.webp" className="w-32" />
              </div>
              <div>
                <MotionH2 className="text-xl lg:text-4xl text-center ">
                  Built-in protection for sensitive data
                </MotionH2>
              </div>
              <div>
                <img src="/home/gdpr.webp" className="w-32" />
              </div>
            </div>
            <MotionParagraph className="text-lg text-foreground/60 text-center leading-relaxed">
              Cortexvia pairs enterprise-grade AI with rigorous security
              controls, enabling you to deploy AI agents swiftly while ensuring
              privacy, trust, and compliance with global standards.
            </MotionParagraph>
          </div>
        </AnimateWithType>
        <div className="flex    flex-col gap-10">
          <div className="flex  lg:flex-row flex-col  items-center gap-10 justify-center">
            <AnimateWithType type="scaleIn" className="flex gap-4 lg:w-[30%]">
              <div className=" border rounded p-2 w-fit h-fit ">
                <MdOutlineVerifiedUser className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  SOC 2 Type II Certification
                </h4>
                <MotionParagraph className="text-foreground/70">
                  Independent auditors validate our controls annually so your
                  organization can rely on consistent safeguards.
                </MotionParagraph>
              </div>
            </AnimateWithType>

            <AnimateWithType type="scaleIn" className="flex gap-4 lg:w-[30%]">
              <div className=" border rounded p-2 w-fit h-fit ">
                <CiGlobe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">GDPR-ready governance</h4>
                <MotionParagraph className="text-foreground/70">
                  Data retention, erasure, and residency workflows respect
                  regional privacy obligations across the EU and beyond.
                </MotionParagraph>
              </div>
            </AnimateWithType>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            <AnimateWithType type="scaleIn" className="flex gap-4 lg:w-[30%]">
              <div className=" border rounded p-2 w-fit h-fit ">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  Granular access controls
                </h4>
                <MotionParagraph className="text-foreground/70">
                  Role-based permissions and scoped API tokens keep every
                  workspace isolated and auditable.
                </MotionParagraph>
              </div>
            </AnimateWithType>

            <AnimateWithType type="scaleIn" className="flex gap-4 lg:w-[30%]">
              <div className=" border rounded p-2 w-fit h-fit ">
                <HiServerStack className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Encryption end-to-end</h4>
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
