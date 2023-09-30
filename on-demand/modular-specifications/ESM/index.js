/* 命名导入（Named Imports）单个或多个 */
import { variable1 } from "./myModule1.js";
import { variable2, variable3, myFunction1, myFunction2 } from "./myModule1.js";
console.log(variable1, variable2, variable3);
myFunction1();
myFunction2();
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
