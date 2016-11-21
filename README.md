# ng2-bootstrap-demo
此项目用来示范Angular2结合Bootstrap的用法。

## 用法

	npm install
	npm install -g angular-cli
	ng serve

打开你的浏览器，输入http://localhost:4200/

注意：如果在npm install的过程中有报错，可能是某些包被墙掉(f**k GFW)了，请自己设置翻墙代理之后再运行npm install，设置方式示例：npm config set proxy=http://127.0.0.1:1080

如果有node-gyp的报错，可以在npm install的后面加上参数--no-optional

如果有node-sass的报错，尝试一下翻墙，再次f**k GFW

【特别注意】

如果你是在Windows下安装，启动cmd的时候要用管理员身份启动。

如果你是在MAC或者Linx下安装，请尝试用sudo执行安装命令，否则某些目录可能权限不够。


如果你想要生成模块之间的依赖关系图，请使用angular2-dependencies-graph，这是一个第三方的node模块，路径在这里https://github.com/manekinekko/angular2-dependencies-graph

当前的模块依赖关系图我已经生成在src/documentation目录下。

## ng2-bootstrap官方的仓库

https://github.com/valor-software/ng2-bootstrap

API文档：http://valor-software.com/ng2-bootstrap/#/

## 开源许可证
 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

## 关于我

https://my.oschina.net/mumu/blog


# ng2-bootstrap-demo
This project shows how to use Angular2 with Bootstrap.

## Usage

	npm install
	npm install -g angular-cli
	ng serve

Navigate your browser to http://localhost:4200/

Note:If there are some errors when you use npm install,perhaps some npm modules are blocked by GFW(f**k GFW!),please set the npm proxy for yourself,example:npm config set proxy=http://127.0.0.1:1080

If there are some errors caused by node-gyp,try adding --no-optional after npm install.

If there are some errors caused by node-sass, try VPN through GFW, f**k GFW again.

[Note]

If you are using Windows, please run cmd as an administrator.

If you are using MAC or Linux, try adding "sudo" before each command above, otherwise some directories may not have enough permission.

You can use angular2-dependencies-graph to generate dependencies of modules in this project,angular2-dependencies-graph is a third-party node module,its repo URL is here:https://github.com/manekinekko/angular2-dependencies-graph

Dependencies of current moduels is generated in src/documentation.

## Official Repo of ng2-bootstrap
https://github.com/valor-software/ng2-bootstrap

API documents:http://valor-software.com/ng2-bootstrap/#/

## License
 MIT

 You can use this repo whatever you want,no need to contact me first,I might be too busy to answer you.

## About Me

https://my.oschina.net/mumu/blog
