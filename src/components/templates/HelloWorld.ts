import { el, fc, pk } from "../../utils";

const Version = fc<{ name: string }>((props) =>
  pk([
    //
    el("span", { name: props.name }, (process.versions as any)[props.name]),
  ])
);

export default fc(() =>
  pk([
    el("h2", {}, "Hello World!"),
    "We are using Node.js ",
    Version({ name: "node" }),
    ", Chromium ",
    Version({ name: "chrome" }),
    ", and Electron ",
    Version({ name: "electron" }),
  ])
);
