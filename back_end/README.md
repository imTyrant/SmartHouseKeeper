# SmartHouseKeeper Back End

## 文件介绍
```
.
├── doc
├── pom.xml
└── src
    └── main
        ├── java
        │   ├── dao                         // 三个和数据库交互的类。
        │   │   ├── ChoicesDOA.java
        │   │   ├── ISHKDOA.java
        │   │   ├── KeeperDOA.java
        │   │   ├── SettingDOA.java
        │   │   └── SHKDOA.java
        │   ├── model                       // 以Java类的形式定义了三个数据的内容。
        │   │   ├── MChoices.java
        │   │   ├── MKeeper.java
        │   │   └── MSetting.java
        │   ├── util                        // 一些工具类。
        │   │   ├── DAOFactory.java         // 实例化DOA的工厂类
        │   │   ├── DBInteractor.java       // 这个类用来获取数据的连接
        │   │   └── DOAInitExecption.java
        │   └── web                         // 对外开放的三个servlet。
        │       ├── LoginUser.java          // 用户登录。（未实现）
        │       ├── RegisterUser.java       // 用户注册。（未实现）      
        │       └── SubmitChoice.java       // 提交用户的决策。（已经实现）
        └── webapp
```