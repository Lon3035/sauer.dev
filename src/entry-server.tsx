import { StaticRouter } from "react-router";
import {
  renderToPipeableStream,
  type RenderToPipeableStreamOptions,
} from "react-dom/server";
import App from "./App";

export function render(url: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    options
  );
}
