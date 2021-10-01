"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_pablo_Documents_application_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pablo_Documents_application_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_pablo_Documents_application_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_database_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/database/add */ "./src/components/database/add.js");
/* harmony import */ var _components_database_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/database/get */ "./src/components/database/get.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _components_auth_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/auth/Profile */ "./src/components/auth/Profile.js");
/* harmony import */ var _components_auth_logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/auth/logout */ "./src/components/auth/logout.js");
/* harmony import */ var _components_auth_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/auth/state */ "./src/components/auth/state.js");
/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/auth/login */ "./src/components/auth/login.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_database_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/database/config */ "./src/components/database/config.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\pablo\\Documents\\application\\src\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _templateObject,
    _templateObject2,
    _templateObject3;



















var Feed = function Feed() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([{
    name: "Receta",
    type: "Pastel"
  }]),
      card = _useState2[0],
      setCard = _useState2[1];

  var load = /*#__PURE__*/function () {
    var _ref = (0,C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_pablo_Documents_application_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var querySnapshot;
      return C_Users_pablo_Documents_application_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("loaded");
              _context.next = 3;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_16__.collection)(_components_database_config__WEBPACK_IMPORTED_MODULE_15__.dataBase, "recipe"));

            case 3:
              querySnapshot = _context.sent;
              querySnapshot.forEach(function (doc) {
                setCard(function (card) {
                  return [].concat((0,C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(card), [doc.data()]);
                });
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function load() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_7__.Auth0Provider, {
    domain: "dev-dou8wmxc.us.auth0.com",
    clientId: "PXWrsxQUkGUjzxYg7FNUjHOuYVWw6ar8",
    redirectUri: "http://localhost:3000/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
      onLoad: load,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("title", {
          children: "Feed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("meta", {
          name: "description",
          content: "Feed page from the application"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("link", {
          rel: "icon",
          href: "/logo.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(Nav, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
            layout: "fill",
            src: "/logo.png",
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("button", {
              onClick: function onClick() {
                return setIsOpen(true);
              },
              className: "plus",
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_13___default()), {
              isOpen: isOpen,
              onRequestClose: function onRequestClose() {
                return setIsOpen(false);
              },
              style: {
                overlay: {
                  backgroundColor: "rgba(15, 15, 15, 0.5)"
                },
                content: {
                  transition: "333ms",
                  margin: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "none",
                  color: "rgb(0, 0, 0)",
                  minWidth: "300px",
                  maxWidth: "50vw"
                }
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(Close, {
                onClick: function onClick() {
                  return setIsOpen(false);
                },
                children: "x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_database_add__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_auth_state__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_auth_login__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_database_get__WEBPACK_IMPORTED_MODULE_5__.default, {
          state: card
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(Footer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("p", {
            children: "Recepy es un proyecto de estudiantes, en este proyecto se practican conceptos como la Base de Datos y la gestion de Usuraios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("p", {
            children: "En este proyecto se usaron tecnologias como NextJs, Firebase, GitHub, Vercel, Auth0 y Git"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("section", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://git-scm.com/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/git.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://firebase.google.com/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/firebase.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://nextjs.org/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/nextJs.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://auth0.com/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/auth0.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://vercel.com/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/favicon.ico"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://github.com/",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
              layout: "fill",
              src: "/gitHub.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("p", {
            children: "Si quieres enviar alguna sugerencia o queja sobre la aplicacion, lo puedes hacer al siguiente correo : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
            href: "https://mail.google.com/",
            target: "_blank",
            children: "proyectzena@gmail.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(Feed, "JYybfFjoxnxru5lRTxtR6vu7W8w=");

_c = Feed;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_19__.default.div(_templateObject || (_templateObject = (0,C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background-color: transparent;\n    padding: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n\n    div {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        flex-wrap: wrap;\n    }\n\n    .plus {\n        outline: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        color: rgb(255, 255, 255);\n        background-color: rgb(0, 0, 0);\n        border-radius: 50%;\n        border: 0;\n        box-shadow: 0px 10px 20px rgb(100, 100, 100);\n        transition: 333ms;\n        font-weight: bold;\n        font-size: 40px;\n        cursor: pointer;\n\n        &:hover {\n            background-color: rgb(20, 20, 20);\n        }\n    }\n"])));
_c2 = Nav;
var Close = styled_components__WEBPACK_IMPORTED_MODULE_19__.default.button(_templateObject2 || (_templateObject2 = (0,C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background-color: rgb(200, 200, 200);\n    color: rgb(0, 0, 0);\n    font-weight: bold;\n    font-size: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 333ms;\n\n    &:hover {\n        background-color: rgb(0, 0, 0);\n        color: rgb(255, 255, 255);\n    }\n"])));
_c3 = Close;
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_19__.default.footer(_templateObject3 || (_templateObject3 = (0,C_Users_pablo_Documents_application_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background-color: rgb(0, 0, 0);\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    color: rgb(200, 200, 200);\n    display: flex;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n\n    p {\n        margin: 0;\n    }\n\n    div {\n        width: 50%;\n\n        a {\n            font-weight: bold;\n        }\n    }\n\n    section {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        background-color: transparent;\n\n        Image {\n            width: 50px;\n            border-radius: 5px;\n            padding: 10px;\n            background-color: rgb(255, 255, 255);\n            transition: 333ms;\n\n            &:hover {\n                transform: scale(1.1);\n                background-color: rgb(200, 200, 200);\n            }\n        }\n    }\n"])));
_c4 = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Feed);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Feed");
$RefreshReg$(_c2, "Nav");
$RefreshReg$(_c3, "Close");
$RefreshReg$(_c4, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY0MzViMDhiY2JiZmFlYjljZWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixrQkFBOEJQLGdEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9RLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QlQsZ0RBQVEsQ0FBQyxDQUFDO0FBQUNVLElBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCQyxJQUFBQSxJQUFJLEVBQUU7QUFBdkIsR0FBRCxDQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsSUFBSTtBQUFBLHlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRFM7QUFBQSxxQkFFbUJYLDREQUFPLENBQUNELCtEQUFVLENBQUNELGtFQUFELEVBQVcsUUFBWCxDQUFYLENBRjFCOztBQUFBO0FBRUhjLGNBQUFBLGFBRkc7QUFJVEEsY0FBQUEsYUFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQUFDLEdBQUcsRUFBSTtBQUMzQk4sZ0JBQUFBLE9BQU8sQ0FBRSxVQUFBRCxJQUFJO0FBQUEseUtBQVFBLElBQVIsSUFBY08sR0FBRyxDQUFDQyxJQUFKLEVBQWQ7QUFBQSxpQkFBTixDQUFQO0FBQ0QsZUFGRDs7QUFKUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFKTixJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBU0Esc0JBQ0ksK0RB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QTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQTBCSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBRyxnQkFBSSxFQUFDLDBCQUFSO0FBQW1DLGtCQUFNLEVBQUMsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEVILENBdkZEOztHQUFNTDs7S0FBQUE7QUF5Rk4sSUFBTXVCLEdBQUcsR0FBR3BDLDJEQUFILDJnQ0FBVDtNQUFNb0M7QUF1Q04sSUFBTUUsS0FBSyxHQUFHdEMsOERBQUgscWxCQUFYO01BQU1zQztBQW9CTixJQUFNRSxNQUFNLEdBQUd4Qyw4REFBSCxnakNBQVo7TUFBTXdDO0FBOENOLCtEQUFlM0IsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhYmFzZS9hZGRcIjtcbmltcG9ydCBHZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YWJhc2UvZ2V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvYXV0aDAtcmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZVwiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2xvZ291dFwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvc3RhdGVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IGRhdGFCYXNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YWJhc2UvY29uZmlnXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSAgID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjYXJkLCBzZXRDYXJkXSA9IHVzZVN0YXRlKFt7bmFtZTogXCJSZWNldGFcIiwgdHlwZTogXCJQYXN0ZWxcIn0sXSk7XG4gICAgXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGF0YUJhc2UsIFwicmVjaXBlXCIpKTtcblxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICBzZXRDYXJkKCBjYXJkID0+IFsuLi5jYXJkLCBkb2MuZGF0YSgpXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGgwUHJvdmlkZXIgZG9tYWluPVwiZGV2LWRvdTh3bXhjLnVzLmF1dGgwLmNvbVwiIGNsaWVudElkPVwiUFhXcnN4UVVrR1VqenhZZzdGTlVqSE91WVZXdzZhcjhcIiByZWRpcmVjdFVyaT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiA+XG4gICAgICAgICAgICA8ZGl2IG9uTG9hZD17bG9hZH0gPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RmVlZDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGZWVkIHBhZ2UgZnJvbSB0aGUgYXBwbGljYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwicGx1c1wiID4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxNSwgMTUsIDE1LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiMzMzbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDAsIDAsIDApXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNTB2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT54PC9DbG9zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0ZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxHZXQgc3RhdGU9e2NhcmR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlY2VweSBlcyB1biBwcm95ZWN0byBkZSBlc3R1ZGlhbnRlcywgZW4gZXN0ZSBwcm95ZWN0byBzZSBwcmFjdGljYW4gY29uY2VwdG9zIGNvbW8gbGEgQmFzZSBkZSBEYXRvcyB5IGxhIGdlc3Rpb24gZGUgVXN1cmFpb3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVuIGVzdGUgcHJveWVjdG8gc2UgdXNhcm9uIHRlY25vbG9naWFzIGNvbW8gTmV4dEpzLCBGaXJlYmFzZSwgR2l0SHViLCBWZXJjZWwsIEF1dGgwIHkgR2l0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0LXNjbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9naXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2ZpcmViYXNlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9uZXh0SnMuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXV0aDAuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD1cImZpbGxcIiBzcmM9XCIvYXV0aDAucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2dpdEh1Yi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2kgcXVpZXJlcyBlbnZpYXIgYWxndW5hIHN1Z2VyZW5jaWEgbyBxdWVqYSBzb2JyZSBsYSBhcGxpY2FjaW9uLCBsbyBwdWVkZXMgaGFjZXIgYWwgc2lndWllbnRlIGNvcnJlbyA6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL21haWwuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+cHJveWVjdHplbmFAZ21haWwuY29tPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0F1dGgwUHJvdmlkZXI+ICAgICAgICAgXG4gICAgKTtcbn07XG5cbmNvbnN0IE5hdiA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLnBsdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoMTAwLCAxMDAsIDEwMCk7XG4gICAgICAgIHRyYW5zaXRpb246IDMzM21zO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBDbG9zZSA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAzMzNtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgfVxuYDsgXG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICBJbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMzNtcztcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7Il0sIm5hbWVzIjpbIkFkZCIsIkdldCIsIkhlYWQiLCJzdHlsZWQiLCJBdXRoMFByb3ZpZGVyIiwiUHJvZmlsZSIsIkxvZ291dCIsIlN0YXRlIiwiTG9naW4iLCJ1c2VTdGF0ZSIsIlJlYWN0TW9kYWwiLCJMaW5rIiwiZGF0YUJhc2UiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIkltYWdlIiwiRmVlZCIsImlzT3BlbiIsInNldElzT3BlbiIsIm5hbWUiLCJ0eXBlIiwiY2FyZCIsInNldENhcmQiLCJsb2FkIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiZGF0YSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250ZW50IiwidHJhbnNpdGlvbiIsIm1hcmdpbiIsImJvcmRlciIsImNvbG9yIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIk5hdiIsImRpdiIsIkNsb3NlIiwiYnV0dG9uIiwiRm9vdGVyIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==