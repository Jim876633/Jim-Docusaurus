---
title: Object get keys and values method
tags: [javascript, coderbridge]
---

## Object.keys(object)

- 回傳 object 裡所有 key 的 array

```
cont test = {a: 1, b: 2, c: 3};
console.log(Object.keys(test))
//output: [a, b, c]
```

## Object.values(object)

- 回傳 object 裡所有 value 的 array

```
cont test = {a: 1, b: 2, c: 3};
console.log(Object.values(test))
//output: [1, 2, 3]
```

## Object.entries(object)

- 回傳 object 裡所有 [key, value] 的 array

```
cont test = {a: 1, b: 2, c: 3};
console.log(Object.entires(test))
//output: [[a, 1], [b, 2], [c, 3]]
```
