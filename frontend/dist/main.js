/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/home.js":
/*!*************************!*\
  !*** ./scripts/home.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nclass Home {\r\n    constructor() {\r\n        this.showGraphics();\r\n    }\r\n\r\n    static showGraphics(){\r\n\r\n        const plusGrpaphic = document.getElementById('plusGraphic');\r\n        const plusGraphicdata = {\r\n            labels: [\r\n                'Red',\r\n                'Blue',\r\n                'Yellow',\r\n                'Green',\r\n                'Orange',\r\n            ],\r\n            datasets: [{\r\n                label: 'My First Dataset',\r\n                data: [300, 50, 100,50,400],\r\n                backgroundColor: [\r\n                    'rgb(255, 99, 132)',\r\n                    'rgb(54, 162, 235)',\r\n                    'rgb(255, 205, 86)',\r\n                    'rgba(32, 201, 151,1)',\r\n                    'rgba(253, 126, 20, 1)',\r\n\r\n                ],\r\n                hoverOffset: 4\r\n            }]\r\n        };\r\n\r\n        new Chart(plusGrpaphic, {\r\n            type: 'pie',\r\n            data: plusGraphicdata,\r\n        });\r\n\r\n        const minusGraphic = document.getElementById('minusGraphic');\r\n        const minusGraphicData = {\r\n            labels: [\r\n                'Red',\r\n                'Blue',\r\n                'Yellow',\r\n                'Green',\r\n                'Orange',\r\n            ],\r\n            datasets: [{\r\n                label: 'My First Dataset',\r\n                data: [300, 50, 100,50,400],\r\n                backgroundColor: [\r\n                    'rgb(255, 99, 132)',\r\n                    'rgb(54, 162, 235)',\r\n                    'rgb(255, 205, 86)',\r\n                    'rgba(32, 201, 151,1)',\r\n                    'rgba(253, 126, 20, 1)',\r\n\r\n                ],\r\n                hoverOffset: 4\r\n            }]\r\n        };\r\n\r\n        new Chart(minusGraphic, {\r\n            type: 'pie',\r\n            data: minusGraphicData,\r\n        });\r\n    };\r\n}\n\n//# sourceURL=webpack://frontend/./scripts/home.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/burger.js */ \"./src/utils/burger.js\");\n/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/home.js */ \"./scripts/home.js\");\n/* harmony import */ var _utils_pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/pop-up.js */ \"./src/utils/pop-up.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_3__.Router();\r\n        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_3__.Router();\r\n        window.addEventListener('popstate', this.handleRouteChanging.bind(this));\r\n        // PopUp.show();\r\n        // PopUp.deleteOperation();\r\n        // Burger.showBurger();\r\n        // Home.showGraphics();\r\n    }\r\n    handleRouteChanging(){\r\n        this.router.openRoute();\r\n    }\r\n}\r\n(new App());\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

/***/ "./src/componets/form.js":
/*!*******************************!*\
  !*** ./src/componets/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n    constructor(page) {\r\n        this.page = page;\r\n        this.fields = [\r\n            {\r\n                name: 'fullName',\r\n                id: 'fullName',\r\n                element: null,\r\n                regex: /^[А-Я][а-я]+\\s*[А-Я][а-я]+\\s*$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'email',\r\n                id: 'email',\r\n                element: null,\r\n                regex: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'password',\r\n                id: 'password',\r\n                element: null,\r\n                regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'acceptPassword',\r\n                id: 'acceptPassword',\r\n                element: null,\r\n                regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'agreeElement',\r\n                id: 'agreeElement',\r\n                element: null,\r\n                valid: true,\r\n            },\r\n        ];\r\n\r\n\r\n        this.checkboxElement = document.getElementById('checkboxElement');\r\n        this.checkboxElement.style.display = 'none';\r\n        this.processElement = document.getElementById('process');\r\n        this.processElement.onclick = function () {\r\n            // that.processForm();\r\n            alert('Работает')\r\n        }\r\n\r\n        const that = this;\r\n        this.fields.forEach(item => {\r\n            item.element = document.getElementById(item.id);\r\n            item.element.onchange = function () {\r\n                that.validateField.call(that, item, this)\r\n            }\r\n        })\r\n\r\n        if (this.page === 'login'){\r\n            delete this.fields[0];\r\n            delete this.fields[3];\r\n            this.checkboxElement.style.display = 'block';\r\n            document.getElementById('itemFullName').style.display = 'none';\r\n            document.getElementById('itemAcceptPassword').style.display = 'none';\r\n        }\r\n\r\n    }\r\n\r\n    validateField(field,element){\r\n        if (!element.value || !element.value.match(field.regex)) {\r\n            element.parentNode.classList.remove('border-secondary-subtle');\r\n            element.parentNode.classList.add('border-danger');\r\n            field.valid = false;\r\n        } else {\r\n            element.parentNode.classList.remove('border-danger');\r\n            element.parentNode.classList.add('border-secondary-subtle');\r\n            field.valid = true;\r\n        }\r\n        this.validateForm();\r\n    };\r\n\r\n    validateForm() {\r\n        const validForm = this.fields.every(item => item.valid);\r\n\r\n        if (validForm) {\r\n            this.processElement.removeAttribute('disabled');\r\n        } else {\r\n            this.processElement.setAttribute('disabled', 'disabled');\r\n        }\r\n        return validForm;\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/componets/form.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _componets_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componets/form */ \"./src/componets/form.js\");\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.stylesElement = document.getElementById('styles');\r\n        this.pageTitleElement = document.getElementById('page-title');\r\n        this.routes = [\r\n            {\r\n                router: '',\r\n                title: 'Регистрация',\r\n                template: 'index.html',\r\n                styles: 'styles/index.css',\r\n                load: () => {\r\n                    new _componets_form__WEBPACK_IMPORTED_MODULE_0__.Form('signin');\r\n                },\r\n            },\r\n            {\r\n                router: '#/',\r\n                title: 'Finance',\r\n                template: 'index.html',\r\n                styles: 'styles/index.css',\r\n                load: () => {\r\n                    new _componets_form__WEBPACK_IMPORTED_MODULE_0__.Form('signin');\r\n                },\r\n            },\r\n            {\r\n                router: '#/login',\r\n                title: 'Войти',\r\n                template: 'index.html',\r\n                styles: 'styles/index.css',\r\n                load: () => {\r\n                    new _componets_form__WEBPACK_IMPORTED_MODULE_0__.Form('login');\r\n                },\r\n            },\r\n        ];\r\n    }\r\n\r\n    openRoute(){\r\n\r\n        const newRoute = this.routes.find(item => {\r\n            return item.router === window.location.hash;\r\n        })\r\n        this.stylesElement.setAttribute('href', newRoute.styles);\r\n        this.pageTitleElement.innerText = newRoute.title;\r\n        newRoute.load();\r\n    };\r\n}\n\n//# sourceURL=webpack://frontend/./src/router.js?");

/***/ }),

/***/ "./src/utils/burger.js":
/*!*****************************!*\
  !*** ./src/utils/burger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Burger: () => (/* binding */ Burger)\n/* harmony export */ });\nclass Burger {\r\n    static showBurger(){\r\n        document.getElementById('burger').onclick = function (){\r\n            document.getElementById('sidebar').classList.toggle('sidebar--show');\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/utils/burger.js?");

/***/ }),

/***/ "./src/utils/pop-up.js":
/*!*****************************!*\
  !*** ./src/utils/pop-up.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PopUp: () => (/* binding */ PopUp)\n/* harmony export */ });\nclass PopUp {\r\n    static show() {\r\n        const popUp = document.getElementById('popUp');\r\n        const buttons = document.getElementsByClassName('deleteCategory');\r\n        const closePopUp = document.getElementById('cancel');\r\n        for (let i = 0; i < buttons.length ; i++) {\r\n            buttons[i].onclick = function () {\r\n                popUp.classList.add('active');\r\n                closePopUp.onclick = function () {\r\n                    popUp.classList.remove('active');\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    static deleteOperation() {\r\n        const popUp = document.getElementById('popUp');\r\n        const buttons = document.getElementsByClassName('delete-operation');\r\n        const closePopUp = document.getElementById('cancel');\r\n        for (let i = 0; i < buttons.length ; i++) {\r\n            buttons[i].onclick = function () {\r\n                popUp.classList.add('active');\r\n                closePopUp.onclick = function () {\r\n                    popUp.classList.remove('active');\r\n                }\r\n            }\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/pop-up.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;