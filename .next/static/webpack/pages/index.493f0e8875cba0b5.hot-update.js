"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorkCard */ \"./components/WorkCard/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/portfolio.json */ \"./data/portfolio.json\");\n\n\n\n\n\n\n\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Ref\n    var workRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textThree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textFour = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Handling Scroll\n    var handleWorkScroll = function() {\n        window.scrollTo({\n            top: workRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var handleAboutScroll = function() {\n        window.scrollTo({\n            top: aboutRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)([\n            textOne.current,\n            textTwo.current,\n            textThree.current,\n            textFour.current\n        ], {\n            y: 40,\n            x: -10,\n            transform: \"scale(0.95) skew(10deg)\"\n        }, {\n            y: 0,\n            x: 0,\n            transform: \"scale(1)\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative \".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.showCursor && \"cursor-none\"),\n        children: [\n            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.showCursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.name\n                }, void 0, false, {\n                    fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-circle\"\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-circle-bottom\"\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleWorkScroll: handleWorkScroll,\n                        handleAboutScroll: handleAboutScroll\n                    }, void 0, false, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-20 mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textOne,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.headerTaglineOne\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textTwo,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.headerTaglineTwo\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textThree,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.headerTaglineThree\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textFour,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.headerTaglineFour\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Socials__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mt-2 laptop:mt-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-30 p-2 laptop:p-0\",\n                        ref: workRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"Work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4\",\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.projects.map(function(project) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        img: project.imageSrc,\n                                        name: project.title,\n                                        description: project.description,\n                                        onClick: function() {\n                                            return router.push(\"/work\");\n                                        }\n                                    }, project.id, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-40 p-2 laptop:p-0\",\n                        ref: aboutRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tablet:m-10 text-2xl text-bold\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5\",\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_11__.aboutpara\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"bh5xM4nhTHnijH5aCZVObLoQP10=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUNBO2tDQUNOLDhEQUFDSiwwREFBTTs7Ozs0QkFBRzs7Ozs7O29CQUNOOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F4R3VCSyxJQUFJOztRQTBCMUJQLDZEQUF5Qjs7O0FBMUJITyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFNvY2lhbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsc1wiO1xuaW1wb3J0IFdvcmtDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmtDYXJkXCI7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBzdGFnZ2VyIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuLi9jb21wb25lbnRzL0N1cnNvclwiO1xuXG4vLyBMb2NhbCBEYXRhXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9wb3J0Zm9saW8uanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBSZWZcbiAgY29uc3Qgd29ya1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0T25lID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRUd28gPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dFRocmVlID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRGb3VyID0gdXNlUmVmKCk7XG5cbiAgLy8gSGFuZGxpbmcgU2Nyb2xsXG4gIGNvbnN0IGhhbmRsZVdvcmtTY3JvbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogd29ya1JlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBYm91dFNjcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBhYm91dFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzdGFnZ2VyKFxuICAgICAgW3RleHRPbmUuY3VycmVudCwgdGV4dFR3by5jdXJyZW50LCB0ZXh0VGhyZWUuY3VycmVudCwgdGV4dEZvdXIuY3VycmVudF0sXG4gICAgICB7IHk6IDQwLCB4OiAtMTAsIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KSBza2V3KDEwZGVnKVwiIH0sXG4gICAgICB7IHk6IDAsIHg6IDAsIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlICR7ZGF0YS5zaG93Q3Vyc29yICYmIFwiY3Vyc29yLW5vbmVcIn1gfT5cbiAgICAgIHtkYXRhLnNob3dDdXJzb3IgJiYgPEN1cnNvciAvPn1cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2RhdGEubmFtZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LWNpcmNsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC1jaXJjbGUtYm90dG9tXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGhhbmRsZVdvcmtTY3JvbGw9e2hhbmRsZVdvcmtTY3JvbGx9XG4gICAgICAgICAgaGFuZGxlQWJvdXRTY3JvbGw9e2hhbmRsZUFib3V0U2Nyb2xsfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcHRvcDptdC0yMCBtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHJlZj17dGV4dE9uZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGFibGV0OnRleHQtNnhsIGxhcHRvcDp0ZXh0LTZ4bCBsYXB0b3BsOnRleHQtOHhsIHAtMSB0YWJsZXQ6cC0yIHRleHQtYm9sZCB3LTQvNSBtb2I6dy1mdWxsIGxhcHRvcDp3LTQvNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVPbmV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHJlZj17dGV4dFR3b31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGFibGV0OnRleHQtNnhsIGxhcHRvcDp0ZXh0LTZ4bCBsYXB0b3BsOnRleHQtOHhsIHAtMSB0YWJsZXQ6cC0yIHRleHQtYm9sZCB3LWZ1bGwgbGFwdG9wOnctNC81XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGEuaGVhZGVyVGFnbGluZVR3b31cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0VGhyZWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRhYmxldDp0ZXh0LTZ4bCBsYXB0b3A6dGV4dC02eGwgbGFwdG9wbDp0ZXh0LTh4bCBwLTEgdGFibGV0OnAtMiB0ZXh0LWJvbGQgdy1mdWxsIGxhcHRvcDp3LTQvNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVUaHJlZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0Rm91cn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGFibGV0OnRleHQtNnhsIGxhcHRvcDp0ZXh0LTZ4bCBsYXB0b3BsOnRleHQtOHhsIHAtMSB0YWJsZXQ6cC0yIHRleHQtYm9sZCB3LWZ1bGwgbGFwdG9wOnctNC81XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGEuaGVhZGVyVGFnbGluZUZvdXJ9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFNvY2lhbHMgY2xhc3NOYW1lPVwibXQtMiBsYXB0b3A6bXQtNVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGxhcHRvcDptdC0zMCBwLTIgbGFwdG9wOnAtMFwiIHJlZj17d29ya1JlZn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYm9sZFwiPldvcms8L2gxPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGxhcHRvcDptdC0xMCBncmlkIGdyaWQtY29scy0xIHRhYmxldDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAge2RhdGEucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxXb3JrQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICBpbWc9e3Byb2plY3QuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgbmFtZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi93b3JrXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGxhcHRvcDptdC00MCBwLTIgbGFwdG9wOnAtMFwiIHJlZj17YWJvdXRSZWZ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0YWJsZXQ6bS0xMCB0ZXh0LTJ4bCB0ZXh0LWJvbGRcIj5BYm91dDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGV0Om0tMTAgbXQtMiB0ZXh0LXhsIGxhcHRvcDp0ZXh0LTN4bCB3LWZ1bGwgbGFwdG9wOnctMy81XCI+XG4gICAgICAgICAgICB7ZGF0YS5hYm91dHBhcmF9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSGVhZGVyIiwiU29jaWFscyIsIldvcmtDYXJkIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInN0YWdnZXIiLCJGb290ZXIiLCJIZWFkIiwiTGluayIsIkN1cnNvciIsImRhdGEiLCJIb21lIiwid29ya1JlZiIsImFib3V0UmVmIiwidGV4dE9uZSIsInRleHRUd28iLCJ0ZXh0VGhyZWUiLCJ0ZXh0Rm91ciIsImhhbmRsZVdvcmtTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJoYW5kbGVBYm91dFNjcm9sbCIsInkiLCJ4IiwidHJhbnNmb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd0N1cnNvciIsInRpdGxlIiwibmFtZSIsImgxIiwicmVmIiwiaGVhZGVyVGFnbGluZU9uZSIsImhlYWRlclRhZ2xpbmVUd28iLCJoZWFkZXJUYWdsaW5lVGhyZWUiLCJoZWFkZXJUYWdsaW5lRm91ciIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImltZyIsImltYWdlU3JjIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwicm91dGVyIiwicHVzaCIsImlkIiwicCIsImFib3V0cGFyYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});