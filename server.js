//整个服务端打包逻辑

//0. 服务端其他一些运用插件

const chalk = require("chalk");

//1.服务端导入vue, VueServerRender模块
const Vue = require("vue");
const VueServerRender = require("vue-server-renderer");
const vm = new Vue({
  data() {
    return {
      num: "A0001",
      name: "jackie",
      age: 10,
    };
  },
  template:`<div>{{name}} 的学号为：{{num}},年龄为:{{age}}</div>`
});

//2.服务端导入node核心模块
const path = require("path");
const fs = require("fs");
const port = 3000;

//3.服务端导入koa, koa-router模块
const Koa = require("koa");
const Router = require("@koa/router");

let app = new Koa(); //利用Koa差生一个实例
let router = new Router(); //服务端创建一个路由实列

//4.读出打包需要的模板
const htmlTemplate = fs.readFileSync(
  path.resolve(__dirname, "index.html"),
  "utf-8"
);
const render = VueServerRender.createRenderer({
  template: htmlTemplate, // 采用哪个模板去进行打包渲染
});

router.get("/", async (ctx, next) => {
  ctx.body = await render.renderToString(vm); 
});

app.use(router.routes()); //把路由注册到app实列上

app.listen(port, () => {
  console.log(chalk.whiteBright(`${port}端口已经启动........`));
});
