import { el, fc, to } from "../utils";

const Version = fc<{ name: string }>((props) => {
  return el(
    "span",
    { name: props.name },
    (process.versions as any)[props.name]
  );
});

export default to({}, [
  el("h1", {}, "Hello World!"),
  "We are using Node.js ",
  Version({ name: "node" }),
  ", Chromium ",
  Version({ name: "chrome" }),
  ", and Electron ",
  Version({ name: "electron" }),
]);
