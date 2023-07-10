// 型定義
type NavVariants = {
  hidden: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      delay: number;
    };
  };
};

type StaggerContainer = {
  staggerChildren: any;
  delayChildren: any;
};

type SlideIn = {
  hidden: {
    x: string;
    y: string;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
};

type TextVariant = {
  hidden: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
};

// variants
export const navVariants: NavVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
): SlideIn => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0",
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : "0",
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

type Variants = {
  [key: string]: any;
};

export const staggerContainer = (
  staggerChildren: StaggerContainer["staggerChildren"],
  delayChildren: StaggerContainer["delayChildren"]
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number): TextVariant => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
