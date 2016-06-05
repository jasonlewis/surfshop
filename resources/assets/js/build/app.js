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
	
	var _Navigation = __webpack_require__(4);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new Vue({
	    el: '#app',
	
	    components: {
	        ProductFilter: _ProductFilter2.default, Navigation: _Navigation2.default
	    },
	
	    data: {},
	
	    ready: function ready() {},
	
	
	    methods: {}
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
	            if (this.open) {
	                this.$el.classList.remove('is-active');
	            } else {
	                this.$el.classList.add('is-active');
	            }
	
	            this.open = !this.open;
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"product-filters {{ type }}\">\n    <li class=\"filter-label\" @click=\"toggle\">{{ label }}<span class=\"icon\"></span></li>\n    <li class=\"filter-items\"><slot></slot></li>\n</ul>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] resources/assets/js/components/Navigation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Navigation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {},
	
	    data: function data() {
	        return {
	            open: false,
	            elements: {
	                nav: null,
	                body: document.querySelector('body'),
	                button: document.querySelector('button.navigation-button')
	            }
	        };
	    },
	    ready: function ready() {
	        this.prepare();
	    },
	
	
	    methods: {
	        prepare: function prepare() {
	            var _this = this;
	
	            document.addEventListener('click', function (event) {
	                if (_this.open) _this.toggle();
	            });
	
	            var stopPropagation = function stopPropagation(event) {
	                return event.stopPropagation();
	            };
	
	            this.elements.nav = this.$el;
	
	            ['nav', 'button'].forEach(function (key) {
	                _this.elements[key].addEventListener('click', stopPropagation);
	            });
	
	            this.elements.button.addEventListener('click', function (event) {
	                return _this.toggle();
	            });
	        },
	        toggle: function toggle() {
	            if (this.open) {
	                this.elements.body.classList.remove('navigation-active');
	            } else {
	                this.elements.body.classList.add('navigation-active');
	            }
	
	            this.open = !this.open;
	        }
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"navigation\">\n    <slot></slot>\n</nav>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map