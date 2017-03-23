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
            timeOut = 700;
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

        console.log(event.target);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzE2NTE1NDFmOGRiZDQwZDQ5OWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvYmFzZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L3RlbXBsYXRlcy9sZWFkZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9hbmltL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9nYW1lL2dhbWVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9nYW1lL3Byb2ZpbGVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L2Fib3V0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvbWVudS9sZWFkZXJib2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL21lbnUvbG9naW5WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L21lbnVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3cy9tZW51L3NpZ251cFZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUztBQUNwQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EseUJB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QVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFFQUFxRTtBQUMzRztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0Esc0NBQXNDLG1FQUFtRTtBQUN6RztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxzREFBc0Q7QUFDdEQsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDO0FBQzlDLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFNBQVMsdUJBQXVCO0FBQ3BGLEtBQUs7QUFDTDtBQUNBLDhEQUE4RCxzQkFBc0I7QUFDcEY7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7O0FDektBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MTY1MTU0MWY4ZGJkNDBkNDk5YyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgSHR0cCBmcm9tICcuLi9odHRwL2h0dHAnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cCgpO1xyXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5odHRwLkJhc2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcigpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvZ2V0YDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIG51bGwsICdHRVQnLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihib2R5KSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL2xvZ2luYDtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIGhlYWRlcnMsICdQT1NUJywgYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbnVwKGJvZHkpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvc2lnbnVwYDtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0KGFkZHJlc3MsIGhlYWRlcnMsICdQT1NUJywgYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtyZXN1bHQ6ICdzdWNjZXNzJ30pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFlKXtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3Jlc3VsdDogJ25vLWNvbm4nfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7cmVzdWx0OiAnZXJyb3InfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExlYWRlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGAke3RoaXMudXJsfS91c2VyL2xlYWRlcnNgO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgbnVsbCwgJ0dFVCcsIG51bGwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dvdXRgO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVJlcXVlc3QoYWRkcmVzcywgbnVsbCwgJ0dFVCcsIG51bGwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlUmVxdWVzdChhZGRyZXNzLCBoZWFkZXJzID0ge30sIHR5cGUgPSAnR0VUJywgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgaHR0cCA9IHRoaXMuaHR0cDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBodHRwLnJlcXVlc3QoYWRkcmVzcywgaGVhZGVycywgdHlwZSwgYm9keSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnMjAwIE9LJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L3NlcnZpY2UvdXNlclNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxNy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JzQtdGC0L7QtCDQv9C+0LrQsNC30YvQstCw0LXRgiDQuNC70Lgg0L/RgNGP0YfQtdGCIFZpZXdcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlVmlldygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9iYXNlVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA3LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvYWRlcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9wcm9ncmVzc0Jhci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFVzZXIuX19pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXNlci5fX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VyLl9faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvYmoodXNlcikge1xyXG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9nYW1lL3VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDUuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChIdHRwLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBIdHRwLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLl9iYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSAnaHR0cHM6Ly90cC1zZXJ2ZXItamF2YS5oZXJva3VhcHAuY29tL2FwaSc7XHJcblxyXG4gICAgICAgIEh0dHAuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlVXJsKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QoYWRkcmVzcyA9ICcnLCBoZWFkZXJzID0ge30sIHR5cGUgPSAnR0VUJywgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGZldGNoT2JqID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IHR5cGUsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgZmV0Y2hPYmouYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZmV0Y2goYWRkcmVzcywgZmV0Y2hPYmopLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIgfHwgZXJyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tGaWVsZHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfY2hlY2tMYXRpbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvW9CwLdGP0JAt0K/RkdCBXSsvKSA9PT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tMb2dpbihvYmopIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0xhdGluKG9iai5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdPbmx5IExhdGluJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5maWVsZC52YWx1ZS5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnNCAtIG1pbiBsZW5ndGgnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRFcnIob2JqLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKG9iai5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqLmhlbHAudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGAke29iai5oZWxwLnRleHRDb250ZW50fSwke2l0ZW0uZXJyX3RleHR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5oZWxwLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRPayhvYmouZmllbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrUGFzc0xlbmd0aCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gODtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrUGFzc0VxdWFscyh2YWx1ZTEsIHZhbHVlMikge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGNoZWNrUGFzc3dvcmQob2JqMSwgb2JqMikge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Bhc3NMZW5ndGgob2JqMS5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJzggLSBtaW4gbGVuZ3RoJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMS5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoxLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Bhc3NFcXVhbHMob2JqMS5maWVsZC52YWx1ZSwgb2JqMi5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJfdGV4dDogJ1Bhc3N3b3JkcyBub3QgZXF1YWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogb2JqMS5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBvYmoxLmhlbHBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnUGFzc3dvcmRzIG5vdCBlcXVhbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBvYmoyLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IG9iajIuaGVscFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iajEuaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIG9iajIuaGVscC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0RXJyKGl0ZW0uZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkUmVtb3ZlT2soaXRlbS5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5oZWxwLnRleHRDb250ZW50ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWxwLnRleHRDb250ZW50ID0gaXRlbS5lcnJfdGV4dDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVscC50ZXh0Q29udGVudCA9IGAke2l0ZW0uaGVscC50ZXh0Q29udGVudH0uJHtpdGVtLmVycl90ZXh0fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqMS5maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRPayhvYmoyLmZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscFNldFRleHQoZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0VGV4dChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRFcnIoZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXRfX2Vycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkUmVtb3ZlRXJyKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X19lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFNldE9rKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0X19vaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFJlbW92ZU9rKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X19vaycpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2FjdGlvbnMvY2hlY2tGaWVsZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge2RhdGE6IHt9fSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5kYXRhLmZvcm0uYXR0cnMsIHRoaXMuZWwpO1xyXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5kYXRhLnRpdGxlLmF0dHJzLCBoMyk7XHJcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRpdGxlLnRleHQ7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmZpZWxkcyA9IHRoaXMuX2dldEZpZWxkcygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLl9nZXRDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkc0FwcGVuZFRvKHRoaXMuZmllbGRzLCB0aGlzLmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udHJvbHNBcHBlbmRUbyh0aGlzLmNvbnRyb2xzLCB0aGlzLmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZpZWxkcygpIHtcclxuICAgICAgICBsZXQge2ZpZWxkcyA9IFtdfT10aGlzLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5wdXQoZGF0YSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZmllbGRzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uaGVscF9lbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY29udHJvbHNBcHBlbmRUbyhhcnJheSwgZWxlbSkge1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaXRlbS5lbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q29udHJvbHMoKSB7XHJcbiAgICAgICAgbGV0IHtjb250cm9scyA9IFtdfT10aGlzLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b24oZGF0YSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtRGF0YSgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsLmVsZW1lbnRzO1xyXG4gICAgICAgIGxldCBmaWVsZHMgPSB7fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudHNbZWxlbWVudF0ubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudHNbZWxlbWVudF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3N1cHBvcnQvcm91dGVyL3JvdXRlcic7XHJcblxyXG5sZXQgcm91dGVyID0gbmV3IFJvdXRlcih3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICByb3V0ZXIuX3NldEN1cnJWaWV3KGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxufTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxyXG4gKiBpemlUb2FzdCB8IHYxLjEuMFxyXG4gKiBodHRwOi8vaXppdG9hc3QubWFyY2Vsb2RvbGNlLmNvbVxyXG4gKiBieSBNYXJjZWxvIERvbGNlLlxyXG4gKi8gXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeShyb290KSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cm9vdC5pemlUb2FzdCA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fVxyXG59KSh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly9cclxuXHQvLyBWYXJpYWJsZXNcclxuXHQvL1xyXG5cdHZhciAkaXppVG9hc3QgPSB7fSxcclxuXHRcdFBMVUdJTl9OQU1FID0gJ2l6aVRvYXN0JyxcclxuXHRcdEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXHJcblx0XHRJU01PQklMRSA9ICgvTW9iaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgPyB0cnVlIDogZmFsc2UsXHJcblx0XHRJU0NIUk9NRSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvciksXHJcblx0XHRJU0ZJUkVGT1ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnLFxyXG5cdFx0QUNDRVBUU1RPVUNIID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG5cdFx0UE9TSVRJT05TID0gWydib3R0b21SaWdodCcsJ2JvdHRvbUxlZnQnLCdib3R0b21DZW50ZXInLCd0b3BSaWdodCcsJ3RvcExlZnQnLCd0b3BDZW50ZXInLCdjZW50ZXInXSxcclxuXHRcdFRIRU1FUyA9IHtcclxuXHRcdFx0aW5mbzoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdFx0XHRpY29uOiBcImljby1pbmZvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2Vzczoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28tY2hlY2tcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0d2FybmluZzoge1xyXG5cdFx0XHRcdGNvbG9yOiBcInllbGxvd1wiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLXdhcm5pbmdcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJyZWRcIixcclxuXHRcdFx0XHRpY29uOiBcImljby1lcnJvclwiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0TU9CSUxFV0lEVEggPSA1NjgsXHJcblx0XHRDT05GSUcgPSB7fTtcclxuXHJcblx0Ly8gRGVmYXVsdCBzZXR0aW5nc1xyXG5cdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdGNsYXNzOiAnJyxcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdHRpdGxlQ29sb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0XHRtZXNzYWdlQ29sb3I6ICcnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnJyxcclxuXHRcdGNvbG9yOiAnJywgLy8gYmx1ZSwgcmVkLCBncmVlbiwgeWVsbG93XHJcblx0XHRpY29uOiAnJyxcclxuXHRcdGljb25UZXh0OiAnJyxcclxuXHRcdGljb25Db2xvcjogJycsXHJcblx0XHRpbWFnZTogJycsXHJcblx0XHRpbWFnZVdpZHRoOiA1MCxcclxuXHRcdHppbmRleDogOTk5OTksXHJcblx0XHRsYXlvdXQ6IDEsXHJcblx0XHRiYWxsb29uOiBmYWxzZSxcclxuXHRcdGNsb3NlOiB0cnVlLFxyXG5cdFx0cnRsOiBmYWxzZSxcclxuXHRcdHBvc2l0aW9uOiAnYm90dG9tUmlnaHQnLCAvLyBib3R0b21SaWdodCwgYm90dG9tTGVmdCwgdG9wUmlnaHQsIHRvcExlZnQsIHRvcENlbnRlciwgYm90dG9tQ2VudGVyLCBjZW50ZXJcclxuXHRcdHRhcmdldDogJycsXHJcblx0XHR0YXJnZXRGaXJzdDogdHJ1ZSxcclxuXHRcdHRpbWVvdXQ6IDUwMDAsXHJcblx0XHRkcmFnOiB0cnVlLFxyXG5cdFx0cGF1c2VPbkhvdmVyOiB0cnVlLFxyXG5cdFx0cmVzZXRPbkhvdmVyOiBmYWxzZSxcclxuXHRcdHByb2dyZXNzQmFyOiB0cnVlLFxyXG5cdFx0cHJvZ3Jlc3NCYXJDb2xvcjogJycsXHJcblx0XHRhbmltYXRlSW5zaWRlOiB0cnVlLFxyXG5cdFx0YnV0dG9uczoge30sXHJcblx0XHR0cmFuc2l0aW9uSW46ICdmYWRlSW5VcCcsIC8vIGJvdW5jZUluTGVmdCwgYm91bmNlSW5SaWdodCwgYm91bmNlSW5VcCwgYm91bmNlSW5Eb3duLCBmYWRlSW4sIGZhZGVJbkRvd24sIGZhZGVJblVwLCBmYWRlSW5MZWZ0LCBmYWRlSW5SaWdodCwgZmxpcEluWFxyXG5cdFx0dHJhbnNpdGlvbk91dDogJ2ZhZGVPdXQnLCAvLyBmYWRlT3V0LCBmYWRlT3V0VXAsIGZhZGVPdXREb3duLCBmYWRlT3V0TGVmdCwgZmFkZU91dFJpZ2h0LCBmbGlwT3V0WFxyXG5cdFx0dHJhbnNpdGlvbkluTW9iaWxlOiAnZmFkZUluVXAnLFxyXG5cdFx0dHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXREb3duJyxcclxuXHRcdG9uT3BlbjogZnVuY3Rpb24gKCkge30sXHJcblx0XHRvbkNsb3NlOiBmdW5jdGlvbiAoKSB7fVxyXG5cdH07XHJcblxyXG5cdC8vXHJcblx0Ly8gTWV0aG9kc1xyXG5cdC8vXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQb2x5ZmlsbCBmb3IgcmVtb3ZlKCkgbWV0aG9kXHJcblx0ICovXHJcblx0aWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XHJcblx0ICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG5cdCAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgc2ltcGxlIGZvckVhY2goKSBpbXBsZW1lbnRhdGlvbiBmb3IgQXJyYXlzLCBPYmplY3RzIGFuZCBOb2RlTGlzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBjb2xsZWN0aW9uIENvbGxlY3Rpb24gb2YgaXRlbXMgdG8gaXRlcmF0ZVxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZXJhdGlvblxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBzY29wZSBPYmplY3QvTm9kZUxpc3QvQXJyYXkgdGhhdCBmb3JFYWNoIGlzIGl0ZXJhdGluZyBvdmVyIChha2EgYHRoaXNgKVxyXG5cdCAqL1xyXG5cdHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBzY29wZSkge1xyXG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb2xsZWN0aW9uKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuXHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBjb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb2xsZWN0aW9uLCBwcm9wKSkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltwcm9wXSwgcHJvcCwgY29sbGVjdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihjb2xsZWN0aW9uKXtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogTWVyZ2UgZGVmYXVsdHMgd2l0aCB1c2VyIG9wdGlvbnNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBEZWZhdWx0IHNldHRpbmdzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBvcHRpb25zXHJcblx0ICogQHJldHVybnMge09iamVjdH0gTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xyXG5cdCAqL1xyXG5cdHZhciBleHRlbmQgPSBmdW5jdGlvbiAoZGVmYXVsdHMsIG9wdGlvbnMpIHtcclxuXHRcdHZhciBleHRlbmRlZCA9IHt9O1xyXG5cdFx0Zm9yRWFjaChkZWZhdWx0cywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gZGVmYXVsdHNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdGZvckVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGV4dGVuZGVkO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBmcmFnbWVudCBET00gZWxlbWVudHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBjcmVhdGVGcmFnRWxlbSA9IGZ1bmN0aW9uKGh0bWxTdHIpIHtcclxuXHRcdHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0XHR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0ZW1wLmlubmVySFRNTCA9IGh0bWxTdHI7XHJcblx0XHR3aGlsZSAodGVtcC5maXJzdENoaWxkKSB7XHJcblx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodGVtcC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmcmFnO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiBpcyBhIGNvbG9yXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgaXNDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKXtcclxuXHRcdGlmKCBjb2xvci5zdWJzdHJpbmcoMCwxKSA9PSBcIiNcIiB8fCBjb2xvci5zdWJzdHJpbmcoMCwzKSA9PSBcInJnYlwiIHx8IGNvbG9yLnN1YnN0cmluZygwLDMpID09IFwiaHNsXCIgKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERyYWcgbWV0aG9kIG9mIHRvYXN0c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGRyYWcgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgXHJcblx0ICAgIHJldHVybiB7XHJcblx0ICAgICAgICBtb3ZlOiBmdW5jdGlvbih0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCB4cG9zKSB7XHJcblxyXG5cdCAgICAgICAgXHR2YXIgb3BhY2l0eSxcclxuXHQgICAgICAgIFx0XHRvcGFjaXR5UmFuZ2UgPSAwLjMsXHJcblx0ICAgICAgICBcdFx0ZGlzdGFuY2UgPSAxODA7XHJcblx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyt4cG9zICsgJ3B4KSc7XHJcblxyXG5cdCAgICAgICAgICAgIGlmKHhwb3MgPiAwKXtcclxuXHQgICAgICAgICAgICBcdG9wYWNpdHkgPSAoZGlzdGFuY2UteHBvcykgLyBkaXN0YW5jZTtcclxuXHQgICAgICAgICAgICBcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5oaWRlKGV4dGVuZChzZXR0aW5ncywgeyB0cmFuc2l0aW9uT3V0OiAnZmFkZU91dFJpZ2h0JywgdHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXRSaWdodCcgfSksIHRvYXN0LCAnZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgXHRvcGFjaXR5ID0gKGRpc3RhbmNlK3hwb3MpIC8gZGlzdGFuY2U7XHJcblx0ICAgICAgICAgICAgXHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UuaGlkZShleHRlbmQoc2V0dGluZ3MsIHsgdHJhbnNpdGlvbk91dDogJ2ZhZGVPdXRMZWZ0JywgdHJhbnNpdGlvbk91dE1vYmlsZTogJ2ZhZGVPdXRMZWZ0JyB9KSwgdG9hc3QsICdkcmFnJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cdFx0XHJcblx0XHRcdFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblxyXG5cdFx0XHRcdFx0aWYoSVNDSFJPTUUgfHwgSVNGSVJFRk9YKVxyXG5cdFx0XHRcdFx0XHR0b2FzdC5zdHlsZS5sZWZ0ID0geHBvcysncHgnO1xyXG5cclxuXHRcdFx0XHRcdHRvYXN0LnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlSYW5nZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3RvcE1vdmluZyh0b2FzdCwgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHN0YXJ0TW92aW5nOiBmdW5jdGlvbih0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBlKSB7XHJcblxyXG5cdCAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICB2YXIgcG9zWCA9ICgoQUNDRVBUU1RPVUNIKSA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYKSxcclxuXHQgICAgICAgICAgICAgICAgdG9hc3RMZWZ0ID0gdG9hc3Quc3R5bGUudHJhbnNmb3JtLnJlcGxhY2UoJ3B4KScsICcnKTtcclxuXHQgICAgICAgICAgICAgICAgdG9hc3RMZWZ0ID0gdG9hc3RMZWZ0LnJlcGxhY2UoJ3RyYW5zbGF0ZVgoJywgJycpO1xyXG5cdCAgICAgICAgICAgIHZhciBvZmZzZXRYID0gcG9zWCAtIHRvYXN0TGVmdDtcclxuXHJcblx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKTtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBwb3NYID0gZS50b3VjaGVzWzBdLmNsaWVudFgsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxYID0gcG9zWCAtIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWcubW92ZSh0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBmaW5hbFgpO1xyXG5cdCAgICAgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHBvc1ggPSBlLmNsaWVudFgsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxYID0gcG9zWCAtIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWcubW92ZSh0b2FzdCwgaW5zdGFuY2UsIHNldHRpbmdzLCBmaW5hbFgpO1xyXG5cdCAgICAgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgc3RvcE1vdmluZzogZnVuY3Rpb24odG9hc3QsIGUpIHtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7fTtcclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuNHMgZWFzZSwgb3BhY2l0eSAwLjRzIGVhc2VcIjtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcclxuXHRcdFx0XHR0b2FzdC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcblx0XHRcdFx0fSwgNDAwKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0fSgpO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRG8gdGhlIGNhbGN1bGF0aW9uIHRvIG1vdmUgdGhlIHByb2dyZXNzIGJhclxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIG1vdmVQcm9ncmVzcyA9IGZ1bmN0aW9uKHRvYXN0LCBzZXR0aW5ncywgY2FsbGJhY2spe1xyXG5cclxuXHRcdHZhciBpc1BhdXNlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlzUmVzZXRlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlzQ2xvc2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdGltZXJUaW1lb3V0ID0gbnVsbDtcclxuXHRcdHZhciBlbGVtID0gdG9hc3QucXVlcnlTZWxlY3RvcihcIi5cIitQTFVHSU5fTkFNRStcIi1wcm9ncmVzc2JhciBkaXZcIik7XHJcblx0XHR2YXIgcHJvZ3Jlc3NCYXIgPSB7XHJcblx0XHRcdGhpZGVFdGE6IG51bGwsXHJcblx0XHRcdG1heEhpZGVUaW1lOiBudWxsLFxyXG5cdFx0XHRjdXJyZW50VGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbigpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpc1BhdXNlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLXBhdXNlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdGlzUmVzZXRlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRpc0Nsb3NlZCA9IHRvYXN0LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSsnLWNsb3NlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRpZihpc1Jlc2V0ZWQpe1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0XHRcdFx0bW92ZVByb2dyZXNzKHRvYXN0LCBzZXR0aW5ncywgY2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoaXNDbG9zZWQpe1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctY2xvc2VkJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZighaXNQYXVzZWQgJiYgIWlzUmVzZXRlZCAmJiAhaXNDbG9zZWQpe1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUgPSBwcm9ncmVzc0Jhci5jdXJyZW50VGltZSsxMDtcclxuXHRcdFx0XHRcdHZhciBwZXJjZW50YWdlID0gKChwcm9ncmVzc0Jhci5oaWRlRXRhIC0gKHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lKSkgLyBwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSkgKiAxMDA7XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gcGVyY2VudGFnZSArICclJztcclxuXHJcblx0XHRcdFx0XHRpZihNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpIDwgMCB8fCB0eXBlb2YgdG9hc3QgIT0gJ29iamVjdCcpe1xyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0aWYgKHNldHRpbmdzLnRpbWVvdXQgPiAwKSB7XHJcblx0XHRcdHByb2dyZXNzQmFyLm1heEhpZGVUaW1lID0gcGFyc2VGbG9hdChzZXR0aW5ncy50aW1lb3V0KTtcclxuXHRcdFx0cHJvZ3Jlc3NCYXIuaGlkZUV0YSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWU7XHJcblx0XHRcdHRpbWVyVGltZW91dCA9IHNldEludGVydmFsKHByb2dyZXNzQmFyLnVwZGF0ZVByb2dyZXNzLCAxMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveSB0aGUgY3VycmVudCBpbml0aWFsaXphdGlvbi5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Zm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJytQTFVHSU5fTkFNRSsnLXdyYXBwZXInKSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrUExVR0lOX05BTUUpLCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xyXG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihQTFVHSU5fTkFNRSsnLW9wZW4nLCB7fSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihQTFVHSU5fTkFNRSsnLWNsb3NlJywge30sIGZhbHNlKTtcclxuXHJcblx0XHQvLyBSZXNldCB2YXJpYWJsZXNcclxuXHRcdENPTkZJRyA9IHt9O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgUGx1Z2luXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHQkaXppVG9hc3Quc2V0dGluZ3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdC8vIERlc3Ryb3kgYW55IGV4aXN0aW5nIGluaXRpYWxpemF0aW9uc1xyXG5cdFx0JGl6aVRvYXN0LmRlc3Ryb3koKTtcclxuXHJcblx0XHRDT05GSUcgPSBvcHRpb25zO1xyXG5cdFx0ZGVmYXVsdHMgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsZGluZyB0aGVtZXMgZnVuY3Rpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0Zm9yRWFjaChUSEVNRVMsIGZ1bmN0aW9uICh0aGVtZSwgbmFtZSkge1xyXG5cclxuXHRcdCRpemlUb2FzdFtuYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoQ09ORklHLCBvcHRpb25zIHx8IHt9KTtcclxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQodGhlbWUsIHNldHRpbmdzIHx8IHt9KTtcclxuXHJcblx0XHRcdHRoaXMuc2hvdyhzZXR0aW5ncyk7XHJcblx0XHR9O1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb3NlIHRoZSBzcGVjaWZpYyBUb2FzdFxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LmhpZGUgPSBmdW5jdGlvbiAob3B0aW9ucywgJHRvYXN0LCBjbG9zZWRCeSkge1xyXG5cclxuXHRcdHZhciBzZXR0aW5ncyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdGNsb3NlZEJ5ID0gY2xvc2VkQnkgfHwgZmFsc2U7XHJcblxyXG5cdFx0aWYodHlwZW9mICR0b2FzdCAhPSAnb2JqZWN0Jyl7XHJcblx0XHRcdCR0b2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJHRvYXN0KTtcclxuXHRcdH1cclxuXHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctY2xvc2VkJyk7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluIHx8IHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbik7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uT3V0TW9iaWxlKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25PdXRNb2JpbGUpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uT3V0KVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25PdXQpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIEggPSAkdG9hc3QucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gSCsncHgnO1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHJcblx0XHRpZighSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPiBNT0JJTEVXSURUSCl7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcwLjJzJztcclxuXHRcdH1cclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuXHRcdFx0fSwxMDAwKTtcclxuXHRcdH0sMjAwKTtcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY2xhc3Mpe1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBldmVudDtcclxuXHRcdFx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLWNsb3NlJywge2RldGFpbDoge2NsYXNzOiBzZXR0aW5ncy5jbGFzc319KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdFx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLWNsb3NlJywgdHJ1ZSwgdHJ1ZSwge2NsYXNzOiBzZXR0aW5ncy5jbGFzc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdFx0fSBjYXRjaChleCl7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKGV4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHR5cGVvZiBzZXR0aW5ncy5vbkNsb3NlICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0c2V0dGluZ3Mub25DbG9zZS5hcHBseShudWxsLCBbc2V0dGluZ3MsICR0b2FzdCwgY2xvc2VkQnldKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYW5kIHNob3cgdGhlIFRvYXN0XHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHQkaXppVG9hc3Quc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIE1lcmdlIHVzZXIgb3B0aW9ucyB3aXRoIGRlZmF1bHRzXHJcblx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoQ09ORklHLCBvcHRpb25zIHx8IHt9KTtcclxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcblx0XHR2YXIgJHRvYXN0Q2Fwc3VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdCR0b2FzdENhcHN1bGUuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRStcIi1jYXBzdWxlXCIpO1xyXG5cclxuXHRcdHZhciAkdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSk7XHJcblxyXG5cdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUubGVuZ3RoPjApXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25Jbi5sZW5ndGg+MClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1ydGwnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY29sb3IubGVuZ3RoID4gMCkgeyAvLyMsIHJnYiwgcmdiYSwgaHNsXHJcblx0XHRcdFxyXG5cdFx0XHRpZiggaXNDb2xvcihzZXR0aW5ncy5jb2xvcikgKXtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNvbG9yO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctY29sb3ItJytzZXR0aW5ncy5jb2xvcik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkdG9hc3Quc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmJhY2tncm91bmRDb2xvcjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuY2xhc3Mpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmltYWdlKSB7XHJcblx0XHRcdHZhciAkY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkY292ZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctY292ZXInKTtcclxuXHRcdFx0JGNvdmVyLnN0eWxlLndpZHRoID0gc2V0dGluZ3MuaW1hZ2VXaWR0aCArIFwicHhcIjtcclxuXHRcdFx0JGNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHNldHRpbmdzLmltYWdlICsgJyknO1xyXG5cdFx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJGNvdmVyKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJGJ1dHRvbkNsb3NlO1xyXG5cdFx0aWYoc2V0dGluZ3MuY2xvc2Upe1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctY2xvc2UnKTtcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRidXR0b25DbG9zZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMzBweFwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjMwcHhcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5wcm9ncmVzc0Jhcikge1xyXG5cclxuXHRcdFx0dmFyICRwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHByb2dyZXNzQmFyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXByb2dyZXNzYmFyJyk7XHJcblxyXG5cdFx0XHR2YXIgJHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHQkcHJvZ3Jlc3NCYXJEaXYuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLnByb2dyZXNzQmFyQ29sb3I7XHJcblxyXG5cdFx0XHQkcHJvZ3Jlc3NCYXIuYXBwZW5kQ2hpbGQoJHByb2dyZXNzQmFyRGl2KTtcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRwcm9ncmVzc0Jhcik7XHJcblx0XHRcdFxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG1vdmVQcm9ncmVzcygkdG9hc3QsIHNldHRpbmdzLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0dGhhdC5oaWRlKHNldHRpbmdzLCAkdG9hc3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LDMwMCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCBzZXR0aW5ncy5wcm9ncmVzc0JhciA9PT0gZmFsc2UgJiYgc2V0dGluZ3MudGltZW91dCA+IDApe1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0KTtcclxuXHRcdFx0fSwgc2V0dGluZ3MudGltZW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICR0b2FzdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3RCb2R5LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWJvZHknKTtcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuaW1hZ2UpIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gKHNldHRpbmdzLmltYWdlV2lkdGggKyAxMCkgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUubWFyZ2luTGVmdCA9IChzZXR0aW5ncy5pbWFnZVdpZHRoICsgMTApICsgJ3B4JztcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmljb24pIHtcclxuXHRcdFx0dmFyICRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblx0XHRcdFx0JGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgUExVR0lOX05BTUUgKyAnLWljb24gJyArIHNldHRpbmdzLmljb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb25UZXh0KXtcclxuXHRcdFx0XHQkaWNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZXR0aW5ncy5pY29uVGV4dCkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzMzcHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0b2FzdEJvZHkuc3R5bGUucGFkZGluZ0xlZnQgPSAnMzNweCc7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb25Db2xvcil7XHJcblx0XHRcdFx0JGljb24uc3R5bGUuY29sb3IgPSBzZXR0aW5ncy5pY29uQ29sb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkaWNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xyXG5cdFx0aWYgKHNldHRpbmdzLnRpdGxlQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkc3Ryb25nLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MudGl0bGVDb2xvcjtcclxuXHRcdH1cclxuXHRcdCRzdHJvbmcuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhZ0VsZW0oc2V0dGluZ3MudGl0bGUpKTtcclxuXHJcblx0XHR2YXIgJHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdGlmIChzZXR0aW5ncy5tZXNzYWdlQ29sb3IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkcC5zdHlsZS5jb2xvciA9IHNldHRpbmdzLm1lc3NhZ2VDb2xvcjtcclxuXHRcdH1cclxuXHRcdCRwLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHNldHRpbmdzLm1lc3NhZ2UpKTtcclxuXHJcblx0XHRpZihzZXR0aW5ncy5sYXlvdXQgPiAxKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItbGF5b3V0XCIrc2V0dGluZ3MubGF5b3V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5iYWxsb29uKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItYmFsbG9vblwiKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRzdHJvbmcpO1xyXG5cdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkcCk7XHJcblxyXG5cdFx0dmFyICRidXR0b25zO1xyXG5cdFx0aWYgKHNldHRpbmdzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0JGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1idXR0b25zJyk7XHJcblxyXG5cdFx0XHQkcC5zdHlsZS5tYXJnaW5SaWdodCA9ICcxNXB4JztcclxuXHJcblx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0Zm9yRWFjaChzZXR0aW5ncy5idXR0b25zLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XHJcblx0XHRcdFx0JGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhZ0VsZW0odmFsdWVbMF0pKTtcclxuXHJcblx0XHRcdFx0dmFyICRidG5zID0gJGJ1dHRvbnMuY2hpbGROb2RlcztcclxuXHJcblx0XHRcdFx0JGJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0dmFyIHRzID0gdmFsdWVbMV07XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRzKHRoYXQsICR0b2FzdCk7IFxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkdG9hc3RCb2R5LmFwcGVuZENoaWxkKCRidXR0b25zKTtcclxuXHRcdH1cclxuXHJcblx0XHQkdG9hc3QuYXBwZW5kQ2hpbGQoJHRvYXN0Qm9keSk7XHJcblx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHRcdCR0b2FzdENhcHN1bGUuYXBwZW5kQ2hpbGQoJHRvYXN0KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgSCA9ICR0b2FzdC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdHZhciBzdHlsZSA9ICR0b2FzdC5jdXJyZW50U3R5bGUgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRvYXN0KTtcclxuXHRcdFx0dmFyIG1hcmdpblRvcCA9IHN0eWxlLm1hcmdpblRvcDtcclxuXHRcdFx0XHRtYXJnaW5Ub3AgPSBtYXJnaW5Ub3Auc3BsaXQoXCJweFwiKTtcclxuXHRcdFx0XHRtYXJnaW5Ub3AgPSBwYXJzZUludChtYXJnaW5Ub3BbMF0pO1xyXG5cdFx0XHR2YXIgbWFyZ2luQm90dG9tID0gc3R5bGUubWFyZ2luQm90dG9tO1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbS5zcGxpdChcInB4XCIpO1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KG1hcmdpbkJvdHRvbVswXSk7XHJcblxyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5oZWlnaHQgPSAoSCttYXJnaW5Cb3R0b20rbWFyZ2luVG9wKSsncHgnO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdGlmKHNldHRpbmdzLnRhcmdldCl7XHJcblx0XHRcdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwxMDAwKTtcclxuXHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0dmFyIHBvc2l0aW9uID0gc2V0dGluZ3MucG9zaXRpb24sXHJcblx0XHRcdCR3cmFwcGVyO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLnRhcmdldCl7XHJcblxyXG5cdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MudGFyZ2V0KTtcclxuXHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctdGFyZ2V0Jyk7XHJcblxyXG5cdFx0XHRpZiAoc2V0dGluZ3MudGFyZ2V0Rmlyc3QpIHtcclxuXHRcdFx0XHQkd3JhcHBlci5pbnNlcnRCZWZvcmUoJHRvYXN0Q2Fwc3VsZSwgJHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuYXBwZW5kQ2hpbGQoJHRvYXN0Q2Fwc3VsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0aWYoIFBPU0lUSU9OUy5pbmRleE9mKHNldHRpbmdzLnBvc2l0aW9uKSA9PSAtMSApe1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltcIitQTFVHSU5fTkFNRStcIl0gSW5jb3JyZWN0IHBvc2l0aW9uLlxcbkl0IGNhbiBiZSDigLogXCIgKyBQT1NJVElPTlMpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoSVNNT0JJTEUgfHwgd2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHRcdGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwiYm90dG9tTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwiYm90dG9tUmlnaHRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbUNlbnRlclwiKXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLWJvdHRvbUNlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BMZWZ0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BSaWdodFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wQ2VudGVyXCIpe1xyXG5cdFx0XHRcdFx0cG9zaXRpb24gPSBQTFVHSU5fTkFNRSsnLXdyYXBwZXItdG9wQ2VudGVyJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLWNlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLScrcG9zaXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIFBMVUdJTl9OQU1FICsgJy13cmFwcGVyLicrcG9zaXRpb24pO1xyXG5cclxuXHRcdFx0aWYgKCEkd3JhcHBlcikge1xyXG5cdFx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHQkd3JhcHBlci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy13cmFwcGVyJyk7XHJcblx0XHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChwb3NpdGlvbik7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkd3JhcHBlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BMZWZ0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BDZW50ZXJcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcFJpZ2h0XCIpe1xyXG5cdFx0XHRcdCR3cmFwcGVyLmluc2VydEJlZm9yZSgkdG9hc3RDYXBzdWxlLCAkd3JhcHBlci5maXJzdENoaWxkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkd3JhcHBlci5hcHBlbmRDaGlsZCgkdG9hc3RDYXBzdWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaXNOYU4oc2V0dGluZ3MuemluZGV4KSkge1xyXG5cdFx0XHQkd3JhcHBlci5zdHlsZS56SW5kZXggPSBzZXR0aW5ncy56aW5kZXg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJbXCIrUExVR0lOX05BTUUrXCJdIEludmFsaWQgekluZGV4LlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5ncy5vbk9wZW4uYXBwbHkobnVsbCwgW3NldHRpbmdzLCAkdG9hc3RdKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHR2YXIgZXZlbnQ7XHJcblx0XHRcdGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcclxuXHRcdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLW9wZW4nLCB7ZGV0YWlsOiB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfX0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRcdFx0ZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFBMVUdJTl9OQU1FKyctb3BlbicsIHRydWUsIHRydWUsIHtjbGFzczogc2V0dGluZ3MuY2xhc3N9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH0gY2F0Y2goZXgpe1xyXG5cdFx0XHRjb25zb2xlLndhcm4oZXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmFuaW1hdGVJbnNpZGUpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWFuaW1hdGVJbnNpZGUnKTtcclxuXHRcdFxyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjEgPSAyMDA7XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMiA9IDEwMDtcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24zID0gMzAwO1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4gPT0gXCJib3VuY2VJbkxlZnRcIil7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjEgPSA0MDA7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjIgPSAyMDA7XHJcblx0XHRcdFx0dGltZUFuaW1hdGlvbjMgPSA0MDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHN0cm9uZy5jbGFzc0xpc3QuYWRkKCdzbGlkZUluJyk7XHJcblx0XHRcdH0sdGltZUFuaW1hdGlvbjEpO1xyXG5cclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkcC5jbGFzc0xpc3QuYWRkKCdzbGlkZUluJyk7XHJcblx0XHRcdH0sdGltZUFuaW1hdGlvbjIpO1xyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLmljb24pIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0JGljb24uY2xhc3NMaXN0LmFkZCgncmV2ZWFsSW4nKTtcclxuXHRcdFx0XHR9LHRpbWVBbmltYXRpb24zKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLmJ1dHRvbnMubGVuZ3RoID4gMCAmJiAkYnV0dG9ucykge1xyXG5cdFx0XHRcdHZhciBjb3VudGVyID0gMTUwO1xyXG5cdFx0XHRcdGZvckVhY2goJGJ1dHRvbnMuY2hpbGROb2RlcywgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JldmVhbEluJyk7XHJcblx0XHRcdFx0XHR9LGNvdW50ZXIpO1xyXG5cdFx0XHRcdFx0Y291bnRlciA9IGNvdW50ZXIgKyBjb3VudGVyO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKCRidXR0b25DbG9zZSl7XHJcblx0XHRcdCRidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0LCAnYnV0dG9uJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnBhdXNlT25Ib3Zlcil7XHJcblx0XHRcdFxyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctcGF1c2VkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKyctcGF1c2VkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLnJlc2V0T25Ib3Zlcil7XHJcblxyXG5cdFx0XHQkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKyctcmVzZXRlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuZHJhZyl7XHJcblxyXG5cdFx0XHRpZiAoQUNDRVBUU1RPVUNIKSB7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdGFydE1vdmluZyh0aGlzLCB0aGF0LCBzZXR0aW5ncywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RvcE1vdmluZyh0aGlzLCBlKTtcclxuXHRcdFx0ICAgIH0sIGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdCAgICAkdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdGFydE1vdmluZyh0aGlzLCB0aGF0LCBzZXR0aW5ncywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICBcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0b3BNb3ZpbmcodGhpcywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAkaXppVG9hc3Q7XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9peml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IG9wdGlvbnMuYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy50eXBlKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5hdHRycyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvYnRuLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW1vbmQge1xyXG4gICAgY29uc3RydWN0b3IoY29sb3IsIHN0cm9rZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKGNvbG9yIHx8ICd3aGl0ZScsIHN0cm9rZVdpZHRoIHx8ICcyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKGNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNTAnKTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzUwJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpYW1vbmQnKTtcclxuICAgICAgICBpZih0aGlzLmVsLmdldENvbnRleHQpe1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGg9YCR7c3Ryb2tlV2lkdGh9YDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZT1gJHtjb2xvcn1gO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygxMiw4KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzgsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDQ3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsNDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMTIsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDE3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDMyLDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMzgsOCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKDIsMTkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyg0NywxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKDE3LDE5KTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMjUsNDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygzMiwxOSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9kaWFtb25kLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gJy4uL2FjdGlvbnMvY2hlY2tGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmF0dHJzID0gb3B0aW9ucy5hdHRycyB8fCBbXTtcclxuICAgICAgICB0aGlzLmhlbHBfYXR0cnMgPSBvcHRpb25zLmhlbHBfYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5oZWxwX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuYXR0cnMsIHRoaXMuZWwpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJzKHRoaXMuaGVscF9hdHRycywgdGhpcy5oZWxwX2VsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKHByZXYpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIGlmIChDaGVja0ZpZWxkcy5jaGVja0VtcHR5KHRoaXMuZWwudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsICdlbXB0eSBmaWVsZCcpO1xyXG4gICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlRXJyKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsICcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZCA9PT0gJ2xvZ2luJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IENoZWNrRmllbGRzLmNoZWNrTG9naW4oe2ZpZWxkOiB0aGlzLmVsLCBoZWxwOiB0aGlzLmhlbHBfZWx9KTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkID09PSAncGFzc3dvcmQnKSB7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkID09PSAncmVwZWF0cGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gQ2hlY2tGaWVsZHMuY2hlY2tQYXNzd29yZChcclxuICAgICAgICAgICAgICAgICAgICB7ZmllbGQ6IHByZXYuZWwsIGhlbHA6IHByZXYuaGVscF9lbH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiB0aGlzLmVsLCBoZWxwOiB0aGlzLmhlbHBfZWx9KTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldFRleHQodGhpcy5lbCwgJycpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlT2sodGhpcy5lbCk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNEdXBsaWNhdGVkRGVjbGFyYXRpb25cclxuICAgIHNldEVycm9yKCkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcih2YWx1ZSkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvaW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA0LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZSc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9lbGVtZW50cy9wcm9ncmVzc0Jhcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoZGF0YSkge1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZFNvdXJjZSA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjd2l0aCB0aXRsZXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3dpdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInt7Y29udHJvbC5jbGFzc319XCIgaWQ9XCJ7e2NvbnRyb2wuaWR9fVwiPnt7Y29udHJvbC50ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lmIGxlYWRlcmJvYXJkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBsZWFkZXJib2FyZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj57e2xvZ2lufX08c3BhbiBjbGFzcz1cImJhZGdlXCI+e3tyYXRpbmd9fTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1gO1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZFRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGxlYWRlckJvYXJkU291cmNlKTtcclxuICAgICAgICByZXR1cm4gbGVhZGVyQm9hcmRUZW1wbGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGVhZGVyQm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UHJvZ3Jlc3NCYXIodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0TGVhZGVycygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gcmVzcG9uc2UubGVhZGVycztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy5fcmVuZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgcGxheWVyczonLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGVyYm9hcmQ6IGFycixcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWZyZXNoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWZyZXNoLWxiJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFJlZnJlc2hMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IHRoaXMuX3JlbmRlcih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05vIGNvbm5lY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycjoge30sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JlZnJlc2gnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWZyZXNoLWxiJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFJlZnJlc2hMaXN0ZW5lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0UmVmcmVzaExpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCByZWZyZXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gtbGInKTtcclxuICAgICAgICBpZiAocmVmcmVzaCkge1xyXG4gICAgICAgICAgICByZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGVhZGVyQm9hcmQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0UHJvZ3Jlc3NCYXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb250YWluZXIoY29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDEyLjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9ue1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhlbGVtKXtcclxuICAgICAgICBpZihlbGVtKXtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbGVtLWhpZGUnKTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlbGVtLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShlbGVtKXtcclxuICAgICAgICBpZihlbGVtKXtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbGVtLXNob3cnKTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlbGVtLWhpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2FuaW0vYW5pbWF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxNy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IE1lbnVWaWV3IGZyb20gXCIuLi8uLi92aWV3cy9tZW51L21lbnVWaWV3XCI7XHJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4uLy4uL3ZpZXdzL21lbnUvbG9naW5WaWV3XCI7XHJcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gXCIuLi8uLi92aWV3cy9tZW51L3NpZ251cFZpZXdcIjtcclxuaW1wb3J0IEFib3V0VmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9hYm91dFZpZXdcIjtcclxuaW1wb3J0IExlYWRlckJvYXJkVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvbWVudS9sZWFkZXJib2FyZFZpZXdcIjtcclxuaW1wb3J0IFByb2ZpbGVWaWV3IGZyb20gXCIuLi8uLi92aWV3cy9nYW1lL3Byb2ZpbGVWaWV3XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9nYW1lL3VzZXJcIjtcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlL3VzZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vLi4vdmlld3MvZ2FtZS9nYW1lVmlld1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi9hbmltL2FuaW1hdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0cnVjdG9yIFJvdXRlXHJcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1cnJWaWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKCcvJywgbmV3IE1lbnVWaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXZpZXcnKSkpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKCcvZ2FtZScsIG5ldyBHYW1lVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS12aWV3JykpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlcignL2xvZ2luJywgbmV3IExvZ2luVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdmlldycpLCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoJy9zaWdudXAnLCBuZXcgU2lnblVwVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLXZpZXcnKSwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKCcvbGVhZGVyYm9hcmQnLCBuZXcgTGVhZGVyQm9hcmRWaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC12aWV3JykpKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlcignL2Fib3V0JywgbmV3IEFib3V0Vmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdmlldycpKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoJy9wcm9maWxlJywgbmV3IFByb2ZpbGVWaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLXZpZXcnKSwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuX3NldEN1cnJWaWV3KGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICB0aGlzLl9zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRDdXJyVmlldyhwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tVc2VyKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja1VzZXIocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoID09PSAnL2xvZ2luJyB8fCBwYXRoID09PSAnL3NpZ251cCcpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbygnL3Byb2ZpbGUnKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dvKHBhdGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGggPT09ICcvcHJvZmlsZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbyhwYXRoKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dvKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIC8qaWYgKHBhdGggPT09ICcvJyB8fCBwYXRoID09PSAnL2xlYWRlcmJvYXJkJyB8fCBwYXRoID09PSAnL2Fib3V0JykqLyB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dvKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C10YDQtdC50YLQuCDQv9C+INC80LDRgNGI0YDRg9GC0YNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXHJcbiAgICAgKi9cclxuICAgIF9nbyhwYXRoKSB7XHJcblxyXG4gICAgICAgIGxldCB0aW1lT3V0ID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyVmlldykge1xyXG4gICAgICAgICAgICBuZXcgQW5pbWF0aW9uKCkuaGlkZSh0aGlzLmN1cnJWaWV3Lm5vZGUpO1xyXG4gICAgICAgICAgICB0aW1lT3V0ID0gNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJWaWV3LnRvZ2dsZVZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJWaWV3ID0gdGhpcy5fZ2V0Vmlld0J5Um91dGUocGF0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VyclZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSAnLyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJWaWV3ID0gdGhpcy5fZ2V0Vmlld0J5Um91dGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnL3Byb2ZpbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJWaWV3LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe29wYTogJ29wYSd9LCAndGl0bGUxJywgcGF0aCk7XHJcbiAgICAgICAgICAgIG5ldyBBbmltYXRpb24oKS5zaG93KHRoaXMuY3VyclZpZXcubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclZpZXcudG9nZ2xlVmlldygpO1xyXG4gICAgICAgIH0sIHRpbWVPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvNCw0YDRiNGA0YPRgtCwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm91dGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3XHJcbiAgICAgKi9cclxuICAgIF9yZWdpc3Rlcihyb3V0ZSwgdmlldykge1xyXG4gICAgICAgIHRoaXMucm91dGVzW3JvdXRlXSA9IHZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFZpZXdCeVJvdXRlKGhyZWYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNbaHJlZl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQl9Cw0L/Rg9GB0YLQuNGC0Ywg0L/RgNC+0YbQtdGBINC80LDRgNGI0YDRg9GC0LjQt9Cw0YbQuNC4XHJcbiAgICAgKi9cclxuICAgIF9zdGFydCgpIHtcclxuICAgICAgICAvKmxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlcicpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICAgICBzZWxmLl9zZXRDdXJyVmlldyh0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pOyovXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5fb25Sb3V0ZUNoYW5nZShldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblJvdXRlQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJyVmlldyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLl9zZXRDdXJyVmlldyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG5cclxuICAgICAgICAvKiBpZiAodGhpcy5fc2V0Q3VyclZpZXcoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKSkge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB9Ki9cclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9yb3V0ZXIvcm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAxNy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4uL2Jhc2VWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgQmFzZVZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKXtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL2dhbWUvZ2FtZVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZ2FtZS91c2VyJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL2RpYW1vbmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSwgcm91dGVyKSB7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICAvL3RoaXMucmVmcmVzaFByb2ZpbGUoKTtcclxuICAgICAgICB0aGlzLl9zaG93Vmlld1Byb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHRoaXMuX2NyZWF0ZVByb2ZpbGUodXNlcik7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnByb2ZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxvZ2luJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9nT3V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuX3NldEN1cnJWaWV3KCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93Vmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlVmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJDb250YWluZXIoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhckNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dWaWV3UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlUHJvZmlsZSh1c2VyKSB7XHJcbiAgICAgICAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9maWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmNvbnRhaW5lci1yb3cnKTtcclxuXHJcbiAgICAgICAgLyogY3JlYXRlIGNvbnRyb2xsZXJzIGRpdiovXHJcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbGxlcnNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmY29udGFpbmVyLXJvdycpO1xyXG5cclxuICAgICAgICBsZXQgaHJlZlBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgaHJlZlBsYXkuc2V0QXR0cmlidXRlKCdocmVmJywgJy9nYW1lJyk7XHJcbiAgICAgICAgaHJlZlBsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3V0ZXIgYnRuLXBsYXknKTtcclxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGgxLmlubmVySFRNTCA9ICdTdGFydCBnYW1lJztcclxuICAgICAgICBocmVmUGxheS5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgICAgIGxldCBocmVmTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGhyZWZMb2dvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3V0ZXIgbGlua19fbG9nb3V0Jyk7XHJcbiAgICAgICAgaHJlZkxvZ291dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1sb2dvdXQnKTtcclxuICAgICAgICBocmVmTG9nb3V0LmlubmVyVGV4dCA9ICdMb2cgb3V0JztcclxuICAgICAgICBjb250cm9sbGVyc0Rpdi5hcHBlbmRDaGlsZChocmVmUGxheSk7XHJcbiAgICAgICAgY29udHJvbGxlcnNEaXYuYXBwZW5kQ2hpbGQoaHJlZkxvZ291dCk7XHJcblxyXG4gICAgICAgIC8qY3JlYXRlIHVzZXIgZGl2Ki9cclxuICAgICAgICBsZXQgdXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHVzZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmY29udGFpbmVyLWNvbHVtbiBjb250YWluZXJfX3Byb2ZpbGUnKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0X19wcm9maWxlLWxvZ2luJyk7XHJcbiAgICAgICAgZWxlbS5pbm5lclRleHQgPSBgJHt1c2VyLmxvZ2lufWA7XHJcbiAgICAgICAgdXNlckRpdi5hcHBlbmRDaGlsZChlbGVtKTtcclxuXHJcbiAgICAgICAgbGV0IGFyclZhbHVlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmF0aW5nOicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5yYXRpbmdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dpbm5pbmdzOicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5nYW1lX2NvdW50X3dpblxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVG90YWwgbWF0Y2hlczogJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmdhbWVfY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGFyclZhbHVlLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHRfX3Byb2ZpbGUtaXRlbScpO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9IGAke2VsLm5hbWV9ICR7ZWwudmFsdWV9YDtcclxuICAgICAgICAgICAgdXNlckRpdi5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypjcmVhdGUgcmVzb3VyY2VzIGRpdiovXHJcbiAgICAgICAgbGV0IHJlc291cmNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc291cmNlc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zjb250YWluZXItY29sdW1uIGNvbnRhaW5lcl9fcHJvZmlsZScpO1xyXG5cclxuICAgICAgICBsZXQgYXJyQ3J5c3RhbHMgPSBbXHJcbiAgICAgICAgICAgIHt2YWx1ZTogdXNlci5jcnlzdGFsX2dyZWVuLCBjb2xvcjogJ3JnYigyOSwgMTQwLCAxMTQpJ30sXHJcbiAgICAgICAgICAgIHt2YWx1ZTogdXNlci5jcnlzdGFsX2JsdWUsIGNvbG9yOiAncmdiKDU3LCAxMDgsIDIxOSknfSxcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfcmVkLCBjb2xvcjogJ3JnYigxMzgsIDM0LCA3NiknfSxcclxuICAgICAgICAgICAge3ZhbHVlOiB1c2VyLmNyeXN0YWxfcHVycGxlLCBjb2xvcjogJ3JnYig4MCwgMzUsIDE1MyknfV07XHJcbiAgICAgICAgYXJyQ3J5c3RhbHMuZm9yRWFjaChwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zjb250YWluZXItcm93Jyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEaWFtb25kKGAke3BhcmFtcy5jb2xvcn1gKS5nZXRFbGVtKCkuZWw7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dF9fcHJvZmlsZS1kaWFtb25kJyk7XHJcbiAgICAgICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gYCR7cGFyYW1zLnZhbHVlfWA7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICAgICAgcmVzb3VyY2VzRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQoY29udHJvbGxlcnNEaXYpO1xyXG4gICAgICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQodXNlckRpdik7XHJcbiAgICAgICAgcHJvZmlsZS5hcHBlbmRDaGlsZChyZXNvdXJjZXNEaXYpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvZmlsZTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3ZpZXdzL2dhbWUvcHJvZmlsZVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBCYXNlVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpe1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9hYm91dFZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5pbXBvcnQgTGVhZGVyQm9hcmQgZnJvbSBcIi4uLy4uL21lbnUvdGVtcGxhdGVzL2xlYWRlckJvYXJkXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckJvYXJkVmlldyBleHRlbmRzIEJhc2VWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSl7XHJcbiAgICAgICAgc3VwZXIobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICBuZXcgTGVhZGVyQm9hcmQobm9kZSkucmVmcmVzaExlYWRlckJvYXJkKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy92aWV3cy9tZW51L2xlYWRlcmJvYXJkVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTkuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9wcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vbWVudS9lbGVtZW50cy9mb3JtXCI7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tIFwiLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9nYW1lL3VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIHJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5fc2hvd1ZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZmNvbnRhaW5lci1jb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1wYXNzd29yZC1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLWxvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsgcm91dGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXRvLXNpZ251cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3NpZ251cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuZ2V0RWxlbSgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5sb2dpbkZvcm0uZWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbC1wYXNzd29yZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9naW4nKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Ub1NpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdG8tc2lnbnVwJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93Vmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlVmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5nZXRFbGVtKCk7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9ncmVzc0JhciwgdGhpcy5idG5Mb2dpbi5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2dpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnRuTG9naW4ubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgLy9TdWJtaXQgZm9ybVxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrRmllbGRzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5sb2dpbkZvcm0uZ2V0Rm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5sb2dpbihib2R5KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXIoKS5vYmogPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLl9zZXRDdXJyVmlldygnL3Byb2ZpbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEVycm9yKCd3cm9uZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Ub1NpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50PT57XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9sb2dpblZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDE5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi4vYmFzZVZpZXcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICBzdXBlcihub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHtcclxuICAgICAgICAgICAgZWxlbWVudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9sZWFkZXJib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuLXBsYXkgcm91dGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTEVBREVSIEJPQVJEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2J0bi1wbGF5IHJvdXRlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2gxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BMQVknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuLXBsYXkgcm91dGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJPVVQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihpbnN0cikge1xyXG4gICAgICAgIGxldCBlbGVtQXJyYXkgPSB0aGlzLl9nZXRFbGVtcyhpbnN0ci5lbGVtZW50cyk7XHJcbiAgICAgICAgdGhpcy5fZWxlbXNBcHBlbmRUbyhlbGVtQXJyYXksIHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEF0dHJzKGF0dHJzLCBlbGVtKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZWxlbXNBcHBlbmRUbyhhcnJheSwgZWxlbSkge1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RWxlbXMoZWxlbWVudHMpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudHMubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0QXR0cnMoZGF0YS5hdHRycywgZWxlbSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS5lbGVtZW50LnR5cGUpO1xyXG4gICAgICAgICAgICB0ZXh0RWxlbS50ZXh0Q29udGVudCA9IGRhdGEuZWxlbWVudC50ZXh0O1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHRleHRFbGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9tZW51Vmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTkuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNlVmlldyBmcm9tICcuLi9iYXNlVmlldyc7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBDaGVja0ZpZWxkcyBmcm9tIFwiLi4vLi4vbWVudS9hY3Rpb25zL2NoZWNrRmllbGRzXCI7XHJcbmltcG9ydCBJemlUb2FzdCBmcm9tICdpeml0b2FzdCc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tIFwiLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXBWaWV3IGV4dGVuZHMgQmFzZVZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCByb3V0ZXIpe1xyXG4gICAgICAgIHN1cGVyKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5fc2hvd1ZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtID0gbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduIHVwJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZmNvbnRhaW5lci1jb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLWxvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1sb2dpbi1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1JlcGVhdCBwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcmVwZWF0cGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlcGVhdHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiAncmVwZWF0cGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1yZXBlYXRwYXNzd29yZC1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZWdpc3RyYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tc2lnbnVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nIEluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluayByb3V0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tdG8tbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2EnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5faGlkZVZpZXdQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5zaWdudXBGb3JtLmVsKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1sb2dpbicpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXJlcGVhdHBhc3N3b3JkJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnci1wYXNzd29yZC1oZWxwJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwZWF0UGFzc3dvcmRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcmVwZWF0cGFzc3dvcmQtaGVscCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5TaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNpZ251cCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5Ub0xvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10by1sb2dpbicpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93Vmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLmdldEVsZW0oKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlVmlld1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHRoaXMuYnRuU2lnblVwLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCkuZ2V0RWxlbSgpO1xyXG4gICAgICAgIHRoaXMuYnRuU2lnblVwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2dyZXNzQmFyLCB0aGlzLmJ0blNpZ25VcC5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5TaWduVXAuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2lnblVwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idG5TaWduVXAubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgLy9TdWJtaXQgZm9ybVxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS5lbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hlY2tGaWVsZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLnNpZ251cEZvcm0uZ2V0Rm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLnNpZ251cChib2R5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIEl6aVRvYXN0LnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWxseSByZWdpc3RyYXRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wUmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuX3NldEN1cnJWaWV3KCcvbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVPayh0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldEVycih0aGlzLmxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlcnIucmVzdWx0ID09PSAnbm8tY29ubicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2NoZWNrIGNvbm5lY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmxvZ2luSGVscCwgJ2xvZ2luIHVzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0blRvTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudD0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckZpZWxkcygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRmllbGRzKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZmllbGRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBlbGVtLnZhbGlkYXRlKHByZXYpO1xyXG4gICAgICAgICAgICBwcmV2ID0gZWxlbTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyRmllbGRzKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdmlld3MvbWVudS9zaWdudXBWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9