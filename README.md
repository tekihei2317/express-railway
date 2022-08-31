# express-railway

expressで作ったAPIを[Railway](https://railway.app)にデプロイしてみます。

## 手順

- プロジェクトの作成
- デプロイ

### プロジェクトの作成

```bash
railway init
```

Empty Projectを選択します。プロジェクト名は適当に決めます。

### デプロイ

手順があっているか分かりませんが、railway upしたらビルドとデプロイが実行されました。

```bash
railway up
```

ログにこういうのが書かれていました。

```text
╔═════════ Nixpacks v0.3.12 ════════╗
║ Setup      │ nodejs-16_x, npm-8_x ║
║───────────────────────────────────║
║ Install    │ npm ci               ║
║───────────────────────────────────║
║ Build      │ npm run build        ║
║───────────────────────────────────║
║ Start      │ npm run start        ║
╚═══════════════════════════════════╝
```

あとはサービスにドメインを割り当てて公開します。
サービスのSettingsのGenerate Domainをクリックします。数十秒したらアプリが確認できました。
公開されるポートは環境変数`$PORT`で決まっているっぽい。

## 感想

お手軽ですごすぎる。
