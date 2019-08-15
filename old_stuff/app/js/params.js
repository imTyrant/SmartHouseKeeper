const img_path = './img/';
const device = {
    'aerograph': {
        'name': '气象仪',
        'type': 'sensor',
        'img': img_path +  '气象仪.png',
        'all_status': ['晴', '阴', '雨'],
    },
    'ac': {
        'name': '空调',
        'type': 'device',
        'img': img_path +  '空调.png',
        'all_status': ['关闭', '制冷', '制热'],
    },
    'action': {
        'name': '动作检测器',
        'type': 'sensor',
        'img': img_path +  '距离传感器.png',
        'all_status': ['无人', '有人'],
    },
    'temp': {
        'name': '温度计',
        'type': 'sensor',
        'img': img_path +  '温湿度传感器_o.png',
        'all_status': ['正常', '低温', '高温'],
    },
    'door': {
        'name': '智能门',
        'type': 'device',
        'img': img_path +  '门.png',
        'all_status': ['关闭', '打开'],
    },
    'window': {
        'name': '窗户',
        'type': 'device',
        'img': img_path +  '窗户.png',
        'all_status': ['关闭', '打开'],
    },
    'waterleaker': {
        'name': '漏水检测器',
        'type': 'sensor',
        'img': img_path +  '漏水检测器.png',
        'all_status': ['正常', '漏水'],
    },
    'coffeemac': {
        'name': '咖啡机',
        'type': 'device',
        'img': img_path +  '咖啡机.png',
        'all_status': ['关闭', '运行'],
    },
    'smoke': {
        'name': '烟雾报警器',
        'type': 'sensor',
        'img': img_path +  '警报.png',
        'all_status': ['正常', '有烟'],
    }
};

const room = {
    'parlour': {
        'name': '客厅',
        'usable_devices' : ['ac', 'temp', 'action', 'smoke', 'door'],
    },
    'bedroom1': {
        'name': '次卧（左）',
        'usable_devices' : ['window', 'ac', 'temp'],
    },
    'bedroom2': {
        'name': '主卧',
        'usable_devices' : ['window', 'ac', 'temp'],
    },
    'bedroom3': {
        'name': '次卧（下）',
        'usable_devices' : ['ac', 'temp'],
    },
    'kitchen': {
        'name': '厨房',
        'usable_devices' : ['smoke', 'coffeemac'],
    },
    'wc': {
        'name': '厕所',
        'usable_devices' : ['waterleaker']
    },
    'balcony': {
        'name': '阳台',
        'usable_devices' : ['aerograph']
    },
};