// const Walker = require('../../js/com/Walker');
// const graph = require('../config/house.json');

import { Walker } from "./js/Walker.js";
import {default as graph} from "./config/house.js";

// const graph = {
//     "room1": ["room2", "room3", "room4"],
//     "room2": ["room1"],
//     "room3": ["room1", "room5", "room6"],
//     "room4": ["room1", "room7", "room8"],
//     "room5": ["room3"],
//     "room6": ["room3"],
//     "room7": ["room4"],
//     "room8": ["room4"]
// };
let walker = new Walker(graph);

let init = function(){
    walker.startPoint = "room1";
    document.getElementById("room1").style.backgroundColor = "green";
}

let go = function(){
    let path = walker.walk();
    document.getElementById(path.lp).style.backgroundColor = "cadetblue";
    document.getElementById(path.cp).style.backgroundColor = "green"
}

window.onload = init;
window.go = go;