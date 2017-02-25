# NiceFish（美人鱼）

NiceFish（美人鱼）是一个微型Blog系统，前端基于Angular 2 + ng2-Bootstrap ，后端可以是任意技术，所以我没有做后端啊 :)。

噢对，我很想要一个SpringMVC+MyBatis的服务端程序，如果你刚好会这个，请联系我。

NiceFish可以用来搭建个人Blog、微型SNS站点，或者用于学习Angular2（其实我并不在乎你用来干嘛，那关我什么事呢对吧？）。 

## 视频教程

此项目对应的视频教程（超清）请点这里：https://my.oschina.net/mumu/blog/834254

这是全球第一个完整的Angular2.0中文视频教程，由大漠穷秋老师录制。此视频是完全开源免费的，你可以随意使用、转发，但是不能对课程相关的内容进行任何编辑，尤其不能向观众收取任何形式的费用。

![视频教程截图](src/assets/imgs/10.png)

## 演示地址

阿里云上的演示地址：http://121.196.220.118:8081/

以下是效果图：

![效果图](src/assets/imgs/1.png)

![效果图](src/assets/imgs/2.png)

![效果图](src/assets/imgs/3.png)

![效果图](src/assets/imgs/4.png)

![效果图](src/assets/imgs/5.png)

## 目录结构

![目录结构1](src/assets/imgs/6.png)
![目录结构2](src/assets/imgs/9.png)

## 用法

用git克隆本项目，从命令行进入进入项目根目录，依次执行以下命令：

	npm i -g cnpm
	cnpm i -g @angular/cli
	cnpm install
	ng serve

打开你的浏览器，访问http://localhost:4200/

如果你想让加载的包更小，请使用以下方式启动angular-cli内置的轻量级http server

	ng serve --prod --aot

如果你需要把项目发布到其它类型的Server上，例如Tomcat，需要对Server进行一些简单的配置才能支持HTML5下的PushState路由模式，我在这篇文章里面有详细的介绍https://my.oschina.net/mumu/blog/830696。

## 更新

打开命令行，进入NiceFish根目录，依次执行以下命令：

	git pull
	cnpm update
	ng serve

噢对，如果你pull代码之后发现起不来了，请把你项目下的node_modules全部删掉，然后重新npm update。这里确实有点坑，但是我也不知道为什么。

## AOT&TreeShaking

开发状态打出来的bundle体积比较大，在发布到生产环境之前需要进行prod和AOT，用法如下：

打开命令行，进入NiceFish根目录，执行以下命令：
	
	ng build --prod --aot

加上--prod参数之后，angular-cli会自动启用TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，很形象吧？加上--aot参数是让angular-cli启动预编译特性。

angular-cli会在项目根目录下生成一个dist目录，里面就是编译、压缩好的文件了。仔细观察你会发现，这些文件的体积已经被大幅度压缩，加上gzip之后有一些文件只剩下1/4左右的大小。

![效果图](src/assets/imgs/7.png)

![效果图](src/assets/imgs/8.png)

关于Tomcat如何启动gzip，我专门写了一篇文章来介绍配置，请点这里：https://my.oschina.net/mumu/blog/830742

【请注意】最新版本的angular-cli已经内置了对AOT和TreeShaking的支持，只要像上面这样在build的时候加上--prod和--aot参数就可以了，不需要再做任何其它任何配置工作，官方网站上的那一篇指南有点过时了。

## 注意（请仔细看）

如果你用原生的npm进行安装，可能需要采用科学的上网方式才能安装某些包！

所以强烈推荐采用cnpm来安装！

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

## 推荐项目
ng2整合各种插件的项目-Code Be
http://git.oschina.net/zt_zhong/ng2-demo

## 开源许可证
 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

## 关于我
我是大漠穷秋，目前是Google Angular项目组在中国的开发者PM，负责Angular的推广工作，我会在各种渠道经常发布一些与Angular相关的技术文章，希望能给大家带来一点点帮助，请点这里：https://my.oschina.net/mumu/blog  。

如果你需要帮助，请联系发邮件到xiaofeiz@google.com

【注意】我每天都会收到大量的求助消息，真的有点忙，所以请准确描述您的问题，最好能加上一些截图，非常感谢！


## 在线交流

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=8db5ed802cbddbf6432d7ba7dc4f2a316be020442491eb41cbfb1a12434e8cc7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 1区:286047042（满）</a>
<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=cbfcd79e7e90939b0e2c519f475fac4792985ce2abc5ad45ec5e06ffcfe944dd" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 2区:139357161（将满）</a>
<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=639229c8b6ad0c3a9a8f381dddf5d7785780b20d8c37eb25c91ac73ea7d37a5f" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 3区:473129930（满）</a>
<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=12add102af3f67910bdc0de753dee10ebada08ab485af7e38f4dfa0ee27476f7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 4区:483016484（空）</a>
