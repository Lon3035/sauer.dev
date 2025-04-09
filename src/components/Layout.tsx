import React from "react";
import TerminalNavbar from "./TerminalNavbar";
import GlobalTerminalBlock from "./TerminalBlock";
import { TerminalProvider } from "./TerminalContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-black to-blue-950">
      <TerminalNavbar
        items={[
          { label: "Home", onClick: () => (window.location.href = "/") },
          {
            label: "GPG",
            onClick: () => (window.location.href = "/gpg"),
          },
        ]}
      />
      <TerminalProvider>
        <main className="h-screen w-screen flex items-center justify-center font-cascadia">
          {children}
          <GlobalTerminalBlock />
        </main>
      </TerminalProvider>
    </div>
  );
};

export default Layout;
