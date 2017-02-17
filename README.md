# 前端修炼手册:grinning::fire:

标签： vue cmd webpack
---
目前的技术栈为：`vscode` `vue` `webpack` `cmder` `github`
本文将简要介绍各类工具软件的环境配置和常见的命令。
###vscode :stuck_out_tongue:
Visual Studio Code是一款代码编辑器，像许多其他代码编辑器一样，VS Code的左边采用了一个共同的用户界面和资源管理器的布局，它显示了所有你可以访问的文件和文件夹,它的右边是一个编辑器，显示你打开过的文件内容。
![layout][1]

VS Code同样可以用键盘操作。最重要的键盘组合 ⇧⌘P ,这将调出命令面板。从这里，你可以访问VS Code所有的功能，包含快捷键最常见的操作。
<center>![commander][2]</center>

各种扩展工具的添加让你可以自如地使用其他的语言，样式，调试工具，命令等。不断壮大的Visual Studio Code社区用户群分享的秘密武器可以助你改善工作流程。
<center>![extentions][3]</center>
###vue :heart:
目前采用vue作为前端框架开发移动端应用，vue在2016备受瞩目，成为前端框架中的一颗新星。而vue拥有便捷的vuecli作为脚手架方便开发者快速配置开发环境。
###node :coffee:
在使用vue-cli之前，需要[安装node][4]环境。
对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。
每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。
和后端一样，node有内置的包管理器 `npm`。
###vue-cli 使用
1. 首先，我们需要**全局安装** `vue-cli`
```
npm install vue-cli -global
```
2. 切换到想要生成工程文件的目录下，使用vue初始化工程
```
cd desktop/wherever-you-want
vue init <template-name> <project-name>
```
vue提供了[四种模板][5]。我们在这里使用webpack 模板，它内置了webpack，便于我们流程化开发
```
vue init webpack my-project
```
3. 切换到工程目录下，使用npm 安装相应的依赖包
```
cd my-project
npm install
```
4. 一个模板文件就此生成啦。现在开始开发吧：
```npm run dev```
执行完成后在浏览器中localhost:8080查看。效果如下
<center>![vue-hello][6]</center>
5. 开发完毕后，需要输出文件：
```npm run dist```
dist文件目录下就是最终生成的文件了
###vue项目结构
```
├── build/                      # webpack配置参数文件
│   └── ...
├── config/                     
│   ├── index.js                # 主项目的配置
│   └── ...
├── src/
│   ├── main.js                 # 应用入口
│   ├── App.vue                 # 主应用组件
│   ├── components/             # UI组件
│   │   └── ...
│   └── assets/                 # 模块资源（webpack提供）
│       └── ...
├── static/                     # 纯静态资源（打包时直接复制）
├── test/
│   └── unit/                   # 单元测试
│   └── e2e/                    # e2e tests测试
├── .babelrc                    # babel编译参数
├── .editorconfig.js            # 编辑器配置
├── .eslintrc.js                # eslint配置文件，用以规范团队开发编码规范
├── index.html                  # 主页模板
└── package.json                # 项目文件，记载着一些命令和依赖还有简要的项目描述信息
```

###一些坑
使用npm安装node-sass时，容易出现报错，这是由于某些不可描述的原因造成的。需要手动安装node-sass的binary文件并设置路径。
```set SASS_BINARY_PATH=C:/Program Files/nodejs/win32-x64-48_binding.node```
由于某些不可描述的原因，npm安装包会异常缓慢，所以需要把registry切换到国内淘宝的[镜像][7]上，运行以下代码即可:
```npm config set registry https://registry.npm.taobao.org```
###教程&&插件
[手把手教你用es6+vue2+webpack2+vue-router2搭建个人blog][8]
[一个项目学会前端实现登录拦截][9]
[自己编写一个组件][10]
[awesome-vue][11] vue插件、ui合集


  [1]: http://upload-images.jianshu.io/upload_images/2445565-e5b73be42ec8894d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [2]: http://upload-images.jianshu.io/upload_images/2445565-b2333dc23add3fe1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [3]: http://images2015.cnblogs.com/blog/105368/201605/105368-20160517123612373-1415796.jpg
  [4]: https://nodejs.org/en/
  [5]: https://github.com/vuejs/vue-cli
  [6]: http://o905ne85q.bkt.clouddn.com/A221.tmp.png
  [7]: https://github.com/cnpm/cnpm
  [8]: https://segmentfault.com/a/1190000008341186#shareToWeibo
  [9]: https://github.com/superman66/vue-axios-github
  [10]: https://github.com/wangzianangis/my_component
  [11]: https://github.com/vuejs/awesome-vue