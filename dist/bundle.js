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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("var greeter = __webpack_require__(1);\ngreeter.x = 2;\ngreeter.y = 3;\nconsole.log(greeter.add());\n\nvar add_c = new greeter.addClass();\nadd_c.x = 2;\nadd_c.y = 3;\nconsole.log(add_c.add())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBncmVldGVyID0gcmVxdWlyZSgnLi9ncmVldGVyLmpzJyk7XG5ncmVldGVyLnggPSAyO1xuZ3JlZXRlci55ID0gMztcbmNvbnNvbGUubG9nKGdyZWV0ZXIuYWRkKCkpO1xuXG52YXIgYWRkX2MgPSBuZXcgZ3JlZXRlci5hZGRDbGFzcygpO1xuYWRkX2MueCA9IDI7XG5hZGRfYy55ID0gMztcbmNvbnNvbGUubG9nKGFkZF9jLmFkZCgpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var x = 1;\nvar y = 1;\nvar add = function(){\n\treturn x+y;\n};\n\nvar add_c = function(){\n\tthis.x = 1;\n\tthis.y = 1;\n\tthis.add = function(){\n\t\treturn (this.x+this.y);\n\t}\n}\n\nmodule.exports.x = x;\nmodule.exports.y = y;\nmodule.exports.add = add;\n\nmodule.exports.addClass = add_c;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmVldGVyLmpzPzVhMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB4ID0gMTtcbnZhciB5ID0gMTtcbnZhciBhZGQgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4geCt5O1xufTtcblxudmFyIGFkZF9jID0gZnVuY3Rpb24oKXtcblx0dGhpcy54ID0gMTtcblx0dGhpcy55ID0gMTtcblx0dGhpcy5hZGQgPSBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAodGhpcy54K3RoaXMueSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMueCA9IHg7XG5tb2R1bGUuZXhwb3J0cy55ID0geTtcbm1vZHVsZS5leHBvcnRzLmFkZCA9IGFkZDtcblxubW9kdWxlLmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRfYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2dyZWV0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);