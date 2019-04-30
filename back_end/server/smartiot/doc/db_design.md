# 数据库构造
## 这个文档介绍数据库的表项

数据库的字符都使用`utf-8`的格式进行编码。

数据库的主要目录如下：
> - smarthoserkeeper
>    - keepers 
>    - house_setup
>    - choices

接下来详细介绍每个数据库表项的详细内容。

### **keepers**

这个表项保存了注册用户的信息

| column | type | comment |
| - | - | - |
| keeper | varchar\[255\] | 这个记录用户的id，默认使用一个至少32字节的Hash值来表示，当然，允许用户自己生成昵称，要保证昵称不重复。|
| age | int\[11\] | 这个记录用户的年龄，作为学习的时候的一个依据。 |

### **house_setup**

*这个部分的表只是设想，具体是否要实现对应功能以后再讨论。*

记录注册用户当前的房间的配置，可以让用户在之后的使用中能够直接重新载入他们之前的配置。

| column | type | comment |
| - | - | - |
| keeper | varchar\[255\] | 与**keepers**表中的`keeper`项相同。|
| sid | varchar\[255\] | 这个是唯一表示用户的配置的。|
| sname | varchar\[255\] | 可以设定一个配置的别名，辅助记忆。|
| house_version | varchar\[255\]]| 房间的版本号，以备以后可能会有多个房间。 |
| setting | varchar\[1000\] | 记录用户对于房间的具体布置。这个设置字符容量大一点防止不够存。暂定保存的时候直接存json格式。 |


### **choices**

这个表就是用来保存用户的决策的。用户的决策使用JSON的格式保存。

| column | type | comment |
| - | - | - |
| keeper | varchar\[255\] | 与**keepers**表中的`keeper`项相同。 |
| sid | varchar\[255\] | 与**house_setup**表中的`sid`项相同。 |
| software_version | varchar\[255\] | 当前软件的版本，防止版本之间更改太大，影响学习的过程。 |
| time | varchar\[255\] | 事件（决策）发生的时间。 |
| status | varchar\[1000\] | 保存用户决策，以及当前状态。 |
