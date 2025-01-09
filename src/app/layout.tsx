import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import WhatsappLive from "@/sections/WhatsappLive";
import { SpeedInsights } from "@vercel/speed-insights/next"

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DATABIZ",
  description: "software a tu medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <WhatsappLive />
        <SpeedInsights/>
      </body>
    </html>
  );
}
