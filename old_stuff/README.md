# SmartHouseKeeper

## 文件目录介绍
```
.
├── app                         // electron 的代码，和web的代码没有太大区别。
│   └── README.md
├── back_end                    // 这个放的是后台的代码
│   ├── README.md
│   ├── server                      // 这个是修改之后的后台代码，用maven进行的项目管理。
│   │   └── smartiot 
│   │       ├── doc
│   │       │   ├── db_design.md
│   │       │   └── tran_design.md
│   │       ├── pom.xml             // 这个是 maven的项目配置文件，
│   │       │                       // 里面添加了两个依赖：servlet 和 mysql driver。
│   │       └── src
│   │           └── main
│   │               ├── java
│   │               │   ├── dao
│   │               │   ├── model
│   │               │   ├── util
│   │               │   └── web
│   │               │
│   │               └── webapp      // 这个文件夹里面放的是前端的文件，
│   │                   │           // 对应的是 front_end_1.3.0文件夹下面的前端代码。
│   │                   ├── css
│   │                   ├── img
│   │                   ├── index.html
│   │                   ├── js
│   │                   ├── META-INF        // Servlet的配置文件
│   │                   │   └── contex.xml
│   │                   └── WEB-INF         // Servlet的配置文件
│   │                       └── web.xml
│   │
│   │
│   └── web         // 之前写的java servlet后台。
│
├── demo            // 这文件夹里代码没啥用。
│
│
├── script          // 放一些数据处理的脚本。
│   └── README.md
│
├── front_end               //放的是前端的代码。
│   ├── README.md
│   ├── font_end_1.3.0      // 这里放的是修改后的前端代码，修改了之前的一些问题，添加之前提到的一些小功能。
│   └── fornt_end           //之前写的前端代码放在了这个里面
│
└── README.md
```

## Notes

- 关于后台数据的结构可以看：[数据库介绍](./back_end/server/smartiot/doc/db_design.md)。

- 前端和后端数据的交互的所需的字段可以看： [字段介绍](./back_end/server/smartiot/doc/tran_design.md)。

- 前端代码每次修改，记得更改versin号，例如 `/front_end_1.3.0/js/util.js` 的第一行代码。这样便于后期对数据进行区分。


## READMEs

- [app](app/README.md)

- [front_end](front_end/README.md)

- [back_end](back_end/README.md)

- [script](script/README.md)