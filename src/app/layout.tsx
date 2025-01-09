import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import WhatsappLive from "@/sections/WhatsappLive";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Clarity from '@microsoft/clarity';

const projectId = "prbvibh5gv"
Clarity.init(projectId);

Clarity.identify("custom-id", "custom-session-id", "custom-page-id", "friendly-name");
Clarity.setTag("key", "value");
Clarity.event("custom-event");
Clarity.consent(true); // default value is set to true
Clarity.upgrade("reason");


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
