"use client";

import React from "react";

type TerminalNavbarItem = {
  label: string;
  onClick: () => void;
};

export default function TerminalNavbar() {
  const items: TerminalNavbarItem[] = [
    { label: "Home", onClick: () => (window.location.href = "/") },
    { label: "GPG", onClick: () => (window.location.href = "/gpg") },
    { label: "About Me", onClick: () => (window.location.href = "/about") },
    { label: "Contact", onClick: () => (window.location.href = "/contact") },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full">
      <div className="max-w-5xl mx-auto flex justify-between items-center pt-5 text-lg font-bold">
        <div className="text-white font-mono ml-8">Leon Sauer</div>

        <div className="block lg:hidden mr-8">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="font-mono text-white hover:text-black hover:bg-purple-400 transition-colors rounded-md px-2"
            >
              [ {item.label} ]
            </button>
          ))}
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden text-center py-0 grid grid-cols-2`}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="block text-white font-mono hover:bg-purple-400 py-2"
          >
            [ {item.label} ]
          </button>
        ))}
      </div>
    </nav>
  );
}
