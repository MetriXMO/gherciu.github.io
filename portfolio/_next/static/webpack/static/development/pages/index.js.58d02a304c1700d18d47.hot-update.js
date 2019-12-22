webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posterWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posterWrapper */ "./components/posterWrapper.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\header.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Editor = function Editor(props) {
  if (typeof window !== 'undefined') {
    var Ace = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js").default;

    __webpack_require__(/*! ace-builds/src-noconflict/mode-typescript */ "./node_modules/ace-builds/src-noconflict/mode-typescript.js");

    __webpack_require__(/*! ace-builds/src-noconflict/theme-github */ "./node_modules/ace-builds/src-noconflict/theme-github.js");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ace, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

  return null;
};

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("\nfunction onLoad(editor) {\n    console.log(\"i've loaded\");\n}"),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var onChangeEditorState = function onChangeEditorState(e) {
    console.log(e);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1847107440" + " " + "header-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Hi, i'm Gheorghe, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847107440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), "web developer."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1847107440" + " " + "__marketing-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1847107440" + " " + "content-text-subheading header-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "My passion is creating, and I find happiness in being a better me today than the me yesterday.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#works",
    className: "jsx-1847107440" + " " + "button-link -thick-and-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "View my works")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_posterWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Editor, {
    placeholder: "Placeholder Text",
    mode: "typescript",
    theme: "github",
    name: "blah2",
    fontSize: 14,
    showPrintMargin: false,
    showGutter: false,
    highlightActiveLine: false,
    onChange: onChangeEditorState,
    value: editorState,
    setOptions: {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: false,
      tabSize: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1847107440",
    css: ".header-poster.jsx-1847107440{position:relative;}.togglers-container.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0px;left:-60px;z-index:9;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.toggler.jsx-1847107440{width:15px;height:15px;border-radius:50%;margin-bottom:10px;border:1px solid #fff;position:relative;cursor:pointer;}.toggler.active.jsx-1847107440{background:#fff;}.toggler.active.jsx-1847107440:before{content:\"\";position:absolute;right:-40px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:40px;height:1px;background:#fff;}.header-wrapper.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:200px;}.__marketing-content.jsx-1847107440{display:block;margin-bottom:1.5rem;}.header-heading.jsx-1847107440,.header-subheading.jsx-1847107440{color:#fff;max-width:360px;}.header-heading.jsx-1847107440{font-weight:500;}.header-poster.jsx-1847107440 img.jsx-1847107440{width:100%;height:100%;max-height:300px;max-width:460px;}@media (max-width:864px){.header-poster.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-top:35px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-heading.jsx-1847107440{text-align:center;}.header-content.jsx-1847107440{margin:10px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}.__marketing-content.jsx-1847107440{width:100%;}.header-subheading.jsx-1847107440{box-sizing:border-box;width:100%;max-width:100%;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fd0IsQUFHdUMsQUFHTCxBQVdGLEFBU0ssQUFHTCxBQVVFLEFBTUMsQUFLSCxBQUlLLEFBR0wsQUFPTSxBQU1LLEFBR0QsQUFPTixBQUdXLFdBakVkLEFBWU0sQUFxQkYsQUFPSixBQXVCWixHQW5DcUIsRUFuQnpCLEFBNEJBLENBbUJxQixDQXRFckIsQUFtRUksSUFhZSxDQWpFRyxBQXdDRCxJQVByQixFQXJCZ0IsSUFzRE8sRUF0Q3ZCLEtBYW9CLENBeENHLEFBWVgsT0FzRGMsQ0FyREssT0E0Qi9CLElBeEMwQixNQWtFdEIsUUFoRm1CLEFBaUNXLEFBeUJmLFFBM0NHLEdBNENFLE1BU0csU0FwRFIsQ0E0Q1ksY0EzQy9CLDJCQVVlLFdBQ0EsV0FDSyxHQTVCTSxhQTZCMUIsSUF1QzhCLEtBbkNYLFdBMkJmLDZDQTNEa0IsQ0FpQ0UsZ0JBbUNMLENBbkVQLEdBaUNaLEtBaENlLEVBbUVYLFNBbEVVLFVBQ0UsWUFDVyxtR0FDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0ZXJXcmFwcGVyIGZyb20gXCIuL3Bvc3RlcldyYXBwZXJcIjtcclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCBBY2UgPSByZXF1aXJlKCdyZWFjdC1hY2UnKS5kZWZhdWx0O1xyXG4gICAgcmVxdWlyZSgnYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLXR5cGVzY3JpcHQnKTtcclxuICAgIHJlcXVpcmUoJ2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZ2l0aHViJyk7XHJcblxyXG4gICAgcmV0dXJuIDxBY2Ugey4uLnByb3BzfS8+XHJcbn1cclxuXHJcbnJldHVybiBudWxsO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKGBcclxuZnVuY3Rpb24gb25Mb2FkKGVkaXRvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJpJ3ZlIGxvYWRlZFwiKTtcclxufWApXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VFZGl0b3JTdGF0ZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIaSwgaSdtIEdoZW9yZ2hlLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2ViIGRldmVsb3Blci5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJfX21hcmtldGluZy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dC1zdWJoZWFkaW5nIGhlYWRlci1zdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBwYXNzaW9uIGlzIGNyZWF0aW5nLCBhbmQgSSBmaW5kIGhhcHBpbmVzcyBpbiBiZWluZyBhIGJldHRlciBtZSB0b2RheSB0aGFuIHRoZSBtZSB5ZXN0ZXJkYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjd29ya3NcIiBjbGFzc05hbWU9XCJidXR0b24tbGluayAtdGhpY2stYW5kLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgbXkgd29ya3NcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXBvc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cInR5cGVzY3JpcHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJsYWgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcmludE1hcmdpbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93R3V0dGVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZUxpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYXNpY0F1dG9jb21wbGV0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxpdmVBdXRvY29tcGxldGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTbmlwcGV0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGluZU51bWJlcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiU2l6ZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9zdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1wb3N0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b2dnbGVycy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b2dnbGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXIuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuX19tYXJrZXRpbmctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1oZWFkaW5nLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1zdWJoZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1wb3N0ZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItcG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLl9fbWFya2V0aW5nLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1zdWJoZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.58d02a304c1700d18d47.hot-update.js.map