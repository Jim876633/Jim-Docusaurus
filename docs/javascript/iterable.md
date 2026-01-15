---
title: 【JavaScript】甚麼是 iterable？
sidebar_label: iterable
tags: [javascript, coderbridge]
---

是不是曾經看過下面的報錯：

![](https://static.coderbridge.com/img/Jim876633/56dd86676c8a476a890cb4fb743cd1b3.jpg)

甚麼是 iterable？？好像蠻常看到，但又不知道是甚麼。

通常都是在用 `Array.map()`、`for...of` 之類的方法時發生錯誤的，今天就來好好了解一下甚麼是 iterable？它又有甚麼特性呢？

## Iterable

Iterable 直翻的話是**可被迭代的**，光看翻譯還是不知道是甚麼意思，不過從報錯的情況來看，像是 `Array.map()`、`for...of` 等，可以大概知道是發生在**訪問各個元素**的情況。

所以 Iterable 簡而言之，就是你可以**逐一讀取物件內的元素**，也可以對各個元素進行操作。

常見的 Iterable 物件有：

- Array
- String
- Set
- Map
- arguments
- DOM Elements

不知道甚麼是 Map 跟 Set 可以看這篇 [
Set & Map - 變形的 Array & Object ?](https://jim1105.coderbridge.io/2022/09/28/set-map-array-object/)。

而有些函式則規定傳入的參數必須是 Iterable：

- forEach
- for..of
- 解構 [...Array]
- map()、filter() 等 Array 的 Method
- new Set()
- new Map()

我只列出一些常見的，不過只要記得，如果函式需要逐一訪問各個元素，都需要傳入 Iterable 的參數。

## Object is not Iterable？

雖然前面舉的例子是說， Iterable 的**物件**，但這邊的物件並不是 Object。

而 Javascript 裡面所說的物件 Object ，其實是**沒有** Iterable 的。

但有時候需要訪問 Object 裡面的元素怎麼辦？這時候就可以用 Javascript 提供的方法，將 Object 轉成 Array 或是 Map 就可以進行迭代了。

Object 轉 Array 的方法：[
Object get keys and values method](https://jim1105.coderbridge.io/2022/09/16/object-get-key-and-value/)

至於迭代是怎麼做的？更深層的原理之後再慢慢補上～～

## 參考

[認識 JavaScript Iterable 和 Iterator](https://jiepeng.me/2018/04/19/iterable-and-iterator-in-javascript)

[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)
