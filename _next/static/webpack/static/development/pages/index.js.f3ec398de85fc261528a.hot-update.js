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
    link: 'https://github.com/Gherciu/commitlint-jira',
    description: 'A monorepo that contains a plugin and a config for commitlint that enforce Jira commits messages style. You can find this packages and installation docs also on <a href="https://www.npmjs.com/package/commitlint-config-jira" target="_blank">NPM</a>'
  }, {
    img: 'static/img/ops/graphiql-storm.jpg',
    title: 'graphiql-storm',
    link: 'https://github.com/Gherciu/graphiql-storm',
    description: 'A GraphQl web IDE. GraphiQL-Storm uses components of GraphiQL under the hood but is meant as a more powerful GraphQL IDE enabling better (local) development workflows.',
    website: 'https://gherciu.github.io/graphiql-storm/'
  }, {
    img: 'static/img/ops/multipack.png',
    title: 'multipack',
    link: 'https://github.com/Gherciu/multipack',
    description: 'A monorepo template repository. Preconfigured to work well with Lerna, Typescript, Jest, Webpack, Eslint'
  }, {
    img: 'static/img/ops/no-backend.png',
    title: 'no-backend',
    link: 'https://github.com/Gherciu/no-backend',
    description: 'Transform your database into working GraphQl schema. Creates Querys, Mutations, Subscriptions and resolvers for all tables'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-478941711" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-478941711" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-478941711" + " " + "ops-card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-478941711" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-478941711" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-478941711" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-478941711",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-478941711" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-478941711",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-478941711" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-478941711",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item.description
      },
      className: "jsx-478941711",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-478941711" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/Gherciu?tab=repositories",
    className: "jsx-478941711" + " " + "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/img/icons/github.svg",
    className: "jsx-478941711" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "See ore on GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "478941711",
    css: ".github-icon.jsx-478941711{width:25px;margin-right:10px;vertical-align:middle;}.button-link.jsx-478941711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ops-container.jsx-478941711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-478941711{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-478941711{max-width:900px;width:100%;min-height:100px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;border-bottom:10px solid #eaeaea;}.ops-card-label.jsx-478941711{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-478941711{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-478941711>img.jsx-478941711{width:30px;height:30px;}.ops-card-label.jsx-478941711>img.jsx-478941711{width:30px;height:30px;}.description.jsx-478941711{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-478941711{object-fit:cover;max-width:220px;height:220px;box-sizing:border-box;}.ops-link.jsx-478941711{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-478941711:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-478941711{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fb0IsQUFHNEIsQUFLRSxBQUlBLEFBTUYsQUFNSSxBQWdCRixBQU1BLEFBTUgsQUFJQSxBQUlNLEFBTUMsQUFNTixBQWFzQixBQUlmLFdBckZBLEFBZUwsQUFrQ0YsQUFJQSxBQWdCVSxHQWhDSCxBQU1BLEVBdEJSLENBb0NHLEFBTUUsQ0F1Qm5CLEtBcENBLEFBSUEsSUFoQ29CLEVBckJNLEdBcUNkLEFBTUEsQ0FvQkssQUFrQkgsUUEzQ0QsQUFNQSxHQXRCUyxBQTREdEIsRUFsQjBCLEtBL0QxQixBQXNDQSxBQU1BLFVBd0JrQixFQTlDRSxLQTBDcEIsTUE3RHVCLEFBSUEsRUE4RGEsR0E5Q2hCLE1BVEcsTUEwQ0csSUFoQ0gsYUE4Q0wsTUE3Q1EsUUE4Q04sY0E3Q0gsRUE4Q0csZ0JBQ0wsWUFDUSxDQXRFdkIsQUFJMEIsRUFpREMsU0ExQ0QsT0E0REEsc0JBQ0YsR0FqREQsbUNBbEJDLFVBb0V4QixDQTdEQSxTQU5BLGFBZ0RBLHlCQTlCa0MsbUhBQzBDLHVFQUN0RCxrQkFDZSxpQ0FDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxvcGVuU291cmNlXFxvcGVuU291cmNlUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBPcGVuU291cmNlUHJvamVjdHMgPSAoICkgPT4ge1xyXG4gICAgY29uc3Qgb3BzUHJvamVjdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL2dhdHNieS1hbGwtaW4ucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dhdHNieS1hbGwtaW4nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9nYXRzYnktYWxsLWluJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0dhdHNieSBzdGFydGVyIGZvciBjcmVhdGluZyBhbnkgdHlwZSBvZiBzaXRlLiBQcmVjb25maWd1cmVkIG91dCBvZiB0aGUgYm94IHRvIHdvcmsgd2VsbCB3aXRoIEVzbGludCwgSHVza3ksIFRhaWx3aW5kLCBSZWR1eCBhbmQgbXVjaCBtb3JlLiBSZWFkIG1vcmUgYWJvdXQgZ2F0c2J5LWFsbC1pbiBvbiBvZmZpY2lhbCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL3N0YXJ0ZXJzL0doZXJjaXUvZ2F0c2J5LWFsbC1pbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HYXRzYnkgU3RhcnRlcnMgUGFnZTwvYT4uJyxcclxuICAgICAgICAgICAgd2Vic2l0ZTonaHR0cHM6Ly9nYXRzYnktYWxsLWluLm5ldGxpZnkuY29tLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9jb21taXRsaW50LWppcmEucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J2NvbW1pdGxpbnQtamlyYScsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L2NvbW1pdGxpbnQtamlyYScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIG1vbm9yZXBvIHRoYXQgY29udGFpbnMgYSBwbHVnaW4gYW5kIGEgY29uZmlnIGZvciBjb21taXRsaW50IHRoYXQgZW5mb3JjZSBKaXJhIGNvbW1pdHMgbWVzc2FnZXMgc3R5bGUuIFlvdSBjYW4gZmluZCB0aGlzIHBhY2thZ2VzIGFuZCBpbnN0YWxsYXRpb24gZG9jcyBhbHNvIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jb21taXRsaW50LWNvbmZpZy1qaXJhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TlBNPC9hPidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9ncmFwaGlxbC1zdG9ybS5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTonZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9ncmFwaGlxbC1zdG9ybScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIEdyYXBoUWwgd2ViIElERS4gR3JhcGhpUUwtU3Rvcm0gdXNlcyBjb21wb25lbnRzIG9mIEdyYXBoaVFMIHVuZGVyIHRoZSBob29kIGJ1dCBpcyBtZWFudCBhcyBhIG1vcmUgcG93ZXJmdWwgR3JhcGhRTCBJREUgZW5hYmxpbmcgYmV0dGVyIChsb2NhbCkgZGV2ZWxvcG1lbnQgd29ya2Zsb3dzLicsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2hlcmNpdS5naXRodWIuaW8vZ3JhcGhpcWwtc3Rvcm0vJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL211bHRpcGFjay5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTonbXVsdGlwYWNrJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvbXVsdGlwYWNrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0EgbW9ub3JlcG8gdGVtcGxhdGUgcmVwb3NpdG9yeS4gUHJlY29uZmlndXJlZCB0byB3b3JrIHdlbGwgd2l0aCBMZXJuYSwgVHlwZXNjcmlwdCwgSmVzdCwgV2VicGFjaywgRXNsaW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6J3N0YXRpYy9pbWcvb3BzL25vLWJhY2tlbmQucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J25vLWJhY2tlbmQnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9uby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RyYW5zZm9ybSB5b3VyIGRhdGFiYXNlIGludG8gd29ya2luZyBHcmFwaFFsIHNjaGVtYS4gQ3JlYXRlcyBRdWVyeXMsIE11dGF0aW9ucywgU3Vic2NyaXB0aW9ucyBhbmQgcmVzb2x2ZXJzIGZvciBhbGwgdGFibGVzJ1xyXG4gICAgICAgIH0gIFxyXG4gICAgXVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LXdyYXBwZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtvcHNQcm9qZWN0cy5tYXAoKGl0ZW0saW5kZXgpPT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHMtY2FyZC1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD0nX19ibGFuaycgY2xhc3NOYW1lPSdvcHMtY2FyZC1sYWJlbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nc3RhdGljL2ltZy9vcHMvZ2l0aHViLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS53ZWJzaXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLndlYnNpdGV9IHRhcmdldD0nX19ibGFuaycgY2xhc3NOYW1lPSdvcHMtY2FyZC1sYWJlbC13ZWJzaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nc3RhdGljL2ltZy9vcHMvYnJvd3Nlci5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5kZXNjcmlwdGlvbn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBjbGFzc05hbWU9J29wcy1jYXJkLWltZycgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdT90YWI9cmVwb3NpdG9yaWVzXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2l0aHViLWljb25cIiBzcmM9XCJzdGF0aWMvaW1nL2ljb25zL2dpdGh1Yi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgU2VlIG9yZSBvbiBHaXRIdWJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdpdGh1Yi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJke1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsMCwwLDAuMTIpLCA5cHggMTBweCA0NXB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDo2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbC13ZWJzaXRlPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWw+aW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1pbWd7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDoyMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtbGlua3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzIwQUFEQjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1saW5rOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzBweCBzb2xpZCAjMjBBQURCO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzIyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlblNvdXJjZVByb2plY3RzXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.f3ec398de85fc261528a.hot-update.js.map