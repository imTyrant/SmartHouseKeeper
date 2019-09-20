# READ ME

## 文件结构
```
├─asset // 存放静态数据（界面文件：html，img）
│  ├─layout1 // 使用的界面文件
│  ├─layout2 // （没用的）
│  └─layout3 // （没用的）
├─dist // 编译输出文件（编译好的ts，tsx代码，并拷贝asset/layout1/*）
├─script // 脚本文件夹 （目前存放webpack脚本）
└─src // typescript 脚本文件
    ├─config
    ├─modules // 存放模块，用在election一端
    ├─renderer // 存放渲染页面的代码，编译后生成index.js
    │  ├─layout1 // 对应于 asset/layout1
    │  │  ├─components // 页面中的主要模块
    │  │  ├─config // 提前定义好的文件
    │  │  ├─locale // 存放一些宏定义的字符串用于ui
    │  │  ├─store // 存放redux store文件
    │  │  └─utils // 工具类
    │  └─layout2 // （没用的）
    ├─types // 定义的全局类型
    └─utils // 工具类代码
```

## 开发依赖
- 开发语言： `TypeScript`（建议），`JavaScript`

- 开发平台： `nodejs`，`electron`

- 界面开发： `React`，`Redux`，`webpack`（不重要）

## 命令
`npm run build`: 编译代码 

`npm start / npm run start`: 编译代码并运行程序

## 使用方法
命令行切换到本目录键入如下命令：

`npm install` （安装失败考虑使用npm镜像源，例如淘宝）

`npm start` 


## 参考连接
> https://github.com/akabekobeko/examples-electron

> https://www.redux.org.cn

> https://redux.js.org

> https://reactjs.org

代码示例
> redux with typescript: https://codesandbox.io/s/redux-typescript-example-6g945

> redux: https://codesandbox.io/s/redux-typescript-example-6g945 