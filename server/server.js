//整个服务端打包逻辑

//0. 服务端其他一些运用插件

const chalk = require('chalk');

//1.服务端导入vue, VueServerRender模块
const Vue = require('vue');
const VueServerRender = require('vue-server-renderer');

//2.服务端导入node核心模块
const path = require('path');
const fs = require('fs');
const port = 3000;

//3.服务端导入koa, koa-router模块
const Koa = require('koa');
const Router = require('@koa/router');

let app = new Koa(); //利用Koa差生一个实例
let router = new Router(); //服务端创建一个路由实列

router.get('/',async (ctx,next)=>{

});
app.use(router); //把路由注册到app实列上

app.listen(port,()=>{
    console.log(chalk.bgYellowBright(`${port}端口已经启动........`));
});








