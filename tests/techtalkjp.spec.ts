import { test, expect } from "@playwright/test"

test("TechTalkJP website", async ({ page }) => {
  await page.goto("https://www.techtalk.jp/")
  await page.getByPlaceholder("お名前").fill("playwright")
  await page.getByPlaceholder("会社名").fill("Playwright Corporation")
  await page.getByPlaceholder("電話番号").fill("08000000000")
  await page.getByPlaceholder("メール").fill("test@example.com")
  await page
    .getByPlaceholder("メッセージ")
    .fill("here is test message.\nthank you!")
  await page.getByRole("button", { name: "Let's talk" }).click()

  // await except じゃないと visible になるのを待たない！
  await expect(
    await page.getByText(
      "お問い合わせありがとうございます。以下のメッセージを受付けました。お返事をお待ち下さい。"
    )
  ).toBeVisible()
})
