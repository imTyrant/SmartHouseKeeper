"use strict"

const path = require('path');
const {ipcRenderer} = require('electron');

const HouseDetail = require(path.join(__dirname, "js/house-detail.js"));

const room = HouseDetail.room;
const device = HouseDetail.device;

let setButtonListener = () => {
    $('#random').click(() => {
        // button clicked for random event and action
        // to be replaced
    });
    
    $('#save').click(() => {
        // button clicked for pick sava file path
        // to be removed
    });
    
    $('.room-selection-btn').click((event) => {
        // get id and show aviable list.
        let selected_room = event.target.id;
        // console.log(event.target.id);
        let content = "";
        for (each in room[selected_room].usable_devices) {
            content +=
                "<li>" +
                "<input type='image' src='img/add.png' width='25' height='25' id=" + each + " onClick='out(this.id)' alt='添加'>" +
                "<input type='image' src='img/remove.png' width='25' height='25' id=" + each + " onClick='dis(this.id)' alt='去除'>" +
                "<img src=" + device[each].img + " width='35px' height='35px'><strong>" + device[each].name + "</strong>" +
                "</li>\n"
        }
    });
}


let init = () => {
    // document.getElementById("path").innerHTML = "<p><b>日志:</b> " + log_path + "</p>";
    // document.getElementById('selected_room').innerHTML = '未选择';
    // document.getElementById('times_of_try').innerHTML = try_times;
    let room_setup = new Map();
    for (let each in room) {
        room_setup.set(each, new Array());
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