import { Helmet } from "react-helmet";
import { useTerminal } from "../components/TerminalContext";
import { useEffect } from "react";
import ClientOnly from "../components/ClientOnly";

const Home = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "go run ./cmd/app/main.go" },
      { type: "output", content: "Hello World!", delay: 700 },
      { type: "output", content: " " },
      { type: "output", content: " " },
      { type: "output", content: " " },
      {
        type: "output",
        content: "⚠️ currently under construction ⚠️",
      },
    ]);
  }, []);

  // const [backgroundColor, setBackgroundColor] = useState("");
  // const colors = [
  //   "#414141",
  //   "#335b35",
  //   "#5c251f",
  //   "#33336a",
  //   "#4d2771",
  //   "#505132",
  // ];

  // const words = [
  //   "hello world",
  //   "print('hello world')",
  //   "System.out.println('hello world')",
  //   "console.log('hello world')",
  //   "fmt.Println('hello world')",
  //   "is there anybody out there?",
  // ];

  // useEffect(() => {
  //   const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //   setBackgroundColor(randomColor);
  //   document.title = "Lon";
  // }, []);

  return (
    <>
      <ClientOnly>
        <Helmet>
          <title>Sauer.dev</title>
          <meta
            property="description"
            content="Personal Website of Leon Sauer"
          />
          <meta
            property="og:description"
            content="Personal Website of Leon Sauer"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Leon Sauer" />
          <meta
            name="keywords"
            content="Leon Sauer, Leon Gabriel Sauer, personal website, developer"
          />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#414141" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        </Helmet>
      </ClientOnly>
    </>
  );
};

export default Home;
