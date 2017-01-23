# NiceFish（美人鱼）

NiceFish（美人鱼）是一个微型Blog系统，前端基于Angular 2 + ng2-Bootstrap ，后端可以是任意技术，所以我没有做后端啊 :)。

NiceFish可以用来搭建个人Blog、微型SNS站点，或者用于学习Angular2（其实我并不在乎你用来干嘛，那关我什么事呢对吧？）。 

## 演示地址

阿里云上的演示地址：http://121.196.220.118:8081/

以下是效果图：

![效果图](src/assets/imgs/1.png)

![效果图](src/assets/imgs/2.png)

![效果图](src/assets/imgs/3.png)

![效果图](src/assets/imgs/4.png)

![效果图](src/assets/imgs/5.png)

## 目录结构

![目录结构](src/assets/imgs/6.png)

## 用法

用git克隆本项目，从命令行进入进入项目根目录，依次执行以下命令：

	npm install -g angular-cli
	npm install
	ng serve

打开你的浏览器，访问http://localhost:4200/

如果你想让加载的包更小，请使用以下方式启动angular-cli内置的轻量级http server

	ng serve --prod --aot

## 更新

打开命令行，进入NiceFish根目录，依次执行以下命令：

	git pull
	npm update
	ng serve

噢对，如果你pull代码之后发现起不来了，请把你项目下的node_modules全部删掉，然后重新npm update。这里确实有点坑，但是我也不知道为什么。

## AOT

开发状态打出来的bundle体积比较大，在发布到生产环境之前需要进行prod和AOT编译，用法如下：

打开命令行，进入NiceFish根目录，执行以下命令：
	
	ng build --prod --aot

angular-cli会在项目根目录下生成一个dist目录，里面就是编译、压缩好的文件了。仔细观察你会发现，这些文件的体积被大幅度压缩，加上gz之后有一些文件只剩下1/4左右的大小。

## 注意（请仔细看）

 - 如果在npm install的过程中有报错，可能是某些包被Qiang掉了，请自己设置翻墙代理之后再运行npm install 。比如，我本地的ShadowSocks代理运行在1080端口上，那么我就让npm安装Node模块的时候从这个代理走，设置方式：npm config set proxy="http://127.0.0.1:1080"  ，然后npm install。注意，尽量不要用cnpm安装，基本上没办法装成功，原因不明。

 - 如果有node-gyp的报错，可以在npm install的后面加上参数 --no-optional 另外，node-gyp在Windows下编译的时候可能需要依赖于Windows的某些API和.NET framework，具体的步骤请自己搜索node-gyp在github上的文档，只能帮你到这里了。

 - 如果有node-sass的报错，尝试一下翻Qiang。

 - 如果你是在Windows下开发，启动cmd的时候要用管理员身份启动。

 - 如果你是在MAC或者Linux下安装，请尝试用sudo执行安装命令，否则某些目录可能权限不够。

 - 如果你想要生成模块之间的依赖关系图，请使用angular2-dependencies-graph，这是一个第三方的node模块，路径在这里https://github.com/manekinekko/angular2-dependencies-graph 。当前的模块依赖关系图我已经生成在src/documentation目录下。

 - 这个项目接受issue或者PR，收到之后我会尽快处理的。

 - 【特别注意】如果你不幸居然安装好了环境并运行起来了，千万不要手贱去升级npm、node或者angular-cli，在目前这些版本下面升级必挂！

## 可是我不想搭环境！

我在很多群里面看到，很多刚刚入行的道友，或者刚刚入手Angular的道友，都说搭建开发环境好麻烦。有些人说搞了一整天都搞不定，于是就放弃了。看到这里，小僧很心痛啊！

于是，我就拿Ubuntu 16.04做了一个VMware镜像，把环境都搭建好了，你们只要把它下载下来，就可以上手玩儿NiceFish了。

VMware镜像百度网盘链接：https://pan.baidu.com/s/1pLlR4Rx

在VMware里面导入虚拟机ova文件之后，启动Ubuntu

虚拟机的用户名/密码是：angular/angular_2017 

进入桌面环境之后启动命令行，进入/home/zhangxiaofei/workspace/NiceFish

运行ng serve命令

打开FireFox访问http://localhost:4200

【请注意】登录之后务必修改密码，否则引起安全漏洞后果自负！

【特别注意】如果你不幸居然安装好了环境并运行起来了，千万不要手贱去升级npm、node或者angular-cli，在目前这些版本下面升级必挂！

## 开源许可证
 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

## 关于我
我是大漠穷秋，目前是Google Angular项目组在中国的开发者PM，负责Angular的推广工作，我会在各种渠道经常发布一些与Angular相关的技术文章，希望能给大家带来一点点帮助，请点这里：https://my.oschina.net/mumu/blog  。

如果你需要帮助，请联系发邮件到xiaofeiz@google.com

【注意】我每天都会收到大量的求助消息，真的有点忙，所以请准确描述您的问题，最好能加上一些截图，非常感谢！