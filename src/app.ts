// すべての Node.js API はプリロードプロセスで使用できます。
// Chrome 拡張機能と同じサンドボックスがあります。
import { render } from "react-dom";
import { pk, debug, fc } from "./utils";
import PageExperiment from "./components/pages/Experiment";

const App = fc(() =>
  pk([
    //
    PageExperiment(),
  ])
);

debug("app", App());

window.addEventListener("DOMContentLoaded", () => {
  const domContainer = document.querySelector("#app");
  render(App(), domContainer);
});
