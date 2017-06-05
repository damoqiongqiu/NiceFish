# NiceFish（美人鱼）

谢谢大家，过了1000个星儿了，我可以拿到一个开源奖杯了 :) 

既然求星儿是有效的，那就继续求星儿、求捐助。

NiceFish是一个系列项目，都是Angular这个技术栈。

- 【NiceFish（美人鱼）】：这是一个微型Blog系统，前端基于Angular 4.0.0 + ng-Bootstrap。http://git.oschina.net/mumu-osc/NiceFish/

- 【NiceFish-Admin是系统管理界面，基于Angular 4.0.0】：http://git.oschina.net/mumu-osc/NiceFish-Admin

- 【NiceFish-Admin-ng1是一个基于Angular 1.6.4（最新版）的管理后台模板，刚开始做】https://git.oschina.net/mumu-osc/NiceFish-Admin-ng1.git 。这个项目我需要特别说明一下，根据目前的统计数据，还有我在数十家企业实际看到的情况，国内还有大量的企业在使用Angular 1.x，而其中很多居然没有做任何AMD处理！我的天哪！前端开发发展到了今天这个状态，AMD是标配啊兄弟们。就算你还在用jQuery做项目，AMD也是必须的哦。把所有js全部压在一个大文件里面，然后在index里面一次性加载，不能再这样做了啊！所以我会很快做好这个项目，给你们一个示范，看看大型的业务项目应该如何切分目录、模块，如何做AMD加载。

- 【NiceFish-ionic】：这是一个移动端的demo，基于ionic。http://git.oschina.net/mumu-osc/nicefish-ionic

- 【NiceFish-SpringMybatis是Java版后台】：http://git.oschina.net/mumu-osc/NiceFish-SpringMybatis 

NiceFish可以用来搭建个人Blog、微型SNS站点，或者用于学习Angular（其实我并不在乎你用来干嘛，那关我什么事呢对吧？）。 

一起来玩儿吧！很好玩儿哦！


## 对应的视频教程

此项目对应的视频教程（超清），包括所有PPT，请点这里：https://my.oschina.net/mumu/blog/834254

这是全球第一个完整的“Angular中文视频教程”，由大漠穷秋老师录制。此视频是完全开源免费的，你可以随意使用、转发，但是不能对课程相关的内容进行任何编辑，尤其不能向观众收取任何形式的费用。

你见过哪一个开源项目会如此细致地配上视频教程？

你见过哪个讲师会如此无私地把所有PPT都分享出来？

所以你一定要仔细看啊！

有些人问的那些个问题啊，too simple! somtimes naive!

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

如果之前装过angular-cli需要先卸载：npm uninstall -g angular-cli
如果之前装过@angular/cli需要先卸载：npm uninstall -g @angular/cli
如果你之前已经尝试安装过node模块，请把NiceFish根目录下的node_moduels目录删掉
然后依次执行以下命令：

	npm cache clean
	npm i -g cnpm
	cnpm i -g @angular/cli
	cnpm install
	ng serve

打开你的浏览器，访问http://localhost:4200/

如果你想让加载的包更小，请使用以下方式启动angular-cli内置的轻量级http server

	ng serve --prod --aot

如果你需要把项目发布到其它类型的Server上，例如Tomcat，需要对Server进行一些简单的配置才能支持HTML5下的PushState路由模式，我在这篇文章里面有详细的介绍https://my.oschina.net/mumu/blog/830696。

【注意】如果你发现ng serve起不来，或者起来有报错，请把NiceFish根目录下的node_modules目录删掉，然后重新执行cnpm install，全局的@angular/cli也需要重装。

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

## 推荐项目
ng2整合各种插件的项目-Code Be
https://git.oschina.net/zt_zhong/CodeBe

## 在线交流QQ群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=8db5ed802cbddbf6432d7ba7dc4f2a316be020442491eb41cbfb1a12434e8cc7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 1区:286047042（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=cbfcd79e7e90939b0e2c519f475fac4792985ce2abc5ad45ec5e06ffcfe944dd" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 2区:139357161（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=639229c8b6ad0c3a9a8f381dddf5d7785780b20d8c37eb25c91ac73ea7d37a5f" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 3区:473129930（满）</a>

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=12add102af3f67910bdc0de753dee10ebada08ab485af7e38f4dfa0ee27476f7" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular 4区:483016484（将满）</a>


## 关于我
我是大漠穷秋，我的技术blog在这里：https://my.oschina.net/mumu/blog  ，我的知乎专栏在这里：https://zhuanlan.zhihu.com/damoqiongqiu ，慕课网上关于Angular 1.x的免费视频教程在这里：http://www.imooc.com/learn/156 ，最新版本Angular免费视频教程在这里：https://my.oschina.net/mumu/blog/834254 。

如果您有Angular相关的问题需要讨论，或者单纯想跟我Say Hello，请加上面几个扣扣群。注意，我每天都会收到大量的求助消息，真的有点忙，所以请您优先在扣扣群里面讨论问题。

如果您觉得看视频教程不过瘾，想要找我去现场讲，请联系我的微信号scriptbaby。当然，现场版的演讲会更仔细，内容也比线上的版本更新更丰富多彩。微信号只谈公事，不聊天儿，也不答技术问题。

以下是我最近5年以来讲Angular的部分照片，按时间线排列，供您参考：

![讲课照片](src/assets/imgs/angular-damo/1.png)

![讲课照片](src/assets/imgs/angular-damo/2.png)

![讲课照片](src/assets/imgs/angular-damo/3.jpg)

![讲课照片](src/assets/imgs/angular-damo/3-1.png)

![讲课照片](src/assets/imgs/angular-damo/4.jpg)

![讲课照片](src/assets/imgs/angular-damo/4-1.jpg)

![讲课照片](src/assets/imgs/angular-damo/4-2.jpg)

![讲课照片](src/assets/imgs/angular-damo/4-3.jpg)

![讲课照片](src/assets/imgs/angular-damo/4-4.jpg)

![讲课照片](src/assets/imgs/angular-damo/5.jpg)

![讲课照片](src/assets/imgs/angular-damo/5-1.jpg)

![讲课照片](src/assets/imgs/angular-damo/6.jpg)

![讲课照片](src/assets/imgs/angular-damo/7.jpg)

![讲课照片](src/assets/imgs/angular-damo/8.jpg)

![讲课照片](src/assets/imgs/angular-damo/9.jpg)

![讲课照片](src/assets/imgs/angular-damo/10.jpg)

![讲课照片](src/assets/imgs/angular-damo/11.jpg)

![讲课照片](src/assets/imgs/angular-damo/12.jpg)

![讲课照片](src/assets/imgs/angular-damo/13.jpg)

![讲课照片](src/assets/imgs/angular-damo/14.jpg)

![讲课照片](src/assets/imgs/angular-damo/15.jpg)

![讲课照片](src/assets/imgs/angular-damo/16.jpg)

![讲课照片](src/assets/imgs/angular-damo/17.jpg)

![讲课照片](src/assets/imgs/angular-damo/18.jpg)

![讲课照片](src/assets/imgs/angular-damo/19.jpg)

![讲课照片](src/assets/imgs/angular-damo/20.jpg)

![讲课照片](src/assets/imgs/angular-damo/21.jpg)

![讲课照片](src/assets/imgs/angular-damo/22.jpg)

![讲课照片](src/assets/imgs/angular-damo/23.jpg)

![讲课照片](src/assets/imgs/angular-damo/24.jpg)

![讲课照片](src/assets/imgs/angular-damo/25.jpg)

![讲课照片](src/assets/imgs/angular-damo/26.jpg)

![讲课照片](src/assets/imgs/angular-damo/27.jpg)

## 开源许可证
 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。
