(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = class Walker {
    constructor(graphJSON) {
        this.graph = graphJSON;
    }

    set startPoint(sp) {
        console.log("dome");
        this.lastPoint = sp;
        this.curPoint = sp;
    }

    walk() {
        if (this.curPoint === undefined) {
            console.error("Not sepcify start point");
            return NaN;
        }

        let neighbor = this.graph[this.curPoint];
        let next = Math.floor(Math.random() * neighbor.length);
        this.lastPoint = this.curPoint;
        this.curPoint = neighbor[next];
        return {
            cp: this.curPoint,
            lp: this.lastPoint
        };
    }
}
},{}],2:[function(require,module,exports){
module.exports={
    "room1": ["room2", "room3", "room4"],
    "room2": ["room1"],
    "room3": ["room1", "room5", "room6"],
    "room4": ["room1", "room7", "room8"],
    "room5": ["room3"],
    "room6": ["room3"],
    "room7": ["room4"],
    "room8": ["room4"]
}
},{}],3:[function(require,module,exports){
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
},{"../../com/Walker":1,"../config/house.json":2}]},{},[3]);
