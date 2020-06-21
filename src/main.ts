import { app, BrowserWindow } from "electron";
import * as path from "path";

require("electron-reload")(__dirname, {
  electron: require("${__dirname}/../../node_modules/electron"),
});

function createWindow() {
  // ブラウザウィンドウを作成します。
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "app.js"),
      // webSecurity: false,
      // nodeIntegration: true,
      // enableRemoteModule: true,
    },
    width: 800,
  });

  // アプリの index.html をロードします。
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  // DevTools を開きます。
  mainWindow.webContents.openDevTools();
}

// このメソッドは、Electron が初期化を完了し、
// ブラウザウィンドウを作成する準備ができたときに呼び出されます。
// 一部の API は、このイベントの発生後にのみ使用できます。
app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    // macOSでは、ドックアイコンをクリックして他のウィンドウが開いていないときに、
    // アプリ内にウィンドウを再作成するのが一般的です。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// macOS を除き、すべてのウィンドウが閉じたら終了します。
// そこでは、ユーザーが Cmd + Q で明示的に終了するまで、
// アプリケーションとそのメニューバーがアクティブなままになるのが一般的です。
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// このファイルには、アプリの残りの特定のメインプロセスコードを含めることができます。
// 別のファイルに入れて、ここで要求することもできます。
