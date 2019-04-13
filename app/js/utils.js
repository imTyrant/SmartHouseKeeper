const os = require('os');
const path = require('path');
const fs = require('fs');
const {ipcRenderer} = require('electron');

var device = new Array();
var device_name = new Array();
var state = new Array();
var num = 0;			//用于给添加的设备编号
var map = {};
map['aerograph'] = -1;
map['ac_main'] = -1;
map['action'] = -1;
map['alarm_main'] = -1;
map['temp_main'] = -1;
map['door'] = -1;
map['ac_sub2'] = -1;
map['temp_sub2'] = -1;
map['window_sub2'] = -1;
map['ac_sub1'] = -1;
map['temp_sub1'] = -1;
map['window_sub1'] = -1;
map['water_laker'] = -1;
map['coffee_mac'] = -1;
map['alarm_kitchen'] = -1;
var mymap = {};
var str;

let log_path = path.resolve(os.homedir(), 'log.txt');
let decisions = [];

function saveDataToFile(data) {
    
    if (typeof(data) !== "string") {
        let str = ""
        data.forEach(element => {
            str += element + '\n';
        });
        
        return;
    }
    fs.writeFileSync(log_path, data + '\n', {flag: 'a'});
}

function save() {
    ipcRenderer.send('pick-file-path');
}

ipcRenderer.on('file-path-selected', (event, path) => {
    if (path) log_path = path;
    document.getElementById("path2file").innerHTML = "日志: " + log_path;
    // prepare some data needed to be saved.
    // saveDataToFile(decisions);
});

function choose() {
    let choice;
    var random = Math.floor(Math.random() * num) + 1;
    var se = confirm("是否允许该策略执行?\n该策略会导致 " + device[random] + " 的状态改变");
    str = device_name[random];
    
    if (se == true) {
        // document.getElementById("date").value = "1";
        if (state[random] == 1) {
            map[str] = 0;
            state[random] = 0;
            document.getElementById(str).value = "OFF";
        }
        else if (state[random] == 0) {
            map[str] = 1;
            state[random] = 1;
            document.getElementById(str).value = "ON";
        }
        choice = 1;
        alert("你按下的是【允许】");
    }
    else {
        // document.getElementById(str).value = "0";
        // document.getElementById(str).value = "0";
        choice = 0;
        alert("你按下的是【拒绝】");
    }
    log_obj = map;
    log_obj['decision'] = choice;
    saveDataToFile(JSON.stringify(log_obj));
}

var flag;
function show0() {
    document.getElementById('li0').style.display = "none";
    document.getElementById('li1').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li8').style.display = "none";
    document.getElementById('li1').style.display = "none";

    document.getElementById('li2').style.display = "block";
    document.getElementById('li3').style.display = "block";
    document.getElementById('li4').style.display = "block";
    document.getElementById('li5').style.display = "block";
    document.getElementById('li7').style.display = "block";

    flag = 0;
    //document.getElementById('room0').style.display="none";
}
function show1() {
    document.getElementById('li1').style.display = "none";
    document.getElementById('li2').style.display = "none";
    document.getElementById('li3').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li5').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li7').style.display = "none";
    document.getElementById('li8').style.display = "none";

    document.getElementById('li0').style.display = "block";

    flag = 1;
    //document.getElementById('room1').style.display="none";
}
function show2() {
    document.getElementById('li0').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li5').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li7').style.display = "none";
    document.getElementById('li8').style.display = "none";

    document.getElementById('li1').style.display = "block";
    document.getElementById('li2').style.display = "block";
    document.getElementById('li3').style.display = "block";

    flag = 2;
    //document.getElementById('room2').style.display="none";
}
function show3() {
    document.getElementById('li0').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li5').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li7').style.display = "none";
    document.getElementById('li8').style.display = "none";

    document.getElementById('li1').style.display = "block";
    document.getElementById('li2').style.display = "block";
    document.getElementById('li3').style.display = "block";

    flag = 3;
    //document.getElementById('room3').style.display="none";
}
function show4() {
    document.getElementById('li0').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li5').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li7').style.display = "none";
    document.getElementById('li8').style.display = "none";
    document.getElementById('li1').style.display = "none";

    document.getElementById('li2').style.display = "block";
    document.getElementById('li3').style.display = "block";
    //document.getElementById('room4').style.display="none";

    flag = 4;
}
function show5() {
    document.getElementById('li1').style.display = "none";
    document.getElementById('li0').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li7').style.display = "none";
    document.getElementById('li8').style.display = "none";
    document.getElementById('li2').style.display = "none";
    document.getElementById('li3').style.display = "none";

    document.getElementById('li5').style.display = "block";
    document.getElementById('li6').style.display = "block";

    flag = 5;
    //document.getElementById('room5').style.display="none";
}
function show6() {
    document.getElementById('li0').style.display = "none";
    document.getElementById('li1').style.display = "none";
    document.getElementById('li2').style.display = "none";
    document.getElementById('li3').style.display = "none";
    document.getElementById('li4').style.display = "none";
    document.getElementById('li5').style.display = "none";
    document.getElementById('li6').style.display = "none";
    document.getElementById('li7').style.display = "none";

    document.getElementById('li8').style.display = "block";

    flag = 6;
    //document.getElementById('room6').style.display="none";
}

function out0() {
    num++;
    if (flag == 1) {
        map['aerograph'] = 0;
        state[num] = map['aerograph'];
        device[num] = '气象仪';
        device_name[num] = 'aerograph';
        document.getElementById('qixiangyi').style.display = 'block';
        document.getElementById("aerograph").value = 'OFF';//map['aerograph'];
    }

}
function dis0() {
    num--;
    if (flag == 1) {
        map['aerograph'] = -1;
        document.getElementById('qixiangyi').style.display = 'none';
        document.getElementById("aerograph").value = map['aerograph'];
    }
}
function out1() {
    num++;
    if (flag == 3) {
        map['window_sub1'] = 0;
        state[num] = map['window_sub1'];
        device[num] = '主卧窗户';
        device_name[num] = 'window_sub1';
        document.getElementById('img').style.display = 'block';
        document.getElementById("window_sub1").value = 'OFF';//map['window_sub1'];
    }
    if (flag == 2) {
        map['window_sub2'] = 0;
        state[num] = map['window_sub2'];
        device[num] = '次卧窗户';
        device_name[num] = 'window_sub2';
        document.getElementById('window2').style.display = 'block';
        document.getElementById("window_sub2").value = 'OFF';//map['window_sub2'];
    }
}
function dis1() {
    num--;
    if (flag == 3) {
        map['window_sub1'] = -1;
        document.getElementById('img').style.display = 'none';
        document.getElementById("window_sub1").value = map['window_sub1'];
    } else if (flag == 2) {
        map['window_sub2'] = -1;
        document.getElementById('window2').style.display = 'none';
        document.getElementById("window_sub2").value = map['window_sub2'];
    }
}
function out2() {
    num++;
    if (flag == 2) {
        map['ac_sub2'] = 0;
        document.getElementById('ac2').style.display = 'block';
        document.getElementById("ac_sub2").value = 'OFF';//map['ac_sub2'];
        state[num] = map['ac_sub2'];
        device[num] = '次卧空调';
        device_name[num] = 'ac_sub2';
    } else if (flag == 0) {
        map['ac_main'] = 0;
        document.getElementById('ac1').style.display = 'block';
        document.getElementById("ac_main").value = 'OFF';//map['ac_main'];
        state[num] = map['ac_main'];
        device[num] = '客厅空调';
        device_name[num] = 'ac_main';
    } else if (flag == 3) {
        map['ac_sub1'] = 0;
        document.getElementById('ac3').style.display = 'block';
        document.getElementById("ac_sub1").value = 'OFF';//map['ac_sub1'];
        state[num] = map['ac_sub1'];
        device[num] = '主卧空调';
        device_name[num] = 'ac_sub1';
    } else if (flag == 4) {
        document.getElementById('ac4').style.display = 'block';
    }

}
function dis2() {
    num--;
    if (flag == 2) {
        map['ac_sub2'] = -1;
        document.getElementById("ac_sub2").value = map['ac_sub2'];
        document.getElementById('ac2').style.display = 'none';
    } else if (flag == 0) {
        map['ac_main'] = -1;
        document.getElementById('ac1').style.display = 'none';
        document.getElementById("ac_main").value = map['ac_main'];
    } else if (flag == 3) {
        map['ac_sub1'] = -1;
        document.getElementById("ac_sub1").value = map['ac_sub1'];
        document.getElementById('ac3').style.display = 'none';
    } else if (flag == 4) {
        document.getElementById('ac4').style.display = 'none';
    }
}
function out3() {
    num++;
    if (flag == 0) {
        map['temp_main'] = 0;
        document.getElementById("temp_main").value = 'OFF';//map['temp_main'];
        document.getElementById('temp').style.display = 'block';
        state[num] = map['temp_main'];
        device[num] = '空调温度计';
        device_name[num] = 'temp_main';
    } else if (flag == 2) {
        map['temp_sub2'] = 0;
        document.getElementById("temp_sub2").value = 'OFF';//map['temp_sub2'];
        document.getElementById("temp2").style.display = 'block';
        state[num] = map['temp_sub2'];
        device[num] = '次卧温度计';
        device_name[num] = 'temp_sub2';
    } else if (flag == 3) {
        map['temp_sub1'] = 0;
        document.getElementById("temp_sub1").value = 'OFF';//map['temp_sub1'];
        document.getElementById('temp3').style.display = 'block';
        state[num] = map['temp_sub1'];
        device[num] = '主卧空调';
        device_name[num] = 'temp_sub1';
    } else if (flag == 4) {
        document.getElementById('temp4').style.display = 'block';
    }
}
function dis3() {
    num--;
    if (flag == 0) {
        map['temp_main'] = -1;
        document.getElementById("temp_main").value = map['temp_main'];
        document.getElementById('temp').style.display = 'none';
    } else if (flag == 2) {
        map['temp_sub2'] = -1;
        document.getElementById("temp_sub2").value = map['temp_sub2'];
        document.getElementById("temp2").style.display = 'none';
    } else if (flag == 3) {
        map['temp_sub1'] = -1;
        document.getElementById("temp_sub1").value = map['temp_sub1'];
        document.getElementById('temp3').style.display = 'none';
    } else if (flag == 4) {
        document.getElementById('temp4').style.display = 'none';
    }
}
function out4() {
    num++;
    if (flag == 0) {
        map['action'] = 0;
        document.getElementById("action").value = 'OFF';//map['action'];
        document.getElementById('distance').style.display = 'block';
        state[num] = map['action'];
        device[num] = '动作检测器';
        device_name[num] = 'action';
    }


}
function dis4() {
    num--;
    if (flag == 0) {
        map['action'] = -1;
        document.getElementById("action").value = map['action'];
        document.getElementById('distance').style.display = 'none';
    }
}
function out5() {
    num++;
    if (flag == 0) {
        map['alarm_main'] = 0;
        document.getElementById("alarm_main").value = 'OFF';//map['alarm_main'];
        document.getElementById('alarm1').style.display = 'block';
        state[num] = map['alarm_main'];
        device[num] = '客厅烟雾报警器';
        device_name[num] = 'alarm_main';
    } else if (flag == 5) {
        map['alarm_main'] = 0;
        document.getElementById("alarm_main").value = 'OFF';//map['alarm_main'];
        document.getElementById("alarm2").style.display = 'block';
        state[num] = map['alarm_kitchen'];
        device[num] = '厨房烟雾报警器';
        device_name[num] = 'alarm_kitchen';
    }
}
function dis5() {
    num--;
    if (flag == 0) {
        map['alarm_main'] = -1;
        document.getElementById("alarm_main").value = map['alarm_main'];
        document.getElementById('alarm1').style.display = 'none';
    } else if (flag == 5) {
        map['alarm_main'] = -1;
        document.getElementById("alarm_main").value = map['alarm_main'];
        document.getElementById("alarm2").style.display = 'none';
    }
}
function out6() {
    num++;
    if (flag == 5) {
        map['coffee_mac'] = 0;
        document.getElementById("coffee_mac").value = 'OFF';//map['coffee_mac'];
        document.getElementById('coffee').style.display = 'block';
        state[num] = map['coffee_mac'];
        device[num] = '咖啡机';
        device_name[num] = 'cooffee_mac';
    }
}
function dis6() {
    num--;
    if (flag == 5) {
        map['coffee_mac'] = -1;
        document.getElementById("coffee_mac").value = map['coffee_mac'];
        document.getElementById('coffee').style.display = 'none';
    }
        
}
function out7() {
    num++;
    if (flag == 0) {
        map['door'] = 0;
        document.getElementById("door").value = 'OFF';//map['door'];
        document.getElementById('door1').style.display = 'block';
        state[num] = map['door'];
        device[num] = '智能门';
        device_name[num] = 'door';
    }
        

}
function dis7() {
    num--;
    if (flag == 0) {
        map['door'] = -1;
        document.getElementById("door").value = map['door'];
        document.getElementById('door1').style.display = 'none';
    }
}
function out8() {
    num++;
    if (flag == 6) {
        map['water_laker'] = 0;
        document.getElementById("water_laker").value = 'OFF';//map['water_laker'];
        document.getElementById('waterlaker').style.display = 'block';
        state[num] = map['water_laker'];
        device[num] = '漏水检测器';
        device_name[num] = 'water_laker';
    }
}
function dis8() {
    num--;
    if (flag == 6) {
        map['water_laker'] = -1;
        document.getElementById("water_laker").value = map['water_laker'];
        document.getElementById('waterlaker').style.display = 'none';
    }
}
function res() {
    num = 0;
    document.getElementById('li0').style.display = "block";
    document.getElementById('li1').style.display = "block";
    document.getElementById('li2').style.display = "block";
    document.getElementById('li3').style.display = "block";
    document.getElementById('li4').style.display = "block";
    document.getElementById('li5').style.display = "block";
    document.getElementById('li6').style.display = "block";
    document.getElementById('li7').style.display = "block";
    document.getElementById('li8').style.display = "block";

    document.getElementById('img').style.display = "none";
    document.getElementById('qixiangyi').style.display = "none";
    document.getElementById('window2').style.display = "none";
    document.getElementById('distance').style.display = "none";
    document.getElementById('alarm1').style.display = "none";
    document.getElementById('ac1').style.display = "none";
    document.getElementById('temp').style.display = "none";
    document.getElementById('ac2').style.display = "none";
    document.getElementById('temp2').style.display = "none";
    document.getElementById('temp3').style.display = "none";
    document.getElementById('ac3').style.display = "none";
    document.getElementById('ac4').style.display = "none";
    document.getElementById('temp4').style.display = "none";
    document.getElementById('door1').style.display = "none";
    document.getElementById('coffee').style.display = "none";
    document.getElementById('alarm2').style.display = "none";
    document.getElementById('waterlaker').style.display = "none";
    flag = -1;
}