/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var randomstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! randomstring */ \"./node_modules/randomstring/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n\r\n\r\n\r\nconsole.log(randomstring__WEBPACK_IMPORTED_MODULE_0__.generate(10))\r\n\r\nvar registrationForm = document.getElementById(\"registrationForm\");\r\nvar loginForm = document.getElementById(\"loginForm\");\r\ndocument.getElementById(\"btnRegistration\").addEventListener(\"click\", function() {\r\n  registrationForm.classList.remove(\"hidden\");\r\n  loginForm.classList.add(\"hidden\");\r\n});\r\n\r\ndocument.getElementById(\"btnLogin\").addEventListener(\"click\", function() {\r\n  registrationForm.classList.add(\"hidden\");\r\n  loginForm.classList.remove(\"hidden\");\r\n});\r\n\r\ndocument.getElementById(\"btnRegister\").addEventListener(\"click\", function() {\r\n  var name = document.getElementById(\"name\").value;\r\n  var login = document.getElementById(\"login\").value;\r\n  var password = document.getElementById(\"password\").value;\r\n\r\n  var user = {\r\n    name: name,\r\n    login: login,\r\n    password: password\r\n  };\r\n\r\n  // Зберегти користувача в localStorage\r\n  var users = JSON.parse(localStorage.getItem(\"users\")) || [];\r\n  users.push(user);\r\n  localStorage.setItem(\"users\", JSON.stringify(users));\r\n\r\n  // Скинути форму реєстрації\r\n  registrationForm.reset();\r\n  alert(\"Реєстрація успішна!\");\r\n});\r\n\r\ndocument.getElementById(\"btnLoginSubmit\").addEventListener(\"click\", function() {\r\n  var username = document.getElementById(\"loginUsername\").value;\r\n  var password = document.getElementById(\"loginPassword\").value;\r\n\r\n  // Пошук користувача в localStorage\r\n  var users = JSON.parse(localStorage.getItem(\"users\")) || [];\r\n  var loggedInUser = users.find(function(user) {\r\n    return user.login === username && user.password === password;\r\n  });\r\n\r\n  if (loggedInUser) {\r\n    // Користувач знайдений, робимо потрібні дії\r\n    alert(\"Вхід успішний!\");\r\n  } else {\r\n    // Користувач не знайдений, показуємо повідомлення про помилку\r\n    alert(\"Невірний логін або пароль!\");\r\n  }\r\n\r\n  // Скинути форму входу\r\n  loginForm.reset();\r\n});\r\n\n\n//# sourceURL=webpack://webpack-2lesson/./index.js?");

/***/ }),

/***/ "./node_modules/array-uniq/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-uniq/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// there's 3 implementations written in increasing order of efficiency\n\n// 1 - no Set type is defined\nfunction uniqNoSet(arr) {\n\tvar ret = [];\n\n\tfor (var i = 0; i < arr.length; i++) {\n\t\tif (ret.indexOf(arr[i]) === -1) {\n\t\t\tret.push(arr[i]);\n\t\t}\n\t}\n\n\treturn ret;\n}\n\n// 2 - a simple Set type is defined\nfunction uniqSet(arr) {\n\tvar seen = new Set();\n\treturn arr.filter(function (el) {\n\t\tif (!seen.has(el)) {\n\t\t\tseen.add(el);\n\t\t\treturn true;\n\t\t}\n\t});\n}\n\n// 3 - a standard Set type is defined and it has a forEach method\nfunction uniqSetWithForEach(arr) {\n\tvar ret = [];\n\n\t(new Set(arr)).forEach(function (el) {\n\t\tret.push(el);\n\t});\n\n\treturn ret;\n}\n\n// V8 currently has a broken implementation\n// https://github.com/joyent/node/issues/8449\nfunction doesForEachActuallyWork() {\n\tvar ret = false;\n\n\t(new Set([true])).forEach(function (el) {\n\t\tret = el;\n\t});\n\n\treturn ret === true;\n}\n\nif ('Set' in __webpack_require__.g) {\n\tif (typeof Set.prototype.forEach === 'function' && doesForEachActuallyWork()) {\n\t\tmodule.exports = uniqSetWithForEach;\n\t} else {\n\t\tmodule.exports = uniqSet;\n\t}\n} else {\n\tmodule.exports = uniqNoSet;\n}\n\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/array-uniq/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #333;\\n}\\n\\n.start {\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.startBtn {\\n  width: 100px;\\n  height: 30px;\\n  background-color: rgb(40, 175, 40);\\n  border: none;\\n  margin-left: 10px;\\n  border-radius: 10px;\\n}\\n\\n#registrationForm {\\n  width: 300px;\\n  height: 50px;\\n  background-color: rgb(40, 175, 40);\\n}\\n\\n.hidden {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-2lesson/./style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/randomstring/index.js":
/*!********************************************!*\
  !*** ./node_modules/randomstring/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/randomstring */ \"./node_modules/randomstring/lib/randomstring.js\");\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/randomstring/index.js?");

/***/ }),

/***/ "./node_modules/randomstring/lib/charset.js":
/*!**************************************************!*\
  !*** ./node_modules/randomstring/lib/charset.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var arrayUniq = __webpack_require__(/*! array-uniq */ \"./node_modules/array-uniq/index.js\");\n\nfunction Charset() {\n  this.chars = '';\n}\n\nCharset.prototype.setType = function(type) {\n  var chars;\n\n  var numbers     = '0123456789';\n  var charsLower  = 'abcdefghijklmnopqrstuvwxyz';\n  var charsUpper  = charsLower.toUpperCase();\n  var hexChars    = 'abcdef';\n  var binaryChars = '01';\n  var octalChars  = '01234567';\n\n  if (type === 'alphanumeric') {\n    chars = numbers + charsLower + charsUpper;\n  }\n  else if (type === 'numeric') {\n    chars = numbers;\n  }\n  else if (type === 'alphabetic') {\n    chars = charsLower + charsUpper;\n  }\n  else if (type === 'hex') {\n    chars = numbers + hexChars;\n  }\n  else if (type === 'binary') {\n    chars = binaryChars;\n  }\n  else if (type === 'octal') {\n    chars = octalChars;\n  }\n  else {\n    chars = type;\n  }\n\n  this.chars = chars;\n}\n\nCharset.prototype.removeUnreadable = function() {\n  var unreadableChars = /[0OIl]/g;\n  this.chars = this.chars.replace(unreadableChars, '');\n}\n\nCharset.prototype.setcapitalization = function(capitalization) {\n  if (capitalization === 'uppercase') {\n    this.chars = this.chars.toUpperCase();\n  }\n  else if (capitalization === 'lowercase') {\n    this.chars = this.chars.toLowerCase();\n  }\n}\n\nCharset.prototype.removeDuplicates = function() {\n  var charMap = this.chars.split('');\n  charMap = arrayUniq(charMap);\n  this.chars = charMap.join('');\n}\n\nmodule.exports = exports = Charset;\n\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/randomstring/lib/charset.js?");

/***/ }),

/***/ "./node_modules/randomstring/lib/randomstring.js":
/*!*******************************************************!*\
  !*** ./node_modules/randomstring/lib/randomstring.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar randomBytes = __webpack_require__(/*! randombytes */ \"./node_modules/randomstring/node_modules/randombytes/browser.js\");\nvar Charset = __webpack_require__(/*! ./charset.js */ \"./node_modules/randomstring/lib/charset.js\");\n\n\nfunction unsafeRandomBytes(length) {\n  var stack = [];\n  for (var i = 0; i < length; i++) {\n    stack.push(Math.floor(Math.random() * 255));\n  }\n\n  return {\n    length,\n    readUInt8: function (index) {\n      return stack[index];\n    }\n  };\n}\n\nfunction safeRandomBytes(length) {\n  try {\n    return randomBytes(length);\n  } catch (e) {\n    /* React/React Native Fix + Eternal loop removed */\n    return unsafeRandomBytes(length);\n  }\n}\n\nfunction processString(buf, initialString, chars, reqLen, maxByte) {\n  var string = initialString;\n  for (var i = 0; i < buf.length && string.length < reqLen; i++) {\n    var randomByte = buf.readUInt8(i);\n    if (randomByte < maxByte) {\n      string += chars.charAt(randomByte % chars.length);\n    }\n  }\n  return string;\n}\n\nfunction getAsyncString(string, chars, length, maxByte, cb) {\n  randomBytes(length, function(err, buf) {\n    if (err) {\n      // Since it is waiting for entropy, errors are legit and we shouldn't just keep retrying\n      cb(err);\n    }\n    var generatedString = processString(buf, string, chars, length, maxByte);\n    if (generatedString.length < length) {\n      getAsyncString(generatedString, chars, length, maxByte, cb);\n    } else {\n      cb(null, generatedString);\n    }\n  })\n}\n\nexports.generate = function(options, cb) {\n  var charset = new Charset();\n\n  var length, chars, capitalization, string = '';\n\n  // Handle options\n  if (typeof options === 'object') {\n    length = typeof options.length === 'number' ? options.length : 32;\n\n    if (options.charset) {\n      charset.setType(options.charset);\n    }\n    else {\n      charset.setType('alphanumeric');\n    }\n\n    if (options.capitalization) {\n      charset.setcapitalization(options.capitalization);\n    }\n\n    if (options.readable) {\n      charset.removeUnreadable();\n    }\n\n    charset.removeDuplicates();\n  }\n  else if (typeof options === 'number') {\n    length = options;\n    charset.setType('alphanumeric');\n  }\n  else {\n    length = 32;\n    charset.setType('alphanumeric');\n  }\n\n  // Generate the string\n  var charsLen = charset.chars.length;\n  var maxByte = 256 - (256 % charsLen);\n\n  if (!cb) {\n    while (string.length < length) {\n      var buf = safeRandomBytes(Math.ceil(length * 256 / maxByte));\n      string = processString(buf, string, charset.chars, length, maxByte);\n    }\n\n    return string;\n  }\n\n  getAsyncString(string, charset.chars, length, maxByte, cb);\n\n};\n\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/randomstring/lib/randomstring.js?");

/***/ }),

/***/ "./node_modules/randomstring/node_modules/randombytes/browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/randomstring/node_modules/randombytes/browser.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction oldBrowser () {\n  throw new Error('secure random number generation not supported by this browser\\nuse chrome, FireFox or Internet Explorer 11')\n}\n\nvar crypto = __webpack_require__.g.crypto || __webpack_require__.g.msCrypto\n\nif (crypto && crypto.getRandomValues) {\n  module.exports = randomBytes\n} else {\n  module.exports = oldBrowser\n}\n\nfunction randomBytes (size, cb) {\n  // phantomjs needs to throw\n  if (size > 65536) throw new Error('requested too many random bytes')\n  // in case browserify  isn't using the Uint8Array version\n  var rawBytes = new __webpack_require__.g.Uint8Array(size)\n\n  // This will not work in older browsers.\n  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues\n  if (size > 0) {  // getRandomValues fails on IE if size == 0\n    crypto.getRandomValues(rawBytes)\n  }\n  // phantomjs doesn't like a buffer being passed here\n  var bytes = new Buffer(rawBytes.buffer)\n\n  if (typeof cb === 'function') {\n    return process.nextTick(function () {\n      cb(null, bytes)\n    })\n  }\n\n  return bytes\n}\n\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/randomstring/node_modules/randombytes/browser.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-2lesson/./style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-2lesson/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;