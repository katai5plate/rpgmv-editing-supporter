import Page from "./Base";
import HelloWorld from "../templates/HelloWorld";
import { fc, pk, el, setMvClip } from "../../utils";

const SendEventButton = fc(() =>
  pk([
    el("button", {
      onClick: () => {
        setMvClip("rpgmv-EventCommand", [
          { code: 105, indent: 0, parameters: [2, false] },
          { code: 405, indent: 0, parameters: [""] },
          { code: 405, indent: 0, parameters: [""] },
          { code: 405, indent: 0, parameters: ["CLIPBOARD IS OKEY"] },
        ]);
        alert("コピーしました");
      },
      children: "動作テスト用にイベントコマンドをコピーする",
    }),
  ])
);

export default fc(() =>
  pk([
    //
    Page({ heading: "Test", children: [HelloWorld(), SendEventButton()] }),
  ])
);
