import React from "react";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body data-bs-theme="auto">{children}</body>
    </html>
  );
};

export default Layout;