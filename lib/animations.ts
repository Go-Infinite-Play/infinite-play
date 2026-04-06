import { Variants } from "framer-motion"

export const sectionFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const buttonHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.95, transition: { duration: 0.1, ease: "easeInOut" } }
}

export const floatingOrb: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export const drawerAnimation: Variants = {
  closed: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}
