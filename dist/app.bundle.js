var Application =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 05.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Http = __webpack_require__(11);

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);

        this.http = new _Http2.default();
        this.url = this.http.BaseUrl;
    }

    /**
     * Получить user-а
     * @return {Promise}
     */


    _createClass(UserService, [{
        key: 'getUser',
        value: function getUser() {
            var _this = this;

            var address = this.url + '/user/get';
            return new Promise(function (resolve, reject) {
                _this._createRequest(address, null, 'GET', null).then(function (response) {
                    resolve(response.user);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * Залогиниться
         * @param body
         * @return {Promise}
         */

    }, {
        key: 'login',
        value: function login(body) {
            var _this2 = this;

            var address = this.url + '/user/login';
            var headers = { 'Content-Type': 'application/json' };
            return new Promise(function (resolve, reject) {
                _this2._createRequest(address, headers, 'POST', body).then(function (response) {
                    resolve(response.user);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * Регистрация
         * @param body
         * @return {Promise}
         */

    }, {
        key: 'signup',
        value: function signup(body) {
            var _this3 = this;

            var address = this.url + '/user/signup';
            var headers = { 'Content-Type': 'application/json' };
            return new Promise(function (resolve, reject) {
                _this3._createRequest(address, headers, 'POST', body).then(function (response) {
                    resolve(response);
                }).catch(function (e) {
                    if (!e) {
                        reject({ result: 'no-conn' });
                    } else {
                        reject({ result: 'error' });
                    }
                });
            });
        }

        /**
         * Получить список лидеров
         * @return {Promise}
         */

    }, {
        key: 'getLeaders',
        value: function getLeaders() {
            var _this4 = this;

            var address = this.url + '/user/leaders';
            return new Promise(function (resolve, reject) {
                _this4._createRequest(address, null, 'GET', null).then(function (response) {
                    resolve(response);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * Выход user-а
         * @return {Promise}
         */

    }, {
        key: 'logOutUser',
        value: function logOutUser() {
            var _this5 = this;

            var address = this.url + '/user/logout';
            return new Promise(function (resolve, reject) {
                _this5._createRequest(address, null, 'GET', null).then(function (response) {
                    resolve(response);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * Метод "сделать запрос"
         * @param address
         * @param headers
         * @param type - тип запроса
         * @param body
         * @return {Promise}
         * @private
         */

    }, {
        key: '_createRequest',
        value: function _createRequest(address) {
            var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var http = this.http;
            return new Promise(function (resolve, reject) {
                http.request(address, headers, type, body).then(function (response) {
                    if (response.status === '200 OK') {
                        resolve(response);
                    } else {
                        //console.log(response.status);
                        reject(response);
                    }
                }).catch(function (e) {
                    console.error(e.status);
                    reject({});
                });
            });
        }
    }]);

    return UserService;
}();

exports.default = UserService;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 17.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(126);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseView = function () {
    function BaseView(node) {
        _classCallCheck(this, BaseView);

        this.node = node;
    }

    _createClass(BaseView, [{
        key: 'renderView',
        value: function renderView() {
            if (document.getElementById('start-loader')) {
                document.getElementById('start-loader').remove();
            }
            this.node.classList.remove('fadeOut');
            this.node.classList.add('fadeIn');
        }

        /**
         * Удалить view
         */

    }, {
        key: 'destroyView',
        value: function destroyView() {
            this.node.classList.remove('fadeIn');
            this.node.classList.add('fadeOut');
            while (this.node.firstChild) {
                this.node.removeChild(this.node.firstChild);
            }
        }
    }]);

    return BaseView;
}();

exports.default = BaseView;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * iziToast | v1.1.0
 * http://izitoast.marcelodolce.com
 * by Marcelo Dolce.
 */ 
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.iziToast = factory(root);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//
	var $iziToast = {},
		PLUGIN_NAME = 'iziToast',
		BODY = document.querySelector('body'),
		ISMOBILE = (/Mobi/.test(navigator.userAgent)) ? true : false,
		ISCHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
		ISFIREFOX = typeof InstallTrigger !== 'undefined',
		ACCEPTSTOUCH = 'ontouchstart' in document.documentElement,
		POSITIONS = ['bottomRight','bottomLeft','bottomCenter','topRight','topLeft','topCenter','center'],
		THEMES = {
			info: {
				color: "blue",
				icon: "ico-info"
			},
			success: {
				color: "green",
				icon: "ico-check",
			},
			warning: {
				color: "yellow",
				icon: "ico-warning",
			},
			error: {
				color: "red",
				icon: "ico-error",
			}
		},
		MOBILEWIDTH = 568,
		CONFIG = {};

	// Default settings
	var defaults = {
		class: '',
		title: '',
		titleColor: '',
		message: '',
		messageColor: '',
		backgroundColor: '',
		color: '', // blue, red, green, yellow
		icon: '',
		iconText: '',
		iconColor: '',
		image: '',
		imageWidth: 50,
		zindex: 99999,
		layout: 1,
		balloon: false,
		close: true,
		rtl: false,
		position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
		target: '',
		targetFirst: true,
		timeout: 5000,
		drag: true,
		pauseOnHover: true,
		resetOnHover: false,
		progressBar: true,
		progressBarColor: '',
		animateInside: true,
		buttons: {},
		transitionIn: 'fadeInUp', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
		transitionOut: 'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
		transitionInMobile: 'fadeInUp',
		transitionOutMobile: 'fadeOutDown',
		onOpen: function () {},
		onClose: function () {}
	};

	//
	// Methods
	//


	/**
	 * Polyfill for remove() method
	 */
	if (!('remove' in Element.prototype)) {
	    Element.prototype.remove = function() {
	        if (this.parentNode) {
	            this.parentNode.removeChild(this);
	        }
	    };
	}

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			if(collection){
				for (var i = 0, len = collection.length; i < len; i++) {
					callback.call(scope, collection[i], i, collection);
				}
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function (defaults, options) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};


	/**
	 * Create a fragment DOM elements
	 * @private
	 */
	var createFragElem = function(htmlStr) {
		var frag = document.createDocumentFragment(),
			temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	};


	/**
	 * Check if is a color
	 * @private
	 */
	var isColor = function(color){
		if( color.substring(0,1) == "#" || color.substring(0,3) == "rgb" || color.substring(0,3) == "hsl" ){
			return true;
		} else {
			return false;
		}
	};


	/**
	 * Drag method of toasts
	 * @private
	 */
	var drag = function() {
	    
	    return {
	        move: function(toast, instance, settings, xpos) {

	        	var opacity,
	        		opacityRange = 0.3,
	        		distance = 180;
	            
	            toast.style.transform = 'translateX('+xpos + 'px)';

	            if(xpos > 0){
	            	opacity = (distance-xpos) / distance;
	            	if(opacity < opacityRange){
						instance.hide(extend(settings, { transitionOut: 'fadeOutRight', transitionOutMobile: 'fadeOutRight' }), toast, 'drag');
					}
	            } else {
	            	opacity = (distance+xpos) / distance;
	            	if(opacity < opacityRange){
						instance.hide(extend(settings, { transitionOut: 'fadeOutLeft', transitionOutMobile: 'fadeOutLeft' }), toast, 'drag');
					}
	            }
				toast.style.opacity = opacity;
		
				if(opacity < opacityRange){

					if(ISCHROME || ISFIREFOX)
						toast.style.left = xpos+'px';

					toast.parentNode.style.opacity = opacityRange;

	                this.stopMoving(toast, null);
				}
				
	        },
	        startMoving: function(toast, instance, settings, e) {

	            e = e || window.event;
	            var posX = ((ACCEPTSTOUCH) ? e.touches[0].clientX : e.clientX),
	                toastLeft = toast.style.transform.replace('px)', '');
	                toastLeft = toastLeft.replace('translateX(', '');
	            var offsetX = posX - toastLeft;

				toast.classList.remove(settings.transitionIn);
				toast.classList.remove(settings.transitionInMobile);
				toast.style.transition = "";

	            if (ACCEPTSTOUCH) {
	                document.ontouchmove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.touches[0].clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            } else {
	                document.onmousemove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            }

	        },
	        stopMoving: function(toast, e) {

	            if (ACCEPTSTOUCH) {
	                document.ontouchmove = function() {};
	            } else {
	            	document.onmousemove = function() {};
	            }
				toast.style.transition = "transform 0.4s ease, opacity 0.4s ease";
				toast.style.opacity = "";
				toast.style.transform = "";
				window.setTimeout(function() {
					toast.style.transition = "";
				}, 400);
	        }
	    };

	}();


	/**
	 * Do the calculation to move the progress bar
	 * @private
	 */
	var moveProgress = function(toast, settings, callback){

		var isPaused = false;
		var isReseted = false;
		var isClosed = false;
		var timerTimeout = null;
		var elem = toast.querySelector("."+PLUGIN_NAME+"-progressbar div");
		var progressBar = {
			hideEta: null,
			maxHideTime: null,
			currentTime: new Date().getTime(),
			updateProgress: function()
			{
				isPaused = toast.classList.contains(PLUGIN_NAME+'-paused') ? true : false;
				isReseted = toast.classList.contains(PLUGIN_NAME+'-reseted') ? true : false;
				isClosed = toast.classList.contains(PLUGIN_NAME+'-closed') ? true : false;

				if(isReseted){
					clearTimeout(timerTimeout);
					elem.style.width = '100%';
					moveProgress(toast, settings, callback);
					toast.classList.remove(PLUGIN_NAME+'-reseted');
				}
				if(isClosed){
					clearTimeout(timerTimeout);
					toast.classList.remove(PLUGIN_NAME+'-closed');
				}

				if(!isPaused && !isReseted && !isClosed){
					progressBar.currentTime = progressBar.currentTime+10;
					var percentage = ((progressBar.hideEta - (progressBar.currentTime)) / progressBar.maxHideTime) * 100;
					elem.style.width = percentage + '%';

					if(Math.round(percentage) < 0 || typeof toast != 'object'){
						clearTimeout(timerTimeout);
						callback.apply();
					}
				}

			}
		};
		if (settings.timeout > 0) {
			progressBar.maxHideTime = parseFloat(settings.timeout);
			progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
			timerTimeout = setInterval(progressBar.updateProgress, 10);
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	$iziToast.destroy = function () {

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-wrapper'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME), function(element, index) {
			element.remove();
		});

		// Remove event listeners
		document.removeEventListener(PLUGIN_NAME+'-open', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-close', {}, false);

		// Reset variables
		CONFIG = {};
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.settings = function (options) {

		// Destroy any existing initializations
		$iziToast.destroy();

		CONFIG = options;
		defaults = extend(defaults, options || {});
	};


	/**
	 * Building themes functions.
	 * @public
	 * @param {Object} options User settings
	 */
	forEach(THEMES, function (theme, name) {

		$iziToast[name] = function (options) {

			var settings = extend(CONFIG, options || {});
			settings = extend(theme, settings || {});

			this.show(settings);
		};

	});


	/**
	 * Close the specific Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.hide = function (options, $toast, closedBy) {

		var settings = extend(defaults, options || {});
			closedBy = closedBy || false;

		if(typeof $toast != 'object'){
			$toast = document.querySelector($toast);
		}
		$toast.classList.add(PLUGIN_NAME+'-closed');

		if(settings.transitionIn || settings.transitionInMobile){
			$toast.classList.remove(settings.transitionIn);
			$toast.classList.remove(settings.transitionInMobile);
		}

		if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
			if(settings.transitionOutMobile)
				$toast.classList.add(settings.transitionOutMobile);
		} else{
			if(settings.transitionOut)
				$toast.classList.add(settings.transitionOut);
		}
		var H = $toast.parentNode.offsetHeight;
				$toast.parentNode.style.height = H+'px';
				$toast.style.pointerEvents = 'none';
		
		if(!ISMOBILE || window.innerWidth > MOBILEWIDTH){
			$toast.parentNode.style.transitionDelay = '0.2s';
		}

		setTimeout(function() {
			$toast.parentNode.style.height = '0px';
			$toast.parentNode.style.overflow = '';
			window.setTimeout(function(){
				$toast.parentNode.remove();
			},1000);
		},200);

		if (settings.class){
			try {
				var event;
				if (window.CustomEvent) {
					event = new CustomEvent(PLUGIN_NAME+'-close', {detail: {class: settings.class}});
				} else {
					event = document.createEvent('CustomEvent');
					event.initCustomEvent(PLUGIN_NAME+'-close', true, true, {class: settings.class});
				}
				document.dispatchEvent(event);
			} catch(ex){
				console.warn(ex);
			}
		}

		if(typeof settings.onClose !== "undefined"){
			settings.onClose.apply(null, [settings, $toast, closedBy]);
		}
	};

	/**
	 * Create and show the Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.show = function (options) {

		var that = this;

		// Merge user options with defaults
		var settings = extend(CONFIG, options || {});
			settings = extend(defaults, settings);

		var $toastCapsule = document.createElement("div");
			$toastCapsule.classList.add(PLUGIN_NAME+"-capsule");

		var $toast = document.createElement("div");
			$toast.classList.add(PLUGIN_NAME);

		if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
			if(settings.transitionInMobile.length>0)
				$toast.classList.add(settings.transitionInMobile);
		} else {
			if(settings.transitionIn.length>0)
				$toast.classList.add(settings.transitionIn);
		}

		if(settings.rtl){
			$toast.classList.add(PLUGIN_NAME + '-rtl');
		}

		if (settings.color.length > 0) { //#, rgb, rgba, hsl
			
			if( isColor(settings.color) ){
				$toast.style.background = settings.color;
			} else {
				$toast.classList.add(PLUGIN_NAME+'-color-'+settings.color);
			}
		}
		if (settings.backgroundColor.length > 0) {
			$toast.style.background = settings.backgroundColor;
		}

		if (settings.class){
			$toast.classList.add(settings.class);
		}

		if (settings.image) {
			var $cover = document.createElement("div");
			$cover.classList.add(PLUGIN_NAME + '-cover');
			$cover.style.width = settings.imageWidth + "px";
			$cover.style.backgroundImage = 'url(' + settings.image + ')';
			$toast.appendChild($cover);
		}

		var $buttonClose;
		if(settings.close){
			$buttonClose = document.createElement("button");
			$buttonClose.classList.add(PLUGIN_NAME + '-close');
			$toast.appendChild($buttonClose);
		} else {
			if(settings.rtl){
				$toast.style.paddingLeft = "30px";
			} else {
				$toast.style.paddingRight = "30px";
			}
		}

		if (settings.progressBar) {

			var $progressBar = document.createElement("div");
				$progressBar.classList.add(PLUGIN_NAME + '-progressbar');

			var $progressBarDiv = document.createElement("div");
				$progressBarDiv.style.background = settings.progressBarColor;

			$progressBar.appendChild($progressBarDiv);
			$toast.appendChild($progressBar);
			
			setTimeout(function() {
				moveProgress($toast, settings, function(){
					that.hide(settings, $toast);
				});
			},300);
		}
		else if( settings.progressBar === false && settings.timeout > 0){
			setTimeout(function() {
				that.hide(settings, $toast);
			}, settings.timeout);
		}

		var $toastBody = document.createElement("div");
			$toastBody.classList.add(PLUGIN_NAME + '-body');

		if (settings.image) {
			if(settings.rtl){
				$toastBody.style.marginRight = (settings.imageWidth + 10) + 'px';
			} else {
				$toastBody.style.marginLeft = (settings.imageWidth + 10) + 'px';				
			}
		}

		if (settings.icon) {
			var $icon = document.createElement("i");
				$icon.setAttribute("class", PLUGIN_NAME + '-icon ' + settings.icon);
			
			if (settings.iconText){
				$icon.appendChild(document.createTextNode(settings.iconText));
			}

			if(settings.rtl){
				$toastBody.style.paddingRight = '33px';
			} else {
				$toastBody.style.paddingLeft = '33px';				
			}
			
			if (settings.iconColor){
				$icon.style.color = settings.iconColor;
			}
			$toastBody.appendChild($icon);
		}

		var $strong = document.createElement("strong");
		if (settings.titleColor.length > 0) {
			$strong.style.color = settings.titleColor;
		}
		$strong.appendChild(createFragElem(settings.title));

		var $p = document.createElement("p");
		if (settings.messageColor.length > 0) {
			$p.style.color = settings.messageColor;
		}
		$p.appendChild(createFragElem(settings.message));

		if(settings.layout > 1){
			$toast.classList.add(PLUGIN_NAME+"-layout"+settings.layout);
		}

		if(settings.balloon){
			$toast.classList.add(PLUGIN_NAME+"-balloon");
		}

		$toastBody.appendChild($strong);
		$toastBody.appendChild($p);

		var $buttons;
		if (settings.buttons.length > 0) {

			$buttons = document.createElement("div");
			$buttons.classList.add(PLUGIN_NAME + '-buttons');

			$p.style.marginRight = '15px';

			var i = 0;
			forEach(settings.buttons, function (value, index) {
				$buttons.appendChild(createFragElem(value[0]));

				var $btns = $buttons.childNodes;

				$btns[i].addEventListener('click', function (e) {
					e.preventDefault();
					var ts = value[1];
					return new ts(that, $toast); 
				});

				i++;
			});
			$toastBody.appendChild($buttons);
		}

		$toast.appendChild($toastBody);
		$toastCapsule.style.visibility = 'hidden';
		$toastCapsule.appendChild($toast);

		setTimeout(function() {
			var H = $toast.offsetHeight;
			var style = $toast.currentStyle || window.getComputedStyle($toast);
			var marginTop = style.marginTop;
				marginTop = marginTop.split("px");
				marginTop = parseInt(marginTop[0]);
			var marginBottom = style.marginBottom;
				marginBottom = marginBottom.split("px");
				marginBottom = parseInt(marginBottom[0]);

			$toastCapsule.style.visibility = '';
			$toastCapsule.style.height = (H+marginBottom+marginTop)+'px';
			setTimeout(function() {
				$toastCapsule.style.height = 'auto';
				if(settings.target){
					$toastCapsule.style.overflow = 'visible';
				}
			},1000);
		}, 100);

		var position = settings.position,
			$wrapper;

		if(settings.target){

			$wrapper = document.querySelector(settings.target);
			$wrapper.classList.add(PLUGIN_NAME + '-target');

			if (settings.targetFirst) {
				$wrapper.insertBefore($toastCapsule, $wrapper.firstChild);
			} else {
				$wrapper.appendChild($toastCapsule);
			}

		} else {

			if( POSITIONS.indexOf(settings.position) == -1 ){
				console.warn("["+PLUGIN_NAME+"] Incorrect position.\nIt can be › " + POSITIONS);
				return;
			}

			if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
				if(settings.position == "bottomLeft" || settings.position == "bottomRight" || settings.position == "bottomCenter"){
					position = PLUGIN_NAME+'-wrapper-bottomCenter';
				}
				else if(settings.position == "topLeft" || settings.position == "topRight" || settings.position == "topCenter"){
					position = PLUGIN_NAME+'-wrapper-topCenter';
				}
				else{
					position = PLUGIN_NAME+'-wrapper-center';
				}
			} else {
				position = PLUGIN_NAME+'-wrapper-'+position;
			}
			$wrapper = document.querySelector('.' + PLUGIN_NAME + '-wrapper.'+position);

			if (!$wrapper) {
				$wrapper = document.createElement("div");
				$wrapper.classList.add(PLUGIN_NAME + '-wrapper');
				$wrapper.classList.add(position);
				document.body.appendChild($wrapper);
			}
			if(settings.position == "topLeft" || settings.position == "topCenter" || settings.position == "topRight"){
				$wrapper.insertBefore($toastCapsule, $wrapper.firstChild);
			} else {
				$wrapper.appendChild($toastCapsule);
			}
		}

		if (!isNaN(settings.zindex)) {
			$wrapper.style.zIndex = settings.zindex;
		} else {
			console.warn("["+PLUGIN_NAME+"] Invalid zIndex.");
		}

		settings.onOpen.apply(null, [settings, $toast]);

		try {
			var event;
			if (window.CustomEvent) {
				event = new CustomEvent(PLUGIN_NAME+'-open', {detail: {class: settings.class}});
			} else {
				event = document.createEvent('CustomEvent');
				event.initCustomEvent(PLUGIN_NAME+'-open', true, true, {class: settings.class});
			}
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		if(settings.animateInside){
			$toast.classList.add(PLUGIN_NAME+'-animateInside');
		
			var timeAnimation1 = 200;
			var timeAnimation2 = 100;
			var timeAnimation3 = 300;
			if(settings.transitionIn == "bounceInLeft"){
				timeAnimation1 = 400;
				timeAnimation2 = 200;
				timeAnimation3 = 400;
			}

			window.setTimeout(function(){
				$strong.classList.add('slideIn');
			},timeAnimation1);

			window.setTimeout(function(){
				$p.classList.add('slideIn');
			},timeAnimation2);

			if (settings.icon) {
				window.setTimeout(function(){
					$icon.classList.add('revealIn');
				},timeAnimation3);
			}

			if (settings.buttons.length > 0 && $buttons) {
				var counter = 150;
				forEach($buttons.childNodes, function(element, index) {

					window.setTimeout(function(){
						element.classList.add('revealIn');
					},counter);
					counter = counter + counter;
				});
			}
		}
		
		if($buttonClose){
			$buttonClose.addEventListener('click', function (e) {
				var button = e.target;
				that.hide(settings, $toast, 'button');
			});
		}

		if(settings.pauseOnHover){
			
			$toast.addEventListener('mouseenter', function (e) {
				this.classList.add(PLUGIN_NAME+'-paused');
			});
			$toast.addEventListener('mouseleave', function (e) {
				this.classList.remove(PLUGIN_NAME+'-paused');
			});
		}

		if(settings.resetOnHover){

			$toast.addEventListener('mouseenter', function (e) {
				this.classList.add(PLUGIN_NAME+'-reseted');
			});
			$toast.addEventListener('mouseleave', function (e) {
				this.classList.remove(PLUGIN_NAME+'-reseted');
			});
		}

		if(settings.drag){

			if (ACCEPTSTOUCH) {

			    $toast.addEventListener('touchstart', function(e) {
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $toast.addEventListener('touchend', function(e) {
			        drag.stopMoving(this, e);
			    }, false);
			} else {

			    $toast.addEventListener('mousedown', function(e) {
			    	e.preventDefault();
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $toast.addEventListener('mouseup', function(e) {
			    	e.preventDefault();
			        drag.stopMoving(this, e);
			    }, false);
			}
		}


	};

	return $iziToast;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 24.04.2017.
 */
var StepObject = function () {
    function StepObject() {
        _classCallCheck(this, StepObject);

        this.hit = {
            method: null,
            target: null
        };
        this.block = {
            method: null
        };
    }

    _createClass(StepObject, [{
        key: "init",
        value: function init(hitMethod, hitTarget, blockMethod) {
            this.hit.method = hitMethod;
            this.hit.target = hitTarget;
            this.block.method = blockMethod;
        }
    }, {
        key: "checkOnEmpty",
        value: function checkOnEmpty() {
            if (this.hit.method !== null && this.hit.target !== null && this.block.method !== null) {
                return true;
            }
        }
    }]);

    return StepObject;
}();

exports.default = StepObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 07.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

__webpack_require__(100);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBar = function () {
    function ProgressBar() {
        _classCallCheck(this, ProgressBar);

        this.el = document.createElement('div');
    }

    /**
     * Метод возвращает элемент с абсолютной позицией
     * @return {Element|*}
     */


    _createClass(ProgressBar, [{
        key: 'getElem',
        value: function getElem() {
            this.el.setAttribute('class', 'loader');
            return this.el;
        }

        /**
         * Метод возвращает элемент с позицией от родителя
         * @return {Element|*}
         */

    }, {
        key: 'getElemParent',
        value: function getElemParent() {
            this.el.setAttribute('class', 'loader_parent');
            return this.el;
        }
    }]);

    return ProgressBar;
}();

exports.default = ProgressBar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__(10);

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(6);

var _defaultParams = __webpack_require__(26);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__(132);

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 05.03.2017.
 */

var Http = function () {
    function Http() {
        _classCallCheck(this, Http);

        if (Http.instance) {
            return Http.instance;
        }

        this._baseUrl = 'https://sf-server.herokuapp.com/api';
        //this._baseUrl = 'http://localhost:8000/api';
        //this._baseUrl = 'https://tp-server-java.herokuapp.com/api';

        Http.instance = this;
    }

    _createClass(Http, [{
        key: 'request',
        value: function request() {
            var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var fetchObj = {
                method: type,
                mode: 'cors',
                headers: headers,
                credentials: 'include'
            };
            if (body) {
                fetchObj.body = JSON.stringify(body);
            }

            return new Promise(function (resolve, reject) {
                fetch(address, fetchObj).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    resolve(json);
                }).catch(function (err) {
                    reject({});
                    console.error(err || err.statusText);
                });
            });
        }
    }, {
        key: 'BaseUrl',
        get: function get() {
            return this._baseUrl;
        },
        set: function set(value) {
            this._baseUrl = value;
        }
    }]);

    return Http;
}();

exports.default = Http;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _formButton = __webpack_require__(29);

var _formButton2 = _interopRequireDefault(_formButton);

var _formInput = __webpack_require__(30);

var _formInput2 = _interopRequireDefault(_formInput);

__webpack_require__(90);

__webpack_require__(86);

__webpack_require__(88);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    function Form() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, Form);

        // options - инструкции
        this.data = options.data;
        this.el = document.createElement('form');
        this.fields = [];
        this.controls = [];
        this._render();
    }

    /**
     * Отрисовка
     * @private
     */


    _createClass(Form, [{
        key: '_render',
        value: function _render() {
            this._setAttributes(this.data.form.attrs, this.el);
            var title = document.createElement(this.data.title.type);
            this._setAttributes(this.data.title.attrs, title);
            title.innerHTML = this.data.title.text;
            this.el.appendChild(title);

            this.fields = this._getFields();
            this.controls = this._getControls();
            this._fieldsAppendTo(this.fields, this.el);

            this._controlsAppendTo(this.controls, this.el);
        }

        /**
         * Возвращает элемент form
         * @return {Form}
         */

    }, {
        key: 'getElem',
        value: function getElem() {
            return this;
        }

        /**
         * Возвращает массив полей формы
         * @return {Array}
         * @private
         */

    }, {
        key: '_getFields',
        value: function _getFields() {
            var _data$fields = this.data.fields,
                fields = _data$fields === undefined ? [] : _data$fields;

            return fields.map(function (data) {
                return new _formInput2.default(data).getElem();
            });
        }

        /**
         * Установка атрибутов
         * @param attributes - массив атрибутов
         * @param elem - элемент к которому применяем атрибуты
         * @private
         */

    }, {
        key: '_setAttributes',
        value: function _setAttributes(attributes, elem) {
            Object.keys(attributes).forEach(function (name) {
                elem.setAttribute(name, attributes[name]);
            });
        }

        /**
         * Присоединение полей к элементу
         * @param array - массив полей
         * @param elem - элемент, к которому присоединяем
         * @private
         */

    }, {
        key: '_fieldsAppendTo',
        value: function _fieldsAppendTo(array, elem) {
            array.forEach(function (item) {
                elem.appendChild(item.el);
                elem.appendChild(item.help_el);
            });
        }

        /**
         * Присоединение элементов управления
         * @param array - массив элементов
         * @param elem - элемент, к которому присоединяем
         * @private
         */

    }, {
        key: '_controlsAppendTo',
        value: function _controlsAppendTo(array, elem) {
            array.forEach(function (item) {
                elem.appendChild(item.el);
            });
        }

        /**
         * Возвращает массив управляющих элементов формы
         * @return {Array}
         * @private
         */

    }, {
        key: '_getControls',
        value: function _getControls() {
            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;

            return controls.map(function (data) {
                return new _formButton2.default(data).getElem();
            });
        }

        /**
         * Возвращает объект данных из формы
         * @return {{}}
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            var elements = this.el.elements;
            var fields = {};

            Object.keys(elements).forEach(function (element) {
                var name = elements[element].name;
                var value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 06.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _RouterUrls = __webpack_require__(48);

var _RouterUrls2 = _interopRequireDefault(_RouterUrls);

var _GameStates = __webpack_require__(44);

var _GameStates2 = _interopRequireDefault(_GameStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);

        this.urlsObj = new _RouterUrls2.default();
        this.gameStatesObj = new _GameStates2.default();
        this.objUser = null;
        //this.objUser = {login: 'test'};
        Storage.__instance = this;
    }

    _createClass(Storage, [{
        key: "user",
        set: function set(user) {
            this.objUser = user;
        },
        get: function get() {
            return this.objUser;
        }
    }, {
        key: "urls",
        get: function get() {
            return this.urlsObj;
        }
    }, {
        key: "gameStates",
        get: function get() {
            return this.gameStatesObj;
        }
    }]);

    return Storage;
}();

var storage = new Storage();
exports.default = storage;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 03.03.2017.
 */
var CheckFields = function () {
    function CheckFields() {
        _classCallCheck(this, CheckFields);
    }

    /**
     * Проверка на латиницу
     * @param value - текст для проверка
     * @return {boolean} false - найдены латинские символы
     * @private
     */


    _createClass(CheckFields, null, [{
        key: '_checkLatin',
        value: function _checkLatin(value) {
            return value.match(/[а-яА-ЯёЁ]+/) === null;
        }

        /**
         * Проверка на валидность логина
         * @param obj - {field - элемент поля, help - элемент текста помощи для поля}
         * @return {boolean} true - поле валидно
         */

    }, {
        key: 'checkLogin',
        value: function checkLogin(obj) {
            var _this = this;

            var arr = [];
            if (!this._checkLatin(obj.field.value)) {
                arr.push({
                    err_text: 'Only Latin'
                });
            }
            if (obj.field.value.length < 4) {
                arr.push({
                    err_text: '4 - min length'
                });
            }

            obj.help.textContent = '';
            arr.forEach(function (item) {
                _this.fieldSetErr(obj.field);
                _this.fieldRemoveOk(obj.field);

                if (obj.help.textContent === '') {
                    obj.help.textContent = item.err_text;
                } else {
                    obj.help.textContent = obj.help.textContent + ',' + item.err_text;
                    console.log(obj.help.textContent);
                }
            });

            if (arr.length === 0) {
                this.fieldSetOk(obj.field);
            }

            return arr.length === 0;
        }

        /**
         * Проверка на длину пароля
         * @param value
         * @return {boolean} true - валидно
         * @private
         */

    }, {
        key: '_checkPassLength',
        value: function _checkPassLength(value) {
            return value.length >= 8;
        }

        /**
         * Проверка на эквивалентоность
         * @param value1
         * @param value2
         * @return {boolean} true - валидно
         * @private
         */

    }, {
        key: '_checkPassEquals',
        value: function _checkPassEquals(value1, value2) {
            return value1 === value2;
        }

        /**
         * Провека текста на пустоту
         * @param value
         * @return {boolean} true - пустое поле
         */

    }, {
        key: 'checkEmpty',
        value: function checkEmpty(value) {
            return value.length === 0;
        }

        /**
         * Проверка паролей на валидность
         * @param obj1 - {field - элемент поля, help - элемент текста помощи для поля}
         * @param obj2 - {field - элемент поля, help - элемент текста помощи для поля}
         * @return {boolean} true - поле валидно
         */

    }, {
        key: 'checkPassword',
        value: function checkPassword(obj1, obj2) {
            var _this2 = this;

            var arr = [];
            var check = true;

            if (check) {
                if (!this._checkPassLength(obj1.field.value)) {
                    arr.push({
                        err_text: '8 - min length',
                        field: obj1.field,
                        help: obj1.help
                    });
                }
                if (!this._checkPassEquals(obj1.field.value, obj2.field.value)) {
                    arr.push({
                        err_text: 'Passwords not equals',
                        field: obj1.field,
                        help: obj1.help
                    });
                    arr.push({
                        err_text: 'Passwords not equals',
                        field: obj2.field,
                        help: obj2.help
                    });
                }
            }

            obj1.help.textContent = '';
            obj2.help.textContent = '';
            arr.forEach(function (item) {
                _this2.fieldSetErr(item.field);
                _this2.fieldRemoveOk(item.field);

                if (item.help.textContent === '') {
                    item.help.textContent = item.err_text;
                } else {
                    item.help.textContent = item.help.textContent + '.' + item.err_text;
                }
            });

            if (arr.length === 0) {
                this.fieldSetOk(obj1.field);
                this.fieldSetOk(obj2.field);
            }
            return arr.length === 0;
        }
    }, {
        key: 'helpSetText',
        value: function helpSetText(elem, value) {
            elem.textContent = value;
        }
    }, {
        key: 'fieldSetText',
        value: function fieldSetText(elem, value) {
            elem.value = value;
        }
    }, {
        key: 'fieldSetErr',
        value: function fieldSetErr(elem) {
            elem.classList.add('form__input_error');
        }
    }, {
        key: 'fieldRemoveErr',
        value: function fieldRemoveErr(elem) {
            elem.classList.remove('form__input_error');
        }
    }, {
        key: 'fieldSetOk',
        value: function fieldSetOk(elem) {
            elem.classList.add('form__input_ok');
        }
    }, {
        key: 'fieldRemoveOk',
        value: function fieldRemoveOk(elem) {
            elem.classList.remove('form__input_ok');
        }
    }]);

    return CheckFields;
}();

exports.default = CheckFields;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Router = __webpack_require__(47);

var _Router2 = _interopRequireDefault(_Router);

var _MenuView = __webpack_require__(55);

var _MenuView2 = _interopRequireDefault(_MenuView);

var _LoginView = __webpack_require__(51);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _SignUpView = __webpack_require__(52);

var _SignUpView2 = _interopRequireDefault(_SignUpView);

var _LeaderBoardView = __webpack_require__(54);

var _LeaderBoardView2 = _interopRequireDefault(_LeaderBoardView);

var _AboutView = __webpack_require__(50);

var _AboutView2 = _interopRequireDefault(_AboutView);

var _ProfileView = __webpack_require__(56);

var _ProfileView2 = _interopRequireDefault(_ProfileView);

var _GameView = __webpack_require__(53);

var _GameView2 = _interopRequireDefault(_GameView);

var _UserService = __webpack_require__(0);

var _UserService2 = _interopRequireDefault(_UserService);

var _Storage = __webpack_require__(18);

var _Storage2 = _interopRequireDefault(_Storage);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(84);

var _musicControls = __webpack_require__(36);

var _musicControls2 = _interopRequireDefault(_musicControls);

var _ServiceWorker = __webpack_require__(49);

var _ServiceWorker2 = _interopRequireDefault(_ServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(location.href.match(/localhost/i)); /**
                                                 * Created by Denis on 04.03.2017.
                                                 */

if (location.protocol !== 'https:' && location.href.match(/localhost/i) === null) {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

//new ServiceWorker().init();

new _UserService2.default().getUser().then(function (user) {
    _Storage2.default.user = user;
    startRoute();
}).catch(function (err) {
    //console.log(err);
    startRoute();
});

loadYandexSpeech();
loadVk();

new _musicControls2.default().render();

function startRoute() {
    var router = new _Router2.default(window.document.documentElement);
    router.init({
        '/': {
            View: _MenuView2.default,
            el: document.getElementById('menu-view')
        },
        '/login': {
            View: _LoginView2.default,
            el: document.getElementById('login-view')
        },
        '/signup': {
            View: _SignUpView2.default,
            el: document.getElementById('signup-view')
        },
        '/leaderboard': {
            View: _LeaderBoardView2.default,
            el: document.getElementById('leaderboard-view')
        },
        '/about': {
            View: _AboutView2.default,
            el: document.getElementById('about-view')
        },
        '/profile': {
            View: _ProfileView2.default,
            el: document.getElementById('profile-view')
        },
        '/game': {
            View: _GameView2.default,
            el: document.getElementById('game-view')
        }
    });

    router.start();
}

function loadVk() {
    var vkScript = document.createElement('script');
    vkScript.src = 'https://vk.com/js/api/openapi.js?146';
    document.body.appendChild(vkScript);

    vkScript.onload = function () {
        VK.init({
            apiId: 5915120
        });
    };
}

function loadYandexSpeech() {
    var speechScript = document.createElement('script');
    speechScript.src = 'https://webasr.yandex.net/jsapi/v1/webspeechkit.js';
    document.body.appendChild(speechScript);

    var speechSettingsScript = document.createElement('script');
    speechSettingsScript.src = 'https://webasr.yandex.net/jsapi/v1/webspeechkit-settings.js';
    document.body.appendChild(speechSettingsScript);

    speechSettingsScript.onload = function () {
        window.ya.speechkit.settings.lang = 'ru-RU';
        window.ya.speechkit.settings.apikey = '36e3d30b-c782-483b-9ffe-13f8a98f17ff';
    };
}

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(85);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormButton = function () {
    function FormButton(options) {
        _classCallCheck(this, FormButton);

        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
        this._render();
    }

    /**
     * Установить элементу атрибуты
     * @param attributes - массив атрибутов
     * @private
     */


    _createClass(FormButton, [{
        key: '_setAttributes',
        value: function _setAttributes(attributes) {
            var _this = this;

            Object.keys(attributes).forEach(function (name) {
                _this.el.setAttribute(name, attributes[name]);
            });
        }

        /**
         * возвращает объект кнопки
         * @return {FormButton}
         */

    }, {
        key: 'getElem',
        value: function getElem() {
            return this;
        }

        /**
         * Отрисовка
         * @private
         */

    }, {
        key: '_render',
        value: function _render() {
            this.el.innerHTML = this.text;
            this._setAttributes(this.attrs);
        }
    }]);

    return FormButton;
}();

exports.default = FormButton;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _CheckFields = __webpack_require__(19);

var _CheckFields2 = _interopRequireDefault(_CheckFields);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
    function Input(options) {
        _classCallCheck(this, Input);

        this.text = options.text;
        this.attrs = options.attrs || [];
        this.help_attrs = options.help_attrs || [];
        this.el = document.createElement('input');
        this.help_el = document.createElement('p');
        this._render();
    }

    /**
     * Установить элементу аттрибуты
     * @param attributes - массив атрибутов
     * @param elem - элемент
     * @private
     */


    _createClass(Input, [{
        key: '_setAttributes',
        value: function _setAttributes(attributes, elem) {
            Object.keys(attributes).forEach(function (name) {
                elem.setAttribute(name, attributes[name]);
            });
        }

        /**
         * Отрисовка
         * @private
         */

    }, {
        key: '_render',
        value: function _render() {
            this._setAttributes(this.attrs, this.el);
            this._setAttributes(this.help_attrs, this.help_el);
        }

        /**
         * Возвращает элемент input
         * @return {Input}
         */

    }, {
        key: 'getElem',
        value: function getElem() {
            return this;
        }

        /**
         * Метод валидации данных в поле
         * @param prev - предыдущий элемент (для проверки паролей)
         * @return {*}
         */

    }, {
        key: 'validate',
        value: function validate(prev) {
            var check = true;
            if (_CheckFields2.default.checkEmpty(this.el.value)) {
                _CheckFields2.default.fieldSetErr(this.el);
                _CheckFields2.default.helpSetText(this.help_el, 'empty field');
                return false;
            }
            _CheckFields2.default.fieldRemoveErr(this.el);
            _CheckFields2.default.helpSetText(this.help_el, '');

            var valid = this.el.getAttribute('valid');
            if (valid === 'login') {
                return _CheckFields2.default.checkLogin({ field: this.el, help: this.help_el });
            } else if (valid === 'password') {} else if (valid === 'repeatpassword') {
                return _CheckFields2.default.checkPassword({ field: prev.el, help: prev.help_el }, { field: this.el, help: this.help_el });
            }

            return check;
        }

        /**
         * Отчистка полей
         */

    }, {
        key: 'clear',
        value: function clear() {
            _CheckFields2.default.helpSetText(this.help_el, '');
            _CheckFields2.default.fieldSetText(this.el, '');
            _CheckFields2.default.fieldRemoveOk(this.el);
            _CheckFields2.default.fieldRemoveErr(this.el);
        }

        //noinspection JSDuplicatedDeclaration

    }, {
        key: 'setError',
        value: function setError() {
            _CheckFields2.default.fieldSetErr(this.el);
        }

        //noinspection JSDuplicatedDeclaration

    }, {
        key: 'setError',
        value: function setError(value) {
            _CheckFields2.default.fieldSetErr(this.el);
            _CheckFields2.default.helpSetText(this.help_el, value);
        }
    }]);

    return Input;
}();

exports.default = Input;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 18.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

__webpack_require__(93);

__webpack_require__(91);

__webpack_require__(92);

var _StepObject = __webpack_require__(5);

var _StepObject2 = _interopRequireDefault(_StepObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameChooseAction = function () {
    function GameChooseAction(node, manager) {
        _classCallCheck(this, GameChooseAction);

        this.node = node;
        this.manager = manager;
        this.action = new _StepObject2.default();
        this.buffAction = new _StepObject2.default();
    }

    /**
     * Метод отрисовки
     */


    _createClass(GameChooseAction, [{
        key: "render",
        value: function render() {
            /*----------create main container-----------*/
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'game-choose-action hidden');
            this.node.appendChild(this.container);

            /*----------create content container-----------*/
            var contentContainer = document.createElement('div');
            contentContainer.setAttribute('class', 'game-choose-action__content');
            this.container.appendChild(contentContainer);

            /*----------create close button-----------*/
            this.buttonClose = document.createElement('span');
            this.buttonClose.setAttribute('class', 'game-choose-action__close-modal');
            this.buttonClose.innerHTML = '&times;';
            contentContainer.appendChild(this.buttonClose);

            /*-----------create container for action sets-----------*/
            var actionSetsContainer = document.createElement('div');
            actionSetsContainer.setAttribute('class', 'game-choose-action__sets-container');
            contentContainer.appendChild(actionSetsContainer);

            /*-----------create sets for actions-----------*/
            this.actionSetHit = document.createElement('div');
            this.actionSetHit.setAttribute('class', 'game-choose-action__action-hit-set');
            this.actionSetBlock = document.createElement('div');
            this.actionSetBlock.setAttribute('class', 'game-choose-action__action-block-set');
            actionSetsContainer.appendChild(this.actionSetHit);
            actionSetsContainer.appendChild(this.actionSetBlock);

            /*#############fill sets for actions###############*/
            /*-----------fill hit set-----------*/
            var hitHeader = document.createElement('div');
            hitHeader.setAttribute('class', 'game-choose-action__button_tabs');
            hitHeader.innerText = 'Hit';
            this.actionSetHit.appendChild(hitHeader);

            /*-----------create set for hit controls-----------*/
            this.setHitControls = document.createElement('div');
            this.setHitControls.setAttribute('class', 'action-set-controls');
            this.actionSetHit.appendChild(this.setHitControls);

            /*-----------fill block set-----------*/
            var blockHeader = document.createElement('div');
            blockHeader.setAttribute('class', 'game-choose-action__button_tabs');
            blockHeader.innerText = 'Block';
            this.actionSetBlock.appendChild(blockHeader);

            /*-----------create set for block controls-----------*/
            this.setBlockControlls = document.createElement('div');
            this.setBlockControlls.setAttribute('class', 'action-set-controls');
            this.actionSetBlock.appendChild(this.setBlockControlls);
            /*#####################################################*/

            /*-----------create controls blocks for block set-----------*/
            var containerBlockMethodControls = document.createElement('div');
            containerBlockMethodControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
            this.setBlockControlls.appendChild(containerBlockMethodControls);

            this.buttonBlockHead = document.createElement('div');
            this.buttonBlockHead.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonBlockHead.innerText = 'head';

            this.buttonBlockBody = document.createElement('div');
            this.buttonBlockBody.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonBlockBody.innerText = 'body';
            containerBlockMethodControls.appendChild(this.buttonBlockBody);
            containerBlockMethodControls.appendChild(this.buttonBlockHead);

            /*-----------create controls blocks for hit set-----------*/
            var containerHitMethodControls = document.createElement('div');
            containerHitMethodControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
            var containerHitTargetControls = document.createElement('div');
            containerHitTargetControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
            this.setHitControls.appendChild(containerHitMethodControls);
            this.setHitControls.appendChild(containerHitTargetControls);

            /*-----------fill controls blocks for hit set-----------*/
            /*##############-methods-################*/
            var hitMethodHeadText = document.createElement('h3');
            hitMethodHeadText.innerText = 'Method';
            containerHitMethodControls.appendChild(hitMethodHeadText);

            this.buttonHitMethodHead = document.createElement('div');
            this.buttonHitMethodHead.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonHitMethodHead.innerText = 'Head';
            containerHitMethodControls.appendChild(this.buttonHitMethodHead);

            this.buttonHitMethodArm = document.createElement('div');
            this.buttonHitMethodArm.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonHitMethodArm.innerText = 'Arm';
            containerHitMethodControls.appendChild(this.buttonHitMethodArm);

            this.buttonHitMethodLeg = document.createElement('div');
            this.buttonHitMethodLeg.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonHitMethodLeg.innerText = 'Leg';
            containerHitMethodControls.appendChild(this.buttonHitMethodLeg);

            /*##############-targets-################*/
            var hitTargetHeadText = document.createElement('h3');
            hitTargetHeadText.innerText = 'Target';
            containerHitTargetControls.appendChild(hitTargetHeadText);

            this.buttonHitTargetHead = document.createElement('div');
            this.buttonHitTargetHead.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonHitTargetHead.innerText = 'Head';
            containerHitTargetControls.appendChild(this.buttonHitTargetHead);

            this.buttonHitTargetBody = document.createElement('div');
            this.buttonHitTargetBody.setAttribute('class', 'game-choose-action__button_choose');
            this.buttonHitTargetBody.innerText = 'Body';
            containerHitTargetControls.appendChild(this.buttonHitTargetBody);

            /*--------------create probability block info--------------*/
            this.probabilityContainer = document.createElement('div');
            this.probabilityContainer.setAttribute('class', 'game-choose-action__probability-block');
            contentContainer.appendChild(this.probabilityContainer);

            this.probabilityInfo = document.createElement('h5');
            this.probabilityContainer.appendChild(this.probabilityInfo);

            this.probabilityInfo.innerHTML = "<action>Hit head</action> = <probability>the smallest</probability> probability, damage is the <damage>biggest</damage>.</br>\n                                        <action>Hit arm</action> = <probability>the biggest</probability> probability, damage is the <damage>smallest</damage>.</br>\n                                          <action>Hit leg</action> = <probability>average</probability> probability, damage is <damage>average</damage>.</br>";

            /*--------------create button choose--------------*/
            this.btnChoose = document.createElement('div');
            this.btnChoose.setAttribute('class', 'game-choose-action__button');
            this.btnChoose.innerText = 'Ok';
            contentContainer.appendChild(this.btnChoose);

            this._initActionSetsListeners();
        }

        /**
         * Установить состояние события, если оно открыто на редактирование
         * @param action
         */

    }, {
        key: "setStartAction",
        value: function setStartAction(action) {
            if (action !== null && typeof action !== 'undefined') {
                this.buffAction.init(action.hit.method, action.hit.target, action.block.method);
                //console.log(this.buffAction);
            } else {
                this.buffAction = new _StepObject2.default();
            }

            this.action = Object.assign({}, action);

            if (action !== null && typeof action !== 'undefined') {
                switch (this.action.hit.method) {
                    case 'head':
                        {
                            this._setButtonActionFocus(this.buttonHitMethodHead);
                            break;
                        }
                    case 'arm':
                        {
                            this._setButtonActionFocus(this.buttonHitMethodArm);
                            break;
                        }
                    case 'leg':
                        {
                            this._setButtonActionFocus(this.buttonHitMethodLeg);
                            break;
                        }
                }
                switch (this.action.hit.target) {
                    case 'head':
                        {
                            this._setButtonActionFocus(this.buttonHitTargetHead);
                            break;
                        }
                    case 'body':
                        {
                            this._setButtonActionFocus(this.buttonHitTargetBody);
                            break;
                        }
                }
                switch (this.action.block.method) {
                    case 'body':
                        {
                            this._setButtonActionFocus(this.buttonBlockBody);
                            break;
                        }
                    case 'head':
                        {
                            this._setButtonActionFocus(this.buttonBlockHead);
                            break;
                        }
                }
            }
        }

        /**
         * Инициализация слушателей кнопок по выбору действий
         * @private
         */

    }, {
        key: "_initActionSetsListeners",
        value: function _initActionSetsListeners() {
            this.actionListenersMap = new Map();
            //TODO normalize
            this.chooseMethodHitHead = function () {
                this.clearHitMethodFocus();
                this.buffAction.hit.method = 'head';
                this._setButtonActionFocus(this.buttonHitMethodHead);
            };
            this.chooseThanHitArm = function () {
                this.clearHitMethodFocus();
                this.buffAction.hit.method = 'arm';
                this._setButtonActionFocus(this.buttonHitMethodArm);
            };
            this.chooseThanHitLeg = function () {
                this.clearHitMethodFocus();
                this.buffAction.hit.method = 'leg';
                this._setButtonActionFocus(this.buttonHitMethodLeg);
            };
            this.chooseWhereHitHead = function () {
                this.clearHitTargetFocus();
                this.buffAction.hit.target = 'head';
                this._setButtonActionFocus(this.buttonHitTargetHead);
            };
            this.chooseWhereHitBody = function () {
                this.clearHitTargetFocus();
                this.buffAction.hit.target = 'body';
                this._setButtonActionFocus(this.buttonHitTargetBody);
            };

            this.buttonHitMethodHead.addEventListener('click', this.chooseMethodHitHead.bind(this));
            this.buttonHitMethodArm.addEventListener('click', this.chooseThanHitArm.bind(this));
            this.buttonHitMethodLeg.addEventListener('click', this.chooseThanHitLeg.bind(this));
            this.buttonHitTargetHead.addEventListener('click', this.chooseWhereHitHead.bind(this));
            this.buttonHitTargetBody.addEventListener('click', this.chooseWhereHitBody.bind(this));

            this.chooseBlockHead = function () {
                this.clearBlockMethodFocus();
                this.buffAction.block.method = 'head';
                this._setButtonActionFocus(this.buttonBlockHead);
            };
            this.chooseBlockBody = function () {
                this.clearBlockMethodFocus();
                this.buffAction.block.method = 'body';
                this._setButtonActionFocus(this.buttonBlockBody);
            };

            this.buttonBlockHead.addEventListener('click', this.chooseBlockHead.bind(this));
            this.buttonBlockBody.addEventListener('click', this.chooseBlockBody.bind(this));
        }

        /**
         * Установать кнопке выбранное положение
         * @param elem
         * @private
         */

    }, {
        key: "_setButtonActionFocus",
        value: function _setButtonActionFocus(elem) {
            elem.classList.add('game-choose-action__button_choose_focused');
        }

        /**
         * Убрать фокусы со всех кнопок блока
         */

    }, {
        key: "clearBlockMethodFocus",
        value: function clearBlockMethodFocus() {
            this.buttonBlockHead.classList.remove('game-choose-action__button_choose_focused');
            this.buttonBlockBody.classList.remove('game-choose-action__button_choose_focused');
        }

        /**
         * Убрать фокусы со всех кнопок удара "чем"
         */

    }, {
        key: "clearHitMethodFocus",
        value: function clearHitMethodFocus() {
            this.buttonHitMethodArm.classList.remove('game-choose-action__button_choose_focused');
            this.buttonHitMethodHead.classList.remove('game-choose-action__button_choose_focused');
            this.buttonHitMethodLeg.classList.remove('game-choose-action__button_choose_focused');
        }

        /**
         * Убрать фокусы со всех кнопок удара "куда"
         */

    }, {
        key: "clearHitTargetFocus",
        value: function clearHitTargetFocus() {
            this.buttonHitTargetHead.classList.remove('game-choose-action__button_choose_focused');
            this.buttonHitTargetBody.classList.remove('game-choose-action__button_choose_focused');
        }

        /**
         * Показать элемент
         */

    }, {
        key: "show",
        value: function show() {
            this.container.classList.remove('hidden');
        }

        /**
         * Спрятать элемент
         */

    }, {
        key: "hide",
        value: function hide() {
            this.container.classList.add('hidden');
        }

        /**
         * Убрать все фокусы с кнопок
         * @private
         */

    }, {
        key: "_clearFocused",
        value: function _clearFocused() {
            //this.clearActionData();
            this.clearHitTargetFocus();
            this.clearHitMethodFocus();
            this.clearBlockMethodFocus();
        }

        /**
         * Инициализация слушателей на кнопках [закрытие, подтверждение действия]
         * @param callback
         */

    }, {
        key: "initButtonsAction",
        value: function initButtonsAction(callback) {
            this.actionCallbackClose = function () {
                this.hide();
                this.deleteButtonAction();
                this._clearFocused();
                callback(null);
            };

            this.actionCallbackChoose = function () {

                if (this.buffAction.checkOnEmpty()) {
                    this.hide();
                    this.deleteButtonAction();

                    callback(this.buffAction);

                    this._clearFocused();
                } else {
                    _izitoast2.default.error({
                        title: 'Fill actions',
                        position: 'topCenter'
                    });
                }
            };

            this.buttonClose.addEventListener('click', this.actionCallbackClose.bind(this));
            this.btnChoose.addEventListener('click', this.actionCallbackChoose.bind(this));
        }

        /**
         * Удалить слушатели
         */

    }, {
        key: "deleteButtonAction",
        value: function deleteButtonAction() {
            this.buttonClose.removeEventListener('click', this.actionCallbackClose);
            this.btnChoose.removeEventListener('click', this.actionCallbackChoose);

            this.buttonHitMethodHead.removeEventListener('click', this.chooseMethodHitHead);
            this.buttonHitMethodArm.removeEventListener('click', this.chooseThanHitArm);
            this.buttonHitMethodLeg.removeEventListener('click', this.chooseThanHitLeg);
            this.buttonHitTargetHead.removeEventListener('click', this.chooseWhereHitHead);
            this.buttonHitTargetBody.removeEventListener('click', this.chooseWhereHitBody);
        }
    }]);

    return GameChooseAction;
}();

exports.default = GameChooseAction;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 08.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(96);

__webpack_require__(95);

__webpack_require__(94);

var _SpeechControl = __webpack_require__(38);

var _SpeechControl2 = _interopRequireDefault(_SpeechControl);

__webpack_require__(83);

var _sweetalert = __webpack_require__(134);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameControls = function () {
    function GameControls(node, gameActionModal, managerContext) {
        _classCallCheck(this, GameControls);

        this.node = node;
        this.gameActionModal = gameActionModal;
        this.managerContext = managerContext;
        this.isButtonStepActive = true;
    }

    /**
     * Отрисовка элемент
     */


    _createClass(GameControls, [{
        key: "render",
        value: function render() {
            var container = document.createElement('div');
            container.setAttribute('class', 'game-controls');

            this.actionContainer = document.createElement('div');
            this.actionContainer.setAttribute('class', 'game-controls_actions');

            this.buttonAddAction = document.createElement('div');
            this.buttonAddAction.innerText = 'add actions';
            this.buttonAddAction.setAttribute('class', 'game-controls__action-button_empty');
            this.actionContainer.appendChild(this.buttonAddAction);

            if (navigator.onLine) {
                this.speechControl = new _SpeechControl2.default(this.actionContainer);
                this.speechControl.render();
                this.speechControl.start();
            }

            container.appendChild(this.actionContainer);

            this.btnStep = document.createElement('div');
            this.btnStep.setAttribute('id', 'btn-next-step');
            this.btnStep.setAttribute('class', 'game-controls__button');
            this.btnStepText = document.createElement('p');
            this.btnStepText.innerText = 'Create step';
            this.btnStep.appendChild(this.btnStepText);
            container.appendChild(this.btnStep);

            this.btnHelp = document.createElement('h2');
            this.btnHelp.setAttribute('class', 'game-controls__button_help');
            this.btnHelp.innerText = 'help';
            container.appendChild(this.btnHelp);

            this.node.appendChild(container);
            this.initHelpListener();
        }
    }, {
        key: "initHelpListener",
        value: function initHelpListener() {
            this.btnHelp.addEventListener('click', function (event) {
                (0, _sweetalert2.default)({
                    title: "HOW TO USE",
                    text: "<h3>Keywords in speech:</h3>\n " + "<ul class='keywords'>" + "<li>Ударить Рукой|Ногой|Головой</li>" + "<li>В тело|В голову</li>" + "<li>Блок Головы|Тела</li>" + "</ul> ",
                    html: true,
                    animation: 'slide-from-top'
                });
            });
        }

        /**
         * Инициализация слушателей на кнопку "сделать шаг"
         * @param callback
         */

    }, {
        key: "initDoStepListener",
        value: function initDoStepListener(callback) {
            this.createStep = function () {
                if (this.isButtonStepActive) {
                    callback();
                }
            };
            this.btnStep.addEventListener('click', this.createStep.bind(this));
        }

        /**
         * Удалить слушателя на кнопку "сделать шаг"
         */

    }, {
        key: "deleteDoStepListener",
        value: function deleteDoStepListener() {
            this.btnStep.removeEventListener('click', this.createStep);
        }

        /**
         * Инициализация слушателей на кнопку "выбрать действие"
         * @param callback
         */

    }, {
        key: "initActionListener",
        value: function initActionListener(callback) {
            this.gameActionModal.initButtonsAction(function (actionObj) {
                callback(actionObj);
            });

            this.actionAddCallback = function () {
                if (this.isButtonStepActive) {
                    this.gameActionModal.setStartAction(this.managerContext.strategy.myStep);
                    this.gameActionModal.show();
                }
            };

            this.buttonAddAction.addEventListener('click', this.actionAddCallback.bind(this));
        }

        /**
         * Удалить слушателя на кнопку "выбрать действие"
         */

    }, {
        key: "deleteActionListener",
        value: function deleteActionListener() {
            this.buttonAddAction.removeEventListener('click', this.actionAddCallback);
            this.gameActionModal.deleteButtonAction();
        }
    }, {
        key: "setButtonStepStatus",
        value: function setButtonStepStatus(law) {
            this.isButtonStepActive = law;
            if (law) {
                this.btnStep.classList.remove('game-controls__button_disabled');
                this.btnStepText.innerText = 'Create step';
            } else {
                this.btnStep.classList.add('game-controls__button_disabled');
                this.btnStepText.innerText = 'Wait ...';
            }
        }
    }]);

    return GameControls;
}();

exports.default = GameControls;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 19.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(97);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameInfoToast = function () {
    function GameInfoToast(node, health, login, position) {
        _classCallCheck(this, GameInfoToast);

        this.node = node;
        this.health = health;
        this.login = login;
        this.position = position;
        this.healthConst = 2.4;
    }

    _createClass(GameInfoToast, [{
        key: 'render',
        value: function render() {
            this.el = document.createElement('div');

            if (this.position === 'left') {
                this.el.setAttribute('class', 'game-info-toast_left');
            } else {
                this.el.setAttribute('class', 'game-info-toast_right');
            }

            this.canvas = document.createElement('canvas');
            this.canvas.setAttribute('class', 'game-info-toast__canvas');
            this.el.appendChild(this.canvas);

            /*if(this.canvas.getContext) {
             let context = this.canvas.getContext('2d');
             context.font = '32px Orbitron';
             context.fillText(`${this.login}`, 80,35);
               context.beginPath();
             context.rect(30, 50, this.health*this.healthConst, 30);
             context.closePath();
             context.fillStyle = 'red';
             context.fill();
               context.fillText(`Health: ${this.health}`, 70,130);
             }*/
            this.updateHealth(100);

            this.node.appendChild(this.el);
        }
    }, {
        key: 'updateHealth',
        value: function updateHealth(hp) {
            this.health = hp;
            if (this.canvas.getContext) {
                var context = this.canvas.getContext('2d');
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                context.fillStyle = 'black';
                context.font = '32px Orbitron';
                context.fillText('' + this.login, 30, 35);

                context.beginPath();
                context.rect(30, 50, this.healthConst * this.health, 30);
                context.closePath();
                context.fillStyle = 'red';
                context.fill();

                context.fillText('Health: ' + this.health, 50, 130);
            }
        }
    }]);

    return GameInfoToast;
}();

exports.default = GameInfoToast;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 20.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

__webpack_require__(98);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameResultTable = function () {
    function GameResultTable(node) {
        _classCallCheck(this, GameResultTable);

        this.node = node;
    }

    _createClass(GameResultTable, [{
        key: 'render',
        value: function render(settings) {
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'game-result-table');
            this.node.appendChild(this.container);

            this._addData(settings);
        }
    }, {
        key: '_addData',
        value: function _addData(settings) {
            console.log(settings);
            if (settings.me.win) {
                this.titleResult = document.createElement('h1');
                this.titleResult.innerText = 'You win :>';
                this.container.appendChild(this.titleResult);
            } else {
                this.titleResult = document.createElement('h1');
                this.titleResult.innerText = 'You lose :<';
                this.container.appendChild(this.titleResult);
            }

            /*----------------my data-----------------*/
            this.myDataInfo = document.createElement('div');
            this.myDataInfo.setAttribute('class', 'game-result-table__my-info');
            this.container.appendChild(this.myDataInfo);

            var title = document.createElement('h1');
            title.innerText = 'My results: ';
            this.myDataInfo.appendChild(title);

            var login = document.createElement('h2');
            login.innerText = 'Login: ' + settings.me.object.login;
            this.myDataInfo.appendChild(login);

            var rating = document.createElement('h2');
            rating.innerText = 'Rating: ' + settings.me.object.rating;
            this.myDataInfo.appendChild(rating);

            /*----------------opponent data-----------------*/
            this.opponentDataInfo = document.createElement('div');
            this.opponentDataInfo.setAttribute('class', 'game-result-table__opponent-info');
            this.container.appendChild(this.opponentDataInfo);

            title = document.createElement('h1');
            title.innerText = 'Opponent results: ';
            this.opponentDataInfo.appendChild(title);

            login = document.createElement('h4');
            login.innerText = 'Login: ' + settings.opponent.object.login;
            this.opponentDataInfo.appendChild(login);

            rating = document.createElement('h4');
            rating.innerText = 'Rating: ' + settings.opponent.object.rating;
            this.opponentDataInfo.appendChild(rating);

            /*-------------add button--------------*/
            this.btnOk = document.createElement('div');
            this.btnOk.setAttribute('class', 'game-result-table__button');
            this.btnOk.innerText = 'Ok';
            this.opponentDataInfo.appendChild(this.btnOk);
        }
    }, {
        key: 'initListener',
        value: function initListener(callback) {
            this.btnOk.addEventListener('click', function (event) {
                callback();
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.node.removeChild(this.container);
        }
    }]);

    return GameResultTable;
}();

exports.default = GameResultTable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 27.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

__webpack_require__(99);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameTimer = function () {
    function GameTimer(node) {
        _classCallCheck(this, GameTimer);

        this.node = node;
    }

    _createClass(GameTimer, [{
        key: 'render',
        value: function render() {
            this.container = document.createElement('div');
            this.node.appendChild(this.container);
            this.container.setAttribute('class', 'game-timer');

            this.timeText = document.createElement('h1');
            this.container.appendChild(this.timeText);
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            this.show();
            return new Promise(function (resolve) {
                _this.timeDown = new Date().getTime();
                _this.timeDown = _this.timeDown + 30000;

                _this.inteval = setInterval(function () {
                    var now = new Date().getTime();
                    var distance = _this.timeDown - now;

                    var seconds = Math.floor(distance % (1000 * 60) / 1000);
                    _this.timeText.textContent = '00:' + seconds;

                    //console.warn(`00:${seconds}`);
                    if (seconds <= 0) {
                        _this.cancel();
                        resolve();
                    }
                }, 1000);
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            setTimeout(function () {
                _this2.timeText.classList.remove('hidden');
            }, 1000);
        }
    }, {
        key: 'hidden',
        value: function hidden() {
            this.timeText.classList.add('hidden');
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            clearInterval(this.inteval);
        }
    }]);

    return GameTimer;
}();

exports.default = GameTimer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 07.05.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(101);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MusicControls = function () {
    function MusicControls() {
        _classCallCheck(this, MusicControls);

        this.musicElement = document.getElementById('music-bg');
    }

    _createClass(MusicControls, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.button = document.createElement('div');
            this.button.setAttribute('class', 'music-controls music-controls_on');
            document.body.appendChild(this.button);

            this.button.addEventListener('click', function (event) {
                if (_this.musicElement.paused) {
                    _this.musicElement.play();
                    _this.button.classList.remove('music-controls_off');
                    _this.button.classList.add('music-controls_on');
                } else {
                    _this.musicElement.pause();
                    _this.button.classList.remove('music-controls_on');
                    _this.button.classList.add('music-controls_off');
                }
            });
        }
    }]);

    return MusicControls;
}();

exports.default = MusicControls;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 20.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(102);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBarTable = function () {
    function ProgressBarTable(node) {
        _classCallCheck(this, ProgressBarTable);

        this.node = node;
    }

    _createClass(ProgressBarTable, [{
        key: 'render',
        value: function render(settings) {
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'progress-bar-table');
            this.node.appendChild(this.container);

            this.progressBar = document.createElement('div');
            this.progressBar.setAttribute('class', 'loader_parent');
            this.container.appendChild(this.progressBar);

            this._addText(settings);
        }
    }, {
        key: '_addText',
        value: function _addText(settings) {
            var _this = this;

            var textArray = settings.conf;
            textArray.forEach(function (elem) {
                var text = document.createElement('h1');
                text.innerText = elem.text;
                _this.container.appendChild(text);
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.node.removeChild(this.container);
        }
    }]);

    return ProgressBarTable;
}();

exports.default = ProgressBarTable;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 21.05.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(103);

var _StepObject = __webpack_require__(5);

var _StepObject2 = _interopRequireDefault(_StepObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpeechControl = function () {
    function SpeechControl(node) {
        _classCallCheck(this, SpeechControl);

        this.node = node;
        this.isActive = false;
    }

    _createClass(SpeechControl, [{
        key: "render",
        value: function render() {
            this.button = document.createElement('div');
            this.button.setAttribute('class', 'speech-element');

            var img = document.createElement('img');
            img.setAttribute('src', '/src/img/microphone.png');
            img.setAttribute('width', '60px');
            img.setAttribute('height', '60px');
            this.button.appendChild(img);

            this.node.appendChild(this.button);
        }
    }, {
        key: "start",
        value: function start() {
            this._initListeners();
        }
    }, {
        key: "_initListeners",
        value: function _initListeners() {
            var _this = this;

            this.speechRecognition = new window.ya.speechkit.SpeechRecognition();

            this.button.addEventListener('click', function (event) {
                if (_this.isActive) {
                    //this.speechRecognition.stop();
                } else {
                    _this.speechRecognition.start({
                        dataCallback: _this._analiseSpeech.bind(_this),
                        initCallback: _this._startRecognize.bind(_this),
                        errorCallback: _this._errorRecognize.bind(_this),
                        stopCallback: _this._stopRecognize.bind(_this),
                        infoCallback: _this._statusRecognize.bind(_this),
                        utteranceSilence: 60
                    });
                }
            });
        }
    }, {
        key: "_startRecognize",
        value: function _startRecognize() {
            this.isActive = true;
            this._startAnimation();
        }
    }, {
        key: "_errorRecognize",
        value: function _errorRecognize(err) {
            this._finishAnimation();
            console.warn(err);
            this.isActive = false;
        }
    }, {
        key: "_statusRecognize",
        value: function _statusRecognize(sent_bytes, sent_packages, processed, format) {
            /*console.log("Отправлено данных на сервер: " + sent_bytes);
             console.log("Отправлено пакетов на сервер: " + sent_packages);
             console.log("Количество пакетов, которые обработал сервер: " + processed);
             console.log("До какой частоты понижена частота дискретизации звука: " + format);*/
        }
    }, {
        key: "_stopRecognize",
        value: function _stopRecognize() {
            this.isActive = false;
            this._finishAnimation();
            console.log("Запись звука прекращена.");
        }
    }, {
        key: "_analiseSpeech",
        value: function _analiseSpeech(text, done, merge, words, biometry) {
            if (done && text !== '') {
                this._analiseText(text);
                this.speechRecognition.stop();
                console.warn(biometry);
            }
            /*console.log("Распознанный текст: " + text);
            console.log("Является ли результат финальным:" + done);
            console.log("Число обработанных запросов, по которым выдан ответ от сервера: " + merge);
            console.log("Подробная информаия о распознанных фрагметах: " + words);
            console.log(biometry);*/
        }
    }, {
        key: "_startAnimation",
        value: function _startAnimation() {
            var frames = [{ transform: 'scale(1)', offset: 0, opacity: 1 }, { transform: 'scale(1.05)', opacity: .8, offset: .333333 }, { transform: 'scale(1.06)', opacity: .7, offset: .666667 }, { transform: 'scale(1.07)', opacity: .8, offset: 1 }];

            var timings = {
                duration: 700,
                iterations: Infinity,
                direction: 'alternate',
                fill: 'forwards',
                delay: 0,
                easing: 'ease-in-out'
            };
            this.button.classList.add('speech-element_active');
            this.buttonAnimation = this.button.animate(frames, timings);
        }
    }, {
        key: "_finishAnimation",
        value: function _finishAnimation() {
            this.button.classList.remove('speech-element_active');
            if (typeof this.buttonAnimation !== 'undefined') this.buttonAnimation.cancel();
        }
    }, {
        key: "_analiseText",
        value: function _analiseText(text) {
            var stepObj = new _StepObject2.default();
            console.warn("RESULT=" + text);
            var textWOSpaces = text.replace(/\s/g, '');
            console.warn("РУКА=" + this._prefixFunction("ударрукой", textWOSpaces));
            console.warn("НОГА=" + this._prefixFunction("ударногой", textWOSpaces));
            console.warn("ГОЛОВА=" + this._prefixFunction("ударголовой", textWOSpaces));
            console.warn("В ГОЛОВУ=" + this._prefixFunction("вголову", textWOSpaces));
            console.warn("В ГОЛОВУ=" + this._prefixFunction("голову", textWOSpaces));
            console.warn("БЛОК ГОЛОВУ=" + this._prefixFunction("блокголовы", textWOSpaces));
        }
    }, {
        key: "_prefixFunction",
        value: function _prefixFunction(sub, string) {
            var s = sub + '@' + string;

            var maxLength = 0;
            var n = s.length;
            var prefixArr = new Array(n);

            prefixArr[0] = 0;
            if (s[0] === s[1]) prefixArr[1] = 1;

            for (var i = 1; i < n; i++) {
                var j = prefixArr[i - 1];
                while (j > 0 && s[i] !== s[j]) {
                    j = prefixArr[j - 1];
                }

                if (s[i] === s[j]) {
                    j++;
                    if (j > maxLength) {
                        maxLength = j;
                    }
                }

                prefixArr[i] = j;
            }

            console.log("maxLength=" + maxLength);
            console.log("sub.length=" + sub.length);
            return maxLength / sub.length;
        }
    }]);

    return SpeechControl;
}();

exports.default = SpeechControl;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _GameScene = __webpack_require__(40);

var _GameScene2 = _interopRequireDefault(_GameScene);

var _Singleplayer = __webpack_require__(43);

var _Singleplayer2 = _interopRequireDefault(_Singleplayer);

var _Multiplayer = __webpack_require__(42);

var _Multiplayer2 = _interopRequireDefault(_Multiplayer);

var _StepObject = __webpack_require__(5);

var _StepObject2 = _interopRequireDefault(_StepObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameManager = function () {
    function GameManager(router, storage, view, strategyName) {
        _classCallCheck(this, GameManager);

        //для мультиплеера
        this._gameId = null;

        this.router = router;
        this.storage = storage;
        this.node = view.node;
        this.view = view;

        this.scene = new _GameScene2.default(this.view.node, this.storage, this);
        //установить состояние ожидания
        this.scene.setState(this.storage.gameStates.STATEWAIT);

        this.strategy = strategyName === this.storage.gameStates.SINGLEPLAYER_STRATEGY ? new _Singleplayer2.default(this) : new _Multiplayer2.default(this);
    }

    _createClass(GameManager, [{
        key: "startGame",
        value: function startGame() {
            var _this = this;

            if (this.strategy instanceof _Multiplayer2.default) {
                console.log("MP");
                this.ws = new WebSocket('wss://sf-server.herokuapp.com/api/user/game');
                this.ws.onopen = function () {
                    console.log("Соединение установлено.");
                    _this.initWebSocketListeners();
                };
            } else {
                this.startSpGameProcess();
            }
        }

        /**
         * Начать игровой процесс SP
         */

    }, {
        key: "startSpGameProcess",
        value: function startSpGameProcess() {
            if (this.checkUser()) {
                if (this.strategy.constructor.name === _Singleplayer2.default.name) {
                    this.strategy.setPlayers(this.storage.user, { login: 'SUPER BOT', rating: 99999999 });
                    this.scene.setState(this.storage.gameStates.STATEGAME);
                    this.strategy.startGameLoop();
                }
            } else {
                this.router.go(this.storage.urls.LOGIN, true);
            }
        }

        /**
         * Начать игровой процесс MP
         */

    }, {
        key: "startMpGameProcess",
        value: function startMpGameProcess(mpOpponentLogin) {
            if (this.checkUser()) {
                if (this.strategy.constructor.name === _Multiplayer2.default.name) {
                    this.strategy.setPlayers(this.storage.user, { login: mpOpponentLogin });
                    this.scene.setState(this.storage.gameStates.STATEGAME);
                    this.strategy.startGameLoop();
                    this.scene.renderTimer();
                }
            } else {
                this.router.go(this.storage.urls.LOGIN, true);
            }
        }

        /**
         * Завершить игровой процесс
         */

    }, {
        key: "finish",
        value: function finish(myResult, opponentResult) {
            this.scene.setResultData(myResult, opponentResult);
            this.scene.setState(this.storage.gameStates.STATERESULT);
        }

        /**
         * Проверить user-а на существования
         * @return {boolean}
         */

    }, {
        key: "checkUser",
        value: function checkUser() {
            try {
                return this.storage.user.login !== null;
            } catch (e) {
                return false;
            }
        }

        /**
         * Инициализация слушателей WebSocket-а
         */

    }, {
        key: "initWebSocketListeners",
        value: function initWebSocketListeners() {
            var _this2 = this;

            this.ws.onmessage = function (event) {
                console.group("Получены данные");
                console.log(event.data);
                console.groupEnd();

                _this2.wsMessageAnalyze(JSON.parse(event.data));
            };

            this.ws.onerror = function (error) {
                console.group("Ошибка");
                console.error(error);
                console.groupEnd();
            };

            this.ws.onclose = function (event) {
                console.group("Соединение закрыто");
                console.error(event);
                console.groupEnd();
            };
        }

        /**
         * Метод обработки входящих сообщений по ws
         * @param data
         */

    }, {
        key: "wsMessageAnalyze",
        value: function wsMessageAnalyze(data) {
            if ('message' in data) {
                switch (data.message) {
                    case 'Connect':
                        {

                            break;
                        }
                    case 'Waiting':
                        {

                            break;
                        }
                    case 'pulse':
                        {

                            break;
                        }
                }
            } else if ('key' in data) {
                this._gameId = data.key;
                var opponentLogin = data.first === this.storage.user.login ? data.second : data.first;
                this.startMpGameProcess(opponentLogin);
                this.startMpTimer(0);
            } else if ('id' in data) {
                this.stepResultAnalyze(data);
                this.startMpTimer(5);
            }
        }

        /**
         * Запустить таймер
         */

    }, {
        key: "startMpTimer",
        value: function startMpTimer(delay) {
            var _this3 = this;

            this.scene.timer.hidden();
            this.scene.timer.cancel();
            setTimeout(function () {
                _this3.ws.send(JSON.stringify({ id: _this3._gameId }));
                _this3.scene.timer.start().then(function () {
                    var step = new _StepObject2.default();
                    step.init('null', 'null', 'null');
                    _this3.strategy.myStep = step;
                    _this3.strategy.sendStep();
                });
            }, delay * 1000);
        }

        /**
         * Обработка шагов(достаем действия шагов из объекта)
         * @param data
         */

    }, {
        key: "stepResultAnalyze",
        value: function stepResultAnalyze(data) {
            var myAction = new _StepObject2.default();
            var opponentAction = new _StepObject2.default();
            var myDamage = 0;
            var opponentDamage = 0;
            var myHealth = 0;
            var opponentHealth = 0;
            if (data.first.login === this.storage.user.login) {
                myAction.init(data.first.method, data.first.target, data.first.block);
                opponentAction.init(data.second.method, data.second.target, data.second.block);
                myDamage = data.first.takenDamage;
                opponentDamage = data.second.takenDamage;
                myHealth = data.first.hp;
                opponentHealth = data.second.hp;
            } else {
                myAction.init(data.second.method, data.second.target, data.second.block);
                opponentAction.init(data.first.method, data.first.target, data.first.block);
                myDamage = data.second.takenDamage;
                opponentDamage = data.first.takenDamage;
                myHealth = data.second.hp;
                opponentHealth = data.first.hp;
            }
            this.strategy.stepAnalyze(myAction, opponentAction, myDamage, opponentDamage, myHealth, opponentHealth);
            this.view.gameControls.setButtonStepStatus(true);
        }

        /**
         * Закрыть ws соединение
         */

    }, {
        key: "closeWebSocket",
        value: function closeWebSocket() {
            if (typeof this.ws !== 'undefined') this.ws.close();
        }
    }]);

    return GameManager;
}();

exports.default = GameManager;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 29.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
// import B4W from "../../../../vendor/js/b4w.min";

var _GameInfoToast = __webpack_require__(33);

var _GameInfoToast2 = _interopRequireDefault(_GameInfoToast);

var _progressBarTable = __webpack_require__(37);

var _progressBarTable2 = _interopRequireDefault(_progressBarTable);

var _GameResultTable = __webpack_require__(34);

var _GameResultTable2 = _interopRequireDefault(_GameResultTable);

var _GameTimer = __webpack_require__(35);

var _GameTimer2 = _interopRequireDefault(_GameTimer);

__webpack_require__(185);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameScene = function () {
    function GameScene(node, storage, manager) {
        _classCallCheck(this, GameScene);

        this.HDim = 34;
        this.WDim = 50;

        this.node = node;
        this.manager = manager;
        this.storage = storage;

        this.app = b4w.require("app");
        this.data = b4w.require("data");

        this._setSize();
    }

    /**
     * Установить все размеры экрана
     * @private
     */


    _createClass(GameScene, [{
        key: "_setSize",
        value: function _setSize() {
            var height = window.innerHeight;
            this.fieldSize = height / this.HDim | 0;
            this.WIDTH = window.innerWidth;
            console.log("WIDTH = " + this.WIDTH);
            this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;
        }
    }, {
        key: "_onWindowResize",
        value: function _onWindowResize() {
            var height = window.innerHeight;

            this.fieldSize = height / this.HDim | 0;
            this.WIDTH = window.innerWidth;

            this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;

            this.container.style.height = this.HEGHT + "px";

            /* console.log(`RESIZE WIDTH = ${this.WIDTH}`);
             console.log(`RESIZE HEIGHT = ${this.HEGHT}`);*/
        }

        /**
         * Инициализация слушателей
         * @private
         */

    }, {
        key: "_initListeners",
        value: function _initListeners() {
            window.addEventListener('resize', this._onWindowResize.bind(this), false);
        }

        /**
         * Установить текущее состояние
         * @param state - состояние
         */

    }, {
        key: "setState",
        value: function setState(state) {
            this.state = state;
            this._renderState();
        }

        /**
         * Отрисовка, относительно входного события
         * @private
         */

    }, {
        key: "_renderState",
        value: function _renderState() {
            switch (this.state) {
                case this.storage.gameStates.STATEWAIT:
                    {
                        this._renderWaitState();
                        break;
                    }
                case this.storage.gameStates.STATEGAME:
                    {
                        this._renderGameState();
                        break;
                    }
                case this.storage.gameStates.STATERESULT:
                    {
                        this._renderResultState();
                        break;
                    }
            }
        }
    }, {
        key: "_addStyleOnCanvas",
        value: function _addStyleOnCanvas() {
            this.canvas = this.node.getElementsByTagName('canvas')[2];
        }

        /**
         * Отрисовка ждущего режима
         * @private
         */

    }, {
        key: "_renderWaitState",
        value: function _renderWaitState() {
            this.progressBarTable = new _progressBarTable2.default(this.node);
            this.progressBarTable.render({
                conf: [{
                    text: 'Search for an opponent...'
                }]
            });
        }

        /**
         * Отрисовка игрового режима
         * @private
         */

    }, {
        key: "_renderGameState",
        value: function _renderGameState() {
            this.progressBarTable.remove();
            this._renderContainer();

            this.manager.view.renderControlElements();

            this._renderInfoBars();
            this._initListeners();
        }
    }, {
        key: "_renderContainer",
        value: function _renderContainer() {
            this.container = document.createElement('div');
            this.container.setAttribute('id', 'game-container');
            this.container.setAttribute('class', 'game-container');
            this.node.appendChild(this.container);

            this._onWindowResize();

            this._renderCanvas();
        }

        /**
         * Отрисовка canvas
         */

    }, {
        key: "_renderCanvas",
        value: function _renderCanvas() {
            var _this = this;

            this.app.init({
                canvas_container_id: "game-container",
                autoresize: true,
                physics_enabled: true,
                callback: function callback() {
                    _this._addStyleOnCanvas();
                    _this.data.load("/src/three-models/animation_all.json", function () {});
                }
            });
        }

        /**
         * Отрисовка таймера
         */

    }, {
        key: "renderTimer",
        value: function renderTimer() {
            this.timer = new _GameTimer2.default(this.node);
            this.timer.render();
        }

        /**
         * Отрисовка послеигрового режима (результаты, итоги)
         * @private
         */

    }, {
        key: "_renderResultState",
        value: function _renderResultState() {
            var _this2 = this;

            this.clearView();

            this.gameResultTable = new _GameResultTable2.default(this.node);
            this.gameResultTable.render(this.resultData);
            this.gameResultTable.initListener(function () {
                _this2.manager.router.go(_this2.storage.urls.PROFILE, false);
            });
        }

        /**
         * Метод отчистки вьюшки
         */

    }, {
        key: "clearView",
        value: function clearView() {
            while (this.node.children.length > 0) {
                this.node.removeChild(this.node.lastChild);
            }
        }

        /**
         * Отрисовка элементов здоровья
         * @private
         */

    }, {
        key: "_renderInfoBars",
        value: function _renderInfoBars() {
            this.myInfo = new _GameInfoToast2.default(this.node, this.players.me.health, this.players.me.login, 'left');
            this.myInfo.render();
            this.opponentInfo = new _GameInfoToast2.default(this.node, this.players.opponent.health, this.players.opponent.login, 'right');
            this.opponentInfo.render();
        }

        /**
         * Установка данных игроков
         * @param me
         * @param opponent
         */

    }, {
        key: "setPlayers",
        value: function setPlayers(me, opponent) {
            this.players = { me: me, opponent: opponent };
        }

        /**
         * Установить данные по результатам боя
         * @param me
         * @param opponent
         */

    }, {
        key: "setResultData",
        value: function setResultData(me, opponent) {
            this.resultData = {
                me: me,
                opponent: opponent
            };
        }
    }]);

    return GameScene;
}();

exports.default = GameScene;

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

var _StepObject = __webpack_require__(5);

var _StepObject2 = _interopRequireDefault(_StepObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiPlayerStrategy = function () {
    function MultiPlayerStrategy(manager) {
        _classCallCheck(this, MultiPlayerStrategy);

        this.manager = manager;
        this.myStep = new _StepObject2.default();
    }

    /**
     * Игровой цикл
     */


    _createClass(MultiPlayerStrategy, [{
        key: "gameLoop",
        value: function gameLoop() {
            if (this.me.health <= 0) {
                //TODO create rating analyser
                this.finishGameLoop();
                this.manager.finish({
                    win: false,
                    object: this.me
                }, {
                    win: true,
                    object: this.opponent
                });
            } else if (this.opponent.health <= 0) {
                this.finishGameLoop();
                this.manager.finish({
                    win: true,
                    object: this.me
                }, {
                    win: false,
                    object: this.opponent
                });
            }
        }

        /**
         * Начать игрвой цикл
         */

    }, {
        key: "startGameLoop",
        value: function startGameLoop() {
            var _this = this;

            this.inteval = setInterval(function () {
                return _this.gameLoop();
            }, 100);

            this.initDoStepListener();
            this.initActionListener();
        }

        /**
         * Инициализировать слушателей на кнопки "выбор действия"
         */

    }, {
        key: "initActionListener",
        value: function initActionListener() {
            var _this2 = this;

            this.manager.view.gameControls.initActionListener(function (actionObj) {
                if (actionObj !== null && typeof actionObj !== 'undefined') {
                    _this2.myStep = actionObj;
                    _this2.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_empty');
                    _this2.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_fill');

                    var btnText = "hit by " + actionObj.hit.method + " to " + actionObj.hit.target + " and block " + actionObj.block.method;
                    _this2.manager.view.gameControls.buttonAddAction.innerText = btnText;
                }
            });
        }

        /**
         * Инициализация слушателей на кнопку "сделать шаг"
         */

    }, {
        key: "initDoStepListener",
        value: function initDoStepListener() {
            var _this3 = this;

            this.manager.view.gameControls.initDoStepListener(function () {
                if (_this3.checkMyStep()) {
                    _this3.sendStep();
                } else {
                    _izitoast2.default.error({
                        title: 'Fill action buttons',
                        position: 'topCenter'
                    });
                }
            });
        }

        /**
         * Отправить сделанный шаг
         */

    }, {
        key: "sendStep",
        value: function sendStep() {
            var myActions = this.myStep;
            var send = {
                method: myActions.hit.method,
                target: myActions.hit.target,
                block: myActions.block.method,
                hp: this.me.health,
                id: this.manager._gameId,
                type: 'step'
            };
            try {
                console.group("Отправленные данные:");
                console.warn(JSON.stringify(send));
                console.groupEnd();
                this.manager.ws.send(JSON.stringify(send));
                this.manager.view.gameControls.setButtonStepStatus(false);
            } catch (err) {
                console.error(err);
            }
        }

        /**
         * Обработка шагов, вывод результатов шага
         * @param myAction
         * @param opponentAction
         * @param myDamage
         * @param opponentDamage
         * @param myHp
         * @param opponentHp
         */

    }, {
        key: "stepAnalyze",
        value: function stepAnalyze(myAction, opponentAction, myDamage, opponentDamage, myHp, opponentHp) {
            this.clearMyActionsArray();

            if (myDamage !== 0) {
                this._logStep("I missed hit by " + opponentAction.hit.method + " to " + opponentAction.hit.target);
            } else {
                this._logStep("Everything okey with ME!");
            }

            if (opponentDamage !== 0) {
                this._logStep("Opponent missed hit by " + myAction.hit.method + " to " + myAction.hit.target);
            } else {
                this._logStep("Everything okey with OPPONENT!");
            }

            this._updateMyHealth(myHp);
            this._updateOpponentHealth(opponentHp);
        }

        /**
         * Вспомогательный метод, заменяет анимацию
         * @param text
         * @private
         */

    }, {
        key: "_logStep",
        value: function _logStep(text) {
            console.log(text);
            _izitoast2.default.info({
                title: text,
                position: 'bottomRight',
                timeout: 7000,
                icon: ''
            });
        }

        /**
         * Обновить здоровье противника
         * @param hp - новый уровень здоровья
         * @private
         */

    }, {
        key: "_updateOpponentHealth",
        value: function _updateOpponentHealth(hp) {
            this.opponent.health = hp;
            this.manager.scene.opponentInfo.updateHealth(hp);
        }

        /**
         * Обновить мое здоровье
         * @param hp - новый уровень здоровья
         * @private
         */

    }, {
        key: "_updateMyHealth",
        value: function _updateMyHealth(hp) {
            this.me.health = hp;
            this.manager.scene.myInfo.updateHealth(hp);
        }

        /**
         * Проверить на полную заполненость шага
         * * @return {boolean} true - все заполнено
         */

    }, {
        key: "checkMyStep",
        value: function checkMyStep() {
            return !(this.myStep === null || typeof this.myStep === 'undefined' || this.myStep.hit.method === null || this.myStep.hit.target === null || this.myStep.block.method === null);
        }

        /**
         * Отчисить шаг
         */

    }, {
        key: "clearMyActionsArray",
        value: function clearMyActionsArray() {
            this.myStep = null;
            this.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_fill');
            this.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_empty');
            this.manager.view.gameControls.buttonAddAction.innerText = 'add action';
        }

        /**
         * Завершить игровой цикл, отчитска слушателей
         */

    }, {
        key: "finishGameLoop",
        value: function finishGameLoop() {
            clearInterval(this.inteval);
            this.manager.view.gameControls.deleteDoStepListener();
            this.manager.view.gameControls.deleteActionListener();
        }

        /**
         * Установить игроков
         * @param me
         * @param opponent
         */

    }, {
        key: "setPlayers",
        value: function setPlayers(me, opponent) {
            this.me = me;
            this.me.health = 100;
            this.opponent = opponent;
            this.opponent.health = 100;
            this.manager.scene.setPlayers(me, opponent);
        }
    }]);

    return MultiPlayerStrategy;
}();

exports.default = MultiPlayerStrategy;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 02.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

var _StepObject = __webpack_require__(5);

var _StepObject2 = _interopRequireDefault(_StepObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SinglePlayerStrategy = function () {
    function SinglePlayerStrategy(manager) {
        _classCallCheck(this, SinglePlayerStrategy);

        this.manager = manager;

        this.myStep = new _StepObject2.default();
        this.opponentStep = new _StepObject2.default();

        this.BASE_DAMAGE = 40;
    }

    /**
     * Игровой цикл
     */


    _createClass(SinglePlayerStrategy, [{
        key: "gameLoop",
        value: function gameLoop() {
            if (this.me.health <= 0) {
                this.finishGameLoop();
                this.manager.finish({
                    win: false,
                    object: this.me
                }, {
                    win: true,
                    object: this.opponent
                });
            } else if (this.opponent.health <= 0) {
                this.finishGameLoop();
                this.manager.finish({
                    win: true,
                    object: this.me
                }, {
                    win: false,
                    object: this.opponent
                });
            }
        }

        /**
         * Начать игровой цикл
         */

    }, {
        key: "startGameLoop",
        value: function startGameLoop() {
            var _this = this;

            this.inteval = setInterval(function () {
                return _this.gameLoop();
            }, 100);

            this.initDoStepListener();
            this.initActionListener();
        }

        /**
         * Инициализировать слушателей на кнопки "выбор действия"
         */

    }, {
        key: "initActionListener",
        value: function initActionListener() {
            var _this2 = this;

            this.manager.view.gameControls.initActionListener(function (actionObj) {
                if (actionObj !== null && typeof actionObj !== 'undefined') {
                    _this2.myStep = actionObj;
                    _this2.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_empty');
                    _this2.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_fill');

                    var btnText = "hit by " + actionObj.hit.method + " to " + actionObj.hit.target + " and block " + actionObj.block.method;
                    _this2.manager.view.gameControls.buttonAddAction.innerText = btnText;
                }
            });
        }

        /**
         * Инициализация слушателей на кнопку "сделать шаг"
         */

    }, {
        key: "initDoStepListener",
        value: function initDoStepListener() {
            var _this3 = this;

            this.manager.view.gameControls.initDoStepListener(function () {
                //this.opponent.health-=100;
                if (_this3.checkMyAction()) {
                    _this3.gameLogic().then(function () {
                        _this3.clearMyActionsArray();
                    });
                } else {
                    _izitoast2.default.error({
                        title: 'Fill action buttons',
                        position: 'topCenter'
                    });
                }
            });
        }

        /**
         * Игровая логика
         * @return {Promise}
         */

    }, {
        key: "gameLogic",
        value: function gameLogic() {
            var _this4 = this;

            return new Promise(function (resolve) {
                var myActions = _this4.myStep;
                var opponentActions = _this4.createStepForOpponent();

                _this4.stepAnalyser(myActions, opponentActions);

                resolve();
            });
        }

        /**
         * Обработка шагов, вывод результатов шага
         * @param myAction
         * @param opponentAction
         */

    }, {
        key: "stepAnalyser",
        value: function stepAnalyser(myAction, opponentAction) {
            var myDamage = this.getDamage('my', myAction, opponentAction);
            var opponentDamage = this.getDamage('opponent', myAction, opponentAction);

            if (myDamage !== 0) {
                this.logIt("I missed hit by " + opponentAction.hit.method + " to " + opponentAction.hit.target);
            } else {
                this.logIt("Everything okey with ME!");
            }

            if (opponentDamage !== 0) {
                this.logIt("Opponent missed hit by " + myAction.hit.method + " to " + myAction.hit.target);
            } else {
                this.logIt("Everything okey with OPPONENT!");
            }

            this._updateMyHealth(-myDamage);
            this._updateOpponentHealth(-opponentDamage);
        }

        /**
         * Получить вероятность метода
         * @param actionType - вид действия
         * @param method - метод удара||защиты
         * @return {number}
         */

    }, {
        key: "getProbability",
        value: function getProbability(actionType, method) {
            if (actionType === 'hit') {
                switch (method) {
                    case 'head':
                        {
                            return 0.65;
                        }
                    case 'arm':
                        {
                            return 0.95;
                        }
                    case 'leg':
                        {
                            return 0.8;
                        }

                }
            } else if (actionType === 'block') {
                switch (method) {
                    case 'head':
                        {
                            return 0.6;
                        }
                    case 'body':
                        {
                            return 0.8;
                        }
                }
            }
        }

        /**
         * Выдать результат действия по вероятности (прошло ли действие)
         * @param p - вероятность
         * @return {boolean}
         */

    }, {
        key: "checkProbability",
        value: function checkProbability(p) {
            var checkP = Math.floor(Math.random() * 100);
            console.log("random=" + checkP);
            console.log("check p = " + (p * 100 >= checkP));
            return p * 100 >= checkP;
        }

        /**
         *
         * @param who
         * @param myAction
         * @param opponentAction
         * @return {number}
         */

    }, {
        key: "getDamage",
        value: function getDamage(who, myAction, opponentAction) {
            var actionForAttacking = {};
            var actionForDefensing = {};
            if (who === 'my') {
                actionForDefensing = myAction;
                actionForAttacking = opponentAction;
            } else {
                actionForDefensing = opponentAction;
                actionForAttacking = myAction;
            }

            var hitP = 0;
            var blockP = 0;
            var checkP = 0;
            var damage = 0;
            if (actionForDefensing.block.method === actionForAttacking.hit.target) {
                hitP = this.getProbability('hit', actionForAttacking.hit.method);
                blockP = this.getProbability('block', actionForDefensing.block.method);
                checkP = this.checkProbability(hitP * blockP);
                damage = checkP ? (1 - hitP * blockP) * this.BASE_DAMAGE : 0;
            } else {
                hitP = this.getProbability('hit', actionForAttacking.hit.method);
                checkP = this.checkProbability(hitP);
                damage = checkP ? (1 - hitP / 2) * this.BASE_DAMAGE : 0;
            }
            console.warn("hitP=" + hitP + " blockP=" + blockP + " checkP=" + checkP + " damage=" + Math.round(damage));
            return Math.round(damage);
        }

        /**
         * Вспомогательный метод, заменяет анимацию
         * @param text
         * @private
         */

    }, {
        key: "logIt",
        value: function logIt(text) {
            console.log(text);
            _izitoast2.default.info({
                title: text,
                position: 'bottomRight',
                timeout: 10000,
                icon: ''
            });
        }

        /**
         * Обновить здоровье противника
         * @param div - разница в здоровье
         * @private
         */

    }, {
        key: "_updateOpponentHealth",
        value: function _updateOpponentHealth(div) {
            this.opponent.health += div;
            this.manager.scene.opponentInfo.updateHealth(this.opponent.health);
        }

        /**
         * Обновить мое здовроье
         * @param div - разница в здоровье
         * @private
         */

    }, {
        key: "_updateMyHealth",
        value: function _updateMyHealth(div) {
            this.me.health += div;
            this.manager.scene.myInfo.updateHealth(this.me.health);
        }

        /**
         * Проверить на полную заполненость шага
         * @return {boolean} true - все заполнено
         */

    }, {
        key: "checkMyAction",
        value: function checkMyAction() {
            console.log(this.myStep);
            return !(this.myStep === null || typeof this.myStep === 'undefined' || this.myStep.hit.method === null || this.myStep.hit.target === null || this.myStep.block.method === null);
        }

        /**
         * Отчисить шаг
         */

    }, {
        key: "clearMyActionsArray",
        value: function clearMyActionsArray() {
            this.myStep = null;
            this.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_fill');
            this.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_empty');
            this.manager.view.gameControls.buttonAddAction.innerText = 'add action';
        }

        /**
         * Завершить игровой цикл, отчитска слушателей
         */

    }, {
        key: "finishGameLoop",
        value: function finishGameLoop() {
            clearInterval(this.inteval);
            this.manager.view.gameControls.deleteDoStepListener();
            this.manager.view.gameControls.deleteActionListener();
        }

        /**
         * Установить игроков
         * @param me
         * @param opponent
         */

    }, {
        key: "setPlayers",
        value: function setPlayers(me, opponent) {
            this.me = me;
            this.me.health = 100;
            this.opponent = opponent;
            this.opponent.health = 100;
            this.manager.scene.setPlayers(me, opponent);
        }

        /**
         * Генерация шага для бота
         * @return {StepObject}
         */

    }, {
        key: "createStepForOpponent",
        value: function createStepForOpponent() {
            var methods = ['head', 'arm', 'leg'];
            var targets = ['head', 'body'];

            var hitMethod = methods[Math.floor(Math.random() * methods.length)];
            var hitTarget = targets[Math.floor(Math.random() * targets.length)];
            var blockMethod = targets[Math.floor(Math.random() * targets.length)];

            var step = new _StepObject2.default();
            step.init(hitMethod, hitTarget, blockMethod);
            return step;
        }
    }]);

    return SinglePlayerStrategy;
}();

exports.default = SinglePlayerStrategy;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 07.04.2017.
 */
var GameStates = function GameStates() {
    _classCallCheck(this, GameStates);

    this.SINGLEPLAYER_STRATEGY = 'SINGLEPLAYERSTRATEGY';
    this.MULTIPLAYER_STRATEGY = 'MULTIPLAYERSTRATEGY';

    this.STATEWAIT = 'STATEWAIT';
    this.STATEGAME = 'STATEGAME';
    this.STATERESULT = 'STATERESULT';
};

exports.default = GameStates;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 23.03.2017.
 */

var Diamond = function () {
    function Diamond(color, strokeWidth) {
        _classCallCheck(this, Diamond);

        this._render(color || 'white', strokeWidth || '2');
    }

    /**
     * Возвращает элемент 
     * @return {Diamond}
     */


    _createClass(Diamond, [{
        key: 'getElem',
        value: function getElem() {
            return this;
        }

        /**
         * Отрисовка элемент
         * @param color
         * @param strokeWidth
         * @private
         */

    }, {
        key: '_render',
        value: function _render(color, strokeWidth) {
            this.el = document.createElement('canvas');
            this.el.setAttribute('width', '50');
            this.el.setAttribute('height', '50');
            this.el.setAttribute('class', 'diamond');
            if (this.el.getContext) {
                var context = this.el.getContext('2d');
                context.beginPath();
                context.lineWidth = '' + strokeWidth;
                context.strokeStyle = '' + color;
                context.moveTo(12, 8);
                context.lineTo(38, 8);
                context.lineTo(47, 19);
                context.lineTo(25, 45);
                context.lineTo(2, 19);
                context.lineTo(12, 8);
                context.lineTo(17, 19);
                context.lineTo(25, 8);
                context.lineTo(32, 19);
                context.lineTo(38, 8);
                context.moveTo(2, 19);
                context.lineTo(47, 19);
                context.moveTo(17, 19);
                context.lineTo(25, 45);
                context.lineTo(32, 19);
                context.stroke();
            }
        }
    }]);

    return Diamond;
}();

exports.default = Diamond;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 21.05.2017.
 */
var ElementCreator = function () {
    function ElementCreator() {
        _classCallCheck(this, ElementCreator);
    }

    _createClass(ElementCreator, null, [{
        key: 'getElems',


        /**
         * Получить массив элементов
         * @param elements - инструкции по созданию
         * @private
         */
        value: function getElems(elements) {
            var _this = this;

            return elements.map(function (data) {
                var elem = document.createElement(data.type);
                _this.setAttrs(data.attrs, elem);
                elem.innerText = data.text;
                return elem;
            });
        }

        /**
         * Установка массив атрибкутов
         * @param attrs
         * @param elem
         * @private
         */

    }, {
        key: 'setAttrs',
        value: function setAttrs(attrs, elem) {
            Object.keys(attrs).forEach(function (name) {
                elem.setAttribute(name, attrs[name]);
            });
        }

        /**
         * Добавить массив элементов
         * @param array
         * @param elem
         * @private
         */

    }, {
        key: 'elemsAppendTo',
        value: function elemsAppendTo(array, elem) {
            array.forEach(function (item) {
                elem.appendChild(item);
            });
        }
    }, {
        key: '_parseElements',
        value: function _parseElements(elements, node) {
            var _this2 = this;

            elements.forEach(function (elem) {
                var container = document.createElement(elem.type);
                if (elem.attrs !== null && typeof elem.attrs !== 'undefined') _this2.setAttrs(elem.attrs, container);
                if (elem.text !== null && typeof elem.text !== 'undefined') container.innerText = elem.text;
                if (typeof elem.elements !== 'undefined' && Array.isArray(elem.elements)) _this2._parseElements(elem.elements, container);
                node.appendChild(container);
            });
        }
    }, {
        key: 'create',
        value: function create(config, node) {
            if (config.elements !== null && typeof config.elements !== 'undefined') this._parseElements(config.elements, node);
        }
    }]);

    return ElementCreator;
}();

exports.default = ElementCreator;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 17.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Storage = __webpack_require__(18);

var _Storage2 = _interopRequireDefault(_Storage);

var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {

    /**
     * Конструктор
     * @param node - область действия
     */
    function Router(node) {
        var _this = this;

        _classCallCheck(this, Router);

        this.node = node;
        this.routes = {};
        this.currView = null;

        window.onbeforeunload = function (e) {
            if (document.location.pathname === "/game") {
                var dialogText = 'Dialog text here';
                e.returnValue = dialogText;
                return dialogText;
            }
        };

        window.onpopstate = function (event) {
            _this.go(document.location.pathname, false);
        };
    }

    /**
     * Инициализация всех вьюшек
     * @param config
     */


    _createClass(Router, [{
        key: "init",
        value: function init(config) {
            var _this2 = this;

            Object.keys(config).forEach(function (url) {
                var View = config[url].View;
                var el = config[url].el;
                if (el) {
                    _this2.register(url, new View(el, _Storage2.default, _this2));
                }
            });

            this.go(document.location.pathname);
        }

        /**
         * Перейти по маршруту и поменять текущую вьюшку
         * @param {string} path
         * @param isToHistory
         * @param gameStrategy
         */

    }, {
        key: "go",
        value: function go(path, isToHistory, gameStrategy) {
            path = this._checkOffline(path);
            if (isToHistory) {
                window.history.pushState({ path: path }, '', path);
            }
            if (this.currView) {
                this.currView.destroyView();
            }
            this.currView = this.getViewByRoute(path);

            if (!this.currView) {
                return;
            }

            if ('render' in this.currView) {
                if (gameStrategy !== null && typeof gameStrategy !== 'undefined') {
                    this.currView.render(gameStrategy);
                } else {
                    this.currView.render();
                }
            }
        }

        /**
         * Регистрация маршрута
         * @param {string} route
         * @param {Object} view
         */

    }, {
        key: "register",
        value: function register(route, view) {
            this.routes[route] = view;
        }

        /**
         * Получение маршрута
         * @param href
         * @return {*}
         */

    }, {
        key: "getViewByRoute",
        value: function getViewByRoute(href) {
            return this.routes[href];
        }

        /**
         * Запустить процес маршрутизации
         */

    }, {
        key: "start",
        value: function start() {
            var _this3 = this;

            this.node.addEventListener('click', function (event) {
                return _this3._onRouteChange(event);
            });
        }

        /**
         * Остановить процес маршрутизации
         */

    }, {
        key: "cancel",
        value: function cancel() {
            this.node.removeEventListener('click', this._onRouteChange(event));
        }

        /**
         * Проверка на смененный маршрут
         * @param event
         * @private
         */

    }, {
        key: "_onRouteChange",
        value: function _onRouteChange(event) {
            if (event.target instanceof HTMLAnchorElement) {
                if (this._checkOnAbleLink(event.target.getAttribute('href'))) return;
                event.preventDefault();
                this.go(event.target.getAttribute('href'), true);
            } else if (event.target.parentElement instanceof HTMLAnchorElement) {
                if (this._checkOnAbleLink(event.target.parentElement.getAttribute('href'))) return;
                event.preventDefault();
                this.go(event.target.parentElement.getAttribute('href'), true);
            }
        }
    }, {
        key: "_checkOnAbleLink",
        value: function _checkOnAbleLink(link) {
            console.warn(link);
            var links = ['https://tech.yandex.ru/speechkit/cloud/', 'https://yandex.ru/'];
            for (var i = 0; i < links.length; i++) {
                if (links[i] === link) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "_checkOffline",
        value: function _checkOffline(path) {
            if (navigator.onLine) {
                path = this._checkUser(path);
                try {
                    if (_Storage2.default.user.login === 'Offline') _Storage2.default.user.login = null;
                } catch (e) {
                    //console.warn(e);
                }
            } else {
                _izitoast2.default.warning({
                    title: 'Only test single play',
                    message: 'YOU ARE OFFLINE!',
                    position: 'topRight',
                    timeout: 5000
                });
                _Storage2.default.user = { login: 'Offline', rating: 9999999999999999 };
                path = path === _Storage2.default.urls.LOGIN || path === _Storage2.default.urls.SIGNUP || path === _Storage2.default.urls.PROFILE ? _Storage2.default.urls.GAME : path;
            }
            return path;
        }

        /**
         * Проверка, залогинен ли юзер
         * @param path
         * @private
         */

    }, {
        key: "_checkUser",
        value: function _checkUser(path) {
            if (path === _Storage2.default.urls.LOGIN || path === _Storage2.default.urls.SIGNUP) {
                if (_Storage2.default.user) {
                    return _Storage2.default.urls.PROFILE;
                } else {
                    return path;
                }
            } else if (path === _Storage2.default.urls.PROFILE) {
                if (_Storage2.default.user) {
                    return path;
                } else {
                    return _Storage2.default.urls.LOGIN;
                }
            } else if (path === _Storage2.default.urls.GAME) {
                if (_Storage2.default.user) {
                    return path;
                } else {
                    return _Storage2.default.urls.MAIN;
                }
            } else {
                return path;
            }
        }
    }]);

    return Router;
}();

exports.default = Router;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 24.03.2017.
 */
var RouterUrls = function RouterUrls() {
    _classCallCheck(this, RouterUrls);

    this.MAIN = '/';
    this.LOGIN = '/login';
    this.SIGNUP = '/signup';
    this.LEADERBOARD = '/leaderboard';
    this.ABOUT = '/about';
    this.PROFILE = '/profile';

    this.GAME = '/game';
};

exports.default = RouterUrls;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 25.05.2017.
 */
var ServiceWorker = function () {
    function ServiceWorker() {
        _classCallCheck(this, ServiceWorker);
    }

    _createClass(ServiceWorker, [{
        key: 'init',
        value: function init() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('../service-worker.js').then(function (registration) {
                    // при удачной регистрации имеем объект типа ServiceWorkerRegistration
                    console.log('ServiceWorker registration', registration);
                    // строкой ниже можно прекратить работу serviceWorker’а
                    //registration.unregister();
                }).catch(function (err) {
                    console.error(err);
                });
            }
        }
    }]);

    return ServiceWorker;
}();

exports.default = ServiceWorker;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(106);

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _ElementCreator = __webpack_require__(46);

var _ElementCreator2 = _interopRequireDefault(_ElementCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AboutView = function (_BaseView) {
    _inherits(AboutView, _BaseView);

    function AboutView(node, storage) {
        _classCallCheck(this, AboutView);

        var _this = _possibleConstructorReturn(this, (AboutView.__proto__ || Object.getPrototypeOf(AboutView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        return _this;
    }

    _createClass(AboutView, [{
        key: "render",
        value: function render() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                elements: [{
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.MAIN,
                        class: 'main-title'
                    },
                    elements: [{
                        type: 'h1',
                        text: 'Step fight'
                    }]
                }, {
                    type: 'div',
                    attrs: {
                        class: 'about-view'
                    },
                    elements: [{
                        type: 'h2',
                        attrs: {
                            class: 'about-view__subtitle'
                        },
                        text: 'Game developed by:'
                    }, {
                        type: 'ul',
                        attrs: { class: 'about-view__name-list' },
                        elements: [{
                            type: 'li',
                            attrs: { id: 'egor' },
                            text: 'EGOR FOMICHEV'
                        }, {
                            type: 'li',
                            attrs: { id: 'rishat' },
                            text: 'RISHAT VALITOV'
                        }, {
                            type: 'li',
                            attrs: { id: 'andrey' },
                            text: 'ANDREY CHERNOV'
                        }, {
                            type: 'li',
                            attrs: { id: 'denis' },
                            text: 'DENIS STEPANOV'
                        }]
                    }, {
                        type: 'h2',
                        attrs: {
                            class: 'about-view__subtitle'
                        },
                        text: 'POWERED BY:'
                    }, {
                        type: 'a',
                        attrs: {
                            href: 'https://tech.yandex.ru/speechkit/cloud/',
                            target: '_blank'
                        },
                        text: 'Our game use "Yandex SpeechKit Cloud"'
                    }, {
                        type: 'a',
                        attrs: {
                            href: 'https://yandex.ru/',
                            target: '_blank'
                        },
                        elements: [{
                            type: 'img',
                            attrs: {
                                src: '/src/img/yandex_logo.png',
                                width: '10%',
                                height: '10%'
                            }
                        }]

                    }]
                }]
            };

            _get(AboutView.prototype.__proto__ || Object.getPrototypeOf(AboutView.prototype), "renderView", this).call(this);
            _get(AboutView.prototype.__proto__ || Object.getPrototypeOf(AboutView.prototype), "destroyView", this).call(this);

            _ElementCreator2.default.create(config, this.node);
            this._initListener();
        }
    }, {
        key: "_initListener",
        value: function _initListener() {
            var egor = document.getElementById('egor');
            var denis = document.getElementById('denis');
            var rishat = document.getElementById('rishat');
            var andrey = document.getElementById('andrey');
        }
    }]);

    return AboutView;
}(_BaseView3.default);

exports.default = AboutView;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _loader = __webpack_require__(8);

var _loader2 = _interopRequireDefault(_loader);

var _form = __webpack_require__(17);

var _form2 = _interopRequireDefault(_form);

var _UserService = __webpack_require__(0);

var _UserService2 = _interopRequireDefault(_UserService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LoginView = function (_BaseView) {
    _inherits(LoginView, _BaseView);

    function LoginView(node, storage, router) {
        _classCallCheck(this, LoginView);

        var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Отрисовка вьюшки
     */


    _createClass(LoginView, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            _get(LoginView.prototype.__proto__ || Object.getPrototypeOf(LoginView.prototype), "renderView", this).call(this);
            this._showViewProgressBar();
            this.loginForm = new _form2.default({
                data: {
                    title: {
                        text: 'Log In',
                        type: 'h3',
                        attrs: {
                            class: 'form__title'
                        }
                    },
                    form: {
                        attrs: {
                            class: 'form',
                            action: '',
                            method: ''
                        }
                    },
                    fields: [{
                        attrs: {
                            placeholder: 'Login',
                            id: 'l-login',
                            class: 'form__input',
                            type: 'text',
                            name: 'login'
                        },
                        help_attrs: {
                            id: 'l-login-help',
                            class: 'form__help-text'
                        }
                    }, {
                        attrs: {
                            placeholder: 'Password',
                            id: 'l-password',
                            class: 'form__input',
                            type: 'password',
                            name: 'password'
                        },
                        help_attrs: {
                            id: 'l-password-help',
                            class: 'form__help-text'
                        }
                    }],
                    controls: [{
                        text: 'Enter',
                        attrs: {
                            type: 'submit',
                            class: 'form__button',
                            id: 'btn-login'
                        },
                        type: 'button'
                    }, {
                        type: 'а',
                        attrs: {
                            class: 'form__vk-button',
                            id: 'vk-auth'
                        },
                        text: 'Вход через VK'
                    }, {
                        text: 'Sign up',
                        attrs: {
                            class: 'form__link',
                            id: 'btn-to-signup',
                            href: this.storage.urls.SIGNUP
                        },
                        type: 'a'
                    }]
                }
            }).getElem();

            setTimeout(function () {
                _this2._hideViewProgressBar();

                var title = document.createElement('a');
                title.setAttribute('href', _this2.storage.urls.MAIN);
                title.setAttribute('class', 'main-title');
                var h1 = document.createElement('h1');
                h1.innerText = 'Step Fight';
                title.appendChild(h1);

                _this2.node.appendChild(title);
                _this2.node.appendChild(_this2.loginForm.el);

                _this2.login = document.getElementById('l-login');
                _this2.password = document.getElementById('l-password');
                _this2.loginHelp = document.getElementById('l-login-help');
                _this2.btnLogin = document.getElementById('btn-login');
                _this2.btnToSignUp = document.getElementById('btn-to-signup');

                _this2.vkAuth = document.getElementById('vk-auth');

                _this2._initListener();
            }, 0);
        }

        /**
         * Показать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_showViewProgressBar",
        value: function _showViewProgressBar() {
            var progressBar = new _loader2.default().getElem();
            this.node.appendChild(progressBar);
        }

        /**
         * Спрятать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_hideViewProgressBar",
        value: function _hideViewProgressBar() {
            this.node.removeChild(this.node.lastChild);
        }

        /**
         * Показать прогресс бар формы
         * @private
         */

    }, {
        key: "_showProgressBar",
        value: function _showProgressBar() {
            this.btnLogin.hidden = true;
            this.vkAuth.hidden = true;
            var progressBar = new _loader2.default().getElemParent();
            this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
        }

        /**
         * Спрятать прогресс бар формы
         * @private
         */

    }, {
        key: "_hideProgressBar",
        value: function _hideProgressBar() {
            var _this3 = this;

            setTimeout(function () {
                _this3.btnLogin.hidden = false;
                _this3.vkAuth.hidden = false;
                _this3.btnLogin.parentNode.removeChild(_this3.btnLogin.nextElementSibling);
            }, 0);
        }

        /**
         * Запуск слушателей на форму
         * @private
         */

    }, {
        key: "_initListener",
        value: function _initListener() {
            var _this4 = this;

            //Submit form
            this.loginForm.el.addEventListener('submit', function (event) {
                event.preventDefault();
                if (_this4._checkFields()) {
                    var body = _this4.loginForm.getFormData();

                    _this4._showProgressBar();

                    new _UserService2.default().login(body).then(function (user) {
                        console.log(user);
                        _this4._clearFields();
                        _this4.storage.user = user;
                        _this4.router.go(_this4.storage.urls.PROFILE, true);

                        _this4._hideProgressBar();
                    }).catch(function (e) {
                        _this4.loginForm.fields.forEach(function (elem) {
                            elem.setError();
                            elem.setError('wrong data');
                        });
                        _this4._hideProgressBar();
                        console.error(e);
                    });
                }
            });
            this.btnToSignUp.addEventListener('click', function (event) {
                _this4._clearFields();
            });

            this.vkAuth.addEventListener('click', function (event) {
                event.preventDefault();
                VK.Auth.getLoginStatus(function (response) {
                    if (response) {
                        console.warn(response);
                    } else {
                        VK.Auth.login(null, VK.access.FRIENDS);
                    }
                });
            });

            VK.Observer.subscribe('auth.login', function (response) {
                //console.warn(response.session.user);
                //new UserService().signup({login: response.session.user.domain})
            });
        }

        /**
         * Отчистка полей формы
         * @private
         */

    }, {
        key: "_clearFields",
        value: function _clearFields() {
            this.loginForm.fields.forEach(function (elem) {
                elem.clear();
            });
        }

        /**
         * Проверка полей формы
         * @return {boolean}
         * @private
         */

    }, {
        key: "_checkFields",
        value: function _checkFields() {
            var check = true;

            this.loginForm.fields.forEach(function (elem) {
                var result = elem.validate();
                if (check === true) {
                    check = result;
                }
            });

            return check;
        }
    }]);

    return LoginView;
}(_BaseView3.default);

exports.default = LoginView;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _form = __webpack_require__(17);

var _form2 = _interopRequireDefault(_form);

var _loader = __webpack_require__(8);

var _loader2 = _interopRequireDefault(_loader);

var _CheckFields = __webpack_require__(19);

var _CheckFields2 = _interopRequireDefault(_CheckFields);

var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

var _UserService = __webpack_require__(0);

var _UserService2 = _interopRequireDefault(_UserService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SignUpView = function (_BaseView) {
    _inherits(SignUpView, _BaseView);

    function SignUpView(node, storage, router) {
        _classCallCheck(this, SignUpView);

        var _this = _possibleConstructorReturn(this, (SignUpView.__proto__ || Object.getPrototypeOf(SignUpView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Отрисовка вьюшки
     * @private
     */


    _createClass(SignUpView, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            _get(SignUpView.prototype.__proto__ || Object.getPrototypeOf(SignUpView.prototype), "renderView", this).call(this);
            this._showViewProgressBar();
            this.signupForm = new _form2.default({
                data: {
                    title: {
                        text: 'Sign up',
                        type: 'h3',
                        attrs: {
                            class: 'form__title'
                        }
                    },
                    form: {
                        attrs: {
                            class: 'form',
                            action: '',
                            method: ''
                        }
                    },
                    fields: [{
                        attrs: {
                            placeholder: 'Login',
                            id: 'r-login',
                            class: 'form__input',
                            type: 'text',
                            name: 'login',
                            valid: 'login'
                        },
                        help_attrs: {
                            id: 'r-login-help',
                            class: 'form__help-text'
                        }
                    }, {
                        attrs: {
                            placeholder: 'Password',
                            id: 'r-password',
                            class: 'form__input',
                            type: 'password',
                            name: 'password',
                            valid: 'password'
                        },
                        help_attrs: {
                            id: 'r-password-help',
                            class: 'form__help-text'
                        }
                    }, {
                        attrs: {
                            placeholder: 'Repeat password',
                            id: 'r-repeatpassword',
                            class: 'form__input',
                            type: 'password',
                            name: 'repeatpassword',
                            valid: 'repeatpassword'
                        },
                        help_attrs: {
                            id: 'r-repeatpassword-help',
                            class: 'form__help-text'
                        }
                    }],
                    controls: [{
                        text: 'Registrate',
                        attrs: {
                            type: 'submit',
                            class: 'form__button',
                            id: 'btn-signup'
                        },
                        type: 'button'
                    }, {
                        type: 'а',
                        attrs: {
                            class: 'form__vk-button',
                            id: 'vk-auth'
                        },
                        text: 'Вход через VK'
                    }, {
                        text: 'Log In',
                        attrs: {
                            class: 'form__link',
                            id: 'btn-to-login',
                            href: this.storage.urls.LOGIN
                        },
                        type: 'a'
                    }]
                }
            }).getElem();
            setTimeout(function () {
                _this2._hideViewProgressBar();

                var title = document.createElement('a');
                title.setAttribute('href', _this2.storage.urls.MAIN);
                title.setAttribute('class', 'main-title');
                var h1 = document.createElement('h1');
                h1.innerText = 'Step Fight';
                title.appendChild(h1);

                _this2.node.appendChild(title);
                _this2.node.appendChild(_this2.signupForm.el);

                _this2.login = document.getElementById('r-login');
                _this2.password = document.getElementById('r-password');
                _this2.repeatPassword = document.getElementById('r-repeatpassword');

                _this2.loginHelp = document.getElementById('r-login-help');
                _this2.passwordHelp = document.getElementById('r-password-help');
                _this2.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

                _this2.btnSignUp = document.getElementById('btn-signup');

                _this2.btnToLogin = document.getElementById('btn-to-login');

                _this2.vkAuth = document.getElementById('vk-auth');

                _this2._initListener();
            }, 0);
        }

        /**
         * Показать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_showViewProgressBar",
        value: function _showViewProgressBar() {
            var progressBar = new _loader2.default().getElem();
            this.node.appendChild(progressBar);
        }

        /**
         * Спрятать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_hideViewProgressBar",
        value: function _hideViewProgressBar() {
            this.node.removeChild(this.node.lastChild);
        }

        /**
         * Показать прогресс бар формы
         * @private
         */

    }, {
        key: "_showProgressBar",
        value: function _showProgressBar() {
            this.btnSignUp.hidden = true;
            this.vkAuth.hidden = true;
            var progressBar = new _loader2.default().getElemParent();
            this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
        }

        /**
         * Спрятать прогресс бар формы
         * @private
         */

    }, {
        key: "_hideProgressBar",
        value: function _hideProgressBar() {
            var _this3 = this;

            setTimeout(function () {
                _this3.btnSignUp.hidden = false;
                _this3.vkAuth.hidden = false;
                _this3.btnSignUp.parentNode.removeChild(_this3.btnSignUp.nextElementSibling);
            }, 0);
        }

        /**
         * Запуск слушателей
         * @private
         */

    }, {
        key: "_initListener",
        value: function _initListener() {
            var _this4 = this;

            //Submit form
            this.signupForm.el.addEventListener('submit', function (event) {
                event.preventDefault();

                if (_this4._checkFields()) {
                    var body = _this4.signupForm.getFormData();
                    _this4._showProgressBar();

                    new _UserService2.default().signup(body).then(function (response) {
                        _this4.storage.user = response.user;
                        _this4._clearFields();
                        _this4._hideProgressBar();
                        _izitoast2.default.success({
                            title: 'Successfully registered',
                            position: 'topRight'
                        });
                        _this4.router.go(_this4.storage.urls.LOGIN);
                    }).catch(function (err) {
                        _CheckFields2.default.fieldRemoveOk(_this4.login);
                        _CheckFields2.default.fieldSetErr(_this4.login);
                        if (err.result === 'no-conn') {
                            _CheckFields2.default.helpSetText(_this4.loginHelp, 'check connection');
                        } else {
                            _CheckFields2.default.helpSetText(_this4.loginHelp, 'login used');
                        }
                        _this4._hideProgressBar();
                        console.error(err);
                    });
                }
            });
            this.btnToLogin.addEventListener('click', function (event) {
                _this4._clearFields();
            });

            this.vkAuth.addEventListener('click', function (event) {
                event.preventDefault();
                VK.Auth.login(null, VK.access.FRIENDS);
            });

            VK.Observer.subscribe('auth.login', function (response) {
                //console.warn(response.session.user);
                //new UserService().signup({login: response.session.user.domain})
            });
        }

        /**
         * Проверка полей формы
         * @return {boolean}
         * @private
         */

    }, {
        key: "_checkFields",
        value: function _checkFields() {
            var check = true;
            var prev = null;

            this.signupForm.fields.forEach(function (elem) {
                var result = elem.validate(prev);
                prev = elem;
                if (check === true) {
                    check = result;
                }
            });

            return check;
        }

        /**
         * Отчистка полей формы
         * @private
         */

    }, {
        key: "_clearFields",
        value: function _clearFields() {
            this.signupForm.fields.forEach(function (elem) {
                elem.clear();
            });
        }
    }]);

    return SignUpView;
}(_BaseView3.default);

exports.default = SignUpView;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _GameManager = __webpack_require__(39);

var _GameManager2 = _interopRequireDefault(_GameManager);

__webpack_require__(109);

__webpack_require__(107);

__webpack_require__(108);

var _GameControls = __webpack_require__(32);

var _GameControls2 = _interopRequireDefault(_GameControls);

var _GameChooseAction = __webpack_require__(31);

var _GameChooseAction2 = _interopRequireDefault(_GameChooseAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 17.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameView = function (_BaseView) {
    _inherits(GameView, _BaseView);

    function GameView(node, storage, router) {
        _classCallCheck(this, GameView);

        var _this = _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Отрисовка view
     */


    _createClass(GameView, [{
        key: 'render',
        value: function render(strategy) {
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'renderView', this).call(this);

            if (typeof strategy === 'undefined') strategy = this.storage.gameStates.SINGLEPLAYER_STRATEGY;
            this.gameManager = new _GameManager2.default(this.router, this.storage, this, strategy);

            this.gameActionModal = new _GameChooseAction2.default(this.node, this.gameManager);
            this.gameControls = new _GameControls2.default(this.node, this.gameActionModal, this.gameManager);

            this.gameManager.startGame();
        }
    }, {
        key: 'renderControlElements',
        value: function renderControlElements() {
            this.gameControls.render();
            this.gameActionModal.render();
        }
    }, {
        key: 'destroyView',
        value: function destroyView() {
            if (this.gameManager) {
                this.gameManager.closeWebSocket();
            }
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'destroyView', this).call(this);
        }
    }]);

    return GameView;
}(_BaseView3.default);

exports.default = GameView;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _loader = __webpack_require__(8);

var _loader2 = _interopRequireDefault(_loader);

var _UserService = __webpack_require__(0);

var _UserService2 = _interopRequireDefault(_UserService);

__webpack_require__(113);

__webpack_require__(110);

__webpack_require__(112);

__webpack_require__(111);

var _handlebars = __webpack_require__(127);

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LeaderBoardView = function (_BaseView) {
    _inherits(LeaderBoardView, _BaseView);

    function LeaderBoardView(node, storage, router) {
        _classCallCheck(this, LeaderBoardView);

        var _this = _possibleConstructorReturn(this, (LeaderBoardView.__proto__ || Object.getPrototypeOf(LeaderBoardView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Метод обновления leaderboard
     * @param data
     * @private
     */


    _createClass(LeaderBoardView, [{
        key: "_refreshLeaderBoard",
        value: function _refreshLeaderBoard(data) {
            var leaderBoardSource = "\n                        {{#with logo}}\n                            <a href=\"/\" class=\"{{class}}\"><h1>{{text}}</h1></a>\n                        {{/with}}\n                        {{#with title}}\n                            <h2 class=\"{{class}}\">{{text}}</h2>\n                        {{/with}}\n                        <p class=\"{{control.class}}\" id=\"{{control.id}}\">{{control.text}}</p>\n                        {{#if leaderboard}}\n                        <div>\n                        <ul class=\"leaderboard-view__list\">\n                            {{#each leaderboard}}\n                            <li class=\"leaderboard-view__list__item\">{{login}}<span class=\"badge\">{{rating}}</span>\n                            <span class=\"position\">{{position}}</span></li>\n                            {{/each}}\n                        </ul>\n                        </div>\n                        {{/if}}";
            var leaderBoardTemplate = _handlebars2.default.compile(leaderBoardSource);
            return leaderBoardTemplate(data);
        }

        /**
         * Отрисовка элемента
         */

    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            _get(LeaderBoardView.prototype.__proto__ || Object.getPrototypeOf(LeaderBoardView.prototype), "renderView", this).call(this);
            this._setProgressBar(this.node);

            new _UserService2.default().getLeaders().then(function (response) {
                var arr = response.leaders;
                var iter = 1;
                arr.forEach(function (elem) {
                    elem.position = iter + ".";
                    iter++;
                });
                setTimeout(function () {
                    _this2.node.innerHTML = _this2._refreshLeaderBoard({
                        logo: {
                            text: 'Step fight',
                            class: 'main-title'
                        },
                        title: {
                            text: 'Top players:',
                            class: 'leaderboard-view__title'
                        },
                        leaderboard: arr,
                        control: {
                            text: 'Refresh',
                            class: 'leaderboard-view__link',
                            id: 'refresh-lb'
                        }
                    });
                    _this2._initRefreshListener();
                }, 500);
            }).catch(function (err) {
                console.error(err);
                _this2.node.innerHTML = _this2._refreshLeaderBoard({
                    titles: {
                        title: 'No connection'
                    },
                    err: {},
                    control: {
                        text: 'Refresh',
                        class: 'leaderboard-view__link',
                        id: 'refresh-lb'
                    }
                });
                _this2._initRefreshListener();
            });
        }

        /**
         * Инициализация слушателя на кнопку обновить
         * @private
         */

    }, {
        key: "_initRefreshListener",
        value: function _initRefreshListener() {
            var _this3 = this;

            var refresh = document.getElementById('refresh-lb');
            if (refresh) {
                refresh.addEventListener('click', function () {
                    _this3.render();
                });
            }
        }

        /**
         * Отчитска контейнера, удаление всех дочерних элементов
         * @param container
         * @private
         */

    }, {
        key: "_clearContainer",
        value: function _clearContainer(container) {
            while (container.children.length > 1) {
                container.removeChild(container.lastChild);
            }
        }

        /**
         * Вставить прогресс бар
         * @param container
         * @private
         */

    }, {
        key: "_setProgressBar",
        value: function _setProgressBar(container) {
            this._clearContainer(container);
            container.appendChild(new _loader2.default().getElem());
        }
    }]);

    return LeaderBoardView;
}(_BaseView3.default);

exports.default = LeaderBoardView;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(116);

__webpack_require__(115);

__webpack_require__(114);

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MenuView = function (_BaseView) {
    _inherits(MenuView, _BaseView);

    /**
     *
     * @param node - узел
     * @param storage - память
     * @param router - роутер
     */
    function MenuView(node, storage, router) {
        _classCallCheck(this, MenuView);

        var _this = _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Отрисовка меню
     */


    _createClass(MenuView, [{
        key: 'render',
        value: function render() {
            _get(MenuView.prototype.__proto__ || Object.getPrototypeOf(MenuView.prototype), 'renderView', this).call(this);
            //super.destroyView();

            var instr = {
                title: {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.MAIN,
                        class: 'main-title'
                    },
                    element: {
                        type: 'h1',
                        text: 'Step Fight'
                    }
                },
                elements: [{
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.LEADERBOARD,
                        class: 'menu-view__controls-block__button'
                    },
                    element: {
                        type: 'h1',
                        text: 'LEADER BOARD'
                    }
                }, {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.LOGIN,
                        class: 'menu-view__controls-block__button_main'
                    },
                    element: {
                        type: 'h1',
                        text: 'PLAY'
                    }
                }, {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.ABOUT,
                        class: 'menu-view__controls-block__button'
                    },
                    element: {
                        type: 'h1',
                        text: 'ABOUT'
                    }
                }]
            };
            var title = this._getTitle(instr.title);
            this.node.appendChild(title);
            var elemArray = this._getElems(instr.elements);

            var controlsBlock = document.createElement('div');
            controlsBlock.setAttribute('class', 'menu-view__controls-block');
            this._elemsAppendTo(elemArray, controlsBlock);
            this.node.appendChild(controlsBlock);
        }

        /**
         * Установка массив атрибкутов
         * @param attrs
         * @param elem
         * @private
         */

    }, {
        key: '_setAttrs',
        value: function _setAttrs(attrs, elem) {
            Object.keys(attrs).forEach(function (name) {
                elem.setAttribute(name, attrs[name]);
            });
        }

        /**
         * Добавить массив элементов
         * @param array
         * @param elem
         * @private
         */

    }, {
        key: '_elemsAppendTo',
        value: function _elemsAppendTo(array, elem) {
            array.forEach(function (item) {
                elem.appendChild(item);
            });
        }

        /**
         * Получить массив элементов
         * @param elements - инструкции по созданию
         * @private
         */

    }, {
        key: '_getElems',
        value: function _getElems(elements) {
            var _this2 = this;

            return elements.map(function (data) {
                var elem = document.createElement(data.type);
                _this2._setAttrs(data.attrs, elem);
                var textElem = document.createElement(data.element.type);
                textElem.textContent = data.element.text;
                elem.appendChild(textElem);
                return elem;
            });
        }

        /**
         *  Получить заголовок
         * @param data
         * @return {Element}
         * @private
         */

    }, {
        key: '_getTitle',
        value: function _getTitle(data) {
            var elem = document.createElement(data.type);
            this._setAttrs(data.attrs, elem);
            var textElem = document.createElement(data.element.type);
            textElem.textContent = data.element.text;
            elem.appendChild(textElem);
            return elem;
        }
    }]);

    return MenuView;
}(_BaseView3.default);

exports.default = MenuView;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = __webpack_require__(1);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _UserService = __webpack_require__(0);

var _UserService2 = _interopRequireDefault(_UserService);

var _loader = __webpack_require__(8);

var _loader2 = _interopRequireDefault(_loader);

var _Diamond = __webpack_require__(45);

var _Diamond2 = _interopRequireDefault(_Diamond);

var _izitoast = __webpack_require__(4);

var _izitoast2 = _interopRequireDefault(_izitoast);

__webpack_require__(125);

__webpack_require__(118);

__webpack_require__(117);

__webpack_require__(121);

__webpack_require__(119);

__webpack_require__(120);

__webpack_require__(124);

__webpack_require__(123);

__webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 19.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ProfileView = function (_BaseView) {
    _inherits(ProfileView, _BaseView);

    function ProfileView(node, storage, router) {
        _classCallCheck(this, ProfileView);

        var _this = _possibleConstructorReturn(this, (ProfileView.__proto__ || Object.getPrototypeOf(ProfileView)).call(this, node));

        _this.node = node;
        _this.storage = storage;
        _this.router = router;
        return _this;
    }

    /**
     * Получить юзера
     * @return {Promise}
     * @private
     */


    _createClass(ProfileView, [{
        key: "_getUser",
        value: function _getUser() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (_this2.storage.user === null) {
                    new _UserService2.default().getUser().then(function (user) {
                        //window.USER = user;
                        resolve(user);
                    }).catch(function (err) {
                        reject({});
                    });
                } else {
                    resolve(_this2.storage.user);
                }
            });
        }

        /**
         * Отрисовка профайла
         */

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            _get(ProfileView.prototype.__proto__ || Object.getPrototypeOf(ProfileView.prototype), "renderView", this).call(this);
            this._showViewProgressBar();
            this._getUser().then(function (user) {
                setTimeout(function () {
                    _this3._hideViewProgressBar();
                    _this3._renderProfile(user);
                }, 500);
            }).catch(function (err) {
                if (JSON.stringify(err) === '{}') {
                    _this3.storage.user = null;
                    _this3.router.go(_this3.storage.urls.LOGIN, true);
                }
                _this3._hideViewProgressBar();
            });
        }

        /**
         * Запуск слушателей
         * @private
         */

    }, {
        key: "_initListener",
        value: function _initListener() {
            var _this4 = this;

            this.hrefLogout.addEventListener('click', function (event) {
                new _UserService2.default().logOutUser().then(function (response) {
                    _this4.storage.user = null;
                    _this4.router.go(_this4.storage.urls.LOGIN, true);
                }).catch(function (err) {});
            });

            this.hrefPlayS.addEventListener('click', function (event) {
                _this4.router.go(_this4.storage.urls.GAME, true, _this4.storage.gameStates.SINGLEPLAYER_STRATEGY);
            });

            this.hrefPlayM.addEventListener('click', function (event) {
                //TODO check-connection
                if (navigator.onLine) {
                    _this4.router.go(_this4.storage.urls.GAME, true, _this4.storage.gameStates.MULTIPLAYER_STRATEGY);
                } else {
                    _izitoast2.default.error({
                        title: 'You are offline!',
                        text: 'Use single play only',
                        position: 'topRight'
                    });
                }
            });
        }

        /**
         * Показать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_showViewProgressBar",
        value: function _showViewProgressBar() {
            var progressBar = new _loader2.default().getElem();
            this.node.appendChild(progressBar);
        }

        /**
         * Спрятать прогресс бар вьюшки
         * @private
         */

    }, {
        key: "_hideViewProgressBar",
        value: function _hideViewProgressBar() {
            this.node.removeChild(this.node.lastChild);
        }

        /**
         * Отчистка контейнера
         * @private
         */

    }, {
        key: "_clearContainer",
        value: function _clearContainer() {
            while (this.node.children.length > 0) {
                this.node.removeChild(this.node.lastChild);
            }
        }

        /**
         * Обновить вьюшку
         */

    }, {
        key: "refresh",
        value: function refresh() {
            this._clearContainer();
            this._showViewProgressBar();
            this._render();
        }

        /**
         * Создание элементов профайла
         * @param user
         * @private
         */

    }, {
        key: "_renderProfile",
        value: function _renderProfile(user) {
            console.log(user);
            /* create main title */
            var title = document.createElement('a');
            title.setAttribute('href', this.storage.urls.MAIN);
            title.setAttribute('class', 'main-title');
            var textElem = document.createElement('h1');
            textElem.textContent = 'Step fight';
            title.appendChild(textElem);
            this.node.appendChild(title);

            /* create controllers div*/
            var controllersDiv = document.createElement('div');
            controllersDiv.setAttribute('class', 'profile-view__controllers');

            this.hrefPlayM = document.createElement('div');
            //this.hrefPlayM.setAttribute('href', this.storage.urls.GAME);
            this.hrefPlayM.setAttribute('class', 'profile-view__controllers__button');
            var h1 = document.createElement('h1');
            h1.innerHTML = 'Multiplayer';
            this.hrefPlayM.appendChild(h1);

            this.hrefPlayS = document.createElement('div');
            //this.hrefPlayS.setAttribute('href', this.storage.urls.GAME);
            this.hrefPlayS.setAttribute('class', 'profile-view__controllers__button');
            h1 = document.createElement('h1');
            h1.innerHTML = 'Single play';
            this.hrefPlayS.appendChild(h1);

            controllersDiv.appendChild(this.hrefPlayM);
            controllersDiv.appendChild(this.hrefPlayS);

            /*create user div*/
            var userDiv = document.createElement('div');
            userDiv.setAttribute('class', 'profile-view__user-info');

            var elem = document.createElement('h2');
            elem.setAttribute('class', 'profile-view__user-info__login');
            elem.innerText = "" + user.login;
            userDiv.appendChild(elem);

            var arrValue = [{
                name: 'Rating:',
                value: user.rating
            }, {
                name: 'Winnings:',
                value: user.game_count_win
            }, {
                name: 'Total matches: ',
                value: user.game_count
            }];

            arrValue.forEach(function (el) {
                elem = document.createElement('h3');
                elem.setAttribute('class', 'profile-view__user-info__item');
                elem.innerText = el.name + " " + el.value;
                userDiv.appendChild(elem);
            });

            /*create resources div*/
            var resourcesDiv = document.createElement('div');
            resourcesDiv.setAttribute('class', 'profile-view__resources');

            var arrCrystals = [{ value: user.crystal_green, color: 'rgb(29, 140, 114)' }, { value: user.crystal_blue, color: 'rgb(57, 108, 219)' }, { value: user.crystal_red, color: 'rgb(138, 34, 76)' }, { value: user.crystal_purple, color: 'rgb(80, 35, 153)' }];
            arrCrystals.forEach(function (params) {
                var div = document.createElement('div');
                div.setAttribute('class', 'profile-view__resources__diamond');

                var d = new _Diamond2.default("" + params.color).getElem().el;
                div.appendChild(d);

                elem = document.createElement('h3');
                elem.setAttribute('class', 'profile-view__resources__diamond__text');
                elem.innerText = "" + params.value;
                div.appendChild(elem);
                resourcesDiv.appendChild(div);
            });

            this.node.appendChild(userDiv);
            this.node.appendChild(resourcesDiv);
            this.node.appendChild(controllersDiv);

            this.hrefLogout = document.createElement('div');
            this.hrefLogout.setAttribute('class', 'profile-view__controllers__button_logout');
            this.hrefLogout.setAttribute('id', 'btn-logout');
            this.hrefLogout.innerText = 'Log out';
            this.node.appendChild(this.hrefLogout);

            this._initListener();
        }
    }]);

    return ProfileView;
}(_BaseView3.default);

exports.default = ProfileView;

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

/**!

 @license
 handlebars v4.0.6

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/**!

 @license
 handlebars v4.0.6

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/**!

 @license
 handlebars v4.0.6

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(24),i=e(h),j=c(25),k=c(30),l=c(31),m=e(l),n=c(28),o=e(n),p=c(23),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(21),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(22),p=e(o),q=c(23),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(18),k=c(20),l=e(k),m="4.0.5";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0;c&&(g=c.start.line,h=c.start.column,a+=" - "+g+":"+h);for(var i=Error.prototype.constructor.call(this,a),j=0;j<f.length;j++)this[f[j]]=i[f[j]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,e?Object.defineProperty(this,"column",{value:h}):this.column=h)}catch(k){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(11),g=e(f),h=c(12),i=e(h),j=c(13),k=e(j),l=c(14),m=e(l),n=c(15),o=e(n),p=c(16),q=e(p),r=c(17),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(19),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(b<c){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!=f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!g)throw new q["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return g&&b!=g[0]&&(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){if(a)a.call||c.name||(c.name=a,a=c.partials[a]);else if("@partial-block"===c.name){for(var d=c.data;d["partial-block"]===i;)d=d._parent;a=d["partial-block"],d["partial-block"]=i}else a=c.partials[c.name];return a}function h(a,b,c){c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var d=void 0;if(c.fn&&c.fn!==i&&(c.data=r.createFrame(c.data),d=c.data["partial-block"]=c.fn,d.partials&&(c.partials=o.extend({},c.partials,d.partials))),void 0===a&&d&&(a=d),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}var l=c(3)["default"],m=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var n=c(5),o=l(n),p=c(6),q=m(p),r=c(4)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;h["default"].yy=n,n.locInfo=function(a){return new n.SourceLocation(b&&b.srcName,a)};var c=new j["default"](b);return c.accept(h["default"].parse(a))}var e=c(1)["default"],f=c(3)["default"];b.__esModule=!0,b.parse=d;var g=c(26),h=e(g),i=c(27),j=e(i),k=c(29),l=f(k),m=c(5);b.parser=h["default"];var n={};m.extend(n,l)},function(a,b){"use strict";var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[f[h]];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],
60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(b.yytext=b.yytext.substr(5,b.yyleng-9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b.__esModule=!0,b["default"]=c},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(28),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substr(1,a.length-2):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g="",h=0,i=b.length;h<i;h++){var j=b[h].part,k=b[h].original!==j;if(d+=(b[h].separator||"")+j,k||".."!==j&&"."!==j&&"this"!==j)e.push(j);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===j&&(f++,g+="../")}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(l.isArray(a)&&l.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var j=c(6),k=i(j),l=c(5),m=c(24),n=i(m),o=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[];var c=b.knownHelpers;if(b.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},c)for(var d in c)d in c&&(b.knownHelpers[d]=c[d]);return this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new k["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new k["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,n["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=n["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:o.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=n["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&n["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||n["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&l.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),")"]:e}var g=c(1)["default"];b.__esModule=!0;var h=c(4),i=c(6),j=g(i),k=c(5),l=c(32),m=g(l);e.prototype={nameLookup:function(a,b){return e.isValidJavaScriptVariableName(b)?[a,".",b]:[a,"[",JSON.stringify(b),"]"]},depthedLookup:function(a){return[this.aliasable("container.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=h.COMPILER_REVISION,b=h.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return k.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new j["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var k=this.createFunctionContext(d);if(this.isChild)return k;var l={compiler:this.compilerInfo(),main:k};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new m["default"](this.options.srcName),this.decorators=new m["default"](this.options.srcName)},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);c.length>0&&(b+=", "+c.join(", "));var d=0;for(var e in this.aliases){var f=this.aliases[e];this.aliases.hasOwnProperty(e)&&f.children&&f.referenceCount>1&&(b+=", alias"+ ++d+"="+e,f.children[0]="alias"+d)}var g=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&g.push("blockParams"),this.useDepths&&g.push("depths");var h=this.mergeSource(b);return a?(g.push(h),Function.apply(this,g)):this.source.wrap(["function(",g.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},blockValue:function(a){var b=this.aliasable("helpers.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("helpers.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=c?[e.name," || "]:"",g=["("].concat(f,d);this.options.strict||g.push(" || ",this.aliasable("helpers.helperMissing")),g.push(")"),this.push(this.source.functionCall(g,"call",e.callParams))},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",
f.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new j["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new j["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : {}");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(f.isArray(a)){for(var d=[],e=0,g=a.length;e<g;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}b.__esModule=!0;var f=c(5),g=void 0;try{}catch(h){}g||(g=function(a,b,c,d){this.src="",d&&this.add(d)},g.prototype={add:function(a){f.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){f.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new g(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof g?a:(a=d(a,this,b),new g(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[];for(var c in a)if(a.hasOwnProperty(c)){var e=d(a[c],this);"undefined"!==e&&b.push([this.quotedString(c),":",e])}var f=this.generateList(b);return f.prepend("{"),f.add("}"),f},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__(10);

var _getModal = __webpack_require__(9);

var _hasClass$isDescendant = __webpack_require__(6);

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__(6);

var _setFocusStyle = __webpack_require__(9);

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__(10);

var _getModal$getInput$setFocusStyle = __webpack_require__(9);

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(6);

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(6);

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(10);

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(9);

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__(130);

var _handleKeyDown = __webpack_require__(131);

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__(26);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__(133);

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ }),
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(27);


/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQ0YzAxZTg1ZGZjNDk1Mjk2MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQmFzZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lL29iamVjdC9TdGVwT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtZG9tLmpzIiwid2VicGFjazovLy8uL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9sb2FkZXIvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL34vc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtc3dhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdXBwb3J0L2h0dHAvSHR0cC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUvb2JqZWN0L1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvYWN0aW9ucy9DaGVja0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvZGVmYXVsdC1wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19fYnV0dG9uL2Zvcm0tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19faW5wdXQvZm9ybS1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZ2FtZS1jaG9vc2UtYWN0aW9uL0dhbWVDaG9vc2VBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvR2FtZUNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9nYW1lLWluZm8tdG9hc3QvR2FtZUluZm9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZ2FtZS1yZXN1bHQtdGFibGUvR2FtZVJlc3VsdFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9nYW1lLXRpbWVyL0dhbWVUaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbXVzaWMtY29udHJvbHMvbXVzaWMtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3Byb2dyZXNzLWJhci10YWJsZS9wcm9ncmVzc0JhclRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zcGVlY2gtY29udHJvbC9TcGVlY2hDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lL21vZHVsZXMvR2FtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUvbW9kdWxlcy9HYW1lU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUvbW9kdWxlcy9zdHJhdGVnaWVzL011bHRpcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lL21vZHVsZXMvc3RyYXRlZ2llcy9TaW5nbGVwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUvb2JqZWN0L0dhbWVTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvRGlhbW9uZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9lbGVtZW50LWNyZWF0b3IvRWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvcm91dGVyL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9yb3V0ZXIvUm91dGVyVXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3cvU2VydmljZVdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQtdmlldy9BYm91dFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2VudGVyLXZpZXdzL0xvZ2luVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW50ZXItdmlld3MvU2lnblVwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS12aWV3L0dhbWVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sZWFkZXJib2FyZC12aWV3L0xlYWRlckJvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVudS12aWV3L01lbnVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zd2VldGFsZXJ0L2Rpc3Qvc3dlZXRhbGVydC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2Nzcy9pemlUb2FzdC5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19fYnV0dG9uL2Zvcm1fX2J1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19faGVscC10ZXh0L2Zvcm1fX2hlbHAtdGV4dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19faW5wdXQvZm9ybV9faW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZm9ybS9fX2xpbmsvZm9ybV9fbGluay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9mb3JtL19fdGl0bGUvZm9ybV9fdGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtY2hvb3NlLWFjdGlvbi9fX2J1dHRvbi9nYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9nYW1lLWNob29zZS1hY3Rpb24vX19jb250YWluZXIvZ2FtZS1jaG9vc2UtYWN0aW9uX19jb250YWluZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZ2FtZS1jaG9vc2UtYWN0aW9uL2dhbWUtY2hvb3NlLWFjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9nYW1lLWNvbnRyb2xzL19fYWN0aW9uLWJ1dHRvbi9nYW1lLWNvbnRyb2xzX19hY3Rpb24tYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvX19idXR0b24vZ2FtZS1jb250cm9sc19fYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvZ2FtZS1jb250cm9scy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9nYW1lLWluZm8tdG9hc3QvZ2FtZS1pbmZvLXRvYXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtcmVzdWx0LXRhYmxlL2dhbWUtcmVzdWx0LXRhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2dhbWUtdGltZXIvZ2FtZS10aW1lci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9sb2FkZXIvbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL211c2ljLWNvbnRyb2xzL211c2ljLWNvbnRyb2xzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3Byb2dyZXNzLWJhci10YWJsZS9wcm9ncmVzcy1iYXItdGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3BlZWNoLWNvbnRyb2wvc3BlZWNoLWVsZW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwbGljYXRpb24vbWFpbi10aXRsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC12aWV3L2Fib3V0LXZpZXcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS12aWV3L19fY29udGFpbmVyL2dhbWUtdmlld19fY29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtdmlldy9fX2dhbWUtYXJlYS9nYW1lLXZpZXdfX2dhbWUtYXJlYS5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLXZpZXcvZ2FtZS12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xlYWRlcmJvYXJkLXZpZXcvX19saW5rL2xlYWRlcmJvYXJkLXZpZXdfX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGVhZGVyYm9hcmQtdmlldy9fX2xpc3QvX19pdGVtL2xlYWRlcmJvYXJkLXZpZXdfX2xpc3RfX2l0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGVhZGVyYm9hcmQtdmlldy9fX2xpc3QvbGVhZGVyYm9hcmQtdmlld19fbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sZWFkZXJib2FyZC12aWV3L19fdGl0bGUvbGVhZGVyYm9hcmQtdmlld19fdGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVudS12aWV3L19fY29udHJvbHMtYmxvY2svX19idXR0b24vbWVudS12aWV3X19jb250cm9scy1ibG9ja19fYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lbnUtdmlldy9fX2NvbnRyb2xzLWJsb2NrL21lbnUtdmlld19fY29udHJvbHMtYmxvY2suc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVudS12aWV3L21lbnUtdmlldy5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvX19jb250cm9sbGVycy9fX2J1dHRvbi9wcm9maWxlLXZpZXdfX2NvbnRyb2xsZXJzX19idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fY29udHJvbGxlcnMvcHJvZmlsZS12aWV3X19jb250cm9sbGVycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvX19yZXNvdXJjZXMvX19kaWFtb25kL3Byb2ZpbGUtdmlld19fcmVzb3VyY2VzX19kaWFtb25kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2ZpbGUtdmlldy9fX3Jlc291cmNlcy9fX2RpYW1vbmQvdGV4dC9wcm9maWxlLXZpZXdfX3Jlc291cmNlc19fZGlhbW9uZF9fdGV4dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvX19yZXNvdXJjZXMvcHJvZmlsZS12aWV3X19yZXNvdXJjZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fdXNlci1pbmZvL2l0ZW0vcHJvZmlsZS12aWV3X191c2VyLWluZm9fX2l0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fdXNlci1pbmZvL2xvZ2luL3Byb2ZpbGUtdmlld19fdXNlci1pbmZvX19sb2dpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvX191c2VyLWluZm8vcHJvZmlsZS12aWV3X191c2VyLWluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy92aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvaGFuZGxlYmFycy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1jbGljay5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvaGFuZGxlLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvaW5qZWN0ZWQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvc2V0LXBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3ZWV0YWxlcnQvbGliL3N3ZWV0YWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUvbW9kdWxlcy9nYW1lLXNjZW5lLnNjc3MiXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJodHRwIiwidXJsIiwiQmFzZVVybCIsImFkZHJlc3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9jcmVhdGVSZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwidXNlciIsImNhdGNoIiwiZSIsImJvZHkiLCJoZWFkZXJzIiwicmVzdWx0IiwidHlwZSIsInJlcXVlc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJCYXNlVmlldyIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiU3RlcE9iamVjdCIsImhpdCIsIm1ldGhvZCIsInRhcmdldCIsImJsb2NrIiwiaGl0TWV0aG9kIiwiaGl0VGFyZ2V0IiwiYmxvY2tNZXRob2QiLCJQcm9ncmVzc0JhciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkh0dHAiLCJpbnN0YW5jZSIsIl9iYXNlVXJsIiwiZmV0Y2hPYmoiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJqc29uIiwiZXJyIiwic3RhdHVzVGV4dCIsInZhbHVlIiwiRm9ybSIsIm9wdGlvbnMiLCJkYXRhIiwiZmllbGRzIiwiY29udHJvbHMiLCJfcmVuZGVyIiwiX3NldEF0dHJpYnV0ZXMiLCJmb3JtIiwiYXR0cnMiLCJ0aXRsZSIsImlubmVySFRNTCIsInRleHQiLCJhcHBlbmRDaGlsZCIsIl9nZXRGaWVsZHMiLCJfZ2V0Q29udHJvbHMiLCJfZmllbGRzQXBwZW5kVG8iLCJfY29udHJvbHNBcHBlbmRUbyIsIm1hcCIsImdldEVsZW0iLCJhdHRyaWJ1dGVzIiwiZWxlbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsImFycmF5IiwiaXRlbSIsImhlbHBfZWwiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJTdG9yYWdlIiwidXJsc09iaiIsImdhbWVTdGF0ZXNPYmoiLCJvYmpVc2VyIiwiX19pbnN0YW5jZSIsInN0b3JhZ2UiLCJDaGVja0ZpZWxkcyIsIm1hdGNoIiwib2JqIiwiYXJyIiwiX2NoZWNrTGF0aW4iLCJmaWVsZCIsInB1c2giLCJlcnJfdGV4dCIsImxlbmd0aCIsImhlbHAiLCJ0ZXh0Q29udGVudCIsImZpZWxkU2V0RXJyIiwiZmllbGRSZW1vdmVPayIsImxvZyIsImZpZWxkU2V0T2siLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJvYmoxIiwib2JqMiIsImNoZWNrIiwiX2NoZWNrUGFzc0xlbmd0aCIsIl9jaGVja1Bhc3NFcXVhbHMiLCJsb2NhdGlvbiIsImhyZWYiLCJwcm90b2NvbCIsIndpbmRvdyIsInN1YnN0cmluZyIsImdldFVzZXIiLCJzdGFydFJvdXRlIiwibG9hZFlhbmRleFNwZWVjaCIsImxvYWRWayIsInJlbmRlciIsInJvdXRlciIsImRvY3VtZW50RWxlbWVudCIsImluaXQiLCJWaWV3Iiwic3RhcnQiLCJ2a1NjcmlwdCIsInNyYyIsIm9ubG9hZCIsIlZLIiwiYXBpSWQiLCJzcGVlY2hTY3JpcHQiLCJzcGVlY2hTZXR0aW5nc1NjcmlwdCIsInlhIiwic3BlZWNoa2l0Iiwic2V0dGluZ3MiLCJsYW5nIiwiYXBpa2V5IiwiRm9ybUJ1dHRvbiIsIklucHV0IiwiaGVscF9hdHRycyIsInByZXYiLCJjaGVja0VtcHR5IiwiaGVscFNldFRleHQiLCJmaWVsZFJlbW92ZUVyciIsInZhbGlkIiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tMb2dpbiIsImNoZWNrUGFzc3dvcmQiLCJmaWVsZFNldFRleHQiLCJHYW1lQ2hvb3NlQWN0aW9uIiwibWFuYWdlciIsImFjdGlvbiIsImJ1ZmZBY3Rpb24iLCJjb250YWluZXIiLCJjb250ZW50Q29udGFpbmVyIiwiYnV0dG9uQ2xvc2UiLCJhY3Rpb25TZXRzQ29udGFpbmVyIiwiYWN0aW9uU2V0SGl0IiwiYWN0aW9uU2V0QmxvY2siLCJoaXRIZWFkZXIiLCJpbm5lclRleHQiLCJzZXRIaXRDb250cm9scyIsImJsb2NrSGVhZGVyIiwic2V0QmxvY2tDb250cm9sbHMiLCJjb250YWluZXJCbG9ja01ldGhvZENvbnRyb2xzIiwiYnV0dG9uQmxvY2tIZWFkIiwiYnV0dG9uQmxvY2tCb2R5IiwiY29udGFpbmVySGl0TWV0aG9kQ29udHJvbHMiLCJjb250YWluZXJIaXRUYXJnZXRDb250cm9scyIsImhpdE1ldGhvZEhlYWRUZXh0IiwiYnV0dG9uSGl0TWV0aG9kSGVhZCIsImJ1dHRvbkhpdE1ldGhvZEFybSIsImJ1dHRvbkhpdE1ldGhvZExlZyIsImhpdFRhcmdldEhlYWRUZXh0IiwiYnV0dG9uSGl0VGFyZ2V0SGVhZCIsImJ1dHRvbkhpdFRhcmdldEJvZHkiLCJwcm9iYWJpbGl0eUNvbnRhaW5lciIsInByb2JhYmlsaXR5SW5mbyIsImJ0bkNob29zZSIsIl9pbml0QWN0aW9uU2V0c0xpc3RlbmVycyIsImFzc2lnbiIsIl9zZXRCdXR0b25BY3Rpb25Gb2N1cyIsImFjdGlvbkxpc3RlbmVyc01hcCIsIk1hcCIsImNob29zZU1ldGhvZEhpdEhlYWQiLCJjbGVhckhpdE1ldGhvZEZvY3VzIiwiY2hvb3NlVGhhbkhpdEFybSIsImNob29zZVRoYW5IaXRMZWciLCJjaG9vc2VXaGVyZUhpdEhlYWQiLCJjbGVhckhpdFRhcmdldEZvY3VzIiwiY2hvb3NlV2hlcmVIaXRCb2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJjaG9vc2VCbG9ja0hlYWQiLCJjbGVhckJsb2NrTWV0aG9kRm9jdXMiLCJjaG9vc2VCbG9ja0JvZHkiLCJjYWxsYmFjayIsImFjdGlvbkNhbGxiYWNrQ2xvc2UiLCJoaWRlIiwiZGVsZXRlQnV0dG9uQWN0aW9uIiwiX2NsZWFyRm9jdXNlZCIsImFjdGlvbkNhbGxiYWNrQ2hvb3NlIiwiY2hlY2tPbkVtcHR5IiwicG9zaXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiR2FtZUNvbnRyb2xzIiwiZ2FtZUFjdGlvbk1vZGFsIiwibWFuYWdlckNvbnRleHQiLCJpc0J1dHRvblN0ZXBBY3RpdmUiLCJhY3Rpb25Db250YWluZXIiLCJidXR0b25BZGRBY3Rpb24iLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJzcGVlY2hDb250cm9sIiwiYnRuU3RlcCIsImJ0blN0ZXBUZXh0IiwiYnRuSGVscCIsImluaXRIZWxwTGlzdGVuZXIiLCJldmVudCIsImh0bWwiLCJhbmltYXRpb24iLCJjcmVhdGVTdGVwIiwiaW5pdEJ1dHRvbnNBY3Rpb24iLCJhY3Rpb25PYmoiLCJhY3Rpb25BZGRDYWxsYmFjayIsInNldFN0YXJ0QWN0aW9uIiwic3RyYXRlZ3kiLCJteVN0ZXAiLCJzaG93IiwibGF3IiwiR2FtZUluZm9Ub2FzdCIsImhlYWx0aCIsImxvZ2luIiwiaGVhbHRoQ29uc3QiLCJjYW52YXMiLCJ1cGRhdGVIZWFsdGgiLCJocCIsImdldENvbnRleHQiLCJjb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJyZWN0IiwiY2xvc2VQYXRoIiwiZmlsbCIsIkdhbWVSZXN1bHRUYWJsZSIsIl9hZGREYXRhIiwibWUiLCJ3aW4iLCJ0aXRsZVJlc3VsdCIsIm15RGF0YUluZm8iLCJvYmplY3QiLCJyYXRpbmciLCJvcHBvbmVudERhdGFJbmZvIiwib3Bwb25lbnQiLCJidG5PayIsIkdhbWVUaW1lciIsInRpbWVUZXh0IiwidGltZURvd24iLCJEYXRlIiwiZ2V0VGltZSIsImludGV2YWwiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImNhbmNlbCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiTXVzaWNDb250cm9scyIsIm11c2ljRWxlbWVudCIsImJ1dHRvbiIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsIlByb2dyZXNzQmFyVGFibGUiLCJwcm9ncmVzc0JhciIsIl9hZGRUZXh0IiwidGV4dEFycmF5IiwiY29uZiIsIlNwZWVjaENvbnRyb2wiLCJpc0FjdGl2ZSIsImltZyIsIl9pbml0TGlzdGVuZXJzIiwic3BlZWNoUmVjb2duaXRpb24iLCJTcGVlY2hSZWNvZ25pdGlvbiIsImRhdGFDYWxsYmFjayIsIl9hbmFsaXNlU3BlZWNoIiwiaW5pdENhbGxiYWNrIiwiX3N0YXJ0UmVjb2duaXplIiwiZXJyb3JDYWxsYmFjayIsIl9lcnJvclJlY29nbml6ZSIsInN0b3BDYWxsYmFjayIsIl9zdG9wUmVjb2duaXplIiwiaW5mb0NhbGxiYWNrIiwiX3N0YXR1c1JlY29nbml6ZSIsInV0dGVyYW5jZVNpbGVuY2UiLCJfc3RhcnRBbmltYXRpb24iLCJfZmluaXNoQW5pbWF0aW9uIiwid2FybiIsInNlbnRfYnl0ZXMiLCJzZW50X3BhY2thZ2VzIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZG9uZSIsIm1lcmdlIiwid29yZHMiLCJiaW9tZXRyeSIsIl9hbmFsaXNlVGV4dCIsInN0b3AiLCJmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJvZmZzZXQiLCJvcGFjaXR5IiwidGltaW5ncyIsImR1cmF0aW9uIiwiaXRlcmF0aW9ucyIsIkluZmluaXR5IiwiZGlyZWN0aW9uIiwiZGVsYXkiLCJlYXNpbmciLCJidXR0b25BbmltYXRpb24iLCJhbmltYXRlIiwic3RlcE9iaiIsInRleHRXT1NwYWNlcyIsInJlcGxhY2UiLCJfcHJlZml4RnVuY3Rpb24iLCJzdWIiLCJzdHJpbmciLCJzIiwibWF4TGVuZ3RoIiwibiIsInByZWZpeEFyciIsIkFycmF5IiwiaSIsImoiLCJHYW1lTWFuYWdlciIsInZpZXciLCJzdHJhdGVneU5hbWUiLCJfZ2FtZUlkIiwic2NlbmUiLCJzZXRTdGF0ZSIsImdhbWVTdGF0ZXMiLCJTVEFURVdBSVQiLCJTSU5HTEVQTEFZRVJfU1RSQVRFR1kiLCJ3cyIsIldlYlNvY2tldCIsIm9ub3BlbiIsImluaXRXZWJTb2NrZXRMaXN0ZW5lcnMiLCJzdGFydFNwR2FtZVByb2Nlc3MiLCJjaGVja1VzZXIiLCJjb25zdHJ1Y3RvciIsInNldFBsYXllcnMiLCJTVEFURUdBTUUiLCJzdGFydEdhbWVMb29wIiwiZ28iLCJ1cmxzIiwiTE9HSU4iLCJtcE9wcG9uZW50TG9naW4iLCJyZW5kZXJUaW1lciIsIm15UmVzdWx0Iiwib3Bwb25lbnRSZXN1bHQiLCJzZXRSZXN1bHREYXRhIiwiU1RBVEVSRVNVTFQiLCJvbm1lc3NhZ2UiLCJncm91cCIsImdyb3VwRW5kIiwid3NNZXNzYWdlQW5hbHl6ZSIsInBhcnNlIiwib25lcnJvciIsIm9uY2xvc2UiLCJtZXNzYWdlIiwia2V5Iiwib3Bwb25lbnRMb2dpbiIsImZpcnN0Iiwic2Vjb25kIiwic3RhcnRNcEdhbWVQcm9jZXNzIiwic3RhcnRNcFRpbWVyIiwic3RlcFJlc3VsdEFuYWx5emUiLCJ0aW1lciIsImhpZGRlbiIsInNlbmQiLCJpZCIsInN0ZXAiLCJzZW5kU3RlcCIsIm15QWN0aW9uIiwib3Bwb25lbnRBY3Rpb24iLCJteURhbWFnZSIsIm9wcG9uZW50RGFtYWdlIiwibXlIZWFsdGgiLCJvcHBvbmVudEhlYWx0aCIsInRha2VuRGFtYWdlIiwic3RlcEFuYWx5emUiLCJnYW1lQ29udHJvbHMiLCJzZXRCdXR0b25TdGVwU3RhdHVzIiwiY2xvc2UiLCJHYW1lU2NlbmUiLCJIRGltIiwiV0RpbSIsImFwcCIsImI0dyIsInJlcXVpcmUiLCJfc2V0U2l6ZSIsImlubmVySGVpZ2h0IiwiZmllbGRTaXplIiwiV0lEVEgiLCJpbm5lcldpZHRoIiwiSEVHSFQiLCJzdHlsZSIsIl9vbldpbmRvd1Jlc2l6ZSIsInN0YXRlIiwiX3JlbmRlclN0YXRlIiwiX3JlbmRlcldhaXRTdGF0ZSIsIl9yZW5kZXJHYW1lU3RhdGUiLCJfcmVuZGVyUmVzdWx0U3RhdGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInByb2dyZXNzQmFyVGFibGUiLCJfcmVuZGVyQ29udGFpbmVyIiwicmVuZGVyQ29udHJvbEVsZW1lbnRzIiwiX3JlbmRlckluZm9CYXJzIiwiX3JlbmRlckNhbnZhcyIsImNhbnZhc19jb250YWluZXJfaWQiLCJhdXRvcmVzaXplIiwicGh5c2ljc19lbmFibGVkIiwiX2FkZFN0eWxlT25DYW52YXMiLCJsb2FkIiwiY2xlYXJWaWV3IiwiZ2FtZVJlc3VsdFRhYmxlIiwicmVzdWx0RGF0YSIsImluaXRMaXN0ZW5lciIsIlBST0ZJTEUiLCJjaGlsZHJlbiIsImxhc3RDaGlsZCIsIm15SW5mbyIsInBsYXllcnMiLCJvcHBvbmVudEluZm8iLCJNdWx0aVBsYXllclN0cmF0ZWd5IiwiZmluaXNoR2FtZUxvb3AiLCJmaW5pc2giLCJnYW1lTG9vcCIsImluaXREb1N0ZXBMaXN0ZW5lciIsImluaXRBY3Rpb25MaXN0ZW5lciIsImJ0blRleHQiLCJjaGVja015U3RlcCIsIm15QWN0aW9ucyIsIm15SHAiLCJvcHBvbmVudEhwIiwiY2xlYXJNeUFjdGlvbnNBcnJheSIsIl9sb2dTdGVwIiwiX3VwZGF0ZU15SGVhbHRoIiwiX3VwZGF0ZU9wcG9uZW50SGVhbHRoIiwiaW5mbyIsInRpbWVvdXQiLCJpY29uIiwiZGVsZXRlRG9TdGVwTGlzdGVuZXIiLCJkZWxldGVBY3Rpb25MaXN0ZW5lciIsIlNpbmdsZVBsYXllclN0cmF0ZWd5Iiwib3Bwb25lbnRTdGVwIiwiQkFTRV9EQU1BR0UiLCJjaGVja015QWN0aW9uIiwiZ2FtZUxvZ2ljIiwib3Bwb25lbnRBY3Rpb25zIiwiY3JlYXRlU3RlcEZvck9wcG9uZW50Iiwic3RlcEFuYWx5c2VyIiwiZ2V0RGFtYWdlIiwibG9nSXQiLCJhY3Rpb25UeXBlIiwicCIsImNoZWNrUCIsInJhbmRvbSIsIndobyIsImFjdGlvbkZvckF0dGFja2luZyIsImFjdGlvbkZvckRlZmVuc2luZyIsImhpdFAiLCJibG9ja1AiLCJkYW1hZ2UiLCJnZXRQcm9iYWJpbGl0eSIsImNoZWNrUHJvYmFiaWxpdHkiLCJyb3VuZCIsImRpdiIsIm1ldGhvZHMiLCJ0YXJnZXRzIiwiR2FtZVN0YXRlcyIsIk1VTFRJUExBWUVSX1NUUkFURUdZIiwiRGlhbW9uZCIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsIkVsZW1lbnRDcmVhdG9yIiwic2V0QXR0cnMiLCJpc0FycmF5IiwiX3BhcnNlRWxlbWVudHMiLCJjb25maWciLCJSb3V0ZXIiLCJyb3V0ZXMiLCJjdXJyVmlldyIsIm9uYmVmb3JldW5sb2FkIiwicGF0aG5hbWUiLCJkaWFsb2dUZXh0IiwicmV0dXJuVmFsdWUiLCJvbnBvcHN0YXRlIiwicmVnaXN0ZXIiLCJwYXRoIiwiaXNUb0hpc3RvcnkiLCJnYW1lU3RyYXRlZ3kiLCJfY2hlY2tPZmZsaW5lIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRlc3Ryb3lWaWV3IiwiZ2V0Vmlld0J5Um91dGUiLCJyb3V0ZSIsIl9vblJvdXRlQ2hhbmdlIiwiSFRNTEFuY2hvckVsZW1lbnQiLCJfY2hlY2tPbkFibGVMaW5rIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRFbGVtZW50IiwibGluayIsImxpbmtzIiwiX2NoZWNrVXNlciIsIndhcm5pbmciLCJTSUdOVVAiLCJHQU1FIiwiTUFJTiIsIlJvdXRlclVybHMiLCJMRUFERVJCT0FSRCIsIkFCT1VUIiwiU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJBYm91dFZpZXciLCJjbGFzcyIsImNyZWF0ZSIsIl9pbml0TGlzdGVuZXIiLCJlZ29yIiwiZGVuaXMiLCJyaXNoYXQiLCJhbmRyZXkiLCJMb2dpblZpZXciLCJfc2hvd1ZpZXdQcm9ncmVzc0JhciIsImxvZ2luRm9ybSIsInBsYWNlaG9sZGVyIiwiX2hpZGVWaWV3UHJvZ3Jlc3NCYXIiLCJoMSIsInBhc3N3b3JkIiwibG9naW5IZWxwIiwiYnRuTG9naW4iLCJidG5Ub1NpZ25VcCIsInZrQXV0aCIsImdldEVsZW1QYXJlbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfY2hlY2tGaWVsZHMiLCJnZXRGb3JtRGF0YSIsIl9zaG93UHJvZ3Jlc3NCYXIiLCJfY2xlYXJGaWVsZHMiLCJfaGlkZVByb2dyZXNzQmFyIiwic2V0RXJyb3IiLCJBdXRoIiwiZ2V0TG9naW5TdGF0dXMiLCJhY2Nlc3MiLCJGUklFTkRTIiwiT2JzZXJ2ZXIiLCJzdWJzY3JpYmUiLCJjbGVhciIsInZhbGlkYXRlIiwiU2lnblVwVmlldyIsInNpZ251cEZvcm0iLCJyZXBlYXRQYXNzd29yZCIsInBhc3N3b3JkSGVscCIsInJlcGVhdFBhc3N3b3JkSGVscCIsImJ0blNpZ25VcCIsImJ0blRvTG9naW4iLCJzaWdudXAiLCJzdWNjZXNzIiwiR2FtZVZpZXciLCJnYW1lTWFuYWdlciIsInN0YXJ0R2FtZSIsImNsb3NlV2ViU29ja2V0IiwiTGVhZGVyQm9hcmRWaWV3IiwibGVhZGVyQm9hcmRTb3VyY2UiLCJsZWFkZXJCb2FyZFRlbXBsYXRlIiwiY29tcGlsZSIsIl9zZXRQcm9ncmVzc0JhciIsImdldExlYWRlcnMiLCJsZWFkZXJzIiwiaXRlciIsIl9yZWZyZXNoTGVhZGVyQm9hcmQiLCJsb2dvIiwibGVhZGVyYm9hcmQiLCJjb250cm9sIiwiX2luaXRSZWZyZXNoTGlzdGVuZXIiLCJ0aXRsZXMiLCJyZWZyZXNoIiwiX2NsZWFyQ29udGFpbmVyIiwiTWVudVZpZXciLCJpbnN0ciIsIl9nZXRUaXRsZSIsImVsZW1BcnJheSIsIl9nZXRFbGVtcyIsImNvbnRyb2xzQmxvY2siLCJfZWxlbXNBcHBlbmRUbyIsIl9zZXRBdHRycyIsInRleHRFbGVtIiwiUHJvZmlsZVZpZXciLCJfZ2V0VXNlciIsIl9yZW5kZXJQcm9maWxlIiwiaHJlZkxvZ291dCIsImxvZ091dFVzZXIiLCJocmVmUGxheVMiLCJocmVmUGxheU0iLCJjb250cm9sbGVyc0RpdiIsInVzZXJEaXYiLCJhcnJWYWx1ZSIsImdhbWVfY291bnRfd2luIiwiZ2FtZV9jb3VudCIsInJlc291cmNlc0RpdiIsImFyckNyeXN0YWxzIiwiY3J5c3RhbF9ncmVlbiIsImNyeXN0YWxfYmx1ZSIsImNyeXN0YWxfcmVkIiwiY3J5c3RhbF9wdXJwbGUiLCJkIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztxakJDaEVBOzs7OztBQUdBOzs7Ozs7OztJQUNxQkEsVztBQUNqQiwyQkFBYztBQUFBOztBQUNWLGFBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNBLGFBQUtDLEdBQUwsR0FBVyxLQUFLRCxJQUFMLENBQVVFLE9BQXJCO0FBQ0g7O0FBRUQ7Ozs7Ozs7O2tDQUlVO0FBQUE7O0FBQ04sZ0JBQU1DLFVBQWEsS0FBS0YsR0FBbEIsY0FBTjtBQUNBLG1CQUFPLElBQUlH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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxRUFBcUU7QUFDM0c7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHNDQUFzQyxtRUFBbUU7QUFDekc7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esc0RBQXNEO0FBQ3RELHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBOztBQUVBLDhDQUE4QztBQUM5QywwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUEsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxTQUFTLHVCQUF1QjtBQUNwRixLQUFLO0FBQ0w7QUFDQSw4REFBOEQsc0JBQXNCO0FBQ3BGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSiwwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQzlMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtB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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUM5RUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQ3pDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUdBQXFHO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkRBQTJEO0FBQzNELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQ2hPQTs7QUFFQSw4Q0FBOEMsdUNBQXVDLGtCQUFrQjs7QUFFdkc7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7O0FBRXJFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsb0RBQW9EO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw0QkFBNEI7QUFDcEQsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNBLHlDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTQ0YzAxZTg1ZGZjNDk1Mjk2MDMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vaHR0cC9IdHRwJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHAoKTtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaHR0cC5CYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9C40YLRjCB1c2VyLdCwXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9nZXRgO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgbnVsbCwgJ0dFVCcsIG51bGwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNC70L7Qs9C40L3QuNGC0YzRgdGPXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dpbmA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHNpZ251cChib2R5KSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL3NpZ251cGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7cmVzdWx0OiAnbm8tY29ubid9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtyZXN1bHQ6ICdlcnJvcid9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LvRg9GH0LjRgtGMINGB0L/QuNGB0L7QuiDQu9C40LTQtdGA0L7QslxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgZ2V0TGVhZGVycygpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvbGVhZGVyc2A7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBudWxsLCAnR0VUJywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLRi9GF0L7QtCB1c2VyLdCwXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBsb2dPdXRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dvdXRgO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgbnVsbCwgJ0dFVCcsIG51bGwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXRgtC+0LQgXCLRgdC00LXQu9Cw0YLRjCDQt9Cw0L/RgNC+0YFcIlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3NcclxuICAgICAqIEBwYXJhbSBoZWFkZXJzXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAtINGC0LjQvyDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzID0ge30sIHR5cGUgPSAnR0VUJywgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgaHR0cCA9IHRoaXMuaHR0cDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBodHRwLnJlcXVlc3QoYWRkcmVzcywgaGVhZGVycywgdHlwZSwgYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnMjAwIE9LJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdXBwb3J0L3NlcnZpY2UvVXNlclNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxNy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFwiLi92aWV3LnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJWaWV3KCl7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1sb2FkZXInKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtbG9hZGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlT3V0Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPQtNCw0LvQuNGC0Ywgdmlld1xyXG4gICAgICovXHJcbiAgICBkZXN0cm95VmlldygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVPdXQnKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5ub2RlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvQmFzZVZpZXcuanMiLCIvKlxyXG4gKiBpemlUb2FzdCB8IHYxLjEuMFxyXG4gKiBodHRwOi8vaXppdG9hc3QubWFyY2Vsb2RvbGNlLmNvbVxyXG4gKiBieSBNYXJjZWxvIERvbGNlLlxyXG4gKi8gXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeShyb290KSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cm9vdC5pemlUb2FzdCA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fVxyXG59KSh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly9cclxuXHQvLyBWYXJpYWJsZXNcclxuXHQvL1xyXG5cdHZhciAkaXppVG9hc3QgPSB7fSxcclxuXHRcdFBMVUdJTl9OQU1FID0gJ2l6aVRvYXN0JyxcclxuXHRcdEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXHJcblx0XHRJU01PQklMRSA9ICgvTW9iaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgPyB0cnVlIDogZmFsc2UsXHJcblx0XHRJU0NIUk9NRSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvciksXHJcblx0XHRJU0ZJUkVGT1ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnLFxyXG5cdFx0QUNDRVBUU1RPVUNIID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG5cdFx0UE9TSVRJT05TID0gWydib3R0b21SaWdodCcsJ2JvdHRvbUxlZnQnLCdib3R0b21DZW50ZXInLCd0b3BSaWdodCcsJ3RvcExlZnQnLCd0b3BDZW50ZXInLCdjZW50ZXInXSxcclxuXHRcdFRIRU1FUyA9IHtcclxuXHRcdFx0aW5mbzoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdFx0XHRpY29uOiBcImljby1pbmZvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2Vzczoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28tY2hlY2tcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0d2FybmluZzoge1xyXG5cdFx0XHRcdGNvbG9yOiBcInllbGxvd1wiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLXdhcm5pbmdcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJyZWRcIixcclxuXHRcdFx0XHRpY29uOiBcImljby1lcnJvclwiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0TU9CSUxFV0lEVEggPSA1NjgsXHJcblx0XHRDT05GSUcgPSB7fTtcclxuXHJcblx0Ly8gRGVmYXVsdCBzZXR0aW5nc1xyXG5cdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdGNsYXNzOiAnJyxcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdHRpdGxlQ29sb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0XHRtZXNzYWdlQ29sb3I6ICcnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnJyxcclxuXHRcdGNvbG9yOiAnJywgLy8gYmx1ZSwgcmVkLCBncmVlbiwgeWVsbG93XHJcblx0XHRpY29uOiAnJyxcclxuXHRcdGljb25UZXh0OiAnJyxcclxuXHRcdGljb25Db2xvcjogJycsXHJcblx0XHRpbWFnZTogJycsXHJcblx0XHRpbWFnZVdpZHRoOiA1MCxcclxuXHRcdHppbmRleDogOTk5OTksXHJcblx0XHRsYXlvdXQ6IDEsXHJcblx0XHRiYWxsb29uOiBmYWxzZSxcclxuXHRcdGNsb3NlOiB0cnVlLFxyXG5cdFx0cnRsOiBmYWxzZSxcclxuXHRcdHBvc2l0aW9uOiAnYm90dG9tUmlnaHQnLCAvLyBib3R0b21SaWdodCwgYm90dG9tTGVmdCwgdG9wUmlnaHQsIHRvcExlZnQsIHRvcENlbnRlciwgYm90dG9tQ2VudGVyLCBjZW50ZXJcclxuXHRcdHRhcmdldDogJycsXHJcblx0XHR0YXJnZXRGaXJzdDogdHJ1ZSxcclxuXHRcdHRpbWVvdXQ6IDUwMDAsXHJcblx0XHRkcmFnOiB0cnVlLFxyXG5cdFx0cGF1c2VPbkhvdmVyOiB0cnVlLFxyXG5cdFx0cmVzZXRPbkhvdmVyOiBmYWxzZSxcclxuXHRcdHByb2dyZXNzQmFyOiB0cnVlLFxyXG5cdFx0cHJvZ3Jlc3NCYXJDb2xvcjogJycsXHJcblx0XHRhbmltYXRlSW5zaWRlOiB0cnVlLFxyXG5cdFx0YnV0dG9uczoge30sXHJcblx0XHR0cmFuc2l0aW9uSW46ICdmYWRlSW5VcCcsIC8vIGJvdW5jZUluTGVmdCwgYm91bmNlSW5SaWdodCwgYm91bmNlSW5VcCwgYm91bmNlSW5Eb3duLCBmYWRlSW4sIGZhZGVJbkRvd24sIGZhZGVJblVwLCBmYWRlSW5MZWZ0LCBmYWRlSW5SaWdodCwgZmxpcEluWFxyXG5cdFx0dHJhbnNpdGlvbk91dDogJ2ZhZGVPdXQnLCAvLyBmYWRlT3V0LCBmYWRlT3V0VXAsIGZhZGVPdXREb3duLCBmYWRlT3V0TGVmdCwgZmFkZU91dFJpZ2h0LCBmbGlwT3V0WFxyXG5cdFx0dHJhbnNpdGlvbkluTW9iaWxlOiAnZmFkZUluVXAnLFxyXG5cdFx0dHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXREb3duJyxcclxuXHRcdG9uT3BlbjogZnVuY3Rpb24gKCkge30sXHJcblx0XHRvbkNsb3NlOiBmdW5jdGlvbiAoKSB7fVxyXG5cdH07XHJcblxyXG5cdC8vXHJcblx0Ly8gTWV0aG9kc1xyXG5cdC8vXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQb2x5ZmlsbCBmb3IgcmVtb3ZlKCkgbWV0aG9kXHJcblx0ICovXHJcblx0aWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XHJcblx0ICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG5cdCAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgc2ltcGxlIGZvckVhY2goKSBpbXBsZW1lbnRhdGlvbiBmb3IgQXJyYXlzLCBPYmplY3RzIGFuZCBOb2RlTGlzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBjb2xsZWN0aW9uIENvbGxlY3Rpb24gb2YgaXRlbXMgdG8gaXRlcmF0ZVxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZXJhdGlvblxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBzY29wZSBPYmplY3QvTm9kZUxpc3QvQXJyYXkgdGhhdCBmb3JFYWNoIGlzIGl0ZXJhdGluZyBvdmVyIChha2EgYHRoaXNgKVxyXG5cdCAqL1xyXG5cdHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBzY29wZSkge1xyXG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb2xsZWN0aW9uKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuXHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBjb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb2xsZWN0aW9uLCBwcm9wKSkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltwcm9wXSwgcHJvcCwgY29sbGVjdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihjb2xsZWN0aW9uKXtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogTWVyZ2UgZGVmYXVsdHMgd2l0aCB1c2VyIG9wdGlvbnNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBEZWZhdWx0IHNldHRpbmdzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBvcHRpb25zXHJcblx0ICogQHJldHVybnMge09iamVjdH0gTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xyXG5cdCAqL1xyXG5cdHZhciBleHRlbmQgPSBmdW5jdGlvbiAoZGVmYXVsdHMsIG9wdGlvbnMpIHtcclxuXHRcdHZhciBleHRlbmRlZCA9IHt9O1xyXG5cdFx0Zm9yRWFjaChkZWZhdWx0cywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gZGVmYXVsdHNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdGZvckVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGV4dGVuZGVkO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBmcmFnbWVudCBET00gZWxlbWVudHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBjcmVhdGVGcmFnRWxlbSA9IGZ1bmN0aW9uKGh0bWxTdHIpIHtcclxuXHRcdHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0XHR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0ZW1wLmlubmVySFRNTCA9IGh0bWxTdHI7XHJcblx0XHR3aGlsZSAodGVtcC5maXJzdENoaWxkKSB7XHJcblx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodGVtcC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmcmFnO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiBpcyBhIGNvbG9yXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgaXNDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKXtcclxuXHRcdGlmKCBjb2xvci5zdWJzdHJpbmcoMCwxKSA9PSBcIiNcIiB8fCBjb2xvci5zdWJzdHJpbmcoMCwzKSA9PSBcInJnYlwiIHx8IGNvbG9yLnN1YnN0cmluZygwLDMpID09IFwiaHNsXCIgKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERyYWcgbWV0aG9kIG9mIHRvYXN0c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGRyYWcgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgXHJcblx0ICAgIHJldHVybiB7XHJcblx0ICAgICAgICBtb3ZlOiBmdW5jdGlvbih0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCB4cG9zKSB7XHJcblxyXG5cdCAgICAgICAgXHR2YXIgb3BhY2l0eSxcclxuXHQgICAgICAgIFx0XHRvcGFjaXR5UmFuZ2UgPSAwLjMsXHJcblx0ICAgICAgICBcdFx0ZGlzdGFuY2UgPSAxODA7XHJcblx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyt4cG9zICsgJ3B4KSc7XHJcblxyXG5cdCAgICAgICAgICAgIGlmKHhwb3MgPiAwKXtcclxuXHQgICAgICAgICAgICBcdG9wYWNpdHkgPSAoZGlzdGFuY2UteHBvcykgLyBkaXN0YW5jZTtcclxuXHQgICAgICAgICAgICBcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5oaWRlKGV4dGVuZChzZXR0aW5ncywgeyB0cmFuc2l0aW9uT3V0OiAnZmFkZU91dFJpZ2h0JywgdHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXRSaWdodCcgfSksIHRvYXN0LCAnZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgXHRvcGFjaXR5ID0gKGRpc3RhbmNlK3hwb3MpIC8gZGlzdGFuY2U7XHJcblx0ICAgICAgICAgICAgXHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UuaGlkZShleHRlbmQoc2V0dGluZ3MsIHsgdHJhbnNpdGlvbk91dDogJ2ZhZGVPdXRMZWZ0JywgdHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXRMZWZ0JyB9KSwgdG9hc3QsICdkcmFnJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cdFx0XHJcblx0XHRcdFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblxyXG5cdFx0XHRcdFx0aWYoSVNDSFJPTUUgfHwgSVNGSVJFRk9YKVxyXG5cdFx0XHRcdFx0XHR0b2FzdC5zdHlsZS5sZWZ0ID0geHBvcysncHgnO1xyXG5cclxuXHRcdFx0XHRcdHRvYXN0LnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlSYW5nZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3RvcE1vdmluZyh0b2FzdCwgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHN0YXJ0TW92aW5nOiBmdW5jdGlvbih0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBlKSB7XHJcblxyXG5cdCAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICB2YXIgcG9zWCA9ICgoQUNDRVBUU1RPVUNIKSA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYKSxcclxuXHQgICAgICAgICAgICAgICAgdG9hc3RMZWZ0ID0gdG9hc3Quc3R5bGUudHJhbnNmb3JtLnJlcGxhY2UoJ3B4KScsICcnKTtcclxuXHQgICAgICAgICAgICAgICAgdG9hc3RMZWZ0ID0gdG9hc3RMZWZ0LnJlcGxhY2UoJ3RyYW5zbGF0ZVgoJywgJycpO1xyXG5cdCAgICAgICAgICAgIHZhciBvZmZzZXRYID0gcG9zWCAtIHRvYXN0TGVmdDtcclxuXHJcblx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKTtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBwb3NYID0gZS50b3VjaGVzWzBdLmNsaWVudFgsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxYID0gcG9zWCAtIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWcubW92ZSh0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBmaW5hbFgpO1xyXG5cdCAgICAgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHBvc1ggPSBlLmNsaWVudFgsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxYID0gcG9zWCAtIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWcubW92ZSh0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBmaW5hbFgpO1xyXG5cdCAgICAgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgc3RvcE1vdmluZzogZnVuY3Rpb24odG9hc3QsIGUpIHtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7fTtcclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuNHMgZWFzZSwgb3BhY2l0eSAwLjRzIGVhc2VcIjtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcblx0XHRcdFx0fSwgNDAwKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0fSgpO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRG8gdGhlIGNhbGN1bGF0aW9uIHRvIG1vdmUgdGhlIHByb2dyZXNzIGJhclxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIG1vdmVQcm9ncmVzcyA9IGZ1bmN0aW9uKHRvYXN0LCBzZXR0aW5ncywgY2FsbGJhY2spe1xyXG5cclxuXHRcdHZhciBpc1BhdXNlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlzUmVzZXRlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlzQ2xvc2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdGltZXJUaW1lb3V0ID0gbnVsbDtcclxuXHRcdHZhciBlbGVtID0gdG9hc3QucXVlcnlTZWxlY3RvcihcIi5cIitQTFVHSU5fTkFNRStcIi1wcm9ncmVzc2JhciBkaXZcIik7XHJcblx0XHR2YXIgcHJvZ3Jlc3NCYXIgPSB7XHJcblx0XHRcdGhpZGVFdGE6IG51bGwsXHJcblx0XHRcdG1heEhpZGVUaW1lOiBudWxsLFxyXG5cdFx0XHRjdXJyZW50VGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbigpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpc1BhdXNlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLXBhdXNlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdGlzUmVzZXRlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRpc0Nsb3NlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLWNsb3NlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRpZihpc1Jlc2V0ZWQpe1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0XHRcdFx0bW92ZVByb2dyZXNzKHRvYXN0LCBzZXR0aW5ncywgY2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoaXNDbG9zZWQpe1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctY2xvc2VkJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZighaXNQYXVzZWQgJiYgIWlzUmVzZXRlZCAmJiAhaXNDbG9zZWQpe1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUgPSBwcm9ncmVzc0Jhci5jdXJyZW50VGltZSsxMDtcclxuXHRcdFx0XHRcdHZhciBwZXJjZW50YWdlID0gKChwcm9ncmVzc0Jhci5oaWRlRXRhIC0gKHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lKSkgLyBwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSkgKiAxMDA7XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gcGVyY2VudGFnZSArICclJztcclxuXHJcblx0XHRcdFx0XHRpZihNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpIDwgMCB8fCB0eXBlb2YgdG9hc3QgIT0gJ29iamVjdCcpe1xyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0aWYgKHNldHRpbmdzLnRpbWVvdXQgPiAwKSB7XHJcblx0XHRcdHByb2dyZXNzQmFyLm1heEhpZGVUaW1lID0gcGFyc2VGbG9hdChzZXR0aW5ncy50aW1lb3V0KTtcclxuXHRcdFx0cHJvZ3Jlc3NCYXIuaGlkZUV0YSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWU7XHJcblx0XHRcdHRpbWVyVGltZW91dCA9IHNldEludGVydmFsKHByb2dyZXNzQmFyLnVwZGF0ZVByb2dyZXNzLCAxMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveSB0aGUgY3VycmVudCBpbml0aWFsaXphdGlvbi5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Zm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJytQTFVHSU5fTkFNRSsnLXdyYXBwZXInKSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrUExVR0lOX05BTUUpLCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xyXG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihQTFVHSU5fTkFNRSsnLW9wZW4nLCB7fSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihQTFVHSU5fTkFNRSsnLWNsb3NlJywge30sIGZhbHNlKTtcclxuXHJcblx0XHQvLyBSZXNldCB2YXJpYWJsZXNcclxuXHRcdENPTkZJRyA9IHt9O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgUGx1Z2luXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHQkaXppVG9hc3Quc2V0dGluZ3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdC8vIERlc3Ryb3kgYW55IGV4aXN0aW5nIGluaXRpYWxpemF0aW9uc1xyXG5cdFx0JGl6aVRvYXN0LmRlc3Ryb3koKTtcclxuXHJcblx0XHRDT05GSUcgPSBvcHRpb25zO1xyXG5cdFx0ZGVmYXVsdHMgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsZGluZyB0aGVtZXMgZnVuY3Rpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0Zm9yRWFjaChUSEVNRVMsIGZ1bmN0aW9uICh0aGVtZSwgbmFtZSkge1xyXG5cclxuXHRcdCRpemlUb2FzdFtuYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoQ09ORklHLCBvcHRpb25zIHx8IHt9KTtcclxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQodGhlbWUsIHNldHRpbmdzIHx8IHt9KTtcclxuXHJcblx0XHRcdHRoaXMuc2hvdyhzZXR0aW5ncyk7XHJcblx0XHR9O1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb3NlIHRoZSBzcGVjaWZpYyBUb2FzdFxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LmhpZGUgPSBmdW5jdGlvbiAob3B0aW9ucywgJHRvYXN0LCBjbG9zZWRCeSkge1xyXG5cclxuXHRcdHZhciBzZXR0aW5ncyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdGNsb3NlZEJ5ID0gY2xvc2VkQnkgfHwgZmFsc2U7XHJcblxyXG5cdFx0aWYodHlwZW9mICR0b2FzdCAhPSAnb2JqZWN0Jyl7XHJcblx0XHRcdCR0b2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJHRvYXN0KTtcclxuXHRcdH1cclxuXHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctY2xvc2VkJyk7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluIHx8IHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbik7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uT3V0TW9iaWxlKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25PdXRNb2JpbGUpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uT3V0KVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25PdXQpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIEggPSAkdG9hc3QucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gSCsncHgnO1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHJcblx0XHRpZighSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPiBNT0JJTEVXSURUSCl7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcwLjJzJztcclxuXHRcdH1cclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuXHRcdFx0fSwxMDAwKTtcclxuXHRcdH0sMjAwKTtcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY2xhc3Mpe1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBldmVudDtcclxuXHRcdFx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLWNsb3NlJywge2RldGFpbDoge2NsYXNzOiBzZXR0aW5ncy5jbGFzc319KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdFx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLWNsb3NlJywgdHJ1ZSwgdHJ1ZSwge2NsYXNzOiBzZXR0aW5ncy5jbGFzc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdFx0fSBjYXRjaChleCl7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKGV4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHR5cGVvZiBzZXR0aW5ncy5vbkNsb3NlICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0c2V0dGluZ3Mub25DbG9zZS5hcHBseShudWxsLCBbc2V0dGluZ3MsICR0b2FzdCwgY2xvc2VkQnldKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYW5kIHNob3cgdGhlIFRvYXN0XHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHQkaXppVG9hc3Quc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIE1lcmdlIHVzZXIgb3B0aW9ucyB3aXRoIGRlZmF1bHRzXHJcblx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoQ09ORklHLCBvcHRpb25zIHx8IHt9KTtcclxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcblx0XHR2YXIgJHRvYXN0Q2Fwc3VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCR0b2FzdENhcHN1bGUuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRStcIi1jYXBzdWxlXCIpO1xyXG5cclxuXHRcdHZhciAkdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSk7XHJcblxyXG5cdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUubGVuZ3RoPjApXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25Jbi5sZW5ndGg+MClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1ydGwnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY29sb3IubGVuZ3RoID4gMCkgeyAvLyMsIHJnYiwgcmdiYSwgaHNsXHJcblx0XHRcdFxyXG5cdFx0XHRpZiggaXNDb2xvcihzZXR0aW5ncy5jb2xvcikgKXtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNvbG9yO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctY29sb3ItJytzZXR0aW5ncy5jb2xvcik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkdG9hc3Quc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmJhY2tncm91bmRDb2xvcjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY2xhc3Mpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmltYWdlKSB7XHJcblx0XHRcdHZhciAkY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkY292ZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctY292ZXInKTtcclxuXHRcdFx0JGNvdmVyLnN0eWxlLndpZHRoID0gc2V0dGluZ3MuaW1hZ2VXaWR0aCArIFwicHhcIjtcclxuXHRcdFx0JGNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHNldHRpbmdzLmltYWdlICsgJyknO1xyXG5cdFx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJGNvdmVyKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJGJ1dHRvbkNsb3NlO1xyXG5cdFx0aWYoc2V0dGluZ3MuY2xvc2Upe1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctY2xvc2UnKTtcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRidXR0b25DbG9zZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMzBweFwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjMwcHhcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5wcm9ncmVzc0Jhcikge1xyXG5cclxuXHRcdFx0dmFyICRwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHByb2dyZXNzQmFyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXByb2dyZXNzYmFyJyk7XHJcblxyXG5cdFx0XHR2YXIgJHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHQkcHJvZ3Jlc3NCYXJEaXYuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLnByb2dyZXNzQmFyQ29sb3I7XHJcblxyXG5cdFx0XHQkcHJvZ3Jlc3NCYXIuYXBwZW5kQ2hpbGQoJHByb2dyZXNzQmFyRGl2KTtcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRwcm9ncmVzc0Jhcik7XHJcblx0XHRcdFxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG1vdmVQcm9ncmVzcygkdG9hc3QsIHNldHRpbmdzLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0dGhhdC5oaWRlKHNldHRpbmdzLCAkdG9hc3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LDMwMCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCBzZXR0aW5ncy5wcm9ncmVzc0JhciA9PT0gZmFsc2UgJiYgc2V0dGluZ3MudGltZW91dCA+IDApe1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0KTtcclxuXHRcdFx0fSwgc2V0dGluZ3MudGltZW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICR0b2FzdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3RCb2R5LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWJvZHknKTtcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuaW1hZ2UpIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gKHNldHRpbmdzLmltYWdlV2lkdGggKyAxMCkgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUubWFyZ2luTGVmdCA9IChzZXR0aW5ncy5pbWFnZVdpZHRoICsgMTApICsgJ3B4JztcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmljb24pIHtcclxuXHRcdFx0dmFyICRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblx0XHRcdFx0JGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgUExVR0lOX05BTUUgKyAnLWljb24gJyArIHNldHRpbmdzLmljb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb25UZXh0KXtcclxuXHRcdFx0XHQkaWNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZXR0aW5ncy5pY29uVGV4dCkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzMzcHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUucGFkZGluZ0xlZnQgPSAnMzNweCc7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb25Db2xvcil7XHJcblx0XHRcdFx0JGljb24uc3R5bGUuY29sb3IgPSBzZXR0aW5ncy5pY29uQ29sb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkaWNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xyXG5cdFx0aWYgKHNldHRpbmdzLnRpdGxlQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkc3Ryb25nLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MudGl0bGVDb2xvcjtcclxuXHRcdH1cclxuXHRcdCRzdHJvbmcuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhZ0VsZW0oc2V0dGluZ3MudGl0bGUpKTtcclxuXHJcblx0XHR2YXIgJHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdGlmIChzZXR0aW5ncy5tZXNzYWdlQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkcC5zdHlsZS5jb2xvciA9IHNldHRpbmdzLm1lc3NhZ2VDb2xvcjtcclxuXHRcdH1cclxuXHRcdCRwLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHNldHRpbmdzLm1lc3NhZ2UpKTtcclxuXHJcblx0XHRpZihzZXR0aW5ncy5sYXlvdXQgPiAxKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItbGF5b3V0XCIrc2V0dGluZ3MubGF5b3V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5iYWxsb29uKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItYmFsbG9vblwiKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRzdHJvbmcpO1xyXG5cdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkcCk7XHJcblxyXG5cdFx0dmFyICRidXR0b25zO1xyXG5cdFx0aWYgKHNldHRpbmdzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0JGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1idXR0b25zJyk7XHJcblxyXG5cdFx0XHQkcC5zdHlsZS5tYXJnaW5SaWdodCA9ICcxNXB4JztcclxuXHJcblx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0Zm9yRWFjaChzZXR0aW5ncy5idXR0b25zLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XHJcblx0XHRcdFx0JGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhZ0VsZW0odmFsdWVbMF0pKTtcclxuXHJcblx0XHRcdFx0dmFyICRidG5zID0gJGJ1dHRvbnMuY2hpbGROb2RlcztcclxuXHJcblx0XHRcdFx0JGJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0dmFyIHRzID0gdmFsdWVbMV07XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRzKHRoYXQsICR0b2FzdCk7IFxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRidXR0b25zKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJHRvYXN0Qm9keSk7XHJcblx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHRcdCR0b2FzdENhcHN1bGUuYXBwZW5kQ2hpbGQoJHRvYXN0KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgSCA9ICR0b2FzdC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdHZhciBzdHlsZSA9ICR0b2FzdC5jdXJyZW50U3R5bGUgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRvYXN0KTtcclxuXHRcdFx0dmFyIG1hcmdpblRvcCA9IHN0eWxlLm1hcmdpblRvcDtcclxuXHRcdFx0XHRtYXJnaW5Ub3AgPSBtYXJnaW5Ub3Auc3BsaXQoXCJweFwiKTtcclxuXHRcdFx0XHRtYXJnaW5Ub3AgPSBwYXJzZUludChtYXJnaW5Ub3BbMF0pO1xyXG5cdFx0XHR2YXIgbWFyZ2luQm90dG9tID0gc3R5bGUubWFyZ2luQm90dG9tO1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbS5zcGxpdChcInB4XCIpO1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KG1hcmdpbkJvdHRvbVswXSk7XHJcblxyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5oZWlnaHQgPSAoSCttYXJnaW5Cb3R0b20rbWFyZ2luVG9wKSsncHgnO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdGlmKHNldHRpbmdzLnRhcmdldCl7XHJcblx0XHRcdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwxMDAwKTtcclxuXHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0dmFyIHBvc2l0aW9uID0gc2V0dGluZ3MucG9zaXRpb24sXHJcblx0XHRcdCR3cmFwcGVyO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLnRhcmdldCl7XHJcblxyXG5cdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MudGFyZ2V0KTtcclxuXHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctdGFyZ2V0Jyk7XHJcblxyXG5cdFx0XHRpZiAoc2V0dGluZ3MudGFyZ2V0Rmlyc3QpIHtcclxuXHRcdFx0XHQkd3JhcHBlci5pbnNlcnRCZWZvcmUoJHRvYXN0Q2Fwc3VsZSwgJHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuYXBwZW5kQ2hpbGQoJHRvYXN0Q2Fwc3VsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0aWYoIFBPU0lUSU9OUy5pbmRleE9mKHNldHRpbmdzLnBvc2l0aW9uKSA9PSAtMSApe1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltcIitQTFVHSU5fTkFNRStcIl0gSW5jb3JyZWN0IHBvc2l0aW9uLlxcbkl0IGNhbiBiZSDigLogXCIgKyBQT1NJVElPTlMpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRcdGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwiYm90dG9tTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwiYm90dG9tUmlnaHRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbUNlbnRlclwiKXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLWJvdHRvbUNlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BMZWZ0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BSaWdodFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wQ2VudGVyXCIpe1xyXG5cdFx0XHRcdFx0cG9zaXRpb24gPSBQTFVHSU5fTkFNRSsnLXdyYXBwZXItdG9wQ2VudGVyJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLWNlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLScrcG9zaXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIFBMVUdJTl9OQU1FICsgJy13cmFwcGVyLicrcG9zaXRpb24pO1xyXG5cclxuXHRcdFx0aWYgKCEkd3JhcHBlcikge1xyXG5cdFx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHQkd3JhcHBlci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy13cmFwcGVyJyk7XHJcblx0XHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChwb3NpdGlvbik7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkd3JhcHBlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BMZWZ0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BDZW50ZXJcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcFJpZ2h0XCIpe1xyXG5cdFx0XHRcdCR3cmFwcGVyLmluc2VydEJlZm9yZSgkdG9hc3RDYXBzdWxlLCAkd3JhcHBlci5maXJzdENoaWxkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkd3JhcHBlci5hcHBlbmRDaGlsZCgkdG9hc3RDYXBzdWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaXNOYU4oc2V0dGluZ3MuemluZGV4KSkge1xyXG5cdFx0XHQkd3JhcHBlci5zdHlsZS56SW5kZXggPSBzZXR0aW5ncy56aW5kZXg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJbXCIrUExVR0lOX05BTUUrXCJdIEludmFsaWQgekluZGV4LlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5ncy5vbk9wZW4uYXBwbHkobnVsbCwgW3NldHRpbmdzLCAkdG9hc3RdKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHR2YXIgZXZlbnQ7XHJcblx0XHRcdGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcclxuXHRcdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLW9wZW4nLCB7ZGV0YWlsOiB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfX0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRcdFx0ZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFBMVUdJTl9OQU1FKyctb3BlbicsIHRydWUsIHRydWUsIHtjbGFzczogc2V0dGluZ3MuY2xhc3N9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH0gY2F0Y2goZXgpe1xyXG5cdFx0XHRjb25zb2xlLndhcm4oZXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmFuaW1hdGVJbnNpZGUpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWFuaW1hdGVJbnNpZGUnKTtcclxuXHRcdFxyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjEgPSAyMDA7XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMiA9IDEwMDtcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24zID0gMzAwO1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4gPT0gXCJib3VuY2VJbkxlZnRcIil7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjEgPSA0MDA7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjIgPSAyMDA7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjMgPSA0MDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHN0cm9uZy5jbGFzc0xpc3QuYWRkKCdzbGlkZUluJyk7XHJcblx0XHRcdH0sdGltZUFuaW1hdGlvbjEpO1xyXG5cclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkcC5jbGFzc0xpc3QuYWRkKCdzbGlkZUluJyk7XHJcblx0XHRcdH0sdGltZUFuaW1hdGlvbjIpO1xyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb24pIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0JGljb24uY2xhc3NMaXN0LmFkZCgncmV2ZWFsSW4nKTtcclxuXHRcdFx0XHR9LHRpbWVBbmltYXRpb24zKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLmJ1dHRvbnMubGVuZ3RoID4gMCAmJiAkYnV0dG9ucykge1xyXG5cdFx0XHRcdHZhciBjb3VudGVyID0gMTUwO1xyXG5cdFx0XHRcdGZvckVhY2goJGJ1dHRvbnMuY2hpbGROb2RlcywgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JldmVhbEluJyk7XHJcblx0XHRcdFx0XHR9LGNvdW50ZXIpO1xyXG5cdFx0XHRcdFx0Y291bnRlciA9IGNvdW50ZXIgKyBjb3VudGVyO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKCRidXR0b25DbG9zZSl7XHJcblx0XHRcdCRidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0LCAnYnV0dG9uJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnBhdXNlT25Ib3Zlcil7XHJcblx0XHRcdFxyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctcGF1c2VkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctcGF1c2VkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnJlc2V0T25Ib3Zlcil7XHJcblxyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctcmVzZXRlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuZHJhZyl7XHJcblxyXG5cdFx0XHRpZiAoQUNDRVBUU1RPVUNIKSB7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdGFydE1vdmluZyh0aGlzLCB0aGF0LCBzZXR0aW5ncywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RvcE1vdmluZyh0aGlzLCBlKTtcclxuXHRcdFx0ICAgIH0sIGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdCAgICAkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdGFydE1vdmluZyh0aGlzLCB0aGF0LCBzZXR0aW5ncywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICBcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0b3BNb3ZpbmcodGhpcywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAkaXppVG9hc3Q7XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDI0LjA0LjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGl0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG51bGwsXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ibG9jayA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGhpdE1ldGhvZCwgaGl0VGFyZ2V0LCBibG9ja01ldGhvZCkge1xyXG4gICAgICAgIHRoaXMuaGl0Lm1ldGhvZCA9IGhpdE1ldGhvZDtcclxuICAgICAgICB0aGlzLmhpdC50YXJnZXQgPSBoaXRUYXJnZXQ7XHJcbiAgICAgICAgdGhpcy5ibG9jay5tZXRob2QgPSBibG9ja01ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja09uRW1wdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGl0Lm1ldGhvZCAhPT0gbnVsbCAmJiB0aGlzLmhpdC50YXJnZXQgIT09IG51bGxcclxuICAgICAgICAgICAgJiYgdGhpcy5ibG9jay5tZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2dhbWUvb2JqZWN0L1N0ZXBPYmplY3QuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCcgJyArIGNsYXNzTmFtZSArICcgJykudGVzdCgnICcgKyBlbGVtLmNsYXNzTmFtZSArICcgJyk7XG59O1xuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgdmFyIG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSgvW1xcdFxcclxcbl0vZywgJyAnKSArICcgJztcbiAgaWYgKGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkpIHtcbiAgICB3aGlsZSAobmV3Q2xhc3MuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID49IDApIHtcbiAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJyk7XG4gICAgfVxuICAgIGVsZW0uY2xhc3NOYW1lID0gbmV3Q2xhc3MucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB9XG59O1xuXG52YXIgZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cikpO1xuICByZXR1cm4gZGl2LmlubmVySFRNTDtcbn07XG5cbnZhciBfc2hvdyA9IGZ1bmN0aW9uIF9zaG93KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbXMpIHtcbiAgaWYgKGVsZW1zICYmICFlbGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gX3Nob3coZWxlbXMpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBfc2hvdyhlbGVtc1tpXSk7XG4gIH1cbn07XG5cbnZhciBfaGlkZSA9IGZ1bmN0aW9uIF9oaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtcykge1xuICBpZiAoZWxlbXMgJiYgIWVsZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBfaGlkZShlbGVtcyk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7ICsraSkge1xuICAgIF9oaWRlKGVsZW1zW2ldKTtcbiAgfVxufTtcblxudmFyIGlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZ2V0VG9wTWFyZ2luID0gZnVuY3Rpb24gZ2V0VG9wTWFyZ2luKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHZhciBoZWlnaHQgPSBlbGVtLmNsaWVudEhlaWdodCxcbiAgICAgIHBhZGRpbmc7XG4gIGlmICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBJRSA4XG4gICAgcGFkZGluZyA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxlbSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHBhZGRpbmcgPSBwYXJzZUludChlbGVtLmN1cnJlbnRTdHlsZS5wYWRkaW5nKTtcbiAgfVxuXG4gIGVsZW0uc3R5bGUubGVmdCA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJldHVybiAnLScgKyBwYXJzZUludCgoaGVpZ2h0ICsgcGFkZGluZykgLyAyKSArICdweCc7XG59O1xuXG52YXIgZmFkZUluID0gZnVuY3Rpb24gZmFkZUluKGVsZW0sIGludGVydmFsKSB7XG4gIGlmICgrZWxlbS5zdHlsZS5vcGFjaXR5IDwgMSkge1xuICAgIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTY7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHZhciBsYXN0ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIHRpY2sgPSAoZnVuY3Rpb24gKF90aWNrKSB7XG4gICAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgICByZXR1cm4gX3RpY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdGljay50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aWNrLnRvU3RyaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGljaztcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSArZWxlbS5zdHlsZS5vcGFjaXR5ICsgKG5ldyBEYXRlKCkgLSBsYXN0KSAvIDEwMDtcbiAgICAgIGxhc3QgPSArbmV3IERhdGUoKTtcblxuICAgICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPCAxKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGljaywgaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRpY2soKTtcbiAgfVxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvL2ZhbGxiYWNrIElFOFxufTtcblxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiBmYWRlT3V0KGVsZW0sIGludGVydmFsKSB7XG4gIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTY7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gIHZhciBsYXN0ID0gK25ldyBEYXRlKCk7XG4gIHZhciB0aWNrID0gKGZ1bmN0aW9uIChfdGljazIpIHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgcmV0dXJuIF90aWNrMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHRpY2sudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RpY2syLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aWNrO1xuICB9KShmdW5jdGlvbiAoKSB7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gK2VsZW0uc3R5bGUub3BhY2l0eSAtIChuZXcgRGF0ZSgpIC0gbGFzdCkgLyAxMDA7XG4gICAgbGFzdCA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KHRpY2ssIGludGVydmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG4gIHRpY2soKTtcbn07XG5cbnZhciBmaXJlQ2xpY2sgPSBmdW5jdGlvbiBmaXJlQ2xpY2sobm9kZSkge1xuICAvLyBUYWtlbiBmcm9tIGh0dHA6Ly93d3cubm9ub2J0cnVzaXZlLmNvbS8yMDExLzExLzI5L3Byb2dyYW1hdGljYWxseS1maXJlLWNyb3NzYnJvd3Nlci1jbGljay1ldmVudC13aXRoLWphdmFzY3JpcHQvXG4gIC8vIFRoZW4gZml4ZWQgZm9yIHRvZGF5J3MgQ2hyb21lIGJyb3dzZXIuXG4gIGlmICh0eXBlb2YgTW91c2VFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVwLXRvLWRhdGUgYXBwcm9hY2hcbiAgICB2YXIgbWV2dCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChtZXZ0KTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgIC8vIEZhbGxiYWNrXG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgIGV2dC5pbml0RXZlbnQoJ2NsaWNrJywgZmFsc2UsIGZhbHNlKTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCkge1xuICAgIG5vZGUuZmlyZUV2ZW50KCdvbmNsaWNrJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUub25jbGljaygpO1xuICB9XG59O1xuXG52YXIgc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wRXZlbnRQcm9wYWdhdGlvbihlKSB7XG4gIC8vIEluIHBhcnRpY3VsYXIsIG1ha2Ugc3VyZSB0aGUgc3BhY2UgYmFyIGRvZXNuJ3Qgc2Nyb2xsIHRoZSBtYWluIHdpbmRvdy5cbiAgaWYgKHR5cGVvZiBlLnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCAmJiB3aW5kb3cuZXZlbnQuaGFzT3duUHJvcGVydHkoJ2NhbmNlbEJ1YmJsZScpKSB7XG4gICAgd2luZG93LmV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydHMuaGFzQ2xhc3MgPSBoYXNDbGFzcztcbmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRDbGFzcztcbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzcztcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLl9zaG93ID0gX3Nob3c7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5faGlkZSA9IF9oaWRlO1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuaXNEZXNjZW5kYW50ID0gaXNEZXNjZW5kYW50O1xuZXhwb3J0cy5nZXRUb3BNYXJnaW4gPSBnZXRUb3BNYXJnaW47XG5leHBvcnRzLmZhZGVJbiA9IGZhZGVJbjtcbmV4cG9ydHMuZmFkZU91dCA9IGZhZGVPdXQ7XG5leHBvcnRzLmZpcmVDbGljayA9IGZpcmVDbGljaztcbmV4cG9ydHMuc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBzdG9wRXZlbnRQcm9wYWdhdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDcuMDMuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgJy4vbG9hZGVyLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JzQtdGC0L7QtCDQstC+0LfQstGA0LDRidCw0LXRgiDRjdC70LXQvNC10L3RgiDRgSDQsNCx0YHQvtC70Y7RgtC90L7QuSDQv9C+0LfQuNGG0LjQtdC5XHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fCp9XHJcbiAgICAgKi9cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvYWRlcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXRgtC+0LQg0LLQvtC30LLRgNCw0YnQsNC10YIg0Y3Qu9C10LzQtdC90YIg0YEg0L/QvtC30LjRhtC40LXQuSDQvtGCINGA0L7QtNC40YLQtdC70Y9cclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR8Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbVBhcmVudCgpIHtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyX3BhcmVudCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL2xvYWRlci9sb2FkZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaGV4VG9SZ2IgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzID0gcmVxdWlyZSgnLi9oYW5kbGUtZG9tJyk7XG5cbnZhciBfZGVmYXVsdFBhcmFtcyA9IHJlcXVpcmUoJy4vZGVmYXVsdC1wYXJhbXMnKTtcblxudmFyIF9kZWZhdWx0UGFyYW1zMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kZWZhdWx0UGFyYW1zKTtcblxuLypcbiAqIEFkZCBtb2RhbCArIG92ZXJsYXkgdG8gRE9NXG4gKi9cblxudmFyIF9pbmplY3RlZEhUTUwgPSByZXF1aXJlKCcuL2luamVjdGVkLWh0bWwnKTtcblxudmFyIF9pbmplY3RlZEhUTUwyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2luamVjdGVkSFRNTCk7XG5cbnZhciBtb2RhbENsYXNzID0gJy5zd2VldC1hbGVydCc7XG52YXIgb3ZlcmxheUNsYXNzID0gJy5zd2VldC1vdmVybGF5JztcblxudmFyIHN3ZWV0QWxlcnRJbml0aWFsaXplID0gZnVuY3Rpb24gc3dlZXRBbGVydEluaXRpYWxpemUoKSB7XG4gIHZhciBzd2VldFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3dlZXRXcmFwLmlubmVySFRNTCA9IF9pbmplY3RlZEhUTUwyWydkZWZhdWx0J107XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGJvZHlcbiAgd2hpbGUgKHN3ZWV0V3JhcC5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzd2VldFdyYXAuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8qXG4gKiBHZXQgRE9NIGVsZW1lbnQgb2YgbW9kYWxcbiAqL1xudmFyIGdldE1vZGFsID0gKGZ1bmN0aW9uIChfZ2V0TW9kYWwpIHtcbiAgZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XG4gICAgcmV0dXJuIF9nZXRNb2RhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZ2V0TW9kYWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRNb2RhbC50b1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBnZXRNb2RhbDtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyICRtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcyk7XG5cbiAgaWYgKCEkbW9kYWwpIHtcbiAgICBzd2VldEFsZXJ0SW5pdGlhbGl6ZSgpO1xuICAgICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIH1cblxuICByZXR1cm4gJG1vZGFsO1xufSk7XG5cbi8qXG4gKiBHZXQgRE9NIGVsZW1lbnQgb2YgaW5wdXQgKGluIG1vZGFsKVxuICovXG52YXIgZ2V0SW5wdXQgPSBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIGlmICgkbW9kYWwpIHtcbiAgICByZXR1cm4gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIH1cbn07XG5cbi8qXG4gKiBHZXQgRE9NIGVsZW1lbnQgb2Ygb3ZlcmxheVxuICovXG52YXIgZ2V0T3ZlcmxheSA9IGZ1bmN0aW9uIGdldE92ZXJsYXkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJsYXlDbGFzcyk7XG59O1xuXG4vKlxuICogQWRkIGJveC1zaGFkb3cgc3R5bGUgdG8gYnV0dG9uIChkZXBlbmRpbmcgb24gaXRzIGNob3NlbiBiZy1jb2xvcilcbiAqL1xudmFyIHNldEZvY3VzU3R5bGUgPSBmdW5jdGlvbiBzZXRGb2N1c1N0eWxlKCRidXR0b24sIGJnQ29sb3IpIHtcbiAgdmFyIHJnYkNvbG9yID0gX2hleFRvUmdiLmhleFRvUmdiKGJnQ29sb3IpO1xuICAkYnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4IHJnYmEoJyArIHJnYkNvbG9yICsgJywgMC44KSwgaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSknO1xufTtcblxuLypcbiAqIEFuaW1hdGlvbiB3aGVuIG9wZW5pbmcgbW9kYWxcbiAqL1xudmFyIG9wZW5Nb2RhbCA9IGZ1bmN0aW9uIG9wZW5Nb2RhbChjYWxsYmFjaykge1xuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcy5mYWRlSW4oZ2V0T3ZlcmxheSgpLCAxMCk7XG4gIF9yZW1vdmVDbGFzcyRnZXRUb3BNYXJnaW4kZmFkZUluJHNob3ckYWRkQ2xhc3Muc2hvdygkbW9kYWwpO1xuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLmFkZENsYXNzKCRtb2RhbCwgJ3Nob3dTd2VldEFsZXJ0Jyk7XG4gIF9yZW1vdmVDbGFzcyRnZXRUb3BNYXJnaW4kZmFkZUluJHNob3ckYWRkQ2xhc3MucmVtb3ZlQ2xhc3MoJG1vZGFsLCAnaGlkZVN3ZWV0QWxlcnQnKTtcblxuICB3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgdmFyICRva0J1dHRvbiA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICAkb2tCdXR0b24uZm9jdXMoKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLmFkZENsYXNzKCRtb2RhbCwgJ3Zpc2libGUnKTtcbiAgfSwgNTAwKTtcblxuICB2YXIgdGltZXIgPSAkbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbWVyJyk7XG5cbiAgaWYgKHRpbWVyICE9PSAnbnVsbCcgJiYgdGltZXIgIT09ICcnKSB7XG4gICAgdmFyIHRpbWVyQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAkbW9kYWwudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRvbmVGdW5jdGlvbkV4aXN0cyA9ICh0aW1lckNhbGxiYWNrIHx8IG51bGwpICYmICRtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKGRvbmVGdW5jdGlvbkV4aXN0cykge1xuICAgICAgICB0aW1lckNhbGxiYWNrKG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sIHRpbWVyKTtcbiAgfVxufTtcblxuLypcbiAqIFJlc2V0IHRoZSBzdHlsaW5nIG9mIHRoZSBpbnB1dFxuICogKGZvciBleGFtcGxlIGlmIGVycm9ycyBoYXZlIGJlZW4gc2hvd24pXG4gKi9cbnZhciByZXNldElucHV0ID0gZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciAkaW5wdXQgPSBnZXRJbnB1dCgpO1xuXG4gIF9yZW1vdmVDbGFzcyRnZXRUb3BNYXJnaW4kZmFkZUluJHNob3ckYWRkQ2xhc3MucmVtb3ZlQ2xhc3MoJG1vZGFsLCAnc2hvdy1pbnB1dCcpO1xuICAkaW5wdXQudmFsdWUgPSBfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXS5pbnB1dFZhbHVlO1xuICAkaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10uaW5wdXRUeXBlKTtcbiAgJGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXS5pbnB1dFBsYWNlaG9sZGVyKTtcblxuICByZXNldElucHV0RXJyb3IoKTtcbn07XG5cbnZhciByZXNldElucHV0RXJyb3IgPSBmdW5jdGlvbiByZXNldElucHV0RXJyb3IoZXZlbnQpIHtcbiAgLy8gSWYgcHJlc3MgZW50ZXIgPT4gaWdub3JlXG4gIGlmIChldmVudCAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pbnB1dC1lcnJvcicpO1xuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLnJlbW92ZUNsYXNzKCRlcnJvckljb24sICdzaG93Jyk7XG5cbiAgdmFyICRlcnJvckNvbnRhaW5lciA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtZXJyb3ItY29udGFpbmVyJyk7XG4gIF9yZW1vdmVDbGFzcyRnZXRUb3BNYXJnaW4kZmFkZUluJHNob3ckYWRkQ2xhc3MucmVtb3ZlQ2xhc3MoJGVycm9yQ29udGFpbmVyLCAnc2hvdycpO1xufTtcblxuLypcbiAqIFNldCBcIm1hcmdpbi10b3BcIi1wcm9wZXJ0eSBvbiBtb2RhbCBiYXNlZCBvbiBpdHMgY29tcHV0ZWQgaGVpZ2h0XG4gKi9cbnZhciBmaXhWZXJ0aWNhbFBvc2l0aW9uID0gZnVuY3Rpb24gZml4VmVydGljYWxQb3NpdGlvbigpIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gICRtb2RhbC5zdHlsZS5tYXJnaW5Ub3AgPSBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLmdldFRvcE1hcmdpbihnZXRNb2RhbCgpKTtcbn07XG5cbmV4cG9ydHMuc3dlZXRBbGVydEluaXRpYWxpemUgPSBzd2VldEFsZXJ0SW5pdGlhbGl6ZTtcbmV4cG9ydHMuZ2V0TW9kYWwgPSBnZXRNb2RhbDtcbmV4cG9ydHMuZ2V0T3ZlcmxheSA9IGdldE92ZXJsYXk7XG5leHBvcnRzLmdldElucHV0ID0gZ2V0SW5wdXQ7XG5leHBvcnRzLnNldEZvY3VzU3R5bGUgPSBzZXRGb2N1c1N0eWxlO1xuZXhwb3J0cy5vcGVuTW9kYWwgPSBvcGVuTW9kYWw7XG5leHBvcnRzLnJlc2V0SW5wdXQgPSByZXNldElucHV0O1xuZXhwb3J0cy5yZXNldElucHV0RXJyb3IgPSByZXNldElucHV0RXJyb3I7XG5leHBvcnRzLmZpeFZlcnRpY2FsUG9zaXRpb24gPSBmaXhWZXJ0aWNhbFBvc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1zd2FsLWRvbS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLypcbiAqIEFsbG93IHVzZXIgdG8gcGFzcyB0aGVpciBvd24gcGFyYW1zXG4gKi9cbnZhciBleHRlbmQgPSBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vKlxuICogQ29udmVydCBIRVggY29kZXMgdG8gUkdCIHZhbHVlcyAoIzAwMDAwMCAtPiByZ2IoMCwwLDApKVxuICovXG52YXIgaGV4VG9SZ2IgPSBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8gcGFyc2VJbnQocmVzdWx0WzFdLCAxNikgKyAnLCAnICsgcGFyc2VJbnQocmVzdWx0WzJdLCAxNikgKyAnLCAnICsgcGFyc2VJbnQocmVzdWx0WzNdLCAxNikgOiBudWxsO1xufTtcblxuLypcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHVzaW5nIEludGVybmV0IEV4cGxvcmVyIDggKGZvciBmYWxsYmFja3MpXG4gKi9cbnZhciBpc0lFOCA9IGZ1bmN0aW9uIGlzSUU4KCkge1xuICByZXR1cm4gd2luZG93LmF0dGFjaEV2ZW50ICYmICF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcjtcbn07XG5cbi8qXG4gKiBJRSBjb21wYXRpYmxlIGxvZ2dpbmcgZm9yIGRldmVsb3BlcnNcbiAqL1xudmFyIGxvZ1N0ciA9IGZ1bmN0aW9uIGxvZ1N0cihzdHJpbmcpIHtcbiAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgLy8gSUUuLi5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ1N3ZWV0QWxlcnQ6ICcgKyBzdHJpbmcpO1xuICB9XG59O1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyBcbiAqIChzb3VyY2U6IGh0dHA6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWdlbmVyYXRlLWxpZ2h0ZXItZGFya2VyLWNvbG9yKVxuICovXG52YXIgY29sb3JMdW1pbmFuY2UgPSBmdW5jdGlvbiBjb2xvckx1bWluYW5jZShoZXgsIGx1bSkge1xuICAvLyBWYWxpZGF0ZSBoZXggc3RyaW5nXG4gIGhleCA9IFN0cmluZyhoZXgpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuICBpZiAoaGV4Lmxlbmd0aCA8IDYpIHtcbiAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gIH1cbiAgbHVtID0gbHVtIHx8IDA7XG5cbiAgLy8gQ29udmVydCB0byBkZWNpbWFsIGFuZCBjaGFuZ2UgbHVtaW5vc2l0eVxuICB2YXIgcmdiID0gJyMnO1xuICB2YXIgYztcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGMgPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGMgPSBNYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsIGMgKyBjICogbHVtKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSAoJzAwJyArIGMpLnN1YnN0cihjLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufTtcblxuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmhleFRvUmdiID0gaGV4VG9SZ2I7XG5leHBvcnRzLmlzSUU4ID0gaXNJRTg7XG5leHBvcnRzLmxvZ1N0ciA9IGxvZ1N0cjtcbmV4cG9ydHMuY29sb3JMdW1pbmFuY2UgPSBjb2xvckx1bWluYW5jZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3dlZXRhbGVydC9saWIvbW9kdWxlcy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDUuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChIdHRwLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBIdHRwLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9ICdodHRwczovL3NmLXNlcnZlci5oZXJva3VhcHAuY29tL2FwaSc7XHJcbiAgICAgICAgLy90aGlzLl9iYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknO1xyXG4gICAgICAgIC8vdGhpcy5fYmFzZVVybCA9ICdodHRwczovL3RwLXNlcnZlci1qYXZhLmhlcm9rdWFwcC5jb20vYXBpJztcclxuXHJcbiAgICAgICAgSHR0cC5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJhc2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEJhc2VVcmwodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9iYXNlVXJsID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdChhZGRyZXNzID0gJycsIGhlYWRlcnMgPSB7fSwgdHlwZSA9ICdHRVQnLCBib2R5ID0ge30pIHtcclxuICAgICAgICBsZXQgZmV0Y2hPYmogPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZSxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBmZXRjaE9iai5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmZXRjaChhZGRyZXNzLCBmZXRjaE9iaikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7fSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyciB8fCBlcnIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2h0dHAvSHR0cC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL19fYnV0dG9uL2Zvcm0tYnV0dG9uJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9fX2lucHV0L2Zvcm0taW5wdXQnXHJcblxyXG5pbXBvcnQgJy4vZm9ybS5zY3NzJztcclxuaW1wb3J0ICcuL19faGVscC10ZXh0L2Zvcm1fX2hlbHAtdGV4dC5zY3NzJztcclxuaW1wb3J0ICcuL19fbGluay9mb3JtX19saW5rLnNjc3MnO1xyXG5pbXBvcnQgJy4vX190aXRsZS9mb3JtX190aXRsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHtkYXRhOiB7fX0pIHtcclxuICAgICAgICAvLyBvcHRpb25zIC0g0LjQvdGB0YLRgNGD0LrRhtC40LhcclxuICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuZGF0YS5mb3JtLmF0dHJzLCB0aGlzLmVsKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZGF0YS50aXRsZS50eXBlKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuZGF0YS50aXRsZS5hdHRycywgdGl0bGUpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRoaXMuZGF0YS50aXRsZS50ZXh0O1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5maWVsZHMgPSB0aGlzLl9nZXRGaWVsZHMoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLl9maWVsZHNBcHBlbmRUbyh0aGlzLmZpZWxkcywgdGhpcy5lbCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xzQXBwZW5kVG8odGhpcy5jb250cm9scywgdGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRjdC70LXQvNC10L3RgiBmb3JtXHJcbiAgICAgKiBAcmV0dXJuIHtGb3JtfVxyXG4gICAgICovXHJcbiAgICBnZXRFbGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvNCw0YHRgdC40LIg0L/QvtC70LXQuSDRhNC+0YDQvNGLXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9nZXRGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IHtmaWVsZHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBmaWVsZHMubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElucHV0KGRhdGEpLmdldEVsZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LrQsCDQsNGC0YDQuNCx0YPRgtC+0LJcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIC0g0LzQsNGB0YHQuNCyINCw0YLRgNC40LHRg9GC0L7QslxyXG4gICAgICogQHBhcmFtIGVsZW0gLSDRjdC70LXQvNC10L3RgiDQuiDQutC+0YLQvtGA0L7QvNGDINC/0YDQuNC80LXQvdGP0LXQvCDQsNGC0YDQuNCx0YPRgtGLXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzLCBlbGVtKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQuNGB0L7QtdC00LjQvdC10L3QuNC1INC/0L7Qu9C10Lkg0Log0Y3Qu9C10LzQtdC90YLRg1xyXG4gICAgICogQHBhcmFtIGFycmF5IC0g0LzQsNGB0YHQuNCyINC/0L7Qu9C10LlcclxuICAgICAqIEBwYXJhbSBlbGVtIC0g0Y3Qu9C10LzQtdC90YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40YHQvtC10LTQuNC90Y/QtdC8XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZmllbGRzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uaGVscF9lbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQuNGB0L7QtdC00LjQvdC10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsiDRg9C/0YDQsNCy0LvQtdC90LjRj1xyXG4gICAgICogQHBhcmFtIGFycmF5IC0g0LzQsNGB0YHQuNCyINGN0LvQtdC80LXQvdGC0L7QslxyXG4gICAgICogQHBhcmFtIGVsZW0gLSDRjdC70LXQvNC10L3Rgiwg0Log0LrQvtGC0L7RgNC+0LzRgyDQv9GA0LjRgdC+0LXQtNC40L3Rj9C10LxcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9jb250cm9sc0FwcGVuZFRvKGFycmF5LCBlbGVtKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmVsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNGB0YHQuNCyINGD0L/RgNCw0LLQu9GP0Y7RidC40YUg0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC80YtcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2dldENvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCB7Y29udHJvbHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBjb250cm9scy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uKGRhdGEpLmdldEVsZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiDQtNCw0L3QvdGL0YUg0LjQtyDRhNC+0YDQvNGLXHJcbiAgICAgKiBAcmV0dXJuIHt7fX1cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbC5lbGVtZW50cztcclxuICAgICAgICBsZXQgZmllbGRzID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnRzW2VsZW1lbnRdLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnRzW2VsZW1lbnRdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmllbGRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvZm9ybS9mb3JtLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDYuMDMuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgUm91dGVyVXJscyBmcm9tIFwiLi4vLi4vc3VwcG9ydC9yb3V0ZXIvUm91dGVyVXJsc1wiO1xyXG5pbXBvcnQgR2FtZVN0YXRlcyBmcm9tIFwiLi9HYW1lU3RhdGVzXCI7XHJcblxyXG5jbGFzcyBTdG9yYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51cmxzT2JqID0gbmV3IFJvdXRlclVybHMoKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZXNPYmogPSBuZXcgR2FtZVN0YXRlcygpO1xyXG4gICAgICAgIHRoaXMub2JqVXNlciA9IG51bGw7XHJcbiAgICAgICAgLy90aGlzLm9ialVzZXIgPSB7bG9naW46ICd0ZXN0J307XHJcbiAgICAgICAgU3RvcmFnZS5fX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdXNlcih1c2VyKXtcclxuICAgICAgICB0aGlzLm9ialVzZXIgPSB1c2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXJscygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVybHNPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdhbWVTdGF0ZXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lU3RhdGVzT2JqO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2dhbWUvb2JqZWN0L1N0b3JhZ2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tGaWVsZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC70LDRgtC40L3QuNGG0YNcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtINGC0LXQutGB0YIg0LTQu9GPINC/0YDQvtCy0LXRgNC60LBcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIC0g0L3QsNC50LTQtdC90Ysg0LvQsNGC0LjQvdGB0LrQuNC1INGB0LjQvNCy0L7Qu9GLXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgX2NoZWNrTGF0aW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL1vQsC3Rj9CQLdCv0ZHQgV0rLykgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0LLQsNC70LjQtNC90L7RgdGC0Ywg0LvQvtCz0LjQvdCwXHJcbiAgICAgKiBAcGFyYW0gb2JqIC0ge2ZpZWxkIC0g0Y3Qu9C10LzQtdC90YIg0L/QvtC70Y8sIGhlbHAgLSDRjdC70LXQvNC10L3RgiDRgtC10LrRgdGC0LAg0L/QvtC80L7RidC4INC00LvRjyDQv9C+0LvRj31cclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgLSDQv9C+0LvQtSDQstCw0LvQuNC00L3QvlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2hlY2tMb2dpbihvYmopIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0xhdGluKG9iai5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdPbmx5IExhdGluJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5maWVsZC52YWx1ZS5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnNCAtIG1pbiBsZW5ndGgnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRFcnIob2JqLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKG9iai5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqLmhlbHAudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGAke29iai5oZWxwLnRleHRDb250ZW50fSwke2l0ZW0uZXJyX3RleHR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5oZWxwLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqLmZpZWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC00LvQuNC90YMg0L/QsNGA0L7Qu9GPXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgLSDQstCw0LvQuNC00L3QvlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NMZW5ndGgodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID49IDg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0Y3QutCy0LjQstCw0LvQtdC90YLQvtC90L7RgdGC0YxcclxuICAgICAqIEBwYXJhbSB2YWx1ZTFcclxuICAgICAqIEBwYXJhbSB2YWx1ZTJcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgLSDQstCw0LvQuNC00L3QvlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NFcXVhbHModmFsdWUxLCB2YWx1ZTIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10LrQsCDRgtC10LrRgdGC0LAg0L3QsCDQv9GD0YHRgtC+0YLRg1xyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIC0g0L/Rg9GB0YLQvtC1INC/0L7Qu9C1XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaGVja0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L/QsNGA0L7Qu9C10Lkg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjFxyXG4gICAgICogQHBhcmFtIG9iajEgLSB7ZmllbGQgLSDRjdC70LXQvNC10L3RgiDQv9C+0LvRjywgaGVscCAtINGN0LvQtdC80LXQvdGCINGC0LXQutGB0YLQsCDQv9C+0LzQvtGJ0Lgg0LTQu9GPINC/0L7Qu9GPfVxyXG4gICAgICogQHBhcmFtIG9iajIgLSB7ZmllbGQgLSDRjdC70LXQvNC10L3RgiDQv9C+0LvRjywgaGVscCAtINGN0LvQtdC80LXQvdGCINGC0LXQutGB0YLQsCDQv9C+0LzQvtGJ0Lgg0LTQu9GPINC/0L7Qu9GPfVxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSAtINC/0L7Qu9C1INCy0LDQu9C40LTQvdC+XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaGVja1Bhc3N3b3JkKG9iajEsIG9iajIpIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzTGVuZ3RoKG9iajEuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICc4IC0gbWluIGxlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzRXF1YWxzKG9iajEuZmllbGQudmFsdWUsIG9iajIuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdQYXNzd29yZHMgbm90IGVxdWFscycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJ1Bhc3N3b3JkcyBub3QgZXF1YWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoyLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmoxLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBvYmoyLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldEVycihpdGVtLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKGl0ZW0uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaGVscC50ZXh0Q29udGVudCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlbHAudGV4dENvbnRlbnQgPSBgJHtpdGVtLmhlbHAudGV4dENvbnRlbnR9LiR7aXRlbS5lcnJfdGV4dH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRPayhvYmoxLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldE9rKG9iajIuZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscFNldFRleHQoZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0VGV4dChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRFcnIoZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXRfZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRSZW1vdmVFcnIoZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9faW5wdXRfZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRPayhlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dF9vaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFJlbW92ZU9rKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fX2lucHV0X29rJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tZW51L2FjdGlvbnMvQ2hlY2tGaWVsZHMuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGV4dDogJycsXG4gIHR5cGU6IG51bGwsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBjbG9zZU9uQ29uZmlybTogdHJ1ZSxcbiAgY2xvc2VPbkNhbmNlbDogdHJ1ZSxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogJyM4Q0Q0RjUnLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlU2l6ZTogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgaHRtbDogZmFsc2UsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGlucHV0VHlwZTogJ3RleHQnLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0UGFyYW1zO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvZGVmYXVsdC1wYXJhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA0LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuLi9zdXBwb3J0L3JvdXRlci9Sb3V0ZXJcIjtcclxuaW1wb3J0IE1lbnVWaWV3IGZyb20gXCIuLi8uLi92aWV3cy9tZW51LXZpZXcvTWVudVZpZXdcIjtcclxuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvZW50ZXItdmlld3MvTG9naW5WaWV3XCI7XHJcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gXCIuLi8uLi92aWV3cy9lbnRlci12aWV3cy9TaWduVXBWaWV3XCI7XHJcbmltcG9ydCBMZWFkZXJCb2FyZFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL2xlYWRlcmJvYXJkLXZpZXcvTGVhZGVyQm9hcmRWaWV3XCI7XHJcbmltcG9ydCBBYm91dFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL2Fib3V0LXZpZXcvQWJvdXRWaWV3XCI7XHJcbmltcG9ydCBQcm9maWxlVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvcHJvZmlsZS12aWV3L1Byb2ZpbGVWaWV3XCI7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvZ2FtZS12aWV3L0dhbWVWaWV3XCI7XHJcblxyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZVwiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi4vZ2FtZS9vYmplY3QvU3RvcmFnZVwiO1xyXG5cclxuaW1wb3J0IFwiLi9hcHBsaWNhdGlvbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vbWFpbi10aXRsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL3ZlbmRvci9jc3MvaXppVG9hc3QubWluLmNzc1wiO1xyXG5pbXBvcnQgTXVzaWNDb250cm9scyBmcm9tIFwiLi4vLi4vZWxlbWVudHMvbXVzaWMtY29udHJvbHMvbXVzaWMtY29udHJvbHNcIjtcclxuaW1wb3J0IFNlcnZpY2VXb3JrZXIgZnJvbSBcIi4uLy4uL3N3L1NlcnZpY2VXb3JrZXJcIjtcclxuXHJcblxyXG5jb25zb2xlLmxvZyhsb2NhdGlvbi5ocmVmLm1hdGNoKC9sb2NhbGhvc3QvaSkpO1xyXG5pZiAobG9jYXRpb24ucHJvdG9jb2wgIT09ICdodHRwczonICYmIGxvY2F0aW9uLmhyZWYubWF0Y2goL2xvY2FsaG9zdC9pKSA9PT0gbnVsbCkge1xyXG4gICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczonICsgd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5sZW5ndGgpO1xyXG59XHJcblxyXG4vL25ldyBTZXJ2aWNlV29ya2VyKCkuaW5pdCgpO1xyXG5cclxubmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICBTdG9yYWdlLnVzZXIgPSB1c2VyO1xyXG4gICAgc3RhcnRSb3V0ZSgpO1xyXG59KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgc3RhcnRSb3V0ZSgpO1xyXG59KTtcclxuXHJcbmxvYWRZYW5kZXhTcGVlY2goKTtcclxubG9hZFZrKCk7XHJcblxyXG5uZXcgTXVzaWNDb250cm9scygpLnJlbmRlcigpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRSb3V0ZSgpIHtcclxuICAgIGxldCByb3V0ZXIgPSBuZXcgUm91dGVyKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgcm91dGVyLmluaXQoe1xyXG4gICAgICAgICcvJzoge1xyXG4gICAgICAgICAgICBWaWV3OiBNZW51VmlldyxcclxuICAgICAgICAgICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXZpZXcnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvbG9naW4nOiB7XHJcbiAgICAgICAgICAgIFZpZXc6IExvZ2luVmlldyxcclxuICAgICAgICAgICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi12aWV3JylcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvc2lnbnVwJzoge1xyXG4gICAgICAgICAgICBWaWV3OiBTaWduVXBWaWV3LFxyXG4gICAgICAgICAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC12aWV3JylcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvbGVhZGVyYm9hcmQnOiB7XHJcbiAgICAgICAgICAgIFZpZXc6IExlYWRlckJvYXJkVmlldyxcclxuICAgICAgICAgICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC12aWV3JylcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvYWJvdXQnOiB7XHJcbiAgICAgICAgICAgIFZpZXc6IEFib3V0VmlldyxcclxuICAgICAgICAgICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC12aWV3JylcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvcHJvZmlsZSc6IHtcclxuICAgICAgICAgICAgVmlldzogUHJvZmlsZVZpZXcsXHJcbiAgICAgICAgICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS12aWV3JylcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvZ2FtZSc6IHtcclxuICAgICAgICAgICAgVmlldzogR2FtZVZpZXcsXHJcbiAgICAgICAgICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS12aWV3JylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFZrKCkge1xyXG4gICAgbGV0IHZrU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICB2a1NjcmlwdC5zcmMgPSAnaHR0cHM6Ly92ay5jb20vanMvYXBpL29wZW5hcGkuanM/MTQ2JztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmtTY3JpcHQpO1xyXG5cclxuICAgIHZrU2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBWSy5pbml0KHtcclxuICAgICAgICAgICAgYXBpSWQ6IDU5MTUxMjBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRZYW5kZXhTcGVlY2goKSB7XHJcbiAgICBsZXQgc3BlZWNoU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzcGVlY2hTY3JpcHQuc3JjID0gJ2h0dHBzOi8vd2ViYXNyLnlhbmRleC5uZXQvanNhcGkvdjEvd2Vic3BlZWNoa2l0LmpzJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BlZWNoU2NyaXB0KTtcclxuXHJcbiAgICBsZXQgc3BlZWNoU2V0dGluZ3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNwZWVjaFNldHRpbmdzU2NyaXB0LnNyYyA9ICdodHRwczovL3dlYmFzci55YW5kZXgubmV0L2pzYXBpL3YxL3dlYnNwZWVjaGtpdC1zZXR0aW5ncy5qcyc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwZWVjaFNldHRpbmdzU2NyaXB0KTtcclxuXHJcbiAgICBzcGVlY2hTZXR0aW5nc1NjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnlhLnNwZWVjaGtpdC5zZXR0aW5ncy5sYW5nID0gJ3J1LVJVJztcclxuICAgICAgICB3aW5kb3cueWEuc3BlZWNoa2l0LnNldHRpbmdzLmFwaWtleSA9ICczNmUzZDMwYi1jNzgyLTQ4M2ItOWZmZS0xM2Y4YTk4ZjE3ZmYnO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vZm9ybV9fYnV0dG9uLnNjc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1CdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmF0dHJzID0gb3B0aW9ucy5hdHRycyB8fCBbXTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0Y3Qu9C10LzQtdC90YLRgyDQsNGC0YDQuNCx0YPRgtGLXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtINC80LDRgdGB0LjQsiDQsNGC0YDQuNCx0YPRgtC+0LJcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCINC60L3QvtC/0LrQuFxyXG4gICAgICogQHJldHVybiB7Rm9ybUJ1dHRvbn1cclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZXModGhpcy5hdHRycyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL2Zvcm0vX19idXR0b24vZm9ybS1idXR0b24uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gXCIuLi8uLi8uLi9qcy9tZW51L2FjdGlvbnMvQ2hlY2tGaWVsZHNcIjtcclxuXHJcbmltcG9ydCAnLi9mb3JtX19pbnB1dC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IG9wdGlvbnMuYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5oZWxwX2F0dHJzID0gb3B0aW9ucy5oZWxwX2F0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaGVscF9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGN0LvQtdC80LXQvdGC0YMg0LDRgtGC0YDQuNCx0YPRgtGLXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtINC80LDRgdGB0LjQsiDQsNGC0YDQuNCx0YPRgtC+0LJcclxuICAgICAqIEBwYXJhbSBlbGVtIC0g0Y3Qu9C10LzQtdC90YJcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZXModGhpcy5hdHRycywgdGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlcyh0aGlzLmhlbHBfYXR0cnMsIHRoaXMuaGVscF9lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRjdC70LXQvNC10L3RgiBpbnB1dFxyXG4gICAgICogQHJldHVybiB7SW5wdXR9XHJcbiAgICAgKi9cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQnNC10YLQvtC0INCy0LDQu9C40LTQsNGG0LjQuCDQtNCw0L3QvdGL0YUg0LIg0L/QvtC70LVcclxuICAgICAqIEBwYXJhbSBwcmV2IC0g0L/RgNC10LTRi9C00YPRidC40Lkg0Y3Qu9C10LzQtdC90YIgKNC00LvRjyDQv9GA0L7QstC10YDQutC4INC/0LDRgNC+0LvQtdC5KVxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGUocHJldikge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgaWYgKENoZWNrRmllbGRzLmNoZWNrRW1wdHkodGhpcy5lbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgJ2VtcHR5IGZpZWxkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkJyk7XHJcbiAgICAgICAgaWYgKHZhbGlkID09PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDaGVja0ZpZWxkcy5jaGVja0xvZ2luKHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkID09PSAncmVwZWF0cGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDaGVja0ZpZWxkcy5jaGVja1Bhc3N3b3JkKFxyXG4gICAgICAgICAgICAgICAge2ZpZWxkOiBwcmV2LmVsLCBoZWxwOiBwcmV2LmhlbHBfZWx9LFxyXG4gICAgICAgICAgICAgICAge2ZpZWxkOiB0aGlzLmVsLCBoZWxwOiB0aGlzLmhlbHBfZWx9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRh9C40YHRgtC60LAg0L/QvtC70LXQuVxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldFRleHQodGhpcy5lbCwgJycpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlT2sodGhpcy5lbCk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNEdXBsaWNhdGVkRGVjbGFyYXRpb25cclxuICAgIHNldEVycm9yKCkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcih2YWx1ZSkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbGVtZW50cy9mb3JtL19faW5wdXQvZm9ybS1pbnB1dC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE4LjA0LjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEl6aVRvYXN0IGZyb20gXCJpeml0b2FzdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9nYW1lLWNob29zZS1hY3Rpb24uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fYnV0dG9uL2dhbWUtY2hvb3NlLWFjdGlvbl9fYnV0dG9uLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9fX2NvbnRhaW5lci9nYW1lLWNob29zZS1hY3Rpb25fX2NvbnRhaW5lci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwT2JqZWN0IGZyb20gXCIuLi8uLi9qcy9nYW1lL29iamVjdC9TdGVwT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ2hvb3NlQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBuZXcgU3RlcE9iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuYnVmZkFjdGlvbiA9IG5ldyBTdGVwT2JqZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQnNC10YLQvtC0INC+0YLRgNC40YHQvtCy0LrQuFxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLyotLS0tLS0tLS0tY3JlYXRlIG1haW4gY29udGFpbmVyLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb24gaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tY3JlYXRlIGNvbnRlbnQgY29udGFpbmVyLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS1jcmVhdGUgY2xvc2UgYnV0dG9uLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fY2xvc2UtbW9kYWwnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uQ2xvc2UpO1xyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS0tY3JlYXRlIGNvbnRhaW5lciBmb3IgYWN0aW9uIHNldHMtLS0tLS0tLS0tLSovXHJcbiAgICAgICAgbGV0IGFjdGlvblNldHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhY3Rpb25TZXRzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19zZXRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uU2V0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS1jcmVhdGUgc2V0cyBmb3IgYWN0aW9ucy0tLS0tLS0tLS0tKi9cclxuICAgICAgICB0aGlzLmFjdGlvblNldEhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU2V0SGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19hY3Rpb24taGl0LXNldCcpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU2V0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmFjdGlvblNldEJsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19hY3Rpb24tYmxvY2stc2V0Jyk7XHJcbiAgICAgICAgYWN0aW9uU2V0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvblNldEhpdCk7XHJcbiAgICAgICAgYWN0aW9uU2V0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvblNldEJsb2NrKTtcclxuXHJcblxyXG4gICAgICAgIC8qIyMjIyMjIyMjIyMjI2ZpbGwgc2V0cyBmb3IgYWN0aW9ucyMjIyMjIyMjIyMjIyMjIyovXHJcbiAgICAgICAgLyotLS0tLS0tLS0tLWZpbGwgaGl0IHNldC0tLS0tLS0tLS0tKi9cclxuICAgICAgICBsZXQgaGl0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGl0SGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b25fdGFicycpO1xyXG4gICAgICAgIGhpdEhlYWRlci5pbm5lclRleHQgPSAnSGl0JztcclxuICAgICAgICB0aGlzLmFjdGlvblNldEhpdC5hcHBlbmRDaGlsZChoaXRIZWFkZXIpO1xyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS0tY3JlYXRlIHNldCBmb3IgaGl0IGNvbnRyb2xzLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIHRoaXMuc2V0SGl0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnNldEhpdENvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aW9uLXNldC1jb250cm9scycpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU2V0SGl0LmFwcGVuZENoaWxkKHRoaXMuc2V0SGl0Q29udHJvbHMpO1xyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS0tZmlsbCBibG9jayBzZXQtLS0tLS0tLS0tLSovXHJcbiAgICAgICAgbGV0IGJsb2NrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmxvY2tIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl90YWJzJyk7XHJcbiAgICAgICAgYmxvY2tIZWFkZXIuaW5uZXJUZXh0ID0gJ0Jsb2NrJztcclxuICAgICAgICB0aGlzLmFjdGlvblNldEJsb2NrLmFwcGVuZENoaWxkKGJsb2NrSGVhZGVyKTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tLWNyZWF0ZSBzZXQgZm9yIGJsb2NrIGNvbnRyb2xzLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIHRoaXMuc2V0QmxvY2tDb250cm9sbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnNldEJsb2NrQ29udHJvbGxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aW9uLXNldC1jb250cm9scycpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU2V0QmxvY2suYXBwZW5kQ2hpbGQodGhpcy5zZXRCbG9ja0NvbnRyb2xscyk7XHJcbiAgICAgICAgLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS1jcmVhdGUgY29udHJvbHMgYmxvY2tzIGZvciBibG9jayBzZXQtLS0tLS0tLS0tLSovXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lckJsb2NrTWV0aG9kQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXJCbG9ja01ldGhvZENvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19hY3Rpb24taGl0LXNldF9fY29sdW1uJyk7XHJcbiAgICAgICAgdGhpcy5zZXRCbG9ja0NvbnRyb2xscy5hcHBlbmRDaGlsZChjb250YWluZXJCbG9ja01ldGhvZENvbnRyb2xzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25CbG9ja0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkJsb2NrSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fYnV0dG9uX2Nob29zZScpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQmxvY2tIZWFkLmlubmVyVGV4dCA9ICdoZWFkJztcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25CbG9ja0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkJsb2NrQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fYnV0dG9uX2Nob29zZScpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQmxvY2tCb2R5LmlubmVyVGV4dCA9ICdib2R5JztcclxuICAgICAgICBjb250YWluZXJCbG9ja01ldGhvZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uQmxvY2tCb2R5KTtcclxuICAgICAgICBjb250YWluZXJCbG9ja01ldGhvZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uQmxvY2tIZWFkKTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tLWNyZWF0ZSBjb250cm9scyBibG9ja3MgZm9yIGhpdCBzZXQtLS0tLS0tLS0tLSovXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lckhpdE1ldGhvZENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVySGl0TWV0aG9kQ29udHJvbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2FjdGlvbi1oaXQtc2V0X19jb2x1bW4nKTtcclxuICAgICAgICBsZXQgY29udGFpbmVySGl0VGFyZ2V0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXJIaXRUYXJnZXRDb250cm9scy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fYWN0aW9uLWhpdC1zZXRfX2NvbHVtbicpO1xyXG4gICAgICAgIHRoaXMuc2V0SGl0Q29udHJvbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVySGl0TWV0aG9kQ29udHJvbHMpO1xyXG4gICAgICAgIHRoaXMuc2V0SGl0Q29udHJvbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVySGl0VGFyZ2V0Q29udHJvbHMpO1xyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS0tZmlsbCBjb250cm9scyBibG9ja3MgZm9yIGhpdCBzZXQtLS0tLS0tLS0tLSovXHJcbiAgICAgICAgLyojIyMjIyMjIyMjIyMjIy1tZXRob2RzLSMjIyMjIyMjIyMjIyMjIyMqL1xyXG4gICAgICAgIGxldCBoaXRNZXRob2RIZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGl0TWV0aG9kSGVhZFRleHQuaW5uZXJUZXh0ID0gJ01ldGhvZCc7XHJcbiAgICAgICAgY29udGFpbmVySGl0TWV0aG9kQ29udHJvbHMuYXBwZW5kQ2hpbGQoaGl0TWV0aG9kSGVhZFRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2UnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQuaW5uZXJUZXh0ID0gJ0hlYWQnO1xyXG4gICAgICAgIGNvbnRhaW5lckhpdE1ldGhvZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uSGl0TWV0aG9kSGVhZCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uSGl0TWV0aG9kQXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RBcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2UnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEFybS5pbm5lclRleHQgPSAnQXJtJztcclxuICAgICAgICBjb250YWluZXJIaXRNZXRob2RDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkhpdE1ldGhvZEFybSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uSGl0TWV0aG9kTGVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RMZWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2UnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZExlZy5pbm5lclRleHQgPSAnTGVnJztcclxuICAgICAgICBjb250YWluZXJIaXRNZXRob2RDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkhpdE1ldGhvZExlZyk7XHJcblxyXG4gICAgICAgIC8qIyMjIyMjIyMjIyMjIyMtdGFyZ2V0cy0jIyMjIyMjIyMjIyMjIyMjKi9cclxuICAgICAgICBsZXQgaGl0VGFyZ2V0SGVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGhpdFRhcmdldEhlYWRUZXh0LmlubmVyVGV4dCA9ICdUYXJnZXQnO1xyXG4gICAgICAgIGNvbnRhaW5lckhpdFRhcmdldENvbnRyb2xzLmFwcGVuZENoaWxkKGhpdFRhcmdldEhlYWRUZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRUYXJnZXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRUYXJnZXRIZWFkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b25fY2hvb3NlJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRUYXJnZXRIZWFkLmlubmVyVGV4dCA9ICdIZWFkJztcclxuICAgICAgICBjb250YWluZXJIaXRUYXJnZXRDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkhpdFRhcmdldEhlYWQpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdFRhcmdldEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdFRhcmdldEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2UnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdFRhcmdldEJvZHkuaW5uZXJUZXh0ID0gJ0JvZHknO1xyXG4gICAgICAgIGNvbnRhaW5lckhpdFRhcmdldENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uSGl0VGFyZ2V0Qm9keSk7XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS1jcmVhdGUgcHJvYmFiaWxpdHkgYmxvY2sgaW5mby0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICB0aGlzLnByb2JhYmlsaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY2hvb3NlLWFjdGlvbl9fcHJvYmFiaWxpdHktYmxvY2snKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvYmFiaWxpdHlDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2JhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnByb2JhYmlsaXR5SW5mbyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHlJbmZvLmlubmVySFRNTCA9IGA8YWN0aW9uPkhpdCBoZWFkPC9hY3Rpb24+ID0gPHByb2JhYmlsaXR5PnRoZSBzbWFsbGVzdDwvcHJvYmFiaWxpdHk+IHByb2JhYmlsaXR5LCBkYW1hZ2UgaXMgdGhlIDxkYW1hZ2U+YmlnZ2VzdDwvZGFtYWdlPi48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFjdGlvbj5IaXQgYXJtPC9hY3Rpb24+ID0gPHByb2JhYmlsaXR5PnRoZSBiaWdnZXN0PC9wcm9iYWJpbGl0eT4gcHJvYmFiaWxpdHksIGRhbWFnZSBpcyB0aGUgPGRhbWFnZT5zbWFsbGVzdDwvZGFtYWdlPi48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWN0aW9uPkhpdCBsZWc8L2FjdGlvbj4gPSA8cHJvYmFiaWxpdHk+YXZlcmFnZTwvcHJvYmFiaWxpdHk+IHByb2JhYmlsaXR5LCBkYW1hZ2UgaXMgPGRhbWFnZT5hdmVyYWdlPC9kYW1hZ2U+LjwvYnI+YDtcclxuXHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS1jcmVhdGUgYnV0dG9uIGNob29zZS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICB0aGlzLmJ0bkNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2hvb3NlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b24nKTtcclxuICAgICAgICB0aGlzLmJ0bkNob29zZS5pbm5lclRleHQgPSAnT2snO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idG5DaG9vc2UpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5faW5pdEFjdGlvblNldHNMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDRgdC+0LHRi9GC0LjRjywg0LXRgdC70Lgg0L7QvdC+INC+0YLQutGA0YvRgtC+INC90LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICogQHBhcmFtIGFjdGlvblxyXG4gICAgICovXHJcbiAgICBzZXRTdGFydEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBudWxsICYmIHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZkFjdGlvbi5pbml0KGFjdGlvbi5oaXQubWV0aG9kLCBhY3Rpb24uaGl0LnRhcmdldCwgYWN0aW9uLmJsb2NrLm1ldGhvZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5idWZmQWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZBY3Rpb24gPSBuZXcgU3RlcE9iamVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBudWxsICYmIHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3Rpb24uaGl0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXJtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEJ1dHRvbkFjdGlvbkZvY3VzKHRoaXMuYnV0dG9uSGl0TWV0aG9kQXJtKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZyc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkhpdE1ldGhvZExlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFjdGlvbi5oaXQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEJ1dHRvbkFjdGlvbkZvY3VzKHRoaXMuYnV0dG9uSGl0VGFyZ2V0SGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib2R5Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEJ1dHRvbkFjdGlvbkZvY3VzKHRoaXMuYnV0dG9uSGl0VGFyZ2V0Qm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFjdGlvbi5ibG9jay5tZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvZHknOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0QnV0dG9uQWN0aW9uRm9jdXModGhpcy5idXR0b25CbG9ja0JvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkJsb2NrSGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSDQutC90L7Qv9C+0Log0L/QviDQstGL0LHQvtGA0YMg0LTQtdC50YHRgtCy0LjQuVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2luaXRBY3Rpb25TZXRzTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdGVuZXJzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIC8vVE9ETyBub3JtYWxpemVcclxuICAgICAgICB0aGlzLmNob29zZU1ldGhvZEhpdEhlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIaXRNZXRob2RGb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZBY3Rpb24uaGl0Lm1ldGhvZCA9ICdoZWFkJztcclxuICAgICAgICAgICAgdGhpcy5fc2V0QnV0dG9uQWN0aW9uRm9jdXModGhpcy5idXR0b25IaXRNZXRob2RIZWFkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hvb3NlVGhhbkhpdEFybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckhpdE1ldGhvZEZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZkFjdGlvbi5oaXQubWV0aG9kID0gJ2FybSc7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEJ1dHRvbkFjdGlvbkZvY3VzKHRoaXMuYnV0dG9uSGl0TWV0aG9kQXJtKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNob29zZVRoYW5IaXRMZWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIaXRNZXRob2RGb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZBY3Rpb24uaGl0Lm1ldGhvZCA9ICdsZWcnO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkhpdE1ldGhvZExlZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNob29zZVdoZXJlSGl0SGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckhpdFRhcmdldEZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZkFjdGlvbi5oaXQudGFyZ2V0ID0gJ2hlYWQnO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkhpdFRhcmdldEhlYWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaG9vc2VXaGVyZUhpdEJvZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIaXRUYXJnZXRGb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZBY3Rpb24uaGl0LnRhcmdldCA9ICdib2R5JztcclxuICAgICAgICAgICAgdGhpcy5fc2V0QnV0dG9uQWN0aW9uRm9jdXModGhpcy5idXR0b25IaXRUYXJnZXRCb2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZU1ldGhvZEhpdEhlYWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RBcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVRoYW5IaXRBcm0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RMZWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVRoYW5IaXRMZWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRUYXJnZXRIZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9vc2VXaGVyZUhpdEhlYWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRUYXJnZXRCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9vc2VXaGVyZUhpdEJvZHkuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvb3NlQmxvY2tIZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQmxvY2tNZXRob2RGb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZBY3Rpb24uYmxvY2subWV0aG9kID0gJ2hlYWQnO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRCdXR0b25BY3Rpb25Gb2N1cyh0aGlzLmJ1dHRvbkJsb2NrSGVhZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNob29zZUJsb2NrQm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckJsb2NrTWV0aG9kRm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5idWZmQWN0aW9uLmJsb2NrLm1ldGhvZCA9ICdib2R5JztcclxuICAgICAgICAgICAgdGhpcy5fc2V0QnV0dG9uQWN0aW9uRm9jdXModGhpcy5idXR0b25CbG9ja0JvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uQmxvY2tIZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9vc2VCbG9ja0hlYWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25CbG9ja0JvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZUJsb2NrQm9keS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LDRgtGMINC60L3QvtC/0LrQtSDQstGL0LHRgNCw0L3QvdC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgKiBAcGFyYW0gZWxlbVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3NldEJ1dHRvbkFjdGlvbkZvY3VzKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY2hvb3NlLWFjdGlvbl9fYnV0dG9uX2Nob29zZV9mb2N1c2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9Cx0YDQsNGC0Ywg0YTQvtC60YPRgdGLINGB0L4g0LLRgdC10YUg0LrQvdC+0L/QvtC6INCx0LvQvtC60LBcclxuICAgICAqL1xyXG4gICAgY2xlYXJCbG9ja01ldGhvZEZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQmxvY2tIZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtY2hvb3NlLWFjdGlvbl9fYnV0dG9uX2Nob29zZV9mb2N1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25CbG9ja0JvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b25fY2hvb3NlX2ZvY3VzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LHRgNCw0YLRjCDRhNC+0LrRg9GB0Ysg0YHQviDQstGB0LXRhSDQutC90L7Qv9C+0Log0YPQtNCw0YDQsCBcItGH0LXQvFwiXHJcbiAgICAgKi9cclxuICAgIGNsZWFySGl0TWV0aG9kRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RBcm0uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b25fY2hvb3NlX2ZvY3VzZWQnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEhlYWQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b25fY2hvb3NlX2ZvY3VzZWQnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZExlZy5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2VfZm9jdXNlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPQsdGA0LDRgtGMINGE0L7QutGD0YHRiyDRgdC+INCy0YHQtdGFINC60L3QvtC/0L7QuiDRg9C00LDRgNCwIFwi0LrRg9C00LBcIlxyXG4gICAgICovXHJcbiAgICBjbGVhckhpdFRhcmdldEZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSGl0VGFyZ2V0SGVhZC5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2VfZm9jdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSGl0VGFyZ2V0Qm9keS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWNob29zZS1hY3Rpb25fX2J1dHRvbl9jaG9vc2VfZm9jdXNlZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7QutCw0LfQsNGC0Ywg0Y3Qu9C10LzQtdC90YJcclxuICAgICAqL1xyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0L/RgNGP0YLQsNGC0Ywg0Y3Qu9C10LzQtdC90YJcclxuICAgICAqL1xyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LHRgNCw0YLRjCDQstGB0LUg0YTQvtC60YPRgdGLINGBINC60L3QvtC/0L7QulxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NsZWFyRm9jdXNlZCgpIHtcclxuICAgICAgICAvL3RoaXMuY2xlYXJBY3Rpb25EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckhpdFRhcmdldEZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckhpdE1ldGhvZEZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckJsb2NrTWV0aG9kRm9jdXMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10Lkg0L3QsCDQutC90L7Qv9C60LDRhSBb0LfQsNC60YDRi9GC0LjQtSwg0L/QvtC00YLQstC10YDQttC00LXQvdC40LUg0LTQtdC50YHRgtCy0LjRj11cclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBpbml0QnV0dG9uc0FjdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ2FsbGJhY2tDbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQnV0dG9uQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRm9jdXNlZCgpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvbkNhbGxiYWNrQ2hvb3NlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZkFjdGlvbi5jaGVja09uRW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJ1dHRvbkFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuYnVmZkFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJGb2N1c2VkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBJemlUb2FzdC5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdGaWxsIGFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wQ2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25DYWxsYmFja0Nsb3NlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25DYWxsYmFja0Nob29zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70LjRgtGMINGB0LvRg9GI0LDRgtC10LvQuFxyXG4gICAgICovXHJcbiAgICBkZWxldGVCdXR0b25BY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aW9uQ2FsbGJhY2tDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5idG5DaG9vc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbkNhbGxiYWNrQ2hvb3NlKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RIZWFkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9vc2VNZXRob2RIaXRIZWFkKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdE1ldGhvZEFybS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvb3NlVGhhbkhpdEFybSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaXRNZXRob2RMZWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVRoYW5IaXRMZWcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSGl0VGFyZ2V0SGVhZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvb3NlV2hlcmVIaXRIZWFkKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpdFRhcmdldEJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVdoZXJlSGl0Qm9keSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS1jaG9vc2UtYWN0aW9uL0dhbWVDaG9vc2VBY3Rpb24uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwOC4wNC4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFwiLi9nYW1lLWNvbnRyb2xzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9fX2J1dHRvbi9nYW1lLWNvbnRyb2xzX19idXR0b24uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fYWN0aW9uLWJ1dHRvbi9nYW1lLWNvbnRyb2xzX19hY3Rpb24tYnV0dG9uLnNjc3NcIjtcclxuaW1wb3J0IFNwZWVjaENvbnRyb2wgZnJvbSBcIi4uL3NwZWVjaC1jb250cm9sL1NwZWVjaENvbnRyb2xcIjtcclxuaW1wb3J0IFwic3dlZXRhbGVydC9kaXN0L3N3ZWV0YWxlcnQuY3NzXCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbHMge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgZ2FtZUFjdGlvbk1vZGFsLCBtYW5hZ2VyQ29udGV4dCkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uTW9kYWwgPSBnYW1lQWN0aW9uTW9kYWw7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyQ29udGV4dCA9IG1hbmFnZXJDb250ZXh0O1xyXG4gICAgICAgIHRoaXMuaXNCdXR0b25TdGVwQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDRjdC70LXQvNC10L3RglxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY29udHJvbHMnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY29udHJvbHNfYWN0aW9ucycpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkFkZEFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQWRkQWN0aW9uLmlubmVyVGV4dCA9ICdhZGQgYWN0aW9ucyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25BZGRBY3Rpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLWNvbnRyb2xzX19hY3Rpb24tYnV0dG9uX2VtcHR5Jyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25BZGRBY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaENvbnRyb2wgPSBuZXcgU3BlZWNoQ29udHJvbCh0aGlzLmFjdGlvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQ29udHJvbC5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hDb250cm9sLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25Db250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0blN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ0blN0ZXAuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tbmV4dC1zdGVwJyk7XHJcbiAgICAgICAgdGhpcy5idG5TdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1jb250cm9sc19fYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5idG5TdGVwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLmJ0blN0ZXBUZXh0LmlubmVyVGV4dCA9ICdDcmVhdGUgc3RlcCc7XHJcbiAgICAgICAgdGhpcy5idG5TdGVwLmFwcGVuZENoaWxkKHRoaXMuYnRuU3RlcFRleHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ0blN0ZXApO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkhlbHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRoaXMuYnRuSGVscC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY29udHJvbHNfX2J1dHRvbl9oZWxwJyk7XHJcbiAgICAgICAgdGhpcy5idG5IZWxwLmlubmVyVGV4dCA9ICdoZWxwJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idG5IZWxwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5pbml0SGVscExpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEhlbHBMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmJ0bkhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIT1cgVE8gVVNFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIjxoMz5LZXl3b3JkcyBpbiBzcGVlY2g6PC9oMz5cXG4gXCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8dWwgY2xhc3M9J2tleXdvcmRzJz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxsaT7Qo9C00LDRgNC40YLRjCDQoNGD0LrQvtC5fNCd0L7Qs9C+0Ll80JPQvtC70L7QstC+0Lk8L2xpPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPGxpPtCSINGC0LXQu9C+fNCSINCz0L7Qu9C+0LLRgzwvbGk+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8bGk+0JHQu9C+0Log0JPQvtC70L7QstGLfNCi0LXQu9CwPC9saT5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjwvdWw+IFwiLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWZyb20tdG9wJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSDQvdCwINC60L3QvtC/0LrRgyBcItGB0LTQtdC70LDRgtGMINGI0LDQs1wiXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgaW5pdERvU3RlcExpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTdGVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0J1dHRvblN0ZXBBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnRuU3RlcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlU3RlcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70LjRgtGMINGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINC60L3QvtC/0LrRgyBcItGB0LTQtdC70LDRgtGMINGI0LDQs1wiXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZURvU3RlcExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMuYnRuU3RlcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSDQvdCwINC60L3QvtC/0LrRgyBcItCy0YvQsdGA0LDRgtGMINC00LXQudGB0YLQstC40LVcIlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGluaXRBY3Rpb25MaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbk1vZGFsLmluaXRCdXR0b25zQWN0aW9uKChhY3Rpb25PYmopID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soYWN0aW9uT2JqKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25BZGRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCdXR0b25TdGVwQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb25Nb2RhbC5zZXRTdGFydEFjdGlvbih0aGlzLm1hbmFnZXJDb250ZXh0LnN0cmF0ZWd5Lm15U3RlcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb25Nb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkFkZEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aW9uQWRkQ2FsbGJhY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9C00LDQu9C40YLRjCDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDQutC90L7Qv9C60YMgXCLQstGL0LHRgNCw0YLRjCDQtNC10LnRgdGC0LLQuNC1XCJcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQWN0aW9uTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25BZGRBY3Rpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbkFkZENhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25Nb2RhbC5kZWxldGVCdXR0b25BY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCdXR0b25TdGVwU3RhdHVzKGxhdykge1xyXG4gICAgICAgIHRoaXMuaXNCdXR0b25TdGVwQWN0aXZlID0gbGF3O1xyXG4gICAgICAgIGlmIChsYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5TdGVwLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtY29udHJvbHNfX2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0ZXBUZXh0LmlubmVyVGV4dCA9ICdDcmVhdGUgc3RlcCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idG5TdGVwLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY29udHJvbHNfX2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0ZXBUZXh0LmlubmVyVGV4dCA9ICdXYWl0IC4uLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvR2FtZUNvbnRyb2xzLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTkuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCAnLi9nYW1lLWluZm8tdG9hc3Quc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW5mb1RvYXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIGhlYWx0aCwgbG9naW4sIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLmxvZ2luID0gbG9naW47XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQ29uc3QgPSAyLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1pbmZvLXRvYXN0X2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1pbmZvLXRvYXN0X3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1pbmZvLXRvYXN0X19jYW52YXMnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgLyppZih0aGlzLmNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgY29udGV4dC5mb250ID0gJzMycHggT3JiaXRyb24nO1xyXG4gICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGAke3RoaXMubG9naW59YCwgODAsMzUpO1xyXG5cclxuICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgY29udGV4dC5yZWN0KDMwLCA1MCwgdGhpcy5oZWFsdGgqdGhpcy5oZWFsdGhDb25zdCwgMzApO1xyXG4gICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoYEhlYWx0aDogJHt0aGlzLmhlYWx0aH1gLCA3MCwxMzApO1xyXG4gICAgICAgICB9Ki9cclxuICAgICAgICB0aGlzLnVwZGF0ZUhlYWx0aCgxMDApO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGVhbHRoKGhwKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBocDtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICczMnB4IE9yYml0cm9uJztcclxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChgJHt0aGlzLmxvZ2lufWAsIDMwLCAzNSk7XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnJlY3QoMzAsIDUwLCB0aGlzLmhlYWx0aENvbnN0ICogdGhpcy5oZWFsdGgsIDMwKTtcclxuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGBIZWFsdGg6ICR7dGhpcy5oZWFsdGh9YCwgNTAsIDEzMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL2dhbWUtaW5mby10b2FzdC9HYW1lSW5mb1RvYXN0LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMjAuMDQuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgJy4vZ2FtZS1yZXN1bHQtdGFibGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUmVzdWx0VGFibGV7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKXtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLXJlc3VsdC10YWJsZScpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZERhdGEoc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGREYXRhKHNldHRpbmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2V0dGluZ3MpO1xyXG4gICAgICAgIGlmKHNldHRpbmdzLm1lLndpbil7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlUmVzdWx0LmlubmVyVGV4dCA9IGBZb3Ugd2luIDo+YDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZVJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVSZXN1bHQuaW5uZXJUZXh0ID0gYFlvdSBsb3NlIDo8YDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZVJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS1teSBkYXRhLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIHRoaXMubXlEYXRhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubXlEYXRhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtcmVzdWx0LXRhYmxlX19teS1pbmZvJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5teURhdGFJbmZvKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBgTXkgcmVzdWx0czogYDtcclxuICAgICAgICB0aGlzLm15RGF0YUluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBsZXQgbG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGxvZ2luLmlubmVyVGV4dCA9IGBMb2dpbjogJHtzZXR0aW5ncy5tZS5vYmplY3QubG9naW59YDtcclxuICAgICAgICB0aGlzLm15RGF0YUluZm8uYXBwZW5kQ2hpbGQobG9naW4pO1xyXG5cclxuICAgICAgICBsZXQgcmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICByYXRpbmcuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtzZXR0aW5ncy5tZS5vYmplY3QucmF0aW5nfWA7XHJcbiAgICAgICAgdGhpcy5teURhdGFJbmZvLmFwcGVuZENoaWxkKHJhdGluZyk7XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLW9wcG9uZW50IGRhdGEtLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgdGhpcy5vcHBvbmVudERhdGFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudERhdGFJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2FtZS1yZXN1bHQtdGFibGVfX29wcG9uZW50LWluZm8nKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm9wcG9uZW50RGF0YUluZm8pO1xyXG5cclxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gYE9wcG9uZW50IHJlc3VsdHM6IGA7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudERhdGFJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgbG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIGxvZ2luLmlubmVyVGV4dCA9IGBMb2dpbjogJHtzZXR0aW5ncy5vcHBvbmVudC5vYmplY3QubG9naW59YDtcclxuICAgICAgICB0aGlzLm9wcG9uZW50RGF0YUluZm8uYXBwZW5kQ2hpbGQobG9naW4pO1xyXG5cclxuICAgICAgICByYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHJhdGluZy5pbm5lclRleHQgPSBgUmF0aW5nOiAke3NldHRpbmdzLm9wcG9uZW50Lm9iamVjdC5yYXRpbmd9YDtcclxuICAgICAgICB0aGlzLm9wcG9uZW50RGF0YUluZm8uYXBwZW5kQ2hpbGQocmF0aW5nKTtcclxuXHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLWFkZCBidXR0b24tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgdGhpcy5idG5PayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLXJlc3VsdC10YWJsZV9fYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5idG5Pay5pbm5lclRleHQgPSAnT2snO1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnREYXRhSW5mby5hcHBlbmRDaGlsZCh0aGlzLmJ0bk9rKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TGlzdGVuZXIoY2FsbGJhY2spe1xyXG4gICAgICAgIHRoaXMuYnRuT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS1yZXN1bHQtdGFibGUvR2FtZVJlc3VsdFRhYmxlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMjcuMDQuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgXCIuL2dhbWUtdGltZXIuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVRpbWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lLXRpbWVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGltZVRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVEb3duID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZURvd24gPSB0aGlzLnRpbWVEb3duICsgMzAwMDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmludGV2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnRpbWVEb3duIC0gbm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRleHQudGV4dENvbnRlbnQgPSBgMDA6JHtzZWNvbmRzfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oYDAwOiR7c2Vjb25kc31gKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRkZW4oKSB7XHJcbiAgICAgICAgdGhpcy50aW1lVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGV2YWwpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL2dhbWUtdGltZXIvR2FtZVRpbWVyLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDcuMDUuMjAxNy5cclxuICovXHJcbmltcG9ydCBcIi4vbXVzaWMtY29udHJvbHMuc2Nzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpY0NvbnRyb2xzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljLWJnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtdXNpYy1jb250cm9scyBtdXNpYy1jb250cm9sc19vbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpY0VsZW1lbnQucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljRWxlbWVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtdXNpYy1jb250cm9sc19vZmYnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ211c2ljLWNvbnRyb2xzX29uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljRWxlbWVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbXVzaWMtY29udHJvbHNfb24nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ211c2ljLWNvbnRyb2xzX29mZicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvbXVzaWMtY29udHJvbHMvbXVzaWMtY29udHJvbHMuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAyMC4wNC4yMDE3LlxyXG4gKi9cclxuaW1wb3J0ICcuL3Byb2dyZXNzLWJhci10YWJsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyVGFibGUge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2dyZXNzLWJhci10YWJsZScpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyX3BhcmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvZ3Jlc3NCYXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRUZXh0KHNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkVGV4dChzZXR0aW5ncykge1xyXG4gICAgICAgIGxldCB0ZXh0QXJyYXkgPSBzZXR0aW5ncy5jb25mO1xyXG4gICAgICAgIHRleHRBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZWxlbS50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbGVtZW50cy9wcm9ncmVzcy1iYXItdGFibGUvcHJvZ3Jlc3NCYXJUYWJsZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDIxLjA1LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgXCIuL3NwZWVjaC1lbGVtZW50LnNjc3NcIjtcclxuaW1wb3J0IFN0ZXBPYmplY3QgZnJvbSBcIi4uLy4uL2pzL2dhbWUvb2JqZWN0L1N0ZXBPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVjaENvbnRyb2wge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3BlZWNoLWVsZW1lbnQnKTtcclxuXHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9taWNyb3Bob25lLnBuZycpO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzYwcHgnKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnNjBweCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24gPSBuZXcgd2luZG93LnlhLnNwZWVjaGtpdC5TcGVlY2hSZWNvZ25pdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDYWxsYmFjazogdGhpcy5fYW5hbGlzZVNwZWVjaC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRDYWxsYmFjazogdGhpcy5fc3RhcnRSZWNvZ25pemUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl9lcnJvclJlY29nbml6ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BDYWxsYmFjazogdGhpcy5fc3RvcFJlY29nbml6ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9DYWxsYmFjazogdGhpcy5fc3RhdHVzUmVjb2duaXplLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgdXR0ZXJhbmNlU2lsZW5jZTogNjBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0UmVjb2duaXplKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2Vycm9yUmVjb2duaXplKGVycikge1xyXG4gICAgICAgIHRoaXMuX2ZpbmlzaEFuaW1hdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfc3RhdHVzUmVjb2duaXplKHNlbnRfYnl0ZXMsIHNlbnRfcGFja2FnZXMsIHByb2Nlc3NlZCwgZm9ybWF0KSB7XHJcbiAgICAgICAgLypjb25zb2xlLmxvZyhcItCe0YLQv9GA0LDQstC70LXQvdC+INC00LDQvdC90YvRhSDQvdCwINGB0LXRgNCy0LXRgDogXCIgKyBzZW50X2J5dGVzKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCLQntGC0L/RgNCw0LLQu9C10L3QviDQv9Cw0LrQtdGC0L7QsiDQvdCwINGB0LXRgNCy0LXRgDogXCIgKyBzZW50X3BhY2thZ2VzKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCLQmtC+0LvQuNGH0LXRgdGC0LLQviDQv9Cw0LrQtdGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0L7QsdGA0LDQsdC+0YLQsNC7INGB0LXRgNCy0LXRgDogXCIgKyBwcm9jZXNzZWQpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcItCU0L4g0LrQsNC60L7QuSDRh9Cw0YHRgtC+0YLRiyDQv9C+0L3QuNC20LXQvdCwINGH0LDRgdGC0L7RgtCwINC00LjRgdC60YDQtdGC0LjQt9Cw0YbQuNC4INC30LLRg9C60LA6IFwiICsgZm9ybWF0KTsqL1xyXG4gICAgfVxyXG5cclxuICAgIF9zdG9wUmVjb2duaXplKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9maW5pc2hBbmltYXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCX0LDQv9C40YHRjCDQt9Cy0YPQutCwINC/0YDQtdC60YDQsNGJ0LXQvdCwLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfYW5hbGlzZVNwZWVjaCh0ZXh0LCBkb25lLCBtZXJnZSwgd29yZHMsIGJpb21ldHJ5KSB7XHJcbiAgICAgICAgaWYgKGRvbmUgJiYgdGV4dCAhPT0gJycpe1xyXG4gICAgICAgICAgICB0aGlzLl9hbmFsaXNlVGV4dCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihiaW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qY29uc29sZS5sb2coXCLQoNCw0YHQv9C+0LfQvdCw0L3QvdGL0Lkg0YLQtdC60YHRgjogXCIgKyB0ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCv0LLQu9GP0LXRgtGB0Y8g0LvQuCDRgNC10LfRg9C70YzRgtCw0YIg0YTQuNC90LDQu9GM0L3Ri9C8OlwiICsgZG9uZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQp9C40YHQu9C+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQt9Cw0L/RgNC+0YHQvtCyLCDQv9C+INC60L7RgtC+0YDRi9C8INCy0YvQtNCw0L0g0L7RgtCy0LXRgiDQvtGCINGB0LXRgNCy0LXRgNCwOiBcIiArIG1lcmdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCf0L7QtNGA0L7QsdC90LDRjyDQuNC90YTQvtGA0LzQsNC40Y8g0L4g0YDQsNGB0L/QvtC30L3QsNC90L3Ri9GFINGE0YDQsNCz0LzQtdGC0LDRhTogXCIgKyB3b3Jkcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYmlvbWV0cnkpOyovXHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lcyA9IFtcclxuICAgICAgICAgICAge3RyYW5zZm9ybTogJ3NjYWxlKDEpJywgb2Zmc2V0OiAwLCBvcGFjaXR5OiAxfSxcclxuICAgICAgICAgICAge3RyYW5zZm9ybTogJ3NjYWxlKDEuMDUpJywgb3BhY2l0eTogLjgsIG9mZnNldDogLjMzMzMzM30sXHJcbiAgICAgICAgICAgIHt0cmFuc2Zvcm06ICdzY2FsZSgxLjA2KScsIG9wYWNpdHk6IC43LCBvZmZzZXQ6IC42NjY2Njd9LFxyXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiAnc2NhbGUoMS4wNyknLCBvcGFjaXR5OiAuOCwgb2Zmc2V0OiAxfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWluZ3MgPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhbHRlcm5hdGUnLFxyXG4gICAgICAgICAgICBmaWxsOiAnZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzcGVlY2gtZWxlbWVudF9hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkFuaW1hdGlvbiA9IHRoaXMuYnV0dG9uLmFuaW1hdGUoZnJhbWVzLCB0aW1pbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZmluaXNoQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NwZWVjaC1lbGVtZW50X2FjdGl2ZScpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5idXR0b25BbmltYXRpb24gIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBfYW5hbGlzZVRleHQodGV4dCl7XHJcbiAgICAgICAgbGV0IHN0ZXBPYmogPSBuZXcgU3RlcE9iamVjdCgpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgUkVTVUxUPSR7dGV4dH1gKTtcclxuICAgICAgICBsZXQgdGV4dFdPU3BhY2VzID0gdGV4dC5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcItCg0KPQmtCQPVwiK3RoaXMuX3ByZWZpeEZ1bmN0aW9uKFwi0YPQtNCw0YDRgNGD0LrQvtC5XCIsIHRleHRXT1NwYWNlcykpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcItCd0J7Qk9CQPVwiK3RoaXMuX3ByZWZpeEZ1bmN0aW9uKFwi0YPQtNCw0YDQvdC+0LPQvtC5XCIsIHRleHRXT1NwYWNlcykpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcItCT0J7Qm9Ce0JLQkD1cIit0aGlzLl9wcmVmaXhGdW5jdGlvbihcItGD0LTQsNGA0LPQvtC70L7QstC+0LlcIiwgdGV4dFdPU3BhY2VzKSk7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi0JIg0JPQntCb0J7QktCjPVwiK3RoaXMuX3ByZWZpeEZ1bmN0aW9uKFwi0LLQs9C+0LvQvtCy0YNcIiwgdGV4dFdPU3BhY2VzKSk7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi0JIg0JPQntCb0J7QktCjPVwiK3RoaXMuX3ByZWZpeEZ1bmN0aW9uKFwi0LPQvtC70L7QstGDXCIsIHRleHRXT1NwYWNlcykpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcItCR0JvQntCaINCT0J7Qm9Ce0JLQoz1cIit0aGlzLl9wcmVmaXhGdW5jdGlvbihcItCx0LvQvtC60LPQvtC70L7QstGLXCIsIHRleHRXT1NwYWNlcykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfcHJlZml4RnVuY3Rpb24oc3ViLCBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzID0gc3ViICsgJ0AnICsgc3RyaW5nO1xyXG5cclxuICAgICAgICBsZXQgbWF4TGVuZ3RoID0gMDtcclxuICAgICAgICBjb25zdCBuID0gcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHByZWZpeEFyciA9IG5ldyBBcnJheShuKTtcclxuXHJcbiAgICAgICAgcHJlZml4QXJyWzBdID0gMDtcclxuICAgICAgICBpZihzWzBdID09PSBzWzFdKVxyXG4gICAgICAgICAgICBwcmVmaXhBcnJbMV0gPSAxO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGogPSBwcmVmaXhBcnJbaS0xXTtcclxuICAgICAgICAgICAgd2hpbGUoKGo+MCkgJiYgKHNbaV0gIT09IHNbal0pKXtcclxuICAgICAgICAgICAgICAgIGogPSBwcmVmaXhBcnJbai0xXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc1tpXSA9PT0gc1tqXSl7XHJcbiAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgICBpZihqID4gbWF4TGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSBqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmVmaXhBcnJbaV0gPSBqO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXhMZW5ndGg9XCIrbWF4TGVuZ3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Yi5sZW5ndGg9XCIrc3ViLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG1heExlbmd0aC9zdWIubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbGVtZW50cy9zcGVlY2gtY29udHJvbC9TcGVlY2hDb250cm9sLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBTaW5nbGVQbGF5ZXJTdHJhdGVneSBmcm9tIFwiLi9zdHJhdGVnaWVzL1NpbmdsZXBsYXllclwiO1xyXG5pbXBvcnQgTXVsdGlQbGF5ZXJTdHJhdGVneSBmcm9tIFwiLi9zdHJhdGVnaWVzL011bHRpcGxheWVyXCI7XHJcbmltcG9ydCBTdGVwT2JqZWN0IGZyb20gXCIuLi9vYmplY3QvU3RlcE9iamVjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIHN0b3JhZ2UsIHZpZXcsIHN0cmF0ZWd5TmFtZSkge1xyXG4gICAgICAgIC8v0LTQu9GPINC80YPQu9GM0YLQuNC/0LvQtdC10YDQsFxyXG4gICAgICAgIHRoaXMuX2dhbWVJZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gdmlldy5ub2RlO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMudmlldy5ub2RlLCB0aGlzLnN0b3JhZ2UsIHRoaXMpO1xyXG4gICAgICAgIC8v0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1INC+0LbQuNC00LDQvdC40Y9cclxuICAgICAgICB0aGlzLnNjZW5lLnNldFN0YXRlKHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNUQVRFV0FJVCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPVxyXG4gICAgICAgICAgICBzdHJhdGVneU5hbWUgPT09IHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNJTkdMRVBMQVlFUl9TVFJBVEVHWVxyXG4gICAgICAgICAgICAgICAgPyBuZXcgU2luZ2xlUGxheWVyU3RyYXRlZ3kodGhpcykgOiBuZXcgTXVsdGlQbGF5ZXJTdHJhdGVneSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyYXRlZ3kgaW5zdGFuY2VvZiBNdWx0aVBsYXllclN0cmF0ZWd5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTVBcIik7XHJcbiAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KCd3c3M6Ly9zZi1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hcGkvdXNlci9nYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQodC+0LXQtNC40L3QtdC90LjQtSDRg9GB0YLQsNC90L7QstC70LXQvdC+LlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFdlYlNvY2tldExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTcEdhbWVQcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J3QsNGH0LDRgtGMINC40LPRgNC+0LLQvtC5INC/0YDQvtGG0LXRgdGBIFNQXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0U3BHYW1lUHJvY2VzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1VzZXIoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJhdGVneS5jb25zdHJ1Y3Rvci5uYW1lID09PSBTaW5nbGVQbGF5ZXJTdHJhdGVneS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnNldFBsYXllcnModGhpcy5zdG9yYWdlLnVzZXIsIHtsb2dpbjogJ1NVUEVSIEJPVCcsIHJhdGluZzogOTk5OTk5OTl9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc2V0U3RhdGUodGhpcy5zdG9yYWdlLmdhbWVTdGF0ZXMuU1RBVEVHQU1FKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuc3RhcnRHYW1lTG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIuZ28odGhpcy5zdG9yYWdlLnVybHMuTE9HSU4sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCd0LDRh9Cw0YLRjCDQuNCz0YDQvtCy0L7QuSDQv9GA0L7RhtC10YHRgSBNUFxyXG4gICAgICovXHJcbiAgICBzdGFydE1wR2FtZVByb2Nlc3MobXBPcHBvbmVudExvZ2luKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tVc2VyKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyYXRlZ3kuY29uc3RydWN0b3IubmFtZSA9PT0gTXVsdGlQbGF5ZXJTdHJhdGVneS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnNldFBsYXllcnModGhpcy5zdG9yYWdlLnVzZXIsIHtsb2dpbjogbXBPcHBvbmVudExvZ2lufSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNldFN0YXRlKHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNUQVRFR0FNRSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnN0YXJ0R2FtZUxvb3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyVGltZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLmdvKHRoaXMuc3RvcmFnZS51cmxzLkxPR0lOLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQl9Cw0LLQtdGA0YjQuNGC0Ywg0LjQs9GA0L7QstC+0Lkg0L/RgNC+0YbQtdGB0YFcclxuICAgICAqL1xyXG4gICAgZmluaXNoKG15UmVzdWx0LCBvcHBvbmVudFJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc2V0UmVzdWx0RGF0YShteVJlc3VsdCwgb3Bwb25lbnRSZXN1bHQpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc2V0U3RhdGUodGhpcy5zdG9yYWdlLmdhbWVTdGF0ZXMuU1RBVEVSRVNVTFQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LjRgtGMIHVzZXIt0LAg0L3QsCDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjRj1xyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgY2hlY2tVc2VyKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudXNlci5sb2dpbiAhPT0gbnVsbDtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSBXZWJTb2NrZXQt0LBcclxuICAgICAqL1xyXG4gICAgaW5pdFdlYlNvY2tldExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKFwi0J/QvtC70YPRh9C10L3RiyDQtNCw0L3QvdGL0LVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndzTWVzc2FnZUFuYWx5emUoSlNPTi5wYXJzZShldmVudC5kYXRhKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoXCLQntGI0LjQsdC60LBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoXCLQodC+0LXQtNC40L3QtdC90LjQtSDQt9Cw0LrRgNGL0YLQvlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihldmVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JzQtdGC0L7QtCDQvtCx0YDQsNCx0L7RgtC60Lgg0LLRhdC+0LTRj9GJ0LjRhSDRgdC+0L7QsdGJ0LXQvdC40Lkg0L/QviB3c1xyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgd3NNZXNzYWdlQW5hbHl6ZShkYXRhKSB7XHJcbiAgICAgICAgaWYgKCdtZXNzYWdlJyBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDb25uZWN0Jzoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnV2FpdGluZyc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwdWxzZSc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCdrZXknIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZUlkID0gZGF0YS5rZXk7XHJcbiAgICAgICAgICAgIGxldCBvcHBvbmVudExvZ2luID0gKGRhdGEuZmlyc3QgPT09IHRoaXMuc3RvcmFnZS51c2VyLmxvZ2luKSA/IGRhdGEuc2Vjb25kIDogZGF0YS5maXJzdDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE1wR2FtZVByb2Nlc3Mob3Bwb25lbnRMb2dpbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRNcFRpbWVyKDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ2lkJyBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcFJlc3VsdEFuYWx5emUoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRNcFRpbWVyKDUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCX0LDQv9GD0YHRgtC40YLRjCDRgtCw0LnQvNC10YBcclxuICAgICAqL1xyXG4gICAgc3RhcnRNcFRpbWVyKGRlbGF5KSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lci5oaWRkZW4oKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnRpbWVyLmNhbmNlbCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe2lkOiB0aGlzLl9nYW1lSWR9KSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudGltZXIuc3RhcnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbmV3IFN0ZXBPYmplY3QoKTtcclxuICAgICAgICAgICAgICAgIHN0ZXAuaW5pdCgnbnVsbCcsICdudWxsJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kubXlTdGVwID0gc3RlcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuc2VuZFN0ZXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0LHRgNCw0LHQvtGC0LrQsCDRiNCw0LPQvtCyKNC00L7RgdGC0LDQtdC8INC00LXQudGB0YLQstC40Y8g0YjQsNCz0L7QsiDQuNC3INC+0LHRitC10LrRgtCwKVxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgc3RlcFJlc3VsdEFuYWx5emUoZGF0YSkge1xyXG4gICAgICAgIGxldCBteUFjdGlvbiA9IG5ldyBTdGVwT2JqZWN0KCk7XHJcbiAgICAgICAgbGV0IG9wcG9uZW50QWN0aW9uID0gbmV3IFN0ZXBPYmplY3QoKTtcclxuICAgICAgICBsZXQgbXlEYW1hZ2UgPSAwO1xyXG4gICAgICAgIGxldCBvcHBvbmVudERhbWFnZSA9IDA7XHJcbiAgICAgICAgbGV0IG15SGVhbHRoID0gMDtcclxuICAgICAgICBsZXQgb3Bwb25lbnRIZWFsdGggPSAwO1xyXG4gICAgICAgIGlmIChkYXRhLmZpcnN0LmxvZ2luID09PSB0aGlzLnN0b3JhZ2UudXNlci5sb2dpbikge1xyXG4gICAgICAgICAgICBteUFjdGlvbi5pbml0KGRhdGEuZmlyc3QubWV0aG9kLCBkYXRhLmZpcnN0LnRhcmdldCwgZGF0YS5maXJzdC5ibG9jayk7XHJcbiAgICAgICAgICAgIG9wcG9uZW50QWN0aW9uLmluaXQoZGF0YS5zZWNvbmQubWV0aG9kLCBkYXRhLnNlY29uZC50YXJnZXQsIGRhdGEuc2Vjb25kLmJsb2NrKTtcclxuICAgICAgICAgICAgbXlEYW1hZ2UgPSBkYXRhLmZpcnN0LnRha2VuRGFtYWdlO1xyXG4gICAgICAgICAgICBvcHBvbmVudERhbWFnZSA9IGRhdGEuc2Vjb25kLnRha2VuRGFtYWdlO1xyXG4gICAgICAgICAgICBteUhlYWx0aCA9IGRhdGEuZmlyc3QuaHA7XHJcbiAgICAgICAgICAgIG9wcG9uZW50SGVhbHRoID0gZGF0YS5zZWNvbmQuaHA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXlBY3Rpb24uaW5pdChkYXRhLnNlY29uZC5tZXRob2QsIGRhdGEuc2Vjb25kLnRhcmdldCwgZGF0YS5zZWNvbmQuYmxvY2spO1xyXG4gICAgICAgICAgICBvcHBvbmVudEFjdGlvbi5pbml0KGRhdGEuZmlyc3QubWV0aG9kLCBkYXRhLmZpcnN0LnRhcmdldCwgZGF0YS5maXJzdC5ibG9jayk7XHJcbiAgICAgICAgICAgIG15RGFtYWdlID0gZGF0YS5zZWNvbmQudGFrZW5EYW1hZ2U7XHJcbiAgICAgICAgICAgIG9wcG9uZW50RGFtYWdlID0gZGF0YS5maXJzdC50YWtlbkRhbWFnZTtcclxuICAgICAgICAgICAgbXlIZWFsdGggPSBkYXRhLnNlY29uZC5ocDtcclxuICAgICAgICAgICAgb3Bwb25lbnRIZWFsdGggPSBkYXRhLmZpcnN0LmhwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0cmF0ZWd5LnN0ZXBBbmFseXplKG15QWN0aW9uLCBvcHBvbmVudEFjdGlvbiwgbXlEYW1hZ2UsIG9wcG9uZW50RGFtYWdlLCBteUhlYWx0aCwgb3Bwb25lbnRIZWFsdGgpO1xyXG4gICAgICAgIHRoaXMudmlldy5nYW1lQ29udHJvbHMuc2V0QnV0dG9uU3RlcFN0YXR1cyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCX0LDQutGA0YvRgtGMIHdzINGB0L7QtdC00LjQvdC10L3QuNC1XHJcbiAgICAgKi9cclxuICAgIGNsb3NlV2ViU29ja2V0KCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHRoaXMud3MuY2xvc2UoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9nYW1lL21vZHVsZXMvR2FtZU1hbmFnZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAyOS4wMy4yMDE3LlxyXG4gKi9cclxuLy8gaW1wb3J0IEI0VyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2pzL2I0dy5taW5cIjtcclxuXHJcbmltcG9ydCBHYW1lSW5mb1RvYXN0IGZyb20gXCIuLi8uLi8uLi9lbGVtZW50cy9nYW1lLWluZm8tdG9hc3QvR2FtZUluZm9Ub2FzdFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXJUYWJsZSBmcm9tIFwiLi4vLi4vLi4vZWxlbWVudHMvcHJvZ3Jlc3MtYmFyLXRhYmxlL3Byb2dyZXNzQmFyVGFibGVcIjtcclxuaW1wb3J0IEdhbWVSZXN1bHRUYWJsZSBmcm9tIFwiLi4vLi4vLi4vZWxlbWVudHMvZ2FtZS1yZXN1bHQtdGFibGUvR2FtZVJlc3VsdFRhYmxlXCI7XHJcbmltcG9ydCBHYW1lVGltZXIgZnJvbSBcIi4uLy4uLy4uL2VsZW1lbnRzL2dhbWUtdGltZXIvR2FtZVRpbWVyXCI7XHJcblxyXG5pbXBvcnQgXCIuL2dhbWUtc2NlbmUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHN0b3JhZ2UsIG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLkhEaW0gPSAzNDtcclxuICAgICAgICB0aGlzLldEaW0gPSA1MDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwID0gYjR3LnJlcXVpcmUoXCJhcHBcIik7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gYjR3LnJlcXVpcmUoXCJkYXRhXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90L7QstC40YLRjCDQstGB0LUg0YDQsNC30LzQtdGA0Ysg0Y3QutGA0LDQvdCwXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2V0U2l6ZSgpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5maWVsZFNpemUgPSAoaGVpZ2h0IC8gdGhpcy5IRGltKSB8IDA7XHJcbiAgICAgICAgdGhpcy5XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBXSURUSCA9ICR7dGhpcy5XSURUSH1gKTtcclxuICAgICAgICB0aGlzLkhFR0hUID0gdGhpcy5maWVsZFNpemUgLyAzICogMiAqIHRoaXMuSERpbTtcclxuICAgIH1cclxuXHJcbiAgICBfb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZFNpemUgPSAoaGVpZ2h0IC8gdGhpcy5IRGltKSB8IDA7XHJcbiAgICAgICAgdGhpcy5XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLkhFR0hUID0gdGhpcy5maWVsZFNpemUgLyAzICogMiAqIHRoaXMuSERpbTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5IRUdIVH1weGA7XHJcblxyXG4gICAgICAgLyogY29uc29sZS5sb2coYFJFU0laRSBXSURUSCA9ICR7dGhpcy5XSURUSH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUkVTSVpFIEhFSUdIVCA9ICR7dGhpcy5IRUdIVH1gKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10LlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90L7QstC40YLRjCDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICAgICAqIEBwYXJhbSBzdGF0ZSAtINGB0L7RgdGC0L7Rj9C90LjQtVxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwLCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LLRhdC+0LTQvdC+0LPQviDRgdC+0LHRi9GC0LjRj1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlbmRlclN0YXRlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNUQVRFV0FJVDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyV2FpdFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNUQVRFR0FNRToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLlNUQVRFUkVTVUxUOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJSZXN1bHRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFN0eWxlT25DYW52YXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0LbQtNGD0YnQtdCz0L4g0YDQtdC20LjQvNCwXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyV2FpdFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJUYWJsZSA9IG5ldyBQcm9ncmVzc0JhclRhYmxlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhclRhYmxlLnJlbmRlcih7XHJcbiAgICAgICAgICAgIGNvbmY6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VhcmNoIGZvciBhbiBvcHBvbmVudC4uLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwINC40LPRgNC+0LLQvtCz0L4g0YDQtdC20LjQvNCwXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyR2FtZVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJUYWJsZS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnZpZXcucmVuZGVyQ29udHJvbEVsZW1lbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlckluZm9CYXJzKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJDb250YWluZXIoKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZS1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25XaW5kb3dSZXNpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2FudmFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIF9yZW5kZXJDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuaW5pdCh7XHJcbiAgICAgICAgICAgIGNhbnZhc19jb250YWluZXJfaWQ6IFwiZ2FtZS1jb250YWluZXJcIixcclxuICAgICAgICAgICAgYXV0b3Jlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGh5c2ljc19lbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFN0eWxlT25DYW52YXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sb2FkKFwiL3NyYy90aHJlZS1tb2RlbHMvYW5pbWF0aW9uX2FsbC5qc29uXCIsICgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDRgtCw0LnQvNC10YDQsFxyXG4gICAgICovXHJcbiAgICByZW5kZXJUaW1lcigpe1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgR2FtZVRpbWVyKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lci5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQv9C+0YHQu9C10LjQs9GA0L7QstC+0LPQviDRgNC10LbQuNC80LAgKNGA0LXQt9GD0LvRjNGC0LDRgtGLLCDQuNGC0L7Qs9C4KVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlbmRlclJlc3VsdFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJWaWV3KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFRhYmxlID0gbmV3IEdhbWVSZXN1bHRUYWJsZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFRhYmxlLnJlbmRlcih0aGlzLnJlc3VsdERhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVJlc3VsdFRhYmxlLmluaXRMaXN0ZW5lcigoKT0+e1xyXG4gICAgICAgICAgIHRoaXMubWFuYWdlci5yb3V0ZXIuZ28odGhpcy5zdG9yYWdlLnVybHMuUFJPRklMRSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JzQtdGC0L7QtCDQvtGC0YfQuNGB0YLQutC4INCy0YzRjtGI0LrQuFxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXcoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0Y3Qu9C10LzQtdC90YLQvtCyINC30LTQvtGA0L7QstGM0Y9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9yZW5kZXJJbmZvQmFycygpIHtcclxuICAgICAgICB0aGlzLm15SW5mbyA9IG5ldyBHYW1lSW5mb1RvYXN0KHRoaXMubm9kZSwgdGhpcy5wbGF5ZXJzLm1lLmhlYWx0aCwgdGhpcy5wbGF5ZXJzLm1lLmxvZ2luLCAnbGVmdCcpO1xyXG4gICAgICAgIHRoaXMubXlJbmZvLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnRJbmZvID0gbmV3IEdhbWVJbmZvVG9hc3QodGhpcy5ub2RlLCB0aGlzLnBsYXllcnMub3Bwb25lbnQuaGVhbHRoLCB0aGlzLnBsYXllcnMub3Bwb25lbnQubG9naW4sICdyaWdodCcpO1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnRJbmZvLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdC+0LLQutCwINC00LDQvdC90YvRhSDQuNCz0YDQvtC60L7QslxyXG4gICAgICogQHBhcmFtIG1lXHJcbiAgICAgKiBAcGFyYW0gb3Bwb25lbnRcclxuICAgICAqL1xyXG4gICAgc2V0UGxheWVycyhtZSwgb3Bwb25lbnQpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSB7bWU6IG1lLCBvcHBvbmVudDogb3Bwb25lbnR9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INC/0L4g0YDQtdC30YPQu9GM0YLQsNGC0LDQvCDQsdC+0Y9cclxuICAgICAqIEBwYXJhbSBtZVxyXG4gICAgICogQHBhcmFtIG9wcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHNldFJlc3VsdERhdGEobWUsIG9wcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHREYXRhID0ge1xyXG4gICAgICAgICAgICBtZTogbWUsXHJcbiAgICAgICAgICAgIG9wcG9uZW50OiBvcHBvbmVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9nYW1lL21vZHVsZXMvR2FtZVNjZW5lLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDQuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgSXppVG9hc3QgZnJvbSBcIml6aXRvYXN0XCI7XHJcbmltcG9ydCBTdGVwT2JqZWN0IGZyb20gXCIuLi8uLi9vYmplY3QvU3RlcE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlQbGF5ZXJTdHJhdGVneSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcclxuICAgICAgICB0aGlzLm15U3RlcCA9IG5ldyBTdGVwT2JqZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNCz0YDQvtCy0L7QuSDRhtC40LrQu1xyXG4gICAgICovXHJcbiAgICBnYW1lTG9vcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICAvL1RPRE8gY3JlYXRlIHJhdGluZyBhbmFseXNlclxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaEdhbWVMb29wKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5maW5pc2goe1xyXG4gICAgICAgICAgICAgICAgd2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5tZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB3aW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMub3Bwb25lbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wcG9uZW50LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoR2FtZUxvb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmZpbmlzaCh7XHJcbiAgICAgICAgICAgICAgICB3aW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMubWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgd2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5vcHBvbmVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQndCw0YfQsNGC0Ywg0LjQs9GA0LLQvtC5INGG0LjQutC7XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRldmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nYW1lTG9vcCgpLCAxMDApO1xyXG5cclxuICAgICAgICB0aGlzLmluaXREb1N0ZXBMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFjdGlvbkxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0YLRjCDRgdC70YPRiNCw0YLQtdC70LXQuSDQvdCwINC60L3QvtC/0LrQuCBcItCy0YvQsdC+0YAg0LTQtdC50YHRgtCy0LjRj1wiXHJcbiAgICAgKi9cclxuICAgIGluaXRBY3Rpb25MaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuaW5pdEFjdGlvbkxpc3RlbmVyKChhY3Rpb25PYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbk9iaiAhPT0gbnVsbCAmJiB0eXBlb2YgYWN0aW9uT2JqICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVN0ZXAgPSBhY3Rpb25PYmo7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuYnV0dG9uQWRkQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtY29udHJvbHNfX2FjdGlvbi1idXR0b25fZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sc19fYWN0aW9uLWJ1dHRvbl9maWxsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0blRleHQgPSBgaGl0IGJ5ICR7YWN0aW9uT2JqLmhpdC5tZXRob2R9IHRvICR7YWN0aW9uT2JqLmhpdC50YXJnZXR9IGFuZCBibG9jayAke2FjdGlvbk9iai5ibG9jay5tZXRob2R9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uaW5uZXJUZXh0ID0gYnRuVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10Lkg0L3QsCDQutC90L7Qv9C60YMgXCLRgdC00LXQu9Cw0YLRjCDRiNCw0LNcIlxyXG4gICAgICovXHJcbiAgICBpbml0RG9TdGVwTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnZpZXcuZ2FtZUNvbnRyb2xzLmluaXREb1N0ZXBMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTXlTdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFN0ZXAoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEl6aVRvYXN0LmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbGwgYWN0aW9uIGJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wQ2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQv9GA0LDQstC40YLRjCDRgdC00LXQu9Cw0L3QvdGL0Lkg0YjQsNCzXHJcbiAgICAgKi9cclxuICAgIHNlbmRTdGVwKCl7XHJcbiAgICAgICAgbGV0IG15QWN0aW9ucyA9IHRoaXMubXlTdGVwO1xyXG4gICAgICAgIGxldCBzZW5kID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG15QWN0aW9ucy5oaXQubWV0aG9kLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IG15QWN0aW9ucy5oaXQudGFyZ2V0LFxyXG4gICAgICAgICAgICBibG9jazogbXlBY3Rpb25zLmJsb2NrLm1ldGhvZCxcclxuICAgICAgICAgICAgaHA6IHRoaXMubWUuaGVhbHRoLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5tYW5hZ2VyLl9nYW1lSWQsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzdGVwJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cChcItCe0YLQv9GA0LDQstC70LXQvdC90YvQtSDQtNCw0L3QvdGL0LU6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSlNPTi5zdHJpbmdpZnkoc2VuZCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHNlbmQpKTtcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnZpZXcuZ2FtZUNvbnRyb2xzLnNldEJ1dHRvblN0ZXBTdGF0dXMoZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntCx0YDQsNCx0L7RgtC60LAg0YjQsNCz0L7Qsiwg0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyINGI0LDQs9CwXHJcbiAgICAgKiBAcGFyYW0gbXlBY3Rpb25cclxuICAgICAqIEBwYXJhbSBvcHBvbmVudEFjdGlvblxyXG4gICAgICogQHBhcmFtIG15RGFtYWdlXHJcbiAgICAgKiBAcGFyYW0gb3Bwb25lbnREYW1hZ2VcclxuICAgICAqIEBwYXJhbSBteUhwXHJcbiAgICAgKiBAcGFyYW0gb3Bwb25lbnRIcFxyXG4gICAgICovXHJcbiAgICBzdGVwQW5hbHl6ZShteUFjdGlvbiwgb3Bwb25lbnRBY3Rpb24sIG15RGFtYWdlLCBvcHBvbmVudERhbWFnZSwgbXlIcCwgb3Bwb25lbnRIcCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJNeUFjdGlvbnNBcnJheSgpO1xyXG5cclxuICAgICAgICBpZiAobXlEYW1hZ2UgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nU3RlcChgSSBtaXNzZWQgaGl0IGJ5ICR7b3Bwb25lbnRBY3Rpb24uaGl0Lm1ldGhvZH0gdG8gJHtvcHBvbmVudEFjdGlvbi5oaXQudGFyZ2V0fWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ1N0ZXAoYEV2ZXJ5dGhpbmcgb2tleSB3aXRoIE1FIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wcG9uZW50RGFtYWdlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ1N0ZXAoYE9wcG9uZW50IG1pc3NlZCBoaXQgYnkgJHtteUFjdGlvbi5oaXQubWV0aG9kfSB0byAke215QWN0aW9uLmhpdC50YXJnZXR9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nU3RlcChgRXZlcnl0aGluZyBva2V5IHdpdGggT1BQT05FTlQhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVNeUhlYWx0aChteUhwKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVPcHBvbmVudEhlYWx0aChvcHBvbmVudEhwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQuSDQvNC10YLQvtC0LCDQt9Cw0LzQtdC90Y/QtdGCINCw0L3QuNC80LDRhtC40Y5cclxuICAgICAqIEBwYXJhbSB0ZXh0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfbG9nU3RlcCh0ZXh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgSXppVG9hc3QuaW5mbyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0JyxcclxuICAgICAgICAgICAgdGltZW91dDogNzAwMCxcclxuICAgICAgICAgICAgaWNvbjogJydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdC90L7QstC40YLRjCDQt9C00L7RgNC+0LLRjNC1INC/0YDQvtGC0LjQstC90LjQutCwXHJcbiAgICAgKiBAcGFyYW0gaHAgLSDQvdC+0LLRi9C5INGD0YDQvtCy0LXQvdGMINC30LTQvtGA0L7QstGM0Y9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVPcHBvbmVudEhlYWx0aChocCkge1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnQuaGVhbHRoID0gaHA7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnNjZW5lLm9wcG9uZW50SW5mby51cGRhdGVIZWFsdGgoaHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdC90L7QstC40YLRjCDQvNC+0LUg0LfQtNC+0YDQvtCy0YzQtVxyXG4gICAgICogQHBhcmFtIGhwIC0g0L3QvtCy0YvQuSDRg9GA0L7QstC10L3RjCDQt9C00L7RgNC+0LLRjNGPXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfdXBkYXRlTXlIZWFsdGgoaHApIHtcclxuICAgICAgICB0aGlzLm1lLmhlYWx0aCA9IGhwO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5zY2VuZS5teUluZm8udXBkYXRlSGVhbHRoKGhwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC40YLRjCDQvdCwINC/0L7Qu9C90YPRjiDQt9Cw0L/QvtC70L3QtdC90L7RgdGC0Ywg0YjQsNCz0LBcclxuICAgICAqICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSAtINCy0YHQtSDQt9Cw0L/QvtC70L3QtdC90L5cclxuICAgICAqL1xyXG4gICAgY2hlY2tNeVN0ZXAoKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5teVN0ZXAgPT09IG51bGwgfHwgdHlwZW9mIHRoaXMubXlTdGVwID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgIHx8IHRoaXMubXlTdGVwLmhpdC5tZXRob2QgPT09IG51bGwgfHwgdGhpcy5teVN0ZXAuaGl0LnRhcmdldCA9PT0gbnVsbFxyXG4gICAgICAgIHx8IHRoaXMubXlTdGVwLmJsb2NrLm1ldGhvZCA9PT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YfQuNGB0LjRgtGMINGI0LDQs1xyXG4gICAgICovXHJcbiAgICBjbGVhck15QWN0aW9uc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubXlTdGVwID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuYnV0dG9uQWRkQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtY29udHJvbHNfX2FjdGlvbi1idXR0b25fZmlsbCcpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sc19fYWN0aW9uLWJ1dHRvbl9lbXB0eScpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uaW5uZXJUZXh0ID0gJ2FkZCBhY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNCy0LXRgNGI0LjRgtGMINC40LPRgNC+0LLQvtC5INGG0LjQutC7LCDQvtGC0YfQuNGC0YHQutCwINGB0LvRg9GI0LDRgtC10LvQtdC5XHJcbiAgICAgKi9cclxuICAgIGZpbmlzaEdhbWVMb29wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRldmFsKTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuZGVsZXRlRG9TdGVwTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuZGVsZXRlQWN0aW9uTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINC40LPRgNC+0LrQvtCyXHJcbiAgICAgKiBAcGFyYW0gbWVcclxuICAgICAqIEBwYXJhbSBvcHBvbmVudFxyXG4gICAgICovXHJcbiAgICBzZXRQbGF5ZXJzKG1lLCBvcHBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubWUgPSBtZTtcclxuICAgICAgICB0aGlzLm1lLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnQ7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudC5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnNjZW5lLnNldFBsYXllcnMobWUsIG9wcG9uZW50KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9nYW1lL21vZHVsZXMvc3RyYXRlZ2llcy9NdWx0aXBsYXllci5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjA0LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgSXppVG9hc3QgZnJvbSBcIml6aXRvYXN0XCI7XHJcbmltcG9ydCBTdGVwT2JqZWN0IGZyb20gXCIuLi8uLi9vYmplY3QvU3RlcE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlUGxheWVyU3RyYXRlZ3kge1xyXG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcblxyXG4gICAgICAgIHRoaXMubXlTdGVwID0gbmV3IFN0ZXBPYmplY3QoKTtcclxuICAgICAgICB0aGlzLm9wcG9uZW50U3RlcCA9IG5ldyBTdGVwT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuQkFTRV9EQU1BR0UgPSA0MDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0LPRgNC+0LLQvtC5INGG0LjQutC7XHJcbiAgICAgKi9cclxuICAgIGdhbWVMb29wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoR2FtZUxvb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmZpbmlzaCh7XHJcbiAgICAgICAgICAgICAgICB3aW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLm1lXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5vcHBvbmVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Bwb25lbnQuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hHYW1lTG9vcCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuZmluaXNoKHtcclxuICAgICAgICAgICAgICAgIHdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5tZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB3aW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLm9wcG9uZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCd0LDRh9Cw0YLRjCDQuNCz0YDQvtCy0L7QuSDRhtC40LrQu1xyXG4gICAgICovXHJcbiAgICBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSwgMTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RG9TdGVwTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRBY3Rpb25MaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9C10Lkg0L3QsCDQutC90L7Qv9C60LggXCLQstGL0LHQvtGAINC00LXQudGB0YLQstC40Y9cIlxyXG4gICAgICovXHJcbiAgICBpbml0QWN0aW9uTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnZpZXcuZ2FtZUNvbnRyb2xzLmluaXRBY3Rpb25MaXN0ZW5lcigoYWN0aW9uT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25PYmogIT09IG51bGwgJiYgdHlwZW9mIGFjdGlvbk9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlTdGVwID0gYWN0aW9uT2JqO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnZpZXcuZ2FtZUNvbnRyb2xzLmJ1dHRvbkFkZEFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWNvbnRyb2xzX19hY3Rpb24tYnV0dG9uX2VtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuYnV0dG9uQWRkQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY29udHJvbHNfX2FjdGlvbi1idXR0b25fZmlsbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBidG5UZXh0ID0gYGhpdCBieSAke2FjdGlvbk9iai5oaXQubWV0aG9kfSB0byAke2FjdGlvbk9iai5oaXQudGFyZ2V0fSBhbmQgYmxvY2sgJHthY3Rpb25PYmouYmxvY2subWV0aG9kfWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuYnV0dG9uQWRkQWN0aW9uLmlubmVyVGV4dCA9IGJ0blRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5INC90LAg0LrQvdC+0L/QutGDIFwi0YHQtNC10LvQsNGC0Ywg0YjQsNCzXCJcclxuICAgICAqL1xyXG4gICAgaW5pdERvU3RlcExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5pbml0RG9TdGVwTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMub3Bwb25lbnQuaGVhbHRoLT0xMDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTXlBY3Rpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTG9naWMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTXlBY3Rpb25zQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgSXppVG9hc3QuZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRmlsbCBhY3Rpb24gYnV0dG9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3BDZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQs9GA0L7QstCw0Y8g0LvQvtCz0LjQutCwXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBnYW1lTG9naWMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBteUFjdGlvbnMgPSB0aGlzLm15U3RlcDtcclxuICAgICAgICAgICAgbGV0IG9wcG9uZW50QWN0aW9ucyA9IHRoaXMuY3JlYXRlU3RlcEZvck9wcG9uZW50KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0ZXBBbmFseXNlcihteUFjdGlvbnMsIG9wcG9uZW50QWN0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntCx0YDQsNCx0L7RgtC60LAg0YjQsNCz0L7Qsiwg0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyINGI0LDQs9CwXHJcbiAgICAgKiBAcGFyYW0gbXlBY3Rpb25cclxuICAgICAqIEBwYXJhbSBvcHBvbmVudEFjdGlvblxyXG4gICAgICovXHJcbiAgICBzdGVwQW5hbHlzZXIobXlBY3Rpb24sIG9wcG9uZW50QWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG15RGFtYWdlID0gdGhpcy5nZXREYW1hZ2UoJ215JywgbXlBY3Rpb24sIG9wcG9uZW50QWN0aW9uKTtcclxuICAgICAgICBsZXQgb3Bwb25lbnREYW1hZ2UgPSB0aGlzLmdldERhbWFnZSgnb3Bwb25lbnQnLCBteUFjdGlvbiwgb3Bwb25lbnRBY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAobXlEYW1hZ2UgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dJdChgSSBtaXNzZWQgaGl0IGJ5ICR7b3Bwb25lbnRBY3Rpb24uaGl0Lm1ldGhvZH0gdG8gJHtvcHBvbmVudEFjdGlvbi5oaXQudGFyZ2V0fWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nSXQoYEV2ZXJ5dGhpbmcgb2tleSB3aXRoIE1FIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wcG9uZW50RGFtYWdlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nSXQoYE9wcG9uZW50IG1pc3NlZCBoaXQgYnkgJHtteUFjdGlvbi5oaXQubWV0aG9kfSB0byAke215QWN0aW9uLmhpdC50YXJnZXR9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dJdChgRXZlcnl0aGluZyBva2V5IHdpdGggT1BQT05FTlQhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVNeUhlYWx0aCgtbXlEYW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wcG9uZW50SGVhbHRoKC1vcHBvbmVudERhbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LvRg9GH0LjRgtGMINCy0LXRgNC+0Y/RgtC90L7RgdGC0Ywg0LzQtdGC0L7QtNCwXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uVHlwZSAtINCy0LjQtCDQtNC10LnRgdGC0LLQuNGPXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIC0g0LzQtdGC0L7QtCDRg9C00LDRgNCwfHzQt9Cw0YnQuNGC0YtcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvYmFiaWxpdHkoYWN0aW9uVHlwZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjY1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXJtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjk1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVnJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib2R5Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktGL0LTQsNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCINC00LXQudGB0YLQstC40Y8g0L/QviDQstC10YDQvtGP0YLQvdC+0YHRgtC4ICjQv9GA0L7RiNC70L4g0LvQuCDQtNC10LnRgdGC0LLQuNC1KVxyXG4gICAgICogQHBhcmFtIHAgLSDQstC10YDQvtGP0YLQvdC+0YHRgtGMXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBjaGVja1Byb2JhYmlsaXR5KHApIHtcclxuICAgICAgICBsZXQgY2hlY2tQID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmFuZG9tPSR7Y2hlY2tQfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjaGVjayBwID0gJHtwICogMTAwID49IGNoZWNrUH1gKTtcclxuICAgICAgICByZXR1cm4gcCAqIDEwMCA+PSBjaGVja1A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHdob1xyXG4gICAgICogQHBhcmFtIG15QWN0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3Bwb25lbnRBY3Rpb25cclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0RGFtYWdlKHdobywgbXlBY3Rpb24sIG9wcG9uZW50QWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGFjdGlvbkZvckF0dGFja2luZyA9IHt9O1xyXG4gICAgICAgIGxldCBhY3Rpb25Gb3JEZWZlbnNpbmcgPSB7fTtcclxuICAgICAgICBpZiAod2hvID09PSAnbXknKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbkZvckRlZmVuc2luZyA9IG15QWN0aW9uO1xyXG4gICAgICAgICAgICBhY3Rpb25Gb3JBdHRhY2tpbmcgPSBvcHBvbmVudEFjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb25Gb3JEZWZlbnNpbmcgPSBvcHBvbmVudEFjdGlvbjtcclxuICAgICAgICAgICAgYWN0aW9uRm9yQXR0YWNraW5nID0gbXlBY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGl0UCA9IDA7XHJcbiAgICAgICAgbGV0IGJsb2NrUCA9IDA7XHJcbiAgICAgICAgbGV0IGNoZWNrUCA9IDA7XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XHJcbiAgICAgICAgaWYgKGFjdGlvbkZvckRlZmVuc2luZy5ibG9jay5tZXRob2QgPT09IGFjdGlvbkZvckF0dGFja2luZy5oaXQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGhpdFAgPSB0aGlzLmdldFByb2JhYmlsaXR5KCdoaXQnLCBhY3Rpb25Gb3JBdHRhY2tpbmcuaGl0Lm1ldGhvZCk7XHJcbiAgICAgICAgICAgIGJsb2NrUCA9IHRoaXMuZ2V0UHJvYmFiaWxpdHkoJ2Jsb2NrJywgYWN0aW9uRm9yRGVmZW5zaW5nLmJsb2NrLm1ldGhvZCk7XHJcbiAgICAgICAgICAgIGNoZWNrUCA9IHRoaXMuY2hlY2tQcm9iYWJpbGl0eShoaXRQICogYmxvY2tQKTtcclxuICAgICAgICAgICAgZGFtYWdlID0gY2hlY2tQID8gKDEgLSBoaXRQICogYmxvY2tQKSAqIHRoaXMuQkFTRV9EQU1BR0UgOiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpdFAgPSB0aGlzLmdldFByb2JhYmlsaXR5KCdoaXQnLCBhY3Rpb25Gb3JBdHRhY2tpbmcuaGl0Lm1ldGhvZCk7XHJcbiAgICAgICAgICAgIGNoZWNrUCA9IHRoaXMuY2hlY2tQcm9iYWJpbGl0eShoaXRQKTtcclxuICAgICAgICAgICAgZGFtYWdlID0gY2hlY2tQID8gKDEgLSBoaXRQLzIpICogdGhpcy5CQVNFX0RBTUFHRSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgaGl0UD0ke2hpdFB9IGJsb2NrUD0ke2Jsb2NrUH0gY2hlY2tQPSR7Y2hlY2tQfSBkYW1hZ2U9JHtNYXRoLnJvdW5kKGRhbWFnZSl9YCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZGFtYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQuSDQvNC10YLQvtC0LCDQt9Cw0LzQtdC90Y/QtdGCINCw0L3QuNC80LDRhtC40Y5cclxuICAgICAqIEBwYXJhbSB0ZXh0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBsb2dJdCh0ZXh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgSXppVG9hc3QuaW5mbyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0JyxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgIGljb246ICcnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0LHQvdC+0LLQuNGC0Ywg0LfQtNC+0YDQvtCy0YzQtSDQv9GA0L7RgtC40LLQvdC40LrQsFxyXG4gICAgICogQHBhcmFtIGRpdiAtINGA0LDQt9C90LjRhtCwINCyINC30LTQvtGA0L7QstGM0LVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVPcHBvbmVudEhlYWx0aChkaXYpIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LmhlYWx0aCArPSBkaXY7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnNjZW5lLm9wcG9uZW50SW5mby51cGRhdGVIZWFsdGgodGhpcy5vcHBvbmVudC5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdC90L7QstC40YLRjCDQvNC+0LUg0LfQtNC+0LLRgNC+0YzQtVxyXG4gICAgICogQHBhcmFtIGRpdiAtINGA0LDQt9C90LjRhtCwINCyINC30LTQvtGA0L7QstGM0LVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVNeUhlYWx0aChkaXYpIHtcclxuICAgICAgICB0aGlzLm1lLmhlYWx0aCArPSBkaXY7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnNjZW5lLm15SW5mby51cGRhdGVIZWFsdGgodGhpcy5tZS5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LjRgtGMINC90LAg0L/QvtC70L3Rg9GOINC30LDQv9C+0LvQvdC10L3QvtGB0YLRjCDRiNCw0LPQsFxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSAtINCy0YHQtSDQt9Cw0L/QvtC70L3QtdC90L5cclxuICAgICAqL1xyXG4gICAgY2hlY2tNeUFjdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15U3RlcCk7XHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5teVN0ZXAgPT09IG51bGwgfHwgdHlwZW9mIHRoaXMubXlTdGVwID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgIHx8IHRoaXMubXlTdGVwLmhpdC5tZXRob2QgPT09IG51bGwgfHwgdGhpcy5teVN0ZXAuaGl0LnRhcmdldCA9PT0gbnVsbFxyXG4gICAgICAgIHx8IHRoaXMubXlTdGVwLmJsb2NrLm1ldGhvZCA9PT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YfQuNGB0LjRgtGMINGI0LDQs1xyXG4gICAgICovXHJcbiAgICBjbGVhck15QWN0aW9uc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubXlTdGVwID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuYnV0dG9uQWRkQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtY29udHJvbHNfX2FjdGlvbi1idXR0b25fZmlsbCcpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sc19fYWN0aW9uLWJ1dHRvbl9lbXB0eScpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci52aWV3LmdhbWVDb250cm9scy5idXR0b25BZGRBY3Rpb24uaW5uZXJUZXh0ID0gJ2FkZCBhY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNCy0LXRgNGI0LjRgtGMINC40LPRgNC+0LLQvtC5INGG0LjQutC7LCDQvtGC0YfQuNGC0YHQutCwINGB0LvRg9GI0LDRgtC10LvQtdC5XHJcbiAgICAgKi9cclxuICAgIGZpbmlzaEdhbWVMb29wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRldmFsKTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuZGVsZXRlRG9TdGVwTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIudmlldy5nYW1lQ29udHJvbHMuZGVsZXRlQWN0aW9uTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINC40LPRgNC+0LrQvtCyXHJcbiAgICAgKiBAcGFyYW0gbWVcclxuICAgICAqIEBwYXJhbSBvcHBvbmVudFxyXG4gICAgICovXHJcbiAgICBzZXRQbGF5ZXJzKG1lLCBvcHBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubWUgPSBtZTtcclxuICAgICAgICB0aGlzLm1lLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnQ7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudC5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnNjZW5lLnNldFBsYXllcnMobWUsIG9wcG9uZW50KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0YjQsNCz0LAg0LTQu9GPINCx0L7RgtCwXHJcbiAgICAgKiBAcmV0dXJuIHtTdGVwT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTdGVwRm9yT3Bwb25lbnQoKSB7XHJcbiAgICAgICAgbGV0IG1ldGhvZHMgPSBbJ2hlYWQnLCAnYXJtJywgJ2xlZyddO1xyXG4gICAgICAgIGxldCB0YXJnZXRzID0gWydoZWFkJywgJ2JvZHknXTtcclxuXHJcblxyXG4gICAgICAgIGxldCBoaXRNZXRob2QgPSBtZXRob2RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1ldGhvZHMubGVuZ3RoKV07XHJcbiAgICAgICAgbGV0IGhpdFRhcmdldCA9IHRhcmdldHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0cy5sZW5ndGgpXTtcclxuICAgICAgICBsZXQgYmxvY2tNZXRob2QgPSB0YXJnZXRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldHMubGVuZ3RoKV07XHJcblxyXG4gICAgICAgIGxldCBzdGVwID0gbmV3IFN0ZXBPYmplY3QoKTtcclxuICAgICAgICBzdGVwLmluaXQoaGl0TWV0aG9kLCBoaXRUYXJnZXQsIGJsb2NrTWV0aG9kKTtcclxuICAgICAgICByZXR1cm4gc3RlcDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9nYW1lL21vZHVsZXMvc3RyYXRlZ2llcy9TaW5nbGVwbGF5ZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNy4wNC4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5TSU5HTEVQTEFZRVJfU1RSQVRFR1k9J1NJTkdMRVBMQVlFUlNUUkFURUdZJztcclxuICAgICAgICB0aGlzLk1VTFRJUExBWUVSX1NUUkFURUdZPSdNVUxUSVBMQVlFUlNUUkFURUdZJztcclxuXHJcbiAgICAgICAgdGhpcy5TVEFURVdBSVQgPSAnU1RBVEVXQUlUJztcclxuICAgICAgICB0aGlzLlNUQVRFR0FNRSA9ICdTVEFURUdBTUUnO1xyXG4gICAgICAgIHRoaXMuU1RBVEVSRVNVTFQgPSAnU1RBVEVSRVNVTFQnO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2dhbWUvb2JqZWN0L0dhbWVTdGF0ZXMuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW1vbmQge1xyXG4gICAgY29uc3RydWN0b3IoY29sb3IsIHN0cm9rZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKGNvbG9yIHx8ICd3aGl0ZScsIHN0cm9rZVdpZHRoIHx8ICcyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRjdC70LXQvNC10L3RgiBcclxuICAgICAqIEByZXR1cm4ge0RpYW1vbmR9XHJcbiAgICAgKi9cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0Y3Qu9C10LzQtdC90YJcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHBhcmFtIHN0cm9rZVdpZHRoXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyKGNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNTAnKTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzUwJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpYW1vbmQnKTtcclxuICAgICAgICBpZih0aGlzLmVsLmdldENvbnRleHQpe1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGg9YCR7c3Ryb2tlV2lkdGh9YDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZT1gJHtjb2xvcn1gO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygxMiw4KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzgsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDQ3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsNDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMTIsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDE3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDMyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzgsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKDIsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyg0NywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKDE3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsNDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygzMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvRGlhbW9uZC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDIxLjA1LjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9C40YLRjCDQvNCw0YHRgdC40LIg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudHMgLSDQuNC90YHRgtGA0YPQutGG0LjQuCDQv9C+INGB0L7Qt9C00LDQvdC40Y5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRFbGVtcyhlbGVtZW50cykge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50cy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJzKGRhdGEuYXR0cnMsIGVsZW0pO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGRhdGEudGV4dDtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90L7QstC60LAg0LzQsNGB0YHQuNCyINCw0YLRgNC40LHQutGD0YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gYXR0cnNcclxuICAgICAqIEBwYXJhbSBlbGVtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JTQvtCx0LDQstC40YLRjCDQvNCw0YHRgdC40LIg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlcclxuICAgICAqIEBwYXJhbSBlbGVtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZWxlbXNBcHBlbmRUbyhhcnJheSwgZWxlbSkge1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX3BhcnNlRWxlbWVudHMoZWxlbWVudHMsIG5vZGUpIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtLnR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbS5hdHRycyAhPT0gbnVsbCAmJiB0eXBlb2YgZWxlbS5hdHRycyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJzKGVsZW0uYXR0cnMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLnRleHQgIT09IG51bGwgJiYgdHlwZW9mIGVsZW0udGV4dCAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gZWxlbS50ZXh0O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0uZWxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkoZWxlbS5lbGVtZW50cykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUVsZW1lbnRzKGVsZW0uZWxlbWVudHMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGNvbmZpZywgbm9kZSkge1xyXG4gICAgICAgIGlmIChjb25maWcuZWxlbWVudHMgIT09IG51bGwgJiYgdHlwZW9mIGNvbmZpZy5lbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlRWxlbWVudHMoY29uZmlnLmVsZW1lbnRzLCBub2RlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2VsZW1lbnQtY3JlYXRvci9FbGVtZW50Q3JlYXRvci5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE3LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4uLy4uL2dhbWUvb2JqZWN0L1N0b3JhZ2VcIjtcclxuaW1wb3J0IEl6aVRvYXN0IGZyb20gXCJpeml0b2FzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgFxyXG4gICAgICogQHBhcmFtIG5vZGUgLSDQvtCx0LvQsNGB0YLRjCDQtNC10LnRgdGC0LLQuNGPXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucm91dGVzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXJyVmlldyA9IG51bGw7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dhbWVcIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9nVGV4dCA9ICdEaWFsb2cgdGV4dCBoZXJlJztcclxuICAgICAgICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBkaWFsb2dUZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpYWxvZ1RleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINCy0YHQtdGFINCy0YzRjtGI0LXQulxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBpbml0KGNvbmZpZykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gY29uZmlnW3VybF0uVmlldztcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBjb25maWdbdXJsXS5lbDtcclxuICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHVybCwgbmV3IFZpZXcoZWwsIFN0b3JhZ2UsIHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdvKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0LXRgNC10LnRgtC4INC/0L4g0LzQsNGA0YjRgNGD0YLRgyDQuCDQv9C+0LzQtdC90Y/RgtGMINGC0LXQutGD0YnRg9GOINCy0YzRjtGI0LrRg1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcclxuICAgICAqIEBwYXJhbSBpc1RvSGlzdG9yeVxyXG4gICAgICogQHBhcmFtIGdhbWVTdHJhdGVneVxyXG4gICAgICovXHJcbiAgICBnbyhwYXRoLCBpc1RvSGlzdG9yeSwgZ2FtZVN0cmF0ZWd5KSB7XHJcbiAgICAgICAgcGF0aCA9IHRoaXMuX2NoZWNrT2ZmbGluZShwYXRoKTtcclxuICAgICAgICBpZiAoaXNUb0hpc3RvcnkpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOiBwYXRofSwgJycsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJyVmlldykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJWaWV3LmRlc3Ryb3lWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VyclZpZXcgPSB0aGlzLmdldFZpZXdCeVJvdXRlKHBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY3VyclZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCdyZW5kZXInIGluIHRoaXMuY3VyclZpZXcpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVTdHJhdGVneSAhPT0gbnVsbCAmJiB0eXBlb2YgZ2FtZVN0cmF0ZWd5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyVmlldy5yZW5kZXIoZ2FtZVN0cmF0ZWd5KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyclZpZXcucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC80LDRgNGI0YDRg9GC0LBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZpZXdcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIocm91dGUsIHZpZXcpIHtcclxuICAgICAgICB0aGlzLnJvdXRlc1tyb3V0ZV0gPSB2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INC80LDRgNGI0YDRg9GC0LBcclxuICAgICAqIEBwYXJhbSBocmVmXHJcbiAgICAgKiBAcmV0dXJuIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRWaWV3QnlSb3V0ZShocmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzW2hyZWZdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNC/0YPRgdGC0LjRgtGMINC/0YDQvtGG0LXRgSDQvNCw0YDRiNGA0YPRgtC40LfQsNGG0LjQuFxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLl9vblJvdXRlQ2hhbmdlKGV2ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGB0YLQsNC90L7QstC40YLRjCDQv9GA0L7RhtC10YEg0LzQsNGA0YjRgNGD0YLQuNC30LDRhtC40LhcclxuICAgICAqL1xyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uUm91dGVDaGFuZ2UoZXZlbnQpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LzQtdC90LXQvdC90YvQuSDQvNCw0YDRiNGA0YPRglxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfb25Sb3V0ZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hlY2tPbkFibGVMaW5rKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ28oZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrT25BYmxlTGluayhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ28oZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tPbkFibGVMaW5rKGxpbmspIHtcclxuICAgICAgICBjb25zb2xlLndhcm4obGluayk7XHJcbiAgICAgICAgbGV0IGxpbmtzID0gWydodHRwczovL3RlY2gueWFuZGV4LnJ1L3NwZWVjaGtpdC9jbG91ZC8nLCAnaHR0cHM6Ly95YW5kZXgucnUvJ107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobGlua3NbaV0gPT09IGxpbmspIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tPZmZsaW5lKHBhdGgpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICBwYXRoID0gdGhpcy5fY2hlY2tVc2VyKHBhdGgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFN0b3JhZ2UudXNlci5sb2dpbiA9PT0gJ09mZmxpbmUnKSBTdG9yYWdlLnVzZXIubG9naW4gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEl6aVRvYXN0Lndhcm5pbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPbmx5IHRlc3Qgc2luZ2xlIHBsYXknLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lPVSBBUkUgT0ZGTElORSEnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3BSaWdodCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTdG9yYWdlLnVzZXIgPSB7bG9naW46ICdPZmZsaW5lJywgcmF0aW5nOiA5OTk5OTk5OTk5OTk5OTk5fTtcclxuICAgICAgICAgICAgcGF0aCA9IChwYXRoID09PSBTdG9yYWdlLnVybHMuTE9HSU4gfHwgcGF0aCA9PT0gU3RvcmFnZS51cmxzLlNJR05VUCB8fCBwYXRoID09PSBTdG9yYWdlLnVybHMuUFJPRklMRSlcclxuICAgICAgICAgICAgICAgID8gU3RvcmFnZS51cmxzLkdBTUUgOiBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAsINC30LDQu9C+0LPQuNC90LXQvSDQu9C4INGO0LfQtdGAXHJcbiAgICAgKiBAcGFyYW0gcGF0aFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NoZWNrVXNlcihwYXRoKSB7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IFN0b3JhZ2UudXJscy5MT0dJTiB8fCBwYXRoID09PSBTdG9yYWdlLnVybHMuU0lHTlVQKSB7XHJcbiAgICAgICAgICAgIGlmIChTdG9yYWdlLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdG9yYWdlLnVybHMuUFJPRklMRTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoID09PSBTdG9yYWdlLnVybHMuUFJPRklMRSkge1xyXG4gICAgICAgICAgICBpZiAoU3RvcmFnZS51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdG9yYWdlLnVybHMuTE9HSU47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGggPT09IFN0b3JhZ2UudXJscy5HQU1FKSB7XHJcbiAgICAgICAgICAgIGlmIChTdG9yYWdlLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0b3JhZ2UudXJscy5NQUlOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdXBwb3J0L3JvdXRlci9Sb3V0ZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAyNC4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyVXJsc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5NQUlOID0gJy8nO1xyXG4gICAgICAgIHRoaXMuTE9HSU4gPSAnL2xvZ2luJztcclxuICAgICAgICB0aGlzLlNJR05VUCA9ICcvc2lnbnVwJztcclxuICAgICAgICB0aGlzLkxFQURFUkJPQVJEID0gJy9sZWFkZXJib2FyZCc7XHJcbiAgICAgICAgdGhpcy5BQk9VVCA9ICcvYWJvdXQnO1xyXG4gICAgICAgIHRoaXMuUFJPRklMRSA9ICcvcHJvZmlsZSc7XHJcblxyXG4gICAgICAgIHRoaXMuR0FNRSA9ICcvZ2FtZSc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc3VwcG9ydC9yb3V0ZXIvUm91dGVyVXJscy5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDI1LjA1LjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlV29ya2Vye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuLi9zZXJ2aWNlLXdvcmtlci5qcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0L/RgNC4INGD0LTQsNGH0L3QvtC5INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LjQvNC10LXQvCDQvtCx0YrQtdC60YIg0YLQuNC/0LAgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbicsIHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0YHRgtGA0L7QutC+0Lkg0L3QuNC20LUg0LzQvtC20L3QviDQv9GA0LXQutGA0LDRgtC40YLRjCDRgNCw0LHQvtGC0YMgc2VydmljZVdvcmtlcuKAmdCwXHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N3L1NlcnZpY2VXb3JrZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFwiLi9hYm91dC12aWV3LnNjc3NcIjtcclxuXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tIFwiLi4vQmFzZVZpZXdcIjtcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuLi8uLi9qcy9zdXBwb3J0L2VsZW1lbnQtY3JlYXRvci9FbGVtZW50Q3JlYXRvclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBzdG9yYWdlKSB7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjb25maWcgPSB7XHJcbiAgICAgICAgZWxlbWVudHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLnN0b3JhZ2UudXJscy5NQUlOLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbWFpbi10aXRsZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1N0ZXAgZmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdhYm91dC12aWV3J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdhYm91dC12aWV3X19zdWJ0aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0dhbWUgZGV2ZWxvcGVkIGJ5OidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtjbGFzczogJ2Fib3V0LXZpZXdfX25hbWUtbGlzdCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2xpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge2lkOiAnZWdvcid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFR09SIEZPTUlDSEVWJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7aWQ6ICdyaXNoYXQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUklTSEFUIFZBTElUT1YnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2xpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge2lkOiAnYW5kcmV5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FORFJFWSBDSEVSTk9WJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidsaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtpZDogJ2RlbmlzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RFTklTIFNURVBBTk9WJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Fib3V0LXZpZXdfX3N1YnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUE9XRVJFRCBCWTonXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3RlY2gueWFuZGV4LnJ1L3NwZWVjaGtpdC9jbG91ZC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnT3VyIGdhbWUgdXNlIFwiWWFuZGV4IFNwZWVjaEtpdCBDbG91ZFwiJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly95YW5kZXgucnUvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICcvc3JjL2ltZy95YW5kZXhfbG9nby5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF1cclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlci5yZW5kZXJWaWV3KCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJveVZpZXcoKTtcclxuXHJcbiAgICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKGNvbmZpZywgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdExpc3RlbmVyKCl7XHJcbiAgICAgICAgbGV0IGVnb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWdvcicpO1xyXG4gICAgICAgIGxldCBkZW5pcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW5pcycpO1xyXG4gICAgICAgIGxldCByaXNoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlzaGF0Jyk7XHJcbiAgICAgICAgbGV0IGFuZHJleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmRyZXknKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvYWJvdXQtdmlldy9BYm91dFZpZXcuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi9CYXNlVmlld1wiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uL2VsZW1lbnRzL2xvYWRlci9sb2FkZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzL2Zvcm0vZm9ybVwiO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uLy4uL2pzL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgc3RvcmFnZSwgcm91dGVyKSB7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwINCy0YzRjtGI0LrQuFxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyVmlldygpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nIEluJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ybV9fdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ybV9faW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2hlbHAtdGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX19pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2hlbHAtdGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX19idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICfQsCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX3ZrLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ZrLWF1dGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQktGF0L7QtCDRh9C10YDQtdC3IFZLJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tdG8tc2lnbnVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuc3RvcmFnZS51cmxzLlNJR05VUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5nZXRFbGVtKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlVmlld1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuc3RvcmFnZS51cmxzLk1BSU4pO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tdGl0bGUnKTtcclxuICAgICAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgaDEuaW5uZXJUZXh0ID0gJ1N0ZXAgRmlnaHQnO1xyXG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5sb2dpbkZvcm0uZWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9naW4nKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Ub1NpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdG8tc2lnbnVwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZrQXV0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ay1hdXRoJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LrQsNC30LDRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAINCy0YzRjtGI0LrQuFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodC/0YDRj9GC0LDRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAINCy0YzRjtGI0LrQuFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC60LDQt9Cw0YLRjCDQv9GA0L7Qs9GA0LXRgdGBINCx0LDRgCDRhNC+0YDQvNGLXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2hvd1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZrQXV0aC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW1QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLmJ0bkxvZ2luLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2dyZXNzQmFyLCB0aGlzLmJ0bkxvZ2luLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0L/RgNGP0YLQsNGC0Ywg0L/RgNC+0LPRgNC10YHRgSDQsdCw0YAg0YTQvtGA0LzRi1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2hpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52a0F1dGguaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ0bkxvZ2luLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQl9Cw0L/Rg9GB0Log0YHQu9GD0YjQsNGC0LXQu9C10Lkg0L3QsCDRhNC+0YDQvNGDXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vU3VibWl0IGZvcm1cclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5lbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja0ZpZWxkcygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMubG9naW5Gb3JtLmdldEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9naW4oYm9keSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5nbyh0aGlzLnN0b3JhZ2UudXJscy5QUk9GSUxFLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEVycm9yKCd3cm9uZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Ub1NpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52a0F1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgVksuQXV0aC5nZXRMb2dpblN0YXR1cygocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWSy5BdXRoLmxvZ2luKG51bGwsIFZLLmFjY2Vzcy5GUklFTkRTKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFZLLk9ic2VydmVyLnN1YnNjcmliZSgnYXV0aC5sb2dpbicsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihyZXNwb25zZS5zZXNzaW9uLnVzZXIpO1xyXG4gICAgICAgICAgICAvL25ldyBVc2VyU2VydmljZSgpLnNpZ251cCh7bG9naW46IHJlc3BvbnNlLnNlc3Npb24udXNlci5kb21haW59KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGH0LjRgdGC0LrQsCDQv9C+0LvQtdC5INGE0L7RgNC80YtcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9jbGVhckZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INGE0L7RgNC80YtcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY2hlY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL2VudGVyLXZpZXdzL0xvZ2luVmlldy5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vQmFzZVZpZXcnO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vZWxlbWVudHMvZm9ybS9mb3JtXCI7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vZWxlbWVudHMvbG9hZGVyL2xvYWRlclwiO1xyXG5pbXBvcnQgQ2hlY2tGaWVsZHMgZnJvbSBcIi4uLy4uL2pzL21lbnUvYWN0aW9ucy9DaGVja0ZpZWxkc1wiO1xyXG5pbXBvcnQgSXppVG9hc3QgZnJvbSAnaXppdG9hc3QnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uLy4uL2pzL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwVmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgc3RvcmFnZSwgcm91dGVyKXtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0LLRjNGO0YjQutC4XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyVmlldygpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX190aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ybV9faW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1sb2dpbi1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ybV9faGVscC10ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX19oZWxwLXRleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUmVwZWF0IHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1yZXBlYXRwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVwZWF0cGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdyZXBlYXRwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXJlcGVhdHBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX19oZWxwLXRleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWdpc3RyYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX19idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tc2lnbnVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAn0LAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3JtX192ay1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd2ay1hdXRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JLRhdC+0LQg0YfQtdGA0LXQtyBWSydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zvcm1fX2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tdG8tbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy5zdG9yYWdlLnVybHMuTE9HSU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnN0b3JhZ2UudXJscy5NQUlOKTtcclxuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIGgxLmlubmVyVGV4dD0nU3RlcCBGaWdodCc7XHJcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnNpZ251cEZvcm0uZWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGVhdFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcmVwZWF0cGFzc3dvcmQnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5IZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItbG9naW4taGVscCcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXBhc3N3b3JkLWhlbHAnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRQYXNzd29yZEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1yZXBlYXRwYXNzd29yZC1oZWxwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2lnbnVwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blRvTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXRvLWxvZ2luJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZrQXV0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ay1hdXRoJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7QutCw0LfQsNGC0Ywg0L/RgNC+0LPRgNC10YHRgSDQsdCw0YAg0LLRjNGO0YjQutC4XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2hvd1ZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0L/RgNGP0YLQsNGC0Ywg0L/RgNC+0LPRgNC10YHRgSDQsdCw0YAg0LLRjNGO0YjQutC4XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaGlkZVZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LrQsNC30LDRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAINGE0L7RgNC80YtcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5TaWduVXAuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZrQXV0aC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW1QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLmJ0blNpZ25VcC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9ncmVzc0JhciwgdGhpcy5idG5TaWduVXAubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQv9GA0Y/RgtCw0YLRjCDQv9GA0L7Qs9GA0LXRgdGBINCx0LDRgCDRhNC+0YDQvNGLXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaGlkZVByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52a0F1dGguaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2lnblVwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idG5TaWduVXAubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCX0LDQv9GD0YHQuiDRgdC70YPRiNCw0YLQtdC70LXQuVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2luaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL1N1Ym1pdCBmb3JtXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja0ZpZWxkcygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuc2lnbnVwRm9ybS5nZXRGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuc2lnbnVwKGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS51c2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIEl6aVRvYXN0LnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWxseSByZWdpc3RlcmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3BSaWdodCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5nbyh0aGlzLnN0b3JhZ2UudXJscy5MT0dJTik7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlT2sodGhpcy5sb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRFcnIodGhpcy5sb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyLnJlc3VsdCA9PT0gJ25vLWNvbm4nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5sb2dpbkhlbHAsICdjaGVjayBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5sb2dpbkhlbHAsICdsb2dpbiB1c2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Ub0xvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQ9PntcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52a0F1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgVksuQXV0aC5sb2dpbihudWxsLCBWSy5hY2Nlc3MuRlJJRU5EUyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFZLLk9ic2VydmVyLnN1YnNjcmliZSgnYXV0aC5sb2dpbicsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihyZXNwb25zZS5zZXNzaW9uLnVzZXIpO1xyXG4gICAgICAgICAgICAvL25ldyBVc2VyU2VydmljZSgpLnNpZ251cCh7bG9naW46IHJlc3BvbnNlLnNlc3Npb24udXNlci5kb21haW59KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INGE0L7RgNC80YtcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY2hlY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW0udmFsaWRhdGUocHJldik7XHJcbiAgICAgICAgICAgIHByZXYgPSBlbGVtO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRh9C40YHRgtC60LAg0L/QvtC70LXQuSDRhNC+0YDQvNGLXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvZW50ZXItdmlld3MvU2lnblVwVmlldy5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE3LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vQmFzZVZpZXcnO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL2pzL2dhbWUvbW9kdWxlcy9HYW1lTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0ICcuL2dhbWUtdmlldy5zY3NzJztcclxuaW1wb3J0ICcuL19fY29udGFpbmVyL2dhbWUtdmlld19fY29udGFpbmVyLnNjc3MnO1xyXG5pbXBvcnQgJy4vX19nYW1lLWFyZWEvZ2FtZS12aWV3X19nYW1lLWFyZWEuc2Nzcyc7XHJcbmltcG9ydCBHYW1lQ29udHJvbHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvR2FtZUNvbnRyb2xzXCI7XHJcbmltcG9ydCBHYW1lQWN0aW9uIGZyb20gXCIuLi8uLi9lbGVtZW50cy9nYW1lLWNob29zZS1hY3Rpb24vR2FtZUNob29zZUFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBCYXNlVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHN0b3JhZ2UsIHJvdXRlcil7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwIHZpZXdcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKHN0cmF0ZWd5KXtcclxuICAgICAgICBzdXBlci5yZW5kZXJWaWV3KCk7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBzdHJhdGVneSA9PT0gJ3VuZGVmaW5lZCcpIHN0cmF0ZWd5ID0gdGhpcy5zdG9yYWdlLmdhbWVTdGF0ZXMuU0lOR0xFUExBWUVSX1NUUkFURUdZO1xyXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIodGhpcy5yb3V0ZXIsIHRoaXMuc3RvcmFnZSwgdGhpcywgc3RyYXRlZ3kpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25Nb2RhbCA9IG5ldyBHYW1lQWN0aW9uKHRoaXMubm9kZSwgdGhpcy5nYW1lTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbHMgPSBuZXcgR2FtZUNvbnRyb2xzKHRoaXMubm9kZSwgdGhpcy5nYW1lQWN0aW9uTW9kYWwsIHRoaXMuZ2FtZU1hbmFnZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbnRyb2xFbGVtZW50cygpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbk1vZGFsLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lWaWV3KCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lTWFuYWdlcil7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuY2xvc2VXZWJTb2NrZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuZGVzdHJveVZpZXcoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9nYW1lLXZpZXcvR2FtZVZpZXcuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi9CYXNlVmlld1wiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uL2VsZW1lbnRzL2xvYWRlci9sb2FkZXJcIjtcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi8uLi9qcy9zdXBwb3J0L3NlcnZpY2UvVXNlclNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBcIi4vX190aXRsZS9sZWFkZXJib2FyZC12aWV3X190aXRsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vX19saW5rL2xlYWRlcmJvYXJkLXZpZXdfX2xpbmsuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fbGlzdC9sZWFkZXJib2FyZC12aWV3X19saXN0LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9fX2xpc3QvX19pdGVtL2xlYWRlcmJvYXJkLXZpZXdfX2xpc3RfX2l0ZW0uc2Nzc1wiO1xyXG5pbXBvcnQgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMubWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZFZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBzdG9yYWdlLCByb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQnNC10YLQvtC0INC+0LHQvdC+0LLQu9C10L3QuNGPIGxlYWRlcmJvYXJkXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlZnJlc2hMZWFkZXJCb2FyZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGxlYWRlckJvYXJkU291cmNlID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyN3aXRoIGxvZ299fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cInt7Y2xhc3N9fVwiPjxoMT57e3RleHR9fTwvaDE+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey93aXRofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjd2l0aCB0aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ7e2NsYXNzfX1cIj57e3RleHR9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3dpdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInt7Y29udHJvbC5jbGFzc319XCIgaWQ9XCJ7e2NvbnRyb2wuaWR9fVwiPnt7Y29udHJvbC50ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lmIGxlYWRlcmJvYXJkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGVhZGVyYm9hcmQtdmlld19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBsZWFkZXJib2FyZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsZWFkZXJib2FyZC12aWV3X19saXN0X19pdGVtXCI+e3tsb2dpbn19PHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7cmF0aW5nfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3twb3NpdGlvbn19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1gO1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZFRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGxlYWRlckJvYXJkU291cmNlKTtcclxuICAgICAgICByZXR1cm4gbGVhZGVyQm9hcmRUZW1wbGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgKi9cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBzdXBlci5yZW5kZXJWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5fc2V0UHJvZ3Jlc3NCYXIodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0TGVhZGVycygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gcmVzcG9uc2UubGVhZGVycztcclxuICAgICAgICAgICAgbGV0IGl0ZXIgPSAxO1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0ucG9zaXRpb24gPSBgJHtpdGVyfS5gO1xyXG4gICAgICAgICAgICAgICAgaXRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy5fcmVmcmVzaExlYWRlckJvYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTdGVwIGZpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdtYWluLXRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1RvcCBwbGF5ZXJzOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGVhZGVyYm9hcmQtdmlld19fdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJib2FyZDogYXJyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JlZnJlc2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xlYWRlcmJvYXJkLXZpZXdfX2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3JlZnJlc2gtbGInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UmVmcmVzaExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy5fcmVmcmVzaExlYWRlckJvYXJkKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTm8gY29ubmVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsZWFkZXJib2FyZC12aWV3X19saW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ3JlZnJlc2gtbGInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0UmVmcmVzaExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDQutC90L7Qv9C60YMg0L7QsdC90L7QstC40YLRjFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2luaXRSZWZyZXNoTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbGV0IHJlZnJlc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1sYicpO1xyXG4gICAgICAgIGlmIChyZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YfQuNGC0YHQutCwINC60L7QvdGC0LXQudC90LXRgNCwLCDRg9C00LDQu9C10L3QuNC1INCy0YHQtdGFINC00L7Rh9C10YDQvdC40YUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktGB0YLQsNCy0LjRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2V0UHJvZ3Jlc3NCYXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb250YWluZXIoY29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9sZWFkZXJib2FyZC12aWV3L0xlYWRlckJvYXJkVmlldy5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0ICcuL21lbnUtdmlldy5zY3NzJztcclxuaW1wb3J0ICcuL19fY29udHJvbHMtYmxvY2svbWVudS12aWV3X19jb250cm9scy1ibG9jay5zY3NzJztcclxuaW1wb3J0ICcuL19fY29udHJvbHMtYmxvY2svX19idXR0b24vbWVudS12aWV3X19jb250cm9scy1ibG9ja19fYnV0dG9uLnNjc3MnO1xyXG5cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi9CYXNlVmlld1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub2RlIC0g0YPQt9C10LtcclxuICAgICAqIEBwYXJhbSBzdG9yYWdlIC0g0L/QsNC80Y/RgtGMXHJcbiAgICAgKiBAcGFyYW0gcm91dGVyIC0g0YDQvtGD0YLQtdGAXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHN0b3JhZ2UsIHJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQvNC10L3RjlxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyVmlldygpO1xyXG4gICAgICAgIC8vc3VwZXIuZGVzdHJveVZpZXcoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zdHIgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuc3RvcmFnZS51cmxzLk1BSU4sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdtYWluLXRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTdGVwIEZpZ2h0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbGVtZW50czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLnN0b3JhZ2UudXJscy5MRUFERVJCT0FSRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdtZW51LXZpZXdfX2NvbnRyb2xzLWJsb2NrX19idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMRUFERVIgQk9BUkQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy5zdG9yYWdlLnVybHMuTE9HSU4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbWVudS12aWV3X19jb250cm9scy1ibG9ja19fYnV0dG9uX21haW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQTEFZJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuc3RvcmFnZS51cmxzLkFCT1VULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ21lbnUtdmlld19fY29udHJvbHMtYmxvY2tfX2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCT1VUJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5fZ2V0VGl0bGUoaW5zdHIudGl0bGUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgbGV0IGVsZW1BcnJheSA9IHRoaXMuX2dldEVsZW1zKGluc3RyLmVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRyb2xzQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250cm9sc0Jsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS12aWV3X19jb250cm9scy1ibG9jaycpO1xyXG4gICAgICAgIHRoaXMuX2VsZW1zQXBwZW5kVG8oZWxlbUFycmF5LCBjb250cm9sc0Jsb2NrKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY29udHJvbHNCbG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90L7QstC60LAg0LzQsNGB0YHQuNCyINCw0YLRgNC40LHQutGD0YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gYXR0cnNcclxuICAgICAqIEBwYXJhbSBlbGVtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JTQvtCx0LDQstC40YLRjCDQvNCw0YHRgdC40LIg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlcclxuICAgICAqIEBwYXJhbSBlbGVtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZWxlbXNBcHBlbmRUbyhhcnJheSwgZWxlbSkge1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7Qu9GD0YfQuNGC0Ywg0LzQsNGB0YHQuNCyINGN0LvQtdC80LXQvdGC0L7QslxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRzIC0g0LjQvdGB0YLRgNGD0LrRhtC40Lgg0L/QviDRgdC+0LfQtNCw0L3QuNGOXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZ2V0RWxlbXMoZWxlbWVudHMpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudHMubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0QXR0cnMoZGF0YS5hdHRycywgZWxlbSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS5lbGVtZW50LnR5cGUpO1xyXG4gICAgICAgICAgICB0ZXh0RWxlbS50ZXh0Q29udGVudCA9IGRhdGEuZWxlbWVudC50ZXh0O1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHRleHRFbGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg0J/QvtC70YPRh9C40YLRjCDQt9Cw0LPQvtC70L7QstC+0LpcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2dldFRpdGxlKGRhdGEpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50eXBlKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyhkYXRhLmF0dHJzLCBlbGVtKTtcclxuICAgICAgICBsZXQgdGV4dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEuZWxlbWVudC50eXBlKTtcclxuICAgICAgICB0ZXh0RWxlbS50ZXh0Q29udGVudCA9IGRhdGEuZWxlbWVudC50ZXh0O1xyXG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xyXG4gICAgICAgIHJldHVybiBlbGVtO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9tZW51LXZpZXcvTWVudVZpZXcuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi9CYXNlVmlld1wiO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uLy4uL2pzL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uL2VsZW1lbnRzL2xvYWRlci9sb2FkZXJcIjtcclxuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4uLy4uL2pzL21lbnUvZWxlbWVudHMvRGlhbW9uZFwiO1xyXG5pbXBvcnQgSXppVG9hc3QgZnJvbSBcIml6aXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3Byb2ZpbGUtdmlldy5zY3NzXCI7XHJcbmltcG9ydCBcIi4vX19jb250cm9sbGVycy9wcm9maWxlLXZpZXdfX2NvbnRyb2xsZXJzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9fX2NvbnRyb2xsZXJzL19fYnV0dG9uL3Byb2ZpbGUtdmlld19fY29udHJvbGxlcnNfX2J1dHRvbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vX19yZXNvdXJjZXMvcHJvZmlsZS12aWV3X19yZXNvdXJjZXMuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fcmVzb3VyY2VzL19fZGlhbW9uZC9wcm9maWxlLXZpZXdfX3Jlc291cmNlc19fZGlhbW9uZC5zY3NzXCI7XHJcbmltcG9ydCBcIi4vX19yZXNvdXJjZXMvX19kaWFtb25kL3RleHQvcHJvZmlsZS12aWV3X19yZXNvdXJjZXNfX2RpYW1vbmRfX3RleHQuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fdXNlci1pbmZvL3Byb2ZpbGUtdmlld19fdXNlci1pbmZvLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9fX3VzZXItaW5mby9sb2dpbi9wcm9maWxlLXZpZXdfX3VzZXItaW5mb19fbG9naW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL19fdXNlci1pbmZvL2l0ZW0vcHJvZmlsZS12aWV3X191c2VyLWluZm9fX2l0ZW0uc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZVZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBzdG9yYWdlLCByb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LvRg9GH0LjRgtGMINGO0LfQtdGA0LBcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlLnVzZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2luZG93LlVTRVIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7fSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdG9yYWdlLnVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0L/RgNC+0YTQsNC50LvQsFxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyVmlldygpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlVmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJQcm9maWxlKHVzZXIpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShlcnIpID09PSAne30nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UudXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5nbyh0aGlzLnN0b3JhZ2UudXJscy5MT0dJTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNC/0YPRgdC6INGB0LvRg9GI0LDRgtC10LvQtdC5XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMuaHJlZkxvZ291dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9nT3V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuZ28odGhpcy5zdG9yYWdlLnVybHMuTE9HSU4sIHRydWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHJlZlBsYXlTLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5nbyh0aGlzLnN0b3JhZ2UudXJscy5HQU1FLCB0cnVlLCB0aGlzLnN0b3JhZ2UuZ2FtZVN0YXRlcy5TSU5HTEVQTEFZRVJfU1RSQVRFR1kpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmhyZWZQbGF5TS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPIGNoZWNrLWNvbm5lY3Rpb25cclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLmdvKHRoaXMuc3RvcmFnZS51cmxzLkdBTUUsIHRydWUsIHRoaXMuc3RvcmFnZS5nYW1lU3RhdGVzLk1VTFRJUExBWUVSX1NUUkFURUdZKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEl6aVRvYXN0LmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1lvdSBhcmUgb2ZmbGluZSEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdVc2Ugc2luZ2xlIHBsYXkgb25seScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3BSaWdodCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LrQsNC30LDRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAINCy0YzRjtGI0LrQuFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodC/0YDRj9GC0LDRgtGMINC/0YDQvtCz0YDQtdGB0YEg0LHQsNGAINCy0YzRjtGI0LrQuFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtGH0LjRgdGC0LrQsCDQutC+0L3RgtC10LnQvdC10YDQsFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NsZWFyQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdC90L7QstC40YLRjCDQstGM0Y7RiNC60YNcclxuICAgICAqL1xyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhckNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0L7Qt9C00LDQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQvtGE0LDQudC70LBcclxuICAgICAqIEBwYXJhbSB1c2VyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyUHJvZmlsZSh1c2VyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgLyogY3JlYXRlIG1haW4gdGl0bGUgKi9cclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zdG9yYWdlLnVybHMuTUFJTik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXRpdGxlJyk7XHJcbiAgICAgICAgbGV0IHRleHRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0ZXh0RWxlbS50ZXh0Q29udGVudCA9ICdTdGVwIGZpZ2h0JztcclxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0ZXh0RWxlbSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcblxyXG4gICAgICAgIC8qIGNyZWF0ZSBjb250cm9sbGVycyBkaXYqL1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZmlsZS12aWV3X19jb250cm9sbGVycycpO1xyXG5cclxuICAgICAgICB0aGlzLmhyZWZQbGF5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vdGhpcy5ocmVmUGxheU0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zdG9yYWdlLnVybHMuR0FNRSk7XHJcbiAgICAgICAgdGhpcy5ocmVmUGxheU0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9maWxlLXZpZXdfX2NvbnRyb2xsZXJzX19idXR0b24nKTtcclxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGgxLmlubmVySFRNTCA9ICdNdWx0aXBsYXllcic7XHJcbiAgICAgICAgdGhpcy5ocmVmUGxheU0uYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgICAgICB0aGlzLmhyZWZQbGF5UyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vdGhpcy5ocmVmUGxheVMuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zdG9yYWdlLnVybHMuR0FNRSk7XHJcbiAgICAgICAgdGhpcy5ocmVmUGxheVMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9maWxlLXZpZXdfX2NvbnRyb2xsZXJzX19idXR0b24nKTtcclxuICAgICAgICBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gJ1NpbmdsZSBwbGF5JztcclxuICAgICAgICB0aGlzLmhyZWZQbGF5Uy5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LmFwcGVuZENoaWxkKHRoaXMuaHJlZlBsYXlNKTtcclxuICAgICAgICBjb250cm9sbGVyc0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmhyZWZQbGF5Uyk7XHJcblxyXG4gICAgICAgIC8qY3JlYXRlIHVzZXIgZGl2Ki9cclxuICAgICAgICBsZXQgdXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHVzZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9maWxlLXZpZXdfX3VzZXItaW5mbycpO1xyXG5cclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2ZpbGUtdmlld19fdXNlci1pbmZvX19sb2dpbicpO1xyXG4gICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gYCR7dXNlci5sb2dpbn1gO1xyXG4gICAgICAgIHVzZXJEaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcblxyXG4gICAgICAgIGxldCBhcnJWYWx1ZSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JhdGluZzonLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIucmF0aW5nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW5uaW5nczonLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIuZ2FtZV9jb3VudF93aW5cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdGFsIG1hdGNoZXM6ICcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5nYW1lX2NvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBhcnJWYWx1ZS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9maWxlLXZpZXdfX3VzZXItaW5mb19faXRlbScpO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGAke2VsLm5hbWV9ICR7ZWwudmFsdWV9YDtcclxuICAgICAgICAgICAgdXNlckRpdi5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypjcmVhdGUgcmVzb3VyY2VzIGRpdiovXHJcbiAgICAgICAgbGV0IHJlc291cmNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc291cmNlc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2ZpbGUtdmlld19fcmVzb3VyY2VzJyk7XHJcblxyXG4gICAgICAgIGxldCBhcnJDcnlzdGFscyA9IFtcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfZ3JlZW4sIGNvbG9yOiAncmdiKDI5LCAxNDAsIDExNCknfSxcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfYmx1ZSwgY29sb3I6ICdyZ2IoNTcsIDEwOCwgMjE5KSd9LFxyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9yZWQsIGNvbG9yOiAncmdiKDEzOCwgMzQsIDc2KSd9LFxyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9wdXJwbGUsIGNvbG9yOiAncmdiKDgwLCAzNSwgMTUzKSd9XTtcclxuICAgICAgICBhcnJDcnlzdGFscy5mb3JFYWNoKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZmlsZS12aWV3X19yZXNvdXJjZXNfX2RpYW1vbmQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERpYW1vbmQoYCR7cGFyYW1zLmNvbG9yfWApLmdldEVsZW0oKS5lbDtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGQpO1xyXG5cclxuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9maWxlLXZpZXdfX3Jlc291cmNlc19fZGlhbW9uZF9fdGV4dCcpO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGAke3BhcmFtcy52YWx1ZX1gO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgICAgIHJlc291cmNlc0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodXNlckRpdik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHJlc291cmNlc0Rpdik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzRGl2KTtcclxuXHJcbiAgICAgICAgdGhpcy5ocmVmTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ocmVmTG9nb3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZmlsZS12aWV3X19jb250cm9sbGVyc19fYnV0dG9uX2xvZ291dCcpO1xyXG4gICAgICAgIHRoaXMuaHJlZkxvZ291dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1sb2dvdXQnKTtcclxuICAgICAgICB0aGlzLmhyZWZMb2dvdXQuaW5uZXJUZXh0ID0gJ0xvZyBvdXQnO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmhyZWZMb2dvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvUHJvZmlsZVZpZXcuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zd2VldGFsZXJ0L2Rpc3Qvc3dlZXRhbGVydC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi92ZW5kb3IvY3NzL2l6aVRvYXN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZm9ybS9fX2J1dHRvbi9mb3JtX19idXR0b24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9mb3JtL19faGVscC10ZXh0L2Zvcm1fX2hlbHAtdGV4dC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2Zvcm0vX19pbnB1dC9mb3JtX19pbnB1dC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2Zvcm0vX19saW5rL2Zvcm1fX2xpbmsuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9mb3JtL19fdGl0bGUvZm9ybV9fdGl0bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9mb3JtL2Zvcm0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9nYW1lLWNob29zZS1hY3Rpb24vX19idXR0b24vZ2FtZS1jaG9vc2UtYWN0aW9uX19idXR0b24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9nYW1lLWNob29zZS1hY3Rpb24vX19jb250YWluZXIvZ2FtZS1jaG9vc2UtYWN0aW9uX19jb250YWluZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9nYW1lLWNob29zZS1hY3Rpb24vZ2FtZS1jaG9vc2UtYWN0aW9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS1jb250cm9scy9fX2FjdGlvbi1idXR0b24vZ2FtZS1jb250cm9sc19fYWN0aW9uLWJ1dHRvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2dhbWUtY29udHJvbHMvX19idXR0b24vZ2FtZS1jb250cm9sc19fYnV0dG9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS1jb250cm9scy9nYW1lLWNvbnRyb2xzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS1pbmZvLXRvYXN0L2dhbWUtaW5mby10b2FzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2dhbWUtcmVzdWx0LXRhYmxlL2dhbWUtcmVzdWx0LXRhYmxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZ2FtZS10aW1lci9nYW1lLXRpbWVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbG9hZGVyL2xvYWRlci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9tdXNpYy1jb250cm9scy9tdXNpYy1jb250cm9scy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9wcm9ncmVzcy1iYXItdGFibGUvcHJvZ3Jlc3MtYmFyLXRhYmxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3NwZWVjaC1jb250cm9sL3NwZWVjaC1lbGVtZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcGxpY2F0aW9uL21haW4tdGl0bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYWJvdXQtdmlldy9hYm91dC12aWV3LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2dhbWUtdmlldy9fX2NvbnRhaW5lci9nYW1lLXZpZXdfX2NvbnRhaW5lci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9nYW1lLXZpZXcvX19nYW1lLWFyZWEvZ2FtZS12aWV3X19nYW1lLWFyZWEuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvZ2FtZS12aWV3L2dhbWUtdmlldy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9sZWFkZXJib2FyZC12aWV3L19fbGluay9sZWFkZXJib2FyZC12aWV3X19saW5rLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2xlYWRlcmJvYXJkLXZpZXcvX19saXN0L19faXRlbS9sZWFkZXJib2FyZC12aWV3X19saXN0X19pdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2xlYWRlcmJvYXJkLXZpZXcvX19saXN0L2xlYWRlcmJvYXJkLXZpZXdfX2xpc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvbGVhZGVyYm9hcmQtdmlldy9fX3RpdGxlL2xlYWRlcmJvYXJkLXZpZXdfX3RpdGxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21lbnUtdmlldy9fX2NvbnRyb2xzLWJsb2NrL19fYnV0dG9uL21lbnUtdmlld19fY29udHJvbHMtYmxvY2tfX2J1dHRvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9tZW51LXZpZXcvX19jb250cm9scy1ibG9jay9tZW51LXZpZXdfX2NvbnRyb2xzLWJsb2NrLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21lbnUtdmlldy9tZW51LXZpZXcuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fY29udHJvbGxlcnMvX19idXR0b24vcHJvZmlsZS12aWV3X19jb250cm9sbGVyc19fYnV0dG9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3Byb2ZpbGUtdmlldy9fX2NvbnRyb2xsZXJzL3Byb2ZpbGUtdmlld19fY29udHJvbGxlcnMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fcmVzb3VyY2VzL19fZGlhbW9uZC9wcm9maWxlLXZpZXdfX3Jlc291cmNlc19fZGlhbW9uZC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9wcm9maWxlLXZpZXcvX19yZXNvdXJjZXMvX19kaWFtb25kL3RleHQvcHJvZmlsZS12aWV3X19yZXNvdXJjZXNfX2RpYW1vbmRfX3RleHQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fcmVzb3VyY2VzL3Byb2ZpbGUtdmlld19fcmVzb3VyY2VzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3Byb2ZpbGUtdmlldy9fX3VzZXItaW5mby9pdGVtL3Byb2ZpbGUtdmlld19fdXNlci1pbmZvX19pdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3Byb2ZpbGUtdmlldy9fX3VzZXItaW5mby9sb2dpbi9wcm9maWxlLXZpZXdfX3VzZXItaW5mb19fbG9naW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvcHJvZmlsZS12aWV3L19fdXNlci1pbmZvL3Byb2ZpbGUtdmlld19fdXNlci1pbmZvLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3Mvdmlldy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIVxuXG4gQGxpY2Vuc2VcbiBoYW5kbGViYXJzIHY0LjAuNlxuXG5Db3B5cmlnaHQgKEMpIDIwMTEtMjAxNiBieSBZZWh1ZGEgS2F0elxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4vKiohXG5cbiBAbGljZW5zZVxuIGhhbmRsZWJhcnMgdjQuMC42XG5cbkNvcHlyaWdodCAoQykgMjAxMS0yMDE2IGJ5IFllaHVkYSBLYXR6XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbi8qKiFcblxuIEBsaWNlbnNlXG4gaGFuZGxlYmFycyB2NC4wLjZcblxuQ29weXJpZ2h0IChDKSAyMDExLTIwMTYgYnkgWWVodWRhIEthdHpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9YigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5IYW5kbGViYXJzPWIoKTphLkhhbmRsZWJhcnM9YigpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZCl7aWYoY1tkXSlyZXR1cm4gY1tkXS5leHBvcnRzO3ZhciBlPWNbZF09e2V4cG9ydHM6e30saWQ6ZCxsb2FkZWQ6ITF9O3JldHVybiBhW2RdLmNhbGwoZS5leHBvcnRzLGUsZS5leHBvcnRzLGIpLGUubG9hZGVkPSEwLGUuZXhwb3J0c312YXIgYz17fTtyZXR1cm4gYi5tPWEsYi5jPWMsYi5wPVwiXCIsYigwKX0oW2Z1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7dmFyIGE9cigpO3JldHVybiBhLmNvbXBpbGU9ZnVuY3Rpb24oYixjKXtyZXR1cm4gay5jb21waWxlKGIsYyxhKX0sYS5wcmVjb21waWxlPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGsucHJlY29tcGlsZShiLGMsYSl9LGEuQVNUPWlbXCJkZWZhdWx0XCJdLGEuQ29tcGlsZXI9ay5Db21waWxlcixhLkphdmFTY3JpcHRDb21waWxlcj1tW1wiZGVmYXVsdFwiXSxhLlBhcnNlcj1qLnBhcnNlcixhLnBhcnNlPWoucGFyc2UsYX12YXIgZT1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGY9YygyKSxnPWUoZiksaD1jKDI0KSxpPWUoaCksaj1jKDI1KSxrPWMoMzApLGw9YygzMSksbT1lKGwpLG49YygyOCksbz1lKG4pLHA9YygyMykscT1lKHApLHI9Z1tcImRlZmF1bHRcIl0uY3JlYXRlLHM9ZCgpO3MuY3JlYXRlPWQscVtcImRlZmF1bHRcIl0ocykscy5WaXNpdG9yPW9bXCJkZWZhdWx0XCJdLHNbXCJkZWZhdWx0XCJdPXMsYltcImRlZmF1bHRcIl09cyxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7YltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntcImRlZmF1bHRcIjphfX0sYi5fX2VzTW9kdWxlPSEwfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZCgpe3ZhciBhPW5ldyBoLkhhbmRsZWJhcnNFbnZpcm9ubWVudDtyZXR1cm4gbi5leHRlbmQoYSxoKSxhLlNhZmVTdHJpbmc9altcImRlZmF1bHRcIl0sYS5FeGNlcHRpb249bFtcImRlZmF1bHRcIl0sYS5VdGlscz1uLGEuZXNjYXBlRXhwcmVzc2lvbj1uLmVzY2FwZUV4cHJlc3Npb24sYS5WTT1wLGEudGVtcGxhdGU9ZnVuY3Rpb24oYil7cmV0dXJuIHAudGVtcGxhdGUoYixhKX0sYX12YXIgZT1jKDMpW1wiZGVmYXVsdFwiXSxmPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZz1jKDQpLGg9ZShnKSxpPWMoMjEpLGo9ZihpKSxrPWMoNiksbD1mKGspLG09Yyg1KSxuPWUobSksbz1jKDIyKSxwPWUobykscT1jKDIzKSxyPWYocSkscz1kKCk7cy5jcmVhdGU9ZCxyW1wiZGVmYXVsdFwiXShzKSxzW1wiZGVmYXVsdFwiXT1zLGJbXCJkZWZhdWx0XCJdPXMsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2lmKGEmJmEuX19lc01vZHVsZSlyZXR1cm4gYTt2YXIgYj17fTtpZihudWxsIT1hKWZvcih2YXIgYyBpbiBhKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGMpJiYoYltjXT1hW2NdKTtyZXR1cm4gYltcImRlZmF1bHRcIl09YSxifSxiLl9fZXNNb2R1bGU9ITB9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEsYixjKXt0aGlzLmhlbHBlcnM9YXx8e30sdGhpcy5wYXJ0aWFscz1ifHx7fSx0aGlzLmRlY29yYXRvcnM9Y3x8e30saS5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpLGoucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKX12YXIgZT1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5IYW5kbGViYXJzRW52aXJvbm1lbnQ9ZDt2YXIgZj1jKDUpLGc9Yyg2KSxoPWUoZyksaT1jKDEwKSxqPWMoMTgpLGs9YygyMCksbD1lKGspLG09XCI0LjAuNVwiO2IuVkVSU0lPTj1tO3ZhciBuPTc7Yi5DT01QSUxFUl9SRVZJU0lPTj1uO3ZhciBvPXsxOlwiPD0gMS4wLnJjLjJcIiwyOlwiPT0gMS4wLjAtcmMuM1wiLDM6XCI9PSAxLjAuMC1yYy40XCIsNDpcIj09IDEueC54XCIsNTpcIj09IDIuMC4wLWFscGhhLnhcIiw2OlwiPj0gMi4wLjAtYmV0YS4xXCIsNzpcIj49IDQuMC4wXCJ9O2IuUkVWSVNJT05fQ0hBTkdFUz1vO3ZhciBwPVwiW29iamVjdCBPYmplY3RdXCI7ZC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmQsbG9nZ2VyOmxbXCJkZWZhdWx0XCJdLGxvZzpsW1wiZGVmYXVsdFwiXS5sb2cscmVnaXN0ZXJIZWxwZXI6ZnVuY3Rpb24oYSxiKXtpZihmLnRvU3RyaW5nLmNhbGwoYSk9PT1wKXtpZihiKXRocm93IG5ldyBoW1wiZGVmYXVsdFwiXShcIkFyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVyc1wiKTtmLmV4dGVuZCh0aGlzLmhlbHBlcnMsYSl9ZWxzZSB0aGlzLmhlbHBlcnNbYV09Yn0sdW5yZWdpc3RlckhlbHBlcjpmdW5jdGlvbihhKXtkZWxldGUgdGhpcy5oZWxwZXJzW2FdfSxyZWdpc3RlclBhcnRpYWw6ZnVuY3Rpb24oYSxiKXtpZihmLnRvU3RyaW5nLmNhbGwoYSk9PT1wKWYuZXh0ZW5kKHRoaXMucGFydGlhbHMsYSk7ZWxzZXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYil0aHJvdyBuZXcgaFtcImRlZmF1bHRcIl0oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicrYSsnXCIgYXMgdW5kZWZpbmVkJyk7dGhpcy5wYXJ0aWFsc1thXT1ifX0sdW5yZWdpc3RlclBhcnRpYWw6ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMucGFydGlhbHNbYV19LHJlZ2lzdGVyRGVjb3JhdG9yOmZ1bmN0aW9uKGEsYil7aWYoZi50b1N0cmluZy5jYWxsKGEpPT09cCl7aWYoYil0aHJvdyBuZXcgaFtcImRlZmF1bHRcIl0oXCJBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnNcIik7Zi5leHRlbmQodGhpcy5kZWNvcmF0b3JzLGEpfWVsc2UgdGhpcy5kZWNvcmF0b3JzW2FdPWJ9LHVucmVnaXN0ZXJEZWNvcmF0b3I6ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1thXX19O3ZhciBxPWxbXCJkZWZhdWx0XCJdLmxvZztiLmxvZz1xLGIuY3JlYXRlRnJhbWU9Zi5jcmVhdGVGcmFtZSxiLmxvZ2dlcj1sW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBjKGEpe3JldHVybiBrW2FdfWZ1bmN0aW9uIGQoYSl7Zm9yKHZhciBiPTE7Yjxhcmd1bWVudHMubGVuZ3RoO2IrKylmb3IodmFyIGMgaW4gYXJndW1lbnRzW2JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbYl0sYykmJihhW2NdPWFyZ3VtZW50c1tiXVtjXSk7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX1mdW5jdGlvbiBmKGEpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXtpZihhJiZhLnRvSFRNTClyZXR1cm4gYS50b0hUTUwoKTtpZihudWxsPT1hKXJldHVyblwiXCI7aWYoIWEpcmV0dXJuIGErXCJcIjthPVwiXCIrYX1yZXR1cm4gbS50ZXN0KGEpP2EucmVwbGFjZShsLGMpOmF9ZnVuY3Rpb24gZyhhKXtyZXR1cm4hYSYmMCE9PWF8fCEoIXAoYSl8fDAhPT1hLmxlbmd0aCl9ZnVuY3Rpb24gaChhKXt2YXIgYj1kKHt9LGEpO3JldHVybiBiLl9wYXJlbnQ9YSxifWZ1bmN0aW9uIGkoYSxiKXtyZXR1cm4gYS5wYXRoPWIsYX1mdW5jdGlvbiBqKGEsYil7cmV0dXJuKGE/YStcIi5cIjpcIlwiKStifWIuX19lc01vZHVsZT0hMCxiLmV4dGVuZD1kLGIuaW5kZXhPZj1lLGIuZXNjYXBlRXhwcmVzc2lvbj1mLGIuaXNFbXB0eT1nLGIuY3JlYXRlRnJhbWU9aCxiLmJsb2NrUGFyYW1zPWksYi5hcHBlbmRDb250ZXh0UGF0aD1qO3ZhciBrPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiN4Mjc7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifSxsPS9bJjw+XCInYD1dL2csbT0vWyY8PlwiJ2A9XS8sbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2IudG9TdHJpbmc9bjt2YXIgbz1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhfTtvKC94LykmJihiLmlzRnVuY3Rpb249bz1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZcIltvYmplY3QgRnVuY3Rpb25dXCI9PT1uLmNhbGwoYSl9KSxiLmlzRnVuY3Rpb249bzt2YXIgcD1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm4hKCFhfHxcIm9iamVjdFwiIT10eXBlb2YgYSkmJlwiW29iamVjdCBBcnJheV1cIj09PW4uY2FsbChhKX07Yi5pc0FycmF5PXB9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEsYil7dmFyIGM9YiYmYi5sb2MsZz12b2lkIDAsaD12b2lkIDA7YyYmKGc9Yy5zdGFydC5saW5lLGg9Yy5zdGFydC5jb2x1bW4sYSs9XCIgLSBcIitnK1wiOlwiK2gpO2Zvcih2YXIgaT1FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLGEpLGo9MDtqPGYubGVuZ3RoO2orKyl0aGlzW2Zbal1dPWlbZltqXV07RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsZCk7dHJ5e2MmJih0aGlzLmxpbmVOdW1iZXI9ZyxlP09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29sdW1uXCIse3ZhbHVlOmh9KTp0aGlzLmNvbHVtbj1oKX1jYXRjaChrKXt9fXZhciBlPWMoNylbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZj1bXCJkZXNjcmlwdGlvblwiLFwiZmlsZU5hbWVcIixcImxpbmVOdW1iZXJcIixcIm1lc3NhZ2VcIixcIm5hbWVcIixcIm51bWJlclwiLFwic3RhY2tcIl07ZC5wcm90b3R5cGU9bmV3IEVycm9yLGJbXCJkZWZhdWx0XCJdPWQsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7YS5leHBvcnRzPXtcImRlZmF1bHRcIjpjKDgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yyg5KTthLmV4cG9ydHM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBkLnNldERlc2MoYSxiLGMpfX0sZnVuY3Rpb24oYSxiKXt2YXIgYz1PYmplY3Q7YS5leHBvcnRzPXtjcmVhdGU6Yy5jcmVhdGUsZ2V0UHJvdG86Yy5nZXRQcm90b3R5cGVPZixpc0VudW06e30ucHJvcGVydHlJc0VudW1lcmFibGUsZ2V0RGVzYzpjLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzZXREZXNjOmMuZGVmaW5lUHJvcGVydHksc2V0RGVzY3M6Yy5kZWZpbmVQcm9wZXJ0aWVzLGdldEtleXM6Yy5rZXlzLGdldE5hbWVzOmMuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzOmMuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGVhY2g6W10uZm9yRWFjaH19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEpe2dbXCJkZWZhdWx0XCJdKGEpLGlbXCJkZWZhdWx0XCJdKGEpLGtbXCJkZWZhdWx0XCJdKGEpLG1bXCJkZWZhdWx0XCJdKGEpLG9bXCJkZWZhdWx0XCJdKGEpLHFbXCJkZWZhdWx0XCJdKGEpLHNbXCJkZWZhdWx0XCJdKGEpfXZhciBlPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMCxiLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnM9ZDt2YXIgZj1jKDExKSxnPWUoZiksaD1jKDEyKSxpPWUoaCksaj1jKDEzKSxrPWUoaiksbD1jKDE0KSxtPWUobCksbj1jKDE1KSxvPWUobikscD1jKDE2KSxxPWUocCkscj1jKDE3KSxzPWUocil9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITA7dmFyIGQ9Yyg1KTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwiYmxvY2tIZWxwZXJNaXNzaW5nXCIsZnVuY3Rpb24oYixjKXt2YXIgZT1jLmludmVyc2UsZj1jLmZuO2lmKGI9PT0hMClyZXR1cm4gZih0aGlzKTtpZihiPT09ITF8fG51bGw9PWIpcmV0dXJuIGUodGhpcyk7aWYoZC5pc0FycmF5KGIpKXJldHVybiBiLmxlbmd0aD4wPyhjLmlkcyYmKGMuaWRzPVtjLm5hbWVdKSxhLmhlbHBlcnMuZWFjaChiLGMpKTplKHRoaXMpO2lmKGMuZGF0YSYmYy5pZHMpe3ZhciBnPWQuY3JlYXRlRnJhbWUoYy5kYXRhKTtnLmNvbnRleHRQYXRoPWQuYXBwZW5kQ29udGV4dFBhdGgoYy5kYXRhLmNvbnRleHRQYXRoLGMubmFtZSksYz17ZGF0YTpnfX1yZXR1cm4gZihiLGMpfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO3ZhciBkPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZT1jKDUpLGY9Yyg2KSxnPWQoZik7YltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7YS5yZWdpc3RlckhlbHBlcihcImVhY2hcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYixjLGYpe2omJihqLmtleT1iLGouaW5kZXg9YyxqLmZpcnN0PTA9PT1jLGoubGFzdD0hIWYsayYmKGouY29udGV4dFBhdGg9aytiKSksaSs9ZChhW2JdLHtkYXRhOmosYmxvY2tQYXJhbXM6ZS5ibG9ja1BhcmFtcyhbYVtiXSxiXSxbaytiLG51bGxdKX0pfWlmKCFiKXRocm93IG5ldyBnW1wiZGVmYXVsdFwiXShcIk11c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaFwiKTt2YXIgZD1iLmZuLGY9Yi5pbnZlcnNlLGg9MCxpPVwiXCIsaj12b2lkIDAsaz12b2lkIDA7aWYoYi5kYXRhJiZiLmlkcyYmKGs9ZS5hcHBlbmRDb250ZXh0UGF0aChiLmRhdGEuY29udGV4dFBhdGgsYi5pZHNbMF0pK1wiLlwiKSxlLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzKSksYi5kYXRhJiYoaj1lLmNyZWF0ZUZyYW1lKGIuZGF0YSkpLGEmJlwib2JqZWN0XCI9PXR5cGVvZiBhKWlmKGUuaXNBcnJheShhKSlmb3IodmFyIGw9YS5sZW5ndGg7aDxsO2grKyloIGluIGEmJmMoaCxoLGg9PT1hLmxlbmd0aC0xKTtlbHNle3ZhciBtPXZvaWQgMDtmb3IodmFyIG4gaW4gYSlhLmhhc093blByb3BlcnR5KG4pJiYodm9pZCAwIT09bSYmYyhtLGgtMSksbT1uLGgrKyk7dm9pZCAwIT09bSYmYyhtLGgtMSwhMCl9cmV0dXJuIDA9PT1oJiYoaT1mKHRoaXMpKSxpfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO3ZhciBkPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZT1jKDYpLGY9ZChlKTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwiaGVscGVyTWlzc2luZ1wiLGZ1bmN0aW9uKCl7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IGZbXCJkZWZhdWx0XCJdKCdNaXNzaW5nIGhlbHBlcjogXCInK2FyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLm5hbWUrJ1wiJyl9KX0sYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7Yi5fX2VzTW9kdWxlPSEwO3ZhciBkPWMoNSk7YltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7YS5yZWdpc3RlckhlbHBlcihcImlmXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gZC5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpcykpLCFiLmhhc2guaW5jbHVkZVplcm8mJiFhfHxkLmlzRW1wdHkoYSk/Yi5pbnZlcnNlKHRoaXMpOmIuZm4odGhpcyl9KSxhLnJlZ2lzdGVySGVscGVyKFwidW5sZXNzXCIsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5oZWxwZXJzW1wiaWZcIl0uY2FsbCh0aGlzLGIse2ZuOmMuaW52ZXJzZSxpbnZlcnNlOmMuZm4saGFzaDpjLmhhc2h9KX0pfSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7Yi5fX2VzTW9kdWxlPSEwLGJbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJIZWxwZXIoXCJsb2dcIixmdW5jdGlvbigpe2Zvcih2YXIgYj1bdm9pZCAwXSxjPWFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLGQ9MDtkPGFyZ3VtZW50cy5sZW5ndGgtMTtkKyspYi5wdXNoKGFyZ3VtZW50c1tkXSk7dmFyIGU9MTtudWxsIT1jLmhhc2gubGV2ZWw/ZT1jLmhhc2gubGV2ZWw6Yy5kYXRhJiZudWxsIT1jLmRhdGEubGV2ZWwmJihlPWMuZGF0YS5sZXZlbCksYlswXT1lLGEubG9nLmFwcGx5KGEsYil9KX0sYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2IuX19lc01vZHVsZT0hMCxiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwibG9va3VwXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYSYmYVtiXX0pfSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITA7dmFyIGQ9Yyg1KTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwid2l0aFwiLGZ1bmN0aW9uKGEsYil7ZC5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpcykpO3ZhciBjPWIuZm47aWYoZC5pc0VtcHR5KGEpKXJldHVybiBiLmludmVyc2UodGhpcyk7dmFyIGU9Yi5kYXRhO3JldHVybiBiLmRhdGEmJmIuaWRzJiYoZT1kLmNyZWF0ZUZyYW1lKGIuZGF0YSksZS5jb250ZXh0UGF0aD1kLmFwcGVuZENvbnRleHRQYXRoKGIuZGF0YS5jb250ZXh0UGF0aCxiLmlkc1swXSkpLGMoYSx7ZGF0YTplLGJsb2NrUGFyYW1zOmQuYmxvY2tQYXJhbXMoW2FdLFtlJiZlLmNvbnRleHRQYXRoXSl9KX0pfSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEpe2dbXCJkZWZhdWx0XCJdKGEpfXZhciBlPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMCxiLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM9ZDt2YXIgZj1jKDE5KSxnPWUoZil9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITA7dmFyIGQ9Yyg1KTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVyRGVjb3JhdG9yKFwiaW5saW5lXCIsZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGY9YTtyZXR1cm4gYi5wYXJ0aWFsc3x8KGIucGFydGlhbHM9e30sZj1mdW5jdGlvbihlLGYpe3ZhciBnPWMucGFydGlhbHM7Yy5wYXJ0aWFscz1kLmV4dGVuZCh7fSxnLGIucGFydGlhbHMpO3ZhciBoPWEoZSxmKTtyZXR1cm4gYy5wYXJ0aWFscz1nLGh9KSxiLnBhcnRpYWxzW2UuYXJnc1swXV09ZS5mbixmfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2IuX19lc01vZHVsZT0hMDt2YXIgZD1jKDUpLGU9e21ldGhvZE1hcDpbXCJkZWJ1Z1wiLFwiaW5mb1wiLFwid2FyblwiLFwiZXJyb3JcIl0sbGV2ZWw6XCJpbmZvXCIsbG9va3VwTGV2ZWw6ZnVuY3Rpb24oYSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe3ZhciBiPWQuaW5kZXhPZihlLm1ldGhvZE1hcCxhLnRvTG93ZXJDYXNlKCkpO2E9Yj49MD9iOnBhcnNlSW50KGEsMTApfXJldHVybiBhfSxsb2c6ZnVuY3Rpb24oYSl7aWYoYT1lLmxvb2t1cExldmVsKGEpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZlLmxvb2t1cExldmVsKGUubGV2ZWwpPD1hKXt2YXIgYj1lLm1ldGhvZE1hcFthXTtjb25zb2xlW2JdfHwoYj1cImxvZ1wiKTtmb3IodmFyIGM9YXJndW1lbnRzLmxlbmd0aCxkPUFycmF5KGM+MT9jLTE6MCksZj0xO2Y8YztmKyspZFtmLTFdPWFyZ3VtZW50c1tmXTtjb25zb2xlW2JdLmFwcGx5KGNvbnNvbGUsZCl9fX07YltcImRlZmF1bHRcIl09ZSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYyhhKXt0aGlzLnN0cmluZz1hfWIuX19lc01vZHVsZT0hMCxjLnByb3RvdHlwZS50b1N0cmluZz1jLnByb3RvdHlwZS50b0hUTUw9ZnVuY3Rpb24oKXtyZXR1cm5cIlwiK3RoaXMuc3RyaW5nfSxiW1wiZGVmYXVsdFwiXT1jLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSl7dmFyIGI9YSYmYVswXXx8MSxjPXIuQ09NUElMRVJfUkVWSVNJT047aWYoYiE9PWMpe2lmKGI8Yyl7dmFyIGQ9ci5SRVZJU0lPTl9DSEFOR0VTW2NdLGU9ci5SRVZJU0lPTl9DSEFOR0VTW2JdO3Rocm93IG5ldyBxW1wiZGVmYXVsdFwiXShcIlRlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuIFBsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKFwiK2QrXCIpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoXCIrZStcIikuXCIpfXRocm93IG5ldyBxW1wiZGVmYXVsdFwiXShcIlRlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIithWzFdK1wiKS5cIil9fWZ1bmN0aW9uIGUoYSxiKXtmdW5jdGlvbiBjKGMsZCxlKXtlLmhhc2gmJihkPW8uZXh0ZW5kKHt9LGQsZS5oYXNoKSxlLmlkcyYmKGUuaWRzWzBdPSEwKSksYz1iLlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcyxjLGQsZSk7dmFyIGY9Yi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcyxjLGQsZSk7aWYobnVsbD09ZiYmYi5jb21waWxlJiYoZS5wYXJ0aWFsc1tlLm5hbWVdPWIuY29tcGlsZShjLGEuY29tcGlsZXJPcHRpb25zLGIpLGY9ZS5wYXJ0aWFsc1tlLm5hbWVdKGQsZSkpLG51bGwhPWYpe2lmKGUuaW5kZW50KXtmb3IodmFyIGc9Zi5zcGxpdChcIlxcblwiKSxoPTAsaT1nLmxlbmd0aDtoPGkmJihnW2hdfHxoKzEhPT1pKTtoKyspZ1toXT1lLmluZGVudCtnW2hdO2Y9Zy5qb2luKFwiXFxuXCIpfXJldHVybiBmfXRocm93IG5ldyBxW1wiZGVmYXVsdFwiXShcIlRoZSBwYXJ0aWFsIFwiK2UubmFtZStcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpfWZ1bmN0aW9uIGQoYil7ZnVuY3Rpb24gYyhiKXtyZXR1cm5cIlwiK2EubWFpbihlLGIsZS5oZWxwZXJzLGUucGFydGlhbHMsZyxpLGgpfXZhciBmPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV0sZz1mLmRhdGE7ZC5fc2V0dXAoZiksIWYucGFydGlhbCYmYS51c2VEYXRhJiYoZz1qKGIsZykpO3ZhciBoPXZvaWQgMCxpPWEudXNlQmxvY2tQYXJhbXM/W106dm9pZCAwO3JldHVybiBhLnVzZURlcHRocyYmKGg9Zi5kZXB0aHM/YiE9Zi5kZXB0aHNbMF0/W2JdLmNvbmNhdChmLmRlcHRocyk6Zi5kZXB0aHM6W2JdKSwoYz1rKGEubWFpbixjLGUsZi5kZXB0aHN8fFtdLGcsaSkpKGIsZil9aWYoIWIpdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwiTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlXCIpO2lmKCFhfHwhYS5tYWluKXRocm93IG5ldyBxW1wiZGVmYXVsdFwiXShcIlVua25vd24gdGVtcGxhdGUgb2JqZWN0OiBcIit0eXBlb2YgYSk7YS5tYWluLmRlY29yYXRvcj1hLm1haW5fZCxiLlZNLmNoZWNrUmV2aXNpb24oYS5jb21waWxlcik7dmFyIGU9e3N0cmljdDpmdW5jdGlvbihhLGIpe2lmKCEoYiBpbiBhKSl0aHJvdyBuZXcgcVtcImRlZmF1bHRcIl0oJ1wiJytiKydcIiBub3QgZGVmaW5lZCBpbiAnK2EpO3JldHVybiBhW2JdfSxsb29rdXA6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgsZD0wO2Q8YztkKyspaWYoYVtkXSYmbnVsbCE9YVtkXVtiXSlyZXR1cm4gYVtkXVtiXX0sbGFtYmRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLmNhbGwoYik6YX0sZXNjYXBlRXhwcmVzc2lvbjpvLmVzY2FwZUV4cHJlc3Npb24saW52b2tlUGFydGlhbDpjLGZuOmZ1bmN0aW9uKGIpe3ZhciBjPWFbYl07cmV0dXJuIGMuZGVjb3JhdG9yPWFbYitcIl9kXCJdLGN9LHByb2dyYW1zOltdLHByb2dyYW06ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZz10aGlzLnByb2dyYW1zW2FdLGg9dGhpcy5mbihhKTtyZXR1cm4gYnx8ZXx8ZHx8Yz9nPWYodGhpcyxhLGgsYixjLGQsZSk6Z3x8KGc9dGhpcy5wcm9ncmFtc1thXT1mKHRoaXMsYSxoKSksZ30sZGF0YTpmdW5jdGlvbihhLGIpe2Zvcig7YSYmYi0tOylhPWEuX3BhcmVudDtyZXR1cm4gYX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hfHxiO3JldHVybiBhJiZiJiZhIT09YiYmKGM9by5leHRlbmQoe30sYixhKSksY30sbm9vcDpiLlZNLm5vb3AsY29tcGlsZXJJbmZvOmEuY29tcGlsZXJ9O3JldHVybiBkLmlzVG9wPSEwLGQuX3NldHVwPWZ1bmN0aW9uKGMpe2MucGFydGlhbD8oZS5oZWxwZXJzPWMuaGVscGVycyxlLnBhcnRpYWxzPWMucGFydGlhbHMsZS5kZWNvcmF0b3JzPWMuZGVjb3JhdG9ycyk6KGUuaGVscGVycz1lLm1lcmdlKGMuaGVscGVycyxiLmhlbHBlcnMpLGEudXNlUGFydGlhbCYmKGUucGFydGlhbHM9ZS5tZXJnZShjLnBhcnRpYWxzLGIucGFydGlhbHMpKSwoYS51c2VQYXJ0aWFsfHxhLnVzZURlY29yYXRvcnMpJiYoZS5kZWNvcmF0b3JzPWUubWVyZ2UoYy5kZWNvcmF0b3JzLGIuZGVjb3JhdG9ycykpKX0sZC5fY2hpbGQ9ZnVuY3Rpb24oYixjLGQsZyl7aWYoYS51c2VCbG9ja1BhcmFtcyYmIWQpdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwibXVzdCBwYXNzIGJsb2NrIHBhcmFtc1wiKTtpZihhLnVzZURlcHRocyYmIWcpdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwibXVzdCBwYXNzIHBhcmVudCBkZXB0aHNcIik7cmV0dXJuIGYoZSxiLGFbYl0sYywwLGQsZyl9LGR9ZnVuY3Rpb24gZihhLGIsYyxkLGUsZixnKXtmdW5jdGlvbiBoKGIpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV0saD1nO3JldHVybiBnJiZiIT1nWzBdJiYoaD1bYl0uY29uY2F0KGcpKSxjKGEsYixhLmhlbHBlcnMsYS5wYXJ0aWFscyxlLmRhdGF8fGQsZiYmW2UuYmxvY2tQYXJhbXNdLmNvbmNhdChmKSxoKX1yZXR1cm4gaD1rKGMsaCxhLGcsZCxmKSxoLnByb2dyYW09YixoLmRlcHRoPWc/Zy5sZW5ndGg6MCxoLmJsb2NrUGFyYW1zPWV8fDAsaH1mdW5jdGlvbiBnKGEsYixjKXtpZihhKWEuY2FsbHx8Yy5uYW1lfHwoYy5uYW1lPWEsYT1jLnBhcnRpYWxzW2FdKTtlbHNlIGlmKFwiQHBhcnRpYWwtYmxvY2tcIj09PWMubmFtZSl7Zm9yKHZhciBkPWMuZGF0YTtkW1wicGFydGlhbC1ibG9ja1wiXT09PWk7KWQ9ZC5fcGFyZW50O2E9ZFtcInBhcnRpYWwtYmxvY2tcIl0sZFtcInBhcnRpYWwtYmxvY2tcIl09aX1lbHNlIGE9Yy5wYXJ0aWFsc1tjLm5hbWVdO3JldHVybiBhfWZ1bmN0aW9uIGgoYSxiLGMpe2MucGFydGlhbD0hMCxjLmlkcyYmKGMuZGF0YS5jb250ZXh0UGF0aD1jLmlkc1swXXx8Yy5kYXRhLmNvbnRleHRQYXRoKTt2YXIgZD12b2lkIDA7aWYoYy5mbiYmYy5mbiE9PWkmJihjLmRhdGE9ci5jcmVhdGVGcmFtZShjLmRhdGEpLGQ9Yy5kYXRhW1wicGFydGlhbC1ibG9ja1wiXT1jLmZuLGQucGFydGlhbHMmJihjLnBhcnRpYWxzPW8uZXh0ZW5kKHt9LGMucGFydGlhbHMsZC5wYXJ0aWFscykpKSx2b2lkIDA9PT1hJiZkJiYoYT1kKSx2b2lkIDA9PT1hKXRocm93IG5ldyBxW1wiZGVmYXVsdFwiXShcIlRoZSBwYXJ0aWFsIFwiK2MubmFtZStcIiBjb3VsZCBub3QgYmUgZm91bmRcIik7aWYoYSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXJldHVybiBhKGIsYyl9ZnVuY3Rpb24gaSgpe3JldHVyblwiXCJ9ZnVuY3Rpb24gaihhLGIpe3JldHVybiBiJiZcInJvb3RcImluIGJ8fChiPWI/ci5jcmVhdGVGcmFtZShiKTp7fSxiLnJvb3Q9YSksYn1mdW5jdGlvbiBrKGEsYixjLGQsZSxmKXtpZihhLmRlY29yYXRvcil7dmFyIGc9e307Yj1hLmRlY29yYXRvcihiLGcsYyxkJiZkWzBdLGUsZixkKSxvLmV4dGVuZChiLGcpfXJldHVybiBifXZhciBsPWMoMylbXCJkZWZhdWx0XCJdLG09YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIuY2hlY2tSZXZpc2lvbj1kLGIudGVtcGxhdGU9ZSxiLndyYXBQcm9ncmFtPWYsYi5yZXNvbHZlUGFydGlhbD1nLGIuaW52b2tlUGFydGlhbD1oLGIubm9vcD1pO3ZhciBuPWMoNSksbz1sKG4pLHA9Yyg2KSxxPW0ocCkscj1jKDQpfSxmdW5jdGlvbihhLGIpeyhmdW5jdGlvbihjKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITAsYltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGM/Yzp3aW5kb3csZD1iLkhhbmRsZWJhcnM7YS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGIuSGFuZGxlYmFycz09PWEmJihiLkhhbmRsZWJhcnM9ZCksYX19LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0pLmNhbGwoYixmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITA7dmFyIGM9e2hlbHBlcnM6e2hlbHBlckV4cHJlc3Npb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJTdWJFeHByZXNzaW9uXCI9PT1hLnR5cGV8fChcIk11c3RhY2hlU3RhdGVtZW50XCI9PT1hLnR5cGV8fFwiQmxvY2tTdGF0ZW1lbnRcIj09PWEudHlwZSkmJiEhKGEucGFyYW1zJiZhLnBhcmFtcy5sZW5ndGh8fGEuaGFzaCl9LHNjb3BlZElkOmZ1bmN0aW9uKGEpe3JldHVybi9eXFwufHRoaXNcXGIvLnRlc3QoYS5vcmlnaW5hbCl9LHNpbXBsZUlkOmZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5wYXJ0cy5sZW5ndGgmJiFjLmhlbHBlcnMuc2NvcGVkSWQoYSkmJiFhLmRlcHRofX19O2JbXCJkZWZhdWx0XCJdPWMsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe2lmKFwiUHJvZ3JhbVwiPT09YS50eXBlKXJldHVybiBhO2hbXCJkZWZhdWx0XCJdLnl5PW4sbi5sb2NJbmZvPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgbi5Tb3VyY2VMb2NhdGlvbihiJiZiLnNyY05hbWUsYSl9O3ZhciBjPW5ldyBqW1wiZGVmYXVsdFwiXShiKTtyZXR1cm4gYy5hY2NlcHQoaFtcImRlZmF1bHRcIl0ucGFyc2UoYSkpfXZhciBlPWMoMSlbXCJkZWZhdWx0XCJdLGY9YygzKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIucGFyc2U9ZDt2YXIgZz1jKDI2KSxoPWUoZyksaT1jKDI3KSxqPWUoaSksaz1jKDI5KSxsPWYoayksbT1jKDUpO2IucGFyc2VyPWhbXCJkZWZhdWx0XCJdO3ZhciBuPXt9O20uZXh0ZW5kKG4sbCl9LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dGhpcy55eT17fX12YXIgYj17dHJhY2U6ZnVuY3Rpb24oKXt9LHl5Ont9LHN5bWJvbHNfOntlcnJvcjoyLHJvb3Q6Myxwcm9ncmFtOjQsRU9GOjUscHJvZ3JhbV9yZXBldGl0aW9uMDo2LHN0YXRlbWVudDo3LG11c3RhY2hlOjgsYmxvY2s6OSxyYXdCbG9jazoxMCxwYXJ0aWFsOjExLHBhcnRpYWxCbG9jazoxMixjb250ZW50OjEzLENPTU1FTlQ6MTQsQ09OVEVOVDoxNSxvcGVuUmF3QmxvY2s6MTYscmF3QmxvY2tfcmVwZXRpdGlvbl9wbHVzMDoxNyxFTkRfUkFXX0JMT0NLOjE4LE9QRU5fUkFXX0JMT0NLOjE5LGhlbHBlck5hbWU6MjAsb3BlblJhd0Jsb2NrX3JlcGV0aXRpb24wOjIxLG9wZW5SYXdCbG9ja19vcHRpb24wOjIyLENMT1NFX1JBV19CTE9DSzoyMyxvcGVuQmxvY2s6MjQsYmxvY2tfb3B0aW9uMDoyNSxjbG9zZUJsb2NrOjI2LG9wZW5JbnZlcnNlOjI3LGJsb2NrX29wdGlvbjE6MjgsT1BFTl9CTE9DSzoyOSxvcGVuQmxvY2tfcmVwZXRpdGlvbjA6MzAsb3BlbkJsb2NrX29wdGlvbjA6MzEsb3BlbkJsb2NrX29wdGlvbjE6MzIsQ0xPU0U6MzMsT1BFTl9JTlZFUlNFOjM0LG9wZW5JbnZlcnNlX3JlcGV0aXRpb24wOjM1LG9wZW5JbnZlcnNlX29wdGlvbjA6MzYsb3BlbkludmVyc2Vfb3B0aW9uMTozNyxvcGVuSW52ZXJzZUNoYWluOjM4LE9QRU5fSU5WRVJTRV9DSEFJTjozOSxvcGVuSW52ZXJzZUNoYWluX3JlcGV0aXRpb24wOjQwLG9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMDo0MSxvcGVuSW52ZXJzZUNoYWluX29wdGlvbjE6NDIsaW52ZXJzZUFuZFByb2dyYW06NDMsSU5WRVJTRTo0NCxpbnZlcnNlQ2hhaW46NDUsaW52ZXJzZUNoYWluX29wdGlvbjA6NDYsT1BFTl9FTkRCTE9DSzo0NyxPUEVOOjQ4LG11c3RhY2hlX3JlcGV0aXRpb24wOjQ5LG11c3RhY2hlX29wdGlvbjA6NTAsT1BFTl9VTkVTQ0FQRUQ6NTEsbXVzdGFjaGVfcmVwZXRpdGlvbjE6NTIsbXVzdGFjaGVfb3B0aW9uMTo1MyxDTE9TRV9VTkVTQ0FQRUQ6NTQsT1BFTl9QQVJUSUFMOjU1LHBhcnRpYWxOYW1lOjU2LHBhcnRpYWxfcmVwZXRpdGlvbjA6NTcscGFydGlhbF9vcHRpb24wOjU4LG9wZW5QYXJ0aWFsQmxvY2s6NTksT1BFTl9QQVJUSUFMX0JMT0NLOjYwLG9wZW5QYXJ0aWFsQmxvY2tfcmVwZXRpdGlvbjA6NjEsb3BlblBhcnRpYWxCbG9ja19vcHRpb24wOjYyLHBhcmFtOjYzLHNleHByOjY0LE9QRU5fU0VYUFI6NjUsc2V4cHJfcmVwZXRpdGlvbjA6NjYsc2V4cHJfb3B0aW9uMDo2NyxDTE9TRV9TRVhQUjo2OCxoYXNoOjY5LGhhc2hfcmVwZXRpdGlvbl9wbHVzMDo3MCxoYXNoU2VnbWVudDo3MSxJRDo3MixFUVVBTFM6NzMsYmxvY2tQYXJhbXM6NzQsT1BFTl9CTE9DS19QQVJBTVM6NzUsYmxvY2tQYXJhbXNfcmVwZXRpdGlvbl9wbHVzMDo3NixDTE9TRV9CTE9DS19QQVJBTVM6NzcscGF0aDo3OCxkYXRhTmFtZTo3OSxTVFJJTkc6ODAsTlVNQkVSOjgxLEJPT0xFQU46ODIsVU5ERUZJTkVEOjgzLE5VTEw6ODQsREFUQTo4NSxwYXRoU2VnbWVudHM6ODYsU0VQOjg3LCRhY2NlcHQ6MCwkZW5kOjF9LHRlcm1pbmFsc186ezI6XCJlcnJvclwiLDU6XCJFT0ZcIiwxNDpcIkNPTU1FTlRcIiwxNTpcIkNPTlRFTlRcIiwxODpcIkVORF9SQVdfQkxPQ0tcIiwxOTpcIk9QRU5fUkFXX0JMT0NLXCIsMjM6XCJDTE9TRV9SQVdfQkxPQ0tcIiwyOTpcIk9QRU5fQkxPQ0tcIiwzMzpcIkNMT1NFXCIsMzQ6XCJPUEVOX0lOVkVSU0VcIiwzOTpcIk9QRU5fSU5WRVJTRV9DSEFJTlwiLDQ0OlwiSU5WRVJTRVwiLDQ3OlwiT1BFTl9FTkRCTE9DS1wiLDQ4OlwiT1BFTlwiLDUxOlwiT1BFTl9VTkVTQ0FQRURcIiw1NDpcIkNMT1NFX1VORVNDQVBFRFwiLDU1OlwiT1BFTl9QQVJUSUFMXCIsNjA6XCJPUEVOX1BBUlRJQUxfQkxPQ0tcIiw2NTpcIk9QRU5fU0VYUFJcIiw2ODpcIkNMT1NFX1NFWFBSXCIsNzI6XCJJRFwiLDczOlwiRVFVQUxTXCIsNzU6XCJPUEVOX0JMT0NLX1BBUkFNU1wiLDc3OlwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCIsODA6XCJTVFJJTkdcIiw4MTpcIk5VTUJFUlwiLDgyOlwiQk9PTEVBTlwiLDgzOlwiVU5ERUZJTkVEXCIsODQ6XCJOVUxMXCIsODU6XCJEQVRBXCIsODc6XCJTRVBcIn0scHJvZHVjdGlvbnNfOlswLFszLDJdLFs0LDFdLFs3LDFdLFs3LDFdLFs3LDFdLFs3LDFdLFs3LDFdLFs3LDFdLFs3LDFdLFsxMywxXSxbMTAsM10sWzE2LDVdLFs5LDRdLFs5LDRdLFsyNCw2XSxbMjcsNl0sWzM4LDZdLFs0MywyXSxbNDUsM10sWzQ1LDFdLFsyNiwzXSxbOCw1XSxbOCw1XSxbMTEsNV0sWzEyLDNdLFs1OSw1XSxbNjMsMV0sWzYzLDFdLFs2NCw1XSxbNjksMV0sWzcxLDNdLFs3NCwzXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbMjAsMV0sWzU2LDFdLFs1NiwxXSxbNzksMl0sWzc4LDFdLFs4NiwzXSxbODYsMV0sWzYsMF0sWzYsMl0sWzE3LDFdLFsxNywyXSxbMjEsMF0sWzIxLDJdLFsyMiwwXSxbMjIsMV0sWzI1LDBdLFsyNSwxXSxbMjgsMF0sWzI4LDFdLFszMCwwXSxbMzAsMl0sWzMxLDBdLFszMSwxXSxbMzIsMF0sWzMyLDFdLFszNSwwXSxbMzUsMl0sWzM2LDBdLFszNiwxXSxbMzcsMF0sWzM3LDFdLFs0MCwwXSxbNDAsMl0sWzQxLDBdLFs0MSwxXSxbNDIsMF0sWzQyLDFdLFs0NiwwXSxbNDYsMV0sWzQ5LDBdLFs0OSwyXSxbNTAsMF0sWzUwLDFdLFs1MiwwXSxbNTIsMl0sWzUzLDBdLFs1MywxXSxbNTcsMF0sWzU3LDJdLFs1OCwwXSxbNTgsMV0sWzYxLDBdLFs2MSwyXSxbNjIsMF0sWzYyLDFdLFs2NiwwXSxbNjYsMl0sWzY3LDBdLFs2NywxXSxbNzAsMV0sWzcwLDJdLFs3NiwxXSxbNzYsMl1dLHBlcmZvcm1BY3Rpb246ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9Zi5sZW5ndGgtMTtzd2l0Y2goZSl7Y2FzZSAxOnJldHVybiBmW2gtMV07Y2FzZSAyOnRoaXMuJD1kLnByZXBhcmVQcm9ncmFtKGZbaF0pO2JyZWFrO2Nhc2UgMzp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDQ6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA1OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgNjp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDc6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA4OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgOTp0aGlzLiQ9e3R5cGU6XCJDb21tZW50U3RhdGVtZW50XCIsdmFsdWU6ZC5zdHJpcENvbW1lbnQoZltoXSksc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaF0sZltoXSksbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAxMDp0aGlzLiQ9e3R5cGU6XCJDb250ZW50U3RhdGVtZW50XCIsb3JpZ2luYWw6ZltoXSx2YWx1ZTpmW2hdLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMTE6dGhpcy4kPWQucHJlcGFyZVJhd0Jsb2NrKGZbaC0yXSxmW2gtMV0sZltoXSx0aGlzLl8kKTticmVhaztjYXNlIDEyOnRoaXMuJD17cGF0aDpmW2gtM10scGFyYW1zOmZbaC0yXSxoYXNoOmZbaC0xXX07YnJlYWs7Y2FzZSAxMzp0aGlzLiQ9ZC5wcmVwYXJlQmxvY2soZltoLTNdLGZbaC0yXSxmW2gtMV0sZltoXSwhMSx0aGlzLl8kKTticmVhaztjYXNlIDE0OnRoaXMuJD1kLnByZXBhcmVCbG9jayhmW2gtM10sZltoLTJdLGZbaC0xXSxmW2hdLCEwLHRoaXMuXyQpO2JyZWFrO2Nhc2UgMTU6dGhpcy4kPXtvcGVuOmZbaC01XSxwYXRoOmZbaC00XSxwYXJhbXM6ZltoLTNdLGhhc2g6ZltoLTJdLGJsb2NrUGFyYW1zOmZbaC0xXSxzdHJpcDpkLnN0cmlwRmxhZ3MoZltoLTVdLGZbaF0pfTticmVhaztjYXNlIDE2OnRoaXMuJD17cGF0aDpmW2gtNF0scGFyYW1zOmZbaC0zXSxoYXNoOmZbaC0yXSxibG9ja1BhcmFtczpmW2gtMV0sc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC01XSxmW2hdKX07YnJlYWs7Y2FzZSAxNzp0aGlzLiQ9e3BhdGg6ZltoLTRdLHBhcmFtczpmW2gtM10saGFzaDpmW2gtMl0sYmxvY2tQYXJhbXM6ZltoLTFdLHN0cmlwOmQuc3RyaXBGbGFncyhmW2gtNV0sZltoXSl9O2JyZWFrO2Nhc2UgMTg6dGhpcy4kPXtzdHJpcDpkLnN0cmlwRmxhZ3MoZltoLTFdLGZbaC0xXSkscHJvZ3JhbTpmW2hdfTticmVhaztjYXNlIDE5OnZhciBpPWQucHJlcGFyZUJsb2NrKGZbaC0yXSxmW2gtMV0sZltoXSxmW2hdLCExLHRoaXMuXyQpLGo9ZC5wcmVwYXJlUHJvZ3JhbShbaV0sZltoLTFdLmxvYyk7ai5jaGFpbmVkPSEwLHRoaXMuJD17c3RyaXA6ZltoLTJdLnN0cmlwLHByb2dyYW06aixjaGFpbjohMH07YnJlYWs7Y2FzZSAyMDp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDIxOnRoaXMuJD17cGF0aDpmW2gtMV0sc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC0yXSxmW2hdKX07YnJlYWs7Y2FzZSAyMjp0aGlzLiQ9ZC5wcmVwYXJlTXVzdGFjaGUoZltoLTNdLGZbaC0yXSxmW2gtMV0sZltoLTRdLGQuc3RyaXBGbGFncyhmW2gtNF0sZltoXSksdGhpcy5fJCk7YnJlYWs7Y2FzZSAyMzp0aGlzLiQ9ZC5wcmVwYXJlTXVzdGFjaGUoZltoLTNdLGZbaC0yXSxmW2gtMV0sZltoLTRdLGQuc3RyaXBGbGFncyhmW2gtNF0sZltoXSksdGhpcy5fJCk7YnJlYWs7Y2FzZSAyNDp0aGlzLiQ9e3R5cGU6XCJQYXJ0aWFsU3RhdGVtZW50XCIsbmFtZTpmW2gtM10scGFyYW1zOmZbaC0yXSxoYXNoOmZbaC0xXSxpbmRlbnQ6XCJcIixzdHJpcDpkLnN0cmlwRmxhZ3MoZltoLTRdLGZbaF0pLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMjU6dGhpcy4kPWQucHJlcGFyZVBhcnRpYWxCbG9jayhmW2gtMl0sZltoLTFdLGZbaF0sdGhpcy5fJCk7YnJlYWs7Y2FzZSAyNjp0aGlzLiQ9e3BhdGg6ZltoLTNdLHBhcmFtczpmW2gtMl0saGFzaDpmW2gtMV0sc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC00XSxmW2hdKX07YnJlYWs7Y2FzZSAyNzp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDI4OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgMjk6dGhpcy4kPXt0eXBlOlwiU3ViRXhwcmVzc2lvblwiLHBhdGg6ZltoLTNdLHBhcmFtczpmW2gtMl0saGFzaDpmW2gtMV0sbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAzMDp0aGlzLiQ9e3R5cGU6XCJIYXNoXCIscGFpcnM6ZltoXSxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDMxOnRoaXMuJD17dHlwZTpcIkhhc2hQYWlyXCIsa2V5OmQuaWQoZltoLTJdKSx2YWx1ZTpmW2hdLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMzI6dGhpcy4kPWQuaWQoZltoLTFdKTticmVhaztjYXNlIDMzOnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgMzQ6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSAzNTp0aGlzLiQ9e3R5cGU6XCJTdHJpbmdMaXRlcmFsXCIsdmFsdWU6ZltoXSxvcmlnaW5hbDpmW2hdLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMzY6dGhpcy4kPXt0eXBlOlwiTnVtYmVyTGl0ZXJhbFwiLHZhbHVlOk51bWJlcihmW2hdKSxvcmlnaW5hbDpOdW1iZXIoZltoXSksbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAzNzp0aGlzLiQ9e3R5cGU6XCJCb29sZWFuTGl0ZXJhbFwiLHZhbHVlOlwidHJ1ZVwiPT09ZltoXSxvcmlnaW5hbDpcInRydWVcIj09PWZbaF0sbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAzODp0aGlzLiQ9e3R5cGU6XCJVbmRlZmluZWRMaXRlcmFsXCIsb3JpZ2luYWw6dm9pZCAwLHZhbHVlOnZvaWQgMCxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDM5OnRoaXMuJD17dHlwZTpcIk51bGxMaXRlcmFsXCIsb3JpZ2luYWw6bnVsbCx2YWx1ZTpudWxsLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgNDA6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA0MTp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDQyOnRoaXMuJD1kLnByZXBhcmVQYXRoKCEwLGZbaF0sdGhpcy5fJCk7YnJlYWs7Y2FzZSA0Mzp0aGlzLiQ9ZC5wcmVwYXJlUGF0aCghMSxmW2hdLHRoaXMuXyQpO2JyZWFrO2Nhc2UgNDQ6ZltoLTJdLnB1c2goe3BhcnQ6ZC5pZChmW2hdKSxvcmlnaW5hbDpmW2hdLHNlcGFyYXRvcjpmW2gtMV19KSx0aGlzLiQ9ZltoLTJdO2JyZWFrO2Nhc2UgNDU6dGhpcy4kPVt7cGFydDpkLmlkKGZbaF0pLG9yaWdpbmFsOmZbaF19XTticmVhaztjYXNlIDQ2OnRoaXMuJD1bXTticmVhaztjYXNlIDQ3OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgNDg6dGhpcy4kPVtmW2hdXTticmVhaztjYXNlIDQ5OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgNTA6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgNTE6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA1ODp0aGlzLiQ9W107YnJlYWs7Y2FzZSA1OTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDY0OnRoaXMuJD1bXTticmVhaztjYXNlIDY1OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgNzA6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgNzE6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA3ODp0aGlzLiQ9W107YnJlYWs7Y2FzZSA3OTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDgyOnRoaXMuJD1bXTticmVhaztjYXNlIDgzOmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgODY6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgODc6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA5MDp0aGlzLiQ9W107YnJlYWs7Y2FzZSA5MTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDk0OnRoaXMuJD1bXTticmVhaztjYXNlIDk1OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgOTg6dGhpcy4kPVtmW2hdXTticmVhaztjYXNlIDk5OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgMTAwOnRoaXMuJD1bZltoXV07YnJlYWs7Y2FzZSAxMDE6ZltoLTFdLnB1c2goZltoXSl9fSx0YWJsZTpbezM6MSw0OjIsNTpbMiw0Nl0sNjozLDE0OlsyLDQ2XSwxNTpbMiw0Nl0sMTk6WzIsNDZdLDI5OlsyLDQ2XSwzNDpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MTpbM119LHs1OlsxLDRdfSx7NTpbMiwyXSw3OjUsODo2LDk6NywxMDo4LDExOjksMTI6MTAsMTM6MTEsMTQ6WzEsMTJdLDE1OlsxLDIwXSwxNjoxNywxOTpbMSwyM10sMjQ6MTUsMjc6MTYsMjk6WzEsMjFdLDM0OlsxLDIyXSwzOTpbMiwyXSw0NDpbMiwyXSw0NzpbMiwyXSw0ODpbMSwxM10sNTE6WzEsMTRdLDU1OlsxLDE4XSw1OToxOSw2MDpbMSwyNF19LHsxOlsyLDFdfSx7NTpbMiw0N10sMTQ6WzIsNDddLDE1OlsyLDQ3XSwxOTpbMiw0N10sMjk6WzIsNDddLDM0OlsyLDQ3XSwzOTpbMiw0N10sNDQ6WzIsNDddLDQ3OlsyLDQ3XSw0ODpbMiw0N10sNTE6WzIsNDddLDU1OlsyLDQ3XSw2MDpbMiw0N119LHs1OlsyLDNdLDE0OlsyLDNdLDE1OlsyLDNdLDE5OlsyLDNdLDI5OlsyLDNdLDM0OlsyLDNdLDM5OlsyLDNdLDQ0OlsyLDNdLDQ3OlsyLDNdLDQ4OlsyLDNdLDUxOlsyLDNdLDU1OlsyLDNdLDYwOlsyLDNdfSx7NTpbMiw0XSwxNDpbMiw0XSwxNTpbMiw0XSwxOTpbMiw0XSwyOTpbMiw0XSwzNDpbMiw0XSwzOTpbMiw0XSw0NDpbMiw0XSw0NzpbMiw0XSw0ODpbMiw0XSw1MTpbMiw0XSw1NTpbMiw0XSw2MDpbMiw0XX0sezU6WzIsNV0sMTQ6WzIsNV0sMTU6WzIsNV0sMTk6WzIsNV0sMjk6WzIsNV0sMzQ6WzIsNV0sMzk6WzIsNV0sNDQ6WzIsNV0sNDc6WzIsNV0sNDg6WzIsNV0sNTE6WzIsNV0sNTU6WzIsNV0sNjA6WzIsNV19LHs1OlsyLDZdLDE0OlsyLDZdLDE1OlsyLDZdLDE5OlsyLDZdLDI5OlsyLDZdLDM0OlsyLDZdLDM5OlsyLDZdLDQ0OlsyLDZdLDQ3OlsyLDZdLDQ4OlsyLDZdLDUxOlsyLDZdLDU1OlsyLDZdLDYwOlsyLDZdfSx7NTpbMiw3XSwxNDpbMiw3XSwxNTpbMiw3XSwxOTpbMiw3XSwyOTpbMiw3XSwzNDpbMiw3XSwzOTpbMiw3XSw0NDpbMiw3XSw0NzpbMiw3XSw0ODpbMiw3XSw1MTpbMiw3XSw1NTpbMiw3XSw2MDpbMiw3XX0sezU6WzIsOF0sMTQ6WzIsOF0sMTU6WzIsOF0sMTk6WzIsOF0sMjk6WzIsOF0sMzQ6WzIsOF0sMzk6WzIsOF0sNDQ6WzIsOF0sNDc6WzIsOF0sNDg6WzIsOF0sNTE6WzIsOF0sNTU6WzIsOF0sNjA6WzIsOF19LHs1OlsyLDldLDE0OlsyLDldLDE1OlsyLDldLDE5OlsyLDldLDI5OlsyLDldLDM0OlsyLDldLDM5OlsyLDldLDQ0OlsyLDldLDQ3OlsyLDldLDQ4OlsyLDldLDUxOlsyLDldLDU1OlsyLDldLDYwOlsyLDldfSx7MjA6MjUsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6MzYsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NDozNyw2OjMsMTQ6WzIsNDZdLDE1OlsyLDQ2XSwxOTpbMiw0Nl0sMjk6WzIsNDZdLDM0OlsyLDQ2XSwzOTpbMiw0Nl0sNDQ6WzIsNDZdLDQ3OlsyLDQ2XSw0ODpbMiw0Nl0sNTE6WzIsNDZdLDU1OlsyLDQ2XSw2MDpbMiw0Nl19LHs0OjM4LDY6MywxNDpbMiw0Nl0sMTU6WzIsNDZdLDE5OlsyLDQ2XSwyOTpbMiw0Nl0sMzQ6WzIsNDZdLDQ0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MTM6NDAsMTU6WzEsMjBdLDE3OjM5fSx7MjA6NDIsNTY6NDEsNjQ6NDMsNjU6WzEsNDRdLDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezQ6NDUsNjozLDE0OlsyLDQ2XSwxNTpbMiw0Nl0sMTk6WzIsNDZdLDI5OlsyLDQ2XSwzNDpbMiw0Nl0sNDc6WzIsNDZdLDQ4OlsyLDQ2XSw1MTpbMiw0Nl0sNTU6WzIsNDZdLDYwOlsyLDQ2XX0sezU6WzIsMTBdLDE0OlsyLDEwXSwxNTpbMiwxMF0sMTg6WzIsMTBdLDE5OlsyLDEwXSwyOTpbMiwxMF0sMzQ6WzIsMTBdLDM5OlsyLDEwXSw0NDpbMiwxMF0sNDc6WzIsMTBdLDQ4OlsyLDEwXSw1MTpbMiwxMF0sNTU6WzIsMTBdLDYwOlsyLDEwXX0sezIwOjQ2LDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezIwOjQ3LDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezIwOjQ4LDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezIwOjQyLDU2OjQ5LDY0OjQzLDY1OlsxLDQ0XSw3MjpbMSwzNV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHszMzpbMiw3OF0sNDk6NTAsNjU6WzIsNzhdLDcyOlsyLDc4XSw4MDpbMiw3OF0sODE6WzIsNzhdLDgyOlsyLDc4XSw4MzpbMiw3OF0sODQ6WzIsNzhdLDg1OlsyLDc4XX0sezIzOlsyLDMzXSwzMzpbMiwzM10sNTQ6WzIsMzNdLDY1OlsyLDMzXSw2ODpbMiwzM10sNzI6WzIsMzNdLDc1OlsyLDMzXSw4MDpbMiwzM10sODE6WzIsMzNdLDgyOlsyLDMzXSw4MzpbMiwzM10sODQ6WzIsMzNdLDg1OlsyLDMzXX0sezIzOlsyLDM0XSwzMzpbMiwzNF0sNTQ6WzIsMzRdLDY1OlsyLDM0XSw2ODpbMiwzNF0sNzI6WzIsMzRdLDc1OlsyLDM0XSw4MDpbMiwzNF0sODE6WzIsMzRdLDgyOlsyLDM0XSw4MzpbMiwzNF0sODQ6WzIsMzRdLDg1OlsyLDM0XX0sezIzOlsyLDM1XSwzMzpbMiwzNV0sNTQ6WzIsMzVdLDY1OlsyLDM1XSw2ODpbMiwzNV0sNzI6WzIsMzVdLDc1OlsyLDM1XSw4MDpbMiwzNV0sODE6WzIsMzVdLDgyOlsyLDM1XSw4MzpbMiwzNV0sODQ6WzIsMzVdLDg1OlsyLDM1XX0sezIzOlsyLDM2XSwzMzpbMiwzNl0sNTQ6WzIsMzZdLDY1OlsyLDM2XSw2ODpbMiwzNl0sNzI6WzIsMzZdLDc1OlsyLDM2XSw4MDpbMiwzNl0sODE6WzIsMzZdLDgyOlsyLDM2XSw4MzpbMiwzNl0sODQ6WzIsMzZdLDg1OlsyLDM2XX0sezIzOlsyLDM3XSwzMzpbMiwzN10sNTQ6WzIsMzddLDY1OlsyLDM3XSw2ODpbMiwzN10sNzI6WzIsMzddLDc1OlsyLDM3XSw4MDpbMiwzN10sODE6WzIsMzddLDgyOlsyLDM3XSw4MzpbMiwzN10sODQ6WzIsMzddLDg1OlsyLDM3XX0sezIzOlsyLDM4XSwzMzpbMiwzOF0sNTQ6WzIsMzhdLDY1OlsyLDM4XSw2ODpbMiwzOF0sNzI6WzIsMzhdLDc1OlsyLDM4XSw4MDpbMiwzOF0sODE6WzIsMzhdLDgyOlsyLDM4XSw4MzpbMiwzOF0sODQ6WzIsMzhdLDg1OlsyLDM4XX0sezIzOlsyLDM5XSwzMzpbMiwzOV0sNTQ6WzIsMzldLDY1OlsyLDM5XSw2ODpbMiwzOV0sNzI6WzIsMzldLDc1OlsyLDM5XSw4MDpbMiwzOV0sODE6WzIsMzldLDgyOlsyLDM5XSw4MzpbMiwzOV0sODQ6WzIsMzldLDg1OlsyLDM5XX0sezIzOlsyLDQzXSwzMzpbMiw0M10sNTQ6WzIsNDNdLDY1OlsyLDQzXSw2ODpbMiw0M10sNzI6WzIsNDNdLDc1OlsyLDQzXSw4MDpbMiw0M10sODE6WzIsNDNdLDgyOlsyLDQzXSw4MzpbMiw0M10sODQ6WzIsNDNdLDg1OlsyLDQzXSw4NzpbMSw1MV19LHs3MjpbMSwzNV0sODY6NTJ9LHsyMzpbMiw0NV0sMzM6WzIsNDVdLDU0OlsyLDQ1XSw2NTpbMiw0NV0sNjg6WzIsNDVdLDcyOlsyLDQ1XSw3NTpbMiw0NV0sODA6WzIsNDVdLDgxOlsyLDQ1XSw4MjpbMiw0NV0sODM6WzIsNDVdLDg0OlsyLDQ1XSw4NTpbMiw0NV0sODc6WzIsNDVdfSx7NTI6NTMsNTQ6WzIsODJdLDY1OlsyLDgyXSw3MjpbMiw4Ml0sODA6WzIsODJdLDgxOlsyLDgyXSw4MjpbMiw4Ml0sODM6WzIsODJdLDg0OlsyLDgyXSw4NTpbMiw4Ml19LHsyNTo1NCwzODo1NiwzOTpbMSw1OF0sNDM6NTcsNDQ6WzEsNTldLDQ1OjU1LDQ3OlsyLDU0XX0sezI4OjYwLDQzOjYxLDQ0OlsxLDU5XSw0NzpbMiw1Nl19LHsxMzo2MywxNTpbMSwyMF0sMTg6WzEsNjJdfSx7MTU6WzIsNDhdLDE4OlsyLDQ4XX0sezMzOlsyLDg2XSw1Nzo2NCw2NTpbMiw4Nl0sNzI6WzIsODZdLDgwOlsyLDg2XSw4MTpbMiw4Nl0sODI6WzIsODZdLDgzOlsyLDg2XSw4NDpbMiw4Nl0sODU6WzIsODZdfSx7MzM6WzIsNDBdLDY1OlsyLDQwXSw3MjpbMiw0MF0sODA6WzIsNDBdLDgxOlsyLDQwXSw4MjpbMiw0MF0sODM6WzIsNDBdLDg0OlsyLDQwXSw4NTpbMiw0MF19LHszMzpbMiw0MV0sNjU6WzIsNDFdLDcyOlsyLDQxXSw4MDpbMiw0MV0sODE6WzIsNDFdLDgyOlsyLDQxXSw4MzpbMiw0MV0sODQ6WzIsNDFdLDg1OlsyLDQxXX0sezIwOjY1LDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezI2OjY2LDQ3OlsxLDY3XX0sezMwOjY4LDMzOlsyLDU4XSw2NTpbMiw1OF0sNzI6WzIsNThdLDc1OlsyLDU4XSw4MDpbMiw1OF0sODE6WzIsNThdLDgyOlsyLDU4XSw4MzpbMiw1OF0sODQ6WzIsNThdLDg1OlsyLDU4XX0sezMzOlsyLDY0XSwzNTo2OSw2NTpbMiw2NF0sNzI6WzIsNjRdLDc1OlsyLDY0XSw4MDpbMiw2NF0sODE6WzIsNjRdLDgyOlsyLDY0XSw4MzpbMiw2NF0sODQ6WzIsNjRdLDg1OlsyLDY0XX0sezIxOjcwLDIzOlsyLDUwXSw2NTpbMiw1MF0sNzI6WzIsNTBdLDgwOlsyLDUwXSw4MTpbMiw1MF0sODI6WzIsNTBdLDgzOlsyLDUwXSw4NDpbMiw1MF0sODU6WzIsNTBdfSx7MzM6WzIsOTBdLDYxOjcxLDY1OlsyLDkwXSw3MjpbMiw5MF0sODA6WzIsOTBdLDgxOlsyLDkwXSw4MjpbMiw5MF0sODM6WzIsOTBdLDg0OlsyLDkwXSw4NTpbMiw5MF19LHsyMDo3NSwzMzpbMiw4MF0sNTA6NzIsNjM6NzMsNjQ6NzYsNjU6WzEsNDRdLDY5Ojc0LDcwOjc3LDcxOjc4LDcyOlsxLDc5XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezcyOlsxLDgwXX0sezIzOlsyLDQyXSwzMzpbMiw0Ml0sNTQ6WzIsNDJdLDY1OlsyLDQyXSw2ODpbMiw0Ml0sNzI6WzIsNDJdLDc1OlsyLDQyXSw4MDpbMiw0Ml0sODE6WzIsNDJdLDgyOlsyLDQyXSw4MzpbMiw0Ml0sODQ6WzIsNDJdLDg1OlsyLDQyXSw4NzpbMSw1MV19LHsyMDo3NSw1Mzo4MSw1NDpbMiw4NF0sNjM6ODIsNjQ6NzYsNjU6WzEsNDRdLDY5OjgzLDcwOjc3LDcxOjc4LDcyOlsxLDc5XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezI2Ojg0LDQ3OlsxLDY3XX0sezQ3OlsyLDU1XX0sezQ6ODUsNjozLDE0OlsyLDQ2XSwxNTpbMiw0Nl0sMTk6WzIsNDZdLDI5OlsyLDQ2XSwzNDpbMiw0Nl0sMzk6WzIsNDZdLDQ0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7NDc6WzIsMjBdfSx7MjA6ODYsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NDo4Nyw2OjMsMTQ6WzIsNDZdLDE1OlsyLDQ2XSwxOTpbMiw0Nl0sMjk6WzIsNDZdLDM0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MjY6ODgsNDc6WzEsNjddfSx7NDc6WzIsNTddfSx7NTpbMiwxMV0sMTQ6WzIsMTFdLDE1OlsyLDExXSwxOTpbMiwxMV0sMjk6WzIsMTFdLDM0OlsyLDExXSwzOTpbMiwxMV0sNDQ6WzIsMTFdLDQ3OlsyLDExXSw0ODpbMiwxMV0sNTE6WzIsMTFdLDU1OlsyLDExXSw2MDpbMiwxMV19LHsxNTpbMiw0OV0sMTg6WzIsNDldfSx7MjA6NzUsMzM6WzIsODhdLDU4Ojg5LDYzOjkwLDY0Ojc2LDY1OlsxLDQ0XSw2OTo5MSw3MDo3Nyw3MTo3OCw3MjpbMSw3OV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHs2NTpbMiw5NF0sNjY6OTIsNjg6WzIsOTRdLDcyOlsyLDk0XSw4MDpbMiw5NF0sODE6WzIsOTRdLDgyOlsyLDk0XSw4MzpbMiw5NF0sODQ6WzIsOTRdLDg1OlsyLDk0XX0sezU6WzIsMjVdLDE0OlsyLDI1XSwxNTpbMiwyNV0sMTk6WzIsMjVdLDI5OlsyLDI1XSwzNDpbMiwyNV0sMzk6WzIsMjVdLDQ0OlsyLDI1XSw0NzpbMiwyNV0sNDg6WzIsMjVdLDUxOlsyLDI1XSw1NTpbMiwyNV0sNjA6WzIsMjVdfSx7MjA6OTMsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzUsMzE6OTQsMzM6WzIsNjBdLDYzOjk1LDY0Ojc2LDY1OlsxLDQ0XSw2OTo5Niw3MDo3Nyw3MTo3OCw3MjpbMSw3OV0sNzU6WzIsNjBdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzUsMzM6WzIsNjZdLDM2Ojk3LDYzOjk4LDY0Ojc2LDY1OlsxLDQ0XSw2OTo5OSw3MDo3Nyw3MTo3OCw3MjpbMSw3OV0sNzU6WzIsNjZdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzUsMjI6MTAwLDIzOlsyLDUyXSw2MzoxMDEsNjQ6NzYsNjU6WzEsNDRdLDY5OjEwMiw3MDo3Nyw3MTo3OCw3MjpbMSw3OV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHsyMDo3NSwzMzpbMiw5Ml0sNjI6MTAzLDYzOjEwNCw2NDo3Niw2NTpbMSw0NF0sNjk6MTA1LDcwOjc3LDcxOjc4LDcyOlsxLDc5XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezMzOlsxLDEwNl19LHszMzpbMiw3OV0sNjU6WzIsNzldLDcyOlsyLDc5XSw4MDpbMiw3OV0sODE6WzIsNzldLDgyOlsyLDc5XSw4MzpbMiw3OV0sODQ6WzIsNzldLDg1OlsyLDc5XX0sezMzOlsyLDgxXX0sezIzOlsyLDI3XSwzMzpbMiwyN10sNTQ6WzIsMjddLDY1OlsyLDI3XSw2ODpbMiwyN10sNzI6WzIsMjddLDc1OlsyLDI3XSw4MDpbMiwyN10sODE6WzIsMjddLDgyOlsyLDI3XSw4MzpbMiwyN10sODQ6WzIsMjddLDg1OlsyLDI3XX0sezIzOlsyLDI4XSwzMzpbMiwyOF0sNTQ6WzIsMjhdLDY1OlsyLDI4XSw2ODpbMiwyOF0sNzI6WzIsMjhdLDc1OlsyLDI4XSw4MDpbMiwyOF0sODE6WzIsMjhdLDgyOlsyLDI4XSw4MzpbMiwyOF0sODQ6WzIsMjhdLDg1OlsyLDI4XX0sezIzOlsyLDMwXSwzMzpbMiwzMF0sNTQ6WzIsMzBdLDY4OlsyLDMwXSw3MToxMDcsNzI6WzEsMTA4XSw3NTpbMiwzMF19LHsyMzpbMiw5OF0sMzM6WzIsOThdLDU0OlsyLDk4XSw2ODpbMiw5OF0sNzI6WzIsOThdLDc1OlsyLDk4XX0sezIzOlsyLDQ1XSwzMzpbMiw0NV0sNTQ6WzIsNDVdLDY1OlsyLDQ1XSw2ODpbMiw0NV0sNzI6WzIsNDVdLDczOlsxLDEwOV0sNzU6WzIsNDVdLDgwOlsyLDQ1XSw4MTpbMiw0NV0sODI6WzIsNDVdLDgzOlsyLDQ1XSw4NDpbMiw0NV0sODU6WzIsNDVdLDg3OlsyLDQ1XX0sezIzOlsyLDQ0XSwzMzpbMiw0NF0sNTQ6WzIsNDRdLDY1OlsyLDQ0XSw2ODpbMiw0NF0sNzI6WzIsNDRdLDc1OlsyLDQ0XSw4MDpbMiw0NF0sODE6WzIsNDRdLDgyOlsyLDQ0XSw4MzpbMiw0NF0sODQ6WzIsNDRdLDg1OlsyLDQ0XSw4NzpbMiw0NF19LHs1NDpbMSwxMTBdfSx7NTQ6WzIsODNdLDY1OlsyLDgzXSw3MjpbMiw4M10sODA6WzIsODNdLDgxOlsyLDgzXSw4MjpbMiw4M10sODM6WzIsODNdLDg0OlsyLDgzXSw4NTpbMiw4M119LHs1NDpbMiw4NV19LHs1OlsyLDEzXSwxNDpbMiwxM10sMTU6WzIsMTNdLDE5OlsyLDEzXSwyOTpbMiwxM10sMzQ6WzIsMTNdLDM5OlsyLDEzXSw0NDpbMiwxM10sNDc6WzIsMTNdLDQ4OlsyLDEzXSw1MTpbMiwxM10sNTU6WzIsMTNdLDYwOlsyLDEzXX0sezM4OjU2LDM5OlsxLDU4XSw0Mzo1Nyw0NDpbMSw1OV0sNDU6MTEyLDQ2OjExMSw0NzpbMiw3Nl19LHszMzpbMiw3MF0sNDA6MTEzLDY1OlsyLDcwXSw3MjpbMiw3MF0sNzU6WzIsNzBdLDgwOlsyLDcwXSw4MTpbMiw3MF0sODI6WzIsNzBdLDgzOlsyLDcwXSw4NDpbMiw3MF0sODU6WzIsNzBdfSx7NDc6WzIsMThdfSx7NTpbMiwxNF0sMTQ6WzIsMTRdLDE1OlsyLDE0XSwxOTpbMiwxNF0sMjk6WzIsMTRdLDM0OlsyLDE0XSwzOTpbMiwxNF0sNDQ6WzIsMTRdLDQ3OlsyLDE0XSw0ODpbMiwxNF0sNTE6WzIsMTRdLDU1OlsyLDE0XSw2MDpbMiwxNF19LHszMzpbMSwxMTRdfSx7MzM6WzIsODddLDY1OlsyLDg3XSw3MjpbMiw4N10sODA6WzIsODddLDgxOlsyLDg3XSw4MjpbMiw4N10sODM6WzIsODddLDg0OlsyLDg3XSw4NTpbMiw4N119LHszMzpbMiw4OV19LHsyMDo3NSw2MzoxMTYsNjQ6NzYsNjU6WzEsNDRdLDY3OjExNSw2ODpbMiw5Nl0sNjk6MTE3LDcwOjc3LDcxOjc4LDcyOlsxLDc5XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezMzOlsxLDExOF19LHszMjoxMTksMzM6WzIsNjJdLDc0OjEyMCw3NTpbMSwxMjFdfSx7MzM6WzIsNTldLDY1OlsyLDU5XSw3MjpbMiw1OV0sNzU6WzIsNTldLDgwOlsyLDU5XSw4MTpbMiw1OV0sODI6WzIsNTldLDgzOlsyLDU5XSw4NDpbMiw1OV0sODU6WzIsNTldfSx7MzM6WzIsNjFdLDc1OlsyLDYxXX0sezMzOlsyLDY4XSwzNzoxMjIsNzQ6MTIzLDc1OlsxLDEyMV19LHszMzpbMiw2NV0sNjU6WzIsNjVdLDcyOlsyLDY1XSw3NTpbMiw2NV0sODA6WzIsNjVdLDgxOlsyLDY1XSw4MjpbMiw2NV0sODM6WzIsNjVdLDg0OlsyLDY1XSw4NTpbMiw2NV19LHszMzpbMiw2N10sNzU6WzIsNjddfSx7MjM6WzEsMTI0XX0sezIzOlsyLDUxXSw2NTpbMiw1MV0sNzI6WzIsNTFdLDgwOlsyLDUxXSw4MTpbMiw1MV0sODI6WzIsNTFdLDgzOlsyLDUxXSw4NDpbMiw1MV0sODU6WzIsNTFdfSx7MjM6WzIsNTNdfSx7MzM6WzEsMTI1XX0sezMzOlsyLDkxXSw2NTpbMiw5MV0sNzI6WzIsOTFdLDgwOlsyLDkxXSw4MTpbMiw5MV0sODI6WzIsOTFdLDgzOlsyLDkxXSw4NDpbMiw5MV0sODU6WzIsOTFdfSx7MzM6WzIsOTNdfSx7NTpbMiwyMl0sMTQ6WzIsMjJdLDE1OlsyLDIyXSwxOTpbMiwyMl0sMjk6WzIsMjJdLDM0OlsyLDIyXSwzOTpbMiwyMl0sNDQ6WzIsMjJdLDQ3OlsyLDIyXSw0ODpbMiwyMl0sNTE6WzIsMjJdLDU1OlsyLDIyXSw2MDpbMiwyMl19LHsyMzpbMiw5OV0sMzM6WzIsOTldLDU0OlsyLDk5XSw2ODpbMiw5OV0sNzI6WzIsOTldLDc1OlsyLDk5XX0sezczOlsxLDEwOV19LHsyMDo3NSw2MzoxMjYsNjQ6NzYsNjU6WzEsNDRdLDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezU6WzIsMjNdLDE0OlsyLDIzXSwxNTpbMiwyM10sMTk6WzIsMjNdLDI5OlsyLDIzXSwzNDpbMiwyM10sMzk6WzIsMjNdLDQ0OlsyLDIzXSw0NzpbMiwyM10sNDg6WzIsMjNdLDUxOlsyLDIzXSw1NTpbMiwyM10sNjA6WzIsMjNdfSx7NDc6WzIsMTldfSx7NDc6WzIsNzddfSx7MjA6NzUsMzM6WzIsNzJdLDQxOjEyNyw2MzoxMjgsNjQ6NzYsNjU6WzEsNDRdLDY5OjEyOSw3MDo3Nyw3MTo3OCw3MjpbMSw3OV0sNzU6WzIsNzJdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NTpbMiwyNF0sMTQ6WzIsMjRdLDE1OlsyLDI0XSwxOTpbMiwyNF0sMjk6WzIsMjRdLDM0OlsyLDI0XSwzOTpbMiwyNF0sNDQ6WzIsMjRdLDQ3OlsyLDI0XSw0ODpbMiwyNF0sNTE6WzIsMjRdLDU1OlsyLDI0XSw2MDpbMiwyNF19LHs2ODpbMSwxMzBdfSx7NjU6WzIsOTVdLDY4OlsyLDk1XSw3MjpbMiw5NV0sODA6WzIsOTVdLDgxOlsyLDk1XSw4MjpbMiw5NV0sODM6WzIsOTVdLDg0OlsyLDk1XSw4NTpbMiw5NV19LHs2ODpbMiw5N119LHs1OlsyLDIxXSwxNDpbMiwyMV0sMTU6WzIsMjFdLDE5OlsyLDIxXSwyOTpbMiwyMV0sMzQ6WzIsMjFdLDM5OlsyLDIxXSw0NDpbMiwyMV0sNDc6WzIsMjFdLDQ4OlsyLDIxXSw1MTpbMiwyMV0sNTU6WzIsMjFdLDYwOlsyLDIxXX0sezMzOlsxLDEzMV19LHszMzpbMiw2M119LHs3MjpbMSwxMzNdLDc2OjEzMn0sezMzOlsxLDEzNF19LHszMzpbMiw2OV19LHsxNTpbMiwxMl19LHsxNDpbMiwyNl0sMTU6WzIsMjZdLDE5OlsyLDI2XSwyOTpbMiwyNl0sMzQ6WzIsMjZdLDQ3OlsyLDI2XSw0ODpbMiwyNl0sNTE6WzIsMjZdLDU1OlsyLDI2XSxcbjYwOlsyLDI2XX0sezIzOlsyLDMxXSwzMzpbMiwzMV0sNTQ6WzIsMzFdLDY4OlsyLDMxXSw3MjpbMiwzMV0sNzU6WzIsMzFdfSx7MzM6WzIsNzRdLDQyOjEzNSw3NDoxMzYsNzU6WzEsMTIxXX0sezMzOlsyLDcxXSw2NTpbMiw3MV0sNzI6WzIsNzFdLDc1OlsyLDcxXSw4MDpbMiw3MV0sODE6WzIsNzFdLDgyOlsyLDcxXSw4MzpbMiw3MV0sODQ6WzIsNzFdLDg1OlsyLDcxXX0sezMzOlsyLDczXSw3NTpbMiw3M119LHsyMzpbMiwyOV0sMzM6WzIsMjldLDU0OlsyLDI5XSw2NTpbMiwyOV0sNjg6WzIsMjldLDcyOlsyLDI5XSw3NTpbMiwyOV0sODA6WzIsMjldLDgxOlsyLDI5XSw4MjpbMiwyOV0sODM6WzIsMjldLDg0OlsyLDI5XSw4NTpbMiwyOV19LHsxNDpbMiwxNV0sMTU6WzIsMTVdLDE5OlsyLDE1XSwyOTpbMiwxNV0sMzQ6WzIsMTVdLDM5OlsyLDE1XSw0NDpbMiwxNV0sNDc6WzIsMTVdLDQ4OlsyLDE1XSw1MTpbMiwxNV0sNTU6WzIsMTVdLDYwOlsyLDE1XX0sezcyOlsxLDEzOF0sNzc6WzEsMTM3XX0sezcyOlsyLDEwMF0sNzc6WzIsMTAwXX0sezE0OlsyLDE2XSwxNTpbMiwxNl0sMTk6WzIsMTZdLDI5OlsyLDE2XSwzNDpbMiwxNl0sNDQ6WzIsMTZdLDQ3OlsyLDE2XSw0ODpbMiwxNl0sNTE6WzIsMTZdLDU1OlsyLDE2XSw2MDpbMiwxNl19LHszMzpbMSwxMzldfSx7MzM6WzIsNzVdfSx7MzM6WzIsMzJdfSx7NzI6WzIsMTAxXSw3NzpbMiwxMDFdfSx7MTQ6WzIsMTddLDE1OlsyLDE3XSwxOTpbMiwxN10sMjk6WzIsMTddLDM0OlsyLDE3XSwzOTpbMiwxN10sNDQ6WzIsMTddLDQ3OlsyLDE3XSw0ODpbMiwxN10sNTE6WzIsMTddLDU1OlsyLDE3XSw2MDpbMiwxN119XSxkZWZhdWx0QWN0aW9uczp7NDpbMiwxXSw1NTpbMiw1NV0sNTc6WzIsMjBdLDYxOlsyLDU3XSw3NDpbMiw4MV0sODM6WzIsODVdLDg3OlsyLDE4XSw5MTpbMiw4OV0sMTAyOlsyLDUzXSwxMDU6WzIsOTNdLDExMTpbMiwxOV0sMTEyOlsyLDc3XSwxMTc6WzIsOTddLDEyMDpbMiw2M10sMTIzOlsyLDY5XSwxMjQ6WzIsMTJdLDEzNjpbMiw3NV0sMTM3OlsyLDMyXX0scGFyc2VFcnJvcjpmdW5jdGlvbihhLGIpe3Rocm93IG5ldyBFcnJvcihhKX0scGFyc2U6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe3ZhciBhO3JldHVybiBhPWMubGV4ZXIubGV4KCl8fDEsXCJudW1iZXJcIiE9dHlwZW9mIGEmJihhPWMuc3ltYm9sc19bYV18fGEpLGF9dmFyIGM9dGhpcyxkPVswXSxlPVtudWxsXSxmPVtdLGc9dGhpcy50YWJsZSxoPVwiXCIsaT0wLGo9MCxrPTA7dGhpcy5sZXhlci5zZXRJbnB1dChhKSx0aGlzLmxleGVyLnl5PXRoaXMueXksdGhpcy55eS5sZXhlcj10aGlzLmxleGVyLHRoaXMueXkucGFyc2VyPXRoaXMsXCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMubGV4ZXIueXlsbG9jJiYodGhpcy5sZXhlci55eWxsb2M9e30pO3ZhciBsPXRoaXMubGV4ZXIueXlsbG9jO2YucHVzaChsKTt2YXIgbT10aGlzLmxleGVyLm9wdGlvbnMmJnRoaXMubGV4ZXIub3B0aW9ucy5yYW5nZXM7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy55eS5wYXJzZUVycm9yJiYodGhpcy5wYXJzZUVycm9yPXRoaXMueXkucGFyc2VFcnJvcik7Zm9yKHZhciBuLG8scCxxLHIscyx0LHUsdix3PXt9Ozspe2lmKHA9ZFtkLmxlbmd0aC0xXSx0aGlzLmRlZmF1bHRBY3Rpb25zW3BdP3E9dGhpcy5kZWZhdWx0QWN0aW9uc1twXToobnVsbCE9PW4mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBufHwobj1iKCkpLHE9Z1twXSYmZ1twXVtuXSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIHF8fCFxLmxlbmd0aHx8IXFbMF0pe3ZhciB4PVwiXCI7aWYoIWspe3Y9W107Zm9yKHMgaW4gZ1twXSl0aGlzLnRlcm1pbmFsc19bc10mJnM+MiYmdi5wdXNoKFwiJ1wiK3RoaXMudGVybWluYWxzX1tzXStcIidcIik7eD10aGlzLmxleGVyLnNob3dQb3NpdGlvbj9cIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIrKGkrMSkrXCI6XFxuXCIrdGhpcy5sZXhlci5zaG93UG9zaXRpb24oKStcIlxcbkV4cGVjdGluZyBcIit2LmpvaW4oXCIsIFwiKStcIiwgZ290ICdcIisodGhpcy50ZXJtaW5hbHNfW25dfHxuKStcIidcIjpcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIrKGkrMSkrXCI6IFVuZXhwZWN0ZWQgXCIrKDE9PW4/XCJlbmQgb2YgaW5wdXRcIjpcIidcIisodGhpcy50ZXJtaW5hbHNfW25dfHxuKStcIidcIiksdGhpcy5wYXJzZUVycm9yKHgse3RleHQ6dGhpcy5sZXhlci5tYXRjaCx0b2tlbjp0aGlzLnRlcm1pbmFsc19bbl18fG4sbGluZTp0aGlzLmxleGVyLnl5bGluZW5vLGxvYzpsLGV4cGVjdGVkOnZ9KX19aWYocVswXWluc3RhbmNlb2YgQXJyYXkmJnEubGVuZ3RoPjEpdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiK3ArXCIsIHRva2VuOiBcIituKTtzd2l0Y2gocVswXSl7Y2FzZSAxOmQucHVzaChuKSxlLnB1c2godGhpcy5sZXhlci55eXRleHQpLGYucHVzaCh0aGlzLmxleGVyLnl5bGxvYyksZC5wdXNoKHFbMV0pLG49bnVsbCxvPyhuPW8sbz1udWxsKTooaj10aGlzLmxleGVyLnl5bGVuZyxoPXRoaXMubGV4ZXIueXl0ZXh0LGk9dGhpcy5sZXhlci55eWxpbmVubyxsPXRoaXMubGV4ZXIueXlsbG9jLGs+MCYmay0tKTticmVhaztjYXNlIDI6aWYodD10aGlzLnByb2R1Y3Rpb25zX1txWzFdXVsxXSx3LiQ9ZVtlLmxlbmd0aC10XSx3Ll8kPXtmaXJzdF9saW5lOmZbZi5sZW5ndGgtKHR8fDEpXS5maXJzdF9saW5lLGxhc3RfbGluZTpmW2YubGVuZ3RoLTFdLmxhc3RfbGluZSxmaXJzdF9jb2x1bW46ZltmLmxlbmd0aC0odHx8MSldLmZpcnN0X2NvbHVtbixsYXN0X2NvbHVtbjpmW2YubGVuZ3RoLTFdLmxhc3RfY29sdW1ufSxtJiYody5fJC5yYW5nZT1bZltmLmxlbmd0aC0odHx8MSldLnJhbmdlWzBdLGZbZi5sZW5ndGgtMV0ucmFuZ2VbMV1dKSxyPXRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHcsaCxqLGksdGhpcy55eSxxWzFdLGUsZiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHIpcmV0dXJuIHI7dCYmKGQ9ZC5zbGljZSgwLC0xKnQqMiksZT1lLnNsaWNlKDAsLTEqdCksZj1mLnNsaWNlKDAsLTEqdCkpLGQucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1txWzFdXVswXSksZS5wdXNoKHcuJCksZi5wdXNoKHcuXyQpLHU9Z1tkW2QubGVuZ3RoLTJdXVtkW2QubGVuZ3RoLTFdXSxkLnB1c2godSk7YnJlYWs7Y2FzZSAzOnJldHVybiEwfX1yZXR1cm4hMH19LGM9ZnVuY3Rpb24oKXt2YXIgYT17RU9GOjEscGFyc2VFcnJvcjpmdW5jdGlvbihhLGIpe2lmKCF0aGlzLnl5LnBhcnNlcil0aHJvdyBuZXcgRXJyb3IoYSk7dGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihhLGIpfSxzZXRJbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5faW5wdXQ9YSx0aGlzLl9tb3JlPXRoaXMuX2xlc3M9dGhpcy5kb25lPSExLHRoaXMueXlsaW5lbm89dGhpcy55eWxlbmc9MCx0aGlzLnl5dGV4dD10aGlzLm1hdGNoZWQ9dGhpcy5tYXRjaD1cIlwiLHRoaXMuY29uZGl0aW9uU3RhY2s9W1wiSU5JVElBTFwiXSx0aGlzLnl5bGxvYz17Zmlyc3RfbGluZToxLGZpcnN0X2NvbHVtbjowLGxhc3RfbGluZToxLGxhc3RfY29sdW1uOjB9LHRoaXMub3B0aW9ucy5yYW5nZXMmJih0aGlzLnl5bGxvYy5yYW5nZT1bMCwwXSksdGhpcy5vZmZzZXQ9MCx0aGlzfSxpbnB1dDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX2lucHV0WzBdO3RoaXMueXl0ZXh0Kz1hLHRoaXMueXlsZW5nKyssdGhpcy5vZmZzZXQrKyx0aGlzLm1hdGNoKz1hLHRoaXMubWF0Y2hlZCs9YTt2YXIgYj1hLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtyZXR1cm4gYj8odGhpcy55eWxpbmVubysrLHRoaXMueXlsbG9jLmxhc3RfbGluZSsrKTp0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLHRoaXMub3B0aW9ucy5yYW5nZXMmJnRoaXMueXlsbG9jLnJhbmdlWzFdKyssdGhpcy5faW5wdXQ9dGhpcy5faW5wdXQuc2xpY2UoMSksYX0sdW5wdXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5sZW5ndGgsYz1hLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7dGhpcy5faW5wdXQ9YSt0aGlzLl9pbnB1dCx0aGlzLnl5dGV4dD10aGlzLnl5dGV4dC5zdWJzdHIoMCx0aGlzLnl5dGV4dC5sZW5ndGgtYi0xKSx0aGlzLm9mZnNldC09Yjt2YXIgZD10aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7dGhpcy5tYXRjaD10aGlzLm1hdGNoLnN1YnN0cigwLHRoaXMubWF0Y2gubGVuZ3RoLTEpLHRoaXMubWF0Y2hlZD10aGlzLm1hdGNoZWQuc3Vic3RyKDAsdGhpcy5tYXRjaGVkLmxlbmd0aC0xKSxjLmxlbmd0aC0xJiYodGhpcy55eWxpbmVuby09Yy5sZW5ndGgtMSk7dmFyIGU9dGhpcy55eWxsb2MucmFuZ2U7cmV0dXJuIHRoaXMueXlsbG9jPXtmaXJzdF9saW5lOnRoaXMueXlsbG9jLmZpcnN0X2xpbmUsbGFzdF9saW5lOnRoaXMueXlsaW5lbm8rMSxmaXJzdF9jb2x1bW46dGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLGxhc3RfY29sdW1uOmM/KGMubGVuZ3RoPT09ZC5sZW5ndGg/dGhpcy55eWxsb2MuZmlyc3RfY29sdW1uOjApK2RbZC5sZW5ndGgtYy5sZW5ndGhdLmxlbmd0aC1jWzBdLmxlbmd0aDp0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4tYn0sdGhpcy5vcHRpb25zLnJhbmdlcyYmKHRoaXMueXlsbG9jLnJhbmdlPVtlWzBdLGVbMF0rdGhpcy55eWxlbmctYl0pLHRoaXN9LG1vcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9yZT0hMCx0aGlzfSxsZXNzOmZ1bmN0aW9uKGEpe3RoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShhKSl9LHBhc3RJbnB1dDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubWF0Y2hlZC5zdWJzdHIoMCx0aGlzLm1hdGNoZWQubGVuZ3RoLXRoaXMubWF0Y2gubGVuZ3RoKTtyZXR1cm4oYS5sZW5ndGg+MjA/XCIuLi5cIjpcIlwiKSthLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLFwiXCIpfSx1cGNvbWluZ0lucHV0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5tYXRjaDtyZXR1cm4gYS5sZW5ndGg8MjAmJihhKz10aGlzLl9pbnB1dC5zdWJzdHIoMCwyMC1hLmxlbmd0aCkpLChhLnN1YnN0cigwLDIwKSsoYS5sZW5ndGg+MjA/XCIuLi5cIjpcIlwiKSkucmVwbGFjZSgvXFxuL2csXCJcIil9LHNob3dQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMucGFzdElucHV0KCksYj1uZXcgQXJyYXkoYS5sZW5ndGgrMSkuam9pbihcIi1cIik7cmV0dXJuIGErdGhpcy51cGNvbWluZ0lucHV0KCkrXCJcXG5cIitiK1wiXlwifSxuZXh0OmZ1bmN0aW9uKCl7aWYodGhpcy5kb25lKXJldHVybiB0aGlzLkVPRjt0aGlzLl9pbnB1dHx8KHRoaXMuZG9uZT0hMCk7dmFyIGEsYixjLGQsZTt0aGlzLl9tb3JlfHwodGhpcy55eXRleHQ9XCJcIix0aGlzLm1hdGNoPVwiXCIpO2Zvcih2YXIgZj10aGlzLl9jdXJyZW50UnVsZXMoKSxnPTA7ZzxmLmxlbmd0aCYmKGM9dGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tmW2ddXSksIWN8fGImJiEoY1swXS5sZW5ndGg+YlswXS5sZW5ndGgpfHwoYj1jLGQ9Zyx0aGlzLm9wdGlvbnMuZmxleCkpO2crKyk7cmV0dXJuIGI/KGU9YlswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksZSYmKHRoaXMueXlsaW5lbm8rPWUubGVuZ3RoKSx0aGlzLnl5bGxvYz17Zmlyc3RfbGluZTp0aGlzLnl5bGxvYy5sYXN0X2xpbmUsbGFzdF9saW5lOnRoaXMueXlsaW5lbm8rMSxmaXJzdF9jb2x1bW46dGhpcy55eWxsb2MubGFzdF9jb2x1bW4sbGFzdF9jb2x1bW46ZT9lW2UubGVuZ3RoLTFdLmxlbmd0aC1lW2UubGVuZ3RoLTFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aDp0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbitiWzBdLmxlbmd0aH0sdGhpcy55eXRleHQrPWJbMF0sdGhpcy5tYXRjaCs9YlswXSx0aGlzLm1hdGNoZXM9Yix0aGlzLnl5bGVuZz10aGlzLnl5dGV4dC5sZW5ndGgsdGhpcy5vcHRpb25zLnJhbmdlcyYmKHRoaXMueXlsbG9jLnJhbmdlPVt0aGlzLm9mZnNldCx0aGlzLm9mZnNldCs9dGhpcy55eWxlbmddKSx0aGlzLl9tb3JlPSExLHRoaXMuX2lucHV0PXRoaXMuX2lucHV0LnNsaWNlKGJbMF0ubGVuZ3RoKSx0aGlzLm1hdGNoZWQrPWJbMF0sYT10aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLHRoaXMueXksdGhpcyxmW2RdLHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGgtMV0pLHRoaXMuZG9uZSYmdGhpcy5faW5wdXQmJih0aGlzLmRvbmU9ITEpLGE/YTp2b2lkIDApOlwiXCI9PT10aGlzLl9pbnB1dD90aGlzLkVPRjp0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIrKHRoaXMueXlsaW5lbm8rMSkrXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiK3RoaXMuc2hvd1Bvc2l0aW9uKCkse3RleHQ6XCJcIix0b2tlbjpudWxsLGxpbmU6dGhpcy55eWxpbmVub30pfSxsZXg6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5leHQoKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYT9hOnRoaXMubGV4KCl9LGJlZ2luOmZ1bmN0aW9uKGEpe3RoaXMuY29uZGl0aW9uU3RhY2sucHVzaChhKX0scG9wU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKX0sX2N1cnJlbnRSdWxlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0xXV0ucnVsZXN9LHRvcFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGgtMl19LHB1c2hTdGF0ZTpmdW5jdGlvbihhKXt0aGlzLmJlZ2luKGEpfX07cmV0dXJuIGEub3B0aW9ucz17fSxhLnBlcmZvcm1BY3Rpb249ZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhLGMpe3JldHVybiBiLnl5dGV4dD1iLnl5dGV4dC5zdWJzdHIoYSxiLnl5bGVuZy1jKX1zd2l0Y2goYyl7Y2FzZSAwOmlmKFwiXFxcXFxcXFxcIj09PWIueXl0ZXh0LnNsaWNlKC0yKT8oZSgwLDEpLHRoaXMuYmVnaW4oXCJtdVwiKSk6XCJcXFxcXCI9PT1iLnl5dGV4dC5zbGljZSgtMSk/KGUoMCwxKSx0aGlzLmJlZ2luKFwiZW11XCIpKTp0aGlzLmJlZ2luKFwibXVcIiksYi55eXRleHQpcmV0dXJuIDE1O2JyZWFrO2Nhc2UgMTpyZXR1cm4gMTU7Y2FzZSAyOnJldHVybiB0aGlzLnBvcFN0YXRlKCksMTU7Y2FzZSAzOnJldHVybiB0aGlzLmJlZ2luKFwicmF3XCIpLDE1O2Nhc2UgNDpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLFwicmF3XCI9PT10aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoLTFdPzE1OihiLnl5dGV4dD1iLnl5dGV4dC5zdWJzdHIoNSxiLnl5bGVuZy05KSxcIkVORF9SQVdfQkxPQ0tcIik7Y2FzZSA1OnJldHVybiAxNTtjYXNlIDY6cmV0dXJuIHRoaXMucG9wU3RhdGUoKSwxNDtjYXNlIDc6cmV0dXJuIDY1O2Nhc2UgODpyZXR1cm4gNjg7Y2FzZSA5OnJldHVybiAxOTtjYXNlIDEwOnJldHVybiB0aGlzLnBvcFN0YXRlKCksdGhpcy5iZWdpbihcInJhd1wiKSwyMztjYXNlIDExOnJldHVybiA1NTtjYXNlIDEyOnJldHVybiA2MDtjYXNlIDEzOnJldHVybiAyOTtjYXNlIDE0OnJldHVybiA0NztjYXNlIDE1OnJldHVybiB0aGlzLnBvcFN0YXRlKCksNDQ7Y2FzZSAxNjpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDQ0O2Nhc2UgMTc6cmV0dXJuIDM0O2Nhc2UgMTg6cmV0dXJuIDM5O2Nhc2UgMTk6cmV0dXJuIDUxO2Nhc2UgMjA6cmV0dXJuIDQ4O2Nhc2UgMjE6dGhpcy51bnB1dChiLnl5dGV4dCksdGhpcy5wb3BTdGF0ZSgpLHRoaXMuYmVnaW4oXCJjb21cIik7YnJlYWs7Y2FzZSAyMjpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDE0O2Nhc2UgMjM6cmV0dXJuIDQ4O2Nhc2UgMjQ6cmV0dXJuIDczO2Nhc2UgMjU6cmV0dXJuIDcyO2Nhc2UgMjY6cmV0dXJuIDcyO2Nhc2UgMjc6cmV0dXJuIDg3O2Nhc2UgMjg6YnJlYWs7Y2FzZSAyOTpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDU0O2Nhc2UgMzA6cmV0dXJuIHRoaXMucG9wU3RhdGUoKSwzMztjYXNlIDMxOnJldHVybiBiLnl5dGV4dD1lKDEsMikucmVwbGFjZSgvXFxcXFwiL2csJ1wiJyksODA7Y2FzZSAzMjpyZXR1cm4gYi55eXRleHQ9ZSgxLDIpLnJlcGxhY2UoL1xcXFwnL2csXCInXCIpLDgwO2Nhc2UgMzM6cmV0dXJuIDg1O2Nhc2UgMzQ6cmV0dXJuIDgyO2Nhc2UgMzU6cmV0dXJuIDgyO2Nhc2UgMzY6cmV0dXJuIDgzO2Nhc2UgMzc6cmV0dXJuIDg0O2Nhc2UgMzg6cmV0dXJuIDgxO2Nhc2UgMzk6cmV0dXJuIDc1O2Nhc2UgNDA6cmV0dXJuIDc3O2Nhc2UgNDE6cmV0dXJuIDcyO2Nhc2UgNDI6cmV0dXJuIGIueXl0ZXh0PWIueXl0ZXh0LnJlcGxhY2UoL1xcXFwoW1xcXFxcXF1dKS9nLFwiJDFcIiksNzI7Y2FzZSA0MzpyZXR1cm5cIklOVkFMSURcIjtjYXNlIDQ0OnJldHVybiA1fX0sYS5ydWxlcz1bL14oPzpbXlxceDAwXSo/KD89KFxce1xceykpKS8sL14oPzpbXlxceDAwXSspLywvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sL14oPzpcXHtcXHtcXHtcXHsoPz1bXlxcL10pKS8sL14oPzpcXHtcXHtcXHtcXHtcXC9bXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89Wz19XFxzXFwvLl0pXFx9XFx9XFx9XFx9KS8sL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sL14oPzpbXFxzXFxTXSo/LS0ofik/XFx9XFx9KS8sL14oPzpcXCgpLywvXig/OlxcKSkvLC9eKD86XFx7XFx7XFx7XFx7KS8sL14oPzpcXH1cXH1cXH1cXH0pLywvXig/Olxce1xceyh+KT8+KS8sL14oPzpcXHtcXHsofik/Iz4pLywvXig/Olxce1xceyh+KT8jXFwqPykvLC9eKD86XFx7XFx7KH4pP1xcLykvLC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXHMqKH4pP1xcfVxcfSkvLC9eKD86XFx7XFx7KH4pP1xcXikvLC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sL14oPzpcXHtcXHsofik/XFx7KS8sL14oPzpcXHtcXHsofik/JikvLC9eKD86XFx7XFx7KH4pPyEtLSkvLC9eKD86XFx7XFx7KH4pPyFbXFxzXFxTXSo/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFwqPykvLC9eKD86PSkvLC9eKD86XFwuXFwuKS8sL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLC9eKD86W1xcLy5dKS8sL14oPzpcXHMrKS8sL14oPzpcXH0ofik/XFx9XFx9KS8sL14oPzoofik/XFx9XFx9KS8sL14oPzpcIihcXFxcW1wiXXxbXlwiXSkqXCIpLywvXig/OicoXFxcXFsnXXxbXiddKSonKS8sL14oPzpAKS8sL14oPzp0cnVlKD89KFt+fVxccyldKSkpLywvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywvXig/OnVuZGVmaW5lZCg/PShbfn1cXHMpXSkpKS8sL14oPzpudWxsKD89KFt+fVxccyldKSkpLywvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLC9eKD86YXNcXHMrXFx8KS8sL14oPzpcXHwpLywvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sL14oPzpcXFsoXFxcXFxcXXxbXlxcXV0pKlxcXSkvLC9eKD86LikvLC9eKD86JCkvXSxhLmNvbmRpdGlvbnM9e211OntydWxlczpbNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDRdLGluY2x1c2l2ZTohMX0sZW11OntydWxlczpbMl0saW5jbHVzaXZlOiExfSxjb206e3J1bGVzOls2XSxpbmNsdXNpdmU6ITF9LHJhdzp7cnVsZXM6WzMsNCw1XSxpbmNsdXNpdmU6ITF9LElOSVRJQUw6e3J1bGVzOlswLDEsNDRdLGluY2x1c2l2ZTohMH19LGF9KCk7cmV0dXJuIGIubGV4ZXI9YyxhLnByb3RvdHlwZT1iLGIuUGFyc2VyPWEsbmV3IGF9KCk7Yi5fX2VzTW9kdWxlPSEwLGJbXCJkZWZhdWx0XCJdPWN9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7dmFyIGE9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXTt0aGlzLm9wdGlvbnM9YX1mdW5jdGlvbiBlKGEsYixjKXt2b2lkIDA9PT1iJiYoYj1hLmxlbmd0aCk7dmFyIGQ9YVtiLTFdLGU9YVtiLTJdO3JldHVybiBkP1wiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlPyhlfHwhYz8vXFxyP1xcblxccyo/JC86LyhefFxccj9cXG4pXFxzKj8kLykudGVzdChkLm9yaWdpbmFsKTp2b2lkIDA6Y31mdW5jdGlvbiBmKGEsYixjKXt2b2lkIDA9PT1iJiYoYj0tMSk7dmFyIGQ9YVtiKzFdLGU9YVtiKzJdO3JldHVybiBkP1wiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlPyhlfHwhYz8vXlxccyo/XFxyP1xcbi86L15cXHMqPyhcXHI/XFxufCQpLykudGVzdChkLm9yaWdpbmFsKTp2b2lkIDA6Y31mdW5jdGlvbiBnKGEsYixjKXt2YXIgZD1hW251bGw9PWI/MDpiKzFdO2lmKGQmJlwiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlJiYoY3x8IWQucmlnaHRTdHJpcHBlZCkpe3ZhciBlPWQudmFsdWU7ZC52YWx1ZT1kLnZhbHVlLnJlcGxhY2UoYz8vXlxccysvOi9eWyBcXHRdKlxccj9cXG4/LyxcIlwiKSxkLnJpZ2h0U3RyaXBwZWQ9ZC52YWx1ZSE9PWV9fWZ1bmN0aW9uIGgoYSxiLGMpe3ZhciBkPWFbbnVsbD09Yj9hLmxlbmd0aC0xOmItMV07aWYoZCYmXCJDb250ZW50U3RhdGVtZW50XCI9PT1kLnR5cGUmJihjfHwhZC5sZWZ0U3RyaXBwZWQpKXt2YXIgZT1kLnZhbHVlO3JldHVybiBkLnZhbHVlPWQudmFsdWUucmVwbGFjZShjPy9cXHMrJC86L1sgXFx0XSskLyxcIlwiKSxkLmxlZnRTdHJpcHBlZD1kLnZhbHVlIT09ZSxkLmxlZnRTdHJpcHBlZH19dmFyIGk9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwO3ZhciBqPWMoMjgpLGs9aShqKTtkLnByb3RvdHlwZT1uZXcga1tcImRlZmF1bHRcIl0sZC5wcm90b3R5cGUuUHJvZ3JhbT1mdW5jdGlvbihhKXt2YXIgYj0hdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUsYz0hdGhpcy5pc1Jvb3RTZWVuO3RoaXMuaXNSb290U2Vlbj0hMDtmb3IodmFyIGQ9YS5ib2R5LGk9MCxqPWQubGVuZ3RoO2k8ajtpKyspe3ZhciBrPWRbaV0sbD10aGlzLmFjY2VwdChrKTtpZihsKXt2YXIgbT1lKGQsaSxjKSxuPWYoZCxpLGMpLG89bC5vcGVuU3RhbmRhbG9uZSYmbSxwPWwuY2xvc2VTdGFuZGFsb25lJiZuLHE9bC5pbmxpbmVTdGFuZGFsb25lJiZtJiZuO2wuY2xvc2UmJmcoZCxpLCEwKSxsLm9wZW4mJmgoZCxpLCEwKSxiJiZxJiYoZyhkLGkpLGgoZCxpKSYmXCJQYXJ0aWFsU3RhdGVtZW50XCI9PT1rLnR5cGUmJihrLmluZGVudD0vKFsgXFx0XSskKS8uZXhlYyhkW2ktMV0ub3JpZ2luYWwpWzFdKSksYiYmbyYmKGcoKGsucHJvZ3JhbXx8ay5pbnZlcnNlKS5ib2R5KSxoKGQsaSkpLGImJnAmJihnKGQsaSksaCgoay5pbnZlcnNlfHxrLnByb2dyYW0pLmJvZHkpKX19cmV0dXJuIGF9LGQucHJvdG90eXBlLkJsb2NrU3RhdGVtZW50PWQucHJvdG90eXBlLkRlY29yYXRvckJsb2NrPWQucHJvdG90eXBlLlBhcnRpYWxCbG9ja1N0YXRlbWVudD1mdW5jdGlvbihhKXt0aGlzLmFjY2VwdChhLnByb2dyYW0pLHRoaXMuYWNjZXB0KGEuaW52ZXJzZSk7dmFyIGI9YS5wcm9ncmFtfHxhLmludmVyc2UsYz1hLnByb2dyYW0mJmEuaW52ZXJzZSxkPWMsaT1jO2lmKGMmJmMuY2hhaW5lZClmb3IoZD1jLmJvZHlbMF0ucHJvZ3JhbTtpLmNoYWluZWQ7KWk9aS5ib2R5W2kuYm9keS5sZW5ndGgtMV0ucHJvZ3JhbTt2YXIgaj17b3BlbjphLm9wZW5TdHJpcC5vcGVuLGNsb3NlOmEuY2xvc2VTdHJpcC5jbG9zZSxvcGVuU3RhbmRhbG9uZTpmKGIuYm9keSksY2xvc2VTdGFuZGFsb25lOmUoKGR8fGIpLmJvZHkpfTtpZihhLm9wZW5TdHJpcC5jbG9zZSYmZyhiLmJvZHksbnVsbCwhMCksYyl7dmFyIGs9YS5pbnZlcnNlU3RyaXA7ay5vcGVuJiZoKGIuYm9keSxudWxsLCEwKSxrLmNsb3NlJiZnKGQuYm9keSxudWxsLCEwKSxhLmNsb3NlU3RyaXAub3BlbiYmaChpLmJvZHksbnVsbCwhMCksIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lJiZlKGIuYm9keSkmJmYoZC5ib2R5KSYmKGgoYi5ib2R5KSxnKGQuYm9keSkpfWVsc2UgYS5jbG9zZVN0cmlwLm9wZW4mJmgoYi5ib2R5LG51bGwsITApO3JldHVybiBqfSxkLnByb3RvdHlwZS5EZWNvcmF0b3I9ZC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RyaXB9LGQucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQ9ZC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0cmlwfHx7fTtyZXR1cm57aW5saW5lU3RhbmRhbG9uZTohMCxvcGVuOmIub3BlbixjbG9zZTpiLmNsb3NlfX0sYltcImRlZmF1bHRcIl09ZCxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7dGhpcy5wYXJlbnRzPVtdfWZ1bmN0aW9uIGUoYSl7dGhpcy5hY2NlcHRSZXF1aXJlZChhLFwicGF0aFwiKSx0aGlzLmFjY2VwdEFycmF5KGEucGFyYW1zKSx0aGlzLmFjY2VwdEtleShhLFwiaGFzaFwiKX1mdW5jdGlvbiBmKGEpe2UuY2FsbCh0aGlzLGEpLHRoaXMuYWNjZXB0S2V5KGEsXCJwcm9ncmFtXCIpLHRoaXMuYWNjZXB0S2V5KGEsXCJpbnZlcnNlXCIpfWZ1bmN0aW9uIGcoYSl7dGhpcy5hY2NlcHRSZXF1aXJlZChhLFwibmFtZVwiKSx0aGlzLmFjY2VwdEFycmF5KGEucGFyYW1zKSx0aGlzLmFjY2VwdEtleShhLFwiaGFzaFwiKX12YXIgaD1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGk9Yyg2KSxqPWgoaSk7ZC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmQsbXV0YXRpbmc6ITEsYWNjZXB0S2V5OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5hY2NlcHQoYVtiXSk7aWYodGhpcy5tdXRhdGluZyl7aWYoYyYmIWQucHJvdG90eXBlW2MudHlwZV0pdGhyb3cgbmV3IGpbXCJkZWZhdWx0XCJdKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicrYy50eXBlKydcIiBmb3VuZCB3aGVuIGFjY2VwdGluZyAnK2IrXCIgb24gXCIrYS50eXBlKTthW2JdPWN9fSxhY2NlcHRSZXF1aXJlZDpmdW5jdGlvbihhLGIpe2lmKHRoaXMuYWNjZXB0S2V5KGEsYiksIWFbYl0pdGhyb3cgbmV3IGpbXCJkZWZhdWx0XCJdKGEudHlwZStcIiByZXF1aXJlcyBcIitiKX0sYWNjZXB0QXJyYXk6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKXRoaXMuYWNjZXB0S2V5KGEsYiksYVtiXXx8KGEuc3BsaWNlKGIsMSksYi0tLGMtLSl9LGFjY2VwdDpmdW5jdGlvbihhKXtpZihhKXtpZighdGhpc1thLnR5cGVdKXRocm93IG5ldyBqW1wiZGVmYXVsdFwiXShcIlVua25vd24gdHlwZTogXCIrYS50eXBlLGEpO3RoaXMuY3VycmVudCYmdGhpcy5wYXJlbnRzLnVuc2hpZnQodGhpcy5jdXJyZW50KSx0aGlzLmN1cnJlbnQ9YTt2YXIgYj10aGlzW2EudHlwZV0oYSk7cmV0dXJuIHRoaXMuY3VycmVudD10aGlzLnBhcmVudHMuc2hpZnQoKSwhdGhpcy5tdXRhdGluZ3x8Yj9iOmIhPT0hMT9hOnZvaWQgMH19LFByb2dyYW06ZnVuY3Rpb24oYSl7dGhpcy5hY2NlcHRBcnJheShhLmJvZHkpfSxNdXN0YWNoZVN0YXRlbWVudDplLERlY29yYXRvcjplLEJsb2NrU3RhdGVtZW50OmYsRGVjb3JhdG9yQmxvY2s6ZixQYXJ0aWFsU3RhdGVtZW50OmcsUGFydGlhbEJsb2NrU3RhdGVtZW50OmZ1bmN0aW9uKGEpe2cuY2FsbCh0aGlzLGEpLHRoaXMuYWNjZXB0S2V5KGEsXCJwcm9ncmFtXCIpfSxDb250ZW50U3RhdGVtZW50OmZ1bmN0aW9uKCl7fSxDb21tZW50U3RhdGVtZW50OmZ1bmN0aW9uKCl7fSxTdWJFeHByZXNzaW9uOmUsUGF0aEV4cHJlc3Npb246ZnVuY3Rpb24oKXt9LFN0cmluZ0xpdGVyYWw6ZnVuY3Rpb24oKXt9LE51bWJlckxpdGVyYWw6ZnVuY3Rpb24oKXt9LEJvb2xlYW5MaXRlcmFsOmZ1bmN0aW9uKCl7fSxVbmRlZmluZWRMaXRlcmFsOmZ1bmN0aW9uKCl7fSxOdWxsTGl0ZXJhbDpmdW5jdGlvbigpe30sSGFzaDpmdW5jdGlvbihhKXt0aGlzLmFjY2VwdEFycmF5KGEucGFpcnMpfSxIYXNoUGFpcjpmdW5jdGlvbihhKXt0aGlzLmFjY2VwdFJlcXVpcmVkKGEsXCJ2YWx1ZVwiKX19LGJbXCJkZWZhdWx0XCJdPWQsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe2lmKGI9Yi5wYXRoP2IucGF0aC5vcmlnaW5hbDpiLGEucGF0aC5vcmlnaW5hbCE9PWIpe3ZhciBjPXtsb2M6YS5wYXRoLmxvY307dGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKGEucGF0aC5vcmlnaW5hbCtcIiBkb2Vzbid0IG1hdGNoIFwiK2IsYyl9fWZ1bmN0aW9uIGUoYSxiKXt0aGlzLnNvdXJjZT1hLHRoaXMuc3RhcnQ9e2xpbmU6Yi5maXJzdF9saW5lLGNvbHVtbjpiLmZpcnN0X2NvbHVtbn0sdGhpcy5lbmQ9e2xpbmU6Yi5sYXN0X2xpbmUsY29sdW1uOmIubGFzdF9jb2x1bW59fWZ1bmN0aW9uIGYoYSl7cmV0dXJuL15cXFsuKlxcXSQvLnRlc3QoYSk/YS5zdWJzdHIoMSxhLmxlbmd0aC0yKTphfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm57b3BlbjpcIn5cIj09PWEuY2hhckF0KDIpLGNsb3NlOlwiflwiPT09Yi5jaGFyQXQoYi5sZW5ndGgtMyl9fWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvXlxce1xce34/XFwhLT8tPy8sXCJcIikucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sXCJcIil9ZnVuY3Rpb24gaShhLGIsYyl7Yz10aGlzLmxvY0luZm8oYyk7Zm9yKHZhciBkPWE/XCJAXCI6XCJcIixlPVtdLGY9MCxnPVwiXCIsaD0wLGk9Yi5sZW5ndGg7aDxpO2grKyl7dmFyIGo9YltoXS5wYXJ0LGs9YltoXS5vcmlnaW5hbCE9PWo7aWYoZCs9KGJbaF0uc2VwYXJhdG9yfHxcIlwiKStqLGt8fFwiLi5cIiE9PWomJlwiLlwiIT09aiYmXCJ0aGlzXCIhPT1qKWUucHVzaChqKTtlbHNle2lmKGUubGVuZ3RoPjApdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwiSW52YWxpZCBwYXRoOiBcIitkLHtsb2M6Y30pO1wiLi5cIj09PWomJihmKyssZys9XCIuLi9cIil9fXJldHVybnt0eXBlOlwiUGF0aEV4cHJlc3Npb25cIixkYXRhOmEsZGVwdGg6ZixwYXJ0czplLG9yaWdpbmFsOmQsbG9jOmN9fWZ1bmN0aW9uIGooYSxiLGMsZCxlLGYpe3ZhciBnPWQuY2hhckF0KDMpfHxkLmNoYXJBdCgyKSxoPVwie1wiIT09ZyYmXCImXCIhPT1nLGk9L1xcKi8udGVzdChkKTtyZXR1cm57dHlwZTppP1wiRGVjb3JhdG9yXCI6XCJNdXN0YWNoZVN0YXRlbWVudFwiLHBhdGg6YSxwYXJhbXM6YixoYXNoOmMsZXNjYXBlZDpoLHN0cmlwOmUsbG9jOnRoaXMubG9jSW5mbyhmKX19ZnVuY3Rpb24gayhhLGIsYyxlKXtkKGEsYyksZT10aGlzLmxvY0luZm8oZSk7dmFyIGY9e3R5cGU6XCJQcm9ncmFtXCIsYm9keTpiLHN0cmlwOnt9LGxvYzplfTtyZXR1cm57dHlwZTpcIkJsb2NrU3RhdGVtZW50XCIscGF0aDphLnBhdGgscGFyYW1zOmEucGFyYW1zLGhhc2g6YS5oYXNoLHByb2dyYW06ZixvcGVuU3RyaXA6e30saW52ZXJzZVN0cmlwOnt9LGNsb3NlU3RyaXA6e30sbG9jOmV9fWZ1bmN0aW9uIGwoYSxiLGMsZSxmLGcpe2UmJmUucGF0aCYmZChhLGUpO3ZhciBoPS9cXCovLnRlc3QoYS5vcGVuKTtiLmJsb2NrUGFyYW1zPWEuYmxvY2tQYXJhbXM7dmFyIGk9dm9pZCAwLGo9dm9pZCAwO2lmKGMpe2lmKGgpdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwiVW5leHBlY3RlZCBpbnZlcnNlIGJsb2NrIG9uIGRlY29yYXRvclwiLGMpO2MuY2hhaW4mJihjLnByb2dyYW0uYm9keVswXS5jbG9zZVN0cmlwPWUuc3RyaXApLGo9Yy5zdHJpcCxpPWMucHJvZ3JhbX1yZXR1cm4gZiYmKGY9aSxpPWIsYj1mKSx7dHlwZTpoP1wiRGVjb3JhdG9yQmxvY2tcIjpcIkJsb2NrU3RhdGVtZW50XCIscGF0aDphLnBhdGgscGFyYW1zOmEucGFyYW1zLGhhc2g6YS5oYXNoLHByb2dyYW06YixpbnZlcnNlOmksb3BlblN0cmlwOmEuc3RyaXAsaW52ZXJzZVN0cmlwOmosY2xvc2VTdHJpcDplJiZlLnN0cmlwLGxvYzp0aGlzLmxvY0luZm8oZyl9fWZ1bmN0aW9uIG0oYSxiKXtpZighYiYmYS5sZW5ndGgpe3ZhciBjPWFbMF0ubG9jLGQ9YVthLmxlbmd0aC0xXS5sb2M7YyYmZCYmKGI9e3NvdXJjZTpjLnNvdXJjZSxzdGFydDp7bGluZTpjLnN0YXJ0LmxpbmUsY29sdW1uOmMuc3RhcnQuY29sdW1ufSxlbmQ6e2xpbmU6ZC5lbmQubGluZSxjb2x1bW46ZC5lbmQuY29sdW1ufX0pfXJldHVybnt0eXBlOlwiUHJvZ3JhbVwiLGJvZHk6YSxzdHJpcDp7fSxsb2M6Yn19ZnVuY3Rpb24gbihhLGIsYyxlKXtyZXR1cm4gZChhLGMpLHt0eXBlOlwiUGFydGlhbEJsb2NrU3RhdGVtZW50XCIsbmFtZTphLnBhdGgscGFyYW1zOmEucGFyYW1zLGhhc2g6YS5oYXNoLHByb2dyYW06YixvcGVuU3RyaXA6YS5zdHJpcCxjbG9zZVN0cmlwOmMmJmMuc3RyaXAsbG9jOnRoaXMubG9jSW5mbyhlKX19dmFyIG89YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIuU291cmNlTG9jYXRpb249ZSxiLmlkPWYsYi5zdHJpcEZsYWdzPWcsYi5zdHJpcENvbW1lbnQ9aCxiLnByZXBhcmVQYXRoPWksYi5wcmVwYXJlTXVzdGFjaGU9aixiLnByZXBhcmVSYXdCbG9jaz1rLGIucHJlcGFyZUJsb2NrPWwsYi5wcmVwYXJlUHJvZ3JhbT1tLGIucHJlcGFyZVBhcnRpYWxCbG9jaz1uO3ZhciBwPWMoNikscT1vKHApfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZCgpe31mdW5jdGlvbiBlKGEsYixjKXtpZihudWxsPT1hfHxcInN0cmluZ1wiIT10eXBlb2YgYSYmXCJQcm9ncmFtXCIhPT1hLnR5cGUpdGhyb3cgbmV3IGtbXCJkZWZhdWx0XCJdKFwiWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLnByZWNvbXBpbGUuIFlvdSBwYXNzZWQgXCIrYSk7Yj1ifHx7fSxcImRhdGFcImluIGJ8fChiLmRhdGE9ITApLGIuY29tcGF0JiYoYi51c2VEZXB0aHM9ITApO3ZhciBkPWMucGFyc2UoYSxiKSxlPShuZXcgYy5Db21waWxlcikuY29tcGlsZShkLGIpO3JldHVybihuZXcgYy5KYXZhU2NyaXB0Q29tcGlsZXIpLmNvbXBpbGUoZSxiKX1mdW5jdGlvbiBmKGEsYixjKXtmdW5jdGlvbiBkKCl7dmFyIGQ9Yy5wYXJzZShhLGIpLGU9KG5ldyBjLkNvbXBpbGVyKS5jb21waWxlKGQsYiksZj0obmV3IGMuSmF2YVNjcmlwdENvbXBpbGVyKS5jb21waWxlKGUsYix2b2lkIDAsITApO3JldHVybiBjLnRlbXBsYXRlKGYpfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gZnx8KGY9ZCgpKSxmLmNhbGwodGhpcyxhLGIpfWlmKHZvaWQgMD09PWImJihiPXt9KSxudWxsPT1hfHxcInN0cmluZ1wiIT10eXBlb2YgYSYmXCJQcm9ncmFtXCIhPT1hLnR5cGUpdGhyb3cgbmV3IGtbXCJkZWZhdWx0XCJdKFwiWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgXCIrYSk7XCJkYXRhXCJpbiBifHwoYi5kYXRhPSEwKSxiLmNvbXBhdCYmKGIudXNlRGVwdGhzPSEwKTt2YXIgZj12b2lkIDA7cmV0dXJuIGUuX3NldHVwPWZ1bmN0aW9uKGEpe3JldHVybiBmfHwoZj1kKCkpLGYuX3NldHVwKGEpfSxlLl9jaGlsZD1mdW5jdGlvbihhLGIsYyxlKXtyZXR1cm4gZnx8KGY9ZCgpKSxmLl9jaGlsZChhLGIsYyxlKX0sZX1mdW5jdGlvbiBnKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYobC5pc0FycmF5KGEpJiZsLmlzQXJyYXkoYikmJmEubGVuZ3RoPT09Yi5sZW5ndGgpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKCFnKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9fWZ1bmN0aW9uIGgoYSl7aWYoIWEucGF0aC5wYXJ0cyl7dmFyIGI9YS5wYXRoO2EucGF0aD17dHlwZTpcIlBhdGhFeHByZXNzaW9uXCIsZGF0YTohMSxkZXB0aDowLHBhcnRzOltiLm9yaWdpbmFsK1wiXCJdLG9yaWdpbmFsOmIub3JpZ2luYWwrXCJcIixsb2M6Yi5sb2N9fX12YXIgaT1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5Db21waWxlcj1kLGIucHJlY29tcGlsZT1lLGIuY29tcGlsZT1mO3ZhciBqPWMoNiksaz1pKGopLGw9Yyg1KSxtPWMoMjQpLG49aShtKSxvPVtdLnNsaWNlO2QucHJvdG90eXBlPXtjb21waWxlcjpkLGVxdWFsczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wY29kZXMubGVuZ3RoO2lmKGEub3Bjb2Rlcy5sZW5ndGghPT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8YjtjKyspe3ZhciBkPXRoaXMub3Bjb2Rlc1tjXSxlPWEub3Bjb2Rlc1tjXTtpZihkLm9wY29kZSE9PWUub3Bjb2RlfHwhZyhkLmFyZ3MsZS5hcmdzKSlyZXR1cm4hMX1iPXRoaXMuY2hpbGRyZW4ubGVuZ3RoO2Zvcih2YXIgYz0wO2M8YjtjKyspaWYoIXRoaXMuY2hpbGRyZW5bY10uZXF1YWxzKGEuY2hpbGRyZW5bY10pKXJldHVybiExO3JldHVybiEwfSxndWlkOjAsY29tcGlsZTpmdW5jdGlvbihhLGIpe3RoaXMuc291cmNlTm9kZT1bXSx0aGlzLm9wY29kZXM9W10sdGhpcy5jaGlsZHJlbj1bXSx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0cmluZ1BhcmFtcz1iLnN0cmluZ1BhcmFtcyx0aGlzLnRyYWNrSWRzPWIudHJhY2tJZHMsYi5ibG9ja1BhcmFtcz1iLmJsb2NrUGFyYW1zfHxbXTt2YXIgYz1iLmtub3duSGVscGVycztpZihiLmtub3duSGVscGVycz17aGVscGVyTWlzc2luZzohMCxibG9ja0hlbHBlck1pc3Npbmc6ITAsZWFjaDohMCxcImlmXCI6ITAsdW5sZXNzOiEwLFwid2l0aFwiOiEwLGxvZzohMCxsb29rdXA6ITB9LGMpZm9yKHZhciBkIGluIGMpZCBpbiBjJiYoYi5rbm93bkhlbHBlcnNbZF09Y1tkXSk7cmV0dXJuIHRoaXMuYWNjZXB0KGEpfSxjb21waWxlUHJvZ3JhbTpmdW5jdGlvbihhKXt2YXIgYj1uZXcgdGhpcy5jb21waWxlcixjPWIuY29tcGlsZShhLHRoaXMub3B0aW9ucyksZD10aGlzLmd1aWQrKztyZXR1cm4gdGhpcy51c2VQYXJ0aWFsPXRoaXMudXNlUGFydGlhbHx8Yy51c2VQYXJ0aWFsLHRoaXMuY2hpbGRyZW5bZF09Yyx0aGlzLnVzZURlcHRocz10aGlzLnVzZURlcHRoc3x8Yy51c2VEZXB0aHMsZH0sYWNjZXB0OmZ1bmN0aW9uKGEpe2lmKCF0aGlzW2EudHlwZV0pdGhyb3cgbmV3IGtbXCJkZWZhdWx0XCJdKFwiVW5rbm93biB0eXBlOiBcIithLnR5cGUsYSk7dGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQoYSk7dmFyIGI9dGhpc1thLnR5cGVdKGEpO3JldHVybiB0aGlzLnNvdXJjZU5vZGUuc2hpZnQoKSxifSxQcm9ncmFtOmZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KGEuYmxvY2tQYXJhbXMpO2Zvcih2YXIgYj1hLmJvZHksYz1iLmxlbmd0aCxkPTA7ZDxjO2QrKyl0aGlzLmFjY2VwdChiW2RdKTtyZXR1cm4gdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCksdGhpcy5pc1NpbXBsZT0xPT09Yyx0aGlzLmJsb2NrUGFyYW1zPWEuYmxvY2tQYXJhbXM/YS5ibG9ja1BhcmFtcy5sZW5ndGg6MCx0aGlzfSxCbG9ja1N0YXRlbWVudDpmdW5jdGlvbihhKXtoKGEpO3ZhciBiPWEucHJvZ3JhbSxjPWEuaW52ZXJzZTtiPWImJnRoaXMuY29tcGlsZVByb2dyYW0oYiksYz1jJiZ0aGlzLmNvbXBpbGVQcm9ncmFtKGMpO3ZhciBkPXRoaXMuY2xhc3NpZnlTZXhwcihhKTtcImhlbHBlclwiPT09ZD90aGlzLmhlbHBlclNleHByKGEsYixjKTpcInNpbXBsZVwiPT09ZD8odGhpcy5zaW1wbGVTZXhwcihhKSx0aGlzLm9wY29kZShcInB1c2hQcm9ncmFtXCIsYiksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGMpLHRoaXMub3Bjb2RlKFwiZW1wdHlIYXNoXCIpLHRoaXMub3Bjb2RlKFwiYmxvY2tWYWx1ZVwiLGEucGF0aC5vcmlnaW5hbCkpOih0aGlzLmFtYmlndW91c1NleHByKGEsYixjKSx0aGlzLm9wY29kZShcInB1c2hQcm9ncmFtXCIsYiksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGMpLHRoaXMub3Bjb2RlKFwiZW1wdHlIYXNoXCIpLHRoaXMub3Bjb2RlKFwiYW1iaWd1b3VzQmxvY2tWYWx1ZVwiKSksdGhpcy5vcGNvZGUoXCJhcHBlbmRcIil9LERlY29yYXRvckJsb2NrOmZ1bmN0aW9uKGEpe3ZhciBiPWEucHJvZ3JhbSYmdGhpcy5jb21waWxlUHJvZ3JhbShhLnByb2dyYW0pLGM9dGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhhLGIsdm9pZCAwKSxkPWEucGF0aDt0aGlzLnVzZURlY29yYXRvcnM9ITAsdGhpcy5vcGNvZGUoXCJyZWdpc3RlckRlY29yYXRvclwiLGMubGVuZ3RoLGQub3JpZ2luYWwpfSxQYXJ0aWFsU3RhdGVtZW50OmZ1bmN0aW9uKGEpe3RoaXMudXNlUGFydGlhbD0hMDt2YXIgYj1hLnByb2dyYW07YiYmKGI9dGhpcy5jb21waWxlUHJvZ3JhbShhLnByb2dyYW0pKTt2YXIgYz1hLnBhcmFtcztpZihjLmxlbmd0aD4xKXRocm93IG5ldyBrW1wiZGVmYXVsdFwiXShcIlVuc3VwcG9ydGVkIG51bWJlciBvZiBwYXJ0aWFsIGFyZ3VtZW50czogXCIrYy5sZW5ndGgsYSk7Yy5sZW5ndGh8fCh0aGlzLm9wdGlvbnMuZXhwbGljaXRQYXJ0aWFsQ29udGV4dD90aGlzLm9wY29kZShcInB1c2hMaXRlcmFsXCIsXCJ1bmRlZmluZWRcIik6Yy5wdXNoKHt0eXBlOlwiUGF0aEV4cHJlc3Npb25cIixwYXJ0czpbXSxkZXB0aDowfSkpO3ZhciBkPWEubmFtZS5vcmlnaW5hbCxlPVwiU3ViRXhwcmVzc2lvblwiPT09YS5uYW1lLnR5cGU7ZSYmdGhpcy5hY2NlcHQoYS5uYW1lKSx0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKGEsYix2b2lkIDAsITApO3ZhciBmPWEuaW5kZW50fHxcIlwiO3RoaXMub3B0aW9ucy5wcmV2ZW50SW5kZW50JiZmJiYodGhpcy5vcGNvZGUoXCJhcHBlbmRDb250ZW50XCIsZiksZj1cIlwiKSx0aGlzLm9wY29kZShcImludm9rZVBhcnRpYWxcIixlLGQsZiksdGhpcy5vcGNvZGUoXCJhcHBlbmRcIil9LFBhcnRpYWxCbG9ja1N0YXRlbWVudDpmdW5jdGlvbihhKXt0aGlzLlBhcnRpYWxTdGF0ZW1lbnQoYSl9LE11c3RhY2hlU3RhdGVtZW50OmZ1bmN0aW9uKGEpe3RoaXMuU3ViRXhwcmVzc2lvbihhKSxhLmVzY2FwZWQmJiF0aGlzLm9wdGlvbnMubm9Fc2NhcGU/dGhpcy5vcGNvZGUoXCJhcHBlbmRFc2NhcGVkXCIpOnRoaXMub3Bjb2RlKFwiYXBwZW5kXCIpfSxEZWNvcmF0b3I6ZnVuY3Rpb24oYSl7dGhpcy5EZWNvcmF0b3JCbG9jayhhKX0sQ29udGVudFN0YXRlbWVudDpmdW5jdGlvbihhKXthLnZhbHVlJiZ0aGlzLm9wY29kZShcImFwcGVuZENvbnRlbnRcIixhLnZhbHVlKX0sQ29tbWVudFN0YXRlbWVudDpmdW5jdGlvbigpe30sU3ViRXhwcmVzc2lvbjpmdW5jdGlvbihhKXtoKGEpO3ZhciBiPXRoaXMuY2xhc3NpZnlTZXhwcihhKTtcInNpbXBsZVwiPT09Yj90aGlzLnNpbXBsZVNleHByKGEpOlwiaGVscGVyXCI9PT1iP3RoaXMuaGVscGVyU2V4cHIoYSk6dGhpcy5hbWJpZ3VvdXNTZXhwcihhKX0sYW1iaWd1b3VzU2V4cHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEucGF0aCxlPWQucGFydHNbMF0sZj1udWxsIT1ifHxudWxsIT1jO3RoaXMub3Bjb2RlKFwiZ2V0Q29udGV4dFwiLGQuZGVwdGgpLHRoaXMub3Bjb2RlKFwicHVzaFByb2dyYW1cIixiKSx0aGlzLm9wY29kZShcInB1c2hQcm9ncmFtXCIsYyksZC5zdHJpY3Q9ITAsdGhpcy5hY2NlcHQoZCksdGhpcy5vcGNvZGUoXCJpbnZva2VBbWJpZ3VvdXNcIixlLGYpfSxzaW1wbGVTZXhwcjpmdW5jdGlvbihhKXt2YXIgYj1hLnBhdGg7Yi5zdHJpY3Q9ITAsdGhpcy5hY2NlcHQoYiksdGhpcy5vcGNvZGUoXCJyZXNvbHZlUG9zc2libGVMYW1iZGFcIil9LGhlbHBlclNleHByOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKGEsYixjKSxlPWEucGF0aCxmPWUucGFydHNbMF07aWYodGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tmXSl0aGlzLm9wY29kZShcImludm9rZUtub3duSGVscGVyXCIsZC5sZW5ndGgsZik7ZWxzZXtpZih0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSl0aHJvdyBuZXcga1tcImRlZmF1bHRcIl0oXCJZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciBcIitmLGEpO2Uuc3RyaWN0PSEwLGUuZmFsc3k9ITAsdGhpcy5hY2NlcHQoZSksdGhpcy5vcGNvZGUoXCJpbnZva2VIZWxwZXJcIixkLmxlbmd0aCxlLm9yaWdpbmFsLG5bXCJkZWZhdWx0XCJdLmhlbHBlcnMuc2ltcGxlSWQoZSkpfX0sUGF0aEV4cHJlc3Npb246ZnVuY3Rpb24oYSl7dGhpcy5hZGREZXB0aChhLmRlcHRoKSx0aGlzLm9wY29kZShcImdldENvbnRleHRcIixhLmRlcHRoKTt2YXIgYj1hLnBhcnRzWzBdLGM9bltcImRlZmF1bHRcIl0uaGVscGVycy5zY29wZWRJZChhKSxkPSFhLmRlcHRoJiYhYyYmdGhpcy5ibG9ja1BhcmFtSW5kZXgoYik7ZD90aGlzLm9wY29kZShcImxvb2t1cEJsb2NrUGFyYW1cIixkLGEucGFydHMpOmI/YS5kYXRhPyh0aGlzLm9wdGlvbnMuZGF0YT0hMCx0aGlzLm9wY29kZShcImxvb2t1cERhdGFcIixhLmRlcHRoLGEucGFydHMsYS5zdHJpY3QpKTp0aGlzLm9wY29kZShcImxvb2t1cE9uQ29udGV4dFwiLGEucGFydHMsYS5mYWxzeSxhLnN0cmljdCxjKTp0aGlzLm9wY29kZShcInB1c2hDb250ZXh0XCIpfSxTdHJpbmdMaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMub3Bjb2RlKFwicHVzaFN0cmluZ1wiLGEudmFsdWUpfSxOdW1iZXJMaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMub3Bjb2RlKFwicHVzaExpdGVyYWxcIixhLnZhbHVlKX0sQm9vbGVhbkxpdGVyYWw6ZnVuY3Rpb24oYSl7dGhpcy5vcGNvZGUoXCJwdXNoTGl0ZXJhbFwiLGEudmFsdWUpfSxVbmRlZmluZWRMaXRlcmFsOmZ1bmN0aW9uKCl7dGhpcy5vcGNvZGUoXCJwdXNoTGl0ZXJhbFwiLFwidW5kZWZpbmVkXCIpfSxOdWxsTGl0ZXJhbDpmdW5jdGlvbigpe3RoaXMub3Bjb2RlKFwicHVzaExpdGVyYWxcIixcIm51bGxcIil9LEhhc2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYWlycyxjPTAsZD1iLmxlbmd0aDtmb3IodGhpcy5vcGNvZGUoXCJwdXNoSGFzaFwiKTtjPGQ7YysrKXRoaXMucHVzaFBhcmFtKGJbY10udmFsdWUpO2Zvcig7Yy0tOyl0aGlzLm9wY29kZShcImFzc2lnblRvSGFzaFwiLGJbY10ua2V5KTt0aGlzLm9wY29kZShcInBvcEhhc2hcIil9LG9wY29kZTpmdW5jdGlvbihhKXt0aGlzLm9wY29kZXMucHVzaCh7b3Bjb2RlOmEsYXJnczpvLmNhbGwoYXJndW1lbnRzLDEpLGxvYzp0aGlzLnNvdXJjZU5vZGVbMF0ubG9jfSl9LGFkZERlcHRoOmZ1bmN0aW9uKGEpe2EmJih0aGlzLnVzZURlcHRocz0hMCl9LGNsYXNzaWZ5U2V4cHI6ZnVuY3Rpb24oYSl7dmFyIGI9bltcImRlZmF1bHRcIl0uaGVscGVycy5zaW1wbGVJZChhLnBhdGgpLGM9YiYmISF0aGlzLmJsb2NrUGFyYW1JbmRleChhLnBhdGgucGFydHNbMF0pLGQ9IWMmJm5bXCJkZWZhdWx0XCJdLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihhKSxlPSFjJiYoZHx8Yik7aWYoZSYmIWQpe3ZhciBmPWEucGF0aC5wYXJ0c1swXSxnPXRoaXMub3B0aW9ucztnLmtub3duSGVscGVyc1tmXT9kPSEwOmcua25vd25IZWxwZXJzT25seSYmKGU9ITEpfXJldHVybiBkP1wiaGVscGVyXCI6ZT9cImFtYmlndW91c1wiOlwic2ltcGxlXCJ9LHB1c2hQYXJhbXM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKXRoaXMucHVzaFBhcmFtKGFbYl0pfSxwdXNoUGFyYW06ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbCE9YS52YWx1ZT9hLnZhbHVlOmEub3JpZ2luYWx8fFwiXCI7aWYodGhpcy5zdHJpbmdQYXJhbXMpYi5yZXBsYWNlJiYoYj1iLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csXCJcIikucmVwbGFjZSgvXFwvL2csXCIuXCIpKSxhLmRlcHRoJiZ0aGlzLmFkZERlcHRoKGEuZGVwdGgpLHRoaXMub3Bjb2RlKFwiZ2V0Q29udGV4dFwiLGEuZGVwdGh8fDApLHRoaXMub3Bjb2RlKFwicHVzaFN0cmluZ1BhcmFtXCIsYixhLnR5cGUpLFwiU3ViRXhwcmVzc2lvblwiPT09YS50eXBlJiZ0aGlzLmFjY2VwdChhKTtlbHNle2lmKHRoaXMudHJhY2tJZHMpe3ZhciBjPXZvaWQgMDtpZighYS5wYXJ0c3x8bltcImRlZmF1bHRcIl0uaGVscGVycy5zY29wZWRJZChhKXx8YS5kZXB0aHx8KGM9dGhpcy5ibG9ja1BhcmFtSW5kZXgoYS5wYXJ0c1swXSkpLGMpe3ZhciBkPWEucGFydHMuc2xpY2UoMSkuam9pbihcIi5cIik7dGhpcy5vcGNvZGUoXCJwdXNoSWRcIixcIkJsb2NrUGFyYW1cIixjLGQpfWVsc2UgYj1hLm9yaWdpbmFsfHxiLGIucmVwbGFjZSYmKGI9Yi5yZXBsYWNlKC9edGhpcyg/OlxcLnwkKS8sXCJcIikucmVwbGFjZSgvXlxcLlxcLy8sXCJcIikucmVwbGFjZSgvXlxcLiQvLFwiXCIpKSx0aGlzLm9wY29kZShcInB1c2hJZFwiLGEudHlwZSxiKX10aGlzLmFjY2VwdChhKX19LHNldHVwRnVsbE11c3RhY2hlUGFyYW1zOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEucGFyYW1zO3JldHVybiB0aGlzLnB1c2hQYXJhbXMoZSksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGIpLHRoaXMub3Bjb2RlKFwicHVzaFByb2dyYW1cIixjKSxhLmhhc2g/dGhpcy5hY2NlcHQoYS5oYXNoKTp0aGlzLm9wY29kZShcImVtcHR5SGFzaFwiLGQpLGV9LGJsb2NrUGFyYW1JbmRleDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7YjxjO2IrKyl7dmFyIGQ9dGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zW2JdLGU9ZCYmbC5pbmRleE9mKGQsYSk7aWYoZCYmZT49MClyZXR1cm5bYixlXX19fX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSl7dGhpcy52YWx1ZT1hfWZ1bmN0aW9uIGUoKXt9ZnVuY3Rpb24gZihhLGIsYyxkKXt2YXIgZT1iLnBvcFN0YWNrKCksZj0wLGc9Yy5sZW5ndGg7Zm9yKGEmJmctLTtmPGc7ZisrKWU9Yi5uYW1lTG9va3VwKGUsY1tmXSxkKTtyZXR1cm4gYT9bYi5hbGlhc2FibGUoXCJjb250YWluZXIuc3RyaWN0XCIpLFwiKFwiLGUsXCIsIFwiLGIucXVvdGVkU3RyaW5nKGNbZl0pLFwiKVwiXTplfXZhciBnPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgaD1jKDQpLGk9Yyg2KSxqPWcoaSksaz1jKDUpLGw9YygzMiksbT1nKGwpO2UucHJvdG90eXBlPXtuYW1lTG9va3VwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGUuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUoYik/W2EsXCIuXCIsYl06W2EsXCJbXCIsSlNPTi5zdHJpbmdpZnkoYiksXCJdXCJdfSxkZXB0aGVkTG9va3VwOmZ1bmN0aW9uKGEpe3JldHVyblt0aGlzLmFsaWFzYWJsZShcImNvbnRhaW5lci5sb29rdXBcIiksJyhkZXB0aHMsIFwiJyxhLCdcIiknXX0sY29tcGlsZXJJbmZvOmZ1bmN0aW9uKCl7dmFyIGE9aC5DT01QSUxFUl9SRVZJU0lPTixiPWguUkVWSVNJT05fQ0hBTkdFU1thXTtyZXR1cm5bYSxiXX0sYXBwZW5kVG9CdWZmZXI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBrLmlzQXJyYXkoYSl8fChhPVthXSksYT10aGlzLnNvdXJjZS53cmFwKGEsYiksdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZT9bXCJyZXR1cm4gXCIsYSxcIjtcIl06Yz9bXCJidWZmZXIgKz0gXCIsYSxcIjtcIl06KGEuYXBwZW5kVG9CdWZmZXI9ITAsYSl9LGluaXRpYWxpemVCdWZmZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xdW90ZWRTdHJpbmcoXCJcIil9LGNvbXBpbGU6ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5lbnZpcm9ubWVudD1hLHRoaXMub3B0aW9ucz1iLHRoaXMuc3RyaW5nUGFyYW1zPXRoaXMub3B0aW9ucy5zdHJpbmdQYXJhbXMsdGhpcy50cmFja0lkcz10aGlzLm9wdGlvbnMudHJhY2tJZHMsdGhpcy5wcmVjb21waWxlPSFkLHRoaXMubmFtZT10aGlzLmVudmlyb25tZW50Lm5hbWUsdGhpcy5pc0NoaWxkPSEhYyx0aGlzLmNvbnRleHQ9Y3x8e2RlY29yYXRvcnM6W10scHJvZ3JhbXM6W10sZW52aXJvbm1lbnRzOltdfSx0aGlzLnByZWFtYmxlKCksdGhpcy5zdGFja1Nsb3Q9MCx0aGlzLnN0YWNrVmFycz1bXSx0aGlzLmFsaWFzZXM9e30sdGhpcy5yZWdpc3RlcnM9e2xpc3Q6W119LHRoaXMuaGFzaGVzPVtdLHRoaXMuY29tcGlsZVN0YWNrPVtdLHRoaXMuaW5saW5lU3RhY2s9W10sdGhpcy5ibG9ja1BhcmFtcz1bXSx0aGlzLmNvbXBpbGVDaGlsZHJlbihhLGIpLHRoaXMudXNlRGVwdGhzPXRoaXMudXNlRGVwdGhzfHxhLnVzZURlcHRoc3x8YS51c2VEZWNvcmF0b3JzfHx0aGlzLm9wdGlvbnMuY29tcGF0LHRoaXMudXNlQmxvY2tQYXJhbXM9dGhpcy51c2VCbG9ja1BhcmFtc3x8YS51c2VCbG9ja1BhcmFtczt2YXIgZT1hLm9wY29kZXMsZj12b2lkIDAsZz12b2lkIDAsaD12b2lkIDAsaT12b2lkIDA7Zm9yKGg9MCxpPWUubGVuZ3RoO2g8aTtoKyspZj1lW2hdLHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbj1mLmxvYyxnPWd8fGYubG9jLHRoaXNbZi5vcGNvZGVdLmFwcGx5KHRoaXMsZi5hcmdzKTtpZih0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb249Zyx0aGlzLnB1c2hTb3VyY2UoXCJcIiksdGhpcy5zdGFja1Nsb3R8fHRoaXMuaW5saW5lU3RhY2subGVuZ3RofHx0aGlzLmNvbXBpbGVTdGFjay5sZW5ndGgpdGhyb3cgbmV3IGpbXCJkZWZhdWx0XCJdKFwiQ29tcGlsZSBjb21wbGV0ZWQgd2l0aCBjb250ZW50IGxlZnQgb24gc3RhY2tcIik7dGhpcy5kZWNvcmF0b3JzLmlzRW1wdHkoKT90aGlzLmRlY29yYXRvcnM9dm9pZCAwOih0aGlzLnVzZURlY29yYXRvcnM9ITAsdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoXCJ2YXIgZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5kZWNvcmF0b3JzO1xcblwiKSx0aGlzLmRlY29yYXRvcnMucHVzaChcInJldHVybiBmbjtcIiksZD90aGlzLmRlY29yYXRvcnM9RnVuY3Rpb24uYXBwbHkodGhpcyxbXCJmblwiLFwicHJvcHNcIixcImNvbnRhaW5lclwiLFwiZGVwdGgwXCIsXCJkYXRhXCIsXCJibG9ja1BhcmFtc1wiLFwiZGVwdGhzXCIsdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKToodGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoXCJmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuXCIpLHRoaXMuZGVjb3JhdG9ycy5wdXNoKFwifVxcblwiKSx0aGlzLmRlY29yYXRvcnM9dGhpcy5kZWNvcmF0b3JzLm1lcmdlKCkpKTt2YXIgaz10aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChkKTtpZih0aGlzLmlzQ2hpbGQpcmV0dXJuIGs7dmFyIGw9e2NvbXBpbGVyOnRoaXMuY29tcGlsZXJJbmZvKCksbWFpbjprfTt0aGlzLmRlY29yYXRvcnMmJihsLm1haW5fZD10aGlzLmRlY29yYXRvcnMsbC51c2VEZWNvcmF0b3JzPSEwKTt2YXIgbT10aGlzLmNvbnRleHQsbj1tLnByb2dyYW1zLG89bS5kZWNvcmF0b3JzO2ZvcihoPTAsaT1uLmxlbmd0aDtoPGk7aCsrKW5baF0mJihsW2hdPW5baF0sb1toXSYmKGxbaCtcIl9kXCJdPW9baF0sbC51c2VEZWNvcmF0b3JzPSEwKSk7cmV0dXJuIHRoaXMuZW52aXJvbm1lbnQudXNlUGFydGlhbCYmKGwudXNlUGFydGlhbD0hMCksdGhpcy5vcHRpb25zLmRhdGEmJihsLnVzZURhdGE9ITApLHRoaXMudXNlRGVwdGhzJiYobC51c2VEZXB0aHM9ITApLHRoaXMudXNlQmxvY2tQYXJhbXMmJihsLnVzZUJsb2NrUGFyYW1zPSEwKSx0aGlzLm9wdGlvbnMuY29tcGF0JiYobC5jb21wYXQ9ITApLGQ/bC5jb21waWxlck9wdGlvbnM9dGhpcy5vcHRpb25zOihsLmNvbXBpbGVyPUpTT04uc3RyaW5naWZ5KGwuY29tcGlsZXIpLHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbj17c3RhcnQ6e2xpbmU6MSxjb2x1bW46MH19LGw9dGhpcy5vYmplY3RMaXRlcmFsKGwpLGIuc3JjTmFtZT8obD1sLnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7ZmlsZTpiLmRlc3ROYW1lfSksbC5tYXA9bC5tYXAmJmwubWFwLnRvU3RyaW5nKCkpOmw9bC50b1N0cmluZygpKSxsfSxwcmVhbWJsZTpmdW5jdGlvbigpe3RoaXMubGFzdENvbnRleHQ9MCx0aGlzLnNvdXJjZT1uZXcgbVtcImRlZmF1bHRcIl0odGhpcy5vcHRpb25zLnNyY05hbWUpLHRoaXMuZGVjb3JhdG9ycz1uZXcgbVtcImRlZmF1bHRcIl0odGhpcy5vcHRpb25zLnNyY05hbWUpfSxjcmVhdGVGdW5jdGlvbkNvbnRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJcIixjPXRoaXMuc3RhY2tWYXJzLmNvbmNhdCh0aGlzLnJlZ2lzdGVycy5saXN0KTtjLmxlbmd0aD4wJiYoYis9XCIsIFwiK2Muam9pbihcIiwgXCIpKTt2YXIgZD0wO2Zvcih2YXIgZSBpbiB0aGlzLmFsaWFzZXMpe3ZhciBmPXRoaXMuYWxpYXNlc1tlXTt0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZSkmJmYuY2hpbGRyZW4mJmYucmVmZXJlbmNlQ291bnQ+MSYmKGIrPVwiLCBhbGlhc1wiKyArK2QrXCI9XCIrZSxmLmNoaWxkcmVuWzBdPVwiYWxpYXNcIitkKX12YXIgZz1bXCJjb250YWluZXJcIixcImRlcHRoMFwiLFwiaGVscGVyc1wiLFwicGFydGlhbHNcIixcImRhdGFcIl07KHRoaXMudXNlQmxvY2tQYXJhbXN8fHRoaXMudXNlRGVwdGhzKSYmZy5wdXNoKFwiYmxvY2tQYXJhbXNcIiksdGhpcy51c2VEZXB0aHMmJmcucHVzaChcImRlcHRoc1wiKTt2YXIgaD10aGlzLm1lcmdlU291cmNlKGIpO3JldHVybiBhPyhnLnB1c2goaCksRnVuY3Rpb24uYXBwbHkodGhpcyxnKSk6dGhpcy5zb3VyY2Uud3JhcChbXCJmdW5jdGlvbihcIixnLmpvaW4oXCIsXCIpLFwiKSB7XFxuICBcIixoLFwifVwiXSl9LG1lcmdlU291cmNlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUsYz0hdGhpcy5mb3JjZUJ1ZmZlcixkPXZvaWQgMCxlPXZvaWQgMCxmPXZvaWQgMCxnPXZvaWQgMDtyZXR1cm4gdGhpcy5zb3VyY2UuZWFjaChmdW5jdGlvbihhKXthLmFwcGVuZFRvQnVmZmVyPyhmP2EucHJlcGVuZChcIiAgKyBcIik6Zj1hLGc9YSk6KGYmJihlP2YucHJlcGVuZChcImJ1ZmZlciArPSBcIik6ZD0hMCxnLmFkZChcIjtcIiksZj1nPXZvaWQgMCksZT0hMCxifHwoYz0hMSkpfSksYz9mPyhmLnByZXBlbmQoXCJyZXR1cm4gXCIpLGcuYWRkKFwiO1wiKSk6ZXx8dGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk6KGErPVwiLCBidWZmZXIgPSBcIisoZD9cIlwiOnRoaXMuaW5pdGlhbGl6ZUJ1ZmZlcigpKSxmPyhmLnByZXBlbmQoXCJyZXR1cm4gYnVmZmVyICsgXCIpLGcuYWRkKFwiO1wiKSk6dGhpcy5zb3VyY2UucHVzaChcInJldHVybiBidWZmZXI7XCIpKSxhJiZ0aGlzLnNvdXJjZS5wcmVwZW5kKFwidmFyIFwiK2Euc3Vic3RyaW5nKDIpKyhkP1wiXCI6XCI7XFxuXCIpKSx0aGlzLnNvdXJjZS5tZXJnZSgpfSxibG9ja1ZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWxpYXNhYmxlKFwiaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmdcIiksYz1bdGhpcy5jb250ZXh0TmFtZSgwKV07dGhpcy5zZXR1cEhlbHBlckFyZ3MoYSwwLGMpO3ZhciBkPXRoaXMucG9wU3RhY2soKTtjLnNwbGljZSgxLDAsZCksdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChiLFwiY2FsbFwiLGMpKX0sYW1iaWd1b3VzQmxvY2tWYWx1ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuYWxpYXNhYmxlKFwiaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmdcIiksYj1bdGhpcy5jb250ZXh0TmFtZSgwKV07dGhpcy5zZXR1cEhlbHBlckFyZ3MoXCJcIiwwLGIsITApLHRoaXMuZmx1c2hJbmxpbmUoKTt2YXIgYz10aGlzLnRvcFN0YWNrKCk7Yi5zcGxpY2UoMSwwLGMpLHRoaXMucHVzaFNvdXJjZShbXCJpZiAoIVwiLHRoaXMubGFzdEhlbHBlcixcIikgeyBcIixjLFwiID0gXCIsdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGEsXCJjYWxsXCIsYiksXCJ9XCJdKX0sYXBwZW5kQ29udGVudDpmdW5jdGlvbihhKXt0aGlzLnBlbmRpbmdDb250ZW50P2E9dGhpcy5wZW5kaW5nQ29udGVudCthOnRoaXMucGVuZGluZ0xvY2F0aW9uPXRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbix0aGlzLnBlbmRpbmdDb250ZW50PWF9LGFwcGVuZDpmdW5jdGlvbigpe2lmKHRoaXMuaXNJbmxpbmUoKSl0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbihhKXtyZXR1cm5bXCIgIT0gbnVsbCA/IFwiLGEsJyA6IFwiXCInXX0pLHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMucG9wU3RhY2soKSkpO2Vsc2V7dmFyIGE9dGhpcy5wb3BTdGFjaygpO3RoaXMucHVzaFNvdXJjZShbXCJpZiAoXCIsYSxcIiAhPSBudWxsKSB7IFwiLHRoaXMuYXBwZW5kVG9CdWZmZXIoYSx2b2lkIDAsITApLFwiIH1cIl0pLHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUmJnRoaXMucHVzaFNvdXJjZShbXCJlbHNlIHsgXCIsdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIsdm9pZCAwLCEwKSxcIiB9XCJdKX19LGFwcGVuZEVzY2FwZWQ6ZnVuY3Rpb24oKXt0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcihbdGhpcy5hbGlhc2FibGUoXCJjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvblwiKSxcIihcIix0aGlzLnBvcFN0YWNrKCksXCIpXCJdKSl9LGdldENvbnRleHQ6ZnVuY3Rpb24oYSl7dGhpcy5sYXN0Q29udGV4dD1hfSxwdXNoQ29udGV4dDpmdW5jdGlvbigpe3RoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLmNvbnRleHROYW1lKHRoaXMubGFzdENvbnRleHQpKX0sbG9va3VwT25Db250ZXh0OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPTA7ZHx8IXRoaXMub3B0aW9ucy5jb21wYXR8fHRoaXMubGFzdENvbnRleHQ/dGhpcy5wdXNoQ29udGV4dCgpOnRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAoYVtlKytdKSksdGhpcy5yZXNvbHZlUGF0aChcImNvbnRleHRcIixhLGUsYixjKX0sbG9va3VwQmxvY2tQYXJhbTpmdW5jdGlvbihhLGIpe3RoaXMudXNlQmxvY2tQYXJhbXM9ITAsdGhpcy5wdXNoKFtcImJsb2NrUGFyYW1zW1wiLGFbMF0sXCJdW1wiLGFbMV0sXCJdXCJdKSx0aGlzLnJlc29sdmVQYXRoKFwiY29udGV4dFwiLGIsMSl9LGxvb2t1cERhdGE6ZnVuY3Rpb24oYSxiLGMpe2E/dGhpcy5wdXNoU3RhY2tMaXRlcmFsKFwiY29udGFpbmVyLmRhdGEoZGF0YSwgXCIrYStcIilcIik6dGhpcy5wdXNoU3RhY2tMaXRlcmFsKFwiZGF0YVwiKSx0aGlzLnJlc29sdmVQYXRoKFwiZGF0YVwiLGIsMCwhMCxjKX0scmVzb2x2ZVBhdGg6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZz10aGlzO2lmKHRoaXMub3B0aW9ucy5zdHJpY3R8fHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKXJldHVybiB2b2lkIHRoaXMucHVzaChmKHRoaXMub3B0aW9ucy5zdHJpY3QmJmUsdGhpcyxiLGEpKTtmb3IodmFyIGg9Yi5sZW5ndGg7YzxoO2MrKyl0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbihlKXt2YXIgZj1nLm5hbWVMb29rdXAoZSxiW2NdLGEpO3JldHVybiBkP1tcIiAmJiBcIixmXTpbXCIgIT0gbnVsbCA/IFwiLGYsXCIgOiBcIixlXX0pfSxyZXNvbHZlUG9zc2libGVMYW1iZGE6ZnVuY3Rpb24oKXt0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmxhbWJkYVwiKSxcIihcIix0aGlzLnBvcFN0YWNrKCksXCIsIFwiLHRoaXMuY29udGV4dE5hbWUoMCksXCIpXCJdKX0scHVzaFN0cmluZ1BhcmFtOmZ1bmN0aW9uKGEsYil7dGhpcy5wdXNoQ29udGV4dCgpLHRoaXMucHVzaFN0cmluZyhiKSxcIlN1YkV4cHJlc3Npb25cIiE9PWImJihcInN0cmluZ1wiPT10eXBlb2YgYT90aGlzLnB1c2hTdHJpbmcoYSk6dGhpcy5wdXNoU3RhY2tMaXRlcmFsKGEpKX0sZW1wdHlIYXNoOmZ1bmN0aW9uKGEpe3RoaXMudHJhY2tJZHMmJnRoaXMucHVzaChcInt9XCIpLHRoaXMuc3RyaW5nUGFyYW1zJiYodGhpcy5wdXNoKFwie31cIiksdGhpcy5wdXNoKFwie31cIikpLHRoaXMucHVzaFN0YWNrTGl0ZXJhbChhP1widW5kZWZpbmVkXCI6XCJ7fVwiKX0scHVzaEhhc2g6ZnVuY3Rpb24oKXt0aGlzLmhhc2gmJnRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKSx0aGlzLmhhc2g9e3ZhbHVlczpbXSx0eXBlczpbXSxjb250ZXh0czpbXSxpZHM6W119fSxwb3BIYXNoOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5oYXNoO3RoaXMuaGFzaD10aGlzLmhhc2hlcy5wb3AoKSx0aGlzLnRyYWNrSWRzJiZ0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEuaWRzKSksdGhpcy5zdHJpbmdQYXJhbXMmJih0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEuY29udGV4dHMpKSx0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEudHlwZXMpKSksdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChhLnZhbHVlcykpfSxwdXNoU3RyaW5nOmZ1bmN0aW9uKGEpe3RoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhhKSl9LHB1c2hMaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMucHVzaFN0YWNrTGl0ZXJhbChhKX0scHVzaFByb2dyYW06ZnVuY3Rpb24oYSl7bnVsbCE9YT90aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihhKSk6dGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpfSxyZWdpc3RlckRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubmFtZUxvb2t1cChcImRlY29yYXRvcnNcIixiLFwiZGVjb3JhdG9yXCIpLGQ9dGhpcy5zZXR1cEhlbHBlckFyZ3MoYixhKTt0aGlzLmRlY29yYXRvcnMucHVzaChbXCJmbiA9IFwiLHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoYyxcIlwiLFtcImZuXCIsXCJwcm9wc1wiLFwiY29udGFpbmVyXCIsZF0pLFwiIHx8IGZuO1wiXSl9LGludm9rZUhlbHBlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcy5wb3BTdGFjaygpLGU9dGhpcy5zZXR1cEhlbHBlcihhLGIpLGY9Yz9bZS5uYW1lLFwiIHx8IFwiXTpcIlwiLGc9W1wiKFwiXS5jb25jYXQoZixkKTt0aGlzLm9wdGlvbnMuc3RyaWN0fHxnLnB1c2goXCIgfHwgXCIsdGhpcy5hbGlhc2FibGUoXCJoZWxwZXJzLmhlbHBlck1pc3NpbmdcIikpLGcucHVzaChcIilcIiksdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChnLFwiY2FsbFwiLGUuY2FsbFBhcmFtcykpfSxpbnZva2VLbm93bkhlbHBlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuc2V0dXBIZWxwZXIoYSxiKTt0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGMubmFtZSxcImNhbGxcIixjLmNhbGxQYXJhbXMpKX0saW52b2tlQW1iaWd1b3VzOmZ1bmN0aW9uKGEsYil7dGhpcy51c2VSZWdpc3RlcihcImhlbHBlclwiKTt2YXIgYz10aGlzLnBvcFN0YWNrKCk7dGhpcy5lbXB0eUhhc2goKTt2YXIgZD10aGlzLnNldHVwSGVscGVyKDAsYSxiKSxlPXRoaXMubGFzdEhlbHBlcj10aGlzLm5hbWVMb29rdXAoXCJoZWxwZXJzXCIsYSxcImhlbHBlclwiKSxmPVtcIihcIixcIihoZWxwZXIgPSBcIixlLFwiIHx8IFwiLGMsXCIpXCJdO3RoaXMub3B0aW9ucy5zdHJpY3R8fChmWzBdPVwiKGhlbHBlciA9IFwiLFxuZi5wdXNoKFwiICE9IG51bGwgPyBoZWxwZXIgOiBcIix0aGlzLmFsaWFzYWJsZShcImhlbHBlcnMuaGVscGVyTWlzc2luZ1wiKSkpLHRoaXMucHVzaChbXCIoXCIsZixkLnBhcmFtc0luaXQ/W1wiKSwoXCIsZC5wYXJhbXNJbml0XTpbXSxcIiksXCIsXCIodHlwZW9mIGhlbHBlciA9PT0gXCIsdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLFwiID8gXCIsdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKFwiaGVscGVyXCIsXCJjYWxsXCIsZC5jYWxsUGFyYW1zKSxcIiA6IGhlbHBlcikpXCJdKX0saW52b2tlUGFydGlhbDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT10aGlzLnNldHVwUGFyYW1zKGIsMSxkKTthJiYoYj10aGlzLnBvcFN0YWNrKCksZGVsZXRlIGUubmFtZSksYyYmKGUuaW5kZW50PUpTT04uc3RyaW5naWZ5KGMpKSxlLmhlbHBlcnM9XCJoZWxwZXJzXCIsZS5wYXJ0aWFscz1cInBhcnRpYWxzXCIsZS5kZWNvcmF0b3JzPVwiY29udGFpbmVyLmRlY29yYXRvcnNcIixhP2QudW5zaGlmdChiKTpkLnVuc2hpZnQodGhpcy5uYW1lTG9va3VwKFwicGFydGlhbHNcIixiLFwicGFydGlhbFwiKSksdGhpcy5vcHRpb25zLmNvbXBhdCYmKGUuZGVwdGhzPVwiZGVwdGhzXCIpLGU9dGhpcy5vYmplY3RMaXRlcmFsKGUpLGQucHVzaChlKSx0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKFwiY29udGFpbmVyLmludm9rZVBhcnRpYWxcIixcIlwiLGQpKX0sYXNzaWduVG9IYXNoOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMucG9wU3RhY2soKSxjPXZvaWQgMCxkPXZvaWQgMCxlPXZvaWQgMDt0aGlzLnRyYWNrSWRzJiYoZT10aGlzLnBvcFN0YWNrKCkpLHRoaXMuc3RyaW5nUGFyYW1zJiYoZD10aGlzLnBvcFN0YWNrKCksYz10aGlzLnBvcFN0YWNrKCkpO3ZhciBmPXRoaXMuaGFzaDtjJiYoZi5jb250ZXh0c1thXT1jKSxkJiYoZi50eXBlc1thXT1kKSxlJiYoZi5pZHNbYV09ZSksZi52YWx1ZXNbYV09Yn0scHVzaElkOmZ1bmN0aW9uKGEsYixjKXtcIkJsb2NrUGFyYW1cIj09PWE/dGhpcy5wdXNoU3RhY2tMaXRlcmFsKFwiYmxvY2tQYXJhbXNbXCIrYlswXStcIl0ucGF0aFtcIitiWzFdK1wiXVwiKyhjP1wiICsgXCIrSlNPTi5zdHJpbmdpZnkoXCIuXCIrYyk6XCJcIikpOlwiUGF0aEV4cHJlc3Npb25cIj09PWE/dGhpcy5wdXNoU3RyaW5nKGIpOlwiU3ViRXhwcmVzc2lvblwiPT09YT90aGlzLnB1c2hTdGFja0xpdGVyYWwoXCJ0cnVlXCIpOnRoaXMucHVzaFN0YWNrTGl0ZXJhbChcIm51bGxcIil9LGNvbXBpbGVyOmUsY29tcGlsZUNoaWxkcmVuOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuY2hpbGRyZW4sZD12b2lkIDAsZT12b2lkIDAsZj0wLGc9Yy5sZW5ndGg7ZjxnO2YrKyl7ZD1jW2ZdLGU9bmV3IHRoaXMuY29tcGlsZXI7dmFyIGg9dGhpcy5tYXRjaEV4aXN0aW5nUHJvZ3JhbShkKTtpZihudWxsPT1oKXt0aGlzLmNvbnRleHQucHJvZ3JhbXMucHVzaChcIlwiKTt2YXIgaT10aGlzLmNvbnRleHQucHJvZ3JhbXMubGVuZ3RoO2QuaW5kZXg9aSxkLm5hbWU9XCJwcm9ncmFtXCIraSx0aGlzLmNvbnRleHQucHJvZ3JhbXNbaV09ZS5jb21waWxlKGQsYix0aGlzLmNvbnRleHQsIXRoaXMucHJlY29tcGlsZSksdGhpcy5jb250ZXh0LmRlY29yYXRvcnNbaV09ZS5kZWNvcmF0b3JzLHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaV09ZCx0aGlzLnVzZURlcHRocz10aGlzLnVzZURlcHRoc3x8ZS51c2VEZXB0aHMsdGhpcy51c2VCbG9ja1BhcmFtcz10aGlzLnVzZUJsb2NrUGFyYW1zfHxlLnVzZUJsb2NrUGFyYW1zLGQudXNlRGVwdGhzPXRoaXMudXNlRGVwdGhzLGQudXNlQmxvY2tQYXJhbXM9dGhpcy51c2VCbG9ja1BhcmFtc31lbHNlIGQuaW5kZXg9aC5pbmRleCxkLm5hbWU9XCJwcm9ncmFtXCIraC5pbmRleCx0aGlzLnVzZURlcHRocz10aGlzLnVzZURlcHRoc3x8aC51c2VEZXB0aHMsdGhpcy51c2VCbG9ja1BhcmFtcz10aGlzLnVzZUJsb2NrUGFyYW1zfHxoLnVzZUJsb2NrUGFyYW1zfX0sbWF0Y2hFeGlzdGluZ1Byb2dyYW06ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzLmxlbmd0aDtiPGM7YisrKXt2YXIgZD10aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2JdO2lmKGQmJmQuZXF1YWxzKGEpKXJldHVybiBkfX0scHJvZ3JhbUV4cHJlc3Npb246ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5lbnZpcm9ubWVudC5jaGlsZHJlblthXSxjPVtiLmluZGV4LFwiZGF0YVwiLGIuYmxvY2tQYXJhbXNdO3JldHVybih0aGlzLnVzZUJsb2NrUGFyYW1zfHx0aGlzLnVzZURlcHRocykmJmMucHVzaChcImJsb2NrUGFyYW1zXCIpLHRoaXMudXNlRGVwdGhzJiZjLnB1c2goXCJkZXB0aHNcIiksXCJjb250YWluZXIucHJvZ3JhbShcIitjLmpvaW4oXCIsIFwiKStcIilcIn0sdXNlUmVnaXN0ZXI6ZnVuY3Rpb24oYSl7dGhpcy5yZWdpc3RlcnNbYV18fCh0aGlzLnJlZ2lzdGVyc1thXT0hMCx0aGlzLnJlZ2lzdGVycy5saXN0LnB1c2goYSkpfSxwdXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZHx8KGE9dGhpcy5zb3VyY2Uud3JhcChhKSksdGhpcy5pbmxpbmVTdGFjay5wdXNoKGEpLGF9LHB1c2hTdGFja0xpdGVyYWw6ZnVuY3Rpb24oYSl7dGhpcy5wdXNoKG5ldyBkKGEpKX0scHVzaFNvdXJjZTpmdW5jdGlvbihhKXt0aGlzLnBlbmRpbmdDb250ZW50JiYodGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSx0aGlzLnBlbmRpbmdMb2NhdGlvbikpLHRoaXMucGVuZGluZ0NvbnRlbnQ9dm9pZCAwKSxhJiZ0aGlzLnNvdXJjZS5wdXNoKGEpfSxyZXBsYWNlU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9W1wiKFwiXSxjPXZvaWQgMCxlPXZvaWQgMCxmPXZvaWQgMDtpZighdGhpcy5pc0lubGluZSgpKXRocm93IG5ldyBqW1wiZGVmYXVsdFwiXShcInJlcGxhY2VTdGFjayBvbiBub24taW5saW5lXCIpO3ZhciBnPXRoaXMucG9wU3RhY2soITApO2lmKGcgaW5zdGFuY2VvZiBkKWM9W2cudmFsdWVdLGI9W1wiKFwiLGNdLGY9ITA7ZWxzZXtlPSEwO3ZhciBoPXRoaXMuaW5jclN0YWNrKCk7Yj1bXCIoKFwiLHRoaXMucHVzaChoKSxcIiA9IFwiLGcsXCIpXCJdLGM9dGhpcy50b3BTdGFjaygpfXZhciBpPWEuY2FsbCh0aGlzLGMpO2Z8fHRoaXMucG9wU3RhY2soKSxlJiZ0aGlzLnN0YWNrU2xvdC0tLHRoaXMucHVzaChiLmNvbmNhdChpLFwiKVwiKSl9LGluY3JTdGFjazpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YWNrU2xvdCsrLHRoaXMuc3RhY2tTbG90PnRoaXMuc3RhY2tWYXJzLmxlbmd0aCYmdGhpcy5zdGFja1ZhcnMucHVzaChcInN0YWNrXCIrdGhpcy5zdGFja1Nsb3QpLHRoaXMudG9wU3RhY2tOYW1lKCl9LHRvcFN0YWNrTmFtZTpmdW5jdGlvbigpe3JldHVyblwic3RhY2tcIit0aGlzLnN0YWNrU2xvdH0sZmx1c2hJbmxpbmU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmlubGluZVN0YWNrO3RoaXMuaW5saW5lU3RhY2s9W107Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKXt2YXIgZT1hW2JdO2lmKGUgaW5zdGFuY2VvZiBkKXRoaXMuY29tcGlsZVN0YWNrLnB1c2goZSk7ZWxzZXt2YXIgZj10aGlzLmluY3JTdGFjaygpO3RoaXMucHVzaFNvdXJjZShbZixcIiA9IFwiLGUsXCI7XCJdKSx0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGYpfX19LGlzSW5saW5lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5saW5lU3RhY2subGVuZ3RofSxwb3BTdGFjazpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmlzSW5saW5lKCksYz0oYj90aGlzLmlubGluZVN0YWNrOnRoaXMuY29tcGlsZVN0YWNrKS5wb3AoKTtpZighYSYmYyBpbnN0YW5jZW9mIGQpcmV0dXJuIGMudmFsdWU7aWYoIWIpe2lmKCF0aGlzLnN0YWNrU2xvdCl0aHJvdyBuZXcgaltcImRlZmF1bHRcIl0oXCJJbnZhbGlkIHN0YWNrIHBvcFwiKTt0aGlzLnN0YWNrU2xvdC0tfXJldHVybiBjfSx0b3BTdGFjazpmdW5jdGlvbigpe3ZhciBhPXRoaXMuaXNJbmxpbmUoKT90aGlzLmlubGluZVN0YWNrOnRoaXMuY29tcGlsZVN0YWNrLGI9YVthLmxlbmd0aC0xXTtyZXR1cm4gYiBpbnN0YW5jZW9mIGQ/Yi52YWx1ZTpifSxjb250ZXh0TmFtZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy51c2VEZXB0aHMmJmE/XCJkZXB0aHNbXCIrYStcIl1cIjpcImRlcHRoXCIrYX0scXVvdGVkU3RyaW5nOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcoYSl9LG9iamVjdExpdGVyYWw6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc291cmNlLm9iamVjdExpdGVyYWwoYSl9LGFsaWFzYWJsZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFsaWFzZXNbYV07cmV0dXJuIGI/KGIucmVmZXJlbmNlQ291bnQrKyxiKTooYj10aGlzLmFsaWFzZXNbYV09dGhpcy5zb3VyY2Uud3JhcChhKSxiLmFsaWFzYWJsZT0hMCxiLnJlZmVyZW5jZUNvdW50PTEsYil9LHNldHVwSGVscGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXRoaXMuc2V0dXBIZWxwZXJBcmdzKGIsYSxkLGMpLGY9dGhpcy5uYW1lTG9va3VwKFwiaGVscGVyc1wiLGIsXCJoZWxwZXJcIiksZz10aGlzLmFsaWFzYWJsZSh0aGlzLmNvbnRleHROYW1lKDApK1wiICE9IG51bGwgPyBcIit0aGlzLmNvbnRleHROYW1lKDApK1wiIDoge31cIik7cmV0dXJue3BhcmFtczpkLHBhcmFtc0luaXQ6ZSxuYW1lOmYsY2FsbFBhcmFtczpbZ10uY29uY2F0KGQpfX0sc2V0dXBQYXJhbXM6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXt9LGU9W10sZj1bXSxnPVtdLGg9IWMsaT12b2lkIDA7aCYmKGM9W10pLGQubmFtZT10aGlzLnF1b3RlZFN0cmluZyhhKSxkLmhhc2g9dGhpcy5wb3BTdGFjaygpLHRoaXMudHJhY2tJZHMmJihkLmhhc2hJZHM9dGhpcy5wb3BTdGFjaygpKSx0aGlzLnN0cmluZ1BhcmFtcyYmKGQuaGFzaFR5cGVzPXRoaXMucG9wU3RhY2soKSxkLmhhc2hDb250ZXh0cz10aGlzLnBvcFN0YWNrKCkpO3ZhciBqPXRoaXMucG9wU3RhY2soKSxrPXRoaXMucG9wU3RhY2soKTsoa3x8aikmJihkLmZuPWt8fFwiY29udGFpbmVyLm5vb3BcIixkLmludmVyc2U9anx8XCJjb250YWluZXIubm9vcFwiKTtmb3IodmFyIGw9YjtsLS07KWk9dGhpcy5wb3BTdGFjaygpLGNbbF09aSx0aGlzLnRyYWNrSWRzJiYoZ1tsXT10aGlzLnBvcFN0YWNrKCkpLHRoaXMuc3RyaW5nUGFyYW1zJiYoZltsXT10aGlzLnBvcFN0YWNrKCksZVtsXT10aGlzLnBvcFN0YWNrKCkpO3JldHVybiBoJiYoZC5hcmdzPXRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoYykpLHRoaXMudHJhY2tJZHMmJihkLmlkcz10aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGcpKSx0aGlzLnN0cmluZ1BhcmFtcyYmKGQudHlwZXM9dGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShmKSxkLmNvbnRleHRzPXRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoZSkpLHRoaXMub3B0aW9ucy5kYXRhJiYoZC5kYXRhPVwiZGF0YVwiKSx0aGlzLnVzZUJsb2NrUGFyYW1zJiYoZC5ibG9ja1BhcmFtcz1cImJsb2NrUGFyYW1zXCIpLGR9LHNldHVwSGVscGVyQXJnczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLnNldHVwUGFyYW1zKGEsYixjKTtyZXR1cm4gZT10aGlzLm9iamVjdExpdGVyYWwoZSksZD8odGhpcy51c2VSZWdpc3RlcihcIm9wdGlvbnNcIiksYy5wdXNoKFwib3B0aW9uc1wiKSxbXCJvcHRpb25zPVwiLGVdKTpjPyhjLnB1c2goZSksXCJcIik6ZX19LGZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiYnJlYWsgZWxzZSBuZXcgdmFyIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlIGNvbnRpbnVlIGZ1bmN0aW9uIHRoaXMgd2l0aCBkZWZhdWx0IGlmIHRocm93IGRlbGV0ZSBpbiB0cnkgZG8gaW5zdGFuY2VvZiB0eXBlb2YgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYyBieXRlIGV4dGVuZHMgbG9uZyBzdXBlciBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MgY29uc3QgZ290byBwcml2YXRlIHRyYW5zaWVudCBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZSBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQgbnVsbCB0cnVlIGZhbHNlXCIuc3BsaXQoXCIgXCIpLGI9ZS5SRVNFUlZFRF9XT1JEUz17fSxjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWJbYVtjXV09ITB9KCksZS5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZT1mdW5jdGlvbihhKXtyZXR1cm4hZS5SRVNFUlZFRF9XT1JEU1thXSYmL15bYS16QS1aXyRdWzAtOWEtekEtWl8kXSokLy50ZXN0KGEpfSxiW1wiZGVmYXVsdFwiXT1lLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSxiLGMpe2lmKGYuaXNBcnJheShhKSl7Zm9yKHZhciBkPVtdLGU9MCxnPWEubGVuZ3RoO2U8ZztlKyspZC5wdXNoKGIud3JhcChhW2VdLGMpKTtyZXR1cm4gZH1yZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhP2ErXCJcIjphfWZ1bmN0aW9uIGUoYSl7dGhpcy5zcmNGaWxlPWEsdGhpcy5zb3VyY2U9W119Yi5fX2VzTW9kdWxlPSEwO3ZhciBmPWMoNSksZz12b2lkIDA7dHJ5e31jYXRjaChoKXt9Z3x8KGc9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5zcmM9XCJcIixkJiZ0aGlzLmFkZChkKX0sZy5wcm90b3R5cGU9e2FkZDpmdW5jdGlvbihhKXtmLmlzQXJyYXkoYSkmJihhPWEuam9pbihcIlwiKSksdGhpcy5zcmMrPWF9LHByZXBlbmQ6ZnVuY3Rpb24oYSl7Zi5pc0FycmF5KGEpJiYoYT1hLmpvaW4oXCJcIikpLHRoaXMuc3JjPWErdGhpcy5zcmN9LHRvU3RyaW5nV2l0aFNvdXJjZU1hcDpmdW5jdGlvbigpe3JldHVybntjb2RlOnRoaXMudG9TdHJpbmcoKX19LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3JjfX0pLGUucHJvdG90eXBlPXtpc0VtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuc291cmNlLmxlbmd0aH0scHJlcGVuZDpmdW5jdGlvbihhLGIpe3RoaXMuc291cmNlLnVuc2hpZnQodGhpcy53cmFwKGEsYikpfSxwdXNoOmZ1bmN0aW9uKGEsYil7dGhpcy5zb3VyY2UucHVzaCh0aGlzLndyYXAoYSxiKSl9LG1lcmdlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lbXB0eSgpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7YS5hZGQoW1wiICBcIixiLFwiXFxuXCJdKX0pLGF9LGVhY2g6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLnNvdXJjZS5sZW5ndGg7YjxjO2IrKylhKHRoaXMuc291cmNlW2JdKX0sZW1wdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRMb2NhdGlvbnx8e3N0YXJ0Ont9fTtyZXR1cm4gbmV3IGcoYS5zdGFydC5saW5lLGEuc3RhcnQuY29sdW1uLHRoaXMuc3JjRmlsZSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3RoaXMuY3VycmVudExvY2F0aW9ufHx7c3RhcnQ6e319OmFyZ3VtZW50c1sxXTtyZXR1cm4gYSBpbnN0YW5jZW9mIGc/YTooYT1kKGEsdGhpcyxiKSxuZXcgZyhiLnN0YXJ0LmxpbmUsYi5zdGFydC5jb2x1bW4sdGhpcy5zcmNGaWxlLGEpKX0sZnVuY3Rpb25DYWxsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz10aGlzLmdlbmVyYXRlTGlzdChjKSx0aGlzLndyYXAoW2EsYj9cIi5cIitiK1wiKFwiOlwiKFwiLGMsXCIpXCJdKX0scXVvdGVkU3RyaW5nOmZ1bmN0aW9uKGEpe3JldHVybidcIicrKGErXCJcIikucmVwbGFjZSgvXFxcXC9nLFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csXCJcXFxcblwiKS5yZXBsYWNlKC9cXHIvZyxcIlxcXFxyXCIpLnJlcGxhY2UoL1xcdTIwMjgvZyxcIlxcXFx1MjAyOFwiKS5yZXBsYWNlKC9cXHUyMDI5L2csXCJcXFxcdTIwMjlcIikrJ1wiJ30sb2JqZWN0TGl0ZXJhbDpmdW5jdGlvbihhKXt2YXIgYj1bXTtmb3IodmFyIGMgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGMpKXt2YXIgZT1kKGFbY10sdGhpcyk7XCJ1bmRlZmluZWRcIiE9PWUmJmIucHVzaChbdGhpcy5xdW90ZWRTdHJpbmcoYyksXCI6XCIsZV0pfXZhciBmPXRoaXMuZ2VuZXJhdGVMaXN0KGIpO3JldHVybiBmLnByZXBlbmQoXCJ7XCIpLGYuYWRkKFwifVwiKSxmfSxnZW5lcmF0ZUxpc3Q6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMuZW1wdHkoKSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWMmJmIuYWRkKFwiLFwiKSxiLmFkZChkKGFbY10sdGhpcykpO3JldHVybiBifSxnZW5lcmF0ZUFycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2VuZXJhdGVMaXN0KGEpO3JldHVybiBiLnByZXBlbmQoXCJbXCIpLGIuYWRkKFwiXVwiKSxifX0sYltcImRlZmF1bHRcIl09ZSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb2xvckx1bWluYW5jZSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9nZXRNb2RhbCA9IHJlcXVpcmUoJy4vaGFuZGxlLXN3YWwtZG9tJyk7XG5cbnZhciBfaGFzQ2xhc3MkaXNEZXNjZW5kYW50ID0gcmVxdWlyZSgnLi9oYW5kbGUtZG9tJyk7XG5cbi8qXG4gKiBVc2VyIGNsaWNrZWQgb24gXCJDb25maXJtXCIvXCJPS1wiIG9yIFwiQ2FuY2VsXCJcbiAqL1xudmFyIGhhbmRsZUJ1dHRvbiA9IGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbihldmVudCwgcGFyYW1zLCBtb2RhbCkge1xuICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdjb25maXJtJykgIT09IC0xO1xuICB2YXIgdGFyZ2V0ZWRPdmVybGF5ID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdzd2VldC1vdmVybGF5JykgIT09IC0xO1xuICB2YXIgbW9kYWxJc1Zpc2libGUgPSBfaGFzQ2xhc3MkaXNEZXNjZW5kYW50Lmhhc0NsYXNzKG1vZGFsLCAndmlzaWJsZScpO1xuICB2YXIgZG9uZUZ1bmN0aW9uRXhpc3RzID0gcGFyYW1zLmRvbmVGdW5jdGlvbiAmJiBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nKSA9PT0gJ3RydWUnO1xuXG4gIC8vIFNpbmNlIHRoZSB1c2VyIGNhbiBjaGFuZ2UgdGhlIGJhY2tncm91bmQtY29sb3Igb2YgdGhlIGNvbmZpcm0gYnV0dG9uIHByb2dyYW1tYXRpY2FsbHksXG4gIC8vIHdlIG11c3QgY2FsY3VsYXRlIHdoYXQgdGhlIGNvbG9yIHNob3VsZCBiZSBvbiBob3Zlci9hY3RpdmVcbiAgdmFyIG5vcm1hbENvbG9yLCBob3ZlckNvbG9yLCBhY3RpdmVDb2xvcjtcbiAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgbm9ybWFsQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIGhvdmVyQ29sb3IgPSBfY29sb3JMdW1pbmFuY2UuY29sb3JMdW1pbmFuY2Uobm9ybWFsQ29sb3IsIC0wLjA0KTtcbiAgICBhY3RpdmVDb2xvciA9IF9jb2xvckx1bWluYW5jZS5jb2xvckx1bWluYW5jZShub3JtYWxDb2xvciwgLTAuMTQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGNvbG9yKSB7XG4gICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGhvdmVyQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3Iobm9ybWFsQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGFjdGl2ZUNvbG9yKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3IoaG92ZXJDb2xvcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgIHZhciAkY29uZmlybUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gICAgICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcblxuICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAkY2FuY2VsQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb25maXJtQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2xpY2snOlxuICAgICAgdmFyIGNsaWNrZWRPbk1vZGFsID0gbW9kYWwgPT09IHRhcmdldDtcbiAgICAgIHZhciBjbGlja2VkT25Nb2RhbENoaWxkID0gX2hhc0NsYXNzJGlzRGVzY2VuZGFudC5pc0Rlc2NlbmRhbnQobW9kYWwsIHRhcmdldCk7XG5cbiAgICAgIC8vIElnbm9yZSBjbGljayBvdXRzaWRlIGlmIGFsbG93T3V0c2lkZUNsaWNrIGlzIGZhbHNlXG4gICAgICBpZiAoIWNsaWNrZWRPbk1vZGFsICYmICFjbGlja2VkT25Nb2RhbENoaWxkICYmIG1vZGFsSXNWaXNpYmxlICYmICFwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgZG9uZUZ1bmN0aW9uRXhpc3RzICYmIG1vZGFsSXNWaXNpYmxlKSB7XG4gICAgICAgIGhhbmRsZUNvbmZpcm0obW9kYWwsIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGRvbmVGdW5jdGlvbkV4aXN0cyAmJiBtb2RhbElzVmlzaWJsZSB8fCB0YXJnZXRlZE92ZXJsYXkpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsKG1vZGFsLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChfaGFzQ2xhc3MkaXNEZXNjZW5kYW50LmlzRGVzY2VuZGFudChtb2RhbCwgdGFyZ2V0KSAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8qXG4gKiAgVXNlciBjbGlja2VkIG9uIFwiQ29uZmlybVwiL1wiT0tcIlxuICovXG52YXIgaGFuZGxlQ29uZmlybSA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm0obW9kYWwsIHBhcmFtcykge1xuICB2YXIgY2FsbGJhY2tWYWx1ZSA9IHRydWU7XG5cbiAgaWYgKF9oYXNDbGFzcyRpc0Rlc2NlbmRhbnQuaGFzQ2xhc3MobW9kYWwsICdzaG93LWlucHV0JykpIHtcbiAgICBjYWxsYmFja1ZhbHVlID0gbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblxuICAgIGlmICghY2FsbGJhY2tWYWx1ZSkge1xuICAgICAgY2FsbGJhY2tWYWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHBhcmFtcy5kb25lRnVuY3Rpb24oY2FsbGJhY2tWYWx1ZSk7XG5cbiAgaWYgKHBhcmFtcy5jbG9zZU9uQ29uZmlybSkge1xuICAgIHN3ZWV0QWxlcnQuY2xvc2UoKTtcbiAgfVxuICAvLyBEaXNhYmxlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaWYgdGhlIHBhcmFtZXRlciBpcyB0cnVlXG4gIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgfVxufTtcblxuLypcbiAqICBVc2VyIGNsaWNrZWQgb24gXCJDYW5jZWxcIlxuICovXG52YXIgaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKG1vZGFsLCBwYXJhbXMpIHtcbiAgLy8gQ2hlY2sgaWYgY2FsbGJhY2sgZnVuY3Rpb24gZXhwZWN0cyBhIHBhcmFtZXRlciAodG8gdHJhY2sgY2FuY2VsIGFjdGlvbnMpXG4gIHZhciBmdW5jdGlvbkFzU3RyID0gU3RyaW5nKHBhcmFtcy5kb25lRnVuY3Rpb24pLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIHZhciBmdW5jdGlvbkhhbmRsZXNDYW5jZWwgPSBmdW5jdGlvbkFzU3RyLnN1YnN0cmluZygwLCA5KSA9PT0gJ2Z1bmN0aW9uKCcgJiYgZnVuY3Rpb25Bc1N0ci5zdWJzdHJpbmcoOSwgMTApICE9PSAnKSc7XG5cbiAgaWYgKGZ1bmN0aW9uSGFuZGxlc0NhbmNlbCkge1xuICAgIHBhcmFtcy5kb25lRnVuY3Rpb24oZmFsc2UpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jbG9zZU9uQ2FuY2VsKSB7XG4gICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGhhbmRsZUJ1dHRvbjogaGFuZGxlQnV0dG9uLFxuICBoYW5kbGVDb25maXJtOiBoYW5kbGVDb25maXJtLFxuICBoYW5kbGVDYW5jZWw6IGhhbmRsZUNhbmNlbFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1jbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3RvcEV2ZW50UHJvcGFnYXRpb24kZmlyZUNsaWNrID0gcmVxdWlyZSgnLi9oYW5kbGUtZG9tJyk7XG5cbnZhciBfc2V0Rm9jdXNTdHlsZSA9IHJlcXVpcmUoJy4vaGFuZGxlLXN3YWwtZG9tJyk7XG5cbnZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCwgcGFyYW1zLCBtb2RhbCkge1xuICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcblxuICB2YXIgJG9rQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbmZpcm0nKTtcbiAgdmFyICRjYW5jZWxCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gIHZhciAkbW9kYWxCdXR0b25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW3RhYmluZGV4XScpO1xuXG4gIGlmIChbOSwgMTMsIDMyLCAyN10uaW5kZXhPZihrZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAvLyBEb24ndCBkbyB3b3JrIG9uIGtleXMgd2UgZG9uJ3QgY2FyZSBhYm91dC5cbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgJHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgdmFyIGJ0bkluZGV4ID0gLTE7IC8vIEZpbmQgdGhlIGJ1dHRvbiAtIG5vdGUsIHRoaXMgaXMgYSBub2RlbGlzdCwgbm90IGFuIGFycmF5LlxuICBmb3IgKHZhciBpID0gMDsgaSA8ICRtb2RhbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoJHRhcmdldEVsZW1lbnQgPT09ICRtb2RhbEJ1dHRvbnNbaV0pIHtcbiAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXlDb2RlID09PSA5KSB7XG4gICAgLy8gVEFCXG4gICAgaWYgKGJ0bkluZGV4ID09PSAtMSkge1xuICAgICAgLy8gTm8gYnV0dG9uIGZvY3VzZWQuIEp1bXAgdG8gdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgICAgaWYgKGJ0bkluZGV4ID09PSAkbW9kYWxCdXR0b25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkbW9kYWxCdXR0b25zWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkbW9kYWxCdXR0b25zW2J0bkluZGV4ICsgMV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3N0b3BFdmVudFByb3BhZ2F0aW9uJGZpcmVDbGljay5zdG9wRXZlbnRQcm9wYWdhdGlvbihlKTtcbiAgICAkdGFyZ2V0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAgIF9zZXRGb2N1c1N0eWxlLnNldEZvY3VzU3R5bGUoJHRhcmdldEVsZW1lbnQsIHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGlmICgkdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICR0YXJnZXRFbGVtZW50ID0gJG9rQnV0dG9uO1xuICAgICAgICAkb2tCdXR0b24uZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJ0bkluZGV4ID09PSAtMSkge1xuICAgICAgICAvLyBFTlRFUi9TUEFDRSBjbGlja2VkIG91dHNpZGUgb2YgYSBidXR0b24uXG4gICAgICAgICR0YXJnZXRFbGVtZW50ID0gJG9rQnV0dG9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRG8gbm90aGluZyAtIGxldCB0aGUgYnJvd3NlciBoYW5kbGUgaXQuXG4gICAgICAgICR0YXJnZXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gMjcgJiYgcGFyYW1zLmFsbG93RXNjYXBlS2V5ID09PSB0cnVlKSB7XG4gICAgICAkdGFyZ2V0RWxlbWVudCA9ICRjYW5jZWxCdXR0b247XG4gICAgICBfc3RvcEV2ZW50UHJvcGFnYXRpb24kZmlyZUNsaWNrLmZpcmVDbGljaygkdGFyZ2V0RWxlbWVudCwgZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrIC0gbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdC5cbiAgICAgICR0YXJnZXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaGFuZGxlS2V5RG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBpbmplY3RlZEhUTUwgPVxuXG4vLyBEYXJrIG92ZXJsYXlcblwiPGRpdiBjbGFzcz1cXFwic3dlZXQtb3ZlcmxheVxcXCIgdGFiSW5kZXg9XFxcIi0xXFxcIj48L2Rpdj5cIiArXG5cbi8vIE1vZGFsXG5cIjxkaXYgY2xhc3M9XFxcInN3ZWV0LWFsZXJ0XFxcIj5cIiArXG5cbi8vIEVycm9yIGljb25cblwiPGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS1lcnJvclxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLXgtbWFya1xcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2EtbGluZSBzYS1sZWZ0XFxcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2EtbGluZSBzYS1yaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XCIgK1xuXG4vLyBXYXJuaW5nIGljb25cblwiPGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS13YXJuaW5nXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EtYm9keVxcXCI+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYS1kb3RcXFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XCIgK1xuXG4vLyBJbmZvIGljb25cblwiPGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS1pbmZvXFxcIj48L2Rpdj5cIiArXG5cbi8vIFN1Y2Nlc3MgaWNvblxuXCI8ZGl2IGNsYXNzPVxcXCJzYS1pY29uIHNhLXN1Y2Nlc3NcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYS1saW5lIHNhLXRpcFxcXCI+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYS1saW5lIHNhLWxvbmdcXFwiPjwvc3Bhbj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzYS1wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2EtZml4XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XCIgKyBcIjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2EtY3VzdG9tXFxcIj48L2Rpdj5cIiArXG5cbi8vIFRpdGxlLCB0ZXh0IGFuZCBpbnB1dFxuXCI8aDI+VGl0bGU8L2gyPlxcbiAgICA8cD5UZXh0PC9wPlxcbiAgICA8ZmllbGRzZXQ+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHRhYkluZGV4PVxcXCIzXFxcIiAvPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNhLWlucHV0LWVycm9yXFxcIj48L2Rpdj5cXG4gICAgPC9maWVsZHNldD5cIiArXG5cbi8vIElucHV0IGVycm9yc1xuXCI8ZGl2IGNsYXNzPVxcXCJzYS1lcnJvci1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPiE8L2Rpdj5cXG4gICAgICA8cD5Ob3QgdmFsaWQhPC9wPlxcbiAgICA8L2Rpdj5cIiArXG5cbi8vIENhbmNlbCBhbmQgY29uZmlybSBidXR0b25zXG5cIjxkaXYgY2xhc3M9XFxcInNhLWJ1dHRvbi1jb250YWluZXJcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbmNlbFxcXCIgdGFiSW5kZXg9XFxcIjJcXFwiPkNhbmNlbDwvYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNhLWNvbmZpcm0tYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjb25maXJtXFxcIiB0YWJJbmRleD1cXFwiMVxcXCI+T0s8L2J1dHRvbj5cIiArXG5cbi8vIExvYWRpbmcgYW5pbWF0aW9uXG5cIjxkaXYgY2xhc3M9XFxcImxhLWJhbGwtZmFsbFxcXCI+XFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XCIgK1xuXG4vLyBFbmQgb2YgbW9kYWxcblwiPC9kaXY+XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaW5qZWN0ZWRIVE1MO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3dlZXRhbGVydC9saWIvbW9kdWxlcy9pbmplY3RlZC1odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc0lFOCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9nZXRNb2RhbCRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlID0gcmVxdWlyZSgnLi9oYW5kbGUtc3dhbC1kb20nKTtcblxudmFyIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSA9IHJlcXVpcmUoJy4vaGFuZGxlLWRvbScpO1xuXG52YXIgYWxlcnRUeXBlcyA9IFsnZXJyb3InLCAnd2FybmluZycsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnaW5wdXQnLCAncHJvbXB0J107XG5cbi8qXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBtb2RhbFxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIHZhciBtb2RhbCA9IF9nZXRNb2RhbCRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlLmdldE1vZGFsKCk7XG5cbiAgdmFyICR0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gIHZhciAkdGV4dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgdmFyICRjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gIHZhciAkY29uZmlybUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG5cbiAgLypcbiAgICogVGl0bGVcbiAgICovXG4gICR0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50aXRsZSA6IF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5lc2NhcGVIdG1sKHBhcmFtcy50aXRsZSkuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKTtcblxuICAvKlxuICAgKiBUZXh0XG4gICAqL1xuICAkdGV4dC5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50ZXh0IDogX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmVzY2FwZUh0bWwocGFyYW1zLnRleHQgfHwgJycpLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+Jyk7XG4gIGlmIChwYXJhbXMudGV4dCkgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLnNob3coJHRleHQpO1xuXG4gIC8qXG4gICAqIEN1c3RvbSBjbGFzc1xuICAgKi9cbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcyhtb2RhbCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJywgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHByZXZpb3VzbHkgc2V0IGNsYXNzZXMgYW5kIHJlbW92ZSB0aGVtXG4gICAgdmFyIGN1c3RvbUNsYXNzID0gbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycpO1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5yZW1vdmVDbGFzcyhtb2RhbCwgY3VzdG9tQ2xhc3MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tY2xhc3MnLCAnJyk7XG4gIH1cblxuICAvKlxuICAgKiBJY29uXG4gICAqL1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZShtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2EtaWNvbicpKTtcblxuICBpZiAocGFyYW1zLnR5cGUgJiYgIV9pc0lFOC5pc0lFOCgpKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgdmFsaWRUeXBlID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxlcnRUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09IGFsZXJ0VHlwZXNbaV0pIHtcbiAgICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICAgIGxvZ1N0cignVW5rbm93biBhbGVydCB0eXBlOiAnICsgcGFyYW1zLnR5cGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlc1dpdGhJY29ucyA9IFsnc3VjY2VzcycsICdlcnJvcicsICd3YXJuaW5nJywgJ2luZm8nXTtcbiAgICAgIHZhciAkaWNvbiA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVzV2l0aEljb25zLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgICAgICAkaWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLicgKyAnc2EtJyArIHBhcmFtcy50eXBlKTtcbiAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLnNob3coJGljb24pO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGlucHV0ID0gX2dldE1vZGFsJGdldElucHV0JHNldEZvY3VzU3R5bGUuZ2V0SW5wdXQoKTtcblxuICAgICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG5cbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLCAnYW5pbWF0ZScpO1xuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtdGlwJyksICdhbmltYXRlU3VjY2Vzc1RpcCcpO1xuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtbG9uZycpLCAnYW5pbWF0ZVN1Y2Nlc3NMb25nJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbiwgJ2FuaW1hdGVFcnJvckljb24nKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLXgtbWFyaycpLCAnYW5pbWF0ZVhNYXJrJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLCAncHVsc2VXYXJuaW5nJyk7XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1ib2R5JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLWRvdCcpLCAncHVsc2VXYXJuaW5nSW5zJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdwcm9tcHQnOlxuICAgICAgICAgICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBwYXJhbXMuaW5wdXRUeXBlKTtcbiAgICAgICAgICAkaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICAkaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MobW9kYWwsICdzaG93LWlucHV0Jyk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHN3YWwucmVzZXRJbnB1dEVycm9yKTtcbiAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gX3JldC52O1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEN1c3RvbSBpbWFnZVxuICAgKi9cbiAgaWYgKHBhcmFtcy5pbWFnZVVybCkge1xuICAgIHZhciAkY3VzdG9tSWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLWN1c3RvbScpO1xuXG4gICAgJGN1c3RvbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcGFyYW1zLmltYWdlVXJsICsgJyknO1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5zaG93KCRjdXN0b21JY29uKTtcblxuICAgIHZhciBfaW1nV2lkdGggPSA4MDtcbiAgICB2YXIgX2ltZ0hlaWdodCA9IDgwO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVNpemUpIHtcbiAgICAgIHZhciBkaW1lbnNpb25zID0gcGFyYW1zLmltYWdlU2l6ZS50b1N0cmluZygpLnNwbGl0KCd4Jyk7XG4gICAgICB2YXIgaW1nV2lkdGggPSBkaW1lbnNpb25zWzBdO1xuICAgICAgdmFyIGltZ0hlaWdodCA9IGRpbWVuc2lvbnNbMV07XG5cbiAgICAgIGlmICghaW1nV2lkdGggfHwgIWltZ0hlaWdodCkge1xuICAgICAgICBsb2dTdHIoJ1BhcmFtZXRlciBpbWFnZVNpemUgZXhwZWN0cyB2YWx1ZSB3aXRoIGZvcm1hdCBXSURUSHhIRUlHSFQsIGdvdCAnICsgcGFyYW1zLmltYWdlU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaW1nV2lkdGggPSBpbWdXaWR0aDtcbiAgICAgICAgX2ltZ0hlaWdodCA9IGltZ0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkY3VzdG9tSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJGN1c3RvbUljb24uZ2V0QXR0cmlidXRlKCdzdHlsZScpICsgJ3dpZHRoOicgKyBfaW1nV2lkdGggKyAncHg7IGhlaWdodDonICsgX2ltZ0hlaWdodCArICdweCcpO1xuICB9XG5cbiAgLypcbiAgICogU2hvdyBjYW5jZWwgYnV0dG9uP1xuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1jYW5jZWwtYnV0dG9uJywgcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pO1xuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAkY2FuY2VsQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZSgkY2FuY2VsQnRuKTtcbiAgfVxuXG4gIC8qXG4gICAqIFNob3cgY29uZmlybSBidXR0b24/XG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWNvbmZpcm0tYnV0dG9uJywgcGFyYW1zLnNob3dDb25maXJtQnV0dG9uKTtcbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgICRjb25maXJtQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZSgkY29uZmlybUJ0bik7XG4gIH1cblxuICAvKlxuICAgKiBDdXN0b20gdGV4dCBvbiBjYW5jZWwvY29uZmlybSBidXR0b25zXG4gICAqL1xuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvblRleHQpIHtcbiAgICAkY2FuY2VsQnRuLmlubmVySFRNTCA9IF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5lc2NhcGVIdG1sKHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0KTtcbiAgfVxuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0KSB7XG4gICAgJGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmVzY2FwZUh0bWwocGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0KTtcbiAgfVxuXG4gIC8qXG4gICAqIEN1c3RvbSBjb2xvciBvbiBjb25maXJtIGJ1dHRvblxuICAgKi9cbiAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAvLyBTZXQgY29uZmlybSBidXR0b24gdG8gc2VsZWN0ZWQgYmFja2dyb3VuZCBjb2xvclxuICAgICRjb25maXJtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG5cbiAgICAvLyBTZXQgdGhlIGNvbmZpcm0gYnV0dG9uIGNvbG9yIHRvIHRoZSBsb2FkaW5nIHJpbmdcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBwYXJhbXMuY29uZmlybUxvYWRpbmdCdXR0b25Db2xvcjtcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gcGFyYW1zLmNvbmZpcm1Mb2FkaW5nQnV0dG9uQ29sb3I7XG5cbiAgICAvLyBTZXQgYm94LXNoYWRvdyB0byBkZWZhdWx0IGZvY3VzZWQgYnV0dG9uXG4gICAgX2dldE1vZGFsJGdldElucHV0JHNldEZvY3VzU3R5bGUuc2V0Rm9jdXNTdHlsZSgkY29uZmlybUJ0biwgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcik7XG4gIH1cblxuICAvKlxuICAgKiBBbGxvdyBvdXRzaWRlIGNsaWNrXG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsb3ctb3V0c2lkZS1jbGljaycsIHBhcmFtcy5hbGxvd091dHNpZGVDbGljayk7XG5cbiAgLypcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHZhciBoYXNEb25lRnVuY3Rpb24gPSBwYXJhbXMuZG9uZUZ1bmN0aW9uID8gdHJ1ZSA6IGZhbHNlO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nLCBoYXNEb25lRnVuY3Rpb24pO1xuXG4gIC8qXG4gICAqIEFuaW1hdGlvblxuICAgKi9cbiAgaWYgKCFwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsICdub25lJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIHBhcmFtcy5hbmltYXRpb24pOyAvLyBDdXN0b20gYW5pbWF0aW9uXG4gIH0gZWxzZSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsICdwb3AnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFRpbWVyXG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXInLCBwYXJhbXMudGltZXIpO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc2V0UGFyYW1ldGVycztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL3NldC1wYXJhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBTd2VldEFsZXJ0XG4vLyAyMDE0LTIwMTUgKGMpIC0gVHJpc3RhbiBFZHdhcmRzXG4vLyBnaXRodWIuY29tL3Q0dDUvc3dlZXRhbGVydFxuXG4vKlxuICogalF1ZXJ5LWxpa2UgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIERPTVxuICovXG5cbnZhciBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24gPSByZXF1aXJlKCcuL21vZHVsZXMvaGFuZGxlLWRvbScpO1xuXG4vKlxuICogSGFuZHkgdXRpbGl0aWVzXG4gKi9cblxudmFyIF9leHRlbmQkaGV4VG9SZ2IkaXNJRTgkbG9nU3RyJGNvbG9yTHVtaW5hbmNlID0gcmVxdWlyZSgnLi9tb2R1bGVzL3V0aWxzJyk7XG5cbi8qXG4gKiAgSGFuZGxlIHN3ZWV0QWxlcnQncyBET00gZWxlbWVudHNcbiAqL1xuXG52YXIgX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uID0gcmVxdWlyZSgnLi9tb2R1bGVzL2hhbmRsZS1zd2FsLWRvbScpO1xuXG4vLyBIYW5kbGUgYnV0dG9uIGV2ZW50cyBhbmQga2V5Ym9hcmQgZXZlbnRzXG5cbnZhciBfaGFuZGxlQnV0dG9uJGhhbmRsZUNvbmZpcm0kaGFuZGxlQ2FuY2VsID0gcmVxdWlyZSgnLi9tb2R1bGVzL2hhbmRsZS1jbGljaycpO1xuXG52YXIgX2hhbmRsZUtleURvd24gPSByZXF1aXJlKCcuL21vZHVsZXMvaGFuZGxlLWtleScpO1xuXG52YXIgX2hhbmRsZUtleURvd24yID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZUtleURvd24pO1xuXG4vLyBEZWZhdWx0IHZhbHVlc1xuXG52YXIgX2RlZmF1bHRQYXJhbXMgPSByZXF1aXJlKCcuL21vZHVsZXMvZGVmYXVsdC1wYXJhbXMnKTtcblxudmFyIF9kZWZhdWx0UGFyYW1zMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kZWZhdWx0UGFyYW1zKTtcblxudmFyIF9zZXRQYXJhbWV0ZXJzID0gcmVxdWlyZSgnLi9tb2R1bGVzL3NldC1wYXJhbXMnKTtcblxudmFyIF9zZXRQYXJhbWV0ZXJzMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zZXRQYXJhbWV0ZXJzKTtcblxuLypcbiAqIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbiAqIChXZSBhbHNvIHVzZSB3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50IGFzIGEgZ2xvYmFsIHZhcmlhYmxlKVxuICovXG52YXIgcHJldmlvdXNXaW5kb3dLZXlEb3duO1xudmFyIGxhc3RGb2N1c2VkQnV0dG9uO1xuXG4vKlxuICogR2xvYmFsIHN3ZWV0QWxlcnQgZnVuY3Rpb25cbiAqICh0aGlzIGlzIHdoYXQgdGhlIHVzZXIgY2FsbHMpXG4gKi9cbnZhciBzd2VldEFsZXJ0LCBzd2FsO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBzd2VldEFsZXJ0ID0gc3dhbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1c3RvbWl6YXRpb25zID0gYXJndW1lbnRzWzBdO1xuXG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnc3RvcC1zY3JvbGxpbmcnKTtcbiAgX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uLnJlc2V0SW5wdXQoKTtcblxuICAvKlxuICAgKiBVc2UgYXJndW1lbnQgaWYgZGVmaW5lZCBvciBkZWZhdWx0IHZhbHVlIGZyb20gcGFyYW1zIG9iamVjdCBvdGhlcndpc2UuXG4gICAqIFN1cHBvcnRzIHRoZSBjYXNlIHdoZXJlIGEgZGVmYXVsdCB2YWx1ZSBpcyBib29sZWFuIHRydWUgYW5kIHNob3VsZCBiZVxuICAgKiBvdmVycmlkZGVuIGJ5IGEgY29ycmVzcG9uZGluZyBleHBsaWNpdCBhcmd1bWVudCB3aGljaCBpcyBib29sZWFuIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJndW1lbnRPckRlZmF1bHQoa2V5KSB7XG4gICAgdmFyIGFyZ3MgPSBjdXN0b21pemF0aW9ucztcbiAgICByZXR1cm4gYXJnc1trZXldID09PSB1bmRlZmluZWQgPyBfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXVtrZXldIDogYXJnc1trZXldO1xuICB9XG5cbiAgaWYgKGN1c3RvbWl6YXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICBfZXh0ZW5kJGhleFRvUmdiJGlzSUU4JGxvZ1N0ciRjb2xvckx1bWluYW5jZS5sb2dTdHIoJ1N3ZWV0QWxlcnQgZXhwZWN0cyBhdCBsZWFzdCAxIGF0dHJpYnV0ZSEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gX2V4dGVuZCRoZXhUb1JnYiRpc0lFOCRsb2dTdHIkY29sb3JMdW1pbmFuY2UuZXh0ZW5kKHt9LCBfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXSk7XG5cbiAgc3dpdGNoICh0eXBlb2YgY3VzdG9taXphdGlvbnMpIHtcblxuICAgIC8vIEV4OiBzd2FsKFwiSGVsbG9cIiwgXCJKdXN0IHRlc3RpbmdcIiwgXCJpbmZvXCIpO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBwYXJhbXMudGl0bGUgPSBjdXN0b21pemF0aW9ucztcbiAgICAgIHBhcmFtcy50ZXh0ID0gYXJndW1lbnRzWzFdIHx8ICcnO1xuICAgICAgcGFyYW1zLnR5cGUgPSBhcmd1bWVudHNbMl0gfHwgJyc7XG4gICAgICBicmVhaztcblxuICAgIC8vIEV4OiBzd2FsKHsgdGl0bGU6XCJIZWxsb1wiLCB0ZXh0OiBcIkp1c3QgdGVzdGluZ1wiLCB0eXBlOiBcImluZm9cIiB9KTtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKGN1c3RvbWl6YXRpb25zLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX2V4dGVuZCRoZXhUb1JnYiRpc0lFOCRsb2dTdHIkY29sb3JMdW1pbmFuY2UubG9nU3RyKCdNaXNzaW5nIFwidGl0bGVcIiBhcmd1bWVudCEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMudGl0bGUgPSBjdXN0b21pemF0aW9ucy50aXRsZTtcblxuICAgICAgZm9yICh2YXIgY3VzdG9tTmFtZSBpbiBfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXSkge1xuICAgICAgICBwYXJhbXNbY3VzdG9tTmFtZV0gPSBhcmd1bWVudE9yRGVmYXVsdChjdXN0b21OYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdyBcIkNvbmZpcm1cIiBpbnN0ZWFkIG9mIFwiT0tcIiBpZiBjYW5jZWwgYnV0dG9uIGlzIHZpc2libGVcbiAgICAgIHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dCA9IHBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uID8gJ0NvbmZpcm0nIDogX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10uY29uZmlybUJ1dHRvblRleHQ7XG4gICAgICBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQgPSBhcmd1bWVudE9yRGVmYXVsdCgnY29uZmlybUJ1dHRvblRleHQnKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBjbGlja2luZyBvbiBcIk9LXCIvXCJDYW5jZWxcIlxuICAgICAgcGFyYW1zLmRvbmVGdW5jdGlvbiA9IGFyZ3VtZW50c1sxXSB8fCBudWxsO1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBfZXh0ZW5kJGhleFRvUmdiJGlzSUU4JGxvZ1N0ciRjb2xvckx1bWluYW5jZS5sb2dTdHIoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBhcmd1bWVudCEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIm9iamVjdFwiLCBnb3QgJyArIHR5cGVvZiBjdXN0b21pemF0aW9ucyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIF9zZXRQYXJhbWV0ZXJzMlsnZGVmYXVsdCddKHBhcmFtcyk7XG4gIF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5maXhWZXJ0aWNhbFBvc2l0aW9uKCk7XG4gIF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5vcGVuTW9kYWwoYXJndW1lbnRzWzFdKTtcblxuICAvLyBNb2RhbCBpbnRlcmFjdGlvbnNcbiAgdmFyIG1vZGFsID0gX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uLmdldE1vZGFsKCk7XG5cbiAgLypcbiAgICogTWFrZSBzdXJlIGFsbCBtb2RhbCBidXR0b25zIHJlc3BvbmQgdG8gYWxsIGV2ZW50c1xuICAgKi9cbiAgdmFyICRidXR0b25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gIHZhciBidXR0b25FdmVudHMgPSBbJ29uY2xpY2snLCAnb25tb3VzZW92ZXInLCAnb25tb3VzZW91dCcsICdvbm1vdXNlZG93bicsICdvbm1vdXNldXAnLCAnb25mb2N1cyddO1xuICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZSkge1xuICAgIHJldHVybiBfaGFuZGxlQnV0dG9uJGhhbmRsZUNvbmZpcm0kaGFuZGxlQ2FuY2VsLmhhbmRsZUJ1dHRvbihlLCBwYXJhbXMsIG1vZGFsKTtcbiAgfTtcblxuICBmb3IgKHZhciBidG5JbmRleCA9IDA7IGJ0bkluZGV4IDwgJGJ1dHRvbnMubGVuZ3RoOyBidG5JbmRleCsrKSB7XG4gICAgZm9yICh2YXIgZXZ0SW5kZXggPSAwOyBldnRJbmRleCA8IGJ1dHRvbkV2ZW50cy5sZW5ndGg7IGV2dEluZGV4KyspIHtcbiAgICAgIHZhciBidG5FdnQgPSBidXR0b25FdmVudHNbZXZ0SW5kZXhdO1xuICAgICAgJGJ1dHRvbnNbYnRuSW5kZXhdW2J0bkV2dF0gPSBvbkJ1dHRvbkV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIENsaWNraW5nIG91dHNpZGUgdGhlIG1vZGFsIGRpc21pc3NlcyBpdCAoaWYgYWxsb3dlZCBieSB1c2VyKVxuICBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZ2V0T3ZlcmxheSgpLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuXG4gIHByZXZpb3VzV2luZG93S2V5RG93biA9IHdpbmRvdy5vbmtleWRvd247XG5cbiAgdmFyIG9uS2V5RXZlbnQgPSBmdW5jdGlvbiBvbktleUV2ZW50KGUpIHtcbiAgICByZXR1cm4gX2hhbmRsZUtleURvd24yWydkZWZhdWx0J10oZSwgcGFyYW1zLCBtb2RhbCk7XG4gIH07XG4gIHdpbmRvdy5vbmtleWRvd24gPSBvbktleUV2ZW50O1xuXG4gIHdpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgaGFzIGZvY3VzZWQgYXdheSBhbmQgZm9jdXNlZCBiYWNrIGZyb20gdGhlIHdob2xlIHdpbmRvdy5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFB1dCBpbiBhIHRpbWVvdXQgdG8ganVtcCBvdXQgb2YgdGhlIGV2ZW50IHNlcXVlbmNlLlxuICAgICAgLy8gQ2FsbGluZyBmb2N1cygpIGluIHRoZSBldmVudCBzZXF1ZW5jZSBjb25mdXNlcyB0aGluZ3MuXG4gICAgICBpZiAobGFzdEZvY3VzZWRCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXN0Rm9jdXNlZEJ1dHRvbi5mb2N1cygpO1xuICAgICAgICBsYXN0Rm9jdXNlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcblxuICAvLyBTaG93IGFsZXJ0IHdpdGggZW5hYmxlZCBidXR0b25zIGFsd2F5c1xuICBzd2FsLmVuYWJsZUJ1dHRvbnMoKTtcbn07XG5cbi8qXG4gKiBTZXQgZGVmYXVsdCBwYXJhbXMgZm9yIGVhY2ggcG9wdXBcbiAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyUGFyYW1zXG4gKi9cbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMgPSBzd2FsLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyUGFyYW1zIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB1c2VyUGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlclBhcmFtcyBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIF9leHRlbmQkaGV4VG9SZ2IkaXNJRTgkbG9nU3RyJGNvbG9yTHVtaW5hbmNlLmV4dGVuZChfZGVmYXVsdFBhcmFtczJbJ2RlZmF1bHQnXSwgdXNlclBhcmFtcyk7XG59O1xuXG4vKlxuICogQW5pbWF0aW9uIHdoZW4gY2xvc2luZyBtb2RhbFxuICovXG5zd2VldEFsZXJ0LmNsb3NlID0gc3dhbC5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1vZGFsID0gX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uLmdldE1vZGFsKCk7XG5cbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLmZhZGVPdXQoX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uLmdldE92ZXJsYXkoKSwgNSk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5mYWRlT3V0KG1vZGFsLCA1KTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKG1vZGFsLCAnc2hvd1N3ZWV0QWxlcnQnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLmFkZENsYXNzKG1vZGFsLCAnaGlkZVN3ZWV0QWxlcnQnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKG1vZGFsLCAndmlzaWJsZScpO1xuXG4gIC8qXG4gICAqIFJlc2V0IGljb24gYW5pbWF0aW9uc1xuICAgKi9cbiAgdmFyICRzdWNjZXNzSWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLXN1Y2Nlc3MnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbiwgJ2FuaW1hdGUnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtdGlwJyksICdhbmltYXRlU3VjY2Vzc1RpcCcpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJHN1Y2Nlc3NJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1sb25nJyksICdhbmltYXRlU3VjY2Vzc0xvbmcnKTtcblxuICB2YXIgJGVycm9ySWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLWVycm9yJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcygkZXJyb3JJY29uLCAnYW5pbWF0ZUVycm9ySWNvbicpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJGVycm9ySWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EteC1tYXJrJyksICdhbmltYXRlWE1hcmsnKTtcblxuICB2YXIgJHdhcm5pbmdJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWljb24uc2Etd2FybmluZycpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJHdhcm5pbmdJY29uLCAncHVsc2VXYXJuaW5nJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcygkd2FybmluZ0ljb24ucXVlcnlTZWxlY3RvcignLnNhLWJvZHknKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJHdhcm5pbmdJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1kb3QnKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuXG4gIC8vIFJlc2V0IGN1c3RvbSBjbGFzcyAoZGVsYXkgc28gdGhhdCBVSSBjaGFuZ2VzIGFyZW4ndCB2aXNpYmxlKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VzdG9tQ2xhc3MgPSBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJyk7XG4gICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKG1vZGFsLCBjdXN0b21DbGFzcyk7XG4gIH0sIDMwMCk7XG5cbiAgLy8gTWFrZSBwYWdlIHNjcm9sbGFibGUgYWdhaW5cbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdzdG9wLXNjcm9sbGluZycpO1xuXG4gIC8vIFJlc2V0IHRoZSBwYWdlIHRvIGl0cyBwcmV2aW91cyBzdGF0ZVxuICB3aW5kb3cub25rZXlkb3duID0gcHJldmlvdXNXaW5kb3dLZXlEb3duO1xuICBpZiAod2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIHdpbmRvdy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBsYXN0Rm9jdXNlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgY2xlYXJUaW1lb3V0KG1vZGFsLnRpbWVvdXQpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLypcbiAqIFZhbGlkYXRpb24gb2YgdGhlIGlucHV0IGZpZWxkIGlzIGRvbmUgYnkgdXNlclxuICogSWYgc29tZXRoaW5nIGlzIHdyb25nID0+IGNhbGwgc2hvd0lucHV0RXJyb3Igd2l0aCBlcnJvck1lc3NhZ2VcbiAqL1xuc3dlZXRBbGVydC5zaG93SW5wdXRFcnJvciA9IHN3YWwuc2hvd0lucHV0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gIHZhciBtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWlucHV0LWVycm9yJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5hZGRDbGFzcygkZXJyb3JJY29uLCAnc2hvdycpO1xuXG4gIHZhciAkZXJyb3JDb250YWluZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtZXJyb3ItY29udGFpbmVyJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5hZGRDbGFzcygkZXJyb3JDb250YWluZXIsICdzaG93Jyk7XG5cbiAgJGVycm9yQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zKCk7XG4gIH0sIDEpO1xuXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbn07XG5cbi8qXG4gKiBSZXNldCBpbnB1dCBlcnJvciBET00gZWxlbWVudHNcbiAqL1xuc3dlZXRBbGVydC5yZXNldElucHV0RXJyb3IgPSBzd2FsLnJlc2V0SW5wdXRFcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBJZiBwcmVzcyBlbnRlciA9PiBpZ25vcmVcbiAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyICRtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pbnB1dC1lcnJvcicpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJGVycm9ySWNvbiwgJ3Nob3cnKTtcblxuICB2YXIgJGVycm9yQ29udGFpbmVyID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1lcnJvci1jb250YWluZXInKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRlcnJvckNvbnRhaW5lciwgJ3Nob3cnKTtcbn07XG5cbi8qXG4gKiBEaXNhYmxlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gKi9cbnN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMgPSBzd2FsLmRpc2FibGVCdXR0b25zID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuICB2YXIgJGNvbmZpcm1CdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgJGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAkY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn07XG5cbi8qXG4gKiBFbmFibGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAqL1xuc3dlZXRBbGVydC5lbmFibGVCdXR0b25zID0gc3dhbC5lbmFibGVCdXR0b25zID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuICB2YXIgJGNvbmZpcm1CdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgJGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgJGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFRoZSAnaGFuZGxlLWNsaWNrJyBtb2R1bGUgcmVxdWlyZXNcbiAgLy8gdGhhdCAnc3dlZXRBbGVydCcgd2FzIHNldCBhcyBnbG9iYWwuXG4gIHdpbmRvdy5zd2VldEFsZXJ0ID0gd2luZG93LnN3YWwgPSBzd2VldEFsZXJ0O1xufSBlbHNlIHtcbiAgX2V4dGVuZCRoZXhUb1JnYiRpc0lFOCRsb2dTdHIkY29sb3JMdW1pbmFuY2UubG9nU3RyKCdTd2VldEFsZXJ0IGlzIGEgZnJvbnRlbmQgbW9kdWxlIScpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N3ZWV0YWxlcnQvbGliL3N3ZWV0YWxlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2dhbWUvbW9kdWxlcy9nYW1lLXNjZW5lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9