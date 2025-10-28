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

function MotionWrapper({
  as: Component = "div",
  className = "",
  children,
}: any) {
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
export const MotionDiv = ({ className = "", ...p }: any) => (
  <MotionWrapper as="div" className={`${className}`} {...p} />
);

export const MotionParagraph = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="p"
    className={`text-lg text-foreground/80 leading-relaxed mb-6 ${className}`}
    {...p}
  />
);

export const MotionH1 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h1"
    className={`text-4xl sm:text-5xl lg:text-[80px] font-light tracking-tight text-foreground ${className}`}
    {...p}
  />
);

export const MotionH2 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h2"
    className={`text-3xl sm:text-4xl lg:text-5xl font-light  tracking-tight text-foreground ${className}`}
    {...p}
  />
);

export const MotionH3 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h3"
    className={`text-2xl sm:text-3xl font-light  text-foreground ${className}`}
    {...p}
  />
);

export const MotionH4 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h4"
    className={`text-xl sm:text-2xl font-medium text-foreground/90 ${className}`}
    {...p}
  />
);

export const MotionH5 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h5"
    className={`text-lg sm:text-xl font-medium text-foreground/90 ${className}`}
    {...p}
  />
);

export const MotionH6 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h6"
    className={`text-base sm:text-lg font-normal text-foreground/80 ${className}`}
    {...p}
  />
);

export const MotionH7 = ({ className = "", ...p }: any) => (
  <MotionWrapper
    as="h7"
    className={`text-xs sm:text-sm font-light  uppercase tracking-wide text-foreground/70 ${className}`}
    {...p}
  />
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
