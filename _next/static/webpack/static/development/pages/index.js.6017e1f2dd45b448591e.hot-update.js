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
    img: 'static/img/ops/gatsby-all-in.png',
    title: 'gatsby-all-in',
    link: 'https://github.com/Gherciu/gatsby-all-in',
    description: 'Gatsby starter for creating any type of site. Preconfigured out of the box to work well with Eslint, Husky, Tailwind, Redux and much more. Read more about gatsby-all-in on official <a href="https://www.gatsbyjs.org/starters/Gherciu/gatsby-all-in/" target="_blank">Gatsby Starters Page</a>.',
    website: 'https://gatsby-all-in.netlify.com/'
  }, {
    img: 'static/img/ops/commitlint-jira.png',
    title: 'commitlint-jira',
    link: 'https://github.com/Gherciu/commitlint-jira.',
    description: "\n                A monorepo that contains a plugin and a config for commitlint that enforce Jira commits messages style.<br/>\n                commitlint-config-jira - is a recomended config who contain preconfigured rules for jira commits messages style.<br/>\n                commitlint-plugin-jira-rules - is a plugin that implement all jira commits messages style rules and validate commit messages\n            "
  }, {
    img: 'static/img/ops/graphiql-storm.jpg',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE. GraphiQL-Storm uses components of GraphiQL under the hood but is meant as a more powerful GraphQL IDE enabling better (local) development workflows.',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/no-backend.png',
    title: 'no-backend',
    link: 'https://github.com/Gherciu/no-backend.',
    description: 'Transform your database into working GraphQl schema. Creates Querys, Mutations, Subscriptions and resolvers for all tables'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2292316652" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2292316652" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-2292316652" + " " + "ops-card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2292316652" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2292316652" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-2292316652" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-2292316652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-2292316652" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-2292316652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-2292316652" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-2292316652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item.description
      },
      className: "jsx-2292316652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-2292316652" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2292316652",
    css: ".ops-container.jsx-2292316652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-2292316652{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-2292316652{max-width:900px;width:100%;min-height:100px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;border-bottom:10px solid #eaeaea;}.ops-card-label.jsx-2292316652{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-2292316652{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-2292316652>img.jsx-2292316652{width:30px;height:30px;}.ops-card-label.jsx-2292316652>img.jsx-2292316652{width:30px;height:30px;}.description.jsx-2292316652{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-2292316652{object-fit:cover;max-width:220px;height:220px;box-sizing:border-box;}.ops-link.jsx-2292316652{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-2292316652:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-2292316652{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEb0IsQUFHOEIsQUFNRixBQU1JLEFBZ0JGLEFBTUEsQUFNSCxBQUlBLEFBSU0sQUFNQyxBQU1OLEFBYXNCLEFBSWYsV0F0RUwsQUFrQ0YsQUFJQSxBQWdCVSxHQWhDSCxBQU1BLEVBdEJSLENBb0NHLEFBTUUsQ0F1Qm5CLEtBcENBLEFBSUEsSUFoQ29CLEtBZ0JSLEFBTUEsQ0FvQkssQUFrQkgsUUEzQ0QsQUFNQSxHQXRCUyxBQTREdEIsRUFsQjBCLEtBekIxQixBQU1BLFVBd0JrQixFQTlDRSxLQTBDcEIsTUF6RHVCLEVBOERhLEdBOUNoQixNQVRHLE1BMENHLElBaENILGFBOENMLE1BN0NRLFFBOENOLGNBN0NILEVBOENHLGdCQUNMLFlBQ1EsQ0FsRUcsRUFpREMsU0ExQ0QsT0E0REEsc0JBQ0YsR0FqREQsbUNBbEJDLFVBb0V4QixDQTdEQSxTQU5BLGFBZ0RBLHlCQTlCa0MsbUhBQzBDLHVFQUN0RCxrQkFDZSxpQ0FDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxvcGVuU291cmNlXFxvcGVuU291cmNlUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBPcGVuU291cmNlUHJvamVjdHMgPSAoICkgPT4ge1xyXG4gICAgY29uc3Qgb3BzUHJvamVjdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL2dhdHNieS1hbGwtaW4ucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dhdHNieS1hbGwtaW4nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9nYXRzYnktYWxsLWluJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0dhdHNieSBzdGFydGVyIGZvciBjcmVhdGluZyBhbnkgdHlwZSBvZiBzaXRlLiBQcmVjb25maWd1cmVkIG91dCBvZiB0aGUgYm94IHRvIHdvcmsgd2VsbCB3aXRoIEVzbGludCwgSHVza3ksIFRhaWx3aW5kLCBSZWR1eCBhbmQgbXVjaCBtb3JlLiBSZWFkIG1vcmUgYWJvdXQgZ2F0c2J5LWFsbC1pbiBvbiBvZmZpY2lhbCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL3N0YXJ0ZXJzL0doZXJjaXUvZ2F0c2J5LWFsbC1pbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HYXRzYnkgU3RhcnRlcnMgUGFnZTwvYT4uJyxcclxuICAgICAgICAgICAgd2Vic2l0ZTonaHR0cHM6Ly9nYXRzYnktYWxsLWluLm5ldGxpZnkuY29tLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9jb21taXRsaW50LWppcmEucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J2NvbW1pdGxpbnQtamlyYScsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L2NvbW1pdGxpbnQtamlyYS4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpgXHJcbiAgICAgICAgICAgICAgICBBIG1vbm9yZXBvIHRoYXQgY29udGFpbnMgYSBwbHVnaW4gYW5kIGEgY29uZmlnIGZvciBjb21taXRsaW50IHRoYXQgZW5mb3JjZSBKaXJhIGNvbW1pdHMgbWVzc2FnZXMgc3R5bGUuPGJyLz5cclxuICAgICAgICAgICAgICAgIGNvbW1pdGxpbnQtY29uZmlnLWppcmEgLSBpcyBhIHJlY29tZW5kZWQgY29uZmlnIHdobyBjb250YWluIHByZWNvbmZpZ3VyZWQgcnVsZXMgZm9yIGppcmEgY29tbWl0cyBtZXNzYWdlcyBzdHlsZS48YnIvPlxyXG4gICAgICAgICAgICAgICAgY29tbWl0bGludC1wbHVnaW4tamlyYS1ydWxlcyAtIGlzIGEgcGx1Z2luIHRoYXQgaW1wbGVtZW50IGFsbCBqaXJhIGNvbW1pdHMgbWVzc2FnZXMgc3R5bGUgcnVsZXMgYW5kIHZhbGlkYXRlIGNvbW1pdCBtZXNzYWdlc1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvZ3JhcGhpcWwtc3Rvcm0uanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBHcmFwaFFsIHdlYiBJREUuIEdyYXBoaVFMLVN0b3JtIHVzZXMgY29tcG9uZW50cyBvZiBHcmFwaGlRTCB1bmRlciB0aGUgaG9vZCBidXQgaXMgbWVhbnQgYXMgYSBtb3JlIHBvd2VyZnVsIEdyYXBoUUwgSURFIGVuYWJsaW5nIGJldHRlciAobG9jYWwpIGRldmVsb3BtZW50IHdvcmtmbG93cy4nLFxyXG4gICAgICAgICAgICB3ZWJzaXRlOidodHRwczovL2doZXJjaXUuZ2l0aHViLmlvL2dyYXBoaXFsLXN0b3JtLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9uby1iYWNrZW5kLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiduby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvbm8tYmFja2VuZC4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonVHJhbnNmb3JtIHlvdXIgZGF0YWJhc2UgaW50byB3b3JraW5nIEdyYXBoUWwgc2NoZW1hLiBDcmVhdGVzIFF1ZXJ5cywgTXV0YXRpb25zLCBTdWJzY3JpcHRpb25zIGFuZCByZXNvbHZlcnMgZm9yIGFsbCB0YWJsZXMnXHJcbiAgICAgICAgfSAgXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtd3JhcHBlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAge29wc1Byb2plY3RzLm1hcCgoaXRlbSxpbmRleCk9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkLWNvbnRhaW5lclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHMtY2FyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1jYXJkLWxhYmVsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdzdGF0aWMvaW1nL29wcy9naXRodWIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLndlYnNpdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ud2Vic2l0ZX0gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1jYXJkLWxhYmVsLXdlYnNpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdzdGF0aWMvaW1nL29wcy9icm93c2VyLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD0nX19ibGFuaycgY2xhc3NOYW1lPSdvcHMtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmRlc2NyaXB0aW9ufX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGNsYXNzTmFtZT0nb3BzLWNhcmQtaW1nJyBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5vcHMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo5MDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLDAsMCwwLjEyKSwgOXB4IDEwcHggNDVweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6NjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZT5pbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVsPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtaW1ne1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MjIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWxpbmt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyMEFBREI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtbGluazpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgIzIwQUFEQjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5Tb3VyY2VQcm9qZWN0c1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.6017e1f2dd45b448591e.hot-update.js.map