---
title: 【JavaScript】For 大家族 for 迴圈、forEach、for...in、for...of 一次搞清楚
sidebar_label: For family
tags: [javascript, coderbridge]
---

在學習迴圈的過程中，有好幾個可以使用的方法，這次來一次搞清楚這些用法的差別，以及他們的使用時機，Let's go !!

## for

一開始學迴圈最先會的語法，迴圈起始、結束都可以自己設定。

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//output：0 1 2 3 4
```

在還沒有 `let` 之前，在 for 迴圈使用 `var` 宣告變數，會有洩漏成全域變數的問題，所以現在都使用 `let` 宣告迴圈起始值。

```js
var i = 1;
for (var i = 0; i < 5; i++) {
    dosomething...
}
console.log(i);
//output：5，被 for 迴圈改變了全域變數的值
```

for 還有一個特性是可以使用 `break` 或 `return` 跳脫迴圈

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i === 2) break; // i = 2 時迴圈結束
}
//output：0 1 2
```

## forEach

學習 Array（陣列）後，會學到的語法，他可以對陣列進行迴圈，寫起來比 for 迴圈精簡，來比較看看：

```js
const arr = [1, 2, 3];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

// forEach loop
arr.forEach((element) => console.log(element)); // 1 2 3
```

是不是精簡超多！！用過之後就回不去了~~
不過缺點就是不能用 `break` 或 `return` 結束迴圈。

## for...in

跟 forEach 是同時在 ES5 推出的，可以遍歷 Array 跟 Object，改善了 forEach 不能用 `break` 跟 `return` 的缺點。

不過 `for...in` 遍歷的是 key ，在用陣列上也沒有比較方便，甚麼意思呢？來看一下範例：

### Array

```js
const arr = [1, 2, 3];
for (let el in arr) {
  console.log(el); // 0 1 2
}
```

可以看到列出來的是陣列的 index，咦？我以為只有物件才有 key，原來陣列也有 key 嗎？

沒錯！因為**陣列也是一個物件阿**，所以他當然也有 key 跟 value，只不過陣列的 key 就是他的 index，所以我們才能透過 `arr[1]` 來取得想要的元素。
既然陣列是個物件，當然也可以給他新的 key 跟 value：

```js
const arr = [1, 2, 3];

arr["name"] = "jim";

console.log(arr); // [1, 2, 3, name: 'jim']

console.log(arr["name"]); // jim

for (let key in arr) {
  console.log(key); //0 1 2 name
}
```

但是畢竟我們用 Array 遍歷，通常是為了取得 value，所以比起用 `arr[el]` 的方式取值，還不如用 `forEach` 更方便一點。

除此之外，`for...in` 還有一個**致命的缺點**，就是他會遍歷到繼承到屬性，也就是說用 Array.prototype 定義的屬性也會被遍歷到，看個範例：

```js
const arr = [1, 2, 3];

Array.prototype.name = "jim"; //自訂原型屬性

console.log(arr); // [1, 2, 3] 陣列不變

for (let key in arr) {
  console.log(key); // 1 2 3 name
}
```

可以看到陣列裡沒有 `name` 這個 key，不過在 `for...in` 卻被列印出來了，這樣就很容易找不到問題在哪。所以 `for...in` 大多用來遍歷物件的 key。

### Object

直接看範例：

```js
const obj = { name: "jim", age: 24 };

for (let key in obj) {
  console.log(key); // name age
}
```

不過跟 Array 一樣他也有同樣的缺點，就是繼承的屬性也會被遍歷：

```js
function People(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

People.prototype.getFullName = () => {
  return this.firstName + this.lastName;
}; //新增一個 prototype function

const person = new People("jim", "hence");

for (let key in person) {
  console.log(key + ":" + person[key]);
}
/* output
  firstName : jim
  lastName :  hence
  getFullName : () => {
      return this.firstName + this.lastName;
  }
*/
```

可以看到繼承的屬性也會被遍歷，解決方法就是用 `hasOwnProperty` 去篩選掉繼承的屬性：

```js
for (let key in person) {
  if (!person.hasOwnProperty(key)) return;
  console.log(key + ":" + person[key]);
}
/* output
  firstName : jim
  lastName :  hence
*/
```

## for...of

雖然 Array 也是可以用 hasOwnProperty 篩選，但是還是不太直覺，所以在 ES6 推出 `for...of` ，完美的解決所有問題，不僅可以終止迴圈，遍歷的也是 value ，更不會遍歷到自定義或繼承的屬性值，使用起來乾淨漂亮：

```js
const arr = [1, 2, 3];

for (let el of arr) {
  console.log(el); // 1 2 3
}
```

值得一提的是，`for...of` 遍歷的不只是陣列，只要是 **iterable 物件** 都可以遍歷，不知道 iterable 物件，可以參考 [甚麼是 iterable？](https://jim1105.coderbridge.io/2022/10/01/what-is-iterable/)。

## 總結

來總結一下各個優缺點：

| for      | 優點                                                                  | 缺點                                  | 使用時機                                 |
| -------- | --------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------- |
| for      | 可以中途停止                                                          | 寫起來較複雜                          | 非陣列情況下，還是很好用，例如列印乘法表 |
| forEach  | 寫起來簡潔                                                            | 無法中途停止                          | 陣列可以使用                             |
| for...in | 寫起來簡潔，可中途停止迴圈                                            | 陣列會遍歷 key ，而且會遍歷到繼承屬性 | 較適合用在遍歷物件                       |
| for...of | 寫起來簡潔，可中途停止迴圈，且遍歷 value ，且所有 iterable 物件皆可用 | 不能遍歷物件                          | 陣列遍歷較常用的語法                     |

## 參考

[MDN for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
[JS - for 迴圈與 forEach 有什麼不同](https://www.casper.tw/development/2020/10/05/js-for-loop-vs-for-each/)
[JavaScript中for of和for in的差別](https://blog.typeart.cc/JavaScript%E4%B8%ADfor%20of%E5%92%8Cfor%20in%E7%9A%84%E5%B7%AE%E5%88%A5/)
[談談 JavaScript 中 for ... in 這個 function](https://pjchender.blogspot.com/2016/06/javascript-for-in-function.html)
