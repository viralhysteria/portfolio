export const fadeIn = {
  0: {
    opacity: 0,
  },
  1: {
    opacity: 100,
  },
};

export const bounceInDown = {
  opacity: [0, 1],
  x: [0, 0],
  y: [-3000, 25, -10, 5, 0],
  z: [0, 0],
  scaleY: [3, 0.9, 0.95, 0.985, 1],
  transition: {
    duration: 1,
    ease: [0.42, 0, 0.58, 1],
  },
};

export const zoomInFromBack = {
  0: {
    scale: "0%",
  },
  1: {
    scale: "100%",
  },
};

export const slideInFromTop = {
  0: {
    y: -1500,
  },
  1: {
    y: 0,
  },
};

export const slideInFromRight = {
  0: {
    x: 1500,
  },
  1: {
    x: 0,
  },
};

export const slideInFromBottom = {
  0: {
    y: 1500,
  },
  1: {
    y: 0,
  },
};

export const slideInFromLeft = {
  0: {
    x: -1500,
  },
  1: {
    x: 0,
  },
};

export const zoomIn = {
  0: {
    opacity: 0,
    scale: "0.3, 0.3, 0.3",
  },
  1: {
    opacity: 1,
    scale: "1, 1, 1"
  },
};
