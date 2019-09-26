/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_helpers__ = __webpack_require__(/*! ./modules/helpers */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_form_validation__ = __webpack_require__(/*! ./modules/form-validation */ 2);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  let phoneItl = Object(__WEBPACK_IMPORTED_MODULE_0__modules_helpers__[\"b\" /* initIntlTelInput */])(document.querySelector('[type=tel]'));\n  const $inputName = document.querySelector('#age');\n\n  Object(__WEBPACK_IMPORTED_MODULE_1__modules_form_validation__[\"b\" /* setInputFilter */])($inputName, function (value) {\n    return /^\\d*\\.?\\d*$/.test(value);\n  });\n\n  initSubmitForm(phoneItl);\n});\n\nfunction initSubmitForm(phoneIti) {\n  document.querySelector('.js-create-order-submit').addEventListener('click', function () {\n    const $inputPhone = document.querySelector('[type=tel]');\n    const $inputEmail = document.querySelector('[type=email]');\n\n    if (Object(__WEBPACK_IMPORTED_MODULE_0__modules_helpers__[\"a\" /* getUrlParams */])().clinicId) {\n      alert(`clinicId: ${Object(__WEBPACK_IMPORTED_MODULE_0__modules_helpers__[\"a\" /* getUrlParams */])().clinicId}`);\n    }\n\n    if (phoneIti.isValidNumber($inputPhone.value)) {\n      alert('is valid number');\n    } else {\n      alert('not valid number');\n    }\n\n    if (!Object(__WEBPACK_IMPORTED_MODULE_1__modules_form_validation__[\"a\" /* emailIsValid */])($inputEmail.value)) {\n      alert('not valid email');\n    } else {\n      alert('email is valid');\n    }\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFVybFBhcmFtcywgaW5pdEludGxUZWxJbnB1dCB9IGZyb20gICcuL21vZHVsZXMvaGVscGVycyc7XG5pbXBvcnQgeyBlbWFpbElzVmFsaWQsIHNldElucHV0RmlsdGVyIH0gZnJvbSAgJy4vbW9kdWxlcy9mb3JtLXZhbGlkYXRpb24nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgbGV0IHBob25lSXRsID0gaW5pdEludGxUZWxJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT10ZWxdJykpO1xuICBjb25zdCAkaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FnZScpO1xuXG4gIHNldElucHV0RmlsdGVyKCRpbnB1dE5hbWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAvXlxcZCpcXC4/XFxkKiQvLnRlc3QodmFsdWUpO1xuICB9KTtcblxuICBpbml0U3VibWl0Rm9ybShwaG9uZUl0bCk7XG59KTtcblxuZnVuY3Rpb24gaW5pdFN1Ym1pdEZvcm0ocGhvbmVJdGkpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNyZWF0ZS1vcmRlci1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCAkaW5wdXRQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPXRlbF0nKTtcbiAgICBjb25zdCAkaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPWVtYWlsXScpO1xuXG4gICAgaWYgKGdldFVybFBhcmFtcygpLmNsaW5pY0lkKSB7XG4gICAgICBhbGVydChgY2xpbmljSWQ6ICR7Z2V0VXJsUGFyYW1zKCkuY2xpbmljSWR9YCk7XG4gICAgfVxuXG4gICAgaWYgKHBob25lSXRpLmlzVmFsaWROdW1iZXIoJGlucHV0UGhvbmUudmFsdWUpKSB7XG4gICAgICBhbGVydCgnaXMgdmFsaWQgbnVtYmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdub3QgdmFsaWQgbnVtYmVyJyk7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbElzVmFsaWQoJGlucHV0RW1haWwudmFsdWUpKSB7XG4gICAgICBhbGVydCgnbm90IHZhbGlkIGVtYWlsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdlbWFpbCBpcyB2YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/*! exports provided: getUrlParams, initIntlTelInput */
/*! exports used: getUrlParams, initIntlTelInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getUrlParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return initIntlTelInput; });\nconst getUrlParams = () => {\n  let params = {};\n  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {\n    params[key] = value;\n  });\n  return params;\n}\nconst initIntlTelInput = elemDOM => {\n  const defaultCountry = localStorage.getItem('countryIso') || 'ua';\n  const setInputMask = mask => {\n    let im = new window.Inputmask(mask.replace(/[0-9]/g, \"9\"));\n    im.mask(elemDOM);\n  }\n  let iti = window.intlTelInput(elemDOM, {\n    initialCountry: defaultCountry,\n    preferredCountries: ['ua', 'ru', 'by', 'kz'],\n    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.2/js/utils.js',\n    separateDialCode: true,\n    customPlaceholder: selectedCountryPlaceholder => selectedCountryPlaceholder.replace(/[0-9]/g, \"0\")\n  });\n  iti.promise.then(() => {\n    setInputMask(elemDOM.placeholder);\n  });\n  elemDOM.addEventListener(\"countrychange\", () => {\n    setInputMask(elemDOM.placeholder);\n    localStorage.setItem('countryIso', iti.getSelectedCountryData().iso2.toUpperCase());\n  });\n  return iti;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanM/ZWY1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRVcmxQYXJhbXMgPSAoKSA9PiB7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCAobSwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHBhcmFtc1trZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcGFyYW1zO1xufVxuY29uc3QgaW5pdEludGxUZWxJbnB1dCA9IGVsZW1ET00gPT4ge1xuICBjb25zdCBkZWZhdWx0Q291bnRyeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudHJ5SXNvJykgfHwgJ3VhJztcbiAgY29uc3Qgc2V0SW5wdXRNYXNrID0gbWFzayA9PiB7XG4gICAgbGV0IGltID0gbmV3IHdpbmRvdy5JbnB1dG1hc2sobWFzay5yZXBsYWNlKC9bMC05XS9nLCBcIjlcIikpO1xuICAgIGltLm1hc2soZWxlbURPTSk7XG4gIH1cbiAgbGV0IGl0aSA9IHdpbmRvdy5pbnRsVGVsSW5wdXQoZWxlbURPTSwge1xuICAgIGluaXRpYWxDb3VudHJ5OiBkZWZhdWx0Q291bnRyeSxcbiAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFsndWEnLCAncnUnLCAnYnknLCAna3onXSxcbiAgICB1dGlsc1NjcmlwdDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ludGwtdGVsLWlucHV0LzE2LjAuMi9qcy91dGlscy5qcycsXG4gICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICBjdXN0b21QbGFjZWhvbGRlcjogc2VsZWN0ZWRDb3VudHJ5UGxhY2Vob2xkZXIgPT4gc2VsZWN0ZWRDb3VudHJ5UGxhY2Vob2xkZXIucmVwbGFjZSgvWzAtOV0vZywgXCIwXCIpXG4gIH0pO1xuICBpdGkucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBzZXRJbnB1dE1hc2soZWxlbURPTS5wbGFjZWhvbGRlcik7XG4gIH0pO1xuICBlbGVtRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3VudHJ5Y2hhbmdlXCIsICgpID0+IHtcbiAgICBzZXRJbnB1dE1hc2soZWxlbURPTS5wbGFjZWhvbGRlcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50cnlJc28nLCBpdGkuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpLmlzbzIudG9VcHBlckNhc2UoKSk7XG4gIH0pO1xuICByZXR1cm4gaXRpO1xufVxuXG5leHBvcnQge1xuICBnZXRVcmxQYXJhbXMsXG4gIGluaXRJbnRsVGVsSW5wdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2hlbHBlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./src/modules/form-validation.js ***!
  \****************************************/
/*! exports provided: emailIsValid, setInputFilter */
/*! exports used: emailIsValid, setInputFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return emailIsValid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return setInputFilter; });\nconst emailIsValid = email => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)\nconst setInputFilter = (inputField, inputFilter) => {\n  [\"input\", \"keydown\", \"keyup\", \"mousedown\", \"mouseup\", \"select\", \"contextmenu\", \"drop\"].forEach(function (event) {\n    inputField.addEventListener(event, function () {\n      if (inputFilter(this.value)) {\n        this.oldValue = this.value;\n        this.oldSelectionStart = this.selectionStart;\n        this.oldSelectionEnd = this.selectionEnd;\n      } else if (this.hasOwnProperty(\"oldValue\")) {\n        this.value = this.oldValue;\n        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);\n      }\n    });\n  });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Zvcm0tdmFsaWRhdGlvbi5qcz84MmM4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtYWlsSXNWYWxpZCA9IGVtYWlsID0+IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpXG5jb25zdCBzZXRJbnB1dEZpbHRlciA9IChpbnB1dEZpZWxkLCBpbnB1dEZpbHRlcikgPT4ge1xuICBbXCJpbnB1dFwiLCBcImtleWRvd25cIiwgXCJrZXl1cFwiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJzZWxlY3RcIiwgXCJjb250ZXh0bWVudVwiLCBcImRyb3BcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbnB1dEZpbHRlcih0aGlzLnZhbHVlKSkge1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5vbGRTZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMub2xkU2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25FbmQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvbGRWYWx1ZVwiKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vbGRWYWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLm9sZFNlbGVjdGlvblN0YXJ0LCB0aGlzLm9sZFNlbGVjdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBlbWFpbElzVmFsaWQsXG4gIHNldElucHV0RmlsdGVyXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2Zvcm0tdmFsaWRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);