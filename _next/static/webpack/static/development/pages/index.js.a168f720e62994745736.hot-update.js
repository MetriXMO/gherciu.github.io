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
    className: "jsx-2213736576" + " " + 'content-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2213736576" + " " + "ops-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, opsProjects.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-2213736576" + " " + "ops-card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2213736576" + " " + "ops-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2213736576" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-2213736576" + " " + 'ops-card-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/github.png",
      className: "jsx-2213736576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), item.website && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.website,
      target: "__blank",
      className: "jsx-2213736576" + " " + 'ops-card-label-website',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ops/browser.png",
      className: "jsx-2213736576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      target: "__blank",
      className: "jsx-2213736576" + " " + 'ops-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-2213736576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item.description
      },
      className: "jsx-2213736576",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.img,
      alt: "",
      className: "jsx-2213736576" + " " + 'ops-card-img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/Gherciu?tab=repositories",
    className: "jsx-2213736576" + " " + "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/img/icons/github.svg",
    className: "jsx-2213736576" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "See more on GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "codepen",
    "data-height": "482",
    "data-theme-id": "dark",
    "data-default-tab": "js,result",
    "data-user": "gherciu",
    "data-slug-hash": "eoYBdP",
    style: "height: 482px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;",
    "data-pen-title": "p5-dandelion",
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "See the Pen ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://codepen.io/gherciu/pen/eoYBdP",
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "p5-dandelion"), " by Gherciu Gheorghe (", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://codepen.io/gherciu",
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "@gherciu"), ") on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://codepen.io",
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "CodePen"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    src: "https://static.codepen.io/assets/embed/ei.js",
    className: "jsx-2213736576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2213736576",
    css: ".github-icon.jsx-2213736576{width:25px;margin-right:10px;vertical-align:middle;}.button-link.jsx-2213736576{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ops-container.jsx-2213736576{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:150px;}.ops-card-container.jsx-2213736576{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ops-card.jsx-2213736576{max-width:900px;width:100%;min-height:220px;border-radius:24px;overflow:hidden;background:#fff;margin-bottom:50px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.12),9px 10px 45px rgba(0,0,0,0.24);position:relative;border-bottom:10px solid #eaeaea;}.ops-card-label.jsx-2213736576{display:block;position:absolute;top:20px;left:20px;}.ops-card-label-website.jsx-2213736576{display:block;position:absolute;top:20px;left:60px;}.ops-card-label-website.jsx-2213736576>img.jsx-2213736576{width:30px;height:30px;}.ops-card-label.jsx-2213736576>img.jsx-2213736576{width:30px;height:30px;}.description.jsx-2213736576{padding:0px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.ops-card-img.jsx-2213736576{object-fit:cover;max-width:220px;height:220px;box-sizing:border-box;}.ops-link.jsx-2213736576{color:#333;-webkit-text-decoration:none;text-decoration:none;font-size:18px;border-bottom:3px solid #20AADB;display:block;padding:0px 5px;line-height:0px;height:35px;margin-bottom:10px;box-sizing:border-box;-webkit-transition:all 0.5s;transition:all 0.5s;}.ops-link.jsx-2213736576:hover{border-bottom:30px solid #20AADB;color:#222;}.text-center.jsx-2213736576{text-align:center;}@media (max-width:630px){.ops-card-img.jsx-2213736576{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFHNEIsQUFLRSxBQUlBLEFBTUYsQUFNSSxBQWdCRixBQU1BLEFBTUgsQUFJQSxBQUlNLEFBTUMsQUFNTixBQWFzQixBQUlmLEFBS0QsV0ExRkMsQUFlTCxBQWtDRixBQUlBLEFBZ0JVLEVBc0JyQixDQXREa0IsQUFNQSxFQXRCUixDQW9DRyxBQU1FLENBdUJuQixLQXBDQSxBQUlBLElBaENvQixFQXJCTSxHQXFDZCxBQU1BLENBb0JLLEFBa0JILFFBM0NELEFBTUEsR0F0QlMsQUE0RHRCLEVBbEIwQixLQS9EMUIsQUFzQ0EsQUFNQSxVQXdCa0IsRUE5Q0UsS0EwQ3BCLE1BN0R1QixBQUlBLEVBOERhLEdBOUNoQixNQVRHLE1BMENHLElBaENILGFBOENMLE1BN0NRLFFBOENOLGNBN0NILEVBOENHLGdCQUNMLFlBQ1EsQ0F0RXZCLEFBSTBCLEVBaURDLFNBMUNELE9BNERBLHNCQUNGLEdBakRELG1DQWxCQyxVQW9FeEIsQ0E3REEsU0FOQSxhQWdEQSx5QkE5QmtDLG1IQUMwQyx1RUFDdEQsa0JBQ2UsaUNBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcb3BlblNvdXJjZVxcb3BlblNvdXJjZVByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgT3BlblNvdXJjZVByb2plY3RzID0gKCApID0+IHtcclxuICAgIGNvbnN0IG9wc1Byb2plY3RzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9nYXRzYnktYWxsLWluLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidnYXRzYnktYWxsLWluJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ2F0c2J5LWFsbC1pbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidHYXRzYnkgc3RhcnRlciBmb3IgY3JlYXRpbmcgYW55IHR5cGUgb2Ygc2l0ZS4gUHJlY29uZmlndXJlZCBvdXQgb2YgdGhlIGJveCB0byB3b3JrIHdlbGwgd2l0aCBFc2xpbnQsIEh1c2t5LCBUYWlsd2luZCwgUmVkdXggYW5kIG11Y2ggbW9yZS4gUmVhZCBtb3JlIGFib3V0IGdhdHNieS1hbGwtaW4gb24gb2ZmaWNpYWwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9zdGFydGVycy9HaGVyY2l1L2dhdHNieS1hbGwtaW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2F0c2J5IFN0YXJ0ZXJzIFBhZ2U8L2E+LicsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6J2h0dHBzOi8vZ2F0c2J5LWFsbC1pbi5uZXRsaWZ5LmNvbS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvY29tbWl0bGludC1qaXJhLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOidjb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBsaW5rOidodHRwczovL2dpdGh1Yi5jb20vR2hlcmNpdS9jb21taXRsaW50LWppcmEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBtb25vcmVwbyB0aGF0IGNvbnRhaW5zIGEgcGx1Z2luIGFuZCBhIGNvbmZpZyBmb3IgY29tbWl0bGludCB0aGF0IGVuZm9yY2UgSmlyYSBjb21taXRzIG1lc3NhZ2VzIHN0eWxlLiBZb3UgY2FuIGZpbmQgdGhpcyBwYWNrYWdlcyBhbmQgaW5zdGFsbGF0aW9uIGRvY3MgYWxzbyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY29tbWl0bGludC1jb25maWctamlyYVwiIHRhcmdldD1cIl9ibGFua1wiPk5QTTwvYT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzonc3RhdGljL2ltZy9vcHMvZ3JhcGhpcWwtc3Rvcm0uanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6J2dyYXBoaXFsLXN0b3JtJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvZ3JhcGhpcWwtc3Rvcm0nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonQSBHcmFwaFFsIHdlYiBJREUuIEdyYXBoaVFMLVN0b3JtIHVzZXMgY29tcG9uZW50cyBvZiBHcmFwaGlRTCB1bmRlciB0aGUgaG9vZCBidXQgaXMgbWVhbnQgYXMgYSBtb3JlIHBvd2VyZnVsIEdyYXBoUUwgSURFIGVuYWJsaW5nIGJldHRlciAobG9jYWwpIGRldmVsb3BtZW50IHdvcmtmbG93cy4nLFxyXG4gICAgICAgICAgICB3ZWJzaXRlOidodHRwczovL2doZXJjaXUuZ2l0aHViLmlvL2dyYXBoaXFsLXN0b3JtLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9tdWx0aXBhY2sucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6J211bHRpcGFjaycsXHJcbiAgICAgICAgICAgIGxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9HaGVyY2l1L211bHRpcGFjaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidBIG1vbm9yZXBvIHRlbXBsYXRlIHJlcG9zaXRvcnkuIFByZWNvbmZpZ3VyZWQgdG8gd29yayB3ZWxsIHdpdGggTGVybmEsIFR5cGVzY3JpcHQsIEplc3QsIFdlYnBhY2ssIEVzbGludCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOidzdGF0aWMvaW1nL29wcy9uby1iYWNrZW5kLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiduby1iYWNrZW5kJyxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXUvbm8tYmFja2VuZCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUcmFuc2Zvcm0geW91ciBkYXRhYmFzZSBpbnRvIHdvcmtpbmcgR3JhcGhRbCBzY2hlbWEuIENyZWF0ZXMgUXVlcnlzLCBNdXRhdGlvbnMsIFN1YnNjcmlwdGlvbnMgYW5kIHJlc29sdmVycyBmb3IgYWxsIHRhYmxlcydcclxuICAgICAgICB9ICBcclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC13cmFwcGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jb250YWluZXJcIj5cclxuICAgICAgICB7b3BzUHJvamVjdHMubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BzLWNhcmQtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wcy1jYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2dpdGh1Yi5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ud2Vic2l0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS53ZWJzaXRlfSB0YXJnZXQ9J19fYmxhbmsnIGNsYXNzTmFtZT0nb3BzLWNhcmQtbGFiZWwtd2Vic2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J3N0YXRpYy9pbWcvb3BzL2Jyb3dzZXIucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PSdfX2JsYW5rJyBjbGFzc05hbWU9J29wcy1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uZGVzY3JpcHRpb259fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gY2xhc3NOYW1lPSdvcHMtY2FyZC1pbWcnIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0doZXJjaXU/dGFiPXJlcG9zaXRvcmllc1wiIGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdpdGh1Yi1pY29uXCIgc3JjPVwic3RhdGljL2ltZy9pY29ucy9naXRodWIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIFNlZSBtb3JlIG9uIEdpdEh1YlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb2RlcGVuXCIgZGF0YS1oZWlnaHQ9XCI0ODJcIiBkYXRhLXRoZW1lLWlkPVwiZGFya1wiIGRhdGEtZGVmYXVsdC10YWI9XCJqcyxyZXN1bHRcIiBkYXRhLXVzZXI9XCJnaGVyY2l1XCIgZGF0YS1zbHVnLWhhc2g9XCJlb1lCZFBcIiBzdHlsZT1cImhlaWdodDogNDgycHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXI6IDJweCBzb2xpZDsgbWFyZ2luOiAxZW0gMDsgcGFkZGluZzogMWVtO1wiIGRhdGEtcGVuLXRpdGxlPVwicDUtZGFuZGVsaW9uXCI+XHJcbiAgPHNwYW4+U2VlIHRoZSBQZW4gPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9naGVyY2l1L3Blbi9lb1lCZFBcIj5cclxuICBwNS1kYW5kZWxpb248L2E+IGJ5IEdoZXJjaXUgR2hlb3JnaGUgKDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vZ2hlcmNpdVwiPkBnaGVyY2l1PC9hPilcclxuICBvbiA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvXCI+Q29kZVBlbjwvYT4uPC9zcGFuPlxyXG48L3A+XHJcbjxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9zdGF0aWMuY29kZXBlbi5pby9hc3NldHMvZW1iZWQvZWkuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5naXRodWItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo5MDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjIyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLDAsMCwwLjEyKSwgOXB4IDEwcHggNDVweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtY2FyZC1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6NjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtbGFiZWwtd2Vic2l0ZT5pbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wcy1jYXJkLWxhYmVsPmltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWNhcmQtaW1ne1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MjIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3BzLWxpbmt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyMEFBREI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHMtbGluazpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgIzIwQUFEQjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5vcHMtY2FyZC1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVuU291cmNlUHJvamVjdHNcclxuIl19 */\n/*@ sourceURL=C:\\Users\\User\\Desktop\\projects\\portfolio\\components\\openSource\\openSourceProjects.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSourceProjects);

/***/ })

})
//# sourceMappingURL=index.js.a168f720e62994745736.hot-update.js.map