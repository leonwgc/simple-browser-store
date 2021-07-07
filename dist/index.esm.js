import jsCookie from 'js-cookie';

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
  var cookie = jsCookie.get(key);
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
    // remove
    return removeData(key, cookieOptions);
  }

  var oldData = getData(key);

  if (!oldData) {
    jsCookie.set(key, JSON.stringify(value), cookieOptions);
  } else {
    var newVal = _objectSpread2(_objectSpread2({}, oldData), value);

    jsCookie.set(key, JSON.stringify(newVal));
  }
};
var removeData = function removeData(key, cookieOptions) {
  jsCookie.remove(key, cookieOptions);
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
    // remove
    return removeData$1(type, key);
  }

  var oldData = getData$1(type, key);

  if (!oldData) {
    window[type].setItem(key, JSON.stringify(value));
  } else {
    var newVal = _objectSpread2(_objectSpread2({}, oldData), value);

    window[type].setItem(key, JSON.stringify(newVal));
  }
};
var removeData$1 = function removeData(type, key) {
  window[type].removeItem(key);
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

export { getData$2 as getData, setData$2 as setData };
