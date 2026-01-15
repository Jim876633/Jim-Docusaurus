---
title: 【leetCode】206. Reverse Linked List
sidebar_label: 206. Reverse Linked List
tags: [javascript, leetcode, coderbridge]
---

## 題目

> Given the head of a singly linked list, reverse the list, and return the reversed list.

傳入一個 linked List ，回傳相反的 List。

## 想法

是說我一開始根本不知道甚麼是 linked List，看他傳入的很像是 array ，想說不就是用 array.reverse() 就可以了嗎？想當然直接一個報錯 XD 才讓我去了解甚麼是 linked List。

簡單理解就是它是一個物件，裡面有兩個 key ，一個是 value ，一個是 next ，value 裝的是該物件的值，也就結點 （Node），next 裝的是下一個物件。

聽起來很複雜，不過寫出來就會比較好理解。

```js
let head = {
    value: 1;
    next:{
        value: 2;
        next:{
            value: 3;
            next:{
                value: 4;
                next: null;
            }
        }
    }
}
```

可以看到它寫起來就是槽狀的物件，它的特色在於，只要給你第一個節點（head），你就可以一路找下去，所以 linked list 就是一個有指向性的連結。

知道原理之後就來看我是怎麼想的：

```js
var reverseList = function (head) {
  if (!head) return head;
  let answer = new ListNode(head.val);
  while (head.next) {
    head = head.next;
    answer = new ListNode(head.val, answer);
  }
  return answer;
};
```

1. 當 `head === Null` 時，就回傳 head ，也就是不需要 reverse。

2. 從頭把每個節點的 value 拿出來，丟到新的 ListNode，並把 ListNode 從底層包上去，就可以完成 reverse。

## 結果 & 討論

![](https://static.coderbridge.com/img/Jim876633/0005d568878e4d178738d69749ae0070.jpg)

1. 每次 while 都重新建立新的 nodeList ，耗效能。

## 其他人解法

去 Discuss 裡面直接搜尋 javascript，就可以看到很多人的解法，有些真的很天才，可以多看看其他人怎麼解。

```js
var reverseList = function (head) {
  let pre = null;
  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
```

![](https://static.coderbridge.com/img/Jim876633/5e956ac9470f4010af7b8fa5ad5e47c8.jpg)
