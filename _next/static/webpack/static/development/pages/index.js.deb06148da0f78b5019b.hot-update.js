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
    className: "jsx-1958271242" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1958271242" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-1958271242" + " " + "ops-card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1958271242" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1958271242" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1958271242" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-1958271242",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-1958271242" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-1958271242",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-1958271242" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1958271242",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item.description
      },
      className: "jsx-1958271242",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-1958271242" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/Gherciu?tab=repositories",
    className: "jsx-1958271242" + " " + "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/img/icons/github.svg",
    className: "jsx-1958271242" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "See more on GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1958271242",
    css: ".github-icon.jsx-1958271242{width:25px;margin-right:10px;vertical-align:middle;}.button-link.jsx-1958271242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ops-container.jsx-1958271242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-1958271242{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-1958271242{max-width:900px;width:100%;min-height:100px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;border-bottom:10px solid #eaeaea;}.ops-card-label.jsx-1958271242{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-1958271242{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-1958271242>img.jsx-1958271242{width:30px;height:30px;}.ops-card-label.jsx-1958271242>img.jsx-1958271242{width:30px;height:30px;}.description.jsx-1958271242{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-1958271242{object-fit:cover;max-width:220px;height:220px;box-sizing:border-box;}.ops-link.jsx-1958271242{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-1958271242:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-1958271242{text-align:center;}@media (max-width:500px){.ops-card-img.jsx-1958271242{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fb0IsQUFHNEIsQUFLRSxBQUlBLEFBTUYsQUFNSSxBQWdCRixBQU1BLEFBTUgsQUFJQSxBQUlNLEFBTUMsQUFNTixBQWFzQixBQUlmLEFBS0QsV0ExRkMsQUFlTCxBQWtDRixBQUlBLEFBZ0JVLEVBc0JyQixDQXREa0IsQUFNQSxFQXRCUixDQW9DRyxBQU1FLENBdUJuQixLQXBDQSxBQUlBLElBaENvQixFQXJCTSxHQXFDZCxBQU1BLENBb0JLLEFBa0JILFFBM0NELEFBTUEsR0F0QlMsQUE0RHRCLEVBbEIwQixLQS9EMUIsQUFzQ0EsQUFNQSxVQXdCa0IsRUE5Q0UsS0EwQ3BCLE1BN0R1QixBQUlBLEVBOERhLEdBOUNoQixNQVRHLE1BMENHLElBaENILGFBOENMLE1BN0NRLFFBOENOLGNBN0NILEVBOENHLGdCQUNMLFlBQ1EsQ0F0RXZCLEFBSTBCLEVBaURDLFNBMUNELE9BNERBLHNCQUNGLEdBakRELG1DQWxCQyxVQW9FeEIsQ0E3REEsU0FOQSxhQWdEQSx5QkE5QmtDLG1IQUMwQyx1RUFDdEQsa0JBQ2UsaUNBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgT3BlblNvdXJjZVByb2plY3RzID0gKCApID0+IHtcclxuICAgIGNvbnN0IG9wc1Byb2plY3RzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9nYXRzYnktYWxsLWluLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidnYXRzYnktYWxsLWluJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ2F0c2J5LWFsbC1pbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidHYXRzYnkgc3RhcnRlciBmb3IgY3JlYXRpbmcgYW55IHR5cGUgb2Ygc2l0ZS4gUHJlY29uZmlndXJlZCBvdXQgb2YgdGhlIGJveCB0byB3b3JrIHdlbGwgd2l0aCBFc2xpbnQsIEh1c2t5LCBUYWlsd2luZCwgUmVkdXggYW5kIG11Y2ggbW9yZS4gUmVhZCBtb3JlIGFib3V0IGdhdHNieS1hbGwtaW4gb24gb2ZmaWNpYWwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9zdGFydGVycy9HaGVyY2l1L2dhdHNieS1hbGwtaW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2F0c2J5IFN0YXJ0ZXJzIFBhZ2U8L2E+LicsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2F0c2J5LWFsbC1pbi5uZXRsaWZ5LmNvbS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvY29tbWl0bGludC1qaXJhLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidjb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9jb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBtb25vcmVwbyB0aGF0IGNvbnRhaW5zIGEgcGx1Z2luIGFuZCBhIGNvbmZpZyBmb3IgY29tbWl0bGludCB0aGF0IGVuZm9yY2UgSmlyYSBjb21taXRzIG1lc3NhZ2VzIHN0eWxlLiBZb3UgY2FuIGZpbmQgdGhpcyBwYWNrYWdlcyBhbmQgaW5zdGFsbGF0aW9uIGRvY3MgYWxzbyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY29tbWl0bGludC1jb25maWctamlyYVwiIHRhcmdldD1cIl9ibGFua1wiPk5QTTwvYT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvZ3JhcGhpcWwtc3Rvcm0uanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBHcmFwaFFsIHdlYiBJREUuIEdyYXBoaVFMLVN0b3JtIHVzZXMgY29tcG9uZW50cyBvZiBHcmFwaGlRTCB1bmRlciB0aGUgaG9vZCBidXQgaXMgbWVhbnQgYXMgYSBtb3JlIHBvd2VyZnVsIEdyYXBoUUwgSURFIGVuYWJsaW5nIGJldHRlciAobG9jYWwpIGRldmVsb3BtZW50IHdvcmtmbG93cy4nLFxyXG4gICAgICAgICAgICB3ZWJzaXRlOidodHRwczovL2doZXJjaXUuZ2l0aHViLmlvL2dyYXBoaXFsLXN0b3JtLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9tdWx0aXBhY2sucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J211bHRpcGFjaycsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L211bHRpcGFjaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIG1vbm9yZXBvIHRlbXBsYXRlIHJlcG9zaXRvcnkuIFByZWNvbmZpZ3VyZWQgdG8gd29yayB3ZWxsIHdpdGggTGVybmEsIFR5cGVzY3JpcHQsIEplc3QsIFdlYnBhY2ssIEVzbGludCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9uby1iYWNrZW5kLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiduby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvbm8tYmFja2VuZCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUcmFuc2Zvcm0geW91ciBkYXRhYmFzZSBpbnRvIHdvcmtpbmcgR3JhcGhRbCBzY2hlbWEuIENyZWF0ZXMgUXVlcnlzLCBNdXRhdGlvbnMsIFN1YnNjcmlwdGlvbnMgYW5kIHJlc29sdmVycyBmb3IgYWxsIHRhYmxlcydcclxuICAgICAgICB9ICBcclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC13cmFwcGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jb250YWluZXJcIj5cclxuICAgICAgICB7b3BzUHJvamVjdHMubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNhcmQtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2dpdGh1Yi5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ud2Vic2l0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS53ZWJzaXRlfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwtd2Vic2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2Jyb3dzZXIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uZGVzY3JpcHRpb259fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gY2xhc3NOYW1lPSdvcHMtY2FyZC1pbWcnIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXU/dGFiPXJlcG9zaXRvcmllc1wiIGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdpdGh1Yi1pY29uXCIgc3JjPVwic3RhdGljL2ltZy9pY29ucy9naXRodWIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIFNlZSBtb3JlIG9uIEdpdEh1YlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZ2l0aHViLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24tbGluayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmR7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6OTAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDoxMDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjRweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwwLDAsMC4xMiksIDlweCAxMHB4IDQ1cHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVsLXdlYnNpdGV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVsLXdlYnNpdGU+aW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbD5pbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowcHggMTVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWltZ3tcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjIyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1saW5re1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjBBQURCO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkICMyMEFBREI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMjIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAub3BzLWNhcmQtaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlblNvdXJjZVByb2plY3RzXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.deb06148da0f78b5019b.hot-update.js.map