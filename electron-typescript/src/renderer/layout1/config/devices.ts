import { ConfigTypes } from "../types";

const deviceInfo: ConfigTypes.DeviceDetail[] = 
[
    {
        "identifier": "bulb",
        "name": "灯泡",
        "type": "device",
        "description": "这是描述",
        "icon": "remove.svg",
        "states": ["关闭", "开启"]
    },
    {
        "identifier": "aerograph",
        "name": "气象仪",
        "type": "sensor",
        "description": "这是描述",
        "icon": "aerograph.png",
        "states": ["晴", "阴", "雨"]
    },
    {
        "identifier": "ac",
        "name": "空调",
        "type": "device",
        "description": "这是描述",
        "icon": "ac.png",
        "states": ["关闭", "制冷", "制热"]
    },
    {
        "identifier": "motion",
        "name": "动作检测器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "motion.png",
        "states": ["无人", "有人"]
    },
    {
        "identifier": "door",
        "name": "智能门",
        "type": "device",
        "description": "这是描述",
        "icon": "door.png",
        "states": ["关闭", "打开"]
    },
    {
        "identifier": "window",
        "name": "窗户",
        "type": "device",
        "description": "这是描述",
        "icon": "window.png",
        "states": ["关闭", "打开"]
    },
    {
        "identifier": "waterLeaker",
        "name": "漏水检测器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "waterleaker.png",
        "states": ["正常", "漏水"]
    },
    {
        "identifier": "coffeeMac",
        "name": "咖啡机",
        "type": "device",
        "description": "这是描述",
        "icon": "coffee_machine.png",
        "states": ["关闭", "运行"]
    },
    {
        "identifier": "smoke",
        "name": "烟雾报警器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "smoke.png",
        "states": ["正常", "有烟"]
    }
]

export default deviceInfo;