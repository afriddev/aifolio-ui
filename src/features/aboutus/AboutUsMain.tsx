import { FaArrowRight } from "react-icons/fa";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionParagraph, MotionH2, MotionH1, AnimateWithType } from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function AboutUsMain() {
  return (
    <PageWrapper>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-16">
        <AnimateWithType
          type="fadeDownSpring"
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
                backgroundPosition: "0 0",
              }}
            ></div>
          </MotionDiv>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col gap-4 items-center text-center z-10 max-w-[90%] py-10 lg:py-20">
            <MotionH1 variant="zoomIn" className="text-4xl lg:text-[64px] font-light">
              Frontier AI. For all of us.
            </MotionH1>
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-xl text-foreground/70">
              We exist to make frontier AI accessible to everyone.
            </MotionParagraph>
            <MotionDiv variant="scaleIn" className="mt-6 lg:mt-12">
              <img src="people-working-office.jpg" className="w-full max-w-[98vw] lg:max-w-[90vw] object-cover h-[40vh] lg:h-auto rounded" alt="Team working at Cortexvia" />
            </MotionDiv>
          </motion.div>
        </AnimateWithType>

        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="w-[100%] lg:w-[70%] px-2 lg:px-20 py-6 lg:py-16">
          <AnimateWithType type="fadeLeft" className="bg-white p-6 lg:p-12 flex lg:flex-row flex-col items-center gap-8 rounded-2xl">
            <MotionH2 variant="slideUpBounce" className="w-full lg:w-1/2 text-4xl lg:text-5xl font-thin leading-tight">
              The Minds Who <br /> Never Stopped <br /> Innovating
            </MotionH2>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="w-full lg:w-1/2 flex flex-col gap-5">
              <MotionH2 variant="fadeInUp" className="text-lg lg:text-xl font-medium">
                At Cortexvia, innovation isn’t a goal — it’s a habit. It starts with builders who believe AI should empower, not obscure.
              </MotionH2>
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col gap-5 text-foreground/70">
                <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg">
                  Our founders and engineers come from deep tech and research backgrounds, but they’ve always shared one obsession — making intelligence transparent and useful for everyone.
                </MotionParagraph>
                <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg">
                  Today, that same spirit drives Cortexvia. From RAG pipelines to open SDKs, we’re still building — just smarter. Meet the team shaping the next era of AI.
                </MotionParagraph>
              </motion.div>
            </motion.div>
          </AnimateWithType>

          <AnimateWithType type="fadeRight" className="mt-12 lg:mt-20">
            <MotionH2 variant="rotateIn" className="text-3xl lg:text-4xl lg:max-w-[50%]">
              We believe <FaArrowRight className="inline w-6 h-6 text-primary align-middle" /> in a world where knowledge is intelligent, connected, and within everyone’s reach. At Cortexvia, we empower builders to create, query, and innovate with AI that’s open, reliable, and built for the future.
            </MotionH2>
          </AnimateWithType>

          <AnimateWithType type="fadeUpSpring" className="flex lg:flex-row flex-col items-center gap-12 w-full mt-12 lg:mt-20">
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex flex-col w-full lg:w-1/2 gap-6">
              {[
                {
                  title: "About Cortexvia",
                  desc: "An advanced AI platform designed to redefine how people and organizations interact with knowledge. Cortexvia brings together cutting-edge Retrieval-Augmented Generation (RAG), intelligent querying, and multi-model integration to make data-driven insight effortless and scalable.",
                },
                {
                  title: "Our Vision",
                  desc: "We believe intelligence should be transparent, grounded, and accessible to everyone. Cortexvia challenges the limits of closed AI ecosystems, empowering developers and enterprises to unlock the full potential of their data.",
                },
                {
                  title: "Our Mission",
                  desc: "To democratize AI-powered knowledge retrieval through open SDKs, secure APIs, and seamless integrations — transforming complex data into clear, actionable intelligence for all.",
                },
              ].map((item, i) => (
                <AnimateWithType key={i} type="fadeLeft" className="flex flex-col gap-2 text-foreground/70">
                  <MotionH2 variant="fadeInUp" className="text-lg lg:text-xl font-semibold">
                    {item.title}
                  </MotionH2>
                  <MotionParagraph variant="fadeInUp" className="text-base lg:text-lg">
                    {item.desc}
                  </MotionParagraph>
                </AnimateWithType>
              ))}
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="w-full lg:w-1/2 flex flex-col gap-6">
              {[
                { label: "20+", text: "Team members", img: "/about/team-members.svg" },
                { label: "5+", text: "Different nationalities", img: "/about/earth.svg" },
                { label: "50%", text: "Female leaders", img: "/about/feamale-selfie.svg" },
              ].map((stat, i) => (
                <AnimateWithType key={i} type="scaleIn" className="relative">
                  <MotionDiv className="relative h-[20vh] lg:h-[24vh] w-full overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
                          repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
                        `,
                        backgroundSize: "50px 50px",
                        backgroundPosition: "0 0",
                      }}
                    ></div>
                    <div className="absolute inset-0 border border-[#f9ebe4] pointer-events-none"></div>
                  </MotionDiv>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="inset-0 flex items-center justify-between px-4 lg:px-5 absolute z-50">
                    <MotionDiv variant="zoomIn">
                      <MotionH1 className="text-4xl lg:text-[80px] font-light">{stat.label}</MotionH1>
                    </MotionDiv>
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="flex gap-4 lg:gap-5">
                      <MotionDiv variant="pulse" className="flex items-center">
                        <div className="h-4 w-4 lg:h-5 -mt-10 lg:-mt-14 lg:w-5 bg-foreground "></div>
                        <MotionParagraph className="bg-foreground text-background h-fit p-3 lg:p-4 w-[40vw] lg:w-[12vw] text-xs lg:text-base mt-4 lg:mt-5 flex items-center justify-center text-center">
                          {stat.text}
                        </MotionParagraph>
                      </MotionDiv>
                      <MotionDiv variant="fadeInUp">
                        <img className="w-16 h-16 lg:w-20 lg:h-20 object-contain" alt={stat.text} src={stat.img} />
                      </MotionDiv>
                    </motion.div>
                  </motion.div>
                </AnimateWithType>
              ))}
            </motion.div>
          </AnimateWithType>
        </motion.div>

        <AnimateWithType type="fadeDownSpring" className="bg-white w-full p-12 lg:p-16 flex items-center justify-center">
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} className="lg:w-[60%] gap-8 flex flex-col text-center">
            <MotionParagraph variant="fadeInUp" className="text-base lg:text-xl text-foreground/70">
              AI isn’t about whether we’ll use it — it’s about how fast we can turn what we know into real intelligence and real impact.
            </MotionParagraph>
            <MotionParagraph variant="fadeInUp" className="font-thin text-base lg:text-xl text-foreground/70">
              — Shaik Afrid, Founder & CEO
            </MotionParagraph>
          </motion.div>
        </AnimateWithType>
      </motion.div>
    </PageWrapper>
  );
}

export default AboutUsMain;