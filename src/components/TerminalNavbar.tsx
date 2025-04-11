"use client";

type TerminalNavbarItem = {
  label: string;
  onClick: () => void;
};

export default function TerminalNavbar() {
  const items: TerminalNavbarItem[] = [
    { label: "Home", onClick: () => (window.location.href = "/") },
    { label: "GPG", onClick: () => (window.location.href = "/gpg") },
    { label: "Contact", onClick: () => (window.location.href = "/contact") },
  ];
  return (
    <nav className="w-full">
      <div className="max-w-5xl mx-auto flex justify-center space-x-4 pt-5 text-lg font-bold">
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
    </nav>
  );
}
