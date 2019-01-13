<p align="center">
    <img width="150" src="./src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<div align="left">
NiceFish（美人鱼） 是一个系列项目，目标是全面示范 Angular 在浏览器、移动端、Electron 环境中的用法，同时提供了一个基于 SpringCloud 的服务端。
</div>

## 用法

打开你的命令行终端，依次执行以下命令：

    git clone https://gitee.com/mumu-osc/NiceFish.git
    cd NiceFish
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve

打开你的浏览器，访问http://localhost:4200/

* 各种你懂的原因，中文开发者强烈建议使用 cnpm install
* 如果你想让加载的包更小，请使用：ng serve --prod
* 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
* 如果之前装过 angular-cli 需要先卸载：npm uninstall -g angular-cli
* 如果你之前已经尝试安装过 node 模块，请把 NiceFish 根目录下的 node_moduels 目录删掉重新 cnpm install
* 如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有，你过去抄过来就行。

## 在线演示

NiceFish 在阿里云上的演示地址: http://47.104.13.149:4200

OpenWMS 在阿里云上的演示地址：http://47.104.80.251:4200

OpenWMS 在gitee上的演示地址：https://mumu-osc.gitee.io/openwms-frontend

NiceFish-ionic：https://damoqiongqiu.github.io/NiceFish-ionic/

## 系列项目

* NiceFish：美人鱼，这是一个微型 Blog 系统，前端基于 Angular 7.0 + PrimeNG 7.0.3。http://git.oschina.net/mumu-osc/NiceFish/

* nicefish-ionic：这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。http://git.oschina.net/mumu-osc/nicefish-ionic

* NiceBlogElectron：https://github.com/damoqiongqiu/NiceBlogElectron ,这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目。

* nicefish-spring-cloud: https://gitee.com/mumu-osc/nicefish-spring-cloud ， 这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。

## 打包分析

以下是用 webpack-bundle-analyzer 分析打包之后的模块构成：

<img width="150" src="./src/assets/imgs/bundle-report.png">

看起来CKEditor和ECharts占了很大的体积，需要做一下异步加载。

webpack-bundle-analyzer 使用方法：

    cnpm i webpack-bundle-analyzer --save-dev
    package.json 的 scripts 配置里面加一行 "bundle-report": "webpack-bundle-analyzer dist/stats.json"
    ng build --prod --stats-json 编译（--stats-json 选项会生成一份stats.json配置文件）
    执行 npm run bundle-report 查看打包构成

## 学习资源

历次演讲中的所有 PPT 已经本项目对应的资料都在这里，您可以随意使用，https://gitee.com/mumu-osc/NiceFish/attach_files 。

如果您需要那种非常详细的教程，用微信扫这个二维码：

<img src="/src/assets/imgs/qr-code.png"/>

## 关联 QQ 群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=8db5ed802cbddbf6432d7ba7dc4f2a316be020442491eb41cbfb1a12434e8cc7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-1区</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=cbfcd79e7e90939b0e2c519f475fac4792985ce2abc5ad45ec5e06ffcfe944dd" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-2区</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=639229c8b6ad0c3a9a8f381dddf5d7785780b20d8c37eb25c91ac73ea7d37a5f" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-3区</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=12add102af3f67910bdc0de753dee10ebada08ab485af7e38f4dfa0ee27476f7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-4区</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=1293a6494fb306ea29d281e320a8f4ef82285fa5300f73118e6ff7a79ce76036" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i>Angular-5区</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=fcd880ba919983dc85690642d48cf00ad0affd8d35de5f30542c895e622a8ab8" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i>Angular-6区
</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=5d6b8c5296e4806142b8422ae7abca6f27b9b9b992a4dac80dc1392644e8970a"><i class="fa fa-qq" aria-hidden="true"></i>脚本娃娃-桃花岛</a>

## 开源许可证

MIT
