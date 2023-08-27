"use strict";
(self["webpackChunkNiceFish"] = self["webpackChunkNiceFish"] || []).push([["src_app_shared_animations_fly-in_ts"],{

/***/ 77236:
/*!*********************************************!*\
  !*** ./src/app/shared/animations/fly-in.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flyIn: () => (/* binding */ flyIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 12501);

const flyIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("flyIn", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: "translateX(0)"
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("void => *", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: "translateX(-100%)",
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: "translateX(25px)",
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: "translateX(0)",
  offset: 1.0
})]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* => void", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: "translateX(0)",
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: "translateX(-25px)",
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: "translateX(100%)",
  offset: 1.0
})]))])]);

/***/ })

}]);
//# sourceMappingURL=src_app_shared_animations_fly-in_ts.2dd7190ae25bace4.js.map