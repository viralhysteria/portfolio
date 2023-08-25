const gradients = [
  { name: "red", colors: ["#e35d6a", "#842029"] },
  { name: "blue", colors: ["#3d8bfd", "#084298"] },
  { name: "cyan", colors: ["#3dd5f3", "#087990"] },
  { name: "gray", colors: ["#ced4da", "#495057"] },
  { name: "pink", colors: ["#de5c9d", "#801f4f"] },
  { name: "green", colors: ["#479f76", "#0f5132"] },
  { name: "yellow", colors: ["#ffcd39", "#997404"] },
  { name: "orange", colors: ["#fd9843", "#984c0c"] },
  { name: "purple", colors: ["#8c68cd", "#432874"] },
];

function genGradient(color1, color2) {
  return `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`;
}

export const g = gradients.reduce((acc, { name, colors }) => {
  acc[name] = genGradient(...colors);
  return acc;
}, {});
