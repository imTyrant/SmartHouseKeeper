"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue(queue) {
        this._queue = queue || [];
    }
    Queue.prototype.enqueue = function (item) {
        this._queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this._queue.shift();
    };
    Queue.prototype.clear = function () {
        this._queue = [];
    };
    Object.defineProperty(Queue.prototype, "count", {
        get: function () {
            return this._queue.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "front", {
        get: function () {
            return this._queue[0];
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
}());
exports.default = Queue;
//# sourceMappingURL=queue.js.map