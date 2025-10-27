/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  MotionDiv,
  MotionH3,
  MotionParagraph,
  AnimateWithType,
} from "@/apputils/MotionUtils";
import { motion } from "framer-motion";

function Footer() {
  const navigate = useNavigate();

  return (
    <motion.footer
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate="visible"
      className="bg-background text-foreground/80 w-full pt-12 lg:pt-16 pb-10 px-4 lg:px-10 mt-12"
    >
      <AnimateWithType
        type="fadeInUp"
        className="flex w-full items-center justify-center"
      >
        <div className="w-full max-w-[90vw] lg:max-w-[70vw] flex flex-col gap-12">
          <MotionH3
            variant="zoomIn"
            className="text-4xl lg:text-5xl font-light text-center"
          >
            Build the future with us.
          </MotionH3>

          <AnimateWithType
            type="fadeUpSpring"
            className="items-center gap-8 flex flex-col justify-center bg-primary text-background rounded-lg p-6 lg:p-16 w-full"
          >
            <MotionDiv variant="pulse">
              <BsLightningCharge className="w-6 h-6" />
            </MotionDiv>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="flex flex-col gap-2 items-center justify-center text-center"
            >
              <MotionH3
                variant="slideUpBounce"
                className="text-2xl lg:text-3xl font-medium"
              >
                Build Fast
              </MotionH3>
              <MotionParagraph
                variant="fadeInUp"
                className="text-base lg:text-lg"
              >
                Seamlessly integrate Cortexvia starting with just a few lines of
                code
              </MotionParagraph>
            </motion.div>
            <MotionDiv variant="pulse">
              <Button className="h-10 px-6 text-primary" variant="outline">
                Try Cortexvia for Free
              </Button>
            </MotionDiv>
          </AnimateWithType>
        </div>
      </AnimateWithType>

      <AnimateWithType
        type="fadeInUp"
        className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 mt-12 lg:mt-20 justify-between"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col gap-4 items-center max-w-[200px]"
        >
          <MotionDiv variant="fadeInUp">
            <img
              src="/home/logo-1.png"
              className="w-40 cursor-pointer"
              alt="logo"
            />
          </MotionDiv>
          <MotionParagraph
            variant="fadeInUp"
            className="text-sm lg:text-base text-center break-words"
          >
            A smart, intelligent system for data, knowledge, and AI-powered
            reasoning.
          </MotionParagraph>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-start gap-4"
        >
          <MotionH3
            variant="fadeInUp"
            className="text-foreground/60 text-sm lg:text-base font-medium"
          >
            QUICK LINKS
          </MotionH3>
          <div className="flex flex-col gap-2">
            {["/about", "/contact", "/privacy-policy", "/terms", "/faq"].map(
              (path, i) => (
                <MotionDiv key={i} variant="fadeInUp">
                  <button
                    onClick={() => navigate(path)}
                    className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-sm lg:text-base"
                  >
                    {path.replace("/", "").replace("-", " ").toUpperCase()}
                  </button>
                </MotionDiv>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-start gap-4"
        >
          <MotionH3
            variant="fadeInUp"
            className="text-foreground/60 text-sm lg:text-base font-medium"
          >
            DEVELOPERS
          </MotionH3>
          {["/api-policy", "/developer-policy"].map((p, i) => (
            <MotionDiv key={i} variant="fadeInUp">
              <button
                onClick={() => navigate(p)}
                className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-sm lg:text-base"
              >
                {p.replace("/", "").replace("-", " ").toUpperCase()}
              </button>
            </MotionDiv>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-start gap-4"
        >
          <MotionH3
            variant="fadeInUp"
            className="text-foreground/60 text-sm lg:text-base font-medium"
          >
            COMPANY
          </MotionH3>
          {[
            "/cookie-policy",
            "/refund-policy",
            "/data-usage-policy",
            "/security-policy",
            "/compliance-policy",
            "/legal-notice",
          ].map((p, i) => (
            <MotionDiv key={i} variant="fadeInUp">
              <button
                onClick={() => navigate(p)}
                className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-sm lg:text-base"
              >
                {p.replace("/", "").replace("-", " ").toUpperCase()}
              </button>
            </MotionDiv>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-start gap-4"
        >
          <MotionH3
            variant="fadeInUp"
            className="text-foreground/60 text-sm lg:text-base font-medium"
          >
            Connect With Us
          </MotionH3>
          <div className="flex gap-4 text-xl">
            {[FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <MotionDiv key={i} variant="pulse">
                <button className="border border-white rounded-full p-2 hover:bg-white hover:text-foreground transition duration-300">
                  <Icon />
                </button>
              </MotionDiv>
            ))}
          </div>
        </motion.div>
      </AnimateWithType>

      

      <AnimateWithType
        type="fadeInUp"
        className="w-full flex flex-col md:flex-row justify-between items-center mt-6 border-t border-white/20 text-center text-foreground gap-4"
      >
        <MotionParagraph variant="fadeInUp" className="text-sm lg:text-base">
          © 2025 Cortexvia. All rights reserved.
        </MotionParagraph>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex gap-6"
        >
          {["/twitter", "/linkedin", "/instagram"].map((p, i) => (
            <MotionDiv key={i} variant="fadeInUp">
              <button
                onClick={() => navigate(p)}
                className="hover:underline text-sm lg:text-base"
              >
                {p.replace("/", "")}
              </button>
            </MotionDiv>
          ))}
        </motion.div>
      </AnimateWithType>
    </motion.footer>
  );
}

export default Footer;
