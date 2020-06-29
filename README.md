# rpgmv-editing-supporter

RPG ツクール MV の補助ツールを作ってみるテスト

## Usage

1. `git clone https://github.com/katai5plate/rpgmv-editing-supporter`
2. `yarn`

- 実行するときは `yarn start`
- 開発するときは `yarn watch`

## メモ

- なぜか `clipboard.writeBuffer` が `Electron 7.3.1` じゃないと正常動作しない。
  - `8.0.0-beta1` はそもそも起動しないし `8.0.0-beta2` からはもうおかしい。
