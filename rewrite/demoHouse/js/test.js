const Walker = require('../../com/Walker');
const graph = require('../config/house.json');
let walker = new Walker(graph);

init = function(){
    walker.startPoint = "room1";
    document.getElementById("room1").style.backgroundColor = "green";
}

go = function(){
    let path = walker.walk();
    document.getElementById(path.lp).style.backgroundColor = "cadetblue";
    document.getElementById(path.cp).style.backgroundColor = "green"
}

window.onload = init;