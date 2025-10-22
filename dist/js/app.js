/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*---------------------------------------------------------------------------
Lang
---------------------------------------------------------------------------*/
const lang = document.querySelector('.header__languages');
const btn = lang.querySelector('.header__lang-button');

if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
   btn.addEventListener('click', (e) => {
      e.stopPropagation();
      lang.classList.toggle('active');
   });

   document.addEventListener('click', (e) => {
      if (!lang.contains(e.target)) lang.classList.remove('active');
   });
}

/*---------------------------------------------------------------------------
Show password
---------------------------------------------------------------------------*/
document.querySelectorAll('.auth-popup__form-area').forEach(area => {
   const passwordArea = area.querySelector('.password-area');
   const toggle = area.querySelector('.password-toggle');

   if (passwordArea && toggle) {
      const openEye = toggle.querySelector('.password-toggle__open');
      const closeEye = toggle.querySelector('.password-toggle__close');

      if (openEye && closeEye) {
         closeEye.style.display = 'none';

         toggle.addEventListener('click', () => {
            const isPassword = passwordArea.type === 'password';

            passwordArea.type = isPassword ? 'text' : 'password';
            openEye.style.display = isPassword ? 'none' : 'block';
            closeEye.style.display = isPassword ? 'block' : 'none';
         });
      }
   }
});


/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   openButtons.forEach(button => {
      button.addEventListener('click', function () {
         const popupId = this.dataset.popup;
         if (!popupId) return;

         // Закрываем текущий открытый попап (если есть)
         const currentPopup = this.closest('.popup.show');
         if (currentPopup) {
            currentPopup.classList.remove('show');
         }

         // Открываем нужный попап
         const newPopup = document.getElementById(popupId);
         if (newPopup) {
            newPopup.classList.add('show');
            document.body.style.overflow = 'hidden';
         }
      });
   });

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');
      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});

/*---------------------------------------------------------------------------
Cookies
---------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   const banner = document.getElementById('cookieBanner');
   const acceptBtn = document.getElementById('cookieAccept');

   if (!localStorage.getItem('cookiesAccepted')) {
      banner.classList.remove('hide');
   }

   acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.add('hide');
   });
});

})();

/******/ })()
;