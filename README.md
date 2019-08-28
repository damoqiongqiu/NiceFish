<p align="center">
    <img width="150" src="./src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<div align="left">
NiceFish（美人鱼） 是一个系列项目，目标是示范前后端分离的开发模式:前端浏览器、移动端、Electron 环境中的各种开发模式；后端有两个版本：SpringBoot 版本和 SpringCloud 版本。
</div>

## 用法

打开终端，依次执行以下命令：

    git clone https://gitee.com/mumu-osc/NiceFish.git
    cd NiceFish
    npm i -g @angular/cli
    npm i
    ng serve --open

打开浏览器，访问http://localhost:4200/

**中文开发者**：网络原因，推荐安装 nrm 来管理 npm 的 registry。

    npm i -g nrm 
    nrm use cnpm

这时候用 npm 安装 node 模块就会使用 cnpm 提供的 registry 了。

## 常见坑点

* 中文开发者：如果你使用 cnpm 来安装依赖，可能会导致某些包不一致，导致应用起不来，目前原因不明，需要 cnpm 官方来解决。
* 如果你想让打包体积更小，请使用参数构建：ng serve --prod
* 构建最终结果：ng build --prod
* 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
* 如果之前装过老版本的 angular-cli 需要先卸载：npm uninstall -g angular-cli
* 如果你之前已经尝试用npm install安装过 node 模块，请把 NiceFish 根目录下的 node_moduels 目录删掉重新 npm install
* 命令行删除 node_modules 速度更快，Windows 平台使用： rmdir /s/q node_modules ，*nix平台使用：sudo rm -rf node_modules
* 如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有。

## 主要依赖

- Angular 8.0
- PrimeNG 8.0.2
- Bootstrap 3.3.7
- Echarts 4.1.0
- ngx-echarts 4.1.0
- ckeditor5-angular 1.1.0

**注意：为了防止依赖冲突，本项目在 package.json 中锁定了所有 Node 模块版本，如有需要，您可以自己测试兼容版本号。**

## 系列项目

|  名称   | 描述  |
|  ----  | ----  |
| NiceFish（美人鱼）  | 这是一个系列项目，目标是示范前后端分离的开发模式:前端浏览器、移动端、Electron 环境中的各种开发模式。后端有两个版本：SpringBoot 版本和 SpringCloud 版本，Angular 版本的前端代码基于 Angular 8.0 + PrimeNG 7.1.0。http://git.oschina.net/mumu-osc/NiceFish/ |
| nicefish-ionic  | 这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。http://git.oschina.net/mumu-osc/nicefish-ionic |
| NiceBlogElectron  | 这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目，https://github.com/damoqiongqiu/NiceBlogElectron|
| OpenWMS  | 用来示范管理后台型系统的最佳实践，https://gitee.com/mumu-osc/OpenWMS-Frontend|
| nicefish-springboot  | 用来示范前后端分离模式下，前端代码与后端服务的对接方式，即将完成，代码最近放出。|
| nicefish-springcloug  | 用来示范前后端分离模式下，前端代码与分布式后端服务的对接方式，即将完成，代码最近放出。|

## 线上演示

http://118.25.136.164

**线上版本已与SpringBoot服务端集成好，后端代码近期整理好开源出来，前端代码在 for-spring-boot 分支上。**

## 界面截图

<img src="./src/assets/imgs/1.png">

<img src="./src/assets/imgs/2.png">

<img src="./src/assets/imgs/3.png">

<img src="./src/assets/imgs/4.png">

## 打包分析

以下是用 webpack-bundle-analyzer 分析打包之后的模块构成：

<img src="./src/assets/imgs/bundle-report.png">

看起来CKEditor和ECharts占了很大的体积，需要做一下异步加载。

webpack-bundle-analyzer 使用方法：

- npm i webpack-bundle-analyzer --save-dev
- package.json 的 scripts 配置里面加一行 "bundle-report": "webpack-bundle-analyzer dist/stats.json"
- ng build --prod --stats-json 编译（--stats-json 选项会生成一份stats.json配置文件）
- 执行 npm run bundle-report 查看打包过程

## 学习资源

- 历次演讲中的所有 PPT 已经本项目对应的资料都在这里，您可以随意使用，https://gitee.com/mumu-osc/NiceFish/attach_files 。
- Angular开发者论坛在这里：http://www.ngfans.net/ 。

## 联系我

<img src="./src/assets/imgs/damoqiongqiu-wechat.jpg" width="250"/>

## 开源许可证

MIT