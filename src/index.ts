import * as cookie from './cookie';
import * as storage from './storage';
import { StorageType } from './type';
import { CookieAttributes } from 'js-cookie';

export const getData = (type: StorageType, key: string): Record<string, unknown> => {
  if (type === 'cookie') {
    return cookie.getData(key);
  } else {
    return storage.getData(type, key);
  }
};

export const setData = (
  type: StorageType,
  key: string,
  value: Record<string, unknown>,
  cookieOptions?: CookieAttributes
): void => {
  if (type === 'cookie') {
    return cookie.setData(key, value, cookieOptions);
  } else {
    return storage.setData(type, key, value);
  }
};

export const removeData = (
  type: StorageType,
  key: string,
  cookieOptions?: CookieAttributes
): void => {
  if (type === 'cookie') {
    return cookie.removeData(key, cookieOptions);
  } else {
    return storage.removeData(type, key);
  }
};
