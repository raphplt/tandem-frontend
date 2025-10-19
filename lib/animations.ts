import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export const blurIn: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}
