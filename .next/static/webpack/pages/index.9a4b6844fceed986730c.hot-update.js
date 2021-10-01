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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWE0YjY4NDRmY2VlZDk4NjczMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixrQkFBOEJQLGdEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9RLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QlQsZ0RBQVEsQ0FBQyxDQUFDO0FBQUNVLElBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCQyxJQUFBQSxJQUFJLEVBQUU7QUFBdkIsR0FBRCxDQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsSUFBSTtBQUFBLHlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRFM7QUFBQSxxQkFFbUJYLDREQUFPLENBQUNELCtEQUFVLENBQUNELGtFQUFELEVBQVcsUUFBWCxDQUFYLENBRjFCOztBQUFBO0FBRUhjLGNBQUFBLGFBRkc7QUFJVEEsY0FBQUEsYUFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQUFDLEdBQUcsRUFBSTtBQUMzQk4sZ0JBQUFBLE9BQU8sQ0FBRSxVQUFBRCxJQUFJO0FBQUEseUtBQVFBLElBQVIsSUFBY08sR0FBRyxDQUFDQyxJQUFKLEVBQWQ7QUFBQSxpQkFBTixDQUFQO0FBQ0QsZUFGRDs7QUFKUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFKTixJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBU0Esc0JBQ0ksK0RB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QTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQTBCSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBRyxnQkFBSSxFQUFDLDBCQUFSO0FBQW1DLGtCQUFNLEVBQUMsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEVILENBdkZEOztHQUFNTDs7S0FBQUE7QUF5Rk4sSUFBTXVCLEdBQUcsR0FBR3BDLDJEQUFILDJnQ0FBVDtNQUFNb0M7QUF1Q04sSUFBTUUsS0FBSyxHQUFHdEMsOERBQUgscWxCQUFYO01BQU1zQztBQW9CTixJQUFNRSxNQUFNLEdBQUd4Qyw4REFBSCxnakNBQVo7TUFBTXdDO0FBOENOLCtEQUFlM0IsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhYmFzZS9hZGRcIjtcbmltcG9ydCBHZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YWJhc2UvZ2V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvYXV0aDAtcmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZVwiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2xvZ291dFwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvc3RhdGVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IGRhdGFCYXNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YWJhc2UvY29uZmlnXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgRmVlZCA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dICAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoW3tuYW1lOiBcIlJlY2V0YVwiLCB0eXBlOiBcIlBhc3RlbFwifSxdKTtcbiAgICBcbiAgICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYXRhQmFzZSwgXCJyZWNpcGVcIikpO1xuXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgIHNldENhcmQoIGNhcmQgPT4gWy4uLmNhcmQsIGRvYy5kYXRhKCldKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aDBQcm92aWRlciBkb21haW49XCJkZXYtZG91OHdteGMudXMuYXV0aDAuY29tXCIgY2xpZW50SWQ9XCJQWFdyc3hRVWtHVWp6eFlnN0ZOVWpIT3VZVld3NmFyOFwiIHJlZGlyZWN0VXJpPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiID5cbiAgICAgICAgICAgIDxkaXYgb25Mb2FkPXtsb2FkfSA+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5GZWVkPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZlZWQgcGFnZSBmcm9tIHRoZSBhcHBsaWNhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJwbHVzXCIgPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNb2RhbCBpc09wZW49e2lzT3Blbn0gb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDE1LCAxNSwgMTUsIDAuNSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCIzMzNtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMCwgMCwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI1MHZ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9Png8L0Nsb3NlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgICAgPEdldCBzdGF0ZT17Y2FyZH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVjZXB5IGVzIHVuIHByb3llY3RvIGRlIGVzdHVkaWFudGVzLCBlbiBlc3RlIHByb3llY3RvIHNlIHByYWN0aWNhbiBjb25jZXB0b3MgY29tbyBsYSBCYXNlIGRlIERhdG9zIHkgbGEgZ2VzdGlvbiBkZSBVc3VyYWlvczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW4gZXN0ZSBwcm95ZWN0byBzZSB1c2Fyb24gdGVjbm9sb2dpYXMgY29tbyBOZXh0SnMsIEZpcmViYXNlLCBHaXRIdWIsIFZlcmNlbCwgQXV0aDAgeSBHaXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXQtc2NtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2dpdC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD1cImZpbGxcIiBzcmM9XCIvZmlyZWJhc2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL25leHRKcy5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hdXRoMC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9hdXRoMC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD1cImZpbGxcIiBzcmM9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD1cImZpbGxcIiBzcmM9XCIvZ2l0SHViLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TaSBxdWllcmVzIGVudmlhciBhbGd1bmEgc3VnZXJlbmNpYSBvIHF1ZWphIHNvYnJlIGxhIGFwbGljYWNpb24sIGxvIHB1ZWRlcyBoYWNlciBhbCBzaWd1aWVudGUgY29ycmVvIDogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFpbC5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiID5wcm95ZWN0emVuYUBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQXV0aDBQcm92aWRlcj4gICAgICAgICBcbiAgICApO1xufTtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAucGx1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYigxMDAsIDEwMCwgMTAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMzMzbXM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IENsb3NlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDMzM21zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB9XG5gOyBcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDUwcHg7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIEltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMzM21zO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDsiXSwibmFtZXMiOlsiQWRkIiwiR2V0IiwiSGVhZCIsInN0eWxlZCIsIkF1dGgwUHJvdmlkZXIiLCJQcm9maWxlIiwiTG9nb3V0IiwiU3RhdGUiLCJMb2dpbiIsInVzZVN0YXRlIiwiUmVhY3RNb2RhbCIsIkxpbmsiLCJkYXRhQmFzZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiSW1hZ2UiLCJGZWVkIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibmFtZSIsInR5cGUiLCJjYXJkIiwic2V0Q2FyZCIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJkYXRhIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJ0cmFuc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyIiwiY29sb3IiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiTmF2IiwiZGl2IiwiQ2xvc2UiLCJidXR0b24iLCJGb290ZXIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9