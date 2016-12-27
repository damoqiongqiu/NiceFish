# NiceFish（美人鱼）

NiceFish（美人鱼）是一个微型Blog系统，前端基于Angular 2，后端是基于Node的http服务端，数据存储用的MongoDB。 

可以用来搭建团队Blog，微信SNS站点，个人站点，或者用于学习Angular2（其实我并不在乎你用来干嘛，那关我什么事呢对吧？）。 

NiceFish做完之后将会用来升级Angular中文社区，现在的社区还是严清的jsgen，然后严大神说他太忙不再升级jsgen了。所以没办法啦，我只能自己上了。2016年12月北京和上海的Google Developer Day 活动期间已经和核心团队PM商量好，做完之后我自己升级就可以了。所以呢，如果还有人愿意来参与这件事，请加我微信联系，我的号是scriptbaby。

【注意】上面都是吹牛的，这个小东西还没有整体做完，不过我会尽快的，请给我加个星儿，谢谢。
后端的Node+Express+MongoDB已经搭好了，已经做好了一个雏形。后台RESTful接口做成了一个独立的项目，链接在这里：http://git.oschina.net/mumu-osc/NiceFish-BackEnd

## 演示地址

我在阿里云上面放了一个演示地址：http://121.196.220.118:8081/

不过看起来还有点儿问题啊，首页module有点儿大，应该是某个模块切分得不合理。另外写作用的编辑器有个路径报错，容我再调试调试，你们本地应该跑没有这个问题。

## 用法

用git克隆本项目，进入项目目录后依次执行以下命令：

	npm install
	npm install -g angular-cli
	ng serve

打开你的浏览器，访问http://localhost:4200/

## 注意（请仔细看）

 - 如果在npm install的过程中有报错，可能是某些包被Qiang掉了，请自己设置翻墙代理之后再运行npm install，设置方式示例：npm config set proxy=http://127.0.0.1:1080  ，或者用cnpm进行安装。

 - 如果有node-gyp的报错，可以在npm install的后面加上参数 --no-optional  。

 - 如果有node-sass的报错，尝试一下翻Qiang。

 - 如果你是在Windows下开发，启动cmd的时候要用管理员身份启动。

 - 如果你是在MAC或者Linux下安装，请尝试用sudo执行安装命令，否则某些目录可能权限不够。

 - 如果你想要生成模块之间的依赖关系图，请使用angular2-dependencies-graph，这是一个第三方的node模块，路径在这里https://github.com/manekinekko/angular2-dependencies-graph 。当前的模块依赖关系图我已经生成在src/documentation目录下。

 - 这个项目接受issue或者PR，收到之后我会尽快处理的。

## 开源许可证
 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

## 关于我
我是大漠穷秋，目前是Google Angular项目组在中国的开发者PM，负责Angular的推广工作，我会在各种渠道经常发布一些与Angular相关的技术文章，希望能给大家带来一点点帮助，请点这里：https://my.oschina.net/mumu/blog  。