"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Walker = /** @class */ (function () {
    function Walker(graphJSON, pathArray) {
        this.graph = graphJSON;
        this.path = pathArray;
        this.stepCounter = 0;
        if (pathArray !== undefined) {
            this.startPoint = this.path[0];
        }
    }
    Object.defineProperty(Walker.prototype, "startPoint", {
        set: function (sp) {
            this.lastPoint = sp;
            this.curPoint = sp;
        },
        enumerable: true,
        configurable: true
    });
    Walker.prototype.walk = function () {
        if (this.curPoint === undefined) {
            console.error("Not specify start point");
            return NaN;
        }
        this.stepCounter += 1;
        if (this.path !== undefined && this.stepCounter < this.path.length) {
            this.lastPoint = this.curPoint;
            this.curPoint = this.path[this.stepCounter];
            return {
                cp: this.curPoint,
                lp: this.lastPoint
            };
        }
        var neighbor = this.graph[this.curPoint];
        var next = Math.floor(Math.random() * neighbor.length);
        this.lastPoint = this.curPoint;
        this.curPoint = neighbor[next];
        return {
            cp: this.curPoint,
            lp: this.lastPoint
        };
    };
    return Walker;
}());
exports.default = Walker;
//# sourceMappingURL=walker.js.map