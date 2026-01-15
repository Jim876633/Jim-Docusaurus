---
title: 【JavaScript】Set & Map - 變形的 Array & Object ?
sidebar_label: Set & Map
tags: [javascript, coderbridge]
---

Set & Map 是兩個比較少用到的**內建物件**，不過在某些情況卻很方便。既然是物件，就有一些好用的 property 跟 method，讓我們接著看下去。

## Set

直接看語法：

```
const number = new Set([1, 2, 3, 1, 4, 2]);
console.log(number)

//output: Set(4) {1, 2, 3, 4}
```

1. 使用 new 關鍵字創造 Set 物件。
2. 只能傳入可以被 **iterable** 的物件。
3. 回傳一個 Set 物件（跟一般 Object 一樣都是用 {}，不過沒有 key 只有 value），裡面的值都是唯一的。
4. **無法把裡面的值拿出來**（`Set[0]` 不存在），但可以用 seperate operator 變成Array（`[...Set]`）（實用！）。

重點就在於**唯一的**，在某些情況就會很方便，而 Set 物件本身也是 iterable ，至於 iterable 是甚麼，可以看這篇 [甚麼是 iterable？](https://jim1105.coderbridge.io/2022/10/01/what-is-iterable/)。

那怎麼使用 Set 裡面的值呢？就要使用他的 property 跟 method 啦！

### Property

- Set.size：物件內的數量，可計算有幾種唯一值（跟 array.length 很像）。

### Method

- Set.has(value)：回傳 boolean 是否存在 value。
- Set.add()： 加入元素，無法加入相同值（唯一值）。
- Set.delet(value)： 刪除指定 value。
- Set.clear()： 刪除全部值。

## Map

直接看語法：

```
const map = new Map([
    [1, 'a'], [2, 'b'], [3, 'c']
]);
console.log(map);

//output: Map(3) {1 => 'a', 2 => 'b', 3 => 'c'}
```

1. 使用 new 關鍵字創造 Map 物件。
2. 長的跟 Object 很像，只是從 `key : value` 變成 `key => value`。
3. key 可以是**任意型別**（type）。
4. 可以把 Map 轉成 Array （`[...Map]`）（實用！）

### Property

- Map.size：回傳有幾項。

### Method

- Map.set(key, value)： 建立 key => value，並回傳最新的Map 所以可以一直 set() 下去。
- Map.get(key)：回傳對應的 value。
- Map.has(key)：回傳 boolean，是否存在。
- Map.delete(key)：刪除指定項目。
- Map.clear()：清除全部項目。
- Map.keys()：取得所有的 keys。
- Map.values()：取得所有的 values。

Map 特殊的點在於 key 可以是**任意型別**，不過要特別注意如果用 Array 或 Object 當作 key 的話，會有 reference 不同的問題，所以要用這兩個當作 key 時，先存在一個固定的變數再去使用，就不會出現問題囉！

## 使用時機

1. 如果需要描述 value，使用 Objec & Map，不需要描述則使用 Array & Set。
2. 當 Array 需要唯一值時，使用 Set。
3. 當 Object 的 key 需要非 string 的型別時，使用 Map。

## 參考

[Set MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set)
[Map MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
