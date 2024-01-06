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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorkCard */ \"./components/WorkCard/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/portfolio.json */ \"./data/portfolio.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Ref\n    var workRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textThree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textFour = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Handling Scroll\n    var handleWorkScroll = function() {\n        window.scrollTo({\n            top: workRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var handleAboutScroll = function() {\n        window.scrollTo({\n            top: aboutRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)([\n            textOne.current,\n            textTwo.current,\n            textThree.current,\n            textFour.current\n        ], {\n            y: 40,\n            x: -10,\n            transform: \"scale(0.95) skew(10deg)\"\n        }, {\n            y: 0,\n            x: 0,\n            transform: \"scale(1)\"\n        });\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative \".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.showCursor && \"cursor-none\"),\n        children: [\n            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.showCursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.name\n                }, void 0, false, {\n                    fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-circle\"\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-circle-bottom\"\n            }, void 0, false, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleWorkScroll: handleWorkScroll,\n                        handleAboutScroll: handleAboutScroll\n                    }, void 0, false, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-20 mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textOne,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.headerTaglineOne\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textTwo,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.headerTaglineTwo\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textThree,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.headerTaglineThree\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textFour,\n                                        className: \"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5\",\n                                        children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.headerTaglineFour\n                                    }, void 0, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Socials__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mt-2 laptop:mt-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-30 p-2 laptop:p-0\",\n                        ref: workRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"Work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4\",\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.projects.map(function(project) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        img: project.imageSrc,\n                                        name: project.title,\n                                        description: project.description,\n                                        onClick: function() {\n                                            return router.push(\"/work?id=\".concat(project.id));\n                                        }\n                                    }, project.id, false, {\n                                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-40 p-2 laptop:p-0\",\n                        ref: aboutRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tablet:m-10 text-2xl text-bold\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5\",\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_12__.aboutpara\n                            }, void 0, false, {\n                                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmewetzel/Desktop/emme-portfolio/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"tx5cJk8eEtTBrDrwVSYnaMsWM1U=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect,\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUs7MENBQ3pELDhEQUFDbUIsR0FBQztnQ0FBQ25CLFNBQVMsRUFBQyw4REFBOEQ7MENBQ3hFdEIsNERBQWM7Ozs7O29DQUNiOzs7Ozs7NEJBQ0E7a0NBQ04sOERBQUNMLDBEQUFNOzs7OzRCQUFHOzs7Ozs7b0JBQ047Ozs7OztZQUNGLENBQ047Q0FDSDtHQTFHdUJNLElBQUk7O1FBMEIxQlIsNkRBQXlCO1FBUVZNLG1EQUFTOzs7QUFsQ0ZFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU29jaWFscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2NpYWxzXCI7XG5pbXBvcnQgV29ya0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya0NhcmRcIjtcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IHN0YWdnZXIgfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3Vyc29yXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gTG9jYWwgRGF0YVxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvcG9ydGZvbGlvLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gUmVmXG4gIGNvbnN0IHdvcmtSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYWJvdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dE9uZSA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0VHdvID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRUaHJlZSA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0Rm91ciA9IHVzZVJlZigpO1xuXG4gIC8vIEhhbmRsaW5nIFNjcm9sbFxuICBjb25zdCBoYW5kbGVXb3JrU2Nyb2xsID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IHdvcmtSZWYuY3VycmVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWJvdXRTY3JvbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogYWJvdXRSZWYuY3VycmVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgc3RhZ2dlcihcbiAgICAgIFt0ZXh0T25lLmN1cnJlbnQsIHRleHRUd28uY3VycmVudCwgdGV4dFRocmVlLmN1cnJlbnQsIHRleHRGb3VyLmN1cnJlbnRdLFxuICAgICAgeyB5OiA0MCwgeDogLTEwLCB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSkgc2tldygxMGRlZylcIiB9LFxuICAgICAgeyB5OiAwLCB4OiAwLCB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIiB9XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2RhdGEuc2hvd0N1cnNvciAmJiBcImN1cnNvci1ub25lXCJ9YH0+XG4gICAgICB7ZGF0YS5zaG93Q3Vyc29yICYmIDxDdXJzb3IgLz59XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntkYXRhLm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC1jaXJjbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGllbnQtY2lyY2xlLWJvdHRvbVwiPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1iLTEwXCI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBoYW5kbGVXb3JrU2Nyb2xsPXtoYW5kbGVXb3JrU2Nyb2xsfVxuICAgICAgICAgIGhhbmRsZUFib3V0U2Nyb2xsPXtoYW5kbGVBYm91dFNjcm9sbH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXB0b3A6bXQtMjAgbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICByZWY9e3RleHRPbmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRhYmxldDp0ZXh0LTZ4bCBsYXB0b3A6dGV4dC02eGwgbGFwdG9wbDp0ZXh0LTh4bCBwLTEgdGFibGV0OnAtMiB0ZXh0LWJvbGQgdy00LzUgbW9iOnctZnVsbCBsYXB0b3A6dy00LzVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGF0YS5oZWFkZXJUYWdsaW5lT25lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICByZWY9e3RleHRUd299XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRhYmxldDp0ZXh0LTZ4bCBsYXB0b3A6dGV4dC02eGwgbGFwdG9wbDp0ZXh0LTh4bCBwLTEgdGFibGV0OnAtMiB0ZXh0LWJvbGQgdy1mdWxsIGxhcHRvcDp3LTQvNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVUd299XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHJlZj17dGV4dFRocmVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0YWJsZXQ6dGV4dC02eGwgbGFwdG9wOnRleHQtNnhsIGxhcHRvcGw6dGV4dC04eGwgcC0xIHRhYmxldDpwLTIgdGV4dC1ib2xkIHctZnVsbCBsYXB0b3A6dy00LzVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGF0YS5oZWFkZXJUYWdsaW5lVGhyZWV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHJlZj17dGV4dEZvdXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRhYmxldDp0ZXh0LTZ4bCBsYXB0b3A6dGV4dC02eGwgbGFwdG9wbDp0ZXh0LTh4bCBwLTEgdGFibGV0OnAtMiB0ZXh0LWJvbGQgdy1mdWxsIGxhcHRvcDp3LTQvNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVGb3VyfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxTb2NpYWxzIGNsYXNzTmFtZT1cIm10LTIgbGFwdG9wOm10LTVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBsYXB0b3A6bXQtMzAgcC0yIGxhcHRvcDpwLTBcIiByZWY9e3dvcmtSZWZ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJvbGRcIj5Xb3JrPC9oMT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBsYXB0b3A6bXQtMTAgZ3JpZCBncmlkLWNvbHMtMSB0YWJsZXQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8V29ya0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgaW1nPXtwcm9qZWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC93b3JrP2lkPSR7cHJvamVjdC5pZH1gKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBsYXB0b3A6bXQtNDAgcC0yIGxhcHRvcDpwLTBcIiByZWY9e2Fib3V0UmVmfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGFibGV0Om0tMTAgdGV4dC0yeGwgdGV4dC1ib2xkXCI+QWJvdXQ8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxldDptLTEwIG10LTIgdGV4dC14bCBsYXB0b3A6dGV4dC0zeGwgdy1mdWxsIGxhcHRvcDp3LTMvNVwiPlxuICAgICAgICAgICAge2RhdGEuYWJvdXRwYXJhfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkhlYWRlciIsIlNvY2lhbHMiLCJXb3JrQ2FyZCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJzdGFnZ2VyIiwiRm9vdGVyIiwiSGVhZCIsIkxpbmsiLCJDdXJzb3IiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwiSG9tZSIsIndvcmtSZWYiLCJhYm91dFJlZiIsInRleHRPbmUiLCJ0ZXh0VHdvIiwidGV4dFRocmVlIiwidGV4dEZvdXIiLCJoYW5kbGVXb3JrU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFuZGxlQWJvdXRTY3JvbGwiLCJ5IiwieCIsInRyYW5zZm9ybSIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInNob3dDdXJzb3IiLCJ0aXRsZSIsIm5hbWUiLCJoMSIsInJlZiIsImhlYWRlclRhZ2xpbmVPbmUiLCJoZWFkZXJUYWdsaW5lVHdvIiwiaGVhZGVyVGFnbGluZVRocmVlIiwiaGVhZGVyVGFnbGluZUZvdXIiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpbWciLCJpbWFnZVNyYyIsImRlc2NyaXB0aW9uIiwib25DbGljayIsInB1c2giLCJpZCIsInAiLCJhYm91dHBhcmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});