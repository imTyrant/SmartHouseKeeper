const electron = require('electron');
const app = electron.app;
const fs = require('fs');

var device = new Array();
var device_name = new Array();
var state = new Array();
var num = 0;			//用于给添加的设备编号
var map = {};
map['aerograph'] = 0;
map['ac_main'] = 0;
map['action'] = 0;
map['alarm_main'] = 0;
map['temp_main'] = 0;
map['door'] = 0;
map['ac_sub2'] = 0;
map['temp_sub2'] = 0;
map['window_sub2'] = 0;
map['ac_sub1'] = 0;
map['temp_sub1'] = 0;
map['window_sub1'] = 0;
map['water_laker'] = 0;
map['coffee_mac'] = 0;
map['alarm_kitchen'] = 0;
var mymap = {};
var str;
function choose() {
    var random = Math.floor(Math.random() * num) + 1;
    var se = confirm("是否允许该策略执行?\n该策略会导致" + device[random] + "的状态改变");
    if (se == true) {
        document.getElementById("date").value = "1";
        //		  document.CCCC.submit();
        if (state[random] == 1) {
            str = device_name[random];
            map[str] = 0;
            state[random] = 0;
            document.getElementById(str).value = map[str];
        }
        else if (state[random] == 0) {
            str = device_name[random];
            map[str] = 1;
            state[random] = 1;
            document.getElementById(str).value = map[str];
        }
        alert("你按下的是【确认】");
    }
    else {
        document.getElenmentById("indate").value = "0";
        //	document.CCCC.submit();
        alert("你按下的是【取消】");
    }
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
    if (flag == 1)
        document.getElementById('qixiangyi').style.display = 'block';
    state[num] = map['aerograph'];
    device[num] = '气象仪';
    device_name[num] = 'aerograph';

}
function dis0() {
    num--;
    if (flag == 1)
        document.getElementById('qixiangyi').style.display = 'none';

}
function out1() {
    num++;
    if (flag == 3) {
        document.getElementById('img').style.display = 'block';
        state[num] = map['window_sub1'];
        device[num] = '主卧窗户';
    }
    if (flag == 2) {
        document.getElementById('window2').style.display = 'block';
        state[num] = map['window_sub2'];
        device[num] = '次卧窗户';
        device_name[num] = 'window_sub2';
    }
}
function dis1() {
    num--;
    if (flag == 3) {
        document.getElementById('img').style.display = 'none';
    } else if (flag == 2) {
        document.getElementById('window2').style.display = 'none';
    }
}
function out2() {
    num++;
    if (flag == 2) {
        document.getElementById('ac2').style.display = 'block';
        state[num] = map['ac_sub2'];
        device[num] = '次卧空调';
        device_name[num] = 'ac_sub2';
    } else if (flag == 0) {
        document.getElementById('ac1').style.display = 'block';
        state[num] = map['ac_main'];
        device[num] = '客厅空调';
        device_name[num] = 'ac_main';
    } else if (flag == 3) {
        document.getElementById('ac3').style.display = 'block';
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
        document.getElementById('ac2').style.display = 'none';
    } else if (flag == 0) {
        document.getElementById('ac1').style.display = 'none';
    } else if (flag == 3) {
        document.getElementById('ac3').style.display = 'none';
    } else if (flag == 4) {
        document.getElementById('ac4').style.display = 'none';
    }
}
function out3() {
    num++;
    if (flag == 0) {
        document.getElementById('temp').style.display = 'block';
        state[num] = map['temp_main'];
        device[num] = '空调温度计';
        device_name[num] = 'temp_main';
    } else if (flag == 2) {
        document.getElementById("temp2").style.display = 'block';
        state[num] = map['temp_sub2'];
        device[num] = '次卧温度计';
        device_name[num] = 'temp_sub2';
    } else if (flag == 3) {
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
        document.getElementById('temp').style.display = 'none';
    } else if (flag == 2) {
        document.getElementById("temp2").style.display = 'none';
    } else if (flag == 3) {
        document.getElementById('temp3').style.display = 'none';
    } else if (flag == 4) {
        document.getElementById('temp4').style.display = 'none';
    }
}
function out4() {
    num++;
    if (flag == 0)
        document.getElementById('distance').style.display = 'block';
    state[num] = map['action'];
    device[num] = '动作检测器';
    device_name[num] = 'action';

}
function dis4() {
    num--;
    if (flag == 0)
        document.getElementById('distance').style.display = 'none';
}
function out5() {
    num++;
    if (flag == 0) {
        document.getElementById('alarm1').style.display = 'block';
        state[num] = map['alarm_main'];
        device[num] = '客厅烟雾报警器';
        device_name[num] = 'alarm_main';
    } else if (flag == 5) {
        document.getElementById("alarm2").style.display = 'block';
        state[num] = map['alarm_kitchen'];
        device[num] = '厨房烟雾报警器';
        device_name[num] = 'alarm_kitchen';
    }
}
function dis5() {
    num--;
    if (flag == 0) {
        document.getElementById('alarm1').style.display = 'none';
    } else if (flag == 5) {
        document.getElementById("alarm2").style.display = 'none';
    }
}
function out6() {
    num++;
    if (flag == 5)
        document.getElementById('coffee').style.display = 'block';
    state[num] = map['coffee_mac'];
    device[num] = '咖啡机';
    device_name[num] = 'cooffee_mac';
}
function dis6() {
    num--;
    if (flag == 5)
        document.getElementById('coffee').style.display = 'none';
}
function out7() {
    num++;
    if (flag == 0)
        document.getElementById('door1').style.display = 'block';
    state[num] = map['door'];
    device[num] = '智能门';
    device_name[num] = 'door';

}
function dis7() {
    num--;
    if (flag == 0)
        document.getElementById('door1').style.display = 'none';

}
function out8() {
    num++;
    if (flag == 6)
        document.getElementById('waterlaker').style.display = 'block';
    state[num] = map['water_laker'];
    device[num] = '漏水检测器';
    device_name[num] = 'water_laker';
}
function dis8() {
    num--;
    if (flag == 6)
        document.getElementById('waterlaker').style.display = 'none';
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