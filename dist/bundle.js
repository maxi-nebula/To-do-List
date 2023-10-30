/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_Button/addButton.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/add_Button/addButton.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */

.add_button {
  background-color: #eee3cb;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bolder;
}
`, "",{"version":3,"sources":["webpack://./src/modules/add_Button/addButton.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["/** @format */\n\n.add_button {\n  background-color: #eee3cb;\n  width: 60px;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  font-weight: bolder;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addForm.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addForm.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Italic.ttf */ "./src/modules/fonts/Louis George Cafe Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Bold Italic.ttf */ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */

@font-face {
  font-family: "cafe";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-family: "cafe_bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.task_form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-family: "cafe";
}

.task_footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

ul li {
  list-style: none;
  margin-bottom: 30px;
}

input[type="text"] {
  width: 40%;
}

.add_btn {
  height: 40px;
  width: 40px;
  background-color: rgb(85, 177, 85);
  border: none;
  color: white;
  font-size: 1.2rem;
}

.add_btn:hover,
.add_btn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/modules/add_modal/addForm.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;EACE,mBAAmB;EACnB,4CAAkD;EAClD,wBAAwB;EACxB,4CAAwD;AAC1D;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["/** @format */\n\n@font-face {\n  font-family: \"cafe\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Italic.ttf);\n  font-family: \"cafe_bold\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Bold\\ Italic.ttf);\n}\n\n.task_form {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px;\n  font-family: \"cafe\";\n}\n\n.task_footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\nul li {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 40%;\n}\n\n.add_btn {\n  height: 40px;\n  width: 40px;\n  background-color: rgb(85, 177, 85);\n  border: none;\n  color: white;\n  font-size: 1.2rem;\n}\n\n.add_btn:hover,\n.add_btn:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addtaskModal.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addtaskModal.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Italic.ttf */ "./src/modules/fonts/Louis George Cafe Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Bold Italic.ttf */ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */
/*
#B7C4CF
#EEE3CB
#D7C0AE
#967E76*/

@font-face {
  font-family: "cafe";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-family: "cafe_bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.task_modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal_content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-left: 8px solid #b7c4cf;
  border-radius: 4px;
  width: 20%;
  height: 350px;
  font-family: "cafe_bold";
  font-size: 1.2rem;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/modules/add_modal/addtaskModal.css"],"names":[],"mappings":"AAAA,aAAa;AACb;;;;QAIQ;;AAER;EACE,mBAAmB;EACnB,4CAAkD;EAClD,wBAAwB;EACxB,4CAAwD;AAC1D;AACA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,kBAAkB,EAAE,wBAAwB;EAC5C,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["/** @format */\n/*\n#B7C4CF\n#EEE3CB\n#D7C0AE\n#967E76*/\n\n@font-face {\n  font-family: \"cafe\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Italic.ttf);\n  font-family: \"cafe_bold\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Bold\\ Italic.ttf);\n}\n.task_modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal_content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-left: 8px solid #b7c4cf;\n  border-radius: 4px;\n  width: 20%;\n  height: 350px;\n  font-family: \"cafe_bold\";\n  font-size: 1.2rem;\n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/common/appendtasks.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/common/appendtasks.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Italic.ttf */ "./src/modules/fonts/Louis George Cafe Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Bold Italic.ttf */ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */

@font-face {
  font-family: "cafe";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-family: "cafe_bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.task_images {
  height: 20px;
  width: 20px;
}

.added_task {
  font-family: "cafe";
  /*font-size: 1.2rem;*/
  height: 30px;
  /*display: flex;
  justify-content: space-around;
  align-items: center;*/
  display: grid;
  grid-template-columns: 1fr 4fr 3fr 2fr 2fr;
  gap: 5px;
}

.task_checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.check_box {
  height: 20px;
  width: 20px;
  padding-top: 3px;
}
.para_title {
  font-size: 1rem;
  font-family: "cafe_bold";
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image_holder {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.task_images:hover,
.task_images:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/modules/common/appendtasks.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;EACE,mBAAmB;EACnB,4CAAkD;EAClD,wBAAwB;EACxB,4CAAwD;AAC1D;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ;;uBAEqB;EACrB,aAAa;EACb,0CAA0C;EAC1C,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["/** @format */\n\n@font-face {\n  font-family: \"cafe\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Italic.ttf);\n  font-family: \"cafe_bold\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Bold\\ Italic.ttf);\n}\n\n.task_images {\n  height: 20px;\n  width: 20px;\n}\n\n.added_task {\n  font-family: \"cafe\";\n  /*font-size: 1.2rem;*/\n  height: 30px;\n  /*display: flex;\n  justify-content: space-around;\n  align-items: center;*/\n  display: grid;\n  grid-template-columns: 1fr 4fr 3fr 2fr 2fr;\n  gap: 5px;\n}\n\n.task_checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.check_box {\n  height: 20px;\n  width: 20px;\n  padding-top: 3px;\n}\n.para_title {\n  font-size: 1rem;\n  font-family: \"cafe_bold\";\n  width: 210px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image_holder {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.task_images:hover,\n.task_images:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/default_projects/default_project.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/default_projects/default_project.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Italic.ttf */ "./src/modules/fonts/Louis George Cafe Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Bold Italic.ttf */ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */

/*
#B7C4CF
#EEE3CB
#D7C0AE
#967E76*/
@font-face {
  font-family: "cafe";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-family: "cafe_bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.main_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.default_folder {
  display: grid;

  grid-template-rows: 1fr 4fr;

  width: 500px;
  height: 500px;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.default_header {
  background-color: #eee3cb;
  font-family: "cafe_bold";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  /* height: 40px;*/
}

.default_footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #d7c0ae;
  padding: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/modules/default_projects/default_project.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;;;;QAIQ;AACR;EACE,mBAAmB;EACnB,4CAAkD;EAClD,wBAAwB;EACxB,4CAAwD;AAC1D;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;;EAEb,2BAA2B;;EAE3B,YAAY;EACZ,aAAa;EACb,cAAc;EACd,4EAA4E;AAC9E;;AAEA;EACE,yBAAyB;EACzB,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,yBAAyB;EACzB,YAAY;AACd","sourcesContent":["/** @format */\n\n/*\n#B7C4CF\n#EEE3CB\n#D7C0AE\n#967E76*/\n@font-face {\n  font-family: \"cafe\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Italic.ttf);\n  font-family: \"cafe_bold\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Bold\\ Italic.ttf);\n}\n\n.main_container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.default_folder {\n  display: grid;\n\n  grid-template-rows: 1fr 4fr;\n\n  width: 500px;\n  height: 500px;\n  overflow: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.default_header {\n  background-color: #eee3cb;\n  font-family: \"cafe_bold\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n  /* height: 40px;*/\n}\n\n.default_footer {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: #d7c0ae;\n  padding: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/main_page/main_page.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/main_page/main_page.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Italic.ttf */ "./src/modules/fonts/Louis George Cafe Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Louis George Cafe Bold Italic.ttf */ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */
@font-face {
  font-family: "cafe";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-family: "cafe_bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
/*
#F9F5F6
#F8E8EE
#FDCEDF
#F2BED1*/

/*
#B7C4CF
#EEE3CB
#D7C0AE
#967E76*/

.container {
  display: grid;

  grid-template-rows: 1fr 5fr;
  gap: 30px;
}
.main_header {
  background-color: #b7c4cf;
  font-family: "cafe_bold";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
}
`, "",{"version":3,"sources":["webpack://./src/modules/main_page/main_page.css"],"names":[],"mappings":"AAAA,aAAa;AACb;EACE,mBAAmB;EACnB,4CAAkD;EAClD,wBAAwB;EACxB,4CAAwD;AAC1D;AACA;;;;QAIQ;;AAER;;;;QAIQ;;AAER;EACE,aAAa;;EAEb,2BAA2B;EAC3B,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["/** @format */\n@font-face {\n  font-family: \"cafe\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Italic.ttf);\n  font-family: \"cafe_bold\";\n  src: url(../fonts/Louis\\ George\\ Cafe\\ Bold\\ Italic.ttf);\n}\n/*\n#F9F5F6\n#F8E8EE\n#FDCEDF\n#F2BED1*/\n\n/*\n#B7C4CF\n#EEE3CB\n#D7C0AE\n#967E76*/\n\n.container {\n  display: grid;\n\n  grid-template-rows: 1fr 5fr;\n  gap: 30px;\n}\n.main_header {\n  background-color: #b7c4cf;\n  font-family: \"cafe_bold\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/add_Button/addButton.css":
/*!**********************************************!*\
  !*** ./src/modules/add_Button/addButton.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addButton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./addButton.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_Button/addButton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addButton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addButton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/add_modal/addForm.css":
/*!*******************************************!*\
  !*** ./src/modules/add_modal/addForm.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./addForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/add_modal/addtaskModal.css":
/*!************************************************!*\
  !*** ./src/modules/add_modal/addtaskModal.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addtaskModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./addtaskModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/add_modal/addtaskModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addtaskModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addtaskModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addtaskModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addtaskModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/common/appendtasks.css":
/*!********************************************!*\
  !*** ./src/modules/common/appendtasks.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_appendtasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./appendtasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/common/appendtasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_appendtasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_appendtasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_appendtasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_appendtasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/default_projects/default_project.css":
/*!**********************************************************!*\
  !*** ./src/modules/default_projects/default_project.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_default_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./default_project.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/default_projects/default_project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_default_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_default_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_default_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_default_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/main_page/main_page.css":
/*!*********************************************!*\
  !*** ./src/modules/main_page/main_page.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main_page.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/main_page/main_page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add_Button/addButton.js":
/*!*********************************************!*\
  !*** ./src/modules/add_Button/addButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_Button_addButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_Button/addButton.css */ "./src/modules/add_Button/addButton.css");
/* harmony import */ var _add_Button_showModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add_Button/showModal */ "./src/modules/add_Button/showModal.js");
/** @format */




function createAddButton(btnText) {
  const dfooter = document.getElementById("dFooter");

  const addBtn = document.createElement("button");
  addBtn.classList.add("add_button");
  addBtn.innerText = `${btnText}`;

  dfooter.appendChild(addBtn);
  addBtn.addEventListener("click", () => {
    (0,_add_Button_showModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddButton);


/***/ }),

/***/ "./src/modules/add_Button/showModal.js":
/*!*********************************************!*\
  !*** ./src/modules/add_Button/showModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_modal_addtaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_modal/addtaskModal */ "./src/modules/add_modal/addtaskModal.js");
/* harmony import */ var _add_modal_addForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add_modal/addForm */ "./src/modules/add_modal/addForm.js");
/** @format */




function showModal() {
  const modalBox = document.getElementById("tModal");

  modalBox.style.display = "block";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);


/***/ }),

/***/ "./src/modules/add_modal/addForm.js":
/*!******************************************!*\
  !*** ./src/modules/add_modal/addForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_modal_addForm_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_modal/addForm.css */ "./src/modules/add_modal/addForm.css");
/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/createElement */ "./src/modules/common/createElement.js");
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage */ "./src/modules/common/storage.js");
/* harmony import */ var _clearInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearInputs */ "./src/modules/add_modal/clearInputs.js");
/** @format */






function addForm() {
  const labels = ["Title", "Description", "Due on", "Priority"];
  const priorities = ["High", "Medium", "Low"];

  // const taskForm = createElement("form", "tform", "task_form", "Add New Task");

  const taskFooter = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "tfooter", "task_footer", "");
  const tickbtn = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "tbtn", "add_btn", `✔`);
  // addbtn.setAttribute("type", "submit");
  tickbtn.addEventListener("click", () => {
    (0,_common_storage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_clearInputs__WEBPACK_IMPORTED_MODULE_3__["default"])("ttitle", "tdescription");
  });

  const taskForm = document.createElement("form");
  taskForm.id = "tform";
  taskForm.classList.add("task_form");
  const labelList = document.createElement("ul");
  const inputList = document.createElement("ul");
  taskForm.appendChild(labelList);
  taskForm.appendChild(inputList);
  labels.forEach((label) => {
    let newListItem = document.createElement("li");
    let newLabel = document.createElement("label");
    newLabel.innerText = `${label}`;
    newLabel.for = `${label}`;
    newListItem.appendChild(newLabel);
    labelList.appendChild(newListItem);
  });

  const l1 = document.createElement("li");

  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  const l4 = document.createElement("li");
  inputList.appendChild(l1);
  inputList.appendChild(l2);
  inputList.appendChild(l3);
  inputList.appendChild(l4);
  document.createElement("li");
  const title = document.createElement("input");
  title.id = "ttitle";
  l1.appendChild(title);

  const description = document.createElement("textarea");
  description.id = "tdescription";
  l2.appendChild(description);

  const dueDate = document.createElement("input");
  dueDate.id = "tdue";
  dueDate.setAttribute("type", "date");
  l3.appendChild(dueDate);

  let priorityDropDown = document.createElement("select");
  priorityDropDown.id = "tpriority";

  priorities.forEach((priority) => {
    let newPriority = document.createElement("option");
    newPriority.value = `${priority}`;
    newPriority.innerText = `${priority}`;
    priorityDropDown.appendChild(newPriority);
  });

  l4.appendChild(priorityDropDown);

  const modalWindow = document.getElementById("mcontent");
  taskFooter.appendChild(tickbtn);

  modalWindow.appendChild(taskForm);
  modalWindow.appendChild(taskFooter);

  return taskForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addForm);


/***/ }),

/***/ "./src/modules/add_modal/addtaskModal.js":
/*!***********************************************!*\
  !*** ./src/modules/add_modal/addtaskModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_modal_addtaskModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_modal/addtaskModal.css */ "./src/modules/add_modal/addtaskModal.css");
/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/createElement */ "./src/modules/common/createElement.js");
/* harmony import */ var _add_modal_addForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add_modal/addForm */ "./src/modules/add_modal/addForm.js");
/** @format */





function createModal() {
  const taskModal = document.createElement("div");
  taskModal.id = "tModal";
  taskModal.classList.add("task_modal");
  const taskContent = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "div",
    "mcontent",
    "modal_content",
    "Add a new task"
  );

  taskModal.appendChild(taskContent);

  const closeBtn = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "cbtn", "close", "X");

  taskContent.appendChild(closeBtn);

  const container = document.getElementById("container");
  container.appendChild(taskModal);

  const form = (0,_add_modal_addForm__WEBPACK_IMPORTED_MODULE_2__["default"])();

  let formID = document.getElementById("tform");
  if (formID == null) {
    modalBox.appendChild(form);
  }

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    taskModal.style.display = "none";
  }
}

createModal();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);


/***/ }),

/***/ "./src/modules/add_modal/clearInputs.js":
/*!**********************************************!*\
  !*** ./src/modules/add_modal/clearInputs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */

function clearInputs(titleField, descriptionField) {
  const tField = document.getElementById(`${titleField}`);
  const dField = document.getElementById(`${descriptionField}`);

  tField.value = "";
  dField.value = "";
  // return clearInputs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearInputs);


/***/ }),

/***/ "./src/modules/common/appendtasks.js":
/*!*******************************************!*\
  !*** ./src/modules/common/appendtasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_retrieveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/retrieveData */ "./src/modules/common/retrieveData.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/modules/common/createElement.js");
/* harmony import */ var _common_appendtasks_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/appendtasks.css */ "./src/modules/common/appendtasks.css");
/** @format */





function appendTasks(addedTasks, fID) {
  const folder = document.getElementById(`${fID}`);
  const latestTask = addedTasks.slice(-1);
  const addedTaskDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "atask", "added_task", "");
  const checkBox = document.createElement("input");
  const checkBoxDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "cdiv", "task_checkbox", "");
  const imageHolder = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "idiv", "image_holder", "");
  checkBoxDiv.appendChild(checkBox);
  checkBox.type = "checkbox";
  checkBox.className = "check_box";

  const taskPara = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "p",
    "tpara",
    "para_title",
    `${latestTask[0].title}`
  );
  const datePara = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "p",
    "dpara",
    "",
    ` ${latestTask[0].dueDate} `
  );

  const priorityPara = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "p",
    "ppara",
    "para_priority",
    ` ${latestTask[0].priority}`
  );

  if (latestTask[0].priority == "High") {
    priorityPara.style.color = `rgb(206, 7, 7)`;
  } else if (latestTask[0].priority == "Medium") {
    priorityPara.style.color = `rgb(247, 103, 50)`;
  } else if (latestTask[0].priority == "Low") {
    priorityPara.style.color = `rgb(208, 211, 39)`;
  }

  const editImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "editimage", "task_images", "");
  editImg.src =
    "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/editing.png";
  const deleteImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "deleteimage", "task_images", "");
  deleteImg.src =
    "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/bin.png";
  imageHolder.appendChild(editImg);
  imageHolder.appendChild(deleteImg);
  addedTaskDiv.appendChild(checkBoxDiv);
  addedTaskDiv.appendChild(taskPara);
  addedTaskDiv.appendChild(datePara);
  addedTaskDiv.appendChild(priorityPara);
  addedTaskDiv.appendChild(imageHolder);
  //ddedTaskDiv.appendChild(deleteImg);

  const latestToBeAppended = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("li", "", "", "");
  latestToBeAppended.appendChild(addedTaskDiv);

  // folder.appendChild(latestToBeAppended);
  const olList = document.getElementById("taskList");
  olList.appendChild(latestToBeAppended);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTasks);


/***/ }),

/***/ "./src/modules/common/createElement.js":
/*!*********************************************!*\
  !*** ./src/modules/common/createElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */

function createElement(elementName, elementID, elementClass, elementInnerText) {
  const elementCreated = document.createElement(`${elementName}`);
  elementCreated.id = `${elementID}`;
  elementCreated.className = `${elementClass}`;
  elementCreated.innerText = `${elementInnerText}`;

  return elementCreated;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/modules/common/retrieveData.js":
/*!********************************************!*\
  !*** ./src/modules/common/retrieveData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
let fromStorage = [];

function retrieveData(task) {
  let retrievedFromStorage = localStorage.getItem("addedTasks");
  //console.log(JSON.parse(retrievedFromStorage));
  const parsedDate = JSON.parse(retrievedFromStorage);

  return parsedDate;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveData);


/***/ }),

/***/ "./src/modules/common/storage.js":
/*!***************************************!*\
  !*** ./src/modules/common/storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendtasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendtasks */ "./src/modules/common/appendtasks.js");
/* harmony import */ var _retrieveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveData */ "./src/modules/common/retrieveData.js");
/** @format */


const tasksAdded = [];
function storeData() {
  const taskDetails = new Object();
  const folderId = document.getElementById("dfolder").id;

  const title = document.getElementById("ttitle").value;
  taskDetails.title = title;
  const description = document.getElementById("tdescription").value;
  taskDetails.description = description;
  const dueDate = document.getElementById("tdue").value;
  taskDetails.dueDate = dueDate;
  const priority = document.getElementById("tpriority").value;
  taskDetails.priority = priority;

  tasksAdded.push(taskDetails);

  localStorage.setItem("addedTasks", JSON.stringify(tasksAdded));

  (0,_appendtasks__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksAdded, folderId);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeData);


/***/ }),

/***/ "./src/modules/default_projects/appendretreivedTask.js":
/*!*************************************************************!*\
  !*** ./src/modules/default_projects/appendretreivedTask.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/createElement */ "./src/modules/common/createElement.js");
/* harmony import */ var _common_appendtasks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/appendtasks.css */ "./src/modules/common/appendtasks.css");
/** @format */




function appendretreivedTask(retreivedData) {
  const olList = document.getElementById("taskList");
  console.log(olList);
  retreivedData.forEach((data) => {
    let listItem = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("li", "", "", "");
    const addedTaskDiv = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "atask", "added_task", "");
    const checkBox = document.createElement("input");
    const checkBoxDiv = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "cdiv", "task_checkbox", "");
    const imageHolder = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "idiv", "image_holder", "");
    checkBoxDiv.appendChild(checkBox);
    checkBox.type = "checkbox";
    checkBox.className = "check_box";

    const taskPara = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "tpara", "para_title", `${data.title}`);
    const datePara = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "dpara", "", ` ${data.dueDate} `);

    const priorityPara = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "p",
      "ppara",
      "para_priority",
      ` ${data.priority}`
    );

    if (data.priority == "High") {
      priorityPara.style.color = `rgb(206, 7, 7)`;
    } else if (data.priority == "Medium") {
      priorityPara.style.color = `rgb(247, 103, 50)`;
    } else if (data.priority == "Low") {
      priorityPara.style.color = `rgb(208, 211, 39)`;
    }

    const editImg = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "editimage", "task_images", "");
    editImg.src =
      "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/editing.png";
    const deleteImg = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "deleteimage", "task_images", "");
    deleteImg.src =
      "/home/madhumathi/repos/Intermediate-Javascript/To-do-List/src/modules/images/bin.png";
    imageHolder.appendChild(editImg);
    imageHolder.appendChild(deleteImg);
    addedTaskDiv.appendChild(checkBoxDiv);
    addedTaskDiv.appendChild(taskPara);
    addedTaskDiv.appendChild(datePara);
    addedTaskDiv.appendChild(priorityPara);
    addedTaskDiv.appendChild(imageHolder);
    listItem.appendChild(addedTaskDiv);

    olList.appendChild(listItem);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendretreivedTask);


/***/ }),

/***/ "./src/modules/default_projects/default_project.js":
/*!*********************************************************!*\
  !*** ./src/modules/default_projects/default_project.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_projects_default_project_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default_projects/default_project.css */ "./src/modules/default_projects/default_project.css");
/* harmony import */ var _add_Button_addButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add_Button/addButton */ "./src/modules/add_Button/addButton.js");
/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/createElement */ "./src/modules/common/createElement.js");
/* harmony import */ var _common_retrieveData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/retrieveData */ "./src/modules/common/retrieveData.js");
/* harmony import */ var _common_appendtasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/appendtasks */ "./src/modules/common/appendtasks.js");
/* harmony import */ var _default_projects_appendretreivedTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../default_projects/appendretreivedTask */ "./src/modules/default_projects/appendretreivedTask.js");
/** @format */








function defaultFolder() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main_container");
  const defaultFolder = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "dfolder", "d_folder", "");

  const defaultHeader = document.createElement("div");
  const defaultFooter = document.createElement("div");
  defaultFolder.appendChild(defaultHeader);
  const rData = (0,_common_retrieveData__WEBPACK_IMPORTED_MODULE_3__["default"])();

  const tList = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])("ol", "taskList", "", "");
  tList.type = "1";

  /* rData.forEach((data) => {
    const dataListItem = createElement("li", "", "", `${data.title}`);
    tList.appendChild(dataListItem);
  });*/

  defaultHeader.innerText = "Everything";
  defaultHeader.classList.add("default_header");
  defaultFooter.id = "dFooter";
  defaultFooter.classList = "default_footer";
  defaultFolder.id = "dfolder";
  defaultFolder.classList.add("default_folder");

  const container = document.getElementById("container");
  container.appendChild(mainContainer);
  defaultFolder.appendChild(tList);
  console.log(tList);

  defaultFolder.appendChild(defaultFooter);
  mainContainer.appendChild(defaultFolder);
  (0,_add_Button_addButton__WEBPACK_IMPORTED_MODULE_1__["default"])("+");
  (0,_default_projects_appendretreivedTask__WEBPACK_IMPORTED_MODULE_5__["default"])(rData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultFolder);


/***/ }),

/***/ "./src/modules/main_page/main_page.js":
/*!********************************************!*\
  !*** ./src/modules/main_page/main_page.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_page_main_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main_page/main_page.css */ "./src/modules/main_page/main_page.css");
/** @format */


function loadMain() {
  const container = document.getElementById("container");
  const header = document.createElement("div");
  const headerTextContainer = document.createElement("p");
  headerTextContainer.innerText = "Too-To-Do";

  header.classList.add("main_header");
  header.appendChild(headerTextContainer);

  container.appendChild(header);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);


/***/ }),

/***/ "./src/modules/fonts/Louis George Cafe Bold Italic.ttf":
/*!*************************************************************!*\
  !*** ./src/modules/fonts/Louis George Cafe Bold Italic.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c14429d37480c50e3dcf.ttf";

/***/ }),

/***/ "./src/modules/fonts/Louis George Cafe Italic.ttf":
/*!********************************************************!*\
  !*** ./src/modules/fonts/Louis George Cafe Italic.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc92b4f17f7b2f06a557.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_page_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main_page/main_page */ "./src/modules/main_page/main_page.js");
/* harmony import */ var _modules_default_projects_default_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/default_projects/default_project */ "./src/modules/default_projects/default_project.js");
/** @format */



function loadComponents() {
  (0,_modules_main_page_main_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_default_projects_default_project__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

loadComponents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FEO0FBQ2tCOztBQUV2RTtBQUNBLEVBQUUsd0VBQVE7QUFDVixFQUFFLHFGQUFhO0FBQ2Y7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkX0J1dHRvbi9hZGRCdXR0b24uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGRfbW9kYWwvYWRkRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZF9tb2RhbC9hZGR0YXNrTW9kYWwuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21tb24vYXBwZW5kdGFza3MuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWZhdWx0X3Byb2plY3RzL2RlZmF1bHRfcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21haW5fcGFnZS9tYWluX3BhZ2UuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkX0J1dHRvbi9hZGRCdXR0b24uY3NzP2U5NTIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZF9tb2RhbC9hZGRGb3JtLmNzcz83NDRlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGRfbW9kYWwvYWRkdGFza01vZGFsLmNzcz9kNWYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21tb24vYXBwZW5kdGFza3MuY3NzPzg5NzgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlZmF1bHRfcHJvamVjdHMvZGVmYXVsdF9wcm9qZWN0LmNzcz8wOWMyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9tYWluX3BhZ2UvbWFpbl9wYWdlLmNzcz85NDJhIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZF9CdXR0b24vYWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGRfQnV0dG9uL3Nob3dNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkX21vZGFsL2FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZF9tb2RhbC9hZGR0YXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZF9tb2RhbC9jbGVhcklucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tbW9uL2FwcGVuZHRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21tb24vY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tbW9uL3JldHJpZXZlRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tbW9uL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlZmF1bHRfcHJvamVjdHMvYXBwZW5kcmV0cmVpdmVkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVmYXVsdF9wcm9qZWN0cy9kZWZhdWx0X3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21haW5fcGFnZS9tYWluX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiogQGZvcm1hdCAqL1xuXG4uYWRkX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWUzY2I7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvYWRkX0J1dHRvbi9hZGRCdXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIEBmb3JtYXQgKi9cXG5cXG4uYWRkX2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlM2NiO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlIEJvbGQgSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qKiBAZm9ybWF0ICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjYWZlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LWZhbWlseTogXCJjYWZlX2JvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi50YXNrX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiY2FmZVwiO1xufVxuXG4udGFza19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmFkZF9idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDE3NywgODUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5hZGRfYnRuOmhvdmVyLFxuLmFkZF9idG46Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2FkZF9tb2RhbC9hZGRGb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhOztBQUViO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFrRDtFQUNsRCx3QkFBd0I7RUFDeEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogQGZvcm1hdCAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjYWZlXFxcIjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmVcXFxcIEl0YWxpYy50dGYpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjYWZlX2JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvTG91aXNcXFxcIEdlb3JnZVxcXFwgQ2FmZVxcXFwgQm9sZFxcXFwgSXRhbGljLnR0Zik7XFxufVxcblxcbi50YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcImNhZmVcXFwiO1xcbn1cXG5cXG4udGFza19mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5hZGRfYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCAxNzcsIDg1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWRkX2J0bjpob3ZlcixcXG4uYWRkX2J0bjpmb2N1cyB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Mb3VpcyBHZW9yZ2UgQ2FmZSBJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgQm9sZCBJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyoqIEBmb3JtYXQgKi9cbi8qXG4jQjdDNENGXG4jRUVFM0NCXG4jRDdDMEFFXG4jOTY3RTc2Ki9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVfYm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbi50YXNrX21vZGFsIHtcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLm1vZGFsX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2I3YzRjZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBmb250LWZhbWlseTogXCJjYWZlX2JvbGRcIjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvYWRkX21vZGFsL2FkZHRhc2tNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFBYTtBQUNiOzs7O1FBSVE7O0FBRVI7RUFDRSxtQkFBbUI7RUFDbkIsNENBQWtEO0VBQ2xELHdCQUF3QjtFQUN4Qiw0Q0FBd0Q7QUFDMUQ7QUFDQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7RUFDNUMsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogQGZvcm1hdCAqL1xcbi8qXFxuI0I3QzRDRlxcbiNFRUUzQ0JcXG4jRDdDMEFFXFxuIzk2N0U3NiovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNhZmVcXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvTG91aXNcXFxcIEdlb3JnZVxcXFwgQ2FmZVxcXFwgSXRhbGljLnR0Zik7XFxuICBmb250LWZhbWlseTogXFxcImNhZmVfYm9sZFxcXCI7XFxuICBzcmM6IHVybCguLi9mb250cy9Mb3Vpc1xcXFwgR2VvcmdlXFxcXCBDYWZlXFxcXCBCb2xkXFxcXCBJdGFsaWMudHRmKTtcXG59XFxuLnRhc2tfbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbF9jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjYjdjNGNmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBmb250LWZhbWlseTogXFxcImNhZmVfYm9sZFxcXCI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlIEJvbGQgSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qKiBAZm9ybWF0ICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjYWZlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LWZhbWlseTogXCJjYWZlX2JvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi50YXNrX2ltYWdlcyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hZGRlZF90YXNrIHtcbiAgZm9udC1mYW1pbHk6IFwiY2FmZVwiO1xuICAvKmZvbnQtc2l6ZTogMS4ycmVtOyovXG4gIGhlaWdodDogMzBweDtcbiAgLypkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgM2ZyIDJmciAyZnI7XG4gIGdhcDogNXB4O1xufVxuXG4udGFza19jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoZWNrX2JveCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4ucGFyYV90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiY2FmZV9ib2xkXCI7XG4gIHdpZHRoOiAyMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZV9ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tfaW1hZ2VzOmhvdmVyLFxuLnRhc2tfaW1hZ2VzOmZvY3VzIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9jb21tb24vYXBwZW5kdGFza3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7RUFDRSxtQkFBbUI7RUFDbkIsNENBQWtEO0VBQ2xELHdCQUF3QjtFQUN4Qiw0Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1o7O3VCQUVxQjtFQUNyQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIEBmb3JtYXQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZVxcXCI7XFxuICBzcmM6IHVybCguLi9mb250cy9Mb3Vpc1xcXFwgR2VvcmdlXFxcXCBDYWZlXFxcXCBJdGFsaWMudHRmKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZV9ib2xkXFxcIjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmVcXFxcIEJvbGRcXFxcIEl0YWxpYy50dGYpO1xcbn1cXG5cXG4udGFza19pbWFnZXMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5hZGRlZF90YXNrIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZVxcXCI7XFxuICAvKmZvbnQtc2l6ZTogMS4ycmVtOyovXFxuICBoZWlnaHQ6IDMwcHg7XFxuICAvKmRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgM2ZyIDJmciAyZnI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tfY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNoZWNrX2JveCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcbi5wYXJhX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZV9ib2xkXFxcIjtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWFnZV9ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tfaW1hZ2VzOmhvdmVyLFxcbi50YXNrX2ltYWdlczpmb2N1cyB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Mb3VpcyBHZW9yZ2UgQ2FmZSBJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgQm9sZCBJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyoqIEBmb3JtYXQgKi9cblxuLypcbiNCN0M0Q0ZcbiNFRUUzQ0JcbiNEN0MwQUVcbiM5NjdFNzYqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVfYm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0X2ZvbGRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuXG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kZWZhdWx0X2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWUzY2I7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVfYm9sZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIC8qIGhlaWdodDogNDBweDsqL1xufVxuXG4uZGVmYXVsdF9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdjMGFlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2RlZmF1bHRfcHJvamVjdHMvZGVmYXVsdF9wcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhOztBQUViOzs7O1FBSVE7QUFDUjtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBa0Q7RUFDbEQsd0JBQXdCO0VBQ3hCLDRDQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTs7RUFFYiwyQkFBMkI7O0VBRTNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIEBmb3JtYXQgKi9cXG5cXG4vKlxcbiNCN0M0Q0ZcXG4jRUVFM0NCXFxuI0Q3QzBBRVxcbiM5NjdFNzYqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjYWZlXFxcIjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmVcXFxcIEl0YWxpYy50dGYpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjYWZlX2JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvTG91aXNcXFxcIEdlb3JnZVxcXFwgQ2FmZVxcXFwgQm9sZFxcXFwgSXRhbGljLnR0Zik7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVmYXVsdF9mb2xkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG5cXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbi5kZWZhdWx0X2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlM2NiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjYWZlX2JvbGRcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgLyogaGVpZ2h0OiA0MHB4OyovXFxufVxcblxcbi5kZWZhdWx0X2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdjMGFlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlIEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Mb3VpcyBHZW9yZ2UgQ2FmZSBCb2xkIEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiogQGZvcm1hdCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVfYm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbi8qXG4jRjlGNUY2XG4jRjhFOEVFXG4jRkRDRURGXG4jRjJCRUQxKi9cblxuLypcbiNCN0M0Q0ZcbiNFRUUzQ0JcbiNEN0MwQUVcbiM5NjdFNzYqL1xuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XG4gIGdhcDogMzBweDtcbn1cbi5tYWluX2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2M0Y2Y7XG4gIGZvbnQtZmFtaWx5OiBcImNhZmVfYm9sZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL21haW5fcGFnZS9tYWluX3BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7QUFDYjtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBa0Q7RUFDbEQsd0JBQXdCO0VBQ3hCLDRDQUF3RDtBQUMxRDtBQUNBOzs7O1FBSVE7O0FBRVI7Ozs7UUFJUTs7QUFFUjtFQUNFLGFBQWE7O0VBRWIsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIEBmb3JtYXQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZVxcXCI7XFxuICBzcmM6IHVybCguLi9mb250cy9Mb3Vpc1xcXFwgR2VvcmdlXFxcXCBDYWZlXFxcXCBJdGFsaWMudHRmKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZV9ib2xkXFxcIjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmVcXFxcIEJvbGRcXFxcIEl0YWxpYy50dGYpO1xcbn1cXG4vKlxcbiNGOUY1RjZcXG4jRjhFOEVFXFxuI0ZEQ0VERlxcbiNGMkJFRDEqL1xcblxcbi8qXFxuI0I3QzRDRlxcbiNFRUUzQ0JcXG4jRDdDMEFFXFxuIzk2N0U3NiovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG4ubWFpbl9oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YzRjZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2FmZV9ib2xkXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZEJ1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZEJ1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWRkRm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZEZvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZHRhc2tNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZHRhc2tNb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwZW5kdGFza3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHBlbmR0YXNrcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdF9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdF9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX3BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX3BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IFwiLi4vYWRkX0J1dHRvbi9hZGRCdXR0b24uY3NzXCI7XG5cbmltcG9ydCBzaG93TW9kYWwgZnJvbSBcIi4uL2FkZF9CdXR0b24vc2hvd01vZGFsXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbihidG5UZXh0KSB7XG4gIGNvbnN0IGRmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRGb290ZXJcIik7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRfYnV0dG9uXCIpO1xuICBhZGRCdG4uaW5uZXJUZXh0ID0gYCR7YnRuVGV4dH1gO1xuXG4gIGRmb290ZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd01vZGFsKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRCdXR0b247XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL2FkZF9tb2RhbC9hZGR0YXNrTW9kYWxcIjtcbmltcG9ydCBhZGRGb3JtIGZyb20gXCIuLi9hZGRfbW9kYWwvYWRkRm9ybVwiO1xuXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0TW9kYWxcIik7XG5cbiAgbW9kYWxCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd01vZGFsO1xuIiwiLyoqIEBmb3JtYXQgKi9cbmltcG9ydCBcIi4uL2FkZF9tb2RhbC9hZGRGb3JtLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2NvbW1vbi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBzdG9yZURhdGEgZnJvbSBcIi4uL2NvbW1vbi9zdG9yYWdlXCI7XG5pbXBvcnQgY2xlYXJJbnB1dHMgZnJvbSBcIi4vY2xlYXJJbnB1dHNcIjtcblxuZnVuY3Rpb24gYWRkRm9ybSgpIHtcbiAgY29uc3QgbGFiZWxzID0gW1wiVGl0bGVcIiwgXCJEZXNjcmlwdGlvblwiLCBcIkR1ZSBvblwiLCBcIlByaW9yaXR5XCJdO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcblxuICAvLyBjb25zdCB0YXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwidGZvcm1cIiwgXCJ0YXNrX2Zvcm1cIiwgXCJBZGQgTmV3IFRhc2tcIik7XG5cbiAgY29uc3QgdGFza0Zvb3RlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0Zm9vdGVyXCIsIFwidGFza19mb290ZXJcIiwgXCJcIik7XG4gIGNvbnN0IHRpY2tidG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwidGJ0blwiLCBcImFkZF9idG5cIiwgYOKclGApO1xuICAvLyBhZGRidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgdGlja2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0b3JlRGF0YSgpO1xuICAgIGNsZWFySW5wdXRzKFwidHRpdGxlXCIsIFwidGRlc2NyaXB0aW9uXCIpO1xuICB9KTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0YXNrRm9ybS5pZCA9IFwidGZvcm1cIjtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tfZm9ybVwiKTtcbiAgY29uc3QgbGFiZWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsTGlzdCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0TGlzdCk7XG4gIGxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgIGxldCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmV3TGFiZWwuaW5uZXJUZXh0ID0gYCR7bGFiZWx9YDtcbiAgICBuZXdMYWJlbC5mb3IgPSBgJHtsYWJlbH1gO1xuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcbiAgICBsYWJlbExpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xuICB9KTtcblxuICBjb25zdCBsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBpbnB1dExpc3QuYXBwZW5kQ2hpbGQobDEpO1xuICBpbnB1dExpc3QuYXBwZW5kQ2hpbGQobDIpO1xuICBpbnB1dExpc3QuYXBwZW5kQ2hpbGQobDMpO1xuICBpbnB1dExpc3QuYXBwZW5kQ2hpbGQobDQpO1xuICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5pZCA9IFwidHRpdGxlXCI7XG4gIGwxLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb24uaWQgPSBcInRkZXNjcmlwdGlvblwiO1xuICBsMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS5pZCA9IFwidGR1ZVwiO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBsMy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBsZXQgcHJpb3JpdHlEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5RHJvcERvd24uaWQgPSBcInRwcmlvcml0eVwiO1xuXG4gIHByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBsZXQgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld1ByaW9yaXR5LnZhbHVlID0gYCR7cHJpb3JpdHl9YDtcbiAgICBuZXdQcmlvcml0eS5pbm5lclRleHQgPSBgJHtwcmlvcml0eX1gO1xuICAgIHByaW9yaXR5RHJvcERvd24uYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuICB9KTtcblxuICBsNC5hcHBlbmRDaGlsZChwcmlvcml0eURyb3BEb3duKTtcblxuICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWNvbnRlbnRcIik7XG4gIHRhc2tGb290ZXIuYXBwZW5kQ2hpbGQodGlja2J0bik7XG5cbiAgbW9kYWxXaW5kb3cuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbFdpbmRvdy5hcHBlbmRDaGlsZCh0YXNrRm9vdGVyKTtcblxuICByZXR1cm4gdGFza0Zvcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEZvcm07XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgXCIuLi9hZGRfbW9kYWwvYWRkdGFza01vZGFsLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2NvbW1vbi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgYWRkRm9ybSBmcm9tIFwiLi4vYWRkX21vZGFsL2FkZEZvcm1cIjtcblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tNb2RhbC5pZCA9IFwidE1vZGFsXCI7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFza19tb2RhbFwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJtY29udGVudFwiLFxuICAgIFwibW9kYWxfY29udGVudFwiLFxuICAgIFwiQWRkIGEgbmV3IHRhc2tcIlxuICApO1xuXG4gIHRhc2tNb2RhbC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY2J0blwiLCBcImNsb3NlXCIsIFwiWFwiKTtcblxuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTW9kYWwpO1xuXG4gIGNvbnN0IGZvcm0gPSBhZGRGb3JtKCk7XG5cbiAgbGV0IGZvcm1JRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGZvcm1cIik7XG4gIGlmIChmb3JtSUQgPT0gbnVsbCkge1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGZvcm0pO1xuICB9XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5jcmVhdGVNb2RhbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmZ1bmN0aW9uIGNsZWFySW5wdXRzKHRpdGxlRmllbGQsIGRlc2NyaXB0aW9uRmllbGQpIHtcbiAgY29uc3QgdEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGl0bGVGaWVsZH1gKTtcbiAgY29uc3QgZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGVzY3JpcHRpb25GaWVsZH1gKTtcblxuICB0RmllbGQudmFsdWUgPSBcIlwiO1xuICBkRmllbGQudmFsdWUgPSBcIlwiO1xuICAvLyByZXR1cm4gY2xlYXJJbnB1dHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFySW5wdXRzO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHJldHJpZXZlRGF0YSBmcm9tIFwiLi4vY29tbW9uL3JldHJpZXZlRGF0YVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vY29tbW9uL2FwcGVuZHRhc2tzLmNzc1wiO1xuXG5mdW5jdGlvbiBhcHBlbmRUYXNrcyhhZGRlZFRhc2tzLCBmSUQpIHtcbiAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZklEfWApO1xuICBjb25zdCBsYXRlc3RUYXNrID0gYWRkZWRUYXNrcy5zbGljZSgtMSk7XG4gIGNvbnN0IGFkZGVkVGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhdGFza1wiLCBcImFkZGVkX3Rhc2tcIiwgXCJcIik7XG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjaGVja0JveERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjZGl2XCIsIFwidGFza19jaGVja2JveFwiLCBcIlwiKTtcbiAgY29uc3QgaW1hZ2VIb2xkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaWRpdlwiLCBcImltYWdlX2hvbGRlclwiLCBcIlwiKTtcbiAgY2hlY2tCb3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja0JveC5jbGFzc05hbWUgPSBcImNoZWNrX2JveFwiO1xuXG4gIGNvbnN0IHRhc2tQYXJhID0gY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcInRwYXJhXCIsXG4gICAgXCJwYXJhX3RpdGxlXCIsXG4gICAgYCR7bGF0ZXN0VGFza1swXS50aXRsZX1gXG4gICk7XG4gIGNvbnN0IGRhdGVQYXJhID0gY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcImRwYXJhXCIsXG4gICAgXCJcIixcbiAgICBgICR7bGF0ZXN0VGFza1swXS5kdWVEYXRlfSBgXG4gICk7XG5cbiAgY29uc3QgcHJpb3JpdHlQYXJhID0gY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcInBwYXJhXCIsXG4gICAgXCJwYXJhX3ByaW9yaXR5XCIsXG4gICAgYCAke2xhdGVzdFRhc2tbMF0ucHJpb3JpdHl9YFxuICApO1xuXG4gIGlmIChsYXRlc3RUYXNrWzBdLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgcHJpb3JpdHlQYXJhLnN0eWxlLmNvbG9yID0gYHJnYigyMDYsIDcsIDcpYDtcbiAgfSBlbHNlIGlmIChsYXRlc3RUYXNrWzBdLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICBwcmlvcml0eVBhcmEuc3R5bGUuY29sb3IgPSBgcmdiKDI0NywgMTAzLCA1MClgO1xuICB9IGVsc2UgaWYgKGxhdGVzdFRhc2tbMF0ucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgIHByaW9yaXR5UGFyYS5zdHlsZS5jb2xvciA9IGByZ2IoMjA4LCAyMTEsIDM5KWA7XG4gIH1cblxuICBjb25zdCBlZGl0SW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImVkaXRpbWFnZVwiLCBcInRhc2tfaW1hZ2VzXCIsIFwiXCIpO1xuICBlZGl0SW1nLnNyYyA9XG4gICAgXCIvaG9tZS9tYWRodW1hdGhpL3JlcG9zL0ludGVybWVkaWF0ZS1KYXZhc2NyaXB0L1RvLWRvLUxpc3Qvc3JjL21vZHVsZXMvaW1hZ2VzL2VkaXRpbmcucG5nXCI7XG4gIGNvbnN0IGRlbGV0ZUltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJkZWxldGVpbWFnZVwiLCBcInRhc2tfaW1hZ2VzXCIsIFwiXCIpO1xuICBkZWxldGVJbWcuc3JjID1cbiAgICBcIi9ob21lL21hZGh1bWF0aGkvcmVwb3MvSW50ZXJtZWRpYXRlLUphdmFzY3JpcHQvVG8tZG8tTGlzdC9zcmMvbW9kdWxlcy9pbWFnZXMvYmluLnBuZ1wiO1xuICBpbWFnZUhvbGRlci5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcbiAgYWRkZWRUYXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94RGl2KTtcbiAgYWRkZWRUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQYXJhKTtcbiAgYWRkZWRUYXNrRGl2LmFwcGVuZENoaWxkKGRhdGVQYXJhKTtcbiAgYWRkZWRUYXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5UGFyYSk7XG4gIGFkZGVkVGFza0Rpdi5hcHBlbmRDaGlsZChpbWFnZUhvbGRlcik7XG4gIC8vZGRlZFRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcblxuICBjb25zdCBsYXRlc3RUb0JlQXBwZW5kZWQgPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gIGxhdGVzdFRvQmVBcHBlbmRlZC5hcHBlbmRDaGlsZChhZGRlZFRhc2tEaXYpO1xuXG4gIC8vIGZvbGRlci5hcHBlbmRDaGlsZChsYXRlc3RUb0JlQXBwZW5kZWQpO1xuICBjb25zdCBvbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpO1xuICBvbExpc3QuYXBwZW5kQ2hpbGQobGF0ZXN0VG9CZUFwcGVuZGVkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kVGFza3M7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lLCBlbGVtZW50SUQsIGVsZW1lbnRDbGFzcywgZWxlbWVudElubmVyVGV4dCkge1xuICBjb25zdCBlbGVtZW50Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudE5hbWV9YCk7XG4gIGVsZW1lbnRDcmVhdGVkLmlkID0gYCR7ZWxlbWVudElEfWA7XG4gIGVsZW1lbnRDcmVhdGVkLmNsYXNzTmFtZSA9IGAke2VsZW1lbnRDbGFzc31gO1xuICBlbGVtZW50Q3JlYXRlZC5pbm5lclRleHQgPSBgJHtlbGVtZW50SW5uZXJUZXh0fWA7XG5cbiAgcmV0dXJuIGVsZW1lbnRDcmVhdGVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiLyoqIEBmb3JtYXQgKi9cbmxldCBmcm9tU3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEodGFzaykge1xuICBsZXQgcmV0cmlldmVkRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZGVkVGFza3NcIik7XG4gIC8vY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXRyaWV2ZWRGcm9tU3RvcmFnZSkpO1xuICBjb25zdCBwYXJzZWREYXRlID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRGcm9tU3RvcmFnZSk7XG5cbiAgcmV0dXJuIHBhcnNlZERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldHJpZXZlRGF0YTtcbiIsIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgYXBwZW5kVGFza3MgZnJvbSBcIi4vYXBwZW5kdGFza3NcIjtcbmltcG9ydCByZXRyaWV2ZURhdGEgZnJvbSBcIi4vcmV0cmlldmVEYXRhXCI7XG5jb25zdCB0YXNrc0FkZGVkID0gW107XG5mdW5jdGlvbiBzdG9yZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gbmV3IE9iamVjdCgpO1xuICBjb25zdCBmb2xkZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGZvbGRlclwiKS5pZDtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHRpdGxlXCIpLnZhbHVlO1xuICB0YXNrRGV0YWlscy50aXRsZSA9IHRpdGxlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICB0YXNrRGV0YWlscy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZHVlXCIpLnZhbHVlO1xuICB0YXNrRGV0YWlscy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRwcmlvcml0eVwiKS52YWx1ZTtcbiAgdGFza0RldGFpbHMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICB0YXNrc0FkZGVkLnB1c2godGFza0RldGFpbHMpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkZWRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc0FkZGVkKSk7XG5cbiAgYXBwZW5kVGFza3ModGFza3NBZGRlZCwgZm9sZGVySWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZURhdGE7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vY29tbW9uL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2NvbW1vbi9hcHBlbmR0YXNrcy5jc3NcIjtcblxuZnVuY3Rpb24gYXBwZW5kcmV0cmVpdmVkVGFzayhyZXRyZWl2ZWREYXRhKSB7XG4gIGNvbnN0IG9sTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XG4gIGNvbnNvbGUubG9nKG9sTGlzdCk7XG4gIHJldHJlaXZlZERhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgICBjb25zdCBhZGRlZFRhc2tEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYXRhc2tcIiwgXCJhZGRlZF90YXNrXCIsIFwiXCIpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGNoZWNrQm94RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNkaXZcIiwgXCJ0YXNrX2NoZWNrYm94XCIsIFwiXCIpO1xuICAgIGNvbnN0IGltYWdlSG9sZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImlkaXZcIiwgXCJpbWFnZV9ob2xkZXJcIiwgXCJcIik7XG4gICAgY2hlY2tCb3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJjaGVja19ib3hcIjtcblxuICAgIGNvbnN0IHRhc2tQYXJhID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0cGFyYVwiLCBcInBhcmFfdGl0bGVcIiwgYCR7ZGF0YS50aXRsZX1gKTtcbiAgICBjb25zdCBkYXRlUGFyYSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZHBhcmFcIiwgXCJcIiwgYCAke2RhdGEuZHVlRGF0ZX0gYCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVBhcmEgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcInBwYXJhXCIsXG4gICAgICBcInBhcmFfcHJpb3JpdHlcIixcbiAgICAgIGAgJHtkYXRhLnByaW9yaXR5fWBcbiAgICApO1xuXG4gICAgaWYgKGRhdGEucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgIHByaW9yaXR5UGFyYS5zdHlsZS5jb2xvciA9IGByZ2IoMjA2LCA3LCA3KWA7XG4gICAgfSBlbHNlIGlmIChkYXRhLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgIHByaW9yaXR5UGFyYS5zdHlsZS5jb2xvciA9IGByZ2IoMjQ3LCAxMDMsIDUwKWA7XG4gICAgfSBlbHNlIGlmIChkYXRhLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgIHByaW9yaXR5UGFyYS5zdHlsZS5jb2xvciA9IGByZ2IoMjA4LCAyMTEsIDM5KWA7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJlZGl0aW1hZ2VcIiwgXCJ0YXNrX2ltYWdlc1wiLCBcIlwiKTtcbiAgICBlZGl0SW1nLnNyYyA9XG4gICAgICBcIi9ob21lL21hZGh1bWF0aGkvcmVwb3MvSW50ZXJtZWRpYXRlLUphdmFzY3JpcHQvVG8tZG8tTGlzdC9zcmMvbW9kdWxlcy9pbWFnZXMvZWRpdGluZy5wbmdcIjtcbiAgICBjb25zdCBkZWxldGVJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiZGVsZXRlaW1hZ2VcIiwgXCJ0YXNrX2ltYWdlc1wiLCBcIlwiKTtcbiAgICBkZWxldGVJbWcuc3JjID1cbiAgICAgIFwiL2hvbWUvbWFkaHVtYXRoaS9yZXBvcy9JbnRlcm1lZGlhdGUtSmF2YXNjcmlwdC9Uby1kby1MaXN0L3NyYy9tb2R1bGVzL2ltYWdlcy9iaW4ucG5nXCI7XG4gICAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG4gICAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcbiAgICBhZGRlZFRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3hEaXYpO1xuICAgIGFkZGVkVGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUGFyYSk7XG4gICAgYWRkZWRUYXNrRGl2LmFwcGVuZENoaWxkKGRhdGVQYXJhKTtcbiAgICBhZGRlZFRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlQYXJhKTtcbiAgICBhZGRlZFRhc2tEaXYuYXBwZW5kQ2hpbGQoaW1hZ2VIb2xkZXIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGFkZGVkVGFza0Rpdik7XG5cbiAgICBvbExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kcmV0cmVpdmVkVGFzaztcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBcIi4uL2RlZmF1bHRfcHJvamVjdHMvZGVmYXVsdF9wcm9qZWN0LmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUFkZEJ1dHRvbiBmcm9tIFwiLi4vYWRkX0J1dHRvbi9hZGRCdXR0b25cIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9jb21tb24vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHJldHJpZXZlRGF0YSBmcm9tIFwiLi4vY29tbW9uL3JldHJpZXZlRGF0YVwiO1xuaW1wb3J0IGFwcGVuZFRhc2tzIGZyb20gXCIuLi9jb21tb24vYXBwZW5kdGFza3NcIjtcbmltcG9ydCBhcHBlbmRyZXRyZWl2ZWRUYXNrIGZyb20gXCIuLi9kZWZhdWx0X3Byb2plY3RzL2FwcGVuZHJldHJlaXZlZFRhc2tcIjtcblxuZnVuY3Rpb24gZGVmYXVsdEZvbGRlcigpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5fY29udGFpbmVyXCIpO1xuICBjb25zdCBkZWZhdWx0Rm9sZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRmb2xkZXJcIiwgXCJkX2ZvbGRlclwiLCBcIlwiKTtcblxuICBjb25zdCBkZWZhdWx0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVmYXVsdEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlZmF1bHRGb2xkZXIuYXBwZW5kQ2hpbGQoZGVmYXVsdEhlYWRlcik7XG4gIGNvbnN0IHJEYXRhID0gcmV0cmlldmVEYXRhKCk7XG5cbiAgY29uc3QgdExpc3QgPSBjcmVhdGVFbGVtZW50KFwib2xcIiwgXCJ0YXNrTGlzdFwiLCBcIlwiLCBcIlwiKTtcbiAgdExpc3QudHlwZSA9IFwiMVwiO1xuXG4gIC8qIHJEYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICBjb25zdCBkYXRhTGlzdEl0ZW0gPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJcIiwgXCJcIiwgYCR7ZGF0YS50aXRsZX1gKTtcbiAgICB0TGlzdC5hcHBlbmRDaGlsZChkYXRhTGlzdEl0ZW0pO1xuICB9KTsqL1xuXG4gIGRlZmF1bHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJFdmVyeXRoaW5nXCI7XG4gIGRlZmF1bHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlZmF1bHRfaGVhZGVyXCIpO1xuICBkZWZhdWx0Rm9vdGVyLmlkID0gXCJkRm9vdGVyXCI7XG4gIGRlZmF1bHRGb290ZXIuY2xhc3NMaXN0ID0gXCJkZWZhdWx0X2Zvb3RlclwiO1xuICBkZWZhdWx0Rm9sZGVyLmlkID0gXCJkZm9sZGVyXCI7XG4gIGRlZmF1bHRGb2xkZXIuY2xhc3NMaXN0LmFkZChcImRlZmF1bHRfZm9sZGVyXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIGRlZmF1bHRGb2xkZXIuYXBwZW5kQ2hpbGQodExpc3QpO1xuICBjb25zb2xlLmxvZyh0TGlzdCk7XG5cbiAgZGVmYXVsdEZvbGRlci5hcHBlbmRDaGlsZChkZWZhdWx0Rm9vdGVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWZhdWx0Rm9sZGVyKTtcbiAgY3JlYXRlQWRkQnV0dG9uKFwiK1wiKTtcbiAgYXBwZW5kcmV0cmVpdmVkVGFzayhyRGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRGb2xkZXI7XG4iLCIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IFwiLi4vbWFpbl9wYWdlL21haW5fcGFnZS5jc3NcIjtcblxuZnVuY3Rpb24gbG9hZE1haW4oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXJUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhlYWRlclRleHRDb250YWluZXIuaW5uZXJUZXh0ID0gXCJUb28tVG8tRG9cIjtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1haW5faGVhZGVyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dENvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNYWluO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IGxvYWRNYWluIGZyb20gXCIuL21vZHVsZXMvbWFpbl9wYWdlL21haW5fcGFnZVwiO1xuaW1wb3J0IGRlZmF1bHRGb2xkZXIgZnJvbSBcIi4vbW9kdWxlcy9kZWZhdWx0X3Byb2plY3RzL2RlZmF1bHRfcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBsb2FkQ29tcG9uZW50cygpIHtcbiAgbG9hZE1haW4oKTtcbiAgZGVmYXVsdEZvbGRlcigpO1xufVxuXG5sb2FkQ29tcG9uZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9