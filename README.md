# Full New DouMi blog System

新的博客系统基于[Malagu](https://github.com/muxiangqiu/malagu)框架开发而成. 使用全新的设计方案，交互更加优秀，当然也是得益于Material-UI的设计风格(不过这套UI还是有很多槽点的，跟Antd比起来确实差劲很多)

新的博客系统使用了以下技术栈：

+ 前端
  + Malagu
  + React16
  + RR4
  + Material-ui
  + jsonRpc请求方式
+ 后端
  + Malagu
  + express
  + MySql
  + TypeORM

新的博客系统已经部署在阿里云ECS上，尝鲜可以访问：https://blog.5udou.cn/

# 如何在本地环境开发本博客系统

**Step 1** 安装nodejs和npm:

https://nodejs.org/download/

安装完nodejs后npm会自动安装，你也可以选择yarn工具作为包管理工具

**Step 2** Install malagu:(可以全局安装，也可以本地安装)

``` bash
$ npm -g install malagu
```

**Step 3** 从github上下载代码:

``` bash
$ git clone https://github.com/linxiaowu66/doumi-blog.git
```

**Step 4** 安装依赖(进入到项目目录下)

``` bash
$ npm i / yarn
```

**Step 5** 启动Mysql服务器

启动MySql服务器，新建数据库`douMiBlog`，用户名是`dev`，密码是`123456`，具体配置参考malagu.yml文件

*这里有个问题是第一次使用的时候需要将mysql的配置项synchronize改为true，才会新建所有的表，之后再置为false*

**Step 5** 启动项目

```bash
$ npm start
```

可以通过 `localhost:3000`访问到新版博客

## TODO

  - [ ] 如何使用Material-ui提供的那些颜色？以此统一系统的配色方案
  - [ ] 目前的Layout设计使用组件包含的方式：BlogContainer。可以看看能不能改成真的layout方式
  - [ ] 在生产环境下，登录成功之后的跨域Cookie没能够应用到后面的请求，需要解决这个问题
  - [ ] malagu框架默认没有通过身份认证的请求都会返回302重定向，目前因为是SPA，重定向给浏览器的是一个Hash页面，谷歌浏览器
    不认，不知道怎么解决这个？或许是Chome的bug？
  - [ ] 一篇Malagu框架的使用测评？
  - [ ] 目前的hash history可以转换为browser history吗？
  - [ ] 使用的snackbar组件的设计目前太诡异了，后续找到更好的解决方案？
  - [ ] 完成网站数据页面
  - [x] Markdown的Table样式完成
  - [ ] 关于typeorm报”AlreadyHasActiveConnectionError“和"ERR_EXIST_TABLE"错误的问题？
  - [ ] bizCharts的forceFit没能完完全全的fit view？需要继续调整优化。

## 开发记录
* typeorm支持mongoDB太弱了，mongoDB的ref特性从2017年有人提出到现在还没有实现😅
  https://github.com/typeorm/typeorm/issues/655
* 更多开发记录会以博客的形式放在新博客页面上
