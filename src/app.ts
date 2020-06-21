// すべての Node.js API はプリロードプロセスで使用できます。
// Chrome 拡張機能と同じサンドボックスがあります。
import { render } from "react-dom";
import { to, debug } from "./utils";
import HelloWorld from "./components/HelloWorld";

const App = to({}, [HelloWorld]);

debug("app", App);

window.addEventListener("DOMContentLoaded", () => {
  const domContainer = document.querySelector("#app");
  render(App, domContainer);
});
