<img src="src/assets/imgs/dist.jpg" alt="nicefish"/>

### NiceFish（美人鱼）

NiceFish 是一个系列教学项目，目标是全面示范 Angular 在浏览器、移动端、Electron 环境中的用法。

* NiceFish：美人鱼，这是一个微型 Blog 系统，前端基于 Angular 4.x + PrimeNG。http://git.oschina.net/mumu-osc/NiceFish/

* NiceFish-Admin：这是系统管理界面，基于 Angular 4.x+PrimeNG，http://git.oschina.net/mumu-osc/NiceFish-Admin

* NiceFish-ionic：这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。http://git.oschina.net/mumu-osc/nicefish-ionic

* NiceBlogElectron：https://github.com/damoqiongqiu/NiceBlogElectron ,这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目。

### 产品代码

OpenWMS 是一个开源产品，复杂度比 NiceFish 高，请不要用此项目进行入门学习。

* OpenWMS：https://gitee.com/mumu-osc/OpenWMS-Frontend ，这是 OpenWMS 项目的前端代码，基于当前最新的 Angular 5.2.0 和 PrimeNG 5.2.4。

## 在线演示

NiceFish: http://47.104.13.149:4200

NiceFish-Admin: http://47.104.13.149:8080

OpenWMS：http://47.104.80.251:4200

NiceFish-ionic：https://damoqiongqiu.github.io/NiceFish-ionic/

## 用法

用 git 克隆本项目，从命令行进入进入项目根目录，依次执行以下命令：

    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve

* 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
* 如果之前装过 angular-cli 需要先卸载：npm uninstall -g angular-cli
* 如果你之前已经尝试安装过 node 模块，请把 NiceFish 根目录下的 node_moduels 目录删掉

然后依次执行以下命令：

    npm cache clean
    npm prune
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve

打开你的浏览器，访问http://localhost:4200/

如果你想让加载的包更小，请使用以下方式启动@angular/cli 内置的轻量级 http server

    ng serve --prod

如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有，你过去抄过来就行。

【注意】如果你发现 ng serve 起不来，或者起来有报错，请把 NiceFish 根目录下的 node_modules 目录删掉，然后重新执行 cnpm install，全局的@angular/cli 也需要删掉重装。

## 如何更新 NiceFish 的代码

打开命令行，进入 NiceFish 根目录，依次执行以下命令：

    git pull
    cnpm update
    ng serve

噢对，如果你 pull 代码之后发现起不来了，请把你项目下的 node_modules 全部删掉，然后重新 cnpm update。这里确实有点坑，但是我也不知道为什么，目测是 npm 包的版本问题。

## TreeShaking

开发状态打出来的 bundle 体积比较大，在发布到生产环境之前需要进行 TreeShaking，用法如下：

打开命令行，进入 NiceFish 根目录，执行以下命令：
ng build --prod

加上 prod 参数之后，@angular/cli 会利用 envionments/envionments.prod.js 里面的配置项来构建项目，同时会自动启用 TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，很形象吧？

@angular/cli 会在项目根目录下生成一个 dist 目录，里面就是编译、压缩好的文件了。仔细观察你会发现，这些文件的体积已经被大幅度压缩，加上 gzip 之后有一些文件只剩下 1/4 左右的大小。

## 在线交流 QQ 群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=8db5ed802cbddbf6432d7ba7dc4f2a316be020442491eb41cbfb1a12434e8cc7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-1 区-丝绸之路（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=cbfcd79e7e90939b0e2c519f475fac4792985ce2abc5ad45ec5e06ffcfe944dd" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-2 区-敦煌（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=639229c8b6ad0c3a9a8f381dddf5d7785780b20d8c37eb25c91ac73ea7d37a5f" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-3 区-玉门关（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=12add102af3f67910bdc0de753dee10ebada08ab485af7e38f4dfa0ee27476f7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-4 区-河西走廊（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=1293a6494fb306ea29d281e320a8f4ef82285fa5300f73118e6ff7a79ce76036"
class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i>
Angular-5 区-楼兰（将满）
</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=fcd880ba919983dc85690642d48cf00ad0affd8d35de5f30542c895e622a8ab8"
class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i>
Angular-6 区-凉州（将满）
</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=5d6b8c5296e4806142b8422ae7abca6f27b9b9b992a4dac80dc1392644e8970a"><i class="fa fa-qq" aria-hidden="true"></i>脚本娃娃-桃花岛（将满）</a>

如果您有 Angular 相关的问题需要讨论，或者单纯想跟我 Say Hello，请加上面几个扣扣群。注意，我每天都会收到大量的求助消息，真的有点忙，所以请您优先在扣扣群里面讨论问题。

## 学习资源和视频教程

大漠演讲中的所有 PPT 已经本项目对应的资料都在这里，您可以随意使用，https://gitee.com/mumu-osc/NiceFish/attach_files 。

如果您需要教程，请自己来这里查看，http://www.ngfans.net/ ，有视频也有文字，有免费版本也有收费版，您自己看着选。

## 开源许可证

MIT

你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。
