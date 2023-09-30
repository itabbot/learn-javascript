// 组合导出（Mixed Exports）
const variable4 = 4;
const variable5 = 5;
function myFunction4() {
  console.log("myFunction4");
}
export { variable4, variable5, myFunction4 as default };
