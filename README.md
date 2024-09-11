[English](README.en.md) | 简体中文

<p align="center">
    <img width="150" src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<p align="left">
NiceFish（美人鱼） 是一个系列项目，实现了前后端分离的开发+部署模式。

前端有 3 个版本：

- 浏览器环境
- 移动端环境
- Electron 环境

服务端有 2 个版本：

- SpringBoot 版本（已实现基于 Apache Shiro 的 RBAC 权限控制）
- SpringCloud 版本

</p>

<p>
🚀🚀🚀请不要吝惜你的⭐️ Star ⭐️，星星越多，动力越足。🚀🚀🚀
</p>

## 1.主要依赖

| 名称              | 版本   | 描述                                 |
| ----------------- | ------ | ------------------------------------ |
| Angular           | 16.2.0 | Angular 核心库。                     |
| PrimeNG           | 16.2.0 | 开源组件库。                         |
| Bootstrap         | 5.2.3  | 响应式布局。                         |
| ngx-bootstrap     | 11.0.2 | 基于 Bootstrap 的开源组件库。        |
| echarts           | 5.4.2  | 来自百度的图形库。                   |
| ngx-echarts       | 15.0.3 | 基于 echarts 封装的 Angular 组件库。 |
| ckeditor5-angular | 5.2.0  | 富文本编辑器。                       |
| font-awesome      | 4.7.0  | 开源图标库。                         |

**注意：为了防止出现 NodeJS 模块兼容性问题，本项目在 package.json 中锁定了所有 Node 模块版本。如有需要，您可以自己测试兼容版本号（不建议这样做，因为会消耗掉大量的时间）。**

## 2.启动项目

打开终端，依次执行以下命令：

    git clone https://gitee.com/mumu-osc/NiceFish.git
    cd NiceFish
    npm i -g @angular/cli
    npm i
    ng serve

打开浏览器，访问 http://localhost:4200/

**🚀🚀🚀 中文开发者**：网络原因，推荐安装 nrm 来管理 npm 的 registry。

    npm i -g nrm
    nrm use taobao

这时候用 npm 安装 node 模块就会使用 taobao 提供的 registry 了。

## 3.在 Mock 版本和带服务端版本之间切换

为了方便前后端分离开发，本项目提供 2 种启动模式：

- 带 mock 数据的启动模式：ng serve --configuration development-mock （或者直接 ng serve 启动，默认是 mock 模式），所有 mock 数据都在 src/mock-data 目录中，json 格式，与服务端接口返回的数据格式保持一致。
- 访问真实的服务端接口的启动模式： ng serve --configuration development-backend （使用此模式启动需要有真实的服务端，把 proxy.config.json 中的服务端地址改成你自己的接口地址，NiceFish 提供了一个基于 SpringBoot 的服务端接口实现版本，参见： https://gitee.com/mumu-osc/nicefish-spring-boot 。）

与启动环境有关的配置项在 environment.\* 和 angular.json 中。

## 4.单元测试

执行以下命令进行单元测试：

    ng test

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/unit-test.png">

默认使用 ChromeHeadless 执行单元测试，按照 CPU 核心数量并发执行测试用例，karmar.conf.js 配置方式参考了 VWware 的 Clarity 项目，参见 https://github.com/vmware-clarity/ng-clarity 。

代码覆盖率报告：

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/codecoverage.png">

关于单元测试的详细使用方法，以及 Jasmine 的语法，请参考： https://angular.io/guide/testing

## 5.集成测试

Angular 从 v12 开始，官方废弃了原来的集成测试工具 Protractor （量角器），本项目已经切换到官方推荐的 Cypress 集成测试工具，执行以下命令启动集成测试：

    ng e2e

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/cypress.png">

关于 Cypress 的技术细节，请参考： https://testing-angular.com/end-to-end-testing/#end-to-end-testing

## 6.构建

与开发状态对应，构建模式有 2 种：

1. 构建开发环境（带 mock 数据，不访问服务端）：ng build --configuration development-mock
2. 构建带有服务端接口的开发环境（访问真实的服务端接口）：ng build --configuration development-backend

如果需要在构建产物的 index.html 中出现 &lt;base href="/NiceFish/"/&gt;，请在以上命令后面加上参数： --base-href /NiceFish/

注意，这里的 NiceFish 是项目名，如果你把项目名改成了其它的，请把 NiceFish 改成你自己的项目名。

## 7.直接部署到 nginx

1. 根据上一步的描述构建出最终产物。
1. 安装好 nginx，把 dist/browser 目录下的所有内容拷贝到 nginx 的 html 目录下。
1. 参考本项目根目录下的 nginx.conf 配置文件，修改配置（此项目中的默认配置用于 Docker 环境，在 Windows 平台下无法使用）。
1. 重启 nginx。

## 8.部署到 Docker 环境

请依次执行以下命令（请不要使用我的 ID ，改成你自己的 Docker 平台 ID ）：

1. 构建镜像：sudo docker build -t damoqiongqiu/nice-fish .
2. 查看镜像列表：sudo docker images
3. 启动容器：sudo docker run -d -it -p 8080:80/tcp --name nice-fish damoqiongqiu/nice-fish:latest
4. 查看运行中的容器：sudo docker ps -a
5. 查看容器日志：docker logs --details CONTAINER_ID
6. 进入容器：sudo docker exec -it CONTAINER_ID sh

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/8.png">

## 9.打包分析

以下是用 webpack-bundle-analyzer 分析打包之后的模块构成：

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/bundle-report.png">

看起来 CKEditor 和 ECharts 占了很大的体积，需要做一下异步加载。

webpack-bundle-analyzer 使用方法，请依次执行以下操作：

1. npm i webpack-bundle-analyzer --save-dev
2. package.json 的 scripts 配置里面加一行 "bundle-report": "webpack-bundle-analyzer dist/browser/stats.json"
3. ng build --stats-json 编译（--stats-json 选项会生成一份 stats.json 配置文件）
4. 执行 npm run bundle-report 查看打包过程

## 10.系列项目

<h4>NiceFish 的客户端项目：</h4>

| 名称                                                             | 描述                                                                                                                                                                                                                                            | Stars                                                                                                                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [NiceFish（美人鱼）](http://git.oschina.net/mumu-osc/NiceFish/)  | 这是 Angular 版本的前端界面，基于最新的 Angular 版本，使用 PrimeNG 组件库。                                                                                                                                                                     | <a href='https://gitee.com/mumu-osc/NiceFish/stargazers'><img src='https://gitee.com/mumu-osc/NiceFish/badge/star.svg?theme=gvp' alt='star'></img></a>                  |
| [NiceFish-React](https://gitee.com/mumu-osc/NiceFish-React)      | 这是 React 版本的前端界面，基于 React 18.0.0 ，使用 PrimeReact， 定制版 Bootstrap 开发。纯 JSX ，没有使用 TypeScript 。                                                                                                                         | <a href='https://gitee.com/mumu-osc/NiceFish-React/stargazers'><img src='https://gitee.com/mumu-osc/NiceFish-React/badge/star.svg?theme=dark' alt='star'></img></a>     |
| [nicefish-ionic](http://git.oschina.net/mumu-osc/nicefish-ionic) | 这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。                                                                                                                                                                                           | <a href='https://gitee.com/mumu-osc/nicefish-ionic/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-ionic/badge/star.svg?theme=dark' alt='star'></img></a>     |
| [NiceBlogElectron](https://gitee.com/mumu-osc/NiceBlogElectron)  | 这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目。 | <a href='https://gitee.com/mumu-osc/NiceBlogElectron/stargazers'><img src='https://gitee.com/mumu-osc/NiceBlogElectron/badge/star.svg?theme=dark' alt='star'></img></a> |

<h4>NiceFish 的服务端项目：</h4>

| 名称                                                                      | 描述                                                                                                                             | Stars                                                                                                                                                                             |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [nicefish-spring-boot](https://gitee.com/mumu-osc/nicefish-spring-boot)   | 用来示范前后端分离模式下，前端代码与后端服务的对接方式，已经完成了基线版本。以此为基础，你可以继续开发出适合自己业务场景的代码。 | <a href='https://gitee.com/mumu-osc/nicefish-spring-boot/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-spring-boot/badge/star.svg?theme=dark' alt='star'></img></a>   |
| [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud) | 用来示范前后端分离模式下，前端代码与分布式后端服务的对接方式。                                                                   | <a href='https://gitee.com/mumu-osc/nicefish-spring-cloud/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-spring-cloud/badge/star.svg?theme=dark' alt='star'></img></a> |

## 11.关于 NodeJS 环境的常见坑点

- 中文开发者：如果你使用 cnpm 来安装依赖，可能会导致某些包不一致，导致应用起不来，目前原因不明，需要 cnpm 官方来解决。（cnpm 不是单纯的加速节点，它做了很多自己的处理，包括对一些 C++ 编写的 Node 模块做了预编译缓存，因此用它安装的包可能和官方源不一致。这不是 Angular 框架的问题，所有前端框架都存在这个问题。）
- 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
- 如果之前装过老版本的 angular-cli 需要先卸载：npm uninstall -g angular-cli
- 如果你之前已经尝试用 npm install 安装过 node 模块，请手动把 NiceFish 根目录下的 node_moduels 目录删掉重新 npm install
- 命令行删除 node_modules 速度更快，Windows 平台使用： rmdir /s/q node_modules ，\*nix 平台使用：sudo rm -rf node_modules
- 如果你遇到其它任何看起来比较玄幻的问题，请手动删掉 node_modules 目录，然后切换到 npm 官方源，重新安装所有 node 模块
- 如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
  How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有。（请注意，这个配置不是 Angular 所特有的，当前主流的 SPA 型前端框架都需要做这个配置。）

## 12.界面截图

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/1.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/2.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/3.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/4.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/5.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/6.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/7.png">

## 13.学习资源

- 如果你需要基于 Angular 的微前端解决方案，请参考这个项目的代码和配置方式：https://gitee.com/mumu-osc/module-federation-plugin-example
- 项目相关的 PPT 和资料：https://gitee.com/mumu-osc/NiceFish/attach_files 。
- 这里有 93 篇文章，详细解析了项目结构和功能：https://gitbook.cn/gitchat/column/5bebdaf22c33167c317cc285

## 14.License

MIT

（补充声明：您可以随意使用此项目，但是本人不对您使用此项目造成的任何损失承担责任。）
