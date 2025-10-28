/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const smoothFade: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const pulse: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function MotionWrapper({ as: Component = "div", className = "", children }: any) {
  const MotionTag = motion(Component);
  return (
    <MotionTag
      variants={smoothFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export const MotionDiv = (p: any) => <MotionWrapper as="div" {...p} />;
export const MotionParagraph = (p: any) => (
  <MotionWrapper as="p" className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-6" {...p} />
);
export const MotionH1 = (p: any) => (
  <MotionWrapper as="h1" className="text-4xl sm:text-5xl lg:text-[80px] font-light tracking-tight text-foreground" {...p} />
);
export const MotionH2 = (p: any) => (
  <MotionWrapper as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground" {...p} />
);
export const MotionH3 = (p: any) => (
  <MotionWrapper as="h3" className="text-2xl sm:text-3xl font-semibold text-foreground" {...p} />
);
export const MotionH4 = (p: any) => (
  <MotionWrapper as="h4" className="text-xl sm:text-2xl font-medium text-foreground/90" {...p} />
);
export const MotionH5 = (p: any) => (
  <MotionWrapper as="h5" className="text-lg sm:text-xl font-medium text-foreground/90" {...p} />
);
export const MotionH6 = (p: any) => (
  <MotionWrapper as="h6" className="text-base sm:text-lg font-normal text-foreground/80" {...p} />
);
export const MotionH7 = (p: any) => (
  <MotionWrapper as="h7" className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-foreground/70" {...p} />
);

export function AnimateOnView({ children, className }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      variants={smoothFade}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimateWithType({
  children,
  className,
  type = "smoothFade",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "smoothFade" | "scaleIn" | "zoomIn" | "pulse";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const variants =
    type === "scaleIn" ? scaleIn :
    type === "zoomIn" ? zoomIn :
    type === "pulse" ? pulse :
    smoothFade;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
