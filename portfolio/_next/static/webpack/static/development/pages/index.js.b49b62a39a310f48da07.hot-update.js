webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/openSource/openSourceProjects.js":
/*!*****************************************************!*\
  !*** ./components/openSource/openSourceProjects.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js";



var OpenSourceProjects = function OpenSourceProjects() {
  var opsProjects = [{
    img: 'static/img/ops/graphiql-storm.png',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/no-backend.png',
    title: 'no-backend',
    link: 'https://github.com/Gherciu/no-backend',
    description: 'Transform your database into working GraphQl schema'
  }, {
    img: 'static/img/ops/graphiql-storm.png',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/graphiql-storm.png',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/no-backend.png',
    title: 'no-backend',
    link: 'https://github.com/Gherciu/no-backend',
    description: 'Transform your database into working GraphQl schema'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3709836999" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3709836999" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-3709836999" + " " + "ops-card-container ".concat(item.long ? 'long-card' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3709836999" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3709836999" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-3709836999" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-3709836999",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-3709836999" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-3709836999",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-3709836999" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-3709836999" + " " + 'text-center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3709836999" + " " + 'text-center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, item.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-3709836999" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3709836999",
    css: ".ops-container.jsx-3709836999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:150px;}.ops-card-container.jsx-3709836999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:960px;}.ops-card.jsx-3709836999{width:920px;min-height:100px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;}.ops-card-label.jsx-3709836999{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-3709836999{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-3709836999>img.jsx-3709836999{width:30px;height:30px;}.ops-card-label.jsx-3709836999>img.jsx-3709836999{width:30px;height:30px;}.description.jsx-3709836999{padding:0px 15px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ops-card-img.jsx-3709836999{object-fit:cover;max-width:170px;height:220px;box-sizing:border-box;}.ops-link.jsx-3709836999{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;width:auto;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-3709836999:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-3709836999{text-align:center;}@media (max-width:953px){.ops-container.jsx-3709836999{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@media (max-width:473px){.ops-container.jsx-3709836999{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:80px;}.ops-card.jsx-3709836999{width:350px;}.description.jsx-3709836999{padding:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHOEIsQUFPQSxBQU1GLEFBY0UsQUFNQSxBQU1ILEFBSUEsQUFJTSxBQU9DLEFBTU4sQUFjc0IsQUFJZixBQUlRLEFBTUEsQUFLVixBQUdELFdBeERKLEFBSUEsQUFpQlUsQ0EvQ0wsQUFnRmhCLEFBR0EsRUFyRWtCLEFBTUEsR0FjQSxBQU9ILENBd0JuQixLQXRDQSxBQUlBLE1BOUJzQixHQWNWLEFBTUEsQ0FxQkssQUFtQkgsRUExQkcsTUFuQkosQUFNQSxHQXdDYixFQW5CMEIsRUF6Q04sR0FlcEIsQUFNQSxVQXlCa0IsR0E3Q0UsSUF5Q3BCLE1BekR1QixBQU9BLEVBdURhLEVBb0JiLEFBTUksRUF2RUosbUJBQ0csU0E2Q1IsQ0FkUSxZQTlCVCxDQTZDRyxnQkFDQSxnQkFDTCxXQUNBLEVBbEVrQixBQU9QLElBMkV0QixBQU11QixNQXJCSixVQWxCQSxHQXdDbkIsS0F0RW1CLENBaURHLHNCQUNGLDJCQTdETCxnQkFDbkIsS0E2REEsY0FwQkEsUUE5QmtDLEVBbkJmLHlEQUNLLG9CQUN4QixvQ0FrQjRFLHVFQUN0RCxrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxvcGVuU291cmNlXFxvcGVuU291cmNlUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBPcGVuU291cmNlUHJvamVjdHMgPSAoICkgPT4ge1xyXG4gICAgY29uc3Qgb3BzUHJvamVjdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL2dyYXBoaXFsLXN0b3JtLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0EgR3JhcGhRbCB3ZWIgSURFJyxcclxuICAgICAgICAgICAgd2Vic2l0ZTonaHR0cHM6Ly9naGVyY2l1LmdpdGh1Yi5pby9ncmFwaGlxbC1zdG9ybS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvbm8tYmFja2VuZC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonbm8tYmFja2VuZCcsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonVHJhbnNmb3JtIHlvdXIgZGF0YWJhc2UgaW50byB3b3JraW5nIEdyYXBoUWwgc2NoZW1hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL2dyYXBoaXFsLXN0b3JtLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0EgR3JhcGhRbCB3ZWIgSURFJyxcclxuICAgICAgICAgICAgd2Vic2l0ZTonaHR0cHM6Ly9naGVyY2l1LmdpdGh1Yi5pby9ncmFwaGlxbC1zdG9ybS8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL2dyYXBoaXFsLXN0b3JtLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0EgR3JhcGhRbCB3ZWIgSURFJyxcclxuICAgICAgICAgICAgd2Vic2l0ZTonaHR0cHM6Ly9naGVyY2l1LmdpdGh1Yi5pby9ncmFwaGlxbC1zdG9ybS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvbm8tYmFja2VuZC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonbm8tYmFja2VuZCcsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonVHJhbnNmb3JtIHlvdXIgZGF0YWJhc2UgaW50byB3b3JraW5nIEdyYXBoUWwgc2NoZW1hJ1xyXG4gICAgICAgIH0gIFxyXG4gICAgXVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LXdyYXBwZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtvcHNQcm9qZWN0cy5tYXAoKGl0ZW0saW5kZXgpPT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BvcHMtY2FyZC1jb250YWluZXIgJHtpdGVtLmxvbmcgPyAnbG9uZy1jYXJkJzogJyd9YH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2dpdGh1Yi5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ud2Vic2l0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS53ZWJzaXRlfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwtd2Vic2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2Jyb3dzZXIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gY2xhc3NOYW1lPSdvcHMtY2FyZC1pbWcnIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLm9wcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo5NjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MjBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsMCwwLDAuMTIpLCA5cHggMTBweCA0NXB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDo2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRlPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWw+aW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWltZ3tcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjE3MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1saW5re1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjBBQURCO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtbGluazpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgIzIwQUFEQjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1M3B4KXtcclxuICAgICAgICAgICAgICAgIC5vcHMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjQ3M3B4KXtcclxuICAgICAgICAgICAgICAgIC5vcHMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm9wcy1jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVuU291cmNlUHJvamVjdHNcclxuIl19 */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.b49b62a39a310f48da07.hot-update.js.map