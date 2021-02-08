webpackHotUpdate("static/development/pages/index.js",{

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
var _this = undefined,
    _jsxFileName = "/home/gheorghe.gherciu/Desktop/projects/@personal/portfolio/components/openSource/openSourceProjects.js";




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
    link: 'https://github.com/Gherciu/commitlint-jira',
    description: 'A monorepo that contains a plugin and a config for commitlint that enforce Jira commits messages style. You can find this packages and installation docs also on <a href="https://www.npmjs.com/package/commitlint-config-jira" target="_blank">NPM</a>'
  }, {
    img: 'static/img/ops/graphiql-storm.jpg',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE. GraphiQL-Storm uses components of GraphiQL under the hood but is meant as a more powerful GraphQL IDE enabling better (local) development workflows.',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/react-p5.png',
    title: 'react-p5',
    link: 'https://github.com/Gherciu/react-p5',
    description: 'This Component lets you integrate p5 Sketches into your React App.'
  }, {
    img: 'static/img/ops/no-backend.png',
    title: 'no-backend',
    link: 'https://github.com/Gherciu/no-backend',
    description: 'Transform your database into working GraphQl schema. Creates Querys, Mutations, Subscriptions and resolvers for all tables'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1179005760" + " " + 'content-wrapper',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1179005760" + " " + "ops-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, opsProjects.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-1179005760" + " " + "ops-card-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1179005760" + " " + "ops-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1179005760" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1179005760" + " " + 'ops-card-label',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-1179005760",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    })), item.website && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-1179005760" + " " + 'ops-card-label-website',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-1179005760",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1179005760" + " " + 'ops-link',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1179005760",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item.description
      },
      className: "jsx-1179005760",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-1179005760" + " " + 'ops-card-img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/Gherciu?tab=repositories",
    className: "jsx-1179005760" + " " + "button-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/img/icons/github.svg",
    className: "jsx-1179005760" + " " + "github-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), "See more on GitHub")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1179005760",
    __self: _this
  }, ".github-icon.jsx-1179005760{width:25px;margin-right:10px;vertical-align:middle;}.button-link.jsx-1179005760{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ops-container.jsx-1179005760{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-1179005760{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-1179005760{max-width:900px;width:100%;min-height:240px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;border-bottom:10px solid #eaeaea;}.ops-card-label.jsx-1179005760{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-1179005760{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-1179005760>img.jsx-1179005760{width:30px;height:30px;}.ops-card-label.jsx-1179005760>img.jsx-1179005760{width:30px;height:30px;}.description.jsx-1179005760{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-1179005760{object-fit:contain;max-width:220px;height:220px;box-sizing:border-box;}.ops-link.jsx-1179005760{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-1179005760:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-1179005760{text-align:center;}@media (max-width:630px){.ops-card-img.jsx-1179005760{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2doZW9yZ2hlLmdoZXJjaXUvRGVza3RvcC9wcm9qZWN0cy9AcGVyc29uYWwvcG9ydGZvbGlvL2NvbXBvbmVudHMvb3BlblNvdXJjZS9vcGVuU291cmNlUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VvQixBQUc0QixBQUtFLEFBSUEsQUFNRixBQU1JLEFBZ0JGLEFBTUEsQUFNSCxBQUlBLEFBSU0sQUFNRyxBQU1SLEFBYXNCLEFBSWYsQUFLRCxXQTFGQyxBQWVMLEFBa0NGLEFBSUEsQUFnQlUsRUFzQnJCLENBdERrQixBQU1BLEVBdEJSLENBb0NHLENBNkJqQixDQXZCbUIsSUFibkIsQUFJQSxJQWhDb0IsRUFyQk0sR0FxQ2QsQUFNQSxDQXNDRSxFQWxCRyxNQXpCSixBQU1BLEdBdEJTLEFBNER0QixJQWxCMEIsR0EvRDFCLEFBc0NBLEFBTUEsVUF3QmtCLEVBOUNFLE9BMENwQixJQTdEdUIsQUFJQSxFQThEYSxHQTlDaEIsTUFURyxNQTBDRyxJQWhDSCxhQThDTCxNQTdDUSxRQThDTixjQTdDSCxFQThDRyxnQkFDTCxZQUNRLENBdEV2QixBQUkwQixFQWlEQyxTQTFDRCxPQTREQSxzQkFDRixHQWpERCxtQ0FsQkMsVUFvRXhCLENBN0RBLFNBTkEsYUFnREEseUJBOUJrQyxtSEFDMEMsdUVBQ3RELGtCQUNlLGlDQUNyQyIsImZpbGUiOiIvaG9tZS9naGVvcmdoZS5naGVyY2l1L0Rlc2t0b3AvcHJvamVjdHMvQHBlcnNvbmFsL3BvcnRmb2xpby9jb21wb25lbnRzL29wZW5Tb3VyY2Uvb3BlblNvdXJjZVByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgT3BlblNvdXJjZVByb2plY3RzID0gKCApID0+IHtcclxuICAgIGNvbnN0IG9wc1Byb2plY3RzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9nYXRzYnktYWxsLWluLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidnYXRzYnktYWxsLWluJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ2F0c2J5LWFsbC1pbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidHYXRzYnkgc3RhcnRlciBmb3IgY3JlYXRpbmcgYW55IHR5cGUgb2Ygc2l0ZS4gUHJlY29uZmlndXJlZCBvdXQgb2YgdGhlIGJveCB0byB3b3JrIHdlbGwgd2l0aCBFc2xpbnQsIEh1c2t5LCBUYWlsd2luZCwgUmVkdXggYW5kIG11Y2ggbW9yZS4gUmVhZCBtb3JlIGFib3V0IGdhdHNieS1hbGwtaW4gb24gb2ZmaWNpYWwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9zdGFydGVycy9HaGVyY2l1L2dhdHNieS1hbGwtaW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2F0c2J5IFN0YXJ0ZXJzIFBhZ2U8L2E+LicsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2F0c2J5LWFsbC1pbi5uZXRsaWZ5LmNvbS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvY29tbWl0bGludC1qaXJhLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidjb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9jb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBtb25vcmVwbyB0aGF0IGNvbnRhaW5zIGEgcGx1Z2luIGFuZCBhIGNvbmZpZyBmb3IgY29tbWl0bGludCB0aGF0IGVuZm9yY2UgSmlyYSBjb21taXRzIG1lc3NhZ2VzIHN0eWxlLiBZb3UgY2FuIGZpbmQgdGhpcyBwYWNrYWdlcyBhbmQgaW5zdGFsbGF0aW9uIGRvY3MgYWxzbyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY29tbWl0bGludC1jb25maWctamlyYVwiIHRhcmdldD1cIl9ibGFua1wiPk5QTTwvYT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvZ3JhcGhpcWwtc3Rvcm0uanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBHcmFwaFFsIHdlYiBJREUuIEdyYXBoaVFMLVN0b3JtIHVzZXMgY29tcG9uZW50cyBvZiBHcmFwaGlRTCB1bmRlciB0aGUgaG9vZCBidXQgaXMgbWVhbnQgYXMgYSBtb3JlIHBvd2VyZnVsIEdyYXBoUUwgSURFIGVuYWJsaW5nIGJldHRlciAobG9jYWwpIGRldmVsb3BtZW50IHdvcmtmbG93cy4nLFxyXG4gICAgICAgICAgICB3ZWJzaXRlOidodHRwczovL2doZXJjaXUuZ2l0aHViLmlvL2dyYXBoaXFsLXN0b3JtLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9yZWFjdC1wNS5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZToncmVhY3QtcDUnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9yZWFjdC1wNScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIENvbXBvbmVudCBsZXRzIHlvdSBpbnRlZ3JhdGUgcDUgU2tldGNoZXMgaW50byB5b3VyIFJlYWN0IEFwcC4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvbm8tYmFja2VuZC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonbm8tYmFja2VuZCcsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonVHJhbnNmb3JtIHlvdXIgZGF0YWJhc2UgaW50byB3b3JraW5nIEdyYXBoUWwgc2NoZW1hLiBDcmVhdGVzIFF1ZXJ5cywgTXV0YXRpb25zLCBTdWJzY3JpcHRpb25zIGFuZCByZXNvbHZlcnMgZm9yIGFsbCB0YWJsZXMnXHJcbiAgICAgICAgfSAgXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtd3JhcHBlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAge29wc1Byb2plY3RzLm1hcCgoaXRlbSxpbmRleCk9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkLWNvbnRhaW5lclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHMtY2FyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1jYXJkLWxhYmVsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdzdGF0aWMvaW1nL29wcy9naXRodWIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLndlYnNpdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ud2Vic2l0ZX0gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1jYXJkLWxhYmVsLXdlYnNpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdzdGF0aWMvaW1nL29wcy9icm93c2VyLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD0nX19ibGFuaycgY2xhc3NOYW1lPSdvcHMtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmRlc2NyaXB0aW9ufX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGNsYXNzTmFtZT0nb3BzLWNhcmQtaW1nJyBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1P3RhYj1yZXBvc2l0b3JpZXNcIiBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiIHNyYz1cInN0YXRpYy9pbWcvaWNvbnMvZ2l0aHViLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICBTZWUgbW9yZSBvbiBHaXRIdWJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdpdGh1Yi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJke1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsMCwwLDAuMTIpLCA5cHggMTBweCA0NXB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDo2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRlPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWw+aW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1pbWd7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjIyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1saW5re1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjBBQURCO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkICMyMEFBREI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMjIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAub3BzLWNhcmQtaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlblNvdXJjZVByb2plY3RzXHJcbiJdfQ== */\n/*@ sourceURL=/home/gheorghe.gherciu/Desktop/projects/@personal/portfolio/components/openSource/openSourceProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.4801af715bd390e53e61.hot-update.js.map