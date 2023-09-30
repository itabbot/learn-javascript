# 知识：JavaScript 中多种常用的模块化规范<!-- omit in toc -->

- [1. CommonJS](#1-commonjs)
- [2. AMD](#2-amd)
- [3. UMD](#3-umd)
- [4. ESM](#4-esm)

## 1. CommonJS

CommonJS 是一种用于服务器端 JavaScript 的模块化规范，它不是 ECMAScript 规范的一部分，所以浏览器也并不支持 CommonJS，但可以使用转译器进行打包。CommonJS 规范的初衷是为了解决 JavaScript 在服务器端应用开发中的模块化问题，Node.js 是第一个广泛采用 CommonJS 规范的项目，并将其作为默认的模块化方案。随着 Node.js 的迅速发展，CommonJS 规范也逐渐得到了更广泛的认可和使用。

CommonJS 模块规范由 Mozilla 工程师 Kevin Dangoor 以及一群 JavaScript 社区成员（包括一些负责 ECMAScript 的 TC39 小组成员）于 2009 年 1 月启动，他们在 Ryan Dahl 创建的 Node.js 项目中使用 JavaScript 进行服务器端开发时，意识到 JavaScript 缺乏一种标准的模块系统（当时 ESM 还没成为 JavaScript 标准的一部分）。为了解决这个问题，他们开始讨论和共同开发一种模块化规范，最终形成了 CommonJS 规范。CommonJS 最初命名为 ServerJS，在 2009 年 8 月，改名为 “CommonJS” 来展示其 API 的广泛应用性。

CommonJS 使用 `module.exports` 导出模块。可以通过赋值给 `module.exports` 来导出单个值、对象、函数或类。例如（[myModule.js](./CommonJS/myModule.js)）：

```JavaScript
module.exports = {
  foo: 'bar',
  add: function(a, b) {
    return a + b;
  }
};
```

CommonJS 使用 require 函数导入模块。可以使用 require 函数将其他模块的导出值引入到当前模块中。例如（[index.js](./CommonJS/index.js)）：

```JavaScript
var myModule = require('./myModule');
console.log(myModule.foo); // 输出 'bar'
console.log(myModule.add(2, 3)); // 输出 5
```

## 2. AMD

AMD (Asynchronous Module Definition，异步模块定义) 是一种用于在 JavaScript 中实现模块化的规范。它与 CommonJS 模块规范相对应，旨在满足在浏览器环境中异步加载模块的需求。它借助于回调函数和依赖声明来实现模块的异步加载，使得模块的加载不会阻塞页面的其他操作。AMD 规范主要由 [RequireJS](https://requirejs.org)（一个流行的 AMD 模块加载器，[GitHub](https://github.com/requirejs)）推广和实现。

AMD 规范是由 JavaScript 开发者兼项目 RequireJS 的作者 [James Burke](https://github.com/jrburke) 在 2009 年创建。James Burke 创建 AMD 的主要原因是为了在浏览器环境中实现模块化的 JavaScript 开发。当时，JavaScript 的原始模块化支持较弱，开发者普遍使用全局变量和命名空间来组织代码，容易导致命名冲突和代码耦合的问题。为了解决这些问题，James Burke 设计和实现了 RequireJS 模块加载器。RequireJS 提供了异步加载模块的能力，使得 JavaScript 模块可以在浏览器中以非阻塞的方式加载，增强了代码的可维护性和可重用性。AMD 规范和 RequireJS 在浏览器端模块化开发中得到了广泛的应用，并为后续的模块化规范的发展奠定了基础（如今的 AMD 规范在一定程度上被 CommonJS 和 ES6 模块化规范取代）。

## 3. UMD

UMD（Universal Module Definition，通用模块定义）是一种旨在兼容多种模块化规范的模块化开发方案。UMD 并不是一种独立的模块化规范，它更像是一种模块的适配器或包装器，用于将模块化代码转换成符合不同模块化规范的代码。它可以让开发者编写的模块可以在不同的 JavaScript 环境中运行，包括浏览器端和服务器端。UMD 的目标是提供一种通用的模块定义方式，使得模块可以适应不同的模块加载器和规范，包括 AMD、CommonJS、全局变量等。UMD 模块的实现一般遵循以下步骤：

1. 首先，检测当前的执行环境，确定使用哪种模块化规范（如检查是否存在 define 函数）。
2. 如果当前环境符合 AMD 规范，就使用 AMD 的方式来定义模块。
3. 如果当前环境符合 CommonJS 规范，就使用 CommonJS 的方式来定义模块。
4. 如果当前环境不符合以上两种规范，那么将模块导出到全局变量中，供全局访问。

## 4. ESM

ESM 是指 ES6 模块化 (ES6 Modules)。它是 ECMAScript 6（也称为 ES2015）引入的一种官方的 JavaScript 模块化规范。ESM 提供了一种标准化的方式来编写和组织 JavaScript 代码，使得开发者可以在项目中使用模块化的结构和语法，更好地管理和复用代码。ESM 发布后，主流浏览器和 Node.js 引擎陆续实现了对 ESM 的支持。相较于旧有的模块化方案如 AMD 和 CommonJS，ESM 具有以下特点：

1. 静态导入和导出： ESM 使用 `import` 和 `export` 关键字来显式地导入和导出模块。这种静态语法使得代码更具可读性和可靠性，并且对于静态分析和构建工具更友好。
2. 支持命名导出和默认导出： ESM 允许使用命名导出（通过 `export` 关键字导出多个变量或函数）和默认导出（通过 `export default` 关键字导出一个默认值）来输出模块的内容。
3. 单一实例引入： 在 ESM 中，模块的导入是单一实例的，即每个模块只会被导入一次，无论导入的位置有多少。这有助于减少重复代码执行和提高性能。
4. 动态模块加载： 除了静态导入，ESM 还引入了 `import()` 函数用于动态加载模块。这使得开发者可以根据需要在运行时动态加载模块，而不是在一开始就全部导入。

导出语法如（[myModule1.js](./ESM/myModule1.js) / [myModule2.js](./ESM/myModule2.js)）：

```JavaScript
// 命名导出（Named Exports）： 导出单个
export const variable1 = 1;
export function myFunction1() {
  console.log("myFunction1");
}

// 命名导出（Named Exports）： 或导出多个
const variable2 = 2;
const variable3 = 3;
function myFunction2() {
  console.log("myFunction2");
}
export { variable2, variable3, myFunction2 };

// 默认导出（Default Export）： 只能导出单个
export default function myFunction3() {
  console.log("myFunction3");
}
```

```JavaScript
// 组合导出（Mixed Exports）
const variable4 = 4;
const variable5 = 5;
function myFunction4() {
  console.log("myFunction4");
}
export { variable4, variable5, myFunction4 as default };
```

导入语法如（[index.js](./ESM/index.js)）：

```JavaScript
/* 命名导入（Named Imports）单个或多个 */
import { variable1 } from "./myModule1.js";
import { variable2, variable3, myFunction1, myFunction2 } from "./myModule1.js";
console.log(variable1, variable2, variable3);
myFunction1(), myFunction2();
// 输出：
// 1 2 3
// myFunction1
// myFunction2

/* 默认导入（Default Import） */
import myFunction3 from "./myModule1.js";
myFunction3();
// 输出：
// myFunction3

/* 组合导入（Mixed Imports） */
import { variable4, variable5, default as myFunction4 } from "./myModule2.js";
// import myFunction4, { variable4, variable5 } from "./myModule2.js"; // 同上
console.log(variable4, variable5);
myFunction4();
// 输出：
// 4 5
// myFunction4

/* 动态导入（Dynamic Import） */
import("./myModule1.js")
  .then((module) => {
    // 使用导入的模块
    console.log("动态导入：", module);
  })
  .catch((error) => {
    // 处理导入错误
    console.error("动态导入失败：", error);
  });
// 输出：
// 动态导入： [Module: null prototype] {
//     default: [Function: myFunction3],
//     myFunction1: [Function: myFunction1],
//     myFunction2: [Function: myFunction2],
//     variable1: 1,
//     variable2: 2,
//     variable3: 3
// }

/* 远程导入（Remote Import） */
// 如：import("https://example.com/module.js").then(...).catch(...)
```

注意：

1. ESM 的模块文件通常使用 `.mjs` 后缀，以与传统的 `.js` 后缀的 JavaScript 文件进行区分。
2. 在浏览器中导入使用时：
   - 使用 `<script type="module" src="...">` 标签将模块引入到页面中（如 [`index.html`](./ESM/index.html)）。
   - 即可通过导入的方式来使用模块中的导出的内容。
   - 但是 ESM 文件必须通过 HTTP(S) 或本地服务器访问，而不是直接在文件系统中打开（可启动 [`server.js`](./ESM/server.js) 服务）。
3. 在 Node.js 中导入使用时：
   - 若文件不使用 `.mjs` 后缀，则必须在 [`package.json`](./ESM/package.json) 中设置 `"type": "module"`。
