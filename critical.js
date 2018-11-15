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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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

"use strict";
eval("// import { loadFontGroup } from './utils/load-font'\n//\n// const canela = [\n// \t{ family: 'Canela Web', weight: 300 },\n// \t{ family: 'Canela Web', weight: 700 },\n// ]\n//\n// const publico = [\n// \t{ family: 'Publico Text Web', weight: 400 },\n// \t{ family: 'Publico Text Web', weight: 700 },\n// ]\n//\n// const atlas = [\n// \t{ family: 'Atlas Grotesk Web', weight: 300 },\n// \t{ family: 'Atlas Grotesk Web', weight: 400 },\n// \t{ family: 'Atlas Grotesk Web', weight: 500 },\n// ]\n//\n// loadFontGroup(canela)\n// loadFontGroup(publico)\n// loadFontGroup(atlas)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY3JpdGljYWwuanM/ZTVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBsb2FkRm9udEdyb3VwIH0gZnJvbSAnLi91dGlscy9sb2FkLWZvbnQnXG4vL1xuLy8gY29uc3QgY2FuZWxhID0gW1xuLy8gXHR7IGZhbWlseTogJ0NhbmVsYSBXZWInLCB3ZWlnaHQ6IDMwMCB9LFxuLy8gXHR7IGZhbWlseTogJ0NhbmVsYSBXZWInLCB3ZWlnaHQ6IDcwMCB9LFxuLy8gXVxuLy9cbi8vIGNvbnN0IHB1YmxpY28gPSBbXG4vLyBcdHsgZmFtaWx5OiAnUHVibGljbyBUZXh0IFdlYicsIHdlaWdodDogNDAwIH0sXG4vLyBcdHsgZmFtaWx5OiAnUHVibGljbyBUZXh0IFdlYicsIHdlaWdodDogNzAwIH0sXG4vLyBdXG4vL1xuLy8gY29uc3QgYXRsYXMgPSBbXG4vLyBcdHsgZmFtaWx5OiAnQXRsYXMgR3JvdGVzayBXZWInLCB3ZWlnaHQ6IDMwMCB9LFxuLy8gXHR7IGZhbWlseTogJ0F0bGFzIEdyb3Rlc2sgV2ViJywgd2VpZ2h0OiA0MDAgfSxcbi8vIFx0eyBmYW1pbHk6ICdBdGxhcyBHcm90ZXNrIFdlYicsIHdlaWdodDogNTAwIH0sXG4vLyBdXG4vL1xuLy8gbG9hZEZvbnRHcm91cChjYW5lbGEpXG4vLyBsb2FkRm9udEdyb3VwKHB1YmxpY28pXG4vLyBsb2FkRm9udEdyb3VwKGF0bGFzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jcml0aWNhbC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);