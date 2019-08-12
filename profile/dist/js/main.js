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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/left.js":
/*!********************!*\
  !*** ./js/left.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var element = $('.profile__communication');
  element.on('click', function () {
    $(this).toggleClass('profile__communication--active');
  });
  $(document).on('click', function (e) {
    if (element.has(e.target).length === 0) {
      element.removeClass('profile__communication--active');
    }
  });
  $('.toggle-box .icon').on('click', function () {
    if ($(this).hasClass('icon--lightbulb-off')) {
      $(this).fadeOut(100);
      $(this).removeClass('icon--lightbulb-off').addClass('icon--lightbulb-on');
      $('.icon--lightbulb-on use').attr('xlink:href', 'img/spriteSvg.svg#sprite-lightbulb-on');
      $(this).fadeIn(300);
    } else {
      $(this).fadeOut(100);
      $(this).removeClass('icon--lightbulb-on').addClass('icon--lightbulb-off');
      $('.icon--lightbulb-off use').attr('xlink:href', 'img/spriteSvg.svg#sprite-lightbulb-off');
      $(this).fadeIn(300);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody/dist/svg4everybody.min */ "../node_modules/svg4everybody/dist/svg4everybody.min.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var particles_js_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! particles.js/particles */ "../node_modules/particles.js/particles.js");
/* harmony import */ var particles_js_particles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(particles_js_particles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ "../node_modules/@fortawesome/fontawesome-free/js/all.min.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particles */ "./js/particles.js");
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_particles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left */ "./js/left.js");
/* harmony import */ var _left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right */ "./js/right.js");
/* harmony import */ var _right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_right__WEBPACK_IMPORTED_MODULE_6__);







svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_1___default()({});

/***/ }),

/***/ "./js/particles.js":
/*!*************************!*\
  !*** ./js/particles.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

particlesJS('particles', {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 700
      }
    },
    color: {
      value: ['#aa73ff', '#f4e11e', '#b3eb00', '#00a7e5']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 15
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: '#33b1f8',
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    enable: true,
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

/***/ }),

/***/ "./js/right.js":
/*!*********************!*\
  !*** ./js/right.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var panel = $('.panel');
  panel.on('click', function () {
    $(this).toggleClass('panel--active').siblings().removeClass('panel--active');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./pug/pages/index.pug":
/*!*****************************!*\
  !*** ./pug/pages/index.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_mixins["icon"] = pug_interp = function(name,mod){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((mod)) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes(["icon icon--" + name + ' ' + mod], [true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cuse" + (pug.attr("xlink:href", "img/spriteSvg.svg#sprite-" + name, true, true)) + "\u003E\u003C\u002Fuse\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fsvg\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes(["icon icon--" + name], [true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cuse" + (pug.attr("xlink:href", "img/spriteSvg.svg#sprite-" + name, true, true)) + "\u003E\u003C\u002Fuse\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fsvg\u003E";
}
};
pug_mixins["portfolio"] = pug_interp = function(address, src, name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"portfolio__item\""+pug.attr("href", address, true, true)+" target=\"_blank\" rel=\"noopener\"") + "\u003E\u003Cimg" + (" class=\"portfolio__img\""+pug.attr("src", src, true, true)+pug.attr("alt", name, true, true)) + "\u003E\u003Cspan class=\"portfolio__title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
};
var title = 'Profile'
var pageClass = 'index-page'
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru-RU\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"utf-8\"\u003E\n    \u003Ctitle\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta name=\"keywords\" content=\"\"\u003E\u003C!--[if lt IE 9]\u003E\n    \u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fhtml5shiv\u002F3.7.3\u002Fhtml5shiv-printshiv.min.js\"\u003E\u003C\u002Fscript\u003E\u003C![endif]--\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody" + (pug.attr("class", pug.classes([pageClass], [true]), false, true)) + "\u003E\n    \u003Cdiv id=\"particles\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Cdiv class=\"left\"\u003E\n          \u003Cdiv class=\"toggle-box\"\u003E\n            \u003Cdiv class=\"languages\"\u003E\u003Cspan class=\"languages__item languages__item--en\"\u003EEN\u003C\u002Fspan\u003E\u003Cspan class=\"languages__item languages__item--ua\"\u003EUA\u003C\u002Fspan\u003E\u003Cspan class=\"languages__item languages__item--en\"\u003ERU\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
pug_indent.push('            ');
pug_mixins["icon"]('lightbulb-off');
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"photo\"\u003E\u003Cimg class=\"photo__pic\" src=\"img\u002Fphoto.jpg\" alt=\"alt\"\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"profile\"\u003E\n            \u003Ch2 class=\"profile__name\"\u003EIgor Lukashev\u003C\u002Fh2\u003E\n            \u003Ch3 class=\"profile__specialty\"\u003EJunior Frontend Developer\u003C\u002Fh3\u003E\n            \u003Cdiv class=\"profile__location location\"\u003E\n              \u003Cdiv class=\"location__city\"\u003EZaporizhzhia\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"location__country\"\u003EUkraine\u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"profile__communication\"\u003E\n              \u003Cdiv class=\"door top\"\u003E\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"door bottom\"\u003E\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"contacts\"\u003E\u003Ca class=\"contacts__link contacts__link--phone\" href=\"tel:+380956010640\"\u003E\u003Ci class=\"fas fa-phone\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca class=\"contacts__link contacts__link--mail\" href=\"mailto:motrdevua@gmail.com\"\u003E\u003Ci class=\"fas fa-envelope\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca class=\"contacts__link contacts__link--github\" href=\"https:\u002F\u002Fgithub.com\u002Fmotrdevua\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ci class=\"fab fa-github-alt\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca class=\"contacts__link contacts__link--skype\" href=\"skype:fedeveloperua?call\"\u003E\u003Ci class=\"fab fa-skype\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Ca class=\"contacts__link contacts__link--linkedin\" href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Figor-lukashev-52b25011b\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ci class=\"fab fa-linkedin\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"right\"\u003E\n          \u003Cdiv class=\"panel\"\u003E\n            \u003Cdiv class=\"panel__container resume\"\u003E\n              \u003Cdiv class=\"resume__objective\"\u003E\n                \u003Ch4 class=\"resume__title\"\u003Eobjective\u003C\u002Fh4\u003E\n                \u003Cdiv class=\"resume__desc\"\u003E\n                  \u003Cp class=\"resume__text\"\u003ETo obtain the perspective position of Junior Frontend Developer I'm looking for a team where I can improve my skils in FE and I will make every eforts to achive best results.\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"resume__education resume__education--add\"\u003E\n                \u003Ch4 class=\"resume__title\"\u003Eanother achievements\u003C\u002Fh4\u003E\n                \u003Cdiv class=\"resume__desc\"\u003E\n                  \u003Cp class=\"resume__period\"\u003EApr2017 - July2017\u003C\u002Fp\u003E\n                  \u003Cdiv class=\"resume__about\"\u003E\u003Ca class=\"resume__link\" href=\"http:\u002F\u002Fdevchallenge.it\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cimg class=\"resume__picture\" src=\".\u002Fimg\u002Flogo_dev_challenge_11.svg\" alt=\"devchallenge\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n                  \u003Cp class=\"resume__level\"\u003EFinalist (\"Standart\")\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"resume__education resume__education--add\"\u003E\n                \u003Ch4 class=\"resume__title\"\u003Eadditional education\u003C\u002Fh4\u003E\n                \u003Cdiv class=\"resume__desc\"\u003E\n                  \u003Cp class=\"resume__period\"\u003EFeb2016 - June2016\u003C\u002Fp\u003E\n                  \u003Cdiv class=\"resume__about\"\u003E\u003Ca class=\"resume__link\" href=\"https:\u002F\u002Fgoit.ua\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cimg class=\"resume__picture\" src=\".\u002Fimg\u002Flogo_goit.png\" alt=\"goit\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n                  \u003Cp class=\"resume__level\"\u003EJunior Spicialist\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"resume__education\"\u003E\n                \u003Ch4 class=\"resume__title\"\u003Eeducation\u003C\u002Fh4\u003E\n                \u003Cdiv class=\"resume__desc resume__desc--university\"\u003E\n                  \u003Cp class=\"resume__period\"\u003E2009 - 2014\u003C\u002Fp\u003E\n                  \u003Cdiv class=\"resume__about\"\u003E\u003Cspan class=\"resume__institution\"\u003EDonetsk State University of Management\u003C\u002Fspan\u003E\u003Cspan class=\"resume__speciality\"\u003EForeign-Economic Activity Expert\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                  \u003Cp class=\"resume__level\"\u003EBachelor's degree\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"resume__desc\"\u003E\n                  \u003Cp class=\"resume__period\"\u003E2009 - 2013\u003C\u002Fp\u003E\n                  \u003Cdiv class=\"resume__about\"\u003E\u003Cspan class=\"resume__institution\"\u003EKharkiv State Automobile and Road Technical School\u003C\u002Fspan\u003E\u003Cspan class=\"resume__speciality\"\u003EMaintenance and repair conveyor, building and road machines and equipment\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                  \u003Cp class=\"resume__level\"\u003EJunior Specialist\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"panel\"\u003E\n            \u003Cdiv class=\"panel__container skills\"\u003E\n              \u003Cdiv class=\"skills__tech\"\u003E\n                \u003Ch4 class=\"skills__title\"\u003ETech skills\u003C\u002Fh4\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EStrong knowledges of HTML5, CSS3.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003ETo increase speed of work I use templating engine PUG and CSS preprocessor SASS.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EExperience in responsive, cross-browser and pixel-perfect frontend creation.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EUnderstanding of building process using such tools like Gulp, Yarn, NPM, Bower, Webpack.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EJavascript, jQuery.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EVersion control systems, such as Git, Github.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EBasic knowledges of Photoshop, Illustrator, Sketch, Avocode for coders.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EEditor: VSCode, Atom.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EOS: MacOs, Windows.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"skills__item\"\u003E\u003Ci class=\"fas fa-check-square\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"skills__desc\"\u003EKnowledge of English at the Pre-Intermediate \u002F Intermediate level.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"skills__logos\"\u003E";
pug_indent.push('                ');
pug_mixins["icon"]('html5');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('css3');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('javascript');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('jquery');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('sass');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('pug');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('gulp');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('webpack');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('npm');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('git');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('github');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('bootstrap');
pug_indent.pop();
pug_indent.push('                ');
pug_mixins["icon"]('vscode');
pug_indent.pop();
pug_html = pug_html + "\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"panel\"\u003E\n            \u003Cdiv class=\"panel__container portfolio\"\u003E";
pug_indent.push('              ');
pug_mixins["portfolio"]('https://motrdevua.github.io/portfolio/mogo/dist/', './img/screens/mogo.jpeg', 'MoGo');
pug_indent.pop();
pug_indent.push('              ');
pug_mixins["portfolio"]('https://motrdevua.github.io/portfolio/vprosto/dist/', './img/screens/vprosto.jpeg', 'Всё просто');
pug_indent.pop();
pug_indent.push('              ');
pug_mixins["portfolio"]('https://motrdevua.github.io/portfolio/marvel/dist/', './img/screens/marvel.jpeg', 'Marvel');
pug_indent.pop();
pug_indent.push('              ');
pug_mixins["portfolio"]('https://motrdevua.github.io/portfolio/marvel/dist/', './img/screens/marvel.jpeg', 'Marvel');
pug_indent.pop();
pug_html = pug_html + "\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************!*\
  !*** multi ./js/main.js ./scss/main.scss ./pug/pages/index.pug ../node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/main.js */"./js/main.js");
__webpack_require__(/*! ./scss/main.scss */"./scss/main.scss");
__webpack_require__(/*! ./pug/pages/index.pug */"./pug/pages/index.pug");
module.exports = __webpack_require__(/*! /Users/igorlukashev/Documents/GitHub/motrdevua.github.io/profile/node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js */"../node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map