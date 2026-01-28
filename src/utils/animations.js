const createAnimation = (init, target) => {
  return {
    init: { ...init },
    anim: { ...target },
  };
};

// [SLIDE] //

export const slideInFromTop = createAnimation(
  { y: -500, opacity: 0 },
  { y: 0, opacity: 1 }
);
export const slideInFromRight = createAnimation(
  { x: 2000, opacity: 0 },
  { x: 0, opacity: 1 }
);
export const slideInFromBottom = createAnimation(
  { y: 250, opacity: 0, scale: 0.75 },
  { y: 0, opacity: 1, scale: 1 }
);
export const slideInFromLeft = createAnimation(
  { x: -2000, opacity: 0 },
  { x: 0, opacity: 1 }
);

// [ZOOM] //

export const zoomIn = createAnimation(
  { opacity: 0, scale: 0.3 },
  { opacity: 1, scale: 1 }
);

export const zoomInFromBack = createAnimation(
  { scale: "0%", opacity: 0 },
  { scale: "100%", opacity: 1 }
);

// [FADE] //

export const fadeIn = createAnimation(
  {
    opacity: 0,
  },
  {
    opacity: 100,
  }
);

// [BOUNCE] //

export const bounceIn = createAnimation(
  {
    opacity: [0, 1, 1],
    transform: ["scale3d(0.3, 0.3, 0.3)", "scale3d(1, 1, 1)"],
  },
  {
    transform: [
      "scale3d(0.3, 0.3, 0.3)",
      "scale3d(1.1, 1.1, 1.1)",
      "scale3d(0.9, 0.9, 0.9)",
      "scale3d(1.03, 1.03, 1.03)",
      "scale3d(0.97, 0.97, 0.97)",
      "scale3d(1, 1, 1)",
    ],
  }
);
