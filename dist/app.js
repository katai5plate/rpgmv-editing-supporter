"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// すべての Node.js API はプリロードプロセスで使用できます。
// Chrome 拡張機能と同じサンドボックスがあります。
var react_dom_1 = require("react-dom");
var utils_1 = require("./utils");
var Experiment_1 = __importDefault(require("./components/pages/Experiment"));
var App = utils_1.fc(function () {
    return utils_1.pk([
        //
        Experiment_1["default"](),
    ]);
});
utils_1.debug("app", App());
window.addEventListener("DOMContentLoaded", function () {
    var domContainer = document.querySelector("#app");
    react_dom_1.render(App(), domContainer);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFzQztBQUN0Qyw4QkFBOEI7QUFDOUIsdUNBQW1DO0FBQ25DLGlDQUF3QztBQUN4Qyw2RUFBMkQ7QUFFM0QsSUFBTSxHQUFHLEdBQUcsVUFBRSxDQUFDO0lBQ2IsT0FBQSxVQUFFLENBQUM7UUFDRCxFQUFFO1FBQ0YsdUJBQWMsRUFBRTtLQUNqQixDQUFDO0FBSEYsQ0FHRSxDQUNILENBQUM7QUFFRixhQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzFDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsa0JBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQyJ9