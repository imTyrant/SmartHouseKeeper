"use strict"

// const path = require('path');
// const {ipcRenderer} = require('electron');

// const HouseDetail = require(path.join(__dirname, "js/house-detail.js"));
// const IPCChannel = require(path.join(__dirname, "../src/configure/channel.js"));

// const room = HouseDetail.room;
// const device = HouseDetail.device;

let selectedRoom;

let roomSetup = new Map();
let devicesAdded = new Map();

ipcRenderer.on(Channel.RENDERER_DEVICE_UPDATE, console.log);

function update_status(the_room) {
    var content = "";
    room_setup.get(the_room).forEach((elem) => {
        content += "<tr><td>" + device[elem].name + "</td><td>" +
            get_device_status_name(elem, devices_added.get(the_room + ':' + elem)) +
            "</td></tr>\n";
    });
    document.getElementById('tab_' + the_room).innerHTML = content;
}

function statusUpdate(e) {
    switch (e.opt) {
        case "update":
            document.getElementById(e.device.deviceID).style.display = 'block';
            break;
    
        default:
            break;
    }
}

function out(event) {
    let deviceType = event.target.id;

    ipcRenderer.send(Channel.RENDERER_DEVICE_ADD, {selectedRoom, deviceType});

    // let index = selectedRoom + ':' + deviceType;
    // if (!devicesAdded.has(index)) {
    //     document.getElementById(index).style.display = 'block';
    //     devicesAdded.set(index, 0);
    //     roomSetup.get(selectedRoom).push(deviceType);
    // } else {
    //     change_device_status(index, random_device_status(index));
    // }

    // update_status(selectedRoom);
}


function dis(event) {
    let deviceType = event.target.id;

    ipcRenderer.send(Channel.RENDERER_DEVICE_REMOVE, {selectedRoom, deviceType});

    // let index = selectedRoom + ':' + deviceType;
    // if (devicesAdded.has(index)) {
    //     document.getElementById(index).style.display = 'none';
    //     devicesAdded.delete(index);

    //     let idx = roomSetup.get(selectedRoom).indexOf(deviceType);
    //     if (idx > -1) {
    //         roomSetup.get(selectedRoom).splice(idx, 1);
    //     }

    //     update_status(selectedRoom);
    // }
}


function setButtonListener() {
    $('#random').click(() => {
        // button clicked for random event and action
        // to be replaced
    });
    
    $('#save').click(() => {
        // button clicked for pick sava file path
        // to be removed
    });
    
    $('.room-selection').click((event) => {
        // get id and show aviable list.
        selectedRoom = event.target.id;
        // console.log(event.target.id);
        let content = "";

        document.getElementById('selected-room').innerHTML = room[selectedRoom].name;
        document.getElementById("devices-list").innerHTML = "";
        for (let each of room[selectedRoom].usableDevices) {
            let li = document.createElement("li");

            let input_add = document.createElement("button");
            input_add.setAttribute("class", "device-selection opt-btn add-btn");
            input_add.setAttribute("id", each);
            input_add.addEventListener("click", out);

            let input_remove = document.createElement("button");
            input_remove.setAttribute("class", "device-selection opt-btn remove-btn");
            input_remove.setAttribute("id", each);
            input_remove.addEventListener("click", dis);

            let img = document.createElement("img");
            img.setAttribute("src", device[each].img);
            img.setAttribute("width", "35px");
            img.setAttribute("height", "35px");

            let name = document.createElement("strong");
            name.innerHTML = device[each].name;

            li.appendChild(input_add);
            li.appendChild(input_remove);
            li.appendChild(img);
            li.appendChild(name);
            $("#devices-list").append(li);

        }
    });
}


function init() {
    document.getElementById('selected-room').innerHTML = '未选择';
    
    for (let each in room) {
        roomSetup.set(each, new Array());
        let obj = room[each];
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
}

$(document).ready(() => {
    init();
    setButtonListener();
});