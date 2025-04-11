import { Helmet } from "react-helmet";
import { useTerminal } from "../components/TerminalContext";
import { useEffect } from "react";
import ClientOnly from "../components/ClientOnly";

const NotFound = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "cat 404.txt" },
      { type: "output", content: " " },
      { type: "output", content: "⚠️ 404 - Page Not Found ⚠️", delay: 700 },
      { type: "output", content: " " },
      {
        type: "output",
        content: "The page you are looking for does not exist.",
      },
      { type: "output", content: "It might have been moved or deleted." },
      { type: "output", content: " " },
      {
        type: "output",
        content: "Please check the URL or return to the homepage.",
      },
      { type: "output", content: " " },
      { type: "output", content: " " },
    ]);
  }, []);

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

export default NotFound;
