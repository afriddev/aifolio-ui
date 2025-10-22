import { CiGlobe } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";

function SecuritySection() {
  return (
    <div className="flex flex-col w-[90%] items-center gap-12 mt-5 lg:mt-32 lg:w-[70%] ">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col lg:w-[60%] gap-6  items-center justify-center">
          <h2 className="text-base font-semibold text-secondary tracking-tight">
            SECURITY & COMPLIANCE
          </h2>
          <div className="flex items-center">
            <div>
              <img src="/home/soc-2.webp" className="w-32" />
            </div>
            <div>
              <h2 className="text-2xl text-center font-bold">
                Built-in protection for sensitive data
              </h2>
            </div>
            <div>
              <img src="/home/gdpr.webp" className="w-32" />
            </div>
          </div>
          <p className="text-lg text-foreground/60 text-center leading-relaxed">
            Cortexvia pairs enterprise-grade AI with rigorous security controls,
            enabling you to deploy AI agents swiftly while ensuring privacy,
            trust, and compliance with global standards.
          </p>
        </div>
        <div className="flex    flex-col gap-10">
          <div className="flex  lg:flex-row flex-col  items-center gap-10 justify-center">
            <div className="flex gap-4 lg:w-[30%]">
              <div className="bg-primary rounded-lg p-2 w-fit h-fit text-background">
                <MdOutlineVerifiedUser className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">
                  SOC 2 Type II Certification
                </h4>
                <p className="text-foreground/70">
                  Independent auditors validate our controls annually so your
                  organization can rely on consistent safeguards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 lg:w-[30%]">
              <div className="bg-primary rounded-lg p-2 w-fit h-fit text-background">
                <CiGlobe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">GDPR-ready governance</h4>
                <p className="text-foreground/70">
                  Data retention, erasure, and residency workflows respect
                  regional privacy obligations across the EU and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            <div className="flex gap-4 lg:w-[30%]">
              <div className="bg-primary rounded-lg p-2 w-fit h-fit text-background">
                <FaLock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Granular access controls</h4>
                <p className="text-foreground/70">
                  Role-based permissions and scoped API tokens keep every
                  workspace isolated and auditable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 lg:w-[30%]">
              <div className="bg-primary rounded-lg p-2 w-fit h-fit text-background">
                <HiServerStack className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Encryption end-to-end</h4>
                <p className="text-foreground/70">
                  Customer content stays encrypted at rest and in transit using
                  strong TLS and AES-256 standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
