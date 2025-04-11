import type { Metadata } from "next";
import TerminalNavbar from "@/components/TerminalNavbar";
import GlobalTerminalBlock from "@/components/TerminalBlock";
import { TerminalProvider } from "@/components/TerminalContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sauer.dev",
  description: "Personal Website of Leon Sauer",
  icons: {
    icon: "./icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-950 via-black to-blue-950">
        <TerminalNavbar />
        <TerminalProvider>
          <main className="h-screen w-screen flex items-center justify-center font-cascadia">
            {children}
            <GlobalTerminalBlock />
          </main>
        </TerminalProvider>
      </body>
    </html>
  );
}
