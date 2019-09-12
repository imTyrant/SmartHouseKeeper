"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var EventNotifier = /** @class */ (function (_super) {
    __extends(EventNotifier, _super);
    function EventNotifier() {
        return _super.call(this) || this;
    }
    EventNotifier.MOTION_SENSOR_ACTIVATE = "motion.active";
    EventNotifier.MOTION_SENSOR_INACTIVE = "motion.inactive";
    EventNotifier.MOTION_SENSOR_CHANGED = "motion";
    return EventNotifier;
}(electron_1.EventEmitter));
//# sourceMappingURL=event-notifier.js.map