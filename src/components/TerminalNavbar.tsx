interface NavItem {
  label: string;
  onClick: () => void;
}

interface TerminalNavbarProps {
  items: NavItem[];
}

export default function TerminalNavbar({ items }: TerminalNavbarProps) {
  return (
    <nav className="w-full">
      <div className="max-w-5xl mx-auto flex justify-center space-x-4 pt-5">
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
