# SmartHouseKeeper

* ~~在```utils.js```中的变量 ```num```使用起来很危险。因为加号或者减号被按下之后，```num```会自加一。但是如果此时没有设备被添加，那么会这个```num```会指向一个```null```对象。~~

* ~~随机数生成算法太简单了，会导致想遍历完所有的可能的状态需要很长的时间。所以最好换成一个**伪随机**的算法。~~

* 年龄这个选项还没有添加。

* 下面是收集到的数据的例子： *（1代表开，0代表关闭， 没有的设备表示没有添加。decision表示用户决策，1表示同意，0表示拒绝。）*
```
{
    "kitchen:coffeemac": 0,
    "parlour:door": -1,
    "bedroom3:temp": -1,
    "bedroom1:window": -1,
    "bedroom2:temp": -1,
    "bedroom1:temp": -1,
    "bedroom1:ac": 0,
    "parlour:temp": 1,
    "parlour:action": 0,
    "parlour:ac": 0,
    "decision": 1
}
```