import { RendererTypes } from "../types";

//////////////////////////////////////////////////////////////
//                       NOTICE                             //
//----------------------------------------------------------//
//  ALL OF DEVICE DEFAULT STATUS IS TAKEN AS THE FIRST ONE! //
//  All of device default status is taken as the first one! //
//           设备的第一个状态被认为其默认（初始）状态              //
//////////////////////////////////////////////////////////////
const deviceInfo: RendererTypes.DeviceDetail[] = 
[
    {
        "identifier": "bulb",
        "name": "灯泡",
        "type": "device",
        "description": "这是描述",
        "icon": "remove.svg",
        "statuses": ["关闭", "开启"]
    },
    {
        "identifier": "aerograph",
        "name": "气象仪",
        "type": "sensor",
        "description": "这是描述",
        "icon": "aerograph.png",
        "statuses": ["晴", "阴", "雨"]
    },
    {
        "identifier": "ac",
        "name": "空调",
        "type": "device",
        "description": "这是描述",
        "icon": "ac.png",
        "statuses": ["关闭", "制冷", "制热"]
    },
    {
        "identifier": "motion",
        "name": "动作检测器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "motion.png",
        "statuses": ["无人", "有人"]
    },
    {
        "identifier": "door",
        "name": "智能门",
        "type": "device",
        "description": "这是描述",
        "icon": "door.png",
        "statuses": ["关闭", "打开"]
    },
    {
        "identifier": "window",
        "name": "窗户",
        "type": "device",
        "description": "这是描述",
        "icon": "window.png",
        "statuses": ["关闭", "打开"]
    },
    {
        "identifier": "waterLeaker",
        "name": "漏水检测器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "waterleaker.png",
        "statuses": ["正常", "漏水"]
    },
    {
        "identifier": "coffeeMac",
        "name": "咖啡机",
        "type": "device",
        "description": "这是描述",
        "icon": "coffee_machine.png",
        "statuses": ["关闭", "运行"]
    },
    {
        "identifier": "smoke",
        "name": "烟雾报警器",
        "type": "sensor",
        "description": "这是描述",
        "icon": "smoke.png",
        "statuses": ["正常", "有烟"]
    }
]

export default deviceInfo;