"use strict"

// const path = require('path');
// const {ipcRenderer} = require('electron');

// const HouseDetail = require(path.join(__dirname, "js/house-detail.js"));
// const IPCChannel = require(path.join(__dirname, "../src/configure/channel.js"));

// const room = HouseDetail.room;
// const device = HouseDetail.device;

let currentPosition;
let touchedDevice;
let selectedRoom;

let roomSetup = new Map();
let devicesAdded = new Map();


ipcRenderer.on(Channel.RENDERER_DEVICE_UPDATE, statusUpdate);

/**
 * 
 * @param {*} theRoom 
 * @param {*} deviceType 
 * @param {*} tabID REMEMBER THIS ID NOT EQUAL TO THE DEVICE ID. Better use a new identifier (e.g. `tab-xxx`).
 * @param {*} status New device status. Only useful in device state update.
 * @param {*} tabAction ["update", "delete"]
 */
function updateUITable(theRoom, deviceType, tabID, status, tabAction) {
    let tabRow = document.createElement("tr");
    let tabDivDeivce = document.createElement("td");
    let tabDivStatus = document.createElement("td");

    tabDivDeivce.innerHTML = device[deviceType].name;
    tabDivStatus.innerHTML = device[deviceType].allStatus[status];

    tabRow.setAttribute("id", tabID);
    tabRow.appendChild(tabDivDeivce);
    tabRow.appendChild(tabDivStatus);
    
    if (tabAction === "update") {
        // The device is firstly added if the element cannot be found.
        let elem = $(`#${tabID}`)[0];
        if (elem === undefined) {
            $(`#tab-${theRoom}`).append(tabRow);
        } else {
            elem.replaceWith(tabRow);
        }
    } else {
        // Delete device
        // We assume we can find a row in table if the device has added before.
        $(`#${tabID}`)[0].remove();
    }
}

function statusUpdate(event, args) {
    switch (args.opt) {
        case "update":
            document.getElementById(args.device.id).style.display = 'block';
            roomSetup.get(args.device.position).push(args.device.type);
            updateUITable(args.device.position, args.device.type, `tab-${args.device.id}`, args.device.status, "update");
            break;
        case "delete":
            document.getElementById(args.device.id).style.display = 'none';
            let index = roomSetup.get(args.device.position).indexOf(args.device.id);
            if (index !== -1) {
                roomSetup.get(args.device.position).splice(index, 1);
            }
            updateUITable(args.device.position, args.device.type, `tab-${args.device.id}`, args.device.status, "delete");
        case "invald":
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
    $('.clickable-device-icon').click((event) => {
        /** Compromise to legacy code.
         *  Here, we assume that each movement will activate a device.
        */
        [currentPosition, touchedDevice] = event.target.id.split("-");
        ipcRenderer.send(Channel.RENDERER_POSITION_CHANGED, {currentPosition, touchedDevice});
    });

    $('#random').click(() => {
        // Button clicked for random event and action to be replaced
        ipcRenderer.send(Channel.XXX, {})
    });
    
    $('#save').click(() => {
        // Button clicked for pick sava file path to be removed
    });
    
    $('.room-selection').click((event) => {
        // Get id and show aviable list.
        selectedRoom = event.target.id;
        // Console.log(event.target.id);
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
            $("#devices-list")[0].append(li);
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
            "<table class='tab_status' id='tab-" + each + "'>" +
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