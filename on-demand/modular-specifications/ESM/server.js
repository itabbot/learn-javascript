import Koa from "koa";
import koaStatic from "koa-static";

// 实例化一个 Koa 应用
const app = new Koa();

// 设置静态目录
app.use(koaStatic("./"));

// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动");
});
