---
title: 【TypeScript】介紹、建立步驟
sidebar_label: 介紹、建立步驟
tags: ["TypeScript"]
---

# TypeScript 介紹

TypeScript 是一個**加強 JavaScript 型別的系統**，那為甚麼需要用 TypeScript？因為 JavaScript 是弱型別語言，所以在寫程式碼時，不會幫你檢查變數型別是否有用錯，直到執行後才會發現，如果專案越大，在 debug 的時候就會更加困難。

舉一個好理解的例子，假設有一個表單你輸入數字他會回傳 `+1` 的數字，但我們在讀取 input 的數字時，他會抓到的是字串，如果沒有轉換成數字，那結果就不會是我們預期的樣子。

```js
console.log(addOne("5")); // output: 51

function addOne(input) {
  return input + 1;
}
```

如果我們用 TypeScript 的話，他就會提示你型別有錯誤。

![](/img/typescript/typeScript-1-1.jpg)

不過他依然可以被編譯成 JavaScript ，當然也可以執行。所以 TypeScript 就只是一個預警措施，讓我們在寫程式碼的時候，可以更快的發現錯誤。

還有一個很重要的優點，就是當別人在看你的程式碼時，可以更快的知道你的變數或函式要做甚麼，假設有一個函式內容很多沒辦法馬上看出作用：

```js
function getValue(a,b){
    ...something
}
```

但如果使用 TypeScript：

```ts
function getValue(a :number,b :number):number{
    ...something
}
```

我們就可以大概知道傳入的參數是兩個數字，回傳的內容也是數字。

## 導入 TypeScript

因為使用的頻率的很高，所以直接裝 global 版就可以了。

```
npm install -g typescript
```

可以用 `tsc -v` 查看版本。

下載完後，就在想要加 TypeScript 的資料夾下初始化。

```
tsc --init
```

這時候你的資料夾下就會有一個 `tsconfig.json` 的檔案，這個就是所有 TypeScript 編譯的設定，之後再慢慢講解。

然後就可以建立一個 index.ts 檔，就可以開始寫 TypeScript 囉～

寫完後想要轉成 JavaScript 只要輸入

```
tsc
```

沒錯！就是那麼簡單，他就會把所有 TypeScript 的檔案轉成 JavaScript 了。

![](/img/typescript/typeScript-1-2.jpg)

可以看到他還順便幫你用 `use strict` 嚴謹模式，是不是很貼心！

下一篇來介紹有哪些型別以及使用方法。
