webpackHotUpdate("static/development/pages/entry/[entry].js",{

/***/ "./src/components/ShareButtons.tsx":
/*!*****************************************!*\
  !*** ./src/components/ShareButtons.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
var _jsxFileName = "/home/shion/Work/src/github.com/shiopon01/blog/src/components/ShareButtons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () {
  return {
    center: {
      textAlign: "right"
    },
    height: {
      height: "100%"
    },
    span: {
      margin: "0px 4px"
    },
    shareButton: {
      cursor: "pointer",
      display: "inline-block",
      "&:hover": {
        opacity: 0.75
      }
    }
  };
});

var ShareButtons = function ShareButtons(_ref) {
  var url = _ref.url;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("script", {
    type: "text/javascript",
    src: "https://b.st-hatena.com/js/bookmark_button.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    className: classes.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["TwitterShareButton"], {
    url: url,
    title: "twitter",
    className: classes.shareButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["TwitterIcon"], {
    size: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["FacebookShareButton"], {
    url: url,
    className: classes.shareButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["FacebookIcon"], {
    size: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["PocketShareButton"], {
    url: url,
    className: classes.shareButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["PocketIcon"], {
    size: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "https://b.hatena.ne.jp/entry/",
    className: "hatena-bookmark-button",
    "data-hatena-bookmark-layout": "basic",
    "data-hatena-bookmark-width": "30",
    "data-hatena-bookmark-height": "30",
    title: "\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",
    alt: "\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0",
    width: "20",
    height: "20",
    style: {
      border: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShareButtons);

/***/ })

})
//# sourceMappingURL=[entry].js.32ceb53e6f454f29e2e5.hot-update.js.map