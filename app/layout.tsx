import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneClick Ventures — Explore. Engage. Enable.",
  description:
    "Platform-first venture engine. We explore market gaps, engage audiences, and enable businesses to scale. Based in Pune, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#050B18" }}>
      <body style={{ backgroundColor: "#050B18" }}>
        {children}
      </body>
    </html>
  );
}
