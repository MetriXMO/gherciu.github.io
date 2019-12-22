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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("\nclass Developer extends Person {\n\n    public name = 'Gherciu Gheorghe'\n\n    protected hobby = 'Playing tennis \uD83C\uDFD3'\n    \n    constructor() {\n        return 'Hi \uD83D\uDC4B'\n    }\n    \n}"),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1847107440" + " " + "header-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Hi, i'm Gheorghe, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847107440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "web developer."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1847107440" + " " + "__marketing-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1847107440" + " " + "content-text-subheading header-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "My passion is creating, and I find happiness in being a better me today than the me yesterday.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#works",
    className: "jsx-1847107440" + " " + "button-link -thick-and-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "View my works")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1847107440" + " " + "header-poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_posterWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Editor, {
    placeholder: "Placeholder Text",
    mode: "typescript",
    theme: "github",
    name: "blah2",
    fontSize: 16,
    showPrintMargin: false,
    showGutter: false,
    highlightActiveLine: false,
    readOnly: true,
    value: editorState,
    height: 300,
    setOptions: {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: false,
      tabSize: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1847107440",
    css: ".header-poster.jsx-1847107440{position:relative;}.togglers-container.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0px;left:-60px;z-index:9;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.toggler.jsx-1847107440{width:15px;height:15px;border-radius:50%;margin-bottom:10px;border:1px solid #fff;position:relative;cursor:pointer;}.toggler.active.jsx-1847107440{background:#fff;}.toggler.active.jsx-1847107440:before{content:\"\";position:absolute;right:-40px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:40px;height:1px;background:#fff;}.header-wrapper.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:200px;}.__marketing-content.jsx-1847107440{display:block;margin-bottom:1.5rem;}.header-heading.jsx-1847107440,.header-subheading.jsx-1847107440{color:#fff;max-width:360px;}.header-heading.jsx-1847107440{font-weight:500;}.header-poster.jsx-1847107440 img.jsx-1847107440{width:100%;height:100%;max-height:300px;max-width:460px;}@media (max-width:864px){.header-poster.jsx-1847107440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-top:35px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-heading.jsx-1847107440{text-align:center;}.header-content.jsx-1847107440{margin:10px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}.__marketing-content.jsx-1847107440{width:100%;}.header-subheading.jsx-1847107440{box-sizing:border-box;width:100%;max-width:100%;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHdUMsQUFHTCxBQVdGLEFBU0ssQUFHTCxBQVVFLEFBTUMsQUFLSCxBQUlLLEFBR0wsQUFPTSxBQU1LLEFBR0QsQUFPTixBQUdXLFdBakVkLEFBWU0sQUFxQkYsQUFPSixBQXVCWixHQW5DcUIsRUFuQnpCLEFBNEJBLENBbUJxQixDQXRFckIsQUFtRUksSUFhZSxDQWpFRyxBQXdDRCxJQVByQixFQXJCZ0IsSUFzRE8sRUF0Q3ZCLEtBYW9CLENBeENHLEFBWVgsT0FzRGMsQ0FyREssT0E0Qi9CLElBeEMwQixNQWtFdEIsUUFoRm1CLEFBaUNXLEFBeUJmLFFBM0NHLEdBNENFLE1BU0csU0FwRFIsQ0E0Q1ksY0EzQy9CLDJCQVVlLFdBQ0EsV0FDSyxHQTVCTSxhQTZCMUIsSUF1QzhCLEtBbkNYLFdBMkJmLDZDQTNEa0IsQ0FpQ0UsZ0JBbUNMLENBbkVQLEdBaUNaLEtBaENlLEVBbUVYLFNBbEVVLFVBQ0UsWUFDVyxtR0FDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0ZXJXcmFwcGVyIGZyb20gXCIuL3Bvc3RlcldyYXBwZXJcIjtcclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCBBY2UgPSByZXF1aXJlKCdyZWFjdC1hY2UnKS5kZWZhdWx0O1xyXG4gICAgcmVxdWlyZSgnYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLXR5cGVzY3JpcHQnKTtcclxuICAgIHJlcXVpcmUoJ2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZ2l0aHViJyk7XHJcblxyXG4gICAgcmV0dXJuIDxBY2Ugey4uLnByb3BzfS8+XHJcbn1cclxuXHJcbnJldHVybiBudWxsO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKGBcclxuY2xhc3MgRGV2ZWxvcGVyIGV4dGVuZHMgUGVyc29uIHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZSA9ICdHaGVyY2l1IEdoZW9yZ2hlJ1xyXG5cclxuICAgIHByb3RlY3RlZCBob2JieSA9ICdQbGF5aW5nIHRlbm5pcyDwn4+TJ1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICByZXR1cm4gJ0hpIPCfkYsnXHJcbiAgICB9XHJcbiAgICBcclxufWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGksIGknbSBHaGVvcmdoZSwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYiBkZXZlbG9wZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiX19tYXJrZXRpbmctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50LXRleHQtc3ViaGVhZGluZyBoZWFkZXItc3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgcGFzc2lvbiBpcyBjcmVhdGluZywgYW5kIEkgZmluZCBoYXBwaW5lc3MgaW4gYmVpbmcgYSBiZXR0ZXIgbWUgdG9kYXkgdGhhbiB0aGUgbWUgeWVzdGVyZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3dvcmtzXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmsgLXRoaWNrLWFuZC1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG15IHdvcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1wb3N0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlciBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJ0eXBlc2NyaXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJibGFoMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UHJpbnRNYXJnaW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0d1dHRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRBY3RpdmVMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhc2ljQXV0b2NvbXBsZXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGl2ZUF1dG9jb21wbGV0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVNuaXBwZXRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaW5lTnVtYmVyczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJTaXplOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXBvc3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlci5hY3RpdmU6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5fX21hcmtldGluZy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWhlYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXBvc3RlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2NHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1wb3N0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuX19tYXJrZXRpbmctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.fa4218e5a77063bc2abd.hot-update.js.map