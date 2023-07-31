import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "viralhysteria",
  description: "Portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  const dataBsTheme = process.browser ? "auto" : "dark";

  return (
    <html lang="en" data-bs-theme={dataBsTheme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
