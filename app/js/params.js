const img_path = './img/';
const device = {
    'aerograph': {
        'name': '气象仪',
        'img': img_path +  '气象仪.png',
    },
    'ac': {
        'name': '空调',
        'img': img_path +  '空调.png',
    },
    'action': {
        'name': '动作检测器',
        'img': img_path +  '距离传感器.png',
    },
    'temp': {
        'name': '温度计',
        'img': img_path +  '温湿度传感器_o.png',
    },
    'door': {
        'name': '智能门',
        'img': img_path +  '门.png',
    },
    'window': {
        'name': '窗户',
        'img': img_path +  '窗户.png',
    },
    'water_leaker': {
        'name': '漏水检测器',
        'img': img_path +  '漏水检测器.png',
    },
    'coffee_mac': {
        'name': '咖啡机',
        'img': img_path +  '咖啡机.png',
    },
    'smoke': {
        'name': '烟雾报警器',
        'img': img_path +  '警报.png',
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
        'usable_devices' : ['smoke', 'coffee_mac'],
    },
    'wc': {
        'name': '厕所',
        'usable_devices' : ['water_leaker']
    },
    'balcony': {
        'name': '阳台',
        'usable_devices' : ['aerograph']
    },
};