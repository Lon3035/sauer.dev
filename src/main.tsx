import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.tsx";
import Download from "./Download.tsx";
import TerminalGPG from "./TerminalGPG.tsx";
import Layout from "./components/Layout.tsx";
import NotFound from "./404.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="gpg" element={<TerminalGPG />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
