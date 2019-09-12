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
// import  from '../../node_modules/antd/es/popover'
var antd_1 = require("antd");
// import AddIcon from './add.svg';
require("antd/es/popover/style");
require("antd/es/switch/style");
require("antd/es/button/style");
require("antd/es/notification/style");
var PanelWithSwitch = /** @class */ (function (_super) {
    __extends(PanelWithSwitch, _super);
    function PanelWithSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isActivated: false };
        return _this;
    }
    PanelWithSwitch.prototype.switchChangeHandler = function (checked, event) {
        // const currentStatus = this.state.isActivated;
        if (this.props.onStatusChanged(checked)) {
            this.setState({ isActivated: checked });
        }
        else {
            antd_1.notification.open({
                message: "Not now!",
                description: "The magic value is no more than 50.",
                duration: 2
            });
        }
    };
    PanelWithSwitch.prototype.makePopoverContent = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(antd_1.Switch, { checked: this.state.isActivated, checkedChildren: "\u5F00", unCheckedChildren: "\u5173", onChange: function (c, e) { _this.switchChangeHandler(c, e); } })));
    };
    PanelWithSwitch.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(antd_1.Popover, { autoAdjustOverflow: true, arrowPointAtCenter: true, content: this.makePopoverContent(), trigger: "click", title: this.props.position },
                React.createElement("img", { src: "./add.svg" }))));
    };
    return PanelWithSwitch;
}(React.Component));
exports.default = PanelWithSwitch;
//# sourceMappingURL=panel-with-switch.js.map