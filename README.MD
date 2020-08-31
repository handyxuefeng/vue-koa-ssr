## ssr运行过程
- 只是首屏做ssr,服务端渲染
- 后续的切换逻辑 执行的都是客户端渲染（前端路由来切换）
- (vue react) 中使用ssr, 传统的ssr java+freemarker(volicity,jsp), php+smarty
- node 服务来实现ssr(koa)


## 整个打包的过程
- 通过一份代码打包出来两份逻辑(前端，服务端)
- 前端拿到打包的js,后端通过打包的结果渲染出字符串
- 前端的js + 后端渲染出来的字符串 = 呈现给浏览器

## ssr 组件清单
- vue  
- vue-server-renderer (vue服务端渲染模块)
- koa
- @koa/router 实现后端路由系统
```
yarn add vue vue-server-renderer koa @koa/router

```

## 程序运行清单
- nodemon
- npm-run-all
- webpack
- webpack-cli