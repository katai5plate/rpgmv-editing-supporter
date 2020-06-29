import {
  createElement,
  PropsWithChildren,
  Fragment,
  ReactNode,
  ReactHTML,
  ReactSVG,
  ClassAttributes,
} from "react";
import { clipboard } from "electron";
import { render } from "@testing-library/react";
const { print } = require("q-i");

type AnyObj = { [key: string]: AnyObj };
type Attributes<P> =
  | P
  | ClassAttributes<HTMLElement>
  | ClassAttributes<SVGElement>
  | ClassAttributes<Element>
  | ClassAttributes<HTMLInputElement>
  | null;

const randomText = () => {
  const gen = () =>
    Math.random()
      .toString(36)
      .slice(2, 5 + 2);
  return [...(gen() as any), ...(gen().toLocaleUpperCase() as any)]
    .sort(() => Math.random() - 0.5)
    .join("");
};
/** デフォルトで key はランダム生成する */
export const genKey = () => ({
  key: randomText(),
});

/** DOM を作る */
export const el = <P = {}, Props = PropsWithChildren<P>>(
  type: ReactHTML | ReactSVG | string,
  attr?: Attributes<Props>,
  ...node: ReactNode[]
) => createElement(type as any, { ...genKey(), ...attr }, ...node);
/** コンポーネントを作る */
export const fc = <P = {}, Props = PropsWithChildren<P>>(
  fn: (props?: Props) => ReturnType<typeof createElement>
) => fn;
/** コンポーネントをひとまとめにする */
export const pk = (node: ReactNode[]) =>
  createElement(Fragment, genKey(), ...node);

const getClipFormat = (name: string) =>
  `${
    process.platform === "darwin"
      ? "com.trolltech.anymime.application--"
      : "application/"
  }${name}`;
export const getMvClip = (name: string) =>
  JSON.parse(clipboard.readBuffer(getClipFormat(name)).toString());
export const setMvClip = (name: string, data: AnyObj | any[]) =>
  clipboard.writeBuffer(getClipFormat(name), Buffer.from(JSON.stringify(data)));

const clone = (x: any, rep?: (k: string, v: any) => any) =>
  JSON.parse(JSON.stringify(x), rep);
/** コンポーネントのデバッグ用 */
export const debug = (
  memo: string,
  element: ReturnType<typeof createElement>
) => {
  const { debug } = render(element, {
    baseElement: document.createElement("div"),
  });
  console.group("DEBUG: " + memo);
  console.groupCollapsed("props");
  print(
    clone(clone(element), (_, v) => {
      try {
        delete v.ref;
        delete v._owner;
        delete v._store;
        if ("key" in v) {
          v.props.key = v.key;
          delete v.key;
        }
        v =
          v instanceof Array
            ? v
            : {
                "</>": v.type || "React.Fragment",
                key: "",
                ...v.props,
                children: v.props.children,
              };
        delete v.type;
        delete v.props;
      } catch {}
      return v;
    })
  );
  console.groupEnd();
  console.groupCollapsed("dom");
  debug();
  console.groupEnd();
  console.groupEnd();
};
