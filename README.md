# playwright-test

GitHub Actions 定期実行で Playwright をつかって本番環境での E2E テストを行うテスト。

- GitHub Actions の設定ファイル [playwright.yml](/.github/workflows/playwright.yml) が入り口でこれを [GitHub Actions の schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) の設定で 1 時間に一回実行するようにしている。
- 実際に起動されるのは package.json に定義されてる scripts から `pnpm test:e2e` を通して `playwright test` が GitHab Actions 上で実行される。
- [tests/techtalkjp.spec.ts](/tests/techtalkjp.spec.ts) に格納されているテストコードが実行される
- 実行結果は html や video として artifact として保存している。異常があったときはこれらをみて確認できる。
