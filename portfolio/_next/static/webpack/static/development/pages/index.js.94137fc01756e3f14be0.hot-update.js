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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("\nclass Developer extends Person {\n\n    public name = 'Gherciu Gheorghe'\n\n    protected hobby = 'Playing video games!'\n\n    public name = 'Gherciu Gheorghe'\n\n}"),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var onChangeEditorState = function onChangeEditorState(e) {
    console.log(e);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1090757577" + " " + "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1090757577" + " " + "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1090757577" + " " + "header-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1090757577" + " " + "header-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Hi, i'm Gheorghe, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1090757577",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "web developer."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1090757577" + " " + "__marketing-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1090757577" + " " + "content-text-subheading header-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "My passion is creating, and I find happiness in being a better me today than the me yesterday.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#works",
    className: "jsx-1090757577" + " " + "button-link -thick-and-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "View my works")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1090757577" + " " + "header-poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_posterWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Editor, {
    placeholder: "Placeholder Text",
    mode: "typescript",
    theme: "github",
    name: "blah2",
    fontSize: 18,
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
      lineNumber: 53
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1090757577",
    css: ".header-poster.jsx-1090757577{position:relative;overflow:hidden;height:400px;}.togglers-container.jsx-1090757577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0px;left:-60px;z-index:9;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.toggler.jsx-1090757577{width:15px;height:15px;border-radius:50%;margin-bottom:10px;border:1px solid #fff;position:relative;cursor:pointer;}.toggler.active.jsx-1090757577{background:#fff;}.toggler.active.jsx-1090757577:before{content:\"\";position:absolute;right:-40px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:40px;height:1px;background:#fff;}.header-wrapper.jsx-1090757577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:200px;}.__marketing-content.jsx-1090757577{display:block;margin-bottom:1.5rem;}.header-heading.jsx-1090757577,.header-subheading.jsx-1090757577{color:#fff;max-width:360px;}.header-heading.jsx-1090757577{font-weight:500;}.header-poster.jsx-1090757577 img.jsx-1090757577{width:100%;height:100%;max-height:300px;max-width:460px;}@media (max-width:864px){.header-poster.jsx-1090757577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-top:35px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-heading.jsx-1090757577{text-align:center;}.header-content.jsx-1090757577{margin:10px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}.__marketing-content.jsx-1090757577{width:100%;}.header-subheading.jsx-1090757577{box-sizing:border-box;width:100%;max-width:100%;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFd0IsQUFHdUMsQUFLTCxBQVdGLEFBU0ssQUFHTCxBQVVFLEFBTUMsQUFLSCxBQUlLLEFBR0wsQUFPTSxBQU1LLEFBR0QsQUFPTixBQUdXLFdBakVkLEFBWU0sQUFxQkYsQUFPSixBQXVCWixHQW5DcUIsRUFuQnpCLEFBNEJBLENBbUJxQixDQXhFRCxBQXFFaEIsSUFhZSxDQWpFRyxBQXdDRCxJQVByQixFQXJCZ0IsSUFzRE8sQ0FsRk4sQ0E0Q2pCLEtBYW9CLENBeENHLEFBWVgsTUE1QlosQ0FrRjBCLENBckRLLE9BNEIvQixJQXhDMEIsTUFrRXRCLFFBaEZtQixBQWlDVyxBQXlCZixRQTNDRyxHQTRDRSxNQVNHLFNBcERSLENBNENZLGNBM0MvQiwyQkFVZSxXQUNBLFdBQ0ssR0E1Qk0sYUE2QjFCLElBdUM4QixLQW5DWCxXQTJCZiw2Q0EzRGtCLENBaUNFLGdCQW1DTCxDQW5FUCxHQWlDWixLQWhDZSxFQW1FWCxTQWxFVSxVQUNFLFlBQ1csbUdBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9zdGVyV3JhcHBlciBmcm9tIFwiLi9wb3N0ZXJXcmFwcGVyXCI7XHJcblxyXG5cclxuY29uc3QgRWRpdG9yID0gKHByb3BzKSA9PiB7XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3QgQWNlID0gcmVxdWlyZSgncmVhY3QtYWNlJykuZGVmYXVsdDtcclxuICAgIHJlcXVpcmUoJ2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS10eXBlc2NyaXB0Jyk7XHJcbiAgICByZXF1aXJlKCdhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YicpO1xyXG5cclxuICAgIHJldHVybiA8QWNlIHsuLi5wcm9wc30vPlxyXG59XHJcblxyXG5yZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShgXHJcbmNsYXNzIERldmVsb3BlciBleHRlbmRzIFBlcnNvbiB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnR2hlcmNpdSBHaGVvcmdoZSdcclxuXHJcbiAgICBwcm90ZWN0ZWQgaG9iYnkgPSAnUGxheWluZyB2aWRlbyBnYW1lcyEnXHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnR2hlcmNpdSBHaGVvcmdoZSdcclxuXHJcbn1gKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlRWRpdG9yU3RhdGUgPSBlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGksIGknbSBHaGVvcmdoZSwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYiBkZXZlbG9wZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiX19tYXJrZXRpbmctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50LXRleHQtc3ViaGVhZGluZyBoZWFkZXItc3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgcGFzc2lvbiBpcyBjcmVhdGluZywgYW5kIEkgZmluZCBoYXBwaW5lc3MgaW4gYmVpbmcgYSBiZXR0ZXIgbWUgdG9kYXkgdGhhbiB0aGUgbWUgeWVzdGVyZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3dvcmtzXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmsgLXRoaWNrLWFuZC1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG15IHdvcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1wb3N0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlciBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJ0eXBlc2NyaXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJibGFoMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UHJpbnRNYXJnaW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0d1dHRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRBY3RpdmVMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFzaWNBdXRvY29tcGxldGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVMaXZlQXV0b2NvbXBsZXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU25pcHBldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYlNpemU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Bvc3RlcldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItcG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlci5hY3RpdmU6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5fX21hcmtldGluZy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWhlYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXBvc3RlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2NHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1wb3N0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuX19tYXJrZXRpbmctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.94137fc01756e3f14be0.hot-update.js.map