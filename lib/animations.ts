import { Variants } from "framer-motion";

// Fade in animations
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Staggered children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Scale animations for cards
export const scaleOnHover: Variants = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const cardHover: Variants = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Slide animations
export const slideInFromLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -50
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const slideInFromRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 50
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Text reveal animations
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Button animations
export const buttonHover: Variants = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
};

// Counter animation
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
    delay: 0.2
  }
};

// Floating orb animations
export const floatingOrb: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Mobile navigation drawer
export const drawerAnimation: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Progress line animation for process steps
export const progressLine: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};