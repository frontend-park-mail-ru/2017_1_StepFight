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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

module.exports = function (obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

   includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40

};


/***/ }),
/* 3 */,
/* 4 */,
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(17);
var getProperties = __webpack_require__(66);
var getEnumerableProperties = __webpack_require__(63);

module.exports = inspect;

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      var name = getName(value);
      var nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var name = getName(value);
    var nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str;
  if (value.__lookupGetter__) {
    if (value.__lookupGetter__(key)) {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch(e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

module.exports = function (obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getName(func)
 *
 * Gets the name of a function, in a cross-browser way.
 *
 * @param {Function} a function (usually a constructor)
 * @namespace Utils
 * @name getName
 */

module.exports = function (func) {
  if (func.name) return func.name;

  var match = /^\s?function ([^(]*)\(/.exec(func);
  return match && match[1] ? match[1] : "";
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var hasProperty = __webpack_require__(19);

/**
 * ### .getPathInfo(path, object)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

module.exports = function getPathInfo(path, obj) {
  var parsed = parsePath(path),
      last = parsed[parsed.length - 1];

  var info = {
    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: _getPathValue(parsed, obj)
  };
  info.exists = hasProperty(info.name, info.parent);

  return info;
};


/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath (path) {
  var str = path.replace(/([^\\])\[/g, '$1.[')
    , parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function (value) {
    var re = /^\[(\d+)\]$/
      , mArr = re.exec(value);
    if (mArr) return { i: parseFloat(mArr[1]) };
    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
  });
}


/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */

function _getPathValue (parsed, obj, index) {
  var tmp = obj
    , res;

  index = (index === undefined ? parsed.length : index);

  for (var i = 0, l = index; i < l; i++) {
    var part = parsed[i];
    if (tmp) {
      if ('undefined' !== typeof part.p)
        tmp = tmp[part.p];
      else if ('undefined' !== typeof part.i)
        tmp = tmp[part.i];
      if (i == (l - 1)) res = tmp;
    } else {
      res = undefined;
    }
  }
  return res;
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var type = __webpack_require__(10);

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has
 * named property or numeric array index.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with natives
 * and null/undefined values.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty('str', obj);  // true
 *     hasProperty('constructor', obj);  // true
 *     hasProperty('bar', obj);  // false
 *
 *     hasProperty('length', obj.str); // true
 *     hasProperty(1, obj.str);  // true
 *     hasProperty(5, obj.str);  // false
 *
 *     hasProperty('length', obj.arr);  // true
 *     hasProperty(2, obj.arr);  // true
 *     hasProperty(3, obj.arr);  // false
 *
 * @param {Objuect} object
 * @param {String|Number} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

var literals = {
    'number': Number
  , 'string': String
};

module.exports = function hasProperty(name, obj) {
  var ot = type(obj);

  // Bad Object, obviously no props at all
  if(ot === 'null' || ot === 'undefined')
    return false;

  // The `in` operator does not work with certain literals
  // box these before the check
  if(literals[ot] && typeof obj !== 'object')
    obj = new literals[ot](obj);

  return name in obj;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = __webpack_require__(9);
var config = __webpack_require__(2);

/**
 * ### .objDisplay (object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

module.exports = function (obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, and `message`)
 * will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

module.exports = function (assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// /**
//  * Created by Denis on 10.03.2017.
//  */
// import chai from 'chai';
// import UserService from '../src/js/support/service/UserService';
//
// mocha.setup('bdd');
// let expect = chai.expect;
// let should = chai.should();
//
//
// let user = {
//     login: `testuser${Math.random() * (Number.MAX_SAFE_INTEGER)}`,
//     password: 'testpass1'
// };
//
//
// describe('User Service', function () {
//     describe('Sign Up User', function () {
//         it('success signup', function (done) {
//             new UserService().signup(user).then(response => {
//                 response.result.should.equal('success');
//                 done();
//             });
//         });
//         it('error signup', function (done) {
//             new UserService().signup(user).catch(err=>{
//                 err.result.should.equal('error');
//                 done();
//             });
//         });
//
//     });
//     describe('Log In User', function () {
//         it('success login', function (done) {
//             new UserService().login(user).then(response => {
//                 expect(response.login).to.be.not.empty;
//                 done();
//             });
//         });
//         it('error login', function (done) {
//             user.login='-1';
//             new UserService().login(user).catch(err=>{
//                 done();
//             });
//         });
//     });
//     describe('Get User / Logout User', function () {
//         it('success get', function (done) {
//             new UserService().getUser().then(response => {
//                 expect(response.login).to.be.not.empty;
//                 done();
//             });
//         });
//         it('success logout', function (done) {
//             new UserService().logOutUser().then(response => {
//                 response.status.should.equal('200 OK');
//                 done();
//             });
//         });
//         it('error get', function (done) {
//             new UserService().getUser().catch(err=>{
//                 done();
//             });
//         });
//     });
//     describe('Get Leaders', function () {
//         it('success get', function (done) {
//             new UserService().getLeaders().then(response => {
//                 expect(response.leaders).to.be.array;
//                 done();
//             });
//         });
//     });
// });
// mocha.checkLeaks();
// mocha.run();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
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

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(51)
var ieee754 = __webpack_require__(118)
var isArray = __webpack_require__(119)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = []
  , exports = module.exports = {};

/*!
 * Chai version
 */

exports.version = '3.5.0';

/*!
 * Assertion Error
 */

exports.AssertionError = __webpack_require__(12);

/*!
 * Utils for plugins (not exported)
 */

var util = __webpack_require__(67);

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(this, util);
    used.push(fn);
  }

  return this;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = __webpack_require__(2);
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = __webpack_require__(54);
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = __webpack_require__(55);
exports.use(core);

/*!
 * Expect interface
 */

var expect = __webpack_require__(57);
exports.use(expect);

/*!
 * Should interface
 */

var should = __webpack_require__(58);
exports.use(should);

/*!
 * Assert interface
 */

var assert = __webpack_require__(56);
exports.use(assert);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(2);

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */

  function Assertion (obj, msg, stack) {
    flag(this, 'ssfi', stack || arguments.callee);
    flag(this, 'object', obj);
    flag(this, 'message', msg);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (true !== showDiff) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      var msg = util.getMessage(this, arguments)
        , actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , toString = Object.prototype.toString
    , flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to
   * improve the readability of your assertions. They
   * do not provide testing capabilities unless they
   * have been overwritten by a plugin.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */

  [ 'to', 'be', 'been'
  , 'is', 'and', 'has', 'have'
  , 'with', 'that', 'which', 'at'
  , 'of', 'same' ].forEach(function (chain) {
    Assertion.addProperty(chain, function () {
      return this;
    });
  });

  /**
   * ### .not
   *
   * Negates any of assertions following in the chain.
   *
   *     expect(foo).to.not.equal('bar');
   *     expect(goodFn).to.not.throw(Error);
   *     expect({ foo: 'baz' }).to.have.property('foo')
   *       .and.not.equal('bar');
   *
   * @name not
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Sets the `deep` flag, later used by the `equal` and
   * `property` assertions.
   *
   *     expect(foo).to.deep.equal({ bar: 'baz' });
   *     expect({ foo: { bar: { baz: 'quux' } } })
   *       .to.have.deep.property('foo.bar.baz', 'quux');
   *
   * `.deep.property` special characters can be escaped
   * by adding two slashes before the `.` or `[]`.
   *
   *     var deepCss = { '.link': { '[target]': 42 }};
   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
   *
   * @name deep
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .any
   *
   * Sets the `any` flag, (opposite of the `all` flag)
   * later used in the `keys` assertion.
   *
   *     expect(foo).to.have.any.keys('bar', 'baz');
   *
   * @name any
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false)
  });


  /**
   * ### .all
   *
   * Sets the `all` flag (opposite of the `any` flag)
   * later used by the `keys` assertion.
   *
   *     expect(foo).to.have.all.keys('bar', 'baz');
   *
   * @name all
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
  });

  /**
   * ### .a(type)
   *
   * The `a` and `an` assertions are aliases that can be
   * used either as language chains or to assert a value's
   * type.
   *
   *     // typeof
   *     expect('test').to.be.a('string');
   *     expect({ foo: 'bar' }).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(new Promise).to.be.a('promise');
   *     expect(new Float32Array()).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   *     // es6 overrides
   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
   *
   *     // language chain
   *     expect(foo).to.be.an.instanceof(Foo);
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj)
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(value)
   *
   * The `include` and `contain` assertions can be used as either property
   * based language chains or as methods to assert the inclusion of an object
   * in an array or a substring in a string. When used as language chains,
   * they toggle the `contains` flag for the `keys` assertion.
   *
   *     expect([1,2,3]).to.include(2);
   *     expect('foobar').to.contain('foo');
   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Object|String|Number} obj
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    _.expectTypes(this, ['array', 'object', 'string']);

    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var expected = false;

    if (_.type(obj) === 'array' && _.type(val) === 'object') {
      for (var i in obj) {
        if (_.eql(obj[i], val)) {
          expected = true;
          break;
        }
      }
    } else if (_.type(val) === 'object') {
      if (!flag(this, 'negate')) {
        for (var k in val) new Assertion(obj).property(k, val[k]);
        return;
      }
      var subset = {};
      for (var k in val) subset[k] = obj[k];
      expected = _.eql(subset, val);
    } else {
      expected = (obj != undefined) && ~obj.indexOf(val);
    }
    this.assert(
        expected
      , 'expected #{this} to include ' + _.inspect(val)
      , 'expected #{this} to not include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is truthy.
   *
   *     expect('everything').to.be.ok;
   *     expect(1).to.be.ok;
   *     expect(false).to.not.be.ok;
   *     expect(undefined).to.not.be.ok;
   *     expect(null).to.not.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is `true`.
   *
   *     expect(true).to.be.true;
   *     expect(1).to.not.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , this.negate ? false : true
    );
  });

  /**
   * ### .false
   *
   * Asserts that the target is `false`.
   *
   *     expect(false).to.be.false;
   *     expect(0).to.not.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , this.negate ? true : false
    );
  });

  /**
   * ### .null
   *
   * Asserts that the target is `null`.
   *
   *     expect(null).to.be.null;
   *     expect(undefined).to.not.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *     expect(null).to.not.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
  });

  /**
   * ### .NaN
   * Asserts that the target is `NaN`.
   *
   *     expect('foo').to.be.NaN;
   *     expect(4).not.to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('NaN', function () {
    this.assert(
        isNaN(flag(this, 'object'))
        , 'expected #{this} to be NaN'
        , 'expected #{this} not to be NaN'
    );
  });

  /**
   * ### .exist
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi'
   *       , bar = null
   *       , baz;
   *
   *     expect(foo).to.exist;
   *     expect(bar).to.not.exist;
   *     expect(baz).to.not.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('exist', function () {
    this.assert(
        null != flag(this, 'object')
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
  });


  /**
   * ### .empty
   *
   * Asserts that the target's length is `0`. For arrays and strings, it checks
   * the `length` property. For objects, it gets the count of
   * enumerable keys.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *     expect({}).to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('empty', function () {
    var obj = flag(this, 'object')
      , expected = obj;

    if (Array.isArray(obj) || 'string' === typeof object) {
      expected = obj.length;
    } else if (typeof obj === 'object') {
      expected = Object.keys(obj).length;
    }

    this.assert(
        !expected
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an arguments object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = Object.prototype.toString.call(obj);
    this.assert(
        '[object Arguments]' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

  /**
   * ### .equal(value)
   *
   * Asserts that the target is strictly equal (`===`) to `value`.
   * Alternately, if the `deep` flag is set, asserts that
   * the target is deeply equal to `value`.
   *
   *     expect('hello').to.equal('hello');
   *     expect(42).to.equal(42);
   *     expect(1).to.not.equal(true);
   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @alias deep.equal
   * @param {Mixed} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      return this.eql(val);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(value)
   *
   * Asserts that the target is deeply equal to `value`.
   *
   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(value)
   *
   * Asserts that the target is greater than `value`.
   *
   *     expect(10).to.be.above(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len > n
        , 'expected #{this} to have a length above #{exp} but got #{act}'
        , 'expected #{this} to not have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above ' + n
        , 'expected #{this} to be at most ' + n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(value)
   *
   * Asserts that the target is greater than or equal to `value`.
   *
   *     expect(10).to.be.at.least(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.least(2);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
   *
   * @name least
   * @alias gte
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= n
        , 'expected #{this} to have a length at least #{exp} but got #{act}'
        , 'expected #{this} to have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least ' + n
        , 'expected #{this} to be below ' + n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(value)
   *
   * Asserts that the target is less than `value`.
   *
   *     expect(5).to.be.below(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len < n
        , 'expected #{this} to have a length below #{exp} but got #{act}'
        , 'expected #{this} to not have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below ' + n
        , 'expected #{this} to be at least ' + n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(value)
   *
   * Asserts that the target is less than or equal to `value`.
   *
   *     expect(5).to.be.at.most(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.most(4);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
   *
   * @name most
   * @alias lte
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len <= n
        , 'expected #{this} to have a length at most #{exp} but got #{act}'
        , 'expected #{this} to have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most ' + n
        , 'expected #{this} to be above ' + n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish)
   *
   * Asserts that the target is within a range.
   *
   *     expect(7).to.be.within(5,10);
   *
   * Can also be used in conjunction with `length` to
   * assert a length range. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * @name within
   * @param {Number} start lowerbound inclusive
   * @param {Number} finish upperbound inclusive
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , range = start + '..' + finish;
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= start && len <= finish
        , 'expected #{this} to have a length within ' + range
        , 'expected #{this} to not have a length within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
    }
  });

  /**
   * ### .instanceof(constructor)
   *
   * Asserts that the target is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , Chai = new Tea('chai');
   *
   *     expect(Chai).to.be.an.instanceof(Tea);
   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} message _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);
    var name = _.getName(constructor);
    this.assert(
        flag(this, 'object') instanceof constructor
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name, [value])
   *
   * Asserts that the target has a property `name`, optionally asserting that
   * the value of that property is strictly equal to  `value`.
   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
   * references into objects and arrays.
   *
   *     // simple referencing
   *     var obj = { foo: 'bar' };
   *     expect(obj).to.have.property('foo');
   *     expect(obj).to.have.property('foo', 'bar');
   *
   *     // deep referencing
   *     var deepObj = {
   *         green: { tea: 'matcha' }
   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
   *     };
   *
   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
   *
   * You can also use an array as the starting point of a `deep.property`
   * assertion, or traverse nested arrays.
   *
   *     var arr = [
   *         [ 'chai', 'matcha', 'konacha' ]
   *       , [ { tea: 'chai' }
   *         , { tea: 'matcha' }
   *         , { tea: 'konacha' } ]
   *     ];
   *
   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
   *
   * Furthermore, `property` changes the subject of the assertion
   * to be the value of that property from the original object. This
   * permits for further chainable assertions on that property.
   *
   *     expect(obj).to.have.property('foo')
   *       .that.is.a('string');
   *     expect(deepObj).to.have.property('green')
   *       .that.is.an('object')
   *       .that.deep.equals({ tea: 'matcha' });
   *     expect(deepObj).to.have.property('teas')
   *       .that.is.an('array')
   *       .with.deep.property('[2]')
   *         .that.deep.equals({ tea: 'konacha' });
   *
   * Note that dots and bracket in `name` must be backslash-escaped when
   * the `deep` flag is set, while they must NOT be escaped when the `deep`
   * flag is not set.
   *
   *     // simple referencing
   *     var css = { '.link[target]': 42 };
   *     expect(css).to.have.property('.link[target]', 42);
   *
   *     // deep referencing
   *     var deepCss = { '.link': { '[target]': 42 }};
   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
   *
   * @name property
   * @alias deep.property
   * @param {String} name
   * @param {Mixed} value (optional)
   * @param {String} message _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('property', function (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isDeep = !!flag(this, 'deep')
      , descriptor = isDeep ? 'deep property ' : 'property '
      , negate = flag(this, 'negate')
      , obj = flag(this, 'object')
      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
      , hasProperty = isDeep
        ? pathInfo.exists
        : _.hasProperty(name, obj)
      , value = isDeep
        ? pathInfo.value
        : obj[name];

    if (negate && arguments.length > 1) {
      if (undefined === value) {
        msg = (msg != null) ? msg + ': ' : '';
        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
      }
    } else {
      this.assert(
          hasProperty
        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(
          val === value
        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
  });


  /**
   * ### .ownProperty(name)
   *
   * Asserts that the target has an own property `name`.
   *
   *     expect('test').to.have.ownProperty('length');
   *
   * @name ownProperty
   * @alias haveOwnProperty
   * @param {String} name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnProperty (name, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        obj.hasOwnProperty(name)
      , 'expected #{this} to have own property ' + _.inspect(name)
      , 'expected #{this} to not have own property ' + _.inspect(name)
    );
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
   *
   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
   *
   *     expect('test').to.have.ownPropertyDescriptor('length');
   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnPropertyDescriptor (name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(
          _.eql(descriptor, actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
        , descriptor
        , actualDescriptor
        , true
      );
    } else {
      this.assert(
          actualDescriptor
        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
      );
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

  /**
   * ### .length
   *
   * Sets the `doLength` flag later used as a chain precursor to a value
   * comparison for the `length` property.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * *Deprecation notice:* Using `length` as an assertion will be deprecated
   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
   * asserting for `length` property value using `length(value)` should be
   * switched to use `lengthOf(value)` instead.
   *
   * @name length
   * @namespace BDD
   * @api public
   */

  /**
   * ### .lengthOf(value[, message])
   *
   * Asserts that the target's `length` property has
   * the expected value.
   *
   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
   *     expect('foobar').to.have.lengthOf(6);
   *
   * @name lengthOf
   * @param {Number} length
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).to.have.property('length');
    var len = obj.length;

    this.assert(
        len == n
      , 'expected #{this} to have a length of #{exp} but got #{act}'
      , 'expected #{this} to not have a length of #{act}'
      , n
      , len
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addMethod('lengthOf', assertLength);

  /**
   * ### .match(regexp)
   *
   * Asserts that the target matches a regular expression.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * @name match
   * @alias matches
   * @param {RegExp} RegularExpression
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
  function assertMatch(re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

  /**
   * ### .string(string)
   *
   * Asserts that the string target contains another string.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * @name string
   * @param {String} string
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
  });


  /**
   * ### .keys(key1, [key2], [...])
   *
   * Asserts that the target contains any or all of the passed-in keys.
   * Use in combination with `any`, `all`, `contains`, or `have` will affect
   * what will pass.
   *
   * When used in conjunction with `any`, at least one key that is passed
   * in must exist in the target object. This is regardless whether or not
   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
   * should be used in the assertion. If neither are used, the assertion is
   * defaulted to `all`.
   *
   * When both `all` and `contain` are used, the target object must have at
   * least all of the passed-in keys but may have more keys not listed.
   *
   * When both `all` and `have` are used, the target object must both contain
   * all of the passed-in keys AND the number of keys in the target object must
   * match the number of keys passed in (in other words, a target object must
   * have all and only all of the passed-in keys).
   *
   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
   *
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , str
      , ok = true
      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

    switch (_.type(keys)) {
      case "array":
        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
        break;
      case "object":
        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
        keys = Object.keys(keys);
        break;
      default:
        keys = Array.prototype.slice.call(arguments);
    }

    if (!keys.length) throw new Error('keys required');

    var actual = Object.keys(obj)
      , expected = keys
      , len = keys.length
      , any = flag(this, 'any')
      , all = flag(this, 'all');

    if (!any && !all) {
      all = true;
    }

    // Has any
    if (any) {
      var intersection = expected.filter(function(key) {
        return ~actual.indexOf(key);
      });
      ok = intersection.length > 0;
    }

    // Has all
    if (all) {
      ok = keys.every(function(key){
        return ~actual.indexOf(key);
      });
      if (!flag(this, 'negate') && !flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key){
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + str
      , 'expected #{this} to not ' + str
      , expected.slice(0).sort()
      , actual.sort()
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw(constructor)
   *
   * Asserts that the function target will throw a specific error, or specific type of error
   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
   * for the error's message.
   *
   *     var err = new ReferenceError('This is a bad function.');
   *     var fn = function () { throw err; }
   *     expect(fn).to.throw(ReferenceError);
   *     expect(fn).to.throw(Error);
   *     expect(fn).to.throw(/bad function/);
   *     expect(fn).to.not.throw('good function');
   *     expect(fn).to.throw(ReferenceError, /bad function/);
   *     expect(fn).to.throw(err);
   *
   * Please note that when a throw expectation is negated, it will check each
   * parameter independently, starting with error constructor type. The appropriate way
   * to check for the existence of a type of error but for a message that does not match
   * is to use `and`.
   *
   *     expect(fn).to.throw(ReferenceError)
   *        .and.not.throw(/good function/);
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {ErrorConstructor} constructor
   * @param {String|RegExp} expected error message
   * @param {String} message _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */

  function assertThrows (constructor, errMsg, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('function');

    var thrown = false
      , desiredError = null
      , name = null
      , thrownError = null;

    if (arguments.length === 0) {
      errMsg = null;
      constructor = null;
    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
      errMsg = constructor;
      constructor = null;
    } else if (constructor && constructor instanceof Error) {
      desiredError = constructor;
      constructor = null;
      errMsg = null;
    } else if (typeof constructor === 'function') {
      name = constructor.prototype.name;
      if (!name || (name === 'Error' && constructor !== Error)) {
        name = constructor.name || (new constructor()).name;
      }
    } else {
      constructor = null;
    }

    try {
      obj();
    } catch (err) {
      // first, check desired error
      if (desiredError) {
        this.assert(
            err === desiredError
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp}'
          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
          , (err instanceof Error ? err.toString() : err)
        );

        flag(this, 'object', err);
        return this;
      }

      // next, check constructor
      if (constructor) {
        this.assert(
            err instanceof constructor
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
          , name
          , (err instanceof Error ? err.toString() : err)
        );

        if (!errMsg) {
          flag(this, 'object', err);
          return this;
        }
      }

      // next, check message
      var message = 'error' === _.type(err) && "message" in err
        ? err.message
        : '' + err;

      if ((message != null) && errMsg && errMsg instanceof RegExp) {
        this.assert(
            errMsg.exec(message)
          , 'expected #{this} to throw error matching #{exp} but got #{act}'
          , 'expected #{this} to throw error not matching #{exp}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
        this.assert(
            ~message.indexOf(errMsg)
          , 'expected #{this} to throw error including #{exp} but got #{act}'
          , 'expected #{this} to throw error not including #{act}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else {
        thrown = true;
        thrownError = err;
      }
    }

    var actuallyGot = ''
      , expectedThrown = name !== null
        ? name
        : desiredError
          ? '#{exp}' //_.inspect(desiredError)
          : 'an error';

    if (thrown) {
      actuallyGot = ' but #{act} was thrown'
    }

    this.assert(
        thrown === true
      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
    );

    flag(this, 'object', thrownError);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method)
   *
   * Asserts that the object or class target will respond to a method.
   *
   *     Klass.prototype.bar = function(){};
   *     expect(Klass).to.respondTo('bar');
   *     expect(obj).to.respondTo('bar');
   *
   * To check if a constructor will respond to a static function,
   * set the `itself` flag.
   *
   *     Klass.baz = function(){};
   *     expect(Klass).itself.to.respondTo('baz');
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function respondTo (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === _.type(obj) && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

  /**
   * ### .itself
   *
   * Sets the `itself` flag, later used by the `respondTo` assertion.
   *
   *     function Foo() {}
   *     Foo.bar = function() {}
   *     Foo.prototype.baz = function() {}
   *
   *     expect(Foo).itself.to.respondTo('bar');
   *     expect(Foo).itself.not.to.respondTo('baz');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(method)
   *
   * Asserts that the target passes a given truth test.
   *
   *     expect(1).to.satisfy(function(num) { return num > 0; });
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function satisfy (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , this.negate ? false : true
      , result
    );
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

  /**
   * ### .closeTo(expected, delta)
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function closeTo(expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj, msg).is.a('number');
    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
      throw new Error('the arguments to closeTo or approximately must be numbers');
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  function isSubsetOf(subset, superset, cmp) {
    return subset.every(function(elem) {
      if (!cmp) return superset.indexOf(elem) !== -1;

      return superset.some(function(elem2) {
        return cmp(elem, elem2);
      });
    })
  }

  /**
   * ### .members(set)
   *
   * Asserts that the target is a superset of `set`,
   * or that the target and `set` have the same strictly-equal (===) members.
   * Alternately, if the `deep` flag is set, set members are compared for deep
   * equality.
   *
   *     expect([1, 2, 3]).to.include.members([3, 2]);
   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
   *
   *     expect([4, 2]).to.have.members([2, 4]);
   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
   *
   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
   *
   * @name members
   * @param {Array} set
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj).to.be.an('array');
    new Assertion(subset).to.be.an('array');

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    if (flag(this, 'contains')) {
      return this.assert(
          isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to be a superset of #{act}'
        , 'expected #{this} to not be a superset of #{act}'
        , obj
        , subset
      );
    }

    this.assert(
        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to have the same members as #{act}'
        , 'expected #{this} to not have the same members as #{act}'
        , obj
        , subset
    );
  });

  /**
   * ### .oneOf(list)
   *
   * Assert that a value appears somewhere in the top level of array `list`.
   *
   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
   *     expect(9).to.not.be.oneOf(['z']);
   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
   *
   *     var three = [3];
   *     // for object-types, contents are not compared
   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
   *     // comparing references works
   *     expect(three).to.be.oneOf([1, 2, three]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function oneOf (list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object');
    new Assertion(list).to.be.an('array');

    this.assert(
        list.indexOf(expected) > -1
      , 'expected #{this} to be one of #{exp}'
      , 'expected #{this} to not be one of #{exp}'
      , list
      , expected
    );
  }

  Assertion.addMethod('oneOf', oneOf);


  /**
   * ### .change(function)
   *
   * Asserts that a function changes an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 3 };
   *     var noChangeFn = function() { return 'foo' + 'bar'; }
   *     expect(fn).to.change(obj, 'val');
   *     expect(noChangeFn).to.not.change(obj, 'val')
   *
   * @name change
   * @alias changes
   * @alias Change
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertChanges (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      initial !== object[prop]
      , 'expected .' + prop + ' to change'
      , 'expected .' + prop + ' to not change'
    );
  }

  Assertion.addChainableMethod('change', assertChanges);
  Assertion.addChainableMethod('changes', assertChanges);

  /**
   * ### .increase(function)
   *
   * Asserts that a function increases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     expect(fn).to.increase(obj, 'val');
   *
   * @name increase
   * @alias increases
   * @alias Increase
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertIncreases (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      object[prop] - initial > 0
      , 'expected .' + prop + ' to increase'
      , 'expected .' + prop + ' to not increase'
    );
  }

  Assertion.addChainableMethod('increase', assertIncreases);
  Assertion.addChainableMethod('increases', assertIncreases);

  /**
   * ### .decrease(function)
   *
   * Asserts that a function decreases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     expect(fn).to.decrease(obj, 'val');
   *
   * @name decrease
   * @alias decreases
   * @alias Decrease
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */

  function assertDecreases (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      object[prop] - initial < 0
      , 'expected .' + prop + ' to decrease'
      , 'expected .' + prop + ' to not decrease'
    );
  }

  Assertion.addChainableMethod('decrease', assertDecreases);
  Assertion.addChainableMethod('decreases', assertDecreases);

  /**
   * ### .extensible
   *
   * Asserts that the target is extensible (can have new properties added to
   * it).
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect({}).to.be.extensible;
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('extensible', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isExtensible;

    try {
      isExtensible = Object.isExtensible(obj);
    } catch (err) {
      if (err instanceof TypeError) isExtensible = false;
      else throw err;
    }

    this.assert(
      isExtensible
      , 'expected #{this} to be extensible'
      , 'expected #{this} to not be extensible'
    );
  });

  /**
   * ### .sealed
   *
   * Asserts that the target is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect({}).to.not.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('sealed', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isSealed;

    try {
      isSealed = Object.isSealed(obj);
    } catch (err) {
      if (err instanceof TypeError) isSealed = true;
      else throw err;
    }

    this.assert(
      isSealed
      , 'expected #{this} to be sealed'
      , 'expected #{this} to not be sealed'
    );
  });

  /**
   * ### .frozen
   *
   * Asserts that the target is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect({}).to.not.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('frozen', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isFrozen;

    try {
      isFrozen = Object.isFrozen(obj);
    } catch (err) {
      if (err instanceof TypeError) isFrozen = true;
      else throw err;
    }

    this.assert(
      isFrozen
      , 'expected #{this} to be frozen'
      , 'expected #{this} to not be frozen'
    );
  });
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */


module.exports = function (chai, util) {

  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, assert.fail);
  };

  /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isOk = function (val, msg) {
    new Assertion(val, msg).is.ok;
  };

  /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotOk = function (val, msg) {
    new Assertion(val, msg).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
    );
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
    );
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.not.eql(exp);
  };

   /**
   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
   *
   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
   *
   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
   *
   * @name isAbove
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAbove
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAbove = function (val, abv, msg) {
    new Assertion(val, msg).to.be.above(abv);
  };

   /**
   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
   *
   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
   *
   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
   *
   * @name isAtLeast
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtLeast
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtLeast = function (val, atlst, msg) {
    new Assertion(val, msg).to.be.least(atlst);
  };

   /**
   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
   *
   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
   *
   *     assert.isBelow(3, 6, '3 is strictly less than 6');
   *
   * @name isBelow
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeBelow
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBelow = function (val, blw, msg) {
    new Assertion(val, msg).to.be.below(blw);
  };

   /**
   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
   *
   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
   *
   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
   *
   * @name isAtMost
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtMost
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtMost = function (val, atmst, msg) {
    new Assertion(val, msg).to.be.most(atmst);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg).is['true'];
  };

  /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotTrue = function (val, msg) {
    new Assertion(val, msg).to.not.equal(true);
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg).is['false'];
  };

  /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFalse = function (val, msg) {
    new Assertion(val, msg).to.not.equal(false);
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg).to.not.equal(null);
  };

  /**
   * ### .isNaN
   * Asserts that value is NaN
   *
   *    assert.isNaN('foo', 'foo is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNaN = function (val, msg) {
    new Assertion(val, msg).to.be.NaN;
  };

  /**
   * ### .isNotNaN
   * Asserts that value is not NaN
   *
   *    assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
  assert.isNotNaN = function (val, msg) {
    new Assertion(val, msg).not.to.be.NaN;
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('number');
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg).to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Works
   * for strings and arrays.
   *
   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Works
   * for strings and arrays.
   *
   *     assert.notInclude('foobar', 'baz', 'string not include substring');
   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude).not.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.not.have.property(prop);
  };

  /**
   * ### .deepProperty(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`, which can be a
   * string using dot- and bracket-notation for deep reference.
   *
   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name deepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.have.deep.property(prop);
  };

  /**
   * ### .notDeepProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for deep reference.
   *
   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notDeepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.not.have.deep.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`.
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.have.property(prop, val);
  };

  /**
   * ### .propertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`.
   *
   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
   *
   * @name propertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyNotVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for deep
   * reference.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.have.deep.property(prop, val);
  };

  /**
   * ### .deepPropertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`. `property` can use dot- and
   * bracket-notation for deep reference.
   *
   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *
   * @name deepPropertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
  };

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` property with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg).to.have.length(len);
  };

  /**
   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
   *
   * Asserts that `function` will throw an error that is an instance of
   * `constructor`, or alternately that it will throw an error with message
   * matching `regexp`.
   *
   *     assert.throws(fn, 'function throws a reference error');
   *     assert.throws(fn, /function throws a reference error/);
   *     assert.throws(fn, ReferenceError);
   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.throws = function (fn, errt, errs, msg) {
    if ('string' === typeof errt || errt instanceof RegExp) {
      errs = errt;
      errt = null;
    }

    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(function, [constructor/regexp], [message])
   *
   * Asserts that `function` will _not_ throw an error that is an instance of
   * `constructor`, or alternately that it will not throw an error with message
   * matching `regexp`.
   *
   *     assert.doesNotThrow(fn, Error, 'function does not throw');
   *
   * @name doesNotThrow
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.doesNotThrow = function (fn, type, msg) {
    if ('string' === typeof type) {
      msg = type;
      type = null;
    }

    new Assertion(fn, msg).to.not.Throw(type);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch(operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        throw new Error('Invalid operator "' + operator + '"');
    }
    var test = new Assertion(ok, msg);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg).to.be.closeTo(exp, delta);
  };

  /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.approximately = function (act, exp, delta, msg) {
    new Assertion(act, msg).to.be.approximately(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members.
   * Order is not taken into account.
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg).to.have.same.members(set2);
  }

  /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
   * Order is not taken into account.
   *
   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg).to.have.same.deep.members(set2);
  }

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset`.
   * Order is not taken into account.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg).to.include.members(subset);
  }

  /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` - using deep equality checking.
   * Order is not taken into account.
   * Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg).to.include.deep.members(subset);
  }

  /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg).to.be.oneOf(list);
  }

   /**
   * ### .changes(function, object, property)
   *
   * Asserts that a function changes the value of a property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 22 };
   *     assert.changes(fn, obj, 'val');
   *
   * @name changes
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changes = function (fn, obj, prop) {
    new Assertion(fn).to.change(obj, prop);
  }

   /**
   * ### .doesNotChange(function, object, property)
   *
   * Asserts that a function does not changes the value of a property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { console.log('foo'); };
   *     assert.doesNotChange(fn, obj, 'val');
   *
   * @name doesNotChange
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotChange = function (fn, obj, prop) {
    new Assertion(fn).to.not.change(obj, prop);
  }

   /**
   * ### .increases(function, object, property)
   *
   * Asserts that a function increases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 13 };
   *     assert.increases(fn, obj, 'val');
   *
   * @name increases
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increases = function (fn, obj, prop) {
    new Assertion(fn).to.increase(obj, prop);
  }

   /**
   * ### .doesNotIncrease(function, object, property)
   *
   * Asserts that a function does not increase object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 8 };
   *     assert.doesNotIncrease(fn, obj, 'val');
   *
   * @name doesNotIncrease
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotIncrease = function (fn, obj, prop) {
    new Assertion(fn).to.not.increase(obj, prop);
  }

   /**
   * ### .decreases(function, object, property)
   *
   * Asserts that a function decreases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreases(fn, obj, 'val');
   *
   * @name decreases
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreases = function (fn, obj, prop) {
    new Assertion(fn).to.decrease(obj, prop);
  }

   /**
   * ### .doesNotDecrease(function, object, property)
   *
   * Asserts that a function does not decreases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.doesNotDecrease(fn, obj, 'val');
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecrease = function (fn, obj, prop) {
    new Assertion(fn).to.not.decrease(obj, prop);
  }

  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */

  assert.ifError = function (val) {
    if (val) {
      throw(val);
    }
  };

  /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isExtensible = function (obj, msg) {
    new Assertion(obj, msg).to.be.extensible;
  };

  /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freese({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotExtensible = function (obj, msg) {
    new Assertion(obj, msg).to.not.be.extensible;
  };

  /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isSealed = function (obj, msg) {
    new Assertion(obj, msg).to.be.sealed;
  };

  /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotSealed = function (obj, msg) {
    new Assertion(obj, msg).to.not.be.sealed;
  };

  /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isFrozen = function (obj, msg) {
    new Assertion(obj, msg).to.be.frozen;
  };

  /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg).to.not.be.frozen;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('isOk', 'ok')
  ('isNotOk', 'notOk')
  ('throws', 'throw')
  ('throws', 'Throw')
  ('isExtensible', 'extensible')
  ('isNotExtensible', 'notExtensible')
  ('isSealed', 'sealed')
  ('isNotSealed', 'notSealed')
  ('isFrozen', 'frozen')
  ('isNotFrozen', 'notFrozen');
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Expect
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
    });

    var should = {};

    /**
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace Should
     * @api public
     */

    should.fail = function (actual, expected, message, operator) {
      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
          actual: actual
        , expected: expected
        , operator: operator
      }, should.fail);
    };

    /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

    /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var transferFlags = __webpack_require__(21);
var flag = __webpack_require__(1);
var config = __webpack_require__(2);

/*!
 * Module variables
 */

// Check whether `__proto__` is supported
var hasProtoSupport = '__proto__' in Object;

// Without `__proto__` support, this module will need to add properties to a function.
// However, some Function.prototype methods cannot be overwritten,
// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
var excludeNames = /^(?:length|name|arguments|caller)$/;

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

/**
 * ### addChainableMethod (ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */

module.exports = function (ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function () {
        chainableBehavior.chainingBehavior.call(this);

        var assert = function assert() {
          var old_ssfi = flag(this, 'ssfi');
          if (old_ssfi && config.includeStack === false)
            flag(this, 'ssfi', assert);
          var result = chainableBehavior.method.apply(this, arguments);
          return result === undefined ? this : result;
        };

        // Use `__proto__` if available
        if (hasProtoSupport) {
          // Inherit all properties from the object by replacing the `Function` prototype
          var prototype = assert.__proto__ = Object.create(this);
          // Restore the `call` and `apply` methods from `Function`
          prototype.call = call;
          prototype.apply = apply;
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (!excludeNames.test(asserterName)) {
              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
              Object.defineProperty(assert, asserterName, pd);
            }
          });
        }

        transferFlags(this, assert);
        return assert;
      }
    , configurable: true
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(2);

/**
 * ### .addMethod (ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */
var flag = __webpack_require__(1);

module.exports = function (ctx, name, method) {
  ctx[name] = function () {
    var old_ssfi = flag(this, 'ssfi');
    if (old_ssfi && config.includeStack === false)
      flag(this, 'ssfi', ctx[name]);
    var result = method.apply(this, arguments);
    return result === undefined ? this : result;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(2);
var flag = __webpack_require__(1);

/**
 * ### addProperty (ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */

module.exports = function (ctx, name, getter) {
  Object.defineProperty(ctx, name,
    { get: function addProperty() {
        var old_ssfi = flag(this, 'ssfi');
        if (old_ssfi && config.includeStack === false)
          flag(this, 'ssfi', addProperty);

        var result = getter.call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */

var AssertionError = __webpack_require__(12);
var flag = __webpack_require__(1);
var type = __webpack_require__(10);

module.exports = function (obj, types) {
  var obj = flag(obj, 'object');
  types = types.map(function (t) { return t.toLowerCase(); });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  if (!types.some(function (expected) { return type(obj) === expected; })) {
    throw new AssertionError(
      'object tested must be ' + str + ', but ' + type(obj) + ' given'
    );
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */

module.exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(1)
  , getActual = __webpack_require__(16)
  , inspect = __webpack_require__(9)
  , objDisplay = __webpack_require__(20);

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () { return objDisplay(val); })
    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

var getPathInfo = __webpack_require__(18);

/**
 * ### .getPathValue(path, object)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue('prop1.str', obj); // Hello
 *     getPathValue('prop1.att[2]', obj); // b
 *     getPathValue('prop2.arr[0].nested', obj); // Universe
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */
module.exports = function(path, obj) {
  var info = getPathInfo(path, obj);
  return info.value;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */

module.exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Main exports
 */

var exports = module.exports = {};

/*!
 * test utility
 */

exports.test = __webpack_require__(71);

/*!
 * type utility
 */

exports.type = __webpack_require__(10);

/*!
 * expectTypes utility
 */
exports.expectTypes = __webpack_require__(62);

/*!
 * message utility
 */

exports.getMessage = __webpack_require__(64);

/*!
 * actual utility
 */

exports.getActual = __webpack_require__(16);

/*!
 * Inspect util
 */

exports.inspect = __webpack_require__(9);

/*!
 * Object Display util
 */

exports.objDisplay = __webpack_require__(20);

/*!
 * Flag utility
 */

exports.flag = __webpack_require__(1);

/*!
 * Flag transferring utility
 */

exports.transferFlags = __webpack_require__(21);

/*!
 * Deep equal utility
 */

exports.eql = __webpack_require__(72);

/*!
 * Deep path value
 */

exports.getPathValue = __webpack_require__(65);

/*!
 * Deep path info
 */

exports.getPathInfo = __webpack_require__(18);

/*!
 * Check if a property exists
 */

exports.hasProperty = __webpack_require__(19);

/*!
 * Function name
 */

exports.getName = __webpack_require__(17);

/*!
 * add Property
 */

exports.addProperty = __webpack_require__(61);

/*!
 * add Method
 */

exports.addMethod = __webpack_require__(60);

/*!
 * overwrite Property
 */

exports.overwriteProperty = __webpack_require__(70);

/*!
 * overwrite Method
 */

exports.overwriteMethod = __webpack_require__(69);

/*!
 * Add a chainable method
 */

exports.addChainableMethod = __webpack_require__(59);

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = __webpack_require__(68);


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
 *
 * Overwites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.length(3);
 *     expect(myFoo).to.have.length.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */

module.exports = function (ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function () {
    var result = chainingBehavior(_chainingBehavior).call(this);
    return result === undefined ? this : result;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function () {
    var result = method(_method).apply(this, arguments);
    return result === undefined ? this : result;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteMethod (ctx, name, fn)
 *
 * Overwites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */

module.exports = function (ctx, name, method) {
  var _method = ctx[name]
    , _super = function () { return this; };

  if (_method && 'function' === typeof _method)
    _super = _method;

  ctx[name] = function () {
    var result = method(_super).apply(this, arguments);
    return result === undefined ? this : result;
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteProperty (ctx, name, fn)
 *
 * Overwites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */

module.exports = function (ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function () {
        var result = getter(_super).call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(1);

/**
 * # test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = __webpack_require__(74);

/*!
 * Buffer.isBuffer browser shim
 */

var Buffer;
try { Buffer = __webpack_require__(52).Buffer; }
catch(ex) {
  Buffer = {};
  Buffer.isBuffer = function() { return false; }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;

/**
 * Assert super-strict (egal) equality between
 * two objects of any type.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @param {Array} memoised (optional)
 * @return {Boolean} equal match
 */

function deepEqual(a, b, m) {
  if (sameValue(a, b)) {
    return true;
  } else if ('date' === type(a)) {
    return dateEqual(a, b);
  } else if ('regexp' === type(a)) {
    return regexpEqual(a, b);
  } else if (Buffer.isBuffer(a)) {
    return bufferEqual(a, b);
  } else if ('arguments' === type(a)) {
    return argumentsEqual(a, b, m);
  } else if (!typeEqual(a, b)) {
    return false;
  } else if (('object' !== type(a) && 'object' !== type(b))
  && ('array' !== type(a) && 'array' !== type(b))) {
    return sameValue(a, b);
  } else {
    return objectEqual(a, b, m);
  }
}

/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */

function sameValue(a, b) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  return a !== a && b !== b;
}

/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function typeEqual(a, b) {
  return type(a) === type(b);
}

/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */

function dateEqual(a, b) {
  if ('date' !== type(b)) return false;
  return sameValue(a.getTime(), b.getTime());
}

/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */

function regexpEqual(a, b) {
  if ('regexp' !== type(b)) return false;
  return sameValue(a.toString(), b.toString());
}

/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */

function argumentsEqual(a, b, m) {
  if ('arguments' !== type(b)) return false;
  a = [].slice.call(a);
  b = [].slice.call(b);
  return deepEqual(a, b, m);
}

/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */

function enumerable(a) {
  var res = [];
  for (var key in a) res.push(key);
  return res;
}

/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */

function iterableEqual(a, b) {
  if (a.length !==  b.length) return false;

  var i = 0;
  var match = true;

  for (; i < a.length; i++) {
    if (a[i] !== b[i]) {
      match = false;
      break;
    }
  }

  return match;
}

/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function bufferEqual(a, b) {
  if (!Buffer.isBuffer(b)) return false;
  return iterableEqual(a, b);
}

/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */

function isValue(a) {
  return a !== null && a !== undefined;
}

/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function objectEqual(a, b, m) {
  if (!isValue(a) || !isValue(b)) {
    return false;
  }

  if (a.prototype !== b.prototype) {
    return false;
  }

  var i;
  if (m) {
    for (i = 0; i < m.length; i++) {
      if ((m[i][0] === a && m[i][1] === b)
      ||  (m[i][0] === b && m[i][1] === a)) {
        return true;
      }
    }
  } else {
    m = [];
  }

  try {
    var ka = enumerable(a);
    var kb = enumerable(b);
  } catch (ex) {
    return false;
  }

  ka.sort();
  kb.sort();

  if (!iterableEqual(ka, kb)) {
    return false;
  }

  m.push([ a, b ]);

  var key;
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], m)) {
      return false;
    }
  }

  return true;
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Primary Exports
 */

var exports = module.exports = getType;

/*!
 * Detectable javascript natives
 */

var natives = {
    '[object Array]': 'array'
  , '[object RegExp]': 'regexp'
  , '[object Function]': 'function'
  , '[object Arguments]': 'arguments'
  , '[object Date]': 'date'
};

/**
 * ### typeOf (obj)
 *
 * Use several different techniques to determine
 * the type of object being tested.
 *
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */

function getType (obj) {
  var str = Object.prototype.toString.call(obj);
  if (natives[str]) return natives[str];
  if (obj === null) return 'null';
  if (obj === undefined) return 'undefined';
  if (obj === Object(obj)) return 'object';
  return typeof obj;
}

exports.Library = Library;

/**
 * ### Library
 *
 * Create a repository for custom type detection.
 *
 * ```js
 * var lib = new type.Library;
 * ```
 *
 */

function Library () {
  this.tests = {};
}

/**
 * #### .of (obj)
 *
 * Expose replacement `typeof` detection to the library.
 *
 * ```js
 * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
 * ```
 *
 * @param {Mixed} object to test
 * @return {String} type
 */

Library.prototype.of = getType;

/**
 * #### .define (type, test)
 *
 * Add a test to for the `.test()` assertion.
 *
 * Can be defined as a regular expression:
 *
 * ```js
 * lib.define('int', /^[0-9]+$/);
 * ```
 *
 * ... or as a function:
 *
 * ```js
 * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
 * ```
 *
 * @param {String} type
 * @param {RegExp|Function} test
 * @api public
 */

Library.prototype.define = function (type, test) {
  if (arguments.length === 1) return this.tests[type];
  this.tests[type] = test;
  return this;
};

/**
 * #### .test (obj, test)
 *
 * Assert that an object is of type. Will first
 * check natives, and if that does not pass it will
 * use the user defined custom tests.
 *
 * ```js
 * assert(lib.test('1', 'int'));
 * assert(lib.test('yes', 'bln'));
 * ```
 *
 * @param {Mixed} object
 * @param {String} type
 * @return {Boolean} result
 * @api public
 */

Library.prototype.test = function (obj, type) {
  if (type === getType(obj)) return true;
  var test = this.tests[type];

  if (test && 'regexp' === getType(test)) {
    return test.test(obj);
  } else if (test && 'function' === getType(test)) {
    return test(obj);
  } else {
    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
  }
};


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 119 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Primary Exports
 */

var exports = module.exports = getType;

/**
 * ### typeOf (obj)
 *
 * Use several different techniques to determine
 * the type of object being tested.
 *
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
var objectTypeRegexp = /^\[object (.*)\]$/;

function getType(obj) {
  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
  // Let "new String('')" return 'object'
  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
  // PhantomJS has type "DOMWindow" for null
  if (obj === null) return 'null';
  // PhantomJS has type "DOMWindow" for undefined
  if (obj === undefined) return 'undefined';
  return type;
}

exports.Library = Library;

/**
 * ### Library
 *
 * Create a repository for custom type detection.
 *
 * ```js
 * var lib = new type.Library;
 * ```
 *
 */

function Library() {
  if (!(this instanceof Library)) return new Library();
  this.tests = {};
}

/**
 * #### .of (obj)
 *
 * Expose replacement `typeof` detection to the library.
 *
 * ```js
 * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
 * ```
 *
 * @param {Mixed} object to test
 * @return {String} type
 */

Library.prototype.of = getType;

/**
 * #### .define (type, test)
 *
 * Add a test to for the `.test()` assertion.
 *
 * Can be defined as a regular expression:
 *
 * ```js
 * lib.define('int', /^[0-9]+$/);
 * ```
 *
 * ... or as a function:
 *
 * ```js
 * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
 * ```
 *
 * @param {String} type
 * @param {RegExp|Function} test
 * @api public
 */

Library.prototype.define = function(type, test) {
  if (arguments.length === 1) return this.tests[type];
  this.tests[type] = test;
  return this;
};

/**
 * #### .test (obj, test)
 *
 * Assert that an object is of type. Will first
 * check natives, and if that does not pass it will
 * use the user defined custom tests.
 *
 * ```js
 * assert(lib.test('1', 'int'));
 * assert(lib.test('yes', 'bln'));
 * ```
 *
 * @param {Mixed} object
 * @param {String} type
 * @return {Boolean} result
 * @api public
 */

Library.prototype.test = function(obj, type) {
  if (type === getType(obj)) return true;
  var test = this.tests[type];

  if (test && 'regexp' === getType(test)) {
    return test.test(obj);
  } else if (test && 'function' === getType(test)) {
    return test(obj);
  } else {
    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
  }
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(5);
module.exports = __webpack_require__(24);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDU2OGQyNDNjNGYxMGIxYTY0Njg/MjdiOSIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZmxhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvY29uZmlnLmpzIiwid2VicGFjazovLy8uL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzPzFjMjAiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2luc3BlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi90eXBlLWRldGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiLCJ3ZWJwYWNrOi8vLy4vfi9hc3NlcnRpb24tZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2dldEFjdHVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0UGF0aEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2hhc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS91dGlscy9vYmpEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS91dGlscy90cmFuc2ZlckZsYWdzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpLmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS9hc3NlcnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL2NvcmUvYXNzZXJ0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvaW50ZXJmYWNlL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvaW50ZXJmYWNlL2V4cGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvaW50ZXJmYWNlL3Nob3VsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvYWRkQ2hhaW5hYmxlTWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS91dGlscy9hZGRNZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2FkZFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS91dGlscy9leHBlY3RUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0RW51bWVyYWJsZVByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2dldE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2dldFBhdGhWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL292ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvb3ZlcndyaXRlTWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY2hhaS9saWIvY2hhaS91dGlscy9vdmVyd3JpdGVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZXAtZXFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGVlcC1lcWwvbGliL2VxbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZXAtZXFsL34vdHlwZS1kZXRlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWVwLWVxbC9+L3R5cGUtZGV0ZWN0L2xpYi90eXBlLmpzIiwid2VicGFjazovLy8uL34vaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90eXBlLWRldGVjdC9saWIvdHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDOVVBOzs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTyw0Q0FBNEM7QUFDOUQsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6QixvQkFBb0IsS0FBSztBQUN6QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6QixvQkFBb0IsS0FBSztBQUN6QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsb0JBQW9CLEtBQUs7QUFDekI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsb0JBQW9CLEtBQUs7QUFDekI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEtBQUs7QUFDM0Isc0JBQXNCLEtBQUs7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDbjBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtB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TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWSxPQUFPO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwiZmlsZSI6InRlc3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1NjhkMjQzYzRmMTBiMWE2NDY4IiwiLyohXG4gKiBDaGFpIC0gZmxhZyB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiAjIyMgZmxhZyhvYmplY3QsIGtleSwgW3ZhbHVlXSlcbiAqXG4gKiBHZXQgb3Igc2V0IGEgZmxhZyB2YWx1ZSBvbiBhbiBvYmplY3QuIElmIGFcbiAqIHZhbHVlIGlzIHByb3ZpZGVkIGl0IHdpbGwgYmUgc2V0LCBlbHNlIGl0IHdpbGxcbiAqIHJldHVybiB0aGUgY3VycmVudGx5IHNldCB2YWx1ZSBvciBgdW5kZWZpbmVkYCBpZlxuICogdGhlIHZhbHVlIGlzIG5vdCBzZXQuXG4gKlxuICogICAgIHV0aWxzLmZsYWcodGhpcywgJ2ZvbycsICdiYXInKTsgLy8gc2V0dGVyXG4gKiAgICAgdXRpbHMuZmxhZyh0aGlzLCAnZm9vJyk7IC8vIGdldHRlciwgcmV0dXJucyBgYmFyYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgY29uc3RydWN0ZWQgQXNzZXJ0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAob3B0aW9uYWwpXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBmbGFnXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgdmFyIGZsYWdzID0gb2JqLl9fZmxhZ3MgfHwgKG9iai5fX2ZsYWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgZmxhZ3Nba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmbGFnc1trZXldO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZmxhZy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogIyMjIGNvbmZpZy5pbmNsdWRlU3RhY2tcbiAgICpcbiAgICogVXNlciBjb25maWd1cmFibGUgcHJvcGVydHksIGluZmx1ZW5jZXMgd2hldGhlciBzdGFjayB0cmFjZVxuICAgKiBpcyBpbmNsdWRlZCBpbiBBc3NlcnRpb24gZXJyb3IgbWVzc2FnZS4gRGVmYXVsdCBvZiBmYWxzZVxuICAgKiBzdXBwcmVzc2VzIHN0YWNrIHRyYWNlIGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgKlxuICAgKiAgICAgY2hhaS5jb25maWcuaW5jbHVkZVN0YWNrID0gdHJ1ZTsgIC8vIGVuYWJsZSBzdGFjayBvbiBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gICBpbmNsdWRlU3RhY2s6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiAjIyMgY29uZmlnLnNob3dEaWZmXG4gICAqXG4gICAqIFVzZXIgY29uZmlndXJhYmxlIHByb3BlcnR5LCBpbmZsdWVuY2VzIHdoZXRoZXIgb3Igbm90XG4gICAqIHRoZSBgc2hvd0RpZmZgIGZsYWcgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSB0aHJvd25cbiAgICogQXNzZXJ0aW9uRXJyb3JzLiBgZmFsc2VgIHdpbGwgYWx3YXlzIGJlIGBmYWxzZWA7IGB0cnVlYFxuICAgKiB3aWxsIGJlIHRydWUgd2hlbiB0aGUgYXNzZXJ0aW9uIGhhcyByZXF1ZXN0ZWQgYSBkaWZmXG4gICAqIGJlIHNob3duLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNob3dEaWZmOiB0cnVlLFxuXG4gIC8qKlxuICAgKiAjIyMgY29uZmlnLnRydW5jYXRlVGhyZXNob2xkXG4gICAqXG4gICAqIFVzZXIgY29uZmlndXJhYmxlIHByb3BlcnR5LCBzZXRzIGxlbmd0aCB0aHJlc2hvbGQgZm9yIGFjdHVhbCBhbmRcbiAgICogZXhwZWN0ZWQgdmFsdWVzIGluIGFzc2VydGlvbiBlcnJvcnMuIElmIHRoaXMgdGhyZXNob2xkIGlzIGV4Y2VlZGVkLCBmb3JcbiAgICogZXhhbXBsZSBmb3IgbGFyZ2UgZGF0YSBzdHJ1Y3R1cmVzLCB0aGUgdmFsdWUgaXMgcmVwbGFjZWQgd2l0aCBzb21ldGhpbmdcbiAgICogbGlrZSBgWyBBcnJheSgzKSBdYCBvciBgeyBPYmplY3QgKHByb3AxLCBwcm9wMikgfWAuXG4gICAqXG4gICAqIFNldCBpdCB0byB6ZXJvIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdHJ1bmNhdGluZyBhbHRvZ2V0aGVyLlxuICAgKlxuICAgKiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlcmZ1bCB3aGVuIGRvaW5nIGFzc2VydGlvbnMgb24gYXJyYXlzOiBoYXZpbmcgdGhpc1xuICAgKiBzZXQgdG8gYSByZWFzb25hYmxlIGxhcmdlIHZhbHVlIG1ha2VzIHRoZSBmYWlsdXJlIG1lc3NhZ2VzIHJlYWRpbHlcbiAgICogaW5zcGVjdGFibGUuXG4gICAqXG4gICAqICAgICBjaGFpLmNvbmZpZy50cnVuY2F0ZVRocmVzaG9sZCA9IDA7ICAvLyBkaXNhYmxlIHRydW5jYXRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRydW5jYXRlVGhyZXNob2xkOiA0MFxuXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gVGhpcyBpcyAoYWxtb3N0KSBkaXJlY3RseSBmcm9tIE5vZGUuanMgdXRpbHNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9ibG9iL2Y4YzMzNWQwY2FmNDdmMTZkMzE0MTNmODlhYTI4ZWRhMzg3OGUzYWEvbGliL3V0aWwuanNcblxudmFyIGdldE5hbWUgPSByZXF1aXJlKCcuL2dldE5hbWUnKTtcbnZhciBnZXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9nZXRQcm9wZXJ0aWVzJyk7XG52YXIgZ2V0RW51bWVyYWJsZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2dldEVudW1lcmFibGVQcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zcGVjdDtcblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtCb29sZWFufSBzaG93SGlkZGVuIEZsYWcgdGhhdCBzaG93cyBoaWRkZW4gKG5vdCBlbnVtZXJhYmxlKVxuICogICAgcHJvcGVydGllcyBvZiBvYmplY3RzLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlcHRoIERlcHRoIGluIHdoaWNoIHRvIGRlc2NlbmQgaW4gb2JqZWN0LiBEZWZhdWx0IGlzIDIuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbG9ycyBGbGFnIHRvIHR1cm4gb24gQU5TSSBlc2NhcGUgY29kZXMgdG8gY29sb3IgdGhlXG4gKiAgICBvdXRwdXQuIERlZmF1bHQgaXMgZmFsc2UgKG5vIGNvbG9yaW5nKS5cbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBuYW1lIGluc3BlY3RcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMpIHtcbiAgdmFyIGN0eCA9IHtcbiAgICBzaG93SGlkZGVuOiBzaG93SGlkZGVuLFxuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfVxuICB9O1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosICh0eXBlb2YgZGVwdGggPT09ICd1bmRlZmluZWQnID8gMiA6IGRlcHRoKSk7XG59XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYSBET00gZWxlbWVudC5cbnZhciBpc0RPTUVsZW1lbnQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmplY3QgJiZcbiAgICAgIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3Qubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5pbnNwZWN0ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzKTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIGEgRE9NIGVsZW1lbnQsIHRyeSB0byBnZXQgdGhlIG91dGVyIEhUTUwuXG4gIGlmIChpc0RPTUVsZW1lbnQodmFsdWUpKSB7XG4gICAgaWYgKCdvdXRlckhUTUwnIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUub3V0ZXJIVE1MO1xuICAgICAgLy8gVGhpcyB2YWx1ZSBkb2VzIG5vdCBoYXZlIGFuIG91dGVySFRNTCBhdHRyaWJ1dGUsXG4gICAgICAvLyAgIGl0IGNvdWxkIHN0aWxsIGJlIGFuIFhNTCBlbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gc2VyaWFsaXplIGl0XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZG9jdW1lbnQueG1sVmVyc2lvbikge1xuICAgICAgICAgIHZhciB4bWxTZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgICByZXR1cm4geG1sU2VyaWFsaXplci5zZXJpYWxpemVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmlyZWZveCAxMS0gZG8gbm90IHN1cHBvcnQgb3V0ZXJIVE1MXG4gICAgICAgICAgLy8gICBJdCBkb2VzLCBob3dldmVyLCBzdXBwb3J0IGlubmVySFRNTFxuICAgICAgICAgIC8vICAgVXNlIHRoZSBmb2xsb3dpbmcgdG8gcmVuZGVyIHRoZSBlbGVtZW50XG4gICAgICAgICAgdmFyIG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ18nKTtcblxuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZS5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICBodG1sID0gY29udGFpbmVyLmlubmVySFRNTFxuICAgICAgICAgICAgLnJlcGxhY2UoJz48JywgJz4nICsgdmFsdWUuaW5uZXJIVE1MICsgJzwnKTtcbiAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaGlzIGNvdWxkIGJlIGEgbm9uLW5hdGl2ZSBET00gaW1wbGVtZW50YXRpb24sXG4gICAgICAgIC8vICAgY29udGludWUgd2l0aCB0aGUgbm9ybWFsIGZsb3c6XG4gICAgICAgIC8vICAgcHJpbnRpbmcgdGhlIGVsZW1lbnQgYXMgaWYgaXQgaXMgYW4gb2JqZWN0LlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIHZpc2libGVLZXlzID0gZ2V0RW51bWVyYWJsZVByb3BlcnRpZXModmFsdWUpO1xuICB2YXIga2V5cyA9IGN0eC5zaG93SGlkZGVuID8gZ2V0UHJvcGVydGllcyh2YWx1ZSkgOiB2aXNpYmxlS2V5cztcblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIC8vIEluIElFLCBlcnJvcnMgaGF2ZSBhIHNpbmdsZSBgc3RhY2tgIHByb3BlcnR5LCBvciBpZiB0aGV5IGFyZSB2YW5pbGxhIGBFcnJvcmAsXG4gIC8vIGEgYHN0YWNrYCBwbHVzIGBkZXNjcmlwdGlvbmAgcHJvcGVydHk7IGlnbm9yZSB0aG9zZSBmb3IgY29uc2lzdGVuY3kuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCB8fCAoaXNFcnJvcih2YWx1ZSkgJiYgKFxuICAgICAgKGtleXMubGVuZ3RoID09PSAxICYmIGtleXNbMF0gPT09ICdzdGFjaycpIHx8XG4gICAgICAoa2V5cy5sZW5ndGggPT09IDIgJiYga2V5c1swXSA9PT0gJ2Rlc2NyaXB0aW9uJyAmJiBrZXlzWzFdID09PSAnc3RhY2snKVxuICAgICApKSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZSh2YWx1ZSk7XG4gICAgICB2YXIgbmFtZVN1ZmZpeCA9IG5hbWUgPyAnOiAnICsgbmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZVN1ZmZpeCArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKHZhbHVlKTtcbiAgICB2YXIgbmFtZVN1ZmZpeCA9IG5hbWUgPyAnOiAnICsgbmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuYW1lU3VmZml4ICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgaWYgKHZhbHVlID09PSAwICYmICgxL3ZhbHVlKSA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnLTAnLCAnbnVtYmVyJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgfVxuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0cjtcbiAgaWYgKHZhbHVlLl9fbG9va3VwR2V0dGVyX18pIHtcbiAgICBpZiAodmFsdWUuX19sb29rdXBHZXR0ZXJfXyhrZXkpKSB7XG4gICAgICBpZiAodmFsdWUuX19sb29rdXBTZXR0ZXJfXyhrZXkpKSB7XG4gICAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlLl9fbG9va3VwU2V0dGVyX18oa2V5KSkge1xuICAgICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodmlzaWJsZUtleXMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZih2YWx1ZVtrZXldKSA8IDApIHtcbiAgICAgIGlmIChyZWN1cnNlVGltZXMgPT09IG51bGwpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZVtrZXldLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgdmFsdWVba2V5XSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcikgfHxcbiAgICAgICAgICh0eXBlb2YgYXIgPT09ICdvYmplY3QnICYmIG9iamVjdFRvU3RyaW5nKGFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJyk7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiB0eXBlb2YgcmUgPT09ICdvYmplY3QnICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiB0eXBlb2YgZCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgb2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXSc7XG59XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2luc3BlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi90eXBlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHlwZS1kZXRlY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiFcbiAqIGFzc2VydGlvbi1lcnJvclxuICogQ29weXJpZ2h0KGMpIDIwMTMgSmFrZSBMdWVyIDxqYWtlQHF1YWxpYW5jeS5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKiFcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogb25lIG9iamVjdCB0byBhbm90aGVyIGV4Y2x1ZGluZyBhbnkgb3JpZ2luYWxseVxuICogbGlzdGVkLiBSZXR1cm5lZCBmdW5jdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldyBge31gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleGNsdWRlZCBwcm9wZXJ0aWVzIC4uLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gZXhjbHVkZSAoKSB7XG4gIHZhciBleGNsdWRlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICBmdW5jdGlvbiBleGNsdWRlUHJvcHMgKHJlcywgb2JqKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghfmV4Y2x1ZGVzLmluZGV4T2Yoa2V5KSkgcmVzW2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmRFeGNsdWRlICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgLCBpID0gMFxuICAgICAgLCByZXMgPSB7fTtcblxuICAgIGZvciAoOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgZXhjbHVkZVByb3BzKHJlcywgYXJnc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn07XG5cbi8qIVxuICogUHJpbWFyeSBFeHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBBc3NlcnRpb25FcnJvcjtcblxuLyoqXG4gKiAjIyMgQXNzZXJ0aW9uRXJyb3JcbiAqXG4gKiBBbiBleHRlbnNpb24gb2YgdGhlIEphdmFTY3JpcHQgYEVycm9yYCBjb25zdHJ1Y3RvciBmb3JcbiAqIGFzc2VydGlvbiBhbmQgdmFsaWRhdGlvbiBzY2VuYXJpb3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIHRvIGluY2x1ZGUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtjYWxsZWV9IHN0YXJ0IHN0YWNrIGZ1bmN0aW9uIChvcHRpb25hbClcbiAqL1xuXG5mdW5jdGlvbiBBc3NlcnRpb25FcnJvciAobWVzc2FnZSwgX3Byb3BzLCBzc2YpIHtcbiAgdmFyIGV4dGVuZCA9IGV4Y2x1ZGUoJ25hbWUnLCAnbWVzc2FnZScsICdzdGFjaycsICdjb25zdHJ1Y3RvcicsICd0b0pTT04nKVxuICAgICwgcHJvcHMgPSBleHRlbmQoX3Byb3BzIHx8IHt9KTtcblxuICAvLyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdVbnNwZWNpZmllZCBBc3NlcnRpb25FcnJvcic7XG4gIHRoaXMuc2hvd0RpZmYgPSBmYWxzZTtcblxuICAvLyBjb3B5IGZyb20gcHJvcGVydGllc1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICB9XG5cbiAgLy8gY2FwdHVyZSBzdGFjayB0cmFjZVxuICBzc2YgPSBzc2YgfHwgYXJndW1lbnRzLmNhbGxlZTtcbiAgaWYgKHNzZiAmJiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHNzZik7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgdGhpcy5zdGFjayA9IGUuc3RhY2s7XG4gICAgfVxuICB9XG59XG5cbi8qIVxuICogSW5oZXJpdCBmcm9tIEVycm9yLnByb3RvdHlwZVxuICovXG5cbkFzc2VydGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblxuLyohXG4gKiBTdGF0aWNhbGx5IHNldCBuYW1lXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuXG4vKiFcbiAqIEVuc3VyZSBjb3JyZWN0IGNvbnN0cnVjdG9yXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXNzZXJ0aW9uRXJyb3I7XG5cbi8qKlxuICogQWxsb3cgZXJyb3JzIHRvIGJlIGNvbnZlcnRlZCB0byBKU09OIGZvciBzdGF0aWMgdHJhbnNmZXIuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlIHN0YWNrIChkZWZhdWx0OiBgdHJ1ZWApXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCB0aGF0IGNhbiBiZSBgSlNPTi5zdHJpbmdpZnlgXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChzdGFjaykge1xuICB2YXIgZXh0ZW5kID0gZXhjbHVkZSgnY29uc3RydWN0b3InLCAndG9KU09OJywgJ3N0YWNrJylcbiAgICAsIHByb3BzID0gZXh0ZW5kKHsgbmFtZTogdGhpcy5uYW1lIH0sIHRoaXMpO1xuXG4gIC8vIGluY2x1ZGUgc3RhY2sgaWYgZXhpc3RzIGFuZCBub3QgdHVybmVkIG9mZlxuICBpZiAoZmFsc2UgIT09IHN0YWNrICYmIHRoaXMuc3RhY2spIHtcbiAgICBwcm9wcy5zdGFjayA9IHRoaXMuc3RhY2s7XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Fzc2VydGlvbi1lcnJvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gZ2V0QWN0dWFsIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMgZ2V0QWN0dWFsKG9iamVjdCwgW2FjdHVhbF0pXG4gKlxuICogUmV0dXJucyB0aGUgYGFjdHVhbGAgdmFsdWUgZm9yIGFuIEFzc2VydGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgKGNvbnN0cnVjdGVkIEFzc2VydGlvbilcbiAqIEBwYXJhbSB7QXJndW1lbnRzfSBjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUuYXNzZXJ0IGFyZ3VtZW50c1xuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgZ2V0QWN0dWFsXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBhcmdzKSB7XG4gIHJldHVybiBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogb2JqLl9vYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0QWN0dWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBnZXROYW1lIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMgZ2V0TmFtZShmdW5jKVxuICpcbiAqIEdldHMgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiwgaW4gYSBjcm9zcy1icm93c2VyIHdheS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uICh1c3VhbGx5IGEgY29uc3RydWN0b3IpXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBnZXROYW1lXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnVuYykge1xuICBpZiAoZnVuYy5uYW1lKSByZXR1cm4gZnVuYy5uYW1lO1xuXG4gIHZhciBtYXRjaCA9IC9eXFxzP2Z1bmN0aW9uIChbXihdKilcXCgvLmV4ZWMoZnVuYyk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSA/IG1hdGNoWzFdIDogXCJcIjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9nZXROYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBnZXRQYXRoSW5mbyB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxudmFyIGhhc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9oYXNQcm9wZXJ0eScpO1xuXG4vKipcbiAqICMjIyAuZ2V0UGF0aEluZm8ocGF0aCwgb2JqZWN0KVxuICpcbiAqIFRoaXMgYWxsb3dzIHRoZSByZXRyaWV2YWwgb2YgcHJvcGVydHkgaW5mbyBpbiBhblxuICogb2JqZWN0IGdpdmVuIGEgc3RyaW5nIHBhdGguXG4gKlxuICogVGhlIHBhdGggaW5mbyBjb25zaXN0cyBvZiBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICogcGFyZW50IC0gVGhlIHBhcmVudCBvYmplY3Qgb2YgdGhlIHByb3BlcnR5IHJlZmVyZW5jZWQgYnkgYHBhdGhgXG4gKiAqIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZmluYWwgcHJvcGVydHksIGEgbnVtYmVyIGlmIGl0IHdhcyBhbiBhcnJheSBpbmRleGVyXG4gKiAqIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSwgaWYgaXQgZXhpc3RzLCBvdGhlcndpc2UgYHVuZGVmaW5lZGBcbiAqICogZXhpc3RzIC0gV2hldGhlciB0aGUgcHJvcGVydHkgZXhpc3RzIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBpbmZvXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBnZXRQYXRoSW5mb1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBhdGhJbmZvKHBhdGgsIG9iaikge1xuICB2YXIgcGFyc2VkID0gcGFyc2VQYXRoKHBhdGgpLFxuICAgICAgbGFzdCA9IHBhcnNlZFtwYXJzZWQubGVuZ3RoIC0gMV07XG5cbiAgdmFyIGluZm8gPSB7XG4gICAgcGFyZW50OiBwYXJzZWQubGVuZ3RoID4gMSA/IF9nZXRQYXRoVmFsdWUocGFyc2VkLCBvYmosIHBhcnNlZC5sZW5ndGggLSAxKSA6IG9iaixcbiAgICBuYW1lOiBsYXN0LnAgfHwgbGFzdC5pLFxuICAgIHZhbHVlOiBfZ2V0UGF0aFZhbHVlKHBhcnNlZCwgb2JqKVxuICB9O1xuICBpbmZvLmV4aXN0cyA9IGhhc1Byb3BlcnR5KGluZm8ubmFtZSwgaW5mby5wYXJlbnQpO1xuXG4gIHJldHVybiBpbmZvO1xufTtcblxuXG4vKiFcbiAqICMjIHBhcnNlUGF0aChwYXRoKVxuICpcbiAqIEhlbHBlciBmdW5jdGlvbiB1c2VkIHRvIHBhcnNlIHN0cmluZyBvYmplY3RcbiAqIHBhdGhzLiBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCBgX2dldFBhdGhWYWx1ZWAuXG4gKlxuICogICAgICB2YXIgcGFyc2VkID0gcGFyc2VQYXRoKCdteW9iamVjdC5wcm9wZXJ0eS5zdWJwcm9wJyk7XG4gKlxuICogIyMjIFBhdGhzOlxuICpcbiAqICogQ2FuIGJlIGFzIG5lYXIgaW5maW5pdGVseSBkZWVwIGFuZCBuZXN0ZWRcbiAqICogQXJyYXlzIGFyZSBhbHNvIHZhbGlkIHVzaW5nIHRoZSBmb3JtYWwgYG15b2JqZWN0LmRvY3VtZW50WzNdLnByb3BlcnR5YC5cbiAqICogTGl0ZXJhbCBkb3RzIGFuZCBicmFja2V0cyAobm90IGRlbGltaXRlcikgbXVzdCBiZSBiYWNrc2xhc2gtZXNjYXBlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybnMge09iamVjdH0gcGFyc2VkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIHN0ciA9IHBhdGgucmVwbGFjZSgvKFteXFxcXF0pXFxbL2csICckMS5bJylcbiAgICAsIHBhcnRzID0gc3RyLm1hdGNoKC8oXFxcXFxcLnxbXi5dKz8pKy9nKTtcbiAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmUgPSAvXlxcWyhcXGQrKVxcXSQvXG4gICAgICAsIG1BcnIgPSByZS5leGVjKHZhbHVlKTtcbiAgICBpZiAobUFycikgcmV0dXJuIHsgaTogcGFyc2VGbG9hdChtQXJyWzFdKSB9O1xuICAgIGVsc2UgcmV0dXJuIHsgcDogdmFsdWUucmVwbGFjZSgvXFxcXChbLlxcW1xcXV0pL2csICckMScpIH07XG4gIH0pO1xufVxuXG5cbi8qIVxuICogIyMgX2dldFBhdGhWYWx1ZShwYXJzZWQsIG9iailcbiAqXG4gKiBIZWxwZXIgY29tcGFuaW9uIGZ1bmN0aW9uIGZvciBgLnBhcnNlUGF0aGAgdGhhdCByZXR1cm5zXG4gKiB0aGUgdmFsdWUgbG9jYXRlZCBhdCB0aGUgcGFyc2VkIGFkZHJlc3MuXG4gKlxuICogICAgICB2YXIgdmFsdWUgPSBnZXRQYXRoVmFsdWUocGFyc2VkLCBvYmopO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJzZWQgZGVmaW5pdGlvbiBmcm9tIGBwYXJzZVBhdGhgLlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCB0byBzZWFyY2ggYWdhaW5zdFxuICogQHBhcmFtIHtOdW1iZXJ9IG9iamVjdCB0byBzZWFyY2ggYWdhaW5zdFxuICogQHJldHVybnMge09iamVjdHxVbmRlZmluZWR9IHZhbHVlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBfZ2V0UGF0aFZhbHVlIChwYXJzZWQsIG9iaiwgaW5kZXgpIHtcbiAgdmFyIHRtcCA9IG9ialxuICAgICwgcmVzO1xuXG4gIGluZGV4ID0gKGluZGV4ID09PSB1bmRlZmluZWQgPyBwYXJzZWQubGVuZ3RoIDogaW5kZXgpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaW5kZXg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHBhcnNlZFtpXTtcbiAgICBpZiAodG1wKSB7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBwYXJ0LnApXG4gICAgICAgIHRtcCA9IHRtcFtwYXJ0LnBdO1xuICAgICAgZWxzZSBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBwYXJ0LmkpXG4gICAgICAgIHRtcCA9IHRtcFtwYXJ0LmldO1xuICAgICAgaWYgKGkgPT0gKGwgLSAxKSkgcmVzID0gdG1wO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9nZXRQYXRoSW5mby5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gaGFzUHJvcGVydHkgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbnZhciB0eXBlID0gcmVxdWlyZSgndHlwZS1kZXRlY3QnKTtcblxuLyoqXG4gKiAjIyMgLmhhc1Byb3BlcnR5KG9iamVjdCwgbmFtZSlcbiAqXG4gKiBUaGlzIGFsbG93cyBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXNcbiAqIG5hbWVkIHByb3BlcnR5IG9yIG51bWVyaWMgYXJyYXkgaW5kZXguXG4gKlxuICogQmFzaWNhbGx5IGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIGBpbmBcbiAqIG9wZXJhdG9yIGJ1dCB3b3JrcyBwcm9wZXJseSB3aXRoIG5hdGl2ZXNcbiAqIGFuZCBudWxsL3VuZGVmaW5lZCB2YWx1ZXMuXG4gKlxuICogICAgIHZhciBvYmogPSB7XG4gKiAgICAgICAgIGFycjogWydhJywgJ2InLCAnYyddXG4gKiAgICAgICAsIHN0cjogJ0hlbGxvJ1xuICogICAgIH1cbiAqXG4gKiBUaGUgZm9sbG93aW5nIHdvdWxkIGJlIHRoZSByZXN1bHRzLlxuICpcbiAqICAgICBoYXNQcm9wZXJ0eSgnc3RyJywgb2JqKTsgIC8vIHRydWVcbiAqICAgICBoYXNQcm9wZXJ0eSgnY29uc3RydWN0b3InLCBvYmopOyAgLy8gdHJ1ZVxuICogICAgIGhhc1Byb3BlcnR5KCdiYXInLCBvYmopOyAgLy8gZmFsc2VcbiAqXG4gKiAgICAgaGFzUHJvcGVydHkoJ2xlbmd0aCcsIG9iai5zdHIpOyAvLyB0cnVlXG4gKiAgICAgaGFzUHJvcGVydHkoMSwgb2JqLnN0cik7ICAvLyB0cnVlXG4gKiAgICAgaGFzUHJvcGVydHkoNSwgb2JqLnN0cik7ICAvLyBmYWxzZVxuICpcbiAqICAgICBoYXNQcm9wZXJ0eSgnbGVuZ3RoJywgb2JqLmFycik7ICAvLyB0cnVlXG4gKiAgICAgaGFzUHJvcGVydHkoMiwgb2JqLmFycik7ICAvLyB0cnVlXG4gKiAgICAgaGFzUHJvcGVydHkoMywgb2JqLmFycik7ICAvLyBmYWxzZVxuICpcbiAqIEBwYXJhbSB7T2JqdWVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG5hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIGl0IGV4aXN0c1xuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgZ2V0UGF0aEluZm9cbiAqIEBhcGkgcHVibGljXG4gKi9cblxudmFyIGxpdGVyYWxzID0ge1xuICAgICdudW1iZXInOiBOdW1iZXJcbiAgLCAnc3RyaW5nJzogU3RyaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5KG5hbWUsIG9iaikge1xuICB2YXIgb3QgPSB0eXBlKG9iaik7XG5cbiAgLy8gQmFkIE9iamVjdCwgb2J2aW91c2x5IG5vIHByb3BzIGF0IGFsbFxuICBpZihvdCA9PT0gJ251bGwnIHx8IG90ID09PSAndW5kZWZpbmVkJylcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gVGhlIGBpbmAgb3BlcmF0b3IgZG9lcyBub3Qgd29yayB3aXRoIGNlcnRhaW4gbGl0ZXJhbHNcbiAgLy8gYm94IHRoZXNlIGJlZm9yZSB0aGUgY2hlY2tcbiAgaWYobGl0ZXJhbHNbb3RdICYmIHR5cGVvZiBvYmogIT09ICdvYmplY3QnKVxuICAgIG9iaiA9IG5ldyBsaXRlcmFsc1tvdF0ob2JqKTtcblxuICByZXR1cm4gbmFtZSBpbiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvaGFzUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogQ2hhaSAtIGZsYWcgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogTW9kdWxlIGRlcGVuZGFuY2llc1xuICovXG5cbnZhciBpbnNwZWN0ID0gcmVxdWlyZSgnLi9pbnNwZWN0Jyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbi8qKlxuICogIyMjIC5vYmpEaXNwbGF5IChvYmplY3QpXG4gKlxuICogRGV0ZXJtaW5lcyBpZiBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgbWF0Y2hlc1xuICogY3JpdGVyaWEgdG8gYmUgaW5zcGVjdGVkIGluLWxpbmUgZm9yIGVycm9yXG4gKiBtZXNzYWdlcyBvciBzaG91bGQgYmUgdHJ1bmNhdGVkLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGphdmFzY3JpcHQgb2JqZWN0IHRvIGluc3BlY3RcbiAqIEBuYW1lIG9iakRpc3BsYXlcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBzdHIgPSBpbnNwZWN0KG9iailcbiAgICAsIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBpZiAoY29uZmlnLnRydW5jYXRlVGhyZXNob2xkICYmIHN0ci5sZW5ndGggPj0gY29uZmlnLnRydW5jYXRlVGhyZXNob2xkKSB7XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgIHJldHVybiAhb2JqLm5hbWUgfHwgb2JqLm5hbWUgPT09ICcnXG4gICAgICAgID8gJ1tGdW5jdGlvbl0nXG4gICAgICAgIDogJ1tGdW5jdGlvbjogJyArIG9iai5uYW1lICsgJ10nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuICdbIEFycmF5KCcgKyBvYmoubGVuZ3RoICsgJykgXSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgICwga3N0ciA9IGtleXMubGVuZ3RoID4gMlxuICAgICAgICAgID8ga2V5cy5zcGxpY2UoMCwgMikuam9pbignLCAnKSArICcsIC4uLidcbiAgICAgICAgICA6IGtleXMuam9pbignLCAnKTtcbiAgICAgIHJldHVybiAneyBPYmplY3QgKCcgKyBrc3RyICsgJykgfSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9vYmpEaXNwbGF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSB0cmFuc2ZlckZsYWdzIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyB0cmFuc2ZlckZsYWdzKGFzc2VydGlvbiwgb2JqZWN0LCBpbmNsdWRlQWxsID0gdHJ1ZSlcbiAqXG4gKiBUcmFuc2ZlciBhbGwgdGhlIGZsYWdzIGZvciBgYXNzZXJ0aW9uYCB0byBgb2JqZWN0YC4gSWZcbiAqIGBpbmNsdWRlQWxsYCBpcyBzZXQgdG8gYGZhbHNlYCwgdGhlbiB0aGUgYmFzZSBDaGFpXG4gKiBhc3NlcnRpb24gZmxhZ3MgKG5hbWVseSBgb2JqZWN0YCwgYHNzZmlgLCBhbmQgYG1lc3NhZ2VgKVxuICogd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuXG4gKlxuICpcbiAqICAgICB2YXIgbmV3QXNzZXJ0aW9uID0gbmV3IEFzc2VydGlvbigpO1xuICogICAgIHV0aWxzLnRyYW5zZmVyRmxhZ3MoYXNzZXJ0aW9uLCBuZXdBc3NlcnRpb24pO1xuICpcbiAqICAgICB2YXIgYW5vdGhlckFzc2VyaXRvbiA9IG5ldyBBc3NlcnRpb24obXlPYmopO1xuICogICAgIHV0aWxzLnRyYW5zZmVyRmxhZ3MoYXNzZXJ0aW9uLCBhbm90aGVyQXNzZXJ0aW9uLCBmYWxzZSk7XG4gKlxuICogQHBhcmFtIHtBc3NlcnRpb259IGFzc2VydGlvbiB0aGUgYXNzZXJ0aW9uIHRvIHRyYW5zZmVyIHRoZSBmbGFncyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IHRoZSBvYmplY3QgdG8gdHJhbnNmZXIgdGhlIGZsYWdzIHRvOyB1c3VhbGx5IGEgbmV3IGFzc2VydGlvblxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlQWxsXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSB0cmFuc2ZlckZsYWdzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhc3NlcnRpb24sIG9iamVjdCwgaW5jbHVkZUFsbCkge1xuICB2YXIgZmxhZ3MgPSBhc3NlcnRpb24uX19mbGFncyB8fCAoYXNzZXJ0aW9uLl9fZmxhZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuICBpZiAoIW9iamVjdC5fX2ZsYWdzKSB7XG4gICAgb2JqZWN0Ll9fZmxhZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgaW5jbHVkZUFsbCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDMgPyBpbmNsdWRlQWxsIDogdHJ1ZTtcblxuICBmb3IgKHZhciBmbGFnIGluIGZsYWdzKSB7XG4gICAgaWYgKGluY2x1ZGVBbGwgfHxcbiAgICAgICAgKGZsYWcgIT09ICdvYmplY3QnICYmIGZsYWcgIT09ICdzc2ZpJyAmJiBmbGFnICE9ICdtZXNzYWdlJykpIHtcbiAgICAgIG9iamVjdC5fX2ZsYWdzW2ZsYWddID0gZmxhZ3NbZmxhZ107XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvdHJhbnNmZXJGbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gLyoqXHJcbi8vICAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMTAuMDMuMjAxNy5cclxuLy8gICovXHJcbi8vIGltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xyXG4vLyBpbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc3JjL2pzL3N1cHBvcnQvc2VydmljZS9Vc2VyU2VydmljZSc7XHJcbi8vXHJcbi8vIG1vY2hhLnNldHVwKCdiZGQnKTtcclxuLy8gbGV0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xyXG4vLyBsZXQgc2hvdWxkID0gY2hhaS5zaG91bGQoKTtcclxuLy9cclxuLy9cclxuLy8gbGV0IHVzZXIgPSB7XHJcbi8vICAgICBsb2dpbjogYHRlc3R1c2VyJHtNYXRoLnJhbmRvbSgpICogKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKX1gLFxyXG4vLyAgICAgcGFzc3dvcmQ6ICd0ZXN0cGFzczEnXHJcbi8vIH07XHJcbi8vXHJcbi8vXHJcbi8vIGRlc2NyaWJlKCdVc2VyIFNlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBkZXNjcmliZSgnU2lnbiBVcCBVc2VyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGl0KCdzdWNjZXNzIHNpZ251cCcsIGZ1bmN0aW9uIChkb25lKSB7XHJcbi8vICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLnNpZ251cCh1c2VyKS50aGVuKHJlc3BvbnNlID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdC5zaG91bGQuZXF1YWwoJ3N1Y2Nlc3MnKTtcclxuLy8gICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgaXQoJ2Vycm9yIHNpZ251cCcsIGZ1bmN0aW9uIChkb25lKSB7XHJcbi8vICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLnNpZ251cCh1c2VyKS5jYXRjaChlcnI9PntcclxuLy8gICAgICAgICAgICAgICAgIGVyci5yZXN1bHQuc2hvdWxkLmVxdWFsKCdlcnJvcicpO1xyXG4vLyAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9KTtcclxuLy9cclxuLy8gICAgIH0pO1xyXG4vLyAgICAgZGVzY3JpYmUoJ0xvZyBJbiBVc2VyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGl0KCdzdWNjZXNzIGxvZ2luJywgZnVuY3Rpb24gKGRvbmUpIHtcclxuLy8gICAgICAgICAgICAgbmV3IFVzZXJTZXJ2aWNlKCkubG9naW4odXNlcikudGhlbihyZXNwb25zZSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBleHBlY3QocmVzcG9uc2UubG9naW4pLnRvLmJlLm5vdC5lbXB0eTtcclxuLy8gICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgaXQoJ2Vycm9yIGxvZ2luJywgZnVuY3Rpb24gKGRvbmUpIHtcclxuLy8gICAgICAgICAgICAgdXNlci5sb2dpbj0nLTEnO1xyXG4vLyAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5sb2dpbih1c2VyKS5jYXRjaChlcnI9PntcclxuLy8gICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGRlc2NyaWJlKCdHZXQgVXNlciAvIExvZ291dCBVc2VyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGl0KCdzdWNjZXNzIGdldCcsIGZ1bmN0aW9uIChkb25lKSB7XHJcbi8vICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGV4cGVjdChyZXNwb25zZS5sb2dpbikudG8uYmUubm90LmVtcHR5O1xyXG4vLyAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICBpdCgnc3VjY2VzcyBsb2dvdXQnLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4vLyAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5sb2dPdXRVc2VyKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICByZXNwb25zZS5zdGF0dXMuc2hvdWxkLmVxdWFsKCcyMDAgT0snKTtcclxuLy8gICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgaXQoJ2Vycm9yIGdldCcsIGZ1bmN0aW9uIChkb25lKSB7XHJcbi8vICAgICAgICAgICAgIG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXIoKS5jYXRjaChlcnI9PntcclxuLy8gICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGRlc2NyaWJlKCdHZXQgTGVhZGVycycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBpdCgnc3VjY2VzcyBnZXQnLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4vLyAgICAgICAgICAgICBuZXcgVXNlclNlcnZpY2UoKS5nZXRMZWFkZXJzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBleHBlY3QocmVzcG9uc2UubGVhZGVycykudG8uYmUuYXJyYXk7XHJcbi8vICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG4vLyBtb2NoYS5jaGVja0xlYWtzKCk7XHJcbi8vIG1vY2hhLnJ1bigpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3Rlc3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2NoYWknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBwbGFjZUhvbGRlcnNDb3VudCAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICByZXR1cm4gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIHJldHVybiBiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgcGxhY2VIb2xkZXJzID0gcGxhY2VIb2xkZXJzQ291bnQoYjY0KVxuXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW5cblxuICB2YXIgTCA9IDBcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJ1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPT0nXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSlcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9J1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpXG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFzZTY0LWpzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIGNoYWlcbiAqIENvcHlyaWdodChjKSAyMDExLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgdXNlZCA9IFtdXG4gICwgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qIVxuICogQ2hhaSB2ZXJzaW9uXG4gKi9cblxuZXhwb3J0cy52ZXJzaW9uID0gJzMuNS4wJztcblxuLyohXG4gKiBBc3NlcnRpb24gRXJyb3JcbiAqL1xuXG5leHBvcnRzLkFzc2VydGlvbkVycm9yID0gcmVxdWlyZSgnYXNzZXJ0aW9uLWVycm9yJyk7XG5cbi8qIVxuICogVXRpbHMgZm9yIHBsdWdpbnMgKG5vdCBleHBvcnRlZClcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vY2hhaS91dGlscycpO1xuXG4vKipcbiAqICMgLnVzZShmdW5jdGlvbilcbiAqXG4gKiBQcm92aWRlcyBhIHdheSB0byBleHRlbmQgdGhlIGludGVybmFscyBvZiBDaGFpXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEByZXR1cm5zIHt0aGlzfSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy51c2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYgKCF+dXNlZC5pbmRleE9mKGZuKSkge1xuICAgIGZuKHRoaXMsIHV0aWwpO1xuICAgIHVzZWQucHVzaChmbik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qIVxuICogVXRpbGl0eSBGdW5jdGlvbnNcbiAqL1xuXG5leHBvcnRzLnV0aWwgPSB1dGlsO1xuXG4vKiFcbiAqIENvbmZpZ3VyYXRpb25cbiAqL1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jaGFpL2NvbmZpZycpO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5cbi8qIVxuICogUHJpbWFyeSBgQXNzZXJ0aW9uYCBwcm90b3R5cGVcbiAqL1xuXG52YXIgYXNzZXJ0aW9uID0gcmVxdWlyZSgnLi9jaGFpL2Fzc2VydGlvbicpO1xuZXhwb3J0cy51c2UoYXNzZXJ0aW9uKTtcblxuLyohXG4gKiBDb3JlIEFzc2VydGlvbnNcbiAqL1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJy4vY2hhaS9jb3JlL2Fzc2VydGlvbnMnKTtcbmV4cG9ydHMudXNlKGNvcmUpO1xuXG4vKiFcbiAqIEV4cGVjdCBpbnRlcmZhY2VcbiAqL1xuXG52YXIgZXhwZWN0ID0gcmVxdWlyZSgnLi9jaGFpL2ludGVyZmFjZS9leHBlY3QnKTtcbmV4cG9ydHMudXNlKGV4cGVjdCk7XG5cbi8qIVxuICogU2hvdWxkIGludGVyZmFjZVxuICovXG5cbnZhciBzaG91bGQgPSByZXF1aXJlKCcuL2NoYWkvaW50ZXJmYWNlL3Nob3VsZCcpO1xuZXhwb3J0cy51c2Uoc2hvdWxkKTtcblxuLyohXG4gKiBBc3NlcnQgaW50ZXJmYWNlXG4gKi9cblxudmFyIGFzc2VydCA9IHJlcXVpcmUoJy4vY2hhaS9pbnRlcmZhY2UvYXNzZXJ0Jyk7XG5leHBvcnRzLnVzZShhc3NlcnQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogY2hhaVxuICogaHR0cDovL2NoYWlqcy5jb21cbiAqIENvcHlyaWdodChjKSAyMDExLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX2NoYWksIHV0aWwpIHtcbiAgLyohXG4gICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAqL1xuXG4gIHZhciBBc3NlcnRpb25FcnJvciA9IF9jaGFpLkFzc2VydGlvbkVycm9yXG4gICAgLCBmbGFnID0gdXRpbC5mbGFnO1xuXG4gIC8qIVxuICAgKiBNb2R1bGUgZXhwb3J0LlxuICAgKi9cblxuICBfY2hhaS5Bc3NlcnRpb24gPSBBc3NlcnRpb247XG5cbiAgLyohXG4gICAqIEFzc2VydGlvbiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBDcmVhdGVzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBBc3NlcnRpb24gKG9iaiwgbXNnLCBzdGFjaykge1xuICAgIGZsYWcodGhpcywgJ3NzZmknLCBzdGFjayB8fCBhcmd1bWVudHMuY2FsbGVlKTtcbiAgICBmbGFnKHRoaXMsICdvYmplY3QnLCBvYmopO1xuICAgIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFzc2VydGlvbiwgJ2luY2x1ZGVTdGFjaycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uaW5jbHVkZVN0YWNrIGlzIGRlcHJlY2F0ZWQsIHVzZSBjaGFpLmNvbmZpZy5pbmNsdWRlU3RhY2sgaW5zdGVhZC4nKTtcbiAgICAgIHJldHVybiBjb25maWcuaW5jbHVkZVN0YWNrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uaW5jbHVkZVN0YWNrIGlzIGRlcHJlY2F0ZWQsIHVzZSBjaGFpLmNvbmZpZy5pbmNsdWRlU3RhY2sgaW5zdGVhZC4nKTtcbiAgICAgIGNvbmZpZy5pbmNsdWRlU3RhY2sgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBc3NlcnRpb24sICdzaG93RGlmZicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uc2hvd0RpZmYgaXMgZGVwcmVjYXRlZCwgdXNlIGNoYWkuY29uZmlnLnNob3dEaWZmIGluc3RlYWQuJyk7XG4gICAgICByZXR1cm4gY29uZmlnLnNob3dEaWZmO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uc2hvd0RpZmYgaXMgZGVwcmVjYXRlZCwgdXNlIGNoYWkuY29uZmlnLnNob3dEaWZmIGluc3RlYWQuJyk7XG4gICAgICBjb25maWcuc2hvd0RpZmYgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHV0aWwuYWRkUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkTWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdXRpbC5hZGRNZXRob2QodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gICAgdXRpbC5hZGRDaGFpbmFibGVNZXRob2QodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKTtcbiAgfTtcblxuICBBc3NlcnRpb24ub3ZlcndyaXRlUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB1dGlsLm92ZXJ3cml0ZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbik7XG4gIH07XG5cbiAgQXNzZXJ0aW9uLm92ZXJ3cml0ZU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHV0aWwub3ZlcndyaXRlTWV0aG9kKHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbik7XG4gIH07XG5cbiAgQXNzZXJ0aW9uLm92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgY2hhaW5pbmdCZWhhdmlvcikge1xuICAgIHV0aWwub3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kKHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbiwgY2hhaW5pbmdCZWhhdmlvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuYXNzZXJ0KGV4cHJlc3Npb24sIG1lc3NhZ2UsIG5lZ2F0ZU1lc3NhZ2UsIGV4cGVjdGVkLCBhY3R1YWwsIHNob3dEaWZmKVxuICAgKlxuICAgKiBFeGVjdXRlcyBhbiBleHByZXNzaW9uIGFuZCBjaGVjayBleHBlY3RhdGlvbnMuIFRocm93cyBBc3NlcnRpb25FcnJvciBmb3IgcmVwb3J0aW5nIGlmIHRlc3QgZG9lc24ndCBwYXNzLlxuICAgKlxuICAgKiBAbmFtZSBhc3NlcnRcbiAgICogQHBhcmFtIHtQaGlsb3NvcGhpY2FsfSBleHByZXNzaW9uIHRvIGJlIHRlc3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gbWVzc2FnZSBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgbWVzc2FnZSB0byBkaXNwbGF5IGlmIGV4cHJlc3Npb24gZmFpbHNcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IG5lZ2F0ZWRNZXNzYWdlIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBuZWdhdGVkTWVzc2FnZSB0byBkaXNwbGF5IGlmIG5lZ2F0ZWQgZXhwcmVzc2lvbiBmYWlsc1xuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZCB2YWx1ZSAocmVtZW1iZXIgdG8gY2hlY2sgZm9yIG5lZ2F0aW9uKVxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWwgKG9wdGlvbmFsKSB3aWxsIGRlZmF1bHQgdG8gYHRoaXMub2JqYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dEaWZmIChvcHRpb25hbCkgd2hlbiBzZXQgdG8gYHRydWVgLCBhc3NlcnQgd2lsbCBkaXNwbGF5IGEgZGlmZiBpbiBhZGRpdGlvbiB0byB0aGUgbWVzc2FnZSBpZiBleHByZXNzaW9uIGZhaWxzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBBc3NlcnRpb24ucHJvdG90eXBlLmFzc2VydCA9IGZ1bmN0aW9uIChleHByLCBtc2csIG5lZ2F0ZU1zZywgZXhwZWN0ZWQsIF9hY3R1YWwsIHNob3dEaWZmKSB7XG4gICAgdmFyIG9rID0gdXRpbC50ZXN0KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRydWUgIT09IHNob3dEaWZmKSBzaG93RGlmZiA9IGZhbHNlO1xuICAgIGlmICh0cnVlICE9PSBjb25maWcuc2hvd0RpZmYpIHNob3dEaWZmID0gZmFsc2U7XG5cbiAgICBpZiAoIW9rKSB7XG4gICAgICB2YXIgbXNnID0gdXRpbC5nZXRNZXNzYWdlKHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgLCBhY3R1YWwgPSB1dGlsLmdldEFjdHVhbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGhyb3cgbmV3IEFzc2VydGlvbkVycm9yKG1zZywge1xuICAgICAgICAgIGFjdHVhbDogYWN0dWFsXG4gICAgICAgICwgZXhwZWN0ZWQ6IGV4cGVjdGVkXG4gICAgICAgICwgc2hvd0RpZmY6IHNob3dEaWZmXG4gICAgICB9LCAoY29uZmlnLmluY2x1ZGVTdGFjaykgPyB0aGlzLmFzc2VydCA6IGZsYWcodGhpcywgJ3NzZmknKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIVxuICAgKiAjIyMgLl9vYmpcbiAgICpcbiAgICogUXVpY2sgcmVmZXJlbmNlIHRvIHN0b3JlZCBgYWN0dWFsYCB2YWx1ZSBmb3IgcGx1Z2luIGRldmVsb3BlcnMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ19vYmonLFxuICAgIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICAgIH1cbiAgICAsIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBmbGFnKHRoaXMsICdvYmplY3QnLCB2YWwpO1xuICAgICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS9hc3NlcnRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogY2hhaVxuICogaHR0cDovL2NoYWlqcy5jb21cbiAqIENvcHlyaWdodChjKSAyMDExLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjaGFpLCBfKSB7XG4gIHZhciBBc3NlcnRpb24gPSBjaGFpLkFzc2VydGlvblxuICAgICwgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgLCBmbGFnID0gXy5mbGFnO1xuXG4gIC8qKlxuICAgKiAjIyMgTGFuZ3VhZ2UgQ2hhaW5zXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgYXJlIHByb3ZpZGVkIGFzIGNoYWluYWJsZSBnZXR0ZXJzIHRvXG4gICAqIGltcHJvdmUgdGhlIHJlYWRhYmlsaXR5IG9mIHlvdXIgYXNzZXJ0aW9ucy4gVGhleVxuICAgKiBkbyBub3QgcHJvdmlkZSB0ZXN0aW5nIGNhcGFiaWxpdGllcyB1bmxlc3MgdGhleVxuICAgKiBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4gYnkgYSBwbHVnaW4uXG4gICAqXG4gICAqICoqQ2hhaW5zKipcbiAgICpcbiAgICogLSB0b1xuICAgKiAtIGJlXG4gICAqIC0gYmVlblxuICAgKiAtIGlzXG4gICAqIC0gdGhhdFxuICAgKiAtIHdoaWNoXG4gICAqIC0gYW5kXG4gICAqIC0gaGFzXG4gICAqIC0gaGF2ZVxuICAgKiAtIHdpdGhcbiAgICogLSBhdFxuICAgKiAtIG9mXG4gICAqIC0gc2FtZVxuICAgKlxuICAgKiBAbmFtZSBsYW5ndWFnZSBjaGFpbnNcbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgWyAndG8nLCAnYmUnLCAnYmVlbidcbiAgLCAnaXMnLCAnYW5kJywgJ2hhcycsICdoYXZlJ1xuICAsICd3aXRoJywgJ3RoYXQnLCAnd2hpY2gnLCAnYXQnXG4gICwgJ29mJywgJ3NhbWUnIF0uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICBBc3NlcnRpb24uYWRkUHJvcGVydHkoY2hhaW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5ub3RcbiAgICpcbiAgICogTmVnYXRlcyBhbnkgb2YgYXNzZXJ0aW9ucyBmb2xsb3dpbmcgaW4gdGhlIGNoYWluLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KGZvbykudG8ubm90LmVxdWFsKCdiYXInKTtcbiAgICogICAgIGV4cGVjdChnb29kRm4pLnRvLm5vdC50aHJvdyhFcnJvcik7XG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXonIH0pLnRvLmhhdmUucHJvcGVydHkoJ2ZvbycpXG4gICAqICAgICAgIC5hbmQubm90LmVxdWFsKCdiYXInKTtcbiAgICpcbiAgICogQG5hbWUgbm90XG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnbm90JywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWcodGhpcywgJ25lZ2F0ZScsIHRydWUpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5kZWVwXG4gICAqXG4gICAqIFNldHMgdGhlIGBkZWVwYCBmbGFnLCBsYXRlciB1c2VkIGJ5IHRoZSBgZXF1YWxgIGFuZFxuICAgKiBgcHJvcGVydHlgIGFzc2VydGlvbnMuXG4gICAqXG4gICAqICAgICBleHBlY3QoZm9vKS50by5kZWVwLmVxdWFsKHsgYmFyOiAnYmF6JyB9KTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogeyBiYXI6IHsgYmF6OiAncXV1eCcgfSB9IH0pXG4gICAqICAgICAgIC50by5oYXZlLmRlZXAucHJvcGVydHkoJ2Zvby5iYXIuYmF6JywgJ3F1dXgnKTtcbiAgICpcbiAgICogYC5kZWVwLnByb3BlcnR5YCBzcGVjaWFsIGNoYXJhY3RlcnMgY2FuIGJlIGVzY2FwZWRcbiAgICogYnkgYWRkaW5nIHR3byBzbGFzaGVzIGJlZm9yZSB0aGUgYC5gIG9yIGBbXWAuXG4gICAqXG4gICAqICAgICB2YXIgZGVlcENzcyA9IHsgJy5saW5rJzogeyAnW3RhcmdldF0nOiA0MiB9fTtcbiAgICogICAgIGV4cGVjdChkZWVwQ3NzKS50by5oYXZlLmRlZXAucHJvcGVydHkoJ1xcXFwubGluay5cXFxcW3RhcmdldFxcXFxdJywgNDIpO1xuICAgKlxuICAgKiBAbmFtZSBkZWVwXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnZGVlcCcsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnKHRoaXMsICdkZWVwJywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmFueVxuICAgKlxuICAgKiBTZXRzIHRoZSBgYW55YCBmbGFnLCAob3Bwb3NpdGUgb2YgdGhlIGBhbGxgIGZsYWcpXG4gICAqIGxhdGVyIHVzZWQgaW4gdGhlIGBrZXlzYCBhc3NlcnRpb24uXG4gICAqXG4gICAqICAgICBleHBlY3QoZm9vKS50by5oYXZlLmFueS5rZXlzKCdiYXInLCAnYmF6Jyk7XG4gICAqXG4gICAqIEBuYW1lIGFueVxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2FueScsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnKHRoaXMsICdhbnknLCB0cnVlKTtcbiAgICBmbGFnKHRoaXMsICdhbGwnLCBmYWxzZSlcbiAgfSk7XG5cblxuICAvKipcbiAgICogIyMjIC5hbGxcbiAgICpcbiAgICogU2V0cyB0aGUgYGFsbGAgZmxhZyAob3Bwb3NpdGUgb2YgdGhlIGBhbnlgIGZsYWcpXG4gICAqIGxhdGVyIHVzZWQgYnkgdGhlIGBrZXlzYCBhc3NlcnRpb24uXG4gICAqXG4gICAqICAgICBleHBlY3QoZm9vKS50by5oYXZlLmFsbC5rZXlzKCdiYXInLCAnYmF6Jyk7XG4gICAqXG4gICAqIEBuYW1lIGFsbFxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2FsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnKHRoaXMsICdhbGwnLCB0cnVlKTtcbiAgICBmbGFnKHRoaXMsICdhbnknLCBmYWxzZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmEodHlwZSlcbiAgICpcbiAgICogVGhlIGBhYCBhbmQgYGFuYCBhc3NlcnRpb25zIGFyZSBhbGlhc2VzIHRoYXQgY2FuIGJlXG4gICAqIHVzZWQgZWl0aGVyIGFzIGxhbmd1YWdlIGNoYWlucyBvciB0byBhc3NlcnQgYSB2YWx1ZSdzXG4gICAqIHR5cGUuXG4gICAqXG4gICAqICAgICAvLyB0eXBlb2ZcbiAgICogICAgIGV4cGVjdCgndGVzdCcpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAnYmFyJyB9KS50by5iZS5hbignb2JqZWN0Jyk7XG4gICAqICAgICBleHBlY3QobnVsbCkudG8uYmUuYSgnbnVsbCcpO1xuICAgKiAgICAgZXhwZWN0KHVuZGVmaW5lZCkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgKiAgICAgZXhwZWN0KG5ldyBFcnJvcikudG8uYmUuYW4oJ2Vycm9yJyk7XG4gICAqICAgICBleHBlY3QobmV3IFByb21pc2UpLnRvLmJlLmEoJ3Byb21pc2UnKTtcbiAgICogICAgIGV4cGVjdChuZXcgRmxvYXQzMkFycmF5KCkpLnRvLmJlLmEoJ2Zsb2F0MzJhcnJheScpO1xuICAgKiAgICAgZXhwZWN0KFN5bWJvbCgpKS50by5iZS5hKCdzeW1ib2wnKTtcbiAgICpcbiAgICogICAgIC8vIGVzNiBvdmVycmlkZXNcbiAgICogICAgIGV4cGVjdCh7W1N5bWJvbC50b1N0cmluZ1RhZ106KCk9Pidmb28nfSkudG8uYmUuYSgnZm9vJyk7XG4gICAqXG4gICAqICAgICAvLyBsYW5ndWFnZSBjaGFpblxuICAgKiAgICAgZXhwZWN0KGZvbykudG8uYmUuYW4uaW5zdGFuY2VvZihGb28pO1xuICAgKlxuICAgKiBAbmFtZSBhXG4gICAqIEBhbGlhcyBhblxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFuICh0eXBlLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCBhcnRpY2xlID0gflsgJ2EnLCAnZScsICdpJywgJ28nLCAndScgXS5pbmRleE9mKHR5cGUuY2hhckF0KDApKSA/ICdhbiAnIDogJ2EgJztcblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICB0eXBlID09PSBfLnR5cGUob2JqKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSAnICsgYXJ0aWNsZSArIHR5cGVcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gbm90IHRvIGJlICcgKyBhcnRpY2xlICsgdHlwZVxuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdhbicsIGFuKTtcbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU1ldGhvZCgnYScsIGFuKTtcblxuICAvKipcbiAgICogIyMjIC5pbmNsdWRlKHZhbHVlKVxuICAgKlxuICAgKiBUaGUgYGluY2x1ZGVgIGFuZCBgY29udGFpbmAgYXNzZXJ0aW9ucyBjYW4gYmUgdXNlZCBhcyBlaXRoZXIgcHJvcGVydHlcbiAgICogYmFzZWQgbGFuZ3VhZ2UgY2hhaW5zIG9yIGFzIG1ldGhvZHMgdG8gYXNzZXJ0IHRoZSBpbmNsdXNpb24gb2YgYW4gb2JqZWN0XG4gICAqIGluIGFuIGFycmF5IG9yIGEgc3Vic3RyaW5nIGluIGEgc3RyaW5nLiBXaGVuIHVzZWQgYXMgbGFuZ3VhZ2UgY2hhaW5zLFxuICAgKiB0aGV5IHRvZ2dsZSB0aGUgYGNvbnRhaW5zYCBmbGFnIGZvciB0aGUgYGtleXNgIGFzc2VydGlvbi5cbiAgICpcbiAgICogICAgIGV4cGVjdChbMSwyLDNdKS50by5pbmNsdWRlKDIpO1xuICAgKiAgICAgZXhwZWN0KCdmb29iYXInKS50by5jb250YWluKCdmb28nKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogJ2JhcicsIGhlbGxvOiAndW5pdmVyc2UnIH0pLnRvLmluY2x1ZGUua2V5cygnZm9vJyk7XG4gICAqXG4gICAqIEBuYW1lIGluY2x1ZGVcbiAgICogQGFsaWFzIGNvbnRhaW5cbiAgICogQGFsaWFzIGluY2x1ZGVzXG4gICAqIEBhbGlhcyBjb250YWluc1xuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd8TnVtYmVyfSBvYmpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBpbmNsdWRlQ2hhaW5pbmdCZWhhdmlvciAoKSB7XG4gICAgZmxhZyh0aGlzLCAnY29udGFpbnMnLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY2x1ZGUgKHZhbCwgbXNnKSB7XG4gICAgXy5leHBlY3RUeXBlcyh0aGlzLCBbJ2FycmF5JywgJ29iamVjdCcsICdzdHJpbmcnXSk7XG5cbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgdmFyIGV4cGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAoXy50eXBlKG9iaikgPT09ICdhcnJheScgJiYgXy50eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBpZiAoXy5lcWwob2JqW2ldLCB2YWwpKSB7XG4gICAgICAgICAgZXhwZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfLnR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghZmxhZyh0aGlzLCAnbmVnYXRlJykpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiB2YWwpIG5ldyBBc3NlcnRpb24ob2JqKS5wcm9wZXJ0eShrLCB2YWxba10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3Vic2V0ID0ge307XG4gICAgICBmb3IgKHZhciBrIGluIHZhbCkgc3Vic2V0W2tdID0gb2JqW2tdO1xuICAgICAgZXhwZWN0ZWQgPSBfLmVxbChzdWJzZXQsIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGVjdGVkID0gKG9iaiAhPSB1bmRlZmluZWQpICYmIH5vYmouaW5kZXhPZih2YWwpO1xuICAgIH1cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgZXhwZWN0ZWRcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaW5jbHVkZSAnICsgXy5pbnNwZWN0KHZhbClcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGluY2x1ZGUgJyArIF8uaW5zcGVjdCh2YWwpKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2luY2x1ZGUnLCBpbmNsdWRlLCBpbmNsdWRlQ2hhaW5pbmdCZWhhdmlvcik7XG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2NvbnRhaW4nLCBpbmNsdWRlLCBpbmNsdWRlQ2hhaW5pbmdCZWhhdmlvcik7XG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2NvbnRhaW5zJywgaW5jbHVkZSwgaW5jbHVkZUNoYWluaW5nQmVoYXZpb3IpO1xuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdpbmNsdWRlcycsIGluY2x1ZGUsIGluY2x1ZGVDaGFpbmluZ0JlaGF2aW9yKTtcblxuICAvKipcbiAgICogIyMjIC5va1xuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyB0cnV0aHkuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2V2ZXJ5dGhpbmcnKS50by5iZS5vaztcbiAgICogICAgIGV4cGVjdCgxKS50by5iZS5vaztcbiAgICogICAgIGV4cGVjdChmYWxzZSkudG8ubm90LmJlLm9rO1xuICAgKiAgICAgZXhwZWN0KHVuZGVmaW5lZCkudG8ubm90LmJlLm9rO1xuICAgKiAgICAgZXhwZWN0KG51bGwpLnRvLm5vdC5iZS5vaztcbiAgICpcbiAgICogQG5hbWUgb2tcbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZFByb3BlcnR5KCdvaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgdHJ1dGh5J1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBmYWxzeScpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC50cnVlXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGB0cnVlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCh0cnVlKS50by5iZS50cnVlO1xuICAgKiAgICAgZXhwZWN0KDEpLnRvLm5vdC5iZS50cnVlO1xuICAgKlxuICAgKiBAbmFtZSB0cnVlXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgndHJ1ZScsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgdHJ1ZSA9PT0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgdHJ1ZSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgZmFsc2UnXG4gICAgICAsIHRoaXMubmVnYXRlID8gZmFsc2UgOiB0cnVlXG4gICAgKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAuZmFsc2VcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYGZhbHNlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdChmYWxzZSkudG8uYmUuZmFsc2U7XG4gICAqICAgICBleHBlY3QoMCkudG8ubm90LmJlLmZhbHNlO1xuICAgKlxuICAgKiBAbmFtZSBmYWxzZVxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2ZhbHNlJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBmYWxzZSA9PT0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgZmFsc2UnXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIHRydWUnXG4gICAgICAsIHRoaXMubmVnYXRlID8gdHJ1ZSA6IGZhbHNlXG4gICAgKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAubnVsbFxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBgbnVsbGAuXG4gICAqXG4gICAqICAgICBleHBlY3QobnVsbCkudG8uYmUubnVsbDtcbiAgICogICAgIGV4cGVjdCh1bmRlZmluZWQpLnRvLm5vdC5iZS5udWxsO1xuICAgKlxuICAgKiBAbmFtZSBudWxsXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnbnVsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgbnVsbCA9PT0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgbnVsbCdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gbm90IHRvIGJlIG51bGwnXG4gICAgKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAudW5kZWZpbmVkXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGB1bmRlZmluZWRgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KHVuZGVmaW5lZCkudG8uYmUudW5kZWZpbmVkO1xuICAgKiAgICAgZXhwZWN0KG51bGwpLnRvLm5vdC5iZS51bmRlZmluZWQ7XG4gICAqXG4gICAqIEBuYW1lIHVuZGVmaW5lZFxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ3VuZGVmaW5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgdW5kZWZpbmVkID09PSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSB1bmRlZmluZWQnXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IG5vdCB0byBiZSB1bmRlZmluZWQnXG4gICAgKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAuTmFOXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGBOYU5gLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5iZS5OYU47XG4gICAqICAgICBleHBlY3QoNCkubm90LnRvLmJlLk5hTjtcbiAgICpcbiAgICogQG5hbWUgTmFOXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnTmFOJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBpc05hTihmbGFnKHRoaXMsICdvYmplY3QnKSlcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBOYU4nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gbm90IHRvIGJlIE5hTidcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5leGlzdFxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBuZWl0aGVyIGBudWxsYCBub3IgYHVuZGVmaW5lZGAuXG4gICAqXG4gICAqICAgICB2YXIgZm9vID0gJ2hpJ1xuICAgKiAgICAgICAsIGJhciA9IG51bGxcbiAgICogICAgICAgLCBiYXo7XG4gICAqXG4gICAqICAgICBleHBlY3QoZm9vKS50by5leGlzdDtcbiAgICogICAgIGV4cGVjdChiYXIpLnRvLm5vdC5leGlzdDtcbiAgICogICAgIGV4cGVjdChiYXopLnRvLm5vdC5leGlzdDtcbiAgICpcbiAgICogQG5hbWUgZXhpc3RcbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZFByb3BlcnR5KCdleGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgbnVsbCAhPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBleGlzdCdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGV4aXN0J1xuICAgICk7XG4gIH0pO1xuXG5cbiAgLyoqXG4gICAqICMjIyAuZW1wdHlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQncyBsZW5ndGggaXMgYDBgLiBGb3IgYXJyYXlzIGFuZCBzdHJpbmdzLCBpdCBjaGVja3NcbiAgICogdGhlIGBsZW5ndGhgIHByb3BlcnR5LiBGb3Igb2JqZWN0cywgaXQgZ2V0cyB0aGUgY291bnQgb2ZcbiAgICogZW51bWVyYWJsZSBrZXlzLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KFtdKS50by5iZS5lbXB0eTtcbiAgICogICAgIGV4cGVjdCgnJykudG8uYmUuZW1wdHk7XG4gICAqICAgICBleHBlY3Qoe30pLnRvLmJlLmVtcHR5O1xuICAgKlxuICAgKiBAbmFtZSBlbXB0eVxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2VtcHR5JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCBleHBlY3RlZCA9IG9iajtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgJ3N0cmluZycgPT09IHR5cGVvZiBvYmplY3QpIHtcbiAgICAgIGV4cGVjdGVkID0gb2JqLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICBleHBlY3RlZCA9IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAhZXhwZWN0ZWRcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgZW1wdHknXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IG5vdCB0byBiZSBlbXB0eSdcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5hcmd1bWVudHNcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYW4gYXJndW1lbnRzIG9iamVjdC5cbiAgICpcbiAgICogICAgIGZ1bmN0aW9uIHRlc3QgKCkge1xuICAgKiAgICAgICBleHBlY3QoYXJndW1lbnRzKS50by5iZS5hcmd1bWVudHM7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEBuYW1lIGFyZ3VtZW50c1xuICAgKiBAYWxpYXMgQXJndW1lbnRzXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNoZWNrQXJndW1lbnRzICgpIHtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAnW29iamVjdCBBcmd1bWVudHNdJyA9PT0gdHlwZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhcmd1bWVudHMgYnV0IGdvdCAnICsgdHlwZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgYXJndW1lbnRzJ1xuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2FyZ3VtZW50cycsIGNoZWNrQXJndW1lbnRzKTtcbiAgQXNzZXJ0aW9uLmFkZFByb3BlcnR5KCdBcmd1bWVudHMnLCBjaGVja0FyZ3VtZW50cyk7XG5cbiAgLyoqXG4gICAqICMjIyAuZXF1YWwodmFsdWUpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIHN0cmljdGx5IGVxdWFsIChgPT09YCkgdG8gYHZhbHVlYC5cbiAgICogQWx0ZXJuYXRlbHksIGlmIHRoZSBgZGVlcGAgZmxhZyBpcyBzZXQsIGFzc2VydHMgdGhhdFxuICAgKiB0aGUgdGFyZ2V0IGlzIGRlZXBseSBlcXVhbCB0byBgdmFsdWVgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdoZWxsbycpLnRvLmVxdWFsKCdoZWxsbycpO1xuICAgKiAgICAgZXhwZWN0KDQyKS50by5lcXVhbCg0Mik7XG4gICAqICAgICBleHBlY3QoMSkudG8ubm90LmVxdWFsKHRydWUpO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAnYmFyJyB9KS50by5ub3QuZXF1YWwoeyBmb286ICdiYXInIH0pO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAnYmFyJyB9KS50by5kZWVwLmVxdWFsKHsgZm9vOiAnYmFyJyB9KTtcbiAgICpcbiAgICogQG5hbWUgZXF1YWxcbiAgICogQGFsaWFzIGVxdWFsc1xuICAgKiBAYWxpYXMgZXFcbiAgICogQGFsaWFzIGRlZXAuZXF1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRFcXVhbCAodmFsLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RlZXAnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXFsKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIHZhbCA9PT0gb2JqXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gZXF1YWwgI3tleHB9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBlcXVhbCAje2V4cH0nXG4gICAgICAgICwgdmFsXG4gICAgICAgICwgdGhpcy5fb2JqXG4gICAgICAgICwgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdlcXVhbCcsIGFzc2VydEVxdWFsKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnZXF1YWxzJywgYXNzZXJ0RXF1YWwpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdlcScsIGFzc2VydEVxdWFsKTtcblxuICAvKipcbiAgICogIyMjIC5lcWwodmFsdWUpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGRlZXBseSBlcXVhbCB0byBgdmFsdWVgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAnYmFyJyB9KS50by5lcWwoeyBmb286ICdiYXInIH0pO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5lcWwoWyAxLCAyLCAzIF0pO1xuICAgKlxuICAgKiBAbmFtZSBlcWxcbiAgICogQGFsaWFzIGVxbHNcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRFcWwob2JqLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgXy5lcWwob2JqLCBmbGFnKHRoaXMsICdvYmplY3QnKSlcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gZGVlcGx5IGVxdWFsICN7ZXhwfSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGRlZXBseSBlcXVhbCAje2V4cH0nXG4gICAgICAsIG9ialxuICAgICAgLCB0aGlzLl9vYmpcbiAgICAgICwgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdlcWwnLCBhc3NlcnRFcWwpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdlcWxzJywgYXNzZXJ0RXFsKTtcblxuICAvKipcbiAgICogIyMjIC5hYm92ZSh2YWx1ZSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZ3JlYXRlciB0aGFuIGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoMTApLnRvLmJlLmFib3ZlKDUpO1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYGxlbmd0aGAgdG9cbiAgICogYXNzZXJ0IGEgbWluaW11bSBsZW5ndGguIFRoZSBiZW5lZml0IGJlaW5nIGFcbiAgICogbW9yZSBpbmZvcm1hdGl2ZSBlcnJvciBtZXNzYWdlIHRoYW4gaWYgdGhlIGxlbmd0aFxuICAgKiB3YXMgc3VwcGxpZWQgZGlyZWN0bHkuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2ZvbycpLnRvLmhhdmUubGVuZ3RoLmFib3ZlKDIpO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5oYXZlLmxlbmd0aC5hYm92ZSgyKTtcbiAgICpcbiAgICogQG5hbWUgYWJvdmVcbiAgICogQGFsaWFzIGd0XG4gICAqIEBhbGlhcyBncmVhdGVyVGhhblxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRBYm92ZSAobiwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIGlmIChmbGFnKHRoaXMsICdkb0xlbmd0aCcpKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLnByb3BlcnR5KCdsZW5ndGgnKTtcbiAgICAgIHZhciBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgbGVuID4gblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggYWJvdmUgI3tleHB9IGJ1dCBnb3QgI3thY3R9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlIGEgbGVuZ3RoIGFib3ZlICN7ZXhwfSdcbiAgICAgICAgLCBuXG4gICAgICAgICwgbGVuXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBvYmogPiBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYWJvdmUgJyArIG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhdCBtb3N0ICcgKyBuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2Fib3ZlJywgYXNzZXJ0QWJvdmUpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdndCcsIGFzc2VydEFib3ZlKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnZ3JlYXRlclRoYW4nLCBhc3NlcnRBYm92ZSk7XG5cbiAgLyoqXG4gICAqICMjIyAubGVhc3QodmFsdWUpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgdmFsdWVgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KDEwKS50by5iZS5hdC5sZWFzdCgxMCk7XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgbGVuZ3RoYCB0b1xuICAgKiBhc3NlcnQgYSBtaW5pbXVtIGxlbmd0aC4gVGhlIGJlbmVmaXQgYmVpbmcgYVxuICAgKiBtb3JlIGluZm9ybWF0aXZlIGVycm9yIG1lc3NhZ2UgdGhhbiBpZiB0aGUgbGVuZ3RoXG4gICAqIHdhcyBzdXBwbGllZCBkaXJlY3RseS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGgub2YuYXQubGVhc3QoMik7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLm9mLmF0LmxlYXN0KDMpO1xuICAgKlxuICAgKiBAbmFtZSBsZWFzdFxuICAgKiBAYWxpYXMgZ3RlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydExlYXN0IChuLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RvTGVuZ3RoJykpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgICAgdmFyIGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBsZW4gPj0gblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggYXQgbGVhc3QgI3tleHB9IGJ1dCBnb3QgI3thY3R9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggYmVsb3cgI3tleHB9J1xuICAgICAgICAsIG5cbiAgICAgICAgLCBsZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIG9iaiA+PSBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYXQgbGVhc3QgJyArIG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBiZWxvdyAnICsgblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdsZWFzdCcsIGFzc2VydExlYXN0KTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnZ3RlJywgYXNzZXJ0TGVhc3QpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmJlbG93KHZhbHVlKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBsZXNzIHRoYW4gYHZhbHVlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCg1KS50by5iZS5iZWxvdygxMCk7XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgbGVuZ3RoYCB0b1xuICAgKiBhc3NlcnQgYSBtYXhpbXVtIGxlbmd0aC4gVGhlIGJlbmVmaXQgYmVpbmcgYVxuICAgKiBtb3JlIGluZm9ybWF0aXZlIGVycm9yIG1lc3NhZ2UgdGhhbiBpZiB0aGUgbGVuZ3RoXG4gICAqIHdhcyBzdXBwbGllZCBkaXJlY3RseS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGguYmVsb3coNCk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLmJlbG93KDQpO1xuICAgKlxuICAgKiBAbmFtZSBiZWxvd1xuICAgKiBAYWxpYXMgbHRcbiAgICogQGFsaWFzIGxlc3NUaGFuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydEJlbG93IChuLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RvTGVuZ3RoJykpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgICAgdmFyIGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBsZW4gPCBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhIGxlbmd0aCBiZWxvdyAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgYSBsZW5ndGggYmVsb3cgI3tleHB9J1xuICAgICAgICAsIG5cbiAgICAgICAgLCBsZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIG9iaiA8IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBiZWxvdyAnICsgblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGF0IGxlYXN0ICcgKyBuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2JlbG93JywgYXNzZXJ0QmVsb3cpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdsdCcsIGFzc2VydEJlbG93KTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbGVzc1RoYW4nLCBhc3NlcnRCZWxvdyk7XG5cbiAgLyoqXG4gICAqICMjIyAubW9zdCh2YWx1ZSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoNSkudG8uYmUuYXQubW9zdCg1KTtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBsZW5ndGhgIHRvXG4gICAqIGFzc2VydCBhIG1heGltdW0gbGVuZ3RoLiBUaGUgYmVuZWZpdCBiZWluZyBhXG4gICAqIG1vcmUgaW5mb3JtYXRpdmUgZXJyb3IgbWVzc2FnZSB0aGFuIGlmIHRoZSBsZW5ndGhcbiAgICogd2FzIHN1cHBsaWVkIGRpcmVjdGx5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC5vZi5hdC5tb3N0KDQpO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5oYXZlLmxlbmd0aC5vZi5hdC5tb3N0KDMpO1xuICAgKlxuICAgKiBAbmFtZSBtb3N0XG4gICAqIEBhbGlhcyBsdGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0TW9zdCAobiwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIGlmIChmbGFnKHRoaXMsICdkb0xlbmd0aCcpKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLnByb3BlcnR5KCdsZW5ndGgnKTtcbiAgICAgIHZhciBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgbGVuIDw9IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgbGVuZ3RoIGF0IG1vc3QgI3tleHB9IGJ1dCBnb3QgI3thY3R9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggYWJvdmUgI3tleHB9J1xuICAgICAgICAsIG5cbiAgICAgICAgLCBsZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIG9iaiA8PSBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYXQgbW9zdCAnICsgblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGFib3ZlICcgKyBuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ21vc3QnLCBhc3NlcnRNb3N0KTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbHRlJywgYXNzZXJ0TW9zdCk7XG5cbiAgLyoqXG4gICAqICMjIyAud2l0aGluKHN0YXJ0LCBmaW5pc2gpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIHdpdGhpbiBhIHJhbmdlLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KDcpLnRvLmJlLndpdGhpbig1LDEwKTtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBsZW5ndGhgIHRvXG4gICAqIGFzc2VydCBhIGxlbmd0aCByYW5nZS4gVGhlIGJlbmVmaXQgYmVpbmcgYVxuICAgKiBtb3JlIGluZm9ybWF0aXZlIGVycm9yIG1lc3NhZ2UgdGhhbiBpZiB0aGUgbGVuZ3RoXG4gICAqIHdhcyBzdXBwbGllZCBkaXJlY3RseS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGgud2l0aGluKDIsNCk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLndpdGhpbigyLDQpO1xuICAgKlxuICAgKiBAbmFtZSB3aXRoaW5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IGxvd2VyYm91bmQgaW5jbHVzaXZlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmaW5pc2ggdXBwZXJib3VuZCBpbmNsdXNpdmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCd3aXRoaW4nLCBmdW5jdGlvbiAoc3RhcnQsIGZpbmlzaCwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHJhbmdlID0gc3RhcnQgKyAnLi4nICsgZmluaXNoO1xuICAgIGlmIChmbGFnKHRoaXMsICdkb0xlbmd0aCcpKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLnByb3BlcnR5KCdsZW5ndGgnKTtcbiAgICAgIHZhciBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgbGVuID49IHN0YXJ0ICYmIGxlbiA8PSBmaW5pc2hcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgbGVuZ3RoIHdpdGhpbiAnICsgcmFuZ2VcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgaGF2ZSBhIGxlbmd0aCB3aXRoaW4gJyArIHJhbmdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBvYmogPj0gc3RhcnQgJiYgb2JqIDw9IGZpbmlzaFxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIHdpdGhpbiAnICsgcmFuZ2VcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgd2l0aGluICcgKyByYW5nZVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmluc3RhbmNlb2YoY29uc3RydWN0b3IpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gICAqXG4gICAqICAgICB2YXIgVGVhID0gZnVuY3Rpb24gKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgKiAgICAgICAsIENoYWkgPSBuZXcgVGVhKCdjaGFpJyk7XG4gICAqXG4gICAqICAgICBleHBlY3QoQ2hhaSkudG8uYmUuYW4uaW5zdGFuY2VvZihUZWEpO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5iZS5pbnN0YW5jZW9mKEFycmF5KTtcbiAgICpcbiAgICogQG5hbWUgaW5zdGFuY2VvZlxuICAgKiBAcGFyYW0ge0NvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhbGlhcyBpbnN0YW5jZU9mXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydEluc3RhbmNlT2YgKGNvbnN0cnVjdG9yLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgbmFtZSA9IF8uZ2V0TmFtZShjb25zdHJ1Y3Rvcik7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIGZsYWcodGhpcywgJ29iamVjdCcpIGluc3RhbmNlb2YgY29uc3RydWN0b3JcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYW4gaW5zdGFuY2Ugb2YgJyArIG5hbWVcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGJlIGFuIGluc3RhbmNlIG9mICcgKyBuYW1lXG4gICAgKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdpbnN0YW5jZW9mJywgYXNzZXJ0SW5zdGFuY2VPZik7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2luc3RhbmNlT2YnLCBhc3NlcnRJbnN0YW5jZU9mKTtcblxuICAvKipcbiAgICogIyMjIC5wcm9wZXJ0eShuYW1lLCBbdmFsdWVdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBoYXMgYSBwcm9wZXJ0eSBgbmFtZWAsIG9wdGlvbmFsbHkgYXNzZXJ0aW5nIHRoYXRcbiAgICogdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgaXMgc3RyaWN0bHkgZXF1YWwgdG8gIGB2YWx1ZWAuXG4gICAqIElmIHRoZSBgZGVlcGAgZmxhZyBpcyBzZXQsIHlvdSBjYW4gdXNlIGRvdC0gYW5kIGJyYWNrZXQtbm90YXRpb24gZm9yIGRlZXBcbiAgICogcmVmZXJlbmNlcyBpbnRvIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICpcbiAgICogICAgIC8vIHNpbXBsZSByZWZlcmVuY2luZ1xuICAgKiAgICAgdmFyIG9iaiA9IHsgZm9vOiAnYmFyJyB9O1xuICAgKiAgICAgZXhwZWN0KG9iaikudG8uaGF2ZS5wcm9wZXJ0eSgnZm9vJyk7XG4gICAqICAgICBleHBlY3Qob2JqKS50by5oYXZlLnByb3BlcnR5KCdmb28nLCAnYmFyJyk7XG4gICAqXG4gICAqICAgICAvLyBkZWVwIHJlZmVyZW5jaW5nXG4gICAqICAgICB2YXIgZGVlcE9iaiA9IHtcbiAgICogICAgICAgICBncmVlbjogeyB0ZWE6ICdtYXRjaGEnIH1cbiAgICogICAgICAgLCB0ZWFzOiBbICdjaGFpJywgJ21hdGNoYScsIHsgdGVhOiAna29uYWNoYScgfSBdXG4gICAqICAgICB9O1xuICAgKlxuICAgKiAgICAgZXhwZWN0KGRlZXBPYmopLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eSgnZ3JlZW4udGVhJywgJ21hdGNoYScpO1xuICAgKiAgICAgZXhwZWN0KGRlZXBPYmopLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eSgndGVhc1sxXScsICdtYXRjaGEnKTtcbiAgICogICAgIGV4cGVjdChkZWVwT2JqKS50by5oYXZlLmRlZXAucHJvcGVydHkoJ3RlYXNbMl0udGVhJywgJ2tvbmFjaGEnKTtcbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHVzZSBhbiBhcnJheSBhcyB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgYSBgZGVlcC5wcm9wZXJ0eWBcbiAgICogYXNzZXJ0aW9uLCBvciB0cmF2ZXJzZSBuZXN0ZWQgYXJyYXlzLlxuICAgKlxuICAgKiAgICAgdmFyIGFyciA9IFtcbiAgICogICAgICAgICBbICdjaGFpJywgJ21hdGNoYScsICdrb25hY2hhJyBdXG4gICAqICAgICAgICwgWyB7IHRlYTogJ2NoYWknIH1cbiAgICogICAgICAgICAsIHsgdGVhOiAnbWF0Y2hhJyB9XG4gICAqICAgICAgICAgLCB7IHRlYTogJ2tvbmFjaGEnIH0gXVxuICAgKiAgICAgXTtcbiAgICpcbiAgICogICAgIGV4cGVjdChhcnIpLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eSgnWzBdWzFdJywgJ21hdGNoYScpO1xuICAgKiAgICAgZXhwZWN0KGFycikudG8uaGF2ZS5kZWVwLnByb3BlcnR5KCdbMV1bMl0udGVhJywgJ2tvbmFjaGEnKTtcbiAgICpcbiAgICogRnVydGhlcm1vcmUsIGBwcm9wZXJ0eWAgY2hhbmdlcyB0aGUgc3ViamVjdCBvZiB0aGUgYXNzZXJ0aW9uXG4gICAqIHRvIGJlIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGZyb20gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhpc1xuICAgKiBwZXJtaXRzIGZvciBmdXJ0aGVyIGNoYWluYWJsZSBhc3NlcnRpb25zIG9uIHRoYXQgcHJvcGVydHkuXG4gICAqXG4gICAqICAgICBleHBlY3Qob2JqKS50by5oYXZlLnByb3BlcnR5KCdmb28nKVxuICAgKiAgICAgICAudGhhdC5pcy5hKCdzdHJpbmcnKTtcbiAgICogICAgIGV4cGVjdChkZWVwT2JqKS50by5oYXZlLnByb3BlcnR5KCdncmVlbicpXG4gICAqICAgICAgIC50aGF0LmlzLmFuKCdvYmplY3QnKVxuICAgKiAgICAgICAudGhhdC5kZWVwLmVxdWFscyh7IHRlYTogJ21hdGNoYScgfSk7XG4gICAqICAgICBleHBlY3QoZGVlcE9iaikudG8uaGF2ZS5wcm9wZXJ0eSgndGVhcycpXG4gICAqICAgICAgIC50aGF0LmlzLmFuKCdhcnJheScpXG4gICAqICAgICAgIC53aXRoLmRlZXAucHJvcGVydHkoJ1syXScpXG4gICAqICAgICAgICAgLnRoYXQuZGVlcC5lcXVhbHMoeyB0ZWE6ICdrb25hY2hhJyB9KTtcbiAgICpcbiAgICogTm90ZSB0aGF0IGRvdHMgYW5kIGJyYWNrZXQgaW4gYG5hbWVgIG11c3QgYmUgYmFja3NsYXNoLWVzY2FwZWQgd2hlblxuICAgKiB0aGUgYGRlZXBgIGZsYWcgaXMgc2V0LCB3aGlsZSB0aGV5IG11c3QgTk9UIGJlIGVzY2FwZWQgd2hlbiB0aGUgYGRlZXBgXG4gICAqIGZsYWcgaXMgbm90IHNldC5cbiAgICpcbiAgICogICAgIC8vIHNpbXBsZSByZWZlcmVuY2luZ1xuICAgKiAgICAgdmFyIGNzcyA9IHsgJy5saW5rW3RhcmdldF0nOiA0MiB9O1xuICAgKiAgICAgZXhwZWN0KGNzcykudG8uaGF2ZS5wcm9wZXJ0eSgnLmxpbmtbdGFyZ2V0XScsIDQyKTtcbiAgICpcbiAgICogICAgIC8vIGRlZXAgcmVmZXJlbmNpbmdcbiAgICogICAgIHZhciBkZWVwQ3NzID0geyAnLmxpbmsnOiB7ICdbdGFyZ2V0XSc6IDQyIH19O1xuICAgKiAgICAgZXhwZWN0KGRlZXBDc3MpLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eSgnXFxcXC5saW5rLlxcXFxbdGFyZ2V0XFxcXF0nLCA0Mik7XG4gICAqXG4gICAqIEBuYW1lIHByb3BlcnR5XG4gICAqIEBhbGlhcyBkZWVwLnByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIChvcHRpb25hbClcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAcmV0dXJucyB2YWx1ZSBvZiBwcm9wZXJ0eSBmb3IgY2hhaW5pbmdcbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgncHJvcGVydHknLCBmdW5jdGlvbiAobmFtZSwgdmFsLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcblxuICAgIHZhciBpc0RlZXAgPSAhIWZsYWcodGhpcywgJ2RlZXAnKVxuICAgICAgLCBkZXNjcmlwdG9yID0gaXNEZWVwID8gJ2RlZXAgcHJvcGVydHkgJyA6ICdwcm9wZXJ0eSAnXG4gICAgICAsIG5lZ2F0ZSA9IGZsYWcodGhpcywgJ25lZ2F0ZScpXG4gICAgICAsIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHBhdGhJbmZvID0gaXNEZWVwID8gXy5nZXRQYXRoSW5mbyhuYW1lLCBvYmopIDogbnVsbFxuICAgICAgLCBoYXNQcm9wZXJ0eSA9IGlzRGVlcFxuICAgICAgICA/IHBhdGhJbmZvLmV4aXN0c1xuICAgICAgICA6IF8uaGFzUHJvcGVydHkobmFtZSwgb2JqKVxuICAgICAgLCB2YWx1ZSA9IGlzRGVlcFxuICAgICAgICA/IHBhdGhJbmZvLnZhbHVlXG4gICAgICAgIDogb2JqW25hbWVdO1xuXG4gICAgaWYgKG5lZ2F0ZSAmJiBhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgbXNnID0gKG1zZyAhPSBudWxsKSA/IG1zZyArICc6ICcgOiAnJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyArIF8uaW5zcGVjdChvYmopICsgJyBoYXMgbm8gJyArIGRlc2NyaXB0b3IgKyBfLmluc3BlY3QobmFtZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBoYXNQcm9wZXJ0eVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSAnICsgZGVzY3JpcHRvciArIF8uaW5zcGVjdChuYW1lKVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlICcgKyBkZXNjcmlwdG9yICsgXy5pbnNwZWN0KG5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIHZhbCA9PT0gdmFsdWVcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgJyArIGRlc2NyaXB0b3IgKyBfLmluc3BlY3QobmFtZSkgKyAnIG9mICN7ZXhwfSwgYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgYSAnICsgZGVzY3JpcHRvciArIF8uaW5zcGVjdChuYW1lKSArICcgb2YgI3thY3R9J1xuICAgICAgICAsIHZhbFxuICAgICAgICAsIHZhbHVlXG4gICAgICApO1xuICAgIH1cblxuICAgIGZsYWcodGhpcywgJ29iamVjdCcsIHZhbHVlKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogIyMjIC5vd25Qcm9wZXJ0eShuYW1lKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBoYXMgYW4gb3duIHByb3BlcnR5IGBuYW1lYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgndGVzdCcpLnRvLmhhdmUub3duUHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgKlxuICAgKiBAbmFtZSBvd25Qcm9wZXJ0eVxuICAgKiBAYWxpYXMgaGF2ZU93blByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0T3duUHJvcGVydHkgKG5hbWUsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgb2JqLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgb3duIHByb3BlcnR5ICcgKyBfLmluc3BlY3QobmFtZSlcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgb3duIHByb3BlcnR5ICcgKyBfLmluc3BlY3QobmFtZSlcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnb3duUHJvcGVydHknLCBhc3NlcnRPd25Qcm9wZXJ0eSk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2hhdmVPd25Qcm9wZXJ0eScsIGFzc2VydE93blByb3BlcnR5KTtcblxuICAvKipcbiAgICogIyMjIC5vd25Qcm9wZXJ0eURlc2NyaXB0b3IobmFtZVssIGRlc2NyaXB0b3JbLCBtZXNzYWdlXV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGhhcyBhbiBvd24gcHJvcGVydHkgZGVzY3JpcHRvciBgbmFtZWAsIHRoYXQgb3B0aW9uYWxseSBtYXRjaGVzIGBkZXNjcmlwdG9yYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgndGVzdCcpLnRvLmhhdmUub3duUHJvcGVydHlEZXNjcmlwdG9yKCdsZW5ndGgnKTtcbiAgICogICAgIGV4cGVjdCgndGVzdCcpLnRvLmhhdmUub3duUHJvcGVydHlEZXNjcmlwdG9yKCdsZW5ndGgnLCB7IGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIHZhbHVlOiA0IH0pO1xuICAgKiAgICAgZXhwZWN0KCd0ZXN0Jykubm90LnRvLmhhdmUub3duUHJvcGVydHlEZXNjcmlwdG9yKCdsZW5ndGgnLCB7IGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIHZhbHVlOiAzIH0pO1xuICAgKiAgICAgZXhwZWN0KCd0ZXN0Jykub3duUHJvcGVydHlEZXNjcmlwdG9yKCdsZW5ndGgnKS50by5oYXZlLnByb3BlcnR5KCdlbnVtZXJhYmxlJywgZmFsc2UpO1xuICAgKiAgICAgZXhwZWN0KCd0ZXN0Jykub3duUHJvcGVydHlEZXNjcmlwdG9yKCdsZW5ndGgnKS50by5oYXZlLmtleXMoJ3ZhbHVlJyk7XG4gICAqXG4gICAqIEBuYW1lIG93blByb3BlcnR5RGVzY3JpcHRvclxuICAgKiBAYWxpYXMgaGF2ZU93blByb3BlcnR5RGVzY3JpcHRvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVzY3JpcHRvciBfb3B0aW9uYWxfXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0T3duUHJvcGVydHlEZXNjcmlwdG9yIChuYW1lLCBkZXNjcmlwdG9yLCBtc2cpIHtcbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2cgPSBkZXNjcmlwdG9yO1xuICAgICAgZGVzY3JpcHRvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICB2YXIgYWN0dWFsRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0KG9iaiksIG5hbWUpO1xuICAgIGlmIChhY3R1YWxEZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IpIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIF8uZXFsKGRlc2NyaXB0b3IsIGFjdHVhbERlc2NyaXB0b3IpXG4gICAgICAgICwgJ2V4cGVjdGVkIHRoZSBvd24gcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgJyArIF8uaW5zcGVjdChuYW1lKSArICcgb24gI3t0aGlzfSB0byBtYXRjaCAnICsgXy5pbnNwZWN0KGRlc2NyaXB0b3IpICsgJywgZ290ICcgKyBfLmluc3BlY3QoYWN0dWFsRGVzY3JpcHRvcilcbiAgICAgICAgLCAnZXhwZWN0ZWQgdGhlIG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciAnICsgXy5pbnNwZWN0KG5hbWUpICsgJyBvbiAje3RoaXN9IHRvIG5vdCBtYXRjaCAnICsgXy5pbnNwZWN0KGRlc2NyaXB0b3IpXG4gICAgICAgICwgZGVzY3JpcHRvclxuICAgICAgICAsIGFjdHVhbERlc2NyaXB0b3JcbiAgICAgICAgLCB0cnVlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBhY3R1YWxEZXNjcmlwdG9yXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhbiBvd24gcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgJyArIF8uaW5zcGVjdChuYW1lKVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlIGFuIG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciAnICsgXy5pbnNwZWN0KG5hbWUpXG4gICAgICApO1xuICAgIH1cbiAgICBmbGFnKHRoaXMsICdvYmplY3QnLCBhY3R1YWxEZXNjcmlwdG9yKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ293blByb3BlcnR5RGVzY3JpcHRvcicsIGFzc2VydE93blByb3BlcnR5RGVzY3JpcHRvcik7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2hhdmVPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBhc3NlcnRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmxlbmd0aFxuICAgKlxuICAgKiBTZXRzIHRoZSBgZG9MZW5ndGhgIGZsYWcgbGF0ZXIgdXNlZCBhcyBhIGNoYWluIHByZWN1cnNvciB0byBhIHZhbHVlXG4gICAqIGNvbXBhcmlzb24gZm9yIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGguYWJvdmUoMik7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLmFib3ZlKDIpO1xuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC5iZWxvdyg0KTtcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDMgXSkudG8uaGF2ZS5sZW5ndGguYmVsb3coNCk7XG4gICAqICAgICBleHBlY3QoJ2ZvbycpLnRvLmhhdmUubGVuZ3RoLndpdGhpbigyLDQpO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5oYXZlLmxlbmd0aC53aXRoaW4oMiw0KTtcbiAgICpcbiAgICogKkRlcHJlY2F0aW9uIG5vdGljZToqIFVzaW5nIGBsZW5ndGhgIGFzIGFuIGFzc2VydGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWRcbiAgICogaW4gdmVyc2lvbiAyLjQuMCBhbmQgcmVtb3ZlZCBpbiAzLjAuMC4gQ29kZSB1c2luZyB0aGUgb2xkIHN0eWxlIG9mXG4gICAqIGFzc2VydGluZyBmb3IgYGxlbmd0aGAgcHJvcGVydHkgdmFsdWUgdXNpbmcgYGxlbmd0aCh2YWx1ZSlgIHNob3VsZCBiZVxuICAgKiBzd2l0Y2hlZCB0byB1c2UgYGxlbmd0aE9mKHZhbHVlKWAgaW5zdGVhZC5cbiAgICpcbiAgICogQG5hbWUgbGVuZ3RoXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIC8qKlxuICAgKiAjIyMgLmxlbmd0aE9mKHZhbHVlWywgbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0J3MgYGxlbmd0aGAgcHJvcGVydHkgaGFzXG4gICAqIHRoZSBleHBlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDNdKS50by5oYXZlLmxlbmd0aE9mKDMpO1xuICAgKiAgICAgZXhwZWN0KCdmb29iYXInKS50by5oYXZlLmxlbmd0aE9mKDYpO1xuICAgKlxuICAgKiBAbmFtZSBsZW5ndGhPZlxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0TGVuZ3RoQ2hhaW4gKCkge1xuICAgIGZsYWcodGhpcywgJ2RvTGVuZ3RoJywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnRMZW5ndGggKG4sIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLnByb3BlcnR5KCdsZW5ndGgnKTtcbiAgICB2YXIgbGVuID0gb2JqLmxlbmd0aDtcblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBsZW4gPT0gblxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgbGVuZ3RoIG9mICN7ZXhwfSBidXQgZ290ICN7YWN0fSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgYSBsZW5ndGggb2YgI3thY3R9J1xuICAgICAgLCBuXG4gICAgICAsIGxlblxuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdsZW5ndGgnLCBhc3NlcnRMZW5ndGgsIGFzc2VydExlbmd0aENoYWluKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbGVuZ3RoT2YnLCBhc3NlcnRMZW5ndGgpO1xuXG4gIC8qKlxuICAgKiAjIyMgLm1hdGNoKHJlZ2V4cClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgbWF0Y2hlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vYmFyJykudG8ubWF0Y2goL15mb28vKTtcbiAgICpcbiAgICogQG5hbWUgbWF0Y2hcbiAgICogQGFsaWFzIG1hdGNoZXNcbiAgICogQHBhcmFtIHtSZWdFeHB9IFJlZ3VsYXJFeHByZXNzaW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydE1hdGNoKHJlLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHJlLmV4ZWMob2JqKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBtYXRjaCAnICsgcmVcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gbm90IHRvIG1hdGNoICcgKyByZVxuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdtYXRjaCcsIGFzc2VydE1hdGNoKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbWF0Y2hlcycsIGFzc2VydE1hdGNoKTtcblxuICAvKipcbiAgICogIyMjIC5zdHJpbmcoc3RyaW5nKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHN0cmluZyB0YXJnZXQgY29udGFpbnMgYW5vdGhlciBzdHJpbmcuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2Zvb2JhcicpLnRvLmhhdmUuc3RyaW5nKCdiYXInKTtcbiAgICpcbiAgICogQG5hbWUgc3RyaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdzdHJpbmcnLCBmdW5jdGlvbiAoc3RyLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykuaXMuYSgnc3RyaW5nJyk7XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgfm9iai5pbmRleE9mKHN0cilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gY29udGFpbiAnICsgXy5pbnNwZWN0KHN0cilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGNvbnRhaW4gJyArIF8uaW5zcGVjdChzdHIpXG4gICAgKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogIyMjIC5rZXlzKGtleTEsIFtrZXkyXSwgWy4uLl0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGNvbnRhaW5zIGFueSBvciBhbGwgb2YgdGhlIHBhc3NlZC1pbiBrZXlzLlxuICAgKiBVc2UgaW4gY29tYmluYXRpb24gd2l0aCBgYW55YCwgYGFsbGAsIGBjb250YWluc2AsIG9yIGBoYXZlYCB3aWxsIGFmZmVjdFxuICAgKiB3aGF0IHdpbGwgcGFzcy5cbiAgICpcbiAgICogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYGFueWAsIGF0IGxlYXN0IG9uZSBrZXkgdGhhdCBpcyBwYXNzZWRcbiAgICogaW4gbXVzdCBleGlzdCBpbiB0aGUgdGFyZ2V0IG9iamVjdC4gVGhpcyBpcyByZWdhcmRsZXNzIHdoZXRoZXIgb3Igbm90XG4gICAqIHRoZSBgaGF2ZWAgb3IgYGNvbnRhaW5gIHF1YWxpZmllcnMgYXJlIHVzZWQuIE5vdGUsIGVpdGhlciBgYW55YCBvciBgYWxsYFxuICAgKiBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYXNzZXJ0aW9uLiBJZiBuZWl0aGVyIGFyZSB1c2VkLCB0aGUgYXNzZXJ0aW9uIGlzXG4gICAqIGRlZmF1bHRlZCB0byBgYWxsYC5cbiAgICpcbiAgICogV2hlbiBib3RoIGBhbGxgIGFuZCBgY29udGFpbmAgYXJlIHVzZWQsIHRoZSB0YXJnZXQgb2JqZWN0IG11c3QgaGF2ZSBhdFxuICAgKiBsZWFzdCBhbGwgb2YgdGhlIHBhc3NlZC1pbiBrZXlzIGJ1dCBtYXkgaGF2ZSBtb3JlIGtleXMgbm90IGxpc3RlZC5cbiAgICpcbiAgICogV2hlbiBib3RoIGBhbGxgIGFuZCBgaGF2ZWAgYXJlIHVzZWQsIHRoZSB0YXJnZXQgb2JqZWN0IG11c3QgYm90aCBjb250YWluXG4gICAqIGFsbCBvZiB0aGUgcGFzc2VkLWluIGtleXMgQU5EIHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGUgdGFyZ2V0IG9iamVjdCBtdXN0XG4gICAqIG1hdGNoIHRoZSBudW1iZXIgb2Yga2V5cyBwYXNzZWQgaW4gKGluIG90aGVyIHdvcmRzLCBhIHRhcmdldCBvYmplY3QgbXVzdFxuICAgKiBoYXZlIGFsbCBhbmQgb25seSBhbGwgb2YgdGhlIHBhc3NlZC1pbiBrZXlzKS5cbiAgICpcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyIH0pLnRvLmhhdmUuYW55LmtleXMoJ2ZvbycsICdiYXonKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyIH0pLnRvLmhhdmUuYW55LmtleXMoJ2ZvbycpO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAxLCBiYXI6IDIgfSkudG8uY29udGFpbi5hbnkua2V5cygnYmFyJywgJ2JheicpO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAxLCBiYXI6IDIgfSkudG8uY29udGFpbi5hbnkua2V5cyhbJ2ZvbyddKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyIH0pLnRvLmNvbnRhaW4uYW55LmtleXMoeydmb28nOiA2fSk7XG4gICAqICAgICBleHBlY3QoeyBmb286IDEsIGJhcjogMiB9KS50by5oYXZlLmFsbC5rZXlzKFsnYmFyJywgJ2ZvbyddKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyIH0pLnRvLmhhdmUuYWxsLmtleXMoeydiYXInOiA2LCAnZm9vJzogN30pO1xuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAxLCBiYXI6IDIsIGJhejogMyB9KS50by5jb250YWluLmFsbC5rZXlzKFsnYmFyJywgJ2ZvbyddKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyLCBiYXo6IDMgfSkudG8uY29udGFpbi5hbGwua2V5cyh7J2Jhcic6IDZ9KTtcbiAgICpcbiAgICpcbiAgICogQG5hbWUga2V5c1xuICAgKiBAYWxpYXMga2V5XG4gICAqIEBwYXJhbSB7Li4uU3RyaW5nfEFycmF5fE9iamVjdH0ga2V5c1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRLZXlzIChrZXlzKSB7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHN0clxuICAgICAgLCBvayA9IHRydWVcbiAgICAgICwgbWl4ZWRBcmdzTXNnID0gJ2tleXMgbXVzdCBiZSBnaXZlbiBzaW5nbGUgYXJndW1lbnQgb2YgQXJyYXl8T2JqZWN0fFN0cmluZywgb3IgbXVsdGlwbGUgU3RyaW5nIGFyZ3VtZW50cyc7XG5cbiAgICBzd2l0Y2ggKF8udHlwZShrZXlzKSkge1xuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgdGhyb3cgKG5ldyBFcnJvcihtaXhlZEFyZ3NNc2cpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgdGhyb3cgKG5ldyBFcnJvcihtaXhlZEFyZ3NNc2cpKTtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGtleXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGtleXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGlmICgha2V5cy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcigna2V5cyByZXF1aXJlZCcpO1xuXG4gICAgdmFyIGFjdHVhbCA9IE9iamVjdC5rZXlzKG9iailcbiAgICAgICwgZXhwZWN0ZWQgPSBrZXlzXG4gICAgICAsIGxlbiA9IGtleXMubGVuZ3RoXG4gICAgICAsIGFueSA9IGZsYWcodGhpcywgJ2FueScpXG4gICAgICAsIGFsbCA9IGZsYWcodGhpcywgJ2FsbCcpO1xuXG4gICAgaWYgKCFhbnkgJiYgIWFsbCkge1xuICAgICAgYWxsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBIYXMgYW55XG4gICAgaWYgKGFueSkge1xuICAgICAgdmFyIGludGVyc2VjdGlvbiA9IGV4cGVjdGVkLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIH5hY3R1YWwuaW5kZXhPZihrZXkpO1xuICAgICAgfSk7XG4gICAgICBvayA9IGludGVyc2VjdGlvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIEhhcyBhbGxcbiAgICBpZiAoYWxsKSB7XG4gICAgICBvayA9IGtleXMuZXZlcnkoZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgcmV0dXJuIH5hY3R1YWwuaW5kZXhPZihrZXkpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWZsYWcodGhpcywgJ25lZ2F0ZScpICYmICFmbGFnKHRoaXMsICdjb250YWlucycpKSB7XG4gICAgICAgIG9rID0gb2sgJiYga2V5cy5sZW5ndGggPT0gYWN0dWFsLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBLZXkgc3RyaW5nXG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgIGtleXMgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpe1xuICAgICAgICByZXR1cm4gXy5pbnNwZWN0KGtleSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBsYXN0ID0ga2V5cy5wb3AoKTtcbiAgICAgIGlmIChhbGwpIHtcbiAgICAgICAgc3RyID0ga2V5cy5qb2luKCcsICcpICsgJywgYW5kICcgKyBsYXN0O1xuICAgICAgfVxuICAgICAgaWYgKGFueSkge1xuICAgICAgICBzdHIgPSBrZXlzLmpvaW4oJywgJykgKyAnLCBvciAnICsgbGFzdDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gXy5pbnNwZWN0KGtleXNbMF0pO1xuICAgIH1cblxuICAgIC8vIEZvcm1cbiAgICBzdHIgPSAobGVuID4gMSA/ICdrZXlzICcgOiAna2V5ICcpICsgc3RyO1xuXG4gICAgLy8gSGF2ZSAvIGluY2x1ZGVcbiAgICBzdHIgPSAoZmxhZyh0aGlzLCAnY29udGFpbnMnKSA/ICdjb250YWluICcgOiAnaGF2ZSAnKSArIHN0cjtcblxuICAgIC8vIEFzc2VydGlvblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBva1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byAnICsgc3RyXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCAnICsgc3RyXG4gICAgICAsIGV4cGVjdGVkLnNsaWNlKDApLnNvcnQoKVxuICAgICAgLCBhY3R1YWwuc29ydCgpXG4gICAgICAsIHRydWVcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgna2V5cycsIGFzc2VydEtleXMpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdrZXknLCBhc3NlcnRLZXlzKTtcblxuICAvKipcbiAgICogIyMjIC50aHJvdyhjb25zdHJ1Y3RvcilcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSBmdW5jdGlvbiB0YXJnZXQgd2lsbCB0aHJvdyBhIHNwZWNpZmljIGVycm9yLCBvciBzcGVjaWZpYyB0eXBlIG9mIGVycm9yXG4gICAqIChhcyBkZXRlcm1pbmVkIHVzaW5nIGBpbnN0YW5jZW9mYCksIG9wdGlvbmFsbHkgd2l0aCBhIFJlZ0V4cCBvciBzdHJpbmcgaW5jbHVzaW9uIHRlc3RcbiAgICogZm9yIHRoZSBlcnJvcidzIG1lc3NhZ2UuXG4gICAqXG4gICAqICAgICB2YXIgZXJyID0gbmV3IFJlZmVyZW5jZUVycm9yKCdUaGlzIGlzIGEgYmFkIGZ1bmN0aW9uLicpO1xuICAgKiAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBlcnI7IH1cbiAgICogICAgIGV4cGVjdChmbikudG8udGhyb3coUmVmZXJlbmNlRXJyb3IpO1xuICAgKiAgICAgZXhwZWN0KGZuKS50by50aHJvdyhFcnJvcik7XG4gICAqICAgICBleHBlY3QoZm4pLnRvLnRocm93KC9iYWQgZnVuY3Rpb24vKTtcbiAgICogICAgIGV4cGVjdChmbikudG8ubm90LnRocm93KCdnb29kIGZ1bmN0aW9uJyk7XG4gICAqICAgICBleHBlY3QoZm4pLnRvLnRocm93KFJlZmVyZW5jZUVycm9yLCAvYmFkIGZ1bmN0aW9uLyk7XG4gICAqICAgICBleHBlY3QoZm4pLnRvLnRocm93KGVycik7XG4gICAqXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgd2hlbiBhIHRocm93IGV4cGVjdGF0aW9uIGlzIG5lZ2F0ZWQsIGl0IHdpbGwgY2hlY2sgZWFjaFxuICAgKiBwYXJhbWV0ZXIgaW5kZXBlbmRlbnRseSwgc3RhcnRpbmcgd2l0aCBlcnJvciBjb25zdHJ1Y3RvciB0eXBlLiBUaGUgYXBwcm9wcmlhdGUgd2F5XG4gICAqIHRvIGNoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIGEgdHlwZSBvZiBlcnJvciBidXQgZm9yIGEgbWVzc2FnZSB0aGF0IGRvZXMgbm90IG1hdGNoXG4gICAqIGlzIHRvIHVzZSBgYW5kYC5cbiAgICpcbiAgICogICAgIGV4cGVjdChmbikudG8udGhyb3coUmVmZXJlbmNlRXJyb3IpXG4gICAqICAgICAgICAuYW5kLm5vdC50aHJvdygvZ29vZCBmdW5jdGlvbi8pO1xuICAgKlxuICAgKiBAbmFtZSB0aHJvd1xuICAgKiBAYWxpYXMgdGhyb3dzXG4gICAqIEBhbGlhcyBUaHJvd1xuICAgKiBAcGFyYW0ge0Vycm9yQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjRXJyb3JfdHlwZXNcbiAgICogQHJldHVybnMgZXJyb3IgZm9yIGNoYWluaW5nIChudWxsIGlmIG5vIGVycm9yKVxuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRUaHJvd3MgKGNvbnN0cnVjdG9yLCBlcnJNc2csIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS5pcy5hKCdmdW5jdGlvbicpO1xuXG4gICAgdmFyIHRocm93biA9IGZhbHNlXG4gICAgICAsIGRlc2lyZWRFcnJvciA9IG51bGxcbiAgICAgICwgbmFtZSA9IG51bGxcbiAgICAgICwgdGhyb3duRXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVyck1zZyA9IG51bGw7XG4gICAgICBjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvciAmJiAoY29uc3RydWN0b3IgaW5zdGFuY2VvZiBSZWdFeHAgfHwgJ3N0cmluZycgPT09IHR5cGVvZiBjb25zdHJ1Y3RvcikpIHtcbiAgICAgIGVyck1zZyA9IGNvbnN0cnVjdG9yO1xuICAgICAgY29uc3RydWN0b3IgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3IgJiYgY29uc3RydWN0b3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZGVzaXJlZEVycm9yID0gY29uc3RydWN0b3I7XG4gICAgICBjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICBlcnJNc2cgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBuYW1lID0gY29uc3RydWN0b3IucHJvdG90eXBlLm5hbWU7XG4gICAgICBpZiAoIW5hbWUgfHwgKG5hbWUgPT09ICdFcnJvcicgJiYgY29uc3RydWN0b3IgIT09IEVycm9yKSkge1xuICAgICAgICBuYW1lID0gY29uc3RydWN0b3IubmFtZSB8fCAobmV3IGNvbnN0cnVjdG9yKCkpLm5hbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgb2JqKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBmaXJzdCwgY2hlY2sgZGVzaXJlZCBlcnJvclxuICAgICAgaWYgKGRlc2lyZWRFcnJvcikge1xuICAgICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICAgIGVyciA9PT0gZGVzaXJlZEVycm9yXG4gICAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byB0aHJvdyAje2V4cH0gYnV0ICN7YWN0fSB3YXMgdGhyb3duJ1xuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IHRocm93ICN7ZXhwfSdcbiAgICAgICAgICAsIChkZXNpcmVkRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGRlc2lyZWRFcnJvci50b1N0cmluZygpIDogZGVzaXJlZEVycm9yKVxuICAgICAgICAgICwgKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLnRvU3RyaW5nKCkgOiBlcnIpXG4gICAgICAgICk7XG5cbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIG5leHQsIGNoZWNrIGNvbnN0cnVjdG9yXG4gICAgICBpZiAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgICBlcnIgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gdGhyb3cgI3tleHB9IGJ1dCAje2FjdH0gd2FzIHRocm93bidcbiAgICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCB0aHJvdyAje2V4cH0gYnV0ICN7YWN0fSB3YXMgdGhyb3duJ1xuICAgICAgICAgICwgbmFtZVxuICAgICAgICAgICwgKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLnRvU3RyaW5nKCkgOiBlcnIpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFlcnJNc2cpIHtcbiAgICAgICAgICBmbGFnKHRoaXMsICdvYmplY3QnLCBlcnIpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5leHQsIGNoZWNrIG1lc3NhZ2VcbiAgICAgIHZhciBtZXNzYWdlID0gJ2Vycm9yJyA9PT0gXy50eXBlKGVycikgJiYgXCJtZXNzYWdlXCIgaW4gZXJyXG4gICAgICAgID8gZXJyLm1lc3NhZ2VcbiAgICAgICAgOiAnJyArIGVycjtcblxuICAgICAgaWYgKChtZXNzYWdlICE9IG51bGwpICYmIGVyck1zZyAmJiBlcnJNc2cgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgICBlcnJNc2cuZXhlYyhtZXNzYWdlKVxuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gdGhyb3cgZXJyb3IgbWF0Y2hpbmcgI3tleHB9IGJ1dCBnb3QgI3thY3R9J1xuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gdGhyb3cgZXJyb3Igbm90IG1hdGNoaW5nICN7ZXhwfSdcbiAgICAgICAgICAsIGVyck1zZ1xuICAgICAgICAgICwgbWVzc2FnZVxuICAgICAgICApO1xuXG4gICAgICAgIGZsYWcodGhpcywgJ29iamVjdCcsIGVycik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmICgobWVzc2FnZSAhPSBudWxsKSAmJiBlcnJNc2cgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBlcnJNc2cpIHtcbiAgICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgICB+bWVzc2FnZS5pbmRleE9mKGVyck1zZylcbiAgICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIHRocm93IGVycm9yIGluY2x1ZGluZyAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byB0aHJvdyBlcnJvciBub3QgaW5jbHVkaW5nICN7YWN0fSdcbiAgICAgICAgICAsIGVyck1zZ1xuICAgICAgICAgICwgbWVzc2FnZVxuICAgICAgICApO1xuXG4gICAgICAgIGZsYWcodGhpcywgJ29iamVjdCcsIGVycik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3duID0gdHJ1ZTtcbiAgICAgICAgdGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFjdHVhbGx5R290ID0gJydcbiAgICAgICwgZXhwZWN0ZWRUaHJvd24gPSBuYW1lICE9PSBudWxsXG4gICAgICAgID8gbmFtZVxuICAgICAgICA6IGRlc2lyZWRFcnJvclxuICAgICAgICAgID8gJyN7ZXhwfScgLy9fLmluc3BlY3QoZGVzaXJlZEVycm9yKVxuICAgICAgICAgIDogJ2FuIGVycm9yJztcblxuICAgIGlmICh0aHJvd24pIHtcbiAgICAgIGFjdHVhbGx5R290ID0gJyBidXQgI3thY3R9IHdhcyB0aHJvd24nXG4gICAgfVxuXG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHRocm93biA9PT0gdHJ1ZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byB0aHJvdyAnICsgZXhwZWN0ZWRUaHJvd24gKyBhY3R1YWxseUdvdFxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgdGhyb3cgJyArIGV4cGVjdGVkVGhyb3duICsgYWN0dWFsbHlHb3RcbiAgICAgICwgKGRlc2lyZWRFcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZGVzaXJlZEVycm9yLnRvU3RyaW5nKCkgOiBkZXNpcmVkRXJyb3IpXG4gICAgICAsICh0aHJvd25FcnJvciBpbnN0YW5jZW9mIEVycm9yID8gdGhyb3duRXJyb3IudG9TdHJpbmcoKSA6IHRocm93bkVycm9yKVxuICAgICk7XG5cbiAgICBmbGFnKHRoaXMsICdvYmplY3QnLCB0aHJvd25FcnJvcik7XG4gIH07XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgndGhyb3cnLCBhc3NlcnRUaHJvd3MpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCd0aHJvd3MnLCBhc3NlcnRUaHJvd3MpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdUaHJvdycsIGFzc2VydFRocm93cyk7XG5cbiAgLyoqXG4gICAqICMjIyAucmVzcG9uZFRvKG1ldGhvZClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSBvYmplY3Qgb3IgY2xhc3MgdGFyZ2V0IHdpbGwgcmVzcG9uZCB0byBhIG1ldGhvZC5cbiAgICpcbiAgICogICAgIEtsYXNzLnByb3RvdHlwZS5iYXIgPSBmdW5jdGlvbigpe307XG4gICAqICAgICBleHBlY3QoS2xhc3MpLnRvLnJlc3BvbmRUbygnYmFyJyk7XG4gICAqICAgICBleHBlY3Qob2JqKS50by5yZXNwb25kVG8oJ2JhcicpO1xuICAgKlxuICAgKiBUbyBjaGVjayBpZiBhIGNvbnN0cnVjdG9yIHdpbGwgcmVzcG9uZCB0byBhIHN0YXRpYyBmdW5jdGlvbixcbiAgICogc2V0IHRoZSBgaXRzZWxmYCBmbGFnLlxuICAgKlxuICAgKiAgICAgS2xhc3MuYmF6ID0gZnVuY3Rpb24oKXt9O1xuICAgKiAgICAgZXhwZWN0KEtsYXNzKS5pdHNlbGYudG8ucmVzcG9uZFRvKCdiYXonKTtcbiAgICpcbiAgICogQG5hbWUgcmVzcG9uZFRvXG4gICAqIEBhbGlhcyByZXNwb25kc1RvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiByZXNwb25kVG8gKG1ldGhvZCwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIGl0c2VsZiA9IGZsYWcodGhpcywgJ2l0c2VsZicpXG4gICAgICAsIGNvbnRleHQgPSAoJ2Z1bmN0aW9uJyA9PT0gXy50eXBlKG9iaikgJiYgIWl0c2VsZilcbiAgICAgICAgPyBvYmoucHJvdG90eXBlW21ldGhvZF1cbiAgICAgICAgOiBvYmpbbWV0aG9kXTtcblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAnZnVuY3Rpb24nID09PSB0eXBlb2YgY29udGV4dFxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byByZXNwb25kIHRvICcgKyBfLmluc3BlY3QobWV0aG9kKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgcmVzcG9uZCB0byAnICsgXy5pbnNwZWN0KG1ldGhvZClcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgncmVzcG9uZFRvJywgcmVzcG9uZFRvKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgncmVzcG9uZHNUbycsIHJlc3BvbmRUbyk7XG5cbiAgLyoqXG4gICAqICMjIyAuaXRzZWxmXG4gICAqXG4gICAqIFNldHMgdGhlIGBpdHNlbGZgIGZsYWcsIGxhdGVyIHVzZWQgYnkgdGhlIGByZXNwb25kVG9gIGFzc2VydGlvbi5cbiAgICpcbiAgICogICAgIGZ1bmN0aW9uIEZvbygpIHt9XG4gICAqICAgICBGb28uYmFyID0gZnVuY3Rpb24oKSB7fVxuICAgKiAgICAgRm9vLnByb3RvdHlwZS5iYXogPSBmdW5jdGlvbigpIHt9XG4gICAqXG4gICAqICAgICBleHBlY3QoRm9vKS5pdHNlbGYudG8ucmVzcG9uZFRvKCdiYXInKTtcbiAgICogICAgIGV4cGVjdChGb28pLml0c2VsZi5ub3QudG8ucmVzcG9uZFRvKCdiYXonKTtcbiAgICpcbiAgICogQG5hbWUgaXRzZWxmXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnaXRzZWxmJywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWcodGhpcywgJ2l0c2VsZicsIHRydWUpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5zYXRpc2Z5KG1ldGhvZClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgcGFzc2VzIGEgZ2l2ZW4gdHJ1dGggdGVzdC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgxKS50by5zYXRpc2Z5KGZ1bmN0aW9uKG51bSkgeyByZXR1cm4gbnVtID4gMDsgfSk7XG4gICAqXG4gICAqIEBuYW1lIHNhdGlzZnlcbiAgICogQGFsaWFzIHNhdGlzZmllc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtYXRjaGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gc2F0aXNmeSAobWF0Y2hlciwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIHZhciByZXN1bHQgPSBtYXRjaGVyKG9iaik7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHJlc3VsdFxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBzYXRpc2Z5ICcgKyBfLm9iakRpc3BsYXkobWF0Y2hlcilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IHNhdGlzZnknICsgXy5vYmpEaXNwbGF5KG1hdGNoZXIpXG4gICAgICAsIHRoaXMubmVnYXRlID8gZmFsc2UgOiB0cnVlXG4gICAgICAsIHJlc3VsdFxuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdzYXRpc2Z5Jywgc2F0aXNmeSk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ3NhdGlzZmllcycsIHNhdGlzZnkpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmNsb3NlVG8oZXhwZWN0ZWQsIGRlbHRhKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBlcXVhbCBgZXhwZWN0ZWRgLCB0byB3aXRoaW4gYSArLy0gYGRlbHRhYCByYW5nZS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgxLjUpLnRvLmJlLmNsb3NlVG8oMSwgMC41KTtcbiAgICpcbiAgICogQG5hbWUgY2xvc2VUb1xuICAgKiBAYWxpYXMgYXBwcm94aW1hdGVseVxuICAgKiBAcGFyYW0ge051bWJlcn0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gY2xvc2VUbyhleHBlY3RlZCwgZGVsdGEsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcblxuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLmlzLmEoJ251bWJlcicpO1xuICAgIGlmIChfLnR5cGUoZXhwZWN0ZWQpICE9PSAnbnVtYmVyJyB8fCBfLnR5cGUoZGVsdGEpICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgYXJndW1lbnRzIHRvIGNsb3NlVG8gb3IgYXBwcm94aW1hdGVseSBtdXN0IGJlIG51bWJlcnMnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgTWF0aC5hYnMob2JqIC0gZXhwZWN0ZWQpIDw9IGRlbHRhXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGNsb3NlIHRvICcgKyBleHBlY3RlZCArICcgKy8tICcgKyBkZWx0YVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSBub3QgdG8gYmUgY2xvc2UgdG8gJyArIGV4cGVjdGVkICsgJyArLy0gJyArIGRlbHRhXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2Nsb3NlVG8nLCBjbG9zZVRvKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnYXBwcm94aW1hdGVseScsIGNsb3NlVG8pO1xuXG4gIGZ1bmN0aW9uIGlzU3Vic2V0T2Yoc3Vic2V0LCBzdXBlcnNldCwgY21wKSB7XG4gICAgcmV0dXJuIHN1YnNldC5ldmVyeShmdW5jdGlvbihlbGVtKSB7XG4gICAgICBpZiAoIWNtcCkgcmV0dXJuIHN1cGVyc2V0LmluZGV4T2YoZWxlbSkgIT09IC0xO1xuXG4gICAgICByZXR1cm4gc3VwZXJzZXQuc29tZShmdW5jdGlvbihlbGVtMikge1xuICAgICAgICByZXR1cm4gY21wKGVsZW0sIGVsZW0yKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogIyMjIC5tZW1iZXJzKHNldClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYSBzdXBlcnNldCBvZiBgc2V0YCxcbiAgICogb3IgdGhhdCB0aGUgdGFyZ2V0IGFuZCBgc2V0YCBoYXZlIHRoZSBzYW1lIHN0cmljdGx5LWVxdWFsICg9PT0pIG1lbWJlcnMuXG4gICAqIEFsdGVybmF0ZWx5LCBpZiB0aGUgYGRlZXBgIGZsYWcgaXMgc2V0LCBzZXQgbWVtYmVycyBhcmUgY29tcGFyZWQgZm9yIGRlZXBcbiAgICogZXF1YWxpdHkuXG4gICAqXG4gICAqICAgICBleHBlY3QoWzEsIDIsIDNdKS50by5pbmNsdWRlLm1lbWJlcnMoWzMsIDJdKTtcbiAgICogICAgIGV4cGVjdChbMSwgMiwgM10pLnRvLm5vdC5pbmNsdWRlLm1lbWJlcnMoWzMsIDIsIDhdKTtcbiAgICpcbiAgICogICAgIGV4cGVjdChbNCwgMl0pLnRvLmhhdmUubWVtYmVycyhbMiwgNF0pO1xuICAgKiAgICAgZXhwZWN0KFs1LCAyXSkudG8ubm90LmhhdmUubWVtYmVycyhbNSwgMiwgMV0pO1xuICAgKlxuICAgKiAgICAgZXhwZWN0KFt7IGlkOiAxIH1dKS50by5kZWVwLmluY2x1ZGUubWVtYmVycyhbeyBpZDogMSB9XSk7XG4gICAqXG4gICAqIEBuYW1lIG1lbWJlcnNcbiAgICogQHBhcmFtIHtBcnJheX0gc2V0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbWVtYmVycycsIGZ1bmN0aW9uIChzdWJzZXQsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcblxuICAgIG5ldyBBc3NlcnRpb24ob2JqKS50by5iZS5hbignYXJyYXknKTtcbiAgICBuZXcgQXNzZXJ0aW9uKHN1YnNldCkudG8uYmUuYW4oJ2FycmF5Jyk7XG5cbiAgICB2YXIgY21wID0gZmxhZyh0aGlzLCAnZGVlcCcpID8gXy5lcWwgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmxhZyh0aGlzLCAnY29udGFpbnMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIGlzU3Vic2V0T2Yoc3Vic2V0LCBvYmosIGNtcClcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhIHN1cGVyc2V0IG9mICN7YWN0fSdcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgYSBzdXBlcnNldCBvZiAje2FjdH0nXG4gICAgICAgICwgb2JqXG4gICAgICAgICwgc3Vic2V0XG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBpc1N1YnNldE9mKG9iaiwgc3Vic2V0LCBjbXApICYmIGlzU3Vic2V0T2Yoc3Vic2V0LCBvYmosIGNtcClcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIHRoZSBzYW1lIG1lbWJlcnMgYXMgI3thY3R9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlIHRoZSBzYW1lIG1lbWJlcnMgYXMgI3thY3R9J1xuICAgICAgICAsIG9ialxuICAgICAgICAsIHN1YnNldFxuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLm9uZU9mKGxpc3QpXG4gICAqXG4gICAqIEFzc2VydCB0aGF0IGEgdmFsdWUgYXBwZWFycyBzb21ld2hlcmUgaW4gdGhlIHRvcCBsZXZlbCBvZiBhcnJheSBgbGlzdGAuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2EnKS50by5iZS5vbmVPZihbJ2EnLCAnYicsICdjJ10pO1xuICAgKiAgICAgZXhwZWN0KDkpLnRvLm5vdC5iZS5vbmVPZihbJ3onXSk7XG4gICAqICAgICBleHBlY3QoWzNdKS50by5ub3QuYmUub25lT2YoWzEsIDIsIFszXV0pO1xuICAgKlxuICAgKiAgICAgdmFyIHRocmVlID0gWzNdO1xuICAgKiAgICAgLy8gZm9yIG9iamVjdC10eXBlcywgY29udGVudHMgYXJlIG5vdCBjb21wYXJlZFxuICAgKiAgICAgZXhwZWN0KHRocmVlKS50by5ub3QuYmUub25lT2YoWzEsIDIsIFszXV0pO1xuICAgKiAgICAgLy8gY29tcGFyaW5nIHJlZmVyZW5jZXMgd29ya3NcbiAgICogICAgIGV4cGVjdCh0aHJlZSkudG8uYmUub25lT2YoWzEsIDIsIHRocmVlXSk7XG4gICAqXG4gICAqIEBuYW1lIG9uZU9mXG4gICAqIEBwYXJhbSB7QXJyYXk8Kj59IGxpc3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEJERFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBvbmVPZiAobGlzdCwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIGV4cGVjdGVkID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgbmV3IEFzc2VydGlvbihsaXN0KS50by5iZS5hbignYXJyYXknKTtcblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBsaXN0LmluZGV4T2YoZXhwZWN0ZWQpID4gLTFcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgb25lIG9mICN7ZXhwfSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGJlIG9uZSBvZiAje2V4cH0nXG4gICAgICAsIGxpc3RcbiAgICAgICwgZXhwZWN0ZWRcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnb25lT2YnLCBvbmVPZik7XG5cblxuICAvKipcbiAgICogIyMjIC5jaGFuZ2UoZnVuY3Rpb24pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBhIGZ1bmN0aW9uIGNoYW5nZXMgYW4gb2JqZWN0IHByb3BlcnR5XG4gICAqXG4gICAqICAgICB2YXIgb2JqID0geyB2YWw6IDEwIH07XG4gICAqICAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHsgb2JqLnZhbCArPSAzIH07XG4gICAqICAgICB2YXIgbm9DaGFuZ2VGbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJ2ZvbycgKyAnYmFyJzsgfVxuICAgKiAgICAgZXhwZWN0KGZuKS50by5jaGFuZ2Uob2JqLCAndmFsJyk7XG4gICAqICAgICBleHBlY3Qobm9DaGFuZ2VGbikudG8ubm90LmNoYW5nZShvYmosICd2YWwnKVxuICAgKlxuICAgKiBAbmFtZSBjaGFuZ2VcbiAgICogQGFsaWFzIGNoYW5nZXNcbiAgICogQGFsaWFzIENoYW5nZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0Q2hhbmdlcyAob2JqZWN0LCBwcm9wLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgZm4gPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iamVjdCwgbXNnKS50by5oYXZlLnByb3BlcnR5KHByb3ApO1xuICAgIG5ldyBBc3NlcnRpb24oZm4pLmlzLmEoJ2Z1bmN0aW9uJyk7XG5cbiAgICB2YXIgaW5pdGlhbCA9IG9iamVjdFtwcm9wXTtcbiAgICBmbigpO1xuXG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICBpbml0aWFsICE9PSBvYmplY3RbcHJvcF1cbiAgICAgICwgJ2V4cGVjdGVkIC4nICsgcHJvcCArICcgdG8gY2hhbmdlJ1xuICAgICAgLCAnZXhwZWN0ZWQgLicgKyBwcm9wICsgJyB0byBub3QgY2hhbmdlJ1xuICAgICk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdjaGFuZ2UnLCBhc3NlcnRDaGFuZ2VzKTtcbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU1ldGhvZCgnY2hhbmdlcycsIGFzc2VydENoYW5nZXMpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmluY3JlYXNlKGZ1bmN0aW9uKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYSBmdW5jdGlvbiBpbmNyZWFzZXMgYW4gb2JqZWN0IHByb3BlcnR5XG4gICAqXG4gICAqICAgICB2YXIgb2JqID0geyB2YWw6IDEwIH07XG4gICAqICAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHsgb2JqLnZhbCA9IDE1IH07XG4gICAqICAgICBleHBlY3QoZm4pLnRvLmluY3JlYXNlKG9iaiwgJ3ZhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBpbmNyZWFzZVxuICAgKiBAYWxpYXMgaW5jcmVhc2VzXG4gICAqIEBhbGlhcyBJbmNyZWFzZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0SW5jcmVhc2VzIChvYmplY3QsIHByb3AsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBmbiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIG5ldyBBc3NlcnRpb24ob2JqZWN0LCBtc2cpLnRvLmhhdmUucHJvcGVydHkocHJvcCk7XG4gICAgbmV3IEFzc2VydGlvbihmbikuaXMuYSgnZnVuY3Rpb24nKTtcblxuICAgIHZhciBpbml0aWFsID0gb2JqZWN0W3Byb3BdO1xuICAgIGZuKCk7XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgIG9iamVjdFtwcm9wXSAtIGluaXRpYWwgPiAwXG4gICAgICAsICdleHBlY3RlZCAuJyArIHByb3AgKyAnIHRvIGluY3JlYXNlJ1xuICAgICAgLCAnZXhwZWN0ZWQgLicgKyBwcm9wICsgJyB0byBub3QgaW5jcmVhc2UnXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2luY3JlYXNlJywgYXNzZXJ0SW5jcmVhc2VzKTtcbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU1ldGhvZCgnaW5jcmVhc2VzJywgYXNzZXJ0SW5jcmVhc2VzKTtcblxuICAvKipcbiAgICogIyMjIC5kZWNyZWFzZShmdW5jdGlvbilcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGEgZnVuY3Rpb24gZGVjcmVhc2VzIGFuIG9iamVjdCBwcm9wZXJ0eVxuICAgKlxuICAgKiAgICAgdmFyIG9iaiA9IHsgdmFsOiAxMCB9O1xuICAgKiAgICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7IG9iai52YWwgPSA1IH07XG4gICAqICAgICBleHBlY3QoZm4pLnRvLmRlY3JlYXNlKG9iaiwgJ3ZhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBkZWNyZWFzZVxuICAgKiBAYWxpYXMgZGVjcmVhc2VzXG4gICAqIEBhbGlhcyBEZWNyZWFzZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBCRERcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0RGVjcmVhc2VzIChvYmplY3QsIHByb3AsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBmbiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIG5ldyBBc3NlcnRpb24ob2JqZWN0LCBtc2cpLnRvLmhhdmUucHJvcGVydHkocHJvcCk7XG4gICAgbmV3IEFzc2VydGlvbihmbikuaXMuYSgnZnVuY3Rpb24nKTtcblxuICAgIHZhciBpbml0aWFsID0gb2JqZWN0W3Byb3BdO1xuICAgIGZuKCk7XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgIG9iamVjdFtwcm9wXSAtIGluaXRpYWwgPCAwXG4gICAgICAsICdleHBlY3RlZCAuJyArIHByb3AgKyAnIHRvIGRlY3JlYXNlJ1xuICAgICAgLCAnZXhwZWN0ZWQgLicgKyBwcm9wICsgJyB0byBub3QgZGVjcmVhc2UnXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2RlY3JlYXNlJywgYXNzZXJ0RGVjcmVhc2VzKTtcbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU1ldGhvZCgnZGVjcmVhc2VzJywgYXNzZXJ0RGVjcmVhc2VzKTtcblxuICAvKipcbiAgICogIyMjIC5leHRlbnNpYmxlXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGV4dGVuc2libGUgKGNhbiBoYXZlIG5ldyBwcm9wZXJ0aWVzIGFkZGVkIHRvXG4gICAqIGl0KS5cbiAgICpcbiAgICogICAgIHZhciBub25FeHRlbnNpYmxlT2JqZWN0ID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KTtcbiAgICogICAgIHZhciBzZWFsZWRPYmplY3QgPSBPYmplY3Quc2VhbCh7fSk7XG4gICAqICAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAqXG4gICAqICAgICBleHBlY3Qoe30pLnRvLmJlLmV4dGVuc2libGU7XG4gICAqICAgICBleHBlY3Qobm9uRXh0ZW5zaWJsZU9iamVjdCkudG8ubm90LmJlLmV4dGVuc2libGU7XG4gICAqICAgICBleHBlY3Qoc2VhbGVkT2JqZWN0KS50by5ub3QuYmUuZXh0ZW5zaWJsZTtcbiAgICogICAgIGV4cGVjdChmcm96ZW5PYmplY3QpLnRvLm5vdC5iZS5leHRlbnNpYmxlO1xuICAgKlxuICAgKiBAbmFtZSBleHRlbnNpYmxlXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnZXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcblxuICAgIC8vIEluIEVTNSwgaWYgdGhlIGFyZ3VtZW50IHRvIHRoaXMgbWV0aG9kIGlzIG5vdCBhbiBvYmplY3QgKGEgcHJpbWl0aXZlKSwgdGhlbiBpdCB3aWxsIGNhdXNlIGEgVHlwZUVycm9yLlxuICAgIC8vIEluIEVTNiwgYSBub24tb2JqZWN0IGFyZ3VtZW50IHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3YXMgYSBub24tZXh0ZW5zaWJsZSBvcmRpbmFyeSBvYmplY3QsIHNpbXBseSByZXR1cm4gZmFsc2UuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzRXh0ZW5zaWJsZVxuICAgIC8vIFRoZSBmb2xsb3dpbmcgcHJvdmlkZXMgRVM2IGJlaGF2aW9yIHdoZW4gYSBUeXBlRXJyb3IgaXMgdGhyb3duIHVuZGVyIEVTNS5cblxuICAgIHZhciBpc0V4dGVuc2libGU7XG5cbiAgICB0cnkge1xuICAgICAgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFR5cGVFcnJvcikgaXNFeHRlbnNpYmxlID0gZmFsc2U7XG4gICAgICBlbHNlIHRocm93IGVycjtcbiAgICB9XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgIGlzRXh0ZW5zaWJsZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBleHRlbnNpYmxlJ1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgZXh0ZW5zaWJsZSdcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5zZWFsZWRcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgc2VhbGVkIChjYW5ub3QgaGF2ZSBuZXcgcHJvcGVydGllcyBhZGRlZCB0byBpdFxuICAgKiBhbmQgaXRzIGV4aXN0aW5nIHByb3BlcnRpZXMgY2Fubm90IGJlIHJlbW92ZWQpLlxuICAgKlxuICAgKiAgICAgdmFyIHNlYWxlZE9iamVjdCA9IE9iamVjdC5zZWFsKHt9KTtcbiAgICogICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICpcbiAgICogICAgIGV4cGVjdChzZWFsZWRPYmplY3QpLnRvLmJlLnNlYWxlZDtcbiAgICogICAgIGV4cGVjdChmcm96ZW5PYmplY3QpLnRvLmJlLnNlYWxlZDtcbiAgICogICAgIGV4cGVjdCh7fSkudG8ubm90LmJlLnNlYWxlZDtcbiAgICpcbiAgICogQG5hbWUgc2VhbGVkXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnc2VhbGVkJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuXG4gICAgLy8gSW4gRVM1LCBpZiB0aGUgYXJndW1lbnQgdG8gdGhpcyBtZXRob2QgaXMgbm90IGFuIG9iamVjdCAoYSBwcmltaXRpdmUpLCB0aGVuIGl0IHdpbGwgY2F1c2UgYSBUeXBlRXJyb3IuXG4gICAgLy8gSW4gRVM2LCBhIG5vbi1vYmplY3QgYXJndW1lbnQgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdhcyBhIHNlYWxlZCBvcmRpbmFyeSBvYmplY3QsIHNpbXBseSByZXR1cm4gdHJ1ZS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzU2VhbGVkXG4gICAgLy8gVGhlIGZvbGxvd2luZyBwcm92aWRlcyBFUzYgYmVoYXZpb3Igd2hlbiBhIFR5cGVFcnJvciBpcyB0aHJvd24gdW5kZXIgRVM1LlxuXG4gICAgdmFyIGlzU2VhbGVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzU2VhbGVkID0gT2JqZWN0LmlzU2VhbGVkKG9iaik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yKSBpc1NlYWxlZCA9IHRydWU7XG4gICAgICBlbHNlIHRocm93IGVycjtcbiAgICB9XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgIGlzU2VhbGVkXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIHNlYWxlZCdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGJlIHNlYWxlZCdcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5mcm96ZW5cbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZnJvemVuIChjYW5ub3QgaGF2ZSBuZXcgcHJvcGVydGllcyBhZGRlZCB0byBpdFxuICAgKiBhbmQgaXRzIGV4aXN0aW5nIHByb3BlcnRpZXMgY2Fubm90IGJlIG1vZGlmaWVkKS5cbiAgICpcbiAgICogICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICpcbiAgICogICAgIGV4cGVjdChmcm96ZW5PYmplY3QpLnRvLmJlLmZyb3plbjtcbiAgICogICAgIGV4cGVjdCh7fSkudG8ubm90LmJlLmZyb3plbjtcbiAgICpcbiAgICogQG5hbWUgZnJvemVuXG4gICAqIEBuYW1lc3BhY2UgQkREXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnZnJvemVuJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuXG4gICAgLy8gSW4gRVM1LCBpZiB0aGUgYXJndW1lbnQgdG8gdGhpcyBtZXRob2QgaXMgbm90IGFuIG9iamVjdCAoYSBwcmltaXRpdmUpLCB0aGVuIGl0IHdpbGwgY2F1c2UgYSBUeXBlRXJyb3IuXG4gICAgLy8gSW4gRVM2LCBhIG5vbi1vYmplY3QgYXJndW1lbnQgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdhcyBhIGZyb3plbiBvcmRpbmFyeSBvYmplY3QsIHNpbXBseSByZXR1cm4gdHJ1ZS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzRnJvemVuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBwcm92aWRlcyBFUzYgYmVoYXZpb3Igd2hlbiBhIFR5cGVFcnJvciBpcyB0aHJvd24gdW5kZXIgRVM1LlxuXG4gICAgdmFyIGlzRnJvemVuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuKG9iaik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yKSBpc0Zyb3plbiA9IHRydWU7XG4gICAgICBlbHNlIHRocm93IGVycjtcbiAgICB9XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgIGlzRnJvemVuXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGZyb3plbidcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGJlIGZyb3plbidcbiAgICApO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS9jb3JlL2Fzc2VydGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogY2hhaVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY2hhaSwgdXRpbCkge1xuXG4gIC8qIVxuICAgKiBDaGFpIGRlcGVuZGVuY2llcy5cbiAgICovXG5cbiAgdmFyIEFzc2VydGlvbiA9IGNoYWkuQXNzZXJ0aW9uXG4gICAgLCBmbGFnID0gdXRpbC5mbGFnO1xuXG4gIC8qIVxuICAgKiBNb2R1bGUgZXhwb3J0LlxuICAgKi9cblxuICAvKipcbiAgICogIyMjIGFzc2VydChleHByZXNzaW9uLCBtZXNzYWdlKVxuICAgKlxuICAgKiBXcml0ZSB5b3VyIG93biB0ZXN0IGV4cHJlc3Npb25zLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0KCdmb28nICE9PSAnYmFyJywgJ2ZvbyBpcyBub3QgYmFyJyk7XG4gICAqICAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShbXSksICdlbXB0eSBhcnJheXMgYXJlIGFycmF5cycpO1xuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSBleHByZXNzaW9uIHRvIHRlc3QgZm9yIHRydXRoaW5lc3NcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgdG8gZGlzcGxheSBvbiBlcnJvclxuICAgKiBAbmFtZSBhc3NlcnRcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgdmFyIGFzc2VydCA9IGNoYWkuYXNzZXJ0ID0gZnVuY3Rpb24gKGV4cHJlc3MsIGVycm1zZykge1xuICAgIHZhciB0ZXN0ID0gbmV3IEFzc2VydGlvbihudWxsLCBudWxsLCBjaGFpLmFzc2VydCk7XG4gICAgdGVzdC5hc3NlcnQoXG4gICAgICAgIGV4cHJlc3NcbiAgICAgICwgZXJybXNnXG4gICAgICAsICdbIG5lZ2F0aW9uIG1lc3NhZ2UgdW5hdmFpbGFibGUgXSdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmZhaWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdLCBbb3BlcmF0b3JdKVxuICAgKlxuICAgKiBUaHJvdyBhIGZhaWx1cmUuIE5vZGUuanMgYGFzc2VydGAgbW9kdWxlLWNvbXBhdGlibGUuXG4gICAqXG4gICAqIEBuYW1lIGZhaWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcGVyYXRvclxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZmFpbCA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvcikge1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdhc3NlcnQuZmFpbCgpJztcbiAgICB0aHJvdyBuZXcgY2hhaS5Bc3NlcnRpb25FcnJvcihtZXNzYWdlLCB7XG4gICAgICAgIGFjdHVhbDogYWN0dWFsXG4gICAgICAsIGV4cGVjdGVkOiBleHBlY3RlZFxuICAgICAgLCBvcGVyYXRvcjogb3BlcmF0b3JcbiAgICB9LCBhc3NlcnQuZmFpbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNPayhvYmplY3QsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGlzIHRydXRoeS5cbiAgICpcbiAgICogICAgIGFzc2VydC5pc09rKCdldmVyeXRoaW5nJywgJ2V2ZXJ5dGhpbmcgaXMgb2snKTtcbiAgICogICAgIGFzc2VydC5pc09rKGZhbHNlLCAndGhpcyB3aWxsIGZhaWwnKTtcbiAgICpcbiAgICogQG5hbWUgaXNPa1xuICAgKiBAYWxpYXMgb2tcbiAgICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIHRlc3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzT2sgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS5pcy5vaztcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdE9rKG9iamVjdCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaXMgZmFsc3kuXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNOb3RPaygnZXZlcnl0aGluZycsICd0aGlzIHdpbGwgZmFpbCcpO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90T2soZmFsc2UsICd0aGlzIHdpbGwgcGFzcycpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdE9rXG4gICAqIEBhbGlhcyBub3RPa1xuICAgKiBAcGFyYW0ge01peGVkfSBvYmplY3QgdG8gdGVzdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RPayA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLmlzLm5vdC5vaztcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5lcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgbm9uLXN0cmljdCBlcXVhbGl0eSAoYD09YCkgb2YgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQuZXF1YWwoMywgJzMnLCAnPT0gY29lcmNlcyB2YWx1ZXMgdG8gc3RyaW5ncycpO1xuICAgKlxuICAgKiBAbmFtZSBlcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBtc2cpIHtcbiAgICB2YXIgdGVzdCA9IG5ldyBBc3NlcnRpb24oYWN0LCBtc2csIGFzc2VydC5lcXVhbCk7XG5cbiAgICB0ZXN0LmFzc2VydChcbiAgICAgICAgZXhwID09IGZsYWcodGVzdCwgJ29iamVjdCcpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGVxdWFsICN7ZXhwfSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGVxdWFsICN7YWN0fSdcbiAgICAgICwgZXhwXG4gICAgICAsIGFjdFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIG5vbi1zdHJpY3QgaW5lcXVhbGl0eSAoYCE9YCkgb2YgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQubm90RXF1YWwoMywgNCwgJ3RoZXNlIG51bWJlcnMgYXJlIG5vdCBlcXVhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBub3RFcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdEVxdWFsID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBtc2cpIHtcbiAgICB2YXIgdGVzdCA9IG5ldyBBc3NlcnRpb24oYWN0LCBtc2csIGFzc2VydC5ub3RFcXVhbCk7XG5cbiAgICB0ZXN0LmFzc2VydChcbiAgICAgICAgZXhwICE9IGZsYWcodGVzdCwgJ29iamVjdCcpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBlcXVhbCAje2V4cH0nXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGVxdWFsICN7YWN0fSdcbiAgICAgICwgZXhwXG4gICAgICAsIGFjdFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHN0cmljdCBlcXVhbGl0eSAoYD09PWApIG9mIGBhY3R1YWxgIGFuZCBgZXhwZWN0ZWRgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LnN0cmljdEVxdWFsKHRydWUsIHRydWUsICd0aGVzZSBib29sZWFucyBhcmUgc3RyaWN0bHkgZXF1YWwnKTtcbiAgICpcbiAgICogQG5hbWUgc3RyaWN0RXF1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIChhY3QsIGV4cCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8uZXF1YWwoZXhwKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgc3RyaWN0IGluZXF1YWxpdHkgKGAhPT1gKSBvZiBgYWN0dWFsYCBhbmQgYGV4cGVjdGVkYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RTdHJpY3RFcXVhbCgzLCAnMycsICdubyBjb2VyY2lvbiBmb3Igc3RyaWN0IGVxdWFsaXR5Jyk7XG4gICAqXG4gICAqIEBuYW1lIG5vdFN0cmljdEVxdWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGFjdHVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiAoYWN0LCBleHAsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oYWN0LCBtc2cpLnRvLm5vdC5lcXVhbChleHApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgYWN0dWFsYCBpcyBkZWVwbHkgZXF1YWwgdG8gYGV4cGVjdGVkYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5kZWVwRXF1YWwoeyB0ZWE6ICdncmVlbicgfSwgeyB0ZWE6ICdncmVlbicgfSk7XG4gICAqXG4gICAqIEBuYW1lIGRlZXBFcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIChhY3QsIGV4cCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8uZXFsKGV4cCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0IHRoYXQgYGFjdHVhbGAgaXMgbm90IGRlZXBseSBlcXVhbCB0byBgZXhwZWN0ZWRgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm5vdERlZXBFcXVhbCh7IHRlYTogJ2dyZWVuJyB9LCB7IHRlYTogJ2phc21pbmUnIH0pO1xuICAgKlxuICAgKiBAbmFtZSBub3REZWVwRXF1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3REZWVwRXF1YWwgPSBmdW5jdGlvbiAoYWN0LCBleHAsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oYWN0LCBtc2cpLnRvLm5vdC5lcWwoZXhwKTtcbiAgfTtcblxuICAgLyoqXG4gICAqICMjIyAuaXNBYm92ZSh2YWx1ZVRvQ2hlY2ssIHZhbHVlVG9CZUFib3ZlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgYHZhbHVlVG9DaGVja2AgaXMgc3RyaWN0bHkgZ3JlYXRlciB0aGFuICg+KSBgdmFsdWVUb0JlQWJvdmVgXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNBYm92ZSg1LCAyLCAnNSBpcyBzdHJpY3RseSBncmVhdGVyIHRoYW4gMicpO1xuICAgKlxuICAgKiBAbmFtZSBpc0Fib3ZlXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlVG9DaGVja1xuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVRvQmVBYm92ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNBYm92ZSA9IGZ1bmN0aW9uICh2YWwsIGFidiwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYWJvdmUoYWJ2KTtcbiAgfTtcblxuICAgLyoqXG4gICAqICMjIyAuaXNBdExlYXN0KHZhbHVlVG9DaGVjaywgdmFsdWVUb0JlQXRMZWFzdCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIGB2YWx1ZVRvQ2hlY2tgIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAoPj0pIGB2YWx1ZVRvQmVBdExlYXN0YFxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmlzQXRMZWFzdCg1LCAyLCAnNSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDInKTtcbiAgICogICAgIGFzc2VydC5pc0F0TGVhc3QoMywgMywgJzMgaXMgZ3JlYXRlciBvciBlcXVhbCB0byAzJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzQXRMZWFzdFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVRvQ2hlY2tcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVUb0JlQXRMZWFzdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNBdExlYXN0ID0gZnVuY3Rpb24gKHZhbCwgYXRsc3QsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmxlYXN0KGF0bHN0KTtcbiAgfTtcblxuICAgLyoqXG4gICAqICMjIyAuaXNCZWxvdyh2YWx1ZVRvQ2hlY2ssIHZhbHVlVG9CZUJlbG93LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgYHZhbHVlVG9DaGVja2AgaXMgc3RyaWN0bHkgbGVzcyB0aGFuICg8KSBgdmFsdWVUb0JlQmVsb3dgXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNCZWxvdygzLCA2LCAnMyBpcyBzdHJpY3RseSBsZXNzIHRoYW4gNicpO1xuICAgKlxuICAgKiBAbmFtZSBpc0JlbG93XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlVG9DaGVja1xuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVRvQmVCZWxvd1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNCZWxvdyA9IGZ1bmN0aW9uICh2YWwsIGJsdywgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYmVsb3coYmx3KTtcbiAgfTtcblxuICAgLyoqXG4gICAqICMjIyAuaXNBdE1vc3QodmFsdWVUb0NoZWNrLCB2YWx1ZVRvQmVBdE1vc3QsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyBgdmFsdWVUb0NoZWNrYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gKDw9KSBgdmFsdWVUb0JlQXRNb3N0YFxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmlzQXRNb3N0KDMsIDYsICczIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byA2Jyk7XG4gICAqICAgICBhc3NlcnQuaXNBdE1vc3QoNCwgNCwgJzQgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNBdE1vc3RcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVUb0NoZWNrXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlVG9CZUF0TW9zdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNBdE1vc3QgPSBmdW5jdGlvbiAodmFsLCBhdG1zdCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUubW9zdChhdG1zdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNUcnVlKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIHRydWUuXG4gICAqXG4gICAqICAgICB2YXIgdGVhU2VydmVkID0gdHJ1ZTtcbiAgICogICAgIGFzc2VydC5pc1RydWUodGVhU2VydmVkLCAndGhlIHRlYSBoYXMgYmVlbiBzZXJ2ZWQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNUcnVlXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc1RydWUgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS5pc1sndHJ1ZSddO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90VHJ1ZSh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBub3QgdHJ1ZS5cbiAgICpcbiAgICogICAgIHZhciB0ZWEgPSAndGFzdHkgY2hhaSc7XG4gICAqICAgICBhc3NlcnQuaXNOb3RUcnVlKHRlYSwgJ2dyZWF0LCB0aW1lIGZvciB0ZWEhJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90VHJ1ZVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RUcnVlID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmVxdWFsKHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzRmFsc2UodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgZmFsc2UuXG4gICAqXG4gICAqICAgICB2YXIgdGVhU2VydmVkID0gZmFsc2U7XG4gICAqICAgICBhc3NlcnQuaXNGYWxzZSh0ZWFTZXJ2ZWQsICdubyB0ZWEgeWV0PyBobW0uLi4nKTtcbiAgICpcbiAgICogQG5hbWUgaXNGYWxzZVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNGYWxzZSA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLmlzWydmYWxzZSddO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90RmFsc2UodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgbm90IGZhbHNlLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYSA9ICd0YXN0eSBjaGFpJztcbiAgICogICAgIGFzc2VydC5pc05vdEZhbHNlKHRlYSwgJ2dyZWF0LCB0aW1lIGZvciB0ZWEhJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90RmFsc2VcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90RmFsc2UgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuZXF1YWwoZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTnVsbCh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBudWxsLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmlzTnVsbChlcnIsICd0aGVyZSB3YXMgbm8gZXJyb3InKTtcbiAgICpcbiAgICogQG5hbWUgaXNOdWxsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc051bGwgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5lcXVhbChudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdE51bGwodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgbm90IG51bGwuXG4gICAqXG4gICAqICAgICB2YXIgdGVhID0gJ3Rhc3R5IGNoYWknO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90TnVsbCh0ZWEsICdncmVhdCwgdGltZSBmb3IgdGVhIScpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdE51bGxcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90TnVsbCA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5lcXVhbChudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05hTlxuICAgKiBBc3NlcnRzIHRoYXQgdmFsdWUgaXMgTmFOXG4gICAqXG4gICAqICAgIGFzc2VydC5pc05hTignZm9vJywgJ2ZvbyBpcyBOYU4nKTtcbiAgICpcbiAgICogQG5hbWUgaXNOYU5cbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTmFOID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuTmFOO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90TmFOXG4gICAqIEFzc2VydHMgdGhhdCB2YWx1ZSBpcyBub3QgTmFOXG4gICAqXG4gICAqICAgIGFzc2VydC5pc05vdE5hTig0LCAnNCBpcyBub3QgTmFOJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90TmFOXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhc3NlcnQuaXNOb3ROYU4gPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS5ub3QudG8uYmUuTmFOO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzVW5kZWZpbmVkKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYTtcbiAgICogICAgIGFzc2VydC5pc1VuZGVmaW5lZCh0ZWEsICdubyB0ZWEgZGVmaW5lZCcpO1xuICAgKlxuICAgKiBAbmFtZSBpc1VuZGVmaW5lZFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5lcXVhbCh1bmRlZmluZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzRGVmaW5lZCh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBub3QgYHVuZGVmaW5lZGAuXG4gICAqXG4gICAqICAgICB2YXIgdGVhID0gJ2N1cCBvZiBjaGFpJztcbiAgICogICAgIGFzc2VydC5pc0RlZmluZWQodGVhLCAndGVhIGhhcyBiZWVuIGRlZmluZWQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNEZWZpbmVkXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc0RlZmluZWQgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuZXF1YWwodW5kZWZpbmVkKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc0Z1bmN0aW9uKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqICAgICBmdW5jdGlvbiBzZXJ2ZVRlYSgpIHsgcmV0dXJuICdjdXAgb2YgdGVhJzsgfTtcbiAgICogICAgIGFzc2VydC5pc0Z1bmN0aW9uKHNlcnZlVGVhLCAnZ3JlYXQsIHdlIGNhbiBoYXZlIHRlYSBub3cnKTtcbiAgICpcbiAgICogQG5hbWUgaXNGdW5jdGlvblxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmEoJ2Z1bmN0aW9uJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RGdW5jdGlvbih2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBfbm90XyBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiAgICAgdmFyIHNlcnZlVGVhID0gWyAnaGVhdCcsICdwb3VyJywgJ3NpcCcgXTtcbiAgICogICAgIGFzc2VydC5pc05vdEZ1bmN0aW9uKHNlcnZlVGVhLCAnZ3JlYXQsIHdlIGhhdmUgbGlzdGVkIHRoZSBzdGVwcycpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdEZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdEZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmEoJ2Z1bmN0aW9uJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNPYmplY3QodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYW4gb2JqZWN0IG9mIHR5cGUgJ09iamVjdCcgKGFzIHJldmVhbGVkIGJ5IGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCkuXG4gICAqIF9UaGUgYXNzZXJ0aW9uIGRvZXMgbm90IG1hdGNoIHN1YmNsYXNzZWQgb2JqZWN0cy5fXG4gICAqXG4gICAqICAgICB2YXIgc2VsZWN0aW9uID0geyBuYW1lOiAnQ2hhaScsIHNlcnZlOiAnd2l0aCBzcGljZXMnIH07XG4gICAqICAgICBhc3NlcnQuaXNPYmplY3Qoc2VsZWN0aW9uLCAndGVhIHNlbGVjdGlvbiBpcyBhbiBvYmplY3QnKTtcbiAgICpcbiAgICogQG5hbWUgaXNPYmplY3RcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzT2JqZWN0ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnb2JqZWN0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RPYmplY3QodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgX25vdF8gYW4gb2JqZWN0IG9mIHR5cGUgJ09iamVjdCcgKGFzIHJldmVhbGVkIGJ5IGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCkuXG4gICAqXG4gICAqICAgICB2YXIgc2VsZWN0aW9uID0gJ2NoYWknXG4gICAqICAgICBhc3NlcnQuaXNOb3RPYmplY3Qoc2VsZWN0aW9uLCAndGVhIHNlbGVjdGlvbiBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAqICAgICBhc3NlcnQuaXNOb3RPYmplY3QobnVsbCwgJ251bGwgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdE9iamVjdFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RPYmplY3QgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSgnb2JqZWN0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNBcnJheSh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBhbiBhcnJheS5cbiAgICpcbiAgICogICAgIHZhciBtZW51ID0gWyAnZ3JlZW4nLCAnY2hhaScsICdvb2xvbmcnIF07XG4gICAqICAgICBhc3NlcnQuaXNBcnJheShtZW51LCAnd2hhdCBraW5kIG9mIHRlYSBkbyB3ZSB3YW50PycpO1xuICAgKlxuICAgKiBAbmFtZSBpc0FycmF5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc0FycmF5ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYW4oJ2FycmF5Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RBcnJheSh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBfbm90XyBhbiBhcnJheS5cbiAgICpcbiAgICogICAgIHZhciBtZW51ID0gJ2dyZWVufGNoYWl8b29sb25nJztcbiAgICogICAgIGFzc2VydC5pc05vdEFycmF5KG1lbnUsICd3aGF0IGtpbmQgb2YgdGVhIGRvIHdlIHdhbnQ/Jyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90QXJyYXlcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90QXJyYXkgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYW4oJ2FycmF5Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNTdHJpbmcodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYSBzdHJpbmcuXG4gICAqXG4gICAqICAgICB2YXIgdGVhT3JkZXIgPSAnY2hhaSc7XG4gICAqICAgICBhc3NlcnQuaXNTdHJpbmcodGVhT3JkZXIsICdvcmRlciBwbGFjZWQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNTdHJpbmdcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnc3RyaW5nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RTdHJpbmcodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgX25vdF8gYSBzdHJpbmcuXG4gICAqXG4gICAqICAgICB2YXIgdGVhT3JkZXIgPSA0O1xuICAgKiAgICAgYXNzZXJ0LmlzTm90U3RyaW5nKHRlYU9yZGVyLCAnb3JkZXIgcGxhY2VkJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90U3RyaW5nXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdFN0cmluZyA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5iZS5hKCdzdHJpbmcnKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc051bWJlcih2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBhIG51bWJlci5cbiAgICpcbiAgICogICAgIHZhciBjdXBzID0gMjtcbiAgICogICAgIGFzc2VydC5pc051bWJlcihjdXBzLCAnaG93IG1hbnkgY3VwcycpO1xuICAgKlxuICAgKiBAbmFtZSBpc051bWJlclxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnbnVtYmVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3ROdW1iZXIodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgX25vdF8gYSBudW1iZXIuXG4gICAqXG4gICAqICAgICB2YXIgY3VwcyA9ICcyIGN1cHMgcGxlYXNlJztcbiAgICogICAgIGFzc2VydC5pc05vdE51bWJlcihjdXBzLCAnaG93IG1hbnkgY3VwcycpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdE51bWJlclxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3ROdW1iZXIgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSgnbnVtYmVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNCb29sZWFuKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGEgYm9vbGVhbi5cbiAgICpcbiAgICogICAgIHZhciB0ZWFSZWFkeSA9IHRydWVcbiAgICogICAgICAgLCB0ZWFTZXJ2ZWQgPSBmYWxzZTtcbiAgICpcbiAgICogICAgIGFzc2VydC5pc0Jvb2xlYW4odGVhUmVhZHksICdpcyB0aGUgdGVhIHJlYWR5Jyk7XG4gICAqICAgICBhc3NlcnQuaXNCb29sZWFuKHRlYVNlcnZlZCwgJ2hhcyB0ZWEgYmVlbiBzZXJ2ZWQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNCb29sZWFuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc0Jvb2xlYW4gPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5iZS5hKCdib29sZWFuJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RCb29sZWFuKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIF9ub3RfIGEgYm9vbGVhbi5cbiAgICpcbiAgICogICAgIHZhciB0ZWFSZWFkeSA9ICd5ZXAnXG4gICAqICAgICAgICwgdGVhU2VydmVkID0gJ25vcGUnO1xuICAgKlxuICAgKiAgICAgYXNzZXJ0LmlzTm90Qm9vbGVhbih0ZWFSZWFkeSwgJ2lzIHRoZSB0ZWEgcmVhZHknKTtcbiAgICogICAgIGFzc2VydC5pc05vdEJvb2xlYW4odGVhU2VydmVkLCAnaGFzIHRlYSBiZWVuIHNlcnZlZCcpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdEJvb2xlYW5cbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90Qm9vbGVhbiA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5iZS5hKCdib29sZWFuJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAudHlwZU9mKHZhbHVlLCBuYW1lLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgJ3MgdHlwZSBpcyBgbmFtZWAsIGFzIGRldGVybWluZWQgYnlcbiAgICogYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LnR5cGVPZih7IHRlYTogJ2NoYWknIH0sICdvYmplY3QnLCAnd2UgaGF2ZSBhbiBvYmplY3QnKTtcbiAgICogICAgIGFzc2VydC50eXBlT2YoWydjaGFpJywgJ2phc21pbmUnXSwgJ2FycmF5JywgJ3dlIGhhdmUgYW4gYXJyYXknKTtcbiAgICogICAgIGFzc2VydC50eXBlT2YoJ3RlYScsICdzdHJpbmcnLCAnd2UgaGF2ZSBhIHN0cmluZycpO1xuICAgKiAgICAgYXNzZXJ0LnR5cGVPZigvdGVhLywgJ3JlZ2V4cCcsICd3ZSBoYXZlIGEgcmVndWxhciBleHByZXNzaW9uJyk7XG4gICAqICAgICBhc3NlcnQudHlwZU9mKG51bGwsICdudWxsJywgJ3dlIGhhdmUgYSBudWxsJyk7XG4gICAqICAgICBhc3NlcnQudHlwZU9mKHVuZGVmaW5lZCwgJ3VuZGVmaW5lZCcsICd3ZSBoYXZlIGFuIHVuZGVmaW5lZCcpO1xuICAgKlxuICAgKiBAbmFtZSB0eXBlT2ZcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnR5cGVPZiA9IGZ1bmN0aW9uICh2YWwsIHR5cGUsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmEodHlwZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90VHlwZU9mKHZhbHVlLCBuYW1lLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgJ3MgdHlwZSBpcyBfbm90XyBgbmFtZWAsIGFzIGRldGVybWluZWQgYnlcbiAgICogYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm5vdFR5cGVPZigndGVhJywgJ251bWJlcicsICdzdHJpbmdzIGFyZSBub3QgbnVtYmVycycpO1xuICAgKlxuICAgKiBAbmFtZSBub3RUeXBlT2ZcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVvZiBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3RUeXBlT2YgPSBmdW5jdGlvbiAodmFsLCB0eXBlLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSh0eXBlKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pbnN0YW5jZU9mKG9iamVjdCwgY29uc3RydWN0b3IsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYC5cbiAgICpcbiAgICogICAgIHZhciBUZWEgPSBmdW5jdGlvbiAobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAqICAgICAgICwgY2hhaSA9IG5ldyBUZWEoJ2NoYWknKTtcbiAgICpcbiAgICogICAgIGFzc2VydC5pbnN0YW5jZU9mKGNoYWksIFRlYSwgJ2NoYWkgaXMgYW4gaW5zdGFuY2Ugb2YgdGVhJyk7XG4gICAqXG4gICAqIEBuYW1lIGluc3RhbmNlT2ZcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge0NvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaW5zdGFuY2VPZiA9IGZ1bmN0aW9uICh2YWwsIHR5cGUsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmluc3RhbmNlT2YodHlwZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90SW5zdGFuY2VPZihvYmplY3QsIGNvbnN0cnVjdG9yLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgYHZhbHVlYCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYC5cbiAgICpcbiAgICogICAgIHZhciBUZWEgPSBmdW5jdGlvbiAobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAqICAgICAgICwgY2hhaSA9IG5ldyBTdHJpbmcoJ2NoYWknKTtcbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RJbnN0YW5jZU9mKGNoYWksIFRlYSwgJ2NoYWkgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRlYScpO1xuICAgKlxuICAgKiBAbmFtZSBub3RJbnN0YW5jZU9mXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtDb25zdHJ1Y3Rvcn0gY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdEluc3RhbmNlT2YgPSBmdW5jdGlvbiAodmFsLCB0eXBlLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuaW5zdGFuY2VPZih0eXBlKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pbmNsdWRlKGhheXN0YWNrLCBuZWVkbGUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBoYXlzdGFja2AgaW5jbHVkZXMgYG5lZWRsZWAuIFdvcmtzXG4gICAqIGZvciBzdHJpbmdzIGFuZCBhcnJheXMuXG4gICAqXG4gICAqICAgICBhc3NlcnQuaW5jbHVkZSgnZm9vYmFyJywgJ2JhcicsICdmb29iYXIgY29udGFpbnMgc3RyaW5nIFwiYmFyXCInKTtcbiAgICogICAgIGFzc2VydC5pbmNsdWRlKFsgMSwgMiwgMyBdLCAzLCAnYXJyYXkgY29udGFpbnMgdmFsdWUnKTtcbiAgICpcbiAgICogQG5hbWUgaW5jbHVkZVxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gaGF5c3RhY2tcbiAgICogQHBhcmFtIHtNaXhlZH0gbmVlZGxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pbmNsdWRlID0gZnVuY3Rpb24gKGV4cCwgaW5jLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGV4cCwgbXNnLCBhc3NlcnQuaW5jbHVkZSkuaW5jbHVkZShpbmMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdEluY2x1ZGUoaGF5c3RhY2ssIG5lZWRsZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYGhheXN0YWNrYCBkb2VzIG5vdCBpbmNsdWRlIGBuZWVkbGVgLiBXb3Jrc1xuICAgKiBmb3Igc3RyaW5ncyBhbmQgYXJyYXlzLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm5vdEluY2x1ZGUoJ2Zvb2JhcicsICdiYXonLCAnc3RyaW5nIG5vdCBpbmNsdWRlIHN1YnN0cmluZycpO1xuICAgKiAgICAgYXNzZXJ0Lm5vdEluY2x1ZGUoWyAxLCAyLCAzIF0sIDQsICdhcnJheSBub3QgaW5jbHVkZSBjb250YWluIHZhbHVlJyk7XG4gICAqXG4gICAqIEBuYW1lIG5vdEluY2x1ZGVcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGhheXN0YWNrXG4gICAqIEBwYXJhbSB7TWl4ZWR9IG5lZWRsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubm90SW5jbHVkZSA9IGZ1bmN0aW9uIChleHAsIGluYywgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihleHAsIG1zZywgYXNzZXJ0Lm5vdEluY2x1ZGUpLm5vdC5pbmNsdWRlKGluYyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubWF0Y2godmFsdWUsIHJlZ2V4cCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBtYXRjaGVzIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gYHJlZ2V4cGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQubWF0Y2goJ2Zvb2JhcicsIC9eZm9vLywgJ3JlZ2V4cCBtYXRjaGVzJyk7XG4gICAqXG4gICAqIEBuYW1lIG1hdGNoXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm1hdGNoID0gZnVuY3Rpb24gKGV4cCwgcmUsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oZXhwLCBtc2cpLnRvLm1hdGNoKHJlKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3RNYXRjaCh2YWx1ZSwgcmVnZXhwLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGRvZXMgbm90IG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gYHJlZ2V4cGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQubm90TWF0Y2goJ2Zvb2JhcicsIC9eZm9vLywgJ3JlZ2V4cCBkb2VzIG5vdCBtYXRjaCcpO1xuICAgKlxuICAgKiBAbmFtZSBub3RNYXRjaFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3RNYXRjaCA9IGZ1bmN0aW9uIChleHAsIHJlLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGV4cCwgbXNnKS50by5ub3QubWF0Y2gocmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLnByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAuXG4gICAqXG4gICAqICAgICBhc3NlcnQucHJvcGVydHkoeyB0ZWE6IHsgZ3JlZW46ICdtYXRjaGEnIH19LCAndGVhJyk7XG4gICAqXG4gICAqIEBuYW1lIHByb3BlcnR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5wcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3AsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkocHJvcCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90UHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgZG9lcyBfbm90XyBoYXZlIGEgcHJvcGVydHkgbmFtZWQgYnkgYHByb3BlcnR5YC5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RQcm9wZXJ0eSh7IHRlYTogeyBncmVlbjogJ21hdGNoYScgfX0sICdjb2ZmZWUnKTtcbiAgICpcbiAgICogQG5hbWUgbm90UHJvcGVydHlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8ubm90LmhhdmUucHJvcGVydHkocHJvcCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuZGVlcFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAsIHdoaWNoIGNhbiBiZSBhXG4gICAqIHN0cmluZyB1c2luZyBkb3QtIGFuZCBicmFja2V0LW5vdGF0aW9uIGZvciBkZWVwIHJlZmVyZW5jZS5cbiAgICpcbiAgICogICAgIGFzc2VydC5kZWVwUHJvcGVydHkoeyB0ZWE6IHsgZ3JlZW46ICdtYXRjaGEnIH19LCAndGVhLmdyZWVuJyk7XG4gICAqXG4gICAqIEBuYW1lIGRlZXBQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZGVlcFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uaGF2ZS5kZWVwLnByb3BlcnR5KHByb3ApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdERlZXBQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBkb2VzIF9ub3RfIGhhdmUgYSBwcm9wZXJ0eSBuYW1lZCBieSBgcHJvcGVydHlgLCB3aGljaFxuICAgKiBjYW4gYmUgYSBzdHJpbmcgdXNpbmcgZG90LSBhbmQgYnJhY2tldC1ub3RhdGlvbiBmb3IgZGVlcCByZWZlcmVuY2UuXG4gICAqXG4gICAqICAgICBhc3NlcnQubm90RGVlcFByb3BlcnR5KHsgdGVhOiB7IGdyZWVuOiAnbWF0Y2hhJyB9fSwgJ3RlYS5vb2xvbmcnKTtcbiAgICpcbiAgICogQG5hbWUgbm90RGVlcFByb3BlcnR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3REZWVwUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuaGF2ZS5kZWVwLnByb3BlcnR5KHByb3ApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLnByb3BlcnR5VmFsKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBoYXMgYSBwcm9wZXJ0eSBuYW1lZCBieSBgcHJvcGVydHlgIHdpdGggdmFsdWUgZ2l2ZW5cbiAgICogYnkgYHZhbHVlYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5wcm9wZXJ0eVZhbCh7IHRlYTogJ2lzIGdvb2QnIH0sICd0ZWEnLCAnaXMgZ29vZCcpO1xuICAgKlxuICAgKiBAbmFtZSBwcm9wZXJ0eVZhbFxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQucHJvcGVydHlWYWwgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCB2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkocHJvcCwgdmFsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5wcm9wZXJ0eU5vdFZhbChvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaGFzIGEgcHJvcGVydHkgbmFtZWQgYnkgYHByb3BlcnR5YCwgYnV0IHdpdGggYSB2YWx1ZVxuICAgKiBkaWZmZXJlbnQgZnJvbSB0aGF0IGdpdmVuIGJ5IGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBhc3NlcnQucHJvcGVydHlOb3RWYWwoeyB0ZWE6ICdpcyBnb29kJyB9LCAndGVhJywgJ2lzIGJhZCcpO1xuICAgKlxuICAgKiBAbmFtZSBwcm9wZXJ0eU5vdFZhbFxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQucHJvcGVydHlOb3RWYWwgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCB2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLm5vdC5oYXZlLnByb3BlcnR5KHByb3AsIHZhbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuZGVlcFByb3BlcnR5VmFsKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBoYXMgYSBwcm9wZXJ0eSBuYW1lZCBieSBgcHJvcGVydHlgIHdpdGggdmFsdWUgZ2l2ZW5cbiAgICogYnkgYHZhbHVlYC4gYHByb3BlcnR5YCBjYW4gdXNlIGRvdC0gYW5kIGJyYWNrZXQtbm90YXRpb24gZm9yIGRlZXBcbiAgICogcmVmZXJlbmNlLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmRlZXBQcm9wZXJ0eVZhbCh7IHRlYTogeyBncmVlbjogJ21hdGNoYScgfX0sICd0ZWEuZ3JlZW4nLCAnbWF0Y2hhJyk7XG4gICAqXG4gICAqIEBuYW1lIGRlZXBQcm9wZXJ0eVZhbFxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZGVlcFByb3BlcnR5VmFsID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgdmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLmRlZXAucHJvcGVydHkocHJvcCwgdmFsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5kZWVwUHJvcGVydHlOb3RWYWwob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAsIGJ1dCB3aXRoIGEgdmFsdWVcbiAgICogZGlmZmVyZW50IGZyb20gdGhhdCBnaXZlbiBieSBgdmFsdWVgLiBgcHJvcGVydHlgIGNhbiB1c2UgZG90LSBhbmRcbiAgICogYnJhY2tldC1ub3RhdGlvbiBmb3IgZGVlcCByZWZlcmVuY2UuXG4gICAqXG4gICAqICAgICBhc3NlcnQuZGVlcFByb3BlcnR5Tm90VmFsKHsgdGVhOiB7IGdyZWVuOiAnbWF0Y2hhJyB9fSwgJ3RlYS5ncmVlbicsICdrb25hY2hhJyk7XG4gICAqXG4gICAqIEBuYW1lIGRlZXBQcm9wZXJ0eU5vdFZhbFxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZGVlcFByb3BlcnR5Tm90VmFsID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgdmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuaGF2ZS5kZWVwLnByb3BlcnR5KHByb3AsIHZhbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubGVuZ3RoT2Yob2JqZWN0LCBsZW5ndGgsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIGBsZW5ndGhgIHByb3BlcnR5IHdpdGggdGhlIGV4cGVjdGVkIHZhbHVlLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lmxlbmd0aE9mKFsxLDIsM10sIDMsICdhcnJheSBoYXMgbGVuZ3RoIG9mIDMnKTtcbiAgICogICAgIGFzc2VydC5sZW5ndGhPZignZm9vYmFyJywgNiwgJ3N0cmluZyBoYXMgbGVuZ3RoIG9mIDYnKTtcbiAgICpcbiAgICogQG5hbWUgbGVuZ3RoT2ZcbiAgICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lmxlbmd0aE9mID0gZnVuY3Rpb24gKGV4cCwgbGVuLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGV4cCwgbXNnKS50by5oYXZlLmxlbmd0aChsZW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLnRocm93cyhmdW5jdGlvbiwgW2NvbnN0cnVjdG9yL3N0cmluZy9yZWdleHBdLCBbc3RyaW5nL3JlZ2V4cF0sIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBmdW5jdGlvbmAgd2lsbCB0aHJvdyBhbiBlcnJvciB0aGF0IGlzIGFuIGluc3RhbmNlIG9mXG4gICAqIGBjb25zdHJ1Y3RvcmAsIG9yIGFsdGVybmF0ZWx5IHRoYXQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciB3aXRoIG1lc3NhZ2VcbiAgICogbWF0Y2hpbmcgYHJlZ2V4cGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQudGhyb3dzKGZuLCAnZnVuY3Rpb24gdGhyb3dzIGEgcmVmZXJlbmNlIGVycm9yJyk7XG4gICAqICAgICBhc3NlcnQudGhyb3dzKGZuLCAvZnVuY3Rpb24gdGhyb3dzIGEgcmVmZXJlbmNlIGVycm9yLyk7XG4gICAqICAgICBhc3NlcnQudGhyb3dzKGZuLCBSZWZlcmVuY2VFcnJvcik7XG4gICAqICAgICBhc3NlcnQudGhyb3dzKGZuLCBSZWZlcmVuY2VFcnJvciwgJ2Z1bmN0aW9uIHRocm93cyBhIHJlZmVyZW5jZSBlcnJvcicpO1xuICAgKiAgICAgYXNzZXJ0LnRocm93cyhmbiwgUmVmZXJlbmNlRXJyb3IsIC9mdW5jdGlvbiB0aHJvd3MgYSByZWZlcmVuY2UgZXJyb3IvKTtcbiAgICpcbiAgICogQG5hbWUgdGhyb3dzXG4gICAqIEBhbGlhcyB0aHJvd1xuICAgKiBAYWxpYXMgVGhyb3dcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtFcnJvckNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjRXJyb3JfdHlwZXNcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uIChmbiwgZXJydCwgZXJycywgbXNnKSB7XG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZXJydCB8fCBlcnJ0IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBlcnJzID0gZXJydDtcbiAgICAgIGVycnQgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBhc3NlcnRFcnIgPSBuZXcgQXNzZXJ0aW9uKGZuLCBtc2cpLnRvLnRocm93KGVycnQsIGVycnMpO1xuICAgIHJldHVybiBmbGFnKGFzc2VydEVyciwgJ29iamVjdCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmRvZXNOb3RUaHJvdyhmdW5jdGlvbiwgW2NvbnN0cnVjdG9yL3JlZ2V4cF0sIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBmdW5jdGlvbmAgd2lsbCBfbm90XyB0aHJvdyBhbiBlcnJvciB0aGF0IGlzIGFuIGluc3RhbmNlIG9mXG4gICAqIGBjb25zdHJ1Y3RvcmAsIG9yIGFsdGVybmF0ZWx5IHRoYXQgaXQgd2lsbCBub3QgdGhyb3cgYW4gZXJyb3Igd2l0aCBtZXNzYWdlXG4gICAqIG1hdGNoaW5nIGByZWdleHBgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhmbiwgRXJyb3IsICdmdW5jdGlvbiBkb2VzIG5vdCB0aHJvdycpO1xuICAgKlxuICAgKiBAbmFtZSBkb2VzTm90VGhyb3dcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtFcnJvckNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjRXJyb3JfdHlwZXNcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyA9IGZ1bmN0aW9uIChmbiwgdHlwZSwgbXNnKSB7XG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdHlwZSkge1xuICAgICAgbXNnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIG5ldyBBc3NlcnRpb24oZm4sIG1zZykudG8ubm90LlRocm93KHR5cGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm9wZXJhdG9yKHZhbDEsIG9wZXJhdG9yLCB2YWwyLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIENvbXBhcmVzIHR3byB2YWx1ZXMgdXNpbmcgYG9wZXJhdG9yYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5vcGVyYXRvcigxLCAnPCcsIDIsICdldmVyeXRoaW5nIGlzIG9rJyk7XG4gICAqICAgICBhc3NlcnQub3BlcmF0b3IoMSwgJz4nLCAyLCAndGhpcyB3aWxsIGZhaWwnKTtcbiAgICpcbiAgICogQG5hbWUgb3BlcmF0b3JcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsMVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3BlcmF0b3JcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsMlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQub3BlcmF0b3IgPSBmdW5jdGlvbiAodmFsLCBvcGVyYXRvciwgdmFsMiwgbXNnKSB7XG4gICAgdmFyIG9rO1xuICAgIHN3aXRjaChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnPT0nOlxuICAgICAgICBvayA9IHZhbCA9PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgIG9rID0gdmFsID09PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz4nOlxuICAgICAgICBvayA9IHZhbCA+IHZhbDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnPj0nOlxuICAgICAgICBvayA9IHZhbCA+PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzwnOlxuICAgICAgICBvayA9IHZhbCA8IHZhbDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnPD0nOlxuICAgICAgICBvayA9IHZhbCA8PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgb2sgPSB2YWwgIT0gdmFsMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICchPT0nOlxuICAgICAgICBvayA9IHZhbCAhPT0gdmFsMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3IgXCInICsgb3BlcmF0b3IgKyAnXCInKTtcbiAgICB9XG4gICAgdmFyIHRlc3QgPSBuZXcgQXNzZXJ0aW9uKG9rLCBtc2cpO1xuICAgIHRlc3QuYXNzZXJ0KFxuICAgICAgICB0cnVlID09PSBmbGFnKHRlc3QsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgJyArIHV0aWwuaW5zcGVjdCh2YWwpICsgJyB0byBiZSAnICsgb3BlcmF0b3IgKyAnICcgKyB1dGlsLmluc3BlY3QodmFsMilcbiAgICAgICwgJ2V4cGVjdGVkICcgKyB1dGlsLmluc3BlY3QodmFsKSArICcgdG8gbm90IGJlICcgKyBvcGVyYXRvciArICcgJyArIHV0aWwuaW5zcGVjdCh2YWwyKSApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmNsb3NlVG8oYWN0dWFsLCBleHBlY3RlZCwgZGVsdGEsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZXF1YWwgYGV4cGVjdGVkYCwgdG8gd2l0aGluIGEgKy8tIGBkZWx0YWAgcmFuZ2UuXG4gICAqXG4gICAqICAgICBhc3NlcnQuY2xvc2VUbygxLjUsIDEsIDAuNSwgJ251bWJlcnMgYXJlIGNsb3NlJyk7XG4gICAqXG4gICAqIEBuYW1lIGNsb3NlVG9cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdHVhbFxuICAgKiBAcGFyYW0ge051bWJlcn0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5jbG9zZVRvID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBkZWx0YSwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8uYmUuY2xvc2VUbyhleHAsIGRlbHRhKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5hcHByb3hpbWF0ZWx5KGFjdHVhbCwgZXhwZWN0ZWQsIGRlbHRhLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGVxdWFsIGBleHBlY3RlZGAsIHRvIHdpdGhpbiBhICsvLSBgZGVsdGFgIHJhbmdlLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmFwcHJveGltYXRlbHkoMS41LCAxLCAwLjUsICdudW1iZXJzIGFyZSBjbG9zZScpO1xuICAgKlxuICAgKiBAbmFtZSBhcHByb3hpbWF0ZWx5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhY3R1YWxcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWx0YVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuYXBwcm94aW1hdGVseSA9IGZ1bmN0aW9uIChhY3QsIGV4cCwgZGVsdGEsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oYWN0LCBtc2cpLnRvLmJlLmFwcHJveGltYXRlbHkoZXhwLCBkZWx0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuc2FtZU1lbWJlcnMoc2V0MSwgc2V0MiwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHNldDFgIGFuZCBgc2V0MmAgaGF2ZSB0aGUgc2FtZSBtZW1iZXJzLlxuICAgKiBPcmRlciBpcyBub3QgdGFrZW4gaW50byBhY2NvdW50LlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LnNhbWVNZW1iZXJzKFsgMSwgMiwgMyBdLCBbIDIsIDEsIDMgXSwgJ3NhbWUgbWVtYmVycycpO1xuICAgKlxuICAgKiBAbmFtZSBzYW1lTWVtYmVyc1xuICAgKiBAcGFyYW0ge0FycmF5fSBzZXQxXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNldDJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnNhbWVNZW1iZXJzID0gZnVuY3Rpb24gKHNldDEsIHNldDIsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oc2V0MSwgbXNnKS50by5oYXZlLnNhbWUubWVtYmVycyhzZXQyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgLnNhbWVEZWVwTWVtYmVycyhzZXQxLCBzZXQyLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgc2V0MWAgYW5kIGBzZXQyYCBoYXZlIHRoZSBzYW1lIG1lbWJlcnMgLSB1c2luZyBhIGRlZXAgZXF1YWxpdHkgY2hlY2tpbmcuXG4gICAqIE9yZGVyIGlzIG5vdCB0YWtlbiBpbnRvIGFjY291bnQuXG4gICAqXG4gICAqICAgICBhc3NlcnQuc2FtZURlZXBNZW1iZXJzKFsge2I6IDN9LCB7YTogMn0sIHtjOiA1fSBdLCBbIHtjOiA1fSwge2I6IDN9LCB7YTogMn0gXSwgJ3NhbWUgZGVlcCBtZW1iZXJzJyk7XG4gICAqXG4gICAqIEBuYW1lIHNhbWVEZWVwTWVtYmVyc1xuICAgKiBAcGFyYW0ge0FycmF5fSBzZXQxXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNldDJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnNhbWVEZWVwTWVtYmVycyA9IGZ1bmN0aW9uIChzZXQxLCBzZXQyLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHNldDEsIG1zZykudG8uaGF2ZS5zYW1lLmRlZXAubWVtYmVycyhzZXQyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgLmluY2x1ZGVNZW1iZXJzKHN1cGVyc2V0LCBzdWJzZXQsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBzdWJzZXRgIGlzIGluY2x1ZGVkIGluIGBzdXBlcnNldGAuXG4gICAqIE9yZGVyIGlzIG5vdCB0YWtlbiBpbnRvIGFjY291bnQuXG4gICAqXG4gICAqICAgICBhc3NlcnQuaW5jbHVkZU1lbWJlcnMoWyAxLCAyLCAzIF0sIFsgMiwgMSBdLCAnaW5jbHVkZSBtZW1iZXJzJyk7XG4gICAqXG4gICAqIEBuYW1lIGluY2x1ZGVNZW1iZXJzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN1cGVyc2V0XG4gICAqIEBwYXJhbSB7QXJyYXl9IHN1YnNldFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaW5jbHVkZU1lbWJlcnMgPSBmdW5jdGlvbiAoc3VwZXJzZXQsIHN1YnNldCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihzdXBlcnNldCwgbXNnKS50by5pbmNsdWRlLm1lbWJlcnMoc3Vic2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgLmluY2x1ZGVEZWVwTWVtYmVycyhzdXBlcnNldCwgc3Vic2V0LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgc3Vic2V0YCBpcyBpbmNsdWRlZCBpbiBgc3VwZXJzZXRgIC0gdXNpbmcgZGVlcCBlcXVhbGl0eSBjaGVja2luZy5cbiAgICogT3JkZXIgaXMgbm90IHRha2VuIGludG8gYWNjb3VudC5cbiAgICogRHVwbGljYXRlcyBhcmUgaWdub3JlZC5cbiAgICpcbiAgICogICAgIGFzc2VydC5pbmNsdWRlRGVlcE1lbWJlcnMoWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF0sIFsge2I6IDJ9LCB7YTogMX0sIHtiOiAyfSBdLCAnaW5jbHVkZSBkZWVwIG1lbWJlcnMnKTtcbiAgICpcbiAgICogQG5hbWUgaW5jbHVkZURlZXBNZW1iZXJzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN1cGVyc2V0XG4gICAqIEBwYXJhbSB7QXJyYXl9IHN1YnNldFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaW5jbHVkZURlZXBNZW1iZXJzID0gZnVuY3Rpb24gKHN1cGVyc2V0LCBzdWJzZXQsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oc3VwZXJzZXQsIG1zZykudG8uaW5jbHVkZS5kZWVwLm1lbWJlcnMoc3Vic2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgLm9uZU9mKGluTGlzdCwgbGlzdCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgbm9uLW9iamVjdCwgbm9uLWFycmF5IHZhbHVlIGBpbkxpc3RgIGFwcGVhcnMgaW4gdGhlIGZsYXQgYXJyYXkgYGxpc3RgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm9uZU9mKDEsIFsgMiwgMSBdLCAnTm90IGZvdW5kIGluIGxpc3QnKTtcbiAgICpcbiAgICogQG5hbWUgb25lT2ZcbiAgICogQHBhcmFtIHsqfSBpbkxpc3RcbiAgICogQHBhcmFtIHtBcnJheTwqPn0gbGlzdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQub25lT2YgPSBmdW5jdGlvbiAoaW5MaXN0LCBsaXN0LCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGluTGlzdCwgbXNnKS50by5iZS5vbmVPZihsaXN0KTtcbiAgfVxuXG4gICAvKipcbiAgICogIyMjIC5jaGFuZ2VzKGZ1bmN0aW9uLCBvYmplY3QsIHByb3BlcnR5KVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYSBmdW5jdGlvbiBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5XG4gICAqXG4gICAqICAgICB2YXIgb2JqID0geyB2YWw6IDEwIH07XG4gICAqICAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHsgb2JqLnZhbCA9IDIyIH07XG4gICAqICAgICBhc3NlcnQuY2hhbmdlcyhmbiwgb2JqLCAndmFsJyk7XG4gICAqXG4gICAqIEBuYW1lIGNoYW5nZXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5jaGFuZ2VzID0gZnVuY3Rpb24gKGZuLCBvYmosIHByb3ApIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGZuKS50by5jaGFuZ2Uob2JqLCBwcm9wKTtcbiAgfVxuXG4gICAvKipcbiAgICogIyMjIC5kb2VzTm90Q2hhbmdlKGZ1bmN0aW9uLCBvYmplY3QsIHByb3BlcnR5KVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYSBmdW5jdGlvbiBkb2VzIG5vdCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5XG4gICAqXG4gICAqICAgICB2YXIgb2JqID0geyB2YWw6IDEwIH07XG4gICAqICAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coJ2ZvbycpOyB9O1xuICAgKiAgICAgYXNzZXJ0LmRvZXNOb3RDaGFuZ2UoZm4sIG9iaiwgJ3ZhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBkb2VzTm90Q2hhbmdlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZGlmaWVyIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZG9lc05vdENoYW5nZSA9IGZ1bmN0aW9uIChmbiwgb2JqLCBwcm9wKSB7XG4gICAgbmV3IEFzc2VydGlvbihmbikudG8ubm90LmNoYW5nZShvYmosIHByb3ApO1xuICB9XG5cbiAgIC8qKlxuICAgKiAjIyMgLmluY3JlYXNlcyhmdW5jdGlvbiwgb2JqZWN0LCBwcm9wZXJ0eSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGEgZnVuY3Rpb24gaW5jcmVhc2VzIGFuIG9iamVjdCBwcm9wZXJ0eVxuICAgKlxuICAgKiAgICAgdmFyIG9iaiA9IHsgdmFsOiAxMCB9O1xuICAgKiAgICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7IG9iai52YWwgPSAxMyB9O1xuICAgKiAgICAgYXNzZXJ0LmluY3JlYXNlcyhmbiwgb2JqLCAndmFsJyk7XG4gICAqXG4gICAqIEBuYW1lIGluY3JlYXNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtb2RpZmllciBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmluY3JlYXNlcyA9IGZ1bmN0aW9uIChmbiwgb2JqLCBwcm9wKSB7XG4gICAgbmV3IEFzc2VydGlvbihmbikudG8uaW5jcmVhc2Uob2JqLCBwcm9wKTtcbiAgfVxuXG4gICAvKipcbiAgICogIyMjIC5kb2VzTm90SW5jcmVhc2UoZnVuY3Rpb24sIG9iamVjdCwgcHJvcGVydHkpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBhIGZ1bmN0aW9uIGRvZXMgbm90IGluY3JlYXNlIG9iamVjdCBwcm9wZXJ0eVxuICAgKlxuICAgKiAgICAgdmFyIG9iaiA9IHsgdmFsOiAxMCB9O1xuICAgKiAgICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7IG9iai52YWwgPSA4IH07XG4gICAqICAgICBhc3NlcnQuZG9lc05vdEluY3JlYXNlKGZuLCBvYmosICd2YWwnKTtcbiAgICpcbiAgICogQG5hbWUgZG9lc05vdEluY3JlYXNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZGlmaWVyIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZG9lc05vdEluY3JlYXNlID0gZnVuY3Rpb24gKGZuLCBvYmosIHByb3ApIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGZuKS50by5ub3QuaW5jcmVhc2Uob2JqLCBwcm9wKTtcbiAgfVxuXG4gICAvKipcbiAgICogIyMjIC5kZWNyZWFzZXMoZnVuY3Rpb24sIG9iamVjdCwgcHJvcGVydHkpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBhIGZ1bmN0aW9uIGRlY3JlYXNlcyBhbiBvYmplY3QgcHJvcGVydHlcbiAgICpcbiAgICogICAgIHZhciBvYmogPSB7IHZhbDogMTAgfTtcbiAgICogICAgIHZhciBmbiA9IGZ1bmN0aW9uKCkgeyBvYmoudmFsID0gNSB9O1xuICAgKiAgICAgYXNzZXJ0LmRlY3JlYXNlcyhmbiwgb2JqLCAndmFsJyk7XG4gICAqXG4gICAqIEBuYW1lIGRlY3JlYXNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtb2RpZmllciBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQG5hbWVzcGFjZSBBc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmRlY3JlYXNlcyA9IGZ1bmN0aW9uIChmbiwgb2JqLCBwcm9wKSB7XG4gICAgbmV3IEFzc2VydGlvbihmbikudG8uZGVjcmVhc2Uob2JqLCBwcm9wKTtcbiAgfVxuXG4gICAvKipcbiAgICogIyMjIC5kb2VzTm90RGVjcmVhc2UoZnVuY3Rpb24sIG9iamVjdCwgcHJvcGVydHkpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBhIGZ1bmN0aW9uIGRvZXMgbm90IGRlY3JlYXNlcyBhbiBvYmplY3QgcHJvcGVydHlcbiAgICpcbiAgICogICAgIHZhciBvYmogPSB7IHZhbDogMTAgfTtcbiAgICogICAgIHZhciBmbiA9IGZ1bmN0aW9uKCkgeyBvYmoudmFsID0gMTUgfTtcbiAgICogICAgIGFzc2VydC5kb2VzTm90RGVjcmVhc2UoZm4sIG9iaiwgJ3ZhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBkb2VzTm90RGVjcmVhc2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5kb2VzTm90RGVjcmVhc2UgPSBmdW5jdGlvbiAoZm4sIG9iaiwgcHJvcCkge1xuICAgIG5ldyBBc3NlcnRpb24oZm4pLnRvLm5vdC5kZWNyZWFzZShvYmosIHByb3ApO1xuICB9XG5cbiAgLyohXG4gICAqICMjIyAuaWZFcnJvcihvYmplY3QpXG4gICAqXG4gICAqIEFzc2VydHMgaWYgdmFsdWUgaXMgbm90IGEgZmFsc2UgdmFsdWUsIGFuZCB0aHJvd3MgaWYgaXQgaXMgYSB0cnVlIHZhbHVlLlxuICAgKiBUaGlzIGlzIGFkZGVkIHRvIGFsbG93IGZvciBjaGFpIHRvIGJlIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgTm9kZSdzXG4gICAqIGFzc2VydCBjbGFzcy5cbiAgICpcbiAgICogICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0kgYW0gYSBjdXN0b20gZXJyb3InKTtcbiAgICogICAgIGFzc2VydC5pZkVycm9yKGVycik7IC8vIFJldGhyb3dzIGVyciFcbiAgICpcbiAgICogQG5hbWUgaWZFcnJvclxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRocm93KHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzRXh0ZW5zaWJsZShvYmplY3QpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyBleHRlbnNpYmxlIChjYW4gaGF2ZSBuZXcgcHJvcGVydGllcyBhZGRlZCB0byBpdCkuXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNFeHRlbnNpYmxlKHt9KTtcbiAgICpcbiAgICogQG5hbWUgaXNFeHRlbnNpYmxlXG4gICAqIEBhbGlhcyBleHRlbnNpYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNFeHRlbnNpYmxlID0gZnVuY3Rpb24gKG9iaiwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uYmUuZXh0ZW5zaWJsZTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdEV4dGVuc2libGUob2JqZWN0KVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaXMgX25vdF8gZXh0ZW5zaWJsZS5cbiAgICpcbiAgICogICAgIHZhciBub25FeHRlbnNpYmxlT2JqZWN0ID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KTtcbiAgICogICAgIHZhciBzZWFsZWRPYmplY3QgPSBPYmplY3Quc2VhbCh7fSk7XG4gICAqICAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWVzZSh7fSk7XG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNOb3RFeHRlbnNpYmxlKG5vbkV4dGVuc2libGVPYmplY3QpO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90RXh0ZW5zaWJsZShzZWFsZWRPYmplY3QpO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90RXh0ZW5zaWJsZShmcm96ZW5PYmplY3QpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdEV4dGVuc2libGVcbiAgICogQGFsaWFzIG5vdEV4dGVuc2libGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdEV4dGVuc2libGUgPSBmdW5jdGlvbiAob2JqLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuYmUuZXh0ZW5zaWJsZTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc1NlYWxlZChvYmplY3QpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyBzZWFsZWQgKGNhbm5vdCBoYXZlIG5ldyBwcm9wZXJ0aWVzIGFkZGVkIHRvIGl0XG4gICAqIGFuZCBpdHMgZXhpc3RpbmcgcHJvcGVydGllcyBjYW5ub3QgYmUgcmVtb3ZlZCkuXG4gICAqXG4gICAqICAgICB2YXIgc2VhbGVkT2JqZWN0ID0gT2JqZWN0LnNlYWwoe30pO1xuICAgKiAgICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5zZWFsKHt9KTtcbiAgICpcbiAgICogICAgIGFzc2VydC5pc1NlYWxlZChzZWFsZWRPYmplY3QpO1xuICAgKiAgICAgYXNzZXJ0LmlzU2VhbGVkKGZyb3plbk9iamVjdCk7XG4gICAqXG4gICAqIEBuYW1lIGlzU2VhbGVkXG4gICAqIEBhbGlhcyBzZWFsZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc1NlYWxlZCA9IGZ1bmN0aW9uIChvYmosIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmJlLnNlYWxlZDtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdFNlYWxlZChvYmplY3QpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyBfbm90XyBzZWFsZWQuXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNOb3RTZWFsZWQoe30pO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdFNlYWxlZFxuICAgKiBAYWxpYXMgbm90U2VhbGVkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RTZWFsZWQgPSBmdW5jdGlvbiAob2JqLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuYmUuc2VhbGVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzRnJvemVuKG9iamVjdClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGlzIGZyb3plbiAoY2Fubm90IGhhdmUgbmV3IHByb3BlcnRpZXMgYWRkZWQgdG8gaXRcbiAgICogYW5kIGl0cyBleGlzdGluZyBwcm9wZXJ0aWVzIGNhbm5vdCBiZSBtb2RpZmllZCkuXG4gICAqXG4gICAqICAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAqICAgICBhc3NlcnQuZnJvemVuKGZyb3plbk9iamVjdCk7XG4gICAqXG4gICAqIEBuYW1lIGlzRnJvemVuXG4gICAqIEBhbGlhcyBmcm96ZW5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBuYW1lc3BhY2UgQXNzZXJ0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc0Zyb3plbiA9IGZ1bmN0aW9uIChvYmosIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmJlLmZyb3plbjtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdEZyb3plbihvYmplY3QpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyBfbm90XyBmcm96ZW4uXG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNOb3RGcm96ZW4oe30pO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdEZyb3plblxuICAgKiBAYWxpYXMgbm90RnJvemVuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAbmFtZXNwYWNlIEFzc2VydFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RGcm96ZW4gPSBmdW5jdGlvbiAob2JqLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuYmUuZnJvemVuO1xuICB9O1xuXG4gIC8qIVxuICAgKiBBbGlhc2VzLlxuICAgKi9cblxuICAoZnVuY3Rpb24gYWxpYXMobmFtZSwgYXMpe1xuICAgIGFzc2VydFthc10gPSBhc3NlcnRbbmFtZV07XG4gICAgcmV0dXJuIGFsaWFzO1xuICB9KVxuICAoJ2lzT2snLCAnb2snKVxuICAoJ2lzTm90T2snLCAnbm90T2snKVxuICAoJ3Rocm93cycsICd0aHJvdycpXG4gICgndGhyb3dzJywgJ1Rocm93JylcbiAgKCdpc0V4dGVuc2libGUnLCAnZXh0ZW5zaWJsZScpXG4gICgnaXNOb3RFeHRlbnNpYmxlJywgJ25vdEV4dGVuc2libGUnKVxuICAoJ2lzU2VhbGVkJywgJ3NlYWxlZCcpXG4gICgnaXNOb3RTZWFsZWQnLCAnbm90U2VhbGVkJylcbiAgKCdpc0Zyb3plbicsICdmcm96ZW4nKVxuICAoJ2lzTm90RnJvemVuJywgJ25vdEZyb3plbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL2ludGVyZmFjZS9hc3NlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogY2hhaVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNoYWksIHV0aWwpIHtcbiAgY2hhaS5leHBlY3QgPSBmdW5jdGlvbiAodmFsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBjaGFpLkFzc2VydGlvbih2YWwsIG1lc3NhZ2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmZhaWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdLCBbb3BlcmF0b3JdKVxuICAgKlxuICAgKiBUaHJvdyBhIGZhaWx1cmUuXG4gICAqXG4gICAqIEBuYW1lIGZhaWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcGVyYXRvclxuICAgKiBAbmFtZXNwYWNlIEV4cGVjdFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBjaGFpLmV4cGVjdC5mYWlsID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yKSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ2V4cGVjdC5mYWlsKCknO1xuICAgIHRocm93IG5ldyBjaGFpLkFzc2VydGlvbkVycm9yKG1lc3NhZ2UsIHtcbiAgICAgICAgYWN0dWFsOiBhY3R1YWxcbiAgICAgICwgZXhwZWN0ZWQ6IGV4cGVjdGVkXG4gICAgICAsIG9wZXJhdG9yOiBvcGVyYXRvclxuICAgIH0sIGNoYWkuZXhwZWN0LmZhaWwpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL2ludGVyZmFjZS9leHBlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogY2hhaVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNoYWksIHV0aWwpIHtcbiAgdmFyIEFzc2VydGlvbiA9IGNoYWkuQXNzZXJ0aW9uO1xuXG4gIGZ1bmN0aW9uIGxvYWRTaG91bGQgKCkge1xuICAgIC8vIGV4cGxpY2l0bHkgZGVmaW5lIHRoaXMgbWV0aG9kIGFzIGZ1bmN0aW9uIGFzIHRvIGhhdmUgaXQncyBuYW1lIHRvIGluY2x1ZGUgYXMgYHNzZmlgXG4gICAgZnVuY3Rpb24gc2hvdWxkR2V0dGVyKCkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdGhpcyBpbnN0YW5jZW9mIE51bWJlciB8fCB0aGlzIGluc3RhbmNlb2YgQm9vbGVhbiApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NlcnRpb24odGhpcy52YWx1ZU9mKCksIG51bGwsIHNob3VsZEdldHRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEFzc2VydGlvbih0aGlzLCBudWxsLCBzaG91bGRHZXR0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG91bGRTZXR0ZXIodmFsdWUpIHtcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2hhaWpzL2NoYWkvaXNzdWVzLzg2OiB0aGlzIG1ha2VzXG4gICAgICAvLyBgd2hhdGV2ZXIuc2hvdWxkID0gc29tZVZhbHVlYCBhY3R1YWxseSBzZXQgYHNvbWVWYWx1ZWAsIHdoaWNoIGlzXG4gICAgICAvLyBlc3BlY2lhbGx5IHVzZWZ1bCBmb3IgYGdsb2JhbC5zaG91bGQgPSByZXF1aXJlKCdjaGFpJykuc2hvdWxkKClgLlxuICAgICAgLy9cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBoYXZlIHRvIHVzZSBbW0RlZmluZVByb3BlcnR5XV0gaW5zdGVhZCBvZiBbW1B1dF1dXG4gICAgICAvLyBzaW5jZSBvdGhlcndpc2Ugd2Ugd291bGQgdHJpZ2dlciB0aGlzIHZlcnkgc2V0dGVyIVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzaG91bGQnLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIG1vZGlmeSBPYmplY3QucHJvdG90eXBlIHRvIGhhdmUgYHNob3VsZGBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ3Nob3VsZCcsIHtcbiAgICAgIHNldDogc2hvdWxkU2V0dGVyXG4gICAgICAsIGdldDogc2hvdWxkR2V0dGVyXG4gICAgICAsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIHNob3VsZCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogIyMjIC5mYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSwgW29wZXJhdG9yXSlcbiAgICAgKlxuICAgICAqIFRocm93IGEgZmFpbHVyZS5cbiAgICAgKlxuICAgICAqIEBuYW1lIGZhaWxcbiAgICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wZXJhdG9yXG4gICAgICogQG5hbWVzcGFjZSBTaG91bGRcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuXG4gICAgc2hvdWxkLmZhaWwgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgb3BlcmF0b3IpIHtcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdzaG91bGQuZmFpbCgpJztcbiAgICAgIHRocm93IG5ldyBjaGFpLkFzc2VydGlvbkVycm9yKG1lc3NhZ2UsIHtcbiAgICAgICAgICBhY3R1YWw6IGFjdHVhbFxuICAgICAgICAsIGV4cGVjdGVkOiBleHBlY3RlZFxuICAgICAgICAsIG9wZXJhdG9yOiBvcGVyYXRvclxuICAgICAgfSwgc2hvdWxkLmZhaWwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAjIyMgLmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSlcbiAgICAgKlxuICAgICAqIEFzc2VydHMgbm9uLXN0cmljdCBlcXVhbGl0eSAoYD09YCkgb2YgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAuXG4gICAgICpcbiAgICAgKiAgICAgc2hvdWxkLmVxdWFsKDMsICczJywgJz09IGNvZXJjZXMgdmFsdWVzIHRvIHN0cmluZ3MnKTtcbiAgICAgKlxuICAgICAqIEBuYW1lIGVxdWFsXG4gICAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBuYW1lc3BhY2UgU2hvdWxkXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cblxuICAgIHNob3VsZC5lcXVhbCA9IGZ1bmN0aW9uICh2YWwxLCB2YWwyLCBtc2cpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24odmFsMSwgbXNnKS50by5lcXVhbCh2YWwyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIyMjIC50aHJvdyhmdW5jdGlvbiwgW2NvbnN0cnVjdG9yL3N0cmluZy9yZWdleHBdLCBbc3RyaW5nL3JlZ2V4cF0sIFttZXNzYWdlXSlcbiAgICAgKlxuICAgICAqIEFzc2VydHMgdGhhdCBgZnVuY3Rpb25gIHdpbGwgdGhyb3cgYW4gZXJyb3IgdGhhdCBpcyBhbiBpbnN0YW5jZSBvZlxuICAgICAqIGBjb25zdHJ1Y3RvcmAsIG9yIGFsdGVybmF0ZWx5IHRoYXQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciB3aXRoIG1lc3NhZ2VcbiAgICAgKiBtYXRjaGluZyBgcmVnZXhwYC5cbiAgICAgKlxuICAgICAqICAgICBzaG91bGQudGhyb3coZm4sICdmdW5jdGlvbiB0aHJvd3MgYSByZWZlcmVuY2UgZXJyb3InKTtcbiAgICAgKiAgICAgc2hvdWxkLnRocm93KGZuLCAvZnVuY3Rpb24gdGhyb3dzIGEgcmVmZXJlbmNlIGVycm9yLyk7XG4gICAgICogICAgIHNob3VsZC50aHJvdyhmbiwgUmVmZXJlbmNlRXJyb3IpO1xuICAgICAqICAgICBzaG91bGQudGhyb3coZm4sIFJlZmVyZW5jZUVycm9yLCAnZnVuY3Rpb24gdGhyb3dzIGEgcmVmZXJlbmNlIGVycm9yJyk7XG4gICAgICogICAgIHNob3VsZC50aHJvdyhmbiwgUmVmZXJlbmNlRXJyb3IsIC9mdW5jdGlvbiB0aHJvd3MgYSByZWZlcmVuY2UgZXJyb3IvKTtcbiAgICAgKlxuICAgICAqIEBuYW1lIHRocm93XG4gICAgICogQGFsaWFzIFRocm93XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Vycm9yQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNFcnJvcl90eXBlc1xuICAgICAqIEBuYW1lc3BhY2UgU2hvdWxkXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cblxuICAgIHNob3VsZC5UaHJvdyA9IGZ1bmN0aW9uIChmbiwgZXJydCwgZXJycywgbXNnKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKGZuLCBtc2cpLnRvLlRocm93KGVycnQsIGVycnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAjIyMgLmV4aXN0XG4gICAgICpcbiAgICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBuZWl0aGVyIGBudWxsYCBub3IgYHVuZGVmaW5lZGAuXG4gICAgICpcbiAgICAgKiAgICAgdmFyIGZvbyA9ICdoaSc7XG4gICAgICpcbiAgICAgKiAgICAgc2hvdWxkLmV4aXN0KGZvbywgJ2ZvbyBleGlzdHMnKTtcbiAgICAgKlxuICAgICAqIEBuYW1lIGV4aXN0XG4gICAgICogQG5hbWVzcGFjZSBTaG91bGRcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuXG4gICAgc2hvdWxkLmV4aXN0ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5leGlzdDtcbiAgICB9XG5cbiAgICAvLyBuZWdhdGlvblxuICAgIHNob3VsZC5ub3QgPSB7fVxuXG4gICAgLyoqXG4gICAgICogIyMjIC5ub3QuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdKVxuICAgICAqXG4gICAgICogQXNzZXJ0cyBub24tc3RyaWN0IGluZXF1YWxpdHkgKGAhPWApIG9mIGBhY3R1YWxgIGFuZCBgZXhwZWN0ZWRgLlxuICAgICAqXG4gICAgICogICAgIHNob3VsZC5ub3QuZXF1YWwoMywgNCwgJ3RoZXNlIG51bWJlcnMgYXJlIG5vdCBlcXVhbCcpO1xuICAgICAqXG4gICAgICogQG5hbWUgbm90LmVxdWFsXG4gICAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBuYW1lc3BhY2UgU2hvdWxkXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cblxuICAgIHNob3VsZC5ub3QuZXF1YWwgPSBmdW5jdGlvbiAodmFsMSwgdmFsMiwgbXNnKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKHZhbDEsIG1zZykudG8ubm90LmVxdWFsKHZhbDIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAjIyMgLnRocm93KGZ1bmN0aW9uLCBbY29uc3RydWN0b3IvcmVnZXhwXSwgW21lc3NhZ2VdKVxuICAgICAqXG4gICAgICogQXNzZXJ0cyB0aGF0IGBmdW5jdGlvbmAgd2lsbCBfbm90XyB0aHJvdyBhbiBlcnJvciB0aGF0IGlzIGFuIGluc3RhbmNlIG9mXG4gICAgICogYGNvbnN0cnVjdG9yYCwgb3IgYWx0ZXJuYXRlbHkgdGhhdCBpdCB3aWxsIG5vdCB0aHJvdyBhbiBlcnJvciB3aXRoIG1lc3NhZ2VcbiAgICAgKiBtYXRjaGluZyBgcmVnZXhwYC5cbiAgICAgKlxuICAgICAqICAgICBzaG91bGQubm90LnRocm93KGZuLCBFcnJvciwgJ2Z1bmN0aW9uIGRvZXMgbm90IHRocm93Jyk7XG4gICAgICpcbiAgICAgKiBAbmFtZSBub3QudGhyb3dcbiAgICAgKiBAYWxpYXMgbm90LlRocm93XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Vycm9yQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNFcnJvcl90eXBlc1xuICAgICAqIEBuYW1lc3BhY2UgU2hvdWxkXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cblxuICAgIHNob3VsZC5ub3QuVGhyb3cgPSBmdW5jdGlvbiAoZm4sIGVycnQsIGVycnMsIG1zZykge1xuICAgICAgbmV3IEFzc2VydGlvbihmbiwgbXNnKS50by5ub3QuVGhyb3coZXJydCwgZXJycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICMjIyAubm90LmV4aXN0XG4gICAgICpcbiAgICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBuZWl0aGVyIGBudWxsYCBub3IgYHVuZGVmaW5lZGAuXG4gICAgICpcbiAgICAgKiAgICAgdmFyIGJhciA9IG51bGw7XG4gICAgICpcbiAgICAgKiAgICAgc2hvdWxkLm5vdC5leGlzdChiYXIsICdiYXIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgKlxuICAgICAqIEBuYW1lIG5vdC5leGlzdFxuICAgICAqIEBuYW1lc3BhY2UgU2hvdWxkXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cblxuICAgIHNob3VsZC5ub3QuZXhpc3QgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5leGlzdDtcbiAgICB9XG5cbiAgICBzaG91bGRbJ3Rocm93J10gPSBzaG91bGRbJ1Rocm93J107XG4gICAgc2hvdWxkLm5vdFsndGhyb3cnXSA9IHNob3VsZC5ub3RbJ1Rocm93J107XG5cbiAgICByZXR1cm4gc2hvdWxkO1xuICB9O1xuXG4gIGNoYWkuc2hvdWxkID0gbG9hZFNob3VsZDtcbiAgY2hhaS5TaG91bGQgPSBsb2FkU2hvdWxkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL2ludGVyZmFjZS9zaG91bGQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogQ2hhaSAtIGFkZENoYWluaW5nTWV0aG9kIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKiFcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgdHJhbnNmZXJGbGFncyA9IHJlcXVpcmUoJy4vdHJhbnNmZXJGbGFncycpO1xudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuLyohXG4gKiBNb2R1bGUgdmFyaWFibGVzXG4gKi9cblxuLy8gQ2hlY2sgd2hldGhlciBgX19wcm90b19fYCBpcyBzdXBwb3J0ZWRcbnZhciBoYXNQcm90b1N1cHBvcnQgPSAnX19wcm90b19fJyBpbiBPYmplY3Q7XG5cbi8vIFdpdGhvdXQgYF9fcHJvdG9fX2Agc3VwcG9ydCwgdGhpcyBtb2R1bGUgd2lsbCBuZWVkIHRvIGFkZCBwcm9wZXJ0aWVzIHRvIGEgZnVuY3Rpb24uXG4vLyBIb3dldmVyLCBzb21lIEZ1bmN0aW9uLnByb3RvdHlwZSBtZXRob2RzIGNhbm5vdCBiZSBvdmVyd3JpdHRlbixcbi8vIGFuZCB0aGVyZSBzZWVtcyBubyBlYXN5IGNyb3NzLXBsYXRmb3JtIHdheSB0byBkZXRlY3QgdGhlbSAoQHNlZSBjaGFpanMvY2hhaS9pc3N1ZXMvNjkpLlxudmFyIGV4Y2x1ZGVOYW1lcyA9IC9eKD86bGVuZ3RofG5hbWV8YXJndW1lbnRzfGNhbGxlcikkLztcblxuLy8gQ2FjaGUgYEZ1bmN0aW9uYCBwcm9wZXJ0aWVzXG52YXIgY2FsbCAgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCxcbiAgICBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLyoqXG4gKiAjIyMgYWRkQ2hhaW5hYmxlTWV0aG9kIChjdHgsIG5hbWUsIG1ldGhvZCwgY2hhaW5pbmdCZWhhdmlvcilcbiAqXG4gKiBBZGRzIGEgbWV0aG9kIHRvIGFuIG9iamVjdCwgc3VjaCB0aGF0IHRoZSBtZXRob2QgY2FuIGFsc28gYmUgY2hhaW5lZC5cbiAqXG4gKiAgICAgdXRpbHMuYWRkQ2hhaW5hYmxlTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2ZvbycsIGZ1bmN0aW9uIChzdHIpIHtcbiAqICAgICAgIHZhciBvYmogPSB1dGlscy5mbGFnKHRoaXMsICdvYmplY3QnKTtcbiAqICAgICAgIG5ldyBjaGFpLkFzc2VydGlvbihvYmopLnRvLmJlLmVxdWFsKHN0cik7XG4gKiAgICAgfSk7XG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2ZvbycsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKTtcbiAqXG4gKiBUaGUgcmVzdWx0IGNhbiB0aGVuIGJlIHVzZWQgYXMgYm90aCBhIG1ldGhvZCBhc3NlcnRpb24sIGV4ZWN1dGluZyBib3RoIGBtZXRob2RgIGFuZFxuICogYGNoYWluaW5nQmVoYXZpb3JgLCBvciBhcyBhIGxhbmd1YWdlIGNoYWluLCB3aGljaCBvbmx5IGV4ZWN1dGVzIGBjaGFpbmluZ0JlaGF2aW9yYC5cbiAqXG4gKiAgICAgZXhwZWN0KGZvb1N0cikudG8uYmUuZm9vKCdiYXInKTtcbiAqICAgICBleHBlY3QoZm9vU3RyKS50by5iZS5mb28uZXF1YWwoJ2ZvbycpO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggb2JqZWN0IHRvIHdoaWNoIHRoZSBtZXRob2QgaXMgYWRkZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIG1ldGhvZCB0byBhZGRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZCBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBgbmFtZWAsIHdoZW4gY2FsbGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGFpbmluZ0JlaGF2aW9yIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgYWRkQ2hhaW5hYmxlTWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgbWV0aG9kLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gIGlmICh0eXBlb2YgY2hhaW5pbmdCZWhhdmlvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoYWluaW5nQmVoYXZpb3IgPSBmdW5jdGlvbiAoKSB7IH07XG4gIH1cblxuICB2YXIgY2hhaW5hYmxlQmVoYXZpb3IgPSB7XG4gICAgICBtZXRob2Q6IG1ldGhvZFxuICAgICwgY2hhaW5pbmdCZWhhdmlvcjogY2hhaW5pbmdCZWhhdmlvclxuICB9O1xuXG4gIC8vIHNhdmUgdGhlIG1ldGhvZHMgc28gd2UgY2FuIG92ZXJ3cml0ZSB0aGVtIGxhdGVyLCBpZiB3ZSBuZWVkIHRvLlxuICBpZiAoIWN0eC5fX21ldGhvZHMpIHtcbiAgICBjdHguX19tZXRob2RzID0ge307XG4gIH1cbiAgY3R4Ll9fbWV0aG9kc1tuYW1lXSA9IGNoYWluYWJsZUJlaGF2aW9yO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIG5hbWUsXG4gICAgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvci5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHZhciBhc3NlcnQgPSBmdW5jdGlvbiBhc3NlcnQoKSB7XG4gICAgICAgICAgdmFyIG9sZF9zc2ZpID0gZmxhZyh0aGlzLCAnc3NmaScpO1xuICAgICAgICAgIGlmIChvbGRfc3NmaSAmJiBjb25maWcuaW5jbHVkZVN0YWNrID09PSBmYWxzZSlcbiAgICAgICAgICAgIGZsYWcodGhpcywgJ3NzZmknLCBhc3NlcnQpO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjaGFpbmFibGVCZWhhdmlvci5tZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVzZSBgX19wcm90b19fYCBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKGhhc1Byb3RvU3VwcG9ydCkge1xuICAgICAgICAgIC8vIEluaGVyaXQgYWxsIHByb3BlcnRpZXMgZnJvbSB0aGUgb2JqZWN0IGJ5IHJlcGxhY2luZyB0aGUgYEZ1bmN0aW9uYCBwcm90b3R5cGVcbiAgICAgICAgICB2YXIgcHJvdG90eXBlID0gYXNzZXJ0Ll9fcHJvdG9fXyA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgYGNhbGxgIGFuZCBgYXBwbHlgIG1ldGhvZHMgZnJvbSBgRnVuY3Rpb25gXG4gICAgICAgICAgcHJvdG90eXBlLmNhbGwgPSBjYWxsO1xuICAgICAgICAgIHByb3RvdHlwZS5hcHBseSA9IGFwcGx5O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmVkZWZpbmUgYWxsIHByb3BlcnRpZXMgKHNsb3chKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYXNzZXJ0ZXJOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN0eCk7XG4gICAgICAgICAgYXNzZXJ0ZXJOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NlcnRlck5hbWUpIHtcbiAgICAgICAgICAgIGlmICghZXhjbHVkZU5hbWVzLnRlc3QoYXNzZXJ0ZXJOYW1lKSkge1xuICAgICAgICAgICAgICB2YXIgcGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN0eCwgYXNzZXJ0ZXJOYW1lKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFzc2VydCwgYXNzZXJ0ZXJOYW1lLCBwZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2ZlckZsYWdzKHRoaXMsIGFzc2VydCk7XG4gICAgICAgIHJldHVybiBhc3NlcnQ7XG4gICAgICB9XG4gICAgLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvYWRkQ2hhaW5hYmxlTWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBhZGRNZXRob2QgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuLyoqXG4gKiAjIyMgLmFkZE1ldGhvZCAoY3R4LCBuYW1lLCBtZXRob2QpXG4gKlxuICogQWRkcyBhIG1ldGhvZCB0byB0aGUgcHJvdG90eXBlIG9mIGFuIG9iamVjdC5cbiAqXG4gKiAgICAgdXRpbHMuYWRkTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2ZvbycsIGZ1bmN0aW9uIChzdHIpIHtcbiAqICAgICAgIHZhciBvYmogPSB1dGlscy5mbGFnKHRoaXMsICdvYmplY3QnKTtcbiAqICAgICAgIG5ldyBjaGFpLkFzc2VydGlvbihvYmopLnRvLmJlLmVxdWFsKHN0cik7XG4gKiAgICAgfSk7XG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5hZGRNZXRob2QoJ2ZvbycsIGZuKTtcbiAqXG4gKiBUaGVuIGNhbiBiZSB1c2VkIGFzIGFueSBvdGhlciBhc3NlcnRpb24uXG4gKlxuICogICAgIGV4cGVjdChmb29TdHIpLnRvLmJlLmZvbygnYmFyJyk7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGN0eCBvYmplY3QgdG8gd2hpY2ggdGhlIG1ldGhvZCBpcyBhZGRlZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgbWV0aG9kIHRvIGFkZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWV0aG9kIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIG5hbWVcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBuYW1lIGFkZE1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBuYW1lLCBtZXRob2QpIHtcbiAgY3R4W25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvbGRfc3NmaSA9IGZsYWcodGhpcywgJ3NzZmknKTtcbiAgICBpZiAob2xkX3NzZmkgJiYgY29uZmlnLmluY2x1ZGVTdGFjayA9PT0gZmFsc2UpXG4gICAgICBmbGFnKHRoaXMsICdzc2ZpJywgY3R4W25hbWVdKTtcbiAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9hZGRNZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogQ2hhaSAtIGFkZFByb3BlcnR5IHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG52YXIgZmxhZyA9IHJlcXVpcmUoJy4vZmxhZycpO1xuXG4vKipcbiAqICMjIyBhZGRQcm9wZXJ0eSAoY3R4LCBuYW1lLCBnZXR0ZXIpXG4gKlxuICogQWRkcyBhIHByb3BlcnR5IHRvIHRoZSBwcm90b3R5cGUgb2YgYW4gb2JqZWN0LlxuICpcbiAqICAgICB1dGlscy5hZGRQcm9wZXJ0eShjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUsICdmb28nLCBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICB2YXIgb2JqID0gdXRpbHMuZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gKiAgICAgICBuZXcgY2hhaS5Bc3NlcnRpb24ob2JqKS50by5iZS5pbnN0YW5jZW9mKEZvbyk7XG4gKiAgICAgfSk7XG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnZm9vJywgZm4pO1xuICpcbiAqIFRoZW4gY2FuIGJlIHVzZWQgYXMgYW55IG90aGVyIGFzc2VydGlvbi5cbiAqXG4gKiAgICAgZXhwZWN0KG15Rm9vKS50by5iZS5mb287XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGN0eCBvYmplY3QgdG8gd2hpY2ggdGhlIHByb3BlcnR5IGlzIGFkZGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiBwcm9wZXJ0eSB0byBhZGRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldHRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBuYW1lXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBhZGRQcm9wZXJ0eVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgsIG5hbWUsIGdldHRlcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBuYW1lLFxuICAgIHsgZ2V0OiBmdW5jdGlvbiBhZGRQcm9wZXJ0eSgpIHtcbiAgICAgICAgdmFyIG9sZF9zc2ZpID0gZmxhZyh0aGlzLCAnc3NmaScpO1xuICAgICAgICBpZiAob2xkX3NzZmkgJiYgY29uZmlnLmluY2x1ZGVTdGFjayA9PT0gZmFsc2UpXG4gICAgICAgICAgZmxhZyh0aGlzLCAnc3NmaScsIGFkZFByb3BlcnR5KTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvYWRkUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogQ2hhaSAtIGV4cGVjdFR5cGVzIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyBleHBlY3RUeXBlcyhvYmosIHR5cGVzKVxuICpcbiAqIEVuc3VyZXMgdGhhdCB0aGUgb2JqZWN0IGJlaW5nIHRlc3RlZCBhZ2FpbnN0IGlzIG9mIGEgdmFsaWQgdHlwZS5cbiAqXG4gKiAgICAgdXRpbHMuZXhwZWN0VHlwZXModGhpcywgWydhcnJheScsICdvYmplY3QnLCAnc3RyaW5nJ10pO1xuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9iaiBjb25zdHJ1Y3RlZCBBc3NlcnRpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHR5cGUgQSBsaXN0IG9mIGFsbG93ZWQgdHlwZXMgZm9yIHRoaXMgYXNzZXJ0aW9uXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBleHBlY3RUeXBlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG52YXIgQXNzZXJ0aW9uRXJyb3IgPSByZXF1aXJlKCdhc3NlcnRpb24tZXJyb3InKTtcbnZhciBmbGFnID0gcmVxdWlyZSgnLi9mbGFnJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUtZGV0ZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgdHlwZXMpIHtcbiAgdmFyIG9iaiA9IGZsYWcob2JqLCAnb2JqZWN0Jyk7XG4gIHR5cGVzID0gdHlwZXMubWFwKGZ1bmN0aW9uICh0KSB7IHJldHVybiB0LnRvTG93ZXJDYXNlKCk7IH0pO1xuICB0eXBlcy5zb3J0KCk7XG5cbiAgLy8gVHJhbnNmb3JtcyBbJ2xvcmVtJywgJ2lwc3VtJ10gaW50byAnYSBsaXJ1bSwgb3IgYW4gaXBzdW0nXG4gIHZhciBzdHIgPSB0eXBlcy5tYXAoZnVuY3Rpb24gKHQsIGluZGV4KSB7XG4gICAgdmFyIGFydCA9IH5bICdhJywgJ2UnLCAnaScsICdvJywgJ3UnIF0uaW5kZXhPZih0LmNoYXJBdCgwKSkgPyAnYW4nIDogJ2EnO1xuICAgIHZhciBvciA9IHR5cGVzLmxlbmd0aCA+IDEgJiYgaW5kZXggPT09IHR5cGVzLmxlbmd0aCAtIDEgPyAnb3IgJyA6ICcnO1xuICAgIHJldHVybiBvciArIGFydCArICcgJyArIHQ7XG4gIH0pLmpvaW4oJywgJyk7XG5cbiAgaWYgKCF0eXBlcy5zb21lKGZ1bmN0aW9uIChleHBlY3RlZCkgeyByZXR1cm4gdHlwZShvYmopID09PSBleHBlY3RlZDsgfSkpIHtcbiAgICB0aHJvdyBuZXcgQXNzZXJ0aW9uRXJyb3IoXG4gICAgICAnb2JqZWN0IHRlc3RlZCBtdXN0IGJlICcgKyBzdHIgKyAnLCBidXQgJyArIHR5cGUob2JqKSArICcgZ2l2ZW4nXG4gICAgKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2V4cGVjdFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBnZXRFbnVtZXJhYmxlUHJvcGVydGllcyB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiAjIyMgLmdldEVudW1lcmFibGVQcm9wZXJ0aWVzKG9iamVjdClcbiAqXG4gKiBUaGlzIGFsbG93cyB0aGUgcmV0cmlldmFsIG9mIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LFxuICogaW5oZXJpdGVkIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBnZXRFbnVtZXJhYmxlUHJvcGVydGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEVudW1lcmFibGVQcm9wZXJ0aWVzKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgcmVzdWx0LnB1c2gobmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9nZXRFbnVtZXJhYmxlUHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gbWVzc2FnZSBjb21wb3NpdGlvbiB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kYW5jaWVzXG4gKi9cblxudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKVxuICAsIGdldEFjdHVhbCA9IHJlcXVpcmUoJy4vZ2V0QWN0dWFsJylcbiAgLCBpbnNwZWN0ID0gcmVxdWlyZSgnLi9pbnNwZWN0JylcbiAgLCBvYmpEaXNwbGF5ID0gcmVxdWlyZSgnLi9vYmpEaXNwbGF5Jyk7XG5cbi8qKlxuICogIyMjIC5nZXRNZXNzYWdlKG9iamVjdCwgbWVzc2FnZSwgbmVnYXRlTWVzc2FnZSlcbiAqXG4gKiBDb25zdHJ1Y3QgdGhlIGVycm9yIG1lc3NhZ2UgYmFzZWQgb24gZmxhZ3NcbiAqIGFuZCB0ZW1wbGF0ZSB0YWdzLiBUZW1wbGF0ZSB0YWdzIHdpbGwgcmV0dXJuXG4gKiBhIHN0cmluZ2lmaWVkIGluc3BlY3Rpb24gb2YgdGhlIG9iamVjdCByZWZlcmVuY2VkLlxuICpcbiAqIE1lc3NhZ2UgdGVtcGxhdGUgdGFnczpcbiAqIC0gYCN7dGhpc31gIGN1cnJlbnQgYXNzZXJ0ZWQgb2JqZWN0XG4gKiAtIGAje2FjdH1gIGFjdHVhbCB2YWx1ZVxuICogLSBgI3tleHB9YCBleHBlY3RlZCB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgKGNvbnN0cnVjdGVkIEFzc2VydGlvbilcbiAqIEBwYXJhbSB7QXJndW1lbnRzfSBjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUuYXNzZXJ0IGFyZ3VtZW50c1xuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgZ2V0TWVzc2FnZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIGFyZ3MpIHtcbiAgdmFyIG5lZ2F0ZSA9IGZsYWcob2JqLCAnbmVnYXRlJylcbiAgICAsIHZhbCA9IGZsYWcob2JqLCAnb2JqZWN0JylcbiAgICAsIGV4cGVjdGVkID0gYXJnc1szXVxuICAgICwgYWN0dWFsID0gZ2V0QWN0dWFsKG9iaiwgYXJncylcbiAgICAsIG1zZyA9IG5lZ2F0ZSA/IGFyZ3NbMl0gOiBhcmdzWzFdXG4gICAgLCBmbGFnTXNnID0gZmxhZyhvYmosICdtZXNzYWdlJyk7XG5cbiAgaWYodHlwZW9mIG1zZyA9PT0gXCJmdW5jdGlvblwiKSBtc2cgPSBtc2coKTtcbiAgbXNnID0gbXNnIHx8ICcnO1xuICBtc2cgPSBtc2dcbiAgICAucmVwbGFjZSgvI1xce3RoaXNcXH0vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JqRGlzcGxheSh2YWwpOyB9KVxuICAgIC5yZXBsYWNlKC8jXFx7YWN0XFx9L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9iakRpc3BsYXkoYWN0dWFsKTsgfSlcbiAgICAucmVwbGFjZSgvI1xce2V4cFxcfS9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBvYmpEaXNwbGF5KGV4cGVjdGVkKTsgfSk7XG5cbiAgcmV0dXJuIGZsYWdNc2cgPyBmbGFnTXNnICsgJzogJyArIG1zZyA6IG1zZztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9nZXRNZXNzYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBnZXRQYXRoVmFsdWUgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2ljYWxwYXJhZG94L2ZpbHRyXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgZ2V0UGF0aEluZm8gPSByZXF1aXJlKCcuL2dldFBhdGhJbmZvJyk7XG5cbi8qKlxuICogIyMjIC5nZXRQYXRoVmFsdWUocGF0aCwgb2JqZWN0KVxuICpcbiAqIFRoaXMgYWxsb3dzIHRoZSByZXRyaWV2YWwgb2YgdmFsdWVzIGluIGFuXG4gKiBvYmplY3QgZ2l2ZW4gYSBzdHJpbmcgcGF0aC5cbiAqXG4gKiAgICAgdmFyIG9iaiA9IHtcbiAqICAgICAgICAgcHJvcDE6IHtcbiAqICAgICAgICAgICAgIGFycjogWydhJywgJ2InLCAnYyddXG4gKiAgICAgICAgICAgLCBzdHI6ICdIZWxsbydcbiAqICAgICAgICAgfVxuICogICAgICAgLCBwcm9wMjoge1xuICogICAgICAgICAgICAgYXJyOiBbIHsgbmVzdGVkOiAnVW5pdmVyc2UnIH0gXVxuICogICAgICAgICAgICwgc3RyOiAnSGVsbG8gYWdhaW4hJ1xuICogICAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgd291bGQgYmUgdGhlIHJlc3VsdHMuXG4gKlxuICogICAgIGdldFBhdGhWYWx1ZSgncHJvcDEuc3RyJywgb2JqKTsgLy8gSGVsbG9cbiAqICAgICBnZXRQYXRoVmFsdWUoJ3Byb3AxLmF0dFsyXScsIG9iaik7IC8vIGJcbiAqICAgICBnZXRQYXRoVmFsdWUoJ3Byb3AyLmFyclswXS5uZXN0ZWQnLCBvYmopOyAvLyBVbml2ZXJzZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSB2YWx1ZSBvciBgdW5kZWZpbmVkYFxuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgZ2V0UGF0aFZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHBhdGgsIG9iaikge1xuICB2YXIgaW5mbyA9IGdldFBhdGhJbmZvKHBhdGgsIG9iaik7XG4gIHJldHVybiBpbmZvLnZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL2dldFBhdGhWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gZ2V0UHJvcGVydGllcyB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiAjIyMgLmdldFByb3BlcnRpZXMob2JqZWN0KVxuICpcbiAqIFRoaXMgYWxsb3dzIHRoZSByZXRyaWV2YWwgb2YgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LCBlbnVtZXJhYmxlIG9yIG5vdCxcbiAqIGluaGVyaXRlZCBvciBub3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge0FycmF5fVxuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgZ2V0UHJvcGVydGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFByb3BlcnRpZXMob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpO1xuXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgd2hpbGUgKHByb3RvICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pLmZvckVhY2goYWRkUHJvcGVydHkpO1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0UHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBjaGFpXG4gKiBDb3B5cmlnaHQoYykgMjAxMSBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogTWFpbiBleHBvcnRzXG4gKi9cblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKiFcbiAqIHRlc3QgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMudGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpO1xuXG4vKiFcbiAqIHR5cGUgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMudHlwZSA9IHJlcXVpcmUoJ3R5cGUtZGV0ZWN0Jyk7XG5cbi8qIVxuICogZXhwZWN0VHlwZXMgdXRpbGl0eVxuICovXG5leHBvcnRzLmV4cGVjdFR5cGVzID0gcmVxdWlyZSgnLi9leHBlY3RUeXBlcycpO1xuXG4vKiFcbiAqIG1lc3NhZ2UgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMuZ2V0TWVzc2FnZSA9IHJlcXVpcmUoJy4vZ2V0TWVzc2FnZScpO1xuXG4vKiFcbiAqIGFjdHVhbCB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy5nZXRBY3R1YWwgPSByZXF1aXJlKCcuL2dldEFjdHVhbCcpO1xuXG4vKiFcbiAqIEluc3BlY3QgdXRpbFxuICovXG5cbmV4cG9ydHMuaW5zcGVjdCA9IHJlcXVpcmUoJy4vaW5zcGVjdCcpO1xuXG4vKiFcbiAqIE9iamVjdCBEaXNwbGF5IHV0aWxcbiAqL1xuXG5leHBvcnRzLm9iakRpc3BsYXkgPSByZXF1aXJlKCcuL29iakRpc3BsYXknKTtcblxuLyohXG4gKiBGbGFnIHV0aWxpdHlcbiAqL1xuXG5leHBvcnRzLmZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcblxuLyohXG4gKiBGbGFnIHRyYW5zZmVycmluZyB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy50cmFuc2ZlckZsYWdzID0gcmVxdWlyZSgnLi90cmFuc2ZlckZsYWdzJyk7XG5cbi8qIVxuICogRGVlcCBlcXVhbCB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy5lcWwgPSByZXF1aXJlKCdkZWVwLWVxbCcpO1xuXG4vKiFcbiAqIERlZXAgcGF0aCB2YWx1ZVxuICovXG5cbmV4cG9ydHMuZ2V0UGF0aFZhbHVlID0gcmVxdWlyZSgnLi9nZXRQYXRoVmFsdWUnKTtcblxuLyohXG4gKiBEZWVwIHBhdGggaW5mb1xuICovXG5cbmV4cG9ydHMuZ2V0UGF0aEluZm8gPSByZXF1aXJlKCcuL2dldFBhdGhJbmZvJyk7XG5cbi8qIVxuICogQ2hlY2sgaWYgYSBwcm9wZXJ0eSBleGlzdHNcbiAqL1xuXG5leHBvcnRzLmhhc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9oYXNQcm9wZXJ0eScpO1xuXG4vKiFcbiAqIEZ1bmN0aW9uIG5hbWVcbiAqL1xuXG5leHBvcnRzLmdldE5hbWUgPSByZXF1aXJlKCcuL2dldE5hbWUnKTtcblxuLyohXG4gKiBhZGQgUHJvcGVydHlcbiAqL1xuXG5leHBvcnRzLmFkZFByb3BlcnR5ID0gcmVxdWlyZSgnLi9hZGRQcm9wZXJ0eScpO1xuXG4vKiFcbiAqIGFkZCBNZXRob2RcbiAqL1xuXG5leHBvcnRzLmFkZE1ldGhvZCA9IHJlcXVpcmUoJy4vYWRkTWV0aG9kJyk7XG5cbi8qIVxuICogb3ZlcndyaXRlIFByb3BlcnR5XG4gKi9cblxuZXhwb3J0cy5vdmVyd3JpdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vb3ZlcndyaXRlUHJvcGVydHknKTtcblxuLyohXG4gKiBvdmVyd3JpdGUgTWV0aG9kXG4gKi9cblxuZXhwb3J0cy5vdmVyd3JpdGVNZXRob2QgPSByZXF1aXJlKCcuL292ZXJ3cml0ZU1ldGhvZCcpO1xuXG4vKiFcbiAqIEFkZCBhIGNoYWluYWJsZSBtZXRob2RcbiAqL1xuXG5leHBvcnRzLmFkZENoYWluYWJsZU1ldGhvZCA9IHJlcXVpcmUoJy4vYWRkQ2hhaW5hYmxlTWV0aG9kJyk7XG5cbi8qIVxuICogT3ZlcndyaXRlIGNoYWluYWJsZSBtZXRob2RcbiAqL1xuXG5leHBvcnRzLm92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCA9IHJlcXVpcmUoJy4vb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyBvdmVyd3JpdGVDaGFpbmFibGVNZXRob2QgKGN0eCwgbmFtZSwgbWV0aG9kLCBjaGFpbmluZ0JlaGF2aW9yKVxuICpcbiAqIE92ZXJ3aXRlcyBhbiBhbHJlYWR5IGV4aXN0aW5nIGNoYWluYWJsZSBtZXRob2RcbiAqIGFuZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIGZ1bmN0aW9uIG9yXG4gKiBwcm9wZXJ0eS4gIE11c3QgcmV0dXJuIGZ1bmN0aW9ucyB0byBiZSB1c2VkIGZvclxuICogbmFtZS5cbiAqXG4gKiAgICAgdXRpbHMub3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2xlbmd0aCcsXG4gKiAgICAgICBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gKiAgICAgICB9XG4gKiAgICAgLCBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gKiAgICAgICB9XG4gKiAgICAgKTtcbiAqXG4gKiBDYW4gYWxzbyBiZSBhY2Nlc3NlZCBkaXJlY3RseSBmcm9tIGBjaGFpLkFzc2VydGlvbmAuXG4gKlxuICogICAgIGNoYWkuQXNzZXJ0aW9uLm92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCgnZm9vJywgZm4sIGZuKTtcbiAqXG4gKiBUaGVuIGNhbiBiZSB1c2VkIGFzIGFueSBvdGhlciBhc3NlcnRpb24uXG4gKlxuICogICAgIGV4cGVjdChteUZvbykudG8uaGF2ZS5sZW5ndGgoMyk7XG4gKiAgICAgZXhwZWN0KG15Rm9vKS50by5oYXZlLmxlbmd0aC5hYm92ZSgzKTtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4IG9iamVjdCB3aG9zZSBtZXRob2QgLyBwcm9wZXJ0eSBpcyB0byBiZSBvdmVyd3JpdHRlblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgbWV0aG9kIC8gcHJvcGVydHkgdG8gb3ZlcndyaXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2QgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2hhaW5pbmdCZWhhdmlvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBwcm9wZXJ0eVxuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQG5hbWUgb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgbWV0aG9kLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gIHZhciBjaGFpbmFibGVCZWhhdmlvciA9IGN0eC5fX21ldGhvZHNbbmFtZV07XG5cbiAgdmFyIF9jaGFpbmluZ0JlaGF2aW9yID0gY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvcjtcbiAgY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gY2hhaW5pbmdCZWhhdmlvcihfY2hhaW5pbmdCZWhhdmlvcikuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICB9O1xuXG4gIHZhciBfbWV0aG9kID0gY2hhaW5hYmxlQmVoYXZpb3IubWV0aG9kO1xuICBjaGFpbmFibGVCZWhhdmlvci5tZXRob2QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG1ldGhvZChfbWV0aG9kKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBvdmVyd3JpdGVNZXRob2QgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyMjIG92ZXJ3cml0ZU1ldGhvZCAoY3R4LCBuYW1lLCBmbilcbiAqXG4gKiBPdmVyd2l0ZXMgYW4gYWxyZWFkeSBleGlzdGluZyBtZXRob2QgYW5kIHByb3ZpZGVzXG4gKiBhY2Nlc3MgdG8gcHJldmlvdXMgZnVuY3Rpb24uIE11c3QgcmV0dXJuIGZ1bmN0aW9uXG4gKiB0byBiZSB1c2VkIGZvciBuYW1lLlxuICpcbiAqICAgICB1dGlscy5vdmVyd3JpdGVNZXRob2QoY2hhaS5Bc3NlcnRpb24ucHJvdG90eXBlLCAnZXF1YWwnLCBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gKiAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikge1xuICogICAgICAgICB2YXIgb2JqID0gdXRpbHMuZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gKiAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBGb28pIHtcbiAqICAgICAgICAgICBuZXcgY2hhaS5Bc3NlcnRpb24ob2JqLnZhbHVlKS50by5lcXVhbChzdHIpO1xuICogICAgICAgICB9IGVsc2Uge1xuICogICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5vdmVyd3JpdGVNZXRob2QoJ2ZvbycsIGZuKTtcbiAqXG4gKiBUaGVuIGNhbiBiZSB1c2VkIGFzIGFueSBvdGhlciBhc3NlcnRpb24uXG4gKlxuICogICAgIGV4cGVjdChteUZvbykudG8uZXF1YWwoJ2JhcicpO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggb2JqZWN0IHdob3NlIG1ldGhvZCBpcyB0byBiZSBvdmVyd3JpdHRlblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgbWV0aG9kIHRvIG92ZXJ3cml0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWV0aG9kIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIG5hbWVcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBuYW1lIG92ZXJ3cml0ZU1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgsIG5hbWUsIG1ldGhvZCkge1xuICB2YXIgX21ldGhvZCA9IGN0eFtuYW1lXVxuICAgICwgX3N1cGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuICBpZiAoX21ldGhvZCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgX21ldGhvZClcbiAgICBfc3VwZXIgPSBfbWV0aG9kO1xuXG4gIGN0eFtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gbWV0aG9kKF9zdXBlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYWkvbGliL2NoYWkvdXRpbHMvb3ZlcndyaXRlTWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIENoYWkgLSBvdmVyd3JpdGVQcm9wZXJ0eSB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiAjIyMgb3ZlcndyaXRlUHJvcGVydHkgKGN0eCwgbmFtZSwgZm4pXG4gKlxuICogT3ZlcndpdGVzIGFuIGFscmVhZHkgZXhpc3RpbmcgcHJvcGVydHkgZ2V0dGVyIGFuZCBwcm92aWRlc1xuICogYWNjZXNzIHRvIHByZXZpb3VzIHZhbHVlLiBNdXN0IHJldHVybiBmdW5jdGlvbiB0byB1c2UgYXMgZ2V0dGVyLlxuICpcbiAqICAgICB1dGlscy5vdmVyd3JpdGVQcm9wZXJ0eShjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUsICdvaycsIGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAqICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICAgIHZhciBvYmogPSB1dGlscy5mbGFnKHRoaXMsICdvYmplY3QnKTtcbiAqICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEZvbykge1xuICogICAgICAgICAgIG5ldyBjaGFpLkFzc2VydGlvbihvYmoubmFtZSkudG8uZXF1YWwoJ2JhcicpO1xuICogICAgICAgICB9IGVsc2Uge1xuICogICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICpcbiAqIENhbiBhbHNvIGJlIGFjY2Vzc2VkIGRpcmVjdGx5IGZyb20gYGNoYWkuQXNzZXJ0aW9uYC5cbiAqXG4gKiAgICAgY2hhaS5Bc3NlcnRpb24ub3ZlcndyaXRlUHJvcGVydHkoJ2ZvbycsIGZuKTtcbiAqXG4gKiBUaGVuIGNhbiBiZSB1c2VkIGFzIGFueSBvdGhlciBhc3NlcnRpb24uXG4gKlxuICogICAgIGV4cGVjdChteUZvbykudG8uYmUub2s7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGN0eCBvYmplY3Qgd2hvc2UgcHJvcGVydHkgaXMgdG8gYmUgb3ZlcndyaXR0ZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHByb3BlcnR5IHRvIG92ZXJ3cml0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGdldHRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBuYW1lXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAbmFtZSBvdmVyd3JpdGVQcm9wZXJ0eVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgsIG5hbWUsIGdldHRlcikge1xuICB2YXIgX2dldCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3R4LCBuYW1lKVxuICAgICwgX3N1cGVyID0gZnVuY3Rpb24gKCkge307XG5cbiAgaWYgKF9nZXQgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIF9nZXQuZ2V0KVxuICAgIF9zdXBlciA9IF9nZXQuZ2V0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0eCwgbmFtZSxcbiAgICB7IGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0dGVyKF9zdXBlcikuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaS9saWIvY2hhaS91dGlscy9vdmVyd3JpdGVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBDaGFpIC0gdGVzdCB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kYW5jaWVzXG4gKi9cblxudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcblxuLyoqXG4gKiAjIHRlc3Qob2JqZWN0LCBleHByZXNzaW9uKVxuICpcbiAqIFRlc3QgYW5kIG9iamVjdCBmb3IgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IChjb25zdHJ1Y3RlZCBBc3NlcnRpb24pXG4gKiBAcGFyYW0ge0FyZ3VtZW50c30gY2hhaS5Bc3NlcnRpb24ucHJvdG90eXBlLmFzc2VydCBhcmd1bWVudHNcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBuYW1lIHRlc3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIGFyZ3MpIHtcbiAgdmFyIG5lZ2F0ZSA9IGZsYWcob2JqLCAnbmVnYXRlJylcbiAgICAsIGV4cHIgPSBhcmdzWzBdO1xuICByZXR1cm4gbmVnYXRlID8gIWV4cHIgOiBleHByO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jaGFpL2xpYi9jaGFpL3V0aWxzL3Rlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvZXFsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVlcC1lcWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogZGVlcC1lcWxcbiAqIENvcHlyaWdodChjKSAyMDEzIEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlLWRldGVjdCcpO1xuXG4vKiFcbiAqIEJ1ZmZlci5pc0J1ZmZlciBicm93c2VyIHNoaW1cbiAqL1xuXG52YXIgQnVmZmVyO1xudHJ5IHsgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyOyB9XG5jYXRjaChleCkge1xuICBCdWZmZXIgPSB7fTtcbiAgQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfVxufVxuXG4vKiFcbiAqIFByaW1hcnkgRXhwb3J0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwRXF1YWw7XG5cbi8qKlxuICogQXNzZXJ0IHN1cGVyLXN0cmljdCAoZWdhbCkgZXF1YWxpdHkgYmV0d2VlblxuICogdHdvIG9iamVjdHMgb2YgYW55IHR5cGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYVxuICogQHBhcmFtIHtNaXhlZH0gYlxuICogQHBhcmFtIHtBcnJheX0gbWVtb2lzZWQgKG9wdGlvbmFsKVxuICogQHJldHVybiB7Qm9vbGVhbn0gZXF1YWwgbWF0Y2hcbiAqL1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYiwgbSkge1xuICBpZiAoc2FtZVZhbHVlKGEsIGIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoJ2RhdGUnID09PSB0eXBlKGEpKSB7XG4gICAgcmV0dXJuIGRhdGVFcXVhbChhLCBiKTtcbiAgfSBlbHNlIGlmICgncmVnZXhwJyA9PT0gdHlwZShhKSkge1xuICAgIHJldHVybiByZWdleHBFcXVhbChhLCBiKTtcbiAgfSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYSkpIHtcbiAgICByZXR1cm4gYnVmZmVyRXF1YWwoYSwgYik7XG4gIH0gZWxzZSBpZiAoJ2FyZ3VtZW50cycgPT09IHR5cGUoYSkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzRXF1YWwoYSwgYiwgbSk7XG4gIH0gZWxzZSBpZiAoIXR5cGVFcXVhbChhLCBiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICgoJ29iamVjdCcgIT09IHR5cGUoYSkgJiYgJ29iamVjdCcgIT09IHR5cGUoYikpXG4gICYmICgnYXJyYXknICE9PSB0eXBlKGEpICYmICdhcnJheScgIT09IHR5cGUoYikpKSB7XG4gICAgcmV0dXJuIHNhbWVWYWx1ZShhLCBiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqZWN0RXF1YWwoYSwgYiwgbSk7XG4gIH1cbn1cblxuLyohXG4gKiBTdHJpY3QgKGVnYWwpIGVxdWFsaXR5IHRlc3QuIEVuc3VyZXMgdGhhdCBOYU4gYWx3YXlzXG4gKiBlcXVhbHMgTmFOIGFuZCBgLTBgIGRvZXMgbm90IGVxdWFsIGArMGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYVxuICogQHBhcmFtIHtNaXhlZH0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gZXF1YWwgbWF0Y2hcbiAqL1xuXG5mdW5jdGlvbiBzYW1lVmFsdWUoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuXG4vKiFcbiAqIENvbXBhcmUgdGhlIHR5cGVzIG9mIHR3byBnaXZlbiBvYmplY3RzIGFuZFxuICogcmV0dXJuIGlmIHRoZXkgYXJlIGVxdWFsLiBOb3RlIHRoYXQgYW4gQXJyYXlcbiAqIGhhcyBhIHR5cGUgb2YgYGFycmF5YCAobm90IGBvYmplY3RgKSBhbmQgYXJndW1lbnRzXG4gKiBoYXZlIGEgdHlwZSBvZiBgYXJndW1lbnRzYCAobm90IGBhcnJheWAvYG9iamVjdGApLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFcbiAqIEBwYXJhbSB7TWl4ZWR9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICovXG5cbmZ1bmN0aW9uIHR5cGVFcXVhbChhLCBiKSB7XG4gIHJldHVybiB0eXBlKGEpID09PSB0eXBlKGIpO1xufVxuXG4vKiFcbiAqIENvbXBhcmUgdHdvIERhdGUgb2JqZWN0cyBieSBhc3NlcnRpbmcgdGhhdFxuICogdGhlIHRpbWUgdmFsdWVzIGFyZSBlcXVhbCB1c2luZyBgc2F2ZVZhbHVlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGFcbiAqIEBwYXJhbSB7RGF0ZX0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gZGF0ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKCdkYXRlJyAhPT0gdHlwZShiKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gc2FtZVZhbHVlKGEuZ2V0VGltZSgpLCBiLmdldFRpbWUoKSk7XG59XG5cbi8qIVxuICogQ29tcGFyZSB0d28gcmVndWxhciBleHByZXNzaW9ucyBieSBjb252ZXJ0aW5nIHRoZW1cbiAqIHRvIHN0cmluZyBhbmQgY2hlY2tpbmcgZm9yIGBzYW1lVmFsdWVgLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSBhXG4gKiBAcGFyYW0ge1JlZ0V4cH0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gcmVnZXhwRXF1YWwoYSwgYikge1xuICBpZiAoJ3JlZ2V4cCcgIT09IHR5cGUoYikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHNhbWVWYWx1ZShhLnRvU3RyaW5nKCksIGIudG9TdHJpbmcoKSk7XG59XG5cbi8qIVxuICogQXNzZXJ0IGRlZXAgZXF1YWxpdHkgb2YgdHdvIGBhcmd1bWVudHNgIG9iamVjdHMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGVzZSBtdXN0IGJlIHNsaWNlZCB0byBhcnJheXNcbiAqIHByaW9yIHRvIHRlc3QgdG8gZW5zdXJlIG5vIGJhZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge0FyZ3VtZW50c30gYVxuICogQHBhcmFtIHtBcmd1bWVudHN9IGJcbiAqIEBwYXJhbSB7QXJyYXl9IG1lbW9pemUgKG9wdGlvbmFsKVxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gYXJndW1lbnRzRXF1YWwoYSwgYiwgbSkge1xuICBpZiAoJ2FyZ3VtZW50cycgIT09IHR5cGUoYikpIHJldHVybiBmYWxzZTtcbiAgYSA9IFtdLnNsaWNlLmNhbGwoYSk7XG4gIGIgPSBbXS5zbGljZS5jYWxsKGIpO1xuICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG0pO1xufVxuXG4vKiFcbiAqIEdldCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge0FycmF5fSBwcm9wZXJ0eSBuYW1lc1xuICovXG5cbmZ1bmN0aW9uIGVudW1lcmFibGUoYSkge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBhKSByZXMucHVzaChrZXkpO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKiFcbiAqIFNpbXBsZSBlcXVhbGl0eSBmb3IgZmxhdCBpdGVyYWJsZSBvYmplY3RzXG4gKiBzdWNoIGFzIEFycmF5cyBvciBOb2RlLmpzIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHBhcmFtIHtJdGVyYWJsZX0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gaXRlcmFibGVFcXVhbChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gIGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgbWF0Y2ggPSB0cnVlO1xuXG4gIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vKiFcbiAqIEV4dGVuc2lvbiB0byBgaXRlcmFibGVFcXVhbGAgc3BlY2lmaWNhbGx5XG4gKiBmb3IgTm9kZS5qcyBCdWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBhXG4gKiBAcGFyYW0ge01peGVkfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAqL1xuXG5mdW5jdGlvbiBidWZmZXJFcXVhbChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpdGVyYWJsZUVxdWFsKGEsIGIpO1xufVxuXG4vKiFcbiAqIEJsb2NrIGZvciBgb2JqZWN0RXF1YWxgIGVuc3VyaW5nIG5vbi1leGlzdGluZ1xuICogdmFsdWVzIGRvbid0IGdldCBpbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsdWUoYSkge1xuICByZXR1cm4gYSAhPT0gbnVsbCAmJiBhICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qIVxuICogUmVjdXJzaXZlbHkgY2hlY2sgdGhlIGVxdWFsaXR5IG9mIHR3byBvYmplY3RzLlxuICogT25jZSBiYXNpYyBzYW1lbmVzcyBoYXMgYmVlbiBlc3RhYmxpc2hlZCBpdCB3aWxsXG4gKiBkZWZlciB0byBgZGVlcEVxdWFsYCBmb3IgZWFjaCBlbnVtZXJhYmxlIGtleVxuICogaW4gdGhlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhXG4gKiBAcGFyYW0ge01peGVkfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RFcXVhbChhLCBiLCBtKSB7XG4gIGlmICghaXNWYWx1ZShhKSB8fCAhaXNWYWx1ZShiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaTtcbiAgaWYgKG0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKChtW2ldWzBdID09PSBhICYmIG1baV1bMV0gPT09IGIpXG4gICAgICB8fCAgKG1baV1bMF0gPT09IGIgJiYgbVtpXVsxXSA9PT0gYSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG0gPSBbXTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGthID0gZW51bWVyYWJsZShhKTtcbiAgICB2YXIga2IgPSBlbnVtZXJhYmxlKGIpO1xuICB9IGNhdGNoIChleCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuXG4gIGlmICghaXRlcmFibGVFcXVhbChrYSwga2IpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbS5wdXNoKFsgYSwgYiBdKTtcblxuICB2YXIga2V5O1xuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBtKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZXAtZXFsL2xpYi9lcWwuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvdHlwZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZXAtZXFsL34vdHlwZS1kZXRlY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogdHlwZS1kZXRlY3RcbiAqIENvcHlyaWdodChjKSAyMDEzIGpha2UgbHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBQcmltYXJ5IEV4cG9ydHNcbiAqL1xuXG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0VHlwZTtcblxuLyohXG4gKiBEZXRlY3RhYmxlIGphdmFzY3JpcHQgbmF0aXZlc1xuICovXG5cbnZhciBuYXRpdmVzID0ge1xuICAgICdbb2JqZWN0IEFycmF5XSc6ICdhcnJheSdcbiAgLCAnW29iamVjdCBSZWdFeHBdJzogJ3JlZ2V4cCdcbiAgLCAnW29iamVjdCBGdW5jdGlvbl0nOiAnZnVuY3Rpb24nXG4gICwgJ1tvYmplY3QgQXJndW1lbnRzXSc6ICdhcmd1bWVudHMnXG4gICwgJ1tvYmplY3QgRGF0ZV0nOiAnZGF0ZSdcbn07XG5cbi8qKlxuICogIyMjIHR5cGVPZiAob2JqKVxuICpcbiAqIFVzZSBzZXZlcmFsIGRpZmZlcmVudCB0ZWNobmlxdWVzIHRvIGRldGVybWluZVxuICogdGhlIHR5cGUgb2Ygb2JqZWN0IGJlaW5nIHRlc3RlZC5cbiAqXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IG9iamVjdCB0eXBlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGdldFR5cGUgKG9iaikge1xuICB2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gIGlmIChuYXRpdmVzW3N0cl0pIHJldHVybiBuYXRpdmVzW3N0cl07XG4gIGlmIChvYmogPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmIChvYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkgcmV0dXJuICdvYmplY3QnO1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn1cblxuZXhwb3J0cy5MaWJyYXJ5ID0gTGlicmFyeTtcblxuLyoqXG4gKiAjIyMgTGlicmFyeVxuICpcbiAqIENyZWF0ZSBhIHJlcG9zaXRvcnkgZm9yIGN1c3RvbSB0eXBlIGRldGVjdGlvbi5cbiAqXG4gKiBgYGBqc1xuICogdmFyIGxpYiA9IG5ldyB0eXBlLkxpYnJhcnk7XG4gKiBgYGBcbiAqXG4gKi9cblxuZnVuY3Rpb24gTGlicmFyeSAoKSB7XG4gIHRoaXMudGVzdHMgPSB7fTtcbn1cblxuLyoqXG4gKiAjIyMjIC5vZiAob2JqKVxuICpcbiAqIEV4cG9zZSByZXBsYWNlbWVudCBgdHlwZW9mYCBkZXRlY3Rpb24gdG8gdGhlIGxpYnJhcnkuXG4gKlxuICogYGBganNcbiAqIGlmICgnc3RyaW5nJyA9PT0gbGliLm9mKCdoZWxsbyB3b3JsZCcpKSB7XG4gKiAgIC8vIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIHRlc3RcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZVxuICovXG5cbkxpYnJhcnkucHJvdG90eXBlLm9mID0gZ2V0VHlwZTtcblxuLyoqXG4gKiAjIyMjIC5kZWZpbmUgKHR5cGUsIHRlc3QpXG4gKlxuICogQWRkIGEgdGVzdCB0byBmb3IgdGhlIGAudGVzdCgpYCBhc3NlcnRpb24uXG4gKlxuICogQ2FuIGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGV4cHJlc3Npb246XG4gKlxuICogYGBganNcbiAqIGxpYi5kZWZpbmUoJ2ludCcsIC9eWzAtOV0rJC8pO1xuICogYGBgXG4gKlxuICogLi4uIG9yIGFzIGEgZnVuY3Rpb246XG4gKlxuICogYGBganNcbiAqIGxpYi5kZWZpbmUoJ2JsbicsIGZ1bmN0aW9uIChvYmopIHtcbiAqICAgaWYgKCdib29sZWFuJyA9PT0gbGliLm9mKG9iaikpIHJldHVybiB0cnVlO1xuICogICB2YXIgYmxucyA9IFsgJ3llcycsICdubycsICd0cnVlJywgJ2ZhbHNlJywgMSwgMCBdO1xuICogICBpZiAoJ3N0cmluZycgPT09IGxpYi5vZihvYmopKSBvYmogPSBvYmoudG9Mb3dlckNhc2UoKTtcbiAqICAgcmV0dXJuICEhIH5ibG5zLmluZGV4T2Yob2JqKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7UmVnRXhwfEZ1bmN0aW9ufSB0ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkxpYnJhcnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uICh0eXBlLCB0ZXN0KSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy50ZXN0c1t0eXBlXTtcbiAgdGhpcy50ZXN0c1t0eXBlXSA9IHRlc3Q7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiAjIyMjIC50ZXN0IChvYmosIHRlc3QpXG4gKlxuICogQXNzZXJ0IHRoYXQgYW4gb2JqZWN0IGlzIG9mIHR5cGUuIFdpbGwgZmlyc3RcbiAqIGNoZWNrIG5hdGl2ZXMsIGFuZCBpZiB0aGF0IGRvZXMgbm90IHBhc3MgaXQgd2lsbFxuICogdXNlIHRoZSB1c2VyIGRlZmluZWQgY3VzdG9tIHRlc3RzLlxuICpcbiAqIGBgYGpzXG4gKiBhc3NlcnQobGliLnRlc3QoJzEnLCAnaW50JykpO1xuICogYXNzZXJ0KGxpYi50ZXN0KCd5ZXMnLCAnYmxuJykpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkxpYnJhcnkucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAob2JqLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSBnZXRUeXBlKG9iaikpIHJldHVybiB0cnVlO1xuICB2YXIgdGVzdCA9IHRoaXMudGVzdHNbdHlwZV07XG5cbiAgaWYgKHRlc3QgJiYgJ3JlZ2V4cCcgPT09IGdldFR5cGUodGVzdCkpIHtcbiAgICByZXR1cm4gdGVzdC50ZXN0KG9iaik7XG4gIH0gZWxzZSBpZiAodGVzdCAmJiAnZnVuY3Rpb24nID09PSBnZXRUeXBlKHRlc3QpKSB7XG4gICAgcmV0dXJuIHRlc3Qob2JqKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ1R5cGUgdGVzdCBcIicgKyB0eXBlICsgJ1wiIG5vdCBkZWZpbmVkIG9yIGludmFsaWQuJyk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVlcC1lcWwvfi90eXBlLWRldGVjdC9saWIvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaWVlZTc1NC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAqIHR5cGUtZGV0ZWN0XG4gKiBDb3B5cmlnaHQoYykgMjAxMyBqYWtlIGx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogUHJpbWFyeSBFeHBvcnRzXG4gKi9cblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldFR5cGU7XG5cbi8qKlxuICogIyMjIHR5cGVPZiAob2JqKVxuICpcbiAqIFVzZSBzZXZlcmFsIGRpZmZlcmVudCB0ZWNobmlxdWVzIHRvIGRldGVybWluZVxuICogdGhlIHR5cGUgb2Ygb2JqZWN0IGJlaW5nIHRlc3RlZC5cbiAqXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IG9iamVjdCB0eXBlXG4gKiBAYXBpIHB1YmxpY1xuICovXG52YXIgb2JqZWN0VHlwZVJlZ2V4cCA9IC9eXFxbb2JqZWN0ICguKilcXF0kLztcblxuZnVuY3Rpb24gZ2V0VHlwZShvYmopIHtcbiAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaChvYmplY3RUeXBlUmVnZXhwKVsxXS50b0xvd2VyQ2FzZSgpO1xuICAvLyBMZXQgXCJuZXcgU3RyaW5nKCcnKVwiIHJldHVybiAnb2JqZWN0J1xuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgb2JqIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuICdwcm9taXNlJztcbiAgLy8gUGhhbnRvbUpTIGhhcyB0eXBlIFwiRE9NV2luZG93XCIgZm9yIG51bGxcbiAgaWYgKG9iaiA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgLy8gUGhhbnRvbUpTIGhhcyB0eXBlIFwiRE9NV2luZG93XCIgZm9yIHVuZGVmaW5lZFxuICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydHMuTGlicmFyeSA9IExpYnJhcnk7XG5cbi8qKlxuICogIyMjIExpYnJhcnlcbiAqXG4gKiBDcmVhdGUgYSByZXBvc2l0b3J5IGZvciBjdXN0b20gdHlwZSBkZXRlY3Rpb24uXG4gKlxuICogYGBganNcbiAqIHZhciBsaWIgPSBuZXcgdHlwZS5MaWJyYXJ5O1xuICogYGBgXG4gKlxuICovXG5cbmZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaWJyYXJ5KSkgcmV0dXJuIG5ldyBMaWJyYXJ5KCk7XG4gIHRoaXMudGVzdHMgPSB7fTtcbn1cblxuLyoqXG4gKiAjIyMjIC5vZiAob2JqKVxuICpcbiAqIEV4cG9zZSByZXBsYWNlbWVudCBgdHlwZW9mYCBkZXRlY3Rpb24gdG8gdGhlIGxpYnJhcnkuXG4gKlxuICogYGBganNcbiAqIGlmICgnc3RyaW5nJyA9PT0gbGliLm9mKCdoZWxsbyB3b3JsZCcpKSB7XG4gKiAgIC8vIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIHRlc3RcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZVxuICovXG5cbkxpYnJhcnkucHJvdG90eXBlLm9mID0gZ2V0VHlwZTtcblxuLyoqXG4gKiAjIyMjIC5kZWZpbmUgKHR5cGUsIHRlc3QpXG4gKlxuICogQWRkIGEgdGVzdCB0byBmb3IgdGhlIGAudGVzdCgpYCBhc3NlcnRpb24uXG4gKlxuICogQ2FuIGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGV4cHJlc3Npb246XG4gKlxuICogYGBganNcbiAqIGxpYi5kZWZpbmUoJ2ludCcsIC9eWzAtOV0rJC8pO1xuICogYGBgXG4gKlxuICogLi4uIG9yIGFzIGEgZnVuY3Rpb246XG4gKlxuICogYGBganNcbiAqIGxpYi5kZWZpbmUoJ2JsbicsIGZ1bmN0aW9uIChvYmopIHtcbiAqICAgaWYgKCdib29sZWFuJyA9PT0gbGliLm9mKG9iaikpIHJldHVybiB0cnVlO1xuICogICB2YXIgYmxucyA9IFsgJ3llcycsICdubycsICd0cnVlJywgJ2ZhbHNlJywgMSwgMCBdO1xuICogICBpZiAoJ3N0cmluZycgPT09IGxpYi5vZihvYmopKSBvYmogPSBvYmoudG9Mb3dlckNhc2UoKTtcbiAqICAgcmV0dXJuICEhIH5ibG5zLmluZGV4T2Yob2JqKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7UmVnRXhwfEZ1bmN0aW9ufSB0ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkxpYnJhcnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uKHR5cGUsIHRlc3QpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHJldHVybiB0aGlzLnRlc3RzW3R5cGVdO1xuICB0aGlzLnRlc3RzW3R5cGVdID0gdGVzdDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqICMjIyMgLnRlc3QgKG9iaiwgdGVzdClcbiAqXG4gKiBBc3NlcnQgdGhhdCBhbiBvYmplY3QgaXMgb2YgdHlwZS4gV2lsbCBmaXJzdFxuICogY2hlY2sgbmF0aXZlcywgYW5kIGlmIHRoYXQgZG9lcyBub3QgcGFzcyBpdCB3aWxsXG4gKiB1c2UgdGhlIHVzZXIgZGVmaW5lZCBjdXN0b20gdGVzdHMuXG4gKlxuICogYGBganNcbiAqIGFzc2VydChsaWIudGVzdCgnMScsICdpbnQnKSk7XG4gKiBhc3NlcnQobGliLnRlc3QoJ3llcycsICdibG4nKSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTGlicmFyeS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKG9iaiwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gZ2V0VHlwZShvYmopKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHRlc3QgPSB0aGlzLnRlc3RzW3R5cGVdO1xuXG4gIGlmICh0ZXN0ICYmICdyZWdleHAnID09PSBnZXRUeXBlKHRlc3QpKSB7XG4gICAgcmV0dXJuIHRlc3QudGVzdChvYmopO1xuICB9IGVsc2UgaWYgKHRlc3QgJiYgJ2Z1bmN0aW9uJyA9PT0gZ2V0VHlwZSh0ZXN0KSkge1xuICAgIHJldHVybiB0ZXN0KG9iaik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdUeXBlIHRlc3QgXCInICsgdHlwZSArICdcIiBub3QgZGVmaW5lZCBvciBpbnZhbGlkLicpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3R5cGUtZGV0ZWN0L2xpYi90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==