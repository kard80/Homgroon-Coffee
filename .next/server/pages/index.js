module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/body.js":
/*!***********************************!*\
  !*** ./components/layout/body.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/layout.module.css */ \"./styles/layout/layout.module.css\");\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kardsahaphong/Desktop/Coding/Mine/homgroon-coffee/components/layout/body.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst body = ({\n  content\n}) => {\n  return __jsx(\"section\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, content);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (body);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9ib2R5LmpzPzMwOWUiXSwibmFtZXMiOlsiYm9keSIsImNvbnRlbnQiLCJTdHlsZSIsInNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDeEIsU0FDSTtBQUFTLGFBQVMsRUFBRUMsdUVBQUssQ0FBQ0MsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixPQURMLENBREo7QUFLSCxDQU5EOztBQVFlRCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2JvZHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcydcblxuY29uc3QgYm9keSA9ICh7Y29udGVudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlLnNlY3Rpb259PlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/body.js\n");

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./components/layout/navbar.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body */ \"./components/layout/body.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ \"./components/layout/sidebar.js\");\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/layout/layout.module.css */ \"./styles/layout/layout.module.css\");\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/kardsahaphong/Desktop/Coding/Mine/homgroon-coffee/components/layout/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Layout(props) {\n  const {\n    0: isSidebar,\n    1: setIsSidebar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const dropOpacity = isSidebar ? {\n    opacity: \"30%\"\n  } : {};\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Homgroon coffee\")), __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isSidebar: isSidebar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    style: dropOpacity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isSidebar: isSidebar,\n    setIsSidebar: setIsSidebar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  })), __jsx(_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: props.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz9hMjQxIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiaXNTaWRlYmFyIiwic2V0SXNTaWRlYmFyIiwidXNlU3RhdGUiLCJkcm9wT3BhY2l0eSIsIm9wYWNpdHkiLCJTdHlsZSIsImJvZHkiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNwQyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1DLFdBQVcsR0FBR0gsU0FBUyxHQUFHO0FBQUVJLFdBQU8sRUFBRTtBQUFYLEdBQUgsR0FBdUIsRUFBcEQ7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVDLHVFQUFLLENBQUNDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQVMsYUFBUyxFQUFFTixTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFRTtBQUFLLFNBQUssRUFBRUcsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFRLGFBQVMsRUFBRUgsU0FBbkI7QUFBOEIsZ0JBQVksRUFBRUMsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFLRSxNQUFDLDZDQUFEO0FBQU0sV0FBTyxFQUFFRixLQUFLLENBQUNRLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQU5GLENBREY7QUFnQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5J1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIGNvbnN0IFtpc1NpZGViYXIsIHNldElzU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZHJvcE9wYWNpdHkgPSBpc1NpZGViYXIgPyB7IG9wYWNpdHk6IFwiMzAlXCJ9IDoge31cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8dGl0bGU+SG9tZ3Jvb24gY29mZmVlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvZHl9PlxuICAgICAgICAgIDxTaWRlYmFyIGlzU2lkZWJhcj17aXNTaWRlYmFyfSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXtkcm9wT3BhY2l0eX0+XG4gICAgICAgICAgPE5hdmJhciBpc1NpZGViYXI9e2lzU2lkZWJhcn0gc2V0SXNTaWRlYmFyPXtzZXRJc1NpZGViYXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Qm9keSBjb250ZW50PXtwcm9wcy5jaGlsZHJlbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/index.js\n");

/***/ }),

/***/ "./components/layout/navbar.js":
/*!*************************************!*\
  !*** ./components/layout/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/layout.module.css */ \"./styles/layout/layout.module.css\");\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kardsahaphong/Desktop/Coding/Mine/homgroon-coffee/components/layout/navbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Navbar = ({\n  isSidebar,\n  setIsSidebar\n}) => {\n  return __jsx(\"nav\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftSection,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 21\n    }\n  }, \"Homgroon\")), __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rightSection,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    onClick: () => setIsSidebar(!isSidebar),\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: `${_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon} ${isSidebar ? _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconSwitch1 : null}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  }), __jsx(\"div\", {\n    className: `${_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon} ${isSidebar ? _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconSwitch2 : null}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 25\n    }\n  }), __jsx(\"div\", {\n    className: `${_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon} ${isSidebar ? _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconSwitch3 : null}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIuanM/Y2Y1NSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJpc1NpZGViYXIiLCJzZXRJc1NpZGViYXIiLCJTdHlsZSIsIm5hdmJhciIsInNlY3Rpb24iLCJsZWZ0U2VjdGlvbiIsInJpZ2h0U2VjdGlvbiIsImhhbWJ1cmdlciIsImljb24iLCJpY29uU3dpdGNoMSIsImljb25Td2l0Y2gyIiwiaWNvblN3aXRjaDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUFpQztBQUM1QyxTQUNJO0FBQUssYUFBUyxFQUFFQyx1RUFBSyxDQUFDQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVELHVFQUFLLENBQUNFLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUYsdUVBQUssQ0FBQ0csV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFFSCx1RUFBSyxDQUFDSSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxXQUFPLEVBQUUsTUFBTUwsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBaEM7QUFBOEMsYUFBUyxFQUFFRSx1RUFBSyxDQUFDSyxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUcsR0FBRUwsdUVBQUssQ0FBQ00sSUFBSyxJQUFHUixTQUFTLEdBQUdFLHVFQUFLLENBQUNPLFdBQVQsR0FBdUIsSUFBSyxFQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRyxHQUFFUCx1RUFBSyxDQUFDTSxJQUFLLElBQUdSLFNBQVMsR0FBR0UsdUVBQUssQ0FBQ1EsV0FBVCxHQUF1QixJQUFLLEVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFHLEdBQUVSLHVFQUFLLENBQUNNLElBQUssSUFBR1IsU0FBUyxHQUFHRSx1RUFBSyxDQUFDUyxXQUFULEdBQXVCLElBQUssRUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosQ0FKSixDQURKLENBREo7QUFnQkgsQ0FqQkQ7O0FBbUJlWixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcydcblxuXG5jb25zdCBOYXZiYXIgPSAoeyBpc1NpZGViYXIsIHNldElzU2lkZWJhciB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e1N0eWxlLm5hdmJhcn0gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZWZ0U2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ib21ncm9vbjwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnJpZ2h0U2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyKCFpc1NpZGViYXIpfSBjbGFzc05hbWU9e1N0eWxlLmhhbWJ1cmdlcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLmljb259ICR7aXNTaWRlYmFyID8gU3R5bGUuaWNvblN3aXRjaDEgOiBudWxsfWB9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5pY29ufSAke2lzU2lkZWJhciA/IFN0eWxlLmljb25Td2l0Y2gyIDogbnVsbH1gfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5pY29ufSAke2lzU2lkZWJhciA/IFN0eWxlLmljb25Td2l0Y2gzIDogbnVsbH1gfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/navbar.js\n");

/***/ }),

/***/ "./components/layout/sidebar.js":
/*!**************************************!*\
  !*** ./components/layout/sidebar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/layout.module.css */ \"./styles/layout/layout.module.css\");\n/* harmony import */ var _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kardsahaphong/Desktop/Coding/Mine/homgroon-coffee/components/layout/sidebar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Sidebar = ({\n  isSidebar\n}) => {\n  const fading = isSidebar ? {\n    width: \"80vw\"\n  } : {\n    width: \"0px\"\n  };\n  return __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar,\n    style: fading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_layout_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 21\n    }\n  }, \"Home\"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, \"Menu\"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, \"Delivery\"), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }, \"Contact\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyLmpzPzQ2YTAiXSwibmFtZXMiOlsiU2lkZWJhciIsImlzU2lkZWJhciIsImZhZGluZyIsIndpZHRoIiwiU3R5bGUiLCJzaWRlYmFyIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUdBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUM3QixRQUFNQyxNQUFNLEdBQUdELFNBQVMsR0FBRTtBQUFDRSxTQUFLLEVBQUU7QUFBUixHQUFGLEdBQW1CO0FBQUNBLFNBQUssRUFBRTtBQUFSLEdBQTNDO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBRUMsdUVBQUssQ0FBQ0MsT0FBdEI7QUFBK0IsU0FBSyxFQUFFSCxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVFLHVFQUFLLENBQUNFLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixDQURKLENBREosQ0FESjtBQVlILENBZEQ7O0FBZ0JlTixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcydcblxuXG5jb25zdCBTaWRlYmFyID0gKHtpc1NpZGViYXJ9KSA9PiB7XG4gICAgY29uc3QgZmFkaW5nID0gaXNTaWRlYmFyPyB7d2lkdGg6IFwiODB2d1wifToge3dpZHRoOiBcIjBweFwifVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zaWRlYmFyfSBzdHlsZT17ZmFkaW5nfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TWVudTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5EZWxpdmVyeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/sidebar.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.js\");\n/* harmony import */ var _styles_home_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home/home.module.css */ \"./styles/home/home.module.css\");\n/* harmony import */ var _styles_home_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/kardsahaphong/Desktop/Coding/Mine/homgroon-coffee/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home() {\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_home_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.intro,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, \"Homgroon in service\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_home_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJTdHlsZSIsImludHJvIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsbUVBQUssQ0FBQ0MsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FERixFQUtFO0FBQUssYUFBUyxFQUFFRCxtRUFBSyxDQUFDRSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVdEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlcy9ob21lL2hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnRyb30+XG4gICAgICAgICAgPGgxPkhvbWdyb29uIGluIHNlcnZpY2U8L2gxPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZGV0YWlsfT5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/home/home.module.css":
/*!*************************************!*\
  !*** ./styles/home/home.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"intro\": \"home_intro__23Bo9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZS9ob21lLm1vZHVsZS5jc3M/ZTZkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9ob21lL2hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImludHJvXCI6IFwiaG9tZV9pbnRyb19fMjNCbzlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/home/home.module.css\n");

/***/ }),

/***/ "./styles/layout/layout.module.css":
/*!*****************************************!*\
  !*** ./styles/layout/layout.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"body\": \"layout_body__3mNCl\",\n\t\"dropOpacity\": \"layout_dropOpacity__X07lb\",\n\t\"navbar\": \"layout_navbar__3tCXA\",\n\t\"section\": \"layout_section__3ZeRs\",\n\t\"leftSection\": \"layout_leftSection__pdtmI\",\n\t\"rightSection\": \"layout_rightSection__1e-5V\",\n\t\"hamburger\": \"layout_hamburger__2t1sX\",\n\t\"icon\": \"layout_icon__3E4RU\",\n\t\"iconSwitch1\": \"layout_iconSwitch1__1SDMf\",\n\t\"iconSwitch2\": \"layout_iconSwitch2__3ZOLT\",\n\t\"iconSwitch3\": \"layout_iconSwitch3__b3pel\",\n\t\"sidebar\": \"layout_sidebar__z4q0P\",\n\t\"container\": \"layout_container__bnrlt\",\n\t\"fadeIn\": \"layout_fadeIn__1J8BX\",\n\t\"fadeOut\": \"layout_fadeOut__3WPlw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUuY3NzP2U4NWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJsYXlvdXRfYm9keV9fM21OQ2xcIixcblx0XCJkcm9wT3BhY2l0eVwiOiBcImxheW91dF9kcm9wT3BhY2l0eV9fWDA3bGJcIixcblx0XCJuYXZiYXJcIjogXCJsYXlvdXRfbmF2YmFyX18zdENYQVwiLFxuXHRcInNlY3Rpb25cIjogXCJsYXlvdXRfc2VjdGlvbl9fM1plUnNcIixcblx0XCJsZWZ0U2VjdGlvblwiOiBcImxheW91dF9sZWZ0U2VjdGlvbl9fcGR0bUlcIixcblx0XCJyaWdodFNlY3Rpb25cIjogXCJsYXlvdXRfcmlnaHRTZWN0aW9uX18xZS01VlwiLFxuXHRcImhhbWJ1cmdlclwiOiBcImxheW91dF9oYW1idXJnZXJfXzJ0MXNYXCIsXG5cdFwiaWNvblwiOiBcImxheW91dF9pY29uX18zRTRSVVwiLFxuXHRcImljb25Td2l0Y2gxXCI6IFwibGF5b3V0X2ljb25Td2l0Y2gxX18xU0RNZlwiLFxuXHRcImljb25Td2l0Y2gyXCI6IFwibGF5b3V0X2ljb25Td2l0Y2gyX18zWk9MVFwiLFxuXHRcImljb25Td2l0Y2gzXCI6IFwibGF5b3V0X2ljb25Td2l0Y2gzX19iM3BlbFwiLFxuXHRcInNpZGViYXJcIjogXCJsYXlvdXRfc2lkZWJhcl9fejRxMFBcIixcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX19ibnJsdFwiLFxuXHRcImZhZGVJblwiOiBcImxheW91dF9mYWRlSW5fXzFKOEJYXCIsXG5cdFwiZmFkZU91dFwiOiBcImxheW91dF9mYWRlT3V0X18zV1Bsd1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/layout/layout.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });