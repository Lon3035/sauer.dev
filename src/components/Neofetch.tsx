import Counter from "@/components/Counter";
import BrowserInfo from "./BrowserInfo";

const Neofetch = () => {
  return (
    <div className="flex flex-col md:flex-row  font-mono text-xl md:text-2xl leading-snug text-white justify-center">
      <pre className="mr-20 mb-5 text-xl leading-tight tracking-wider font-bold">
        <span className="text-green-400">{`                    c.'\n`}</span>
        <span className="text-green-400">{`                 ,xNMM.\n`}</span>
        <span className="text-green-400">{`               .OMMMMo\n`}</span>
        <span className="text-green-400">{`               VIV"\n`}</span>
        <span className="text-green-400">{`     .;loddo:.  .olloddol;.\n`}</span>
        <span className="text-green-400">{`   cKMMMMMMMMMMNWMMMMMMMMMM0:\n`}</span>
        <span className="text-yellow-300">{`.KMMMMMMMMMMMMMMMMMMMMMMMWd.\n`}</span>
        <span className="text-yellow-300">{` XMMMMMMMMMMMMMMMMMMMMMMMX.\n`}</span>
        <span className="text-red-400">{`;MMMMMMMMMMMMMMMMMMMMMMMM:\n`}</span>
        <span className="text-red-400">{`:MMMMMMMMMMMMMMMMMMMMMMMM:\n`}</span>
        <span className="text-red-400">{`:MMMMMMMMMMMMMMMMMMMMMMMM:\n`}</span>
        <span className="text-red-400">{`.MMMMMMMMMMMMMMMMMMMMMMMMX.\n`}</span>
        <span className="text-purple-500">{` kMMMMMMMMMMMMMMMMMMMMMMMMWd.\n`}</span>
        <span className="text-purple-500">{` 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk\n`}</span>
        <span className="text-blue-400">{`  'XMMMMMMMMMMMMMMMMMMMMMMMMK.\n`}</span>
        <span className="text-blue-400">{`    kMMMMMMMMMMMMMMMMMMMMMMd\n`}</span>
        <span className="text-blue-400">{`     ;KMMMMMMMWXXWMMMMMMMk.\n`}</span>
        <span className="text-blue-400">{`       "cooc*"    "*coo'"\n`}</span>
      </pre>

      <div className="flex flex-col justify-start space-y-1">
        <span className="text-green-300">Leon Gabriel Sauer</span>
        <span className="text-gray-400">------------------------</span>
        <span>
          <span className="text-yellow-400">OS:</span> DevOS 0.9.5 x64
        </span>
        <span>
          <span className="text-yellow-400">Host:</span> Fly.io
        </span>
        <span>
          <span className="text-yellow-400">Kernel:</span> NextJS
        </span>
        <span>
          <span className="text-yellow-400">Uptime:</span> <Counter />
        </span>
        <span>
          <span className="text-yellow-400">Packages:</span> too many
        </span>
        <span>
          <span className="text-yellow-400">Shell:</span> Web (<BrowserInfo />)
        </span>
        <span>
          <span className="text-yellow-400">Terminal:</span> React
        </span>
        <span>
          <span className="text-yellow-400">Font:</span> Monospace
        </span>
        <span>
          <span className="text-yellow-400">Stack:</span> Golang, Java,
          TypeScript
        </span>
        <span>
          <span className="text-yellow-400">Location:</span> Hamburg, Germany
        </span>
      </div>
    </div>
  );
};

export default Neofetch;
