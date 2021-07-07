import * as cookie from './cookie';
import * as storage from './storage';
import { Type } from './type';
import { CookieAttributes } from 'js-cookie';

export const getData = (type: Type, key: string): Record<string, unknown> => {
  if (type === 'cookie') {
    return cookie.getData(key);
  } else {
    return storage.getData(type, key);
  }
};

export const setData = (
  type: Type,
  key: string,
  value: Record<string, unknown> | null,
  cookieOptions?: CookieAttributes
): void => {
  if (type === 'cookie') {
    return cookie.setData(key, value, cookieOptions);
  } else {
    return storage.setData(type, key, value);
  }
};
