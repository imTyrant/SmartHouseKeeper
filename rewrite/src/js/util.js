const os = require('os');
const path = require('path');
const fs = require('fs');
const {ipcRenderer} = require('electron');

let log_path = path.resolve(os.homedir(), 'smartiot_log.txt');
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
    document.getElementById("path").innerHTML = "<p><b>日志:</b> " + log_path + "</p>";
});


let room_setup = new Map();
let devices_added = new Map();
let current_room;
let try_times = 0;

// The array for random event.
let divce_shuffled = [];
// The array for random action.
let divce_wihtout_sensor_shuffled = [];

let shuffle_reader = -1;

function shuffle_swap() {
    divce_shuffled = [];
    devices_added.forEach((value, key) => {
        divce_shuffled.push(key);
        // let tmp = key.split(':');

    });
    for (var i = 0; i < divce_shuffled.length; i++) {
        let r = Math.floor(Math.random() * divce_shuffled.length);
        var tmp = divce_shuffled[r];
        divce_shuffled[r] = divce_shuffled[i];
        divce_shuffled[i] = tmp;
    }
    shuffle_reader = 0;
}

function shuffle_read() {
    if (shuffle_reader == -1 || shuffle_reader == divce_shuffled.length) {
        shuffle_swap();
    }
    return divce_shuffled[shuffle_reader++];
}

function random_event_action() {
    let event = shuffle_read();
    let tmp = event.split(':');
    let event_room = tmp[0];
    let event_device = tmp[1];

    
    var action, action_room, action_device;
    
    do {
        action = shuffle_read();
        console.log(action);
        let tmp = action.split(':');
        action_room = tmp[0];
        action_device = tmp[1];
    } while(device[action_device].type === 'sensor' || event == action);
    // while(event == action);

    return {
        'event': event,
        'action': action,
        'event_room': event_room,
        'action_room': action_room,
        'event_device': event_device,
        'action_device': action_device
    };
}

function choose() {
    if (devices_added.length < 5) {
        alert("设备过少（<5）");
    };

    let choice, event, action, event_room, event_device, action_room, action_device;
    
    let ttmp = random_event_action();
    

    event=ttmp['event'];
    action=ttmp['action'];
    event_room=ttmp['event_room'];
    action_room=ttmp['action_room'];
    event_device=ttmp['event_device'];
    action_device=ttmp['action_device'];

    change_device_status(event, random_device_status(event, Math.random()));
    let tmp_status =  random_device_status(action, Math.random());
    var se = confirm(
            "[" + 
            room[event_room].name + 
            "]的[" + 
            device[event_device].name + 
            "]的状态变为了：" + 
            get_device_status_name(event_device, devices_added.get(event)) +  
            "\n导致了[" + room[action_room].name + "]的[" + device[action_device].name + "]状态变为：" + 
            get_device_status_name(action_device, tmp_status) +
            "，是否允许？"
            );
    if (se) {
        choice = 1;
        console.log(se, tmp_status);
        change_device_status(action, tmp_status);
    } else {
        choice = 0;
    }
    update_status(event_room);
    update_status(action_room);
    document.getElementById('times-of-try').innerHTML = ++ try_times;

    let log_obj = {};
    devices_added.forEach((value, key) => {
        log_obj[key] = value;
    });
    log_obj['decision'] = choice;
    saveDataToFile(JSON.stringify(log_obj));
}

function show(room_id) {
    if (room[room_id] === undefined) return;
    current_room = room_id;
    
    var content = "";
    room[room_id].usable_devices.forEach(each => {
        content +=
            "<li>" +
            "<input type='image' src='img/add.png' width='25' height='25' id=" + each + " onClick='out(this.id)' alt='添加'>" +
            "<input type='image' src='img/remove.png' width='25' height='25' id=" + each + " onClick='dis(this.id)' alt='去除'>" +
            "<img src=" + device[each].img + " width='35px' height='35px'><strong>" + device[each].name + "</strong>" +
            "</li>\n"
    });

    document.getElementById('selected_room').innerHTML = room[current_room].name;
    document.getElementById('devices_list').innerHTML = content;
}

function out(device_id) {
    if (current_room.split(':').length != 1 || device_id.split(':').length != 1) {
        console.error("Fatal wrong!!!, rooms name or devices name should not contain ':'");
        return;
    }
    var index = current_room + ':' + device_id;
    if (!devices_added.has(index)) {
        document.getElementById(index).style.display = 'block';
        devices_added.set(index, 0);
        room_setup.get(current_room).push(device_id);
    } else {
        change_device_status(index, random_device_status(index));
    }

    update_status(current_room);
}

function dis(device_id) {
    var index = current_room + ':' + device_id;
    if (devices_added.has(index)) {
        document.getElementById(index).style.display = 'none';
        devices_added.delete(index);

        var idx = room_setup.get(current_room).indexOf(device_id);
        if (idx > -1) {
            room_setup.get(current_room).splice(idx, 1);
        }

        update_status(current_room);
    }
}

function update_status(the_room) {
    var content = "";
    room_setup.get(the_room).forEach((elem) => {
        content += "<tr><td>" + device[elem].name + "</td><td>" +
            get_device_status_name(elem, devices_added.get(the_room + ':' + elem)) +
            "</td></tr>\n";
    });
    document.getElementById('tab_' + the_room).innerHTML = content;
}

// [index]: represent a device in room needs to change status.
// [random]: a random seed need for random change status.
function random_device_status(index, random = 0) {
    var tmp = index.split(':');
    var the_device = tmp[1];

    var old_status = devices_added.get(index);
    var new_status = (devices_added.get(index) + Math.floor(random * device[the_device].all_status.length) + 1) % device[the_device].all_status.length;
    // In case of no change of status.
    if (new_status == old_status) {
        new_status = (devices_added.get(index) + 1) % device[the_device].all_status.length;
    }
    return new_status;
}

// Just change the status based on the [status].
function change_device_status(index, status) {
    var tmp = index.split(':');
    var the_device = tmp[1];
    if (status >= device[the_device].all_status.length) return;
    devices_added.set(index, status);
}

// Switch English unreadable device identifier to a readable Chinese string.
function get_device_status_name(id, index) {
    if (device[id] === 'undefined') return 'undefined';
    if (device[id].all_status.length <= index) return 'undefined';
    return device[id].all_status[index];
}


$('document').ready(() => {
    document.getElementById("path").innerHTML = "<p><b>日志:</b> " + log_path + "</p>";
    document.getElementById('selected_room').innerHTML = '未选择';
    document.getElementById('times_of_try').innerHTML = try_times;
    for (var each in room) {
        room_setup.set(each, new Array());
        var obj = room[each];
        $('#status').append(
            "<p class='flip'>" + obj.name + "</p>" +
            "<div class='panel'>" +
            "<table class='tab_status' id='tab_" + each + "'>" +
            "</table>" +
            "</div>"
        );
    }
    $("p.flip").click(() => {
        $(".panel").slideToggle("fast");
    });
});
