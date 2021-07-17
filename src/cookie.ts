import jsCookie, { CookieAttributes } from 'js-cookie';
import { isObject } from './helper';

export const getData = (key: string): Record<string, unknown> => {
  const cookie = jsCookie.get(key);
  let cookieObj = {};

  if (cookie) {
    try {
      cookieObj = JSON.parse(cookie);
    } catch (ex) {}
  }

  return cookieObj;
};

export const setData = (
  key: string,
  value: Record<string, unknown>,
  cookieOptions?: CookieAttributes
): void => {
  if (isObject(value)) {
    jsCookie.set(key, JSON.stringify({ ...getData(key), ...value }), cookieOptions);
  }
};

export const removeData = (key: string, cookieOptions?: CookieAttributes): void => {
  jsCookie.remove(key, cookieOptions);
};
