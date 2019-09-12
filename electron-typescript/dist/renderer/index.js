/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/layout1/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron/index.js":
/*!****************************************!*\
  !*** ./node_modules/electron/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")

var pathFile = path.join(__dirname, 'path.txt')

function getElectronPath () {
  if (fs.existsSync(pathFile)) {
    var executablePath = fs.readFileSync(pathFile, 'utf-8')
    if (process.env.ELECTRON_OVERRIDE_DIST_PATH) {
      return path.join(process.env.ELECTRON_OVERRIDE_DIST_PATH, executablePath)
    }
    return path.join(__dirname, 'dist', executablePath)
  } else {
    throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again')
  }
}

module.exports = getElectronPath()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/config/house-detail.ts":
/*!************************************!*\
  !*** ./src/config/house-detail.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var HouseDetail = /** @class */ (function () {
    function HouseDetail() {
    }
    HouseDetail.imgPath = path.join(__dirname, "../../app/img/");
    HouseDetail.device = {
        'bulb': {
            'name': '灯泡',
            'type': 'device',
            'img': undefined,
            'allStatus': ['关', '开']
        },
        'aerograph': {
            'name': '气象仪',
            'type': 'sensor',
            'img': HouseDetail.imgPath + 'aerograph.png',
            'allStatus': ['晴', '阴', '雨'],
        },
        'ac': {
            'name': '空调',
            'type': 'device',
            'img': HouseDetail.imgPath + 'ac.png',
            'allStatus': ['关闭', '制冷', '制热'],
        },
        'action': {
            'name': '动作检测器',
            'type': 'sensor',
            'img': HouseDetail.imgPath + 'motion.png',
            'allStatus': ['无人', '有人'],
        },
        'temp': {
            'name': '温度计',
            'type': 'sensor',
            'img': HouseDetail.imgPath + 'temp.png',
            'allStatus': ['正常', '低温', '高温'],
        },
        'door': {
            'name': '智能门',
            'type': 'device',
            'img': HouseDetail.imgPath + 'door.png',
            'allStatus': ['关闭', '打开'],
        },
        'window': {
            'name': '窗户',
            'type': 'device',
            'img': HouseDetail.imgPath + 'window.png',
            'allStatus': ['关闭', '打开'],
        },
        'waterleaker': {
            'name': '漏水检测器',
            'type': 'sensor',
            'img': HouseDetail.imgPath + 'waterleaker.png',
            'allStatus': ['正常', '漏水'],
        },
        'coffeemac': {
            'name': '咖啡机',
            'type': 'device',
            'img': HouseDetail.imgPath + 'coffee_machine.png',
            'allStatus': ['关闭', '运行'],
        },
        'smoke': {
            'name': '烟雾报警器',
            'type': 'sensor',
            'img': HouseDetail.imgPath + 'smoke.png',
            'allStatus': ['正常', '有烟'],
        }
    };
    HouseDetail.room = {
        'parlour': {
            'name': '客厅',
            'usableDevices': ['ac', 'temp', 'action', 'smoke', 'door'],
        },
        'bedroom1': {
            'name': '次卧（左）',
            'usableDevices': ['window', 'ac', 'temp'],
        },
        'bedroom2': {
            'name': '主卧',
            'usableDevices': ['window', 'ac', 'temp'],
        },
        'bedroom3': {
            'name': '次卧（下）',
            'usableDevices': ['ac', 'temp'],
        },
        'kitchen': {
            'name': '厨房',
            'usableDevices': ['smoke', 'coffeemac'],
        },
        'wc': {
            'name': '厕所',
            'usableDevices': ['waterleaker']
        },
        'balcony': {
            'name': '阳台',
            'usableDevices': ['aerograph']
        },
    };
    return HouseDetail;
}());
exports.default = HouseDetail;


/***/ }),

/***/ "./src/config/ipc-channel.ts":
/*!***********************************!*\
  !*** ./src/config/ipc-channel.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Channel = /** @class */ (function () {
    function Channel() {
    }
    Channel.RENDERER_DEVICE_ADD = "device-add-btn-clicked";
    Channel.RENDERER_DEVICE_REMOVE = "device-remove-btn-clicked";
    Channel.RENDERER_DEVICE_UPDATE = "device-status-updated";
    Channel.RENDERER_POSITION_CHANGED = "position-changed";
    return Channel;
}());
exports.default = Channel;


/***/ }),

/***/ "./src/renderer/layout1/index.tsx":
/*!****************************************!*\
  !*** ./src/renderer/layout1/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// const path = require('path');
// const {ipcRenderer} = require('electron');
// const HouseDetail = require(path.join(__dirname, "js/house-detail.js"));
// const IPCChannel = require(path.join(__dirname, "../src/configure/channel.js"));
// const room = HouseDetail.room;
// const device = HouseDetail.device;
var electron_1 = __webpack_require__(/*! electron */ "./node_modules/electron/index.js");
var ipc_channel_1 = __webpack_require__(/*! ../../config/ipc-channel */ "./src/config/ipc-channel.ts");
var house_detail_1 = __webpack_require__(/*! ../../config/house-detail */ "./src/config/house-detail.ts");
var room = house_detail_1.default.room;
var device = house_detail_1.default.device;
var currentPosition;
var touchedDevice;
var selectedRoom;
var roomSetup = new Map();
var devicesAdded = new Map();
electron_1.ipcRenderer.on(ipc_channel_1.default.RENDERER_DEVICE_UPDATE, statusUpdate);
/**
 *
 * @param {*} theRoom
 * @param {*} deviceType
 * @param {*} tabID REMEMBER THIS ID NOT EQUAL TO THE DEVICE ID. Better use a new identifier (e.g. `tab-xxx`).
 * @param {*} status New device status. Only useful in device state update.
 * @param {*} tabAction ["update", "delete"]
 */
function updateUITable(theRoom, deviceType, tabID, status, tabAction) {
    var tabRow = document.createElement("tr");
    var tabDivDevice = document.createElement("td");
    var tabDivStatus = document.createElement("td");
    tabDivDevice.innerHTML = device[deviceType].name;
    tabDivStatus.innerHTML = device[deviceType].allStatus[status];
    tabRow.setAttribute("id", tabID);
    tabRow.appendChild(tabDivDevice);
    tabRow.appendChild(tabDivStatus);
    if (tabAction === "update") {
        // The device is firstly added if the element cannot be found.
        var elem = $("#" + tabID)[0];
        if (elem === undefined) {
            $("#tab-" + theRoom).append(tabRow);
        }
        else {
            elem.replaceWith(tabRow);
        }
    }
    else {
        // Delete device
        // We assume we can find a row in table if the device has added before.
        $("#" + tabID)[0].remove();
    }
}
function statusUpdate(event, args) {
    switch (args.opt) {
        case "update":
            document.getElementById(args.device.id).style.display = 'block';
            roomSetup.get(args.device.position).push(args.device.type);
            updateUITable(args.device.position, args.device.type, "tab-" + args.device.id, args.device.status, "update");
            break;
        case "delete":
            document.getElementById(args.device.id).style.display = 'none';
            var index = roomSetup.get(args.device.position).indexOf(args.device.id);
            if (index !== -1) {
                roomSetup.get(args.device.position).splice(index, 1);
            }
            updateUITable(args.device.position, args.device.type, "tab-" + args.device.id, args.device.status, "delete");
        case "invalid":
            break;
        default:
            break;
    }
}
function out(event) {
    var deviceType = event.target.id;
    electron_1.ipcRenderer.send(ipc_channel_1.default.RENDERER_DEVICE_ADD, { selectedRoom: selectedRoom, deviceType: deviceType });
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
    var deviceType = event.target.id;
    electron_1.ipcRenderer.send(ipc_channel_1.default.RENDERER_DEVICE_REMOVE, { selectedRoom: selectedRoom, deviceType: deviceType });
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
    // $('.clickable-device-icon').click(function(e) {
    //     if ($("body").has(`#device-action-popup-${e.target.id}`).length === 0) {
    //         // let htmlContent = `
    //         // <div id=device-action-popup-${e.target.id} class="text-center">
    //         //     <div class="btn-group btn-toggle text-center">
    //         //         <button class="btn btn-sm btn-info">On</button>
    //         //         <button class="btn btn-sm btn-primary active">Off</button>
    //         //     </div>
    //         // </div>`;
    //         let htmlContent = `
    //         <div id=device-action-popup-${e.target.id} class="text-center">
    //             <input id="toggle-demo" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
    //         </div>`;
    //         $(this).popover({
    //             title: e.target.id,
    //             trigger: "mutual",
    //             sanitize: false,
    //             placement: "top",
    //             animation: true,
    //             content: htmlContent,
    //             html: true
    //         });
    //         $('#toggle-demo').bootstrapToggle()
    //         $(this).popover("show");
    //     } else {
    //         $(this).popover("hide");
    //     }
    // });
    $('body').on("click", function () {
    });
    // $('.clickable-device-icon').click((event) => {
    /** Compromise to legacy code.
     *  Here, we assume that each movement will activate a device.
    */
    // let template = document.querySelector("#popper-template");
    // let popperNode = document.importNode(template.content.querySelector("div"), true);
    // let popper = new Popper(document.getElementById(event.target.id), popperNode, {
    //     placement: "top"
    // });
    // document.querySelector("#container").appendChild(popperNode);
    //     [currentPosition, touchedDevice] = event.target.id.split("-");
    //     ipcRenderer.send(Channel.RENDERER_POSITION_CHANGED, {position: currentPosition, device: touchedDevice});
    // });
    $('#save').click(function () {
        // Button clicked for pick sava file path to be removed
    });
    $('.room-selection').click(function (event) {
        // Get id and show available list.
        selectedRoom = event.target.id;
        // Console.log(event.target.id);
        var content = "";
        document.getElementById('selected-room').innerHTML = room[selectedRoom].name;
        document.getElementById("devices-list").innerHTML = "";
        for (var _i = 0, _a = room[selectedRoom].usableDevices; _i < _a.length; _i++) {
            var each = _a[_i];
            var li = document.createElement("li");
            var input_add = document.createElement("button");
            input_add.setAttribute("class", "device-selection opt-btn add-btn");
            input_add.setAttribute("id", each);
            input_add.addEventListener("click", out);
            var input_remove = document.createElement("button");
            input_remove.setAttribute("class", "device-selection opt-btn remove-btn");
            input_remove.setAttribute("id", each);
            input_remove.addEventListener("click", dis);
            var img = document.createElement("img");
            img.setAttribute("src", device[each].img);
            img.setAttribute("width", "35px");
            img.setAttribute("height", "35px");
            var name_1 = document.createElement("strong");
            name_1.innerHTML = device[each].name;
            li.appendChild(input_add);
            li.appendChild(input_remove);
            li.appendChild(img);
            li.appendChild(name_1);
            $("#devices-list")[0].append(li);
        }
    });
}
function init() {
    document.getElementById('selected-room').innerHTML = '未选择';
    for (var each in room) {
        roomSetup.set(each, new Array());
        var obj = room[each];
        $('#status').append("<p class='flip'>" + obj.name + "</p>" +
            "<div class='panel'>" +
            "<table class='tab_status' id='tab-" + each + "'>" +
            "</table>" +
            "</div>");
    }
    $(".clickable-device-icon").attr("data-toggle", "popover");
    $("p.flip").click(function () {
        $(".panel").slideToggle("fast");
    });
}
$(document).ready(function () {
    init();
    setButtonListener();
});


/***/ })

/******/ });
//# sourceMappingURL=index.js.map