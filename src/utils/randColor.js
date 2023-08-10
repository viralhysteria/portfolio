export const randColor = () => {
  const base = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += base[Math.floor(Math.random() * 16)];
  }

  return color;
};