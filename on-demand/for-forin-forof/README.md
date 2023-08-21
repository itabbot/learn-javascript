# 疑问：JavaScript 中的 for、for-in、for-of 语句有何异同<!-- omit in toc -->

在 JavaScript 中，for、for-in 和 for-of 都是用于循环迭代的语句，它们具有不同的语法和用途。

## 目录<!-- omit in toc -->

- [1. for 语句](#1-for-语句)
- [2. for-in 语句](#2-for-in-语句)
- [3. for-of 语句](#3-for-of-语句)

## 1. for 语句

for 循环是最常见的循环语句，用于重复执行一段代码固定次数。语法如下：

```javascript
for (初始化表达式; 条件表达式; 更新表达式) {
  // 循环体代码
}
```

for 循环适用于已知循环次数的情况，比如：

```javascript
// 循环5次
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 输出：
// 0
// 1
// 2
// 3
// 4
```

```javascript
// 遍历数组
const arr = [1, 2, "a", "b"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 输出：
// 1
// 2
// a
// b
```

## 2. for-in 语句

for-in 循环用于遍历（不保证遍历顺序）对象的可枚举属性（包括原型链上的），将每个属性的键（key）赋给指定的变量。

对象的可枚举属性包括：

- 对象字面量中的属性，如：`const obj = { foo:'bar', baz:'qux' };`。
- 使用 `Object.defineProperty()` 或 `Object.defineProperties()` 方法定义，且设置属性描述符 `enumerable:true` 的属性。
- Array 数组的元素。
- String 字符串的索引。

for-in 循环语句的语法如下：

```javascript
for (变量 in 对象) {
  // 循环体代码
}
```

for-in 循环通常用于遍历对象的属性或数组的索引。比如：

```javascript
// 实例化对象
class MyClass {
  foo = 1;
}
const obj = new MyClass();

// 字面量属性
obj.bar = 2;

// 定义属性
Object.defineProperty(obj, "baz", { value: 3, enumerable: true });
Object.defineProperty(obj, "qux", { value: 4, enumerable: false });

// 遍历对象的可枚举属性
for (let key in obj) {
  console.log(key, obj[key]);
}

// 输出：
// foo 1
// bar 2
// baz 3
```

```javascript
// 定义数组
const arr = [1, 2, "a", "b"];

// 遍历数组的索引
for (let idx in arr) {
  console.log(idx, arr[idx]);
}

// 输出：
// 0 1
// 1 2
// 2 a
// 3 b
```

```javascript
// 定义字符串
const str = "12ab";

// 遍历字符串的字符索引
for (let idx in str) {
  console.log(idx, str[idx]);
}

// 输出：
// 0 1
// 1 2
// 2 a
// 3 b
```

## 3. for-of 语句

for-of 循环是 ES6 引入的新循环语句，用于遍历具有迭代器（Iterator）的对象，它将可迭代对象的每个元素赋给指定的变量（而不是索引或键）。语法如下：

```javascript
for (变量 of 可迭代对象) {
  // 循环体代码
}
```

for-in 循环用于遍历具有迭代器的对象，比如数组、字符串、Set、Map、自定义迭代器等：

```javascript
// 定义数组（内置迭代器）
const arr = [1, 2, "a", "b"];

// 遍历数组
for (item of arr) {
  console.log(item);
}

// 输出：
// 1
// 2
// a
// b
```

```javascript
// 定义字符串（内置迭代器）
const str = "12ab";

// 遍历字符串
for (char of str) {
  console.log(char);
}

// 输出：
// 1
// 2
// a
// b
```

```javascript
// 定义Set（内置迭代器）
const set = new Set();
set.add(1);
set.add(2);
set.add("a");
set.add("b");

// 遍历Set
for (item of set) {
  console.log(item);
}

// 输出：
// 1
// 2
// a
// b
```

```javascript
// 定义Map（内置迭代器）
const map = new Map();
map.set(1, 1);
map.set(2, 2);
map.set("a", "a");
map.set("b", "b");

// 遍历Map
for (item of map) {
  console.log(item);
}

// 输出：
// [ 1, 1 ]
// [ 2, 2 ]
// [ 'a', 'a' ]
// [ 'b', 'b' ]
```

```javascript
// 自定义迭代器
const myIterable = {
  [Symbol.iterator]() {
    let idx = 0;
    const data = [1, 2, "a", "b"];
    return {
      next() {
        if (idx < data.length) {
          return { value: data[idx++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

// 遍历Map
for (item of myIterable) {
  console.log(item);
}

// 输出：
// 1
// 2
// a
// b
```
