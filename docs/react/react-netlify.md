---
title: 【React】上傳到 Netlify 問題紀錄
sidebar_label: React 部署到 Netlify 問題紀錄
tags: [react, netlify, coderbridge]
---

## Problem 1

![](https://static.coderbridge.com/img/Jim876633/9095ef3bc97a478f81d1c9568b9fb301.jpg)

## Solution 1

Deploy 失敗，是 CI（Continuous Integration）的問題，把 `CI=` 加在 package.json 裡的 `react-scripts build` 的前面就解決了。
![](https://static.coderbridge.com/img/Jim876633/bf94caa22c24481dbd88d3880e2e3a6e.jpg)

## Problem 2

如果有用 react-router，當網頁的 url 不是初始 url 時（EX : /user/1234 等），當你再次重新整理時，會跑出錯誤畫面。

原因是因為當你重新整理時，會重新向 server 發出 request，但是 react-router 是建立在 client 端，所以 server 不會知道其他網址要通到哪裡。

## Solution 2

建立一個 `_redirects` 的檔案在 public 的資料夾裡面（主要是要跟 index.html 在同一個資料夾），然後在 `_redirects` 裡面輸入 `/*    /index.html   200` ，這樣當 netlify 找不到東西時，就會重新導向回 index.html。

## 參考

[How to deploy a React application to Netlify](https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/)
