// すべての Node.js API はプリロードプロセスで使用できます。
// Chrome 拡張機能と同じサンドボックスがあります。
import { render } from "react-dom";
import { createElement as e, FC } from "react";
import { genKey } from "./utils";

const ElectronHelloWorldVersion: FC<{ name: string }> = (props) => {
  return e(
    "span",
    { ...genKey(), id: props.name + "-version" },
    (process.versions as any)[props.name]
  );
};

const ElectronHelloWorld = e("div", { key: "hello" }, [
  e("h1", genKey(), "Hello World!"),
  "We are using Node.js ",
  ElectronHelloWorldVersion({ name: "node" }),
  ", Chromium ",
  ElectronHelloWorldVersion({ name: "chrome" }),
  ", and Electron ",
  ElectronHelloWorldVersion({ name: "electron" }),
]);

window.addEventListener("DOMContentLoaded", () => {
  const domContainer = document.querySelector("#app");
  render(ElectronHelloWorld, domContainer);
});
