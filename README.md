<p align="center">
    <img width="150" src="./src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<div align="left">
NiceFish（美人鱼） 是一个系列项目，目标是示范前后端分离的开发模式，前端浏览器、移动端、Electron 环境中的各种开发模式，后端有两个版本：SpringBoot 版本和 SpringCloud 版本。
</div>

## 用法

打开终端，依次执行以下命令：

    git clone https://gitee.com/mumu-osc/NiceFish.git
    cd NiceFish
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm i
    ng serve

打开浏览器，访问http://localhost:4200/

* 各种你懂的原因，中文开发者强烈建议使用 cnpm （淘宝发布的一款npm包装器，方便中文开发者避免一些神秘的问题）
* 如果你想让加载的包更小，请使用参数构建：ng serve --prod
* 构建最终结果：ng build --prod
* 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
* 如果之前装过老版本的 angular-cli 需要先卸载：npm uninstall -g angular-cli
* 如果你之前已经尝试用npm install安装过 node 模块，请把 NiceFish 根目录下的 node_moduels 目录删掉重新 cnpm install
* 命令行删除 node_modules 速度更快，Windows 平台使用： rmdir /s/q node_modules ，*nix平台使用：sudo rm -rf node_modules
* 如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有，你过去抄过来就行。

## 在线演示

- NiceFish 在阿里云上的演示地址: http://47.104.13.149:4200
- NiceFish-React 在gitee上的演示地址：https://mumu-osc.gitee.io/nicefish-react
- OpenWMS 在阿里云上的演示地址：http://47.104.80.251:4200
- OpenWMS 在gitee上的演示地址：https://mumu-osc.gitee.io/openwms-frontend
- NiceFish-ionic：https://damoqiongqiu.github.io/NiceFish-ionic/

## 主要模块选型

- Angular 7.x
- PrimeNG 7.x
- Bootstrap 3.3.7
- Echarts 3.4.0
- ckeditor5-angular

## 系列项目

* NiceFish：美人鱼，这是一个微型 Blog 系统，前端基于 Angular 7.0 + PrimeNG 7.1.0。http://git.oschina.net/mumu-osc/NiceFish/
* NiceFish-React：这是React版的实现，界面外观完全相同。采用React Hooks 16.8.3 版本，使用TypeScript、Ant Design组件库以及Bootstrap v4.2.1 开发。
* nicefish-ionic：这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。http://git.oschina.net/mumu-osc/nicefish-ionic
* NiceBlogElectron：https://github.com/damoqiongqiu/NiceBlogElectron ,这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目。
* nicefish-spring-cloud: https://gitee.com/mumu-osc/nicefish-spring-cloud ， 这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。

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

- cnpm i webpack-bundle-analyzer --save-dev
- package.json 的 scripts 配置里面加一行 "bundle-report": "webpack-bundle-analyzer dist/stats.json"
- ng build --prod --stats-json 编译（--stats-json 选项会生成一份stats.json配置文件）
- 执行 npm run bundle-report 查看打包过程

## 学习资源

历次演讲中的所有 PPT 已经本项目对应的资料都在这里，您可以随意使用，https://gitee.com/mumu-osc/NiceFish/attach_files 。

“Angular开发者”论坛在这里：http://www.ngfans.net/ 。

免费视频教程在这里【有点老但是还能用】：https://www.youtube.com/channel/UC6cY3GTGIk4-ahaIRj7Bk-Q?view_as=subscriber

如果您需要那种详尽的图文教程，用微信扫二维码：

<img src="/src/assets/imgs/qr-code.png"/>

## 线上交流

<img src="/src/assets/imgs/qq-1.jpg" width="250"/>

<img src="/src/assets/imgs/wx-1.jpg" width="250"/>

## 开源许可证

MIT