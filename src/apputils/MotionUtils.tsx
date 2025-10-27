/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0,10px,0)",
    willChange: "transform, opacity",
    position: "relative",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0,0,0)",
    willChange: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};


const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeDownSpring: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 14 },
  },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideUpBounce: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 12,
      bounce: 0.3,
    },
  },
};

const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const pulse: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      scale: { times: [0, 0.5, 1]},
    },
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
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export const MotionDiv = (p: any) => (
  <MotionWrapper as="div" className="text-foreground" {...p} />
);

export const MotionParagraph = (p: any) => (
  <MotionWrapper
    as="p"
    className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-6"
    {...p}
  />
);

export const MotionH1 = (p: any) => (
  <MotionWrapper
    as="h1"
    className="text-4xl sm:text-5xl lg:text-[80px] font-light tracking-tight text-foreground"
    {...p}
  />
);

export const MotionH2 = (p: any) => (
  <MotionWrapper
    as="h2"
    className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
    {...p}
  />
);

export const MotionH3 = (p: any) => (
  <MotionWrapper
    as="h3"
    className="text-2xl sm:text-3xl font-semibold text-foreground"
    {...p}
  />
);

export const MotionH4 = (p: any) => (
  <MotionWrapper
    as="h4"
    className="text-xl sm:text-2xl font-medium text-foreground/90"
    {...p}
  />
);

export const MotionH5 = (p: any) => (
  <MotionWrapper
    as="h5"
    className="text-lg sm:text-xl font-medium text-foreground/90"
    {...p}
  />
);

export const MotionH6 = (p: any) => (
  <MotionWrapper
    as="h6"
    className="text-base sm:text-lg font-normal text-foreground/80"
    {...p}
  />
);

export const MotionH7 = (p: any) => (
  <MotionWrapper
    as="h7"
    className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-foreground/70"
    {...p}
  />
);

export function AnimateOnView({ children, className }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
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
  type = "fadeUpSpring",
}: {
  children: React.ReactNode;
  className?: string;
  type?:
    | "fadeUpSpring"
    | "fadeLeft"
    | "fadeRight"
    | "scaleIn"
    | "fadeDownSpring"
    | "staggerChildren"
    | "zoomIn"
    | "slideUpBounce"
    | "rotateIn"
    | "pulse"| "fadeInUp";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const variants: any =
    type === "fadeLeft"
      ? fadeLeft
      : type === "fadeRight"
      ? fadeRight
      : type === "scaleIn"
      ? scaleIn
      : type === "fadeDownSpring"
      ? fadeDownSpring
      : type === "staggerChildren"
      ? staggerChildren
      : type === "zoomIn"
      ? zoomIn
      : type === "slideUpBounce"
      ? slideUpBounce
      : type === "rotateIn"
      ? rotateIn
      : type === "pulse"
      ? pulse
      : fadeInUp;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className + ""}
    >
      {children}
    </motion.div>
  );
}
