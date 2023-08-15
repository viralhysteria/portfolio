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
  return (
    <html lang="en">
      <body data-bs-theme="auto">
        {children}
      </body>
    </html>
  );
}
