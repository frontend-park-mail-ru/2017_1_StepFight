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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
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
/* 2 */,
/* 3 */
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
/* 4 */
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
        this._user = {};
        User.__instance = this;
    }

    set obj(user) {
        this._user = user;
    }

    get obj() {
        return this._user;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;




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

    render() {
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

        this._baseUrl = 'http://localhost:8000/api';
        //this._baseUrl = 'https://tp-server-java.herokuapp.com/api';

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
 * Created by Denis on 02.03.2017.
 */
class Button {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
    }

    _setAttrs(attrs) {
        Object.keys(attrs).forEach(name => {
            this.el.setAttribute(name, attrs[name]);
        })
    }

    render() {
        this.el.innerHTML = this.text;
        this._setAttrs(this.attrs);
        return this;
    }

    toString() {
        return this.el.outerHTML;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(19);
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
    }

    render() {
        this._setAttrs(this.data.form.attrs, this.el);
        let h3 = document.createElement('h3');
        this._setAttrs(this.data.title.attrs, h3);
        h3.innerHTML = this.data.title.text;
        this.el.appendChild(h3);


        this.fields = this._getFields();
        this.controls = this._getControls();
        this._fieldsAppendTo(this.fields, this.el);

        this._controlsAppendTo(this.controls, this.el);

        return this;
    }

    _getFields() {
        let {fields = []}=this.data;
        return fields.map(data => {
            return new __WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */](data).render();
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
            return new __WEBPACK_IMPORTED_MODULE_0__btn__["a" /* default */](data).render();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(4);
/**
 * Created by Denis on 06.03.2017.
 */



class Profile {
    constructor(options = {data: {}}) {
        this.data = options.data;

        this.pLogin = document.createElement('h3');
        this.pRating = document.createElement('h3');
        this.pButton = null;
        this.div = options.data.div;

        this._render();
    }

    _render() {
        this.pLogin.textContent = `Login: ${this.data.login}`;
        this.pRating.textContent = `Score: ${this.data.rating}`;
        this.pButton = new __WEBPACK_IMPORTED_MODULE_0__btn__["a" /* default */](this.data.button).render();

        this.div.appendChild(this.pLogin);
        this.div.appendChild(this.pRating);
        this.div.appendChild(this.pButton.el);

        this._initListener();
    }

    _initListener() {
        this.pButton.el.addEventListener('click', () => {
            new __WEBPACK_IMPORTED_MODULE_1__support_service_userService__["a" /* default */]().logOutUser().then(response => {
                this._clearDiv();
                new __WEBPACK_IMPORTED_MODULE_2__game_user__["a" /* default */]().obj = {};
            }).catch(err => {
                console.error(err);
            })
        });
    }

    _clearDiv() {
        while (this.div.children.length > 0) {
            this.div.removeChild(this.div.firstChild);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Profile;





/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_templates_leaderBoard__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_actions_menuActions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_forms_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_forms_signup__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_actions_getUser__ = __webpack_require__(53);
/**
 * Created by Denis on 04.03.2017.
 */






new __WEBPACK_IMPORTED_MODULE_2__menu_forms_login__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_3__menu_forms_signup__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_0__menu_templates_leaderBoard__["a" /* default */]().refreshLeaderBoard();
new __WEBPACK_IMPORTED_MODULE_4__menu_actions_getUser__["a" /* default */]().get();
new __WEBPACK_IMPORTED_MODULE_1__menu_actions_menuActions__["a" /* default */]();




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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_profile__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(4);

/**
 * Created by Denis on 08.03.2017.
 */



class GetUser {
    constructor() {

    }

    get() {
        new __WEBPACK_IMPORTED_MODULE_0__support_service_userService__["a" /* default */]().getUser().then(user => {
            this._render(user);
            new __WEBPACK_IMPORTED_MODULE_2__game_user__["a" /* default */]().obj = user;
        }, response => {

        }).catch(err => {

        });
    }

    _render(user) {
        let profileDiv = document.getElementById('profile');
        let profile = new __WEBPACK_IMPORTED_MODULE_1__elements_profile__["a" /* default */]({
            data: {
                login: user.login,
                rating: user.rating,
                button: {
                    text: 'Log Out',
                    attrs: {
                        class: 'link',
                        id: 'btn-logout'
                    },
                    type: 'h3'
                },
                div: profileDiv
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetUser;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_anim_animModal__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_progressBar__ = __webpack_require__(5);
/**
 * Created by Denis on 03.03.2017.
 */



class MenuActions {
    constructor() {
        this.btnPlay = document.getElementById('btn-play');
        this.btnAbout = document.getElementById('btn-about');
        this.btnLeaderBoard = document.getElementById('btn-leaderboard');
        this.btnModalClose = document.getElementById('modal-close');
        this.currModal = null;

        this.modalContent = document.getElementById('modal-content');

        this.modalDiv = document.getElementById('modal');
        this.modalLogin = document.getElementById('modal-login');
        this.modalLeaderBoard = document.getElementById('modal-leaderboard');
        this.modalAbout = document.getElementById('modal-about');
        this.modalGame = document.getElementById('modal-game');

        this.btnToSignUp = document.getElementById('btn-to-signup');
        this.btnToLogIn = document.getElementById('btn-to-login');
        this.divLogin = document.getElementById('div-login');
        this.divSignUp = document.getElementById('div-signup');

        this.initMenuButtonsListeners();
        this.initLoginButtonsListeners();
    }

    initMenuButtonsListeners() {
        this.btnPlay.addEventListener('click', () => {
            this.showModalDivWithAnim();
            if (JSON.stringify(new __WEBPACK_IMPORTED_MODULE_0__game_user__["a" /* default */]().obj) === JSON.stringify({})) {
                this.showDiv(this.modalLogin);
                this.setCurrModal(this.modalLogin);
            } else {
                this.showDiv(this.modalGame);
                this.setCurrModal(this.modalGame);
            }
        });

        this.btnAbout.addEventListener('click', () => {
            this.showModalDivWithAnim();
            this.showDiv(this.modalAbout);
            this.setCurrModal(this.modalAbout);
        });

        this.btnLeaderBoard.addEventListener('click', () => {
            this.showModalDivWithAnim();
            this.showDiv(this.modalLeaderBoard);
            this.setCurrModal(this.modalLeaderBoard);
        });
        this.btnModalClose.addEventListener('click', () => {
            this.hideModalDivWithAnim();
        });
    }

    initLoginButtonsListeners() {
        this.btnToSignUp.addEventListener('click', () => {
            this.showDiv(this.divSignUp);
            this.hideDiv(this.divLogin);
        });

        this.btnToLogIn.addEventListener('click', () => {
            this.showDiv(this.divLogin);
            this.hideDiv(this.divSignUp);
        });
    }

    hideDiv(div) {
        div.classList.add('hidden');
    }

    showDiv(div) {
        div.classList.remove('hidden');
    }

    hideModalDivWithAnim() {
        __WEBPACK_IMPORTED_MODULE_1__support_anim_animModal__["a" /* default */].hide(this.modalContent);
        setTimeout(() => {
            this.hideDiv(this.modalDiv);
            this.hideCurrModal();
        }, 500);
    }

    showModalDivWithAnim() {
        this.showDiv(this.modalDiv);
        __WEBPACK_IMPORTED_MODULE_1__support_anim_animModal__["a" /* default */].show(this.modalContent);
    }

    setCurrModal(modal) {
        this.currModal = modal;
    }

    hideCurrModal() {
        this.currModal.classList.add('hidden');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuActions;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(9);
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
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    render() {
        this._setAttrs(this.attrs, this.el);
        this._setAttrs(this.help_attrs, this.help_el);

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
                if (check == true) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_profile__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_progressBar__ = __webpack_require__(5);
/**
 * Created by Denis on 02.03.2017.
 */







class LoginForm {
    constructor() {
        this.loginDiv = document.querySelector('#div-login');
        this.render();
    }

    render() {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__elements_form__["a" /* default */]({
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
                            class: 'link',
                            id: 'btn-to-signup'
                        },
                        type: 'p'
                    }
                ]
            }
        }).render();
        this.initListener();

        this.loginDiv.appendChild(this.loginForm.el);

        this.login = document.getElementById('l-login');
        this.password = document.getElementById('l-password');
        this.loginHelp = document.getElementById('l-login-help');
        this.btnLogin = document.getElementById('btn-login');
    }

    initListener() {
        //Submit form
        this.loginForm.el.addEventListener('submit', event => {
            event.preventDefault();
            if (this.checkFields()) {
                let body = this.loginForm.getFormData();

                this.showProgressBar();

                new __WEBPACK_IMPORTED_MODULE_1__support_service_userService__["a" /* default */]().login(body).then(user => {
                    this.clearFields();

                    let modalDiv = document.getElementById('modal');
                    let modalLoginDiv = document.getElementById('modal-login');
                    modalDiv.classList.add('hidden');
                    modalLoginDiv.classList.add('hidden');

                    let profileDiv = document.getElementById('profile');
                    let profile = new __WEBPACK_IMPORTED_MODULE_2__elements_profile__["a" /* default */]({
                        data: {
                            login: user.login,
                            rating: user.rating,
                            button: {
                                text: 'Log Out',
                                attrs: {
                                    class: 'link',
                                    id: 'btn-logout'
                                },
                                type: 'h3'
                            },
                            div: profileDiv
                        }
                    });
                    new __WEBPACK_IMPORTED_MODULE_3__game_user__["a" /* default */]().obj = user;
                    this.hideProgressBar();
                }).catch(e => {
                    this.loginForm.fields.forEach(elem => {
                        elem.setError();
                        elem.setError('wrong data');
                    });
                    this.hideProgressBar();
                    console.error(e);
                });
            }
        });
    }

    showProgressBar() {
        this.btnLogin.hidden = true;
        let progressBar = new __WEBPACK_IMPORTED_MODULE_5__elements_progressBar__["a" /* default */]().render();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    hideProgressBar() {
        setTimeout(() => {
            this.btnLogin.hidden = false;
            this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
        }, 500);
    }

    checkFields() {
        let check = true;

        this.loginForm.fields.forEach(elem => {
            let result = elem.validate();
            if (check === true) {
                check = result;
            }
        });

        return check;
    }

    clearFields() {
        this.loginForm.fields.forEach(elem => {
            elem.clear();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginForm;



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_progressBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_izitoast__);
/**
 * Created by Denis on 02.03.2017.
 */







class SignUpForm {

    constructor() {
        this.signupDiv = document.querySelector('#div-signup');
        this.loginDiv = document.querySelector('#div-login');
        this.render();
    }

    render() {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_0__elements_form__["a" /* default */]({
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
                            class: 'link',
                            id: 'btn-to-login'
                        },
                        type: 'p'
                    }
                ]
            }
        }).render();
        this.initListener();
        this.signupDiv.appendChild(this.signupForm.el);

        this.login = document.getElementById('r-login');
        this.password = document.getElementById('r-password');
        this.repeatPassword = document.getElementById('r-repeatpassword');

        this.loginHelp = document.getElementById('r-login-help');
        this.passwordHelp = document.getElementById('r-password-help');
        this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

        this.btnSignUp = document.getElementById('btn-signup');
    }

    initListener() {
        //Submit form
        this.signupForm.el.addEventListener('submit', event => {
            event.preventDefault();

            if (this.checkFields()) {
                let body = this.signupForm.getFormData();

                this.showProgressBar();

                new __WEBPACK_IMPORTED_MODULE_2__support_service_userService__["a" /* default */]().signup(body).then(response => {
                    this.clearFields();
                    this.hideProgressBar();
                    this.openLogin();
                }).catch(err => {
                    __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__["a" /* default */].fieldRemoveOk(this.login);
                    __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__["a" /* default */].fieldSetErr(this.login);
                    if(err.result === 'no-conn'){
                        __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__["a" /* default */].helpSetText(this.loginHelp, 'check connection');
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__["a" /* default */].helpSetText(this.loginHelp, 'login used');
                    }
                    this.hideProgressBar();
                    console.error(err);
                });
            }
        });
    }

    showProgressBar() {
        this.btnSignUp.hidden = true;
        let progressBar = new __WEBPACK_IMPORTED_MODULE_3__elements_progressBar__["a" /* default */]().render();
        this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
    }

    hideProgressBar() {
        setTimeout(() => {
            this.btnSignUp.hidden = false;
            this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
        }, 500);
    }

    openLogin() {
        this.signupDiv.classList.add('hidden');
        this.loginDiv.classList.remove('hidden');
        __WEBPACK_IMPORTED_MODULE_4_izitoast___default.a.success({
            title: 'Successfully registration',
            position: 'topRight'
        });
    }

    checkFields() {
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

    clearFields() {
        this.signupForm.fields.forEach(elem => {
            elem.clear();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignUpForm;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__ = __webpack_require__(5);
/**
 * Created by Denis on 04.03.2017.
 */



class LeaderBoard {
    constructor() {

    }

    render(data) {
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
        let leaderBoardContainer = document.getElementById('leaderboard-container');
        this.setProgressBar(leaderBoardContainer);

        new __WEBPACK_IMPORTED_MODULE_0__support_service_userService__["a" /* default */]().getLeaders().then(response => {
            let leaderBoardContainer = document.getElementById('leaderboard-container');
            let arr = response.leaders;
            setTimeout(() => {
                leaderBoardContainer.innerHTML = this.render({
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
                this.initRefreshListener();
            }, 500);
        }).catch(err => {
            console.error(err);
            leaderBoardContainer.innerHTML = this.render({
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
            this.initRefreshListener();
        });
    }

    initRefreshListener() {
        let refresh = document.getElementById('refresh-lb');
        if (refresh) {
            refresh.addEventListener('click', () => {
                this.refreshLeaderBoard();
            });
        }
    }

    clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    setProgressBar(container) {
        this.clearContainer(container);
        container.appendChild(new __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__["a" /* default */]().render());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LeaderBoard;




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 12.03.2017.
 */

class AnimModal{
    constructor(){

    }

    static show(elem){
        if(elem){
            elem.classList.remove('modal-hide');
            elem.classList.add('modal-show');
        }
    }

    static hide(elem){
        if(elem){
            elem.classList.remove('modal-show');
            elem.classList.add('modal-hide');
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AnimModal;


/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(22);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODljYjlhMWJhOWY1OWNlNTRlODM/MWNlYSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzPzI3MWMiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanM/MWMyMCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qcz9lY2E0Iiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2FjdGlvbnMvZ2V0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9hY3Rpb25zL21lbnVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2Zvcm1zL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2Zvcm1zL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvYW5pbS9hbmltTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUztBQUNwQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQyxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLGlCQUFpQjtBQUNqQiw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMkIsU0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDBCQUEwQixlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDNWNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7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O0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN6S0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7O0FDeExBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsa0NBQWtDLE9BQU87QUFDekMsMEJBQTBCO0FBQzFCLG9DQUFvQyxlQUFlLFFBQVEsWUFBWSxJQUFJLGNBQWM7QUFDekYsMEJBQTBCO0FBQzFCO0FBQ0EsOEJBQThCO0FBQzlCLDBEQUEwRCxPQUFPLHNCQUFzQixRQUFRO0FBQy9GLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODljYjlhMWJhOWY1OWNlNTRlODMiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vaHR0cC9odHRwJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHAoKTtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaHR0cC5CYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL2dldGA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBudWxsLCAnR0VUJywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dpbmA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cChib2R5KSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL3NpZ251cGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzLCAnUE9TVCcsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7cmVzdWx0OiAnc3VjY2Vzcyd9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtyZXN1bHQ6ICduby1jb25uJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3Jlc3VsdDogJ2Vycm9yJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZWFkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sZWFkZXJzYDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0VXNlcigpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvbG9nb3V0YDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgaGVhZGVycyA9IHt9LCB0eXBlID0gJ0dFVCcsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaHR0cC5yZXF1ZXN0KGFkZHJlc3MsIGhlYWRlcnMsIHR5cGUsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFVzZXIuX19pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXNlci5fX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyID0ge307XHJcbiAgICAgICAgVXNlci5fX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb2JqKHVzZXIpIHtcclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2JqKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9nYW1lL3VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDcuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2FkZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRmllbGRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrTGF0aW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL1vQsC3Rj9CQLdCv0ZHQgV0rLykgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrTG9naW4ob2JqKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tMYXRpbihvYmouZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnT25seSBMYXRpbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmouZmllbGQudmFsdWUubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlcnJfdGV4dDogJzQgLSBtaW4gbGVuZ3RoJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0RXJyKG9iai5maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRSZW1vdmVPayhvYmouZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iai5oZWxwLnRleHRDb250ZW50ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgb2JqLmhlbHAudGV4dENvbnRlbnQgPSBpdGVtLmVycl90ZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqLmhlbHAudGV4dENvbnRlbnQgPSBgJHtvYmouaGVscC50ZXh0Q29udGVudH0sJHtpdGVtLmVycl90ZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouaGVscC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqLmZpZWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NMZW5ndGgodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID49IDg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NFcXVhbHModmFsdWUxLCB2YWx1ZTIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjaGVja1Bhc3N3b3JkKG9iajEsIG9iajIpIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzTGVuZ3RoKG9iajEuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICc4IC0gbWluIGxlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tQYXNzRXF1YWxzKG9iajEuZmllbGQudmFsdWUsIG9iajIuZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdQYXNzd29yZHMgbm90IGVxdWFscycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajEuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMS5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJ1Bhc3N3b3JkcyBub3QgZXF1YWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoyLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmoxLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBvYmoyLmhlbHAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldEVycihpdGVtLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKGl0ZW0uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaGVscC50ZXh0Q29udGVudCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlbHAudGV4dENvbnRlbnQgPSBgJHtpdGVtLmhlbHAudGV4dENvbnRlbnR9LiR7aXRlbS5lcnJfdGV4dH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldE9rKG9iajEuZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqMi5maWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHBTZXRUZXh0KGVsZW0sIHZhbHVlKSB7XHJcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFNldFRleHQoZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0RXJyKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0X19lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFJlbW92ZUVycihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRPayhlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fb2snKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRSZW1vdmVPayhlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fb2snKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoSHR0cC5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSHR0cC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaSc7XHJcbiAgICAgICAgLy90aGlzLl9iYXNlVXJsID0gJ2h0dHBzOi8vdHAtc2VydmVyLWphdmEuaGVyb2t1YXBwLmNvbS9hcGknO1xyXG5cclxuICAgICAgICBIdHRwLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQmFzZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQmFzZVVybCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0KGFkZHJlc3MgPSAnJywgaGVhZGVycyA9IHt9LCB0eXBlID0gJ0dFVCcsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGxldCBmZXRjaE9iaiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiB0eXBlLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGZldGNoT2JqLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZldGNoKGFkZHJlc3MsIGZldGNoT2JqKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyIHx8IGVyci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9odHRwL2h0dHAuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgICAgIHRoaXMuYXR0cnMgPSBvcHRpb25zLmF0dHJzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEF0dHJzKGF0dHJzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmF0dHJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbC5vdXRlckhUTUw7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9idG4uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge2RhdGE6IHt9fSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmRhdGEuZm9ybS5hdHRycywgdGhpcy5lbCk7XHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmRhdGEudGl0bGUuYXR0cnMsIGgzKTtcclxuICAgICAgICBoMy5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGl0bGUudGV4dDtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRzID0gdGhpcy5fZ2V0RmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzQXBwZW5kVG8odGhpcy5maWVsZHMsIHRoaXMuZWwpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb250cm9sc0FwcGVuZFRvKHRoaXMuY29udHJvbHMsIHRoaXMuZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmllbGRzKCkge1xyXG4gICAgICAgIGxldCB7ZmllbGRzID0gW119PXRoaXMuZGF0YTtcclxuICAgICAgICByZXR1cm4gZmllbGRzLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnB1dChkYXRhKS5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2ZpZWxkc0FwcGVuZFRvKGFycmF5LCBlbGVtKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmVsKTtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmhlbHBfZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRyb2xzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2dldENvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCB7Y29udHJvbHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBjb250cm9scy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uKGRhdGEpLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtRGF0YSgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsLmVsZW1lbnRzO1xyXG4gICAgICAgIGxldCBmaWVsZHMgPSB7fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudHNbZWxlbWVudF0ubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudHNbZWxlbWVudF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J0bidcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHtkYXRhOiB7fX0pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMucExvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICB0aGlzLnBSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRoaXMucEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXYgPSBvcHRpb25zLmRhdGEuZGl2O1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucExvZ2luLnRleHRDb250ZW50ID0gYExvZ2luOiAke3RoaXMuZGF0YS5sb2dpbn1gO1xyXG4gICAgICAgIHRoaXMucFJhdGluZy50ZXh0Q29udGVudCA9IGBTY29yZTogJHt0aGlzLmRhdGEucmF0aW5nfWA7XHJcbiAgICAgICAgdGhpcy5wQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmRhdGEuYnV0dG9uKS5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5wTG9naW4pO1xyXG4gICAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMucFJhdGluZyk7XHJcbiAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5wQnV0dG9uLmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnBCdXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmxvZ091dFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRGl2KCk7XHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHt9O1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhckRpdigpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5kaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpdi5yZW1vdmVDaGlsZCh0aGlzLmRpdi5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL3Byb2ZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA0LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgTGVhZGVyQm9hcmQgZnJvbSAnLi9tZW51L3RlbXBsYXRlcy9sZWFkZXJCb2FyZCc7XHJcbmltcG9ydCBNZW51QWN0aW9uIGZyb20gJy4vbWVudS9hY3Rpb25zL21lbnVBY3Rpb25zJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL21lbnUvZm9ybXMvbG9naW4nO1xyXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuL21lbnUvZm9ybXMvc2lnbnVwJztcclxuaW1wb3J0IEdldFVzZXIgZnJvbSAnLi9tZW51L2FjdGlvbnMvZ2V0VXNlcic7XHJcblxyXG5uZXcgTG9naW5Gb3JtKCk7XHJcbm5ldyBTaWduVXBGb3JtKCk7XHJcbm5ldyBMZWFkZXJCb2FyZCgpLnJlZnJlc2hMZWFkZXJCb2FyZCgpO1xyXG5uZXcgR2V0VXNlcigpLmdldCgpO1xyXG5uZXcgTWVudUFjdGlvbigpO1xyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXHJcbiAqIGl6aVRvYXN0IHwgdjEuMS4wXHJcbiAqIGh0dHA6Ly9peml0b2FzdC5tYXJjZWxvZG9sY2UuY29tXHJcbiAqIGJ5IE1hcmNlbG8gRG9sY2UuXHJcbiAqLyBcclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KHJvb3QpKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyb290Lml6aVRvYXN0ID0gZmFjdG9yeShyb290KTtcclxuXHR9XHJcbn0pKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0aGlzLndpbmRvdyB8fCB0aGlzLmdsb2JhbCwgZnVuY3Rpb24gKHJvb3QpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQvL1xyXG5cdC8vIFZhcmlhYmxlc1xyXG5cdC8vXHJcblx0dmFyICRpemlUb2FzdCA9IHt9LFxyXG5cdFx0UExVR0lOX05BTUUgPSAnaXppVG9hc3QnLFxyXG5cdFx0Qk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuXHRcdElTTU9CSUxFID0gKC9Nb2JpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSA/IHRydWUgOiBmYWxzZSxcclxuXHRcdElTQ0hST01FID0gL0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvR29vZ2xlIEluYy8udGVzdChuYXZpZ2F0b3IudmVuZG9yKSxcclxuXHRcdElTRklSRUZPWCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcsXHJcblx0XHRBQ0NFUFRTVE9VQ0ggPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcblx0XHRQT1NJVElPTlMgPSBbJ2JvdHRvbVJpZ2h0JywnYm90dG9tTGVmdCcsJ2JvdHRvbUNlbnRlcicsJ3RvcFJpZ2h0JywndG9wTGVmdCcsJ3RvcENlbnRlcicsJ2NlbnRlciddLFxyXG5cdFx0VEhFTUVTID0ge1xyXG5cdFx0XHRpbmZvOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiYmx1ZVwiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLWluZm9cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiZ3JlZW5cIixcclxuXHRcdFx0XHRpY29uOiBcImljby1jaGVja1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3YXJuaW5nOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwieWVsbG93XCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28td2FybmluZ1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjoge1xyXG5cdFx0XHRcdGNvbG9yOiBcInJlZFwiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLWVycm9yXCIsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRNT0JJTEVXSURUSCA9IDU2OCxcclxuXHRcdENPTkZJRyA9IHt9O1xyXG5cclxuXHQvLyBEZWZhdWx0IHNldHRpbmdzXHJcblx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0Y2xhc3M6ICcnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0dGl0bGVDb2xvcjogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHRcdG1lc3NhZ2VDb2xvcjogJycsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcnLFxyXG5cdFx0Y29sb3I6ICcnLCAvLyBibHVlLCByZWQsIGdyZWVuLCB5ZWxsb3dcclxuXHRcdGljb246ICcnLFxyXG5cdFx0aWNvblRleHQ6ICcnLFxyXG5cdFx0aWNvbkNvbG9yOiAnJyxcclxuXHRcdGltYWdlOiAnJyxcclxuXHRcdGltYWdlV2lkdGg6IDUwLFxyXG5cdFx0emluZGV4OiA5OTk5OSxcclxuXHRcdGxheW91dDogMSxcclxuXHRcdGJhbGxvb246IGZhbHNlLFxyXG5cdFx0Y2xvc2U6IHRydWUsXHJcblx0XHRydGw6IGZhbHNlLFxyXG5cdFx0cG9zaXRpb246ICdib3R0b21SaWdodCcsIC8vIGJvdHRvbVJpZ2h0LCBib3R0b21MZWZ0LCB0b3BSaWdodCwgdG9wTGVmdCwgdG9wQ2VudGVyLCBib3R0b21DZW50ZXIsIGNlbnRlclxyXG5cdFx0dGFyZ2V0OiAnJyxcclxuXHRcdHRhcmdldEZpcnN0OiB0cnVlLFxyXG5cdFx0dGltZW91dDogNTAwMCxcclxuXHRcdGRyYWc6IHRydWUsXHJcblx0XHRwYXVzZU9uSG92ZXI6IHRydWUsXHJcblx0XHRyZXNldE9uSG92ZXI6IGZhbHNlLFxyXG5cdFx0cHJvZ3Jlc3NCYXI6IHRydWUsXHJcblx0XHRwcm9ncmVzc0JhckNvbG9yOiAnJyxcclxuXHRcdGFuaW1hdGVJbnNpZGU6IHRydWUsXHJcblx0XHRidXR0b25zOiB7fSxcclxuXHRcdHRyYW5zaXRpb25JbjogJ2ZhZGVJblVwJywgLy8gYm91bmNlSW5MZWZ0LCBib3VuY2VJblJpZ2h0LCBib3VuY2VJblVwLCBib3VuY2VJbkRvd24sIGZhZGVJbiwgZmFkZUluRG93biwgZmFkZUluVXAsIGZhZGVJbkxlZnQsIGZhZGVJblJpZ2h0LCBmbGlwSW5YXHJcblx0XHR0cmFuc2l0aW9uT3V0OiAnZmFkZU91dCcsIC8vIGZhZGVPdXQsIGZhZGVPdXRVcCwgZmFkZU91dERvd24sIGZhZGVPdXRMZWZ0LCBmYWRlT3V0UmlnaHQsIGZsaXBPdXRYXHJcblx0XHR0cmFuc2l0aW9uSW5Nb2JpbGU6ICdmYWRlSW5VcCcsXHJcblx0XHR0cmFuc2l0aW9uT3V0TW9iaWxlOiAnZmFkZU91dERvd24nLFxyXG5cdFx0b25PcGVuOiBmdW5jdGlvbiAoKSB7fSxcclxuXHRcdG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHt9XHJcblx0fTtcclxuXHJcblx0Ly9cclxuXHQvLyBNZXRob2RzXHJcblx0Ly9cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFBvbHlmaWxsIGZvciByZW1vdmUoKSBtZXRob2RcclxuXHQgKi9cclxuXHRpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuXHQgICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQSBzaW1wbGUgZm9yRWFjaCgpIGltcGxlbWVudGF0aW9uIGZvciBBcnJheXMsIE9iamVjdHMgYW5kIE5vZGVMaXN0c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiBvZiBpdGVtcyB0byBpdGVyYXRlXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlcmF0aW9uXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IHNjb3BlIE9iamVjdC9Ob2RlTGlzdC9BcnJheSB0aGF0IGZvckVhY2ggaXMgaXRlcmF0aW5nIG92ZXIgKGFrYSBgdGhpc2ApXHJcblx0ICovXHJcblx0dmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIHNjb3BlKSB7XHJcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbGxlY3Rpb24pID09PSAnW29iamVjdCBPYmplY3RdJykge1xyXG5cdFx0XHRmb3IgKHZhciBwcm9wIGluIGNvbGxlY3Rpb24pIHtcclxuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIHByb3ApKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNjb3BlLCBjb2xsZWN0aW9uW3Byb3BdLCBwcm9wLCBjb2xsZWN0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKGNvbGxlY3Rpb24pe1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNjb3BlLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIERlZmF1bHQgc2V0dGluZ3NcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIG9wdGlvbnNcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXHJcblx0ICovXHJcblx0dmFyIGV4dGVuZCA9IGZ1bmN0aW9uIChkZWZhdWx0cywgb3B0aW9ucykge1xyXG5cdFx0dmFyIGV4dGVuZGVkID0ge307XHJcblx0XHRmb3JFYWNoKGRlZmF1bHRzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcclxuXHRcdFx0ZXh0ZW5kZWRbcHJvcF0gPSBkZWZhdWx0c1twcm9wXTtcclxuXHRcdH0pO1xyXG5cdFx0Zm9yRWFjaChvcHRpb25zLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcclxuXHRcdFx0ZXh0ZW5kZWRbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZXh0ZW5kZWQ7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIGZyYWdtZW50IERPTSBlbGVtZW50c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGNyZWF0ZUZyYWdFbGVtID0gZnVuY3Rpb24oaHRtbFN0cikge1xyXG5cdFx0dmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblx0XHRcdHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRlbXAuaW5uZXJIVE1MID0gaHRtbFN0cjtcclxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0ZnJhZy5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZyYWc7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIGlmIGlzIGEgY29sb3JcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBpc0NvbG9yID0gZnVuY3Rpb24oY29sb3Ipe1xyXG5cdFx0aWYoIGNvbG9yLnN1YnN0cmluZygwLDEpID09IFwiI1wiIHx8IGNvbG9yLnN1YnN0cmluZygwLDMpID09IFwicmdiXCIgfHwgY29sb3Iuc3Vic3RyaW5nKDAsMykgPT0gXCJoc2xcIiApe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRHJhZyBtZXRob2Qgb2YgdG9hc3RzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgZHJhZyA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAgIG1vdmU6IGZ1bmN0aW9uKHRvYXN0LCBpbnN0YW5jZSwgc2V0dGluZ3MsIHhwb3MpIHtcclxuXHJcblx0ICAgICAgICBcdHZhciBvcGFjaXR5LFxyXG5cdCAgICAgICAgXHRcdG9wYWNpdHlSYW5nZSA9IDAuMyxcclxuXHQgICAgICAgIFx0XHRkaXN0YW5jZSA9IDE4MDtcclxuXHQgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICB0b2FzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnK3hwb3MgKyAncHgpJztcclxuXHJcblx0ICAgICAgICAgICAgaWYoeHBvcyA+IDApe1xyXG5cdCAgICAgICAgICAgIFx0b3BhY2l0eSA9IChkaXN0YW5jZS14cG9zKSAvIGRpc3RhbmNlO1xyXG5cdCAgICAgICAgICAgIFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlLmhpZGUoZXh0ZW5kKHNldHRpbmdzLCB7IHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0UmlnaHQnLCB0cmFuc2l0aW9uT3V0TW9iaWxlOiAnZmFkZU91dFJpZ2h0JyB9KSwgdG9hc3QsICdkcmFnJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBcdG9wYWNpdHkgPSAoZGlzdGFuY2UreHBvcykgLyBkaXN0YW5jZTtcclxuXHQgICAgICAgICAgICBcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5oaWRlKGV4dGVuZChzZXR0aW5ncywgeyB0cmFuc2l0aW9uT3V0OiAnZmFkZU91dExlZnQnLCB0cmFuc2l0aW9uT3V0TW9iaWxlOiAnZmFkZU91dExlZnQnIH0pLCB0b2FzdCwgJ2RyYWcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRcclxuXHRcdFx0XHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHJcblx0XHRcdFx0XHRpZihJU0NIUk9NRSB8fCBJU0ZJUkVGT1gpXHJcblx0XHRcdFx0XHRcdHRvYXN0LnN0eWxlLmxlZnQgPSB4cG9zKydweCc7XHJcblxyXG5cdFx0XHRcdFx0dG9hc3QucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eVJhbmdlO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zdG9wTW92aW5nKHRvYXN0LCBudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgc3RhcnRNb3Zpbmc6IGZ1bmN0aW9uKHRvYXN0LCBpbnN0YW5jZSwgc2V0dGluZ3MsIGUpIHtcclxuXHJcblx0ICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdCAgICAgICAgICAgIHZhciBwb3NYID0gKChBQ0NFUFRTVE9VQ0gpID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFgpLFxyXG5cdCAgICAgICAgICAgICAgICB0b2FzdExlZnQgPSB0b2FzdC5zdHlsZS50cmFuc2Zvcm0ucmVwbGFjZSgncHgpJywgJycpO1xyXG5cdCAgICAgICAgICAgICAgICB0b2FzdExlZnQgPSB0b2FzdExlZnQucmVwbGFjZSgndHJhbnNsYXRlWCgnLCAnJyk7XHJcblx0ICAgICAgICAgICAgdmFyIG9mZnNldFggPSBwb3NYIC0gdG9hc3RMZWZ0O1xyXG5cclxuXHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbik7XHJcblx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpO1xyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoQUNDRVBUU1RPVUNIKSB7XHJcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gZnVuY3Rpb24oZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHBvc1ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFggPSBwb3NYIC0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZy5tb3ZlKHRvYXN0LCBpbnN0YW5jZSwgc2V0dGluZ3MsIGZpbmFsWCk7XHJcblx0ICAgICAgICAgICAgICAgIH07XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IGUuY2xpZW50WCxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFggPSBwb3NYIC0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZy5tb3ZlKHRvYXN0LCBpbnN0YW5jZSwgc2V0dGluZ3MsIGZpbmFsWCk7XHJcblx0ICAgICAgICAgICAgICAgIH07XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICBzdG9wTW92aW5nOiBmdW5jdGlvbih0b2FzdCwgZSkge1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoQUNDRVBUU1RPVUNIKSB7XHJcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gZnVuY3Rpb24oKSB7fTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZVwiO1xyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLm9wYWNpdHkgPSBcIlwiO1xyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcclxuXHRcdFx0XHR9LCA0MDApO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEbyB0aGUgY2FsY3VsYXRpb24gdG8gbW92ZSB0aGUgcHJvZ3Jlc3MgYmFyXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgbW92ZVByb2dyZXNzID0gZnVuY3Rpb24odG9hc3QsIHNldHRpbmdzLCBjYWxsYmFjayl7XHJcblxyXG5cdFx0dmFyIGlzUGF1c2VkID0gZmFsc2U7XHJcblx0XHR2YXIgaXNSZXNldGVkID0gZmFsc2U7XHJcblx0XHR2YXIgaXNDbG9zZWQgPSBmYWxzZTtcclxuXHRcdHZhciB0aW1lclRpbWVvdXQgPSBudWxsO1xyXG5cdFx0dmFyIGVsZW0gPSB0b2FzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK1BMVUdJTl9OQU1FK1wiLXByb2dyZXNzYmFyIGRpdlwiKTtcclxuXHRcdHZhciBwcm9ncmVzc0JhciA9IHtcclxuXHRcdFx0aGlkZUV0YTogbnVsbCxcclxuXHRcdFx0bWF4SGlkZVRpbWU6IG51bGwsXHJcblx0XHRcdGN1cnJlbnRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuXHRcdFx0dXBkYXRlUHJvZ3Jlc3M6IGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlzUGF1c2VkID0gdG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKyctcGF1c2VkJykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0aXNSZXNldGVkID0gdG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKyctcmVzZXRlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdGlzQ2xvc2VkID0gdG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKyctY2xvc2VkJykgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmKGlzUmVzZXRlZCl7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcclxuXHRcdFx0XHRcdGVsZW0uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblx0XHRcdFx0XHRtb3ZlUHJvZ3Jlc3ModG9hc3QsIHNldHRpbmdzLCBjYWxsYmFjayk7XHJcblx0XHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctcmVzZXRlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihpc0Nsb3NlZCl7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcclxuXHRcdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1jbG9zZWQnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCFpc1BhdXNlZCAmJiAhaXNSZXNldGVkICYmICFpc0Nsb3NlZCl7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5jdXJyZW50VGltZSA9IHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lKzEwO1xyXG5cdFx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSAoKHByb2dyZXNzQmFyLmhpZGVFdGEgLSAocHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUpKSAvIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lKSAqIDEwMDtcclxuXHRcdFx0XHRcdGVsZW0uc3R5bGUud2lkdGggPSBwZXJjZW50YWdlICsgJyUnO1xyXG5cclxuXHRcdFx0XHRcdGlmKE1hdGgucm91bmQocGVyY2VudGFnZSkgPCAwIHx8IHR5cGVvZiB0b2FzdCAhPSAnb2JqZWN0Jyl7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjay5hcHBseSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRpZiAoc2V0dGluZ3MudGltZW91dCA+IDApIHtcclxuXHRcdFx0cHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWUgPSBwYXJzZUZsb2F0KHNldHRpbmdzLnRpbWVvdXQpO1xyXG5cdFx0XHRwcm9ncmVzc0Jhci5oaWRlRXRhID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBwcm9ncmVzc0Jhci5tYXhIaWRlVGltZTtcclxuXHRcdFx0dGltZXJUaW1lb3V0ID0gc2V0SW50ZXJ2YWwocHJvZ3Jlc3NCYXIudXBkYXRlUHJvZ3Jlc3MsIDEwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95IHRoZSBjdXJyZW50IGluaXRpYWxpemF0aW9uLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHQkaXppVG9hc3QuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK1BMVUdJTl9OQU1FKyctd3JhcHBlcicpLCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xyXG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJytQTFVHSU5fTkFNRSksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFBMVUdJTl9OQU1FKyctb3BlbicsIHt9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFBMVUdJTl9OQU1FKyctY2xvc2UnLCB7fSwgZmFsc2UpO1xyXG5cclxuXHRcdC8vIFJlc2V0IHZhcmlhYmxlc1xyXG5cdFx0Q09ORklHID0ge307XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSBQbHVnaW5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5zZXR0aW5ncyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0Ly8gRGVzdHJveSBhbnkgZXhpc3RpbmcgaW5pdGlhbGl6YXRpb25zXHJcblx0XHQkaXppVG9hc3QuZGVzdHJveSgpO1xyXG5cclxuXHRcdENPTkZJRyA9IG9wdGlvbnM7XHJcblx0XHRkZWZhdWx0cyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWxkaW5nIHRoZW1lcyBmdW5jdGlvbnMuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHRmb3JFYWNoKFRIRU1FUywgZnVuY3Rpb24gKHRoZW1lLCBuYW1lKSB7XHJcblxyXG5cdFx0JGl6aVRvYXN0W25hbWVdID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHRcdHZhciBzZXR0aW5ncyA9IGV4dGVuZChDT05GSUcsIG9wdGlvbnMgfHwge30pO1xyXG5cdFx0XHRzZXR0aW5ncyA9IGV4dGVuZCh0aGVtZSwgc2V0dGluZ3MgfHwge30pO1xyXG5cclxuXHRcdFx0dGhpcy5zaG93KHNldHRpbmdzKTtcclxuXHRcdH07XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2xvc2UgdGhlIHNwZWNpZmljIFRvYXN0XHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHQkaXppVG9hc3QuaGlkZSA9IGZ1bmN0aW9uIChvcHRpb25zLCAkdG9hc3QsIGNsb3NlZEJ5KSB7XHJcblxyXG5cdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcclxuXHRcdFx0Y2xvc2VkQnkgPSBjbG9zZWRCeSB8fCBmYWxzZTtcclxuXHJcblx0XHRpZih0eXBlb2YgJHRvYXN0ICE9ICdvYmplY3QnKXtcclxuXHRcdFx0JHRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigkdG9hc3QpO1xyXG5cdFx0fVxyXG5cdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1jbG9zZWQnKTtcclxuXHJcblx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4gfHwgc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihJU01PQklMRSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8PSBNT0JJTEVXSURUSCl7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25PdXRNb2JpbGUpXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbk91dE1vYmlsZSk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25PdXQpXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbk91dCk7XHJcblx0XHR9XHJcblx0XHR2YXIgSCA9ICR0b2FzdC5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuXHRcdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSBIKydweCc7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcclxuXHRcdGlmKCFJU01PQklMRSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA+IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJzAuMnMnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG5cdFx0XHR9LDEwMDApO1xyXG5cdFx0fSwyMDApO1xyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5jbGFzcyl7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmFyIGV2ZW50O1xyXG5cdFx0XHRcdGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcclxuXHRcdFx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFBMVUdJTl9OQU1FKyctY2xvc2UnLCB7ZGV0YWlsOiB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfX0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG5cdFx0XHRcdFx0ZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFBMVUdJTl9OQU1FKyctY2xvc2UnLCB0cnVlLCB0cnVlLCB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0XHR9IGNhdGNoKGV4KXtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oZXgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodHlwZW9mIHNldHRpbmdzLm9uQ2xvc2UgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRzZXR0aW5ncy5vbkNsb3NlLmFwcGx5KG51bGwsIFtzZXR0aW5ncywgJHRvYXN0LCBjbG9zZWRCeV0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhbmQgc2hvdyB0aGUgVG9hc3RcclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5zaG93ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gTWVyZ2UgdXNlciBvcHRpb25zIHdpdGggZGVmYXVsdHNcclxuXHRcdHZhciBzZXR0aW5ncyA9IGV4dGVuZChDT05GSUcsIG9wdGlvbnMgfHwge30pO1xyXG5cdFx0XHRzZXR0aW5ncyA9IGV4dGVuZChkZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuXHRcdHZhciAkdG9hc3RDYXBzdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWNhcHN1bGVcIik7XHJcblxyXG5cdFx0dmFyICR0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKTtcclxuXHJcblx0XHRpZihJU01PQklMRSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8PSBNT0JJTEVXSURUSCl7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZS5sZW5ndGg+MClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluLmxlbmd0aD4wKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25Jbik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXJ0bCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5jb2xvci5sZW5ndGggPiAwKSB7IC8vIywgcmdiLCByZ2JhLCBoc2xcclxuXHRcdFx0XHJcblx0XHRcdGlmKCBpc0NvbG9yKHNldHRpbmdzLmNvbG9yKSApe1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MuY29sb3I7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1jb2xvci0nK3NldHRpbmdzLmNvbG9yKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLmJhY2tncm91bmRDb2xvci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCR0b2FzdC5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5jbGFzcyl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmNsYXNzKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuaW1hZ2UpIHtcclxuXHRcdFx0dmFyICRjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCRjb3Zlci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1jb3ZlcicpO1xyXG5cdFx0XHQkY292ZXIuc3R5bGUud2lkdGggPSBzZXR0aW5ncy5pbWFnZVdpZHRoICsgXCJweFwiO1xyXG5cdFx0XHQkY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgc2V0dGluZ3MuaW1hZ2UgKyAnKSc7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkY292ZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkYnV0dG9uQ2xvc2U7XHJcblx0XHRpZihzZXR0aW5ncy5jbG9zZSl7XHJcblx0XHRcdCRidXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRcdCRidXR0b25DbG9zZS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1jbG9zZScpO1xyXG5cdFx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJGJ1dHRvbkNsb3NlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIzMHB4XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMzBweFwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLnByb2dyZXNzQmFyKSB7XHJcblxyXG5cdFx0XHR2YXIgJHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHQkcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctcHJvZ3Jlc3NiYXInKTtcclxuXHJcblx0XHRcdHZhciAkcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdCRwcm9ncmVzc0JhckRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MucHJvZ3Jlc3NCYXJDb2xvcjtcclxuXHJcblx0XHRcdCRwcm9ncmVzc0Jhci5hcHBlbmRDaGlsZCgkcHJvZ3Jlc3NCYXJEaXYpO1xyXG5cdFx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJHByb2dyZXNzQmFyKTtcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bW92ZVByb2dyZXNzKCR0b2FzdCwgc2V0dGluZ3MsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sMzAwKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoIHNldHRpbmdzLnByb2dyZXNzQmFyID09PSBmYWxzZSAmJiBzZXR0aW5ncy50aW1lb3V0ID4gMCl7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5oaWRlKHNldHRpbmdzLCAkdG9hc3QpO1xyXG5cdFx0XHR9LCBzZXR0aW5ncy50aW1lb3V0KTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJHRvYXN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCR0b2FzdEJvZHkuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctYm9keScpO1xyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pbWFnZSkge1xyXG5cdFx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUubWFyZ2luUmlnaHQgPSAoc2V0dGluZ3MuaW1hZ2VXaWR0aCArIDEwKSArICdweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5tYXJnaW5MZWZ0ID0gKHNldHRpbmdzLmltYWdlV2lkdGggKyAxMCkgKyAncHgnO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuaWNvbikge1xyXG5cdFx0XHR2YXIgJGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHRcdFx0XHQkaWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBQTFVHSU5fTkFNRSArICctaWNvbiAnICsgc2V0dGluZ3MuaWNvbik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuaWNvblRleHQpe1xyXG5cdFx0XHRcdCRpY29uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNldHRpbmdzLmljb25UZXh0KSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMzNweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5wYWRkaW5nTGVmdCA9ICczM3B4JztcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuaWNvbkNvbG9yKXtcclxuXHRcdFx0XHQkaWNvbi5zdHlsZS5jb2xvciA9IHNldHRpbmdzLmljb25Db2xvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRpY29uKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XHJcblx0XHRpZiAoc2V0dGluZ3MudGl0bGVDb2xvci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCRzdHJvbmcuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy50aXRsZUNvbG9yO1xyXG5cdFx0fVxyXG5cdFx0JHN0cm9uZy5hcHBlbmRDaGlsZChjcmVhdGVGcmFnRWxlbShzZXR0aW5ncy50aXRsZSkpO1xyXG5cclxuXHRcdHZhciAkcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdFx0aWYgKHNldHRpbmdzLm1lc3NhZ2VDb2xvci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCRwLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MubWVzc2FnZUNvbG9yO1xyXG5cdFx0fVxyXG5cdFx0JHAuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhZ0VsZW0oc2V0dGluZ3MubWVzc2FnZSkpO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLmxheW91dCA+IDEpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRStcIi1sYXlvdXRcIitzZXR0aW5ncy5sYXlvdXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmJhbGxvb24pe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRStcIi1iYWxsb29uXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJHN0cm9uZyk7XHJcblx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRwKTtcclxuXHJcblx0XHR2YXIgJGJ1dHRvbnM7XHJcblx0XHRpZiAoc2V0dGluZ3MuYnV0dG9ucy5sZW5ndGggPiAwKSB7XHJcblxyXG5cdFx0XHQkYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCRidXR0b25zLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWJ1dHRvbnMnKTtcclxuXHJcblx0XHRcdCRwLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzE1cHgnO1xyXG5cclxuXHRcdFx0dmFyIGkgPSAwO1xyXG5cdFx0XHRmb3JFYWNoKHNldHRpbmdzLmJ1dHRvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuXHRcdFx0XHQkYnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVGcmFnRWxlbSh2YWx1ZVswXSkpO1xyXG5cclxuXHRcdFx0XHR2YXIgJGJ0bnMgPSAkYnV0dG9ucy5jaGlsZE5vZGVzO1xyXG5cclxuXHRcdFx0XHQkYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHR2YXIgdHMgPSB2YWx1ZVsxXTtcclxuXHRcdFx0XHRcdHJldHVybiBuZXcgdHModGhhdCwgJHRvYXN0KTsgXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fSk7XHJcblx0XHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJGJ1dHRvbnMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkdG9hc3RCb2R5KTtcclxuXHRcdCR0b2FzdENhcHN1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cdFx0JHRvYXN0Q2Fwc3VsZS5hcHBlbmRDaGlsZCgkdG9hc3QpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBIID0gJHRvYXN0Lm9mZnNldEhlaWdodDtcclxuXHRcdFx0dmFyIHN0eWxlID0gJHRvYXN0LmN1cnJlbnRTdHlsZSB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkdG9hc3QpO1xyXG5cdFx0XHR2YXIgbWFyZ2luVG9wID0gc3R5bGUubWFyZ2luVG9wO1xyXG5cdFx0XHRcdG1hcmdpblRvcCA9IG1hcmdpblRvcC5zcGxpdChcInB4XCIpO1xyXG5cdFx0XHRcdG1hcmdpblRvcCA9IHBhcnNlSW50KG1hcmdpblRvcFswXSk7XHJcblx0XHRcdHZhciBtYXJnaW5Cb3R0b20gPSBzdHlsZS5tYXJnaW5Cb3R0b207XHJcblx0XHRcdFx0bWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tLnNwbGl0KFwicHhcIik7XHJcblx0XHRcdFx0bWFyZ2luQm90dG9tID0gcGFyc2VJbnQobWFyZ2luQm90dG9tWzBdKTtcclxuXHJcblx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLmhlaWdodCA9IChIK21hcmdpbkJvdHRvbSttYXJnaW5Ub3ApKydweCc7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0aWYoc2V0dGluZ3MudGFyZ2V0KXtcclxuXHRcdFx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LDEwMDApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHJcblx0XHR2YXIgcG9zaXRpb24gPSBzZXR0aW5ncy5wb3NpdGlvbixcclxuXHRcdFx0JHdyYXBwZXI7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MudGFyZ2V0KXtcclxuXHJcblx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy50YXJnZXQpO1xyXG5cdFx0XHQkd3JhcHBlci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy10YXJnZXQnKTtcclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy50YXJnZXRGaXJzdCkge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmluc2VydEJlZm9yZSgkdG9hc3RDYXBzdWxlLCAkd3JhcHBlci5maXJzdENoaWxkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkd3JhcHBlci5hcHBlbmRDaGlsZCgkdG9hc3RDYXBzdWxlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRpZiggUE9TSVRJT05TLmluZGV4T2Yoc2V0dGluZ3MucG9zaXRpb24pID09IC0xICl7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW1wiK1BMVUdJTl9OQU1FK1wiXSBJbmNvcnJlY3QgcG9zaXRpb24uXFxuSXQgY2FuIGJlIOKAuiBcIiArIFBPU0lUSU9OUyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihJU01PQklMRSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8PSBNT0JJTEVXSURUSCl7XHJcblx0XHRcdFx0aWYoc2V0dGluZ3MucG9zaXRpb24gPT0gXCJib3R0b21MZWZ0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJib3R0b21SaWdodFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwiYm90dG9tQ2VudGVyXCIpe1xyXG5cdFx0XHRcdFx0cG9zaXRpb24gPSBQTFVHSU5fTkFNRSsnLXdyYXBwZXItYm90dG9tQ2VudGVyJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcExlZnRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcFJpZ2h0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BDZW50ZXJcIil7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci10b3BDZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0cG9zaXRpb24gPSBQTFVHSU5fTkFNRSsnLXdyYXBwZXItY2VudGVyJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cG9zaXRpb24gPSBQTFVHSU5fTkFNRSsnLXdyYXBwZXItJytwb3NpdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgUExVR0lOX05BTUUgKyAnLXdyYXBwZXIuJytwb3NpdGlvbik7XHJcblxyXG5cdFx0XHRpZiAoISR3cmFwcGVyKSB7XHJcblx0XHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXdyYXBwZXInKTtcclxuXHRcdFx0XHQkd3JhcHBlci5jbGFzc0xpc3QuYWRkKHBvc2l0aW9uKTtcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCR3cmFwcGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcExlZnRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcENlbnRlclwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wUmlnaHRcIil7XHJcblx0XHRcdFx0JHdyYXBwZXIuaW5zZXJ0QmVmb3JlKCR0b2FzdENhcHN1bGUsICR3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmFwcGVuZENoaWxkKCR0b2FzdENhcHN1bGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc05hTihzZXR0aW5ncy56aW5kZXgpKSB7XHJcblx0XHRcdCR3cmFwcGVyLnN0eWxlLnpJbmRleCA9IHNldHRpbmdzLnppbmRleDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcIltcIitQTFVHSU5fTkFNRStcIl0gSW52YWxpZCB6SW5kZXguXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHRpbmdzLm9uT3Blbi5hcHBseShudWxsLCBbc2V0dGluZ3MsICR0b2FzdF0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdHZhciBldmVudDtcclxuXHRcdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFBMVUdJTl9OQU1FKyctb3BlbicsIHtkZXRhaWw6IHtjbGFzczogc2V0dGluZ3MuY2xhc3N9fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdFx0XHRldmVudC5pbml0Q3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1vcGVuJywgdHJ1ZSwgdHJ1ZSwge2NsYXNzOiBzZXR0aW5ncy5jbGFzc30pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fSBjYXRjaChleCl7XHJcblx0XHRcdGNvbnNvbGUud2FybihleCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuYW5pbWF0ZUluc2lkZSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctYW5pbWF0ZUluc2lkZScpO1xyXG5cdFx0XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMSA9IDIwMDtcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24yID0gMTAwO1xyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjMgPSAzMDA7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25JbiA9PSBcImJvdW5jZUluTGVmdFwiKXtcclxuXHRcdFx0XHR0aW1lQW5pbWF0aW9uMSA9IDQwMDtcclxuXHRcdFx0XHR0aW1lQW5pbWF0aW9uMiA9IDIwMDtcclxuXHRcdFx0XHR0aW1lQW5pbWF0aW9uMyA9IDQwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkc3Ryb25nLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW4nKTtcclxuXHRcdFx0fSx0aW1lQW5pbWF0aW9uMSk7XHJcblxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCRwLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW4nKTtcclxuXHRcdFx0fSx0aW1lQW5pbWF0aW9uMik7XHJcblxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuaWNvbikge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQkaWNvbi5jbGFzc0xpc3QuYWRkKCdyZXZlYWxJbicpO1xyXG5cdFx0XHRcdH0sdGltZUFuaW1hdGlvbjMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuYnV0dG9ucy5sZW5ndGggPiAwICYmICRidXR0b25zKSB7XHJcblx0XHRcdFx0dmFyIGNvdW50ZXIgPSAxNTA7XHJcblx0XHRcdFx0Zm9yRWFjaCgkYnV0dG9ucy5jaGlsZE5vZGVzLCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmV2ZWFsSW4nKTtcclxuXHRcdFx0XHRcdH0sY291bnRlcik7XHJcblx0XHRcdFx0XHRjb3VudGVyID0gY291bnRlciArIGNvdW50ZXI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoJGJ1dHRvbkNsb3NlKXtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgYnV0dG9uID0gZS50YXJnZXQ7XHJcblx0XHRcdFx0dGhhdC5oaWRlKHNldHRpbmdzLCAkdG9hc3QsICdidXR0b24nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MucGF1c2VPbkhvdmVyKXtcclxuXHRcdFx0XHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1wYXVzZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1wYXVzZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MucmVzZXRPbkhvdmVyKXtcclxuXHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctcmVzZXRlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5kcmFnKXtcclxuXHJcblx0XHRcdGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHJcblx0XHRcdCAgICAkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0YXJ0TW92aW5nKHRoaXMsIHRoYXQsIHNldHRpbmdzLCBlKTtcclxuXHRcdFx0ICAgIH0sIGZhbHNlKTtcclxuXHJcblx0XHRcdCAgICAkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdG9wTW92aW5nKHRoaXMsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICBcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0YXJ0TW92aW5nKHRoaXMsIHRoYXQsIHNldHRpbmdzLCBlKTtcclxuXHRcdFx0ICAgIH0sIGZhbHNlKTtcclxuXHJcblx0XHRcdCAgICAkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RvcE1vdmluZyh0aGlzLCBlKTtcclxuXHRcdFx0ICAgIH0sIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuICRpemlUb2FzdDtcclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2l6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxyXG4vKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwOC4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2VsZW1lbnRzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9nYW1lL3VzZXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcih1c2VyKTtcclxuICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcih1c2VyKSB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xyXG4gICAgICAgIGxldCBwcm9maWxlID0gbmV3IFByb2ZpbGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgICAgIHJhdGluZzogdXNlci5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nIE91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tbG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpdjogcHJvZmlsZURpdlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2FjdGlvbnMvZ2V0VXNlci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDMuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmltcG9ydCBBbmltTW9kYWwgZnJvbSAnLi4vLi4vc3VwcG9ydC9hbmltL2FuaW1Nb2RhbCc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9lbGVtZW50cy9wcm9ncmVzc0Jhcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVBY3Rpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYnRuUGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGxheScpO1xyXG4gICAgICAgIHRoaXMuYnRuQWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFib3V0Jyk7XHJcbiAgICAgICAgdGhpcy5idG5MZWFkZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbGVhZGVyYm9hcmQnKTtcclxuICAgICAgICB0aGlzLmJ0bk1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2xvc2UnKTtcclxuICAgICAgICB0aGlzLmN1cnJNb2RhbCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMubW9kYWxMZWFkZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1sZWFkZXJib2FyZCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxBYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hYm91dCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWdhbWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5Ub1NpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdG8tc2lnbnVwJyk7XHJcbiAgICAgICAgdGhpcy5idG5Ub0xvZ0luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10by1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMuZGl2TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWxvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5kaXZTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LXNpZ251cCcpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRNZW51QnV0dG9uc0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuaW5pdExvZ2luQnV0dG9uc0xpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNZW51QnV0dG9uc0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsRGl2V2l0aEFuaW0oKTtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KG5ldyBVc2VyKCkub2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5tb2RhbExvZ2luKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyck1vZGFsKHRoaXMubW9kYWxMb2dpbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5tb2RhbEdhbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyTW9kYWwodGhpcy5tb2RhbEdhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsRGl2V2l0aEFuaW0oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGl2KHRoaXMubW9kYWxBYm91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyck1vZGFsKHRoaXMubW9kYWxBYm91dCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuTGVhZGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsRGl2V2l0aEFuaW0oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGl2KHRoaXMubW9kYWxMZWFkZXJCb2FyZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyck1vZGFsKHRoaXMubW9kYWxMZWFkZXJCb2FyZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Nb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVNb2RhbERpdldpdGhBbmltKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdExvZ2luQnV0dG9uc0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmJ0blRvU2lnblVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5kaXZTaWduVXApO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVEaXYodGhpcy5kaXZMb2dpbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuVG9Mb2dJbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGl2KHRoaXMuZGl2TG9naW4pO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVEaXYodGhpcy5kaXZTaWduVXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVEaXYoZGl2KSB7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEaXYoZGl2KSB7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbERpdldpdGhBbmltKCkge1xyXG4gICAgICAgIEFuaW1Nb2RhbC5oaWRlKHRoaXMubW9kYWxDb250ZW50KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGl2KHRoaXMubW9kYWxEaXYpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVDdXJyTW9kYWwoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb2RhbERpdldpdGhBbmltKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Rpdih0aGlzLm1vZGFsRGl2KTtcclxuICAgICAgICBBbmltTW9kYWwuc2hvdyh0aGlzLm1vZGFsQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3Vyck1vZGFsKG1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyTW9kYWwgPSBtb2RhbDtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQ3Vyck1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY3Vyck1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9hY3Rpb25zL21lbnVBY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gJy4uL2FjdGlvbnMvY2hlY2tGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmF0dHJzID0gb3B0aW9ucy5hdHRycyB8fCBbXTtcclxuICAgICAgICB0aGlzLmhlbHBfYXR0cnMgPSBvcHRpb25zLmhlbHBfYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5oZWxwX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5hdHRycywgdGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5oZWxwX2F0dHJzLCB0aGlzLmhlbHBfZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbC5vdXRlckhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJldikge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgaWYgKENoZWNrRmllbGRzLmNoZWNrRW1wdHkodGhpcy5lbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgJ2VtcHR5IGZpZWxkJyk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgJycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndmFsaWQnKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkID09PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gQ2hlY2tGaWVsZHMuY2hlY2tMb2dpbih7ZmllbGQ6IHRoaXMuZWwsIGhlbHA6IHRoaXMuaGVscF9lbH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3JlcGVhdHBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IENoZWNrRmllbGRzLmNoZWNrUGFzc3dvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiBwcmV2LmVsLCBoZWxwOiBwcmV2LmhlbHBfZWx9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuaGVscFNldFRleHQodGhpcy5oZWxwX2VsLCAnJyk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRUZXh0KHRoaXMuZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZU9rKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlRXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcigpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU0R1cGxpY2F0ZWREZWNsYXJhdGlvblxyXG4gICAgc2V0RXJyb3IodmFsdWUpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmVsKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCBDaGVja0ZpZWxkcyBmcm9tICcuLi9hY3Rpb25zL2NoZWNrRmllbGRzJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2VsZW1lbnRzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9nYW1lL3VzZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL2VsZW1lbnRzL3Byb2dyZXNzQmFyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2LWxvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZmNvbnRhaW5lci1jb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1wYXNzd29yZC1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLWxvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tdG8tc2lnbnVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRMaXN0ZW5lcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luRGl2LmFwcGVuZENoaWxkKHRoaXMubG9naW5Gb3JtLmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbi1oZWxwJyk7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9naW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgLy9TdWJtaXQgZm9ybVxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWVsZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmxvZ2luRm9ybS5nZXRGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9naW4oYm9keSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbExvZ2luRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWxvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxMb2dpbkRpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2ZpbGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0gbmV3IFByb2ZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogdXNlci5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nIE91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tbG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdjogcHJvZmlsZURpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEVycm9yKCd3cm9uZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvZ3Jlc3NCYXIsIHRoaXMuYnRuTG9naW4ubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnRuTG9naW4ubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRmllbGRzKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZWxlbS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZm9ybXMvbG9naW4uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XHJcbmltcG9ydCBDaGVja0ZpZWxkcyBmcm9tICcuLi9hY3Rpb25zL2NoZWNrRmllbGRzJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9lbGVtZW50cy9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCBJemlUb2FzdCBmcm9tICdpeml0b2FzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXBGb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNpZ251cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXYtc2lnbnVwJyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXYtbG9naW4nKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAndGV4dC1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmY29udGFpbmVyLWNvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdMb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLWxvZ2luLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiAncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1wYXNzd29yZC1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUmVwZWF0IHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1yZXBlYXRwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVwZWF0cGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdyZXBlYXRwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXJlcGVhdHBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JlZ2lzdHJhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi1zaWdudXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2cgSW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXRvLWxvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRGl2LmFwcGVuZENoaWxkKHRoaXMuc2lnbnVwRm9ybS5lbCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1wYXNzd29yZCcpO1xyXG4gICAgICAgIHRoaXMucmVwZWF0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1yZXBlYXRwYXNzd29yZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXBhc3N3b3JkLWhlbHAnKTtcclxuICAgICAgICB0aGlzLnJlcGVhdFBhc3N3b3JkSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXJlcGVhdHBhc3N3b3JkLWhlbHAnKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5TaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNpZ251cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL1N1Ym1pdCBmb3JtXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRmllbGRzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5zaWdudXBGb3JtLmdldEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5zaWdudXAoYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTG9naW4oKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVPayh0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlcnIucmVzdWx0ID09PSAnbm8tY29ubicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2NoZWNrIGNvbm5lY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2xvZ2luIHVzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICB0aGlzLmJ0blNpZ25VcC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuU2lnblVwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2dyZXNzQmFyLCB0aGlzLmJ0blNpZ25VcC5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVByb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNpZ25VcC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5TaWduVXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ0blNpZ25VcC5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMubG9naW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgSXppVG9hc3Quc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bGx5IHJlZ2lzdHJhdGlvbicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wUmlnaHQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW0udmFsaWRhdGUocHJldik7XHJcbiAgICAgICAgICAgIHByZXYgPSBlbGVtO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZm9ybXMvc2lnbnVwLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi8uLi9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vZWxlbWVudHMvcHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRTb3VyY2UgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3dpdGggdGl0bGVzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey93aXRofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ7e2NvbnRyb2wuY2xhc3N9fVwiIGlkPVwie3tjb250cm9sLmlkfX1cIj57e2NvbnRyb2wudGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiBsZWFkZXJib2FyZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbGVhZGVyYm9hcmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+e3tsb2dpbn19PHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7cmF0aW5nfX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19YDtcclxuICAgICAgICBsZXQgbGVhZGVyQm9hcmRUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShsZWFkZXJCb2FyZFNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIGxlYWRlckJvYXJkVGVtcGxhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExlYWRlckJvYXJkKCkge1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKGxlYWRlckJvYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0TGVhZGVycygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVhZGVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSByZXNwb25zZS5sZWFkZXJzO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxlYWRlckJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucmVuZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgcGxheWVyczonLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGVyYm9hcmQ6IGFycixcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWZyZXNoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWZyZXNoLWxiJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UmVmcmVzaExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBsZWFkZXJCb2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05vIGNvbm5lY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycjoge30sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JlZnJlc2gnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWZyZXNoLWxiJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbml0UmVmcmVzaExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlZnJlc2hMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgcmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWxiJyk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExlYWRlckJvYXJkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc0Jhcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ldyBQcm9ncmVzc0JhcigpLnJlbmRlcigpKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDEyLjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbU1vZGFse1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3coZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtaGlkZScpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgaWYoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2FuaW0vYW5pbU1vZGFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9