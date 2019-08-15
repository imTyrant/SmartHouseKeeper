const version = "1.3.0"; // 这个表示版本号，每次有大修改的时候，记得改一下。
let kid = "";   
let sid = "";
let time = "";

// Used for electron, ignore in web environment.
if (this !== window) {

    const os = require('os');
    const path = require('path');
    const fs = require('fs');
    const { ipcRenderer } = require('electron');

    var log_path = path.resolve(os.homedir(), 'log.txt');
    var decisions = [];

    function saveDataToFile(data) {

        if (typeof (data) !== "string") {
            let str = ""
            data.forEach(element => {
                str += element + '\n';
            });

            return;
        }
        fs.writeFileSync(log_path, data + '\n', { flag: 'a' });
    }

    function save() {
        ipcRenderer.send('pick-file-path');
    }

    ipcRenderer.on('file-path-selected', (event, path) => {
        if (path) log_path = path;
        document.getElementById("path").innerHTML = "<p><b>日志:</b> " + log_path + "</p>";
    });

}
// End

let room_setup = new Map();
let devices_added = new Map();
let current_room;

let divce_shuffled = [];
let shuffle_reader = -1;


// Functions used in web buttons.
function choose() {
    let choice;
    let event = shuffle_read();
    console.log(shuffle_reader);
    let action = shuffle_read();
    console.log(shuffle_reader);

    console.log(event);
    console.log(action);
    let tmp1 = event.split('_');
    let tmp2 = action.split('_');
    if (tmp1.length != 2 || tmp2.length != 2) {
        console.error('Wrong!');
        return;
    }
    let event_room = tmp1[0];
    let event_device = tmp1[1];

    let action_room = tmp2[0];
    let action_device = tmp2[1];
    console.log(event, devices_added.get(event));
    devices_added.set(event, (devices_added.get(event) + 1) % 2);
    console.log(event, devices_added.get(event));


    var se = confirm(
        "[" +
        room[event_room].name +
        "]的[" +
        device[event_device].name +
        "]被" +
        (devices_added.get(event) == 0 ? '关闭了' : '打开了') +
        "\n导致了[" + room[action_room].name + "]的[" + device[action_device].name + "]状态变为" +
        (devices_added.get(action) == 0 ? '[打开]' : '[关闭]') +
        "，是否允许？"
    );
    if (se) {
        choice = 1;
        devices_added.set(action, (devices_added.get(action) + 1) % 2);
    } else {
        choice = 0;
    }
    update_status(event_room);
    update_status(action_room);

    let log_obj = {};
    devices_added.forEach((value, key) => {
        log_obj[key] = value;
    });
    log_obj['decision'] = choice;

    $.post(
        "http://localhost:8080/smartiot/SubmitChoice",
        {
            "kid": kid,
            "sid": sid,
            "version": version,
            "choice": JSON.stringify(log_obj),
            "time": time
        },
        (data, textStatus, jqXHR) => {
            console.log(data, textStatus);
        }
    );
    // saveDataToFile(JSON.stringify(log_obj));
}

function show(room_id) {
    if (room[room_id] === undefined) return;
    current_room = room_id;

    var content = "";
    room[room_id].usable_devices.forEach(each => {
        content +=
            "<li>" +
            "<input type='image' src='img/添加 (1).png' width='25' height='25' id=" + each + " onClick='out(this.id)' alt='添加'>" +
            "<input type='image' src='img/减少.png' width='25' height='25' id=" + each + " onClick='dis(this.id)' alt='去除'>" +
            "<img src=" + device[each].img + " width='35px' height='35px'><strong>" + device[each].name + "</strong>" +
            "</li>\n"
    });

    document.getElementById('selected_room').innerHTML = room[current_room].name;
    document.getElementById('devices_list').innerHTML = content;
}

function out(device_id) {
    var index = current_room + '_' + device_id;
    if (!devices_added.has(index)) {
        document.getElementById(index).style.display = 'block';
        devices_added.set(index, 0);
        room_setup.get(current_room).push(device_id);
    } else {
        devices_added.set(index, (devices_added.get(index) + 1) % 2);
    }

    update_status(current_room);
}

function dis(device_id) {
    var index = current_room + '_' + device_id;
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

// Make random event and action pair.
function shuffle_swap() {
    devices_added.forEach((value, key) => {
        divce_shuffled.push(key);
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

// Update elements of page
function update_status(the_room) {
    var content = "";
    room_setup.get(the_room).forEach((elem) => {
        content += "<tr><td>" + device[elem].name + "</td><td>" +
            (devices_added.get(the_room + '_' + elem) == 0 ? 'OFF' : 'ON') +
            "</td></tr>\n";
    });
    document.getElementById('tab_' + the_room).innerHTML = content;
}

// Generate a random string.
function hexString(buffer) {
    const byteArray = new Uint8Array(buffer);

    const hexCodes = [...byteArray].map(value => {
        const hexCode = value.toString(16);
        const paddedHexCode = hexCode.padStart(2, '0');
        return paddedHexCode;
    });

    return hexCodes.join('');
}

function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return window.crypto.subtle.digest('SHA-256', data);
}

// Initialization code during page loading.
$('document').ready(() => {
    digestMessage("kid" + Date.now().toString()).then(digest => {
        kid = hexString(digest);
    });

    digestMessage("sid" + Date.now().toString()).then(digest => {
        sid = hexString(digest);
    });

    document.getElementById("path").innerHTML = "<p><b>日志:</b> " + log_path + "</p>";
    document.getElementById('selected_room').innerHTML = '未选择';
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
