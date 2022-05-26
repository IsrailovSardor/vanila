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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanila/./src/style.css?");

/***/ }),

/***/ "./src/js/burgerMenu.js":
/*!******************************!*\
  !*** ./src/js/burgerMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBurgerMenu\": () => (/* binding */ getBurgerMenu),\n/* harmony export */   \"getLink\": () => (/* binding */ getLink)\n/* harmony export */ });\nlet getBurgerMenu = () => {\r\n\tlet menuBtn = document.querySelector('.burgerMenu');\r\n\tlet menu = document.querySelector('.navbar__ul');\r\n\tmenuBtn.addEventListener('click', function () {\r\n\t\tmenuBtn.classList.toggle('active');\r\n\t\tmenu.classList.toggle('active');\r\n\t})\r\n}\r\nlet getLink = () => {\r\n\tconst link = async () => {\r\n\t\tconst got = await fetch(\"../config.json\");\r\n\t\tconst config = await got.json();\r\n\t\tlet link = config.appStoreLink\r\n\t\twindow.onload = function () {\r\n\t\t\tvar url = `${link}`;\r\n\t\t\tdocument.querySelector('a[name=\"href\"]').setAttribute('href', url);\r\n\t\t}\r\n\t};\r\n\tlink();\r\n}\n\n//# sourceURL=webpack://vanila/./src/js/burgerMenu.js?");

/***/ }),

/***/ "./src/js/darkmode.js":
/*!****************************!*\
  !*** ./src/js/darkmode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDarkMode\": () => (/* binding */ getDarkMode)\n/* harmony export */ });\nlet getDarkMode = () => {\r\n    const white = document.getElementById('white__button')\r\n    const dark = document.getElementById('dark_btn')\r\n    \r\n    white.addEventListener('click', () => {\r\n        document.getElementById(\"dark\").style.backgroundColor = \"white\"\r\n        document.getElementById(\"dark\").style.transition = \".55s\"\r\n        document.getElementById(\"dark\").style.color = \"black\"\r\n        document.getElementById(\"white__sun\").style.fill = \"#FF9209\"\r\n        document.getElementById(\"white__moon\").style.fill = \"#222222\"\r\n        document.getElementById(\"light__text_darkMode\").style.color = \"#FF9209\"\r\n        document.getElementById('dark__text-darkMode').style.color = \"#222222\"\r\n        document.getElementById('text__mode-header').textContent = \"light mode\"\r\n        document.getElementById('span__mode-main').textContent = \"light\"\r\n    })\r\n    dark.addEventListener('click', () => {\r\n        document.getElementById(\"dark\").style.backgroundColor = \"#222222\"\r\n        document.getElementById(\"dark\").style.color = \"white\"\r\n        document.getElementById(\"white__sun\").style.fill = \"#ffffff\"\r\n        document.getElementById(\"white__moon\").style.fill = \"#FF9209\"\r\n        document.getElementById(\"light__text_darkMode\").style.color = \"#ffffff\"\r\n        document.getElementById('dark__text-darkMode').style.color = \"#FF9209\"\r\n        document.getElementById('text__mode-header').textContent = \"dark mode\"\r\n        document.getElementById('span__mode-main').textContent = \"dark\"\r\n    })\r\n}\n\n//# sourceURL=webpack://vanila/./src/js/darkmode.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getModal\": () => (/* binding */ getModal)\n/* harmony export */ });\nlet getModal = () => {\r\n    var modal = document.getElementById('myModal');\r\n    var btns = document.querySelectorAll(\".open__modal\");\r\n    btns.forEach(btn => btn.onclick = () => {\r\n        modal.style.display = \"flex\";\r\n    })\r\n\r\n    window.onclick = function (event) {\r\n        if (event.target == modal) {\r\n            modal.style.display = \"none\";\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack://vanila/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/price.js":
/*!*************************!*\
  !*** ./src/js/price.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrice\": () => (/* binding */ getPrice)\n/* harmony export */ });\nlet getPrice = () => {\r\n    const getPrice = async () => {\r\n        const got = await fetch(\"../config.json\");\r\n        const config = await got.json();\r\n        let price__standart = config.plans\r\n\r\n        document.getElementById('name__standart').textContent = price__standart[0].name\r\n        document.getElementById('price__standart').textContent = (\"$\" + price__standart[0].price)\r\n        document.getElementById('name__premium').textContent = price__standart[1].name\r\n        document.getElementById('price__premium').textContent = (\"$\" + price__standart[1].price)\r\n        document.getElementById('name__lifetime').textContent = price__standart[2].name\r\n        document.getElementById('price__lifetime').textContent = (\"$\" + price__standart[2].price)\r\n    };\r\n    getPrice();\r\n}\r\n\n\n//# sourceURL=webpack://vanila/./src/js/price.js?");

/***/ }),

/***/ "./src/js/testimonials.js":
/*!********************************!*\
  !*** ./src/js/testimonials.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTestimonials\": () => (/* binding */ getTestimonials)\n/* harmony export */ });\nlet getTestimonials = () => {\r\n    const getTestimonials = async () => {\r\n        const got = await fetch(\"../config.json\");\r\n        const config = await got.json();\r\n        let testimonials = config.testimonials\r\n\r\n        document.getElementById('user__text-one').textContent = testimonials[0].text\r\n        document.getElementById('user__name-one').textContent = testimonials[0].name\r\n        document.getElementById('user__job-one').textContent = testimonials[0].job\r\n\r\n        document.getElementById('user__text-two').textContent = testimonials[1].text\r\n        document.getElementById('user__name-two').textContent = testimonials[1].name\r\n        document.getElementById('user__job-two').textContent = testimonials[1].job\r\n\r\n        document.getElementById('user__text-three').textContent = testimonials[2].text\r\n        document.getElementById('user__name-three').textContent = testimonials[2].name\r\n        document.getElementById('user__job-three').textContent = testimonials[2].job\r\n    };\r\n    getTestimonials();\r\n}\n\n//# sourceURL=webpack://vanila/./src/js/testimonials.js?");

/***/ }),

/***/ "./src/js/time.js":
/*!************************!*\
  !*** ./src/js/time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTime\": () => (/* binding */ getTime)\n/* harmony export */ });\nlet getTime = () => {\r\n    const data = async () => {\r\n        const getRequest = await fetch(\"../config.json\");\r\n        const config = await getRequest.json();\r\n\r\n        let splitDate = config.timerEndDate.split(/\\W/)\r\n        const [day, month, year, hour, minutse] = splitDate\r\n        const configDate = new Date(year, month - 1, day, hour, minutse)\r\n\r\n        function renderDate() {\r\n            let newDate = new Date();\r\n            let totalDate = configDate - newDate;\r\n\r\n            let days = Math.floor(totalDate / 1000 / 60 / 60 / 24);\r\n            let hours = Math.floor(totalDate / 1000 / 60 / 60) % 24;\r\n            let minuts = Math.floor(totalDate / 1000 / 60) % 60;\r\n            let seconds = Math.floor(totalDate / 1000) % 60;\r\n\r\n            document.getElementById('time-count__day').textContent = days;\r\n            document.getElementById('time-count__hours').textContent = hours;\r\n            document.getElementById('time-count__minutes').textContent = minuts;\r\n            document.getElementById('time-count__seconds').textContent = seconds;\r\n            if (days < 0) {\r\n                document.getElementById(\"timer\").style.display = \"none\"\r\n            } else {\r\n                document.getElementById(\"timer\").style.display = \"block\"\r\n            };\r\n            if (days < 10) {\r\n                document.getElementById('span__day').textContent = 0\r\n            } else {\r\n                document.getElementById('span__day').textContent = ''\r\n            }\r\n            if (hours < 10) {\r\n                document.getElementById('span__hours').textContent = 0\r\n            } else {\r\n                document.getElementById('span__hours').textContent = ''\r\n            }\r\n            if (minuts < 10) {\r\n                document.getElementById('span__minutes').textContent = 0\r\n            } else {\r\n                document.getElementById('span__minutes').textContent = ''\r\n            }\r\n            if (seconds < 10) {\r\n                document.getElementById('span__seconds').textContent = 0\r\n            } else {\r\n                document.getElementById('span__seconds').textContent = ''\r\n            }\r\n        }\r\n        setInterval(renderDate, 1000)\r\n        renderDate();\r\n    };\r\n    data();\r\n} \n\n//# sourceURL=webpack://vanila/./src/js/time.js?");

/***/ }),

/***/ "./src/js/validator.js":
/*!*****************************!*\
  !*** ./src/js/validator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getValidator\": () => (/* binding */ getValidator)\n/* harmony export */ });\nlet getValidator = () => {\r\n    let form = document.querySelector('.js-form')\r\n    let formInputs = document.querySelectorAll('.modal__input-text')\r\n    let inputEmail = document.querySelector('.js-input-email')\r\n    let inputName = document.querySelector('.js-input-name')\r\n    var radio = document.querySelectorAll('input[type=\"radio\"]');\r\n    var check = document.querySelectorAll('input[type=\"checkbox\"]');\r\n\r\n    function validateEmail(email) {\r\n        let re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n        return re.test(String(email).toLowerCase());\r\n    }\r\n\r\n    function validateName(text) {\r\n        let req = /^[a-zA-Z]+$/;\r\n        return req.test(String(text).toLowerCase());\r\n    }\r\n\r\n    form.onsubmit = function (e) {\r\n        e.preventDefault()\r\n        let emailVal = inputEmail.value\r\n        let nameVal = inputName.value\r\n        let emptyInputs = Array.from(formInputs).filter(input => input.value === '');\r\n\r\n        if (emptyInputs.length !== 0) {\r\n            document.getElementById(\"span__email\").textContent = \"this field is reqiured*\"\r\n            return false;\r\n        } else {\r\n            document.getElementById(\"span__email\").textContent = \"\"\r\n        }\r\n\r\n        if (emailVal.length < 3) {\r\n            document.getElementById(\"span__email\").textContent = \"should be more then 3 symbols\"\r\n            return false\r\n        } else {\r\n            document.getElementById(\"span__email\").textContent = \"\"\r\n            let modal_time = document.getElementById('modal_time')\r\n            let open = document.getElementById('time-open')\r\n            open.onclick = function () {\r\n                modal_time.style.display = \"flex\";\r\n            }\r\n        }\r\n        if (!validateEmail(emailVal)) {\r\n            document.getElementById(\"span__email\").textContent = \"email not valid\"\r\n            return false;\r\n        } else {\r\n            document.getElementById(\"span__email\").textContent = \"\"\r\n        }\r\n\r\n        if (nameVal.length < 3) {\r\n            document.getElementById(\"span__name\").textContent = \"should be more then 3 symbols\"\r\n            return false\r\n        } else {\r\n            document.getElementById(\"span__name\").textContent = \"\"\r\n        }\r\n        if (!validateName(nameVal)) {\r\n            document.getElementById(\"span__name\").textContent = \"name not valid\"\r\n            return false;\r\n        } else {\r\n            document.getElementById(\"span__name\").textContent = \"\"\r\n        }\r\n\r\n        for (var i = 0; i < radio.length; i++) {\r\n            radio[i].checked === true ? activeRadio = radio[i].value : null\r\n        }\r\n        for (var i = 0; i < check.length; i++) {\r\n            check[i].checked === true ? activeCheck = check[i].value : null\r\n        }\r\n\r\n        console.log(\"name\" + \":\" + nameVal, \"email\" + \":\" + emailVal, \"radio\" + \":\" + activeRadio, \"check\" + \":\" + activeCheck)\r\n    }\r\n}\n\n//# sourceURL=webpack://vanila/./src/js/validator.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _js_price_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/price.js */ \"./src/js/price.js\");\n/* harmony import */ var _js_burgerMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/burgerMenu.js */ \"./src/js/burgerMenu.js\");\n/* harmony import */ var _js_darkmode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/darkmode.js */ \"./src/js/darkmode.js\");\n/* harmony import */ var _js_testimonials_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/testimonials.js */ \"./src/js/testimonials.js\");\n/* harmony import */ var _js_time_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/time.js */ \"./src/js/time.js\");\n/* harmony import */ var _js_validator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/validator.js */ \"./src/js/validator.js\");\n\r\n\r\n\r\n(0,_js_modal_js__WEBPACK_IMPORTED_MODULE_1__.getModal)()\r\n;\r\n(0,_js_price_js__WEBPACK_IMPORTED_MODULE_2__.getPrice)()\r\n;\r\n(0,_js_burgerMenu_js__WEBPACK_IMPORTED_MODULE_3__.getBurgerMenu)()\r\n;\r\n(0,_js_darkmode_js__WEBPACK_IMPORTED_MODULE_4__.getDarkMode)()\r\n;\r\n(0,_js_testimonials_js__WEBPACK_IMPORTED_MODULE_5__.getTestimonials)()\r\n;\r\n(0,_js_time_js__WEBPACK_IMPORTED_MODULE_6__.getTime)()\r\n;\r\n(0,_js_burgerMenu_js__WEBPACK_IMPORTED_MODULE_3__.getLink)()\r\n;\r\n(0,_js_validator_js__WEBPACK_IMPORTED_MODULE_7__.getValidator)()\r\n\n\n//# sourceURL=webpack://vanila/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;