webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_translation_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/translation/i18n */ "./components/translation/i18n.js");
/* harmony import */ var _components_translation_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_translation_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Styles/Cards */ "./components/Styles/Cards/index.js");
/* harmony import */ var _components_Styles_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Styles/Text */ "./components/Styles/Text/index.js");
/* harmony import */ var _components_Styles_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Styles/Button */ "./components/Styles/Button/index.js");
/* harmony import */ var _components_Styles_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Styles/List */ "./components/Styles/List/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Homepage = function Homepage(_ref) {
  var t = _ref.t;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["MainCard"], {
    justify: "space-between"
  }, __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["ContentCard"], {
    max: "700px"
  }, __jsx(_components_Styles_Text__WEBPACK_IMPORTED_MODULE_5__["HeadingOne"], {
    align: "left"
  }, t("travel.home.banner.heading"))), __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["ContentCard"], {
    justify: "left",
    pr: "0",
    pl: "0",
    max: "350px"
  }, __jsx(_components_translation_i18n__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/pos"
  }, __jsx(_components_Styles_Text__WEBPACK_IMPORTED_MODULE_5__["LinkText"], {
    align: "left"
  }, t("travel.home.banner.register"))))), __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["MainCard"], {
    justify: "space-between",
    background: "true"
  }, __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["ContentCard"], {
    max: "600px",
    justify: "left",
    flex: "1 0 40%",
    background: true
  }, __jsx(_components_Styles_Text__WEBPACK_IMPORTED_MODULE_5__["HeadingTwo"], {
    align: "left"
  }, t("travel.home.conditions.heading")), __jsx(_components_Styles_List__WEBPACK_IMPORTED_MODULE_7__["UnorderedList"], null, t("travel.home.conditions.questions", {
    returnObjects: true
  }).map(function (_ref2, i) {
    var answer = _ref2.answer,
        sign = _ref2.sign;
    return __jsx(_components_Styles_List__WEBPACK_IMPORTED_MODULE_7__["ListItems"], {
      sign: sign,
      key: i
    }, answer);
  })), __jsx(_components_Styles_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    primary: "true"
  }, t("travel.home.conditions.button"))), __jsx(_components_Styles_Cards__WEBPACK_IMPORTED_MODULE_4__["ContentCard"], {
    border: "1px solid #d5d8d8",
    justify: "left",
    mt: "50px",
    pl: "2%"
  }, __jsx(_components_Styles_Text__WEBPACK_IMPORTED_MODULE_5__["HeadingThree"], null, t("travel.home.about.heading")), __jsx(_components_Styles_List__WEBPACK_IMPORTED_MODULE_7__["UnorderedList"], null, t("travel.home.about.details", {
    returnObjects: true
  }).map(function (_ref3, i) {
    var answer = _ref3.answer,
        sign = _ref3.sign;
    return __jsx(_components_Styles_List__WEBPACK_IMPORTED_MODULE_7__["ListItems"], {
      sign: sign,
      key: i,
      bb: "1px solid #d5d8d8",
      pb: "7px",
      pt: "7px"
    }, answer);
  })))));
};

Homepage.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

Homepage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_translation_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('common')(Homepage));

/***/ })

})
//# sourceMappingURL=index.js.8f43286bd81cdc270604.hot-update.js.map