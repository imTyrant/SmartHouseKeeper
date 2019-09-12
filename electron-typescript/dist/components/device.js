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
var React = require("react");
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device(props) {
        return _super.call(this, props) || this;
    }
    Device.prototype.onClickHandler = function (event) {
    };
    Device.prototype.render = function () {
        return (React.createElement("div", { className: ".clickable-device-img" },
            React.createElement("button", { onClick: this.onClickHandler }, "Device")));
    };
    return Device;
}(React.Component));
exports.default = Device;
//# sourceMappingURL=device.js.map