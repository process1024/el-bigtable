(function webpackUniversalModuleDefinition (root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(require('vue')) } else if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { exports['el-bigtable'] = factory(require('vue')) } else { root['el-bigtable'] = factory(root.Vue) }
})((typeof self !== 'undefined' ? self : this), function (__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__ (moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		}
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
/******/ 		}
/******/ 	}
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true })
/******/ 	}
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value)
/******/ 		if (mode & 8) return value
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
/******/ 		var ns = Object.create(null)
/******/ 		__webpack_require__.r(ns)
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
/******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
/******/ 		return ns
/******/ 	}
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule
/******/ 			? function getDefault () { return module.default }
/******/ 			: function getModuleExports () { return module }
/******/ 		__webpack_require__.d(getter, 'a', getter)
/******/ 		return getter
/******/ 	}
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ''
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 'fb15')
/******/ })
/************************************************************************/
/******/ ({

/***/ '00ee':
/***/ function (module, exports, __webpack_require__) {
var wellKnownSymbol = __webpack_require__('b622')

var TO_STRING_TAG = wellKnownSymbol('toStringTag')
var test = {}

test[TO_STRING_TAG] = 'z'

module.exports = String(test) === '[object z]'
/***/ },

/***/ '0366':
/***/ function (module, exports, __webpack_require__) {
var aFunction = __webpack_require__('1c0b')

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn)
  if (that === undefined) return fn
  switch (length) {
    case 0: return function () {
      return fn.call(that)
    }
    case 1: return function (a) {
      return fn.call(that, a)
    }
    case 2: return function (a, b) {
      return fn.call(that, a, b)
    }
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c)
    }
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments)
  }
}
/***/ },

/***/ '057f':
/***/ function (module, exports, __webpack_require__) {
var toIndexedObject = __webpack_require__('fc6a')
var nativeGetOwnPropertyNames = __webpack_require__('241c').f

var toString = {}.toString

var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : []

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it)
  } catch (error) {
    return windowNames.slice()
  }
}

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames (it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it))
}
/***/ },

/***/ '06cf':
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var propertyIsEnumerableModule = __webpack_require__('d1e7')
var createPropertyDescriptor = __webpack_require__('5c6c')
var toIndexedObject = __webpack_require__('fc6a')
var toPrimitive = __webpack_require__('c04e')
var has = __webpack_require__('5135')
var IE8_DOM_DEFINE = __webpack_require__('0cfb')

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
  O = toIndexedObject(O)
  P = toPrimitive(P, true)
  if (IE8_DOM_DEFINE) {
 try {
    return nativeGetOwnPropertyDescriptor(O, P)
  } catch (error) { /* empty */ }
}
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P])
}
/***/ },

/***/ '0cfb':
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var fails = __webpack_require__('d039')
var createElement = __webpack_require__('cc12')

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7 }
  }).a != 7
})
/***/ },

/***/ '0e15':
/***/ function (module, exports, __webpack_require__) {
/* eslint-disable no-undefined */

var throttle = __webpack_require__('597f')

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
module.exports = function (delay, atBegin, callback) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false)
}
/***/ },

/***/ 1148:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var toInteger = __webpack_require__('a691')
var requireObjectCoercible = __webpack_require__('1d80')

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat (count) {
  var str = String(requireObjectCoercible(this))
  var result = ''
  var n = toInteger(count)
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions')
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str
  return result
}
/***/ },

/***/ 1276:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var fixRegExpWellKnownSymbolLogic = __webpack_require__('d784')
var isRegExp = __webpack_require__('44e7')
var anObject = __webpack_require__('825a')
var requireObjectCoercible = __webpack_require__('1d80')
var speciesConstructor = __webpack_require__('4840')
var advanceStringIndex = __webpack_require__('8aa5')
var toLength = __webpack_require__('50c4')
var callRegExpExec = __webpack_require__('14c3')
var regexpExec = __webpack_require__('9263')
var fails = __webpack_require__('d039')

var arrayPush = [].push
var min = Math.min
var MAX_UINT32 = 0xFFFFFFFF

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y') })

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this))
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0
      if (lim === 0) return []
      if (separator === undefined) return [string]
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim)
      }
      var output = []
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '')
      var lastLastIndex = 0
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g')
      var match, lastIndex, lastLength
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index))
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1))
          lastLength = match[0].length
          lastLastIndex = lastIndex
          if (output.length >= lim) break
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++ // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('')
      } else output.push(string.slice(lastLastIndex))
      return output.length > lim ? output.slice(0, lim) : output
    }
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit)
    }
  } else internalSplit = nativeSplit

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split (separator, limit) {
      var O = requireObjectCoercible(this)
      var splitter = separator == undefined ? undefined : separator[SPLIT]
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit)
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit)
      if (res.done) return res.value

      var rx = anObject(regexp)
      var S = String(this)
      var C = speciesConstructor(rx, RegExp)

      var unicodeMatching = rx.unicode
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g')

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags)
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0
      if (lim === 0) return []
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : []
      var p = 0
      var q = 0
      var A = []
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q))
        var e
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching)
        } else {
          A.push(S.slice(p, q))
          if (A.length === lim) return A
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i])
            if (A.length === lim) return A
          }
          q = p = e
        }
      }
      A.push(S.slice(p))
      return A
    }
  ]
}, !SUPPORTS_Y)
/***/ },

/***/ '13d5':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var $reduce = __webpack_require__('d58f').left
var arrayMethodIsStrict = __webpack_require__('a640')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var STRICT_METHOD = arrayMethodIsStrict('reduce')
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 })

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce (callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
/***/ },

/***/ '14c3':
/***/ function (module, exports, __webpack_require__) {
var classof = __webpack_require__('c6b6')
var regexpExec = __webpack_require__('9263')

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec
  if (typeof exec === 'function') {
    var result = exec.call(R, S)
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null')
    }
    return result
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver')
  }

  return regexpExec.call(R, S)
}
/***/ },

/***/ '159b':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var DOMIterables = __webpack_require__('fdbc')
var forEach = __webpack_require__('17c2')
var createNonEnumerableProperty = __webpack_require__('9112')

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME]
  var CollectionPrototype = Collection && Collection.prototype
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
 try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
  } catch (error) {
    CollectionPrototype.forEach = forEach
  }
}
}
/***/ },

/***/ '17c2':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $forEach = __webpack_require__('b727').forEach
var arrayMethodIsStrict = __webpack_require__('a640')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var STRICT_METHOD = arrayMethodIsStrict('forEach')
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach')

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach (callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
} : [].forEach
/***/ },

/***/ '1be4':
/***/ function (module, exports, __webpack_require__) {
var getBuiltIn = __webpack_require__('d066')

module.exports = getBuiltIn('document', 'documentElement')
/***/ },

/***/ '1c0b':
/***/ function (module, exports) {
module.exports = function (it) {
  if (typeof it !== 'function') {
    throw TypeError(String(it) + ' is not a function')
  } return it
}
/***/ },

/***/ '1d80':
/***/ function (module, exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it)
  return it
}
/***/ },

/***/ '1dde':
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')
var wellKnownSymbol = __webpack_require__('b622')
var V8_VERSION = __webpack_require__('2d00')

var SPECIES = wellKnownSymbol('species')

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = []
    var constructor = array.constructor = {}
    constructor[SPECIES] = function () {
      return { foo: 1 }
    }
    return array[METHOD_NAME](Boolean).foo !== 1
  })
}
/***/ },

/***/ '23cb':
/***/ function (module, exports, __webpack_require__) {
var toInteger = __webpack_require__('a691')

var max = Math.max
var min = Math.min

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index)
  return integer < 0 ? max(integer + length, 0) : min(integer, length)
}
/***/ },

/***/ '23e7':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var getOwnPropertyDescriptor = __webpack_require__('06cf').f
var createNonEnumerableProperty = __webpack_require__('9112')
var redefine = __webpack_require__('6eeb')
var setGlobal = __webpack_require__('ce4e')
var copyConstructorProperties = __webpack_require__('e893')
var isForced = __webpack_require__('94ca')

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target
  var GLOBAL = options.global
  var STATIC = options.stat
  var FORCED, target, key, targetProperty, sourceProperty, descriptor
  if (GLOBAL) {
    target = global
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {})
  } else {
    target = (global[TARGET] || {}).prototype
  }
  if (target) {
 for (key in source) {
    sourceProperty = source[key]
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key)
      targetProperty = descriptor && descriptor.value
    } else targetProperty = target[key]
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue
      copyConstructorProperties(sourceProperty, targetProperty)
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true)
    }
    // extend global
    redefine(target, key, sourceProperty, options)
  }
}
}
/***/ },

/***/ '241c':
/***/ function (module, exports, __webpack_require__) {
var internalObjectKeys = __webpack_require__('ca84')
var enumBugKeys = __webpack_require__('7839')

var hiddenKeys = enumBugKeys.concat('length', 'prototype')

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
  return internalObjectKeys(O, hiddenKeys)
}
/***/ },

/***/ '25f0':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var redefine = __webpack_require__('6eeb')
var anObject = __webpack_require__('825a')
var fails = __webpack_require__('d039')
var flags = __webpack_require__('ad6d')

var TO_STRING = 'toString'
var RegExpPrototype = RegExp.prototype
var nativeToString = RegExpPrototype[TO_STRING]

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b' })
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString () {
    var R = anObject(this)
    var p = String(R.source)
    var rf = R.flags
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf)
    return '/' + p + '/' + f
  }, { unsafe: true })
}
/***/ },

/***/ 2626:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var getBuiltIn = __webpack_require__('d066')
var definePropertyModule = __webpack_require__('9bf2')
var wellKnownSymbol = __webpack_require__('b622')
var DESCRIPTORS = __webpack_require__('83ab')

var SPECIES = wellKnownSymbol('species')

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME)
  var defineProperty = definePropertyModule.f

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this }
    })
  }
}
/***/ },

/***/ '2d00':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var userAgent = __webpack_require__('342f')

var process = global.process
var versions = process && process.versions
var v8 = versions && versions.v8
var match, version

if (v8) {
  match = v8.split('.')
  version = match[0] + match[1]
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/)
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/)
    if (match) version = match[1]
  }
}

module.exports = version && +version
/***/ },

/***/ '342f':
/***/ function (module, exports, __webpack_require__) {
var getBuiltIn = __webpack_require__('d066')

module.exports = getBuiltIn('navigator', 'userAgent') || ''
/***/ },

/***/ '37e8':
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var definePropertyModule = __webpack_require__('9bf2')
var anObject = __webpack_require__('825a')
var objectKeys = __webpack_require__('df75')

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties (O, Properties) {
  anObject(O)
  var keys = objectKeys(Properties)
  var length = keys.length
  var index = 0
  var key
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key])
  return O
}
/***/ },

/***/ '3bbe':
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype')
  } return it
}
/***/ },

/***/ '3c4e':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var isMergeableObject = function isMergeableObject (value) {
	return isNonNullObject(value) &&
		!isSpecial(value)
}

function isNonNullObject (value) {
	return !!value && typeof value === 'object'
}

function isSpecial (value) {
	var stringValue = Object.prototype.toString.call(value)

	return stringValue === '[object RegExp]' ||
		stringValue === '[object Date]' ||
		isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7

function isReactElement (value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget (val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary (value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge (target, source, optionsArgument) {
    var destination = target.slice()
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument)
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument)
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument))
        }
    })
    return destination
}

function mergeObject (target, source, optionsArgument) {
    var destination = {}
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument)
        })
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument)
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument)
        }
    })
    return destination
}

function deepmerge (target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source)
    var targetIsArray = Array.isArray(target)
    var options = optionsArgument || { arrayMerge: defaultArrayMerge }
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll (array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function (prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
}

var deepmerge_1 = deepmerge

module.exports = deepmerge_1
/***/ },

/***/ '3ca3':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var charAt = __webpack_require__('6547').charAt
var InternalStateModule = __webpack_require__('69f3')
var defineIterator = __webpack_require__('7dd0')

var STRING_ITERATOR = 'String Iterator'
var setInternalState = InternalStateModule.set
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  })
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next () {
  var state = getInternalState(this)
  var string = state.string
  var index = state.index
  var point
  if (index >= string.length) return { value: undefined, done: true }
  point = charAt(string, index)
  state.index += point.length
  return { value: point, done: false }
})
/***/ },

/***/ '3f8c':
/***/ function (module, exports) {
module.exports = {}
/***/ },

/***/ '408a':
/***/ function (module, exports, __webpack_require__) {
var classof = __webpack_require__('c6b6')

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value !== 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation')
  }
  return +value
}
/***/ },

/***/ 4160:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var forEach = __webpack_require__('17c2')

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
})
/***/ },

/***/ '428f':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')

module.exports = global
/***/ },

/***/ '44ad':
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')
var classof = __webpack_require__('c6b6')

var split = ''.split

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0)
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it)
} : Object
/***/ },

/***/ '44d2':
/***/ function (module, exports, __webpack_require__) {
var wellKnownSymbol = __webpack_require__('b622')
var create = __webpack_require__('7c73')
var definePropertyModule = __webpack_require__('9bf2')

var UNSCOPABLES = wellKnownSymbol('unscopables')
var ArrayPrototype = Array.prototype

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  })
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true
}
/***/ },

/***/ '44e7':
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')
var classof = __webpack_require__('c6b6')
var wellKnownSymbol = __webpack_require__('b622')

var MATCH = wellKnownSymbol('match')

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp')
}
/***/ },

/***/ '45fc':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var $some = __webpack_require__('b727').some
var arrayMethodIsStrict = __webpack_require__('a640')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var STRICT_METHOD = arrayMethodIsStrict('some')
var USES_TO_LENGTH = arrayMethodUsesToLength('some')

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some (callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
  }
})
/***/ },

/***/ '466d':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var fixRegExpWellKnownSymbolLogic = __webpack_require__('d784')
var anObject = __webpack_require__('825a')
var toLength = __webpack_require__('50c4')
var requireObjectCoercible = __webpack_require__('1d80')
var advanceStringIndex = __webpack_require__('8aa5')
var regExpExec = __webpack_require__('14c3')

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match (regexp) {
      var O = requireObjectCoercible(this)
      var matcher = regexp == undefined ? undefined : regexp[MATCH]
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O))
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this)
      if (res.done) return res.value

      var rx = anObject(regexp)
      var S = String(this)

      if (!rx.global) return regExpExec(rx, S)

      var fullUnicode = rx.unicode
      rx.lastIndex = 0
      var A = []
      var n = 0
      var result
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0])
        A[n] = matchStr
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
        n++
      }
      return n === 0 ? null : A
    }
  ]
})
/***/ },

/***/ 4840:
/***/ function (module, exports, __webpack_require__) {
var anObject = __webpack_require__('825a')
var aFunction = __webpack_require__('1c0b')
var wellKnownSymbol = __webpack_require__('b622')

var SPECIES = wellKnownSymbol('species')

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor
  var S
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S)
}
/***/ },

/***/ 4930:
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol())
})
/***/ },

/***/ '4d63':
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var global = __webpack_require__('da84')
var isForced = __webpack_require__('94ca')
var inheritIfRequired = __webpack_require__('7156')
var defineProperty = __webpack_require__('9bf2').f
var getOwnPropertyNames = __webpack_require__('241c').f
var isRegExp = __webpack_require__('44e7')
var getFlags = __webpack_require__('ad6d')
var stickyHelpers = __webpack_require__('9f7f')
var redefine = __webpack_require__('6eeb')
var fails = __webpack_require__('d039')
var setInternalState = __webpack_require__('69f3').set
var setSpecies = __webpack_require__('2626')
var wellKnownSymbol = __webpack_require__('b622')

var MATCH = wellKnownSymbol('match')
var NativeRegExp = global.RegExp
var RegExpPrototype = NativeRegExp.prototype
var re1 = /a/g
var re2 = /a/g

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i'
})))

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp (pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper
    var patternIsRegExp = isRegExp(pattern)
    var flagsAreUndefined = flags === undefined
    var sticky

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern)
      pattern = pattern.source
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1
      if (sticky) flags = flags.replace(/y/g, '')
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    )

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky })

    return result
  }
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key] },
      set: function (it) { NativeRegExp[key] = it }
    })
  }
  var keys = getOwnPropertyNames(NativeRegExp)
  var index = 0
  while (keys.length > index) proxy(keys[index++])
  RegExpPrototype.constructor = RegExpWrapper
  RegExpWrapper.prototype = RegExpPrototype
  redefine(global, 'RegExp', RegExpWrapper)
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp')
/***/ },

/***/ '4d64':
/***/ function (module, exports, __webpack_require__) {
var toIndexedObject = __webpack_require__('fc6a')
var toLength = __webpack_require__('50c4')
var toAbsoluteIndex = __webpack_require__('23cb')

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this)
    var length = toLength(O.length)
    var index = toAbsoluteIndex(fromIndex, length)
    var value
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) {
 while (length > index) {
      value = O[index++]
      // eslint-disable-next-line no-self-compare
      if (value != value) return true
    // Array#indexOf ignores holes, Array#includes - not
    }
} else {
 for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
    }
} return !IS_INCLUDES && -1
  }
}

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
}
/***/ },

/***/ '4d7b':
/***/ function (module, __webpack_exports__, __webpack_require__) {
'use strict'
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_panel_vue_vue_type_style_index_0_id_4858641a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('70d9')
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_panel_vue_vue_type_style_index_0_id_4858641a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_panel_vue_vue_type_style_index_0_id_4858641a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_panel_vue_vue_type_style_index_0_id_4858641a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a)
/***/ },

/***/ '4de4':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var $filter = __webpack_require__('b727').filter
var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter')
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter')

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter (callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
  }
})
/***/ },

/***/ '4ff4':
/***/ function (module, exports, __webpack_require__) {
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
				? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module))
				: __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
}(this, function () {
    'use strict'

    var root = window

    // default options
    var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',

        gpuAcceleration: true,

        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,

        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',

        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,

        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        arrowOffset: 0,

        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    }

    /**
     * Create a new Popper.js instance
     * @constructor Popper
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement|Object} popper
     *      The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
     * @param {Object} options
     * @param {String} [options.placement=bottom]
     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
     *      left(-start, -end)`
     *
     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
     *      reference element.
     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
     *
     * @param {Boolean} [options.gpuAcceleration=true]
     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
     *      browser to use the GPU to accelerate the rendering.
     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
     *
     * @param {Number} [options.offset=0]
     *      Amount of pixels the popper will be shifted (can be negative).
     *
     * @param {String|Element} [options.boundariesElement='viewport']
     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
     *      of the defined boundaries (except if `keepTogether` is enabled)
     *
     * @param {Number} [options.boundariesPadding=5]
     *      Additional padding for the boundaries
     *
     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
     *      this means that the last ones will never overflow
     *
     * @param {String|Array} [options.flipBehavior='flip']
     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
     *      its axis (`right - left`, `top - bottom`).
     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
     *
     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
     *      to this array to edit the offsets and placement.
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Array} [options.modifiersIgnored=[]]
     *      Put here any built-in modifier name you want to exclude from the modifiers list
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Boolean} [options.removeOnDestroy=false]
     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
     */
    function Popper (reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference
        this.state = {}

        // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined
        var isNotDefined = typeof popper === 'undefined' || popper === null
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]'
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {})
        }
        // otherwise, use the given HTMLElement as popper
        else {
            this._popper = popper.jquery ? popper[0] : popper
        }

        // with {} we create a new object with the options inside it
        this._options = Object.assign({}, DEFAULTS, options)

        // refactoring modifiers' list
        this._options.modifiers = this._options.modifiers.map(function (modifier) {
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement)
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier
        }.bind(this))

        // make sure to apply the popper position before any computation
        this.state.position = this._getPosition(this._popper, this._reference)
        setStyle(this._popper, { position: this.state.position, top: 0 })

        // fire the first update to position the popper in the right place
        this.update()

        // setup event listeners, they will take care of update the position in specific situations
        this._setupEventListeners()
        return this
    }

    //
    // Methods
    //
    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement')
        this._popper.style.left = ''
        this._popper.style.position = ''
        this._popper.style.top = ''
        this._popper.style[getSupportedPropertyName('transform')] = ''
        this._removeEventListeners()

        // remove the popper if user explicity asked for the deletion on destroy
        if (this._options.removeOnDestroy) {
            this._popper.remove()
        }
        return this
    }

    /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * @method
     * @memberof Popper
     */
    Popper.prototype.update = function () {
        var data = { instance: this, styles: {} }

        // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value
        data.placement = this._options.placement
        data._originalPlacement = this._options.placement

        // compute the popper and reference offsets and put them inside data.offsets
        data.offsets = this._getOffsets(this._popper, this._reference, data.placement)

        // get boundaries
        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement)

        data = this.runModifiers(data, this._options.modifiers)

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data)
        }
    }

    /**
     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onCreate = function (callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this)
        return this
    }

    /**
     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
     * used to style popper and its arrow.
     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback
        return this
    }

    /**
     * Helper used to generate poppers from a configuration file
     * @method
     * @memberof Popper
     * @param config {Object} configuration
     * @returns {HTMLElement} popper
     */
    Popper.prototype.parse = function (config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
        }
        config = Object.assign({}, defaultConfig, config)

        var d = root.document

        var popper = d.createElement(config.tagName)
        addClassNames(popper, config.classNames)
        addAttributes(popper, config.attributes)
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content)
        } else if (config.contentType === 'html') {
            popper.innerHTML = config.content
        } else {
            popper.textContent = config.content
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName)
            addClassNames(arrow, config.arrowClassNames)
            addAttributes(arrow, config.arrowAttributes)
            popper.appendChild(arrow)
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent

        // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error
        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent)
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used')
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!'
            }
            parent = parent[0]
        }
        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent
        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used')
            parent = parent[0]
        }

        // append the generated popper to its parent
        parent.appendChild(popper)

        return popper

        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */
        function addClassNames (element, classNames) {
            classNames.forEach(function (className) {
                element.classList.add(className)
            })
        }

        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */
        function addAttributes (element, attributes) {
            attributes.forEach(function (attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '')
            })
        }
    }

    /**
     * Helper used to get the position which will be applied to the popper
     * @method
     * @memberof Popper
     * @param config {HTMLElement} popper element
     * @param reference {HTMLElement} reference element
     * @returns {String} position
     */
    Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference)

        if (this._options.forceAbsolute) {
            return 'absolute'
        }

        // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
        var isParentFixed = isFixed(reference, container)
        return isParentFixed ? 'fixed' : 'absolute'
    }

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper
     * @access private
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0]
        var popperOffsets = {}

        popperOffsets.position = this.state.position
        var isParentFixed = popperOffsets.position === 'fixed'

        //
        // Get reference element position
        //
        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed)

        //
        // Get popper sizes
        //
        var popperRect = getOuterSizes(popper)

        //
        // Compute offsets of popper
        //

        // depending by the popper placement we have to compute its offsets slightly differently
        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width
            } else {
                popperOffsets.left = referenceOffsets.right
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height
            } else {
                popperOffsets.top = referenceOffsets.bottom
            }
        }

        // Add width and height to our offsets object
        popperOffsets.width = popperRect.width
        popperOffsets.height = popperRect.height

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        }
    }

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._setupEventListeners = function () {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this)
        root.addEventListener('resize', this.state.updateBound)
        // if the boundariesElement is window we don't need to listen for the scroll event
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference)
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
                target = root
            }
            target.addEventListener('scroll', this.state.updateBound)
            this.state.scrollTarget = target
        }
    }

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._removeEventListeners = function () {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound)
        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound)
            this.state.scrollTarget = null
        }
        this.state.updateBound = null
    }

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper
     * @access private
     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
     * @param {Number} padding - Boundaries padding
     * @param {Element} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {}
        var width, height
        if (boundariesElement === 'window') {
            var body = root.document.body
                var html = root.document.documentElement

            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            }
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper)
            var scrollParent = getScrollParent(this._popper)
            var offsetParentRect = getOffsetRect(offsetParent)

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function (element) {
                return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop
            }
            var getScrollLeftValue = function (element) {
                return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft
            }

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent)
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent)

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            }
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                }
            } else {
                boundaries = getOffsetRect(boundariesElement)
            }
        }
        boundaries.left += padding
        boundaries.right -= padding
        boundaries.top = boundaries.top + padding
        boundaries.bottom = boundaries.bottom - padding
        return boundaries
    }

    /**
     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
     * @method
     * @memberof Popper
     * @access public
     * @param {Object} data
     * @param {Array} modifiers
     * @param {Function} ends
     */
    Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice()
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends))
        }

        modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data)
            }
        }.bind(this))

        return data
    }

    /**
     * Helper used to know if the given modifier depends from another one.
     * @method
     * @memberof Popper
     * @param {String} requesting - name of requesting modifier
     * @param {String} requested - name of requested modifier
     * @returns {Boolean}
     */
    Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting)
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested
        }).length
    }

    //
    // Modifiers
    //

    /**
     * Modifiers list
     * @namespace Popper.modifiers
     * @memberof Popper
     * @type {Object}
     */
    Popper.prototype.modifiers = {}

    /**
     * Apply the computed styles to the popper element
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The same data object
     */
    Popper.prototype.modifiers.applyStyle = function (data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
            position: data.offsets.popper.position
        }

        // round top and left to avoid blurry text
        var left = Math.round(data.offsets.popper.left)
        var top = Math.round(data.offsets.popper.top)

        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed
        var prefixedProperty
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)'
            styles.top = 0
            styles.left = 0
        }
        // othwerise, we use the standard `left` and `top` properties
        else {
            styles.left = left
            styles.top = top
        }

        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        Object.assign(styles, data.styles)

        setStyle(this._popper, styles)

        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here
        this._popper.setAttribute('x-placement', data.placement)

        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow)
        }

        return data
    }

    /**
     * Modifier used to shift the popper on the start or end of its reference element side
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement
        var basePlacement = placement.split('-')[0]
        var shiftVariation = placement.split('-')[1]

        // if shift shiftVariation is specified, run the modifier
        if (shiftVariation) {
            var reference = data.offsets.reference
            var popper = getPopperClientRect(data.offsets.popper)

            var shiftOffsets = {
                y: {
                    start: { top: reference.top },
                    end: { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start: { left: reference.left },
                    end: { left: reference.left + reference.width - popper.width }
                }
            }

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y'

            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation])
        }

        return data
    }

    /**
     * Modifier used to make sure the popper does not overflows from it's boundaries
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder
        var popper = getPopperClientRect(data.offsets.popper)

        var check = {
            left: function () {
                var left = popper.left
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left)
                }
                return { left: left }
            },
            right: function () {
                var left = popper.left
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width)
                }
                return { left: left }
            },
            top: function () {
                var top = popper.top
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top)
                }
                return { top: top }
            },
            bottom: function () {
                var top = popper.top
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height)
                }
                return { top: top }
            }
        }

        order.forEach(function (direction) {
            data.offsets.popper = Object.assign(popper, check[direction]())
        })

        return data
    }

    /**
     * Modifier used to make sure the popper is always near its reference
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper)
        var reference = data.offsets.reference
        var f = Math.floor

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right)
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom)
        }

        return data
    }

    /**
     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
     * Requires the `preventOverflow` modifier before it in order to work.
     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.flip = function (data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!')
            return data
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data
        }

        var placement = data.placement.split('-')[0]
        var placementOpposite = getOppositePlacement(placement)
        var variation = data.placement.split('-')[1] || ''

        var flipOrder = []
        if (this._options.flipBehavior === 'flip') {
            flipOrder = [
                placement,
                placementOpposite
            ]
        } else {
            flipOrder = this._options.flipBehavior
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return
            }

            placement = data.placement.split('-')[0]
            placementOpposite = getOppositePlacement(placement)

            var popperOffsets = getPopperClientRect(data.offsets.popper)

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (
                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
            ) {
                // we'll use this boolean to detect any flip loop
                data.flipped = true
                data.placement = flipOrder[index + 1]
                if (variation) {
                    data.placement += '-' + variation
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper

                data = this.runModifiers(data, this._options.modifiers, this._flip)
            }
        }.bind(this))
        return data
    }

    /**
     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
     * The offsets will shift the popper on the side of its reference element.
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset
        var popper = data.offsets.popper

        if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset
        } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset
        } else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset
        } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset
        }
        return data
    }

    /**
     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement
        var arrowOffset = this._options.arrowOffset

        // if the arrowElement is a string, suppose it's a CSS selector
        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow)
        }

        // if arrow element is not found, don't run the modifier
        if (!arrow) {
            return data
        }

        // the arrow element must be child of its popper
        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!')
            return data
        }

        // arrow depends on keepTogether in order to work
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!')
            return data
        }

        var arrowStyle = {}
        var placement = data.placement.split('-')[0]
        var popper = getPopperClientRect(data.offsets.popper)
        var reference = data.offsets.reference
        var isVertical = ['left', 'right'].indexOf(placement) !== -1

        var len = isVertical ? 'height' : 'width'
        var side = isVertical ? 'top' : 'left'
        var translate = isVertical ? 'translateY' : 'translateX'
        var altSide = isVertical ? 'left' : 'top'
        var opSide = isVertical ? 'bottom' : 'right'
        var arrowSize = getOuterSizes(arrow)[len]

        //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize)
        }
        // bottom/right side
        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide]
        }

        // compute center of the popper
        var center = reference[side] + (arrowOffset || (reference[len] / 2) - (arrowSize / 2))

        var sideValue = center - popper[side]

        // prevent arrow from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8)
        arrowStyle[side] = sideValue
        arrowStyle[altSide] = '' // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle
        data.arrowElement = arrow

        return data
    }

    //
    // Helpers
    //

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes (element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display; var _visibility = element.style.visibility
        element.style.display = 'block'; element.style.visibility = 'hidden'
        var calcWidthToForceRepaint = element.offsetWidth

        // original method
        var styles = root.getComputedStyle(element)
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x }

        // reset element styles
        element.style.display = _display; element.style.visibility = _visibility
        return result
    }

    /**
     * Get the opposite placement of the given one/
     * @function
     * @ignore
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement (placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched]
        })
    }

    /**
     * Given the popper offsets, generate an output similar to getBoundingClientRect
     * @function
     * @ignore
     * @argument {Object} popperOffsets
     * @returns {Object} ClientRect like output
     */
    function getPopperClientRect (popperOffsets) {
        var offsets = Object.assign({}, popperOffsets)
        offsets.right = offsets.left + offsets.width
        offsets.bottom = offsets.top + offsets.height
        return offsets
    }

    /**
     * Given an array and the key to find, returns its index
     * @function
     * @ignore
     * @argument {Array} arr
     * @argument keyToFind
     * @returns index or null
     */
    function getArrayKeyIndex (arr, keyToFind) {
        var i = 0; var key
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i
            }
            i++
        }
        return null
    }

    /**
     * Get CSS computed property of the given element
     * @function
     * @ignore
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty (element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null)
        return css[property]
    }

    /**
     * Returns the offset parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent (element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent
    }

    /**
     * Returns the scrolling parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getScrollParent (element) {
        var parent = element.parentNode

        if (!parent) {
            return element
        }

        if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
                return root.document.body
            } else {
                return root.document.documentElement
            }
        }

        // Firefox want us to check `-x` and `-y` variations as well
        if (
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 ||
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 ||
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1
        ) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent
        }
        return getScrollParent(element.parentNode)
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @function
     * @ignore
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed (element) {
        if (element === root.document.body) {
            return false
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true
        }
        return element.parentNode ? isFixed(element.parentNode) : element
    }

    /**
     * Set the style to the given popper
     * @function
     * @ignore
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
     */
    function setStyle (element, styles) {
        function is_numeric (n) {
            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n))
        }
        Object.keys(styles).forEach(function (prop) {
            var unit = ''
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px'
            }
            element.style[prop] = styles[prop] + unit
        })
    }

    /**
     * Check if the given variable is a function
     * @function
     * @ignore
     * @argument {*} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction (functionToCheck) {
        var getType = {}
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
    }

    /**
     * Get the position of the given element, relative to its offset parent
     * @function
     * @ignore
     * @param {Element} element
     * @return {Object} position - Coordinates of the element and its `scrollTop`
     */
    function getOffsetRect (element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        }

        elementRect.right = elementRect.left + elementRect.width
        elementRect.bottom = elementRect.top + elementRect.height

        // position
        return elementRect
    }

    /**
     * Get bounding client rect of given element
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect (element) {
        var rect = element.getBoundingClientRect()

        // whether the IE version is lower than 11
        var isIE = navigator.userAgent.indexOf('MSIE') != -1

        // fix ie document bounding top always 0 bug
        var rectTop = isIE && element.tagName === 'HTML'
            ? -element.scrollTop
            : rect.top

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        }
    }

    /**
     * Given an element and one of its parents, return the offset
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     * @return {Object} rect
     */
    function getOffsetRectRelativeToCustomParent (element, parent, fixed) {
        var elementRect = getBoundingClientRect(element)
        var parentRect = getBoundingClientRect(parent)

        if (fixed) {
            var scrollParent = getScrollParent(parent)
            parentRect.top += scrollParent.scrollTop
            parentRect.bottom += scrollParent.scrollTop
            parentRect.left += scrollParent.scrollLeft
            parentRect.right += scrollParent.scrollLeft
        }

        var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: (elementRect.top - parentRect.top) + elementRect.height,
            right: (elementRect.left - parentRect.left) + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        }
        return rect
    }

    /**
     * Get the prefixed supported property name
     * @function
     * @ignore
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase)
     */
    function getSupportedPropertyName (property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o']

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck
            }
        }
        return null
    }

    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
     * objects to a target object. It will return the target object.
     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     * @function
     * @ignore
     */
    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object')
                }

                var to = Object(target)
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i]
                    if (nextSource === undefined || nextSource === null) {
                        continue
                    }
                    nextSource = Object(nextSource)

                    var keysArray = Object.keys(nextSource)
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex]
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
                return to
            }
        })
    }

    return Popper
}))
/***/ },

/***/ '50c4':
/***/ function (module, exports, __webpack_require__) {
var toInteger = __webpack_require__('a691')

var min = Math.min

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
}
/***/ },

/***/ 5135:
/***/ function (module, exports) {
var hasOwnProperty = {}.hasOwnProperty

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key)
}
/***/ },

/***/ 5692:
/***/ function (module, exports, __webpack_require__) {
var IS_PURE = __webpack_require__('c430')
var store = __webpack_require__('c6cd');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {})
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
})
/***/ },

/***/ '56ef':
/***/ function (module, exports, __webpack_require__) {
var getBuiltIn = __webpack_require__('d066')
var getOwnPropertyNamesModule = __webpack_require__('241c')
var getOwnPropertySymbolsModule = __webpack_require__('7418')
var anObject = __webpack_require__('825a')

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it))
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
}
/***/ },

/***/ 5899:
/***/ function (module, exports) {
// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
/***/ },

/***/ '58a8':
/***/ function (module, exports, __webpack_require__) {
var requireObjectCoercible = __webpack_require__('1d80')
var whitespaces = __webpack_require__('5899')

var whitespace = '[' + whitespaces + ']'
var ltrim = RegExp('^' + whitespace + whitespace + '*')
var rtrim = RegExp(whitespace + whitespace + '*$')

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this))
    if (TYPE & 1) string = string.replace(ltrim, '')
    if (TYPE & 2) string = string.replace(rtrim, '')
    return string
  }
}

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
}
/***/ },

/***/ '597f':
/***/ function (module, exports) {
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function (delay, noTrailing, callback, debounceMode) {
	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID

	// Keep track of the last time `callback` was executed.
	var lastExec = 0

	// `noTrailing` defaults to falsy.
	if (typeof noTrailing !== 'boolean') {
		debounceMode = callback
		callback = noTrailing
		noTrailing = undefined
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {
		var self = this
		var elapsed = Number(new Date()) - lastExec
		var args = arguments

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date())
			callback.apply(self, args)
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined
		}

		if (debounceMode && !timeoutID) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec()
		}

		// Clear any existing timeout.
		if (timeoutID) {
			clearTimeout(timeoutID)
		}

		if (debounceMode === undefined && elapsed > delay) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec()
		} else if (noTrailing !== true) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
		}
	}

	// Return the wrapper function.
	return wrapper
}
/***/ },

/***/ '5c6c':
/***/ function (module, exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  }
}
/***/ },

/***/ '60da':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var DESCRIPTORS = __webpack_require__('83ab')
var fails = __webpack_require__('d039')
var objectKeys = __webpack_require__('df75')
var getOwnPropertySymbolsModule = __webpack_require__('7418')
var propertyIsEnumerableModule = __webpack_require__('d1e7')
var toObject = __webpack_require__('7b0b')
var IndexedObject = __webpack_require__('44ad')

var nativeAssign = Object.assign
var defineProperty = Object.defineProperty

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      })
    }
  }), { b: 2 })).b !== 1) return true
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {}
  var B = {}
  // eslint-disable-next-line no-undef
  var symbol = Symbol()
  var alphabet = 'abcdefghijklmnopqrst'
  A[symbol] = 7
  alphabet.split('').forEach(function (chr) { B[chr] = chr })
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet
}) ? function assign (target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target)
  var argumentsLength = arguments.length
  var index = 1
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
  var propertyIsEnumerable = propertyIsEnumerableModule.f
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++])
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S)
    var length = keys.length
    var j = 0
    var key
    while (length > j) {
      key = keys[j++]
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key]
    }
  } return T
} : nativeAssign
/***/ },

/***/ 6547:
/***/ function (module, exports, __webpack_require__) {
var toInteger = __webpack_require__('a691')
var requireObjectCoercible = __webpack_require__('1d80')

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this))
    var position = toInteger(pos)
    var size = S.length
    var first, second
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
    first = S.charCodeAt(position)
    return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
  }
}

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
}
/***/ },

/***/ '65f0':
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')
var isArray = __webpack_require__('e8b5')
var wellKnownSymbol = __webpack_require__('b622')

var SPECIES = wellKnownSymbol('species')

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C
  if (isArray(originalArray)) {
    C = originalArray.constructor
    // cross-realm fallback
    if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined
    else if (isObject(C)) {
      C = C[SPECIES]
      if (C === null) C = undefined
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length)
}
/***/ },

/***/ '69f3':
/***/ function (module, exports, __webpack_require__) {
var NATIVE_WEAK_MAP = __webpack_require__('7f9a')
var global = __webpack_require__('da84')
var isObject = __webpack_require__('861d')
var createNonEnumerableProperty = __webpack_require__('9112')
var objectHas = __webpack_require__('5135')
var sharedKey = __webpack_require__('f772')
var hiddenKeys = __webpack_require__('d012')

var WeakMap = global.WeakMap
var set, get, has

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {})
}

var getterFor = function (TYPE) {
  return function (it) {
    var state
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required')
    } return state
  }
}

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap()
  var wmget = store.get
  var wmhas = store.has
  var wmset = store.set
  set = function (it, metadata) {
    wmset.call(store, it, metadata)
    return metadata
  }
  get = function (it) {
    return wmget.call(store, it) || {}
  }
  has = function (it) {
    return wmhas.call(store, it)
  }
} else {
  var STATE = sharedKey('state')
  hiddenKeys[STATE] = true
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata)
    return metadata
  }
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {}
  }
  has = function (it) {
    return objectHas(it, STATE)
  }
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
}
/***/ },

/***/ '6dd8':
/***/ function (module, __webpack_exports__, __webpack_require__) {
'use strict';
/* WEBPACK VAR INJECTION */(function (global) { /**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex (arr, key) {
        var result = -1
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index
                return true
            }
            return false
        })
        return result
    }
    return /** @class */ (function () {
        function class_1 () {
            this.__entries__ = []
        }
        Object.defineProperty(class_1.prototype, 'size', {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length
            },
            enumerable: true,
            configurable: true
        })
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key)
            var entry = this.__entries__[index]
            return entry && entry[1]
        }
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key)
            if (~index) {
                this.__entries__[index][1] = value
            } else {
                this.__entries__.push([key, value])
            }
        }
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__
            var index = getIndex(entries, key)
            if (~index) {
                entries.splice(index, 1)
            }
        }
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key)
        }
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0)
        }
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i]
                callback.call(ctx, entry[1], entry[0])
            }
        }
        return class_1
    }())
})()

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')()
})()

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1)
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()) }, 1000 / 60) }
})()

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false; var trailingCall = false; var lastCallTime = 0
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending () {
        if (leadingCall) {
            leadingCall = false
            callback()
        }
        if (trailingCall) {
            proxy()
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback () {
        requestAnimationFrame$1(resolvePending)
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy () {
        var timeStamp = Date.now()
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true
        } else {
            leadingCall = true
            trailingCall = false
            setTimeout(timeoutCallback, delay)
        }
        lastCallTime = timeStamp
    }
    return proxy
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined'
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController () {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = []
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY)
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer)
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_()
        }
    }
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_
        var index = observers.indexOf(observer)
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1)
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_()
        }
    }
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_()
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh()
        }
    }
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive()
        })
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive() })
        return activeObservers.length > 0
    }
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_)
        window.addEventListener('resize', this.refresh)
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh)
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            })
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh)
            this.mutationEventsAdded_ = true
        }
        this.connected_ = true
    }
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_)
        window.removeEventListener('resize', this.refresh)
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect()
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh)
        }
        this.mutationsObserver_ = null
        this.mutationEventsAdded_ = false
        this.connected_ = false
    }
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName; var propertyName = _b === void 0 ? '' : _b
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key)
        })
        if (isReflowProperty) {
            this.refresh()
        }
    }
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController()
        }
        return this.instance_
    }
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null
    return ResizeObserverController
}())

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i]
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        })
    }
    return target
}

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1
}

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0)
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat (value) {
    return parseFloat(value) || 0
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize (styles) {
    var positions = []
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i]
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width']
        return size + toFloat(value)
    }, 0)
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings (styles) {
    var positions = ['top', 'right', 'bottom', 'left']
    var paddings = {}
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i]
        var value = styles['padding-' + position]
        paddings[position] = toFloat(value)
    }
    return paddings
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect (target) {
    var bbox = target.getBBox()
    return createRectInit(0, 0, bbox.width, bbox.height)
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect (target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth; var clientHeight = target.clientHeight
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect
    }
    var styles = getWindowOf(target).getComputedStyle(target)
    var paddings = getPaddings(styles)
    var horizPad = paddings.left + paddings.right
    var vertPad = paddings.top + paddings.bottom
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width); var height = toFloat(styles.height)
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth
        var horizScrollbar = Math.round(height + vertPad) - clientHeight
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height)
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement }
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
 return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function')
}
})()
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement (target) {
    return target === getWindowOf(target).document.documentElement
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect (target) {
    if (!isBrowser) {
        return emptyRect
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target)
    }
    return getHTMLElementContentRect(target)
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect (_a) {
    var x = _a.x; var y = _a.y; var width = _a.width; var height = _a.height
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object
    var rect = Object.create(Constr.prototype)
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
y: y,
width: width,
height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    })
    return rect
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit (x, y, width, height) {
    return { x: x, y: y, width: width, height: height }
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation (target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0)
        this.target = target
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target)
        this.contentRect_ = rect
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight)
    }
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_
        this.broadcastWidth = rect.width
        this.broadcastHeight = rect.height
        return rect
    }
    return ResizeObservation
}())

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry (target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit)
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect })
    }
    return ResizeObserverEntry
}())

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI (callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = []
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim()
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.')
        }
        this.callback_ = callback
        this.controller_ = controller
        this.callbackCtx_ = callbackCtx
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.')
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".')
        }
        var observations = this.observations_
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return
        }
        observations.set(target, new ResizeObservation(target))
        this.controller_.addObserver(this)
        // Force the update of observations.
        this.controller_.refresh()
    }
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.')
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".')
        }
        var observations = this.observations_
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return
        }
        observations.delete(target)
        if (!observations.size) {
            this.controller_.removeObserver(this)
        }
    }
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive()
        this.observations_.clear()
        this.controller_.removeObserver(this)
    }
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this
        this.clearActive()
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation)
            }
        })
    }
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return
        }
        var ctx = this.callbackCtx_
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect())
        })
        this.callback_.call(ctx, entries, ctx)
        this.clearActive()
    }
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
    }
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
    }
    return ResizeObserverSPI
}())

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim()
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver (callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.')
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.')
        }
        var controller = ResizeObserverController.getInstance()
        var observer = new ResizeObserverSPI(callback, controller, this)
        observers.set(this, observer)
    }
    return ResizeObserver
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a
        return (_a = observers.get(this))[method].apply(_a, arguments)
    }
})

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver
    }
    return ResizeObserver
})()

/* harmony default export */ __webpack_exports__.a = (index)
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
/***/ },

/***/ '6eeb':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var createNonEnumerableProperty = __webpack_require__('9112')
var has = __webpack_require__('5135')
var setGlobal = __webpack_require__('ce4e')
var inspectSource = __webpack_require__('8925')
var InternalStateModule = __webpack_require__('69f3')

var getInternalState = InternalStateModule.get
var enforceInternalState = InternalStateModule.enforce
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false
  var simple = options ? !!options.enumerable : false
  var noTargetGet = options ? !!options.noTargetGet : false
  if (typeof value === 'function') {
    if (typeof key === 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key)
    enforceInternalState(value).source = TEMPLATE.join(typeof key === 'string' ? key : '')
  }
  if (O === global) {
    if (simple) O[key] = value
    else setGlobal(key, value)
    return
  } else if (!unsafe) {
    delete O[key]
  } else if (!noTargetGet && O[key]) {
    simple = true
  }
  if (simple) O[key] = value
  else createNonEnumerableProperty(O, key, value)
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString () {
  return typeof this === 'function' && getInternalState(this).source || inspectSource(this)
})
/***/ },

/***/ '70d9':
/***/ function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ },

/***/ 7156:
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')
var setPrototypeOf = __webpack_require__('d2bb')

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) === 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype)
  return $this
}
/***/ },

/***/ 7418:
/***/ function (module, exports) {
exports.f = Object.getOwnPropertySymbols
/***/ },

/***/ '746f':
/***/ function (module, exports, __webpack_require__) {
var path = __webpack_require__('428f')
var has = __webpack_require__('5135')
var wrappedWellKnownSymbolModule = __webpack_require__('e538')
var defineProperty = __webpack_require__('9bf2').f

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {})
  if (!has(Symbol, NAME)) {
 defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  })
}
}
/***/ },

/***/ 7839:
/***/ function (module, exports) {
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
]
/***/ },

/***/ '7b0b':
/***/ function (module, exports, __webpack_require__) {
var requireObjectCoercible = __webpack_require__('1d80')

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument))
}
/***/ },

/***/ '7b3e':
/***/ function (module, exports, __webpack_require__) {
'use strict'
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

var ExecutionEnvironment = __webpack_require__('a3de')

var useHasFeature
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported (eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false
  }

  var eventName = 'on' + eventNameSuffix
  var isSupported = eventName in document

  if (!isSupported) {
    var element = document.createElement('div')
    element.setAttribute(eventName, 'return;')
    isSupported = typeof element[eventName] === 'function'
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0')
  }

  return isSupported
}

module.exports = isEventSupported
/***/ },

/***/ '7c73':
/***/ function (module, exports, __webpack_require__) {
var anObject = __webpack_require__('825a')
var defineProperties = __webpack_require__('37e8')
var enumBugKeys = __webpack_require__('7839')
var hiddenKeys = __webpack_require__('d012')
var html = __webpack_require__('1be4')
var documentCreateElement = __webpack_require__('cc12')
var sharedKey = __webpack_require__('f772')

var GT = '>'
var LT = '<'
var PROTOTYPE = 'prototype'
var SCRIPT = 'script'
var IE_PROTO = sharedKey('IE_PROTO')

var EmptyConstructor = function () { /* empty */ }

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
}

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''))
  activeXDocument.close()
  var temp = activeXDocument.parentWindow.Object
  activeXDocument = null // avoid memory leak
  return temp
}

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe')
  var JS = 'java' + SCRIPT + ':'
  var iframeDocument
  iframe.style.display = 'none'
  html.appendChild(iframe)
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS)
  iframeDocument = iframe.contentWindow.document
  iframeDocument.open()
  iframeDocument.write(scriptTag('document.F=Object'))
  iframeDocument.close()
  return iframeDocument.F
}

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile')
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame()
  var length = enumBugKeys.length
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
  return NullProtoObject()
}

hiddenKeys[IE_PROTO] = true

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create (O, Properties) {
  var result
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O)
    result = new EmptyConstructor()
    EmptyConstructor[PROTOTYPE] = null
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O
  } else result = NullProtoObject()
  return Properties === undefined ? result : defineProperties(result, Properties)
}
/***/ },

/***/ '7dd0':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var createIteratorConstructor = __webpack_require__('9ed3')
var getPrototypeOf = __webpack_require__('e163')
var setPrototypeOf = __webpack_require__('d2bb')
var setToStringTag = __webpack_require__('d44e')
var createNonEnumerableProperty = __webpack_require__('9112')
var redefine = __webpack_require__('6eeb')
var wellKnownSymbol = __webpack_require__('b622')
var IS_PURE = __webpack_require__('c430')
var Iterators = __webpack_require__('3f8c')
var IteratorsCore = __webpack_require__('ae93')

var IteratorPrototype = IteratorsCore.IteratorPrototype
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
var ITERATOR = wellKnownSymbol('iterator')
var KEYS = 'keys'
var VALUES = 'values'
var ENTRIES = 'entries'

var returnThis = function () { return this }

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next)

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND]
    switch (KIND) {
      case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
      case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
      case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
    } return function () { return new IteratorConstructor(this) }
  }

  var TO_STRING_TAG = NAME + ' Iterator'
  var INCORRECT_VALUES_NAME = false
  var IterablePrototype = Iterable.prototype
  var nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
  var CurrentIteratorPrototype, methods, KEY

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
        } else if (typeof CurrentIteratorPrototype[ITERATOR] !== 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis)
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true
    defaultIterator = function values () { return nativeIterator.call(this) }
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator)
  }
  Iterators[NAME] = defaultIterator

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    }
    if (FORCED) {
 for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY])
      }
    }
} else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods)
  }

  return methods
}
/***/ },

/***/ '7f9a':
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var inspectSource = __webpack_require__('8925')

var WeakMap = global.WeakMap

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap))
/***/ },

/***/ '825a':
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object')
  } return it
}
/***/ },

/***/ '83ab':
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
})
/***/ },

/***/ 8418:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var toPrimitive = __webpack_require__('c04e')
var definePropertyModule = __webpack_require__('9bf2')
var createPropertyDescriptor = __webpack_require__('5c6c')

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key)
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
  else object[propertyKey] = value
}
/***/ },

/***/ '857a':
/***/ function (module, exports, __webpack_require__) {
var requireObjectCoercible = __webpack_require__('1d80')

var quot = /"/g

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string))
  var p1 = '<' + tag
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"'
  return p1 + '>' + S + '</' + tag + '>'
}
/***/ },

/***/ '861d':
/***/ function (module, exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function'
}
/***/ },

/***/ 8925:
/***/ function (module, exports, __webpack_require__) {
var store = __webpack_require__('c6cd')

var functionToString = Function.toString

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource !== 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it)
  }
}

module.exports = store.inspectSource
/***/ },

/***/ '8aa5':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var charAt = __webpack_require__('6547').charAt

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1)
}
/***/ },

/***/ '8bbf':
/***/ function (module, exports) {
module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__
/***/ },

/***/ '8eb7':
/***/ function (module, exports) {
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome

// Actual IE browser for compatibility mode
var _ie_real_version

// Platforms
var _osx, _windows, _linux, _android

// Architectures
var _win64

// Devices
var _iphone, _ipad, _native

var _mobile

function _populate () {
  if (_populated) {
    return
  }

  _populated = true

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas)
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas)

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas)
  _ipad = /\b(iP[ao]d)/.exec(uas)
  _android = /Android/i.exec(uas)
  _native = /FBAN\/\w+;/i.exec(uas)
  _mobile = /Mobile/i.exec(uas)

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas))

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN)
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas)
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN
    _opera = agent[3] ? parseFloat(agent[3]) : NaN
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas)
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN
    } else {
      _chrome = NaN
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas)

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true
    } else {
      _osx = false
    }
    _windows = !!os[2]
    _linux = !!os[3]
  } else {
    _osx = _windows = _linux = false
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function () {
    return _populate() || _ie
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function () {
    return _populate() || (_ie_real_version > _ie)
  },

  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function () {
    return UserAgent_DEPRECATED.ie() && _win64
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function () {
    return _populate() || _firefox
  },

  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function () {
    return _populate() || _opera
  },

  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function () {
    return _populate() || _webkit
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function () {
    return UserAgent_DEPRECATED.webkit()
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function () {
    return _populate() || _chrome
  },

  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function () {
    return _populate() || _windows
  },

  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function () {
    return _populate() || _osx
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function () {
    return _populate() || _linux
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function () {
    return _populate() || _iphone
  },

  mobile: function () {
    return _populate() || (_iphone || _ipad || _android || _mobile)
  },

  nativeApp: function () {
    // webviews inside of the native apps
    return _populate() || _native
  },

  android: function () {
    return _populate() || _android
  },

  ipad: function () {
    return _populate() || _ipad
  }
}

module.exports = UserAgent_DEPRECATED
/***/ },

/***/ '90e3':
/***/ function (module, exports) {
var id = 0
var postfix = Math.random()

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
}
/***/ },

/***/ 9112:
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var definePropertyModule = __webpack_require__('9bf2')
var createPropertyDescriptor = __webpack_require__('5c6c')

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
} : function (object, key, value) {
  object[key] = value
  return object
}
/***/ },

/***/ 9263:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var regexpFlags = __webpack_require__('ad6d')
var stickyHelpers = __webpack_require__('9f7f')

var nativeExec = RegExp.prototype.exec
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace

var patchedExec = nativeExec

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/
  var re2 = /b*/g
  nativeExec.call(re1, 'a')
  nativeExec.call(re2, 'a')
  return re1.lastIndex !== 0 || re2.lastIndex !== 0
})()

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y

if (PATCH) {
  patchedExec = function exec (str) {
    var re = this
    var lastIndex, reCopy, match, i
    var sticky = UNSUPPORTED_Y && re.sticky
    var flags = regexpFlags.call(re)
    var source = re.source
    var charsAdded = 0
    var strCopy = str

    if (sticky) {
      flags = flags.replace('y', '')
      if (flags.indexOf('g') === -1) {
        flags += 'g'
      }

      strCopy = String(str).slice(re.lastIndex)
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')'
        strCopy = ' ' + strCopy
        charsAdded++
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags)
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags)
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex

    match = nativeExec.call(sticky ? reCopy : re, strCopy)

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded)
        match[0] = match[0].slice(charsAdded)
        match.index = re.lastIndex
        re.lastIndex += match[0].length
      } else re.lastIndex = 0
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined
        }
      })
    }

    return match
  }
}

module.exports = patchedExec
/***/ },

/***/ '94ca':
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')

var replacement = /#|\.prototype\./

var isForced = function (feature, detection) {
  var value = data[normalize(feature)]
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection === 'function' ? fails(detection)
    : !!detection
}

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase()
}

var data = isForced.data = {}
var NATIVE = isForced.NATIVE = 'N'
var POLYFILL = isForced.POLYFILL = 'P'

module.exports = isForced
/***/ },

/***/ '99af':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var fails = __webpack_require__('d039')
var isArray = __webpack_require__('e8b5')
var isObject = __webpack_require__('861d')
var toObject = __webpack_require__('7b0b')
var toLength = __webpack_require__('50c4')
var createProperty = __webpack_require__('8418')
var arraySpeciesCreate = __webpack_require__('65f0')
var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
var wellKnownSymbol = __webpack_require__('b622')
var V8_VERSION = __webpack_require__('2d00')

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = []
  array[IS_CONCAT_SPREADABLE] = false
  return array.concat()[0] !== array
})

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat')

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false
  var spreadable = O[IS_CONCAT_SPREADABLE]
  return spreadable !== undefined ? !!spreadable : isArray(O)
}

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat (arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this)
    var A = arraySpeciesCreate(O, 0)
    var n = 0
    var i, k, length, len, E
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i]
      if (isConcatSpreadable(E)) {
        len = toLength(E.length)
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k])
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
        createProperty(A, n++, E)
      }
    }
    A.length = n
    return A
  }
})
/***/ },

/***/ '9bf2':
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var IE8_DOM_DEFINE = __webpack_require__('0cfb')
var anObject = __webpack_require__('825a')
var toPrimitive = __webpack_require__('c04e')

var nativeDefineProperty = Object.defineProperty

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty (O, P, Attributes) {
  anObject(O)
  P = toPrimitive(P, true)
  anObject(Attributes)
  if (IE8_DOM_DEFINE) {
 try {
    return nativeDefineProperty(O, P, Attributes)
  } catch (error) { /* empty */ }
}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported')
  if ('value' in Attributes) O[P] = Attributes.value
  return O
}
/***/ },

/***/ '9ed3':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var IteratorPrototype = __webpack_require__('ae93').IteratorPrototype
var create = __webpack_require__('7c73')
var createPropertyDescriptor = __webpack_require__('5c6c')
var setToStringTag = __webpack_require__('d44e')
var Iterators = __webpack_require__('3f8c')

var returnThis = function () { return this }

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator'
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) })
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
  Iterators[TO_STRING_TAG] = returnThis
  return IteratorConstructor
}
/***/ },

/***/ '9f7f':
/***/ function (module, exports, __webpack_require__) {
'use strict'

var fails = __webpack_require__('d039')

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE (s, f) {
  return RegExp(s, f)
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y')
  re.lastIndex = 2
  return re.exec('abcd') != null
})

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy')
  re.lastIndex = 2
  return re.exec('str') != null
})
/***/ },

/***/ a0cf:
/***/ function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ },

/***/ a15b:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var IndexedObject = __webpack_require__('44ad')
var toIndexedObject = __webpack_require__('fc6a')
var arrayMethodIsStrict = __webpack_require__('a640')

var nativeJoin = [].join

var ES3_STRINGS = IndexedObject != Object
var STRICT_METHOD = arrayMethodIsStrict('join', ',')

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join (separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator)
  }
})
/***/ },

/***/ a3de:
/***/ function (module, exports, __webpack_require__) {
'use strict'
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/* jslint evil: true */

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

}

module.exports = ExecutionEnvironment
/***/ },

/***/ a434:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var toAbsoluteIndex = __webpack_require__('23cb')
var toInteger = __webpack_require__('a691')
var toLength = __webpack_require__('50c4')
var toObject = __webpack_require__('7b0b')
var arraySpeciesCreate = __webpack_require__('65f0')
var createProperty = __webpack_require__('8418')
var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice')
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 })

var max = Math.max
var min = Math.min
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice (start, deleteCount /* , ...items */) {
    var O = toObject(this)
    var len = toLength(O.length)
    var actualStart = toAbsoluteIndex(start, len)
    var argumentsLength = arguments.length
    var insertCount, actualDeleteCount, A, k, from, to
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0
    } else if (argumentsLength === 1) {
      insertCount = 0
      actualDeleteCount = len - actualStart
    } else {
      insertCount = argumentsLength - 2
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart)
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED)
    }
    A = arraySpeciesCreate(O, actualDeleteCount)
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k
      if (from in O) createProperty(A, k, O[from])
    }
    A.length = actualDeleteCount
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount
        to = k + insertCount
        if (from in O) O[to] = O[from]
        else delete O[to]
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1]
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1
        to = k + insertCount - 1
        if (from in O) O[to] = O[from]
        else delete O[to]
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2]
    }
    O.length = len - actualDeleteCount + insertCount
    return A
  }
})
/***/ },

/***/ a4d3:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var global = __webpack_require__('da84')
var getBuiltIn = __webpack_require__('d066')
var IS_PURE = __webpack_require__('c430')
var DESCRIPTORS = __webpack_require__('83ab')
var NATIVE_SYMBOL = __webpack_require__('4930')
var USE_SYMBOL_AS_UID = __webpack_require__('fdbf')
var fails = __webpack_require__('d039')
var has = __webpack_require__('5135')
var isArray = __webpack_require__('e8b5')
var isObject = __webpack_require__('861d')
var anObject = __webpack_require__('825a')
var toObject = __webpack_require__('7b0b')
var toIndexedObject = __webpack_require__('fc6a')
var toPrimitive = __webpack_require__('c04e')
var createPropertyDescriptor = __webpack_require__('5c6c')
var nativeObjectCreate = __webpack_require__('7c73')
var objectKeys = __webpack_require__('df75')
var getOwnPropertyNamesModule = __webpack_require__('241c')
var getOwnPropertyNamesExternal = __webpack_require__('057f')
var getOwnPropertySymbolsModule = __webpack_require__('7418')
var getOwnPropertyDescriptorModule = __webpack_require__('06cf')
var definePropertyModule = __webpack_require__('9bf2')
var propertyIsEnumerableModule = __webpack_require__('d1e7')
var createNonEnumerableProperty = __webpack_require__('9112')
var redefine = __webpack_require__('6eeb')
var shared = __webpack_require__('5692')
var sharedKey = __webpack_require__('f772')
var hiddenKeys = __webpack_require__('d012')
var uid = __webpack_require__('90e3')
var wellKnownSymbol = __webpack_require__('b622')
var wrappedWellKnownSymbolModule = __webpack_require__('e538')
var defineWellKnownSymbol = __webpack_require__('746f')
var setToStringTag = __webpack_require__('d44e')
var InternalStateModule = __webpack_require__('69f3')
var $forEach = __webpack_require__('b727').forEach

var HIDDEN = sharedKey('hidden')
var SYMBOL = 'Symbol'
var PROTOTYPE = 'prototype'
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
var setInternalState = InternalStateModule.set
var getInternalState = InternalStateModule.getterFor(SYMBOL)
var ObjectPrototype = Object[PROTOTYPE]
var $Symbol = global.Symbol
var $stringify = getBuiltIn('JSON', 'stringify')
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
var nativeDefineProperty = definePropertyModule.f
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f
var AllSymbols = shared('symbols')
var ObjectPrototypeSymbols = shared('op-symbols')
var StringToSymbolRegistry = shared('string-to-symbol-registry')
var SymbolToStringRegistry = shared('symbol-to-string-registry')
var WellKnownSymbolsStore = shared('wks')
var QObject = global.QObject
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
  })).a != 7
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
  nativeDefineProperty(O, P, Attributes)
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
  }
} : nativeDefineProperty

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE])
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  })
  if (!DESCRIPTORS) symbol.description = description
  return symbol
}

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it === 'symbol'
} : function (it) {
  return Object(it) instanceof $Symbol
}

var $defineProperty = function defineProperty (O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
  anObject(O)
  var key = toPrimitive(P, true)
  anObject(Attributes)
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}))
      O[HIDDEN][key] = true
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
    } return setSymbolDescriptor(O, key, Attributes)
  } return nativeDefineProperty(O, key, Attributes)
}

var $defineProperties = function defineProperties (O, Properties) {
  anObject(O)
  var properties = toIndexedObject(Properties)
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key])
  })
  return O
}

var $create = function create (O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
}

var $propertyIsEnumerable = function propertyIsEnumerable (V) {
  var P = toPrimitive(V, true)
  var enumerable = nativePropertyIsEnumerable.call(this, P)
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true
}

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
  var it = toIndexedObject(O)
  var key = toPrimitive(P, true)
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return
  var descriptor = nativeGetOwnPropertyDescriptor(it, key)
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true
  }
  return descriptor
}

var $getOwnPropertyNames = function getOwnPropertyNames (O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O))
  var result = []
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key)
  })
  return result
}

var $getOwnPropertySymbols = function getOwnPropertySymbols (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
  var result = []
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key])
    }
  })
  return result
}

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol () {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor')
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0])
    var tag = uid(description)
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value)
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value))
    }
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter })
    return wrap(tag, description)
  }

  redefine($Symbol[PROTOTYPE], 'toString', function toString () {
    return getInternalState(this).tag
  })

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description)
  })

  propertyIsEnumerableModule.f = $propertyIsEnumerable
  definePropertyModule.f = $defineProperty
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name)
  }

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description () {
        return getInternalState(this).description
      }
    })
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true })
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
})

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name)
})

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  for: function (key) {
    var string = String(key)
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
    var symbol = $Symbol(string)
    StringToSymbolRegistry[string] = symbol
    SymbolToStringRegistry[symbol] = string
    return symbol
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor (sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol')
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
  },
  useSetter: function () { USE_SETTER = true },
  useSimple: function () { USE_SETTER = false }
})

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
})

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
})

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1) }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols (it) {
    return getOwnPropertySymbolsModule.f(toObject(it))
  }
})

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol()
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]' ||
      // WebKit converts symbol values to JSON as null
      $stringify({ a: symbol }) != '{}' ||
      // V8 throws on boxed symbols
      $stringify(Object(symbol)) != '{}'
  })

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify (it, replacer, space) {
      var args = [it]
      var index = 1
      var $replacer
      while (arguments.length > index) args.push(arguments[index++])
      $replacer = replacer
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
      if (!isArray(replacer)) {
 replacer = function (key, value) {
        if (typeof $replacer === 'function') value = $replacer.call(this, key, value)
        if (!isSymbol(value)) return value
      }
}
      args[1] = replacer
      return $stringify.apply(null, args)
    }
  })
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL)

hiddenKeys[HIDDEN] = true
/***/ },

/***/ a640:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var fails = __webpack_require__('d039')

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME]
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1 }, 1)
  })
}
/***/ },

/***/ a691:
/***/ function (module, exports) {
var ceil = Math.ceil
var floor = Math.floor

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
}
/***/ },

/***/ a9e3:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var DESCRIPTORS = __webpack_require__('83ab')
var global = __webpack_require__('da84')
var isForced = __webpack_require__('94ca')
var redefine = __webpack_require__('6eeb')
var has = __webpack_require__('5135')
var classof = __webpack_require__('c6b6')
var inheritIfRequired = __webpack_require__('7156')
var toPrimitive = __webpack_require__('c04e')
var fails = __webpack_require__('d039')
var create = __webpack_require__('7c73')
var getOwnPropertyNames = __webpack_require__('241c').f
var getOwnPropertyDescriptor = __webpack_require__('06cf').f
var defineProperty = __webpack_require__('9bf2').f
var trim = __webpack_require__('58a8').trim

var NUMBER = 'Number'
var NativeNumber = global[NUMBER]
var NumberPrototype = NativeNumber.prototype

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false)
  var first, third, radix, maxCode, digits, length, index, code
  if (typeof it === 'string' && it.length > 2) {
    it = trim(it)
    first = it.charCodeAt(0)
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2)
      if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break // fast equal of /^0o[0-7]+$/i
        default: return +it
      }
      digits = it.slice(2)
      length = digits.length
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index)
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN
      } return parseInt(digits, radix)
    }
  } return +it
}

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number (value) {
    var it = arguments.length < 1 ? 0 : value
    var dummy = this
    return dummy instanceof NumberWrapper &&
      // check on 1..constructor(foo) case
      (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy) }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it)
  }
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key))
    }
  }
  NumberWrapper.prototype = NumberPrototype
  NumberPrototype.constructor = NumberWrapper
  redefine(global, NUMBER, NumberWrapper)
}
/***/ },

/***/ ac1f:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var exec = __webpack_require__('9263')

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
})
/***/ },

/***/ ad6d:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var anObject = __webpack_require__('825a')

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this)
  var result = ''
  if (that.global) result += 'g'
  if (that.ignoreCase) result += 'i'
  if (that.multiline) result += 'm'
  if (that.dotAll) result += 's'
  if (that.unicode) result += 'u'
  if (that.sticky) result += 'y'
  return result
}
/***/ },

/***/ ae40:
/***/ function (module, exports, __webpack_require__) {
var DESCRIPTORS = __webpack_require__('83ab')
var fails = __webpack_require__('d039')
var has = __webpack_require__('5135')

var defineProperty = Object.defineProperty
var cache = {}

var thrower = function (it) { throw it }

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME]
  if (!options) options = {}
  var method = [][METHOD_NAME]
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false
  var argument0 = has(options, 0) ? options[0] : thrower
  var argument1 = has(options, 1) ? options[1] : undefined

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true
    var O = { length: -1 }

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower })
    else O[1] = 1

    method.call(O, argument0, argument1)
  })
}
/***/ },

/***/ ae93:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var getPrototypeOf = __webpack_require__('e163')
var createNonEnumerableProperty = __webpack_require__('9112')
var has = __webpack_require__('5135')
var wellKnownSymbol = __webpack_require__('b622')
var IS_PURE = __webpack_require__('c430')

var ITERATOR = wellKnownSymbol('iterator')
var BUGGY_SAFARI_ITERATORS = false

var returnThis = function () { return this }

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

if ([].keys) {
  arrayIterator = [].keys()
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis)
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
}
/***/ },

/***/ af03:
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"')
    return test !== test.toLowerCase() || test.split('"').length > 3
  })
}
/***/ },

/***/ b041:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
var classof = __webpack_require__('f5df')

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString () {
  return '[object ' + classof(this) + ']'
}
/***/ },

/***/ b622:
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var shared = __webpack_require__('5692')
var has = __webpack_require__('5135')
var uid = __webpack_require__('90e3')
var NATIVE_SYMBOL = __webpack_require__('4930')
var USE_SYMBOL_AS_UID = __webpack_require__('fdbf')

var WellKnownSymbolsStore = shared('wks')
var Symbol = global.Symbol
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
  } return WellKnownSymbolsStore[name]
}
/***/ },

/***/ b64b:
/***/ function (module, exports, __webpack_require__) {
var $ = __webpack_require__('23e7')
var toObject = __webpack_require__('7b0b')
var nativeKeys = __webpack_require__('df75')
var fails = __webpack_require__('d039')

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1) })

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys (it) {
    return nativeKeys(toObject(it))
  }
})
/***/ },

/***/ b680:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var toInteger = __webpack_require__('a691')
var thisNumberValue = __webpack_require__('408a')
var repeat = __webpack_require__('1148')
var fails = __webpack_require__('d039')

var nativeToFixed = 1.0.toFixed
var floor = Math.floor

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)
}

var log = function (x) {
  var n = 0
  var x2 = x
  while (x2 >= 4096) {
    n += 12
    x2 /= 4096
  }
  while (x2 >= 2) {
    n += 1
    x2 /= 2
  } return n
}

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({})
})

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed (fractionDigits) {
    var number = thisNumberValue(this)
    var fractDigits = toInteger(fractionDigits)
    var data = [0, 0, 0, 0, 0, 0]
    var sign = ''
    var result = '0'
    var e, z, j, k

    var multiply = function (n, c) {
      var index = -1
      var c2 = c
      while (++index < 6) {
        c2 += n * data[index]
        data[index] = c2 % 1e7
        c2 = floor(c2 / 1e7)
      }
    }

    var divide = function (n) {
      var index = 6
      var c = 0
      while (--index >= 0) {
        c += data[index]
        data[index] = floor(c / n)
        c = (c % n) * 1e7
      }
    }

    var dataToString = function () {
      var index = 6
      var s = ''
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index])
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t
        }
      } return s
    }

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits')
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN'
    if (number <= -1e21 || number >= 1e21) return String(number)
    if (number < 0) {
      sign = '-'
      number = -number
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1)
      z *= 0x10000000000000
      e = 52 - e
      if (e > 0) {
        multiply(0, z)
        j = fractDigits
        while (j >= 7) {
          multiply(1e7, 0)
          j -= 7
        }
        multiply(pow(10, j, 1), 0)
        j = e - 1
        while (j >= 23) {
          divide(1 << 23)
          j -= 23
        }
        divide(1 << j)
        multiply(1, 1)
        divide(2)
        result = dataToString()
      } else {
        multiply(0, z)
        multiply(1 << -e, 0)
        result = dataToString() + repeat.call('0', fractDigits)
      }
    }
    if (fractDigits > 0) {
      k = result.length
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits))
    } else {
      result = sign + result
    } return result
  }
})
/***/ },

/***/ b727:
/***/ function (module, exports, __webpack_require__) {
var bind = __webpack_require__('0366')
var IndexedObject = __webpack_require__('44ad')
var toObject = __webpack_require__('7b0b')
var toLength = __webpack_require__('50c4')
var arraySpeciesCreate = __webpack_require__('65f0')

var push = [].push

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1
  var IS_FILTER = TYPE == 2
  var IS_SOME = TYPE == 3
  var IS_EVERY = TYPE == 4
  var IS_FIND_INDEX = TYPE == 6
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this)
    var self = IndexedObject(O)
    var boundFunction = bind(callbackfn, that, 3)
    var length = toLength(self.length)
    var index = 0
    var create = specificCreate || arraySpeciesCreate
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
    var value, result
    for (;length > index; index++) {
 if (NO_HOLES || index in self) {
      value = self[index]
      result = boundFunction(value, index, O)
      if (TYPE) {
        if (IS_MAP) target[index] = result // map
        else if (result) {
 switch (TYPE) {
          case 3: return true // some
          case 5: return value // find
          case 6: return index // findIndex
          case 2: push.call(target, value) // filter
        }
} else if (IS_EVERY) return false // every
      }
    }
}
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
  }
}

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
}
/***/ },

/***/ c04e:
/***/ function (module, exports, __webpack_require__) {
var isObject = __webpack_require__('861d')

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input
  var fn, val
  if (PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
  if (typeof (fn = input.valueOf) === 'function' && !isObject(val = fn.call(input))) return val
  if (!PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
  throw TypeError("Can't convert object to primitive value")
}
/***/ },

/***/ c098:
/***/ function (module, exports, __webpack_require__) {
module.exports = __webpack_require__('d4af')
/***/ },

/***/ c430:
/***/ function (module, exports) {
module.exports = false
/***/ },

/***/ c6b6:
/***/ function (module, exports) {
var toString = {}.toString

module.exports = function (it) {
  return toString.call(it).slice(8, -1)
}
/***/ },

/***/ c6cd:
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var setGlobal = __webpack_require__('ce4e')

var SHARED = '__core-js_shared__'
var store = global[SHARED] || setGlobal(SHARED, {})

module.exports = store
/***/ },

/***/ c7cd:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var createHTML = __webpack_require__('857a')
var forcedStringHTMLMethod = __webpack_require__('af03')

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed () {
    return createHTML(this, 'tt', '', '')
  }
})
/***/ },

/***/ c8ba:
/***/ function (module, exports) {
var g

// This works in non-strict mode
g = (function () {
	return this
})()

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function('return this')()
} catch (e) {
	// This works if the window reference is available
	if (typeof window === 'object') g = window
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g
/***/ },

/***/ c975:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var $indexOf = __webpack_require__('4d64').indexOf
var arrayMethodIsStrict = __webpack_require__('a640')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var nativeIndexOf = [].indexOf

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0
var STRICT_METHOD = arrayMethodIsStrict('indexOf')
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 })

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf (searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined)
  }
})
/***/ },

/***/ ca84:
/***/ function (module, exports, __webpack_require__) {
var has = __webpack_require__('5135')
var toIndexedObject = __webpack_require__('fc6a')
var indexOf = __webpack_require__('4d64').indexOf
var hiddenKeys = __webpack_require__('d012')

module.exports = function (object, names) {
  var O = toIndexedObject(object)
  var i = 0
  var result = []
  var key
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key)
  // Don't enum bug & hidden keys
  while (names.length > i) {
 if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key)
  }
}
  return result
}
/***/ },

/***/ cc12:
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var isObject = __webpack_require__('861d')

var document = global.document
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement)

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {}
}
/***/ },

/***/ cca6:
/***/ function (module, exports, __webpack_require__) {
var $ = __webpack_require__('23e7')
var assign = __webpack_require__('60da')

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
})
/***/ },

/***/ ce4e:
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var createNonEnumerableProperty = __webpack_require__('9112')

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value)
  } catch (error) {
    global[key] = value
  } return value
}
/***/ },

/***/ d012:
/***/ function (module, exports) {
module.exports = {}
/***/ },

/***/ d039:
/***/ function (module, exports) {
module.exports = function (exec) {
  try {
    return !!exec()
  } catch (error) {
    return true
  }
}
/***/ },

/***/ d066:
/***/ function (module, exports, __webpack_require__) {
var path = __webpack_require__('428f')
var global = __webpack_require__('da84')

var aFunction = function (variable) {
  return typeof variable === 'function' ? variable : undefined
}

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method]
}
/***/ },

/***/ d1e7:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var nativePropertyIsEnumerable = {}.propertyIsEnumerable
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1)

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable (V) {
  var descriptor = getOwnPropertyDescriptor(this, V)
  return !!descriptor && descriptor.enumerable
} : nativePropertyIsEnumerable
/***/ },

/***/ d28b:
/***/ function (module, exports, __webpack_require__) {
var defineWellKnownSymbol = __webpack_require__('746f')

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator')
/***/ },

/***/ d2bb:
/***/ function (module, exports, __webpack_require__) {
var anObject = __webpack_require__('825a')
var aPossiblePrototype = __webpack_require__('3bbe')

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
  var CORRECT_SETTER = false
  var test = {}
  var setter
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
    setter.call(test, [])
    CORRECT_SETTER = test instanceof Array
  } catch (error) { /* empty */ }
  return function setPrototypeOf (O, proto) {
    anObject(O)
    aPossiblePrototype(proto)
    if (CORRECT_SETTER) setter.call(O, proto)
    else O.__proto__ = proto
    return O
  }
}()) : undefined)
/***/ },

/***/ d3b7:
/***/ function (module, exports, __webpack_require__) {
var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
var redefine = __webpack_require__('6eeb')
var toString = __webpack_require__('b041')

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true })
}
/***/ },

/***/ d44e:
/***/ function (module, exports, __webpack_require__) {
var defineProperty = __webpack_require__('9bf2').f
var has = __webpack_require__('5135')
var wellKnownSymbol = __webpack_require__('b622')

var TO_STRING_TAG = wellKnownSymbol('toStringTag')

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG })
  }
}
/***/ },

/***/ d4af:
/***/ function (module, exports, __webpack_require__) {
'use strict'
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */

var UserAgent_DEPRECATED = __webpack_require__('8eb7')

var isEventSupported = __webpack_require__('7b3e')

// Reasonable defaults
var PIXEL_STEP = 10
var LINE_HEIGHT = 40
var PAGE_HEIGHT = 800

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel (/* object */ event) /* object */ {
  var sX = 0; var sY = 0 // spinX, spinY
      var pX = 0; var pY = 0 // pixelX, pixelY

  // Legacy
  if ('detail' in event) { sY = event.detail }
  if ('wheelDelta' in event) { sY = -event.wheelDelta / 120 }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120 }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120 }

  // side scrolling on FF with DOMMouseScroll
  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY
    sY = 0
  }

  pX = sX * PIXEL_STEP
  pY = sY * PIXEL_STEP

  if ('deltaY' in event) { pY = event.deltaY }
  if ('deltaX' in event) { pX = event.deltaX }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) { // delta in LINE units
      pX *= LINE_HEIGHT
      pY *= LINE_HEIGHT
    } else { // delta in PAGE units
      pX *= PAGE_HEIGHT
      pY *= PAGE_HEIGHT
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1 }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1 }

  return {
 spinX: sX,
           spinY: sY,
           pixelX: pX,
           pixelY: pY
}
}

/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function () /* string */ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel'
}

module.exports = normalizeWheel
/***/ },

/***/ d58f:
/***/ function (module, exports, __webpack_require__) {
var aFunction = __webpack_require__('1c0b')
var toObject = __webpack_require__('7b0b')
var IndexedObject = __webpack_require__('44ad')
var toLength = __webpack_require__('50c4')

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn)
    var O = toObject(that)
    var self = IndexedObject(O)
    var length = toLength(O.length)
    var index = IS_RIGHT ? length - 1 : 0
    var i = IS_RIGHT ? -1 : 1
    if (argumentsLength < 2) {
 while (true) {
      if (index in self) {
        memo = self[index]
        index += i
        break
      }
      index += i
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value')
      }
    }
}
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) {
 if (index in self) {
      memo = callbackfn(memo, self[index], index, O)
    }
}
    return memo
  }
}

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
}
/***/ },

/***/ d784:
/***/ function (module, exports, __webpack_require__) {
'use strict'

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__('ac1f')
var redefine = __webpack_require__('6eeb')
var fails = __webpack_require__('d039')
var wellKnownSymbol = __webpack_require__('b622')
var regexpExec = __webpack_require__('9263')
var createNonEnumerableProperty = __webpack_require__('9112')

var SPECIES = wellKnownSymbol('species')

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./
  re.exec = function () {
    var result = []
    result.groups = { a: '7' }
    return result
  }
  return ''.replace(re, '$<a>') !== '7'
})

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0'
})()

var REPLACE = wellKnownSymbol('replace')
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === ''
  }
  return false
})()

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/
  var originalExec = re.exec
  re.exec = function () { return originalExec.apply(this, arguments) }
  var result = 'ab'.split(re)
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b'
})

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY)

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {}
    O[SYMBOL] = function () { return 7 }
    return ''[KEY](O) != 7
  })

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false
    var re = /a/

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {}
      re.constructor[SPECIES] = function () { return re }
      re.flags = ''
      re[SYMBOL] = /./[SYMBOL]
    }

    re.exec = function () { execCalled = true; return null }

    re[SYMBOL]('')
    return !execCalled
  })

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL]
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) }
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) }
      }
      return { done: false }
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    })
    var stringMethod = methods[0]
    var regexMethod = methods[1]

    redefine(String.prototype, KEY, stringMethod)
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg) }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this) }
    )
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true)
}
/***/ },

/***/ d81d:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var $map = __webpack_require__('b727').map
var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map')

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map (callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
  }
})
/***/ },

/***/ da84:
/***/ function (module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function (global) {
 var check = function (it) {
  return it && it.Math == Math && it
}

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')()
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
/***/ },

/***/ ddb0:
/***/ function (module, exports, __webpack_require__) {
var global = __webpack_require__('da84')
var DOMIterables = __webpack_require__('fdbc')
var ArrayIteratorMethods = __webpack_require__('e260')
var createNonEnumerableProperty = __webpack_require__('9112')
var wellKnownSymbol = __webpack_require__('b622')

var ITERATOR = wellKnownSymbol('iterator')
var TO_STRING_TAG = wellKnownSymbol('toStringTag')
var ArrayValues = ArrayIteratorMethods.values

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME]
  var CollectionPrototype = Collection && Collection.prototype
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) {
 try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues
    }
}
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME)
    }
    if (DOMIterables[COLLECTION_NAME]) {
 for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
 try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME])
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME]
      }
}
    }
}
  }
}
/***/ },

/***/ df75:
/***/ function (module, exports, __webpack_require__) {
var internalObjectKeys = __webpack_require__('ca84')
var enumBugKeys = __webpack_require__('7839')

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys (O) {
  return internalObjectKeys(O, enumBugKeys)
}
/***/ },

/***/ e01a:
/***/ function (module, exports, __webpack_require__) {
'use strict'
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__('23e7')
var DESCRIPTORS = __webpack_require__('83ab')
var global = __webpack_require__('da84')
var has = __webpack_require__('5135')
var isObject = __webpack_require__('861d')
var defineProperty = __webpack_require__('9bf2').f
var copyConstructorProperties = __webpack_require__('e893')

var NativeSymbol = global.Symbol

if (DESCRIPTORS && typeof NativeSymbol === 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {}
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol () {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0])
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description)
    if (description === '') EmptyStringDescriptionStore[result] = true
    return result
  }
  copyConstructorProperties(SymbolWrapper, NativeSymbol)
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype
  symbolPrototype.constructor = SymbolWrapper

  var symbolToString = symbolPrototype.toString
  var native = String(NativeSymbol('test')) == 'Symbol(test)'
  var regexp = /^Symbol\((.*)\)[^)]+$/
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description () {
      var symbol = isObject(this) ? this.valueOf() : this
      var string = symbolToString.call(symbol)
      if (has(EmptyStringDescriptionStore, symbol)) return ''
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1')
      return desc === '' ? undefined : desc
    }
  })

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  })
}
/***/ },

/***/ e163:
/***/ function (module, exports, __webpack_require__) {
var has = __webpack_require__('5135')
var toObject = __webpack_require__('7b0b')
var sharedKey = __webpack_require__('f772')
var CORRECT_PROTOTYPE_GETTER = __webpack_require__('e177')

var IE_PROTO = sharedKey('IE_PROTO')
var ObjectPrototype = Object.prototype

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O)
  if (has(O, IE_PROTO)) return O[IE_PROTO]
  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
    return O.constructor.prototype
  } return O instanceof Object ? ObjectPrototype : null
}
/***/ },

/***/ e177:
/***/ function (module, exports, __webpack_require__) {
var fails = __webpack_require__('d039')

module.exports = !fails(function () {
  function F () { /* empty */ }
  F.prototype.constructor = null
  return Object.getPrototypeOf(new F()) !== F.prototype
})
/***/ },

/***/ e260:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var toIndexedObject = __webpack_require__('fc6a')
var addToUnscopables = __webpack_require__('44d2')
var Iterators = __webpack_require__('3f8c')
var InternalStateModule = __webpack_require__('69f3')
var defineIterator = __webpack_require__('7dd0')

var ARRAY_ITERATOR = 'Array Iterator'
var setInternalState = InternalStateModule.set
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0, // next index
    kind: kind // kind
  })
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this)
  var target = state.target
  var kind = state.kind
  var index = state.index++
  if (!target || index >= target.length) {
    state.target = undefined
    return { value: undefined, done: true }
  }
  if (kind == 'keys') return { value: index, done: false }
  if (kind == 'values') return { value: target[index], done: false }
  return { value: [index, target[index]], done: false }
}, 'values')

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys')
addToUnscopables('values')
addToUnscopables('entries')
/***/ },

/***/ e538:
/***/ function (module, exports, __webpack_require__) {
var wellKnownSymbol = __webpack_require__('b622')

exports.f = wellKnownSymbol
/***/ },

/***/ e893:
/***/ function (module, exports, __webpack_require__) {
var has = __webpack_require__('5135')
var ownKeys = __webpack_require__('56ef')
var getOwnPropertyDescriptorModule = __webpack_require__('06cf')
var definePropertyModule = __webpack_require__('9bf2')

module.exports = function (target, source) {
  var keys = ownKeys(source)
  var defineProperty = definePropertyModule.f
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key))
  }
}
/***/ },

/***/ e8b5:
/***/ function (module, exports, __webpack_require__) {
var classof = __webpack_require__('c6b6')

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray (arg) {
  return classof(arg) == 'Array'
}
/***/ },

/***/ f313:
/***/ function (module, __webpack_exports__, __webpack_require__) {
'use strict'
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('a0cf')
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a)
/***/ },

/***/ f5df:
/***/ function (module, exports, __webpack_require__) {
var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
var classofRaw = __webpack_require__('c6b6')
var wellKnownSymbol = __webpack_require__('b622')

var TO_STRING_TAG = wellKnownSymbol('toStringTag')
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) == 'Arguments'

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key]
  } catch (error) { /* empty */ }
}

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) === 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : result
}
/***/ },

/***/ f6fd:
/***/ function (module, exports) {
// document.currentScript polyfill by Adam Miller

// MIT license

(function (document) {
  var currentScript = 'currentScript'
      var scripts = document.getElementsByTagName('script') // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function () {
        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error() } catch (err) {
          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i; var res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1]

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for (i in scripts) {
            if (scripts[i].src == res || scripts[i].readyState == 'interactive') {
              return scripts[i]
            }
          }

          // If no match, return null
          return null
        }
      }
    })
  }
})(document)
/***/ },

/***/ f772:
/***/ function (module, exports, __webpack_require__) {
var shared = __webpack_require__('5692')
var uid = __webpack_require__('90e3')

var keys = shared('keys')

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key))
}
/***/ },

/***/ fb15:
/***/ function (module, __webpack_exports__, __webpack_require__) {
'use strict'
__webpack_require__.r(__webpack_exports__)

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__('f6fd')
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null)

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__('cca6')

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"17a71186-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/vue-element-bigdata-table/table.vue?vue&type=template&id=7c546931&
var render = function () {
 var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', {
staticClass: 'el-table vue-element-bigdata-table',
class: [{
    'el-table--fit': _vm.fit,
    'el-table--striped': _vm.stripe,
    'el-table--border': _vm.border || _vm.isGroup,
    'el-table--hidden': _vm.isHidden,
    'el-table--group': _vm.isGroup,
    'el-table--fluid-height': _vm.maxHeight,
    'el-table--scrollable-x': _vm.layout.scrollX,
    'el-table--scrollable-y': _vm.layout.scrollY,
    'el-table--enable-row-hover': !_vm.store.states.isComplex,
    'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
  }, _vm.tableSize ? ('el-table--' + _vm.tableSize) : ''],
on: { mouseleave: function ($event) { return _vm.handleMouseLeave($event) } }
}, [_c('div', { ref: 'hiddenColumns', staticClass: 'hidden-columns' }, [_vm._t('default')], 2), (_vm.showHeader) ? _c('div', { directives: [{ name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleHeaderFooterMousewheel), expression: 'handleHeaderFooterMousewheel' }], ref: 'headerWrapper', staticClass: 'el-table__header-wrapper' }, [_c('table-header', {
ref: 'tableHeader',
style: ({
        width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
      }),
attrs: { store: _vm.store, border: _vm.border, 'default-sort': _vm.defaultSort }
})], 1) : _vm._e(), _c('div', { ref: 'bodyWrapper', staticClass: 'el-table__body-wrapper', class: [_vm.layout.scrollX ? ('is-scrolling-' + _vm.scrollPosition) : 'is-scrolling-none'], style: ([_vm.bodyHeight]), on: { DOMMouseScroll: _vm.handleScroll, scroll: _vm.handleScroll } }, [_c('div', [_c('div', { style: ({ height: (_vm.topPlaceholderHeight + 'px') }) }), _c('render-dom', {
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { render: _vm.renderTable, context: _vm.context, store: _vm.store, stripe: _vm.stripe, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle, highlight: _vm.highlightCurrentRow }
}), _c('div', { style: ({ height: (_vm.bottomPlaceholderHeight + 'px') }) })], 1), (!_vm.data || _vm.data.length === 0) ? _c('div', {
ref: 'emptyBlock',
staticClass: 'el-table__empty-block',
style: ({
        width: _vm.bodyWidth
      })
}, [_c('span', { staticClass: 'el-table__empty-text' }, [_vm._t('empty', [_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])], 2)]) : _vm._e(), (_vm.$slots.append) ? _c('div', { ref: 'appendWrapper', staticClass: 'el-table__append-wrapper' }, [_vm._t('append')], 2) : _vm._e()]), (_vm.showSummary) ? _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0' }, { name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleHeaderFooterMousewheel), expression: 'handleHeaderFooterMousewheel' }], ref: 'footerWrapper', staticClass: 'el-table__footer-wrapper' }, [_c('table-footer', {
style: ({
        width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
      }),
attrs: { store: _vm.store, border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, 'default-sort': _vm.defaultSort }
})], 1) : _vm._e(), (_vm.fixedColumns.length > 0) ? _c('div', {
directives: [{ name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleFixedMousewheel), expression: 'handleFixedMousewheel' }],
ref: 'fixedWrapper',
staticClass: 'el-table__fixed',
style: ([{
      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
    },
    _vm.fixedHeight])
}, [(_vm.showHeader) ? _c('div', { ref: 'fixedHeaderWrapper', staticClass: 'el-table__fixed-header-wrapper' }, [_c('table-header', {
ref: 'fixedTableHeader',
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { fixed: 'left', border: _vm.border, store: _vm.store }
})], 1) : _vm._e(), _c('div', {
ref: 'fixedBodyWrapper',
staticClass: 'el-table__fixed-body-wrapper',
style: ([{
        top: _vm.layout.headerHeight + 'px'
      },
      _vm.fixedBodyHeight])
}, [_c('div', [_c('div', { style: ({ height: (_vm.topPlaceholderHeight + 'px') }) }), _c('render-dom', {
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { render: _vm.renderTable, fixed: 'left', store: _vm.store, stripe: _vm.stripe, highlight: _vm.highlightCurrentRow, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle }
}), _c('div', { style: ({ height: (_vm.bottomPlaceholderHeight + 'px') }) })], 1), (_vm.$slots.append) ? _c('div', {
staticClass: 'el-table__append-gutter',
style: ({
          height: _vm.layout.appendHeight + 'px'
        })
}) : _vm._e()]), (_vm.showSummary) ? _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0' }], ref: 'fixedFooterWrapper', staticClass: 'el-table__fixed-footer-wrapper' }, [_c('table-footer', {
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { fixed: 'left', border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, store: _vm.store }
})], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
directives: [{ name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleFixedMousewheel), expression: 'handleFixedMousewheel' }],
ref: 'rightFixedWrapper',
staticClass: 'el-table__fixed-right',
style: ([{
      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '',
      right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 0)) + 'px' : ''
    },
    _vm.fixedHeight])
}, [(_vm.showHeader) ? _c('div', { ref: 'rightFixedHeaderWrapper', staticClass: 'el-table__fixed-header-wrapper' }, [_c('table-header', {
ref: 'rightFixedTableHeader',
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { fixed: 'right', border: _vm.border, store: _vm.store }
})], 1) : _vm._e(), _c('div', {
ref: 'rightFixedBodyWrapper',
staticClass: 'el-table__fixed-body-wrapper',
style: ([{
        top: _vm.layout.headerHeight + 'px'
      },
      _vm.fixedBodyHeight])
}, [_c('div', [_c('div', { style: ({ height: (_vm.topPlaceholderHeight + 'px') }) }), _c('render-dom', {
style: ({
            width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
          }),
attrs: { render: _vm.renderTable, fixed: 'right', store: _vm.store, stripe: _vm.stripe, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle, highlight: _vm.highlightCurrentRow }
}), _c('div', { style: ({ height: (_vm.bottomPlaceholderHeight + 'px') }) })], 1)]), (_vm.showSummary) ? _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0' }], ref: 'rightFixedFooterWrapper', staticClass: 'el-table__fixed-footer-wrapper' }, [_c('table-footer', {
style: ({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),
attrs: { fixed: 'right', border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, store: _vm.store }
})], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
ref: 'rightFixedPatch',
staticClass: 'el-table__fixed-right-patch',
style: ({
      width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
      height: _vm.layout.headerHeight + 'px'
    })
}) : _vm._e(), _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.resizeProxyVisible), expression: 'resizeProxyVisible' }], ref: 'resizeProxy', staticClass: 'el-table__column-resize-proxy' })])
}
var staticRenderFns = []

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table.vue?vue&type=template&id=7c546931&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__('4160')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__('a9e3')

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__('159b')

// EXTERNAL MODULE: ./node_modules/throttle-debounce/debounce.js
var debounce = __webpack_require__('0e15')
var debounce_default = /* #__PURE__ */__webpack_require__.n(debounce)

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__('6dd8')

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/resize-event.js

const isServer = typeof window === 'undefined'

/* istanbul ignore next */
const resizeHandler = function (entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach(fn => {
        fn()
      })
    }
  }
}

/* istanbul ignore next */
const addResizeListener = function (element, fn) {
  if (isServer) return
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__ro__ = new ResizeObserver_es['a' /* default */](resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
const removeResizeListener = function (element, fn) {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}

// EXTERNAL MODULE: ./node_modules/normalize-wheel/index.js
var normalize_wheel = __webpack_require__('c098')
var normalize_wheel_default = /* #__PURE__ */__webpack_require__.n(normalize_wheel)

// CONCATENATED MODULE: ./node_modules/element-ui/src/directives/mousewheel.js

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1

const mousewheel = function (element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      const normalized = normalize_wheel_default()(event)
      callback && callback.apply(this, [event, normalized])
    })
  }
}

/* harmony default export */ var directives_mousewheel = ({
  bind (el, binding) {
    mousewheel(el, binding.value)
  }
})

// CONCATENATED MODULE: ./node_modules/element-ui/src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择'
    },
    cascader: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      noData: '暂无数据'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    },
    popconfirm: {
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  }
})

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__('8bbf')
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /* #__PURE__ */__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_)

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__('3c4e')
var cjs_default = /* #__PURE__ */__webpack_require__.n(cjs)

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/types.js
function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

function types_isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isHtmlElement (node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

const isUndefined = (val) => {
  return val === void 0
}

const isDefined = (val) => {
  return val !== undefined && val !== null
}

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/util.js

const util_hasOwnProperty = Object.prototype.hasOwnProperty

function noop () {};

function hasOwn (obj, key) {
  return util_hasOwnProperty.call(obj, key)
};

function extend (to, _from) {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
};

function toObject (arr) {
  var res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
};

const getValueByPath = function (object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

function getPropByPath (obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
};

const generateId = function () {
  return Math.floor(Math.random() * 10000)
}

const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true
  if (!(a instanceof Array)) return false
  if (!(b instanceof Array)) return false
  if (a.length !== b.length) return false
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

// TODO: use native Array.find, Array.findIndex when IE support is dropped
const arrayFindIndex = function (arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

const arrayFind = function (arr, pred) {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}

// coerce truthy value to array
const coerceTruthyValueToArray = function (val) {
  if (Array.isArray(val)) {
    return val
  } else if (val) {
    return [val]
  } else {
    return []
  }
}

const isIE = function () {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && !isNaN(Number(document.documentMode))
}

const isEdge = function () {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1
}

const util_isFirefox = function () {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
}

const autoprefixer = function (style) {
  if (typeof style !== 'object') return style
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

const capitalize = function (str) {
  if (!isString(str)) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const looseEqual = function (a, b) {
  const isObjectA = types_isObject(a)
  const isObjectB = types_isObject(b)
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

const arrayEquals = function (arrayA, arrayB) {
  arrayA = arrayA || []
  arrayB = arrayB || []

  if (arrayA.length !== arrayB.length) {
    return false
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false
    }
  }

  return true
}

const isEqual = function (value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2)
  }
  return looseEqual(value1, value2)
}

const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true

  if (typeof val === 'boolean') return false

  if (typeof val === 'number') return !val

  if (val instanceof Error) return val.message === ''

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
}

function rafThrottle (fn) {
  let locked = false
  return function (...args) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(_ => {
      fn.apply(this, args)
      locked = false
    })
  }
}

function objToArray (obj) {
  if (Array.isArray(obj)) {
    return obj
  }
  return isEmpty(obj) ? [] : [obj]
}

// CONCATENATED MODULE: ./node_modules/element-ui/src/locale/format.js

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
/* harmony default export */ var format = function (Vue) {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template (string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0]
    }

    if (!args || !args.hasOwnProperty) {
      args = {}
    }

    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result

      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : null
        if (result === null || result === undefined) {
          return ''
        }

        return result
      }
    })
  }

  return template
}

// CONCATENATED MODULE: ./node_modules/element-ui/src/locale/index.js

const locale_format = format(external_commonjs_vue_commonjs2_vue_root_Vue_default.a)
let lang = zh_CN
let merged = false
let i18nHandler = function () {
  const vuei18n = Object.getPrototypeOf(this || external_commonjs_vue_commonjs2_vue_root_Vue_default.a).$t
  if (typeof vuei18n === 'function' && !!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale) {
    if (!merged) {
      merged = true
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale(
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.lang,
        cjs_default()(lang, external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale(external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.lang) || {}, { clone: true })
      )
    }
    return vuei18n.apply(this, arguments)
  }
}

const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments)
  if (value !== null && value !== undefined) return value

  const array = path.split('.')
  let current = lang

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) return locale_format(value, options)
    if (!value) return ''
    current = value
  }
  return ''
}

const use = function (l) {
  lang = l || lang
}

const i18n = function (fn) {
  i18nHandler = fn || i18nHandler
}

/* harmony default export */ var locale = ({ use, t, i18n })

// CONCATENATED MODULE: ./node_modules/element-ui/src/mixins/locale.js

/* harmony default export */ var mixins_locale = ({
  methods: {
    t (...args) {
      return t.apply(this, args)
    }
  }
})

// CONCATENATED MODULE: ./node_modules/element-ui/src/mixins/migrating.js

/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
/* harmony default export */ var migrating = ({
  mounted () {
    if (true) return
    if (!this.$vnode) return
    const { props = {}, events = {} } = this.getMigratingConfig()
    const { data, componentOptions } = this.$vnode
    const definedProps = data.attrs || {}
    const definedEvents = componentOptions.listeners || {}

    for (let propName in definedProps) {
      propName = kebabCase(propName) // compatible with camel case
      if (props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`)
      }
    }

    for (let eventName in definedEvents) {
      eventName = kebabCase(eventName) // compatible with camel case
      if (events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`)
      }
    }
  },
  methods: {
    getMigratingConfig () {
      return {
        props: {},
        events: {}
      }
    }
  }
})

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__('99af')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__('4de4')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__('c975')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__('e260')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__('fb6a')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__('45fc')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__('a434')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__('b64b')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__('d3b7')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__('c7cd')

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__('ddb0')

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/merge.js
/* harmony default export */ var merge = function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__('d81d')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__('ac1f')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__('466d')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__('1276')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__('a4d3')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__('e01a')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__('d28b')

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__('3ca3')

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof.js

function _typeof (obj) {
  '@babel/helpers - typeof'

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof (obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof (obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
    }
  }

  return _typeof(obj)
}
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/util.js

var util_this = undefined

var getCell = function getCell (event) {
  var cell = event.target

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell
    }

    cell = cell.parentNode
  }

  return null
}

var util_isObject = function isObject (obj) {
  return obj !== null && _typeof(obj) === 'object'
}

var util_orderBy = function orderBy (array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array
  }

  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1
  }

  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy]
      }

      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return getValueByPath(value, by)
        } else {
          return by(value, index, array)
        }
      })
    }

    if (sortKey !== '$key') {
      if (util_isObject(value) && '$value' in value) value = value.$value
    }

    return [util_isObject(value) ? getValueByPath(value, sortKey) : value]
  }

  var compare = function compare (a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value)
    }

    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1
      }

      if (a.key[i] > b.key[i]) {
        return 1
      }
    }

    return 0
  }

  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    }
  }).sort(function (a, b) {
    var order = compare(a, b)

    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index
    }

    return order * reverse
  }).map(function (item) {
    return item.value
  })
}
var getColumnById = function getColumnById (table, columnId) {
  var column = null
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item
    }
  })
  return column
}
var getColumnByCell = function getColumnByCell (table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm)

  if (matches) {
    return getColumnById(table, matches[0])
  }

  return null
}
var getRowIdentity = function getRowIdentity (row, rowKey) {
  if (!row) throw new Error('row is required when get row identity')

  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey]
    }

    var key = rowKey.split('.')
    var current = row

    for (var i = 0; i < key.length; i++) {
      current = current[key[i]]
    }

    return current
  } else if (typeof rowKey === 'function') {
    return rowKey.call(util_this, row)
  }
}
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table-store.js

var table_store_sortData = function sortData (data, states) {
  var sortingColumn = states.sortingColumn

  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data
  }

  return util_orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy)
}

var table_store_getKeysMap = function getKeysMap (array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = {
      row: row,
      index: index
    }
  })
  return arrayMap
}

var toggleRowSelection = function toggleRowSelection (states, row, selected) {
  var changed = false
  var selection = states.selection
  var index = selection.indexOf(row)

  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row)
      changed = true
    } else {
      selection.splice(index, 1)
      changed = true
    }
  } else {
    if (selected && index === -1) {
      selection.push(row)
      changed = true
    } else if (!selected && index > -1) {
      selection.splice(index, 1)
      changed = true
    }
  }

  return changed
}

var toggleRowExpansion = function toggleRowExpansion (states, row, expanded) {
  var changed = false
  var expandRows = states.expandRows

  if (typeof expanded !== 'undefined') {
    var index = expandRows.indexOf(row)

    if (expanded) {
      if (index === -1) {
        expandRows.push(row)
        changed = true
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1)
        changed = true
      }
    }
  } else {
    var _index = expandRows.indexOf(row)

    if (_index === -1) {
      expandRows.push(row)
      changed = true
    } else {
      expandRows.splice(_index, 1)
      changed = true
    }
  }

  return changed
}

var TableStore = function TableStore (table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

  if (!table) {
    throw new Error('Table is required.')
  }

  this.table = table
  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    leafColumns: [],
    fixedLeafColumns: [],
    rightFixedLeafColumns: [],
    leafColumnsLength: 0,
    fixedLeafColumnsLength: 0,
    rightFixedLeafColumnsLength: 0,
    isComplex: false,
    filteredData: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    reserveSelection: false,
    selectable: null,
    currentRow: null,
    hoverRow: null,
    filters: {},
    expandRows: [],
    defaultExpandAll: false
  }

  for (var prop in initialState) {
    if (Object.prototype.hasOwnProperty.call(initialState, prop) && Object.prototype.hasOwnProperty.call(this.states, prop)) {
      this.states[prop] = initialState[prop]
    }
  }
}

TableStore.prototype.mutations = {
  setData: function setData (states, data) {
    var _this = this

    var dataInstanceChanged = states._data !== data
    states._data = data
    Object.keys(states.filters).forEach(function (columnId) {
      var values = states.filters[columnId]
      if (!values || values.length === 0) return
      var column = getColumnById(_this.states, columnId)

      if (column && column.filterMethod) {
        data = data.filter(function (row) {
          return values.some(function (value) {
            return column.filterMethod.call(null, value, row, column)
          })
        })
      }
    })
    states.filteredData = data
    states.data = table_store_sortData(data || [], states)
    this.updateCurrentRow()

    if (!states.reserveSelection) {
      if (dataInstanceChanged) {
        this.clearSelection()
      } else {
        this.cleanSelection()
      }

      this.updateAllSelected()
    } else {
      var rowKey = states.rowKey

      if (rowKey) {
        var selection = states.selection
        var selectedMap = table_store_getKeysMap(selection, rowKey)
        states.data.forEach(function (row) {
          var rowId = getRowIdentity(row, rowKey)
          var rowInfo = selectedMap[rowId]

          if (rowInfo) {
            selection[rowInfo.index] = row
          }
        })
        this.updateAllSelected()
      } else { // console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    var defaultExpandAll = states.defaultExpandAll

    if (defaultExpandAll) {
      this.states.expandRows = (states.data || []).slice(0)
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      return _this.table.updateScrollY()
    })
  },
  changeSortCondition: function changeSortCondition (states, options) {
    var _this2 = this

    states.data = table_store_sortData(states.filteredData || states._data || [], states)

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      })
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      return _this2.table.updateScrollY()
    })
  },
  filterChange: function filterChange (states, options) {
    var _this3 = this

    var column = options.column
        var values = options.values
        var silent = options.silent

    if (values && !Array.isArray(values)) {
      values = [values]
    }

    var prop = column.property
    var filters = {}

    if (prop) {
      states.filters[column.id] = values
      filters[column.columnKey || column.id] = values
    }

    var data = states._data
    Object.keys(states.filters).forEach(function (columnId) {
      var values = states.filters[columnId]
      if (!values || values.length === 0) return
      var column = getColumnById(_this3.states, columnId)

      if (column && column.filterMethod) {
        data = data.filter(function (row) {
          return values.some(function (value) {
            return column.filterMethod.call(null, value, row, column)
          })
        })
      }
    })
    states.filteredData = data
    states.data = table_store_sortData(data, states)

    if (!silent) {
      this.table.$emit('filter-change', filters)
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      return _this3.table.updateScrollY()
    })
  },
  insertColumn: function insertColumn (states, column, index, parent) {
    var array = states._columns

    if (parent) {
      array = parent.children
      if (!array) array = parent.children = []
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column)
    } else {
      array.push(column)
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable
      states.reserveSelection = column.reserveSelection
    }

    if (this.table.$ready) {
      this.updateColumns() // hack for dynamics insert column

      this.scheduleLayout()
    }
  },
  removeColumn: function removeColumn (states, column, parent) {
    var array = states._columns

    if (parent) {
      array = parent.children
      if (!array) array = parent.children = []
    }

    if (array) {
      array.splice(array.indexOf(column), 1)
    }

    if (this.table.$ready) {
      this.updateColumns() // hack for dynamics remove column

      this.scheduleLayout()
    }
  },
  setHoverRow: function setHoverRow (states, row) {
    states.hoverRow = row
  },
  setCurrentRow: function setCurrentRow (states, row) {
    var oldCurrentRow = states.currentRow
    states.currentRow = row

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow)
    }
  },
  rowSelectedChanged: function rowSelectedChanged (states, row) {
    var changed = toggleRowSelection(states, row)
    var selection = states.selection

    if (changed) {
      var table = this.table
      table.$emit('selection-change', selection ? selection.slice() : [])
      table.$emit('select', selection, row)
    }

    this.updateAllSelected()
  },
  toggleAllSelection: debounce_default()(10, function (states) {
    var data = states.data || []
    if (data.length === 0) return
    var value = !states.isAllSelected
    var selection = this.states.selection
    var selectionChanged = false
    data.forEach(function (item, index) {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true
        }
      }
    })
    var table = this.table

    if (selectionChanged) {
      table.$emit('selection-change', selection ? selection.slice() : [])
    }

    table.$emit('select-all', selection)
    states.isAllSelected = value
  })
}

var doFlattenColumns = function doFlattenColumns (columns) {
  var result = []
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

TableStore.prototype.updateColumns = function () {
  var states = this.states

  var _columns = states._columns || []

  states.fixedColumns = _columns.filter(function (column) {
    return column.fixed === true || column.fixed === 'left'
  })
  states.rightFixedColumns = _columns.filter(function (column) {
    return column.fixed === 'right'
  })

  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
    _columns[0].fixed = true
    states.fixedColumns.unshift(_columns[0])
  }

  var notFixedColumns = _columns.filter(function (column) {
    return !column.fixed
  })

  states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns)
  var leafColumns = doFlattenColumns(notFixedColumns)
  var fixedLeafColumns = doFlattenColumns(states.fixedColumns)
  var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns)
  states.leafColumnsLength = leafColumns.length
  states.fixedLeafColumnsLength = fixedLeafColumns.length
  states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length
  states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns)
  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0
}

TableStore.prototype.isSelected = function (row) {
  return (this.states.selection || []).indexOf(row) > -1
}

TableStore.prototype.clearSelection = function () {
  var states = this.states
  states.isAllSelected = false
  var oldSelection = states.selection

  if (states.selection.length) {
    states.selection = []
  }

  if (oldSelection.length > 0) {
    this.table.$emit('selection-change', states.selection ? states.selection.slice() : [])
  }
}

TableStore.prototype.setExpandRowKeys = function (rowKeys) {
  var expandRows = []
  var data = this.states.data
  var rowKey = this.states.rowKey
  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.')
  var keysMap = table_store_getKeysMap(data, rowKey)
  rowKeys.forEach(function (key) {
    var info = keysMap[key]

    if (info) {
      expandRows.push(info.row)
    }
  })
  this.states.expandRows = expandRows
}

TableStore.prototype.toggleRowSelection = function (row, selected) {
  var changed = toggleRowSelection(this.states, row, selected)

  if (changed) {
    this.table.$emit('selection-change', this.states.selection ? this.states.selection.slice() : [])
  }
}

TableStore.prototype.toggleRowExpansion = function (row, expanded) {
  var changed = toggleRowExpansion(this.states, row, expanded)

  if (changed) {
    this.table.$emit('expand-change', row, this.states.expandRows)
    this.scheduleLayout()
  }
}

TableStore.prototype.isRowExpanded = function (row) {
  var _this$states = this.states
      var _this$states$expandRo = _this$states.expandRows
      var expandRows = _this$states$expandRo === void 0 ? [] : _this$states$expandRo
      var rowKey = _this$states.rowKey

  if (rowKey) {
    var expandMap = table_store_getKeysMap(expandRows, rowKey)
    return !!expandMap[getRowIdentity(row, rowKey)]
  }

  return expandRows.indexOf(row) !== -1
}

TableStore.prototype.cleanSelection = function () {
  var selection = this.states.selection || []
  var data = this.states.data
  var rowKey = this.states.rowKey
  var deleted

  if (rowKey) {
    deleted = []
    var selectedMap = table_store_getKeysMap(selection, rowKey)
    var dataMap = table_store_getKeysMap(data, rowKey)

    for (var key in selectedMap) {
      if (Object.prototype.hasOwnProperty.call(selectedMap, key) && !dataMap[key]) {
        deleted.push(selectedMap[key].row)
      }
    }
  } else {
    deleted = selection.filter(function (item) {
      return data.indexOf(item) === -1
    })
  }

  deleted.forEach(function (deletedItem) {
    selection.splice(selection.indexOf(deletedItem), 1)
  })

  if (deleted.length) {
    this.table.$emit('selection-change', selection ? selection.slice() : [])
  }
}

TableStore.prototype.clearFilter = function () {
  var states = this.states
  var _this$table$$refs = this.table.$refs
      var tableHeader = _this$table$$refs.tableHeader
      var fixedTableHeader = _this$table$$refs.fixedTableHeader
      var rightFixedTableHeader = _this$table$$refs.rightFixedTableHeader
  var panels = {}
  if (tableHeader) panels = merge(panels, tableHeader.filterPanels)
  if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels)
  if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels)
  var keys = Object.keys(panels)
  if (!keys.length) return
  keys.forEach(function (key) {
    panels[key].filteredValue = []
  })
  states.filters = {}
  this.commit('filterChange', {
    column: {},
    values: [],
    silent: true
  })
}

TableStore.prototype.clearSort = function () {
  var states = this.states
  if (!states.sortingColumn) return
  states.sortingColumn.order = null
  states.sortProp = null
  states.sortOrder = null
  this.commit('changeSortCondition', {
    silent: true
  })
}

TableStore.prototype.updateAllSelected = function () {
  var states = this.states
  var selection = states.selection
      var rowKey = states.rowKey
      var selectable = states.selectable
      var data = states.data

  if (!data || data.length === 0) {
    states.isAllSelected = false
    return
  }

  var selectedMap

  if (rowKey) {
    selectedMap = table_store_getKeysMap(states.selection, rowKey)
  }

  var isSelected = function isSelected (row) {
    if (selectedMap) {
      return !!selectedMap[getRowIdentity(row, rowKey)]
    } else {
      return selection.indexOf(row) !== -1
    }
  }

  var isAllSelected = true
  var selectedCount = 0

  for (var i = 0, j = data.length; i < j; i++) {
    var item = data[i]
    var isRowSelectable = selectable && selectable.call(this, item, i)

    if (!isSelected(item)) {
      if (!selectable || isRowSelectable) {
        isAllSelected = false
        break
      }
    } else {
      selectedCount++
    }
  }

  if (selectedCount === 0) isAllSelected = false
  states.isAllSelected = isAllSelected
}

TableStore.prototype.scheduleLayout = function (updateColumns) {
  if (updateColumns) {
    this.updateColumns()
  }

  this.table.debouncedUpdateLayout()
}

TableStore.prototype.setCurrentRowKey = function (key) {
  var states = this.states
  var rowKey = states.rowKey
  if (!rowKey) throw new Error('[Table] row-key should not be empty.')
  var data = states.data || []
  var keysMap = table_store_getKeysMap(data, rowKey)
  var info = keysMap[key]

  if (info) {
    states.currentRow = info.row
  }
}

TableStore.prototype.updateCurrentRow = function () {
  var states = this.states
  var table = this.table
  var data = states.data || []
  var oldCurrentRow = states.currentRow

  if (data.indexOf(oldCurrentRow) === -1) {
    states.currentRow = null

    if (states.currentRow !== oldCurrentRow) {
      table.$emit('current-change', null, oldCurrentRow)
    }
  }
}

TableStore.prototype.commit = function (name) {
  var mutations = this.mutations

  if (mutations[name]) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key]
    }

    mutations[name].apply(this, [this.states].concat(args))
  } else {
    throw new Error('Action not found: '.concat(name))
  }
}

/* harmony default export */ var table_store = (TableStore)
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__('13d5')

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}
// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/scrollbar-width.js

let scrollbar_width_scrollBarWidth

/* harmony default export */ var scrollbar_width = function () {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return 0
  if (scrollbar_width_scrollBarWidth !== undefined) return scrollbar_width_scrollBarWidth

  const outer = document.createElement('div')
  outer.className = 'el-scrollbar__wrap'
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)
  scrollbar_width_scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollbar_width_scrollBarWidth
}

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table-layout.js

var table_layout_TableLayout =
/* #__PURE__ */
(function () {
  function TableLayout (options) {
    _classCallCheck(this, TableLayout)

    this.observers = []
    this.table = null
    this.store = null
    this.columns = null
    this.fit = true
    this.showHeader = true
    this.height = null
    this.scrollX = false
    this.scrollY = false
    this.bodyWidth = null
    this.fixedWidth = null
    this.rightFixedWidth = null
    this.tableHeight = null
    this.headerHeight = 44 // Table Header Height

    this.appendHeight = 0 // Append Slot Height

    this.footerHeight = 44 // Table Footer Height

    this.viewportHeight = null // Table Height - Scroll Bar Height

    this.bodyHeight = null // Table Height - Table Header Height

    this.fixedBodyHeight = null // Table Height - Table Header Height - Scroll Bar Height

    this.gutterWidth = scrollbar_width()

    for (var name in options) {
      if (Object.prototype.hasOwnProperty.call(options, name)) {
        this[name] = options[name]
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout')
    }

    if (!this.store) {
      throw new Error('store is required for Table Layout')
    }
  }

  _createClass(TableLayout, [{
    key: 'updateScrollY',
    value: function updateScrollY () {
      var height = this.height
      if (typeof height !== 'string' && typeof height !== 'number') return
      var bodyWrapper = this.table.bodyWrapper

      if (this.table.$el && bodyWrapper) {
        var body = bodyWrapper.querySelector('.el-table__body')
        this.scrollY = body.offsetHeight > this.bodyHeight
      }
    }
  }, {
    key: 'setHeight',
    value: function setHeight (value) {
      var _this = this

      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height'
      if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return
      var el = this.table.$el

      if (typeof value === 'string' && /^\d+$/.test(value)) {
        value = Number(value)
      }

      this.height = value
      if (!el && (value || value === 0)) {
 return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        return _this.setHeight(value, prop)
      })
}

      if (typeof value === 'number') {
        el.style[prop] = value + 'px'
        this.updateElsHeight()
      } else if (typeof value === 'string') {
        el.style[prop] = value
        this.updateElsHeight()
      }
    }
  }, {
    key: 'setMaxHeight',
    value: function setMaxHeight (value) {
      return this.setHeight(value, 'max-height')
    }
  }, {
    key: 'updateElsHeight',
    value: function updateElsHeight () {
      var _this2 = this

      if (!this.table.$ready) {
 return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        return _this2.updateElsHeight()
      })
}
      var _this$table$$refs = this.table.$refs
          var headerWrapper = _this$table$$refs.headerWrapper
          var appendWrapper = _this$table$$refs.appendWrapper
          var footerWrapper = _this$table$$refs.footerWrapper
      this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0
      if (this.showHeader && !headerWrapper) return
      var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight

      if (this.showHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
        return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
          return _this2.updateElsHeight()
        })
      }

      var tableHeight = this.tableHeight = this.table.$el.clientHeight

      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
        var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0
        this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0)
      }

      this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight
      var noData = !this.table.data || this.table.data.length === 0
      this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight
      this.updateScrollY()
      this.notifyObservers('scrollable')
    }
  }, {
    key: 'getFlattenColumns',
    value: function getFlattenColumns () {
      var flattenColumns = []
      var columns = this.table.columns
      columns.forEach(function (column) {
        if (column.isColumnGroup) {
          flattenColumns.push.apply(flattenColumns, column.columns)
        } else {
          flattenColumns.push(column)
        }
      })
      return flattenColumns
    }
  }, {
    key: 'updateColumnsWidth',
    value: function updateColumnsWidth () {
      var fit = this.fit
      var bodyWidth = this.table.$el.clientWidth
      var bodyMinWidth = 0
      var flattenColumns = this.getFlattenColumns()
      var flexColumns = flattenColumns.filter(function (column) {
        return typeof column.width !== 'number'
      })
      flattenColumns.forEach(function (column) {
        // Clean those columns whose width changed from flex to unflex
        if (typeof column.width === 'number' && column.realWidth) column.realWidth = null
      })

      if (flexColumns.length > 0 && fit) {
        flattenColumns.forEach(function (column) {
          bodyMinWidth += column.width || column.minWidth || 80
        })
        var scrollYWidth = this.scrollY ? this.gutterWidth : 0

        if (bodyMinWidth <= bodyWidth - scrollYWidth) {
          // DON'T HAVE SCROLL BAR
          this.scrollX = false
          var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth

          if (flexColumns.length === 1) {
            flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth
          } else {
            var allColumnsWidth = flexColumns.reduce(function (prev, column) {
              return prev + (column.minWidth || 80)
            }, 0)
            var flexWidthPerPixel = totalFlexWidth / allColumnsWidth
            var noneFirstWidth = 0
            flexColumns.forEach(function (column, index) {
              if (index === 0) return
              var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel)
              noneFirstWidth += flexWidth
              column.realWidth = (column.minWidth || 80) + flexWidth
            })
            flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth
          }
        } else {
          // HAVE HORIZONTAL SCROLL BAR
          this.scrollX = true
          flexColumns.forEach(function (column) {
            column.realWidth = column.minWidth
          })
        } // fix scrollY theader and tbody does not match

        this.bodyWidth = Math.max(bodyMinWidth, bodyWidth - scrollYWidth)
      } else {
        flattenColumns.forEach(function (column) {
          if (!column.width && !column.minWidth) {
            column.realWidth = 80
          } else {
            column.realWidth = column.width || column.minWidth
          }

          bodyMinWidth += column.realWidth
        })
        this.scrollX = bodyMinWidth > bodyWidth
        this.bodyWidth = bodyMinWidth
      }

      var fixedColumns = this.store.states.fixedColumns

      if (fixedColumns.length > 0) {
        var fixedWidth = 0
        fixedColumns.forEach(function (column) {
          fixedWidth += column.realWidth || column.width
        })
        this.fixedWidth = fixedWidth
      }

      var rightFixedColumns = this.store.states.rightFixedColumns

      if (rightFixedColumns.length > 0) {
        var rightFixedWidth = 0
        rightFixedColumns.forEach(function (column) {
          rightFixedWidth += column.realWidth || column.width
        })
        this.rightFixedWidth = rightFixedWidth
      }

      this.notifyObservers('columns')
    }
  }, {
    key: 'addObserver',
    value: function addObserver (observer) {
      this.observers.push(observer)
    }
  }, {
    key: 'removeObserver',
    value: function removeObserver (observer) {
      var index = this.observers.indexOf(observer)

      if (index !== -1) {
        this.observers.splice(index, 1)
      }
    }
  }, {
    key: 'notifyObservers',
    value: function notifyObservers (event) {
      var _this3 = this

      var observers = this.observers
      observers.forEach(function (observer) {
        switch (event) {
          case 'columns':
            observer.onColumnsChange(_this3)
            break

          case 'scrollable':
            observer.onScrollableChange(_this3)
            break

          default:
            throw new Error("Table Layout don't have event ".concat(event, '.'))
        }
      })
    }
  }])

  return TableLayout
}())

/* harmony default export */ var table_layout = (table_layout_TableLayout)
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__('a15b')

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/dom.js
/* istanbul ignore next */

const dom_isServer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const ieVersion = dom_isServer ? 0 : Number(document.documentMode)

/* istanbul ignore next */
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
/* istanbul ignore next */
const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/* istanbul ignore next */
const on = (function () {
  if (!dom_isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
const off = (function () {
  if (!dom_isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
const once = function (el, event, fn) {
  var listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/* istanbul ignore next */
function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
};

/* istanbul ignore next */
function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

/* istanbul ignore next */
function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};

/* istanbul ignore next */
const getStyle = ieVersion < 9 ? function (element, styleName) {
  if (dom_isServer) return
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'styleFloat'
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100
        } catch (e) {
          return 1.0
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null)
    }
  } catch (e) {
    return element.style[styleName]
  }
} : function (element, styleName) {
  if (dom_isServer) return
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

/* istanbul ignore next */
function setStyle (element, styleName, value) {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
};

const isScroll = (el, vertical) => {
  if (dom_isServer) return

  const determinedDirection = vertical !== null || vertical !== undefined
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow')

  return overflow.match(/(scroll|auto)/)
}

const getScrollContainer = (el, vertical) => {
  if (dom_isServer) return

  let parent = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, vertical)) {
      return parent
    }
    parent = parent.parentNode
  }

  return parent
}

const isInContainer = (el, container) => {
  if (dom_isServer || !el || !container) return false

  const elRect = el.getBoundingClientRect()
  let containerRect

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"17a71186-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/vue-element-bigdata-table/filter-panel.vue?vue&type=template&id=4858641a&scoped=true&
var filter_panelvue_type_template_id_4858641a_scoped_true_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('transition', { attrs: { name: 'el-zoom-in-top' } }, [(_vm.multiple) ? _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.showPopper), expression: 'showPopper' }], staticClass: 'el-table-filter bigdata-header-filter' }, [_c('div', { staticClass: 'el-table-filter__content' }, [_c('el-input', { staticClass: 'filter-keyword', attrs: { size: 'mini', placeholder: '请输入内容' }, nativeOn: { keyup: function ($event) { return _vm.changeKeyWord($event) } }, model: { value: (_vm.keyWord), callback: function ($$v) { _vm.keyWord = $$v }, expression: 'keyWord' } }), _c('el-checkbox-group', { staticClass: 'el-table-filter__checkbox-group', model: { value: (_vm.filteredValue), callback: function ($$v) { _vm.filteredValue = $$v }, expression: 'filteredValue' } }, _vm._l((_vm.fiList), function (filter) { return _c('el-checkbox', { key: filter.value, staticClass: 'filter-label', attrs: { title: filter.text, label: filter.value } }, [_vm._v(_vm._s(filter.text))]) }), 1)], 1), _c('div', { staticClass: 'el-table-filter__bottom' }, [_c('button', { class: { 'is-disabled': _vm.filteredValue.length === 0 }, attrs: { disabled: _vm.filteredValue.length === 0 }, on: { click: _vm.handleConfirm } }, [_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]), _c('button', { on: { click: _vm.handleReset } }, [_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]) : _c('div', { directives: [{ name: 'show', rawName: 'v-show', value: (_vm.showPopper), expression: 'showPopper' }], staticClass: 'el-table-filter' }, [_c('ul', { staticClass: 'el-table-filter__list' }, [_c('li', { staticClass: 'el-table-filter__list-item', class: { 'is-active': _vm.filterValue === undefined || _vm.filterValue === null }, on: { click: function ($event) { return _vm.handleSelect(null) } } }, [_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]), _vm._l((_vm.fiList), function (filter) { return _c('li', { key: filter.value, staticClass: 'el-table-filter__list-item', class: { 'is-active': _vm.isActive(filter) }, attrs: { label: filter.value }, on: { click: function ($event) { return _vm.handleSelect(filter.value) } } }, [_vm._v(_vm._s(filter.text))]) })], 2)])]) }
var filter_panelvue_type_template_id_4858641a_scoped_true_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/filter-panel.vue?vue&type=template&id=4858641a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__('25f0')

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/popup/popup-manager.js

let hasModal = false
let hasInitZIndex = false
let popup_manager_zIndex

const getModal = function () {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return
  let modalDom = PopupManager.modalDom
  if (modalDom) {
    hasModal = true
  } else {
    hasModal = false
    modalDom = document.createElement('div')
    PopupManager.modalDom = modalDom

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault()
      event.stopPropagation()
    })

    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick()
    })
  }

  return modalDom
}

const instances = {}

const PopupManager = {
  modalFade: true,

  getInstance: function (id) {
    return instances[id]
  },

  register: function (id, instance) {
    if (id && instance) {
      instances[id] = instance
    }
  },

  deregister: function (id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },

  nextZIndex: function () {
    return PopupManager.zIndex++
  },

  modalStack: [],

  doOnModalClick: function () {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topItem) return

    const instance = PopupManager.getInstance(topItem.id)
    if (instance && instance.closeOnClickModal) {
      instance.close()
    }
  },

  openModal: function (id, zIndex, dom, modalClass, modalFade) {
    if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return
    if (!id || zIndex === undefined) return
    this.modalFade = modalFade

    const modalStack = this.modalStack

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i]
      if (item.id === id) {
        return
      }
    }

    const modalDom = getModal()

    addClass(modalDom, 'v-modal')
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter')
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/)
      classArr.forEach(item => addClass(modalDom, item))
    }
    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter')
    }, 200)

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom)
    } else {
      document.body.appendChild(modalDom)
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex
    }
    modalDom.tabIndex = 0
    modalDom.style.display = ''

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass })
  },

  closeModal: function (id) {
    const modalStack = this.modalStack
    const modalDom = getModal()

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1]
      if (topItem.id === id) {
        if (topItem.modalClass) {
          let classArr = topItem.modalClass.trim().split(/\s+/)
          classArr.forEach(item => removeClass(modalDom, item))
        }

        modalStack.pop()
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1)
            break
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave')
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom)
          modalDom.style.display = 'none'
          PopupManager.modalDom = undefined
        }
        removeClass(modalDom, 'v-modal-leave')
      }, 200)
    }
  }
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get () {
    if (!hasInitZIndex) {
      popup_manager_zIndex = popup_manager_zIndex || (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$ELEMENT || {}).zIndex || 2000
      hasInitZIndex = true
    }
    return popup_manager_zIndex
  },
  set (value) {
    popup_manager_zIndex = value
  }
})

const getTopPopup = function () {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topPopup) return
    const instance = PopupManager.getInstance(topPopup.id)

    return instance
  }
}

if (!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      const topPopup = getTopPopup()

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose
          ? topPopup.handleClose()
          : (topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close())
      }
    }
  })
}

/* harmony default export */ var popup_manager = (PopupManager)

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/popup/index.js

let idSeed = 1

let popup_scrollBarWidth

/* harmony default export */ var popup = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  beforeMount () {
    this._popupId = 'popup-' + idSeed++
    popup_manager.register(this._popupId, this)
  },

  beforeDestroy () {
    popup_manager.deregister(this._popupId)
    popup_manager.closeModal(this._popupId)

    this.restoreBodyStyle()
  },

  data () {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    }
  },

  watch: {
    visible (val) {
      if (val) {
        if (this._opening) return
        if (!this.rendered) {
          this.rendered = true
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
            this.open()
          })
        } else {
          this.open()
        }
      } else {
        this.close()
      }
    }
  },

  methods: {
    open (options) {
      if (!this.rendered) {
        this.rendered = true
      }

      const props = merge({}, this.$props || this, options)

      if (this._closeTimer) {
        clearTimeout(this._closeTimer)
        this._closeTimer = null
      }
      clearTimeout(this._openTimer)

      const openDelay = Number(props.openDelay)
      if (openDelay > 0) {
        this._openTimer = setTimeout(() => {
          this._openTimer = null
          this.doOpen(props)
        }, openDelay)
      } else {
        this.doOpen(props)
      }
    },

    doOpen (props) {
      if (this.$isServer) return
      if (this.willOpen && !this.willOpen()) return
      if (this.opened) return

      this._opening = true

      const dom = this.$el

      const modal = props.modal

      const zIndex = props.zIndex
      if (zIndex) {
        popup_manager.zIndex = zIndex
      }

      if (modal) {
        if (this._closing) {
          popup_manager.closeModal(this._popupId)
          this._closing = false
        }
        popup_manager.openModal(this._popupId, popup_manager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade)
        if (props.lockScroll) {
          this.withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden')
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight
            this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
          }
          popup_scrollBarWidth = scrollbar_width()
          let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
          let bodyOverflowY = getStyle(document.body, 'overflowY')
          if (popup_scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + popup_scrollBarWidth + 'px'
          }
          addClass(document.body, 'el-popup-parent--hidden')
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute'
      }

      dom.style.zIndex = popup_manager.nextZIndex()
      this.opened = true

      this.onOpen && this.onOpen()

      this.doAfterOpen()
    },

    doAfterOpen () {
      this._opening = false
    },

    close () {
      if (this.willClose && !this.willClose()) return

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer)
        this._openTimer = null
      }
      clearTimeout(this._closeTimer)

      const closeDelay = Number(this.closeDelay)

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(() => {
          this._closeTimer = null
          this.doClose()
        }, closeDelay)
      } else {
        this.doClose()
      }
    },

    doClose () {
      this._closing = true

      this.onClose && this.onClose()

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200)
      }

      this.opened = false

      this.doAfterClose()
    },

    doAfterClose () {
      popup_manager.closeModal(this._popupId)
      this._closing = false
    },

    restoreBodyStyle () {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight
        removeClass(document.body, 'el-popup-parent--hidden')
      }
      this.withoutHiddenClass = true
    }
  }
})

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/vue-popper.js

const PopperJS = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer ? function () {} : __webpack_require__('4ff4')
const stop = e => e.stopPropagation()

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
/* harmony default export */ var vue_popper = ({
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default () {
        return {
          gpuAcceleration: false
        }
      }
    }
  },

  data () {
    return {
      showPopper: false,
      currentPlacement: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.showPopper = val
        this.$emit('input', val)
      }
    },

    showPopper (val) {
      if (this.disabled) return
      val ? this.updatePopper() : this.destroyPopper()
      this.$emit('input', val)
    }
  },

  methods: {
    createPopper () {
      if (this.$isServer) return
      this.currentPlacement = this.currentPlacement || this.placement
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return
      }

      const options = this.popperOptions
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference

      if (!reference &&
        this.$slots.reference &&
        this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm
      }

      if (!popper || !reference) return
      if (this.visibleArrow) this.appendArrow(popper)
      if (this.appendToBody) document.body.appendChild(this.popperElm)
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }

      options.placement = this.currentPlacement
      options.offset = this.offset
      options.arrowOffset = this.arrowOffset
      this.popperJS = new PopperJS(reference, popper, options)
      this.popperJS.onCreate(_ => {
        this.$emit('created', this)
        this.resetTransformOrigin()
        this.$nextTick(this.updatePopper)
      })
      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate)
      }
      this.popperJS._popper.style.zIndex = popup_manager.nextZIndex()
      this.popperElm.addEventListener('click', stop)
    },

    updatePopper () {
      const popperJS = this.popperJS
      if (popperJS) {
        popperJS.update()
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = popup_manager.nextZIndex()
        }
      } else {
        this.createPopper()
      }
    },

    doDestroy (forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return
      this.popperJS.destroy()
      this.popperJS = null
    },

    destroyPopper () {
      if (this.popperJS) {
        this.resetTransformOrigin()
      }
    },

    resetTransformOrigin () {
      if (!this.transformOrigin) return
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      }
      let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0]
      let origin = placementMap[placement]
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`
    },

    appendArrow (element) {
      let hash
      if (this.appended) {
        return
      }

      this.appended = true

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name
          break
        }
      }

      const arrow = document.createElement('div')

      if (hash) {
        arrow.setAttribute(hash, '')
      }
      arrow.setAttribute('x-arrow', '')
      arrow.className = 'popper__arrow'
      element.appendChild(arrow)
    }
  },

  beforeDestroy () {
    this.doDestroy(true)
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop)
      document.body.removeChild(this.popperElm)
    }
  },

  // call destroy in keep-alive mode
  deactivated () {
    this.$options.beforeDestroy[0].call(this)
  }
})

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/clickoutside.js

const nodeList = []
const ctx = '@@clickoutsideContext'

let startClick
let seed = 0

!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && on(document, 'mousedown', e => (startClick = e))

!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
})

function createDocumentHandler (el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]()
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn()
    }
  }
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
/* harmony default export */ var clickoutside = ({
  bind (el, binding, vnode) {
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },

  update (el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },

  unbind (el) {
    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  }
})

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/dropdown.js

var dropdowns = []
!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target
    if (!dropdown || !dropdown.$el) return

    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return
    }

    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event)
  })
})
/* harmony default export */ var dropdown = ({
  open: function open (instance) {
    if (instance) {
      dropdowns.push(instance)
    }
  },
  close: function close (instance) {
    var index = dropdowns.indexOf(instance)

    if (index !== -1) {
      dropdowns.splice(instance, 1)
    }
  }
})
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/vue-element-bigdata-table/filter-panel.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var filter_panelvue_type_script_lang_js_ = ({
  name: 'ElTableFilterPanel',
  mixins: [vue_popper, mixins_locale],
  directives: {
    Clickoutside: clickoutside
  },
  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },
  customRender: function customRender (h) {
    return h('div', {
      class: 'el-table-filter'
    }, [h('div', {
      class: 'el-table-filter__content'
    }), h('div', {
      class: 'el-table-filter__bottom'
    }, [h('button', {
      on: {
        click: this.handleConfirm
      }
    }, [this.t('el.table.confirmFilter')]), h('button', {
      on: {
        click: this.handleReset
      }
    }, [this.t('el.table.resetFilter')])])])
  },
  methods: {
    isActive: function isActive (filter) {
      return filter.value === this.filterValue
    },
    handleOutsideClick: function handleOutsideClick () {
      this.showPopper = false
    },
    handleConfirm: function handleConfirm () {
      this.confirmFilter(this.filteredValue)
      this.handleOutsideClick()
    },
    handleReset: function handleReset () {
      this.filteredValue = []
      this.confirmFilter(this.filteredValue)
      this.handleOutsideClick() //  清空

      this.fiList = []
    },
    handleSelect: function handleSelect (filterValue) {
      this.filterValue = filterValue

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue)
      } else {
        this.confirmFilter([])
      }

      this.handleOutsideClick()
    },
    confirmFilter: function confirmFilter (filteredValue) {
      var _this = this

      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      })
      this.table.store.updateAllSelected() //
      //  设置滚动条高度与左边度

      this.table.scrollLeft = 0
      this.table.scrollTop = 0 //  更新数据高度分组
      // this.table.initGroupHeight(filteredValue);
      //  重新计算高度

      this.table.setComputedProps() //  延迟 计算滚动条是否显示

      setTimeout(function () {
        _this.table.updateScrollY()
      }, 100)
    },
    //   关键词输入
    changeKeyWord: function changeKeyWord () {
      var list = []
      var keyWord = this.keyWord
      this.filters.filter(function (e) {
        if (e.value.toString().indexOf(keyWord.toString()) > -1) {
          list.push(e)
        }
      })
      this.fiList = list
    }
  },
  data: function data () {
    return {
      table: null,
      cell: null,
      column: null,
      keyWord: '',
      // 搜索到显示出来
      fiList: []
    }
  },
  computed: {
    filters: function filters () {
      return this.column && this.column.filters
    },
    filterValue: {
      get: function get () {
        return (this.column.filteredValue || [])[0]
      },
      set: function set (value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value)
          } else {
            this.filteredValue.splice(0, 1)
          }
        }
      }
    },
    filteredValue: {
      get: function get () {
        if (this.column) {
          return this.column.filteredValue || []
        }

        return []
      },
      set: function set (value) {
        if (this.column) {
          this.column.filteredValue = value
        }
      }
    },
    multiple: function multiple () {
      if (this.column) {
        return this.column.filterMultiple
      }

      return true
    }
  },
  mounted: function mounted () {
    var _this2 = this

    this.popperElm = this.$el
    this.referenceElm = this.cell
    this.table.bodyWrapper.addEventListener('scroll', function () {
      _this2.updatePopper()
    })
    this.$watch('showPopper', function (value) {
      if (_this2.column) _this2.column.filterOpened = value

      if (value) {
        dropdown.open(_this2)
      } else {
        dropdown.close(_this2)
      }
    })
  },
  watch: {
    showPopper: function showPopper (val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < popup_manager.zIndex) {
        this.popperJS._popper.style.zIndex = popup_manager.nextZIndex()
      } //  显示列表

      if (val) {
        //  打开放入列表
        this.fiList = [].concat(this.filters)
      } else {
        //  关闭清除列表
        this.fiList = []
      }
    }
  }
})
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/filter-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_element_bigdata_table_filter_panelvue_type_script_lang_js_ = (filter_panelvue_type_script_lang_js_)
// EXTERNAL MODULE: ./src/components/public/vue-element-bigdata-table/filter-panel.vue?vue&type=style&index=0&id=4858641a&scoped=true&lang=css&
var filter_panelvue_type_style_index_0_id_4858641a_scoped_true_lang_css_ = __webpack_require__('4d7b')

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/filter-panel.vue

/* normalize component */

var component = normalizeComponent(
  vue_element_bigdata_table_filter_panelvue_type_script_lang_js_,
  filter_panelvue_type_template_id_4858641a_scoped_true_render,
  filter_panelvue_type_template_id_4858641a_scoped_true_staticRenderFns,
  false,
  null,
  '4858641a',
  null

)

/* harmony default export */ var filter_panel = (component.exports)
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/layout-observer.js

/* harmony default export */ var layout_observer = ({
  created: function created () {
    this.tableLayout.addObserver(this)
  },
  destroyed: function destroyed () {
    this.tableLayout.removeObserver(this)
  },
  computed: {
    tableLayout: function tableLayout () {
      var layout = this.layout

      if (!layout && this.table) {
        layout = this.table.layout
      }

      if (!layout) {
        throw new Error('Can not find table layout.')
      }

      return layout
    }
  },
  mounted: function mounted () {
    this.onColumnsChange(this.tableLayout)
    this.onScrollableChange(this.tableLayout)
  },
  updated: function updated () {
    if (this.__updated__) return
    this.onColumnsChange(this.tableLayout)
    this.onScrollableChange(this.tableLayout)
    this.__updated__ = true
  },
  methods: {
    onColumnsChange: function onColumnsChange () {
      var cols = this.$el.querySelectorAll('colgroup > col')
      if (!cols.length) return
      var flattenColumns = this.tableLayout.getFlattenColumns()
      var columnsMap = {}
      flattenColumns.forEach(function (column) {
        columnsMap[column.id] = column
      })

      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i]
        var name = col.getAttribute('name')
        var column = columnsMap[name]

        if (column) {
          col.setAttribute('width', column.realWidth || column.width)
        }
      }
    },
    onScrollableChange: function onScrollableChange (layout) {
      var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]')

      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i]
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0')
      }

      var ths = this.$el.querySelectorAll('th.gutter')

      for (var _i = 0, _j = ths.length; _i < _j; _i++) {
        var th = ths[_i]
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0'
        th.style.display = layout.scrollY ? '' : 'none'
      }
    }
  }
})
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table-header.js

var getAllColumns = function getAllColumns (columns) {
  var result = []
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column)
      result.push.apply(result, getAllColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

var convertToRows = function convertToRows (originColumns) {
  var maxLevel = 1

  var traverse = function traverse (column, parent) {
    if (parent) {
      column.level = parent.level + 1

      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }

    if (column.children) {
      var colSpan = 0
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach(function (column) {
    column.level = 1
    traverse(column)
  })
  var rows = []

  for (var i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  var allColumns = getAllColumns(originColumns)
  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }

    rows[column.level - 1].push(column)
  })
  return rows
}

/* harmony default export */ var table_header = ({
  name: 'ElTableHeader',
  mixins: [layout_observer],
  render: function render (h) {
    var _this = this

    var originColumns = this.store.states.originColumns
    var columnRows = convertToRows(originColumns, this.columns) // 是否拥有多级表头

    var isGroup = columnRows.length > 1
    if (isGroup) this.$parent.isGroup = true
    return h('table', {
      class: 'el-table__header',
      attrs: {
        cellspacing: '0',
        cellpadding: '0',
        border: '0'
      }
    }, [h('colgroup', [this._l(this.columns, function (column) {
      return h('col', {
        attrs: {
          name: column.id
        }
      })
    }), this.hasGutter ? h('col', {
      attrs: {
        name: 'gutter'
      }
    }) : '']), h('thead', {
      class: [{
        'is-group': isGroup,
        'has-gutter': this.hasGutter
      }]
    }, [this._l(columnRows, function (columns, rowIndex) {
      return h('tr', {
        style: _this.getHeaderRowStyle(rowIndex),
        class: _this.getHeaderRowClass(rowIndex)
      }, [_this._l(columns, function (column, cellIndex) {
        return h('th', {
          attrs: {
            colspan: column.colSpan,
            rowspan: column.rowSpan
          },
          on: {
            mousemove: function mousemove ($event) {
              return _this.handleMouseMove($event, column)
            },
            mouseout: _this.handleMouseOut,
            mousedown: function mousedown ($event) {
              return _this.handleMouseDown($event, column)
            },
            click: function click ($event) {
              return _this.handleHeaderClick($event, column)
            },
            contextmenu: function contextmenu ($event) {
              return _this.handleHeaderContextMenu($event, column)
            }
          },
          style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
          class: _this.getHeaderCellClass(rowIndex, cellIndex, columns, column)
        }, [h('div', {
          class: ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName]
        }, [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, {
          column: column,
          $index: cellIndex,
          store: _this.store,
          _self: _this.$parent.$vnode.context
        }) : column.label, column.sortable ? h('span', {
          class: 'caret-wrapper',
          on: {
            click: function click ($event) {
              return _this.handleSortClick($event, column)
            }
          }
        }, [h('i', {
          class: 'sort-caret ascending',
          on: {
            click: function click ($event) {
              return _this.handleSortClick($event, column, 'ascending')
            }
          }
        }), h('i', {
          class: 'sort-caret descending',
          on: {
            click: function click ($event) {
              return _this.handleSortClick($event, column, 'descending')
            }
          }
        })]) : '', column.filterable ? h('span', {
          class: 'el-table__column-filter-trigger',
          on: {
            click: function click ($event) {
              return _this.handleFilterClick($event, column)
            }
          }
        }, [h('i', {
          class: ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : '']
        })]) : ''])])
      }), _this.hasGutter ? h('th', {
        class: 'gutter'
      }) : ''])
    })])])
  },
  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default () {
        return {
          prop: '',
          order: ''
        }
      }
    }
  },
  computed: {
    table: function table () {
      return this.$parent
    },
    isAllSelected: function isAllSelected () {
      return this.store.states.isAllSelected
    },
    columnsCount: function columnsCount () {
      return this.store.states.columns.length
    },
    leftFixedCount: function leftFixedCount () {
      return this.store.states.fixedColumns.length
    },
    rightFixedCount: function rightFixedCount () {
      return this.store.states.rightFixedColumns.length
    },
    leftFixedLeafCount: function leftFixedLeafCount () {
      return this.store.states.fixedLeafColumnsLength
    },
    rightFixedLeafCount: function rightFixedLeafCount () {
      return this.store.states.rightFixedLeafColumnsLength
    },
    columns: function columns () {
      return this.store.states.columns
    },
    hasGutter: function hasGutter () {
      return !this.fixed && this.tableLayout.gutterWidth
    }
  },
  created: function created () {
    this.filterPanels = {}
  },
  mounted: function mounted () {
    var _this2 = this

    if (this.defaultSort.prop) {
      var states = this.store.states
      states.sortProp = this.defaultSort.prop
      states.sortOrder = this.defaultSort.order || 'ascending'
      this.$nextTick(function () {
        for (var i = 0, length = _this2.columns.length; i < length; i++) {
          var column = _this2.columns[i]

          if (column.property === states.sortProp) {
            column.order = states.sortOrder
            states.sortingColumn = column
            break
          }
        }

        if (states.sortingColumn) {
          _this2.store.commit('changeSortCondition')
        }
      })
    }
  },
  beforeDestroy: function beforeDestroy () {
    var panels = this.filterPanels

    for (var prop in panels) {
      if (Object.prototype.hasOwnProperty.call(panels, prop) && panels[prop]) {
        panels[prop].$destroy(true)
      }
    }
  },
  methods: {
    isCellHidden: function isCellHidden (index, columns) {
      var start = 0

      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan
      }

      var after = start + columns[index].colSpan - 1

      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle (rowIndex) {
      var headerRowStyle = this.table.headerRowStyle

      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(this, {
          rowIndex: rowIndex
        })
      }

      return headerRowStyle
    },
    getHeaderRowClass: function getHeaderRowClass (rowIndex) {
      var classes = []
      var headerRowClassName = this.table.headerRowClassName

      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName)
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(this, {
          rowIndex: rowIndex
        }))
      }

      return classes.join(' ')
    },
    getHeaderCellStyle: function getHeaderCellStyle (rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle

      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(this, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        })
      }

      return headerCellStyle
    },
    getHeaderCellClass: function getHeaderCellClass (rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName]

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden')
      }

      if (!column.children) {
        classes.push('is-leaf')
      }

      if (column.sortable) {
        classes.push('is-sortable')
      }

      var headerCellClassName = this.table.headerCellClassName

      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName)
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(this, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }))
      }

      return classes.join(' ')
    },
    toggleAllSelection: function toggleAllSelection () {
      this.store.commit('toggleAllSelection')
    },
    handleFilterClick: function handleFilterClick (event, column) {
      event.stopPropagation()
      var target = event.target
      var cell = target.parentNode
      var table = this.$parent
      var filterPanel = this.filterPanels[column.id]

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false
        return
      }

      if (!filterPanel) {
        filterPanel = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a(filter_panel)
        this.filterPanels[column.id] = filterPanel

        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement
        }

        filterPanel.table = table
        filterPanel.cell = cell
        filterPanel.column = column
        !this.$isServer && filterPanel.$mount(document.createElement('div'))
      }

      setTimeout(function () {
        filterPanel.showPopper = true
      }, 16)
    },
    handleHeaderClick: function handleHeaderClick (event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column)
      } else if (column.filters && !column.sortable) {
        this.handleFilterClick(event, column)
      }

      this.$parent.$emit('header-click', column, event)
    },
    handleHeaderContextMenu: function handleHeaderContextMenu (event, column) {
      this.$parent.$emit('header-contextmenu', column, event)
    },
    handleMouseDown: function handleMouseDown (event, column) {
      var _this3 = this

      if (this.$isServer) return
      if (column.children && column.children.length > 0) return
      /* istanbul ignore if */

      if (this.draggingColumn && this.border) {
        this.dragging = true
        this.$parent.resizeProxyVisible = true
        var table = this.$parent
        var tableEl = table.$el
        var tableLeft = tableEl.getBoundingClientRect().left
        var columnEl = this.$el.querySelector('th.'.concat(column.id))
        var columnRect = columnEl.getBoundingClientRect()
        var minLeft = columnRect.left - tableLeft + 30
        addClass(columnEl, 'noclick')
        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        }
        var resizeProxy = table.$refs.resizeProxy
        resizeProxy.style.left = this.dragState.startLeft + 'px'

        document.onselectstart = function () {
          return false
        }

        document.ondragstart = function () {
          return false
        }

        var handleMouseMove = function handleMouseMove (event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft
          var proxyLeft = _this3.dragState.startLeft + deltaLeft
          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px'
        }

        var handleMouseUp = function handleMouseUp () {
          if (_this3.dragging) {
            var _this3$dragState = _this3.dragState
                var startColumnLeft = _this3$dragState.startColumnLeft
                var startLeft = _this3$dragState.startLeft
            var finalLeft = parseInt(resizeProxy.style.left, 10)
            var columnWidth = finalLeft - startColumnLeft
            column.width = column.realWidth = columnWidth
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event)

            _this3.store.scheduleLayout()

            document.body.style.cursor = ''
            _this3.dragging = false
            _this3.draggingColumn = null
            _this3.dragState = {}
            table.resizeProxyVisible = false
          }

          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
          document.onselectstart = null
          document.ondragstart = null
          setTimeout(function () {
            removeClass(columnEl, 'noclick')
          }, 0)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
      }
    },
    handleMouseMove: function handleMouseMove (event, column) {
      if (column.children && column.children.length > 0) return
      var target = event.target

      while (target && target.tagName !== 'TH') {
        target = target.parentNode
      }

      if (!column || !column.resizable) return

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect()
        var bodyStyle = document.body.style

        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize'

          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'col-resize'
          }

          this.draggingColumn = column
        } else if (!this.dragging) {
          bodyStyle.cursor = ''

          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'pointer'
          }

          this.draggingColumn = null
        }
      }
    },
    handleMouseOut: function handleMouseOut () {
      if (this.$isServer) return
      document.body.style.cursor = ''
    },
    toggleOrder: function toggleOrder (order) {
      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null
    },
    handleSortClick: function handleSortClick (event, column, givenOrder) {
      event.stopPropagation()
      var order = givenOrder || this.toggleOrder(column.order)
      var target = event.target

      while (target && target.tagName !== 'TH') {
        target = target.parentNode
      }

      if (target && target.tagName === 'TH') {
        if (hasClass(target, 'noclick')) {
          removeClass(target, 'noclick')
          return
        }
      }

      if (!column.sortable) return
      var states = this.store.states
      var sortProp = states.sortProp
      var sortOrder
      var sortingColumn = states.sortingColumn

      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null
        }

        states.sortingColumn = column
        sortProp = column.property
      }

      if (!order) {
        sortOrder = column.order = null
        states.sortingColumn = null
        sortProp = null
      } else {
        sortOrder = column.order = order
      }

      states.sortProp = sortProp
      states.sortOrder = sortOrder
      this.store.commit('changeSortCondition')
    }
  },
  data: function data () {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    }
  }
})
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__('b680')

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table-footer.js

/* harmony default export */ var table_footer = ({
  name: 'ElTableFooter',
  mixins: [layout_observer],
  render: function render (h) {
    var _this = this

    if (h) ;
    var sums = []
    this.columns.forEach(function (column, index) {
      if (index === 0) {
        sums[index] = _this.sumText
        return
      }

      var values = _this.store.states.data.map(function (item) {
        return Number(item[column.property])
      })

      var precisions = []
      var notNumber = true
      values.forEach(function (value) {
        if (!isNaN(value)) {
          notNumber = false
          var decimal = ('' + value).split('.')[1]
          precisions.push(decimal ? decimal.length : 0)
        }
      })
      var precision = Math.max.apply(null, precisions)

      if (!notNumber) {
        sums[index] = values.reduce(function (prev, curr) {
          var value = Number(curr)

          if (!isNaN(value)) {
            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)))
          } else {
            return prev
          }
        }, 0)
      } else {
        sums[index] = ''
      }
    })
    return h('table', {
      class: 'el-table__footer',
      attrs: {
        cellspacing: '0',
        cellpadding: '0',
        border: '0'
      }
    }, [h('colgroup', [this._l(this.columns, function (column) {
      return h('col', {
        attrs: {
          name: column.id
        }
      })
    }), this.hasGutter ? h('col', {
      attrs: {
        name: 'gutter'
      }
    }) : '']), h('tbody', {
      class: [{
        'has-gutter': this.hasGutter
      }]
    }, [h('tr', [this._l(this.columns, function (column, cellIndex) {
      return h('td', {
        attrs: {
          colspan: column.colSpan,
          rowspan: column.rowSpan
        },
        class: [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName]
      }, [h('div', {
        class: ['cell', column.labelClassName]
      }, [_this.summaryMethod ? _this.summaryMethod({
        columns: _this.columns,
        data: _this.store.states.data
      })[cellIndex] : sums[cellIndex]])])
    }), this.hasGutter ? h('th', {
      class: 'gutter'
    }) : ''])])])
  },
  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default () {
        return {
          prop: '',
          order: ''
        }
      }
    }
  },
  computed: {
    table: function table () {
      return this.$parent
    },
    isAllSelected: function isAllSelected () {
      return this.store.states.isAllSelected
    },
    columnsCount: function columnsCount () {
      return this.store.states.columns.length
    },
    leftFixedCount: function leftFixedCount () {
      return this.store.states.fixedColumns.length
    },
    rightFixedCount: function rightFixedCount () {
      return this.store.states.rightFixedColumns.length
    },
    columns: function columns () {
      return this.store.states.columns
    },
    hasGutter: function hasGutter () {
      return !this.fixed && this.tableLayout.gutterWidth
    }
  },
  methods: {
    isCellHidden: function isCellHidden (index, columns) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount
      } else if (this.fixed === 'right') {
        var before = 0

        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan
        }

        return before < this.columnsCount - this.rightFixedCount
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount
      }
    }
  }
})
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table-body.js

/* harmony default export */ var table_body = ({
  name: 'ElTableBody',
  mixins: [layout_observer],
  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean,
    //
    tableData: Array,
    times0: Number,
    times1: Number,
    times2: Number,
    groupIndex: Number,
    itemNum: Number,
    tableIndex: Number,
    itemRowHeight: {
      type: Number,
      default: 28
    }
  },
  render: function render (h) {
    var _this = this

    var columnsHidden = this.columns.map(function (column, index) {
      return _this.isColumnHidden(index)
    })
    return h('table', {
      ref: 'tableBody',
      class: 'el-table__body',
      attrs: {
        cellspacing: '0',
        cellpadding: '0',
        border: '0'
      }
    }, [h('colgroup', [this._l(this.columns, function (column) {
      return h('col', {
        attrs: {
          name: column.id
        }
      })
    })]), h('tbody', [this._l(this.timesTableData, function (row, $index) {
      return [h('tr', {
        style: _this.rowStyle ? _this.getRowStyle(row, _this.fvIndex($index, row)) : null,
        key: _this.table.rowKey ? _this.getKeyOfRow(row, _this.fvIndex($index, row)) : _this.fvIndex($index, row),
        on: {
          dblclick: function dblclick ($event) {
            return _this.handleDoubleClick($event, row)
          },
          click: function click ($event) {
            return _this.handleClick($event, row)
          },
          contextmenu: function contextmenu ($event) {
            return _this.handleContextMenu($event, row)
          },
          mouseenter: function mouseenter () {
            return _this.handleMouseEnter(_this.fvIndex($index, row))
          },
          mouseleave: function mouseleave () {
            return _this.handleMouseLeave()
          }
        },
        class: [_this.getRowClass(row, _this.fvIndex($index, row))]
      }, [_this._l(_this.columns, function (column, cellIndex) {
        var _this$getSpan = _this.getSpan(row, column, _this.fvIndex($index, row), cellIndex)
            var rowspan = _this$getSpan.rowspan
            var colspan = _this$getSpan.colspan

        if (!rowspan || !colspan) {
          return ''
        } else {
          if (rowspan === 1 && colspan === 1) {
            return h('td', {
              style: [{
                height: _this.itemRowHeight + 'px'
              }, _this.getCellStyle(_this.fvIndex($index, row), cellIndex, row, column)],
              class: _this.getCellClass(_this.fvIndex($index, row), cellIndex, row, column),
              on: {
                mouseenter: function mouseenter ($event) {
                  return _this.handleCellMouseEnter($event, row)
                },
                mouseleave: _this.handleCellMouseLeave
              }
            }, [column.renderCell.call(_this._renderProxy, h, {
              row: row,
              column: column,
              $index: _this.fvIndex($index, row),
              store: _this.store,
              _self: _this.context || _this.table.$vnode.context
            }, columnsHidden[cellIndex])])
          } else {
            return h('td', {
              style: [{
                height: _this.itemRowHeight + 'px'
              }, _this.getCellStyle(_this.fvIndex($index, row), cellIndex, row, column)],
              class: _this.getCellClass(_this.fvIndex($index, row), cellIndex, row, column),
              attrs: {
                rowspan: rowspan,
                colspan: colspan
              },
              on: {
                mouseenter: function mouseenter ($event) {
                  return _this.handleCellMouseEnter($event, row)
                },
                mouseleave: _this.handleCellMouseLeave
              }
            }, [column.renderCell.call(_this._renderProxy, h, {
              row: row,
              column: column,
              $index: _this.fvIndex($index, row),
              store: _this.store,
              _self: _this.context || _this.table.$vnode.context
            }, columnsHidden[cellIndex])])
          }
        }
      })]), _this.store.isRowExpanded(row) ? h('tr', [h('td', {
        attrs: {
          colspan: _this.columns.length
        },
        class: 'el-table__expanded-cell'
      }, [_this.table.renderExpanded ? _this.table.renderExpanded(h, {
        row: row,
        $index: _this.fvIndex($index, row),
        store: _this.store
      }) : ''])]) : '']
    }).concat(h('el-tooltip', {
      attrs: {
        effect: this.table.tooltipEffect,
        placement: 'top',
        content: this.tooltipContent
      },
      ref: 'tooltip'
    }))])])
  },
  watch: {
    'store.states.hoverRow': function storeStatesHoverRow (newVal, oldVal) {
      //       if (!this.store.states.isComplex) return;
      var el = this.$el
      if (!el) return
      var tr = el.querySelector('tbody').children
      var rows = [].filter.call(tr, function (row) {
        return hasClass(row, 'el-table__row')
      })

      if (this.itemNum) {
        newVal %= this.itemNum
        oldVal %= this.itemNum
      }

      var oldRow = rows[oldVal]
      var newRow = rows[newVal]

      if (oldRow) {
        removeClass(oldRow, 'hover-row')
      }

      if (newRow) {
        addClass(newRow, 'hover-row')
      }
    },
    'store.states.currentRow': function storeStatesCurrentRow (newVal, oldVal) {
      if (!this.highlight) return
      var el = this.$el
      if (!el) return // const data = this.store.states.data;

      var data = this.timesTableData
      var tr = el.querySelector('tbody').children
      var rows = [].filter.call(tr, function (row) {
        return hasClass(row, 'el-table__row')
      })
      var oldRow = rows[data.indexOf(oldVal)]
      var newRow = rows[data.indexOf(newVal)]

      if (oldRow) {
        removeClass(oldRow, 'current-row')
      } else {
        [].forEach.call(rows, function (row) {
          return removeClass(row, 'current-row')
        })
      }

      if (newRow) {
        addClass(newRow, 'current-row')
      }
    }
  },
  computed: {
    table: function table () {
      return this.$parent
    },
    data: function data () {
      return this.store.states.data
    },
    columnsCount: function columnsCount () {
      return this.store.states.columns.length
    },
    leftFixedLeafCount: function leftFixedLeafCount () {
      return this.store.states.fixedLeafColumnsLength
    },
    rightFixedLeafCount: function rightFixedLeafCount () {
      return this.store.states.rightFixedLeafColumnsLength
    },
    leftFixedCount: function leftFixedCount () {
      return this.store.states.fixedColumns.length
    },
    rightFixedCount: function rightFixedCount () {
      return this.store.states.rightFixedColumns.length
    },
    columns: function columns () {
      return this.store.states.columns
    },
    //  取数据
    timesTableData: function timesTableData () {
      var _this2 = this

      var data = []
      var count1 = 0
      var count2 = 0
      var count3 = 0
      this.data.filter(function (e, i) {
        e.initRowIndex = i
      })

      switch (this.tableIndex) {
        case 1:
          count1 = this.times0 * this.itemNum * 3
          data = this.data.slice(count1, count1 + this.itemNum)
          break

        case 2:
          count2 = this.times1 * this.itemNum * 3
          data = this.data.slice(count2 + this.itemNum, count2 + this.itemNum * 2)
          break

        case 3:
          count3 = this.times2 * this.itemNum * 3
          data = this.data.slice(count3 + this.itemNum * 2, count3 + this.itemNum * 3)
          break
      } //  选中行

      this.$nextTick(function () {
        _this2.dfCurrentRow(_this2.store.states.currentRow)
      })
      return data
    }
  },
  data: function data () {
    return {
      tooltipContent: '',
      //  定时器监听table高度改变
      intervalId: null,
      //  当前table高度
      tableBodyHeight: 0
    }
  },
  created: function created () {
    this.activateTooltip = debounce_default()(50, function (tooltip) {
      return tooltip.handleShowPopper()
    })
  },
  mounted: function mounted () {
    var _this3 = this

    this.$nextTick(function () {
      _this3.tableBodyHeight = _this3.$refs.tableBody.offsetHeight //  定时器监听当前表格高度改变

      _this3.intervalId = setInterval(function () {
        if (_this3.$refs.tableBody.offsetHeight > 0 && _this3.tableBodyHeight !== _this3.$refs.tableBody.offsetHeight) {
          //  有改变
          _this3.tableBodyHeight = _this3.$refs.tableBody.offsetHeight //  当前块取当前分组

          var groupIndex = _this3.times0

          switch (_this3.tableIndex) {
            case 1:
              groupIndex = _this3.times0 * 3 + _this3.tableIndex - 1
              break

            case 2:
              groupIndex = _this3.times1 * 3 + _this3.tableIndex - 1
              break

            case 3:
              groupIndex = _this3.times2 * 3 + _this3.tableIndex - 1
              break
          } // 执行修改高度与总高度

          _this3.$emit('changeHeight', groupIndex, _this3.tableBodyHeight)
        }
      }, 80)
    })
  },
  destroyed: function destroyed () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  methods: {
    // _l (data, cb) {
    //   for (let i in data) {
    //     cb(data[i], i);
    //   }
    // },
    getKeyOfRow: function getKeyOfRow (row, index) {
      var rowKey = this.table.rowKey

      if (rowKey) {
        return getRowIdentity(row, rowKey)
      }

      return index
    },
    isColumnHidden: function isColumnHidden (index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount
      }
    },
    getSpan: function getSpan (row, column, rowIndex, columnIndex) {
      var rowspan = 1
      var colspan = 1
      var fn = this.table.spanMethod

      if (typeof fn === 'function') {
        var result = fn({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        })

        if (Array.isArray(result)) {
          rowspan = result[0]
          colspan = result[1]
        } else if (_typeof(result) === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
      }

      return {
        rowspan: rowspan,
        colspan: colspan
      }
    },
    getRowStyle: function getRowStyle (row, rowIndex) {
      var rowStyle = this.table.rowStyle

      if (typeof rowStyle === 'function') {
        return rowStyle.call(this, {
          row: row,
          rowIndex: rowIndex
        })
      }

      return rowStyle
    },
    getRowClass: function getRowClass (row, rowIndex) {
      var classes = ['el-table__row']

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped')
      }

      var rowClassName = this.table.rowClassName

      if (typeof rowClassName === 'string') {
        classes.push(rowClassName)
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(this, {
          row: row,
          rowIndex: rowIndex
        }))
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded')
      }

      return classes.join(' ')
    },
    getCellStyle: function getCellStyle (rowIndex, columnIndex, row, column) {
      var cellStyle = this.table.cellStyle

      if (typeof cellStyle === 'function') {
        return cellStyle.call(this, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        })
      }

      return cellStyle
    },
    getCellClass: function getCellClass (rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.align, column.className]

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden')
      }

      var cellClassName = this.table.cellClassName

      if (typeof cellClassName === 'string') {
        classes.push(cellClassName)
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(this, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }))
      }

      return classes.join(' ')
    },
    handleCellMouseEnter: function handleCellMouseEnter (event, row) {
      var table = this.table
      var cell = getCell(event)

      if (cell) {
        var column = getColumnByCell(table, cell)
        var hoverState = table.hoverState = {
          cell: cell,
          column: column,
          row: row
        }
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event)
      } // 判断是否text-overflow, 如果是就显示tooltip

      var cellChild = event.target.querySelector('.cell')

      if (hasClass(cellChild, 'el-tooltip') && cellChild.scrollWidth > cellChild.offsetWidth && this.$refs.tooltip) {
        var tooltip = this.$refs.tooltip // TODO 会引起整个 Table 的重新渲染，需要优化

        this.tooltipContent = cell.textContent || cell.innerText
        tooltip.referenceElm = cell
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none')
        tooltip.doDestroy()
        tooltip.setExpectedState(true)
        this.activateTooltip(tooltip)
      }
    },
    handleCellMouseLeave: function handleCellMouseLeave (event) {
      var tooltip = this.$refs.tooltip

      if (tooltip) {
        tooltip.setExpectedState(false)
        tooltip.handleClosePopper()
      }

      var cell = getCell(event)
      if (!cell) return
      var oldHoverState = this.table.hoverState || {}
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event)
    },
    handleMouseEnter: function handleMouseEnter (index) {
      this.store.commit('setHoverRow', index)
    },
    handleMouseLeave: function handleMouseLeave () {
      this.store.commit('setHoverRow', null)
    },
    handleContextMenu: function handleContextMenu (event, row) {
      this.handleEvent(event, row, 'contextmenu')
    },
    handleDoubleClick: function handleDoubleClick (event, row) {
      this.handleEvent(event, row, 'dblclick')
    },
    handleClick: function handleClick (event, row) {
      this.store.commit('setCurrentRow', row)
      this.handleEvent(event, row, 'click')
    },
    handleEvent: function handleEvent (event, row, name) {
      var table = this.table
      var cell = getCell(event)
      var column

      if (cell) {
        column = getColumnByCell(table, cell)

        if (column) {
          table.$emit('cell-'.concat(name), row, column, cell, event)
        }
      }

      table.$emit('row-'.concat(name), row, event, column)
    },
    handleExpandClick: function handleExpandClick (row, e) {
      e.stopPropagation()
      this.store.toggleRowExpansion(row)
    },
    //  $index 处理
    fvIndex: function fvIndex (index, item) {
      var _index = index

      if (item && 'initRowIndex' in item) {
        _index = item.initRowIndex
      }

      return _index
    },
    //  默认选中行处理
    dfCurrentRow: function dfCurrentRow (currentRow) {
      if (!this.highlight) return
      var el = this.$el
      if (!el) return // const data = this.store.states.data;

      var data = this.timesTableData
      var tr = el.querySelector('tbody').children
      var rows = [].filter.call(tr, function (row) {
        return hasClass(row, 'el-table__row')
      })
      var oldRow = rows[data.indexOf(currentRow)]
      var newRow = rows[data.indexOf(currentRow)]

      if (oldRow) {
        removeClass(oldRow, 'current-row')
      } else {
        [].forEach.call(rows, function (row) {
          return removeClass(row, 'current-row')
        })
      }

      if (newRow) {
        addClass(newRow, 'current-row')
      }
    }
  }
})
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__('4d63')

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/util/index.js

var findNodeUpper = function findNodeUpper (ele, tag) {
  if (ele.parentNode) {
    if (ele.parentNode.tagName === tag.toUpperCase()) {
      return ele.parentNode
    } else {
      if (ele.parentNode) return findNodeUpper(ele.parentNode, tag); else return false
    }
  }
}
var getScrollbarWidth = function getScrollbarWidth () {
  var oP = document.createElement('p')
  var styles = {
    width: '100px',
    height: '100px',
    overflowY: 'scroll'
  }

  for (var i in styles) {
    oP.style[i] = styles[i]
  }

  document.body.appendChild(oP)
  var scrollbarWidth = oP.offsetWidth - oP.clientWidth
  oP.remove()
  return scrollbarWidth
}
var createNewArray = function createNewArray (length) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined
  var i = -1
  var arr = []

  while (++i < length) {
    var con = Array.isArray(content) ? content[i] : content
    arr.push(con)
  }

  return arr
}
var iteratorByTimes = function iteratorByTimes (times, fn) {
  var i = -1

  while (++i < times) {
    fn(i)
  }
}
var getHeaderWords = function getHeaderWords (length) {
  var wordsArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var headerArr = []

  if (length <= 26) {
    headerArr = wordsArr.slice(0, length)
  } else {
    headerArr = [].concat(wordsArr)
    var num = length - 26
    var firstWordIndex = 0
    var secondWordIndex = 0
    var i = -1

    while (++i < num) {
      firstWordIndex = Math.floor(i / 26)
      secondWordIndex = i % 26
      var sumWord = ''.concat(wordsArr[firstWordIndex]).concat(wordsArr[secondWordIndex])
      headerArr.push(sumWord)
    }
  }

  return headerArr
} // 获取数组中第一个不为空的值

var getFirstNotNullValue = function getFirstNotNullValue (array, index) {
  if (!(array && array.length)) return false
  var r = -1
  var rowLength = array.length

  while (++r < rowLength) {
    var item = array[r][index]
    if (item || item === 0) return item
  }

  return false
}
var isChineseReg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
var sortArr = function sortArr (arr, index) {
  if (arr.length <= 1) return
  var firstNotNullValue = getFirstNotNullValue(arr, index)
  if (!firstNotNullValue && firstNotNullValue !== 0) return

  if (!isChineseReg.test(firstNotNullValue)) {
    if (isNaN(Number(firstNotNullValue))) {
      // 非中文非数值
      arr.sort()
    } else {
      // 数值型
      arr.sort(function (a, b) {
        return a[index] - b[index]
      })
    }
  } else {
    arr.sort(function (a, b) {
      return a[index].localeCompare(b[index], 'zh')
    })
  }
} // 倒序

var sortDesArr = function sortDesArr (arr, index) {
  if (arr.length <= 1) return
  var firstNotNullValue = getFirstNotNullValue(arr, index)
  if (!firstNotNullValue && firstNotNullValue !== 0) return

  if (!isChineseReg.test(firstNotNullValue)) {
    if (isNaN(Number(firstNotNullValue))) {
      // 非中文非数值
      arr.sort().reverse()
    } else {
      // 数值型
      arr.sort(function (a, b) {
        return b[index] - a[index]
      })
    }
  } else {
    arr.sort(function (a, b) {
      return b[index].localeCompare(a[index], 'zh')
    })
  }
}
var util_on = function on (ele, event, callback) {
  ele.addEventListener(event, callback)
}
var util_off = function off (ele, event, callback) {
  ele.removeEventListener(event, callback)
}
var attr = function attr (ele, attribution, value) {
  if (value || value === 0) {
    ele.setAttribute(attribution, value)
  } else {
    return ele.getAttribute(attribution)
  }
}
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/mixins/data-handle.js

// import TableStore from '../table-store';
// import TableLayout from '../table-layout';

/* harmony default export */ var data_handle = ({
  data: function data () {
    //
    return {
      // layout,
      // store,
      scrollLeft: 0,
      scrollTop: 0,
      // 三个tr块中的一块的高度
      moduleHeight: 0,

      /**
       * @description 根据表格容器高度计算内置单个表格（1/3）渲染的行数基础上额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能
       */
      appendNum: 15,
      // 一块数据显示的数据条数
      itemNum: 0,

      /**
       * @description 表头高度
       */
      headerHeight: 0,

      /**
      * @description 表格行高
      */
      //  rowHeight: 32,
      //  表格滚动区域高度
      wrapperHeight: 0,
      // 当前展示的表格是第几个
      totalRowHeight: 0,
      // 如果全量渲染应该是多高，用于计算占位
      currentIndex: 0,
      times0: 0,
      // 当前是第几轮
      times1: 0,
      times2: -1,
      topPlaceholderHeight: 0,
      // 顶部占位容器高度
      table1Data: [],
      table2Data: [],
      table3Data: [],
      outerWidth: 0,
      // 外面容器宽度
      groupHeight: {},
      groupIndex: 0
    }
  },
  methods: {
    //  滚动条拖动
    handleScroll: function handleScroll (e) {
      var ele = e.srcElement || e.target
      var scrollTop = ele.scrollTop
          var scrollLeft = ele.scrollLeft
      this.scrollLeft = scrollLeft
      this.scrollTop = scrollTop
    },
    //  获取高度与数量
    updateHeight: function updateHeight () {
      this.itemNum = Math.ceil(this.height / this.rowHeight) + this.appendNum
      this.wrapperHeight = this.$refs.bodyWrapper.offsetHeight
      this.setTopPlace()
    },
    //
    initGroupHeight: function initGroupHeight (data) {
      //  分组数据
      var moduleNb = Math.ceil(this.height / this.rowHeight) + this.appendNum
      var groupHeight = {}

      if (data.length > moduleNb) {
        for (var i in data) {
          var nb = (+i + 1) * moduleNb

          if (nb > data.length) {
            groupHeight[i] = data.length % moduleNb * this.rowHeight
            break
          }

          groupHeight[i] = moduleNb * this.rowHeight
        }
      } else {
        groupHeight[0] = data.length * this.rowHeight
      }

      return groupHeight
    },
    //  设置顶部定位
    setTopPlace: function setTopPlace () {
      var scrollTop = this.scrollTop
      var t0 = 0
      var t1 = 0
      var t2 = 0

      if (scrollTop > this.groupHeight[0]) {
        switch (this.currentIndex) {
          case 0:
            t0 = parseInt(this.groupIndex / 3)
            t1 = t2 = t0
            break

          case 1:
            t1 = parseInt(this.groupIndex / 3)
            t0 = t1 + 1
            t2 = t1
            break

          case 2:
            t2 = parseInt(this.groupIndex / 3)
            t0 = t1 = t2 + 1
        }
      }

      this.times0 = t0
      this.times1 = t1
      this.times2 = t2 //

      var height = 0

      for (var i in this.groupHeight) {
        if (+i === +this.groupIndex) {
          break
        }

        height += this.groupHeight[i]
      }

      this.topPlaceholderHeight = height
    },
    // 给表格数据添加行号，用于排序后正确修改数据
    setIndex: function setIndex (tableData) {
      return tableData.map(function (item, i) {
        var row = item
        row.initRowIndex = i
        return row
      })
    },
    setComputedProps: function setComputedProps () {
      var height = 0

      for (var i in this.groupHeight) {
        height += this.groupHeight[i]
      }

      this.totalRowHeight = height
    },
    //
    _tableResize: function _tableResize () {
      var _this = this

      this.$nextTick(function () {
        _this.updateHeight()

        _this.setComputedProps()

        var scrollBarWidth = _this.totalRowHeight > _this.wrapperHeight ? getScrollbarWidth() : 0
        _this.outerWidth = _this.$refs.bodyWrapper.offsetWidth - 2 - scrollBarWidth // let width = this.colWidth * this.columns.length + (this.showIndex ? this.indexWidthInside : 0);
        // this.tableWidth = width > this.outerWidth ? width : this.outerWidth;
        // this.tableWidth = this.fixedWrapperWidth ? this.outerWidth : (width > this.outerWidth ? width : this.outerWidth);
        // if (width < this.outerWidth) this._setColWidthArr();
        // this.widthArr = this.colWidthArr;
      })
    },
    //  生成三个Vnode的数组
    getTables: function getTables (h, prop) {
      var table1 = this.getItemTable(h, this.table1Data, 1, prop)
      var table2 = this.getItemTable(h, this.table2Data, 2, prop)
      var table3 = this.getItemTable(h, this.table3Data, 3, prop)
      if (this.currentIndex === 0) return [table1, table2, table3]; else if (this.currentIndex === 1) return [table2, table3, table1]; else return [table3, table1, table2]
    },
    //  三个Vnode的外包装
    renderTable: function renderTable (h, prop) {
      return h('div', {
        class: 'vue-element-bigdata-table-div',
        style: prop.style
      }, this.getTables(h, prop))
    },
    //  生成body
    getItemTable: function getItemTable (h, data, index, prop) {
      var _this2 = this

      return h(table_body, {
        style: {
          width: '100%'
        },
        props: {
          store: this.store,
          tableData: data,
          stripe: prop.stripe,
          context: prop.context,
          rowClassName: prop.rowClassName,
          rowStyle: prop.rowStyle,
          fixed: prop.fixed,
          highlight: prop.highlight,
          times0: this.times0,
          times1: this.times1,
          times2: this.times2,
          itemNum: this.itemNum,
          tableIndex: index,
          groupIndex: +this.groupIndex,
          itemRowHeight: this.rowHeight
        },
        on: {
          //
          changeHeight: function changeHeight (index, height) {
            _this2.groupHeight[index] = height //

            _this2.setComputedProps()
          }
        },
        key: 'table-item-key' + index,
        ref: 'itemTable' + index,
        attrs: {
          'data-index': index
        }
      })
    },
    //
    // 涉及到表格容器尺寸变化或数据变化的情况调用此方法重新计算相关值
    resize: function resize () {
      this._tableResize()
    },
    // 获取表格横向滚动的距离
    getScrollLeft: function getScrollLeft () {
      return this.$refs.outer.scrollLeft
    },
    // 调用此方法跳转到某条数据
    scrollToRow: function scrollToRow (index) {
      this._scrollToIndexRow(index)
    },
    // canEdit为true时调用此方法使第row+1行第col+1列变为编辑状态，这里的行列指的是表格显示的行和除序列号列的列
    editCell: function editCell (row, col) {
      this._editCell(row, col)
    }
  },
  computed: {
    bottomPlaceholderHeight: function bottomPlaceholderHeight () {
      return this.placeholderHeight - this.topPlaceholderHeight < 0 ? 0 : this.placeholderHeight - this.topPlaceholderHeight
    },
    placeholderHeight: function placeholderHeight () {
      //  当前三块总高度
      var mdHeight = 0
      var arr = []

      for (var i in this.groupHeight) {
        arr[i] = this.groupHeight[i]
      }

      arr = arr.slice(this.groupIndex, +this.groupIndex + 3)
      var _iteratorNormalCompletion = true
      var _didIteratorError = false
      var _iteratorError = undefined

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var n = _step.value
          mdHeight += n
        }
      } catch (err) {
        _didIteratorError = true
        _iteratorError = err
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return()
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError
          }
        }
      }

      return this.totalRowHeight - mdHeight // 占位容器的总高度(上 + 下)
    }
  },
  watch: {
    scrollTop: function scrollTop (top) {
      var _this3 = this

      //  当前滚动条是在三个table中的哪一个
      var height = 0 //  通过当前上部站位得到三个table最上一个table的是哪个组
      // let index = 0;

      for (var i in this.groupHeight) {
        if (top >= height && top < height + (this.groupHeight[i] ? this.groupHeight[i] : 0)) {
          this.groupIndex = +i
          break
        }

        height += this.groupHeight[i]
      } //

      this.currentIndex = this.groupIndex % 3
      this.$nextTick(function () {
        _this3.setTopPlace()
      })
    },
    data: {
      immediate: true,
      handler: function handler (value) {
        var _this4 = this

        this.insideTableData = this.setIndex(value)
        this.groupHeight = this.initGroupHeight(value)
        this.resize() // this.store.commit('setData', value);

        if (this.$ready) {
          this.$nextTick(function () {
            // this.doLayout();
            //  设置滚动条高度与左边度
            // this.scrollLeft = 0;
            // this.scrollTop = 0;
            //  更新
            _this4.setComputedProps() //  延迟 计算滚动条是否显示

            setTimeout(function () {
              _this4.updateScrollY()
            }, 100)
          })
        }
      }
    },
    insideTableData: function insideTableData () {
      this.resize()
    },
    tableData: function tableData (newValue) {
      //  重置高度分组
      this.groupHeight = this.initGroupHeight(newValue)
      this.resize()
    }
  },
  mounted: function mounted () {
    var _this5 = this

    this.$nextTick(function () {
      _this5.insideTableData = _this5.setIndex(_this5.tableData) // this._initM();

      _this5.resize()
    })
  }
})
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/dom/renderDom.js

/* harmony default export */ var renderDom = ({
  name: 'renderDom',
  functional: true,
  props: {
    render: Function,
    backValue: [Number, Object],
    fixed: String,
    store: Object,
    stripe: Boolean,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    highlight: Boolean,
    context: {}
  },
  render: function render (h, ctx) {
    return ctx.props.render(h, {
      fixed: ctx.props.fixed,
      store: ctx.props.store,
      stripe: ctx.props.stripe,
      rowClassName: ctx.props.rowClassName,
      rowStyle: ctx.props.rowStyle,
      highlight: ctx.props.highlight,
      context: ctx.props.context,
      style: ctx.data.style
    }, ctx.parent)
  }
})
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/vue-element-bigdata-table/table.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import TableBody from './table-body'

 // console.log(renderDom)

var tableIdSeed = 1
/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'ElBigdataTable',
  mixins: [mixins_locale, migrating, data_handle],
  directives: {
    Mousewheel: directives_mousewheel
  },
  props: {
    data: {
      type: Array,
      default: function _default () {
        return []
      }
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    context: {},
    showHeader: {
      type: Boolean,
      default: true
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    //  行高
    rowHeight: {
      type: Number,
      default: 32
    }
  },
  components: {
    TableHeader: table_header,
    TableFooter: table_footer,
    renderDom: renderDom
  },
  methods: {
    getMigratingConfig: function getMigratingConfig () {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      }
    },
    setCurrentRow: function setCurrentRow (row) {
      this.store.commit('setCurrentRow', row)
    },
    toggleRowSelection: function toggleRowSelection (row, selected) {
      this.store.toggleRowSelection(row, selected)
      this.store.updateAllSelected()
    },
    toggleRowExpansion: function toggleRowExpansion (row, expanded) {
      this.store.toggleRowExpansion(row, expanded)
    },
    clearSelection: function clearSelection () {
      this.store.clearSelection()
    },
    clearFilter: function clearFilter () {
      this.store.clearFilter()
    },
    clearSort: function clearSort () {
      this.store.clearSort()
    },
    handleMouseLeave: function handleMouseLeave () {
      this.store.commit('setHoverRow', null)
      if (this.hoverState) this.hoverState = null
    },
    updateScrollY: function updateScrollY () {
      this.layout.updateScrollY()
    },
    handleFixedMousewheel: function handleFixedMousewheel (event, data) {
      var bodyWrapper = this.bodyWrapper

      if (Math.abs(data.spinY) > 0) {
        var currentScrollTop = bodyWrapper.scrollTop

        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault()
        }

        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault()
        }

        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5)
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5)
      }
    },
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel (event, data) {
      var pixelX = data.pixelX
          var pixelY = data.pixelY

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        event.preventDefault()
        this.bodyWrapper.scrollLeft += data.pixelX / 5
      }
    },
    bindEvents: function bindEvents () {
      var _this$$refs = this.$refs
          var headerWrapper = _this$$refs.headerWrapper
          var footerWrapper = _this$$refs.footerWrapper
      var refs = this.$refs
      var self = this
      this.bodyWrapper.addEventListener('scroll', function () {
        if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft
        if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft
        if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop
        if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop
        var maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1
        var scrollLeft = this.scrollLeft

        if (scrollLeft >= maxScrollLeftPosition) {
          self.scrollPosition = 'right'
        } else if (scrollLeft === 0) {
          self.scrollPosition = 'left'
        } else {
          self.scrollPosition = 'middle'
        }
      })

      if (this.fit) {
        addResizeListener(this.$el, this.resizeListener)
      }
    },
    resizeListener: function resizeListener () {
      if (!this.$ready) return
      var shouldUpdateLayout = false
      var el = this.$el
      var _this$resizeState = this.resizeState
          var oldWidth = _this$resizeState.width
          var oldHeight = _this$resizeState.height
      var width = el.offsetWidth

      if (oldWidth !== width) {
        shouldUpdateLayout = true
      }

      var height = el.offsetHeight

      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width
        this.resizeState.height = height
        this.doLayout()
      }
    },
    doLayout: function doLayout () {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight()
      }

      this.layout.updateColumnsWidth() //
      // console.log('====================================================')
    }
  },
  created: function created () {
    var _this = this

    this.tableId = 'el-table_' + tableIdSeed++
    this.debouncedUpdateLayout = debounce_default()(50, function () {
      return _this.doLayout()
    })
  },
  computed: {
    tableSize: function tableSize () {
      return this.size || (this.$ELEMENT || {}).size
    },
    bodyWrapper: function bodyWrapper () {
      return this.$refs.bodyWrapper
    },
    shouldUpdateHeight: function shouldUpdateHeight () {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0
    },
    selection: function selection () {
      return this.store.states.selection
    },
    columns: function columns () {
      return this.store.states.columns
    },
    tableData: function tableData () {
      return this.store.states.data
    },
    fixedColumns: function fixedColumns () {
      return this.store.states.fixedColumns
    },
    rightFixedColumns: function rightFixedColumns () {
      return this.store.states.rightFixedColumns
    },
    bodyWidth: function bodyWidth () {
      var _this$layout = this.layout
          var bodyWidth = _this$layout.bodyWidth
          var scrollY = _this$layout.scrollY
          var gutterWidth = _this$layout.gutterWidth
      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : ''
    },
    bodyHeight: function bodyHeight () {
      if (this.height) {
        return {
          height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
        }
      } else if (this.maxHeight) {
        return {
          'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
        }
      }

      return {}
    },
    fixedBodyHeight: function fixedBodyHeight () {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        }
      } else if (this.maxHeight) {
        var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight

        if (this.showHeader) {
          maxHeight -= this.layout.headerHeight
        }

        maxHeight -= this.layout.footerHeight
        return {
          'max-height': maxHeight + 'px'
        }
      }

      return {}
    },
    fixedHeight: function fixedHeight () {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          }
        }

        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        }
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          }
        }

        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        }
      }
    }
  },
  watch: {
    height: {
      immediate: true,
      handler: function handler (value) {
        this.layout.setHeight(value)
      }
    },
    maxHeight: {
      immediate: true,
      handler: function handler (value) {
        this.layout.setMaxHeight(value)
      }
    },
    currentRowKey: function currentRowKey (newVal) {
      this.store.setCurrentRowKey(newVal)
    },
    data: {
      immediate: true,
      handler: function handler (value) {
        var _this2 = this

        this.store.commit('setData', value)

        if (this.$ready) {
          this.$nextTick(function () {
            _this2.doLayout()
          })
        }
      }
    },
    expandRowKeys: {
      immediate: true,
      handler: function handler (newVal) {
        if (newVal) {
          this.store.setExpandRowKeys(newVal)
        }
      }
    }
  },
  destroyed: function destroyed () {
    if (this.resizeListener) {
      removeResizeListener(this.$el, this.resizeListener)
    }
  },
  mounted: function mounted () {
    var _this3 = this

    this.bindEvents()
    this.store.updateColumns()
    this.doLayout()
    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    } // init filters

    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this3.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        })
      }
    })
    this.$ready = true
  },
  data: function data () {
    var store = new table_store(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll
    })
    var layout = new table_layout({
      store: store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    })
    return {
      layout: layout,
      store: store,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    }
  }
})
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_element_bigdata_table_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_)
// EXTERNAL MODULE: ./src/components/public/vue-element-bigdata-table/table.vue?vue&type=style&index=0&lang=css&
var tablevue_type_style_index_0_lang_css_ = __webpack_require__('f313')

// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/table.vue

/* normalize component */

var table_component = normalizeComponent(
  vue_element_bigdata_table_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var vue_element_bigdata_table_table = (table_component.exports)
// CONCATENATED MODULE: ./src/components/public/vue-element-bigdata-table/index.js

var vue_element_bigdata_table_install = function install (Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  Vue.component('ElBigdataTable', vue_element_bigdata_table_table)
}

if (typeof window !== 'undefined' && window.Vue) {
  vue_element_bigdata_table_install(window.Vue)
}

/* harmony default export */ var vue_element_bigdata_table = (Object.assign(vue_element_bigdata_table_table, {
  install: vue_element_bigdata_table_install
}))
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

/* harmony default export */ var entry_lib = __webpack_exports__.default = (vue_element_bigdata_table)
/***/ },

/***/ fb6a:
/***/ function (module, exports, __webpack_require__) {
'use strict'

var $ = __webpack_require__('23e7')
var isObject = __webpack_require__('861d')
var isArray = __webpack_require__('e8b5')
var toAbsoluteIndex = __webpack_require__('23cb')
var toLength = __webpack_require__('50c4')
var toIndexedObject = __webpack_require__('fc6a')
var createProperty = __webpack_require__('8418')
var wellKnownSymbol = __webpack_require__('b622')
var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
var arrayMethodUsesToLength = __webpack_require__('ae40')

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice')
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 })

var SPECIES = wellKnownSymbol('species')
var nativeSlice = [].slice
var max = Math.max

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice (start, end) {
    var O = toIndexedObject(this)
    var length = toLength(O.length)
    var k = toAbsoluteIndex(start, length)
    var fin = toAbsoluteIndex(end === undefined ? length : end, length)
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n
    if (isArray(O)) {
      Constructor = O.constructor
      // cross-realm fallback
      if (typeof Constructor === 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES]
        if (Constructor === null) Constructor = undefined
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin)
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0))
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k])
    result.length = n
    return result
  }
})
/***/ },

/***/ fc6a:
/***/ function (module, exports, __webpack_require__) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__('44ad')
var requireObjectCoercible = __webpack_require__('1d80')

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it))
}
/***/ },

/***/ fdbc:
/***/ function (module, exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}
/***/ },

/***/ fdbf:
/***/ function (module, exports, __webpack_require__) {
var NATIVE_SYMBOL = __webpack_require__('4930')

module.exports = NATIVE_SYMBOL &&
  // eslint-disable-next-line no-undef
  !Symbol.sham &&
  // eslint-disable-next-line no-undef
  typeof Symbol.iterator === 'symbol'
/***/ }

/******/ })
})
