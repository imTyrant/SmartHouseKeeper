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


# Todo

- 收集一些智能家居设备，并按照[devices.ts](./src/renderer/layout1/config/devices.ts)中的形式保存
    - 格式介绍：
        - `identifier`: 唯一标识设备的标识符
        - `name`: 设备的名称，用于界面的展示
        - `type`: sensor | device
        - `description`: 设备的文字介绍
        - `icon`: 表示设备的图标的文件名，不需要添加路径
        - `status`: 设备的所有状态，用来在界面中展示（第一个为默认状态，即设备初始状态。
    - 每一个设备信息组成一个对象`{}`，并放在 `deviceInfo`数组`[]`中
    - 记录收集设备的`capability`放到另外的一个文件中，利用`identifier`作为索引
- 找到合适的图标来表示设备
    - 尽量为`svg`格式
    - 图标文件名最好英文
    - 将文件名填入到`icon`中
    - 图像文件放到[asset/layout1/img](./asset/layout1/img)目录下
    - *可以的话(非必须)准备两套图标（彩色，黑白）*
- 组件`StatusTable`中的信息展示美化一下
    - 运行程序，添加几个设备之后，在`Status`标签看下效果
    - 可以添加(如图标)或者删除(如id)一些信息，主要考虑空间（`width`）
    - 美化利用现成的组件，例如使用`antd`的`table`（注：大部分组件都是使用`antd`）
- 目前界面的信息与`election`的后端部分没有联通，所以需要实现将前端的数据（即`AddedDevicesList`返回给后台`election`）
    - 设备被添加之后，将新添加的设备的信息返回到后台
    - 设备的状态更新后，需要将新的设备状态返回到后台
    - 因为`AddedDevicesList`是一个数组（`AddedDevice[]`），因此尽量避免每次将数据返回到后台，而只是将更新的部分返回例如每次只返回数组中的一个元素（`AddedDevice`）
    - 具体需要返回的信息未确定，可先按找全部信息都返回
    - 返回方式考虑使用 `election` 提供的 `ipcMain` 与 `ipcRenderer`