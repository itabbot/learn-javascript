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
