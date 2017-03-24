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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(11);
/**
 * Created by Denis on 05.03.2017.
 */

class UserService {
    constructor() {
        this.http = new __WEBPACK_IMPORTED_MODULE_0__http_http__["a" /* default */]();
        this.url = this.http.BaseUrl;
    }

    getUser() {
        const address = `${this.url}/user/get`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response.user);
            }).catch(e => {
                reject(e);
            });
        });
    }

    login(body) {
        const address = `${this.url}/user/login`;
        let headers = {'Content-Type': 'application/json'};
        return new Promise((resolve, reject) => {
            this._createRequest(address, headers, 'POST', body).then(response => {
                resolve(response.user);
            }).catch(e => {
                reject(e);
            });
        });
    }

    signup(body) {
        const address = `${this.url}/user/signup`;
        let headers = {'Content-Type': 'application/json'};
        return new Promise((resolve, reject) => {
            this._createRequest(address, headers, 'POST', body).then(response => {
                resolve({result: 'success'});
            }).catch(e => {
                if(!e){
                    reject({result: 'no-conn'});
                } else {
                    reject({result: 'error'});
                }
            });
        });
    }

    getLeaders() {
        const address = `${this.url}/user/leaders`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    logOutUser() {
        const address = `${this.url}/user/logout`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    _createRequest(address, headers = {}, type = 'GET', body = {}) {
        const http = this.http;
        return new Promise(function (resolve, reject) {
            http.request(address, headers, type, body).then(response => {
                if (response.status === '200 OK') {
                    resolve(response);
                } else {
                    console.log(response.status);
                    reject(response);
                }
            }).catch(e => {
                console.error(e.status);
                reject({});
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserService;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 17.03.2017.
 */
class BaseView {

    constructor(node) {
        this.node = node;
    }

    /**
     * Метод показывает или прячет View
     */
    toggleView() {
        this.node.classList.toggle('hidden');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseView;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 24.03.2017.
 */
class RouterUrls{
    constructor(){
        this.MAIN = '/';
        this.GAME = '/game';
        this.LOGIN = '/login';
        this.SIGNUP = '/signup';
        this.LEADERBOARD = '/leaderboard';
        this.ABOUT = '/about';
        this.PROFILE = '/profile';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouterUrls;


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 07.03.2017.
 */

class ProgressBar {
    constructor() {
        this.el = document.createElement('div');
    }

    getElem() {
        this.el.setAttribute('class', 'loader');
        return this.el;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 06.03.2017.
 */

class User {
    constructor() {
        if (User.__instance) {
            return User.__instance;
        }
        User.__instance = this;
    }

    set obj(user) {
        this._user = user;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 05.03.2017.
 */

class Http {
    constructor() {
        if (Http.instance) {
            return Http.instance;
        }

        //this._baseUrl = 'http://localhost:8000/api';
        this._baseUrl = 'https://tp-server-java.herokuapp.com/api';

        Http.instance = this;
    }

    get BaseUrl() {
        return this._baseUrl;
    }

    set BaseUrl(value) {
        this._baseUrl = value;
    }

    request(address = '', headers = {}, type = 'GET', body = {}) {
        let fetchObj = {
            method: type,
            mode: 'cors',
            headers: headers,
            credentials: 'include'
        };
        if (body) {
            fetchObj.body = JSON.stringify(body);
        }

        return new Promise(function (resolve, reject) {
            fetch(address, fetchObj).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject({});
                console.error(err || err.statusText);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Http;



/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 03.03.2017.
 */
class CheckFields {
    constructor() {

    }

    static _checkLatin(value) {
        return value.match(/[а-яА-ЯёЁ]+/) === null;
    }

    static checkLogin(obj) {
        let arr = [];
        if (!this._checkLatin(obj.field.value)) {
            arr.push({
                err_text: 'Only Latin',
            })
        }
        if (obj.field.value.length < 4) {
            arr.push({
                err_text: '4 - min length',
            });
        }

        obj.help.textContent = '';
        arr.forEach(item => {
            this.fieldSetErr(obj.field);
            this.fieldRemoveOk(obj.field);

            if (obj.help.textContent === '') {
                obj.help.textContent = item.err_text;
            } else {
                obj.help.textContent = `${obj.help.textContent},${item.err_text}`;
                console.log(obj.help.textContent);
            }
        });

        if (arr.length == 0) {
            this.fieldSetOk(obj.field);
        }

        return arr.length == 0;
    }

    static _checkPassLength(value) {
        return value.length >= 8;
    }

    static _checkPassEquals(value1, value2) {
        return value1 === value2;
    }

    static checkEmpty(value) {
        return value.length == 0;
    }


    static checkPassword(obj1, obj2) {
        let arr = [];
        let check = true;

        if (check) {
            if (!this._checkPassLength(obj1.field.value)) {
                arr.push({
                    err_text: '8 - min length',
                    field: obj1.field,
                    help: obj1.help
                })
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
        arr.forEach(item => {
            this.fieldSetErr(item.field);
            this.fieldRemoveOk(item.field);

            if (item.help.textContent === '') {
                item.help.textContent = item.err_text;
            } else {
                item.help.textContent = `${item.help.textContent}.${item.err_text}`;
            }
        });

        if (arr.length == 0) {
            this.fieldSetOk(obj1.field);
            this.fieldSetOk(obj2.field);
        }
        return arr.length == 0;
    }

    static helpSetText(elem, value) {
        elem.textContent = value;
    }

    static fieldSetText(elem, value) {
        elem.value = value;
    }

    static fieldSetErr(elem) {
        elem.classList.add('input__error');
    }

    static fieldRemoveErr(elem) {
        elem.classList.remove('input__error');
    }

    static fieldSetOk(elem) {
        elem.classList.add('input__ok');
    }

    static fieldRemoveOk(elem) {
        elem.classList.remove('input__ok');
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CheckFields;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(55);
/**
 * Created by Denis on 02.03.2017.
 */


class Form {
    constructor(options = {data: {}}) {
        this.data = options.data;
        this.el = document.createElement('form');
        this.fields = [];
        this.controls = [];
        this._render();
    }

    _render() {
        this._setAttrs(this.data.form.attrs, this.el);
        let h3 = document.createElement('h3');
        this._setAttrs(this.data.title.attrs, h3);
        h3.innerHTML = this.data.title.text;
        this.el.appendChild(h3);


        this.fields = this._getFields();
        this.controls = this._getControls();
        this._fieldsAppendTo(this.fields, this.el);

        this._controlsAppendTo(this.controls, this.el);
    }

    getElem(){
        return this;
    }

    _getFields() {
        let {fields = []}=this.data;
        return fields.map(data => {
            return new __WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */](data).getElem();
        });
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    _fieldsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
            elem.appendChild(item.help_el);
        })
    }

    _controlsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
        })
    }

    _getControls() {
        let {controls = []}=this.data;
        return controls.map(data => {
            return new __WEBPACK_IMPORTED_MODULE_0__btn__["a" /* default */](data).getElem();
        });
    }

    toString() {
        return this.el.outerHTML;
    }

    getFormData() {
        let elements = this.el.elements;
        let fields = {};

        Object.keys(elements).forEach(element => {
            let name = elements[element].name;
            let value = elements[element].value;

            if (!name) {
                return;
            }

            fields[name] = value;
        });
        return fields;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_router_router__ = __webpack_require__(58);
/**
 * Created by Denis on 04.03.2017.
 */


let router = new __WEBPACK_IMPORTED_MODULE_0__support_router_router__["a" /* default */](window.document.documentElement);

window.onpopstate = function (event) {
    router._setCurrView(document.location.pathname, false);
};




/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 02.03.2017.
 */
class Button {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
        this._render();
    }

    _setAttrs(attrs) {
        Object.keys(attrs).forEach(name => {
            this.el.setAttribute(name, attrs[name]);
        })
    }

    getElem(){
        return this;
    }

    _render() {
        this.el.innerHTML = this.text;
        this._setAttrs(this.attrs);
    }

    toString() {
        return this.el.outerHTML;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 23.03.2017.
 */

class Diamond {
    constructor(color, strokeWidth) {
        this._render(color || 'white', strokeWidth || '2');
    }

    getElem() {
        return this;
    }

    _render(color, strokeWidth) {
        this.el = document.createElement('canvas');
        this.el.setAttribute('width', '50');
        this.el.setAttribute('height', '50');
        this.el.setAttribute('class', 'diamond');
        if(this.el.getContext){
            let context = this.el.getContext('2d');
            context.beginPath();
            context.lineWidth=`${strokeWidth}`;
            context.strokeStyle=`${color}`;
            context.moveTo(12,8);
            context.lineTo(38,8);
            context.lineTo(47,19);
            context.lineTo(25,45);
            context.lineTo(2,19);
            context.lineTo(12,8);
            context.lineTo(17,19);
            context.lineTo(25,8);
            context.lineTo(32,19);
            context.lineTo(38,8);
            context.moveTo(2,19);
            context.lineTo(47,19);
            context.moveTo(17,19);
            context.lineTo(25,45);
            context.lineTo(32,19);
            context.stroke();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Diamond;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(20);
/**
 * Created by Denis on 02.03.2017.
 */


class Input {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.help_attrs = options.help_attrs || [];
        this.el = document.createElement('input');
        this.help_el = document.createElement('p');
        this._render();
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    _render() {
        this._setAttrs(this.attrs, this.el);
        this._setAttrs(this.help_attrs, this.help_el);
    }

    getElem(){
        return this;
    }

    toString() {
        return this.el.outerHTML;
    }

    validate(prev) {
        let check = true;
        if (__WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].checkEmpty(this.el.value)) {
            __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldSetErr(this.el);
            __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].helpSetText(this.help_el, 'empty field');
            check = false;
        } else {
            __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldRemoveErr(this.el);
            __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].helpSetText(this.help_el, '');

            const valid = this.el.getAttribute('valid');
            if (valid === 'login') {
                let result = __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].checkLogin({field: this.el, help: this.help_el});
                if (check === true) {
                    check = result;
                }
            } else if (valid === 'password') {

            } else if (valid === 'repeatpassword') {
                let result = __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].checkPassword(
                    {field: prev.el, help: prev.help_el},
                    {field: this.el, help: this.help_el});
                if (check === true) {
                    check = result;
                }
            }
        }
        return check;
    }

    clear() {
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].helpSetText(this.help_el, '');
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldSetText(this.el, '');
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldRemoveOk(this.el);
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldRemoveErr(this.el);
    }

    //noinspection JSDuplicatedDeclaration
    setError() {
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldSetErr(this.el);
    }

    //noinspection JSDuplicatedDeclaration
    setError(value) {
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].fieldSetErr(this.el);
        __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__["a" /* default */].helpSetText(this.help_el, value);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Input;



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__ = __webpack_require__(6);
/**
 * Created by Denis on 04.03.2017.
 */



class LeaderBoard {
    constructor(node) {
        this.node = node;
    }

    _render(data) {
        let leaderBoardSource = `
                        {{#with titles}}
                            <h2>{{title}}</h2>
                        {{/with}}
                        <p class="{{control.class}}" id="{{control.id}}">{{control.text}}</p>
                        {{#if leaderboard}}
                        <ul class="list-group">
                            {{#each leaderboard}}
                            <li class="list-group-item">{{login}}<span class="badge">{{rating}}</span></li>
                            {{/each}}
                        </ul>
                        {{/if}}`;
        let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
        return leaderBoardTemplate(data);
    }

    refreshLeaderBoard() {
        this._setProgressBar(this.node);

        new __WEBPACK_IMPORTED_MODULE_0__support_service_userService__["a" /* default */]().getLeaders().then(response => {
            let arr = response.leaders;
            setTimeout(() => {
                this.node.innerHTML = this._render({
                    titles: {
                        title: 'Top players:',
                    },
                    leaderboard: arr,
                    control: {
                        text: 'Refresh',
                        class: 'link',
                        id: 'refresh-lb'
                    }
                });
                this._initRefreshListener();
            }, 500);
        }).catch(err => {
            console.error(err);
            this.node.innerHTML = this._render({
                titles: {
                    title: 'No connection',
                },
                err: {},
                control: {
                    text: 'Refresh',
                    class: 'link',
                    id: 'refresh-lb'
                }
            });
            this._initRefreshListener();
        });
    }

    _initRefreshListener() {
        let refresh = document.getElementById('refresh-lb');
        if (refresh) {
            refresh.addEventListener('click', () => {
                this.refreshLeaderBoard();
            });
        }
    }

    _clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    _setProgressBar(container) {
        this._clearContainer(container);
        container.appendChild(new __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__["a" /* default */]().getElem());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LeaderBoard;




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 12.03.2017.
 */

class Animation{
    constructor(){

    }

    show(elem){
        if(elem){
            elem.classList.remove('elem-hide');
            elem.classList.add('elem-show');
        }
    }

    hide(elem){
        if(elem){
            elem.classList.remove('elem-show');
            elem.classList.add('elem-hide');
        }
    }
}
/* unused harmony export default */


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_menu_menuView__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_menu_loginView__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_menu_signupView__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_menu_aboutView__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_menu_leaderboardView__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_game_profileView__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_user__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_game_gameView__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__anim_animation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routerUrls__ = __webpack_require__(4);
/**
 * Created by Denis on 17.03.2017.
 */













class Router {

    /**
     *
     * @constructor Route
     * @param {Node} node
     */
    constructor(node) {
        this.node = node;
        this.routes = {};
        this.currView = null;
        this.urls = new __WEBPACK_IMPORTED_MODULE_10__routerUrls__["a" /* default */]();
        this.init();
    }

    init() {
        this._register(this.urls.MAIN, new __WEBPACK_IMPORTED_MODULE_0__views_menu_menuView__["a" /* default */](document.getElementById('menu-view')));
        this._register(this.urls.GAME, new __WEBPACK_IMPORTED_MODULE_8__views_game_gameView__["a" /* default */](document.getElementById('game-view')));
        this._register(this.urls.LOGIN, new __WEBPACK_IMPORTED_MODULE_1__views_menu_loginView__["a" /* default */](document.getElementById('login-view'), this));
        this._register(this.urls.SIGNUP, new __WEBPACK_IMPORTED_MODULE_2__views_menu_signupView__["a" /* default */](document.getElementById('signup-view'), this));
        this._register(this.urls.LEADERBOARD, new __WEBPACK_IMPORTED_MODULE_4__views_menu_leaderboardView__["a" /* default */](document.getElementById('leaderboard-view')));
        this._register(this.urls.ABOUT, new __WEBPACK_IMPORTED_MODULE_3__views_menu_aboutView__["a" /* default */](document.getElementById('about-view')));
        this._register(this.urls.PROFILE, new __WEBPACK_IMPORTED_MODULE_5__views_game_profileView__["a" /* default */](document.getElementById('profile-view'), this));
        this._setCurrView(document.location.pathname);
        this._start();
    }

    _setCurrView(path, isToHistory) {
        console.log(isToHistory);
        if (isToHistory !== false) {
            history.pushState({opa: 'opa'}, 'title1', path);
        }
        this._checkUser(path);
    }

    _checkUser(path) {
        if (path === this.urls.LOGIN || path === this.urls.SIGNUP) {
            this._getUser().then(user => {
                new __WEBPACK_IMPORTED_MODULE_6__game_user__["a" /* default */]().obj = user;
                this._go(this.urls.PROFILE);
            }).catch(err => {
                this._go(path);
            });
        } else if (path === this.urls.PROFILE) {
            this._getUser().then(user => {
                new __WEBPACK_IMPORTED_MODULE_6__game_user__["a" /* default */]().obj = user;
                this._go(path);
            }).catch(err => {
                this._go(this.urls.LOGIN);
            });
        } else {
            this._go(path);
        }
    }

    _getUser() {
        return new Promise(function (resolve, reject) {
            new __WEBPACK_IMPORTED_MODULE_7__service_userService__["a" /* default */]().getUser().then(user => {
                resolve(user);
            }).catch(err => {
                reject();
            });
        });
    }

    /**
     * Перейти по маршруту
     * @param {string} path
     */
    _go(path) {
        if (this.currView) {
            this.currView.toggleView();
        }
        this.currView = this._getViewByRoute(path);

        if (!this.currView) {
            path = this.urls.MAIN;
            this.currView = this._getViewByRoute(path);
            return;
        }

        if (path === this.urls.PROFILE) {
            this.currView.refresh();
        }

        this.currView.toggleView();
    }

    /**
     * Регистрация маршрута
     * @param {string} route
     * @param {Object} view
     */
    _register(route, view) {
        this.routes[route] = view;
    }

    _getViewByRoute(href) {
        return this.routes[href];
    }

    /**
     * Запустить процес маршрутизации
     */
    _start() {
        this.node.addEventListener('click', event => this._onRouteChange(event));
    }

    _onRouteChange(event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.getAttribute('href'));
        } else if (event.target.parentElement instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.parentElement.getAttribute('href'));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/**
 * Created by Denis on 17.03.2017.
 */


class GameView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */]{
    constructor(node){
        super(node);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameView;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_elements_progressBar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_elements_diamond__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__support_router_routerUrls__ = __webpack_require__(4);
/**
 * Created by Denis on 19.03.2017.
 */







class ProfileView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node, router) {
        super(node);
        this.router = router;
        this.node = node;
        this.urls = new __WEBPACK_IMPORTED_MODULE_5__support_router_routerUrls__["a" /* default */]();
        //this.refreshProfile();
        this._showViewProgressBar();
        this._render();
    }


    _getUser() {
        return new Promise(function (resolve, reject) {
            new __WEBPACK_IMPORTED_MODULE_1__support_service_userService__["a" /* default */]().getUser().then(user => {
                new __WEBPACK_IMPORTED_MODULE_2__game_user__["a" /* default */]().obj = user;
                resolve(user);
            }).catch(err => {
                reject({});
            });
        });
    }

    _render() {
        this._getUser().then(user => {
            this.profile = this._createProfile(user);

            setTimeout(() => {
                this._hideViewProgressBar();
                this.node.appendChild(this.profile);

                this.login = document.getElementById('l-login');
                this.password = document.getElementById('l-password');
                this.loginHelp = document.getElementById('l-login-help');
                this.btnLogin = document.getElementById('btn-login');

                this._initListener();
            }, 500);
        }).catch(err => {
            this._hideViewProgressBar();
        });
    }

    _initListener() {
        document.getElementById('btn-logout').addEventListener('click', event => {
            new __WEBPACK_IMPORTED_MODULE_1__support_service_userService__["a" /* default */]().logOutUser().then(response => {
                this.router._setCurrView(this.urls.LOGIN);
            }).catch(err => {

            });
        });
    }

    _showViewProgressBar() {
        let progressBar = new __WEBPACK_IMPORTED_MODULE_3__menu_elements_progressBar__["a" /* default */]().getElem();
        this.node.appendChild(progressBar);
    }

    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    _clearContainer() {
        while (this.node.children.length > 0) {
            this.node.removeChild(this.node.lastChild);
        }
    }

    refresh() {
        this._clearContainer();
        this._showViewProgressBar();
        this._render();
    }

    _createProfile(user) {
        let profile = document.createElement('div');
        profile.setAttribute('class', 'fcontainer-row');

        /* create controllers div*/
        let controllersDiv = document.createElement('div');
        controllersDiv.setAttribute('class', 'fcontainer-row');

        let hrefPlay = document.createElement('a');
        hrefPlay.setAttribute('href', this.urls.GAME);
        hrefPlay.setAttribute('class', 'router btn-play');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Start game';
        hrefPlay.appendChild(h1);

        let hrefLogout = document.createElement('a');
        hrefLogout.setAttribute('class', 'router link__logout');
        hrefLogout.setAttribute('id', 'btn-logout');
        hrefLogout.innerText = 'Log out';
        controllersDiv.appendChild(hrefPlay);
        controllersDiv.appendChild(hrefLogout);

        /*create user div*/
        let userDiv = document.createElement('div');
        userDiv.setAttribute('class', 'fcontainer-column container__profile');

        let elem = document.createElement('h2');
        elem.setAttribute('class', 'text__profile-login');
        elem.innerText = `${user.login}`;
        userDiv.appendChild(elem);

        let arrValue = [
            {
                name: 'Rating:',
                value: user.rating
            },
            {
                name: 'Winnings:',
                value: user.game_count_win
            }, {
                name: 'Total matches: ',
                value: user.game_count
            }
        ];

        arrValue.forEach(el => {
            elem = document.createElement('h3');
            elem.setAttribute('class', 'text__profile-item');
            elem.innerText = `${el.name} ${el.value}`;
            userDiv.appendChild(elem);
        });

        /*create resources div*/
        let resourcesDiv = document.createElement('div');
        resourcesDiv.setAttribute('class', 'fcontainer-column container__profile');

        let arrCrystals = [
            {value: user.crystal_green, color: 'rgb(29, 140, 114)'},
            {value: user.crystal_blue, color: 'rgb(57, 108, 219)'},
            {value: user.crystal_red, color: 'rgb(138, 34, 76)'},
            {value: user.crystal_purple, color: 'rgb(80, 35, 153)'}];
        arrCrystals.forEach(params => {
            let div = document.createElement('div');
            div.setAttribute('class', 'fcontainer-row');

            let d = new __WEBPACK_IMPORTED_MODULE_4__menu_elements_diamond__["a" /* default */](`${params.color}`).getElem().el;
            div.appendChild(d);

            elem = document.createElement('h3');
            elem.setAttribute('class', 'text__profile-diamond');
            elem.innerText = `${params.value}`;
            div.appendChild(elem);
            resourcesDiv.appendChild(div);
        });

        profile.appendChild(controllersDiv);
        profile.appendChild(userDiv);
        profile.appendChild(resourcesDiv);

        return profile;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProfileView;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/**
 * Created by Denis on 19.03.2017.
 */

class AboutView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */]{
    constructor(node){
        super(node);
        this.node = node;

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutView;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_templates_leaderBoard__ = __webpack_require__(56);
/**
 * Created by Denis on 19.03.2017.
 */


class LeaderBoardView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */]{
    constructor(node){
        super(node);
        this.node = node;
        new __WEBPACK_IMPORTED_MODULE_1__menu_templates_leaderBoard__["a" /* default */](node).refreshLeaderBoard();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LeaderBoardView;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_elements_progressBar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_elements_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_user__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__support_router_routerUrls__ = __webpack_require__(4);
/**
 * Created by Denis on 19.03.2017.
 */







class LoginView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node, router) {
        super(node);
        this.node = node;
        this.router = router;
        this.urls = new __WEBPACK_IMPORTED_MODULE_5__support_router_routerUrls__["a" /* default */]();
        this._showViewProgressBar();
        this._render();
    }

    _render() {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__menu_elements_form__["a" /* default */]({
            data: {
                title: {
                    text: 'Log In',
                    attrs: {
                        class: 'text-center'
                    }
                },
                form: {
                    attrs: {
                        class: 'fcontainer-column',
                        action: '',
                        method: ''
                    }
                },
                fields: [
                    {
                        attrs: {
                            placeholder: 'Login',
                            id: 'l-login',
                            class: 'input',
                            type: 'text',
                            name: 'login'
                        },
                        help_attrs: {
                            id: 'l-login-help',
                            class: 'p__error'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Password',
                            id: 'l-password',
                            class: 'input',
                            type: 'password',
                            name: 'password'
                        },
                        help_attrs: {
                            id: 'l-password-help',
                            class: 'p__error'
                        }
                    }
                ],
                controls: [
                    {
                        text: 'Enter',
                        attrs: {
                            type: 'submit',
                            class: 'btn',
                            id: 'btn-login'
                        },
                        type: 'button'
                    },
                    {
                        text: 'Sign up',
                        attrs: {
                            class: 'link router',
                            id: 'btn-to-signup',
                            href: this.urls.SIGNUP
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();

        setTimeout(() => {
            this._hideViewProgressBar();
            this.node.appendChild(this.loginForm.el);

            this.login = document.getElementById('l-login');
            this.password = document.getElementById('l-password');
            this.loginHelp = document.getElementById('l-login-help');
            this.btnLogin = document.getElementById('btn-login');
            this.btnToSignUp = document.getElementById('btn-to-signup');

            this._initListener();
        }, 500);
    }

    _showViewProgressBar() {
        let progressBar = new __WEBPACK_IMPORTED_MODULE_1__menu_elements_progressBar__["a" /* default */]().getElem();
        this.node.appendChild(progressBar);
    }

    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    _showProgressBar() {
        this.btnLogin.hidden = true;
        let progressBar = new __WEBPACK_IMPORTED_MODULE_1__menu_elements_progressBar__["a" /* default */]().getElem();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    _hideProgressBar() {
        setTimeout(() => {
            this.btnLogin.hidden = false;
            this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
        }, 500);
    }

    _initListener() {
        //Submit form
        this.loginForm.el.addEventListener('submit', event => {
            event.preventDefault();
            if (this._checkFields()) {
                let body = this.loginForm.getFormData();

                this._showProgressBar();

                new __WEBPACK_IMPORTED_MODULE_3__support_service_userService__["a" /* default */]().login(body).then(user => {
                    this._clearFields();
                    new __WEBPACK_IMPORTED_MODULE_4__game_user__["a" /* default */]().obj = user;
                    this.router._setCurrView(this.urls.PROFILE);

                    this._hideProgressBar();
                }).catch(e => {
                    this.loginForm.fields.forEach(elem => {
                        elem.setError();
                        elem.setError('wrong data');
                    });
                    this._hideProgressBar();
                    console.error(e);
                });
            }
        });
        this.btnToSignUp.addEventListener('click', event=>{
            this._clearFields();
        })
    }

    _clearFields() {
        this.loginForm.fields.forEach(elem => {
            elem.clear();
        });
    }

    _checkFields() {
        let check = true;

        this.loginForm.fields.forEach(elem => {
            let result = elem.validate();
            if (check === true) {
                check = result;
            }
        });

        return check;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginView;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_router_routerUrls__ = __webpack_require__(4);
/**
 * Created by Denis on 19.03.2017.
 */


class MenuView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node) {
        super(node);
        this.node = node;
        this.urls = new __WEBPACK_IMPORTED_MODULE_1__support_router_routerUrls__["a" /* default */]();
        this.render({
            elements: [
                {
                    type: 'a',
                    attrs: {
                        href: this.urls.LEADERBOARD,
                        class: 'btn-play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'LEADER BOARD'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: this.urls.LOGIN,
                        class: 'btn-play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'PLAY'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: this.urls.ABOUT,
                        class: 'btn-play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'ABOUT'
                    }
                }
            ]
        });

    }

    render(instr) {
        let elemArray = this._getElems(instr.elements);
        this._elemsAppendTo(elemArray, this.node);
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        });
    }

    _elemsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item);
        })
    }

    _getElems(elements) {
        return elements.map(data => {
            let elem = document.createElement(data.type);
            this._setAttrs(data.attrs, elem);
            let textElem = document.createElement(data.element.type);
            textElem.textContent = data.element.text;
            elem.appendChild(textElem);
            return elem;
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuView;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_elements_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_elements_progressBar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_izitoast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__support_router_routerUrls__ = __webpack_require__(4);
/**
 * Created by Denis on 19.03.2017.
 */








class SignUpView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */]{
    constructor(node, router){
        super(node);
        this.node = node;
        this.router = router;
        this.urls = new __WEBPACK_IMPORTED_MODULE_6__support_router_routerUrls__["a" /* default */]();
        this._showViewProgressBar();
        this._render();
    }

    _render() {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__menu_elements_form__["a" /* default */]({
            data: {
                title: {
                    text: 'Sign up',
                    attrs: {
                        class: 'text-center',
                    }
                },
                form: {
                    attrs: {
                        class: 'fcontainer-column',
                        action: '',
                        method: ''
                    }
                },
                fields: [
                    {
                        attrs: {
                            placeholder: 'Login',
                            id: 'r-login',
                            class: 'input',
                            type: 'text',
                            name: 'login',
                            valid: 'login'
                        },
                        help_attrs: {
                            id: 'r-login-help',
                            class: 'p__error'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Password',
                            id: 'r-password',
                            class: 'input',
                            type: 'password',
                            name: 'password',
                            valid: 'password'
                        },
                        help_attrs: {
                            id: 'r-password-help',
                            class: 'p__error'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Repeat password',
                            id: 'r-repeatpassword',
                            class: 'input',
                            type: 'password',
                            name: 'repeatpassword',
                            valid: 'repeatpassword'
                        },
                        help_attrs: {
                            id: 'r-repeatpassword-help',
                            class: 'p__error'
                        }
                    }
                ],
                controls: [
                    {
                        text: 'Registrate',
                        attrs: {
                            type: 'submit',
                            class: 'btn',
                            id: 'btn-signup'
                        },
                        type: 'button'
                    },
                    {
                        text: 'Log In',
                        attrs: {
                            class: 'link router',
                            id: 'btn-to-login',
                            href: this.urls.LOGIN
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();
        setTimeout(()=>{
            this._hideViewProgressBar();
            this.node.appendChild(this.signupForm.el);

            this.login = document.getElementById('r-login');
            this.password = document.getElementById('r-password');
            this.repeatPassword = document.getElementById('r-repeatpassword');

            this.loginHelp = document.getElementById('r-login-help');
            this.passwordHelp = document.getElementById('r-password-help');
            this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

            this.btnSignUp = document.getElementById('btn-signup');

            this.btnToLogin = document.getElementById('btn-to-login');
            this._initListener();
        }, 500);
    }

    _showViewProgressBar() {
        let progressBar = new __WEBPACK_IMPORTED_MODULE_2__menu_elements_progressBar__["a" /* default */]().getElem();
        this.node.appendChild(progressBar);
    }

    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    _showProgressBar() {
        this.btnSignUp.hidden = true;
        let progressBar = new __WEBPACK_IMPORTED_MODULE_2__menu_elements_progressBar__["a" /* default */]().getElem();
        this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
    }

    _hideProgressBar() {
        setTimeout(() => {
            this.btnSignUp.hidden = false;
            this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
        }, 500);
    }

    _initListener() {
        //Submit form
        this.signupForm.el.addEventListener('submit', event => {
            event.preventDefault();

            if (this._checkFields()) {
                let body = this.signupForm.getFormData();
                this._showProgressBar();

                new __WEBPACK_IMPORTED_MODULE_5__support_service_userService__["a" /* default */]().signup(body).then(response => {
                    this._clearFields();
                    this._hideProgressBar();
                    __WEBPACK_IMPORTED_MODULE_4_izitoast___default.a.success({
                        title: 'Successfully registrated',
                        position: 'topRight'
                    });
                    this.router._setCurrView(this.urls.LOGIN);
                }).catch(err => {
                    __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__["a" /* default */].fieldRemoveOk(this.login);
                    __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__["a" /* default */].fieldSetErr(this.login);
                    if(err.result === 'no-conn'){
                        __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__["a" /* default */].helpSetText(this.loginHelp, 'check connection');
                    } else {
                        __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__["a" /* default */].helpSetText(this.loginHelp, 'login used');
                    }
                    this._hideProgressBar();
                    console.error(err);
                });
            }
        });
        this.btnToLogin.addEventListener('click', event=>{
            this._clearFields();
        })
    }

    _checkFields() {
        let check = true;
        let prev = null;

        this.signupForm.fields.forEach(elem => {
            let result = elem.validate(prev);
            prev = elem;
            if (check === true) {
                check = result;
            }
        });

        return check;
    }

    _clearFields() {
        this.signupForm.fields.forEach(elem => {
            elem.clear();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignUpView;


/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(22);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWJlODEwNWVjMjU0MGZjOTQwYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvYmFzZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvcm91dGVyL3JvdXRlclVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L3RlbXBsYXRlcy9sZWFkZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9hbmltL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9nYW1lL2dhbWVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9nYW1lL3Byb2ZpbGVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L2Fib3V0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvbWVudS9sZWFkZXJib2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL21lbnUvbG9naW5WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L21lbnVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L3NpZ251cFZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUztBQUNwQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFF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O0FBQ0EsdURBQXVEO0FBQ3ZELFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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O0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVMsdUJBQXVCO0FBQ2xGLElBQUk7QUFDSjtBQUNBLDREQUE0RCxzQkFBc0I7QUFDbEY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7O0FDdHhCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0MsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrR0FBcUQsbUNBQW1DO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsYUFBYTtBQUNiO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RCxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsa0NBQWtDLE9BQU87QUFDekMsMEJBQTBCO0FBQzFCLG9DQUFvQyxlQUFlLFFBQVEsWUFBWSxJQUFJLGNBQWM7QUFDekYsMEJBQTBCO0FBQzFCO0FBQ0EsOEJBQThCO0FBQzlCLDBEQUEwRCxPQUFPLHNCQUFzQixRQUFRO0FBQy9GLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ3JJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUSxHQUFHLFNBQVM7QUFDcEQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsc0RBQXNEO0FBQ25FLGFBQWEscURBQXFEO0FBQ2xFLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsc0RBQXNEO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxtR0FBbUMsYUFBYTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWE7QUFDN0M7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQzNLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWJlODEwNWVjMjU0MGZjOTQwYWEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vaHR0cC9odHRwJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHAoKTtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaHR0cC5CYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL2dldGA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBudWxsLCAnR0VUJywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dpbmA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cChib2R5KSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL3NpZ251cGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7cmVzdWx0OiAnc3VjY2Vzcyd9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtyZXN1bHQ6ICduby1jb25uJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3Jlc3VsdDogJ2Vycm9yJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZWFkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sZWFkZXJzYDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0VXNlcigpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvbG9nb3V0YDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgaGVhZGVycyA9IHt9LCB0eXBlID0gJ0dFVCcsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaHR0cC5yZXF1ZXN0KGFkZHJlc3MsIGhlYWRlcnMsIHR5cGUsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXRgtC+0LQg0L/QvtC60LDQt9GL0LLQsNC10YIg0LjQu9C4INC/0YDRj9GH0LXRgiBWaWV3XHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvYmFzZVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMjQuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclVybHN7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuTUFJTiA9ICcvJztcclxuICAgICAgICB0aGlzLkdBTUUgPSAnL2dhbWUnO1xyXG4gICAgICAgIHRoaXMuTE9HSU4gPSAnL2xvZ2luJztcclxuICAgICAgICB0aGlzLlNJR05VUCA9ICcvc2lnbnVwJztcclxuICAgICAgICB0aGlzLkxFQURFUkJPQVJEID0gJy9sZWFkZXJib2FyZCc7XHJcbiAgICAgICAgdGhpcy5BQk9VVCA9ICcvYWJvdXQnO1xyXG4gICAgICAgIHRoaXMuUFJPRklMRSA9ICcvcHJvZmlsZSc7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L3JvdXRlci9yb3V0ZXJVcmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDcuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpIHtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA2LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoVXNlci5fX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVc2VyLl9faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuX19pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9iaih1c2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlciA9IHVzZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2dhbWUvdXNlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDUuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChIdHRwLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBIdHRwLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLl9iYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSAnaHR0cHM6Ly90cC1zZXJ2ZXItamF2YS5oZXJva3VhcHAuY29tL2FwaSc7XHJcblxyXG4gICAgICAgIEh0dHAuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlVXJsKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QoYWRkcmVzcyA9ICcnLCBoZWFkZXJzID0ge30sIHR5cGUgPSAnR0VUJywgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGZldGNoT2JqID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IHR5cGUsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgZmV0Y2hPYmouYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZmV0Y2goYWRkcmVzcywgZmV0Y2hPYmopLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIgfHwgZXJyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tGaWVsZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfY2hlY2tMYXRpbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvW9CwLdGP0JAt0K/RkdCBXSsvKSA9PT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tMb2dpbihvYmopIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0xhdGluKG9iai5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdPbmx5IExhdGluJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5maWVsZC52YWx1ZS5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnNCAtIG1pbiBsZW5ndGgnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRFcnIob2JqLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKG9iai5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqLmhlbHAudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGAke29iai5oZWxwLnRleHRDb250ZW50fSwke2l0ZW0uZXJyX3RleHR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5oZWxwLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRPayhvYmouZmllbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrUGFzc0xlbmd0aCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gODtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrUGFzc0VxdWFscyh2YWx1ZTEsIHZhbHVlMikge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGNoZWNrUGFzc3dvcmQob2JqMSwgb2JqMikge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Bhc3NMZW5ndGgob2JqMS5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJzggLSBtaW4gbGVuZ3RoJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMS5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoxLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Bhc3NFcXVhbHMob2JqMS5maWVsZC52YWx1ZSwgb2JqMi5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJ1Bhc3N3b3JkcyBub3QgZXF1YWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMS5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoxLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnUGFzc3dvcmRzIG5vdCBlcXVhbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBvYmoyLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IG9iajIuaGVscFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iajEuaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIG9iajIuaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0RXJyKGl0ZW0uZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkUmVtb3ZlT2soaXRlbS5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5oZWxwLnRleHRDb250ZW50ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWxwLnRleHRDb250ZW50ID0gaXRlbS5lcnJfdGV4dDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVscC50ZXh0Q29udGVudCA9IGAke2l0ZW0uaGVscC50ZXh0Q29udGVudH0uJHtpdGVtLmVycl90ZXh0fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqMS5maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRPayhvYmoyLmZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscFNldFRleHQoZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0VGV4dChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRFcnIoZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXRfX2Vycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkUmVtb3ZlRXJyKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X19lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFNldE9rKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0X19vaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFJlbW92ZU9rKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X19vaycpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2FjdGlvbnMvY2hlY2tGaWVsZHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge2RhdGE6IHt9fSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5kYXRhLmZvcm0uYXR0cnMsIHRoaXMuZWwpO1xyXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5kYXRhLnRpdGxlLmF0dHJzLCBoMyk7XHJcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRpdGxlLnRleHQ7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmZpZWxkcyA9IHRoaXMuX2dldEZpZWxkcygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLl9nZXRDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkc0FwcGVuZFRvKHRoaXMuZmllbGRzLCB0aGlzLmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udHJvbHNBcHBlbmRUbyh0aGlzLmNvbnRyb2xzLCB0aGlzLmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZpZWxkcygpIHtcclxuICAgICAgICBsZXQge2ZpZWxkcyA9IFtdfT10aGlzLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5wdXQoZGF0YSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZmllbGRzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uaGVscF9lbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY29udHJvbHNBcHBlbmRUbyhhcnJheSwgZWxlbSkge1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaXRlbS5lbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q29udHJvbHMoKSB7XHJcbiAgICAgICAgbGV0IHtjb250cm9scyA9IFtdfT10aGlzLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b24oZGF0YSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtRGF0YSgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsLmVsZW1lbnRzO1xyXG4gICAgICAgIGxldCBmaWVsZHMgPSB7fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudHNbZWxlbWVudF0ubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudHNbZWxlbWVudF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3N1cHBvcnQvcm91dGVyL3JvdXRlcic7XHJcblxyXG5sZXQgcm91dGVyID0gbmV3IFJvdXRlcih3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICByb3V0ZXIuX3NldEN1cnJWaWV3KGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCBmYWxzZSk7XHJcbn07XHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcclxuICogaXppVG9hc3QgfCB2MS4xLjBcclxuICogaHR0cDovL2l6aXRvYXN0Lm1hcmNlbG9kb2xjZS5jb21cclxuICogYnkgTWFyY2VsbyBEb2xjZS5cclxuICovIFxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoW10sIGZhY3Rvcnkocm9vdCkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJvb3QuaXppVG9hc3QgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH1cclxufSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0Ly9cclxuXHR2YXIgJGl6aVRvYXN0ID0ge30sXHJcblx0XHRQTFVHSU5fTkFNRSA9ICdpemlUb2FzdCcsXHJcblx0XHRCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0SVNNT0JJTEUgPSAoL01vYmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0SVNDSFJPTUUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpLFxyXG5cdFx0SVNGSVJFRk9YID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyxcclxuXHRcdEFDQ0VQVFNUT1VDSCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuXHRcdFBPU0lUSU9OUyA9IFsnYm90dG9tUmlnaHQnLCdib3R0b21MZWZ0JywnYm90dG9tQ2VudGVyJywndG9wUmlnaHQnLCd0b3BMZWZ0JywndG9wQ2VudGVyJywnY2VudGVyJ10sXHJcblx0XHRUSEVNRVMgPSB7XHJcblx0XHRcdGluZm86IHtcclxuXHRcdFx0XHRjb2xvcjogXCJibHVlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28taW5mb1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLWNoZWNrXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhcm5pbmc6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ5ZWxsb3dcIixcclxuXHRcdFx0XHRpY29uOiBcImljby13YXJuaW5nXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwicmVkXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28tZXJyb3JcIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdE1PQklMRVdJRFRIID0gNTY4LFxyXG5cdFx0Q09ORklHID0ge307XHJcblxyXG5cdC8vIERlZmF1bHQgc2V0dGluZ3NcclxuXHR2YXIgZGVmYXVsdHMgPSB7XHJcblx0XHRjbGFzczogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHR0aXRsZUNvbG9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0bWVzc2FnZUNvbG9yOiAnJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXHJcblx0XHRjb2xvcjogJycsIC8vIGJsdWUsIHJlZCwgZ3JlZW4sIHllbGxvd1xyXG5cdFx0aWNvbjogJycsXHJcblx0XHRpY29uVGV4dDogJycsXHJcblx0XHRpY29uQ29sb3I6ICcnLFxyXG5cdFx0aW1hZ2U6ICcnLFxyXG5cdFx0aW1hZ2VXaWR0aDogNTAsXHJcblx0XHR6aW5kZXg6IDk5OTk5LFxyXG5cdFx0bGF5b3V0OiAxLFxyXG5cdFx0YmFsbG9vbjogZmFsc2UsXHJcblx0XHRjbG9zZTogdHJ1ZSxcclxuXHRcdHJ0bDogZmFsc2UsXHJcblx0XHRwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0JywgLy8gYm90dG9tUmlnaHQsIGJvdHRvbUxlZnQsIHRvcFJpZ2h0LCB0b3BMZWZ0LCB0b3BDZW50ZXIsIGJvdHRvbUNlbnRlciwgY2VudGVyXHJcblx0XHR0YXJnZXQ6ICcnLFxyXG5cdFx0dGFyZ2V0Rmlyc3Q6IHRydWUsXHJcblx0XHR0aW1lb3V0OiA1MDAwLFxyXG5cdFx0ZHJhZzogdHJ1ZSxcclxuXHRcdHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuXHRcdHJlc2V0T25Ib3ZlcjogZmFsc2UsXHJcblx0XHRwcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdHByb2dyZXNzQmFyQ29sb3I6ICcnLFxyXG5cdFx0YW5pbWF0ZUluc2lkZTogdHJ1ZSxcclxuXHRcdGJ1dHRvbnM6IHt9LFxyXG5cdFx0dHJhbnNpdGlvbkluOiAnZmFkZUluVXAnLCAvLyBib3VuY2VJbkxlZnQsIGJvdW5jZUluUmlnaHQsIGJvdW5jZUluVXAsIGJvdW5jZUluRG93biwgZmFkZUluLCBmYWRlSW5Eb3duLCBmYWRlSW5VcCwgZmFkZUluTGVmdCwgZmFkZUluUmlnaHQsIGZsaXBJblhcclxuXHRcdHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0JywgLy8gZmFkZU91dCwgZmFkZU91dFVwLCBmYWRlT3V0RG93biwgZmFkZU91dExlZnQsIGZhZGVPdXRSaWdodCwgZmxpcE91dFhcclxuXHRcdHRyYW5zaXRpb25Jbk1vYmlsZTogJ2ZhZGVJblVwJyxcclxuXHRcdHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0RG93bicsXHJcblx0XHRvbk9wZW46IGZ1bmN0aW9uICgpIHt9LFxyXG5cdFx0b25DbG9zZTogZnVuY3Rpb24gKCkge31cclxuXHR9O1xyXG5cclxuXHQvL1xyXG5cdC8vIE1ldGhvZHNcclxuXHQvL1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUG9seWZpbGwgZm9yIHJlbW92ZSgpIG1ldGhvZFxyXG5cdCAqL1xyXG5cdGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG5cdCAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuXHQgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBIHNpbXBsZSBmb3JFYWNoKCkgaW1wbGVtZW50YXRpb24gZm9yIEFycmF5cywgT2JqZWN0cyBhbmQgTm9kZUxpc3RzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gY29sbGVjdGlvbiBDb2xsZWN0aW9uIG9mIGl0ZW1zIHRvIGl0ZXJhdGVcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVyYXRpb25cclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gc2NvcGUgT2JqZWN0L05vZGVMaXN0L0FycmF5IHRoYXQgZm9yRWFjaCBpcyBpdGVyYXRpbmcgb3ZlciAoYWthIGB0aGlzYClcclxuXHQgKi9cclxuXHR2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjYWxsYmFjaywgc2NvcGUpIHtcclxuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29sbGVjdGlvbikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcblx0XHRcdGZvciAodmFyIHByb3AgaW4gY29sbGVjdGlvbikge1xyXG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29sbGVjdGlvbiwgcHJvcCkpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25bcHJvcF0sIHByb3AsIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbil7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgRGVmYXVsdCBzZXR0aW5nc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgb3B0aW9uc1xyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcclxuXHQgKi9cclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24gKGRlZmF1bHRzLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgZXh0ZW5kZWQgPSB7fTtcclxuXHRcdGZvckVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBleHRlbmRlZDtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgZnJhZ21lbnQgRE9NIGVsZW1lbnRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgY3JlYXRlRnJhZ0VsZW0gPSBmdW5jdGlvbihodG1sU3RyKSB7XHJcblx0XHR2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHRcdFx0dGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGVtcC5pbm5lckhUTUwgPSBodG1sU3RyO1xyXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRmcmFnLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZnJhZztcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgaXMgYSBjb2xvclxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGlzQ29sb3IgPSBmdW5jdGlvbihjb2xvcil7XHJcblx0XHRpZiggY29sb3Iuc3Vic3RyaW5nKDAsMSkgPT0gXCIjXCIgfHwgY29sb3Iuc3Vic3RyaW5nKDAsMykgPT0gXCJyZ2JcIiB8fCBjb2xvci5zdWJzdHJpbmcoMCwzKSA9PSBcImhzbFwiICl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEcmFnIG1ldGhvZCBvZiB0b2FzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBkcmFnID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFxyXG5cdCAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgbW92ZTogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgeHBvcykge1xyXG5cclxuXHQgICAgICAgIFx0dmFyIG9wYWNpdHksXHJcblx0ICAgICAgICBcdFx0b3BhY2l0eVJhbmdlID0gMC4zLFxyXG5cdCAgICAgICAgXHRcdGRpc3RhbmNlID0gMTgwO1xyXG5cdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcreHBvcyArICdweCknO1xyXG5cclxuXHQgICAgICAgICAgICBpZih4cG9zID4gMCl7XHJcblx0ICAgICAgICAgICAgXHRvcGFjaXR5ID0gKGRpc3RhbmNlLXhwb3MpIC8gZGlzdGFuY2U7XHJcblx0ICAgICAgICAgICAgXHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UuaGlkZShleHRlbmQoc2V0dGluZ3MsIHsgdHJhbnNpdGlvbk91dDogJ2ZhZGVPdXRSaWdodCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0UmlnaHQnIH0pLCB0b2FzdCwgJ2RyYWcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIFx0b3BhY2l0eSA9IChkaXN0YW5jZSt4cG9zKSAvIGRpc3RhbmNlO1xyXG5cdCAgICAgICAgICAgIFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlLmhpZGUoZXh0ZW5kKHNldHRpbmdzLCB7IHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0TGVmdCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0TGVmdCcgfSksIHRvYXN0LCAnZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgIH1cclxuXHRcdFx0XHR0b2FzdC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHRcdFxyXG5cdFx0XHRcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cclxuXHRcdFx0XHRcdGlmKElTQ0hST01FIHx8IElTRklSRUZPWClcclxuXHRcdFx0XHRcdFx0dG9hc3Quc3R5bGUubGVmdCA9IHhwb3MrJ3B4JztcclxuXHJcblx0XHRcdFx0XHR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5UmFuZ2U7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcodG9hc3QsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICBzdGFydE1vdmluZzogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZSkge1xyXG5cclxuXHQgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgdmFyIHBvc1ggPSAoKEFDQ0VQVFNUT1VDSCkgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WCksXHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0LnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdweCknLCAnJyk7XHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0TGVmdC5yZXBsYWNlKCd0cmFuc2xhdGVYKCcsICcnKTtcclxuXHQgICAgICAgICAgICB2YXIgb2Zmc2V0WCA9IHBvc1ggLSB0b2FzdExlZnQ7XHJcblxyXG5cdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbihlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBwb3NYID0gZS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHN0b3BNb3Zpbmc6IGZ1bmN0aW9uKHRvYXN0LCBlKSB7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgXHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUub3BhY2l0eSA9IFwiXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xyXG5cdFx0XHRcdH0sIDQwMCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdH0oKTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERvIHRoZSBjYWxjdWxhdGlvbiB0byBtb3ZlIHRoZSBwcm9ncmVzcyBiYXJcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBtb3ZlUHJvZ3Jlc3MgPSBmdW5jdGlvbih0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKXtcclxuXHJcblx0XHR2YXIgaXNQYXVzZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc1Jlc2V0ZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc0Nsb3NlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHRpbWVyVGltZW91dCA9IG51bGw7XHJcblx0XHR2YXIgZWxlbSA9IHRvYXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrUExVR0lOX05BTUUrXCItcHJvZ3Jlc3NiYXIgZGl2XCIpO1xyXG5cdFx0dmFyIHByb2dyZXNzQmFyID0ge1xyXG5cdFx0XHRoaWRlRXRhOiBudWxsLFxyXG5cdFx0XHRtYXhIaWRlVGltZTogbnVsbCxcclxuXHRcdFx0Y3VycmVudFRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHR1cGRhdGVQcm9ncmVzczogZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNQYXVzZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1wYXVzZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRpc1Jlc2V0ZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1yZXNldGVkJykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0aXNDbG9zZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1jbG9zZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYoaXNSZXNldGVkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHRcdFx0XHRcdG1vdmVQcm9ncmVzcyh0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIWlzUGF1c2VkICYmICFpc1Jlc2V0ZWQgJiYgIWlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUrMTA7XHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9ICgocHJvZ3Jlc3NCYXIuaGlkZUV0YSAtIChwcm9ncmVzc0Jhci5jdXJyZW50VGltZSkpIC8gcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWUpICogMTAwO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2UgKyAnJSc7XHJcblxyXG5cdFx0XHRcdFx0aWYoTWF0aC5yb3VuZChwZXJjZW50YWdlKSA8IDAgfHwgdHlwZW9mIHRvYXN0ICE9ICdvYmplY3QnKXtcclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkge1xyXG5cdFx0XHRwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSA9IHBhcnNlRmxvYXQoc2V0dGluZ3MudGltZW91dCk7XHJcblx0XHRcdHByb2dyZXNzQmFyLmhpZGVFdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lO1xyXG5cdFx0XHR0aW1lclRpbWVvdXQgPSBzZXRJbnRlcnZhbChwcm9ncmVzc0Jhci51cGRhdGVQcm9ncmVzcywgMTApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3kgdGhlIGN1cnJlbnQgaW5pdGlhbGl6YXRpb24uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrUExVR0lOX05BTUUrJy13cmFwcGVyJyksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK1BMVUdJTl9OQU1FKSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1vcGVuJywge30sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1jbG9zZScsIHt9LCBmYWxzZSk7XHJcblxyXG5cdFx0Ly8gUmVzZXQgdmFyaWFibGVzXHJcblx0XHRDT05GSUcgPSB7fTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIFBsdWdpblxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNldHRpbmdzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvLyBEZXN0cm95IGFueSBleGlzdGluZyBpbml0aWFsaXphdGlvbnNcclxuXHRcdCRpemlUb2FzdC5kZXN0cm95KCk7XHJcblxyXG5cdFx0Q09ORklHID0gb3B0aW9ucztcclxuXHRcdGRlZmF1bHRzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQnVpbGRpbmcgdGhlbWVzIGZ1bmN0aW9ucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdGZvckVhY2goVEhFTUVTLCBmdW5jdGlvbiAodGhlbWUsIG5hbWUpIHtcclxuXHJcblx0XHQkaXppVG9hc3RbbmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKHRoZW1lLCBzZXR0aW5ncyB8fCB7fSk7XHJcblxyXG5cdFx0XHR0aGlzLnNob3coc2V0dGluZ3MpO1xyXG5cdFx0fTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbG9zZSB0aGUgc3BlY2lmaWMgVG9hc3RcclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5oaWRlID0gZnVuY3Rpb24gKG9wdGlvbnMsICR0b2FzdCwgY2xvc2VkQnkpIHtcclxuXHJcblx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cdFx0XHRjbG9zZWRCeSA9IGNsb3NlZEJ5IHx8IGZhbHNlO1xyXG5cclxuXHRcdGlmKHR5cGVvZiAkdG9hc3QgIT0gJ29iamVjdCcpe1xyXG5cdFx0XHQkdG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCR0b2FzdCk7XHJcblx0XHR9XHJcblx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25JbiB8fCBzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dE1vYmlsZSlcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0TW9iaWxlKTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0KTtcclxuXHRcdH1cclxuXHRcdHZhciBIID0gJHRvYXN0LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IEgrJ3B4JztcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFxyXG5cdFx0aWYoIUlTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4ycyc7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHRvYXN0LnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LDIwMCk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR2YXIgZXZlbnQ7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHtkZXRhaWw6IHtjbGFzczogc2V0dGluZ3MuY2xhc3N9fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRcdFx0XHRldmVudC5pbml0Q3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHRydWUsIHRydWUsIHtjbGFzczogc2V0dGluZ3MuY2xhc3N9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRcdH0gY2F0Y2goZXgpe1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihleCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0eXBlb2Ygc2V0dGluZ3Mub25DbG9zZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdHNldHRpbmdzLm9uQ2xvc2UuYXBwbHkobnVsbCwgW3NldHRpbmdzLCAkdG9hc3QsIGNsb3NlZEJ5XSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGFuZCBzaG93IHRoZSBUb2FzdFxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNob3cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBNZXJnZSB1c2VyIG9wdGlvbnMgd2l0aCBkZWZhdWx0c1xyXG5cdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG5cdFx0dmFyICR0b2FzdENhcHN1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItY2Fwc3VsZVwiKTtcclxuXHJcblx0XHR2YXIgJHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUpO1xyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlLmxlbmd0aD4wKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4ubGVuZ3RoPjApXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctcnRsJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNvbG9yLmxlbmd0aCA+IDApIHsgLy8jLCByZ2IsIHJnYmEsIGhzbFxyXG5cdFx0XHRcclxuXHRcdFx0aWYoIGlzQ29sb3Ioc2V0dGluZ3MuY29sb3IpICl7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jb2xvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNvbG9yLScrc2V0dGluZ3MuY29sb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuY2xhc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pbWFnZSkge1xyXG5cdFx0XHR2YXIgJGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGNvdmVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNvdmVyJyk7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS53aWR0aCA9IHNldHRpbmdzLmltYWdlV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBzZXR0aW5ncy5pbWFnZSArICcpJztcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRjb3Zlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRidXR0b25DbG9zZTtcclxuXHRcdGlmKHNldHRpbmdzLmNsb3NlKXtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNsb3NlJyk7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkYnV0dG9uQ2xvc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ0xlZnQgPSBcIjMwcHhcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MucHJvZ3Jlc3NCYXIpIHtcclxuXHJcblx0XHRcdHZhciAkcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdCRwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1wcm9ncmVzc2JhcicpO1xyXG5cclxuXHRcdFx0dmFyICRwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHByb2dyZXNzQmFyRGl2LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5wcm9ncmVzc0JhckNvbG9yO1xyXG5cclxuXHRcdFx0JHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKCRwcm9ncmVzc0JhckRpdik7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkcHJvZ3Jlc3NCYXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRtb3ZlUHJvZ3Jlc3MoJHRvYXN0LCBzZXR0aW5ncywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwzMDApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiggc2V0dGluZ3MucHJvZ3Jlc3NCYXIgPT09IGZhbHNlICYmIHNldHRpbmdzLnRpbWVvdXQgPiAwKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCk7XHJcblx0XHRcdH0sIHNldHRpbmdzLnRpbWVvdXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkdG9hc3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0Qm9keS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1ib2R5Jyk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmltYWdlKSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IChzZXR0aW5ncy5pbWFnZVdpZHRoICsgMTApICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLm1hcmdpbkxlZnQgPSAoc2V0dGluZ3MuaW1hZ2VXaWR0aCArIDEwKSArICdweCc7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdHZhciAkaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cdFx0XHRcdCRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFBMVUdJTl9OQU1FICsgJy1pY29uICcgKyBzZXR0aW5ncy5pY29uKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uVGV4dCl7XHJcblx0XHRcdFx0JGljb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2V0dGluZ3MuaWNvblRleHQpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICczM3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzMzcHgnO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uQ29sb3Ipe1xyXG5cdFx0XHRcdCRpY29uLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MuaWNvbkNvbG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJGljb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuXHRcdGlmIChzZXR0aW5ncy50aXRsZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHN0cm9uZy5zdHlsZS5jb2xvciA9IHNldHRpbmdzLnRpdGxlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkc3Ryb25nLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHNldHRpbmdzLnRpdGxlKSk7XHJcblxyXG5cdFx0dmFyICRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRpZiAoc2V0dGluZ3MubWVzc2FnZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHAuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy5tZXNzYWdlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkcC5hcHBlbmRDaGlsZChjcmVhdGVGcmFnRWxlbShzZXR0aW5ncy5tZXNzYWdlKSk7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MubGF5b3V0ID4gMSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWxheW91dFwiK3NldHRpbmdzLmxheW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuYmFsbG9vbil7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWJhbGxvb25cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkc3Ryb25nKTtcclxuXHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJHApO1xyXG5cclxuXHRcdHZhciAkYnV0dG9ucztcclxuXHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdCRidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctYnV0dG9ucycpO1xyXG5cclxuXHRcdFx0JHAuc3R5bGUubWFyZ2luUmlnaHQgPSAnMTVweCc7XHJcblxyXG5cdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdGZvckVhY2goc2V0dGluZ3MuYnV0dG9ucywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xyXG5cdFx0XHRcdCRidXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHZhbHVlWzBdKSk7XHJcblxyXG5cdFx0XHRcdHZhciAkYnRucyA9ICRidXR0b25zLmNoaWxkTm9kZXM7XHJcblxyXG5cdFx0XHRcdCRidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHZhciB0cyA9IHZhbHVlWzFdO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyB0cyh0aGF0LCAkdG9hc3QpOyBcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkYnV0dG9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0LmFwcGVuZENoaWxkKCR0b2FzdEJvZHkpO1xyXG5cdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblx0XHQkdG9hc3RDYXBzdWxlLmFwcGVuZENoaWxkKCR0b2FzdCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIEggPSAkdG9hc3Qub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHR2YXIgc3R5bGUgPSAkdG9hc3QuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCR0b2FzdCk7XHJcblx0XHRcdHZhciBtYXJnaW5Ub3AgPSBzdHlsZS5tYXJnaW5Ub3A7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gbWFyZ2luVG9wLnNwbGl0KFwicHhcIik7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gcGFyc2VJbnQobWFyZ2luVG9wWzBdKTtcclxuXHRcdFx0dmFyIG1hcmdpbkJvdHRvbSA9IHN0eWxlLm1hcmdpbkJvdHRvbTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b20uc3BsaXQoXCJweFwiKTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBwYXJzZUludChtYXJnaW5Cb3R0b21bMF0pO1xyXG5cclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcblx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUuaGVpZ2h0ID0gKEgrbWFyZ2luQm90dG9tK21hcmdpblRvcCkrJ3B4JztcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cdFx0XHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LCAxMDApO1xyXG5cclxuXHRcdHZhciBwb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLFxyXG5cdFx0XHQkd3JhcHBlcjtcclxuXHJcblx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cclxuXHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnRhcmdldCk7XHJcblx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXRhcmdldCcpO1xyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLnRhcmdldEZpcnN0KSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaW5zZXJ0QmVmb3JlKCR0b2FzdENhcHN1bGUsICR3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmFwcGVuZENoaWxkKCR0b2FzdENhcHN1bGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmKCBQT1NJVElPTlMuaW5kZXhPZihzZXR0aW5ncy5wb3NpdGlvbikgPT0gLTEgKXtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbXCIrUExVR0lOX05BTUUrXCJdIEluY29ycmVjdCBwb3NpdGlvbi5cXG5JdCBjYW4gYmUg4oC6IFwiICsgUE9TSVRJT05TKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0XHRpZihzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbUxlZnRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbVJpZ2h0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJib3R0b21DZW50ZXJcIil7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1ib3R0b21DZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wUmlnaHRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcENlbnRlclwiKXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLXRvcENlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1jZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci0nK3Bvc2l0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBQTFVHSU5fTkFNRSArICctd3JhcHBlci4nK3Bvc2l0aW9uKTtcclxuXHJcblx0XHRcdGlmICghJHdyYXBwZXIpIHtcclxuXHRcdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctd3JhcHBlcicpO1xyXG5cdFx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQocG9zaXRpb24pO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHdyYXBwZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wQ2VudGVyXCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BSaWdodFwiKXtcclxuXHRcdFx0XHQkd3JhcHBlci5pbnNlcnRCZWZvcmUoJHRvYXN0Q2Fwc3VsZSwgJHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuYXBwZW5kQ2hpbGQoJHRvYXN0Q2Fwc3VsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWlzTmFOKHNldHRpbmdzLnppbmRleCkpIHtcclxuXHRcdFx0JHdyYXBwZXIuc3R5bGUuekluZGV4ID0gc2V0dGluZ3MuemluZGV4O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiW1wiK1BMVUdJTl9OQU1FK1wiXSBJbnZhbGlkIHpJbmRleC5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3Mub25PcGVuLmFwcGx5KG51bGwsIFtzZXR0aW5ncywgJHRvYXN0XSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGV2ZW50O1xyXG5cdFx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1vcGVuJywge2RldGFpbDoge2NsYXNzOiBzZXR0aW5ncy5jbGFzc319KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG5cdFx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLW9wZW4nLCB0cnVlLCB0cnVlLCB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9IGNhdGNoKGV4KXtcclxuXHRcdFx0Y29uc29sZS53YXJuKGV4KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5hbmltYXRlSW5zaWRlKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1hbmltYXRlSW5zaWRlJyk7XHJcblx0XHRcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24xID0gMjAwO1xyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjIgPSAxMDA7XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMyA9IDMwMDtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluID09IFwiYm91bmNlSW5MZWZ0XCIpe1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24xID0gNDAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24yID0gMjAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24zID0gNDAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCRzdHJvbmcuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24xKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHAuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24yKTtcclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCRpY29uLmNsYXNzTGlzdC5hZGQoJ3JldmVhbEluJyk7XHJcblx0XHRcdFx0fSx0aW1lQW5pbWF0aW9uMyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDAgJiYgJGJ1dHRvbnMpIHtcclxuXHRcdFx0XHR2YXIgY291bnRlciA9IDE1MDtcclxuXHRcdFx0XHRmb3JFYWNoKCRidXR0b25zLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXZlYWxJbicpO1xyXG5cdFx0XHRcdFx0fSxjb3VudGVyKTtcclxuXHRcdFx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgY291bnRlcjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZigkYnV0dG9uQ2xvc2Upe1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBidXR0b24gPSBlLnRhcmdldDtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCwgJ2J1dHRvbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5wYXVzZU9uSG92ZXIpe1xyXG5cdFx0XHRcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5yZXNldE9uSG92ZXIpe1xyXG5cclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmRyYWcpe1xyXG5cclxuXHRcdFx0aWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0b3BNb3ZpbmcodGhpcywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdG9wTW92aW5nKHRoaXMsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gJGl6aVRvYXN0O1xyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgICAgIHRoaXMuYXR0cnMgPSBvcHRpb25zLmF0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMudHlwZSk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEF0dHJzKGF0dHJzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL2J0bi5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMjMuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFtb25kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcihjb2xvciB8fCAnd2hpdGUnLCBzdHJva2VXaWR0aCB8fCAnMicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcihjb2xvciwgc3Ryb2tlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc1MCcpO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaWFtb25kJyk7XHJcbiAgICAgICAgaWYodGhpcy5lbC5nZXRDb250ZXh0KXtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmVsLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoPWAke3N0cm9rZVdpZHRofWA7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGU9YCR7Y29sb3J9YDtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oMTIsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDM4LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyg0NywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDQ1KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDEyLDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygxNywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygzMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDM4LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oNDcsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygxNywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDQ1KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzIsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvZGlhbW9uZC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBDaGVja0ZpZWxkcyBmcm9tICcuLi9hY3Rpb25zL2NoZWNrRmllbGRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IG9wdGlvbnMuYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5oZWxwX2F0dHJzID0gb3B0aW9ucy5oZWxwX2F0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaGVscF9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmF0dHJzLCB0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmhlbHBfYXR0cnMsIHRoaXMuaGVscF9lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShwcmV2KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBpZiAoQ2hlY2tGaWVsZHMuY2hlY2tFbXB0eSh0aGlzLmVsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnZW1wdHkgZmllbGQnKTtcclxuICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZUVycih0aGlzLmVsKTtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWQgPT09ICdsb2dpbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBDaGVja0ZpZWxkcy5jaGVja0xvZ2luKHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3JlcGVhdHBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IENoZWNrRmllbGRzLmNoZWNrUGFzc3dvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiBwcmV2LmVsLCBoZWxwOiBwcmV2LmhlbHBfZWx9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRUZXh0KHRoaXMuZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZU9rKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlRXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcigpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU0R1cGxpY2F0ZWREZWNsYXJhdGlvblxyXG4gICAgc2V0RXJyb3IodmFsdWUpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi8uLi9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vZWxlbWVudHMvcHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRTb3VyY2UgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3dpdGggdGl0bGVzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey93aXRofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ7e2NvbnRyb2wuY2xhc3N9fVwiIGlkPVwie3tjb250cm9sLmlkfX1cIj57e2NvbnRyb2wudGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiBsZWFkZXJib2FyZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbGVhZGVyYm9hcmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+e3tsb2dpbn19PHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7cmF0aW5nfX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19YDtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShsZWFkZXJCb2FyZFNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIGxlYWRlckJvYXJkVGVtcGxhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExlYWRlckJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX3NldFByb2dyZXNzQmFyKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldExlYWRlcnMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHJlc3BvbnNlLmxlYWRlcnM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IHRoaXMuX3JlbmRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wIHBsYXllcnM6JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcmJvYXJkOiBhcnIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncmVmcmVzaC1sYidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSB0aGlzLl9yZW5kZXIoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdObyBjb25uZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnI6IHt9LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWZyZXNoJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAncmVmcmVzaC1sYidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdFJlZnJlc2hMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgcmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWxiJyk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExlYWRlckJvYXJkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFByb2dyZXNzQmFyKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyQ29udGFpbmVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvdGVtcGxhdGVzL2xlYWRlckJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxMi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3coZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZWxlbS1oaWRlJyk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWxlbS1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZWxlbS1zaG93Jyk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWxlbS1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9hbmltL2FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBNZW51VmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9tZW51Vmlld1wiO1xyXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuLi8uLi92aWV3cy9tZW51L2xvZ2luVmlld1wiO1xyXG5pbXBvcnQgU2lnblVwVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9zaWdudXBWaWV3XCI7XHJcbmltcG9ydCBBYm91dFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL21lbnUvYWJvdXRWaWV3XCI7XHJcbmltcG9ydCBMZWFkZXJCb2FyZFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL21lbnUvbGVhZGVyYm9hcmRWaWV3XCI7XHJcbmltcG9ydCBQcm9maWxlVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvZ2FtZS9wcm9maWxlVmlld1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vZ2FtZS91c2VyXCI7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tIFwiLi4vc2VydmljZS91c2VyU2VydmljZVwiO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL2dhbWUvZ2FtZVZpZXdcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbS9hbmltYXRpb25cIjtcclxuaW1wb3J0IFJvdXRlclVybHMgZnJvbSBcIi4vcm91dGVyVXJsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0cnVjdG9yIFJvdXRlXHJcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1cnJWaWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVybHMgPSBuZXcgUm91dGVyVXJscygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIodGhpcy51cmxzLk1BSU4sIG5ldyBNZW51Vmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS12aWV3JykpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLnVybHMuR0FNRSwgbmV3IEdhbWVWaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXZpZXcnKSkpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMudXJscy5MT0dJTiwgbmV3IExvZ2luVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdmlldycpLCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIodGhpcy51cmxzLlNJR05VUCwgbmV3IFNpZ25VcFZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC12aWV3JyksIHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLnVybHMuTEVBREVSQk9BUkQsIG5ldyBMZWFkZXJCb2FyZFZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkLXZpZXcnKSkpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMudXJscy5BQk9VVCwgbmV3IEFib3V0Vmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdmlldycpKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIodGhpcy51cmxzLlBST0ZJTEUsIG5ldyBQcm9maWxlVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS12aWV3JyksIHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0Q3VyclZpZXcocGF0aCwgaXNUb0hpc3RvcnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpc1RvSGlzdG9yeSk7XHJcbiAgICAgICAgaWYgKGlzVG9IaXN0b3J5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7b3BhOiAnb3BhJ30sICd0aXRsZTEnLCBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2hlY2tVc2VyKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja1VzZXIocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoID09PSB0aGlzLnVybHMuTE9HSU4gfHwgcGF0aCA9PT0gdGhpcy51cmxzLlNJR05VUCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyKCkub2JqID0gdXNlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dvKHRoaXMudXJscy5QUk9GSUxFKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dvKHBhdGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGggPT09IHRoaXMudXJscy5QUk9GSUxFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ28ocGF0aCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbyh0aGlzLnVybHMuTE9HSU4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9nbyhwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QtdGA0LXQudGC0Lgg0L/QviDQvNCw0YDRiNGA0YPRgtGDXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxyXG4gICAgICovXHJcbiAgICBfZ28ocGF0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJWaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclZpZXcudG9nZ2xlVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJWaWV3ID0gdGhpcy5fZ2V0Vmlld0J5Um91dGUocGF0aCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyVmlldykge1xyXG4gICAgICAgICAgICBwYXRoID0gdGhpcy51cmxzLk1BSU47XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclZpZXcgPSB0aGlzLl9nZXRWaWV3QnlSb3V0ZShwYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09IHRoaXMudXJscy5QUk9GSUxFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclZpZXcucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyVmlldy50b2dnbGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC80LDRgNGI0YDRg9GC0LBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZpZXdcclxuICAgICAqL1xyXG4gICAgX3JlZ2lzdGVyKHJvdXRlLCB2aWV3KSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdID0gdmlldztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Vmlld0J5Um91dGUoaHJlZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlc1tocmVmXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCX0LDQv9GD0YHRgtC40YLRjCDQv9GA0L7RhtC10YEg0LzQsNGA0YjRgNGD0YLQuNC30LDRhtC40LhcclxuICAgICAqL1xyXG4gICAgX3N0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuX29uUm91dGVDaGFuZ2UoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Sb3V0ZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3N1cHBvcnQvcm91dGVyL3JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSl7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9nYW1lL2dhbWVWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9wcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9kaWFtb25kXCI7XHJcbmltcG9ydCBSb3V0ZXJVcmxzIGZyb20gXCIuLi8uLi9zdXBwb3J0L3JvdXRlci9yb3V0ZXJVcmxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy51cmxzID0gbmV3IFJvdXRlclVybHMoKTtcclxuICAgICAgICAvL3RoaXMucmVmcmVzaFByb2ZpbGUoKTtcclxuICAgICAgICB0aGlzLl9zaG93Vmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHRoaXMuX2NyZWF0ZVByb2ZpbGUodXNlcik7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnByb2ZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxvZ2luJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9nT3V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuX3NldEN1cnJWaWV3KHRoaXMudXJscy5MT0dJTik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1ZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLl9zaG93Vmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVByb2ZpbGUodXNlcikge1xyXG4gICAgICAgIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvZmlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zjb250YWluZXItcm93Jyk7XHJcblxyXG4gICAgICAgIC8qIGNyZWF0ZSBjb250cm9sbGVycyBkaXYqL1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1yb3cnKTtcclxuXHJcbiAgICAgICAgbGV0IGhyZWZQbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGhyZWZQbGF5LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMudXJscy5HQU1FKTtcclxuICAgICAgICBocmVmUGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdXRlciBidG4tcGxheScpO1xyXG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgICAgIGhyZWZQbGF5LmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICAgICAgbGV0IGhyZWZMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgaHJlZkxvZ291dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdXRlciBsaW5rX19sb2dvdXQnKTtcclxuICAgICAgICBocmVmTG9nb3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLWxvZ291dCcpO1xyXG4gICAgICAgIGhyZWZMb2dvdXQuaW5uZXJUZXh0ID0gJ0xvZyBvdXQnO1xyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LmFwcGVuZENoaWxkKGhyZWZQbGF5KTtcclxuICAgICAgICBjb250cm9sbGVyc0Rpdi5hcHBlbmRDaGlsZChocmVmTG9nb3V0KTtcclxuXHJcbiAgICAgICAgLypjcmVhdGUgdXNlciBkaXYqL1xyXG4gICAgICAgIGxldCB1c2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdXNlckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zjb250YWluZXItY29sdW1uIGNvbnRhaW5lcl9fcHJvZmlsZScpO1xyXG5cclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHRfX3Byb2ZpbGUtbG9naW4nKTtcclxuICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGAke3VzZXIubG9naW59YDtcclxuICAgICAgICB1c2VyRGl2LmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuICAgICAgICBsZXQgYXJyVmFsdWUgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSYXRpbmc6JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLnJhdGluZ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnV2lubmluZ3M6JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmdhbWVfY291bnRfd2luXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUb3RhbCBtYXRjaGVzOiAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIuZ2FtZV9jb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgYXJyVmFsdWUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dF9fcHJvZmlsZS1pdGVtJyk7XHJcbiAgICAgICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gYCR7ZWwubmFtZX0gJHtlbC52YWx1ZX1gO1xyXG4gICAgICAgICAgICB1c2VyRGl2LmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKmNyZWF0ZSByZXNvdXJjZXMgZGl2Ki9cclxuICAgICAgICBsZXQgcmVzb3VyY2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVzb3VyY2VzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1jb2x1bW4gY29udGFpbmVyX19wcm9maWxlJyk7XHJcblxyXG4gICAgICAgIGxldCBhcnJDcnlzdGFscyA9IFtcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfZ3JlZW4sIGNvbG9yOiAncmdiKDI5LCAxNDAsIDExNCknfSxcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfYmx1ZSwgY29sb3I6ICdyZ2IoNTcsIDEwOCwgMjE5KSd9LFxyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9yZWQsIGNvbG9yOiAncmdiKDEzOCwgMzQsIDc2KSd9LFxyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9wdXJwbGUsIGNvbG9yOiAncmdiKDgwLCAzNSwgMTUzKSd9XTtcclxuICAgICAgICBhcnJDcnlzdGFscy5mb3JFYWNoKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1yb3cnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERpYW1vbmQoYCR7cGFyYW1zLmNvbG9yfWApLmdldEVsZW0oKS5lbDtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGQpO1xyXG5cclxuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0X19wcm9maWxlLWRpYW1vbmQnKTtcclxuICAgICAgICAgICAgZWxlbS5pbm5lclRleHQgPSBgJHtwYXJhbXMudmFsdWV9YDtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICAgICAgICByZXNvdXJjZXNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvZmlsZS5hcHBlbmRDaGlsZChjb250cm9sbGVyc0Rpdik7XHJcbiAgICAgICAgcHJvZmlsZS5hcHBlbmRDaGlsZCh1c2VyRGl2KTtcclxuICAgICAgICBwcm9maWxlLmFwcGVuZENoaWxkKHJlc291cmNlc0Rpdik7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9maWxlO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvZ2FtZS9wcm9maWxlVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTkuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSl7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9tZW51L2Fib3V0Vmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTkuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcbmltcG9ydCBMZWFkZXJCb2FyZCBmcm9tIFwiLi4vLi4vbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmRcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyQm9hcmRWaWV3IGV4dGVuZHMgQmFzZVZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKXtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIG5ldyBMZWFkZXJCb2FyZChub2RlKS5yZWZyZXNoTGVhZGVyQm9hcmQoKTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL21lbnUvbGVhZGVyYm9hcmRWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi8uLi9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL2dhbWUvdXNlclwiO1xyXG5pbXBvcnQgUm91dGVyVXJscyBmcm9tIFwiLi4vLi4vc3VwcG9ydC9yb3V0ZXIvcm91dGVyVXJsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgcm91dGVyKSB7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnVybHMgPSBuZXcgUm91dGVyVXJscygpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2cgSW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zjb250YWluZXItY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLWxvZ2luLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi1sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rIHJvdXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi10by1zaWdudXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy51cmxzLlNJR05VUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5nZXRFbGVtKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlVmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmxvZ2luRm9ybS5lbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtbG9naW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5IZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtbG9naW4taGVscCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dpbicpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blRvU2lnblVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10by1zaWdudXAnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKTtcclxuICAgICAgICB0aGlzLmJ0bkxvZ2luLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2dyZXNzQmFyLCB0aGlzLmJ0bkxvZ2luLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idG5Mb2dpbi5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL1N1Ym1pdCBmb3JtXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hlY2tGaWVsZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmxvZ2luRm9ybS5nZXRGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmxvZ2luKGJvZHkpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuX3NldEN1cnJWaWV3KHRoaXMudXJscy5QUk9GSUxFKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEVycm9yKCd3cm9uZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Ub1NpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50PT57XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9sb2dpblZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5pbXBvcnQgUm91dGVyVXJscyBmcm9tIFwiLi4vLi4vc3VwcG9ydC9yb3V0ZXIvcm91dGVyVXJsc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMudXJscyA9IG5ldyBSb3V0ZXJVcmxzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLnVybHMuTEVBREVSQk9BUkQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuLXBsYXkgcm91dGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTEVBREVSIEJPQVJEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMudXJscy5MT0dJTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4tcGxheSByb3V0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQTEFZJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMudXJscy5BQk9VVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4tcGxheSByb3V0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQk9VVCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGluc3RyKSB7XHJcbiAgICAgICAgbGV0IGVsZW1BcnJheSA9IHRoaXMuX2dldEVsZW1zKGluc3RyLmVsZW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9lbGVtc0FwcGVuZFRvKGVsZW1BcnJheSwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9lbGVtc0FwcGVuZFRvKGFycmF5LCBlbGVtKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRFbGVtcyhlbGVtZW50cykge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50cy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRBdHRycyhkYXRhLmF0dHJzLCBlbGVtKTtcclxuICAgICAgICAgICAgbGV0IHRleHRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLmVsZW1lbnQudHlwZSk7XHJcbiAgICAgICAgICAgIHRleHRFbGVtLnRleHRDb250ZW50ID0gZGF0YS5lbGVtZW50LnRleHQ7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9tZW51L21lbnVWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL21lbnUvZWxlbWVudHMvZm9ybVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gXCIuLi8uLi9tZW51L2FjdGlvbnMvY2hlY2tGaWVsZHNcIjtcclxuaW1wb3J0IEl6aVRvYXN0IGZyb20gJ2l6aXRvYXN0JztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi8uLi9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2VcIjtcclxuaW1wb3J0IFJvdXRlclVybHMgZnJvbSBcIi4uLy4uL3N1cHBvcnQvcm91dGVyL3JvdXRlclVybHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcFZpZXcgZXh0ZW5kcyBCYXNlVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHJvdXRlcil7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnVybHMgPSBuZXcgUm91dGVyVXJscygpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zjb250YWluZXItY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXBlYXQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXJlcGVhdHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBlYXRwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ3JlcGVhdHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcmVwZWF0cGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVnaXN0cmF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXNpZ251cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsgcm91dGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXRvLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMudXJscy5MT0dJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5nZXRFbGVtKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlVmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnNpZ251cEZvcm0uZWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGVhdFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcmVwZWF0cGFzc3dvcmQnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5IZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItbG9naW4taGVscCcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXBhc3N3b3JkLWhlbHAnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRQYXNzd29yZEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1yZXBlYXRwYXNzd29yZC1oZWxwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2lnbnVwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blRvTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXRvLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5TaWduVXAuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5idG5TaWduVXAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvZ3Jlc3NCYXIsIHRoaXMuYnRuU2lnblVwLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5TaWduVXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ0blNpZ25VcC5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL1N1Ym1pdCBmb3JtXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja0ZpZWxkcygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuc2lnbnVwRm9ybS5nZXRGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuc2lnbnVwKGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgSXppVG9hc3Quc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bGx5IHJlZ2lzdHJhdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3BSaWdodCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5fc2V0Q3VyclZpZXcodGhpcy51cmxzLkxPR0lOKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVPayh0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlcnIucmVzdWx0ID09PSAnbm8tY29ubicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2NoZWNrIGNvbm5lY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2xvZ2luIHVzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0blRvTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudD0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRmllbGRzKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtLnZhbGlkYXRlKHByZXYpO1xyXG4gICAgICAgICAgICBwcmV2ID0gZWxlbTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyRmllbGRzKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9zaWdudXBWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9