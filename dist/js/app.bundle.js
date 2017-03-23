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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(10);
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(54);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_router_router__ = __webpack_require__(57);
/**
 * Created by Denis on 04.03.2017.
 */


let router = new __WEBPACK_IMPORTED_MODULE_0__support_router_router__["a" /* default */](window.document.documentElement);

window.onpopstate = function (event) {
    router._setCurrView(document.location.pathname);
};




/***/ }),
/* 22 */,
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
/* 50 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 51 */,
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(19);
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__ = __webpack_require__(5);
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
/* 56 */
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Animation;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_menu_menuView__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_menu_loginView__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_menu_signupView__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_menu_aboutView__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_menu_leaderboardView__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_game_profileView__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_user__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_game_gameView__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__anim_animation__ = __webpack_require__(56);
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
        this.init();
    }

    init() {
        this._register('/', new __WEBPACK_IMPORTED_MODULE_0__views_menu_menuView__["a" /* default */](document.getElementById('menu-view')));
        this._register('/game', new __WEBPACK_IMPORTED_MODULE_8__views_game_gameView__["a" /* default */](document.getElementById('game-view')));
        this._register('/login', new __WEBPACK_IMPORTED_MODULE_1__views_menu_loginView__["a" /* default */](document.getElementById('login-view'), this));
        this._register('/signup', new __WEBPACK_IMPORTED_MODULE_2__views_menu_signupView__["a" /* default */](document.getElementById('signup-view'), this));
        this._register('/leaderboard', new __WEBPACK_IMPORTED_MODULE_4__views_menu_leaderboardView__["a" /* default */](document.getElementById('leaderboard-view')));
        this._register('/about', new __WEBPACK_IMPORTED_MODULE_3__views_menu_aboutView__["a" /* default */](document.getElementById('about-view')));
        this._register('/profile', new __WEBPACK_IMPORTED_MODULE_5__views_game_profileView__["a" /* default */](document.getElementById('profile-view'), this));
        this._setCurrView(document.location.pathname);
        this._start();
    }

    _setCurrView(path) {
        this._checkUser(path);
    }

    _checkUser(path) {
        if (path === '/login' || path === '/signup') {
            this._getUser().then(user => {
                new __WEBPACK_IMPORTED_MODULE_6__game_user__["a" /* default */]().obj = user;
                this._go('/profile');
            }).catch(err => {
                this._go(path);
            });
        } else if (path === '/profile') {
            this._getUser().then(user => {
                new __WEBPACK_IMPORTED_MODULE_6__game_user__["a" /* default */]().obj = user;
                this._go(path);
            }).catch(err => {
                this._go('/login');
            });
        } else /*if (path === '/' || path === '/leaderboard' || path === '/about')*/ {
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

        let timeOut = 0;
        if (this.currView) {
            new __WEBPACK_IMPORTED_MODULE_9__anim_animation__["a" /* default */]().hide(this.currView.node);
            timeOut = 600;
        }

        setTimeout(() => {
            if (this.currView) {
                this.currView.toggleView();
            }
            this.currView = this._getViewByRoute(path);

            if (!this.currView) {
                path = '/';
                this.currView = this._getViewByRoute(path);
                return;
            }

            if (path === '/profile') {
                this.currView.refresh();
            }

            history.pushState({opa: 'opa'}, 'title1', path);
            new __WEBPACK_IMPORTED_MODULE_9__anim_animation__["a" /* default */]().show(this.currView.node);
            this.currView.toggleView();
        }, timeOut);
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
        /*let self = this;
         document.querySelectorAll('.router').forEach(elem => {
         elem.addEventListener('click', function () {
         event.preventDefault();
         console.log(this.getAttribute('href'));
         self._setCurrView(this.getAttribute('href'));
         });
         });*/
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

        // this._setCurrView(event.target.getAttribute('href'));

        /* if (this._setCurrView(event.target.getAttribute('href'))) {
         event.preventDefault();
         }*/

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 58 */
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_elements_progressBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_elements_diamond__ = __webpack_require__(53);
/**
 * Created by Denis on 19.03.2017.
 */






class ProfileView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node, router) {
        super(node);
        this.router = router;
        this.node = node;
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
                this.router._setCurrView('/login');
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
        hrefPlay.setAttribute('href', '/game');
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
/* 60 */
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_templates_leaderBoard__ = __webpack_require__(55);
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_elements_progressBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_elements_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_user__ = __webpack_require__(9);
/**
 * Created by Denis on 19.03.2017.
 */






class LoginView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node, router) {
        super(node);
        this.node = node;
        this._showViewProgressBar();
        this._render();
        this.router = router;
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
                            href: '/signup'
                        },
                        type: 'p'
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
                    this.router._setCurrView('/profile');

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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/**
 * Created by Denis on 19.03.2017.
 */

class MenuView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */] {
    constructor(node) {
        super(node);
        this.node = node;
        this.render({
            elements: [
                {
                    type: 'a',
                    attrs: {
                        href: '/leaderboard',
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
                        href: '/login',
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
                        href: '/about',
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_elements_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_elements_progressBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_actions_checkFields__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_izitoast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__support_service_userService__ = __webpack_require__(1);
/**
 * Created by Denis on 19.03.2017.
 */







class SignUpView extends __WEBPACK_IMPORTED_MODULE_0__baseView__["a" /* default */]{
    constructor(node, router){
        super(node);
        this.node = node;
        this._showViewProgressBar();
        this._render();
        this.router = router;
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
                            href: '/login'
                        },
                        type: 'p'
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
                    this.router._setCurrView('/login');
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
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(21);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjAyZWQxMWMxMWQ5MzIzOTUwZTU/MzJjMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzPzI3MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy8uL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzPzFjMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcz8zNjk4Iiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvaHR0cC9odHRwLmpzP2VjYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvYWN0aW9ucy9jaGVja0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL34vaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9idG4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvZGlhbW9uZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvYW5pbS9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvZ2FtZS9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvZ2FtZS9wcm9maWxlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvbWVudS9hYm91dFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL21lbnUvbGVhZGVyYm9hcmRWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L2xvZ2luVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvbWVudS9tZW51Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvbWVudS9zaWdudXBWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUztBQUNwQyx1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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSiwwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjAyZWQxMWMxMWQ5MzIzOTUwZTUiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vaHR0cC9odHRwJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHAoKTtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaHR0cC5CYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL2dldGA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBudWxsLCAnR0VUJywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dpbmA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cChib2R5KSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL3NpZ251cGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7cmVzdWx0OiAnc3VjY2Vzcyd9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtyZXN1bHQ6ICduby1jb25uJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3Jlc3VsdDogJ2Vycm9yJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZWFkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sZWFkZXJzYDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0VXNlcigpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvbG9nb3V0YDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgaGVhZGVycyA9IHt9LCB0eXBlID0gJ0dFVCcsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaHR0cC5yZXF1ZXN0KGFkZHJlc3MsIGhlYWRlcnMsIHR5cGUsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXRgtC+0LQg0L/QvtC60LDQt9GL0LLQsNC10YIg0LjQu9C4INC/0YDRj9GH0LXRgiBWaWV3XHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvYmFzZVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtKCkge1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2FkZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDYuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChVc2VyLl9faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFVzZXIuX19pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlci5fX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb2JqKHVzZXIpIHtcclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZ2FtZS91c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoSHR0cC5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSHR0cC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5fYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpJztcclxuICAgICAgICB0aGlzLl9iYXNlVXJsID0gJ2h0dHBzOi8vdHAtc2VydmVyLWphdmEuaGVyb2t1YXBwLmNvbS9hcGknO1xyXG5cclxuICAgICAgICBIdHRwLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQmFzZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQmFzZVVybCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0KGFkZHJlc3MgPSAnJywgaGVhZGVycyA9IHt9LCB0eXBlID0gJ0dFVCcsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGxldCBmZXRjaE9iaiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiB0eXBlLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGZldGNoT2JqLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZldGNoKGFkZHJlc3MsIGZldGNoT2JqKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyIHx8IGVyci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9odHRwL2h0dHAuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRmllbGRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrTGF0aW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL1vQsC3Rj9CQLdCv0ZHQgV0rLykgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrTG9naW4ob2JqKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tMYXRpbihvYmouZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnT25seSBMYXRpbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmouZmllbGQudmFsdWUubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlcnJfdGV4dDogJzQgLSBtaW4gbGVuZ3RoJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0RXJyKG9iai5maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRSZW1vdmVPayhvYmouZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iai5oZWxwLnRleHRDb250ZW50ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgb2JqLmhlbHAudGV4dENvbnRlbnQgPSBpdGVtLmVycl90ZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqLmhlbHAudGV4dENvbnRlbnQgPSBgJHtvYmouaGVscC50ZXh0Q29udGVudH0sJHtpdGVtLmVycl90ZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouaGVscC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqLmZpZWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NMZW5ndGgodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID49IDg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NFcXVhbHModmFsdWUxLCB2YWx1ZTIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjaGVja1Bhc3N3b3JkKG9iajEsIG9iajIpIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzTGVuZ3RoKG9iajEuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICc4IC0gbWluIGxlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzRXF1YWxzKG9iajEuZmllbGQudmFsdWUsIG9iajIuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdQYXNzd29yZHMgbm90IGVxdWFscycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJ1Bhc3N3b3JkcyBub3QgZXF1YWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoyLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmoxLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBvYmoyLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldEVycihpdGVtLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKGl0ZW0uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaGVscC50ZXh0Q29udGVudCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlbHAudGV4dENvbnRlbnQgPSBgJHtpdGVtLmhlbHAudGV4dENvbnRlbnR9LiR7aXRlbS5lcnJfdGV4dH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldE9rKG9iajEuZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqMi5maWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHBTZXRUZXh0KGVsZW0sIHZhbHVlKSB7XHJcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFNldFRleHQoZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0RXJyKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0X19lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFJlbW92ZUVycihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRPayhlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fb2snKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRSZW1vdmVPayhlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fb2snKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J0bidcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHtkYXRhOiB7fX0pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuZGF0YS5mb3JtLmF0dHJzLCB0aGlzLmVsKTtcclxuICAgICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuZGF0YS50aXRsZS5hdHRycywgaDMpO1xyXG4gICAgICAgIGgzLmlubmVySFRNTCA9IHRoaXMuZGF0YS50aXRsZS50ZXh0O1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5maWVsZHMgPSB0aGlzLl9nZXRGaWVsZHMoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLl9maWVsZHNBcHBlbmRUbyh0aGlzLmZpZWxkcywgdGhpcy5lbCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xzQXBwZW5kVG8odGhpcy5jb250cm9scywgdGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IHtmaWVsZHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBmaWVsZHMubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElucHV0KGRhdGEpLmdldEVsZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2ZpZWxkc0FwcGVuZFRvKGFycmF5LCBlbGVtKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmVsKTtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmhlbHBfZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRyb2xzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2dldENvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCB7Y29udHJvbHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBjb250cm9scy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uKGRhdGEpLmdldEVsZW0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbC5vdXRlckhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9ybURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbC5lbGVtZW50cztcclxuICAgICAgICBsZXQgZmllbGRzID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnRzW2VsZW1lbnRdLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnRzW2VsZW1lbnRdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWVsZHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDQuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9zdXBwb3J0L3JvdXRlci9yb3V0ZXInO1xyXG5cclxubGV0IHJvdXRlciA9IG5ldyBSb3V0ZXIod2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcblxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgcm91dGVyLl9zZXRDdXJyVmlldyhkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbn07XHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcclxuICogaXppVG9hc3QgfCB2MS4xLjBcclxuICogaHR0cDovL2l6aXRvYXN0Lm1hcmNlbG9kb2xjZS5jb21cclxuICogYnkgTWFyY2VsbyBEb2xjZS5cclxuICovIFxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoW10sIGZhY3Rvcnkocm9vdCkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJvb3QuaXppVG9hc3QgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH1cclxufSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0Ly9cclxuXHR2YXIgJGl6aVRvYXN0ID0ge30sXHJcblx0XHRQTFVHSU5fTkFNRSA9ICdpemlUb2FzdCcsXHJcblx0XHRCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0SVNNT0JJTEUgPSAoL01vYmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0SVNDSFJPTUUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpLFxyXG5cdFx0SVNGSVJFRk9YID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyxcclxuXHRcdEFDQ0VQVFNUT1VDSCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuXHRcdFBPU0lUSU9OUyA9IFsnYm90dG9tUmlnaHQnLCdib3R0b21MZWZ0JywnYm90dG9tQ2VudGVyJywndG9wUmlnaHQnLCd0b3BMZWZ0JywndG9wQ2VudGVyJywnY2VudGVyJ10sXHJcblx0XHRUSEVNRVMgPSB7XHJcblx0XHRcdGluZm86IHtcclxuXHRcdFx0XHRjb2xvcjogXCJibHVlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28taW5mb1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLWNoZWNrXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhcm5pbmc6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ5ZWxsb3dcIixcclxuXHRcdFx0XHRpY29uOiBcImljby13YXJuaW5nXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwicmVkXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28tZXJyb3JcIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdE1PQklMRVdJRFRIID0gNTY4LFxyXG5cdFx0Q09ORklHID0ge307XHJcblxyXG5cdC8vIERlZmF1bHQgc2V0dGluZ3NcclxuXHR2YXIgZGVmYXVsdHMgPSB7XHJcblx0XHRjbGFzczogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHR0aXRsZUNvbG9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0bWVzc2FnZUNvbG9yOiAnJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXHJcblx0XHRjb2xvcjogJycsIC8vIGJsdWUsIHJlZCwgZ3JlZW4sIHllbGxvd1xyXG5cdFx0aWNvbjogJycsXHJcblx0XHRpY29uVGV4dDogJycsXHJcblx0XHRpY29uQ29sb3I6ICcnLFxyXG5cdFx0aW1hZ2U6ICcnLFxyXG5cdFx0aW1hZ2VXaWR0aDogNTAsXHJcblx0XHR6aW5kZXg6IDk5OTk5LFxyXG5cdFx0bGF5b3V0OiAxLFxyXG5cdFx0YmFsbG9vbjogZmFsc2UsXHJcblx0XHRjbG9zZTogdHJ1ZSxcclxuXHRcdHJ0bDogZmFsc2UsXHJcblx0XHRwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0JywgLy8gYm90dG9tUmlnaHQsIGJvdHRvbUxlZnQsIHRvcFJpZ2h0LCB0b3BMZWZ0LCB0b3BDZW50ZXIsIGJvdHRvbUNlbnRlciwgY2VudGVyXHJcblx0XHR0YXJnZXQ6ICcnLFxyXG5cdFx0dGFyZ2V0Rmlyc3Q6IHRydWUsXHJcblx0XHR0aW1lb3V0OiA1MDAwLFxyXG5cdFx0ZHJhZzogdHJ1ZSxcclxuXHRcdHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuXHRcdHJlc2V0T25Ib3ZlcjogZmFsc2UsXHJcblx0XHRwcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdHByb2dyZXNzQmFyQ29sb3I6ICcnLFxyXG5cdFx0YW5pbWF0ZUluc2lkZTogdHJ1ZSxcclxuXHRcdGJ1dHRvbnM6IHt9LFxyXG5cdFx0dHJhbnNpdGlvbkluOiAnZmFkZUluVXAnLCAvLyBib3VuY2VJbkxlZnQsIGJvdW5jZUluUmlnaHQsIGJvdW5jZUluVXAsIGJvdW5jZUluRG93biwgZmFkZUluLCBmYWRlSW5Eb3duLCBmYWRlSW5VcCwgZmFkZUluTGVmdCwgZmFkZUluUmlnaHQsIGZsaXBJblhcclxuXHRcdHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0JywgLy8gZmFkZU91dCwgZmFkZU91dFVwLCBmYWRlT3V0RG93biwgZmFkZU91dExlZnQsIGZhZGVPdXRSaWdodCwgZmxpcE91dFhcclxuXHRcdHRyYW5zaXRpb25Jbk1vYmlsZTogJ2ZhZGVJblVwJyxcclxuXHRcdHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0RG93bicsXHJcblx0XHRvbk9wZW46IGZ1bmN0aW9uICgpIHt9LFxyXG5cdFx0b25DbG9zZTogZnVuY3Rpb24gKCkge31cclxuXHR9O1xyXG5cclxuXHQvL1xyXG5cdC8vIE1ldGhvZHNcclxuXHQvL1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUG9seWZpbGwgZm9yIHJlbW92ZSgpIG1ldGhvZFxyXG5cdCAqL1xyXG5cdGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG5cdCAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuXHQgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBIHNpbXBsZSBmb3JFYWNoKCkgaW1wbGVtZW50YXRpb24gZm9yIEFycmF5cywgT2JqZWN0cyBhbmQgTm9kZUxpc3RzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gY29sbGVjdGlvbiBDb2xsZWN0aW9uIG9mIGl0ZW1zIHRvIGl0ZXJhdGVcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVyYXRpb25cclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gc2NvcGUgT2JqZWN0L05vZGVMaXN0L0FycmF5IHRoYXQgZm9yRWFjaCBpcyBpdGVyYXRpbmcgb3ZlciAoYWthIGB0aGlzYClcclxuXHQgKi9cclxuXHR2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjYWxsYmFjaywgc2NvcGUpIHtcclxuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29sbGVjdGlvbikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcblx0XHRcdGZvciAodmFyIHByb3AgaW4gY29sbGVjdGlvbikge1xyXG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29sbGVjdGlvbiwgcHJvcCkpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25bcHJvcF0sIHByb3AsIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbil7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgRGVmYXVsdCBzZXR0aW5nc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgb3B0aW9uc1xyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcclxuXHQgKi9cclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24gKGRlZmF1bHRzLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgZXh0ZW5kZWQgPSB7fTtcclxuXHRcdGZvckVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBleHRlbmRlZDtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgZnJhZ21lbnQgRE9NIGVsZW1lbnRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgY3JlYXRlRnJhZ0VsZW0gPSBmdW5jdGlvbihodG1sU3RyKSB7XHJcblx0XHR2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHRcdFx0dGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGVtcC5pbm5lckhUTUwgPSBodG1sU3RyO1xyXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRmcmFnLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZnJhZztcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgaXMgYSBjb2xvclxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGlzQ29sb3IgPSBmdW5jdGlvbihjb2xvcil7XHJcblx0XHRpZiggY29sb3Iuc3Vic3RyaW5nKDAsMSkgPT0gXCIjXCIgfHwgY29sb3Iuc3Vic3RyaW5nKDAsMykgPT0gXCJyZ2JcIiB8fCBjb2xvci5zdWJzdHJpbmcoMCwzKSA9PSBcImhzbFwiICl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEcmFnIG1ldGhvZCBvZiB0b2FzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBkcmFnID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFxyXG5cdCAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgbW92ZTogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgeHBvcykge1xyXG5cclxuXHQgICAgICAgIFx0dmFyIG9wYWNpdHksXHJcblx0ICAgICAgICBcdFx0b3BhY2l0eVJhbmdlID0gMC4zLFxyXG5cdCAgICAgICAgXHRcdGRpc3RhbmNlID0gMTgwO1xyXG5cdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcreHBvcyArICdweCknO1xyXG5cclxuXHQgICAgICAgICAgICBpZih4cG9zID4gMCl7XHJcblx0ICAgICAgICAgICAgXHRvcGFjaXR5ID0gKGRpc3RhbmNlLXhwb3MpIC8gZGlzdGFuY2U7XHJcblx0ICAgICAgICAgICAgXHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UuaGlkZShleHRlbmQoc2V0dGluZ3MsIHsgdHJhbnNpdGlvbk91dDogJ2ZhZGVPdXRSaWdodCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0UmlnaHQnIH0pLCB0b2FzdCwgJ2RyYWcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIFx0b3BhY2l0eSA9IChkaXN0YW5jZSt4cG9zKSAvIGRpc3RhbmNlO1xyXG5cdCAgICAgICAgICAgIFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlLmhpZGUoZXh0ZW5kKHNldHRpbmdzLCB7IHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0TGVmdCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0TGVmdCcgfSksIHRvYXN0LCAnZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgIH1cclxuXHRcdFx0XHR0b2FzdC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHRcdFxyXG5cdFx0XHRcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cclxuXHRcdFx0XHRcdGlmKElTQ0hST01FIHx8IElTRklSRUZPWClcclxuXHRcdFx0XHRcdFx0dG9hc3Quc3R5bGUubGVmdCA9IHhwb3MrJ3B4JztcclxuXHJcblx0XHRcdFx0XHR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5UmFuZ2U7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcodG9hc3QsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICBzdGFydE1vdmluZzogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZSkge1xyXG5cclxuXHQgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgdmFyIHBvc1ggPSAoKEFDQ0VQVFNUT1VDSCkgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WCksXHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0LnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdweCknLCAnJyk7XHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0TGVmdC5yZXBsYWNlKCd0cmFuc2xhdGVYKCcsICcnKTtcclxuXHQgICAgICAgICAgICB2YXIgb2Zmc2V0WCA9IHBvc1ggLSB0b2FzdExlZnQ7XHJcblxyXG5cdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbihlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBwb3NYID0gZS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHN0b3BNb3Zpbmc6IGZ1bmN0aW9uKHRvYXN0LCBlKSB7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgXHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUub3BhY2l0eSA9IFwiXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xyXG5cdFx0XHRcdH0sIDQwMCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdH0oKTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERvIHRoZSBjYWxjdWxhdGlvbiB0byBtb3ZlIHRoZSBwcm9ncmVzcyBiYXJcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBtb3ZlUHJvZ3Jlc3MgPSBmdW5jdGlvbih0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKXtcclxuXHJcblx0XHR2YXIgaXNQYXVzZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc1Jlc2V0ZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc0Nsb3NlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHRpbWVyVGltZW91dCA9IG51bGw7XHJcblx0XHR2YXIgZWxlbSA9IHRvYXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrUExVR0lOX05BTUUrXCItcHJvZ3Jlc3NiYXIgZGl2XCIpO1xyXG5cdFx0dmFyIHByb2dyZXNzQmFyID0ge1xyXG5cdFx0XHRoaWRlRXRhOiBudWxsLFxyXG5cdFx0XHRtYXhIaWRlVGltZTogbnVsbCxcclxuXHRcdFx0Y3VycmVudFRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHR1cGRhdGVQcm9ncmVzczogZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNQYXVzZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1wYXVzZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRpc1Jlc2V0ZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1yZXNldGVkJykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0aXNDbG9zZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1jbG9zZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYoaXNSZXNldGVkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHRcdFx0XHRcdG1vdmVQcm9ncmVzcyh0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIWlzUGF1c2VkICYmICFpc1Jlc2V0ZWQgJiYgIWlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUrMTA7XHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9ICgocHJvZ3Jlc3NCYXIuaGlkZUV0YSAtIChwcm9ncmVzc0Jhci5jdXJyZW50VGltZSkpIC8gcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWUpICogMTAwO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2UgKyAnJSc7XHJcblxyXG5cdFx0XHRcdFx0aWYoTWF0aC5yb3VuZChwZXJjZW50YWdlKSA8IDAgfHwgdHlwZW9mIHRvYXN0ICE9ICdvYmplY3QnKXtcclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkge1xyXG5cdFx0XHRwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSA9IHBhcnNlRmxvYXQoc2V0dGluZ3MudGltZW91dCk7XHJcblx0XHRcdHByb2dyZXNzQmFyLmhpZGVFdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lO1xyXG5cdFx0XHR0aW1lclRpbWVvdXQgPSBzZXRJbnRlcnZhbChwcm9ncmVzc0Jhci51cGRhdGVQcm9ncmVzcywgMTApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3kgdGhlIGN1cnJlbnQgaW5pdGlhbGl6YXRpb24uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrUExVR0lOX05BTUUrJy13cmFwcGVyJyksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK1BMVUdJTl9OQU1FKSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1vcGVuJywge30sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1jbG9zZScsIHt9LCBmYWxzZSk7XHJcblxyXG5cdFx0Ly8gUmVzZXQgdmFyaWFibGVzXHJcblx0XHRDT05GSUcgPSB7fTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIFBsdWdpblxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNldHRpbmdzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvLyBEZXN0cm95IGFueSBleGlzdGluZyBpbml0aWFsaXphdGlvbnNcclxuXHRcdCRpemlUb2FzdC5kZXN0cm95KCk7XHJcblxyXG5cdFx0Q09ORklHID0gb3B0aW9ucztcclxuXHRcdGRlZmF1bHRzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQnVpbGRpbmcgdGhlbWVzIGZ1bmN0aW9ucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdGZvckVhY2goVEhFTUVTLCBmdW5jdGlvbiAodGhlbWUsIG5hbWUpIHtcclxuXHJcblx0XHQkaXppVG9hc3RbbmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKHRoZW1lLCBzZXR0aW5ncyB8fCB7fSk7XHJcblxyXG5cdFx0XHR0aGlzLnNob3coc2V0dGluZ3MpO1xyXG5cdFx0fTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbG9zZSB0aGUgc3BlY2lmaWMgVG9hc3RcclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5oaWRlID0gZnVuY3Rpb24gKG9wdGlvbnMsICR0b2FzdCwgY2xvc2VkQnkpIHtcclxuXHJcblx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cdFx0XHRjbG9zZWRCeSA9IGNsb3NlZEJ5IHx8IGZhbHNlO1xyXG5cclxuXHRcdGlmKHR5cGVvZiAkdG9hc3QgIT0gJ29iamVjdCcpe1xyXG5cdFx0XHQkdG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCR0b2FzdCk7XHJcblx0XHR9XHJcblx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25JbiB8fCBzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dE1vYmlsZSlcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0TW9iaWxlKTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0KTtcclxuXHRcdH1cclxuXHRcdHZhciBIID0gJHRvYXN0LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IEgrJ3B4JztcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFxyXG5cdFx0aWYoIUlTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4ycyc7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHRvYXN0LnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LDIwMCk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR2YXIgZXZlbnQ7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHtkZXRhaWw6IHtjbGFzczogc2V0dGluZ3MuY2xhc3N9fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRcdFx0XHRldmVudC5pbml0Q3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHRydWUsIHRydWUsIHtjbGFzczogc2V0dGluZ3MuY2xhc3N9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRcdH0gY2F0Y2goZXgpe1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihleCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0eXBlb2Ygc2V0dGluZ3Mub25DbG9zZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdHNldHRpbmdzLm9uQ2xvc2UuYXBwbHkobnVsbCwgW3NldHRpbmdzLCAkdG9hc3QsIGNsb3NlZEJ5XSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGFuZCBzaG93IHRoZSBUb2FzdFxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNob3cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBNZXJnZSB1c2VyIG9wdGlvbnMgd2l0aCBkZWZhdWx0c1xyXG5cdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG5cdFx0dmFyICR0b2FzdENhcHN1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItY2Fwc3VsZVwiKTtcclxuXHJcblx0XHR2YXIgJHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUpO1xyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlLmxlbmd0aD4wKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4ubGVuZ3RoPjApXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctcnRsJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNvbG9yLmxlbmd0aCA+IDApIHsgLy8jLCByZ2IsIHJnYmEsIGhzbFxyXG5cdFx0XHRcclxuXHRcdFx0aWYoIGlzQ29sb3Ioc2V0dGluZ3MuY29sb3IpICl7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jb2xvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNvbG9yLScrc2V0dGluZ3MuY29sb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuY2xhc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pbWFnZSkge1xyXG5cdFx0XHR2YXIgJGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGNvdmVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNvdmVyJyk7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS53aWR0aCA9IHNldHRpbmdzLmltYWdlV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBzZXR0aW5ncy5pbWFnZSArICcpJztcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRjb3Zlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRidXR0b25DbG9zZTtcclxuXHRcdGlmKHNldHRpbmdzLmNsb3NlKXtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNsb3NlJyk7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkYnV0dG9uQ2xvc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ0xlZnQgPSBcIjMwcHhcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MucHJvZ3Jlc3NCYXIpIHtcclxuXHJcblx0XHRcdHZhciAkcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdCRwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1wcm9ncmVzc2JhcicpO1xyXG5cclxuXHRcdFx0dmFyICRwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHByb2dyZXNzQmFyRGl2LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5wcm9ncmVzc0JhckNvbG9yO1xyXG5cclxuXHRcdFx0JHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKCRwcm9ncmVzc0JhckRpdik7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkcHJvZ3Jlc3NCYXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRtb3ZlUHJvZ3Jlc3MoJHRvYXN0LCBzZXR0aW5ncywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwzMDApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiggc2V0dGluZ3MucHJvZ3Jlc3NCYXIgPT09IGZhbHNlICYmIHNldHRpbmdzLnRpbWVvdXQgPiAwKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCk7XHJcblx0XHRcdH0sIHNldHRpbmdzLnRpbWVvdXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkdG9hc3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0Qm9keS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1ib2R5Jyk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmltYWdlKSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IChzZXR0aW5ncy5pbWFnZVdpZHRoICsgMTApICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLm1hcmdpbkxlZnQgPSAoc2V0dGluZ3MuaW1hZ2VXaWR0aCArIDEwKSArICdweCc7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdHZhciAkaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cdFx0XHRcdCRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFBMVUdJTl9OQU1FICsgJy1pY29uICcgKyBzZXR0aW5ncy5pY29uKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uVGV4dCl7XHJcblx0XHRcdFx0JGljb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2V0dGluZ3MuaWNvblRleHQpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICczM3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzMzcHgnO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uQ29sb3Ipe1xyXG5cdFx0XHRcdCRpY29uLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MuaWNvbkNvbG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJGljb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuXHRcdGlmIChzZXR0aW5ncy50aXRsZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHN0cm9uZy5zdHlsZS5jb2xvciA9IHNldHRpbmdzLnRpdGxlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkc3Ryb25nLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHNldHRpbmdzLnRpdGxlKSk7XHJcblxyXG5cdFx0dmFyICRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRpZiAoc2V0dGluZ3MubWVzc2FnZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHAuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy5tZXNzYWdlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkcC5hcHBlbmRDaGlsZChjcmVhdGVGcmFnRWxlbShzZXR0aW5ncy5tZXNzYWdlKSk7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MubGF5b3V0ID4gMSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWxheW91dFwiK3NldHRpbmdzLmxheW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuYmFsbG9vbil7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWJhbGxvb25cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkc3Ryb25nKTtcclxuXHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJHApO1xyXG5cclxuXHRcdHZhciAkYnV0dG9ucztcclxuXHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdCRidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctYnV0dG9ucycpO1xyXG5cclxuXHRcdFx0JHAuc3R5bGUubWFyZ2luUmlnaHQgPSAnMTVweCc7XHJcblxyXG5cdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdGZvckVhY2goc2V0dGluZ3MuYnV0dG9ucywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xyXG5cdFx0XHRcdCRidXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHZhbHVlWzBdKSk7XHJcblxyXG5cdFx0XHRcdHZhciAkYnRucyA9ICRidXR0b25zLmNoaWxkTm9kZXM7XHJcblxyXG5cdFx0XHRcdCRidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHZhciB0cyA9IHZhbHVlWzFdO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyB0cyh0aGF0LCAkdG9hc3QpOyBcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkYnV0dG9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0LmFwcGVuZENoaWxkKCR0b2FzdEJvZHkpO1xyXG5cdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblx0XHQkdG9hc3RDYXBzdWxlLmFwcGVuZENoaWxkKCR0b2FzdCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIEggPSAkdG9hc3Qub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHR2YXIgc3R5bGUgPSAkdG9hc3QuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCR0b2FzdCk7XHJcblx0XHRcdHZhciBtYXJnaW5Ub3AgPSBzdHlsZS5tYXJnaW5Ub3A7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gbWFyZ2luVG9wLnNwbGl0KFwicHhcIik7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gcGFyc2VJbnQobWFyZ2luVG9wWzBdKTtcclxuXHRcdFx0dmFyIG1hcmdpbkJvdHRvbSA9IHN0eWxlLm1hcmdpbkJvdHRvbTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b20uc3BsaXQoXCJweFwiKTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBwYXJzZUludChtYXJnaW5Cb3R0b21bMF0pO1xyXG5cclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcblx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUuaGVpZ2h0ID0gKEgrbWFyZ2luQm90dG9tK21hcmdpblRvcCkrJ3B4JztcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cdFx0XHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LCAxMDApO1xyXG5cclxuXHRcdHZhciBwb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLFxyXG5cdFx0XHQkd3JhcHBlcjtcclxuXHJcblx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cclxuXHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnRhcmdldCk7XHJcblx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXRhcmdldCcpO1xyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLnRhcmdldEZpcnN0KSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaW5zZXJ0QmVmb3JlKCR0b2FzdENhcHN1bGUsICR3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmFwcGVuZENoaWxkKCR0b2FzdENhcHN1bGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmKCBQT1NJVElPTlMuaW5kZXhPZihzZXR0aW5ncy5wb3NpdGlvbikgPT0gLTEgKXtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbXCIrUExVR0lOX05BTUUrXCJdIEluY29ycmVjdCBwb3NpdGlvbi5cXG5JdCBjYW4gYmUg4oC6IFwiICsgUE9TSVRJT05TKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0XHRpZihzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbUxlZnRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbVJpZ2h0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJib3R0b21DZW50ZXJcIil7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1ib3R0b21DZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wUmlnaHRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcENlbnRlclwiKXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLXRvcENlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1jZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci0nK3Bvc2l0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBQTFVHSU5fTkFNRSArICctd3JhcHBlci4nK3Bvc2l0aW9uKTtcclxuXHJcblx0XHRcdGlmICghJHdyYXBwZXIpIHtcclxuXHRcdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctd3JhcHBlcicpO1xyXG5cdFx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQocG9zaXRpb24pO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHdyYXBwZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wQ2VudGVyXCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BSaWdodFwiKXtcclxuXHRcdFx0XHQkd3JhcHBlci5pbnNlcnRCZWZvcmUoJHRvYXN0Q2Fwc3VsZSwgJHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuYXBwZW5kQ2hpbGQoJHRvYXN0Q2Fwc3VsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWlzTmFOKHNldHRpbmdzLnppbmRleCkpIHtcclxuXHRcdFx0JHdyYXBwZXIuc3R5bGUuekluZGV4ID0gc2V0dGluZ3MuemluZGV4O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiW1wiK1BMVUdJTl9OQU1FK1wiXSBJbnZhbGlkIHpJbmRleC5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3Mub25PcGVuLmFwcGx5KG51bGwsIFtzZXR0aW5ncywgJHRvYXN0XSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGV2ZW50O1xyXG5cdFx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1vcGVuJywge2RldGFpbDoge2NsYXNzOiBzZXR0aW5ncy5jbGFzc319KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG5cdFx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLW9wZW4nLCB0cnVlLCB0cnVlLCB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9IGNhdGNoKGV4KXtcclxuXHRcdFx0Y29uc29sZS53YXJuKGV4KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5hbmltYXRlSW5zaWRlKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1hbmltYXRlSW5zaWRlJyk7XHJcblx0XHRcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24xID0gMjAwO1xyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjIgPSAxMDA7XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMyA9IDMwMDtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluID09IFwiYm91bmNlSW5MZWZ0XCIpe1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24xID0gNDAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24yID0gMjAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24zID0gNDAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCRzdHJvbmcuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24xKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHAuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24yKTtcclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCRpY29uLmNsYXNzTGlzdC5hZGQoJ3JldmVhbEluJyk7XHJcblx0XHRcdFx0fSx0aW1lQW5pbWF0aW9uMyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDAgJiYgJGJ1dHRvbnMpIHtcclxuXHRcdFx0XHR2YXIgY291bnRlciA9IDE1MDtcclxuXHRcdFx0XHRmb3JFYWNoKCRidXR0b25zLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXZlYWxJbicpO1xyXG5cdFx0XHRcdFx0fSxjb3VudGVyKTtcclxuXHRcdFx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgY291bnRlcjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZigkYnV0dG9uQ2xvc2Upe1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBidXR0b24gPSBlLnRhcmdldDtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCwgJ2J1dHRvbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5wYXVzZU9uSG92ZXIpe1xyXG5cdFx0XHRcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5yZXNldE9uSG92ZXIpe1xyXG5cclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmRyYWcpe1xyXG5cclxuXHRcdFx0aWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0b3BNb3ZpbmcodGhpcywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdG9wTW92aW5nKHRoaXMsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gJGl6aVRvYXN0O1xyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgICAgIHRoaXMuYXR0cnMgPSBvcHRpb25zLmF0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMudHlwZSk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEF0dHJzKGF0dHJzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL2J0bi5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMjMuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFtb25kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcihjb2xvciB8fCAnd2hpdGUnLCBzdHJva2VXaWR0aCB8fCAnMicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcihjb2xvciwgc3Ryb2tlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc1MCcpO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaWFtb25kJyk7XHJcbiAgICAgICAgaWYodGhpcy5lbC5nZXRDb250ZXh0KXtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmVsLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoPWAke3N0cm9rZVdpZHRofWA7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGU9YCR7Y29sb3J9YDtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oMTIsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDM4LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyg0NywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDQ1KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDEyLDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygxNywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygzMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDM4LDgpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oNDcsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygxNywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDI1LDQ1KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzIsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvZGlhbW9uZC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBDaGVja0ZpZWxkcyBmcm9tICcuLi9hY3Rpb25zL2NoZWNrRmllbGRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IG9wdGlvbnMuYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5oZWxwX2F0dHJzID0gb3B0aW9ucy5oZWxwX2F0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaGVscF9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmF0dHJzLCB0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmhlbHBfYXR0cnMsIHRoaXMuaGVscF9lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShwcmV2KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBpZiAoQ2hlY2tGaWVsZHMuY2hlY2tFbXB0eSh0aGlzLmVsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnZW1wdHkgZmllbGQnKTtcclxuICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZUVycih0aGlzLmVsKTtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWQgPT09ICdsb2dpbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBDaGVja0ZpZWxkcy5jaGVja0xvZ2luKHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3JlcGVhdHBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IENoZWNrRmllbGRzLmNoZWNrUGFzc3dvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiBwcmV2LmVsLCBoZWxwOiBwcmV2LmhlbHBfZWx9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRUZXh0KHRoaXMuZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZU9rKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlRXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcigpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU0R1cGxpY2F0ZWREZWNsYXJhdGlvblxyXG4gICAgc2V0RXJyb3IodmFsdWUpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi8uLi9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vZWxlbWVudHMvcHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRTb3VyY2UgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3dpdGggdGl0bGVzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey93aXRofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ7e2NvbnRyb2wuY2xhc3N9fVwiIGlkPVwie3tjb250cm9sLmlkfX1cIj57e2NvbnRyb2wudGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiBsZWFkZXJib2FyZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbGVhZGVyYm9hcmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+e3tsb2dpbn19PHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7cmF0aW5nfX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19YDtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShsZWFkZXJCb2FyZFNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIGxlYWRlckJvYXJkVGVtcGxhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExlYWRlckJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX3NldFByb2dyZXNzQmFyKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldExlYWRlcnMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHJlc3BvbnNlLmxlYWRlcnM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IHRoaXMuX3JlbmRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wIHBsYXllcnM6JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcmJvYXJkOiBhcnIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncmVmcmVzaC1sYidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSB0aGlzLl9yZW5kZXIoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdObyBjb25uZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnI6IHt9LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWZyZXNoJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAncmVmcmVzaC1sYidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdFJlZnJlc2hMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgcmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWxiJyk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExlYWRlckJvYXJkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFByb2dyZXNzQmFyKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyQ29udGFpbmVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvdGVtcGxhdGVzL2xlYWRlckJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxMi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3coZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZWxlbS1oaWRlJyk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWxlbS1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZWxlbS1zaG93Jyk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZWxlbS1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9hbmltL2FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBNZW51VmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9tZW51Vmlld1wiO1xyXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuLi8uLi92aWV3cy9tZW51L2xvZ2luVmlld1wiO1xyXG5pbXBvcnQgU2lnblVwVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9zaWdudXBWaWV3XCI7XHJcbmltcG9ydCBBYm91dFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL21lbnUvYWJvdXRWaWV3XCI7XHJcbmltcG9ydCBMZWFkZXJCb2FyZFZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL21lbnUvbGVhZGVyYm9hcmRWaWV3XCI7XHJcbmltcG9ydCBQcm9maWxlVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvZ2FtZS9wcm9maWxlVmlld1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vZ2FtZS91c2VyXCI7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tIFwiLi4vc2VydmljZS91c2VyU2VydmljZVwiO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL2dhbWUvZ2FtZVZpZXdcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vYW5pbS9hbmltYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBjb25zdHJ1Y3RvciBSb3V0ZVxyXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucm91dGVzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXJyVmlldyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlcignLycsIG5ldyBNZW51Vmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS12aWV3JykpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlcignL2dhbWUnLCBuZXcgR2FtZVZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtdmlldycpKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoJy9sb2dpbicsIG5ldyBMb2dpblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXZpZXcnKSwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKCcvc2lnbnVwJywgbmV3IFNpZ25VcFZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC12aWV3JyksIHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlcignL2xlYWRlcmJvYXJkJywgbmV3IExlYWRlckJvYXJkVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQtdmlldycpKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoJy9hYm91dCcsIG5ldyBBYm91dFZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LXZpZXcnKSkpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKCcvcHJvZmlsZScsIG5ldyBQcm9maWxlVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS12aWV3JyksIHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0Q3VyclZpZXcocGF0aCkge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrVXNlcihwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tVc2VyKHBhdGgpIHtcclxuICAgICAgICBpZiAocGF0aCA9PT0gJy9sb2dpbicgfHwgcGF0aCA9PT0gJy9zaWdudXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ28oJy9wcm9maWxlJyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbyhwYXRoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoID09PSAnL3Byb2ZpbGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ28ocGF0aCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbygnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSAvKmlmIChwYXRoID09PSAnLycgfHwgcGF0aCA9PT0gJy9sZWFkZXJib2FyZCcgfHwgcGF0aCA9PT0gJy9hYm91dCcpKi8ge1xyXG4gICAgICAgICAgICB0aGlzLl9nbyhwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QtdGA0LXQudGC0Lgg0L/QviDQvNCw0YDRiNGA0YPRgtGDXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxyXG4gICAgICovXHJcbiAgICBfZ28ocGF0aCkge1xyXG5cclxuICAgICAgICBsZXQgdGltZU91dCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyclZpZXcpIHtcclxuICAgICAgICAgICAgbmV3IEFuaW1hdGlvbigpLmhpZGUodGhpcy5jdXJyVmlldy5ub2RlKTtcclxuICAgICAgICAgICAgdGltZU91dCA9IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyVmlldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyVmlldy50b2dnbGVWaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyVmlldyA9IHRoaXMuX2dldFZpZXdCeVJvdXRlKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJy8nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyVmlldyA9IHRoaXMuX2dldFZpZXdCeVJvdXRlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJy9wcm9maWxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyVmlldy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHtvcGE6ICdvcGEnfSwgJ3RpdGxlMScsIHBhdGgpO1xyXG4gICAgICAgICAgICBuZXcgQW5pbWF0aW9uKCkuc2hvdyh0aGlzLmN1cnJWaWV3Lm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJWaWV3LnRvZ2dsZVZpZXcoKTtcclxuICAgICAgICB9LCB0aW1lT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0LzQsNGA0YjRgNGD0YLQsFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmlld1xyXG4gICAgICovXHJcbiAgICBfcmVnaXN0ZXIocm91dGUsIHZpZXcpIHtcclxuICAgICAgICB0aGlzLnJvdXRlc1tyb3V0ZV0gPSB2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRWaWV3QnlSb3V0ZShocmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzW2hyZWZdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JfQsNC/0YPRgdGC0LjRgtGMINC/0YDQvtGG0LXRgSDQvNCw0YDRiNGA0YPRgtC40LfQsNGG0LjQuFxyXG4gICAgICovXHJcbiAgICBfc3RhcnQoKSB7XHJcbiAgICAgICAgLypsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3V0ZXInKS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgICAgICAgc2VsZi5fc2V0Q3VyclZpZXcodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTsqL1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuX29uUm91dGVDaGFuZ2UoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Sb3V0ZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Q3VyclZpZXcoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Q3VyclZpZXcoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fc2V0Q3VyclZpZXcoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuXHJcbiAgICAgICAgLyogaWYgKHRoaXMuX3NldEN1cnJWaWV3KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgfSovXHJcblxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3N1cHBvcnQvcm91dGVyL3JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTcuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSl7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9nYW1lL2dhbWVWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9wcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9kaWFtb25kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgLy90aGlzLnJlZnJlc2hQcm9maWxlKCk7XHJcbiAgICAgICAgdGhpcy5fc2hvd1ZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyKCkub2JqID0gdXNlcjtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSB0aGlzLl9jcmVhdGVQcm9maWxlKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlVmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbi1oZWxwJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dpbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9nb3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmxvZ091dFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLl9zZXRDdXJyVmlldygnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1ZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLl9zaG93Vmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVByb2ZpbGUodXNlcikge1xyXG4gICAgICAgIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvZmlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zjb250YWluZXItcm93Jyk7XHJcblxyXG4gICAgICAgIC8qIGNyZWF0ZSBjb250cm9sbGVycyBkaXYqL1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1yb3cnKTtcclxuXHJcbiAgICAgICAgbGV0IGhyZWZQbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGhyZWZQbGF5LnNldEF0dHJpYnV0ZSgnaHJlZicsICcvZ2FtZScpO1xyXG4gICAgICAgIGhyZWZQbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm91dGVyIGJ0bi1wbGF5Jyk7XHJcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoMS5pbm5lckhUTUwgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICAgICAgaHJlZlBsYXkuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgICAgICBsZXQgaHJlZkxvZ291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBocmVmTG9nb3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm91dGVyIGxpbmtfX2xvZ291dCcpO1xyXG4gICAgICAgIGhyZWZMb2dvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tbG9nb3V0Jyk7XHJcbiAgICAgICAgaHJlZkxvZ291dC5pbm5lclRleHQgPSAnTG9nIG91dCc7XHJcbiAgICAgICAgY29udHJvbGxlcnNEaXYuYXBwZW5kQ2hpbGQoaHJlZlBsYXkpO1xyXG4gICAgICAgIGNvbnRyb2xsZXJzRGl2LmFwcGVuZENoaWxkKGhyZWZMb2dvdXQpO1xyXG5cclxuICAgICAgICAvKmNyZWF0ZSB1c2VyIGRpdiovXHJcbiAgICAgICAgbGV0IHVzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB1c2VyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1jb2x1bW4gY29udGFpbmVyX19wcm9maWxlJyk7XHJcblxyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dF9fcHJvZmlsZS1sb2dpbicpO1xyXG4gICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gYCR7dXNlci5sb2dpbn1gO1xyXG4gICAgICAgIHVzZXJEaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcblxyXG4gICAgICAgIGxldCBhcnJWYWx1ZSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JhdGluZzonLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIucmF0aW5nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW5uaW5nczonLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIuZ2FtZV9jb3VudF93aW5cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdGFsIG1hdGNoZXM6ICcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5nYW1lX2NvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBhcnJWYWx1ZS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0X19wcm9maWxlLWl0ZW0nKTtcclxuICAgICAgICAgICAgZWxlbS5pbm5lclRleHQgPSBgJHtlbC5uYW1lfSAke2VsLnZhbHVlfWA7XHJcbiAgICAgICAgICAgIHVzZXJEaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qY3JlYXRlIHJlc291cmNlcyBkaXYqL1xyXG4gICAgICAgIGxldCByZXNvdXJjZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXNvdXJjZXNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmY29udGFpbmVyLWNvbHVtbiBjb250YWluZXJfX3Byb2ZpbGUnKTtcclxuXHJcbiAgICAgICAgbGV0IGFyckNyeXN0YWxzID0gW1xyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9ncmVlbiwgY29sb3I6ICdyZ2IoMjksIDE0MCwgMTE0KSd9LFxyXG4gICAgICAgICAgICB7dmFsdWU6IHVzZXIuY3J5c3RhbF9ibHVlLCBjb2xvcjogJ3JnYig1NywgMTA4LCAyMTkpJ30sXHJcbiAgICAgICAgICAgIHt2YWx1ZTogdXNlci5jcnlzdGFsX3JlZCwgY29sb3I6ICdyZ2IoMTM4LCAzNCwgNzYpJ30sXHJcbiAgICAgICAgICAgIHt2YWx1ZTogdXNlci5jcnlzdGFsX3B1cnBsZSwgY29sb3I6ICdyZ2IoODAsIDM1LCAxNTMpJ31dO1xyXG4gICAgICAgIGFyckNyeXN0YWxzLmZvckVhY2gocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmY29udGFpbmVyLXJvdycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGQgPSBuZXcgRGlhbW9uZChgJHtwYXJhbXMuY29sb3J9YCkuZ2V0RWxlbSgpLmVsO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZCk7XHJcblxyXG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHRfX3Byb2ZpbGUtZGlhbW9uZCcpO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGAke3BhcmFtcy52YWx1ZX1gO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgICAgIHJlc291cmNlc0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwcm9maWxlLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzRGl2KTtcclxuICAgICAgICBwcm9maWxlLmFwcGVuZENoaWxkKHVzZXJEaXYpO1xyXG4gICAgICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQocmVzb3VyY2VzRGl2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2ZpbGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9nYW1lL3Byb2ZpbGVWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgQmFzZVZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKXtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL21lbnUvYWJvdXRWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuaW1wb3J0IExlYWRlckJvYXJkIGZyb20gXCIuLi8uLi9tZW51L3RlbXBsYXRlcy9sZWFkZXJCb2FyZFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZFZpZXcgZXh0ZW5kcyBCYXNlVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpe1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgbmV3IExlYWRlckJvYXJkKG5vZGUpLnJlZnJlc2hMZWFkZXJCb2FyZCgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9sZWFkZXJib2FyZFZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4uLy4uL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL21lbnUvZWxlbWVudHMvZm9ybVwiO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vZ2FtZS91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCByb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2cgSW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zjb250YWluZXItY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLWxvZ2luLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtcGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi1sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rIHJvdXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi10by1zaWdudXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zaWdudXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmdldEVsZW0oKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMubG9naW5Gb3JtLmVsKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbicpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbi1oZWxwJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuVG9TaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXRvLXNpZ251cCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1ZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLmJ0bkxvZ2luLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvZ3Jlc3NCYXIsIHRoaXMuYnRuTG9naW4ubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW4uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ0bkxvZ2luLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vU3VibWl0IGZvcm1cclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5lbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja0ZpZWxkcygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMubG9naW5Gb3JtLmdldEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9naW4oYm9keSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyKCkub2JqID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5fc2V0Q3VyclZpZXcoJy9wcm9maWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0RXJyb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRFcnJvcignd3JvbmcgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuVG9TaWduVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudD0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyRmllbGRzKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRmllbGRzKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZWxlbS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL21lbnUvbG9naW5WaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLnJlbmRlcih7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvbGVhZGVyYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bi1wbGF5IHJvdXRlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xFQURFUiBCT0FSRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4tcGxheSByb3V0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQTEFZJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvYWJvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bi1wbGF5IHJvdXRlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCT1VUJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaW5zdHIpIHtcclxuICAgICAgICBsZXQgZWxlbUFycmF5ID0gdGhpcy5fZ2V0RWxlbXMoaW5zdHIuZWxlbWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2VsZW1zQXBwZW5kVG8oZWxlbUFycmF5LCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2VsZW1zQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2dldEVsZW1zKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEF0dHJzKGRhdGEuYXR0cnMsIGVsZW0pO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEuZWxlbWVudC50eXBlKTtcclxuICAgICAgICAgICAgdGV4dEVsZW0udGV4dENvbnRlbnQgPSBkYXRhLmVsZW1lbnQudGV4dDtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL21lbnUvbWVudVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9mb3JtXCI7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9wcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgQ2hlY2tGaWVsZHMgZnJvbSBcIi4uLy4uL21lbnUvYWN0aW9ucy9jaGVja0ZpZWxkc1wiO1xyXG5pbXBvcnQgSXppVG9hc3QgZnJvbSAnaXppdG9hc3QnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwVmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgcm91dGVyKXtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zjb250YWluZXItY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXBlYXQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXJlcGVhdHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBlYXRwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ3JlcGVhdHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcmVwZWF0cGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVnaXN0cmF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXNpZ251cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsgcm91dGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXRvLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmdldEVsZW0oKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuc2lnbnVwRm9ybS5lbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItbG9naW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwZWF0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1yZXBlYXRwYXNzd29yZCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dpbkhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1sb2dpbi1oZWxwJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcGFzc3dvcmQtaGVscCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGVhdFBhc3N3b3JkSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXJlcGVhdHBhc3N3b3JkLWhlbHAnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2lnblVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zaWdudXAnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuVG9Mb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdG8tbG9naW4nKTtcclxuICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1ZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZVZpZXdQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLmJ0blNpZ25VcC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKTtcclxuICAgICAgICB0aGlzLmJ0blNpZ25VcC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9ncmVzc0JhciwgdGhpcy5idG5TaWduVXAubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2lnblVwLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnRuU2lnblVwLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vU3VibWl0IGZvcm1cclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrRmllbGRzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5zaWdudXBGb3JtLmdldEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5zaWdudXAoYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBJemlUb2FzdC5zdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsbHkgcmVnaXN0cmF0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcFJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLl9zZXRDdXJyVmlldygnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlT2sodGhpcy5sb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRFcnIodGhpcy5sb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyLnJlc3VsdCA9PT0gJ25vLWNvbm4nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5sb2dpbkhlbHAsICdjaGVjayBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5sb2dpbkhlbHAsICdsb2dpbiB1c2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Ub0xvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQ9PntcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJGaWVsZHMoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0ZpZWxkcygpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZWxlbS52YWxpZGF0ZShwcmV2KTtcclxuICAgICAgICAgICAgcHJldiA9IGVsZW07XHJcbiAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhckZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL21lbnUvc2lnbnVwVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==