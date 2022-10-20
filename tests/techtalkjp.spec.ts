import { test, expect } from "@playwright/test"

test("TechTalkJP website", async ({ page }) => {
  await page.goto("https://www.techtalk.jp/")

  // フォームを埋める
  await page.getByPlaceholder("お名前").fill("playwright")
  await page.getByPlaceholder("会社名").fill("Playwright Corporation")
  await page.getByPlaceholder("電話番号").fill("08000000000")
  await page.getByPlaceholder("メール").fill("test@example.com")
  await page
    .getByPlaceholder("メッセージ")
    .fill("here is test message.\nthank you!")

  // フォームを送信
  await page.getByRole("button", { name: "Let's talk" }).click()

  // フォームが送信されたことを確認
  // await except じゃないと visible になるのを待たない！
  await expect(
    await page.getByText(
      "お問い合わせありがとうございます。以下のメッセージを受付けました。お返事をお待ち下さい。"
    )
  ).toBeVisible()
})

test.only("TechTalkJP website in English", async ({ page }) => {
  await page.goto("https://www.techtalk.jp/")

  // English を選択
  await page.getByRole("button", { name: "Language" }).click()
  await page.getByRole("menuitem", { name: "English" }).click()
  await expect(page).toHaveURL("https://www.techtalk.jp/en")

  // フォームを埋める
  await page.getByPlaceholder("Name").fill("playwright")
  await page.getByPlaceholder("Company").fill("Playwright company")
  await page.getByPlaceholder("Phone").fill("08000000000")
  await page.getByPlaceholder("Email").fill("test@example.com")
  await page
    .getByPlaceholder("Message")
    .fill("this is test for english pages\nthank you!")

  // フォームを送信
  await page.getByRole("button", { name: "Let's talk" }).click()

  // フォームが送信されたことを確認
  await expect(
    await page.getByText(
      "お問い合わせありがとうございます。以下のメッセージを受付けました。お返事をお待ち下さい。"
    )
  ).toBeVisible()
})
