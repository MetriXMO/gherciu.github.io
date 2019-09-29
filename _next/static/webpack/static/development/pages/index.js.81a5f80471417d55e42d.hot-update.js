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
    className: "jsx-1556463075" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1556463075" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-1556463075" + " " + "ops-card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1556463075" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1556463075" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1556463075" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-1556463075",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-1556463075" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-1556463075",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1556463075" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1556463075" + " " + 'text-center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1556463075" + " " + 'text-center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, item.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-1556463075" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1556463075",
    css: ".ops-container.jsx-1556463075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-1556463075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-1556463075{max-width:960px;width:100%;min-height:100px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;}.ops-card-label.jsx-1556463075{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-1556463075{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-1556463075>img.jsx-1556463075{width:30px;height:30px;}.ops-card-label.jsx-1556463075>img.jsx-1556463075{width:30px;height:30px;}.description.jsx-1556463075{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-1556463075{object-fit:cover;max-width:270px;height:220px;box-sizing:border-box;}.ops-link.jsx-1556463075{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-1556463075:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-1556463075{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHOEIsQUFNQSxBQUtFLEFBZUYsQUFNQSxBQU1ILEFBSUEsQUFJTSxBQU1DLEFBTU4sQUFhc0IsQUFJZixXQXBDUCxBQUlBLEFBZ0JVLEdBaENILEFBTUEsRUFyQlIsQ0FtQ0csQUFNRSxDQXVCbkIsS0FwQ0EsQUFJQSxJQS9Cb0IsS0FlUixBQU1BLENBb0JLLEFBa0JILFFBM0NELEFBTUEsR0FyQlMsQUEyRHRCLEVBbEIwQixLQXpCMUIsQUFNQSxVQXdCa0IsRUE3Q0UsS0F5Q3BCLE1BdkR1QixBQU1BLEVBc0RhLEdBN0NoQixZQWdDTSxJQS9CSCxhQTZDTCxNQTVDUSxRQTZDTixjQTVDSCxFQTZDRyxnQkFDTCxZQUNRLENBaEVHLEFBTUEsRUF5Q0MsZ0JBa0JELHNCQUNGLEdBaERELG1DQWpCQyxBQU14QixVQTREQSxVQWpFQSxhQThDQSx5QkE3QmtDLG1IQUMwQyx1RUFDdEQsa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgT3BlblNvdXJjZVByb2plY3RzID0gKCApID0+IHtcclxuICAgIGNvbnN0IG9wc1Byb2plY3RzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9ncmFwaGlxbC1zdG9ybS5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9ncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIEdyYXBoUWwgd2ViIElERScsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2hlcmNpdS5naXRodWIuaW8vZ3JhcGhpcWwtc3Rvcm0vJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL25vLWJhY2tlbmQucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9uby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RyYW5zZm9ybSB5b3VyIGRhdGFiYXNlIGludG8gd29ya2luZyBHcmFwaFFsIHNjaGVtYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9ncmFwaGlxbC1zdG9ybS5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9ncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIEdyYXBoUWwgd2ViIElERScsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2hlcmNpdS5naXRodWIuaW8vZ3JhcGhpcWwtc3Rvcm0vJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9ncmFwaGlxbC1zdG9ybS5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9ncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIEdyYXBoUWwgd2ViIElERScsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2hlcmNpdS5naXRodWIuaW8vZ3JhcGhpcWwtc3Rvcm0vJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL25vLWJhY2tlbmQucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9uby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RyYW5zZm9ybSB5b3VyIGRhdGFiYXNlIGludG8gd29ya2luZyBHcmFwaFFsIHNjaGVtYSdcclxuICAgICAgICB9ICBcclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC13cmFwcGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jb250YWluZXJcIj5cclxuICAgICAgICB7b3BzUHJvamVjdHMubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNhcmQtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2dpdGh1Yi5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ud2Vic2l0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS53ZWJzaXRlfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwtd2Vic2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2Jyb3dzZXIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gY2xhc3NOYW1lPSdvcHMtY2FyZC1pbWcnIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLm9wcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo5NjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLDAsMCwwLjEyKSwgOXB4IDEwcHggNDVweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6NjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZT5pbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVsPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtaW1ne1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MjcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWxpbmt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyMEFBREI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtbGluazpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgIzIwQUFEQjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5Tb3VyY2VQcm9qZWN0c1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.81a5f80471417d55e42d.hot-update.js.map