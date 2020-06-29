"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = __importStar(require("path"));
require("electron-reload")(__dirname, {
    electron: require("${__dirname}/../../node_modules/electron")
});
function createWindow() {
    // ブラウザウィンドウを作成します。
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "app.js"),
            // webSecurity: false,
            nodeIntegration: true
        },
        width: 800
    });
    // アプリの index.html をロードします。
    mainWindow.loadFile(path.join(__dirname, "../index.html"));
    // DevTools を開きます。
    mainWindow.webContents.openDevTools();
}
// このメソッドは、Electron が初期化を完了し、
// ブラウザウィンドウを作成する準備ができたときに呼び出されます。
// 一部の API は、このイベントの発生後にのみ使用できます。
electron_1.app.on("ready", function () {
    createWindow();
    electron_1.app.on("activate", function () {
        // macOSでは、ドックアイコンをクリックして他のウィンドウが開いていないときに、
        // アプリ内にウィンドウを再作成するのが一般的です。
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// macOS を除き、すべてのウィンドウが閉じたら終了します。
// そこでは、ユーザーが Cmd + Q で明示的に終了するまで、
// アプリケーションとそのメニューバーがアクティブなままになるのが一般的です。
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// このファイルには、アプリの残りの特定のメインプロセスコードを含めることができます。
// 別のファイルに入れて、ここで要求することもできます。
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE4QztBQUM5Qyx5Q0FBNkI7QUFFN0IsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxFQUFFO0lBQ3BDLFFBQVEsRUFBRSxPQUFPLENBQUMsMENBQTBDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDO0FBRUgsU0FBUyxZQUFZO0lBQ25CLG1CQUFtQjtJQUNuQixJQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUc7UUFDWCxjQUFjLEVBQUU7WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQ3ZDLHNCQUFzQjtZQUN0QixlQUFlLEVBQUUsSUFBSTtTQUV0QjtRQUNELEtBQUssRUFBRSxHQUFHO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsMkJBQTJCO0lBQzNCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUUzRCxrQkFBa0I7SUFDbEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRUQsNkJBQTZCO0FBQzdCLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDZCxZQUFZLEVBQUUsQ0FBQztJQUVmLGNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2pCLDJDQUEyQztRQUMzQywyQkFBMkI7UUFDM0IsSUFBSSx3QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsWUFBWSxFQUFFLENBQUM7SUFDakUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsd0NBQXdDO0FBQ3hDLGNBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNqQyxjQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDWjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsNENBQTRDO0FBQzVDLDZCQUE2QiJ9