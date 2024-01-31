---
title: 【Docusaurus】介紹、建立步驟
sidebar_label: 介紹、建立步驟
tags: ["Docusaurus"]
---

# Docusaurus 介紹、開始建構網站

一直想找個寫技術筆記的架站地方，本來有考慮 [Hexo](https://hexo.io/zh-tw/)，不過一直沒有空去用，後來看到 [PJCHENder](https://pjchender.dev/) 跟 [Wei](https://weiyun0912.github.io/Wei-Docusaurus/) 都用 Docusaurus，看起來介面很乾淨，官方文件看起來也沒有很複雜，就趁著假日架起來試看看。

[Docusaurus](https://docusaurus.io/) 是由 Facebook 推出的，用 React 建構，所以可以使用 JSX 語法，或是使用 Components 去製作網站，原始樣板就有切換深色主題模式，文章的清單設定也非常的好理解，還可以使用 [Algolia](https://www.algolia.com/) 實作搜索功能。

很多官方網站也都是用 Docusaurus 架的，像是 [create-react-app](https://create-react-app.dev/)。

## 建立專案

```
npx create-docusaurus@latest my-website classic
```

- `my-website` 可以更改成自己取的專案名
- `classic` 是官網推薦的樣板，可以快一點了解專案怎麼運作的。

如果想用 `TypeScript` 只要在後面加 `--typeScript` 就可以了

```
npx create-docusaurus@latest my-website classic --typescript
```

初始資料夾會是長這樣

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
└── sidebars.js
```

- `/blog/`：blog 區塊
- `/doc/`：文檔區塊
- `/src/`：跟 React 的 src 差不多，page 跟 components 會在這個區塊。
- `/static/`：build 後會在根資料夾，放靜態的檔案 EX：logo.svg。
- `/docusaurus.config.js/`：很重要的地方，裡面包含所有 Docusaurus 的設定，包括模板樣式、部屬設定
- `/sidebars.js/`：主要是給 doc 設定側邊選單的地方。

更多詳細的項目可以參考 [Installation](https://docusaurus.io/docs/installation)

## 在本地端顯示

```
cd my-website
npm run start
```
