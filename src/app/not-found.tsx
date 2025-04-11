import NotFoundClient from "./404";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Non existant Website of Leon Sauer",
  icons: {
    icon: "./icon.svg",
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
