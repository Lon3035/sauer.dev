import * as ReactRouterDom from "react-router-dom";

const { BrowserRouter, Routes, Route } = ReactRouterDom;
import "./index.css";
import Home from "./pages/Home.tsx";
import Download from "./pages/Download.tsx";
import TerminalGPG from "./pages/TerminalGPG.tsx";
import Layout from "./components/Layout.tsx";
import NotFound from "./pages/404.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="gpg" element={<TerminalGPG />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
