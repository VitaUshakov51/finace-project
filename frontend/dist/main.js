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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    host: 'http://localhost:3000/api',\r\n});\n\n//# sourceURL=webpack://frontend/./config/config.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/burger.js */ \"./src/utils/burger.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/home.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _utils_pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/pop-up.js */ \"./src/utils/pop-up.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_3__.Router();\r\n        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_3__.Router();\r\n        window.addEventListener('popstate', this.handleRouteChanging.bind(this));\r\n        // PopUp.show();\r\n        // PopUp.deleteOperation();\r\n        // Burger.showBurger();\r\n        // Home.showGraphics();\r\n    }\r\n    handleRouteChanging(){\r\n        this.router.openRoute();\r\n    }\r\n}\r\n(new App());\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/custom-http.js */ \"./src/services/custom-http.js\");\n/* harmony import */ var _services_Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Auth.js */ \"./src/services/Auth.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n\r\n\r\n\r\n\r\nclass Login {\r\n    constructor() {\r\n        this.fields = [\r\n            {\r\n                name: 'email',\r\n                id: 'email',\r\n                element: null,\r\n                regex: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'password',\r\n                id: 'password',\r\n                element: null,\r\n                regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'agreeElement',\r\n                id: 'agreeElement',\r\n                element: null,\r\n                remember: false,\r\n                valid: true,\r\n            },\r\n        ];\r\n        this.processElement = document.getElementById('process');\r\n        this.processElement.onclick = function (e) {\r\n            e.preventDefault();\r\n            that.processForm();\r\n        }\r\n\r\n        const that = this;\r\n        this.fields.forEach(item => {\r\n            item.element = document.getElementById(item.id);\r\n            item.element.onchange = function () {\r\n                that.validateField.call(that, item, this)\r\n            }\r\n        })\r\n    }\r\n\r\n    validateField(field, element) {\r\n\r\n        if (!element.value || !element.value.match(field.regex)) {\r\n            element.parentNode.classList.remove('border-secondary-subtle');\r\n            element.parentNode.classList.add('border-danger');\r\n            field.valid = false;\r\n        } else {\r\n            element.parentNode.classList.remove('border-danger');\r\n            element.parentNode.classList.add('border-secondary-subtle');\r\n            field.valid = true;\r\n        }\r\n        this.validateForm();\r\n    };\r\n\r\n    validateForm() {\r\n        const validForm = this.fields.every(item => item.valid);\r\n\r\n        if (validForm) {\r\n            this.processElement.removeAttribute('disabled');\r\n        } else {\r\n            this.processElement.setAttribute('disabled', 'disabled');\r\n        }\r\n        return validForm;\r\n    }\r\n\r\n    async processForm() {\r\n        if (this.validateForm()) {\r\n            try {\r\n                const email = this.fields.find(item => item.name === 'email').element.value;\r\n                const password = this.fields.find(item => item.name === 'password').element.value;\r\n                const rememberMe = this.fields.find(item => item.name === 'agreeElement');\r\n                if (rememberMe.element.checked) {\r\n                    rememberMe.remember = true;\r\n                }\r\n                const result = await _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__.CustomHttp.request(_config_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].host +'/login', 'POST', {\r\n                    email: email,\r\n                    password: password,\r\n                    rememberMe: rememberMe.remember,\r\n                })\r\n                if (result) {\r\n                    if (result.error || !result.tokens || !result.user){\r\n                        throw new Error(result.message)\r\n                    }\r\n                    _services_Auth_js__WEBPACK_IMPORTED_MODULE_1__.Auth.setTokens(result.tokens.accessToken,result.tokens.refreshToken);\r\n                    location.href = '#/home';\r\n                }\r\n            } catch (error) {\r\n                console.log(error)\r\n            }\r\n        }\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/login.js?");

/***/ }),

/***/ "./src/components/signin.js":
/*!**********************************!*\
  !*** ./src/components/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Signin: () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/custom-http.js */ \"./src/services/custom-http.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Auth */ \"./src/services/Auth.js\");\n\r\n\r\n\r\n\r\nclass Signin {\r\n    constructor(page) {\r\n        this.page = page\r\n        this.fields = [\r\n            {\r\n                name: 'fullName',\r\n                id: 'fullName',\r\n                element: null,\r\n                regex: /^[А-Я][а-я]+\\s*[А-Я][а-я]+\\s*$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'email',\r\n                id: 'email',\r\n                element: null,\r\n                regex: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'password',\r\n                id: 'password',\r\n                element: null,\r\n                regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,\r\n                valid: false,\r\n            },\r\n            {\r\n                name: 'acceptPassword',\r\n                id: 'acceptPassword',\r\n                element: null,\r\n                regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,\r\n                valid: false,\r\n            },\r\n        ];\r\n\r\n        this.processElement = document.getElementById('process');\r\n        this.processElement.onclick = function (e) {\r\n            e.preventDefault();\r\n            that.processForm();\r\n        }\r\n\r\n        const that = this;\r\n        this.fields.forEach(item => {\r\n            item.element = document.getElementById(item.id);\r\n            item.element.onchange = function () {\r\n                that.validateField.call(that, item, this);\r\n            }\r\n        })\r\n    }\r\n\r\n\r\n    validateField(field, element) {\r\n        if (!element.value || !element.value.match(field.regex)) {\r\n            element.parentNode.classList.remove('border-secondary-subtle');\r\n            element.parentNode.classList.add('border-danger');\r\n            field.valid = false;\r\n        } else {\r\n            element.parentNode.classList.remove('border-danger');\r\n            element.parentNode.classList.add('border-secondary-subtle');\r\n            field.valid = true;\r\n        }\r\n        this.validateForm();\r\n    };\r\n\r\n    checkPassword() {\r\n        const password = this.fields[2].element;\r\n        const acceptPassword = this.fields[3].element;\r\n        if (password.value !== acceptPassword.value) {\r\n            password.parentNode.classList.remove('border-secondary-subtle');\r\n            password.parentNode.classList.add('border-danger');\r\n            password.valid = false;\r\n            acceptPassword.parentNode.classList.remove('border-secondary-subtle');\r\n            acceptPassword.parentNode.classList.add('border-danger');\r\n            acceptPassword.valid = false;\r\n        } else {\r\n            password.parentNode.classList.remove('border-danger');\r\n            password.parentNode.classList.add('border-secondary-subtle');\r\n            password.valid = true;\r\n            acceptPassword.parentNode.classList.remove('border-danger');\r\n            acceptPassword.parentNode.classList.add('border-secondary-subtle');\r\n            acceptPassword.valid = true;\r\n        }\r\n    };\r\n\r\n    validateForm() {\r\n        this.checkPassword();\r\n        const validForm = this.fields.every(item => item.valid);\r\n        if (validForm) {\r\n            this.processElement.removeAttribute('disabled');\r\n        } else {\r\n            this.processElement.setAttribute('disabled', 'disabled');\r\n        }\r\n        return validForm;\r\n    }\r\n\r\n    async processForm() {\r\n        if (this.validateForm()) {\r\n            const fullName = this.fields.find(item => item.name === 'fullName').element.value;\r\n            const fullNameArr = fullName.split(' ');\r\n            const name = fullNameArr[0];\r\n            const lastName = fullNameArr[1];\r\n            const email = this.fields.find(item => item.name === 'email').element.value;\r\n            const password = this.fields.find(item => item.name === 'password').element.value;\r\n            const acceptPassword = this.fields.find(item => item.name === 'acceptPassword').element.value;\r\n            const rememberMe = this.fields.find(item => item.name === 'agreeElement');\r\n            try {\r\n                const result = await _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__.CustomHttp.request(_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].host + '/signup', 'POST', {\r\n                    name: name,\r\n                    lastName: lastName,\r\n                    email: email,\r\n                    password: password,\r\n                    passwordRepeat: acceptPassword,\r\n                })\r\n                if (!result.error) {\r\n                    location.href = '#/home';\r\n                } else {\r\n                    alert(result.message);\r\n                }\r\n            } catch (error) {\r\n                return console.log(error)\r\n            }\r\n            try {\r\n\r\n                const result = await _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__.CustomHttp.request(_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].host + '/login', 'POST', {\r\n                    email: email,\r\n                    password: password,\r\n                    rememberMe: false,\r\n                })\r\n                if (result) {\r\n                    if (result.error || !result.tokens || !result.user) {\r\n                        throw new Error(result.message)\r\n                    }\r\n                    _services_Auth__WEBPACK_IMPORTED_MODULE_2__.Auth.setTokens(result.tokens.accessToken, result.tokens.refreshToken);\r\n                    location.href = '#/home';\r\n                }\r\n            } catch (error) {\r\n                console.log(error)\r\n            }\r\n        }\r\n\r\n    };\r\n\r\n\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/signin.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_signin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signin.js */ \"./src/components/signin.js\");\n/* harmony import */ var _components_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login.js */ \"./src/components/login.js\");\n\r\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.contentElement = document.getElementById('content');\r\n        this.stylesElement = document.getElementById('styles');\r\n        this.pageTitleElement = document.getElementById('page-title');\r\n        this.routes = [\r\n            {\r\n                router: '',\r\n                title: 'Зарегистрироваться',\r\n                template: 'templates/signin.html',\r\n                styles: 'styles/common.css',\r\n                load: () => {\r\n                    new _components_signin_js__WEBPACK_IMPORTED_MODULE_0__.Signin('signin');\r\n                },\r\n            },\r\n            {\r\n                router: '#/',\r\n                title: 'Зарегистрироваться',\r\n                template: 'templates/signin.html',\r\n                styles: 'styles/common.css',\r\n                load: () => {\r\n                    new _components_signin_js__WEBPACK_IMPORTED_MODULE_0__.Signin('signin');\r\n                },\r\n            },\r\n            {\r\n                router: '#/login',\r\n                title: 'Войти',\r\n                template: 'templates/login.html',\r\n                styles: 'styles/common.css',\r\n                load: () => {\r\n                    new _components_login_js__WEBPACK_IMPORTED_MODULE_1__.Login();\r\n                },\r\n            },\r\n            {\r\n                router: '#/signin',\r\n                title: 'Зарегистрироваться',\r\n                template: 'templates/signin.html',\r\n                styles: 'styles/common.css',\r\n                load: () => {\r\n                    new _components_signin_js__WEBPACK_IMPORTED_MODULE_0__.Signin('signin');\r\n                },\r\n            },\r\n            {\r\n                router: '#/home',\r\n                title: 'Главная',\r\n                template: 'templates/home.html',\r\n                styles: 'styles/common.css',\r\n                load: () => {\r\n                },\r\n            },\r\n        ];\r\n    }\r\n\r\n    async openRoute(){\r\n\r\n        const newRoute = this.routes.find(item => {\r\n            return item.router === window.location.hash;\r\n        })\r\n        this.contentElement.innerHTML =\r\n            await fetch(newRoute.template).then(response => response.text());\r\n        this.stylesElement.setAttribute('href', newRoute.styles);\r\n        this.pageTitleElement.innerText = newRoute.title;\r\n        if (!newRoute) {\r\n            window.location.href = '#/';\r\n            return;\r\n        }\r\n        newRoute.load();\r\n    };\r\n}\n\n//# sourceURL=webpack://frontend/./src/router.js?");

/***/ }),

/***/ "./src/services/Auth.js":
/*!******************************!*\
  !*** ./src/services/Auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Auth: () => (/* binding */ Auth)\n/* harmony export */ });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n\r\n\r\nclass Auth {\r\n    static accessTokenKey = 'accessToken';\r\n    static refreshTokenKey = 'refreshToken';\r\n\r\n    static setTokens(accessToken, refreshToken){\r\n        localStorage.setItem(this.accessTokenKey, accessToken);\r\n        localStorage.setItem(this.refreshTokenKey, refreshToken);\r\n\r\n    }\r\n    static removeTokens(){\r\n        localStorage.removeItem(this.accessTokenKey );\r\n        localStorage.removeItem(this.refreshTokenKey);\r\n\r\n    }\r\n\r\n\r\n    static async processUnauthorizedResponse(){\r\n        const refreshToken = localStorage.getItem(this.refreshTokenKey);\r\n        if (refreshToken) {\r\n            const response = await fetch(_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].host + '/refresh', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-type': 'application/json',\r\n                    'Accept': 'application/json',\r\n                },\r\n                body: JSON.stringify({refreshToken:refreshToken}),\r\n            });\r\n\r\n            if (response && response.status === 200) {\r\n                const result = await response.json();\r\n                if (result && !result.error) {\r\n                    this.setTokens(result.tokens.accessToken, result.tokens.refreshToken);\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        this.removeTokens();\r\n        location.href = '#/';\r\n        return false;\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/services/Auth.js?");

/***/ }),

/***/ "./src/services/custom-http.js":
/*!*************************************!*\
  !*** ./src/services/custom-http.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomHttp: () => (/* binding */ CustomHttp)\n/* harmony export */ });\n/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.js */ \"./src/services/Auth.js\");\n\r\n\r\nclass CustomHttp {\r\n    static async request(url, method = 'GET', body = null) {\r\n        const params = {\r\n            method: method,\r\n            headers: {\r\n                'Content-type': 'application/json',\r\n                'Accept': 'application/json',\r\n            },\r\n        }\r\n\r\n        let token = localStorage.getItem(_Auth_js__WEBPACK_IMPORTED_MODULE_0__.Auth.accessTokenKey);\r\n        if (token) {\r\n            params.headers['x-auth-token'] = token;\r\n        }\r\n\r\n        if (body) {\r\n            params.body = JSON.stringify(body);\r\n        }\r\n        const response = await fetch(url, params);\r\n        if (response.status < 200 || response.status >= 300) {\r\n            if (response.status === 401 || response.status === 400) {\r\n                const result = await _Auth_js__WEBPACK_IMPORTED_MODULE_0__.Auth.processUnauthorizedResponse();\r\n                if (result) {\r\n                    return await this.request(url, method, body);\r\n                } else {\r\n                    return null;\r\n                }\r\n            }\r\n            throw new Error(response.message)\r\n        }\r\n        return await response.json()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/services/custom-http.js?");

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