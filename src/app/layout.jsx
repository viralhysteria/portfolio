import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body data-bs-theme="auto">{children}</body>
    </html>
  );
};

export const metadata = {
  title: "viralhysteria",
  description: "Portfolio",
};

export default RootLayout;