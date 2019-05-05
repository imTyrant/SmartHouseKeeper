# SmartHouseKeeper Script

## 文件介绍
```
.
├── data_2_num.py       // 这个脚本将 data_process.py 生成的结果转化为数字矩阵。 
├── data_process.py     // 这个脚本将没有添加的设备也添加进来，同时将其值设为-1，表示未添加。
├── device.json         // 这个JSON文件保存了有关于 设备 的信息。
├── README.md           // 这个JSON文件保存了有关于 房间 的信息。
└── room.json
```

## 

- 这个脚本是`Python3`的。

- 脚本读取本地`./log`文件夹下的所有的txt文件。

- `data_process.py` 生成的数据最后放在 `*.all.txt` 文件中。

- `data_2_num.py` 生成的数据最后放在 `*.bin.txt` 文件中。