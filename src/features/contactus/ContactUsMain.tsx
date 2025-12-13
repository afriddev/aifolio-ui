import { RxOpenInNewWindow } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionParagraph,
  MotionH1,
  AnimateWithType,
  MotionH4,
} from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function ContactUsMain() {
  return (
    <PageWrapper>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-16"
      >
        <AnimateWithType
         
          className="min-h-[40vh] h-auto relative flex w-full items-center justify-center overflow-hidden"
        >
          <MotionDiv className="w-full absolute h-full inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
                  repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
                `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </MotionDiv>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="flex flex-col items-center text-center gap-3 z-10 max-w-[90%]"
          >
            <MotionH1
              
              className="text-4xl lg:text-[64px] font-light"
            >
              Connect with Cortexvia
            </MotionH1>
            <MotionParagraph className="text-base lg:text-xl lg:w-[60%] text-foreground/70">
              Connect with Cortexvia to build with APIs, explore AI solutions,
              or partner with us.
            </MotionParagraph>
          </motion.div>
        </AnimateWithType>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="w-[100%] lg:w-[80%] px-4 lg:px-20 py-0 lg:py-6 flex flex-col gap-12"
        >
          <AnimateWithType className="flex flex-col gap-4">
            <MotionH4 >
              Developer Support
            </MotionH4>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70 lg:max-w-[60%]">
              Get started with our{" "}
              <a
                href="https://docs.cortexvia.com"
                className="text-primary underline"
              >
                Developer Docs
              </a>{" "}
              for APIs, SDKs like CortexRAG and EmbiRankis, or connect via the
              Cortexvia Dev Console’s chat for real-time support.
            </MotionParagraph>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70">
              Join our developer community on{" "}
              <a
                href="https://x.com/cortexvia"
                className="text-primary underline"
              >
                X
              </a>{" "}
              for updates and tips.
            </MotionParagraph>
          </AnimateWithType>

          <AnimateWithType className="flex flex-col gap-4">
            <MotionH4 >
              Enterprise Solutions
            </MotionH4>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70">
              Deploy Cortexvia’s LLMs and automation tools for large-scale
              inference. Contact our team at{" "}
              <a
                href="mailto:enterprise@cortexvia.com"
                className="text-primary underline"
              >
                enterprise@cortexvia.com
              </a>{" "}
              for custom plans.
            </MotionParagraph>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70">
              From Flash models (up to 3000 TPS) to business chatbots, we tailor
              solutions to your needs.
            </MotionParagraph>
          </AnimateWithType>

          <AnimateWithType className="flex flex-col gap-4">
            <MotionH4 >
              Press & Media
            </MotionH4>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70">
              For media inquiries, reach out to{" "}
              <a
                href="mailto:press@cortexvia.com"
                className="text-primary underline"
              >
                press@cortexvia.com
              </a>
              . Include:
            </MotionParagraph>
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="list-disc list-inside text-base lg:text-lg text-foreground/70"
            >
              {[
                "Key topic or theme",
                "Your name and organization",
                "Request timeframe or deadlines",
                "Specific Cortexvia team member (if applicable)",
              ].map((item, i) => (
                <MotionDiv key={i} as="li">
                  {item}
                </MotionDiv>
              ))}
            </motion.ul>
          </AnimateWithType>

          <AnimateWithType className="flex flex-col gap-4">
            <MotionH4 >
              Stay Connected
            </MotionH4>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70">
              Follow Cortexvia for updates, tutorials, and insights:
            </MotionParagraph>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="grid lg:grid-cols-2 gap-4 text-base lg:text-lg text-foreground/70 "
            >
              {[
                {
                  platform: "X",
                  link: "https://x.com/cortexvia",
                  desc: "Real-time product updates and developer tips",
                },
                {
                  platform: "LinkedIn",
                  link: "https://linkedin.com/company/cortexvia",
                  desc: "Professional insights and business news",
                },
                {
                  platform: "YouTube",
                  link: "https://youtube.com/cortexvia",
                  desc: "Tutorials, demos, and feature deep dives",
                },
                {
                  platform: "Instagram",
                  link: "https://instagram.com/cortexvia",
                  desc: "Team culture and behind-the-scenes",
                },
              ].map((item, i) => (
                <AnimateWithType
                  key={i}
                 
                  className="flex items-center gap-3"
                >
                  <MotionDiv
                    
                    as="a"
                    href={item.link}
                    className="flex items-center text-primary underline cursor-pointer"
                  >
                    {item.platform}{" "}
                    <RxOpenInNewWindow className="w-4 h-5 ml-1" />
                  </MotionDiv>
                  <MotionParagraph className="text-base lg:text-lg text-foreground/70">
                    {item.desc}
                  </MotionParagraph>
                </AnimateWithType>
              ))}
            </motion.div>
          </AnimateWithType>

          <AnimateWithType className="flex flex-col gap-4">
            <MotionH4 >
              Visit Us
            </MotionH4>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="flex flex-col lg:flex-row gap-8"
            >
              <MotionDiv>
                <MotionH4 className="text-lg lg:text-xl font-semibold">
                  Headquarters
                </MotionH4>
                <MotionParagraph className="text-base lg:text-lg text-foreground/70">
                  0-00 Cortexvia St,
                  <br />
                  Innovation City, CA 90000, Earth
                </MotionParagraph>
              </MotionDiv>
              <MotionDiv>
                <MotionH4 className="text-lg lg:text-xl font-semibold">
                  Mailing Address
                </MotionH4>
                <MotionParagraph className="text-base lg:text-lg text-foreground/70">
                  PO Box 1234,
                  <br />
                  Innovation City, CA 90000, Earth
                </MotionParagraph>
              </MotionDiv>
            </motion.div>
          </AnimateWithType>

          <AnimateWithType
           
            className="bg-white/5 p-6 lg:p-12 rounded-2xl border border-white/10 text-center"
          >
            <MotionH4 className="text-2xl lg:text-3xl font-semibold mb-4">
              Ready to Build with Cortexvia?{" "}
              <FaArrowRight className="inline w-6 h-6 text-primary align-middle" />
            </MotionH4>
            <MotionParagraph className="text-base lg:text-lg text-foreground/70 lg:w-[60%] mx-auto">
              Start with our Free Tier or contact us for enterprise solutions.
              Create your account at{" "}
              <a
                href="https://cortexvia.com"
                className="text-primary underline"
              >
                cortexvia.com
              </a>
              .
            </MotionParagraph>
          </AnimateWithType>
        </motion.div>

        <AnimateWithType
         
          className="bg-white w-[100%] p-12 lg:p-16 flex items-center justify-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="lg:w-[60%] gap-8 flex flex-col text-center"
          >
            <MotionParagraph className="text-base lg:text-xl text-foreground/70">
              “At Cortexvia, we connect people to intelligence that transforms
              how they create and grow.”
            </MotionParagraph>
            <MotionDiv as="label" className="font-thin text-base lg:text-xl">
              — Shaik Afrid, Founder & CEO
            </MotionDiv>
          </motion.div>
        </AnimateWithType>
      </motion.div>
    </PageWrapper>
  );
}

export default ContactUsMain;
