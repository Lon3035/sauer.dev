import React, { Suspense } from "react";
import TerminalNavbar from "./TerminalNavbar";
import GlobalTerminalBlock from "./TerminalBlock";
import { TerminalProvider } from "./TerminalContext";
import ClientOnly from "./ClientOnly";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-black to-blue-950">
      <ClientOnly>
        <TerminalNavbar
          items={[
            { label: "Home", onClick: () => (window.location.href = "/") },
            {
              label: "GPG",
              onClick: () => (window.location.href = "/gpg"),
            },
          ]}
        />
      </ClientOnly>
      <TerminalProvider>
        <main className="h-screen w-screen flex items-center justify-center font-cascadia">
          <Suspense>{children}</Suspense>
          <ClientOnly>
            <GlobalTerminalBlock />
          </ClientOnly>
        </main>
      </TerminalProvider>
    </div>
  );
};

export default Layout;
