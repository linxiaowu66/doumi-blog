(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	***REMOVED***
***REMOVED***)(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {***REMOVED***
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		***REMOVED***
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {***REMOVED***
/******/ 		***REMOVED***
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	***REMOVED***
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter ***REMOVED***
/******/ 		***REMOVED***
/******/ 	***REMOVED***
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' ***REMOVED***
/******/ 		***REMOVED***
/******/ 		Object.defineProperty(exports, '__esModule', { value: true ***REMOVED***
/******/ 	***REMOVED***
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
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value ***REMOVED***
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; ***REMOVED***.bind(null, key));
/******/ 		return ns;
/******/ 	***REMOVED***
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; ***REMOVED*** :
/******/ 			function getModuleExports() { return module; ***REMOVED***
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	***REMOVED***
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); ***REMOVED***
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@malagu/web/lib/node/application/dev-application-entry.js");
/******/ ***REMOVED***)
/************************************************************************/
/******/ ({

/***/ "./node_modules/@malagu/core/lib/common/annotation/autowired.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/autowired.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var AutowiredOption;
(function (AutowiredOption) {
    function is(options) {
        return options && (options.id !== undefined || options.detached !== undefined);
  ***REMOVED***
    AutowiredOption.is = is;
***REMOVED***)(AutowiredOption = exports.AutowiredOption || (exports.AutowiredOption = {***REMOVED***));
exports.Autowired = function (target, targetKey, index) {
    var option = getAutowiredOption(target, targetKey, index);
    if (targetKey === undefined && index === undefined) {
        return function (t, tk, i) {
            applyAutowiredDecorator(option, t, tk, i);
        ***REMOVED***
  ***REMOVED***
    else {
        applyAutowiredDecorator(option, target, targetKey, index);
  ***REMOVED***
***REMOVED***
function getAutowiredOption(target, targetKey, index) {
    var option = {***REMOVED***
    if (targetKey === undefined) {
        if (AutowiredOption.is(target)) {
            option = __assign({***REMOVED***, target);
      ***REMOVED***
        else if (target) {
            option = { id: target ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    return option;
***REMOVED***
exports.getAutowiredOption = getAutowiredOption;
function applyAutowiredDecorator(option, target, targetKey, index, doInject, doGetValue) {
    if (doInject === void 0) { doInject = function (id, isMulti, t, k, i) {
        if (isMulti) {
            inversify_1.multiInject(id)(t, k, i);
      ***REMOVED***
        else {
            inversify_1.inject(id)(target, targetKey, index);
      ***REMOVED***
    ***REMOVED*** ***REMOVED***
    if (doGetValue === void 0) { doGetValue = function (id, isMulti, container, t, property) {
        if (isMulti) {
            return container.getAll(id);
      ***REMOVED***
        else {
            return container.get(id);
      ***REMOVED***
    ***REMOVED*** ***REMOVED***
    var type;
    if (index !== undefined) {
        type = Reflect.getMetadata('design:paramtypes', target, targetKey)[index];
  ***REMOVED***
    else {
        type = Reflect.getMetadata('design:type', target, targetKey);
  ***REMOVED***
    var isMlt = type === Array;
    var defaultAutowiredOption = {
        id: type,
        detached: false
    ***REMOVED***
    var opt = __assign(__assign({***REMOVED***, defaultAutowiredOption), option);
    if (opt.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
      ***REMOVED***
        createAutowiredProperty(opt, isMlt, doGetValue, target, targetKey);
    ***REMOVED***
  ***REMOVED***
    else {
        doInject(opt.id, isMlt, target, targetKey, index);
  ***REMOVED***
***REMOVED***
exports.applyAutowiredDecorator = applyAutowiredDecorator;
function createAutowiredProperty(option, isMulti, doGetValue, target, property) {
    var value;
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            if (value !== undefined) {
                return value;
          ***REMOVED***
            var container = container_1.ContainerProvider.provide();
            var id = option.id;
            value = doGetValue(id, isMulti, container, target, property);
            return value;
      ***REMOVED***
    ***REMOVED***
***REMOVED***
exports.createAutowiredProperty = createAutowiredProperty;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/annotation/component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var aop_protocol_1 = __webpack_require__(/*! ../aop/aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var Scope;
(function (Scope) {
    Scope[Scope["Request"] = 0] = "Request";
    Scope[Scope["Singleton"] = 1] = "Singleton";
    Scope[Scope["Transient"] = 2] = "Transient";
***REMOVED***)(Scope = exports.Scope || (exports.Scope = {***REMOVED***));
var ComponentOption;
(function (ComponentOption) {
    function is(options) {
        return options && (options.id !== undefined || options.scope !== undefined ||
            options.rebind !== undefined || options.proxy !== undefined);
  ***REMOVED***
    ComponentOption.is = is;
***REMOVED***)(ComponentOption = exports.ComponentOption || (exports.ComponentOption = {***REMOVED***));
exports.Component = function (idOrOption) {
    var option = getComponentOption(idOrOption);
    return function (t) {
        applyComponentDecorator(option, t);
    ***REMOVED***
***REMOVED***
function getComponentOption(idOrOption) {
    var option = {***REMOVED***
    if (ComponentOption.is(idOrOption)) {
        option = __assign({***REMOVED***, idOrOption);
  ***REMOVED***
    else if (idOrOption) {
        option = { id: idOrOption ***REMOVED***
  ***REMOVED***
    return option;
***REMOVED***
exports.getComponentOption = getComponentOption;
function doProxy(context, t) {
    var _this = this;
    var proxy = new Proxy(t, {
        get: function (target, method, receiver) {
            var func = target[method];
            if (typeof func === 'function') {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                  ***REMOVED***
                    return __awaiter(_this, void 0, void 0, function () {
                        var beforeAdvices, beforeAdvices_1, beforeAdvices_1_1, advice, e_1_1, returnValue, afterReturningAdvices, afterReturningAdvices_1, afterReturningAdvices_1_1, advice, e_2_1, error_1, afterThrowsAdvices, afterThrowsAdvices_1, afterThrowsAdvices_1_1, advice, e_3_1;
                        var e_1, _a, e_2, _b, e_3, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 18, , 27]);
                                    beforeAdvices = context.container.getAll(aop_protocol_1.MethodBeforeAdvice) || [];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 6, 7, 8]);
                                    beforeAdvices_1 = __values(beforeAdvices), beforeAdvices_1_1 = beforeAdvices_1.next();
                                    _d.label = 2;
                                case 2:
                                    if (!!beforeAdvices_1_1.done) return [3 /*break*/, 5];
                                    advice = beforeAdvices_1_1.value;
                                    return [4 /*yield*/, advice.before(method, args, t)];
                                case 3:
                                    _d.sent();
                                    _d.label = 4;
                                case 4:
                                    beforeAdvices_1_1 = beforeAdvices_1.next();
                                    return [3 /*break*/, 2];
                                case 5: return [3 /*break*/, 8];
                                case 6:
                                    e_1_1 = _d.sent();
                                    e_1 = { error: e_1_1 ***REMOVED***
                                    return [3 /*break*/, 8];
                                case 7:
                                  ***REMOVED***
                                        if (beforeAdvices_1_1 && !beforeAdvices_1_1.done && (_a = beforeAdvices_1.return)) _a.call(beforeAdvices_1);
                                  ***REMOVED***
                                    finally { if (e_1) throw e_1.error; ***REMOVED***
                                    return [7 /*endfinally*/];
                                case 8: return [4 /*yield*/, func.apply(target, args)];
                                case 9:
                                    returnValue = _d.sent();
                                    afterReturningAdvices = context.container.getAll(aop_protocol_1.AfterReturningAdvice) || [];
                                    _d.label = 10;
                                case 10:
                                    _d.trys.push([10, 15, 16, 17]);
                                    afterReturningAdvices_1 = __values(afterReturningAdvices), afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                    _d.label = 11;
                                case 11:
                                    if (!!afterReturningAdvices_1_1.done) return [3 /*break*/, 14];
                                    advice = afterReturningAdvices_1_1.value;
                                    return [4 /*yield*/, advice.afterReturning(returnValue, method, args, t)];
                                case 12:
                                    _d.sent();
                                    _d.label = 13;
                                case 13:
                                    afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                    return [3 /*break*/, 11];
                                case 14: return [3 /*break*/, 17];
                                case 15:
                                    e_2_1 = _d.sent();
                                    e_2 = { error: e_2_1 ***REMOVED***
                                    return [3 /*break*/, 17];
                                case 16:
                                  ***REMOVED***
                                        if (afterReturningAdvices_1_1 && !afterReturningAdvices_1_1.done && (_b = afterReturningAdvices_1.return)) _b.call(afterReturningAdvices_1);
                                  ***REMOVED***
                                    finally { if (e_2) throw e_2.error; ***REMOVED***
                                    return [7 /*endfinally*/];
                                case 17: return [2 /*return*/, returnValue];
                                case 18:
                                    error_1 = _d.sent();
                                    afterThrowsAdvices = context.container.getAll(aop_protocol_1.AfterThrowsAdvice) || [];
                                    _d.label = 19;
                                case 19:
                                    _d.trys.push([19, 24, 25, 26]);
                                    afterThrowsAdvices_1 = __values(afterThrowsAdvices), afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                    _d.label = 20;
                                case 20:
                                    if (!!afterThrowsAdvices_1_1.done) return [3 /*break*/, 23];
                                    advice = afterThrowsAdvices_1_1.value;
                                    return [4 /*yield*/, advice.afterThrows(error_1, method, args, t)];
                                case 21:
                                    _d.sent();
                                    _d.label = 22;
                                case 22:
                                    afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                    return [3 /*break*/, 20];
                                case 23: return [3 /*break*/, 26];
                                case 24:
                                    e_3_1 = _d.sent();
                                    e_3 = { error: e_3_1 ***REMOVED***
                                    return [3 /*break*/, 26];
                                case 25:
                                  ***REMOVED***
                                        if (afterThrowsAdvices_1_1 && !afterThrowsAdvices_1_1.done && (_c = afterThrowsAdvices_1.return)) _c.call(afterThrowsAdvices_1);
                                  ***REMOVED***
                                    finally { if (e_3) throw e_3.error; ***REMOVED***
                                    return [7 /*endfinally*/];
                                case 26: throw error_1;
                                case 27: return [2 /*return*/];
                          ***REMOVED***
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
          ***REMOVED***
            return func;
      ***REMOVED***
    ***REMOVED***
    proxy.target = t;
    t.proxyTarget = proxy;
    return proxy;
***REMOVED***
function applyComponentDecorator(option, target) {
    var e_4, _a;
    var defaultComponentOption = {
        id: target,
        scope: Scope.Singleton,
        rebind: false,
        proxy: false
    ***REMOVED***
    var opt = __assign(__assign({***REMOVED***, defaultComponentOption), option);
    var ids = Array.isArray(opt.id) ? opt.id : opt.id !== target ? [opt.id, target] : [opt.id];
    var id = ids[0];
    var p = inversify_binding_decorators_1.fluentProvide(id);
    var whenOn;
    if (opt.scope === Scope.Singleton) {
        whenOn = p.inSingletonScope();
  ***REMOVED***
    else if (opt.scope === Scope.Transient) {
        whenOn = p.inTransientScope();
  ***REMOVED***
    if (opt.proxy) {
        whenOn.onActivation(doProxy).done(true)(target);
  ***REMOVED***
    else {
        whenOn.done(true)(target);
  ***REMOVED***
    ids.shift();
    if (ids.length > 0) {
        Reflect.defineMetadata(constants_1.METADATA_KEY.toService, id, target);
  ***REMOVED***
  ***REMOVED***
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var sevice = ids_1_1.value;
            inversify_binding_decorators_1.fluentProvide(sevice).done(true)(target);
      ***REMOVED***
  ***REMOVED***
    catch (e_4_1) { e_4 = { error: e_4_1 ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
      ***REMOVED***
        finally { if (e_4) throw e_4.error; ***REMOVED***
  ***REMOVED***
    if (opt.rebind) {
        var metadata = true;
        Reflect.defineMetadata(constants_1.METADATA_KEY.rebind, metadata, target);
  ***REMOVED***
***REMOVED***
exports.applyComponentDecorator = applyComponentDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/annotation/constant.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/constant.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
exports.Constant = function (id, constantValue, rebind) {
    if (rebind === void 0) { rebind = false; ***REMOVED***
    return function (t) {
        applyConstantDecorator({ id: id, constantValue: constantValue, rebind: rebind ***REMOVED***, t);
    ***REMOVED***
***REMOVED***
function applyConstantDecorator(option, target) {
    var previousMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
    var newMetadata = [option].concat(previousMetadata);
    Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, newMetadata, Reflect);
***REMOVED***
exports.applyConstantDecorator = applyConstantDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/annotation/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./autowired */ "./node_modules/@malagu/core/lib/common/annotation/autowired.js"));
__export(__webpack_require__(/*! ./component */ "./node_modules/@malagu/core/lib/common/annotation/component.js"));
__export(__webpack_require__(/*! ./value */ "./node_modules/@malagu/core/lib/common/annotation/value.js"));
__export(__webpack_require__(/*! ./optional */ "./node_modules/@malagu/core/lib/common/annotation/optional.js"));
__export(__webpack_require__(/*! ./constant */ "./node_modules/@malagu/core/lib/common/annotation/constant.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/annotation/optional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/optional.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Optional = function (target, targetKey, index) {
    if (target === undefined) {
        return inversify_1.optional();
  ***REMOVED***
    else {
        inversify_1.optional()(target, targetKey, index);
  ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/annotation/value.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/value.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
exports.VALUE = Symbol('Value');
var ValueOption;
(function (ValueOption) {
    function is(option) {
        return option && (option.el !== undefined || option.detached !== undefined);
  ***REMOVED***
    ValueOption.is = is;
***REMOVED***)(ValueOption = exports.ValueOption || (exports.ValueOption = {***REMOVED***));
exports.Value = function (target, targetKey, index) {
    var option = getValueOption(target, targetKey, index);
    if (targetKey === undefined && index === undefined) {
        return function (t, tk, i) {
            applyValueDecorator(option, t, tk, i);
        ***REMOVED***
  ***REMOVED***
    else {
        applyValueDecorator(option, target, targetKey, index);
  ***REMOVED***
***REMOVED***
function getValueOption(target, targetKey, index) {
    var option = {***REMOVED***
    if (targetKey === undefined) {
        if (ValueOption.is(target)) {
            option = __assign({***REMOVED***, target);
      ***REMOVED***
        else if (target) {
            option = { el: target ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    return option;
***REMOVED***
exports.getValueOption = getValueOption;
function applyValueDecorator(option, target, targetKey, index) {
    var defaultAutowiredOption = {
        el: targetKey,
        detached: false
    ***REMOVED***
    var opt = __assign(__assign({***REMOVED***, defaultAutowiredOption), option);
    if (opt.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
      ***REMOVED***
        createValueProperty(opt, target, targetKey);
    ***REMOVED***
  ***REMOVED***
    var el = opt.el;
    inversify_1.inject(exports.VALUE)(target, targetKey, index);
    inversify_1.named(el)(target, targetKey, index);
***REMOVED***
exports.applyValueDecorator = applyValueDecorator;
function createValueProperty(option, target, property) {
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            var container = container_1.ContainerProvider.provide();
            var el = option.el;
            return container.getNamed(exports.VALUE, el);
      ***REMOVED***
    ***REMOVED***
***REMOVED***
exports.createValueProperty = createValueProperty;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/aop-protocol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.MethodBeforeAdvice = Symbol('MethodBeforeAdvice');
exports.AfterReturningAdvice = Symbol('AfterReturningAdvice');
exports.AfterThrowsAdvice = Symbol('AfterThrowsAdvice');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/aop/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js"));
__export(__webpack_require__(/*! ./method-advice */ "./node_modules/@malagu/core/lib/common/aop/method-advice.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/aop/method-advice.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/method-advice.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var aop_protocol_1 = __webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var NoOpMethodBeforeAdivice = /** @class */ (function () {
    function NoOpMethodBeforeAdivice() {
  ***REMOVED***
    NoOpMethodBeforeAdivice.prototype.before = function (method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        ***REMOVED*** ***REMOVED***
    ***REMOVED***
    NoOpMethodBeforeAdivice = __decorate([
        annotation_1.Component(aop_protocol_1.MethodBeforeAdvice)
    ], NoOpMethodBeforeAdivice);
    return NoOpMethodBeforeAdivice;
***REMOVED***());
exports.NoOpMethodBeforeAdivice = NoOpMethodBeforeAdivice;
var NoOpAfterReturningAdvice = /** @class */ (function () {
    function NoOpAfterReturningAdvice() {
  ***REMOVED***
    NoOpAfterReturningAdvice.prototype.afterReturning = function (returnValue, method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        ***REMOVED*** ***REMOVED***
    ***REMOVED***
    NoOpAfterReturningAdvice = __decorate([
        annotation_1.Component(aop_protocol_1.AfterReturningAdvice)
    ], NoOpAfterReturningAdvice);
    return NoOpAfterReturningAdvice;
***REMOVED***());
exports.NoOpAfterReturningAdvice = NoOpAfterReturningAdvice;
var NoOpAfterThrowsAdvice = /** @class */ (function () {
    function NoOpAfterThrowsAdvice() {
  ***REMOVED***
    NoOpAfterThrowsAdvice.prototype.afterThrows = function (error, method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        ***REMOVED*** ***REMOVED***
    ***REMOVED***
    NoOpAfterThrowsAdvice = __decorate([
        annotation_1.Component(aop_protocol_1.AfterThrowsAdvice)
    ], NoOpAfterThrowsAdvice);
    return NoOpAfterThrowsAdvice;
***REMOVED***());
exports.NoOpAfterThrowsAdvice = NoOpAfterThrowsAdvice;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/application/application-error.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-error.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var ApplicationError;
(function (ApplicationError) {
    var codes = [];
    function declare(code, factory) {
        if (codes.indexOf(code) !== -1) {
            throw new Error("An application error for '" + code + "' code is already declared");
      ***REMOVED***
        var constructorOpt = Object.assign(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
          ***REMOVED***
            return new Impl(code, factory.apply(void 0, __spread(args)), constructorOpt);
      ***REMOVED***, {
            code: code,
            is: function (arg) {
                return arg instanceof Impl && arg.code === code;
          ***REMOVED***
        ***REMOVED***
        return constructorOpt;
  ***REMOVED***
    ApplicationError.declare = declare;
    function is(arg) {
        return arg instanceof Impl;
  ***REMOVED***
    ApplicationError.is = is;
    function fromJson(code, raw) {
        return new Impl(code, raw);
  ***REMOVED***
    ApplicationError.fromJson = fromJson;
    var Impl = /** @class */ (function (_super) {
        __extends(Impl, _super);
        function Impl(code, raw, constructorOpt) {
            var _this = _super.call(this, raw.message) || this;
            _this.code = code;
            _this.data = raw.data;
            Object.setPrototypeOf(_this, Impl.prototype);
            if (raw.stack) {
                _this.stack = raw.stack;
          ***REMOVED***
            else if (Error.captureStackTrace && constructorOpt) {
                Error.captureStackTrace(_this, constructorOpt);
          ***REMOVED***
            return _this;
      ***REMOVED***
        Impl.prototype.toJson = function () {
            var _a = this, message = _a.message, data = _a.data, stack = _a.stack;
            return { message: message, data: data, stack: stack ***REMOVED***
        ***REMOVED***
        return Impl;
  ***REMOVED***(Error));
***REMOVED***)(ApplicationError = exports.ApplicationError || (exports.ApplicationError = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/application/application-protocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-protocol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var promise_util_1 = __webpack_require__(/*! ../utils/promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var logger_1 = __webpack_require__(/*! ../logger */ "./node_modules/@malagu/core/lib/common/logger/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
exports.ApplicationLifecycle = Symbol('ApplicationLifecycle');
exports.Application = Symbol('Application');
exports.ApplicationStateService = Symbol('ApplicationStateService');
var EmptyApplicationLifecycle = /** @class */ (function () {
    function EmptyApplicationLifecycle() {
  ***REMOVED***
    EmptyApplicationLifecycle.prototype.initialize = function () {
        // NOOP
    ***REMOVED***
    EmptyApplicationLifecycle = __decorate([
        annotation_1.Component(exports.ApplicationLifecycle)
    ], EmptyApplicationLifecycle);
    return EmptyApplicationLifecycle;
***REMOVED***());
exports.EmptyApplicationLifecycle = EmptyApplicationLifecycle;
var AbstractApplication = /** @class */ (function () {
    function AbstractApplication() {
  ***REMOVED***
    /**
     * Initialize and start the frontend application.
     */
    AbstractApplication.prototype.doStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, lifecycle, _c, _d, lifecycle, error_1, e_1_1;
            var e_2, _e, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                      ***REMOVED***
                            for (_a = __values(this.lifecycles), _b = _a.next(); !_b.done; _b = _a.next()) {
                                lifecycle = _b.value;
                                if (lifecycle.initialize) {
                                  ***REMOVED***
                                        lifecycle.initialize();
                                  ***REMOVED***
                                    catch (error) {
                                        this.logger.error('Could not initialize lifecycle', error);
                                  ***REMOVED***
                              ***REMOVED***
                          ***REMOVED***
                      ***REMOVED***
                        catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
                        finally {
                          ***REMOVED***
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                          ***REMOVED***
                            finally { if (e_2) throw e_2.error; ***REMOVED***
                      ***REMOVED***
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 8, 9, 10]);
                        _c = __values(this.lifecycles), _d = _c.next();
                        _g.label = 2;
                    case 2:
                        if (!!_d.done) return [3 /*break*/, 7];
                        lifecycle = _d.value;
                        if (!lifecycle.onStart) return [3 /*break*/, 6];
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, lifecycle.onStart(this)];
                    case 4:
                        _g.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _g.sent();
                        this.logger.error('Could not start lifecycle', error_1);
                        return [3 /*break*/, 6];
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 10];
                    case 9:
                      ***REMOVED***
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    /**
     * Stop the frontend application lifecycle.
     */
    AbstractApplication.prototype.doStop = function () {
        var e_3, _a;
      ***REMOVED***
            for (var _b = __values(this.lifecycles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lifecycle = _c.value;
                if (lifecycle.onStop) {
                  ***REMOVED***
                        lifecycle.onStop(this);
                  ***REMOVED***
                    catch (error) {
                        this.logger.error('Could not stop lifecycle', error);
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***
        catch (e_3_1) { e_3 = { error: e_3_1 ***REMOVED*** ***REMOVED***
        finally {
          ***REMOVED***
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          ***REMOVED***
            finally { if (e_3) throw e_3.error; ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    __decorate([
        annotation_1.Autowired(exports.ApplicationLifecycle),
        __metadata("design:type", Array)
    ], AbstractApplication.prototype, "lifecycles", void 0);
    __decorate([
        annotation_1.Autowired(logger_1.Logger),
        __metadata("design:type", Object)
    ], AbstractApplication.prototype, "logger", void 0);
    AbstractApplication = __decorate([
        inversify_1.injectable()
    ], AbstractApplication);
    return AbstractApplication;
***REMOVED***());
exports.AbstractApplication = AbstractApplication;
var AbstractApplicationStateService = /** @class */ (function () {
    function AbstractApplicationStateService() {
        this._state = 'init';
        this.deferred = {***REMOVED***
        this.stateChanged = new vscode_jsonrpc_1.Emitter();
  ***REMOVED***
    Object.defineProperty(AbstractApplicationStateService.prototype, "state", {
        get: function () {
            return this._state;
      ***REMOVED***,
        set: function (state) {
            if (state !== this._state) {
                this.deferred[this._state] = new promise_util_1.Deferred();
                this._state = state;
                if (this.deferred[state] === undefined) {
                    this.deferred[state] = new promise_util_1.Deferred();
              ***REMOVED***
                this.deferred[state].resolve();
                this.stateChanged.fire(state);
          ***REMOVED***
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    Object.defineProperty(AbstractApplicationStateService.prototype, "onStateChanged", {
        get: function () {
            return this.stateChanged.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractApplicationStateService.prototype.reachedState = function (state) {
        if (this.deferred[state] === undefined) {
            this.deferred[state] = new promise_util_1.Deferred();
      ***REMOVED***
        return this.deferred[state].promise;
    ***REMOVED***
    AbstractApplicationStateService.prototype.reachedAnyState = function () {
        var _this = this;
        var states = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            states[_i] = arguments[_i];
      ***REMOVED***
        return Promise.race(states.map(function (s) { return _this.reachedState(s); ***REMOVED***));
    ***REMOVED***
    AbstractApplicationStateService = __decorate([
        inversify_1.injectable()
    ], AbstractApplicationStateService);
    return AbstractApplicationStateService;
***REMOVED***());
exports.AbstractApplicationStateService = AbstractApplicationStateService;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/application/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./application-protocol */ "./node_modules/@malagu/core/lib/common/application/application-protocol.js"));
__export(__webpack_require__(/*! ./application-error */ "./node_modules/@malagu/core/lib/common/application/application-error.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/config/config-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.ConfigProvider = Symbol('ConfigProvider');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/config/config-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-provider.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var config_protocol_1 = __webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var jexl = __webpack_require__(/*! jexl */ "jexl");
var ConfigProviderImpl = /** @class */ (function () {
    function ConfigProviderImpl() {
  ***REMOVED***
    ConfigProviderImpl.prototype.get = function (key, defaultValue) {
        return jexl.evalSync(key, {"malagu":{"session":{"autoCommit":true,"maxAge":86400000,"sessionIdKey":"malagu:sessionId","sessionKey":"malagu:session"***REMOVED***,"server":{"path":"/","port":3000,"endpoint":"http://localhost:{port***REMOVED***"***REMOVED***,"mvc":{"path":"/*","defaultViewName":"json"***REMOVED***,"rpc":{"path":"api"***REMOVED***,"security":{"enabled":true,"usernameKey":"email","passwordKey":"password","contextKey":"malagu:securityContext","username":"admin","password":"MzQ0NTg4ZTk2NzQyYWI1ODA1MDFlNDBjMzZhZDY4OWQ1Zjc5ZDYxYzc2MjQ1NWZk","passwordEncoder":{"secret":"doumiblog","encodeHashAsBase64":true***REMOVED***,"basic":{"realm":"realm"***REMOVED***,"loginPage":"/#/blog/auth/login","loginUrl":"/api/login","loginMethod":"POST","loginSuccessUrl":"/#/blog/admin/index","logoutUrl":"/api/logout","logoutMethod":"POST","logoutSuccessUrl":"/#/blog/auth/login"***REMOVED***,"logger":{"level":"info"***REMOVED***,"web":{"cors":{"origin":"http://nblog.5udou.cn"***REMOVED******REMOVED***,"core":{"validationPipeOptions":{"detailedOutputDisabled":false,"transformEnabled":true***REMOVED******REMOVED***,"cookies":{"keys":["abcdef"]***REMOVED***,"typeorm":{"ormConfig":[{"type":"mysql","host":"127.0.0.1","port":3306,"synchronize":false,"useUnifiedTopology":true,"charset":"utf8mb4_unicode_ci","username":"dev","password":"123456","database":"douMiBlog"***REMOVED***]***REMOVED******REMOVED***,"webpackHooks":["src/hooks/webpack"],"initHooks":[],"buildHooks":[],"deployHooks":["src/hooks/deploy"],"serveHooks":[],"appTitle":"豆米的博客","entry":"@malagu/web/lib/node/application/dev-application-entry","modules":["src/node/module"]***REMOVED***) || defaultValue;
    ***REMOVED***
    ConfigProviderImpl = __decorate([
        annotation_1.Component(config_protocol_1.ConfigProvider)
    ], ConfigProviderImpl);
    return ConfigProviderImpl;
***REMOVED***());
exports.ConfigProviderImpl = ConfigProviderImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/config/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js"));
__export(__webpack_require__(/*! ./config-provider */ "./node_modules/@malagu/core/lib/common/config/config-provider.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.METADATA_KEY = {
    rebind: 'malagu:rebind',
    constantValue: 'malagu:constant-value',
    toService: 'malagu:to-service',
    provide: 'inversify-binding-decorators:provide'
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/container/auto-bind.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/auto-bind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "ts-custom-error");
var NoOpError = /** @class */ (function (_super) {
    __extends(NoOpError, _super);
    function NoOpError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return NoOpError;
***REMOVED***(ts_custom_error_1.CustomError));
function autoBind(registry) {
    return new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        var provideMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.provide, Reflect) || [];
        provideMetadata.map(function (metadata) { return resolve(metadata, bind, rebind); ***REMOVED***
        Reflect.defineMetadata(constants_1.METADATA_KEY.provide, [], Reflect);
        var constantMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
        constantMetadata.map(function (metadata) { return resolveConstant(metadata, bind, rebind); ***REMOVED***
        Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, [], Reflect);
        if (registry) {
            registry(bind, unbind, isBound, rebind);
      ***REMOVED***
    ***REMOVED***
***REMOVED***
exports.autoBind = autoBind;
function resolve(metadata, bind, rebind) {
    var isRebind = Reflect.getOwnMetadata(constants_1.METADATA_KEY.rebind, metadata.implementationType);
    var id = Reflect.getOwnMetadata(constants_1.METADATA_KEY.toService, metadata.implementationType);
    var bindWrapper = function (serviceIdentifier) {
        if (id && id !== serviceIdentifier) {
            bind(serviceIdentifier).toService(id);
            throw new NoOpError();
      ***REMOVED***
        if (isRebind) {
            return rebind(serviceIdentifier);
      ***REMOVED***
        return bind(serviceIdentifier);
    ***REMOVED***
  ***REMOVED***
        metadata.constraint(bindWrapper, metadata.implementationType);
  ***REMOVED***
    catch (error) {
        if (error instanceof NoOpError) {
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
function resolveConstant(metadata, bind, rebind) {
    var e_1, _a;
    var ids = Array.isArray(metadata.id) ? metadata.id : [metadata.id];
    var id = ids.shift();
    if (metadata.rebind) {
        rebind(id).toConstantValue(metadata.constantValue);
  ***REMOVED***
    else {
        bind(id).toConstantValue(metadata.constantValue);
  ***REMOVED***
  ***REMOVED***
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var item = ids_1_1.value;
            bind(item).toService(id);
      ***REMOVED***
  ***REMOVED***
    catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
      ***REMOVED***
        finally { if (e_1) throw e_1.error; ***REMOVED***
  ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/container/container-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/container-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var _container;
var ContainerProvider;
(function (ContainerProvider) {
    function set(container) {
        _container = container;
  ***REMOVED***
    ContainerProvider.set = set;
    function provide() {
        if (!_container) {
            throw new Error('Container is not ready yet, the timing is incorrect.');
      ***REMOVED***
        return _container;
  ***REMOVED***
    ContainerProvider.provide = provide;
***REMOVED***)(ContainerProvider = exports.ContainerProvider || (exports.ContainerProvider = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/dynamic-container.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

        
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
// dynamic loading component module at compile time
exports.container = Promise.resolve(new inversify_1.Container());

        
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const { Container ***REMOVED*** = __webpack_require__(/*! inversify */ "inversify");
const { CoreBackendModule ***REMOVED*** = __webpack_require__(/*! @malagu/core/lib/node/module */ "./node_modules/@malagu/core/lib/node/module.js");
__webpack_require__(/*! source-map-support */ "source-map-support").install();

const container = new Container();
container.load(CoreBackendModule);

function load(raw) {
  return Promise.resolve(raw.default).then(module => container.load(module));
***REMOVED***

module.exports.container = Promise.resolve()
  .then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/web/lib/node/module */ "./node_modules/@malagu/web/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/express-adapter/lib/node/module */ "./node_modules/@malagu/express-adapter/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/react/lib/node/module */ "./node_modules/@malagu/react/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/mvc/lib/node/module */ "./node_modules/@malagu/mvc/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/rpc/lib/node/module */ "./node_modules/@malagu/rpc/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/security/lib/node/module */ "./node_modules/@malagu/security/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/typeorm/lib/node/module */ "./node_modules/@malagu/typeorm/lib/node/module.js")).then(load) ***REMOVED***).
then(function () { return Promise.resolve(__webpack_require__(/*! ./src/node/module */ "./src/node/module.ts")).then(load) ***REMOVED***)
  .then(() => container).catch(reason => {
	  console.error('Failed to start the backend application.');
    if (reason) {
      console.error(reason);
  ***REMOVED***
  ***REMOVED***
        

/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/container/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js"));
__export(__webpack_require__(/*! ./auto-bind */ "./node_modules/@malagu/core/lib/common/container/auto-bind.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/error/cutom-error.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/cutom-error.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "ts-custom-error");
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return CustomError;
***REMOVED***(ts_custom_error_1.CustomError));
exports.CustomError = CustomError;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/error/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js"));
__export(__webpack_require__(/*! ./validation-errors */ "./node_modules/@malagu/core/lib/common/error/validation-errors.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/error/validation-errors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/validation-errors.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var cutom_error_1 = __webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js");
var ValidationErrors = /** @class */ (function (_super) {
    __extends(ValidationErrors, _super);
    function ValidationErrors(errors) {
        return _super.call(this, errors === undefined ? undefined : JSON.stringify(errors)) || this;
  ***REMOVED***
    return ValidationErrors;
***REMOVED***(cutom_error_1.CustomError));
exports.ValidationErrors = ValidationErrors;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./utils */ "./node_modules/@malagu/core/lib/common/utils/index.js"));
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js"));
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/common/application/index.js"));
__export(__webpack_require__(/*! ./logger */ "./node_modules/@malagu/core/lib/common/logger/index.js"));
__export(__webpack_require__(/*! ./container */ "./node_modules/@malagu/core/lib/common/container/index.js"));
__export(__webpack_require__(/*! ./aop */ "./node_modules/@malagu/core/lib/common/aop/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/core/lib/common/constants.js"));
__export(__webpack_require__(/*! ./config */ "./node_modules/@malagu/core/lib/common/config/index.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/core/lib/common/error/index.js"));
__export(__webpack_require__(/*! ./pipe */ "./node_modules/@malagu/core/lib/common/pipe/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/logger/console-logger.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/console-logger.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
  ***REMOVED***
    ConsoleLogger.prototype.error = function (message) {
        console.error(message);
    ***REMOVED***
    ConsoleLogger.prototype.warn = function (message) {
        console.warn(message);
    ***REMOVED***
    ConsoleLogger.prototype.info = function (message) {
        console.info(message);
    ***REMOVED***
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    ***REMOVED***
    ConsoleLogger.prototype.debug = function (message) {
        console.debug(message);
    ***REMOVED***
    return ConsoleLogger;
***REMOVED***());
exports.ConsoleLogger = ConsoleLogger;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/logger/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./logger-protocol */ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js"));
__export(__webpack_require__(/*! ./console-logger */ "./node_modules/@malagu/core/lib/common/logger/console-logger.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/logger-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.LOGGER_LEVEL = 'malagu.logger.level';
exports.Logger = Symbol('Logger');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/pipe/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./pipe-manager */ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js"));
__export(__webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js"));
__export(__webpack_require__(/*! ./pipe-provider */ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js"));
__export(__webpack_require__(/*! ./pipe-transtorm */ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeManagerImpl = /** @class */ (function () {
    function PipeManagerImpl() {
  ***REMOVED***
    PipeManagerImpl.prototype.apply = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var paramTypes, index, arg, _a, _b, pipe, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paramTypes = Reflect.getMetadata('design:paramtypes', utils_1.getTarget(metadata.target), metadata.method);
                        index = 0;
                        _d.label = 1;
                    case 1:
                        if (!(index < args.length)) return [3 /*break*/, 11];
                        arg = args[index];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = (e_1 = void 0, __values(this.pipeProvider.provide())), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        pipe = _b.value;
                        return [4 /*yield*/, pipe.transform(arg, { argType: index < paramTypes.length ? paramTypes[index] : undefined ***REMOVED***)];
                    case 4:
                        arg = _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 9];
                    case 8:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 9:
                        args[index] = arg;
                        _d.label = 10;
                    case 10:
                        index++;
                        return [3 /*break*/, 1];
                    case 11: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        annotation_1.Autowired(pipe_protocol_1.PipeProvider),
        __metadata("design:type", Object)
    ], PipeManagerImpl.prototype, "pipeProvider", void 0);
    PipeManagerImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeManager)
    ], PipeManagerImpl);
    return PipeManagerImpl;
***REMOVED***());
exports.PipeManagerImpl = PipeManagerImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.PipeTransform = Symbol('PipeTransform');
exports.PipeProvider = Symbol('PipeProvider');
exports.PipeManager = Symbol('PipeManager');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeProviderImpl = /** @class */ (function () {
    function PipeProviderImpl(pipes) {
        this.pipes = pipes;
  ***REMOVED***
    PipeProviderImpl.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = utils_1.Prioritizeable.prioritizeAllSync(this.pipes).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    PipeProviderImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeProvider),
        __param(0, annotation_1.Autowired(pipe_protocol_1.PipeTransform)),
        __metadata("design:paramtypes", [Array])
    ], PipeProviderImpl);
    return PipeProviderImpl;
***REMOVED***());
exports.PipeProviderImpl = PipeProviderImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/core/lib/common/error/index.js");
var util_1 = __webpack_require__(/*! util */ "util");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var ValidationPipe = /** @class */ (function () {
    function ValidationPipe() {
        this.priority = 1000;
  ***REMOVED***
    ValidationPipe.prototype.transform = function (value, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, argType, originalValue, isNil, isPrimitive, entity, originalEntity, isCtorNotEqual, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = this.options || {***REMOVED***
                        argType = metadata.argType;
                        if (!argType || !this.toValidate(metadata)) {
                            return [2 /*return*/, value];
                      ***REMOVED***
                        originalValue = value;
                        value = this.toEmptyIfNil(value);
                        isNil = value !== originalValue;
                        isPrimitive = this.isPrimitive(value);
                        this.stripProtoKeys(value);
                        entity = class_transformer_1.plainToClass(argType, value, opts.transformOptions);
                        originalEntity = entity;
                        isCtorNotEqual = entity.constructor !== argType;
                        if (isCtorNotEqual && !isPrimitive) {
                            entity.constructor = argType;
                      ***REMOVED***
                        else if (isCtorNotEqual) {
                            // when "entity" is a primitive value, we have to temporarily
                            // replace the entity to perform the validation against the original
                            // metatype defined inside the handler
                            entity = { constructor: argType ***REMOVED***
                      ***REMOVED***
                        return [4 /*yield*/, class_validator_1.validate(entity, opts.validatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            throw new error_1.ValidationErrors(opts.detailedOutputDisabled ? undefined : errors);
                      ***REMOVED***
                        if (isPrimitive) {
                            // if the value is a primitive value and the validation process has been successfully completed
                            // we have to revert the original value passed through the pipe
                            entity = originalEntity;
                      ***REMOVED***
                        if (opts.transformEnabled) {
                            return [2 /*return*/, entity];
                      ***REMOVED***
                        if (isNil) {
                            // if the value was originally undefined or null, revert it back
                            return [2 /*return*/, originalValue];
                      ***REMOVED***
                        return [2 /*return*/, Object.keys(opts.validatorOptions).length > 0
                                ? class_transformer_1.classToPlain(entity, opts.transformOptions)
                                : value];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ValidationPipe.prototype.toValidate = function (metadata) {
        var argType = metadata.argType;
        var types = [String, Boolean, Number, Array, Object];
        return !types.some(function (t) { return argType === t; ***REMOVED***) && !util_1.isNull(argType);
    ***REMOVED***
    ValidationPipe.prototype.toEmptyIfNil = function (value) {
        return util_1.isNull(value) ? {***REMOVED*** : value;
    ***REMOVED***
    ValidationPipe.prototype.stripProtoKeys = function (value) {
        var _this = this;
        delete value.__proto__;
        var keys = Object.keys(value);
        keys
            .filter(function (key) { return typeof value[key] === 'object' && value[key]; ***REMOVED***)
            .forEach(function (key) { return _this.stripProtoKeys(value[key]); ***REMOVED***
    ***REMOVED***
    ValidationPipe.prototype.isPrimitive = function (value) {
        return ['number', 'boolean', 'string'].indexOf(typeof value) !== -1;
    ***REMOVED***
    __decorate([
        annotation_1.Value('malagu.core.validationPipeOptions'),
        __metadata("design:type", Object)
    ], ValidationPipe.prototype, "options", void 0);
    ValidationPipe = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeTransform)
    ], ValidationPipe);
    return ValidationPipe;
***REMOVED***());
exports.ValidationPipe = ValidationPipe;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/class-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/class-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
function getSuperClasses(constructor) {
    var constructors = [];
    var current = constructor;
    while (Object.getPrototypeOf(current)) {
        current = Object.getPrototypeOf(current);
        constructors.push(current);
  ***REMOVED***
    return constructors;
***REMOVED***
exports.getSuperClasses = getSuperClasses;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/disposable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/disposable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
exports.Disposable = events_1.Disposable;
var DisposableCollection = /** @class */ (function () {
    function DisposableCollection() {
        var _this = this;
        var toDispose = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toDispose[_i] = arguments[_i];
      ***REMOVED***
        this.disposables = [];
        toDispose.forEach(function (d) { return _this.push(d); ***REMOVED***
  ***REMOVED***
    DisposableCollection.prototype.dispose = function () {
        while (this.disposables.length !== 0) {
            this.disposables.pop().dispose();
      ***REMOVED***
    ***REMOVED***
    Object.defineProperty(DisposableCollection.prototype, "disposed", {
        get: function () {
            return this.disposables.length === 0;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    DisposableCollection.prototype.push = function (disposable) {
        var disposables = this.disposables;
        disposables.push(disposable);
        return {
            dispose: function () {
                var index = disposables.indexOf(disposable);
                if (index !== -1) {
                    disposables.splice(index, 1);
              ***REMOVED***
          ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    return DisposableCollection;
***REMOVED***());
exports.DisposableCollection = DisposableCollection;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./prioritizeable */ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js"));
__export(__webpack_require__(/*! ./promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js"));
__export(__webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js"));
__export(__webpack_require__(/*! ./metadata-util */ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js"));
__export(__webpack_require__(/*! ./disposable */ "./node_modules/@malagu/core/lib/common/utils/disposable.js"));
__export(__webpack_require__(/*! ./os */ "./node_modules/@malagu/core/lib/common/utils/os.js"));
__export(__webpack_require__(/*! ./proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/metadata-util.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var class_util_1 = __webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js");
function getOwnMetadata(metadataKey, constructor, propertyKey) {
    var constructors = __spread([constructor], class_util_1.getSuperClasses(constructor));
    var result = [];
    for (var index = 0; index < constructors.length; index++) {
        var c = constructors[constructors.length - index - 1];
        var metadata = void 0;
        if (propertyKey) {
            metadata = Reflect.getOwnMetadata(metadataKey, c, propertyKey);
      ***REMOVED***
        else {
            metadata = Reflect.getOwnMetadata(metadataKey, c);
      ***REMOVED***
        if (metadata) {
            if (Array.isArray(metadata)) {
                result = __spread(result, metadata);
          ***REMOVED***
            else {
                return metadata;
          ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    return result;
***REMOVED***
exports.getOwnMetadata = getOwnMetadata;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/os.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/os.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
function is(userAgent, platform) {
    if (typeof navigator !== 'undefined') {
        if (navigator.userAgent && navigator.userAgent.indexOf(userAgent) >= 0) {
            return true;
      ***REMOVED***
  ***REMOVED***
    if (typeof process !== 'undefined') {
        return (process.platform === platform);
  ***REMOVED***
    return false;
***REMOVED***
exports.isWindows = is('Windows', 'win32');
exports.isOSX = is('Mac', 'darwin');
function cmd(command) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
  ***REMOVED***
    return [
        exports.isWindows ? 'cmd' : command,
        exports.isWindows ? __spread(['/c', command], args) : args
    ];
***REMOVED***
exports.cmd = cmd;
var OS;
(function (OS) {
    /**
     * Enumeration of the supported operating systems.
     */
    var Type;
    (function (Type) {
        Type["Windows"] = "Windows";
        Type["Linux"] = "Linux";
        Type["OSX"] = "OSX";
  ***REMOVED***)(Type = OS.Type || (OS.Type = {***REMOVED***));
    /**
     * Returns with the type of the operating system. If it is neither [Windows](isWindows) nor [OS X](isOSX), then
     * it always return with the `Linux` OS type.
     */
    function type() {
        if (exports.isWindows) {
            return Type.Windows;
      ***REMOVED***
        if (exports.isOSX) {
            return Type.OSX;
      ***REMOVED***
        return Type.Linux;
  ***REMOVED***
    OS.type = type;
***REMOVED***)(OS = exports.OS || (exports.OS = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/prioritizeable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var Prioritizeable;
(function (Prioritizeable) {
    function toPrioritizeable(rawValue, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var value, priority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rawValue instanceof Array) {
                            return [2 /*return*/, Promise.all(rawValue.map(function (v) { return toPrioritizeable(v, getPriority); ***REMOVED***))];
                      ***REMOVED***
                        return [4 /*yield*/, rawValue];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, getPriority(value)];
                    case 2:
                        priority = _a.sent();
                        return [2 /*return*/, { priority: priority, value: value ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
  ***REMOVED***
    Prioritizeable.toPrioritizeable = toPrioritizeable;
    function toPrioritizeableSync(rawValue, getPriority) {
        if (getPriority === void 0) { getPriority = function (value) { return value.priority; ***REMOVED*** ***REMOVED***
        return rawValue.map(function (v) { return ({
            value: v,
            priority: getPriority(v)
        ***REMOVED*** ***REMOVED***
  ***REMOVED***
    Prioritizeable.toPrioritizeableSync = toPrioritizeableSync;
    function prioritizeAllSync(values, getPriority) {
        var prioritizeable = toPrioritizeableSync(values, getPriority);
        return prioritizeable.filter(isValid).sort(compare);
  ***REMOVED***
    Prioritizeable.prioritizeAllSync = prioritizeAllSync;
    function prioritizeAll(values, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var prioritizeable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toPrioritizeable(values, getPriority)];
                    case 1:
                        prioritizeable = _a.sent();
                        return [2 /*return*/, prioritizeable.filter(isValid).sort(compare)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
  ***REMOVED***
    Prioritizeable.prioritizeAll = prioritizeAll;
    function isValid(p) {
        return p.priority > 0;
  ***REMOVED***
    Prioritizeable.isValid = isValid;
    function compare(p, p2) {
        return p2.priority - p.priority;
  ***REMOVED***
    Prioritizeable.compare = compare;
***REMOVED***)(Prioritizeable = exports.Prioritizeable || (exports.Prioritizeable = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/promise-util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/promise-util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        ***REMOVED***
  ***REMOVED***
    return Deferred;
***REMOVED***());
exports.Deferred = Deferred;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/proxy-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
function getTargetClass(obj) {
    return obj.target ? obj.target.constructor : obj.constructor;
***REMOVED***
exports.getTargetClass = getTargetClass;
function getTarget(obj) {
    return obj.target || obj;
***REMOVED***
exports.getTarget = getTarget;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application-state.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var BackendApplicationStateService = /** @class */ (function (_super) {
    __extends(BackendApplicationStateService, _super);
    function BackendApplicationStateService() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    BackendApplicationStateService = __decorate([
        common_1.Component(common_1.ApplicationStateService)
    ], BackendApplicationStateService);
    return BackendApplicationStateService;
***REMOVED***(common_1.AbstractApplicationStateService));
exports.BackendApplicationStateService = BackendApplicationStateService;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var backend_application_state_1 = __webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js");
var BackendApplication = /** @class */ (function (_super) {
    __extends(BackendApplication, _super);
    function BackendApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    BackendApplication.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setupExitSignals();
                        return [4 /*yield*/, this.doStart()];
                    case 1:
                        _a.sent();
                        this.stateService.state = 'started';
                        this.stateService.state = 'ready';
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BackendApplication.prototype.setupExitSignals = function () {
        process.removeListener('SIGINT', this.doExit);
        process.removeListener('SIGTERM', this.doExit);
        process.on('SIGINT', this.doExit.bind(this));
        process.on('SIGTERM', this.doExit.bind(this));
    ***REMOVED***
    BackendApplication.prototype.doExit = function () {
        this.doStop();
        process.exit(0);
    ***REMOVED***
    __decorate([
        common_1.Autowired(common_1.ApplicationStateService),
        __metadata("design:type", backend_application_state_1.BackendApplicationStateService)
    ], BackendApplication.prototype, "stateService", void 0);
    BackendApplication = __decorate([
        common_1.Component(common_1.Application)
    ], BackendApplication);
    return BackendApplication;
***REMOVED***(common_1.AbstractApplication));
exports.BackendApplication = BackendApplication;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/node/application/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./backend-application */ "./node_modules/@malagu/core/lib/node/application/backend-application.js"));
__export(__webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/node/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/node/application/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/core/lib/node/module.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/module.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js"));
var loglevel_1 = __webpack_require__(/*! loglevel */ "loglevel");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js");
__export(__webpack_require__(/*! . */ "./node_modules/@malagu/core/lib/node/index.js"));
exports.CoreBackendModule = common_1.autoBind(function (bind) {
    bind(common_1.Logger).toDynamicValue(function (ctx) {
        var configProvider = ctx.container.get(common_1.ConfigProvider);
        var level = configProvider.get(common_1.LOGGER_LEVEL, 'ERROR');
        var logger = loglevel_1.getLogger('FrontendApplicationLogger');
        logger.setDefaultLevel(level);
        return logger;
  ***REMOVED***).inSingletonScope();
    bind(common_1.VALUE).toDynamicValue(function (ctx) {
        var namedMetadata = ctx.currentRequest.target.getNamedTag();
        var el = namedMetadata.value.toString();
        var configProvider = ctx.container.get(common_1.ConfigProvider);
        return configProvider.get(el);
    ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/express-adapter/lib/node/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/express-adapter/lib/node/module.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.MVC_PATH = 'malagu.mvc.path';


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/mvc/lib/common/constants.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/body.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/body.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Body = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyBodyDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
    else {
        applyBodyDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
***REMOVED***
function applyBodyDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerBody, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyBodyDecorator = applyBodyDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/catch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Catch = function (errorTypes) {
    return function (t, k, d) {
        applyCatchDecorator(t, k, d, Array.isArray(errorTypes) ? errorTypes : [errorTypes]);
    ***REMOVED***
***REMOVED***
function applyCatchDecorator(target, key, descriptor, errorTypes) {
    var metadata = { errorTypes: errorTypes, target: target, key: key, descriptor: descriptor ***REMOVED***
    var metadataList = [];
    if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor)) {
        Reflect.defineMetadata(constants_1.METADATA_KEY.controllerCatch, metadataList, target.constructor);
  ***REMOVED***
    else {
        metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor);
  ***REMOVED***
    metadataList.push(metadata);
***REMOVED***
exports.applyCatchDecorator = applyCatchDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/controller.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.CONTROLLER = Symbol('Controller');
function Controller(path) {
    if (path === void 0) { path = ''; ***REMOVED***
    return function (target) {
        var metadata = { path: path, target: target ***REMOVED***
        Reflect.defineMetadata(constants_1.METADATA_KEY.controller, metadata, target);
        core_1.Component({ id: exports.CONTROLLER, proxy: true ***REMOVED***)(target);
    ***REMOVED***
***REMOVED***
exports.Controller = Controller;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/cookie.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Cookie = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestCookieDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseCookieDecorator(t, tk, d, target, targetKey);
        ***REMOVED***
  ***REMOVED***
    else {
        return function (t, tk, i) {
            applyRequestCookieDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
***REMOVED***
function applyRequestCookieDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestCookie, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyRequestCookieDecorator = applyRequestCookieDecorator;
function applyResponseCookieDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseCookie, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyResponseCookieDecorator = applyResponseCookieDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/header.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/header.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Header = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestHeaderDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseHeaderDecorator(t, tk, d, target, targetKey);
        ***REMOVED***
  ***REMOVED***
    else {
        return function (t, tk, i) {
            applyRequestHeaderDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
***REMOVED***
function applyRequestHeaderDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestHeader, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyRequestHeaderDecorator = applyRequestHeaderDecorator;
function applyResponseHeaderDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseHeader, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyResponseHeaderDecorator = applyResponseHeaderDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./body */ "./node_modules/@malagu/mvc/lib/node/annotation/body.js"));
__export(__webpack_require__(/*! ./controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js"));
__export(__webpack_require__(/*! ./header */ "./node_modules/@malagu/mvc/lib/node/annotation/header.js"));
__export(__webpack_require__(/*! ./method */ "./node_modules/@malagu/mvc/lib/node/annotation/method.js"));
__export(__webpack_require__(/*! ./param */ "./node_modules/@malagu/mvc/lib/node/annotation/param.js"));
__export(__webpack_require__(/*! ./query */ "./node_modules/@malagu/mvc/lib/node/annotation/query.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/annotation/view.js"));
__export(__webpack_require__(/*! ./cookie */ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/mvc/lib/node/annotation/session.js"));
__export(__webpack_require__(/*! ./catch */ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/method.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Get(options) {
    return exports.Method('get', options);
***REMOVED***
exports.Get = Get;
function Post(options) {
    return exports.Method('post', options);
***REMOVED***
exports.Post = Post;
function Put(options) {
    return exports.Method('put', options);
***REMOVED***
exports.Put = Put;
function Patch(options) {
    return exports.Method('patch', options);
***REMOVED***
exports.Patch = Patch;
function Head(options) {
    return exports.Method('head', options);
***REMOVED***
exports.Head = Head;
function Delete(options) {
    return exports.Method('delete', options);
***REMOVED***
exports.Delete = Delete;
function Options(options) {
    return exports.Method('options', options);
***REMOVED***
exports.Options = Options;
exports.Method = function (method, options) {
    if (options === void 0) { options = ''; ***REMOVED***
    return function (target, key, descriptor) {
        var metadata = { options: options, method: method, target: target, key: key, descriptor: descriptor ***REMOVED***
        var metadataList = [];
        if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.controllerMethod, metadataList, target.constructor);
      ***REMOVED***
        else {
            metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor);
      ***REMOVED***
        metadataList.push(metadata);
    ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/param.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/param.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Param = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyParamDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
    else {
        applyParamDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
***REMOVED***
function applyParamDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerParam, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyParamDecorator = applyParamDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/query.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/query.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Query = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyQueryDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
    else {
        applyQueryDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
***REMOVED***
function applyQueryDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerQuery, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyQueryDecorator = applyQueryDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/session.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/session.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Session = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestSessionDecorator(target, targetKey, parameterIndex);
  ***REMOVED***
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseSessionDecorator(t, tk, d, target, targetKey);
        ***REMOVED***
  ***REMOVED***
    else {
        return function (t, tk, i) {
            applyRequestSessionDecorator(t, tk, i, target);
        ***REMOVED***
  ***REMOVED***
***REMOVED***
function applyRequestSessionDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestSession, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyRequestSessionDecorator = applyRequestSessionDecorator;
function applyResponseSessionDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value ***REMOVED***
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseSession, metadatas, target.constructor, targetKey);
***REMOVED***
exports.applyResponseSessionDecorator = applyResponseSessionDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/view.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/view.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.View = function (viewName) {
    return function (t, k, d) {
        applyViewDecorator(t, k, d, viewName);
    ***REMOVED***
***REMOVED***
function applyViewDecorator(target, targetKey, descriptor, viewName) {
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerView, { viewName: viewName ***REMOVED***, target.constructor, targetKey);
***REMOVED***
exports.applyViewDecorator = applyViewDecorator;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.METADATA_KEY = {
    controller: 'malagu:controller',
    controllerMethod: 'malagu:controller-method',
    controllerParam: 'malagu:controller-param',
    controllerRequestHeader: 'malagu:controller-request-header',
    controllerResponseHeader: 'malagu:controller-response-header',
    controllerRequestCookie: 'malagu:controller-request-cookie',
    controllerResponseCookie: 'malagu:controller-response-cookie',
    controllerRequestSession: 'malagu:controller-request-session',
    controllerResponseSession: 'malagu:controller-response-session',
    controllerQuery: 'malagu:controller-query',
    controllerBody: 'malagu:controller-body',
    controllerView: 'malagu:controller-view',
    controllerCatch: 'malagu:controller-catch'
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var resolver_1 = __webpack_require__(/*! ../resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/mvc/lib/common/index.js");
var core_2 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var MvcHandlerAdapter = /** @class */ (function () {
    function MvcHandlerAdapter() {
        this.priority = handler_protocol_1.MVC_HANDLER_ADAPTER_PRIORITY;
  ***REMOVED***
    MvcHandlerAdapter.prototype.resolveMethodArgs = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var args, _a, _b, resolver, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        args = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.methodArgsResolverProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata, args)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 8];
                    case 7:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, args];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    MvcHandlerAdapter.prototype.resolveResponse = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, resolver, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.responseResolverProvider.provide()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 ***REMOVED***
                        return [3 /*break*/, 7];
                    case 6:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    MvcHandlerAdapter.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctx, path, routeMetadata, error, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ctx = node_1.Context.getCurrent();
                        path = ctx.request.path;
                        return [4 /*yield*/, this.routeMetadataMatcher.match()];
                    case 1:
                        routeMetadata = _b.sent();
                        if (!routeMetadata) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doHandle(routeMetadata)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        error = new node_1.HttpError(404, "No mapping found: " + ctx.request.method + " " + path);
                        _a = this.doHandle;
                        return [4 /*yield*/, this.getErrorMetadata(error)];
                    case 4: return [4 /*yield*/, _a.apply(this, [_b.sent(), error])];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    MvcHandlerAdapter.prototype.doHandle = function (metadata, err) {
        return __awaiter(this, void 0, void 0, function () {
            var args, methodMetadata, target, model, error_1, errorMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveMethodArgs(metadata)];
                    case 1:
                        args = _a.sent();
                        if (err) {
                            args = __spread([err], args);
                      ***REMOVED***
                        methodMetadata = metadata.methodMetadata;
                        target = methodMetadata.target;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 10]);
                        return [4 /*yield*/, this.pipeManager.apply({ target: target, method: methodMetadata.key ***REMOVED***, args)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, target[methodMetadata.key].apply(target, __spread(args))];
                    case 4:
                        model = _a.sent();
                        return [3 /*break*/, 10];
                    case 5:
                        error_1 = _a.sent();
                        if (!!err) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getErrorMetadata(error_1)];
                    case 6:
                        errorMetadata = _a.sent();
                        if (!errorMetadata.viewMetadata.viewName) {
                            errorMetadata.viewMetadata.viewName = metadata.viewMetadata.viewName;
                      ***REMOVED***
                        return [4 /*yield*/, this.doHandle(errorMetadata, error_1)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8: throw error_1;
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        if (!model) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.viewResolver.resolve(metadata, model)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.resolveResponse(metadata)];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    MvcHandlerAdapter.prototype.getErrorMetadata = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var routeMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routeMetadataMatcher.match(error)];
                    case 1:
                        routeMetadata = _a.sent();
                        if (routeMetadata) {
                            return [2 /*return*/, routeMetadata];
                      ***REMOVED***
                    ***REMOVED***
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    MvcHandlerAdapter.prototype.canHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.requestMatcher).match;
                        return [4 /*yield*/, this.pathResolver.resolve(this.mvcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(resolver_1.MethodArgsResolverProvider),
        __metadata("design:type", resolver_1.MethodArgsResolverProvider)
    ], MvcHandlerAdapter.prototype, "methodArgsResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ResponseResolverProvider),
        __metadata("design:type", resolver_1.ResponseResolverProvider)
    ], MvcHandlerAdapter.prototype, "responseResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ViewResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "viewResolver", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "requestMatcher", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pathResolver", void 0);
    __decorate([
        core_1.Autowired(core_2.PipeManager),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pipeManager", void 0);
    __decorate([
        core_1.Value(common_1.MVC_PATH),
        __metadata("design:type", String)
    ], MvcHandlerAdapter.prototype, "mvcPath", void 0);
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteMetadataMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "routeMetadataMatcher", void 0);
    MvcHandlerAdapter = __decorate([
        core_1.Component(node_1.HandlerAdapter)
    ], MvcHandlerAdapter);
    return MvcHandlerAdapter;
***REMOVED***());
exports.MvcHandlerAdapter = MvcHandlerAdapter;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.MVC_HANDLER_ADAPTER_PRIORITY = 1900;
exports.RouteProvider = Symbol('RouteProvider');
exports.RouteMetadataMatcher = Symbol('RouteMetadataMatcher');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./handler-adapter */ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js"));
__export(__webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js"));
__export(__webpack_require__(/*! ./route-provider */ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js"));
__export(__webpack_require__(/*! ./route-metadata-matcher */ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-builder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var controller_1 = __webpack_require__(/*! ../annotation/controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var proxy_util_1 = __webpack_require__(/*! @malagu/core/lib/common/utils/proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js");
var RouteBuilder = /** @class */ (function () {
    function RouteBuilder() {
        this.controllers = [];
  ***REMOVED***
    RouteBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mapping, errorMapping, _a, _b, controller, targetConstructor, controllerMetadata, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        mapping = new Map();
                        errorMapping = new Map();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.controllers), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        controller = _b.value;
                        targetConstructor = proxy_util_1.getTargetClass(controller);
                        controllerMetadata = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controller, targetConstructor);
                        return [4 /*yield*/, this.doBuildRouteMap(mapping, targetConstructor, controller, controllerMetadata)];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.doBuildErrorRouteMap(errorMapping, targetConstructor, controller, controllerMetadata)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 9];
                    case 8:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, {
                            mapping: mapping,
                            errorMapping: errorMapping
                      ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    RouteBuilder.prototype.doBuildRouteMap = function (mapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_1, methodMetadata_1_1, metadata, routeOptions, m, method, pathMap, path, _a, e_2_1;
            var e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, targetConstructor);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, 10, 11]);
                        methodMetadata_1 = __values(methodMetadata), methodMetadata_1_1 = methodMetadata_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!methodMetadata_1_1.done) return [3 /*break*/, 8];
                        metadata = methodMetadata_1_1.value;
                        routeOptions = (typeof metadata.options === 'string' || metadata.options instanceof RegExp) ? { path: metadata.options ***REMOVED*** : metadata.options;
                        m = __assign({***REMOVED***, metadata);
                        method = m.method;
                        m.target = controller;
                        pathMap = mapping.get(method);
                        if (!pathMap) {
                            pathMap = new Map();
                            mapping.set(method, pathMap);
                      ***REMOVED***
                        path = routeOptions.path;
                        if (!(typeof path === 'string')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path)];
                    case 3:
                        path = _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(path instanceof RegExp)) return [3 /*break*/, 6];
                        if (!controllerMetadata.path) return [3 /*break*/, 6];
                        _a = RegExp.bind;
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path.source)];
                    case 5:
                        path = new (_a.apply(RegExp, [void 0, _c.sent()]))();
                        _c.label = 6;
                    case 6:
                        pathMap.set(path, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m ***REMOVED***, this.doRouteMetadata(targetConstructor, m.key)));
                        _c.label = 7;
                    case 7:
                        methodMetadata_1_1 = methodMetadata_1.next();
                        return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _c.sent();
                        e_2 = { error: e_2_1 ***REMOVED***
                        return [3 /*break*/, 11];
                    case 10:
                      ***REMOVED***
                            if (methodMetadata_1_1 && !methodMetadata_1_1.done && (_b = methodMetadata_1.return)) _b.call(methodMetadata_1);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    RouteBuilder.prototype.doBuildErrorRouteMap = function (errorMapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_2, methodMetadata_2_1, metadata, m, _a, _b, errorType;
            var e_3, _c, e_4, _d;
            return __generator(this, function (_e) {
                methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, targetConstructor);
              ***REMOVED***
                    for (methodMetadata_2 = __values(methodMetadata), methodMetadata_2_1 = methodMetadata_2.next(); !methodMetadata_2_1.done; methodMetadata_2_1 = methodMetadata_2.next()) {
                        metadata = methodMetadata_2_1.value;
                        m = __assign({***REMOVED***, metadata);
                        m.target = controller;
                      ***REMOVED***
                            for (_a = (e_4 = void 0, __values(metadata.errorTypes)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                errorType = _b.value;
                                errorMapping.set(errorType, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m ***REMOVED***, this.doRouteMetadata(targetConstructor, m.key)));
                          ***REMOVED***
                      ***REMOVED***
                        catch (e_4_1) { e_4 = { error: e_4_1 ***REMOVED*** ***REMOVED***
                        finally {
                          ***REMOVED***
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                          ***REMOVED***
                            finally { if (e_4) throw e_4.error; ***REMOVED***
                      ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                catch (e_3_1) { e_3 = { error: e_3_1 ***REMOVED*** ***REMOVED***
                finally {
                  ***REMOVED***
                        if (methodMetadata_2_1 && !methodMetadata_2_1.done && (_c = methodMetadata_2.return)) _c.call(methodMetadata_2);
                  ***REMOVED***
                    finally { if (e_3) throw e_3.error; ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    RouteBuilder.prototype.doRouteMetadata = function (targetConstructor, method) {
        return {
            paramMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, targetConstructor, method),
            bodyMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, targetConstructor, method),
            queryMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, targetConstructor, method),
            requestHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, targetConstructor, method),
            responseHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, targetConstructor, method),
            requestCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, targetConstructor, method),
            responseCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, targetConstructor, method),
            requestSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, targetConstructor, method),
            responseSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, targetConstructor, method),
            viewMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerView, targetConstructor, method) || {***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(controller_1.CONTROLLER), core_1.Optional,
        __metadata("design:type", Array)
    ], RouteBuilder.prototype, "controllers", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], RouteBuilder.prototype, "pathResolver", void 0);
    RouteBuilder = __decorate([
        core_1.Component()
    ], RouteBuilder);
    return RouteBuilder;
***REMOVED***());
exports.RouteBuilder = RouteBuilder;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
exports.PATH_PARMAS_ATTR = 'pathParams';
var RouteMetadataMatcherImpl = /** @class */ (function () {
    function RouteMetadataMatcherImpl() {
  ***REMOVED***
    RouteMetadataMatcherImpl.prototype.match = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var route, metadata, _a, _b, entry, request, pathMap, pathMap_1, pathMap_1_1, entry, _c, p, metadata, pathParams, e_1_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.routeProvider.provide()];
                    case 1:
                        route = _f.sent();
                        if (!error) return [3 /*break*/, 2];
                        metadata = route.errorMapping.get(error.constructor);
                        if (metadata) {
                            return [2 /*return*/, metadata];
                      ***REMOVED***
                        else {
                          ***REMOVED***
                                for (_a = __values(route.errorMapping), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    entry = _b.value;
                                    if (error instanceof entry[0]) {
                                        return [2 /*return*/, entry[1]];
                                  ***REMOVED***
                              ***REMOVED***
                          ***REMOVED***
                            catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
                            finally {
                              ***REMOVED***
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                              ***REMOVED***
                                finally { if (e_2) throw e_2.error; ***REMOVED***
                          ***REMOVED***
                      ***REMOVED***
                        return [3 /*break*/, 10];
                    case 2:
                        request = node_1.Context.getRequest();
                        pathMap = route.mapping.get(request.method.toLowerCase());
                        if (!pathMap) return [3 /*break*/, 10];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        pathMap_1 = __values(pathMap), pathMap_1_1 = pathMap_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!pathMap_1_1.done) return [3 /*break*/, 7];
                        entry = pathMap_1_1.value;
                        _c = __read(entry, 2), p = _c[0], metadata = _c[1];
                        return [4 /*yield*/, this.requestMatcher.match(p)];
                    case 5:
                        pathParams = _f.sent();
                        if (pathParams) {
                            node_1.Context.setAttr(exports.PATH_PARMAS_ATTR, pathParams);
                            return [2 /*return*/, metadata];
                      ***REMOVED***
                        _f.label = 6;
                    case 6:
                        pathMap_1_1 = pathMap_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 10];
                    case 9:
                      ***REMOVED***
                            if (pathMap_1_1 && !pathMap_1_1.done && (_e = pathMap_1.return)) _e.call(pathMap_1);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteProvider),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "routeProvider", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "requestMatcher", void 0);
    RouteMetadataMatcherImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteMetadataMatcher)
    ], RouteMetadataMatcherImpl);
    return RouteMetadataMatcherImpl;
***REMOVED***());
exports.RouteMetadataMatcherImpl = RouteMetadataMatcherImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-provider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var route_builder_1 = __webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var RouteProviderImpl = /** @class */ (function () {
    function RouteProviderImpl() {
        this.routeDefered = new core_1.Deferred();
  ***REMOVED***
    RouteProviderImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.routeBuilder.build()];
                    case 1:
                        _a.route = _b.sent();
                        this.routeDefered.resolve(this.route);
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    RouteProviderImpl.prototype.provide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routeDefered.promise];
                    case 1: return [2 /*return*/, _a.sent()];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(route_builder_1.RouteBuilder),
        __metadata("design:type", route_builder_1.RouteBuilder)
    ], RouteProviderImpl.prototype, "routeBuilder", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RouteProviderImpl.prototype, "init", null);
    RouteProviderImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteProvider)
    ], RouteProviderImpl);
    return RouteProviderImpl;
***REMOVED***());
exports.RouteProviderImpl = RouteProviderImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/mvc/lib/node/annotation/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/view/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/mvc/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./response-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js"));
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./response-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js"));
__export(__webpack_require__(/*! ./view-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js"));
__export(__webpack_require__(/*! ./view-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var MethodArgsResolverProvider = /** @class */ (function () {
    function MethodArgsResolverProvider(methodArgsResolvers) {
        this.methodArgsResolvers = methodArgsResolvers;
  ***REMOVED***
    MethodArgsResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.methodArgsResolvers).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    MethodArgsResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.MethodArgsResolver)),
        __metadata("design:paramtypes", [Array])
    ], MethodArgsResolverProvider);
    return MethodArgsResolverProvider;
***REMOVED***());
exports.MethodArgsResolverProvider = MethodArgsResolverProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_1 = __webpack_require__(/*! ../handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js");
var BodyMethodArgsResolver = /** @class */ (function () {
    function BodyMethodArgsResolver() {
        this.priority = 100;
  ***REMOVED***
    BodyMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var body, bodyMetadatas, bodyMetadatas_1, bodyMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                body = node_1.Context.getCurrent().request.body;
                bodyMetadatas = metadata.bodyMetadata;
                if (bodyMetadatas && body !== undefined) {
                  ***REMOVED***
                        for (bodyMetadatas_1 = __values(bodyMetadatas), bodyMetadatas_1_1 = bodyMetadatas_1.next(); !bodyMetadatas_1_1.done; bodyMetadatas_1_1 = bodyMetadatas_1.next()) {
                            m = bodyMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? body[m.name] : body;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (bodyMetadatas_1_1 && !bodyMetadatas_1_1.done && (_a = bodyMetadatas_1.return)) _a.call(bodyMetadatas_1);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BodyMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], BodyMethodArgsResolver);
    return BodyMethodArgsResolver;
***REMOVED***());
exports.BodyMethodArgsResolver = BodyMethodArgsResolver;
var HeaderMethodArgsResolver = /** @class */ (function () {
    function HeaderMethodArgsResolver() {
        this.priority = 200;
  ***REMOVED***
    HeaderMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                headers = node_1.Context.getCurrent().request.headers;
                headerMetadatas = metadata.requestHeaderMetadata;
                if (headerMetadatas && headers !== undefined) {
                  ***REMOVED***
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? headers[m.name] : headers;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HeaderMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], HeaderMethodArgsResolver);
    return HeaderMethodArgsResolver;
***REMOVED***());
exports.HeaderMethodArgsResolver = HeaderMethodArgsResolver;
var ParamMethodArgsResolver = /** @class */ (function () {
    function ParamMethodArgsResolver() {
        this.priority = 300;
  ***REMOVED***
    ParamMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var params, paramMetadatas, paramMetadatas_1, paramMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                params = node_1.Context.getAttr(handler_1.PATH_PARMAS_ATTR);
                paramMetadatas = metadata.paramMetadata;
                if (paramMetadatas && params) {
                  ***REMOVED***
                        for (paramMetadatas_1 = __values(paramMetadatas), paramMetadatas_1_1 = paramMetadatas_1.next(); !paramMetadatas_1_1.done; paramMetadatas_1_1 = paramMetadatas_1.next()) {
                            m = paramMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? params[m.name] : params;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_3_1) { e_3 = { error: e_3_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (paramMetadatas_1_1 && !paramMetadatas_1_1.done && (_a = paramMetadatas_1.return)) _a.call(paramMetadatas_1);
                      ***REMOVED***
                        finally { if (e_3) throw e_3.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ParamMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], ParamMethodArgsResolver);
    return ParamMethodArgsResolver;
***REMOVED***());
exports.ParamMethodArgsResolver = ParamMethodArgsResolver;
var QueryMethodArgsResolver = /** @class */ (function () {
    function QueryMethodArgsResolver() {
        this.priority = 400;
  ***REMOVED***
    QueryMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var query, queryMetadatas, queryMetadatas_1, queryMetadatas_1_1, m;
            var e_4, _a;
            return __generator(this, function (_b) {
                query = node_1.Context.getCurrent().request.query;
                queryMetadatas = metadata.queryMetadata;
                if (queryMetadatas && query !== undefined) {
                  ***REMOVED***
                        for (queryMetadatas_1 = __values(queryMetadatas), queryMetadatas_1_1 = queryMetadatas_1.next(); !queryMetadatas_1_1.done; queryMetadatas_1_1 = queryMetadatas_1.next()) {
                            m = queryMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? query[m.name] : query;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_4_1) { e_4 = { error: e_4_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (queryMetadatas_1_1 && !queryMetadatas_1_1.done && (_a = queryMetadatas_1.return)) _a.call(queryMetadatas_1);
                      ***REMOVED***
                        finally { if (e_4) throw e_4.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    QueryMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], QueryMethodArgsResolver);
    return QueryMethodArgsResolver;
***REMOVED***());
exports.QueryMethodArgsResolver = QueryMethodArgsResolver;
var CookieMethodArgsResolver = /** @class */ (function () {
    function CookieMethodArgsResolver() {
        this.priority = 500;
  ***REMOVED***
    CookieMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_5, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.requestCookieMetadata;
                if (cookieMetadatas && cookies !== undefined) {
                  ***REMOVED***
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? cookies.get(m.name) : cookies;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_5_1) { e_5 = { error: e_5_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                      ***REMOVED***
                        finally { if (e_5) throw e_5.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    CookieMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], CookieMethodArgsResolver);
    return CookieMethodArgsResolver;
***REMOVED***());
exports.CookieMethodArgsResolver = CookieMethodArgsResolver;
var SessionMethodArgsResolver = /** @class */ (function () {
    function SessionMethodArgsResolver() {
        this.priority = 600;
  ***REMOVED***
    SessionMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_6, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.requestSessionMetadata;
                if (sessionMetadatas && session !== undefined) {
                  ***REMOVED***
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? session[m.name] : session;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_6_1) { e_6 = { error: e_6_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                      ***REMOVED***
                        finally { if (e_6) throw e_6.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], SessionMethodArgsResolver);
    return SessionMethodArgsResolver;
***REMOVED***());
exports.SessionMethodArgsResolver = SessionMethodArgsResolver;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.MethodArgsResolver = Symbol('MethodArgsResolver');
exports.ResponseResolver = Symbol('ResponseResolver');
exports.ViewResolver = Symbol('ViewResolver');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ResponseResolverProvider = /** @class */ (function () {
    function ResponseResolverProvider(responseResolvers) {
        this.responseResolvers = responseResolvers;
  ***REMOVED***
    ResponseResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.responseResolvers).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    ResponseResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ResponseResolver)),
        __metadata("design:paramtypes", [Array])
    ], ResponseResolverProvider);
    return ResponseResolverProvider;
***REMOVED***());
exports.ResponseResolverProvider = ResponseResolverProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HeaderResponseResolver = /** @class */ (function () {
    function HeaderResponseResolver() {
        this.priority = 500;
  ***REMOVED***
    HeaderResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var response, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                response = node_1.Context.getCurrent().response;
                headerMetadatas = metadata.responseHeaderMetadata;
                if (headerMetadatas) {
                  ***REMOVED***
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            response.setHeader(m.name, m.value);
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HeaderResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], HeaderResponseResolver);
    return HeaderResponseResolver;
***REMOVED***());
exports.HeaderResponseResolver = HeaderResponseResolver;
var CookieResponseResolver = /** @class */ (function () {
    function CookieResponseResolver() {
        this.priority = 500;
  ***REMOVED***
    CookieResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.responseCookieMetadata;
                if (cookieMetadatas && cookies) {
                  ***REMOVED***
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            cookies.set(m.name, m.value);
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    CookieResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], CookieResponseResolver);
    return CookieResponseResolver;
***REMOVED***());
exports.CookieResponseResolver = CookieResponseResolver;
var SessionResponseResolver = /** @class */ (function () {
    function SessionResponseResolver() {
        this.priority = 500;
  ***REMOVED***
    SessionResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.responseSessionMetadata;
                if (sessionMetadatas && session) {
                  ***REMOVED***
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            session[m.name] = m.value;
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_3_1) { e_3 = { error: e_3_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                      ***REMOVED***
                        finally { if (e_3) throw e_3.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], SessionResponseResolver);
    return SessionResponseResolver;
***REMOVED***());
exports.SessionResponseResolver = SessionResponseResolver;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ViewResolverProvider = /** @class */ (function () {
    function ViewResolverProvider(viewResolvers) {
        this.viewResolvers = viewResolvers;
  ***REMOVED***
    ViewResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.viewResolvers).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    ViewResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ViewResolver)),
        __metadata("design:paramtypes", [Array])
    ], ViewResolverProvider);
    return ViewResolverProvider;
***REMOVED***());
exports.ViewResolverProvider = ViewResolverProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_provider_1 = __webpack_require__(/*! ../view/view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var ViewResolverImpl = /** @class */ (function () {
    function ViewResolverImpl() {
  ***REMOVED***
    ViewResolverImpl.prototype.resolve = function (metadata, model) {
        return __awaiter(this, void 0, void 0, function () {
            var viewMetadata, viewName, _a, _b, view, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        viewMetadata = metadata.viewMetadata;
                        viewName = viewMetadata.viewName || this.defaultViewName;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.viewProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        view = _b.value;
                        return [4 /*yield*/, view.support(viewName)];
                    case 3:
                        if (!_d.sent()) return [3 /*break*/, 5];
                        node_1.Context.getResponse().setHeader('Content-type', view.contentType);
                        return [4 /*yield*/, view.render(model)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 9];
                    case 8:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 9: throw new Error('Not found a suitable view.');
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.mvc.defaultViewName'),
        __metadata("design:type", String)
    ], ViewResolverImpl.prototype, "defaultViewName", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", view_provider_1.ViewProvider)
    ], ViewResolverImpl.prototype, "viewProvider", void 0);
    ViewResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.ViewResolver)
    ], ViewResolverImpl);
    return ViewResolverImpl;
***REMOVED***());
exports.ViewResolverImpl = ViewResolverImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/view/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./json-view */ "./node_modules/@malagu/mvc/lib/node/view/json-view.js"));
__export(__webpack_require__(/*! ./text-view */ "./node_modules/@malagu/mvc/lib/node/view/text-view.js"));
__export(__webpack_require__(/*! ./view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/view/json-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/json-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var JsonView = /** @class */ (function () {
    function JsonView() {
        this.contentType = 'application/json';
        this.priority = 500;
  ***REMOVED***
    JsonView_1 = JsonView;
    JsonView.prototype.render = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = JSON.stringify(model);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    JsonView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === JsonView_1.VIEW_NAME);
    ***REMOVED***
    var JsonView_1;
    JsonView.VIEW_NAME = 'json';
    JsonView = JsonView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], JsonView);
    return JsonView;
***REMOVED***());
exports.JsonView = JsonView;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/view/text-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/text-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var TextView = /** @class */ (function () {
    function TextView() {
        this.contentType = 'text/plain';
        this.priority = 600;
  ***REMOVED***
    TextView_1 = TextView;
    TextView.prototype.render = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = model;
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    TextView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === TextView_1.VIEW_NAME);
    ***REMOVED***
    var TextView_1;
    TextView.VIEW_NAME = 'text';
    TextView = TextView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], TextView);
    return TextView;
***REMOVED***());
exports.TextView = TextView;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.View = Symbol('View');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-provider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var ViewProvider = /** @class */ (function () {
    function ViewProvider(views) {
        this.views = views;
  ***REMOVED***
    ViewProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.views).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    ViewProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(view_protocol_1.View)),
        __metadata("design:paramtypes", [Array])
    ], ViewProvider);
    return ViewProvider;
***REMOVED***());
exports.ViewProvider = ViewProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/react/lib/node/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/react/lib/node/module.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.RPC = Symbol('RPC');
exports.Autorpc = function (target, targetKey, index) {
    var option = core_1.getAutowiredOption(target, targetKey, index);
    var doInject = function (id, isMulti, t, k, i) {
        inversify_1.inject(exports.RPC)(t, k, i);
        inversify_1.named(id.toString())(t, k, i);
    ***REMOVED***
    if (targetKey === undefined) {
        return function (t, tk, i) {
            core_1.applyAutowiredDecorator(option, t, tk, i, doInject);
        ***REMOVED***
  ***REMOVED***
    else {
        core_1.applyAutowiredDecorator(option, target, targetKey, index, doInject);
  ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./rpc */ "./node_modules/@malagu/rpc/lib/common/annotation/rpc.js"));
__export(__webpack_require__(/*! ./autorpc */ "./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/rpc.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/rpc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
var jsonrpc_1 = __webpack_require__(/*! ../jsonrpc */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var core_2 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.Rpc = function (id) { return function (target) {
    core_1.applyComponentDecorator({ id: id, proxy: true ***REMOVED***, target);
    inversify_binding_decorators_1.fluentProvide(jsonrpc_1.ConnectionHandler).inSingletonScope().onActivation(function (context) {
        var t = context.container.get(id);
        var pipeManager = context.container.get(core_2.PipeManager);
        return new jsonrpc_1.JsonRpcConnectionHandler(id.toString(), function () { return t; ***REMOVED***, pipeManager);
  ***REMOVED***).done(true)(jsonrpc_1.NoOpConnectionHandler);
***REMOVED*** ***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.RPC_PATH = 'malagu.rpc.path';


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/rpc/lib/common/annotation/index.js"));
__export(__webpack_require__(/*! ./jsonrpc */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/rpc/lib/common/constants.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/channel-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/channel-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var AbstractChannel = /** @class */ (function () {
    function AbstractChannel(id, doSend) {
        this.id = id;
        this.doSend = doSend;
        this.toDispose = new core_1.DisposableCollection();
        this.fireMessage = function () { ***REMOVED***
        this.fireError = function () { ***REMOVED***
  ***REMOVED***
    AbstractChannel.prototype.dispose = function () {
        this.toDispose.dispose();
    ***REMOVED***
    AbstractChannel.prototype.checkNotDisposed = function () {
        if (this.toDispose.disposed) {
            throw new Error('The channel has been disposed.');
      ***REMOVED***
    ***REMOVED***
    AbstractChannel.prototype.send = function (content) {
        this.checkNotDisposed();
        this.doSend(JSON.stringify(this.doGetMessage(content)));
    ***REMOVED***
    AbstractChannel.prototype.onMessage = function (cb) {
        var _this = this;
        this.checkNotDisposed();
        this.fireMessage = cb;
        this.toDispose.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.fireMessage = function () { ***REMOVED*** ***REMOVED***));
    ***REMOVED***
    AbstractChannel.prototype.onError = function (cb) {
        var _this = this;
        this.checkNotDisposed();
        this.fireError = cb;
        this.toDispose.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.fireError = function () { ***REMOVED*** ***REMOVED***));
    ***REMOVED***
    return AbstractChannel;
***REMOVED***());
exports.AbstractChannel = AbstractChannel;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/connection-factory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/connection-factory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var reader_1 = __webpack_require__(/*! ./reader */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/reader.js");
var writer_1 = __webpack_require__(/*! ./writer */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/writer.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.ConnnectionFactory = Symbol('ConnnectionFactory');
var ConnnectionFactoryImpl = /** @class */ (function () {
    function ConnnectionFactoryImpl() {
  ***REMOVED***
    ConnnectionFactoryImpl.prototype.create = function (channel, logger) {
        var messageReader = new reader_1.ChannelMessageReader(channel);
        var messageWriter = new writer_1.ChannelMessageWriter(channel);
        var connection = vscode_jsonrpc_1.createMessageConnection(messageReader, messageWriter, logger);
        connection.onClose(function () { return connection.dispose(); ***REMOVED***
        return connection;
    ***REMOVED***
    ConnnectionFactoryImpl = __decorate([
        core_1.Component(exports.ConnnectionFactory)
    ], ConnnectionFactoryImpl);
    return ConnnectionFactoryImpl;
***REMOVED***());
exports.ConnnectionFactoryImpl = ConnnectionFactoryImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/handler.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/handler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.ConnectionHandler = Symbol('ConnectionHandler');
var NoOpConnectionHandler = /** @class */ (function () {
    function NoOpConnectionHandler() {
  ***REMOVED***
    NoOpConnectionHandler.prototype.onConnection = function (connection) { ***REMOVED***
    return NoOpConnectionHandler;
***REMOVED***());
exports.NoOpConnectionHandler = NoOpConnectionHandler;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/http-channel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/http-channel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/channel-protocol.js");
var HttpChannel = /** @class */ (function (_super) {
    __extends(HttpChannel, _super);
    function HttpChannel(id, doSend, path) {
        var _this = _super.call(this, id, doSend) || this;
        _this.path = path;
        return _this;
  ***REMOVED***
    HttpChannel.prototype.checkNotDisposed = function () {
        // noop
    ***REMOVED***
    HttpChannel.prototype.handleMessage = function (message) {
        this.fireMessage(message.content);
    ***REMOVED***
    HttpChannel.prototype.doGetMessage = function (content) {
        return {
            kind: 'http',
            id: this.id,
            path: this.path,
            content: content
        ***REMOVED***
    ***REMOVED***
    return HttpChannel;
***REMOVED***(channel_protocol_1.AbstractChannel));
exports.HttpChannel = HttpChannel;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/handler.js"));
__export(__webpack_require__(/*! ./proxy-factory */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/proxy-factory.js"));
__export(__webpack_require__(/*! ./http-channel */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/http-channel.js"));
__export(__webpack_require__(/*! ./connection-factory */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/connection-factory.js"));
__export(__webpack_require__(/*! ./reader */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/reader.js"));
__export(__webpack_require__(/*! ./writer */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/writer.js"));
__export(__webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/channel-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/proxy-factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/proxy-factory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var JsonRpcConnectionHandler = /** @class */ (function () {
    function JsonRpcConnectionHandler(path, targetFactory, pipeManager) {
        this.path = path;
        this.targetFactory = targetFactory;
        this.pipeManager = pipeManager;
  ***REMOVED***
    JsonRpcConnectionHandler.prototype.onConnection = function (connection) {
        var factory = new JsonRpcProxyFactory(undefined, this.pipeManager);
        var proxy = factory.createProxy();
        factory.target = this.targetFactory(proxy);
        factory.listen(connection);
    ***REMOVED***
    return JsonRpcConnectionHandler;
***REMOVED***());
exports.JsonRpcConnectionHandler = JsonRpcConnectionHandler;
var JsonRpcProxyFactory = /** @class */ (function () {
    function JsonRpcProxyFactory(target, pipeMananger) {
        this.target = target;
        this.pipeMananger = pipeMananger;
        this.onDidOpenConnectionEmitter = new vscode_jsonrpc_1.Emitter();
        this.onDidCloseConnectionEmitter = new vscode_jsonrpc_1.Emitter();
        this.waitForConnection();
  ***REMOVED***
    JsonRpcProxyFactory.prototype.waitForConnection = function () {
        var _this = this;
        this.connectionPromise = new Promise(function (resolve) {
            return _this.connectionPromiseResolve = resolve;
        ***REMOVED***
        this.connectionPromise.then(function (connection) {
            connection.onClose(function () {
                return _this.onDidCloseConnectionEmitter.fire(undefined);
            ***REMOVED***
            _this.onDidOpenConnectionEmitter.fire(undefined);
        ***REMOVED***
    ***REMOVED***
    JsonRpcProxyFactory.prototype.registerMethods = function (connection) {
        var _this = this;
        if (this.target) {
            var _loop_1 = function (prop) {
                if (typeof this_1.target[prop] === 'function') {
                    connection.onRequest(prop, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                      ***REMOVED***
                        return _this.onRequest.apply(_this, __spread([prop], args));
                    ***REMOVED***
                    connection.onNotification(prop, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                      ***REMOVED***
                        return _this.onNotification.apply(_this, __spread([prop], args));
                    ***REMOVED***
              ***REMOVED***
            ***REMOVED***
            var this_1 = this;
            for (var prop in this.target) {
                _loop_1(prop);
          ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    JsonRpcProxyFactory.prototype.listen = function (connection) {
        var _this = this;
        this.registerMethods(connection);
        connection.onDispose(function () { return _this.waitForConnection(); ***REMOVED***
        connection.listen();
        this.connectionPromiseResolve(connection);
    ***REMOVED***
    JsonRpcProxyFactory.prototype.onRequest = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
      ***REMOVED***
        return __awaiter(this, void 0, void 0, function () {
            var error_1, e, reason, stack;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!this.pipeMananger) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pipeMananger.apply({ target: this.target, method: method ***REMOVED***, args)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, (_a = this.target)[method].apply(_a, __spread(args))];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        error_1 = _b.sent();
                        e = this.serializeError(error_1);
                        if (e instanceof vscode_jsonrpc_1.ResponseError) {
                            throw e;
                      ***REMOVED***
                        reason = e.message || '';
                        stack = e.stack || '';
                        console.error("Request " + method + " failed with error: " + reason, stack);
                        throw e;
                    case 5: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    JsonRpcProxyFactory.prototype.onNotification = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
      ***REMOVED***
        (_a = this.target)[method].apply(_a, __spread(args));
    ***REMOVED***
    JsonRpcProxyFactory.prototype.createProxy = function () {
        var proxy = new Proxy(this, this);
        return proxy;
    ***REMOVED***
    JsonRpcProxyFactory.prototype.get = function (target, p, receiver) {
        var method = this.getInternalMethod(p.toString());
        if (method) {
            return method;
      ***REMOVED***
        return this.createProxyMethod(p.toString());
    ***REMOVED***
    JsonRpcProxyFactory.prototype.getInternalMethod = function (method) {
        var _this = this;
        if (method === JsonRpcProxyFactory.SET_CLIENT) {
            return function (client) { return _this.target = client; ***REMOVED***
      ***REMOVED***
        if (method === JsonRpcProxyFactory.ON_DID_OPEN_CONNECTION) {
            return this.onDidOpenConnectionEmitter.event;
      ***REMOVED***
        if (method === JsonRpcProxyFactory.ON_DID_CLOSE_CONNECTION) {
            return this.onDidCloseConnectionEmitter.event;
      ***REMOVED***
    ***REMOVED***
    JsonRpcProxyFactory.prototype.createProxyMethod = function (method) {
        var _this = this;
        var isNotify = this.isNotification(method);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
          ***REMOVED***
            return __awaiter(_this, void 0, void 0, function () {
                var capturedError, connection, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            capturedError = new Error("Request '" + method + "' failed");
                            return [4 /*yield*/, this.connectionPromise];
                        case 1:
                            connection = _a.sent();
                            if (!isNotify) return [3 /*break*/, 2];
                            connection.sendNotification.apply(connection, __spread([method], args));
                            return [3 /*break*/, 5];
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, connection.sendRequest.apply(connection, __spread([method], args))];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            err_1 = _a.sent();
                            throw this.deserializeError(capturedError, err_1);
                        case 5: return [2 /*return*/];
                  ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    JsonRpcProxyFactory.prototype.isNotification = function (p) {
        return p.toString().startsWith('notify') || p.toString().startsWith('on');
    ***REMOVED***
    JsonRpcProxyFactory.prototype.serializeError = function (e) {
        if (core_1.ApplicationError.is(e)) {
            return new vscode_jsonrpc_1.ResponseError(e.code, '', Object.assign({ kind: 'application' ***REMOVED***, e.toJson()));
      ***REMOVED***
        return e;
    ***REMOVED***
    JsonRpcProxyFactory.prototype.deserializeError = function (capturedError, e) {
        if (e instanceof vscode_jsonrpc_1.ResponseError) {
            var capturedStack = capturedError.stack || '';
            if (e.data && e.data.kind === 'application') {
                var _a = e.data, stack = _a.stack, data = _a.data, message = _a.message;
                return core_1.ApplicationError.fromJson(e.code, {
                    message: message || capturedError.message,
                    data: data,
                    stack: capturedStack + "\nCaused by: " + stack
                ***REMOVED***
          ***REMOVED***
            e.stack = capturedStack;
      ***REMOVED***
        return e;
    ***REMOVED***
    JsonRpcProxyFactory.SET_CLIENT = 'setClient';
    JsonRpcProxyFactory.ON_DID_OPEN_CONNECTION = 'onDidOpenConnection';
    JsonRpcProxyFactory.ON_DID_CLOSE_CONNECTION = 'onDidCloseConnection';
    return JsonRpcProxyFactory;
***REMOVED***());
exports.JsonRpcProxyFactory = JsonRpcProxyFactory;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/reader.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/reader.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
var AbstractMessageReader = /** @class */ (function () {
    function AbstractMessageReader() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
  ***REMOVED***
    AbstractMessageReader.prototype.dispose = function () {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    ***REMOVED***
    Object.defineProperty(AbstractMessageReader.prototype, "onError", {
        get: function () {
            return this.errorEmitter.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractMessageReader.prototype.fireError = function (error) {
        this.errorEmitter.fire(this.asError(error));
    ***REMOVED***
    Object.defineProperty(AbstractMessageReader.prototype, "onClose", {
        get: function () {
            return this.closeEmitter.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractMessageReader.prototype.fireClose = function () {
        this.closeEmitter.fire(undefined);
    ***REMOVED***
    Object.defineProperty(AbstractMessageReader.prototype, "onPartialMessage", {
        get: function () {
            return this.partialMessageEmitter.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractMessageReader.prototype.firePartialMessage = function (info) {
        this.partialMessageEmitter.fire(info);
    ***REMOVED***
    AbstractMessageReader.prototype.asError = function (error) {
        if (error instanceof Error) {
            return error;
      ***REMOVED***
        else {
            return new Error("Reader received error. Reason: " + (typeof (error.message) === 'string' ? error.message : 'unknown'));
      ***REMOVED***
    ***REMOVED***
    return AbstractMessageReader;
***REMOVED***());
exports.AbstractMessageReader = AbstractMessageReader;
var ChannelMessageReader = /** @class */ (function (_super) {
    __extends(ChannelMessageReader, _super);
    function ChannelMessageReader(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        _this.state = 'initial';
        _this.events = [];
        _this.channel.onMessage(function (message) {
            return _this.readMessage(message);
        ***REMOVED***
        return _this;
  ***REMOVED***
    ChannelMessageReader.prototype.listen = function (callback) {
        if (this.state === 'initial') {
            this.state = 'listening';
            this.callback = callback;
            while (this.events.length !== 0) {
                var event_1 = this.events.pop();
                if (event_1.message) {
                    this.readMessage(event_1.message);
              ***REMOVED***
                else if (event_1.error) {
                    this.fireError(event_1.error);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    ChannelMessageReader.prototype.readMessage = function (message) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { message: message ***REMOVED***
      ***REMOVED***
        else if (this.state === 'listening') {
            var data = JSON.parse(message);
            this.callback(data);
      ***REMOVED***
    ***REMOVED***
    ChannelMessageReader.prototype.fireError = function (error) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { error: error ***REMOVED***
      ***REMOVED***
        else if (this.state === 'listening') {
            _super.prototype.fireError.call(this, error);
      ***REMOVED***
    ***REMOVED***
    return ChannelMessageReader;
***REMOVED***(AbstractMessageReader));
exports.ChannelMessageReader = ChannelMessageReader;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/common/jsonrpc/writer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/jsonrpc/writer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
var AbstractMessageWriter = /** @class */ (function () {
    function AbstractMessageWriter() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
  ***REMOVED***
    AbstractMessageWriter.prototype.dispose = function () {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    ***REMOVED***
    Object.defineProperty(AbstractMessageWriter.prototype, "onError", {
        get: function () {
            return this.errorEmitter.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractMessageWriter.prototype.fireError = function (error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
    ***REMOVED***
    Object.defineProperty(AbstractMessageWriter.prototype, "onClose", {
        get: function () {
            return this.closeEmitter.event;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    AbstractMessageWriter.prototype.fireClose = function () {
        this.closeEmitter.fire(undefined);
    ***REMOVED***
    AbstractMessageWriter.prototype.asError = function (error) {
        if (error instanceof Error) {
            return error;
      ***REMOVED***
        else {
            return new Error("Writer received error. Reason: " + (typeof error.message === 'string' ? error.message : 'unknown'));
      ***REMOVED***
    ***REMOVED***
    return AbstractMessageWriter;
***REMOVED***());
exports.AbstractMessageWriter = AbstractMessageWriter;
var ChannelMessageWriter = /** @class */ (function (_super) {
    __extends(ChannelMessageWriter, _super);
    function ChannelMessageWriter(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        _this.errorCount = 0;
        return _this;
  ***REMOVED***
    ChannelMessageWriter.prototype.write = function (msg) {
      ***REMOVED***
            var content = JSON.stringify(msg);
            this.channel.send(content);
      ***REMOVED***
        catch (e) {
            this.errorCount++;
            this.fireError(e, msg, this.errorCount);
      ***REMOVED***
    ***REMOVED***
    return ChannelMessageWriter;
***REMOVED***(AbstractMessageWriter));
exports.ChannelMessageWriter = ChannelMessageWriter;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/rpc/lib/common/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
// tslint:disable:no-any
var ChannelManager = /** @class */ (function () {
    function ChannelManager(handlers, connnectionFactory) {
        var e_1, _a;
        this.handlers = handlers;
        this.connnectionFactory = connnectionFactory;
        this._handlers = new Map();
      ***REMOVED***
            for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                var handler = handlers_1_1.value;
                this._handlers.set(handler.path, handler);
          ***REMOVED***
      ***REMOVED***
        catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
        finally {
          ***REMOVED***
                if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
          ***REMOVED***
            finally { if (e_1) throw e_1.error; ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    ChannelManager.prototype.handleChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channelStrategy;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelStrategy = node_1.Context.getAttr(channel_protocol_1.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY);
                        return [4 /*yield*/, channelStrategy.handleChannels(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, id, path, handler, channel;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, channelStrategy.getMessage()];
                                        case 1:
                                            _a = _b.sent(), id = _a.id, path = _a.path;
                                            if (!path) return [3 /*break*/, 3];
                                            handler = this._handlers.get(this.getRealPath(path));
                                            if (!handler) return [3 /*break*/, 3];
                                            return [4 /*yield*/, channelStrategy.createChannel(id)];
                                        case 2:
                                            channel = _b.sent();
                                            handler.onConnection(this.connnectionFactory.create(channel, new core_1.ConsoleLogger()));
                                            return [2 /*return*/, channel];
                                        case 3: throw new node_1.HttpError(404, "Cannot find a service for the path: " + path);
                                  ***REMOVED***
                                ***REMOVED***
                            ***REMOVED*** ***REMOVED***)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ChannelManager.prototype.getRealPath = function (path) {
        return path.split(':').pop();
    ***REMOVED***
    ChannelManager = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(common_1.ConnectionHandler)), __param(0, inversify_1.optional()),
        __param(1, core_1.Autowired(common_1.ConnnectionFactory)),
        __metadata("design:paramtypes", [Array, Object])
    ], ChannelManager);
    return ChannelManager;
***REMOVED***());
exports.ChannelManager = ChannelManager;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
var ChannelMiddleware = /** @class */ (function () {
    function ChannelMiddleware() {
        this.priority = channel_protocol_1.CHANNEL_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    ChannelMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, channelStrategy, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.channelStrategies), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        channelStrategy = _b.value;
                        return [4 /*yield*/, channelStrategy.support()];
                    case 2:
                        if (_d.sent()) {
                            node_1.Context.setAttr(channel_protocol_1.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY, channelStrategy);
                            return [3 /*break*/, 4];
                      ***REMOVED***
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 7];
                    case 6:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 7:
                        ctx.response.setHeader('Content-Type', 'application/json;charset=utf8');
                        return [4 /*yield*/, next()];
                    case 8:
                        _d.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(channel_protocol_1.ChannelStrategy),
        __metadata("design:type", Array)
    ], ChannelMiddleware.prototype, "channelStrategies", void 0);
    ChannelMiddleware = __decorate([
        core_1.Component(node_1.Middleware)
    ], ChannelMiddleware);
    return ChannelMiddleware;
***REMOVED***());
exports.ChannelMiddleware = ChannelMiddleware;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.ChannelStrategy = Symbol('ChannelStrategy');
exports.CHANNEL_MIDDLEWARE_PRIORITY = 2100;
exports.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY = 'CurrentChannelStrategyRequest';


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var jsonrpc_1 = __webpack_require__(/*! ../../common/jsonrpc */ "./node_modules/@malagu/rpc/lib/common/jsonrpc/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var HttpChannelStrategy = /** @class */ (function () {
    function HttpChannelStrategy() {
  ***REMOVED***
    HttpChannelStrategy.prototype.getMessage = function () {
        return node_1.Context.getRequest().body;
    ***REMOVED***
    HttpChannelStrategy.prototype.createChannel = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new jsonrpc_1.HttpChannel(id, function (content) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.handleMessage(content);
                            return [2 /*return*/];
                        ***REMOVED***
                    ***REMOVED*** ***REMOVED***)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpChannelStrategy.prototype.handleChannels = function (channelFactory) {
        return __awaiter(this, void 0, void 0, function () {
            var channel, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, channelFactory()];
                    case 1:
                        channel = _c.sent();
                        _b = (_a = channel).handleMessage;
                        return [4 /*yield*/, this.getMessage()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        node_1.Context.getResponse().body = new core_1.Deferred();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpChannelStrategy.prototype.handleMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var deferred;
            return __generator(this, function (_a) {
                deferred = node_1.Context.getResponse().body;
                deferred.resolve(message);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpChannelStrategy.prototype.support = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, node_1.Context.getCurrent() instanceof node_1.HttpContext];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpChannelStrategy = __decorate([
        core_1.Component(channel_protocol_1.ChannelStrategy)
    ], HttpChannelStrategy);
    return HttpChannelStrategy;
***REMOVED***());
exports.HttpChannelStrategy = HttpChannelStrategy;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./channel-manager */ "./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js"));
__export(__webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js"));
__export(__webpack_require__(/*! ./channel-strategy */ "./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js"));
__export(__webpack_require__(/*! ./channel-middleware */ "./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_1 = __webpack_require__(/*! ../channel */ "./node_modules/@malagu/rpc/lib/node/channel/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/rpc/lib/common/index.js");
exports.PATH_PARMAS_ATTR = 'pathParams';
var RpcHandlerAdapter = /** @class */ (function () {
    function RpcHandlerAdapter() {
        this.priority = handler_protocol_1.RPC_HANDLER_ADAPTER_PRIORITY;
  ***REMOVED***
    RpcHandlerAdapter.prototype.handle = function () {
        return this.channelManager.handleChannels();
    ***REMOVED***
    RpcHandlerAdapter.prototype.canHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.requestMatcher).match;
                        return [4 /*yield*/, this.pathResolver.resolve(this.rpcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired,
        __metadata("design:type", channel_1.ChannelManager)
    ], RpcHandlerAdapter.prototype, "channelManager", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], RpcHandlerAdapter.prototype, "requestMatcher", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], RpcHandlerAdapter.prototype, "pathResolver", void 0);
    __decorate([
        core_1.Value(common_1.RPC_PATH),
        __metadata("design:type", String)
    ], RpcHandlerAdapter.prototype, "rpcPath", void 0);
    RpcHandlerAdapter = __decorate([
        core_1.Component(node_1.HandlerAdapter)
    ], RpcHandlerAdapter);
    return RpcHandlerAdapter;
***REMOVED***());
exports.RpcHandlerAdapter = RpcHandlerAdapter;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.RPC_HANDLER_ADAPTER_PRIORITY = 2000;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./handler-adapter */ "./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./channel */ "./node_modules/@malagu/rpc/lib/node/channel/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/rpc/lib/node/handler/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/rpc/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__webpack_require__(/*! ../common */ "./node_modules/@malagu/rpc/lib/common/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/rpc/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/access-decision-manager.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/access-decision-manager.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/security/lib/node/error/index.js");
var AccessDecisionManagerImpl = /** @class */ (function () {
    function AccessDecisionManagerImpl(accessDecisionVoters) {
        this.accessDecisionVoters = accessDecisionVoters;
        this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.accessDecisionVoters).map(function (c) { return c.value; ***REMOVED***
  ***REMOVED***
    AccessDecisionManagerImpl.prototype.decide = function (securityMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var grant, _a, _b, voter, result, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        grant = 0;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        voter = _b.value;
                        return [4 /*yield*/, voter.support(securityMetadata)];
                    case 3:
                        if (!_d.sent()) return [3 /*break*/, 5];
                        return [4 /*yield*/, voter.vote(securityMetadata)];
                    case 4:
                        result = _d.sent();
                        if (result === access_protocol_1.ACCESS_DENIED) {
                            throw new error_1.AccessDeniedError('Access is denied');
                      ***REMOVED***
                        else if (result === access_protocol_1.ACCESS_GRANTED) {
                            grant++;
                      ***REMOVED***
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 9];
                    case 8:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 9:
                        if (grant <= 0) {
                            throw new error_1.AccessDeniedError('Access is denied');
                      ***REMOVED***
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AccessDecisionManagerImpl = __decorate([
        core_1.Component(access_protocol_1.AccessDecisionManager),
        __param(0, core_1.Autowired(access_protocol_1.AccessDecisionVoter)),
        __metadata("design:paramtypes", [Array])
    ], AccessDecisionManagerImpl);
    return AccessDecisionManagerImpl;
***REMOVED***());
exports.AccessDecisionManagerImpl = AccessDecisionManagerImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/access-decision-voter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/access-decision-voter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/security/lib/node/annotation/index.js");
var PolicyBasedVoter = /** @class */ (function () {
    function PolicyBasedVoter() {
        this.priority = access_protocol_1.POLICY_BASED_VOTER_PRIORITY;
  ***REMOVED***
    PolicyBasedVoter.prototype.vote = function (securityMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var principalPolicies, resourcePolicies, policies, grant, policies_1, policies_1_1, policy, _a, _b, policyResolver, e_1_1, e_2_1;
            var e_2, _c, e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.principalPolicyProvider.provide(securityMetadata.principal, securityMetadata.authorizeType)];
                    case 1:
                        principalPolicies = _e.sent();
                        return [4 /*yield*/, this.resourcePolicyProvider.provide(securityMetadata.resource, securityMetadata.authorizeType)];
                    case 2:
                        resourcePolicies = _e.sent();
                        policies = __spread(principalPolicies, resourcePolicies, securityMetadata.policies);
                        grant = 0;
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 15, 16, 17]);
                        policies_1 = __values(policies), policies_1_1 = policies_1.next();
                        _e.label = 4;
                    case 4:
                        if (!!policies_1_1.done) return [3 /*break*/, 14];
                        policy = policies_1_1.value;
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 11, 12, 13]);
                        _a = (e_1 = void 0, __values(this.policyResolvers)), _b = _a.next();
                        _e.label = 6;
                    case 6:
                        if (!!_b.done) return [3 /*break*/, 10];
                        policyResolver = _b.value;
                        return [4 /*yield*/, policyResolver.support(policy)];
                    case 7:
                        if (!_e.sent()) return [3 /*break*/, 9];
                        return [4 /*yield*/, policyResolver.resolve(policy, securityMetadata)];
                    case 8:
                        if (_e.sent()) {
                            grant++;
                      ***REMOVED***
                        else {
                            return [2 /*return*/, access_protocol_1.ACCESS_DENIED];
                      ***REMOVED***
                        _e.label = 9;
                    case 9:
                        _b = _a.next();
                        return [3 /*break*/, 6];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 13];
                    case 12:
                      ***REMOVED***
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 13:
                        policies_1_1 = policies_1.next();
                        return [3 /*break*/, 4];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 ***REMOVED***
                        return [3 /*break*/, 17];
                    case 16:
                      ***REMOVED***
                            if (policies_1_1 && !policies_1_1.done && (_c = policies_1.return)) _c.call(policies_1);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 17:
                        if (securityMetadata.authorizeType === annotation_1.AuthorizeType.Post || grant > 0) {
                            return [2 /*return*/, access_protocol_1.ACCESS_GRANTED];
                      ***REMOVED***
                        return [2 /*return*/, access_protocol_1.ACCESS_DENIED];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    PolicyBasedVoter.prototype.support = function (securityMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(access_protocol_1.PolicyResolver),
        __metadata("design:type", Array)
    ], PolicyBasedVoter.prototype, "policyResolvers", void 0);
    __decorate([
        core_1.Autowired(access_protocol_1.ResourcePolicyProvider),
        __metadata("design:type", Object)
    ], PolicyBasedVoter.prototype, "resourcePolicyProvider", void 0);
    __decorate([
        core_1.Autowired(access_protocol_1.PrincipalPolicyProvider),
        __metadata("design:type", Object)
    ], PolicyBasedVoter.prototype, "principalPolicyProvider", void 0);
    PolicyBasedVoter = __decorate([
        core_1.Component(access_protocol_1.AccessDecisionVoter)
    ], PolicyBasedVoter);
    return PolicyBasedVoter;
***REMOVED***());
exports.PolicyBasedVoter = PolicyBasedVoter;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/access-protocol.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/access-protocol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.AccessDecisionManager = Symbol('AccessDecisionManager');
exports.AccessDecisionVoter = Symbol('AccessDecisionVoter');
exports.SecurityMetadataSource = Symbol('SecurityMetadataSource');
exports.PolicyResolver = Symbol('PolicyResolver');
exports.SecurityExpressionContextHandler = Symbol('SecurityExpressionContextHandler');
exports.ResourcePolicyProvider = Symbol('ResourcePolicyProvider');
exports.PrincipalPolicyProvider = Symbol('PrincipalPolicyProvider');
exports.PolicyFactory = Symbol('PolicyFactory');
exports.SECURITY_EXPRESSION_CONTEXT_KEY = 'SecurityExpressionContext';
exports.ACCESS_GRANTED = 1;
exports.ACCESS_ABSTAIN = 0;
exports.ACCESS_DENIED = -1;
exports.POLICY_BASED_VOTER_PRIORITY = 2000;
var PolicyType;
(function (PolicyType) {
    PolicyType["El"] = "el";
***REMOVED***)(PolicyType = exports.PolicyType || (exports.PolicyType = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./access-decision-manager */ "./node_modules/@malagu/security/lib/node/access/access-decision-manager.js"));
__export(__webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js"));
__export(__webpack_require__(/*! ./access-decision-voter */ "./node_modules/@malagu/security/lib/node/access/access-decision-voter.js"));
__export(__webpack_require__(/*! ./method-advice */ "./node_modules/@malagu/security/lib/node/access/method-advice.js"));
__export(__webpack_require__(/*! ./policy-provider */ "./node_modules/@malagu/security/lib/node/access/policy-provider.js"));
__export(__webpack_require__(/*! ./policy-resolver */ "./node_modules/@malagu/security/lib/node/access/policy-resolver.js"));
__export(__webpack_require__(/*! ./security-metadata-source */ "./node_modules/@malagu/security/lib/node/access/security-metadata-source.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/method-advice.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/method-advice.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var authorize_1 = __webpack_require__(/*! ../annotation/authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js");
var SecurityMethodBeforeAdivice = /** @class */ (function () {
    function SecurityMethodBeforeAdivice() {
  ***REMOVED***
    SecurityMethodBeforeAdivice.prototype.before = function (method, args, target) {
        return __awaiter(this, void 0, void 0, function () {
            var securityMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.enabled !== true) {
                            return [2 /*return*/];
                      ***REMOVED***
                        if (typeof method !== 'string') {
                            return [2 /*return*/];
                      ***REMOVED***
                        return [4 /*yield*/, this.securityMetadataSource.load({ method: method, args: args, target: target, authorizeType: authorize_1.AuthorizeType.Pre ***REMOVED***)];
                    case 1:
                        securityMetadata = _a.sent();
                        return [4 /*yield*/, this.accessDecisionManager.decide(securityMetadata)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(access_protocol_1.AccessDecisionManager),
        __metadata("design:type", Object)
    ], SecurityMethodBeforeAdivice.prototype, "accessDecisionManager", void 0);
    __decorate([
        core_1.Autowired(access_protocol_1.SecurityMetadataSource),
        __metadata("design:type", Object)
    ], SecurityMethodBeforeAdivice.prototype, "securityMetadataSource", void 0);
    __decorate([
        core_1.Value('malagu.security.enabled'),
        __metadata("design:type", Boolean)
    ], SecurityMethodBeforeAdivice.prototype, "enabled", void 0);
    SecurityMethodBeforeAdivice = __decorate([
        core_1.Component(core_1.MethodBeforeAdvice)
    ], SecurityMethodBeforeAdivice);
    return SecurityMethodBeforeAdivice;
***REMOVED***());
exports.SecurityMethodBeforeAdivice = SecurityMethodBeforeAdivice;
var SecurityAfterReturningAdvice = /** @class */ (function () {
    function SecurityAfterReturningAdvice() {
  ***REMOVED***
    SecurityAfterReturningAdvice.prototype.afterReturning = function (returnValue, method, args, target) {
        return __awaiter(this, void 0, void 0, function () {
            var securityMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof method !== 'string') {
                            return [2 /*return*/];
                      ***REMOVED***
                        return [4 /*yield*/, this.securityMetadataSource.load({ method: method, args: args, target: target, returnValue: returnValue, authorizeType: authorize_1.AuthorizeType.Post ***REMOVED***)];
                    case 1:
                        securityMetadata = _a.sent();
                        return [4 /*yield*/, this.accessDecisionManager.decide(securityMetadata)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(access_protocol_1.AccessDecisionManager),
        __metadata("design:type", Object)
    ], SecurityAfterReturningAdvice.prototype, "accessDecisionManager", void 0);
    __decorate([
        core_1.Autowired(access_protocol_1.SecurityMetadataSource),
        __metadata("design:type", Object)
    ], SecurityAfterReturningAdvice.prototype, "securityMetadataSource", void 0);
    SecurityAfterReturningAdvice = __decorate([
        core_1.Component(core_1.AfterReturningAdvice)
    ], SecurityAfterReturningAdvice);
    return SecurityAfterReturningAdvice;
***REMOVED***());
exports.SecurityAfterReturningAdvice = SecurityAfterReturningAdvice;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/policy-provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/policy-provider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/security/lib/node/annotation/index.js");
var PrincipalPolicyProviderImpl = /** @class */ (function () {
    function PrincipalPolicyProviderImpl() {
  ***REMOVED***
    PrincipalPolicyProviderImpl.prototype.provide = function (principal, type) {
        return __awaiter(this, void 0, void 0, function () {
            var policies;
            return __generator(this, function (_a) {
                policies = principal && principal.policies || [];
                return [2 /*return*/, policies.filter(function (p) { return p.authorizeType === type; ***REMOVED***)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    PrincipalPolicyProviderImpl = __decorate([
        core_1.Component(access_protocol_1.PrincipalPolicyProvider)
    ], PrincipalPolicyProviderImpl);
    return PrincipalPolicyProviderImpl;
***REMOVED***());
exports.PrincipalPolicyProviderImpl = PrincipalPolicyProviderImpl;
var ResourcePolicyProviderImpl = /** @class */ (function () {
    function ResourcePolicyProviderImpl() {
        this.policyMap = new Map();
  ***REMOVED***
    ResourcePolicyProviderImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, resource, _c, _d, options, opts, preResult, postResult, result, opts_1, opts_1_1, opt;
            var e_1, _e, e_2, _f, e_3, _g;
            return __generator(this, function (_h) {
                if (this.policies) {
                  ***REMOVED***
                        for (_a = __values(Object.keys(this.policies)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            resource = _b.value;
                          ***REMOVED***
                                for (_c = (e_2 = void 0, __values(this.policies[resource])), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    options = _d.value;
                                    opts = options;
                                    if (!Array.isArray(options)) {
                                        opts = [options];
                                  ***REMOVED***
                                    preResult = [];
                                    postResult = [];
                                    result = new Map();
                                  ***REMOVED***
                                        for (opts_1 = (e_3 = void 0, __values(opts)), opts_1_1 = opts_1.next(); !opts_1_1.done; opts_1_1 = opts_1.next()) {
                                            opt = opts_1_1.value;
                                            if (!opt.type || opt.type === annotation_1.AuthorizeType.Pre) {
                                                preResult.push(opt);
                                          ***REMOVED***
                                            else if (opt.type === annotation_1.AuthorizeType.Post) {
                                                postResult.push(opt);
                                          ***REMOVED***
                                            result.set(annotation_1.AuthorizeType.Pre, preResult);
                                            result.set(annotation_1.AuthorizeType.Post, postResult);
                                      ***REMOVED***
                                  ***REMOVED***
                                    catch (e_3_1) { e_3 = { error: e_3_1 ***REMOVED*** ***REMOVED***
                                    finally {
                                      ***REMOVED***
                                            if (opts_1_1 && !opts_1_1.done && (_g = opts_1.return)) _g.call(opts_1);
                                      ***REMOVED***
                                        finally { if (e_3) throw e_3.error; ***REMOVED***
                                  ***REMOVED***
                                    this.policyMap.set(resource, result);
                              ***REMOVED***
                          ***REMOVED***
                            catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
                            finally {
                              ***REMOVED***
                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                              ***REMOVED***
                                finally { if (e_2) throw e_2.error; ***REMOVED***
                          ***REMOVED***
                      ***REMOVED***
                  ***REMOVED***
                    catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
                    finally {
                      ***REMOVED***
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ResourcePolicyProviderImpl.prototype.provide = function (resource, type) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = this.policyMap.get(resource);
                return [2 /*return*/, result && result.get(type) || []];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security.policies'),
        __metadata("design:type", Object)
    ], ResourcePolicyProviderImpl.prototype, "policies", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ResourcePolicyProviderImpl.prototype, "init", null);
    ResourcePolicyProviderImpl = __decorate([
        core_1.Component(access_protocol_1.ResourcePolicyProvider)
    ], ResourcePolicyProviderImpl);
    return ResourcePolicyProviderImpl;
***REMOVED***());
exports.ResourcePolicyProviderImpl = ResourcePolicyProviderImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/policy-resolver.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/policy-resolver.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var jexl_1 = __webpack_require__(/*! jexl */ "jexl");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var ElPolicyResolver = /** @class */ (function () {
    function ElPolicyResolver() {
  ***REMOVED***
    ElPolicyResolver.prototype.resolve = function (policy, securityMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jexl_1.evalSync(policy.el, policy.context || node_1.Context.getAttr(access_protocol_1.SECURITY_EXPRESSION_CONTEXT_KEY))];
                    case 1: return [2 /*return*/, _a.sent()];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ElPolicyResolver.prototype.support = function (policy) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, policy.type === access_protocol_1.PolicyType.El];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ElPolicyResolver = __decorate([
        core_1.Component(access_protocol_1.PolicyResolver)
    ], ElPolicyResolver);
    return ElPolicyResolver;
***REMOVED***());
exports.ElPolicyResolver = ElPolicyResolver;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/access/security-metadata-source.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/access/security-metadata-source.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var access_protocol_1 = __webpack_require__(/*! ./access-protocol */ "./node_modules/@malagu/security/lib/node/access/access-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/security/lib/node/constants.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var MethodSecurityMetadataSource = /** @class */ (function () {
    function MethodSecurityMetadataSource() {
  ***REMOVED***
    MethodSecurityMetadataSource.prototype.load = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var classPolicies, methodPolicies, ctx, policies, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        classPolicies = core_1.getOwnMetadata(constants_1.METADATA_KEY.authorize, context.target.constructor);
                        methodPolicies = core_1.getOwnMetadata(constants_1.METADATA_KEY.authorize, context.target.constructor, context.method);
                        ctx = __assign(__assign({***REMOVED***, context), context_1.SecurityContext.getAuthentication());
                        if (!this.securityExpressionContextHandler) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityExpressionContextHandler.handle(ctx)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        node_1.Context.setAttr(access_protocol_1.SECURITY_EXPRESSION_CONTEXT_KEY, ctx);
                        policies = classPolicies.concat.apply(classPolicies, __spread(methodPolicies)).filter(function (item) { return item.authorizeType === context.authorizeType; ***REMOVED***
                        resource = context.target.name;
                        return [2 /*return*/, {
                                authorizeType: context.authorizeType,
                                principal: context_1.SecurityContext.getAuthentication().principal,
                                action: context.method,
                                resource: resource,
                                policies: policies
                          ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(access_protocol_1.SecurityExpressionContextHandler), core_1.Optional,
        __metadata("design:type", Object)
    ], MethodSecurityMetadataSource.prototype, "securityExpressionContextHandler", void 0);
    MethodSecurityMetadataSource = __decorate([
        core_1.Component(access_protocol_1.SecurityMetadataSource)
    ], MethodSecurityMetadataSource);
    return MethodSecurityMetadataSource;
***REMOVED***());
exports.MethodSecurityMetadataSource = MethodSecurityMetadataSource;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/anonymous.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/anonymous.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var authorize_1 = __webpack_require__(/*! ./authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js");
exports.Anonymous = function () {
    return authorize_1.Authorize({ el: 'true', authorizeType: authorize_1.AuthorizeType.Pre ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/authenticated.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/authenticated.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var authorize_1 = __webpack_require__(/*! ./authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js");
exports.Authenticated = function () {
    return authorize_1.Authorize({ el: 'authenticated', authorizeType: authorize_1.AuthorizeType.Pre ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/authorize.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/authorize.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/security/lib/node/constants.js");
var access_1 = __webpack_require__(/*! ../access */ "./node_modules/@malagu/security/lib/node/access/index.js");
var AuthorizeType;
(function (AuthorizeType) {
    AuthorizeType["Pre"] = "Pre";
    AuthorizeType["Post"] = "Post";
***REMOVED***)(AuthorizeType = exports.AuthorizeType || (exports.AuthorizeType = {***REMOVED***));
var ElOption;
(function (ElOption) {
    function is(option) {
        return option && (option.el !== undefined || option.authorizeType);
  ***REMOVED***
    ElOption.is = is;
***REMOVED***)(ElOption = exports.ElOption || (exports.ElOption = {***REMOVED***));
exports.Authorize = function (elOrElOptionOrPolicy) {
    var policy = getPolicy(elOrElOptionOrPolicy);
    return function (target, targetKey, descriptor) {
        if (targetKey) {
            var policies = Reflect.getOwnMetadata(constants_1.METADATA_KEY.authorize, target.constructor, targetKey) || [];
            policies.push(policy);
            Reflect.defineMetadata(constants_1.METADATA_KEY.authorize, policies, target.constructor, targetKey);
      ***REMOVED***
        else {
            var policies = Reflect.getOwnMetadata(constants_1.METADATA_KEY.authorize, target.constructor) || [];
            policies.push(policy);
            Reflect.defineMetadata(constants_1.METADATA_KEY.authorize, policies, target);
      ***REMOVED***
    ***REMOVED***
***REMOVED***
function getPolicy(elOrElOptionOrPolicy) {
    var policy;
    if (typeof elOrElOptionOrPolicy === 'string') {
        policy = { authorizeType: AuthorizeType.Pre, el: elOrElOptionOrPolicy, type: access_1.PolicyType.El ***REMOVED***
  ***REMOVED***
    else {
        policy = __assign({ authorizeType: AuthorizeType.Pre, type: access_1.PolicyType.El ***REMOVED***, elOrElOptionOrPolicy);
  ***REMOVED***
    return policy;
***REMOVED***
exports.getPolicy = getPolicy;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./anonymous */ "./node_modules/@malagu/security/lib/node/annotation/anonymous.js"));
__export(__webpack_require__(/*! ./authenticated */ "./node_modules/@malagu/security/lib/node/annotation/authenticated.js"));
__export(__webpack_require__(/*! ./authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js"));
__export(__webpack_require__(/*! ./post-authorize */ "./node_modules/@malagu/security/lib/node/annotation/post-authorize.js"));
__export(__webpack_require__(/*! ./pre-authorize */ "./node_modules/@malagu/security/lib/node/annotation/pre-authorize.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/post-authorize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/post-authorize.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var authorize_1 = __webpack_require__(/*! ./authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js");
exports.PostAuthorize = function (el) {
    return authorize_1.Authorize({ el: el, authorizeType: authorize_1.AuthorizeType.Post ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/annotation/pre-authorize.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/annotation/pre-authorize.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var authorize_1 = __webpack_require__(/*! ./authorize */ "./node_modules/@malagu/security/lib/node/annotation/authorize.js");
exports.PreAuthorize = function (el) {
    return authorize_1.Authorize({ el: el, authorizeType: authorize_1.AuthorizeType.Pre ***REMOVED***
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/authentication/authentication-manager.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/authentication/authentication-manager.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var authentication_protocol_1 = __webpack_require__(/*! ./authentication-protocol */ "./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/security/lib/node/error/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var AuthenticationManagerImpl = /** @class */ (function () {
    function AuthenticationManagerImpl() {
  ***REMOVED***
    AuthenticationManagerImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.authenticationProviders).map(function (c) { return c.value; ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AuthenticationManagerImpl.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, lastError, _a, _b, authenticationProvider, error_2, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, 10, 11]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 8];
                        authenticationProvider = _b.value;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, authenticationProvider.support()];
                    case 3:
                        if (!_d.sent()) return [3 /*break*/, 5];
                        return [4 /*yield*/, authenticationProvider.authenticate()];
                    case 4:
                        result = _d.sent();
                        if (result) {
                            context_1.SecurityContext.setAuthentication(result);
                            return [2 /*return*/];
                      ***REMOVED***
                        _d.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _d.sent();
                        if (error_2 instanceof error_1.AccountStatusError) {
                            throw error_2;
                      ***REMOVED***
                        else if (error_2 instanceof error_1.AuthenticationError) {
                            lastError = error_2;
                      ***REMOVED***
                        return [3 /*break*/, 7];
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 11];
                    case 10:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 11:
                        if (lastError) {
                            throw lastError;
                      ***REMOVED***
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AuthenticationManagerImpl.prototype.support = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, authenticationProvider, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        authenticationProvider = _b.value;
                        return [4 /*yield*/, authenticationProvider.support()];
                    case 2:
                        if (_d.sent()) {
                            return [2 /*return*/, true];
                      ***REMOVED***
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 ***REMOVED***
                        return [3 /*break*/, 7];
                    case 6:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, false];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(authentication_protocol_1.AuthenticationProvider),
        __metadata("design:type", Array)
    ], AuthenticationManagerImpl.prototype, "authenticationProviders", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AuthenticationManagerImpl.prototype, "init", null);
    AuthenticationManagerImpl = __decorate([
        core_1.Component(authentication_protocol_1.AuthenticationManager)
    ], AuthenticationManagerImpl);
    return AuthenticationManagerImpl;
***REMOVED***());
exports.AuthenticationManagerImpl = AuthenticationManagerImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/authentication/authentication-middleware.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/authentication/authentication-middleware.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var authentication_protocol_1 = __webpack_require__(/*! ./authentication-protocol */ "./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js");
var AuthenticationMiddleWare = /** @class */ (function () {
    function AuthenticationMiddleWare() {
        this.priority = authentication_protocol_1.AUTHENTICATION_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    AuthenticationMiddleWare.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationManager.support()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.authenticationManager.authenticate()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, next()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(authentication_protocol_1.AuthenticationManager),
        __metadata("design:type", Object)
    ], AuthenticationMiddleWare.prototype, "authenticationManager", void 0);
    AuthenticationMiddleWare = __decorate([
        core_1.Component(node_1.Middleware)
    ], AuthenticationMiddleWare);
    return AuthenticationMiddleWare;
***REMOVED***());
exports.AuthenticationMiddleWare = AuthenticationMiddleWare;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
exports.AuthenticationProvider = Symbol('AuthenticationProvider');
exports.AuthenticationManager = Symbol('AuthenticationManager');
exports.AUTHENTICATION_MIDDLEWARE_PRIORITY = context_1.SECURITY_CONTEXT_MIDDLEWARE_PRIORITY - 100;
exports.DEFAULT_AUTHENTICATION_PROVIDER__PRIORITY = 2000;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/authentication/authentication-provider.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/authentication/authentication-provider.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var authentication_protocol_1 = __webpack_require__(/*! ./authentication-protocol */ "./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var crypto_1 = __webpack_require__(/*! ../crypto */ "./node_modules/@malagu/security/lib/node/crypto/index.js");
var user_1 = __webpack_require__(/*! ../user */ "./node_modules/@malagu/security/lib/node/user/index.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/security/lib/node/error/index.js");
var AuthenticationProviderImpl = /** @class */ (function () {
    function AuthenticationProviderImpl() {
        this.priority = authentication_protocol_1.DEFAULT_AUTHENTICATION_PROVIDER__PRIORITY;
  ***REMOVED***
    AuthenticationProviderImpl.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, password, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.doGetValue(this.options.usernameKey);
                        password = this.doGetValue(this.options.passwordKey);
                        if (!password || !username) {
                            throw new error_1.BadCredentialsError('Bad credentials');
                      ***REMOVED***
                        return [4 /*yield*/, this.userStore.load(username)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.userChecker.check(user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passwordEncoder.matches(password, user.password)];
                    case 3:
                        if (!(_a.sent())) {
                            throw new error_1.BadCredentialsError('Bad credentials');
                      ***REMOVED***
                        node_1.Context.getResponse().statusCode = 302;
                        node_1.Context.getResponse().setHeader('Location', this.options.loginSuccessUrl);
                        return [2 /*return*/, {
                                principal: user,
                                credentials: '',
                                policies: user.policies,
                                authenticated: true
                          ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AuthenticationProviderImpl.prototype.doGetValue = function (key) {
        var request = node_1.Context.getRequest();
        if (request.body) {
            return request.body[key];
      ***REMOVED***
        else {
            return request.query[key];
      ***REMOVED***
    ***REMOVED***
    AuthenticationProviderImpl.prototype.support = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestMatcher.match(this.options.loginUrl, this.options.loginMethod)];
                    case 1: return [2 /*return*/, !!(_a.sent())];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "options", void 0);
    __decorate([
        core_1.Autowired(crypto_1.PasswordEncoder),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "passwordEncoder", void 0);
    __decorate([
        core_1.Autowired(user_1.UserStore),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "userStore", void 0);
    __decorate([
        core_1.Autowired(user_1.UserChecker),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "userChecker", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "requestMatcher", void 0);
    AuthenticationProviderImpl = __decorate([
        core_1.Component(authentication_protocol_1.AuthenticationProvider)
    ], AuthenticationProviderImpl);
    return AuthenticationProviderImpl;
***REMOVED***());
exports.AuthenticationProviderImpl = AuthenticationProviderImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/authentication/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/authentication/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./authentication-protocol */ "./node_modules/@malagu/security/lib/node/authentication/authentication-protocol.js"));
__export(__webpack_require__(/*! ./authentication-manager */ "./node_modules/@malagu/security/lib/node/authentication/authentication-manager.js"));
__export(__webpack_require__(/*! ./authentication-provider */ "./node_modules/@malagu/security/lib/node/authentication/authentication-provider.js"));
__export(__webpack_require__(/*! ./authentication-middleware */ "./node_modules/@malagu/security/lib/node/authentication/authentication-middleware.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.METADATA_KEY = {
    authorize: 'malagu:authorize',
***REMOVED***


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/context/context-protocol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/context/context-protocol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var session_protocol_1 = __webpack_require__(/*! @malagu/web/lib/node/session/session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
exports.SECURITY_CONTEXT_MIDDLEWARE_PRIORITY = session_protocol_1.SESSION_MIDDLEWARE_PRIORITY - 100;
exports.CURRENT_SECURITY_CONTEXT_REQUEST_KEY = 'CurrentSecurityContextRequest';
exports.SecurityContextStore = Symbol('SecurityContextStore');
exports.SecurityContextStrategy = Symbol('SecurityContextStrategy');
var SecurityContext;
(function (SecurityContext) {
    function setCurrent(context) {
        node_1.Context.setAttr(exports.CURRENT_SECURITY_CONTEXT_REQUEST_KEY, context);
  ***REMOVED***
    SecurityContext.setCurrent = setCurrent;
    function getCurrent() {
        return node_1.Context.getAttr(exports.CURRENT_SECURITY_CONTEXT_REQUEST_KEY, node_1.AttributeScope.Request);
  ***REMOVED***
    SecurityContext.getCurrent = getCurrent;
    function getAuthentication() {
        return getCurrent().authentication;
  ***REMOVED***
    SecurityContext.getAuthentication = getAuthentication;
    function setAuthentication(authentication) {
        getCurrent().authentication = authentication;
  ***REMOVED***
    SecurityContext.setAuthentication = setAuthentication;
***REMOVED***)(SecurityContext = exports.SecurityContext || (exports.SecurityContext = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/context/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/context/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./context-protocol */ "./node_modules/@malagu/security/lib/node/context/context-protocol.js"));
__export(__webpack_require__(/*! ./security-context-middleware */ "./node_modules/@malagu/security/lib/node/context/security-context-middleware.js"));
__export(__webpack_require__(/*! ./security-context-store */ "./node_modules/@malagu/security/lib/node/context/security-context-store.js"));
__export(__webpack_require__(/*! ./security-context-strategy */ "./node_modules/@malagu/security/lib/node/context/security-context-strategy.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/context/security-context-middleware.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/context/security-context-middleware.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_protocol_1 = __webpack_require__(/*! ./context-protocol */ "./node_modules/@malagu/security/lib/node/context/context-protocol.js");
var SecurityContextMiddleWare = /** @class */ (function () {
    function SecurityContextMiddleWare() {
        this.priority = context_protocol_1.SECURITY_CONTEXT_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    SecurityContextMiddleWare.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.securityContextStore.load()];
                    case 1:
                        context = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, , 4, 6]);
                        context_protocol_1.SecurityContext.setCurrent(context);
                        return [4 /*yield*/, next()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.securityContextStore.save(context_protocol_1.SecurityContext.getCurrent())];
                    case 5:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], SecurityContextMiddleWare.prototype, "options", void 0);
    __decorate([
        core_1.Autowired(context_protocol_1.SecurityContextStore),
        __metadata("design:type", Object)
    ], SecurityContextMiddleWare.prototype, "securityContextStore", void 0);
    SecurityContextMiddleWare = __decorate([
        core_1.Component(node_1.Middleware)
    ], SecurityContextMiddleWare);
    return SecurityContextMiddleWare;
***REMOVED***());
exports.SecurityContextMiddleWare = SecurityContextMiddleWare;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/context/security-context-store.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/context/security-context-store.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_protocol_1 = __webpack_require__(/*! ./context-protocol */ "./node_modules/@malagu/security/lib/node/context/context-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var SessionSecurityContextStore = /** @class */ (function () {
    function SessionSecurityContextStore() {
  ***REMOVED***
    SessionSecurityContextStore.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = node_1.Context.getSession()[this.options.contextKey];
                        if (!!context) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityContextStrategy.create()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, context];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionSecurityContextStore.prototype.save = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                node_1.Context.getSession()[this.options.contextKey] = context;
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], SessionSecurityContextStore.prototype, "options", void 0);
    __decorate([
        core_1.Autowired(context_protocol_1.SecurityContextStrategy),
        __metadata("design:type", Object)
    ], SessionSecurityContextStore.prototype, "securityContextStrategy", void 0);
    SessionSecurityContextStore = __decorate([
        core_1.Component(context_protocol_1.SecurityContextStore)
    ], SessionSecurityContextStore);
    return SessionSecurityContextStore;
***REMOVED***());
exports.SessionSecurityContextStore = SessionSecurityContextStore;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/context/security-context-strategy.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/context/security-context-strategy.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_protocol_1 = __webpack_require__(/*! ./context-protocol */ "./node_modules/@malagu/security/lib/node/context/context-protocol.js");
var SecurityContextImpl = /** @class */ (function () {
    function SecurityContextImpl() {
  ***REMOVED***
    return SecurityContextImpl;
***REMOVED***());
exports.SecurityContextImpl = SecurityContextImpl;
var SessionSecurityContextStrategy = /** @class */ (function () {
    function SessionSecurityContextStrategy() {
  ***REMOVED***
    SessionSecurityContextStrategy.prototype.create = function () {
        var securityContext = new SecurityContextImpl();
        securityContext.authentication = {
            principal: 'anonymousUser',
            policies: [],
            credentials: '',
            authenticated: false
        ***REMOVED***
        return Promise.resolve(securityContext);
    ***REMOVED***
    SessionSecurityContextStrategy = __decorate([
        core_1.Component(context_protocol_1.SecurityContextStrategy)
    ], SessionSecurityContextStrategy);
    return SessionSecurityContextStrategy;
***REMOVED***());
exports.SessionSecurityContextStrategy = SessionSecurityContextStrategy;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/crypto/crypto-protocol.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/crypto/crypto-protocol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.PasswordEncoder = Symbol('PasswordEncoder');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/crypto/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/crypto/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./crypto-protocol */ "./node_modules/@malagu/security/lib/node/crypto/crypto-protocol.js"));
__export(__webpack_require__(/*! ./password-encoder */ "./node_modules/@malagu/security/lib/node/crypto/password-encoder.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/crypto/password-encoder.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/crypto/password-encoder.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var crypto_protocol_1 = __webpack_require__(/*! ./crypto-protocol */ "./node_modules/@malagu/security/lib/node/crypto/crypto-protocol.js");
var crypto_js_1 = __webpack_require__(/*! crypto-js */ "crypto-js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var Pbkdf2PasswordEncoder = /** @class */ (function () {
    function Pbkdf2PasswordEncoder() {
  ***REMOVED***
    Pbkdf2PasswordEncoder.prototype.encode = function (rawPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var encodeHashAsBase64, salt, encoded;
            return __generator(this, function (_a) {
                encodeHashAsBase64 = this.options.encodeHashAsBase64;
                salt = crypto_js_1.lib.WordArray.random(8);
                encoded = this.doEncode(rawPassword, salt);
                if (encodeHashAsBase64) {
                    return [2 /*return*/, crypto_js_1.enc.Base64.stringify(crypto_js_1.enc.Utf8.parse(encoded))];
              ***REMOVED***
                return [2 /*return*/, encoded];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    Pbkdf2PasswordEncoder.prototype.doEncode = function (rawPassword, salt) {
        var secret = this.options.secret;
        return salt + crypto_js_1.PBKDF2(rawPassword, salt + secret, this.options).toString();
    ***REMOVED***
    Pbkdf2PasswordEncoder.prototype.matches = function (rawPassword, encodedPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var digested, salt;
            return __generator(this, function (_a) {
                digested = this.doDecode(encodedPassword);
                salt = digested.substring(0, 16);
                return [2 /*return*/, digested === this.doEncode(rawPassword, salt)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    Pbkdf2PasswordEncoder.prototype.doDecode = function (encoded) {
        var encodeHashAsBase64 = this.options.encodeHashAsBase64;
        if (encodeHashAsBase64) {
            return crypto_js_1.enc.Base64.parse(encoded).toString(crypto_js_1.enc.Utf8);
      ***REMOVED***
        return encoded;
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security.passwordEncoder'),
        __metadata("design:type", Object)
    ], Pbkdf2PasswordEncoder.prototype, "options", void 0);
    Pbkdf2PasswordEncoder = __decorate([
        core_1.Component(crypto_protocol_1.PasswordEncoder)
    ], Pbkdf2PasswordEncoder);
    return Pbkdf2PasswordEncoder;
***REMOVED***());
exports.Pbkdf2PasswordEncoder = Pbkdf2PasswordEncoder;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/error/error-hander.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/error/error-hander.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var error_protocol_1 = __webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/security/lib/node/error/error-protocol.js");
var error_1 = __webpack_require__(/*! ./error */ "./node_modules/@malagu/security/lib/node/error/error.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
var node_2 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var AuthenticationErrorHandler = /** @class */ (function () {
    function AuthenticationErrorHandler() {
        this.priority = error_protocol_1.AUTHENTICATION_ERROR_HANDlER_PRIORITY;
  ***REMOVED***
    AuthenticationErrorHandler_1 = AuthenticationErrorHandler;
    AuthenticationErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof error_1.AuthenticationError);
    ***REMOVED***
    AuthenticationErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (ctx.request.headers[node_2.X_REQUESTED_WITH] === node_2.XML_HTTP_REQUEST) {
                    ctx.response.statusCode = 401;
                    ctx.response.setHeader('WWW-Authenticate', "Basic realm=\"" + this.realm + "\"");
                    ctx.response.end(err.message);
              ***REMOVED***
                else {
                    ctx.response.statusCode = 302;
                    ctx.response.setHeader('Location', this.loginPage);
                    ctx.response.end(err.message);
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var AuthenticationErrorHandler_1;
    __decorate([
        core_1.Value('malagu.security.basic.realm'),
        __metadata("design:type", String)
    ], AuthenticationErrorHandler.prototype, "realm", void 0);
    __decorate([
        core_1.Value('malagu.security.loginPage'),
        __metadata("design:type", String)
    ], AuthenticationErrorHandler.prototype, "loginPage", void 0);
    AuthenticationErrorHandler = AuthenticationErrorHandler_1 = __decorate([
        core_1.Component([AuthenticationErrorHandler_1, node_1.ErrorHandler])
    ], AuthenticationErrorHandler);
    return AuthenticationErrorHandler;
***REMOVED***());
exports.AuthenticationErrorHandler = AuthenticationErrorHandler;
var AccessDeniedErrorHandler = /** @class */ (function () {
    function AccessDeniedErrorHandler() {
        this.priority = error_protocol_1.ACCESS_DENIED_ERROR_HANDlER_PRIORITY;
  ***REMOVED***
    AccessDeniedErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof error_1.AccessDeniedError);
    ***REMOVED***
    AccessDeniedErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context_1.SecurityContext.getAuthentication().authenticated) return [3 /*break*/, 1];
                        ctx.response.statusCode = 403;
                        ctx.response.end(err.message);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.authenticationErrorHandler.handle(ctx, new error_1.AuthenticationError())];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(AuthenticationErrorHandler),
        __metadata("design:type", AuthenticationErrorHandler)
    ], AccessDeniedErrorHandler.prototype, "authenticationErrorHandler", void 0);
    AccessDeniedErrorHandler = __decorate([
        core_1.Component(node_1.ErrorHandler)
    ], AccessDeniedErrorHandler);
    return AccessDeniedErrorHandler;
***REMOVED***());
exports.AccessDeniedErrorHandler = AccessDeniedErrorHandler;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/error/error-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/error/error-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
exports.ACCESS_DENIED_ERROR_HANDlER_PRIORITY = node_1.HTTP_ERROR_HANDlER_PRIORITY + 100;
exports.AUTHENTICATION_ERROR_HANDlER_PRIORITY = exports.ACCESS_DENIED_ERROR_HANDlER_PRIORITY + 100;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/error/error.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/error/error.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var AuthenticationError = /** @class */ (function (_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError(message) {
        return _super.call(this, message) || this;
  ***REMOVED***
    return AuthenticationError;
***REMOVED***(core_1.CustomError));
exports.AuthenticationError = AuthenticationError;
var AccountStatusError = /** @class */ (function (_super) {
    __extends(AccountStatusError, _super);
    function AccountStatusError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return AccountStatusError;
***REMOVED***(AuthenticationError));
exports.AccountStatusError = AccountStatusError;
var UsernameNotFoundError = /** @class */ (function (_super) {
    __extends(UsernameNotFoundError, _super);
    function UsernameNotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return UsernameNotFoundError;
***REMOVED***(AuthenticationError));
exports.UsernameNotFoundError = UsernameNotFoundError;
var BadCredentialsError = /** @class */ (function (_super) {
    __extends(BadCredentialsError, _super);
    function BadCredentialsError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return BadCredentialsError;
***REMOVED***(AuthenticationError));
exports.BadCredentialsError = BadCredentialsError;
var LockedError = /** @class */ (function (_super) {
    __extends(LockedError, _super);
    function LockedError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return LockedError;
***REMOVED***(AccountStatusError));
exports.LockedError = LockedError;
var DisabledError = /** @class */ (function (_super) {
    __extends(DisabledError, _super);
    function DisabledError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return DisabledError;
***REMOVED***(AccountStatusError));
exports.DisabledError = DisabledError;
var AccountExpiredError = /** @class */ (function (_super) {
    __extends(AccountExpiredError, _super);
    function AccountExpiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return AccountExpiredError;
***REMOVED***(AccountStatusError));
exports.AccountExpiredError = AccountExpiredError;
var CredentialsExpiredError = /** @class */ (function (_super) {
    __extends(CredentialsExpiredError, _super);
    function CredentialsExpiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return CredentialsExpiredError;
***REMOVED***(AccountStatusError));
exports.CredentialsExpiredError = CredentialsExpiredError;
var AccessDeniedError = /** @class */ (function (_super) {
    __extends(AccessDeniedError, _super);
    function AccessDeniedError() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    return AccessDeniedError;
***REMOVED***(core_1.CustomError));
exports.AccessDeniedError = AccessDeniedError;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/error/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/error/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/security/lib/node/error/error.js"));
__export(__webpack_require__(/*! ./error-hander */ "./node_modules/@malagu/security/lib/node/error/error-hander.js"));
__export(__webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/security/lib/node/error/error-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./authentication */ "./node_modules/@malagu/security/lib/node/authentication/index.js"));
__export(__webpack_require__(/*! ./context */ "./node_modules/@malagu/security/lib/node/context/index.js"));
__export(__webpack_require__(/*! ./crypto */ "./node_modules/@malagu/security/lib/node/crypto/index.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/security/lib/node/error/index.js"));
__export(__webpack_require__(/*! ./user */ "./node_modules/@malagu/security/lib/node/user/index.js"));
__export(__webpack_require__(/*! ./access */ "./node_modules/@malagu/security/lib/node/access/index.js"));
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/security/lib/node/annotation/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/security/lib/node/constants.js"));
__export(__webpack_require__(/*! ./logout */ "./node_modules/@malagu/security/lib/node/logout/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./logout-protocol */ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js"));
__export(__webpack_require__(/*! ./logout-middleware */ "./node_modules/@malagu/security/lib/node/logout/logout-middleware.js"));
__export(__webpack_require__(/*! ./logout-handler */ "./node_modules/@malagu/security/lib/node/logout/logout-handler.js"));
__export(__webpack_require__(/*! ./logout-success-handler */ "./node_modules/@malagu/security/lib/node/logout/logout-success-handler.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/logout-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/logout-handler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var logout_protocol_1 = __webpack_require__(/*! ./logout-protocol */ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
var SecurityContextLogoutHandler = /** @class */ (function () {
    function SecurityContextLogoutHandler() {
  ***REMOVED***
    SecurityContextLogoutHandler.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.SecurityContext.setCurrent(undefined);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SecurityContextLogoutHandler = __decorate([
        core_1.Component(logout_protocol_1.LogoutHandler)
    ], SecurityContextLogoutHandler);
    return SecurityContextLogoutHandler;
***REMOVED***());
exports.SecurityContextLogoutHandler = SecurityContextLogoutHandler;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/logout-middleware.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/logout-middleware.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var logout_protocol_1 = __webpack_require__(/*! ./logout-protocol */ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js");
var logout_success_handler_provider_1 = __webpack_require__(/*! ./logout-success-handler-provider */ "./node_modules/@malagu/security/lib/node/logout/logout-success-handler-provider.js");
var LogoutMiddleWare = /** @class */ (function () {
    function LogoutMiddleWare() {
        this.priority = logout_protocol_1.LOGOUT_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    LogoutMiddleWare.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, logoutHandler, e_1_1, _c, _d, logoutSuccessHandler, e_2_1;
            var e_1, _e, e_2, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.requiresLogout()];
                    case 1:
                        if (!_g.sent()) return [3 /*break*/, 17];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        _a = __values(this.logoutHandlers), _b = _a.next();
                        _g.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        logoutHandler = _b.value;
                        return [4 /*yield*/, logoutHandler.logout()];
                    case 4:
                        _g.sent();
                        _g.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 9];
                    case 8:
                      ***REMOVED***
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 9:
                        _g.trys.push([9, 14, 15, 16]);
                        _c = __values(this.logoutSuccessHandlerProvider.provide()), _d = _c.next();
                        _g.label = 10;
                    case 10:
                        if (!!_d.done) return [3 /*break*/, 13];
                        logoutSuccessHandler = _d.value;
                        return [4 /*yield*/, logoutSuccessHandler.onLogoutSuccess()];
                    case 11:
                        _g.sent();
                        _g.label = 12;
                    case 12:
                        _d = _c.next();
                        return [3 /*break*/, 10];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 ***REMOVED***
                        return [3 /*break*/, 16];
                    case 15:
                      ***REMOVED***
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                      ***REMOVED***
                        finally { if (e_2) throw e_2.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                    case 17: return [4 /*yield*/, next()];
                    case 18:
                        _g.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    LogoutMiddleWare.prototype.requiresLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestMatcher.match(this.logoutUrl, this.logoutMethod)];
                    case 1: return [2 /*return*/, !!(_a.sent())];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(logout_protocol_1.LogoutHandler),
        __metadata("design:type", Array)
    ], LogoutMiddleWare.prototype, "logoutHandlers", void 0);
    __decorate([
        core_1.Autowired(logout_success_handler_provider_1.LogoutSuccessHandlerProvider),
        __metadata("design:type", logout_success_handler_provider_1.LogoutSuccessHandlerProvider)
    ], LogoutMiddleWare.prototype, "logoutSuccessHandlerProvider", void 0);
    __decorate([
        core_1.Value('malagu.security.logoutUrl'),
        __metadata("design:type", String)
    ], LogoutMiddleWare.prototype, "logoutUrl", void 0);
    __decorate([
        core_1.Value('malagu.security.logoutMethod'),
        __metadata("design:type", String)
    ], LogoutMiddleWare.prototype, "logoutMethod", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], LogoutMiddleWare.prototype, "requestMatcher", void 0);
    LogoutMiddleWare = __decorate([
        core_1.Component(node_1.Middleware)
    ], LogoutMiddleWare);
    return LogoutMiddleWare;
***REMOVED***());
exports.LogoutMiddleWare = LogoutMiddleWare;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/logout-protocol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/security/lib/node/context/index.js");
exports.LogoutHandler = Symbol('LogoutHandler');
exports.LogoutSuccessHandler = Symbol('LogoutSuccessHandler');
exports.LOGOUT_MIDDLEWARE_PRIORITY = context_1.SECURITY_CONTEXT_MIDDLEWARE_PRIORITY - 50;
exports.LOGOUT_SUCCESS_HANDLER_PRIORITY = 2000;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/logout-success-handler-provider.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/logout-success-handler-provider.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var logout_protocol_1 = __webpack_require__(/*! ./logout-protocol */ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js");
var LogoutSuccessHandlerProvider = /** @class */ (function () {
    function LogoutSuccessHandlerProvider(logoutSuccessHandler) {
        this.logoutSuccessHandler = logoutSuccessHandler;
  ***REMOVED***
    LogoutSuccessHandlerProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.logoutSuccessHandler).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    LogoutSuccessHandlerProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(logout_protocol_1.LogoutSuccessHandler)),
        __metadata("design:paramtypes", [Array])
    ], LogoutSuccessHandlerProvider);
    return LogoutSuccessHandlerProvider;
***REMOVED***());
exports.LogoutSuccessHandlerProvider = LogoutSuccessHandlerProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/logout/logout-success-handler.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/logout/logout-success-handler.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var logout_protocol_1 = __webpack_require__(/*! ./logout-protocol */ "./node_modules/@malagu/security/lib/node/logout/logout-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var SimpleUrlLogoutSuccessHandler = /** @class */ (function () {
    function SimpleUrlLogoutSuccessHandler() {
        this.priority = logout_protocol_1.LOGOUT_SUCCESS_HANDLER_PRIORITY;
  ***REMOVED***
    SimpleUrlLogoutSuccessHandler_1 = SimpleUrlLogoutSuccessHandler;
    SimpleUrlLogoutSuccessHandler.prototype.onLogoutSuccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                node_1.Context.getResponse().statusCode = 302;
                node_1.Context.getResponse().setHeader('Location', this.logoutSuccessUrl);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var SimpleUrlLogoutSuccessHandler_1;
    __decorate([
        core_1.Value('malagu.security.logoutSuccessUrl'),
        __metadata("design:type", String)
    ], SimpleUrlLogoutSuccessHandler.prototype, "logoutSuccessUrl", void 0);
    SimpleUrlLogoutSuccessHandler = SimpleUrlLogoutSuccessHandler_1 = __decorate([
        core_1.Component([SimpleUrlLogoutSuccessHandler_1, logout_protocol_1.LogoutSuccessHandler])
    ], SimpleUrlLogoutSuccessHandler);
    return SimpleUrlLogoutSuccessHandler;
***REMOVED***());
exports.SimpleUrlLogoutSuccessHandler = SimpleUrlLogoutSuccessHandler;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/module.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/module.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__export(__webpack_require__(/*! . */ "./node_modules/@malagu/security/lib/node/index.js"));
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/user/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/user/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./user-protocol */ "./node_modules/@malagu/security/lib/node/user/user-protocol.js"));
__export(__webpack_require__(/*! ./user-store */ "./node_modules/@malagu/security/lib/node/user/user-store.js"));
__export(__webpack_require__(/*! ./user-checker */ "./node_modules/@malagu/security/lib/node/user/user-checker.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/user/user-checker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/user/user-checker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var user_protocol_1 = __webpack_require__(/*! ./user-protocol */ "./node_modules/@malagu/security/lib/node/user/user-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/security/lib/node/error/index.js");
var UserCheckerImpl = /** @class */ (function () {
    function UserCheckerImpl() {
  ***REMOVED***
    UserCheckerImpl.prototype.check = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!user.accountNonLocked) {
                    this.logger.debug('User account is locked');
                    throw new error_1.LockedError('User account is locked');
              ***REMOVED***
                if (!user.enabled) {
                    this.logger.debug('User account is disabled');
                    throw new error_1.DisabledError('User is disabled');
              ***REMOVED***
                if (!user.accountNonExpired) {
                    this.logger.debug('User account is expired');
                    throw new error_1.AccountExpiredError('User account has expired');
              ***REMOVED***
                if (!user.credentialsNonExpired) {
                    this.logger.debug('User account is expired');
                    throw new error_1.CredentialsExpiredError('User credentials have expired');
              ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", Object)
    ], UserCheckerImpl.prototype, "logger", void 0);
    UserCheckerImpl = __decorate([
        core_1.Component(user_protocol_1.UserChecker)
    ], UserCheckerImpl);
    return UserCheckerImpl;
***REMOVED***());
exports.UserCheckerImpl = UserCheckerImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/user/user-protocol.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/user/user-protocol.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.UserStore = Symbol('UserStore');
exports.UserChecker = Symbol('UserChecker');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/security/lib/node/user/user-store.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/security/lib/node/user/user-store.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var user_protocol_1 = __webpack_require__(/*! ./user-protocol */ "./node_modules/@malagu/security/lib/node/user/user-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/security/lib/node/error/index.js");
var access_1 = __webpack_require__(/*! ../access */ "./node_modules/@malagu/security/lib/node/access/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/security/lib/node/annotation/index.js");
var UserStoreImpl = /** @class */ (function () {
    function UserStoreImpl() {
  ***REMOVED***
    UserStoreImpl.prototype.load = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.options.username === username) {
                    return [2 /*return*/, {
                            username: username,
                            password: this.options.password,
                            accountNonExpired: true,
                            accountNonLocked: true,
                            credentialsNonExpired: true,
                            enabled: true,
                            policies: [{
                                    type: access_1.PolicyType.El,
                                    authorizeType: annotation_1.AuthorizeType.Pre,
                                    el: 'true'
                              ***REMOVED***]
                      ***REMOVED***];
              ***REMOVED***
                throw new error_1.UsernameNotFoundError("Could not find: " + username);
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], UserStoreImpl.prototype, "options", void 0);
    UserStoreImpl = __decorate([
        core_1.Component(user_protocol_1.UserStore)
    ], UserStoreImpl);
    return UserStoreImpl;
***REMOVED***());
exports.UserStoreImpl = UserStoreImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/common/application-lifecycle.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/common/application-lifecycle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@malagu/typeorm/lib/common/constants.js");
var entity_provider_1 = __webpack_require__(/*! ./entity-provider */ "./node_modules/@malagu/typeorm/lib/common/entity-provider.js");
var TypeOrmApplicationLifecycle = /** @class */ (function () {
    function TypeOrmApplicationLifecycle() {
  ***REMOVED***
    TypeOrmApplicationLifecycle.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var ormConfig, configs, configs_1, configs_1_1, config, _a;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ormConfig = this.options.ormConfig;
                        if (Array.isArray(ormConfig)) {
                            configs = ormConfig;
                      ***REMOVED***
                        else {
                            ormConfig.name = constants_1.DEFAULT_CONNECTION_NAME;
                            configs = [ormConfig];
                      ***REMOVED***
                      ***REMOVED***
                            for (configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                                config = configs_1_1.value;
                                config.entities = entity_provider_1.EntityProvider.getEntities(config.name) || [];
                          ***REMOVED***
                      ***REMOVED***
                        catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
                        finally {
                          ***REMOVED***
                                if (configs_1_1 && !configs_1_1.done && (_b = configs_1.return)) _b.call(configs_1);
                          ***REMOVED***
                            finally { if (e_1) throw e_1.error; ***REMOVED***
                      ***REMOVED***
                        _a = this;
                        return [4 /*yield*/, typeorm_1.createConnections(configs)];
                    case 1:
                        _a.connections = _c.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    TypeOrmApplicationLifecycle.prototype.onStop = function (app) {
        var e_2, _a;
        if (this.connections) {
          ***REMOVED***
                for (var _b = __values(this.connections), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var connection = _c.value;
                    connection.close();
              ***REMOVED***
          ***REMOVED***
            catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
            finally {
              ***REMOVED***
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              ***REMOVED***
                finally { if (e_2) throw e_2.error; ***REMOVED***
          ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.typeorm'),
        __metadata("design:type", Object)
    ], TypeOrmApplicationLifecycle.prototype, "options", void 0);
    TypeOrmApplicationLifecycle = __decorate([
        core_1.Component(core_1.ApplicationLifecycle)
    ], TypeOrmApplicationLifecycle);
    return TypeOrmApplicationLifecycle;
***REMOVED***());
exports.TypeOrmApplicationLifecycle = TypeOrmApplicationLifecycle;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/common/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/common/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.DEFAULT_CONNECTION_NAME = 'default';


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/common/entity-provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/common/entity-provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@malagu/typeorm/lib/common/constants.js");
var _entitiyMap = new Map();
function autoBindEntities(entities, name) {
    var e_1, _a;
    if (name === void 0) { name = constants_1.DEFAULT_CONNECTION_NAME; ***REMOVED***
    var _entities = entities;
    if (!Array.isArray(entities)) {
        _entities = [];
      ***REMOVED***
            for (var _b = __values(Object.keys(entities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _entities.push(entities[key]);
          ***REMOVED***
      ***REMOVED***
        catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
        finally {
          ***REMOVED***
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          ***REMOVED***
            finally { if (e_1) throw e_1.error; ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    if (!_entitiyMap.get(name)) {
  ***REMOVED***
    var current = _entitiyMap.get(name) || [];
    _entitiyMap.set(name, __spread(current, _entities));
***REMOVED***
exports.autoBindEntities = autoBindEntities;
var EntityProvider;
(function (EntityProvider) {
    function getEntities(name) {
        if (name === void 0) { name = constants_1.DEFAULT_CONNECTION_NAME; ***REMOVED***
        return _entitiyMap.get(name);
  ***REMOVED***
    EntityProvider.getEntities = getEntities;
***REMOVED***)(EntityProvider = exports.EntityProvider || (exports.EntityProvider = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/common/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/common/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/typeorm/lib/common/constants.js"));
__export(__webpack_require__(/*! ./entity-provider */ "./node_modules/@malagu/typeorm/lib/common/entity-provider.js"));
__export(__webpack_require__(/*! ./application-lifecycle */ "./node_modules/@malagu/typeorm/lib/common/application-lifecycle.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/annotation/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/annotation/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./transactional */ "./node_modules/@malagu/typeorm/lib/node/annotation/transactional.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/annotation/transactional.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/annotation/transactional.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/typeorm/lib/common/index.js");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/typeorm/lib/node/context/index.js");
var Propagation;
(function (Propagation) {
    Propagation[Propagation["Required"] = 0] = "Required";
    Propagation[Propagation["RequiresNew"] = 1] = "RequiresNew";
***REMOVED***)(Propagation = exports.Propagation || (exports.Propagation = {***REMOVED***));
var TransactionalOption;
(function (TransactionalOption) {
    function is(option) {
        return option && (option.name !== undefined || option.isolation !== undefined || option.readOnly !== undefined);
  ***REMOVED***
    TransactionalOption.is = is;
***REMOVED***)(TransactionalOption = exports.TransactionalOption || (exports.TransactionalOption = {***REMOVED***));
exports.Transactional = function (nameOrTransactionalOption) {
    var _a = getTransactionalOption(nameOrTransactionalOption), name = _a.name, isolation = _a.isolation, propagation = _a.propagation, readOnly = _a.readOnly;
    return function (target, methodName, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
          ***REMOVED***
            return __awaiter(this, void 0, void 0, function () {
                var em, callback;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (propagation === Propagation.Required) {
                                em = context_1.OrmContext.getEntityManager(name);
                                if (em && em.queryRunner && (em.queryRunner.isTransactionActive || readOnly)) {
                                    return [2 /*return*/, originalMethod.apply(this, args)];
                              ***REMOVED***
                          ***REMOVED***
                            callback = function (entityManager) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            context_1.OrmContext.pushEntityManager(name, entityManager);
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, , 3, 4]);
                                            return [4 /*yield*/, originalMethod.apply(this, args)];
                                        case 2: return [2 /*return*/, _a.sent()];
                                        case 3:
                                            context_1.OrmContext.popEntityManager(name);
                                            return [7 /*endfinally*/];
                                        case 4: return [2 /*return*/];
                                  ***REMOVED***
                                ***REMOVED***
                            ***REMOVED*** ***REMOVED***
                            if (!readOnly) return [3 /*break*/, 2];
                            return [4 /*yield*/, callback(typeorm_1.getConnection(name).manager)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            if (isolation) {
                                return [2 /*return*/, typeorm_1.getConnection(name).manager.transaction(isolation, callback)];
                          ***REMOVED***
                            else {
                                return [2 /*return*/, typeorm_1.getConnection(name).manager.transaction(callback)];
                          ***REMOVED***
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                  ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
***REMOVED***
function getTransactionalOption(nameOrTransactionalOption) {
    var defaultOption = {
        name: common_1.DEFAULT_CONNECTION_NAME,
        propagation: Propagation.Required,
        readOnly: false
    ***REMOVED***
    var option = defaultOption;
    if (TransactionalOption.is(nameOrTransactionalOption)) {
        option = __assign(__assign({***REMOVED***, defaultOption), nameOrTransactionalOption);
  ***REMOVED***
    else if (nameOrTransactionalOption) {
        option = __assign(__assign({***REMOVED***, defaultOption), { name: nameOrTransactionalOption ***REMOVED***
  ***REMOVED***
    return option;
***REMOVED***
exports.getTransactionalOption = getTransactionalOption;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/context/context-protocol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/context/context-protocol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/typeorm/lib/common/index.js");
exports.CURRENT_ORM_CONTEXT_REQUEST_KEY = 'CurrentOrmContextRequest';
var OrmContext;
(function (OrmContext) {
    function getEntityManager(name) {
        if (name === void 0) { name = common_1.DEFAULT_CONNECTION_NAME; ***REMOVED***
        var entityManagerMap = node_1.Context.getAttr(exports.CURRENT_ORM_CONTEXT_REQUEST_KEY, node_1.AttributeScope.Request);
        if (entityManagerMap) {
            var entityManagers = entityManagerMap.get(name);
            if (entityManagers && entityManagers.length > 0) {
                return entityManagers[entityManagers.length - 1];
          ***REMOVED***
      ***REMOVED***
        return undefined;
  ***REMOVED***
    OrmContext.getEntityManager = getEntityManager;
    function getRepository(target, name) {
        return getEntityManager(name).getRepository(target);
  ***REMOVED***
    OrmContext.getRepository = getRepository;
    function getTreeRepository(target, name) {
        return getEntityManager(name).getTreeRepository(target);
  ***REMOVED***
    OrmContext.getTreeRepository = getTreeRepository;
    function getMongoRepository(target, name) {
        return getEntityManager(name).getMongoRepository(target);
  ***REMOVED***
    OrmContext.getMongoRepository = getMongoRepository;
    function getCustomRepository(customRepository, name) {
        return getEntityManager(name).getCustomRepository(customRepository);
  ***REMOVED***
    OrmContext.getCustomRepository = getCustomRepository;
    function pushEntityManager(name, entityManager) {
        var entityManagerMap = node_1.Context.getAttr(exports.CURRENT_ORM_CONTEXT_REQUEST_KEY, node_1.AttributeScope.Request);
        if (!entityManagerMap) {
            entityManagerMap = new Map();
            entityManagerMap.set(name, []);
            node_1.Context.setAttr(exports.CURRENT_ORM_CONTEXT_REQUEST_KEY, entityManagerMap);
      ***REMOVED***
        entityManagerMap.get(name).push(entityManager);
  ***REMOVED***
    OrmContext.pushEntityManager = pushEntityManager;
    function popEntityManager(name) {
        var entityManagerMap = node_1.Context.getAttr(exports.CURRENT_ORM_CONTEXT_REQUEST_KEY, node_1.AttributeScope.Request);
        if (entityManagerMap) {
            var entityManagers = entityManagerMap.get(name);
            if (entityManagers && entityManagers.length > 0) {
                return entityManagers.pop();
          ***REMOVED***
      ***REMOVED***
  ***REMOVED***
    OrmContext.popEntityManager = popEntityManager;
***REMOVED***)(OrmContext = exports.OrmContext || (exports.OrmContext = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/context/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/context/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./context-protocol */ "./node_modules/@malagu/typeorm/lib/node/context/context-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/typeorm/lib/node/annotation/index.js"));
__export(__webpack_require__(/*! ./context */ "./node_modules/@malagu/typeorm/lib/node/context/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/typeorm/lib/node/module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/typeorm/lib/node/module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__export(__webpack_require__(/*! ../common */ "./node_modules/@malagu/typeorm/lib/common/index.js"));
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.ENDPOINT = 'malagu.server.endpoint';
exports.SERVER_PATH = 'malagu.server.path';
exports.CORS = 'malagu.web.cors';


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/web/lib/common/resolver/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/web/lib/common/constants.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/common/resolver/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./path-resolver */ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/path-resolver.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var urlJoin = __webpack_require__(/*! url-join */ "url-join");
var PathResolverImpl = /** @class */ (function () {
    function PathResolverImpl() {
  ***REMOVED***
    PathResolverImpl.prototype.resolve = function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
      ***REMOVED***
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, urlJoin.apply(void 0, __spread([this.serverPath], parts))];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.server.path'),
        __metadata("design:type", String)
    ], PathResolverImpl.prototype, "serverPath", void 0);
    PathResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.PathResolver)
    ], PathResolverImpl);
    return PathResolverImpl;
***REMOVED***());
exports.PathResolverImpl = PathResolverImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.PathResolver = Symbol('PathResolver');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/application/dev-application-entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/application/dev-application-entry.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! @malagu/core/lib/common/container/dynamic-container */ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js"));
__export(__webpack_require__(/*! @malagu/core/lib/common/container/container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js"));
__export(__webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js"));
__export(__webpack_require__(/*! ../dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/index.js"));
__export(__webpack_require__(/*! ../../common */ "./node_modules/@malagu/web/lib/common/index.js"));
__export(__webpack_require__(/*! @malagu/core/lib/common/application */ "./node_modules/@malagu/core/lib/common/application/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/context.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/context.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var requestContext = __webpack_require__(/*! express-http-context */ "express-http-context");
var AttributeScope;
(function (AttributeScope) {
    AttributeScope[AttributeScope["App"] = 0] = "App";
    AttributeScope[AttributeScope["Request"] = 1] = "Request";
    AttributeScope[AttributeScope["Session"] = 2] = "Session";
***REMOVED***)(AttributeScope = exports.AttributeScope || (exports.AttributeScope = {***REMOVED***));
exports.CURRENT_CONTEXT_REQUEST_KEY = 'CurrentContextRequest';
exports.CURRENT_COOKIES_REQUEST_KEY = 'CurrentCookiesRequest';
exports.CURRENT_SESSION_REQUEST_KEY = 'CurrentSessionRequest';
var appAttrs = new Map();
var Context;
(function (Context) {
    function run(fn) {
        requestContext.ns.run(fn);
  ***REMOVED***
    Context.run = run;
    function setCurrent(context) {
        requestContext.set(exports.CURRENT_CONTEXT_REQUEST_KEY, context);
  ***REMOVED***
    Context.setCurrent = setCurrent;
    function getCurrent() {
        return requestContext.get(exports.CURRENT_CONTEXT_REQUEST_KEY);
  ***REMOVED***
    Context.getCurrent = getCurrent;
    function getRequest() {
        return getCurrent().request;
  ***REMOVED***
    Context.getRequest = getRequest;
    function getResponse() {
        return getCurrent().response;
  ***REMOVED***
    Context.getResponse = getResponse;
    function getCookies() {
        return requestContext.get(exports.CURRENT_COOKIES_REQUEST_KEY);
  ***REMOVED***
    Context.getCookies = getCookies;
    function setCookies(cookies) {
        requestContext.set(exports.CURRENT_COOKIES_REQUEST_KEY, cookies);
  ***REMOVED***
    Context.setCookies = setCookies;
    function getSession() {
        return requestContext.get(exports.CURRENT_SESSION_REQUEST_KEY);
  ***REMOVED***
    Context.getSession = getSession;
    function setSession(session) {
        requestContext.set(exports.CURRENT_SESSION_REQUEST_KEY, session);
  ***REMOVED***
    Context.setSession = setSession;
    function setAttr(key, value, scope) {
        if (scope === void 0) { scope = AttributeScope.Request; ***REMOVED***
        if (scope === AttributeScope.Request) {
            requestContext.set(key, value);
      ***REMOVED***
        else if (scope === AttributeScope.Session) {
            getSession()[key] = value;
      ***REMOVED***
        else {
            appAttrs.set(key, value);
      ***REMOVED***
  ***REMOVED***
    Context.setAttr = setAttr;
    function getAttr(key, scope) {
        if (scope) {
            if (scope === AttributeScope.Request) {
                return requestContext.get(key);
          ***REMOVED***
            else if (scope === AttributeScope.Session) {
                return getSession()[key];
          ***REMOVED***
            else {
                return appAttrs.get(key);
          ***REMOVED***
      ***REMOVED***
        else {
            var value = requestContext.get(key);
            value = value ? value : getSession()[key];
            return value ? value : appAttrs.get(key);
      ***REMOVED***
  ***REMOVED***
    Context.getAttr = getAttr;
***REMOVED***)(Context = exports.Context || (exports.Context = {***REMOVED***));
var HttpContext = /** @class */ (function () {
    function HttpContext(request, response) {
        this.request = request;
        this.response = response;
  ***REMOVED***
    return HttpContext;
***REMOVED***());
exports.HttpContext = HttpContext;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var _Cookies = __webpack_require__(/*! cookies */ "cookies");
var CookiesFactory = /** @class */ (function () {
    function CookiesFactory() {
  ***REMOVED***
    CookiesFactory.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = new _Cookies(context_1.Context.getRequest(), context_1.Context.getResponse(), {
                    keys: this.keys,
                    secure: this.secure
                ***REMOVED***
                return [2 /*return*/, cookies];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.cookies.keys'),
        __metadata("design:type", Array)
    ], CookiesFactory.prototype, "keys", void 0);
    __decorate([
        core_1.Value('malagu.cookies.secure'),
        __metadata("design:type", Boolean)
    ], CookiesFactory.prototype, "secure", void 0);
    CookiesFactory = __decorate([
        core_1.Component()
    ], CookiesFactory);
    return CookiesFactory;
***REMOVED***());
exports.CookiesFactory = CookiesFactory;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cookies_factory_1 = __webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js");
var cookies_protocol_1 = __webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js");
var CookiesMiddleware = /** @class */ (function () {
    function CookiesMiddleware() {
        this.priority = cookies_protocol_1.COOKIES_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    CookiesMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!ctx.request) return [3 /*break*/, 2];
                        _b = (_a = context_1.Context).setCookies;
                        return [4 /*yield*/, this.cookiesFactory.create()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(cookies_factory_1.CookiesFactory),
        __metadata("design:type", cookies_factory_1.CookiesFactory)
    ], CookiesMiddleware.prototype, "cookiesFactory", void 0);
    CookiesMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], CookiesMiddleware);
    return CookiesMiddleware;
***REMOVED***());
exports.CookiesMiddleware = CookiesMiddleware;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
exports.COOKIES_MIDDLEWARE_PRIORITY = http_1.HTTP_MIDDLEWARE_PRIORITY - 100;
exports.Cookies = Symbol('Cookies');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cookies/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js"));
__export(__webpack_require__(/*! ./cookies-middleware */ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js"));
__export(__webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cors = __webpack_require__(/*! cors */ "cors");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/web/lib/common/index.js");
var cors_protocol_1 = __webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js");
var CorsMiddleware = /** @class */ (function () {
    function CorsMiddleware() {
        this.priority = cors_protocol_1.CORS_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    CorsMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return cors(_this.options)(ctx.request, ctx.response, function () { return next().then(resolve).catch(reject); ***REMOVED*** ***REMOVED***)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value(common_1.CORS),
        __metadata("design:type", Object)
    ], CorsMiddleware.prototype, "options", void 0);
    CorsMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], CorsMiddleware);
    return CorsMiddleware;
***REMOVED***());
exports.CorsMiddleware = CorsMiddleware;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.CORS_MIDDLEWARE_PRIORITY = 2100;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/cors/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js"));
__export(__webpack_require__(/*! ./cors-middleware */ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.Dispatcher = Symbol('Dispatcher');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var error_hander_provider_1 = __webpack_require__(/*! ../error/error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js");
var dispatcher_protocol_1 = __webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ../handler/handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var DispatcherImpl = /** @class */ (function () {
    function DispatcherImpl() {
  ***REMOVED***
    DispatcherImpl.prototype.dispatch = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var middlewares, handler, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        context_1.Context.setCurrent(ctx);
                        middlewares = this.middlewareProvider.provide();
                        return [4 /*yield*/, this.handlerMapping.getHandler()];
                    case 1:
                        handler = _a.sent();
                        return [4 /*yield*/, this.handlerExecutionChain.execute(handler, middlewares)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.handleError(ctx, err_1)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    DispatcherImpl.prototype.handleError = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            var errorHandlers, errorHandlers_1, errorHandlers_1_1, handler, error_1, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        errorHandlers = this.errorHandlerProvider.provide();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        errorHandlers_1 = __values(errorHandlers), errorHandlers_1_1 = errorHandlers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!errorHandlers_1_1.done) return [3 /*break*/, 9];
                        handler = errorHandlers_1_1.value;
                        return [4 /*yield*/, handler.canHandle(ctx, err)];
                    case 3:
                        if (!_b.sent()) return [3 /*break*/, 8];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, handler.handle(ctx, err)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        return [3 /*break*/, 8];
                    case 7: return [2 /*return*/];
                    case 8:
                        errorHandlers_1_1 = errorHandlers_1.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 12];
                    case 11:
                      ***REMOVED***
                            if (errorHandlers_1_1 && !errorHandlers_1_1.done && (_a = errorHandlers_1.return)) _a.call(errorHandlers_1);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerMapping),
        __metadata("design:type", Object)
    ], DispatcherImpl.prototype, "handlerMapping", void 0);
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerExecutionChain),
        __metadata("design:type", Object)
    ], DispatcherImpl.prototype, "handlerExecutionChain", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", middleware_1.MiddlewareProvider)
    ], DispatcherImpl.prototype, "middlewareProvider", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", error_hander_provider_1.ErrorHandlerProvider)
    ], DispatcherImpl.prototype, "errorHandlerProvider", void 0);
    DispatcherImpl = __decorate([
        core_1.Component(dispatcher_protocol_1.Dispatcher)
    ], DispatcherImpl);
    return DispatcherImpl;
***REMOVED***());
exports.DispatcherImpl = DispatcherImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js"));
__export(__webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-hander-provider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var error_protocol_1 = __webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js");
var http_error_1 = __webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js");
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
var AbstractErrorHandler = /** @class */ (function () {
    function AbstractErrorHandler() {
        this.priority = error_protocol_1.DEFALUT_ERROR_HANDlER_PRIORITY;
  ***REMOVED***
    AbstractErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(true);
    ***REMOVED***
    AbstractErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error(err);
                        ctx.response.statusCode = 500;
                        ctx.response.end(err.message);
                        return [4 /*yield*/, this.doHandle(ctx, err)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AbstractErrorHandler.prototype.doHandle = function (ctx, err) {
        return Promise.resolve();
    ***REMOVED***
    AbstractErrorHandler = __decorate([
        inversify_1.injectable()
    ], AbstractErrorHandler);
    return AbstractErrorHandler;
***REMOVED***());
exports.AbstractErrorHandler = AbstractErrorHandler;
var DefaultErrorHandler = /** @class */ (function (_super) {
    __extends(DefaultErrorHandler, _super);
    function DefaultErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
  ***REMOVED***
    DefaultErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], DefaultErrorHandler);
    return DefaultErrorHandler;
***REMOVED***(AbstractErrorHandler));
exports.DefaultErrorHandler = DefaultErrorHandler;
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        this.priority = error_protocol_1.HTTP_ERROR_HANDlER_PRIORITY;
  ***REMOVED***
    HttpErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof http_error_1.HttpError);
    ***REMOVED***
    HttpErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = err.statusCode;
                ctx.response.end(err.message);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], HttpErrorHandler);
    return HttpErrorHandler;
***REMOVED***());
exports.HttpErrorHandler = HttpErrorHandler;
var ValidationErrorsHandler = /** @class */ (function () {
    function ValidationErrorsHandler() {
        this.priority = error_protocol_1.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY;
  ***REMOVED***
    ValidationErrorsHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof core_1.ValidationErrors);
    ***REMOVED***
    ValidationErrorsHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = http_1.HttpStatus.BAD_REQUEST;
                ctx.response.end(err.message);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ValidationErrorsHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], ValidationErrorsHandler);
    return ValidationErrorsHandler;
***REMOVED***());
exports.ValidationErrorsHandler = ValidationErrorsHandler;
var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(handlers) {
        this.handlers = handlers;
  ***REMOVED***
    ErrorHandlerProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlers).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    ErrorHandlerProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(error_protocol_1.ErrorHandler)),
        __metadata("design:paramtypes", [Array])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
***REMOVED***());
exports.ErrorHandlerProvider = ErrorHandlerProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/error/error-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.ErrorHandler = Symbol('ErrorHandler');
exports.DEFALUT_ERROR_HANDlER_PRIORITY = 500;
exports.HTTP_ERROR_HANDlER_PRIORITY = exports.DEFALUT_ERROR_HANDlER_PRIORITY + 100;
exports.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY = exports.HTTP_ERROR_HANDlER_PRIORITY + 100;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/error/http-error.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/http-error.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] ***REMOVED*** instanceof Array && function (d, b) { d.__proto__ = b; ***REMOVED***) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; ***REMOVED***
        return extendStatics(d, b);
    ***REMOVED***
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; ***REMOVED***
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    ***REMOVED***
***REMOVED***)();
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(statusCode, message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
  ***REMOVED***
    return HttpError;
***REMOVED***(core_1.CustomError));
exports.HttpError = HttpError;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/error/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js"));
__export(__webpack_require__(/*! ./error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js"));
__export(__webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var HandlerExecutionChainImpl = /** @class */ (function () {
    function HandlerExecutionChainImpl() {
  ***REMOVED***
    HandlerExecutionChainImpl.prototype.execute = function (handler, middlewares) {
        var middleware = middleware_1.compose(middlewares);
        return middleware(context_1.Context.getCurrent(), {
            handle: function (c, next) { return handler.handle(); ***REMOVED***,
            priority: 0
        ***REMOVED***
    ***REMOVED***
    HandlerExecutionChainImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerExecutionChain)
    ], HandlerExecutionChainImpl);
    return HandlerExecutionChainImpl;
***REMOVED***());
exports.HandlerExecutionChainImpl = HandlerExecutionChainImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-mapping.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/web/lib/node/error/index.js");
var HandlerMappingImpl = /** @class */ (function () {
    function HandlerMappingImpl(handlerAdapters) {
        this.handlerAdapters = handlerAdapters;
        this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlerAdapters).map(function (c) { return c.value; ***REMOVED***
  ***REMOVED***
    HandlerMappingImpl.prototype.getHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, handler, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        handler = _b.value;
                        return [4 /*yield*/, handler.canHandle()];
                    case 2:
                        if (_d.sent()) {
                            return [2 /*return*/, handler];
                      ***REMOVED***
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 ***REMOVED***
                        return [3 /*break*/, 7];
                    case 6:
                      ***REMOVED***
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      ***REMOVED***
                        finally { if (e_1) throw e_1.error; ***REMOVED***
                        return [7 /*endfinally*/];
                    case 7: throw new error_1.HttpError(404, 'Not found a suitable handler adapter');
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HandlerMappingImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerMapping),
        __param(0, core_1.Autowired(handler_protocol_1.HandlerAdapter)),
        __metadata("design:paramtypes", [Array])
    ], HandlerMappingImpl);
    return HandlerMappingImpl;
***REMOVED***());
exports.HandlerMappingImpl = HandlerMappingImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.HandlerExecutionChain = Symbol('HandlerExecutionChain');
exports.HandlerAdapter = Symbol('HandlerAdapter');
exports.HandlerMapping = Symbol('HandlerMapping');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./handler-execution-chain */ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js"));
__export(__webpack_require__(/*! ./handler-mapping */ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/http/http-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var http_protocol_1 = __webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js");
var HttpMiddleware = /** @class */ (function () {
    function HttpMiddleware() {
        this.priority = http_protocol_1.HTTP_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    HttpMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, next()];
                    case 1:
                        _c.sent();
                        response = ctx.response;
                        if (!!response.finished) return [3 /*break*/, 4];
                        body = response.body;
                        if (!(body instanceof core_1.Deferred)) return [3 /*break*/, 3];
                        _b = (_a = response).end;
                        return [4 /*yield*/, body.promise];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        response.end(response.body);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    HttpMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], HttpMiddleware);
    return HttpMiddleware;
***REMOVED***());
exports.HttpMiddleware = HttpMiddleware;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/http/http-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var cors_1 = __webpack_require__(/*! ../cors */ "./node_modules/@malagu/web/lib/node/cors/index.js");
exports.HTTP_MIDDLEWARE_PRIORITY = cors_1.CORS_MIDDLEWARE_PRIORITY - 100;
exports.XML_HTTP_REQUEST = 'XMLHttpRequest';
exports.X_REQUESTED_WITH = 'X-Requested-With';
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
***REMOVED***)(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {***REMOVED***));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/http/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js"));
__export(__webpack_require__(/*! ./http-middleware */ "./node_modules/@malagu/web/lib/node/http/http-middleware.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/index.js"));
__export(__webpack_require__(/*! ./context */ "./node_modules/@malagu/web/lib/node/context.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/web/lib/node/error/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/web/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/index.js"));
__export(__webpack_require__(/*! ./http */ "./node_modules/@malagu/web/lib/node/http/index.js"));
__export(__webpack_require__(/*! ./matcher */ "./node_modules/@malagu/web/lib/node/matcher/index.js"));
__export(__webpack_require__(/*! ./cors */ "./node_modules/@malagu/web/lib/node/cors/index.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/matcher/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js"));
__export(__webpack_require__(/*! ./request-matcher */ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.RequestMatcher = Symbol('RequestMatcher');


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/request-matcher.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var matcher_protocol_1 = __webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var UrlPattern = __webpack_require__(/*! url-pattern */ "url-pattern");
var RequestMatcherImpl = /** @class */ (function () {
    function RequestMatcherImpl() {
        this.caches = new Map();
  ***REMOVED***
    RequestMatcherImpl.prototype.match = function (pattern, method) {
        return __awaiter(this, void 0, void 0, function () {
            var request, path, urlPathern;
            return __generator(this, function (_a) {
                request = context_1.Context.getRequest();
                path = request.path;
                if (method && request.method && method.toLowerCase() !== request.method.toLowerCase()) {
                    return [2 /*return*/, false];
              ***REMOVED***
                pattern = pattern || '/';
                if (typeof pattern === 'string') {
                    urlPathern = this.caches.get(pattern);
                    if (!urlPathern) {
                        urlPathern = new UrlPattern(pattern);
                        this.caches.set(pattern, urlPathern);
                  ***REMOVED***
              ***REMOVED***
                else {
                    urlPathern = new UrlPattern(pattern);
              ***REMOVED***
                return [2 /*return*/, urlPathern.match(path)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    RequestMatcherImpl = __decorate([
        core_1.Component(matcher_protocol_1.RequestMatcher)
    ], RequestMatcherImpl);
    return RequestMatcherImpl;
***REMOVED***());
exports.RequestMatcherImpl = RequestMatcherImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/middleware/compose.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/compose.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
function compose(middlewares) {
    return function (ctx, next) {
        var index = -1;
        var dispatch = function (i) {
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times'));
          ***REMOVED***
            index = i;
            var middleware = middlewares[i];
            if (i === middlewares.length) {
                middleware = next;
          ***REMOVED***
            if (!middleware) {
                return Promise.resolve();
          ***REMOVED***
          ***REMOVED***
                return middleware.handle(ctx, function () { return dispatch(i + 1); ***REMOVED***
          ***REMOVED***
            catch (err) {
                return Promise.reject(err);
          ***REMOVED***
        ***REMOVED***
        return dispatch(0);
    ***REMOVED***
***REMOVED***
exports.compose = compose;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/middleware/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./middleware-provider */ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js"));
__export(__webpack_require__(/*! ./compose */ "./node_modules/@malagu/web/lib/node/middleware/compose.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.Middleware = Symbol('Middleware');
var MiddlewareProvider = /** @class */ (function () {
    function MiddlewareProvider(middlewares) {
        this.middlewares = middlewares;
  ***REMOVED***
    MiddlewareProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.middlewares).map(function (c) { return c.value; ***REMOVED***
      ***REMOVED***
        return this.prioritized;
    ***REMOVED***
    MiddlewareProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(exports.Middleware)), __param(0, core_1.Optional),
        __metadata("design:paramtypes", [Array])
    ], MiddlewareProvider);
    return MiddlewareProvider;
***REMOVED***());
exports.MiddlewareProvider = MiddlewareProvider;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! ../common */ "./node_modules/@malagu/web/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/web/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./session-manager */ "./node_modules/@malagu/web/lib/node/session/session-manager.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js"));
__export(__webpack_require__(/*! ./session-store */ "./node_modules/@malagu/web/lib/node/session/session-store.js"));
__export(__webpack_require__(/*! ./session-strategy */ "./node_modules/@malagu/web/lib/node/session/session-strategy.js"));
__export(__webpack_require__(/*! ./session-middleware */ "./node_modules/@malagu/web/lib/node/session/session-middleware.js"));


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-manager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var SessionManagerImpl = /** @class */ (function () {
    function SessionManagerImpl() {
  ***REMOVED***
    SessionManagerImpl.prototype.getSessionId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = context_1.Context.getCookies();
                return [2 /*return*/, cookies.get(this.sessionIdKey)];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionManagerImpl.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sessionId, session, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (context_1.Context.getSession()) {
                            return [2 /*return*/, context_1.Context.getSession()];
                      ***REMOVED***
                        return [4 /*yield*/, this.getSessionId()];
                    case 1:
                        sessionId = _b.sent();
                        if (!sessionId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sessionStore.get(sessionId)];
                    case 2:
                        session = _b.sent();
                        _a = session;
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.sessionStrategy.valid(session)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (_a) {
                            return [2 /*return*/, session];
                      ***REMOVED***
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.sessionStrategy.create()];
                    case 6: return [2 /*return*/, _b.sent()];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionManagerImpl.prototype.remove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context_1.Context.getSession()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sessionStore.remove(context_1.Context.getSession().id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        context_1.Context.getCookies().set(this.sessionIdKey, '', {
                            expires: session_protocol_1.COOKIE_EXP_DATE,
                            maxAge: false,
                        ***REMOVED***
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionManagerImpl.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = context_1.Context.getSession();
                        if (!session) {
                            return [2 /*return*/];
                      ***REMOVED***
                        return [4 /*yield*/, this.sessionStrategy.shouldSaveSession(session)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sessionStore.set(session)];
                    case 2:
                        _a.sent();
                        context_1.Context.getCookies().set(this.sessionIdKey, session.id);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.session.sessionIdKey'),
        __metadata("design:type", String)
    ], SessionManagerImpl.prototype, "sessionIdKey", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStrategy", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStore),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStore", void 0);
    SessionManagerImpl = __decorate([
        core_1.Component(session_protocol_1.SessionManager)
    ], SessionManagerImpl);
    return SessionManagerImpl;
***REMOVED***());
exports.SessionManagerImpl = SessionManagerImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var SessionMiddleware = /** @class */ (function () {
    function SessionMiddleware() {
        this.priority = session_protocol_1.SESSION_MIDDLEWARE_PRIORITY;
  ***REMOVED***
    SessionMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = context_1.Context).setSession;
                        return [4 /*yield*/, this.sessionManager.get()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, , 4, 7]);
                        return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!this.sessionOptions.autoCommit) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sessionManager.commit()];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Autowired(session_protocol_1.SessionManager),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionManager", void 0);
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionOptions", void 0);
    SessionMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], SessionMiddleware);
    return SessionMiddleware;
***REMOVED***());
exports.SessionMiddleware = SessionMiddleware;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var cookies_1 = __webpack_require__(/*! ../cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js");
exports.Session = Symbol('Session');
exports.SessionStore = Symbol('SessionStore');
exports.SessionManager = Symbol('SessionManager');
exports.SessionStrategy = Symbol('SessionStrategy');
exports.COOKIE_EXP_DATE = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
exports.SESSION_MIDDLEWARE_PRIORITY = cookies_1.COOKIES_MIDDLEWARE_PRIORITY - 100;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session-store.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var CookieSessionStore = /** @class */ (function () {
    function CookieSessionStore() {
  ***REMOVED***
    CookieSessionStore.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = context_1.Context.getCookies().get(this.sessionOptions.sessionKey, this.sessionOptions);
                        if (!value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sessionStrategy.create(JSON.parse(Buffer.from(value, 'base64').toString('utf8')))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    CookieSessionStore.prototype.set = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.Context.getCookies().set(this.sessionOptions.sessionKey, Buffer.from(JSON.stringify(session.toJSON())).toString('base64'), this.sessionOptions);
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    CookieSessionStore.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.Context.getCookies().set(this.sessionOptions.sessionKey, '', {
                    expires: session_protocol_1.COOKIE_EXP_DATE,
                    maxAge: false,
                ***REMOVED***
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionOptions", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionStrategy", void 0);
    CookieSessionStore = __decorate([
        core_1.Component(session_protocol_1.SessionStore)
    ], CookieSessionStore);
    return CookieSessionStore;
***REMOVED***());
exports.CookieSessionStore = CookieSessionStore;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session-strategy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-strategy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var session_1 = __webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var SessionStrategyImpl = /** @class */ (function () {
    function SessionStrategyImpl() {
  ***REMOVED***
    SessionStrategyImpl.prototype.valid = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (session.expire && session.expire < Date.now()) {
                    return [2 /*return*/, false];
              ***REMOVED***
                return [2 /*return*/, true];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    SessionStrategyImpl.prototype.create = function (obj) {
        return Promise.resolve(new session_1.SessionImpl(this.sessionOptions, obj));
    ***REMOVED***
    SessionStrategyImpl.prototype.shouldSaveSession = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var expire, maxAge;
            return __generator(this, function (_a) {
                if (session.changed) {
                    return [2 /*return*/, true];
              ***REMOVED***
                // save if opts.renew and session will expired
                if (this.sessionOptions.renew === true) {
                    expire = session.expire;
                    maxAge = session.maxAge;
                    // renew when session will expired in maxAge / 2
                    if (expire && maxAge && expire - Date.now() < maxAge / 2) {
                        return [2 /*return*/, true];
                  ***REMOVED***
              ***REMOVED***
                return [2 /*return*/, false];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionStrategyImpl.prototype, "sessionOptions", void 0);
    SessionStrategyImpl = __decorate([
        core_1.Component(session_protocol_1.SessionStrategy)
    ], SessionStrategyImpl);
    return SessionStrategyImpl;
***REMOVED***());
exports.SessionStrategyImpl = SessionStrategyImpl;


/***/ ***REMOVED***),

/***/ "./node_modules/@malagu/web/lib/node/session/session.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var uuid = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
var crc = __webpack_require__(/*! crc */ "crc").crc32;
var SessionImpl = /** @class */ (function () {
    function SessionImpl(sessionOptions, obj) {
        var e_1, _a;
        this.id = uuid();
        this.isNew = true;
        if (obj) {
            this.isNew = false;
          ***REMOVED***
                for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    this[key] = obj[key];
              ***REMOVED***
          ***REMOVED***
            catch (e_1_1) { e_1 = { error: e_1_1 ***REMOVED*** ***REMOVED***
            finally {
              ***REMOVED***
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              ***REMOVED***
                finally { if (e_1) throw e_1.error; ***REMOVED***
          ***REMOVED***
      ***REMOVED***
        else {
            this.expire = sessionOptions.maxAge + Date.now();
            this.maxAge = sessionOptions.maxAge;
      ***REMOVED***
        this._preHash = this.hash();
  ***REMOVED***
    SessionImpl.prototype.hash = function () {
        return crc(JSON.stringify(this.toJSON()));
    ***REMOVED***
    SessionImpl.prototype.toJSON = function () {
        var e_2, _a;
        var obj = {***REMOVED***
      ***REMOVED***
            for (var _b = __values(Object.keys(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (key !== 'isNew' && key[0] !== '_') {
                    obj[key] = this[key];
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***
        catch (e_2_1) { e_2 = { error: e_2_1 ***REMOVED*** ***REMOVED***
        finally {
          ***REMOVED***
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          ***REMOVED***
            finally { if (e_2) throw e_2.error; ***REMOVED***
      ***REMOVED***
        return obj;
    ***REMOVED***
    Object.defineProperty(SessionImpl.prototype, "changed", {
        get: function () {
            if (this._preHash !== this.hash()) {
                return true;
          ***REMOVED***
            return false;
      ***REMOVED***,
        enumerable: true,
        configurable: true
    ***REMOVED***
    return SessionImpl;
***REMOVED***());
exports.SessionImpl = SessionImpl;


/***/ ***REMOVED***),

/***/ "./src/common/blog-protocol.ts":
/*!*************************************!*\
  !*** ./src/common/blog-protocol.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
exports.BlogServer = Symbol('BlogServer');


/***/ ***REMOVED***),

/***/ "./src/node/auth.provider.ts":
/*!***********************************!*\
  !*** ./src/node/auth.provider.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/security/lib/node */ "./node_modules/@malagu/security/lib/node/index.js");
var node_2 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var AuthenticationProviderImpl = /** @class */ (function () {
    function AuthenticationProviderImpl() {
        this.priority = node_1.DEFAULT_AUTHENTICATION_PROVIDER__PRIORITY;
  ***REMOVED***
    AuthenticationProviderImpl.prototype.authenticate = function () {
        return __awaiter(this, void 0, Promise, function () {
            var username, password, user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.doGetValue(this.options.usernameKey);
                        password = this.doGetValue(this.options.passwordKey);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!password || !username) {
                            throw new node_1.BadCredentialsError('Bad credentials');
                      ***REMOVED***
                        return [4 /*yield*/, this.userStore.load(username)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, this.userChecker.check(user)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.passwordEncoder.matches(password, user.password)];
                    case 4:
                        if (!(_a.sent())) {
                            throw new node_1.BadCredentialsError('Bad credentials');
                      ***REMOVED***
                        node_2.Context.getResponse().statusCode = 200;
                        node_2.Context.getResponse().body = JSON.stringify({ status: 1, data: '登录成功' ***REMOVED***
                        return [2 /*return*/, {
                                principal: user,
                                credentials: '',
                                policies: user.policies,
                                authenticated: true
                          ***REMOVED***];
                    case 5:
                        err_1 = _a.sent();
                        node_2.Context.getResponse().statusCode = 200;
                        node_2.Context.getResponse().body = JSON.stringify({ status: 0, error: '用户名或密码不正确' ***REMOVED***
                        return [2 /*return*/, {
                                principal: null,
                                credentials: '',
                                policies: [],
                                authenticated: false
                          ***REMOVED***];
                    case 6: return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    AuthenticationProviderImpl.prototype.doGetValue = function (key) {
        var request = node_2.Context.getRequest();
        if (request.body) {
            return request.body[key];
      ***REMOVED***
        else {
            return request.query[key];
      ***REMOVED***
    ***REMOVED***
    AuthenticationProviderImpl.prototype.support = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestMatcher.match(this.options.loginUrl, this.options.loginMethod)];
                    case 1: return [2 /*return*/, !!(_a.sent())];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a, _b, _c, _d;
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], AuthenticationProviderImpl.prototype, "options", void 0);
    __decorate([
        core_1.Autowired(node_1.PasswordEncoder),
        __metadata("design:type", typeof (_a = typeof node_1.PasswordEncoder !== "undefined" && node_1.PasswordEncoder) === "function" ? _a : Object)
    ], AuthenticationProviderImpl.prototype, "passwordEncoder", void 0);
    __decorate([
        core_1.Autowired(node_1.UserStore),
        __metadata("design:type", typeof (_b = typeof node_1.UserStore !== "undefined" && node_1.UserStore) === "function" ? _b : Object)
    ], AuthenticationProviderImpl.prototype, "userStore", void 0);
    __decorate([
        core_1.Autowired(node_1.UserChecker),
        __metadata("design:type", typeof (_c = typeof node_1.UserChecker !== "undefined" && node_1.UserChecker) === "function" ? _c : Object)
    ], AuthenticationProviderImpl.prototype, "userChecker", void 0);
    __decorate([
        core_1.Autowired(node_2.RequestMatcher),
        __metadata("design:type", typeof (_d = typeof node_2.RequestMatcher !== "undefined" && node_2.RequestMatcher) === "function" ? _d : Object)
    ], AuthenticationProviderImpl.prototype, "requestMatcher", void 0);
    AuthenticationProviderImpl = __decorate([
        core_1.Component({ id: node_1.AuthenticationProvider, rebind: true ***REMOVED***)
    ], AuthenticationProviderImpl);
    return AuthenticationProviderImpl;
***REMOVED***());
exports.AuthenticationProviderImpl = AuthenticationProviderImpl;


/***/ ***REMOVED***),

/***/ "./src/node/blog-server.ts":
/*!*********************************!*\
  !*** ./src/node/blog-server.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var blog_protocol_1 = __webpack_require__(/*! ../common/blog-protocol */ "./src/common/blog-protocol.ts");
var rpc_1 = __webpack_require__(/*! @malagu/rpc */ "./node_modules/@malagu/rpc/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/security/lib/node */ "./node_modules/@malagu/security/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_2 = __webpack_require__(/*! @malagu/typeorm/lib/node */ "./node_modules/@malagu/typeorm/lib/node/index.js");
var services_1 = __webpack_require__(/*! ./services */ "./src/node/services/index.ts");
var auth_service_1 = __webpack_require__(/*! ./services/auth.service */ "./src/node/services/auth.service.ts");
var pick = __webpack_require__(/*! lodash.pick */ "lodash.pick");
var BlogServerImpl = /** @class */ (function () {
    function BlogServerImpl() {
  ***REMOVED***
    BlogServerImpl.prototype.fetchHottestArticles = function (limit) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchArticleList(1, limit, {
                            pv: 'DESC'
                      ***REMOVED***)];
                    case 1:
                        result = _a.sent();
                        result.list = result.list.map(function (item) { return pick(item, ['title', 'slug', 'archiveTime']); ***REMOVED***
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    // TODO: fix the pipeManager bug
    BlogServerImpl.prototype.fetchArticleList = function (currentPage, condition) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchArticleList(currentPage, 5, null, condition)];
                    case 1:
                        result = _a.sent();
                        result.list = result.list.map(function (item) { return pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration', 'author', 'tags', 'category']); ***REMOVED***
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogServerImpl.prototype.fetchArticleDetail = function (slug) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchArticleDetail(slug)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogServerImpl.prototype.fetchTagsList = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchTagsListWithArticle()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogServerImpl.prototype.fetchCatsList = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchCatListWithArticle()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogServerImpl.prototype.fetchArchsList = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.fetchArchListWithArticle()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(result)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogServerImpl.prototype.registerUser = function (param) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.registerUser(param)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve('注册成功')];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    __decorate([
        core_1.Autowired(auth_service_1.AuthServiceSymbol),
        __metadata("design:type", typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object)
    ], BlogServerImpl.prototype, "authService", void 0);
    __decorate([
        core_1.Autowired(services_1.BlogServiceSymbol),
        __metadata("design:type", typeof (_b = typeof services_1.BlogService !== "undefined" && services_1.BlogService) === "function" ? _b : Object)
    ], BlogServerImpl.prototype, "blogService", void 0);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], BlogServerImpl.prototype, "fetchHottestArticles", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, typeof (_d = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.queryCondition) === "function" ? _d : Object]),
        __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
    ], BlogServerImpl.prototype, "fetchArticleList", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
    ], BlogServerImpl.prototype, "fetchArticleDetail", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
    ], BlogServerImpl.prototype, "fetchTagsList", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
    ], BlogServerImpl.prototype, "fetchCatsList", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
    ], BlogServerImpl.prototype, "fetchArchsList", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_k = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.RegisterParam) === "function" ? _k : Object]),
        __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
    ], BlogServerImpl.prototype, "registerUser", null);
    BlogServerImpl = __decorate([
        rpc_1.Rpc(blog_protocol_1.BlogServer),
        node_1.Anonymous()
    ], BlogServerImpl);
    return BlogServerImpl;
***REMOVED***());
exports.BlogServerImpl = BlogServerImpl;


/***/ ***REMOVED***),

/***/ "./src/node/blog.admin.controller.ts":
/*!*******************************************!*\
  !*** ./src/node/blog.admin.controller.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); ***REMOVED***
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var node_1 = __webpack_require__(/*! @malagu/mvc/lib/node */ "./node_modules/@malagu/mvc/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_2 = __webpack_require__(/*! @malagu/typeorm/lib/node */ "./node_modules/@malagu/typeorm/lib/node/index.js");
var blog_protocol_1 = __webpack_require__(/*! ../common/blog-protocol */ "./src/common/blog-protocol.ts");
var blog_service_1 = __webpack_require__(/*! ./services/blog.service */ "./src/node/services/blog.service.ts");
// 以下api都是需要身份校验
var blogAdminController = /** @class */ (function () {
    function blogAdminController() {
  ***REMOVED***
    // 新建博客
    blogAdminController.prototype.createBlog = function (article, session) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, username, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = session['malagu:securityContext'].authentication.principal;
                        username = userInfo.username;
                        return [4 /*yield*/, this.blogService.createOrUpdateArticle(article, username)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, { status: 1, data: {
                                    msg: article.articleStatus === 'draft' ? '保存草稿成功' : '发布成功',
                                    slug: result.slug
                              ***REMOVED*** ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    // 更新博客内容
    blogAdminController.prototype.updateBlog = function (article, session) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, username;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = session['malagu:securityContext'].authentication.principal;
                        username = userInfo.username;
                        return [4 /*yield*/, this.blogService.createOrUpdateArticle(article, username, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { status: 1, data: {
                                    msg: article.articleStatus === 'draft' ? '更新草稿成功' : '更新发布成功'
                              ***REMOVED*** ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a, _b, _c;
    __decorate([
        core_1.Autowired(blog_service_1.BlogServiceSymbol),
        __metadata("design:type", typeof (_a = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" ? _a : Object)
    ], blogAdminController.prototype, "blogService", void 0);
    __decorate([
        node_1.Post('/blog'),
        node_2.Transactional(),
        __param(0, node_1.Body()),
        __param(1, node_1.Session()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.ArticleDetail) === "function" ? _b : Object, Object]),
        __metadata("design:returntype", Promise)
    ], blogAdminController.prototype, "createBlog", null);
    __decorate([
        node_1.Put('/blog'),
        node_2.Transactional(),
        __param(0, node_1.Body()),
        __param(1, node_1.Session()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.ArticleDetail) === "function" ? _c : Object, Object]),
        __metadata("design:returntype", Promise)
    ], blogAdminController.prototype, "updateBlog", null);
    blogAdminController = __decorate([
        node_1.Controller('/api')
    ], blogAdminController);
    return blogAdminController;
***REMOVED***());
exports.blogAdminController = blogAdminController;


/***/ ***REMOVED***),

/***/ "./src/node/entity/archive.ts":
/*!************************************!*\
  !*** ./src/node/entity/archive.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var article_1 = __webpack_require__(/*! ./article */ "./src/node/entity/article.ts");
var Archive = /** @class */ (function () {
    function Archive() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Archive.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], Archive.prototype, "archiveTime", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return article_1.Article; ***REMOVED***, function (article) { return article.archiveTime; ***REMOVED***),
        __metadata("design:type", Array)
    ], Archive.prototype, "articles", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Archive.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Archive.prototype, "updatedAt", void 0);
    Archive = __decorate([
        typeorm_1.Entity()
    ], Archive);
    return Archive;
***REMOVED***());
exports.Archive = Archive;


/***/ ***REMOVED***),

/***/ "./src/node/entity/article.ts":
/*!************************************!*\
  !*** ./src/node/entity/article.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var user_1 = __webpack_require__(/*! ./user */ "./src/node/entity/user.ts");
var tag_1 = __webpack_require__(/*! ./tag */ "./src/node/entity/tag.ts");
var archive_1 = __webpack_require__(/*! ./archive */ "./src/node/entity/archive.ts");
var category_1 = __webpack_require__(/*! ./category */ "./src/node/entity/category.ts");
var ArticleStatus;
(function (ArticleStatus) {
    ArticleStatus["DRAFT"] = "draft";
    ArticleStatus["PUBLISHED"] = "published";
***REMOVED***)(ArticleStatus = exports.ArticleStatus || (exports.ArticleStatus = {***REMOVED***));
var Article = /** @class */ (function () {
    function Article() {
  ***REMOVED***
    var _a, _b, _c, _d, _e;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Article.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column('bigint'),
        __metadata("design:type", Number)
    ], Article.prototype, "pv", void 0);
    __decorate([
        typeorm_1.Column('longtext'),
        __metadata("design:type", String)
    ], Article.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "slug", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "digest", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: ArticleStatus,
            default: ArticleStatus.DRAFT
      ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "articleStatus", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "illustration", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.User; ***REMOVED***, function (user) { return user.articles; ***REMOVED***),
        __metadata("design:type", typeof (_a = typeof user_1.User !== "undefined" && user_1.User) === "function" ? _a : Object)
    ], Article.prototype, "author", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return tag_1.Tag; ***REMOVED***, function (tag) { return tag.articles; ***REMOVED***),
        typeorm_1.JoinTable({
            name: 'article_tags',
            joinColumn: { name: 'aid' ***REMOVED***,
            inverseJoinColumn: { name: 'tid' ***REMOVED***,
      ***REMOVED***),
        __metadata("design:type", Array)
    ], Article.prototype, "tags", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], Article.prototype, "fullArchiveTime", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return archive_1.Archive; ***REMOVED***, function (archive) { return archive.articles; ***REMOVED***),
        __metadata("design:type", typeof (_b = typeof archive_1.Archive !== "undefined" && archive_1.Archive) === "function" ? _b : Object)
    ], Article.prototype, "archiveTime", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return category_1.Category; ***REMOVED***, function (category) { return category.articles; ***REMOVED***),
        __metadata("design:type", typeof (_c = typeof category_1.Category !== "undefined" && category_1.Category) === "function" ? _c : Object)
    ], Article.prototype, "category", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
    ], Article.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
    ], Article.prototype, "updatedAt", void 0);
    Article = __decorate([
        typeorm_1.Entity()
    ], Article);
    return Article;
***REMOVED***());
exports.Article = Article;


/***/ ***REMOVED***),

/***/ "./src/node/entity/category.ts":
/*!*************************************!*\
  !*** ./src/node/entity/category.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var article_1 = __webpack_require__(/*! ./article */ "./src/node/entity/article.ts");
var Category = /** @class */ (function () {
    function Category() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return article_1.Article; ***REMOVED***, function (article) { return article.category; ***REMOVED***),
        __metadata("design:type", Array)
    ], Category.prototype, "articles", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Category.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Category.prototype, "updatedAt", void 0);
    Category = __decorate([
        typeorm_1.Entity()
    ], Category);
    return Category;
***REMOVED***());
exports.Category = Category;


/***/ ***REMOVED***),

/***/ "./src/node/entity/index.ts":
/*!**********************************!*\
  !*** ./src/node/entity/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./archive */ "./src/node/entity/archive.ts"));
__export(__webpack_require__(/*! ./category */ "./src/node/entity/category.ts"));
__export(__webpack_require__(/*! ./tag */ "./src/node/entity/tag.ts"));
__export(__webpack_require__(/*! ./user */ "./src/node/entity/user.ts"));
__export(__webpack_require__(/*! ./article */ "./src/node/entity/article.ts"));
__export(__webpack_require__(/*! ./reader */ "./src/node/entity/reader.ts"));
__export(__webpack_require__(/*! ./website */ "./src/node/entity/website.ts"));


/***/ ***REMOVED***),

/***/ "./src/node/entity/reader.ts":
/*!***********************************!*\
  !*** ./src/node/entity/reader.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var Reader = /** @class */ (function () {
    function Reader() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Reader.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], Reader.prototype, "articleSlug", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], Reader.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column('simple-array'),
        __metadata("design:type", Array)
    ], Reader.prototype, "ips", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Reader.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Reader.prototype, "updatedAt", void 0);
    Reader = __decorate([
        typeorm_1.Entity()
    ], Reader);
    return Reader;
***REMOVED***());
exports.Reader = Reader;


/***/ ***REMOVED***),

/***/ "./src/node/entity/tag.ts":
/*!********************************!*\
  !*** ./src/node/entity/tag.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var article_1 = __webpack_require__(/*! ./article */ "./src/node/entity/article.ts");
var Tag = /** @class */ (function () {
    function Tag() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Tag.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], Tag.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return article_1.Article; ***REMOVED***, function (article) { return article.tags; ***REMOVED***, { cascade: true ***REMOVED***),
        typeorm_1.JoinTable({
            name: 'article_tags',
            joinColumn: { name: 'tid' ***REMOVED***,
            inverseJoinColumn: { name: 'aid' ***REMOVED***,
      ***REMOVED***),
        __metadata("design:type", Array)
    ], Tag.prototype, "articles", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Tag.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Tag.prototype, "updatedAt", void 0);
    Tag = __decorate([
        typeorm_1.Entity()
    ], Tag);
    return Tag;
***REMOVED***());
exports.Tag = Tag;


/***/ ***REMOVED***),

/***/ "./src/node/entity/user.ts":
/*!*********************************!*\
  !*** ./src/node/entity/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var article_1 = __webpack_require__(/*! ./article */ "./src/node/entity/article.ts");
var User = /** @class */ (function () {
    function User() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 20,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200,
            nullable: false
      ***REMOVED***),
        typeorm_1.Index({ unique: true ***REMOVED***),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return article_1.Article; ***REMOVED***, function (article) { return article.author; ***REMOVED***),
        __metadata("design:type", Array)
    ], User.prototype, "articles", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], User.prototype, "updatedAt", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
***REMOVED***());
exports.User = User;


/***/ ***REMOVED***),

/***/ "./src/node/entity/website.ts":
/*!************************************!*\
  !*** ./src/node/entity/website.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var Website = /** @class */ (function () {
    function Website() {
  ***REMOVED***
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Website.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('bigint'),
        __metadata("design:type", Number)
    ], Website.prototype, "todayUv", void 0);
    __decorate([
        typeorm_1.Column('simple-array'),
        __metadata("design:type", Array)
    ], Website.prototype, "todayIps", void 0);
    __decorate([
        typeorm_1.Column('bigint'),
        __metadata("design:type", Number)
    ], Website.prototype, "todayPv", void 0);
    __decorate([
        typeorm_1.Column('bigint'),
        __metadata("design:type", Number)
    ], Website.prototype, "totalUv", void 0);
    __decorate([
        typeorm_1.Column('bigint'),
        __metadata("design:type", Number)
    ], Website.prototype, "totalPv", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Website.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], Website.prototype, "updatedAt", void 0);
    Website = __decorate([
        typeorm_1.Entity()
    ], Website);
    return Website;
***REMOVED***());
exports.Website = Website;


/***/ ***REMOVED***),

/***/ "./src/node/module.ts":
/*!****************************!*\
  !*** ./src/node/module.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__webpack_require__(/*! ./blog-server */ "./src/node/blog-server.ts");
__webpack_require__(/*! ./auth.provider */ "./src/node/auth.provider.ts");
__webpack_require__(/*! ./services */ "./src/node/services/index.ts");
__webpack_require__(/*! ./user.store */ "./src/node/user.store.ts");
__webpack_require__(/*! ./blog.admin.controller */ "./src/node/blog.admin.controller.ts");
__webpack_require__(/*! ./schedule */ "./src/node/schedule.ts");
var typeorm_1 = __webpack_require__(/*! @malagu/typeorm */ "./node_modules/@malagu/typeorm/lib/common/index.js");
var entities = __webpack_require__(/*! ./entity */ "./src/node/entity/index.ts");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
typeorm_1.autoBindEntities(entities);
exports.default = core_1.autoBind();


/***/ ***REMOVED***),

/***/ "./src/node/schedule.ts":
/*!******************************!*\
  !*** ./src/node/schedule.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
// import { BlogServiceSymbol, BlogService ***REMOVED*** from './services/index';
var CronJob = __webpack_require__(/*! cron */ "cron").CronJob;
var DouMiApplicationLifecycle = /** @class */ (function () {
    function DouMiApplicationLifecycle() {
  ***REMOVED***
    DouMiApplicationLifecycle.prototype.onStart = function (app) {
        return __awaiter(this, void 0, Promise, function () {
            var job;
            var _this = this;
            return __generator(this, function (_a) {
                job = new CronJob('0 24 */1 * * *', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      ***REMOVED***
                            // await this.blogService.clearTodayIpsArray()
                            this.logger.info("schedule trigger at " + new Date() + " for clearing the visitor ips");
                      ***REMOVED***
                        catch (err) {
                            console.error(err);
                      ***REMOVED***
                        return [2 /*return*/];
                    ***REMOVED***
                ***REMOVED*** ***REMOVED***, null, true);
                job.start();
                return [2 /*return*/];
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    DouMiApplicationLifecycle.prototype.onStop = function (app) {
        this.job.stop();
    ***REMOVED***
    var _a;
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", typeof (_a = typeof core_1.Logger !== "undefined" && core_1.Logger) === "function" ? _a : Object)
    ], DouMiApplicationLifecycle.prototype, "logger", void 0);
    DouMiApplicationLifecycle = __decorate([
        core_1.Component(core_1.ApplicationLifecycle)
    ], DouMiApplicationLifecycle);
    return DouMiApplicationLifecycle;
***REMOVED***());
exports.DouMiApplicationLifecycle = DouMiApplicationLifecycle;


/***/ ***REMOVED***),

/***/ "./src/node/services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/node/services/auth.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/security/lib/node */ "./node_modules/@malagu/security/lib/node/index.js");
var node_2 = __webpack_require__(/*! @malagu/typeorm/lib/node */ "./node_modules/@malagu/typeorm/lib/node/index.js");
var entity_1 = __webpack_require__(/*! ../entity */ "./src/node/entity/index.ts");
var blog_protocol_1 = __webpack_require__(/*! ../../common/blog-protocol */ "./src/common/blog-protocol.ts");
exports.AuthServiceSymbol = Symbol('AuthService');
var AuthService = /** @class */ (function () {
    function AuthService() {
  ***REMOVED***
    AuthService.prototype.registerUser = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var repo, users, pwd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(entity_1.User);
                        return [4 /*yield*/, repo.find()];
                    case 1:
                        users = _a.sent();
                        if (users.length >= 1) {
                            throw new Error('注册用户数已满，无法注册！');
                      ***REMOVED***
                        return [4 /*yield*/, this.passwordEncoder.encode(param.password)];
                    case 2:
                        pwd = _a.sent();
                        return [4 /*yield*/, repo.save(__assign(__assign({***REMOVED***, param), { password: pwd ***REMOVED***))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a, _b;
    __decorate([
        core_1.Autowired(node_1.PasswordEncoder),
        __metadata("design:type", typeof (_a = typeof node_1.PasswordEncoder !== "undefined" && node_1.PasswordEncoder) === "function" ? _a : Object)
    ], AuthService.prototype, "passwordEncoder", void 0);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.RegisterParam) === "function" ? _b : Object]),
        __metadata("design:returntype", Promise)
    ], AuthService.prototype, "registerUser", null);
    AuthService = __decorate([
        core_1.Component(exports.AuthServiceSymbol)
    ], AuthService);
    return AuthService;
***REMOVED***());
exports.AuthService = AuthService;


/***/ ***REMOVED***),

/***/ "./src/node/services/blog.service.ts":
/*!*******************************************!*\
  !*** ./src/node/services/blog.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
      ***REMOVED***
        return t;
    ***REMOVED***
    return __assign.apply(this, arguments);
***REMOVED***
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
  ***REMOVED***
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  ***REMOVED***
    catch (error) { e = { error: error ***REMOVED*** ***REMOVED***
    finally {
      ***REMOVED***
            if (r && !r.done && (m = i["return"])) m.call(i);
      ***REMOVED***
        finally { if (e) throw e.error; ***REMOVED***
  ***REMOVED***
    return ar;
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var reader_1 = __webpack_require__(/*! ./../entity/reader */ "./src/node/entity/reader.ts");
var website_1 = __webpack_require__(/*! ./../entity/website */ "./src/node/entity/website.ts");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var awesome_js_1 = __webpack_require__(/*! awesome-js */ "awesome-js");
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var node_2 = __webpack_require__(/*! @malagu/typeorm/lib/node */ "./node_modules/@malagu/typeorm/lib/node/index.js");
var article_1 = __webpack_require__(/*! ../entity/article */ "./src/node/entity/article.ts");
var tag_1 = __webpack_require__(/*! ../entity/tag */ "./src/node/entity/tag.ts");
var category_1 = __webpack_require__(/*! ../entity/category */ "./src/node/entity/category.ts");
var archive_1 = __webpack_require__(/*! ../entity/archive */ "./src/node/entity/archive.ts");
var user_1 = __webpack_require__(/*! ../entity/user */ "./src/node/entity/user.ts");
var blog_protocol_1 = __webpack_require__(/*! ../../common/blog-protocol */ "./src/common/blog-protocol.ts");
exports.BlogServiceSymbol = Symbol('BlogService');
var PAGE_SIZE = 5;
var BlogService = /** @class */ (function () {
    function BlogService() {
  ***REMOVED***
    BlogService.prototype.fetchArticleList = function (currentPage, pageSize, order, condition) {
        if (currentPage === void 0) { currentPage = 1; ***REMOVED***
        if (pageSize === void 0) { pageSize = 5; ***REMOVED***
        return __awaiter(this, void 0, void 0, function () {
            var repo, baseQuery, whereQuery, _a, list, allArticles;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(article_1.Article);
                        baseQuery = {
                            order: order ? order : {
                                createdAt: 'DESC'
                          ***REMOVED***,
                            take: pageSize ? pageSize : PAGE_SIZE,
                            skip: (currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE),
                            relations: ['tags', 'archiveTime', 'category', 'author']
                        ***REMOVED***
                        whereQuery = {***REMOVED***
                        if (condition) {
                            if (condition.queryTag) {
                                whereQuery = {
                                    tags: typeorm_1.In([condition.queryTag])
                                ***REMOVED***
                          ***REMOVED***
                            else if (condition.queryCat) {
                                whereQuery = {
                                    where: { category: condition.queryCat ***REMOVED***
                                ***REMOVED***
                          ***REMOVED***
                            else if (condition.queryArch) {
                                whereQuery = {
                                    where: { archiveTime: condition.queryArch ***REMOVED***
                                ***REMOVED***
                          ***REMOVED***
                      ***REMOVED***
                        if (!(currentPage === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateWebsiteStatistics()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, Promise.all([repo.find(__assign(__assign({***REMOVED***, baseQuery), whereQuery)), repo.find(whereQuery)])];
                    case 3:
                        _a = __read.apply(void 0, [_b.sent(), 2]), list = _a[0], allArticles = _a[1];
                        return [2 /*return*/, { list: list.map(function (item) { return (__assign(__assign({***REMOVED***, item), { tags: item.tags.map(function (it) { return it.name; ***REMOVED***), category: item.category.name, archiveTime: item.fullArchiveTime, author: item.author.username ***REMOVED***)); ***REMOVED***), pageCount: Math.ceil(allArticles.length / (pageSize ? pageSize : PAGE_SIZE)), currentPage: currentPage ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.fetchArticleDetail = function (slug, shouldBeUpdateStats) {
        if (shouldBeUpdateStats === void 0) { shouldBeUpdateStats = false; ***REMOVED***
        return __awaiter(this, void 0, void 0, function () {
            var repo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(article_1.Article);
                        return [4 /*yield*/, repo.findOne({ slug: slug ***REMOVED***, { relations: ['tags', 'archiveTime', 'category', 'author'] ***REMOVED***)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            throw new Error('找不到对应文章');
                      ***REMOVED***
                        if (!shouldBeUpdateStats) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateArticleStatictics(slug)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // 对该文章的pv数自增1
                        result.pv = +result.pv + 1;
                        return [4 /*yield*/, repo.save(result)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({***REMOVED***, result), { tags: result.tags.map(function (it) { return it.name; ***REMOVED***), category: result.category.name, archiveTime: result.fullArchiveTime, author: result.author.username ***REMOVED***)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.createOrUpdateArticle = function (article, username, isUpdate) {
        if (isUpdate === void 0) { isUpdate = false; ***REMOVED***
        return __awaiter(this, void 0, void 0, function () {
            var tags, category, archiveTime, tagRepo, catRepo, archiveRepo, userRepo, loadTags, loadCat, loadUser, loadArch, articleIns, repo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tags = article.tags, category = article.category, archiveTime = article.archiveTime;
                        tagRepo = node_2.OrmContext.getRepository(tag_1.Tag);
                        catRepo = node_2.OrmContext.getRepository(category_1.Category);
                        archiveRepo = node_2.OrmContext.getRepository(archive_1.Archive);
                        userRepo = node_2.OrmContext.getRepository(user_1.User);
                        return [4 /*yield*/, tagRepo.find({ name: typeorm_1.In(tags) ***REMOVED***)];
                    case 1:
                        loadTags = _a.sent();
                        return [4 /*yield*/, catRepo.find({ name: category ***REMOVED***)];
                    case 2:
                        loadCat = _a.sent();
                        return [4 /*yield*/, userRepo.find({ email: username ***REMOVED***)];
                    case 3:
                        loadUser = _a.sent();
                        return [4 /*yield*/, archiveRepo.findOne({ archiveTime: archiveTime.substr(0, 7) ***REMOVED***)];
                    case 4:
                        loadArch = _a.sent();
                        if (!!loadArch) return [3 /*break*/, 6];
                        loadArch = new archive_1.Archive();
                        loadArch.archiveTime = archiveTime.substr(0, 7);
                        return [4 /*yield*/, archiveRepo.save(loadArch)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        console.log('>>>', loadArch, loadCat, loadTags);
                        articleIns = new article_1.Article();
                        articleIns.archiveTime = loadArch;
                        articleIns.fullArchiveTime = archiveTime;
                        articleIns.tags = loadTags;
                        articleIns.category = loadCat[0];
                        articleIns.articleStatus = article.articleStatus;
                        articleIns.content = article.content;
                        articleIns.digest = article.digest;
                        articleIns.illustration = article.illustration;
                        articleIns.title = article.title;
                        articleIns.author = loadUser[0];
                        console.log('****', isUpdate);
                        if (!isUpdate) {
                            articleIns.slug = Date.now().toString();
                            articleIns.pv = 0;
                      ***REMOVED***
                        repo = node_2.OrmContext.getRepository(article_1.Article);
                        if (!!isUpdate) return [3 /*break*/, 8];
                        return [4 /*yield*/, repo.save(articleIns)];
                    case 7:
                        result = _a.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, repo.update({ slug: article.slug ***REMOVED***, articleIns)];
                    case 9:
                        result = _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/, result];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.updateArticleStatictics = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var reqIp, now, readerRepo, reader, newReader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (node_1.Context.getRequest().headers['x-real-ip']) {
                            reqIp = node_1.Context.getRequest().headers['x-real-ip'];
                      ***REMOVED***
                        else {
                            reqIp = node_1.Context.getRequest().ip;
                      ***REMOVED***
                        now = awesome_js_1.AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');
                        readerRepo = node_2.OrmContext.getRepository(reader_1.Reader);
                        return [4 /*yield*/, readerRepo.findOne({
                                where: { date: now, articleSlug: slug ***REMOVED***
                          ***REMOVED***)];
                    case 1:
                        reader = _a.sent();
                        if (reader) {
                            if (!reader.ips.includes(reqIp)) {
                                reader.ips.push(reqIp);
                                readerRepo.save(reader);
                          ***REMOVED***
                      ***REMOVED***
                        else {
                            newReader = new reader_1.Reader();
                            newReader.articleSlug = slug;
                            newReader.date = now;
                            newReader.ips = [reqIp];
                            readerRepo.save(newReader);
                      ***REMOVED***
                        return [4 /*yield*/, this.updateWebsiteStatistics()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.fetchTagsListWithArticle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(tag_1.Tag);
                        return [4 /*yield*/, repo.find({ relations: ["articles"] ***REMOVED***)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.map(function (item) { return ({
                                id: item.id,
                                name: item.name,
                                articlesCount: item.articles.length
                            ***REMOVED*** ***REMOVED***)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.fetchArchListWithArticle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(archive_1.Archive);
                        return [4 /*yield*/, repo.find({ relations: ["articles"] ***REMOVED***)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.map(function (item) { return ({
                                id: item.id,
                                archiveTime: item.archiveTime,
                                name: '',
                                articlesCount: item.articles.length
                            ***REMOVED*** ***REMOVED***)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.fetchCatListWithArticle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(category_1.Category);
                        return [4 /*yield*/, repo.find({ relations: ["articles"] ***REMOVED***)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.map(function (item) { return ({
                                id: item.id,
                                name: item.name,
                                articlesCount: item.articles.length
                            ***REMOVED*** ***REMOVED***)];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.updateWebsiteStatistics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reqIp, repo, website, newData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (node_1.Context.getRequest().headers['x-real-ip']) {
                            reqIp = node_1.Context.getRequest().headers['x-real-ip'];
                      ***REMOVED***
                        else {
                            reqIp = node_1.Context.getRequest().ip;
                      ***REMOVED***
                        if (!reqIp) {
                            console.log('[blogService]: can not get client ip, ignore it!');
                            return [2 /*return*/];
                      ***REMOVED***
                        repo = node_2.OrmContext.getRepository(website_1.Website);
                        return [4 /*yield*/, repo.findOne({ id: 1 ***REMOVED***)];
                    case 1:
                        website = _a.sent();
                        if (website) {
                            if (!website.todayIps.includes(reqIp)) {
                                website.todayIps.push(reqIp);
                                website.todayPv = +website.todayPv + 1;
                                website.todayUv = +website.todayUv + 1;
                                website.totalPv = +website.totalPv + 1;
                                website.totalUv = +website.totalUv + 1;
                          ***REMOVED***
                            else {
                                website.totalPv = +website.totalPv + 1;
                                website.todayPv = +website.todayPv + 1;
                          ***REMOVED***
                            repo.save(website);
                      ***REMOVED***
                        else {
                            newData = new website_1.Website();
                            newData.todayIps = [reqIp];
                            newData.todayPv = 1;
                            newData.todayUv = 1;
                            newData.totalPv = 1;
                            newData.totalUv = 1;
                            repo.save(newData);
                      ***REMOVED***
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    BlogService.prototype.clearTodayIpsArray = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repo, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(website_1.Website);
                        return [4 /*yield*/, repo.findOne({ id: 1 ***REMOVED***)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            data.todayIps = [];
                            repo.save(data);
                      ***REMOVED***
                        return [2 /*return*/];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a, _b;
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, typeof (_a = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.queryCondition) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "fetchArticleList", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "fetchArticleDetail", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof blog_protocol_1.DouMiBlog !== "undefined" && blog_protocol_1.DouMiBlog.ArticleDetail) === "function" ? _b : Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "createOrUpdateArticle", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "updateArticleStatictics", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "fetchTagsListWithArticle", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "fetchArchListWithArticle", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "fetchCatListWithArticle", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "updateWebsiteStatistics", null);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BlogService.prototype, "clearTodayIpsArray", null);
    BlogService = __decorate([
        core_1.Component(exports.BlogServiceSymbol)
    ], BlogService);
    return BlogService;
***REMOVED***());
exports.BlogService = BlogService;


/***/ ***REMOVED***),

/***/ "./src/node/services/index.ts":
/*!************************************!*\
  !*** ./src/node/services/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
__export(__webpack_require__(/*! ./auth.service */ "./src/node/services/auth.service.ts"));
__export(__webpack_require__(/*! ./blog.service */ "./src/node/services/blog.service.ts"));


/***/ ***REMOVED***),

/***/ "./src/node/user.store.ts":
/*!********************************!*\
  !*** ./src/node/user.store.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); ***REMOVED*** ***REMOVED***
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function rejected(value) { try { step(generator["throw"](value)); ***REMOVED*** catch (e) { reject(e); ***REMOVED*** ***REMOVED***
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); ***REMOVED***
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    ***REMOVED***
***REMOVED***
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; ***REMOVED***, trys: [], ops: [] ***REMOVED***, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) ***REMOVED***, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; ***REMOVED***), g;
    function verb(n) { return function (v) { return step([n, v]); ***REMOVED*** ***REMOVED***
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false ***REMOVED***
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; ***REMOVED***
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; ***REMOVED***
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; ***REMOVED***
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; ***REMOVED***
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
          ***REMOVED***
            op = body.call(thisArg, _);
      ***REMOVED*** catch (e) { op = [6, e]; y = 0; ***REMOVED*** finally { f = t = 0; ***REMOVED***
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true ***REMOVED***
  ***REMOVED***
***REMOVED***
Object.defineProperty(exports, "__esModule", { value: true ***REMOVED***
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/security/lib/node */ "./node_modules/@malagu/security/lib/node/index.js");
var node_2 = __webpack_require__(/*! @malagu/typeorm/lib/node */ "./node_modules/@malagu/typeorm/lib/node/index.js");
var user_1 = __webpack_require__(/*! ./entity/user */ "./src/node/entity/user.ts");
var UserStoreImpl = /** @class */ (function () {
    function UserStoreImpl() {
  ***REMOVED***
    UserStoreImpl.prototype.load = function (username) {
        return __awaiter(this, void 0, Promise, function () {
            var repo, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = node_2.OrmContext.getRepository(user_1.User);
                        return [4 /*yield*/, repo.findOne({ email: username ***REMOVED***)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new node_1.UsernameNotFoundError(username + "\u4E0D\u5B58\u5728");
                      ***REMOVED***
                        return [2 /*return*/, {
                                username: username,
                                password: user.password,
                                accountNonExpired: true,
                                accountNonLocked: true,
                                credentialsNonExpired: true,
                                enabled: true,
                                policies: [{
                                        type: node_1.PolicyType.El,
                                        authorizeType: node_1.AuthorizeType.Pre,
                                        el: 'true'
                                  ***REMOVED***]
                          ***REMOVED***];
              ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    var _a;
    __decorate([
        core_1.Value('malagu.security'),
        __metadata("design:type", Object)
    ], UserStoreImpl.prototype, "options", void 0);
    __decorate([
        node_2.Transactional(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], UserStoreImpl.prototype, "load", null);
    UserStoreImpl = __decorate([
        core_1.Component({ id: node_1.UserStore, rebind: true ***REMOVED***)
    ], UserStoreImpl);
    return UserStoreImpl;
***REMOVED***());
exports.UserStoreImpl = UserStoreImpl;


/***/ ***REMOVED***),

/***/ "awesome-js":
/*!*****************************!*\
  !*** external "awesome-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("awesome-js");

/***/ ***REMOVED***),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ ***REMOVED***),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ ***REMOVED***),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ ***REMOVED***),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ ***REMOVED***),

/***/ "crc":
/*!**********************!*\
  !*** external "crc" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crc");

/***/ ***REMOVED***),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cron");

/***/ ***REMOVED***),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ ***REMOVED***),

/***/ "express-http-context":
/*!***************************************!*\
  !*** external "express-http-context" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-context");

/***/ ***REMOVED***),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ ***REMOVED***),

/***/ "inversify-binding-decorators":
/*!***********************************************!*\
  !*** external "inversify-binding-decorators" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-binding-decorators");

/***/ ***REMOVED***),

/***/ "jexl":
/*!***********************!*\
  !*** external "jexl" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jexl");

/***/ ***REMOVED***),

/***/ "lodash.pick":
/*!******************************!*\
  !*** external "lodash.pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.pick");

/***/ ***REMOVED***),

/***/ "loglevel":
/*!***************************!*\
  !*** external "loglevel" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ ***REMOVED***),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ ***REMOVED***),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ ***REMOVED***),

/***/ "ts-custom-error":
/*!**********************************!*\
  !*** external "ts-custom-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-custom-error");

/***/ ***REMOVED***),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ ***REMOVED***),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ ***REMOVED***),

/***/ "url-pattern":
/*!******************************!*\
  !*** external "url-pattern" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-pattern");

/***/ ***REMOVED***),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ ***REMOVED***),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ ***REMOVED***),

/***/ "vscode-jsonrpc":
/*!*********************************!*\
  !*** external "vscode-jsonrpc" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc");

/***/ ***REMOVED***),

/***/ "vscode-jsonrpc/lib/events":
/*!********************************************!*\
  !*** external "vscode-jsonrpc/lib/events" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc/lib/events");

/***/ ***REMOVED***)

/******/ ***REMOVED***
***REMOVED***
//# sourceMappingURL=index.js.map