# 数据传输设计
## 这个文档介绍一下前后台的数据要以什么格式传输。

前后端之间的交互数据使用**JSON**的格式来进行传输。在不同场景下传输的数据所需的字段。

### Submit Choices

在用户作出决策的时候，Browser端的数据需要使用**POST**的方式将数据上传到server端的 /SubmitChoice servlet。

上传的数据应具有以下字段：
```json
{
    // 字符串格式，用来唯一标识用户，对应与数据库中的用户昵称。
    "kid": "string",
    // 
    "sid": "string",
     // 以字符串的形式获得前端的版本。 
    "version": "string",
    // 字符串格式，就是将 当前添加设备状态 + 用户作出的决策 以json格式保存之后得到的字符串。(JSON.stringify)
    "choice": "string",
    // 模拟环境下的当前时间，也是使用字符串的格式保存。 
    "time": "string" 
}

```