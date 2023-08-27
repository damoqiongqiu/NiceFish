[简体中文](README.md) | English

<p align="center">
    <img width="150" src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<p align="left">
NiceFish is a series of projects aimed at demonstrating the development and deployment model of front-end and back-end separation. There are three front-end versions: browser environment, mobile environment, and Electron environment; and two back-end versions: SpringBoot version and SpringCloud version.
</p>

<p>
🚀🚀🚀 Don't hesitate to give your ⭐️ Star ⭐️, the more stars, the more motivation. 🚀🚀🚀
</p>

## 1. Main Dependencies

| Name              | Version | Description                                       |
| ----------------- | ------- | ------------------------------------------------- |
| Angular           | 16.2.0  | Angular Core Library.                             |
| PrimeNG           | 16.2.0  | Open-source component library.                    |
| Bootstrap         | 5.2.3   | Responsive layout framework.                      |
| ngx-bootstrap     | 11.0.2  | Open-source component library based on Bootstrap. |
| echarts           | 5.4.2   | Graphics library from Baidu.                      |
| ngx-echarts       | 15.0.3  | Angular wrapper for echarts library.              |
| ckeditor5-angular | 5.2.0   | Rich text editor.                                 |
| font-awesome      | 4.7.0   | Open-source icon library.                         |

**Note: To prevent NodeJS module compatibility issues, this project locks all Node module versions in package.json. If necessary, you can test compatible version numbers yourself (not recommended, as it consumes a lot of time).**

## 2. Project Setup

Open the terminal and execute the following commands:

    git clone https://gitee.com/mumu-osc/NiceFish.git
    cd NiceFish
    npm i -g @angular/cli
    npm i
    ng serve

Open your browser and visit http://localhost:4200/

**🚀🚀🚀 Chinese developers:** Due to network issues, it is recommended to use nrm to manage npm registry.

    npm i -g nrm
    nrm use taobao

This way, npm will use the registry provided by Taobao for installing node modules.

## 3. Switching Between Mock and Backend Versions

To facilitate front-end and back-end separation development, this project provides two startup modes:

- Startup mode with mock data: ng serve --configuration development-mock (or simply ng serve, which starts in mock mode by default). All mock data is located in the src/mock-data directory, in JSON format, consistent with the data format returned by the backend API.
- Startup mode accessing real server APIs: ng serve --configuration development-backend (to start in this mode, you need a real server. Change the server address in proxy.config.json to your own API address. NiceFish provides a backend implementation based on SpringBoot, see: https://gitee.com/mumu-osc/nicefish-spring-boot.)

Configuration related to the startup environment is in environment.\* and angular.json files.

## 4. Unit Testing

Execute the following command to run unit tests:

    ng test

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/unit-test.png">

Unit tests are run using ChromeHeadless, with test cases executed concurrently based on the number of CPU cores. The configuration in karmar.conf.js was inspired by VMware's Clarity project, see https://github.com/vmware-clarity/ng-clarity.

Code coverage report:

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/codecoverage.png">

For detailed usage of unit testing and Jasmine syntax, refer to: https://angular.io/guide/testing

## 5. End-to-End Testing

Starting from Angular v12, the official Protractor tool for end-to-end testing has been deprecated. This project has switched to using the recommended Cypress tool for end-to-end testing. Execute the following command to start end-to-end testing:

    ng e2e

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/cypress.png">

For technical details about Cypress, refer to: https://testing-angular.com/end-to-end-testing/#end-to-end-testing

## 6. Building

There are two build modes corresponding to the development state:

1. Building for development with mock data (no access to the server): ng build --configuration development-mock
2. Building for development with server API (accessing real server APIs): ng build --configuration development-backend

If you need the &lt;base href="/NiceFish/"/&gt; tag in the index.html of the build output, add the parameter --base-href /NiceFish/ to the above commands.

Note that NiceFish is the project name; if you changed the project name, replace NiceFish with your own project name.

## 7. Direct Deployment to Nginx

1. Build the final output according to the previous step's instructions.
2. Install Nginx and copy all content from dist/browser directory to the html directory of Nginx.
3. Refer to the nginx.conf configuration file in the root directory of this project and modify the configuration (the default configuration in this project is for Docker environments and cannot be used on Windows platforms).
4. Restart Nginx.

## 8. Deploying to Docker Environment

Execute the following commands one by one (replace my Docker platform ID with your own):

1. Build the image: sudo docker build -t damoqiongqiu/nice-fish .
2. View the image list: sudo docker images
3. Start the container: sudo docker run -d -it -p 8080:80/tcp --name nice-fish damoqiongqiu/nice-fish:latest
4. View running containers: sudo docker ps -a
5. View container logs: docker logs --details CONTAINER_ID
6. Enter the container: sudo docker exec -it CONTAINER_ID sh

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/8.png">

## 9. Bundle Analysis

Below is the module composition analysis using webpack-bundle-analyzer:

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/bundle-report.png">

It appears that CKEditor and ECharts consume a significant amount of space, indicating a need for asynchronous loading.

To use webpack-bundle-analyzer, follow these steps:

1. npm i webpack-bundle-analyzer --save-dev
2. Add "bundle-report": "webpack-bundle-analyzer dist/browser/stats.json" to the scripts section of package.json
3. Compile using ng build --stats-json (the --stats-json option generates a stats.json configuration file)
4. Run npm run bundle-report to view the bundling process

## 10. Series Projects

<h4>Client-side Projects of NiceFish:</h4>

| Name                                                             | Description                                                                                                                                                                                                                                                                    | Stars                                                                                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [NiceFish](http://git.oschina.net/mumu-osc/NiceFish/)            | This is the front-end interface of the Angular version, based on the latest Angular version and using the PrimeNG component library.                                                                                                                                           | <a href='https://gitee.com/mumu-osc/NiceFish/stargazers'><img src='https://gitee.com/mumu-osc/NiceFish/badge/star.svg?theme=gvp' alt='star'></img></a>                  |
| [NiceFish-React](https://gitee.com/mumu-osc/NiceFish-React)      | This is the front-end interface of the React version, based on React 18.0.0, using PrimeReact and a customized version of Bootstrap for development. Pure JSX, without TypeScript.                                                                                             | <a href='https://gitee.com/mumu-osc/NiceFish-React/stargazers'><img src='https://gitee.com/mumu-osc/NiceFish-React/badge/star.svg?theme=dark' alt='star'></img></a>     |
| [nicefish-ionic](http://git.oschina.net/mumu-osc/nicefish-ionic) | This is a mobile demo based on ionic, and the project supports PWA.                                                                                                                                                                                                            | <a href='https://gitee.com/mumu-osc/nicefish-ionic/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-ionic/badge/star.svg?theme=dark' alt='star'></img></a>     |
| [NiceBlogElectron](https://gitee.com/mumu-osc/NiceBlogElectron)  | This is a desktop project based on Electron, packaging NiceFish as a desktop application. It was provided by a front-end colleague from ZTE Corporation, and I forked it. Version numbers of certain node modules need to be updated frequently, making it unsuitable for use. | <a href='https://gitee.com/mumu-osc/NiceBlogElectron/stargazers'><img src='https://gitee.com/mumu-osc/NiceBlogElectron/badge/star.svg?theme=dark' alt='star'></img></a> |

<h4>Server-side Projects of NiceFish:</h4>

| Name                                                                      | Description                                                                                                                                                                                                            | Stars                                                                                                                                                                             |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [nicefish-spring-boot](https://gitee.com/mumu-osc/nicefish-spring-boot)   | This project demonstrates the interaction between front-end and back-end in a front-end and back-end separation mode. It has a basic version completed. You can further develop it to suit your own business scenario. | <a href='https://gitee.com/mumu-osc/nicefish-spring-boot/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-spring-boot/badge/star.svg?theme=dark' alt='star'></img></a>   |
| [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud) | This project demonstrates the interaction between front-end and distributed back-end services in a front-end and back-end separation mode.                                                                             | <a href='https://gitee.com/mumu-osc/nicefish-spring-cloud/stargazers'><img src='https://gitee.com/mumu-osc/nicefish-spring-cloud/badge/star.svg?theme=dark' alt='star'></img></a> |

## 11. Common Pitfalls Regarding NodeJS Environment

- Chinese developers: Using cnpm to install dependencies may lead to inconsistency in some packages, causing the application to not start. This issue needs to be resolved by the cnpm team. (cnpm is not just an accelerated node, it performs various processes, including precompiled caching of some C++ Node modules, which may result in inconsistencies with the official source.)
- If you previously installed @angular/cli, uninstall it first: npm uninstall -g @angular/cli
- If you previously installed an older version of angular-cli, uninstall it first: npm uninstall -g angular-cli
- If you have previously attempted to install node modules using npm install, manually delete the node_moduels directory in the NiceFish root directory and then npm install again.
- Deleting node_modules from the command line is faster. On Windows platforms: rmdir /s/q node_modules, on \*nix platforms: sudo rm -rf node_modules
- If you encounter any other seemingly mysterious issues, manually delete the node_modules directory, switch to the npm official source, and reinstall all node modules.
- If you need to deploy the project to other types of servers, such as Tomcat, you need to make some simple configurations to support the PushState routing mode in HTML5. Refer to the following link to find the corresponding configuration methods for various WEB containers: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions. In the section "How to: Configure your server to work with html5Mode," configurations for common WEB servers are provided (including IIS, Apache, nginx, NodeJS, Tomcat, etc.). (Note that this configuration is not specific to Angular; all major SPA front-end frameworks require this configuration.)

## 12. Screenshots

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/1.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/2.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/3.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/4.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/5.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/6.png">

<img src="https://gitee.com/mumu-osc/NiceFish/raw/master/src/assets/imgs/7.png">

## 13. Learning Resources

- If you need a micro-frontend solution based on Angular, refer to the code and configuration methods of this project: https://gitee.com/mumu-osc/module-federation-plugin-example
- PPT and materials related to the project: https://gitee.com/mumu-osc/NiceFish/attach_files.
- There are 93 articles here that provide a detailed analysis of the project's structure and functionality: https://gitbook.cn/gitchat/column/5bebdaf22c33167c317cc285

## 14. License

MIT

(Supplementary statement: You are free to use this project, but I am not responsible for any losses resulting from your use of this project.)
