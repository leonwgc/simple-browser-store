'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsCookie = require('js-cookie');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var jsCookie__default = /*#__PURE__*/_interopDefaultLegacy(jsCookie);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var getData = function getData(key) {
  var cookie = jsCookie__default['default'].get(key);
  var cookieObj = null;

  if (cookie) {
    try {
      cookieObj = JSON.parse(cookie);
    } catch (ex) {}
  }

  return cookieObj;
};
var setData = function setData(key, value, cookieOptions) {
  if (!value) {
    return;
  }

  var data = getData(key);

  if (data) {
    data = _objectSpread2(_objectSpread2({}, data), value);
  } else {
    data = value;
  }

  jsCookie__default['default'].set(key, JSON.stringify(data), cookieOptions);
};

var getData$1 = function getData(type, key) {
  var dataStr = window[type].getItem(key);
  var data = null;

  if (dataStr) {
    try {
      data = JSON.parse(dataStr);
    } catch (ex) {}
  }

  return data;
};
var setData$1 = function setData(type, key, value) {
  if (!value) {
    return;
  }

  var data = getData$1(type, key);

  if (data) {
    data = _objectSpread2(_objectSpread2({}, data), value);
  } else {
    data = value;
  }

  window[type].setItem(key, JSON.stringify(data));
};

var getData$2 = function getData$2(type, key) {
  if (type === 'cookie') {
    return getData(key);
  } else {
    return getData$1(type, key);
  }
};
var setData$2 = function setData$2(type, key, value, cookieOptions) {
  if (type === 'cookie') {
    return setData(key, value, cookieOptions);
  } else {
    return setData$1(type, key, value);
  }
};

exports.getData = getData$2;
exports.setData = setData$2;
