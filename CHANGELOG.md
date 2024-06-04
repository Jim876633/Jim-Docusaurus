# Blog Changelog

## 2023-01-08

### 部署 Docusaurus 2 到 GitHub Pages

使用 GitHub Actions 部署到 GitHub Pages，`deploy.yml` 參考 [Triggering deployment GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)

## 2023-04-23

### 新增 Algolia 搜尋

文章：[在 Docusaurus 導入 Algolia 搜尋](/Docusaurus/algolia)

## 2023-05-07

### 新增留言區使用 giscus

文章：[如何在 docusaurus 增加留言區](/Docusaurus/giscus)

## 2023-05-10

### 新增最新文章列表在首頁

文章：[如何自動顯示 Docusaurus 文章列表](/Docusaurus/getDocList)

## 2023-10-19

### 新增 sidebar toggle button

在 `docusaurus.config.js` 新增

```js
const config = {
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
  },
};
```

可以在 sidebar 下方看到 toggle button，可以收合 sidebar；點擊不同的 category 會自動收合其他 category。

## 2023-11-11

### 新增訂閱功能使用 mailchimp

使用 node.js 串接 mailchimp API，建立訂閱功能欄位。

## 2023-11-14

### 新增 Tag NavLink

把原有的 Tag 頁面連結顯示在 NavLink，並客製化 Tag hover 樣式。

## 2023-11-25

### 更新 Docusaurus 到 v3.0.0

照著[官網](https://docusaurus.io/docs/migration/v3)升版到 Docusaurus v3.0.0，沒有遇到什麼太大的問題，看起來主要是更新 MDX 套件到 v3，有些原本支援的語法，升版後就不支援了，要確認一下 .mdx 檔案的內容有沒有噴錯。

- 如果有客製化 MarkDown 程式碼樣式，這次有更新 `prism-react-renderer` 套件，要調整原本的引入寫法，而且預設支援的語法有減少，需要手動新增需要的語法。

- [Admonitions](https://github.com/facebook/docusaurus/pull/9308) 原本的 `:::warning` 是紅色背景，現在改成黃色背景，如果要用紅色背景，可以用 `:::danger`；而原本黃色背景的 `:::caution` 被棄用，雖然 v3 還是可以使用，但到 v4 就會完全棄用，還是先改一改。

## 2023-11-26

### 買網域設定 DNS 將網址改為 https://jimhuang.dev

在 GoDaddy 買網域，一年 $630 台幣小貴，不過結尾有 .dev 很喜歡ＸＤ

沒有買 SSL(TLS) 憑證，直接在 GitHub Pages 勾選 Force HTTPS，有人說好像有期限，但官網沒看到，之後有遇到再說。

## 2023-12-16

### 新增 CHANGELOG 頁面

新增 CHANGELOG 頁面，跑 script 去抓 `CHANGELOG.md` 的內容轉成 JSON 格式顯示在頁面上，記錄每次更新的內容。

使用套件：

- [fs](https://www.npmjs.com/package/fs)：讀取 CHANGELOG.md 檔案
- [marked](https://www.npmjs.com/package/marked)：將 markdown 轉成 html string
- [jsdom](https://www.npmjs.com/package/jsdom)：將 html string 轉成 DOM 物件
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)：將 DOM 物件轉成 React component

## 2024-05-04

### 新增 TextPronounce Component

因為有些專有名詞光看會不知道怎麼發音，所以新增 TextPronounce Component，可以在文章中加入發音按鈕，使用 Web Speech API [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 來發音，按第二次發音會把語速調慢一點。
