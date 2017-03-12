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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(6);
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
        const http = this.http;
        return new Promise(function (resolve, reject) {
            http.get(address, null).then(response => {
                if (response.status == '200 OK') {
                    resolve(response.user);
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

    login(body) {
        const address = `${this.url}/user/login`;
        const http = this.http;
        return new Promise(function (resolve, reject) {
            let headers = {'Content-Type': 'application/json'};
            http.post(address, headers, body).then(response => {
                if (response.status === '200 OK') {
                    resolve(response.user);
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

    signup(body) {
        const address = `${this.url}/user/signup`;
        const http = this.http;
        return new Promise(function (resolve, reject) {
            let headers = {'Content-Type': 'application/json'};
            http.post(address, headers, body).then(response => {
                if (response.status == '200 OK') {
                    resolve({result: 'success'});
                } else {
                    reject({result: 'error'});
                }
            }).catch(e => {
                console.error(e.status);
                reject({result: 'error'});
            });
        });
    }

    getLeaders() {
        const address = `${this.url}/user/leaders`;
        const http = this.http;
        return new Promise(function (resolve, reject) {
            http.get(address, null).then(response => {
                if (response.status == '200 OK') {
                    resolve(response);
                } else {
                    console.error(response.status);
                    reject(response);
                }
            }).catch(e => {
                reject({});
                console.error(e.status);
            });
        });
    }

    logOutUser() {
        const address = `${this.url}/user/logout`;
        const http = this.http;
        return new Promise(function (resolve, reject) {
            http.get(address, null).then(response => {
                if (response.status == '200 OK') {
                    resolve(response);
                } else {
                    console.error(response.status);
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 03.03.2017.
 */
class CheckFields {
    constructor() {

    }

    static _checkLatin(value) {
        return value.match(/[а-яА-ЯёЁ]+/) == null;
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
                obj.help.textContent = obj.help.textContent + ', ' + item.err_text;
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
        return value.length === 0;
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
                item.help.textContent = item.help.textContent + ', ' + item.err_text;
            }
        });

        if (arr.length === 0) {
            this.fieldSetOk(obj1.field);
            this.fieldSetOk(obj2.field);
        }
        return arr.length === 0;
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Denis on 07.03.2017.
 */

class ProgressBar{
    constructor(){
        this.el = document.createElement('div');
    }

    render(){
        this.el.setAttribute('class', 'loader');
        return this.el;
    }

    static sleep(ms) {
        ms += new Date().getTime();
        while (new Date() < ms) {
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;


/***/ }),
/* 6 */
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

    get(address = '', headers = {}) {
        return new Promise(function (resolve, reject) {
            fetch(address, {
                method: 'GET',
                mode: 'cors',
                headers: headers,
                credentials: 'include'
            }).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject({});
                console.error(err || err.statusText);
            });
        });
    }

    post(address = '', headers = {}, body = {}) {
        return new Promise(function (resolve, reject) {
            fetch(address, {
                method: 'POST',
                mode: 'cors',
                headers: headers,
                credentials: 'include',
                body: JSON.stringify(body)
            }).then(response => {
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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(20);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(3);
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
            }, response => {

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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_templates_leaderBoard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_actions_menuActions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_forms_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_forms_signup__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_actions_getUser__ = __webpack_require__(18);
/**
 * Created by Denis on 04.03.2017.
 */






new __WEBPACK_IMPORTED_MODULE_2__menu_forms_login__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_3__menu_forms_signup__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_0__menu_templates_leaderBoard__["a" /* default */]().refreshLeaderBoard();
new __WEBPACK_IMPORTED_MODULE_4__menu_actions_getUser__["a" /* default */]().get();
new __WEBPACK_IMPORTED_MODULE_1__menu_actions_menuActions__["a" /* default */]();


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_profile__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_user__ = __webpack_require__(3);

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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_user__ = __webpack_require__(3);
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
            this.showDiv(this.modalDiv);
            if(JSON.stringify(new __WEBPACK_IMPORTED_MODULE_0__game_user__["a" /* default */]().obj) === JSON.stringify({})){
                this.showDiv(this.modalLogin);
                this.setCurrModal(this.modalLogin);
            } else {
                this.showDiv(this.modalGame);
                this.setCurrModal(this.modalGame);
            }
        });

        this.btnAbout.addEventListener('click', () => {
            this.showDiv(this.modalDiv);
            this.showDiv(this.modalAbout);
            this.setCurrModal(this.modalAbout);
        });

        this.btnLeaderBoard.addEventListener('click', () => {
            this.showDiv(this.modalDiv);
            this.showDiv(this.modalLeaderBoard);
            this.setCurrModal(this.modalLeaderBoard);
        });
        this.btnModalClose.addEventListener('click', () => {
            this.hideDiv(this.modalDiv);
            this.hideCurrModal();
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

    setCurrModal(modal) {
        this.currModal = modal;
    }

    hideCurrModal() {
        this.currModal.classList.add('hidden');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuActions;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(4);
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
                if (check == true) {
                    check = result;
                }
            }
        }
        return check;
    }

    clear() {
        console.log(this.el);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkFields__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service_userService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_profile__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_form__ = __webpack_require__(8);
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
        __WEBPACK_IMPORTED_MODULE_5__elements_progressBar__["a" /* default */].sleep(500);
        this.btnLogin.hidden = false;
        this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
    }

    checkFields() {
        let check = true;

        this.loginForm.fields.forEach(elem => {
            let result = elem.validate();
            if (check == true) {
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements_form__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_service_userService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_progressBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_izitoast__ = __webpack_require__(13);
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
                    __WEBPACK_IMPORTED_MODULE_1__actions_checkFields__["a" /* default */].helpSetText(this.loginHelp, 'login used');
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
        __WEBPACK_IMPORTED_MODULE_3__elements_progressBar__["a" /* default */].sleep(500);
        this.btnSignUp.hidden = false;
        this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
    }

    openLogin() {
        this.signupDiv.classList.add('hidden');
        this.loginDiv.classList.remove('hidden');
        __WEBPACK_IMPORTED_MODULE_4_izitoast___default.a.success({
            title: 'OK',
            message: 'Successfully registration',
        });
    }

    checkFields() {
        let check = true;
        let prev = null;

        this.signupForm.fields.forEach(elem => {
            let result = elem.validate(prev);
            prev = elem;
            if (check == true) {
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support_service_userService__ = __webpack_require__(0);
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
        __WEBPACK_IMPORTED_MODULE_1__elements_progressBar__["a" /* default */].sleep(500);
        return leaderBoardTemplate(data);
    }

    refreshLeaderBoard() {
        let leaderBoardContainer = document.getElementById('leaderboard-container');
        this.setProgressBar(leaderBoardContainer);

        new __WEBPACK_IMPORTED_MODULE_0__support_service_userService__["a" /* default */]().getLeaders().then(response => {
            let leaderBoardContainer = document.getElementById('leaderboard-container');
            let arr = response.leaders;
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
        }, response => {
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
        }).catch(err => {
            console.error(err);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(10);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThhNTAzNjNiODNkZDVkNzIzMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1cHBvcnQvc2VydmljZS91c2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvYWN0aW9ucy9jaGVja0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS9lbGVtZW50cy9wcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VwcG9ydC9odHRwL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvYnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2VsZW1lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2l6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvYWN0aW9ucy9nZXRVc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L2FjdGlvbnMvbWVudUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZWxlbWVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZm9ybXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUvZm9ybXMvc2lnbnVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51L3RlbXBsYXRlcy9sZWFkZXJCb2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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LE9BQU87QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVMsdUJBQXVCO0FBQ2xGLElBQUk7QUFDSjtBQUNBLDREQUE0RCxzQkFBc0I7QUFDbEY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3J4QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsU0FBUzs7QUFFVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwSEFBbUU7QUFDbkU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtHQUFxRCxtQ0FBbUM7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixhQUFhO0FBQ2I7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hELHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7O0FDbkxBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsa0NBQWtDLE9BQU87QUFDekMsMEJBQTBCO0FBQzFCLG9DQUFvQyxlQUFlLFFBQVEsWUFBWSxJQUFJLGNBQWM7QUFDekYsMEJBQTBCO0FBQzFCO0FBQ0EsOEJBQThCO0FBQzlCLDBEQUEwRCxPQUFPLHNCQUFzQixRQUFRO0FBQy9GLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE4YTUwMzYzYjgzZGQ1ZDcyMzM1IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDUuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCBIdHRwIGZyb20gJy4uL2h0dHAvaHR0cCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKCk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmh0dHAuQmFzZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9nZXRgO1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaHR0cC5nZXQoYWRkcmVzcywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICcyMDAgT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dpbmA7XHJcbiAgICAgICAgY29uc3QgaHR0cCA9IHRoaXMuaHR0cDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfTtcclxuICAgICAgICAgICAgaHR0cC5wb3N0KGFkZHJlc3MsIGhlYWRlcnMsIGJvZHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWdudXAoYm9keSkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9zaWdudXBgO1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XHJcbiAgICAgICAgICAgIGh0dHAucG9zdChhZGRyZXNzLCBoZWFkZXJzLCBib2R5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtyZXN1bHQ6ICdzdWNjZXNzJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe3Jlc3VsdDogJ2Vycm9yJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHtyZXN1bHQ6ICdlcnJvcid9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVhZGVycygpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYCR7dGhpcy51cmx9L3VzZXIvbGVhZGVyc2A7XHJcbiAgICAgICAgY29uc3QgaHR0cCA9IHRoaXMuaHR0cDtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBodHRwLmdldChhZGRyZXNzLCBudWxsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJzIwMCBPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBgJHt0aGlzLnVybH0vdXNlci9sb2dvdXRgO1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaHR0cC5nZXQoYWRkcmVzcywgbnVsbCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICcyMDAgT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNi4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFVzZXIuX19pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXNlci5fX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyID0ge307XHJcbiAgICAgICAgVXNlci5fX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb2JqKHVzZXIpIHtcclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2JqKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9nYW1lL3VzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRmllbGRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2NoZWNrTGF0aW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL1vQsC3Rj9CQLdCv0ZHQgV0rLykgPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tMb2dpbihvYmopIHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0xhdGluKG9iai5maWVsZC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdPbmx5IExhdGluJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5maWVsZC52YWx1ZS5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnNCAtIG1pbiBsZW5ndGgnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRFcnIob2JqLmZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFJlbW92ZU9rKG9iai5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqLmhlbHAudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaGVscC50ZXh0Q29udGVudCA9IG9iai5oZWxwLnRleHRDb250ZW50ICsgJywgJyArIGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouaGVscC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqLmZpZWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NMZW5ndGgodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID49IDg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9jaGVja1Bhc3NFcXVhbHModmFsdWUxLCB2YWx1ZTIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tQYXNzd29yZChvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrUGFzc0xlbmd0aChvYmoxLmZpZWxkLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnOCAtIG1pbiBsZW5ndGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBvYmoxLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IG9iajEuaGVscFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrUGFzc0VxdWFscyhvYmoxLmZpZWxkLnZhbHVlLCBvYmoyLmZpZWxkLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycl90ZXh0OiAnUGFzc3dvcmRzIG5vdCBlcXVhbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBvYmoxLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IG9iajEuaGVscFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyX3RleHQ6ICdQYXNzd29yZHMgbm90IGVxdWFscycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG9iajIuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscDogb2JqMi5oZWxwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqMS5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgb2JqMi5oZWxwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXRFcnIoaXRlbS5maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRSZW1vdmVPayhpdGVtLmZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmhlbHAudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlbHAudGV4dENvbnRlbnQgPSBpdGVtLmVycl90ZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWxwLnRleHRDb250ZW50ID0gaXRlbS5oZWxwLnRleHRDb250ZW50ICsgJywgJyArIGl0ZW0uZXJyX3RleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFNldE9rKG9iajEuZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0T2sob2JqMi5maWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwU2V0VGV4dChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRTZXRUZXh0KGVsZW0sIHZhbHVlKSB7XHJcbiAgICAgICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWVsZFNldEVycihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmllbGRSZW1vdmVFcnIoZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRfX2Vycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkU2V0T2soZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXRfX29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpZWxkUmVtb3ZlT2soZWxlbSkge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRfX29rJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvYWN0aW9ucy9jaGVja0ZpZWxkcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvYWRlcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbGVlcChtcykge1xyXG4gICAgICAgIG1zICs9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdoaWxlIChuZXcgRGF0ZSgpIDwgbXMpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2VsZW1lbnRzL3Byb2dyZXNzQmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChIdHRwLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBIdHRwLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLl9iYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSAnaHR0cHM6Ly90cC1zZXJ2ZXItamF2YS5oZXJva3VhcHAuY29tL2FwaSc7XHJcblxyXG4gICAgICAgIEh0dHAuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlVXJsKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChhZGRyZXNzID0gJycsIGhlYWRlcnMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZldGNoKGFkZHJlc3MsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHt9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyIHx8IGVyci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdChhZGRyZXNzID0gJycsIGhlYWRlcnMgPSB7fSwgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZmV0Y2goYWRkcmVzcywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe30pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIgfHwgZXJyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdXBwb3J0L2h0dHAvaHR0cC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmF0dHJzID0gb3B0aW9ucy5hdHRycyB8fCBbXTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5hdHRycyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvYnRuLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge2RhdGE6IHt9fSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmRhdGEuZm9ybS5hdHRycywgdGhpcy5lbCk7XHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh0aGlzLmRhdGEudGl0bGUuYXR0cnMsIGgzKTtcclxuICAgICAgICBoMy5pbm5lckhUTUwgPSB0aGlzLmRhdGEudGl0bGUudGV4dDtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRzID0gdGhpcy5fZ2V0RmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzQXBwZW5kVG8odGhpcy5maWVsZHMsIHRoaXMuZWwpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb250cm9sc0FwcGVuZFRvKHRoaXMuY29udHJvbHMsIHRoaXMuZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmllbGRzKCkge1xyXG4gICAgICAgIGxldCB7ZmllbGRzID0gW119PXRoaXMuZGF0YTtcclxuICAgICAgICByZXR1cm4gZmllbGRzLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnB1dChkYXRhKS5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QXR0cnMoYXR0cnMsIGVsZW0pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2ZpZWxkc0FwcGVuZFRvKGFycmF5LCBlbGVtKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmVsKTtcclxuICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpdGVtLmhlbHBfZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRyb2xzQXBwZW5kVG8oYXJyYXksIGVsZW0pIHtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGl0ZW0uZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2dldENvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCB7Y29udHJvbHMgPSBbXX09dGhpcy5kYXRhO1xyXG4gICAgICAgIHJldHVybiBjb250cm9scy5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uKGRhdGEpLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtRGF0YSgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsLmVsZW1lbnRzO1xyXG4gICAgICAgIGxldCBmaWVsZHMgPSB7fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudHNbZWxlbWVudF0ubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudHNbZWxlbWVudF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9lbGVtZW50cy9mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA2LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnRuJ1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZ2FtZS91c2VyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge2RhdGE6IHt9fSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5wTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRoaXMucFJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGhpcy5wQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpdiA9IG9wdGlvbnMuZGF0YS5kaXY7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wTG9naW4udGV4dENvbnRlbnQgPSBgTG9naW46ICR7dGhpcy5kYXRhLmxvZ2lufWA7XHJcbiAgICAgICAgdGhpcy5wUmF0aW5nLnRleHRDb250ZW50ID0gYFNjb3JlOiAke3RoaXMuZGF0YS5yYXRpbmd9YDtcclxuICAgICAgICB0aGlzLnBCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMuZGF0YS5idXR0b24pLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLnBMb2dpbik7XHJcbiAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5wUmF0aW5nKTtcclxuICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLnBCdXR0b24uZWwpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMucEJ1dHRvbi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9nT3V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJEaXYoKTtcclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyKCkub2JqID0ge307XHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyRGl2KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmRpdi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2LnJlbW92ZUNoaWxkKHRoaXMuZGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvcHJvZmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwNC4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IExlYWRlckJvYXJkIGZyb20gJy4vbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQnO1xyXG5pbXBvcnQgTWVudUFjdGlvbiBmcm9tICcuL21lbnUvYWN0aW9ucy9tZW51QWN0aW9ucyc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9tZW51L2Zvcm1zL2xvZ2luJztcclxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi9tZW51L2Zvcm1zL3NpZ251cCc7XHJcbmltcG9ydCBHZXRVc2VyIGZyb20gJy4vbWVudS9hY3Rpb25zL2dldFVzZXInO1xyXG5cclxubmV3IExvZ2luRm9ybSgpO1xyXG5uZXcgU2lnblVwRm9ybSgpO1xyXG5uZXcgTGVhZGVyQm9hcmQoKS5yZWZyZXNoTGVhZGVyQm9hcmQoKTtcclxubmV3IEdldFVzZXIoKS5nZXQoKTtcclxubmV3IE1lbnVBY3Rpb24oKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogaXppVG9hc3QgfCB2MS4xLjBcclxuICogaHR0cDovL2l6aXRvYXN0Lm1hcmNlbG9kb2xjZS5jb21cclxuICogYnkgTWFyY2VsbyBEb2xjZS5cclxuICovIFxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoW10sIGZhY3Rvcnkocm9vdCkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJvb3QuaXppVG9hc3QgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH1cclxufSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0Ly9cclxuXHR2YXIgJGl6aVRvYXN0ID0ge30sXHJcblx0XHRQTFVHSU5fTkFNRSA9ICdpemlUb2FzdCcsXHJcblx0XHRCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0SVNNT0JJTEUgPSAoL01vYmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0SVNDSFJPTUUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpLFxyXG5cdFx0SVNGSVJFRk9YID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyxcclxuXHRcdEFDQ0VQVFNUT1VDSCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuXHRcdFBPU0lUSU9OUyA9IFsnYm90dG9tUmlnaHQnLCdib3R0b21MZWZ0JywnYm90dG9tQ2VudGVyJywndG9wUmlnaHQnLCd0b3BMZWZ0JywndG9wQ2VudGVyJywnY2VudGVyJ10sXHJcblx0XHRUSEVNRVMgPSB7XHJcblx0XHRcdGluZm86IHtcclxuXHRcdFx0XHRjb2xvcjogXCJibHVlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28taW5mb1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdFx0XHRcdGljb246IFwiaWNvLWNoZWNrXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhcm5pbmc6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ5ZWxsb3dcIixcclxuXHRcdFx0XHRpY29uOiBcImljby13YXJuaW5nXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwicmVkXCIsXHJcblx0XHRcdFx0aWNvbjogXCJpY28tZXJyb3JcIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdE1PQklMRVdJRFRIID0gNTY4LFxyXG5cdFx0Q09ORklHID0ge307XHJcblxyXG5cdC8vIERlZmF1bHQgc2V0dGluZ3NcclxuXHR2YXIgZGVmYXVsdHMgPSB7XHJcblx0XHRjbGFzczogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHR0aXRsZUNvbG9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0bWVzc2FnZUNvbG9yOiAnJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXHJcblx0XHRjb2xvcjogJycsIC8vIGJsdWUsIHJlZCwgZ3JlZW4sIHllbGxvd1xyXG5cdFx0aWNvbjogJycsXHJcblx0XHRpY29uVGV4dDogJycsXHJcblx0XHRpY29uQ29sb3I6ICcnLFxyXG5cdFx0aW1hZ2U6ICcnLFxyXG5cdFx0aW1hZ2VXaWR0aDogNTAsXHJcblx0XHR6aW5kZXg6IDk5OTk5LFxyXG5cdFx0bGF5b3V0OiAxLFxyXG5cdFx0YmFsbG9vbjogZmFsc2UsXHJcblx0XHRjbG9zZTogdHJ1ZSxcclxuXHRcdHJ0bDogZmFsc2UsXHJcblx0XHRwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0JywgLy8gYm90dG9tUmlnaHQsIGJvdHRvbUxlZnQsIHRvcFJpZ2h0LCB0b3BMZWZ0LCB0b3BDZW50ZXIsIGJvdHRvbUNlbnRlciwgY2VudGVyXHJcblx0XHR0YXJnZXQ6ICcnLFxyXG5cdFx0dGFyZ2V0Rmlyc3Q6IHRydWUsXHJcblx0XHR0aW1lb3V0OiA1MDAwLFxyXG5cdFx0ZHJhZzogdHJ1ZSxcclxuXHRcdHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuXHRcdHJlc2V0T25Ib3ZlcjogZmFsc2UsXHJcblx0XHRwcm9ncmVzc0JhcjogdHJ1ZSxcclxuXHRcdHByb2dyZXNzQmFyQ29sb3I6ICcnLFxyXG5cdFx0YW5pbWF0ZUluc2lkZTogdHJ1ZSxcclxuXHRcdGJ1dHRvbnM6IHt9LFxyXG5cdFx0dHJhbnNpdGlvbkluOiAnZmFkZUluVXAnLCAvLyBib3VuY2VJbkxlZnQsIGJvdW5jZUluUmlnaHQsIGJvdW5jZUluVXAsIGJvdW5jZUluRG93biwgZmFkZUluLCBmYWRlSW5Eb3duLCBmYWRlSW5VcCwgZmFkZUluTGVmdCwgZmFkZUluUmlnaHQsIGZsaXBJblhcclxuXHRcdHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0JywgLy8gZmFkZU91dCwgZmFkZU91dFVwLCBmYWRlT3V0RG93biwgZmFkZU91dExlZnQsIGZhZGVPdXRSaWdodCwgZmxpcE91dFhcclxuXHRcdHRyYW5zaXRpb25Jbk1vYmlsZTogJ2ZhZGVJblVwJyxcclxuXHRcdHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0RG93bicsXHJcblx0XHRvbk9wZW46IGZ1bmN0aW9uICgpIHt9LFxyXG5cdFx0b25DbG9zZTogZnVuY3Rpb24gKCkge31cclxuXHR9O1xyXG5cclxuXHQvL1xyXG5cdC8vIE1ldGhvZHNcclxuXHQvL1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUG9seWZpbGwgZm9yIHJlbW92ZSgpIG1ldGhvZFxyXG5cdCAqL1xyXG5cdGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG5cdCAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuXHQgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBIHNpbXBsZSBmb3JFYWNoKCkgaW1wbGVtZW50YXRpb24gZm9yIEFycmF5cywgT2JqZWN0cyBhbmQgTm9kZUxpc3RzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gY29sbGVjdGlvbiBDb2xsZWN0aW9uIG9mIGl0ZW1zIHRvIGl0ZXJhdGVcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVyYXRpb25cclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gc2NvcGUgT2JqZWN0L05vZGVMaXN0L0FycmF5IHRoYXQgZm9yRWFjaCBpcyBpdGVyYXRpbmcgb3ZlciAoYWthIGB0aGlzYClcclxuXHQgKi9cclxuXHR2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjYWxsYmFjaywgc2NvcGUpIHtcclxuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29sbGVjdGlvbikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcblx0XHRcdGZvciAodmFyIHByb3AgaW4gY29sbGVjdGlvbikge1xyXG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29sbGVjdGlvbiwgcHJvcCkpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25bcHJvcF0sIHByb3AsIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoY29sbGVjdGlvbil7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgRGVmYXVsdCBzZXR0aW5nc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgb3B0aW9uc1xyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcclxuXHQgKi9cclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24gKGRlZmF1bHRzLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgZXh0ZW5kZWQgPSB7fTtcclxuXHRcdGZvckVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBleHRlbmRlZDtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgZnJhZ21lbnQgRE9NIGVsZW1lbnRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgY3JlYXRlRnJhZ0VsZW0gPSBmdW5jdGlvbihodG1sU3RyKSB7XHJcblx0XHR2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHRcdFx0dGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGVtcC5pbm5lckhUTUwgPSBodG1sU3RyO1xyXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRmcmFnLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZnJhZztcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgaXMgYSBjb2xvclxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGlzQ29sb3IgPSBmdW5jdGlvbihjb2xvcil7XHJcblx0XHRpZiggY29sb3Iuc3Vic3RyaW5nKDAsMSkgPT0gXCIjXCIgfHwgY29sb3Iuc3Vic3RyaW5nKDAsMykgPT0gXCJyZ2JcIiB8fCBjb2xvci5zdWJzdHJpbmcoMCwzKSA9PSBcImhzbFwiICl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEcmFnIG1ldGhvZCBvZiB0b2FzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBkcmFnID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFxyXG5cdCAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgbW92ZTogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgeHBvcykge1xyXG5cclxuXHQgICAgICAgIFx0dmFyIG9wYWNpdHksXHJcblx0ICAgICAgICBcdFx0b3BhY2l0eVJhbmdlID0gMC4zLFxyXG5cdCAgICAgICAgXHRcdGRpc3RhbmNlID0gMTgwO1xyXG5cdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcreHBvcyArICdweCknO1xyXG5cclxuXHQgICAgICAgICAgICBpZih4cG9zID4gMCl7XHJcblx0ICAgICAgICAgICAgXHRvcGFjaXR5ID0gKGRpc3RhbmNlLXhwb3MpIC8gZGlzdGFuY2U7XHJcblx0ICAgICAgICAgICAgXHRpZihvcGFjaXR5IDwgb3BhY2l0eVJhbmdlKXtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UuaGlkZShleHRlbmQoc2V0dGluZ3MsIHsgdHJhbnNpdGlvbk91dDogJ2ZhZGVPdXRSaWdodCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0UmlnaHQnIH0pLCB0b2FzdCwgJ2RyYWcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIFx0b3BhY2l0eSA9IChkaXN0YW5jZSt4cG9zKSAvIGRpc3RhbmNlO1xyXG5cdCAgICAgICAgICAgIFx0aWYob3BhY2l0eSA8IG9wYWNpdHlSYW5nZSl7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlLmhpZGUoZXh0ZW5kKHNldHRpbmdzLCB7IHRyYW5zaXRpb25PdXQ6ICdmYWRlT3V0TGVmdCcsIHRyYW5zaXRpb25PdXRNb2JpbGU6ICdmYWRlT3V0TGVmdCcgfSksIHRvYXN0LCAnZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdCAgICAgICAgICAgIH1cclxuXHRcdFx0XHR0b2FzdC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHRcdFxyXG5cdFx0XHRcdGlmKG9wYWNpdHkgPCBvcGFjaXR5UmFuZ2Upe1xyXG5cclxuXHRcdFx0XHRcdGlmKElTQ0hST01FIHx8IElTRklSRUZPWClcclxuXHRcdFx0XHRcdFx0dG9hc3Quc3R5bGUubGVmdCA9IHhwb3MrJ3B4JztcclxuXHJcblx0XHRcdFx0XHR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5UmFuZ2U7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcodG9hc3QsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICBzdGFydE1vdmluZzogZnVuY3Rpb24odG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZSkge1xyXG5cclxuXHQgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgdmFyIHBvc1ggPSAoKEFDQ0VQVFNUT1VDSCkgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WCksXHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0LnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdweCknLCAnJyk7XHJcblx0ICAgICAgICAgICAgICAgIHRvYXN0TGVmdCA9IHRvYXN0TGVmdC5yZXBsYWNlKCd0cmFuc2xhdGVYKCcsICcnKTtcclxuXHQgICAgICAgICAgICB2YXIgb2Zmc2V0WCA9IHBvc1ggLSB0b2FzdExlZnQ7XHJcblxyXG5cdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdFx0XHR0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbihlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBwb3NYID0gZS5jbGllbnRYLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsWCA9IHBvc1ggLSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnLm1vdmUodG9hc3QsIGluc3RhbmNlLCBzZXR0aW5ncywgZmluYWxYKTtcclxuXHQgICAgICAgICAgICAgICAgfTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHN0b3BNb3Zpbmc6IGZ1bmN0aW9uKHRvYXN0LCBlKSB7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChBQ0NFUFRTVE9VQ0gpIHtcclxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgXHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUub3BhY2l0eSA9IFwiXCI7XHJcblx0XHRcdFx0dG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xyXG5cdFx0XHRcdH0sIDQwMCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdH0oKTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERvIHRoZSBjYWxjdWxhdGlvbiB0byBtb3ZlIHRoZSBwcm9ncmVzcyBiYXJcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBtb3ZlUHJvZ3Jlc3MgPSBmdW5jdGlvbih0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKXtcclxuXHJcblx0XHR2YXIgaXNQYXVzZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc1Jlc2V0ZWQgPSBmYWxzZTtcclxuXHRcdHZhciBpc0Nsb3NlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHRpbWVyVGltZW91dCA9IG51bGw7XHJcblx0XHR2YXIgZWxlbSA9IHRvYXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrUExVR0lOX05BTUUrXCItcHJvZ3Jlc3NiYXIgZGl2XCIpO1xyXG5cdFx0dmFyIHByb2dyZXNzQmFyID0ge1xyXG5cdFx0XHRoaWRlRXRhOiBudWxsLFxyXG5cdFx0XHRtYXhIaWRlVGltZTogbnVsbCxcclxuXHRcdFx0Y3VycmVudFRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHR1cGRhdGVQcm9ncmVzczogZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNQYXVzZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1wYXVzZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRpc1Jlc2V0ZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1yZXNldGVkJykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0aXNDbG9zZWQgPSB0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUrJy1jbG9zZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYoaXNSZXNldGVkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHRcdFx0XHRcdG1vdmVQcm9ncmVzcyh0b2FzdCwgc2V0dGluZ3MsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dG9hc3QuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIWlzUGF1c2VkICYmICFpc1Jlc2V0ZWQgJiYgIWlzQ2xvc2VkKXtcclxuXHRcdFx0XHRcdHByb2dyZXNzQmFyLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3NCYXIuY3VycmVudFRpbWUrMTA7XHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9ICgocHJvZ3Jlc3NCYXIuaGlkZUV0YSAtIChwcm9ncmVzc0Jhci5jdXJyZW50VGltZSkpIC8gcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWUpICogMTAwO1xyXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2UgKyAnJSc7XHJcblxyXG5cdFx0XHRcdFx0aWYoTWF0aC5yb3VuZChwZXJjZW50YWdlKSA8IDAgfHwgdHlwZW9mIHRvYXN0ICE9ICdvYmplY3QnKXtcclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkge1xyXG5cdFx0XHRwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSA9IHBhcnNlRmxvYXQoc2V0dGluZ3MudGltZW91dCk7XHJcblx0XHRcdHByb2dyZXNzQmFyLmhpZGVFdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lO1xyXG5cdFx0XHR0aW1lclRpbWVvdXQgPSBzZXRJbnRlcnZhbChwcm9ncmVzc0Jhci51cGRhdGVQcm9ncmVzcywgMTApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3kgdGhlIGN1cnJlbnQgaW5pdGlhbGl6YXRpb24uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrUExVR0lOX05BTUUrJy13cmFwcGVyJyksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK1BMVUdJTl9OQU1FKSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1vcGVuJywge30sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoUExVR0lOX05BTUUrJy1jbG9zZScsIHt9LCBmYWxzZSk7XHJcblxyXG5cdFx0Ly8gUmVzZXQgdmFyaWFibGVzXHJcblx0XHRDT05GSUcgPSB7fTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIFBsdWdpblxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNldHRpbmdzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvLyBEZXN0cm95IGFueSBleGlzdGluZyBpbml0aWFsaXphdGlvbnNcclxuXHRcdCRpemlUb2FzdC5kZXN0cm95KCk7XHJcblxyXG5cdFx0Q09ORklHID0gb3B0aW9ucztcclxuXHRcdGRlZmF1bHRzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQnVpbGRpbmcgdGhlbWVzIGZ1bmN0aW9ucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdGZvckVhY2goVEhFTUVTLCBmdW5jdGlvbiAodGhlbWUsIG5hbWUpIHtcclxuXHJcblx0XHQkaXppVG9hc3RbbmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKHRoZW1lLCBzZXR0aW5ncyB8fCB7fSk7XHJcblxyXG5cdFx0XHR0aGlzLnNob3coc2V0dGluZ3MpO1xyXG5cdFx0fTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbG9zZSB0aGUgc3BlY2lmaWMgVG9hc3RcclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdCRpemlUb2FzdC5oaWRlID0gZnVuY3Rpb24gKG9wdGlvbnMsICR0b2FzdCwgY2xvc2VkQnkpIHtcclxuXHJcblx0XHR2YXIgc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cdFx0XHRjbG9zZWRCeSA9IGNsb3NlZEJ5IHx8IGZhbHNlO1xyXG5cclxuXHRcdGlmKHR5cGVvZiAkdG9hc3QgIT0gJ29iamVjdCcpe1xyXG5cdFx0XHQkdG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCR0b2FzdCk7XHJcblx0XHR9XHJcblx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNsb3NlZCcpO1xyXG5cclxuXHRcdGlmKHNldHRpbmdzLnRyYW5zaXRpb25JbiB8fCBzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW4pO1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy50cmFuc2l0aW9uSW5Nb2JpbGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dE1vYmlsZSlcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0TW9iaWxlKTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbk91dClcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy50cmFuc2l0aW9uT3V0KTtcclxuXHRcdH1cclxuXHRcdHZhciBIID0gJHRvYXN0LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IEgrJ3B4JztcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFxyXG5cdFx0aWYoIUlTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFV0lEVEgpe1xyXG5cdFx0XHQkdG9hc3QucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4ycyc7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JHRvYXN0LnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcblx0XHRcdCR0b2FzdC5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHRvYXN0LnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LDIwMCk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR2YXIgZXZlbnQ7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG5cdFx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHtkZXRhaWw6IHtjbGFzczogc2V0dGluZ3MuY2xhc3N9fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRcdFx0XHRldmVudC5pbml0Q3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1jbG9zZScsIHRydWUsIHRydWUsIHtjbGFzczogc2V0dGluZ3MuY2xhc3N9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRcdH0gY2F0Y2goZXgpe1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihleCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0eXBlb2Ygc2V0dGluZ3Mub25DbG9zZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdHNldHRpbmdzLm9uQ2xvc2UuYXBwbHkobnVsbCwgW3NldHRpbmdzLCAkdG9hc3QsIGNsb3NlZEJ5XSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGFuZCBzaG93IHRoZSBUb2FzdFxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0JGl6aVRvYXN0LnNob3cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBNZXJnZSB1c2VyIG9wdGlvbnMgd2l0aCBkZWZhdWx0c1xyXG5cdFx0dmFyIHNldHRpbmdzID0gZXh0ZW5kKENPTkZJRywgb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG5cdFx0dmFyICR0b2FzdENhcHN1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHQkdG9hc3RDYXBzdWxlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrXCItY2Fwc3VsZVwiKTtcclxuXHJcblx0XHR2YXIgJHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUpO1xyXG5cclxuXHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluTW9iaWxlLmxlbmd0aD4wKVxyXG5cdFx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnRyYW5zaXRpb25Jbk1vYmlsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihzZXR0aW5ncy50cmFuc2l0aW9uSW4ubGVuZ3RoPjApXHJcblx0XHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MudHJhbnNpdGlvbkluKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5ydGwpe1xyXG5cdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctcnRsJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNvbG9yLmxlbmd0aCA+IDApIHsgLy8jLCByZ2IsIHJnYmEsIGhzbFxyXG5cdFx0XHRcclxuXHRcdFx0aWYoIGlzQ29sb3Ioc2V0dGluZ3MuY29sb3IpICl7XHJcblx0XHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jb2xvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3QuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLWNvbG9yLScrc2V0dGluZ3MuY29sb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHRvYXN0LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmNsYXNzKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuY2xhc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pbWFnZSkge1xyXG5cdFx0XHR2YXIgJGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGNvdmVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNvdmVyJyk7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS53aWR0aCA9IHNldHRpbmdzLmltYWdlV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdCRjb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBzZXR0aW5ncy5pbWFnZSArICcpJztcclxuXHRcdFx0JHRvYXN0LmFwcGVuZENoaWxkKCRjb3Zlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRidXR0b25DbG9zZTtcclxuXHRcdGlmKHNldHRpbmdzLmNsb3NlKXtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdFx0JGJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLWNsb3NlJyk7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkYnV0dG9uQ2xvc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ0xlZnQgPSBcIjMwcHhcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3Quc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MucHJvZ3Jlc3NCYXIpIHtcclxuXHJcblx0XHRcdHZhciAkcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdCRwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1wcm9ncmVzc2JhcicpO1xyXG5cclxuXHRcdFx0dmFyICRwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHByb2dyZXNzQmFyRGl2LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5wcm9ncmVzc0JhckNvbG9yO1xyXG5cclxuXHRcdFx0JHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKCRwcm9ncmVzc0JhckRpdik7XHJcblx0XHRcdCR0b2FzdC5hcHBlbmRDaGlsZCgkcHJvZ3Jlc3NCYXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRtb3ZlUHJvZ3Jlc3MoJHRvYXN0LCBzZXR0aW5ncywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHRoYXQuaGlkZShzZXR0aW5ncywgJHRvYXN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwzMDApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiggc2V0dGluZ3MucHJvZ3Jlc3NCYXIgPT09IGZhbHNlICYmIHNldHRpbmdzLnRpbWVvdXQgPiAwKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCk7XHJcblx0XHRcdH0sIHNldHRpbmdzLnRpbWVvdXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkdG9hc3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JHRvYXN0Qm9keS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FICsgJy1ib2R5Jyk7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmltYWdlKSB7XHJcblx0XHRcdGlmKHNldHRpbmdzLnJ0bCl7XHJcblx0XHRcdFx0JHRvYXN0Qm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IChzZXR0aW5ncy5pbWFnZVdpZHRoICsgMTApICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLm1hcmdpbkxlZnQgPSAoc2V0dGluZ3MuaW1hZ2VXaWR0aCArIDEwKSArICdweCc7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdHZhciAkaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cdFx0XHRcdCRpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFBMVUdJTl9OQU1FICsgJy1pY29uICcgKyBzZXR0aW5ncy5pY29uKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uVGV4dCl7XHJcblx0XHRcdFx0JGljb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2V0dGluZ3MuaWNvblRleHQpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2V0dGluZ3MucnRsKXtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICczM3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9hc3RCb2R5LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzMzcHgnO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uQ29sb3Ipe1xyXG5cdFx0XHRcdCRpY29uLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MuaWNvbkNvbG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJGljb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuXHRcdGlmIChzZXR0aW5ncy50aXRsZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHN0cm9uZy5zdHlsZS5jb2xvciA9IHNldHRpbmdzLnRpdGxlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkc3Ryb25nLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHNldHRpbmdzLnRpdGxlKSk7XHJcblxyXG5cdFx0dmFyICRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRpZiAoc2V0dGluZ3MubWVzc2FnZUNvbG9yLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JHAuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy5tZXNzYWdlQ29sb3I7XHJcblx0XHR9XHJcblx0XHQkcC5hcHBlbmRDaGlsZChjcmVhdGVGcmFnRWxlbShzZXR0aW5ncy5tZXNzYWdlKSk7XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MubGF5b3V0ID4gMSl7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWxheW91dFwiK3NldHRpbmdzLmxheW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoc2V0dGluZ3MuYmFsbG9vbil7XHJcblx0XHRcdCR0b2FzdC5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FK1wiLWJhbGxvb25cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkc3Ryb25nKTtcclxuXHRcdCR0b2FzdEJvZHkuYXBwZW5kQ2hpbGQoJHApO1xyXG5cclxuXHRcdHZhciAkYnV0dG9ucztcclxuXHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdCRidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0JGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctYnV0dG9ucycpO1xyXG5cclxuXHRcdFx0JHAuc3R5bGUubWFyZ2luUmlnaHQgPSAnMTVweCc7XHJcblxyXG5cdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdGZvckVhY2goc2V0dGluZ3MuYnV0dG9ucywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xyXG5cdFx0XHRcdCRidXR0b25zLmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdFbGVtKHZhbHVlWzBdKSk7XHJcblxyXG5cdFx0XHRcdHZhciAkYnRucyA9ICRidXR0b25zLmNoaWxkTm9kZXM7XHJcblxyXG5cdFx0XHRcdCRidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHZhciB0cyA9IHZhbHVlWzFdO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyB0cyh0aGF0LCAkdG9hc3QpOyBcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0Qm9keS5hcHBlbmRDaGlsZCgkYnV0dG9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvYXN0LmFwcGVuZENoaWxkKCR0b2FzdEJvZHkpO1xyXG5cdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblx0XHQkdG9hc3RDYXBzdWxlLmFwcGVuZENoaWxkKCR0b2FzdCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIEggPSAkdG9hc3Qub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHR2YXIgc3R5bGUgPSAkdG9hc3QuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCR0b2FzdCk7XHJcblx0XHRcdHZhciBtYXJnaW5Ub3AgPSBzdHlsZS5tYXJnaW5Ub3A7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gbWFyZ2luVG9wLnNwbGl0KFwicHhcIik7XHJcblx0XHRcdFx0bWFyZ2luVG9wID0gcGFyc2VJbnQobWFyZ2luVG9wWzBdKTtcclxuXHRcdFx0dmFyIG1hcmdpbkJvdHRvbSA9IHN0eWxlLm1hcmdpbkJvdHRvbTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b20uc3BsaXQoXCJweFwiKTtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b20gPSBwYXJzZUludChtYXJnaW5Cb3R0b21bMF0pO1xyXG5cclxuXHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcblx0XHRcdCR0b2FzdENhcHN1bGUuc3R5bGUuaGVpZ2h0ID0gKEgrbWFyZ2luQm90dG9tK21hcmdpblRvcCkrJ3B4JztcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkdG9hc3RDYXBzdWxlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cdFx0XHRcdFx0JHRvYXN0Q2Fwc3VsZS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sMTAwMCk7XHJcblx0XHR9LCAxMDApO1xyXG5cclxuXHRcdHZhciBwb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLFxyXG5cdFx0XHQkd3JhcHBlcjtcclxuXHJcblx0XHRpZihzZXR0aW5ncy50YXJnZXQpe1xyXG5cclxuXHRcdFx0JHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnRhcmdldCk7XHJcblx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUgKyAnLXRhcmdldCcpO1xyXG5cclxuXHRcdFx0aWYgKHNldHRpbmdzLnRhcmdldEZpcnN0KSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaW5zZXJ0QmVmb3JlKCR0b2FzdENhcHN1bGUsICR3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmFwcGVuZENoaWxkKCR0b2FzdENhcHN1bGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmKCBQT1NJVElPTlMuaW5kZXhPZihzZXR0aW5ncy5wb3NpdGlvbikgPT0gLTEgKXtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbXCIrUExVR0lOX05BTUUrXCJdIEluY29ycmVjdCBwb3NpdGlvbi5cXG5JdCBjYW4gYmUg4oC6IFwiICsgUE9TSVRJT05TKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKElTTU9CSUxFIHx8IHdpbmRvdy5pbm5lcldpZHRoIDw9IE1PQklMRVdJRFRIKXtcclxuXHRcdFx0XHRpZihzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbUxlZnRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcImJvdHRvbVJpZ2h0XCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJib3R0b21DZW50ZXJcIil7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1ib3R0b21DZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wUmlnaHRcIiB8fCBzZXR0aW5ncy5wb3NpdGlvbiA9PSBcInRvcENlbnRlclwiKXtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gUExVR0lOX05BTUUrJy13cmFwcGVyLXRvcENlbnRlcic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci1jZW50ZXInO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwb3NpdGlvbiA9IFBMVUdJTl9OQU1FKyctd3JhcHBlci0nK3Bvc2l0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdCR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBQTFVHSU5fTkFNRSArICctd3JhcHBlci4nK3Bvc2l0aW9uKTtcclxuXHJcblx0XHRcdGlmICghJHdyYXBwZXIpIHtcclxuXHRcdFx0XHQkd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0JHdyYXBwZXIuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSArICctd3JhcHBlcicpO1xyXG5cdFx0XHRcdCR3cmFwcGVyLmNsYXNzTGlzdC5hZGQocG9zaXRpb24pO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHdyYXBwZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wTGVmdFwiIHx8IHNldHRpbmdzLnBvc2l0aW9uID09IFwidG9wQ2VudGVyXCIgfHwgc2V0dGluZ3MucG9zaXRpb24gPT0gXCJ0b3BSaWdodFwiKXtcclxuXHRcdFx0XHQkd3JhcHBlci5pbnNlcnRCZWZvcmUoJHRvYXN0Q2Fwc3VsZSwgJHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuYXBwZW5kQ2hpbGQoJHRvYXN0Q2Fwc3VsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWlzTmFOKHNldHRpbmdzLnppbmRleCkpIHtcclxuXHRcdFx0JHdyYXBwZXIuc3R5bGUuekluZGV4ID0gc2V0dGluZ3MuemluZGV4O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiW1wiK1BMVUdJTl9OQU1FK1wiXSBJbnZhbGlkIHpJbmRleC5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3Mub25PcGVuLmFwcGx5KG51bGwsIFtzZXR0aW5ncywgJHRvYXN0XSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGV2ZW50O1xyXG5cdFx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoUExVR0lOX05BTUUrJy1vcGVuJywge2RldGFpbDoge2NsYXNzOiBzZXR0aW5ncy5jbGFzc319KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG5cdFx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChQTFVHSU5fTkFNRSsnLW9wZW4nLCB0cnVlLCB0cnVlLCB7Y2xhc3M6IHNldHRpbmdzLmNsYXNzfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9IGNhdGNoKGV4KXtcclxuXHRcdFx0Y29uc29sZS53YXJuKGV4KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5hbmltYXRlSW5zaWRlKXtcclxuXHRcdFx0JHRvYXN0LmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUrJy1hbmltYXRlSW5zaWRlJyk7XHJcblx0XHRcclxuXHRcdFx0dmFyIHRpbWVBbmltYXRpb24xID0gMjAwO1xyXG5cdFx0XHR2YXIgdGltZUFuaW1hdGlvbjIgPSAxMDA7XHJcblx0XHRcdHZhciB0aW1lQW5pbWF0aW9uMyA9IDMwMDtcclxuXHRcdFx0aWYoc2V0dGluZ3MudHJhbnNpdGlvbkluID09IFwiYm91bmNlSW5MZWZ0XCIpe1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24xID0gNDAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24yID0gMjAwO1xyXG5cdFx0XHRcdHRpbWVBbmltYXRpb24zID0gNDAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCRzdHJvbmcuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24xKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHAuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbicpO1xyXG5cdFx0XHR9LHRpbWVBbmltYXRpb24yKTtcclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5pY29uKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCRpY29uLmNsYXNzTGlzdC5hZGQoJ3JldmVhbEluJyk7XHJcblx0XHRcdFx0fSx0aW1lQW5pbWF0aW9uMyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZXR0aW5ncy5idXR0b25zLmxlbmd0aCA+IDAgJiYgJGJ1dHRvbnMpIHtcclxuXHRcdFx0XHR2YXIgY291bnRlciA9IDE1MDtcclxuXHRcdFx0XHRmb3JFYWNoKCRidXR0b25zLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXZlYWxJbicpO1xyXG5cdFx0XHRcdFx0fSxjb3VudGVyKTtcclxuXHRcdFx0XHRcdGNvdW50ZXIgPSBjb3VudGVyICsgY291bnRlcjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZigkYnV0dG9uQ2xvc2Upe1xyXG5cdFx0XHQkYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBidXR0b24gPSBlLnRhcmdldDtcclxuXHRcdFx0XHR0aGF0LmhpZGUoc2V0dGluZ3MsICR0b2FzdCwgJ2J1dHRvbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5wYXVzZU9uSG92ZXIpe1xyXG5cdFx0XHRcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSsnLXBhdXNlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzZXR0aW5ncy5yZXNldE9uSG92ZXIpe1xyXG5cclxuXHRcdFx0JHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSsnLXJlc2V0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUrJy1yZXNldGVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHNldHRpbmdzLmRyYWcpe1xyXG5cclxuXHRcdFx0aWYgKEFDQ0VQVFNUT1VDSCkge1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgICAgICBkcmFnLnN0b3BNb3ZpbmcodGhpcywgZSk7XHJcblx0XHRcdCAgICB9LCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQgICAgJHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgICAgICAgIGRyYWcuc3RhcnRNb3ZpbmcodGhpcywgdGhhdCwgc2V0dGluZ3MsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0ICAgICR0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgICAgICAgZHJhZy5zdG9wTW92aW5nKHRoaXMsIGUpO1xyXG5cdFx0XHQgICAgfSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gJGl6aVRvYXN0O1xyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDA4LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vZWxlbWVudHMvcHJvZmlsZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKHVzZXIpO1xyXG4gICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHVzZXI7XHJcbiAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyKHVzZXIpIHtcclxuICAgICAgICBsZXQgcHJvZmlsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgbGV0IHByb2ZpbGUgPSBuZXcgUHJvZmlsZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiB1c2VyLnJhdGluZyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2cgT3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi1sb2dvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGl2OiBwcm9maWxlRGl2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvYWN0aW9ucy9nZXRVc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZ2FtZS91c2VyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUFjdGlvbnMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5idG5QbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wbGF5Jyk7XHJcbiAgICAgICAgdGhpcy5idG5BYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWJvdXQnKTtcclxuICAgICAgICB0aGlzLmJ0bkxlYWRlckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sZWFkZXJib2FyZCcpO1xyXG4gICAgICAgIHRoaXMuYnRuTW9kYWxDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jbG9zZScpO1xyXG4gICAgICAgIHRoaXMuY3Vyck1vZGFsID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMubW9kYWxMZWFkZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1sZWFkZXJib2FyZCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxBYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hYm91dCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWdhbWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5Ub1NpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdG8tc2lnbnVwJyk7XHJcbiAgICAgICAgdGhpcy5idG5Ub0xvZ0luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10by1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMuZGl2TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWxvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5kaXZTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LXNpZ251cCcpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRNZW51QnV0dG9uc0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuaW5pdExvZ2luQnV0dG9uc0xpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNZW51QnV0dG9uc0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rpdih0aGlzLm1vZGFsRGl2KTtcclxuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobmV3IFVzZXIoKS5vYmopID09PSBKU09OLnN0cmluZ2lmeSh7fSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGl2KHRoaXMubW9kYWxMb2dpbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJNb2RhbCh0aGlzLm1vZGFsTG9naW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGl2KHRoaXMubW9kYWxHYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyck1vZGFsKHRoaXMubW9kYWxHYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5tb2RhbERpdik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rpdih0aGlzLm1vZGFsQWJvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJNb2RhbCh0aGlzLm1vZGFsQWJvdXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkxlYWRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5tb2RhbERpdik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rpdih0aGlzLm1vZGFsTGVhZGVyQm9hcmQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJNb2RhbCh0aGlzLm1vZGFsTGVhZGVyQm9hcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuTW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGl2KHRoaXMubW9kYWxEaXYpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVDdXJyTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TG9naW5CdXR0b25zTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYnRuVG9TaWduVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rpdih0aGlzLmRpdlNpZ25VcCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpdih0aGlzLmRpdkxvZ2luKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5Ub0xvZ0luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaXYodGhpcy5kaXZMb2dpbik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpdih0aGlzLmRpdlNpZ25VcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZURpdihkaXYpIHtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpdihkaXYpIHtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3Vyck1vZGFsKG1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyTW9kYWwgPSBtb2RhbDtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQ3Vyck1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY3Vyck1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9hY3Rpb25zL21lbnVBY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBEZW5pcyBvbiAwMi4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gJy4uL2FjdGlvbnMvY2hlY2tGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmF0dHJzID0gb3B0aW9ucy5hdHRycyB8fCBbXTtcclxuICAgICAgICB0aGlzLmhlbHBfYXR0cnMgPSBvcHRpb25zLmhlbHBfYXR0cnMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5oZWxwX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5hdHRycywgdGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnModGhpcy5oZWxwX2F0dHJzLCB0aGlzLmhlbHBfZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbC5vdXRlckhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJldikge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgaWYgKENoZWNrRmllbGRzLmNoZWNrRW1wdHkodGhpcy5lbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRTZXRFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgJ2VtcHR5IGZpZWxkJyk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgJycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndmFsaWQnKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkID09PSAnbG9naW4nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gQ2hlY2tGaWVsZHMuY2hlY2tMb2dpbih7ZmllbGQ6IHRoaXMuZWwsIGhlbHA6IHRoaXMuaGVscF9lbH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCA9PT0gJ3JlcGVhdHBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IENoZWNrRmllbGRzLmNoZWNrUGFzc3dvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiBwcmV2LmVsLCBoZWxwOiBwcmV2LmhlbHBfZWx9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZDogdGhpcy5lbCwgaGVscDogdGhpcy5oZWxwX2VsfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5oZWxwU2V0VGV4dCh0aGlzLmhlbHBfZWwsICcnKTtcclxuICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFNldFRleHQodGhpcy5lbCwgJycpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkUmVtb3ZlT2sodGhpcy5lbCk7XHJcbiAgICAgICAgQ2hlY2tGaWVsZHMuZmllbGRSZW1vdmVFcnIodGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNEdXBsaWNhdGVkRGVjbGFyYXRpb25cclxuICAgIHNldEVycm9yKCkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTRHVwbGljYXRlZERlY2xhcmF0aW9uXHJcbiAgICBzZXRFcnJvcih2YWx1ZSkge1xyXG4gICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMuZWwpO1xyXG4gICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMuaGVscF9lbCwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21lbnUvZWxlbWVudHMvaW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlbmlzIG9uIDAyLjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gJy4uL2FjdGlvbnMvY2hlY2tGaWVsZHMnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vZWxlbWVudHMvcHJvZmlsZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2dhbWUvdXNlcic7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vZWxlbWVudHMvcHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXYtbG9naW4nKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nIEluJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmY29udGFpbmVyLWNvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdMb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2wtbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBfYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbC1sb2dpbi1oZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncF9fZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsLXBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduIHVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi10by1zaWdudXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdExpc3RlbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5sb2dpbkZvcm0uZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtbG9naW4nKTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wtcGFzc3dvcmQnKTtcclxuICAgICAgICB0aGlzLmxvZ2luSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvZ2luLWhlbHAnKTtcclxuICAgICAgICB0aGlzLmJ0bkxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL1N1Ym1pdCBmb3JtXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0ZpZWxkcygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMubG9naW5Gb3JtLmdldEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5sb2dpbihib2R5KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsTG9naW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbExvZ2luRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZmlsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2ZpbGUgPSBuZXcgUHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiB1c2VyLnJhdGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2cgT3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2J0bi1sb2dvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaDMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2OiBwcm9maWxlRGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlcigpLm9iaiA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0RXJyb3IoJ3dyb25nIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvZ3Jlc3NCYXIsIHRoaXMuYnRuTG9naW4ubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBQcm9ncmVzc0Jhci5zbGVlcCg1MDApO1xyXG4gICAgICAgIHRoaXMuYnRuTG9naW4uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnRuTG9naW4ubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ZpZWxkcygpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVsZW0udmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5maWVsZHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICBlbGVtLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS9mb3Jtcy9sb2dpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDIuMDMuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcclxuaW1wb3J0IENoZWNrRmllbGRzIGZyb20gJy4uL2FjdGlvbnMvY2hlY2tGaWVsZHMnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL2VsZW1lbnRzL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0IEl6aVRvYXN0IGZyb20gJ2l6aXRvYXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcEZvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpdi1zaWdudXAnKTtcclxuICAgICAgICB0aGlzLmxvZ2luRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpdi1sb2dpbicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2Zjb250YWluZXItY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItbG9naW4taGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnci1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscF9hdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXBhc3N3b3JkLWhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwX19lcnJvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXBlYXQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyLXJlcGVhdHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBlYXRwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ3JlcGVhdHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwX2F0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ItcmVwZWF0cGFzc3dvcmQtaGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BfX2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVnaXN0cmF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYnRuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYnRuLXNpZ251cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG4tdG8tbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5zaWdudXBEaXYuYXBwZW5kQ2hpbGQodGhpcy5zaWdudXBGb3JtLmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLWxvZ2luJyk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgdGhpcy5yZXBlYXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyLXJlcGVhdHBhc3N3b3JkJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5IZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItbG9naW4taGVscCcpO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcGFzc3dvcmQtaGVscCcpO1xyXG4gICAgICAgIHRoaXMucmVwZWF0UGFzc3dvcmRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ItcmVwZWF0cGFzc3dvcmQtaGVscCcpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0blNpZ25VcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2lnbnVwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vU3VibWl0IGZvcm1cclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0uZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWVsZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLnNpZ251cEZvcm0uZ2V0Rm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLnNpZ251cChib2R5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Mb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDaGVja0ZpZWxkcy5maWVsZFJlbW92ZU9rKHRoaXMubG9naW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrRmllbGRzLmZpZWxkU2V0RXJyKHRoaXMubG9naW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrRmllbGRzLmhlbHBTZXRUZXh0KHRoaXMubG9naW5IZWxwLCAnbG9naW4gdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5idG5TaWduVXAuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKS5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmJ0blNpZ25VcC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9ncmVzc0JhciwgdGhpcy5idG5TaWduVXAubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBQcm9ncmVzc0Jhci5zbGVlcCg1MDApO1xyXG4gICAgICAgIHRoaXMuYnRuU2lnblVwLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuU2lnblVwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idG5TaWduVXAubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBJemlUb2FzdC5zdWNjZXNzKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPSycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ZpZWxkcygpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZWxlbS52YWxpZGF0ZShwcmV2KTtcclxuICAgICAgICAgICAgcHJldiA9IGVsZW07XHJcbiAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLmZpZWxkcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tZW51L2Zvcm1zL3NpZ251cC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDQuMDMuMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc3VwcG9ydC9zZXJ2aWNlL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL2VsZW1lbnRzL3Byb2dyZXNzQmFyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyQm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGxlYWRlckJvYXJkU291cmNlID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyN3aXRoIHRpdGxlc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3t0aXRsZX19PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svd2l0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwie3tjb250cm9sLmNsYXNzfX1cIiBpZD1cInt7Y29udHJvbC5pZH19XCI+e3tjb250cm9sLnRleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgbGVhZGVyYm9hcmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIGxlYWRlcmJvYXJkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPnt7bG9naW59fTxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e3JhdGluZ319PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fWA7XHJcbiAgICAgICAgbGV0IGxlYWRlckJvYXJkVGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUobGVhZGVyQm9hcmRTb3VyY2UpO1xyXG4gICAgICAgIFByb2dyZXNzQmFyLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgcmV0dXJuIGxlYWRlckJvYXJkVGVtcGxhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExlYWRlckJvYXJkKCkge1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyKGxlYWRlckJvYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0TGVhZGVycygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVhZGVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSByZXNwb25zZS5sZWFkZXJzO1xyXG4gICAgICAgICAgICBsZWFkZXJCb2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RvcCBwbGF5ZXJzOicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVhZGVyYm9hcmQ6IGFycixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ3JlZnJlc2gtbGInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxlYWRlckJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucmVuZGVyKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTm8gY29ubmVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ3JlZnJlc2gtbGInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRSZWZyZXNoTGlzdGVuZXIoKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlZnJlc2hMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgcmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWxiJyk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExlYWRlckJvYXJkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc0Jhcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ldyBQcm9ncmVzc0JhcigpLnJlbmRlcigpKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS90ZW1wbGF0ZXMvbGVhZGVyQm9hcmQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=