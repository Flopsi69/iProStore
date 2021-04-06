/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion-rangeslider */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_2__);



var priceRange = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__slider').ionRangeSlider({
  type: 'double',
  min: 10000,
  max: 100000,
  from: 20000,
  to: 50000,
  grid: true,
  postfix: ' ₴',
  onChange: function onChange(data) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__input-from').prop('value', data.from_pretty.replace(' ', ''));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__input-to').prop('value', data.to_pretty.replace(' ', ''));
  }
}).data('ionRangeSlider'); // priceRange = $d5.data("ionRangeSlider")

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__input').on('keydown', function (event) {
  return event.ctrlKey || event.altKey || 47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode > 34 && event.keyCode < 40 || event.keyCode == 46;
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__input-from').on('input', function (event) {
  priceRange.update({
    from: jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val().replace(' ', '')
  });
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.price-range__input-to').on('input', function () {
  priceRange.update({
    to: jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val().replace(' ', '')
  });
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__search-btn').on('click', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__search').hasClass('active')) {
    e.preventDefault();
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).hasClass('header__search-input') || jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest('.header__search').length) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__search').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('header__search-input').focus();
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__search').removeClass('active');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.burger').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-mob').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat__sidebar-toggler').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat__sidebar').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__about-tab').on('click', function () {
  var tabTarget = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('tab-target'));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active').siblings('.active').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".pdp__about-tab-inner[data-tab='".concat(tabTarget, "']")).slideDown().siblings().slideUp();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__basket-preview').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__basket-body').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat__more-btn').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat__product.hide').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__toggler-btn').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.product__option').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.filters__option').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active').siblings('.active').removeClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.colors__option').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sidebar__models-more').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sidebar__models-item.hide').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.step-one__option').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active').siblings('.active').removeClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__contacts-phones .icon').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__phones').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.work__btn').on('click', function (e) {
  e.preventDefault();

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.work').hasClass('active')) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.work').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('active').text('Выбрать услугу');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.work').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active').text('Убрать услугу');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__option').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active').siblings('.active').removeClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.step-four__checkbox input').on('change', function (e) {
  console.log(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().siblings('.step-four__group').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('input').on('input', function () {
  inputGroupLogic(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('input').each(function (i, input) {
  inputGroupLogic(jquery__WEBPACK_IMPORTED_MODULE_1___default()(input));
});

function inputGroupLogic(input) {
  if (input.closest('.input__group')) {
    if (input.val()) {
      input.closest('.input__group').addClass('active');
    } else {
      input.closest('.input__group').removeClass('active');
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jumb__slider').slick({
  fade: true,
  nextArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jumb__nav-next'),
  prevArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jumb__nav-prev'),
  autoplay: true,
  speed: 2000,
  pauseOnHover: false,
  autoplaySpeed: 9000
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat-slider__list').slick({
  nextArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat-slider__nav-next'),
  prevArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cat-slider__nav-prev'),
  slidesToShow: 5,
  autoplay: true,
  responsive: [{
    breakpoint: 1170,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2
    }
  }]
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.about-works__slider').slick({
  nextArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.about-works__nav-next'),
  prevArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.about-works__nav-prev')
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp-gallery__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdp-gallery__nav'
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp-gallery__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdp-gallery__for',
  focusOnSelect: true,
  nextArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp-gallery__control-next'),
  prevArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp-gallery__control-prev'),
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 3
    }
  }]
});
/* Modals */

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal__close').on('click', function (e) {
  e.preventDefault();
  modalClose();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').on('click', function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).hasClass('modal_active')) {
    modalClose();
  }
});

function modalClose() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').hasClass('modal_active') ? jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').removeClass('modal_active') : jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').addClass('modal_active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal__body').slideUp();
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal-trigger').on('click', function (e) {
  e.preventDefault();
  var target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('modal-target');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').hasClass('modal_active') ? jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').removeClass('modal_active') : jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').addClass('modal_active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(target).delay(500).slideDown();
});
toggleMobileNav();
jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', toggleMobileNav);

function toggleMobileNav() {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() < 992) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-mob').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-nav'));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-mob').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__contacts'));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-mob').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__main-about'));
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__main-nav').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__main-about'));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-control').before(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__sub-nav'));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__row').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header__contacts'));
  }
}

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "select": */

x = document.getElementsByClassName("select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */

  a = document.createElement("DIV");
  a.classList.add("select__value");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */

  b = document.createElement("DIV");
  b.classList.add("select__items");
  b.classList.add("select__items_hide");

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.classList.add("select__item");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("select__item_selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].classList.remove("select__item_selected");
          }

          this.classList.add("select__item_selected");
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select__items_hide");
    this.classList.toggle("select__value_active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select__items");
  y = document.getElementsByClassName("select__value");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select__value_active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select__items_hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */


document.addEventListener("click", closeAllSelect);

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map