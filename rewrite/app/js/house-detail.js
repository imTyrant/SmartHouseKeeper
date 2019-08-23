"use strict"
const path = require('path');

class HouseDetail{}

HouseDetail.imgPath = path.join(__dirname, "../img/");

HouseDetail.device = {
    'aerograph': {
        'name': '气象仪',
        'type': 'sensor',
        'img': HouseDetail.imgPath +  'aerograph.png',
        'all_status': ['晴', '阴', '雨'],
    },
    'ac': {
        'name': '空调',
        'type': 'device',
        'img': HouseDetail.imgPath +  'ac.png',
        'all_status': ['关闭', '制冷', '制热'],
    },
    'action': {
        'name': '动作检测器',
        'type': 'sensor',
        'img': HouseDetail.imgPath +  'motion.png',
        'all_status': ['无人', '有人'],
    },
    'temp': {
        'name': '温度计',
        'type': 'sensor',
        'img': HouseDetail.imgPath +  'temp.png',
        'all_status': ['正常', '低温', '高温'],
    },
    'door': {
        'name': '智能门',
        'type': 'device',
        'img': HouseDetail.imgPath +  'door.png',
        'all_status': ['关闭', '打开'],
    },
    'window': {
        'name': '窗户',
        'type': 'device',
        'img': HouseDetail.imgPath +  'window.png',
        'all_status': ['关闭', '打开'],
    },
    'waterleaker': {
        'name': '漏水检测器',
        'type': 'sensor',
        'img': HouseDetail.imgPath +  'waterleaker.png',
        'all_status': ['正常', '漏水'],
    },
    'coffeemac': {
        'name': '咖啡机',
        'type': 'device',
        'img': HouseDetail.imgPath +  'coffee_machine.png',
        'all_status': ['关闭', '运行'],
    },
    'smoke': {
        'name': '烟雾报警器',
        'type': 'sensor',
        'img': HouseDetail.imgPath +  'smoke.png',
        'all_status': ['正常', '有烟'],
    }
};

HouseDetail.room = {
    'parlour': {
        'name': '客厅',
        'usableDevices' : ['ac', 'temp', 'action', 'smoke', 'door'],
    },
    'bedroom1': {
        'name': '次卧（左）',
        'usableDevices' : ['window', 'ac', 'temp'],
    },
    'bedroom2': {
        'name': '主卧',
        'usableDevices' : ['window', 'ac', 'temp'],
    },
    'bedroom3': {
        'name': '次卧（下）',
        'usableDevices' : ['ac', 'temp'],
    },
    'kitchen': {
        'name': '厨房',
        'usableDevices' : ['smoke', 'coffeemac'],
    },
    'wc': {
        'name': '厕所',
        'usableDevices' : ['waterleaker']
    },
    'balcony': {
        'name': '阳台',
        'usableDevices' : ['aerograph']
    },
};

module.exports = HouseDetail;