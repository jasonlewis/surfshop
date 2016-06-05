/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ProductFilter = __webpack_require__(1);
	
	var _ProductFilter2 = _interopRequireDefault(_ProductFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new Vue({
	    el: '#app',
	
	    components: {
	        ProductFilter: _ProductFilter2.default
	    },
	
	    data: {
	        menu: {
	            open: false,
	            elements: {
	                parent: document.querySelector('nav.main-menu'),
	                overlay: document.querySelector('div.main-menu-overlay'),
	                body: document.querySelector('body'),
	                container: document.querySelector('div.container'),
	                button: document.querySelector('button.main-menu-button')
	            }
	        }
	    },
	
	    ready: function ready() {
	        this.setupPushNavigation();
	    },
	
	
	    methods: {
	        setupPushNavigation: function setupPushNavigation() {
	            var _this = this;
	
	            var stopPropagation = function stopPropagation(event) {
	                return event.stopPropagation();
	            };
	
	            document.addEventListener('click', function (event) {
	                if (_this.menu.open) _this.closeMainMenu();
	            });
	
	            this.menu.elements.parent.addEventListener('click', stopPropagation);
	            this.menu.elements.button.addEventListener('click', stopPropagation);
	        },
	
	        toggleMainMenu: function toggleMainMenu() {
	            if (this.menu.open) {
	                this.closeMainMenu();
	
	                return;
	            }
	
	            this.openMainMenu();
	        },
	        openMainMenu: function openMainMenu() {
	            this.menu.elements.body.classList.add('main-menu-active');
	            this.menu.elements.parent.classList.add('main-menu-active');
	            this.menu.elements.overlay.classList.add('main-menu-active');
	            this.menu.elements.container.classList.add('main-menu-active');
	
	            this.menu.open = true;
	        },
	        closeMainMenu: function closeMainMenu() {
	            this.menu.elements.body.classList.remove('main-menu-active');
	            this.menu.elements.parent.classList.remove('main-menu-active');
	            this.menu.elements.overlay.classList.remove('main-menu-active');
	            this.menu.elements.container.classList.remove('main-menu-active');
	
	            this.menu.open = false;
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] resources/assets/js/components/ProductFilter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ProductFilter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        label: {
	            type: String,
	            required: true
	        },
	        type: {
	            type: String,
	            required: true
	        }
	    },
	
	    data: function data() {
	        return {
	            open: false
	        };
	    },
	
	
	    methods: {
	        toggle: function toggle() {
	            if (!this.open) {
	                this.$el.classList.add('is-active');
	            } else {
	                this.$el.classList.remove('is-active');
	            }
	
	            this.open = !this.open;
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"product-filters {{ type }}\">\n    <li class=\"filter-label\" @click=\"toggle\">{{ label }}<span class=\"icon\"></span></li>\n    <li class=\"filter-items\"><slot></slot></li>\n</ul>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map