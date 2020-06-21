// このファイルは index.html ファイルに必要であり、
// そのウィンドウのレンダラープロセスで実行されます。
// webPreferences で nodeIntegration が true に設定されていない限り、
// このプロセスで使用できる Node.js API はありません。
// preload.js を使用して、
// レンダラープロセスで必要な機能を選択的に有効にします。

document.querySelector("#app").innerHTML = "読み込み中...";
document.title = new Date().toLocaleTimeString();
