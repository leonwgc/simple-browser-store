import jsCookie, { CookieAttributes } from 'js-cookie';

export const getData = (key: string): Record<string, unknown> => {
  const cookie = jsCookie.get(key);
  let cookieObj = null;

  if (cookie) {
    try {
      cookieObj = JSON.parse(cookie);
    } catch (ex) {}
  }

  return cookieObj;
};

export const setData = (
  key: string,
  value: Record<string, unknown> | null,
  cookieOptions?: CookieAttributes
): void => {
  if (!value) {
    return;
  }
  let data = getData(key);
  if (data) {
    data = { ...data, ...value };
  } else {
    data = value;
  }

  jsCookie.set(key, JSON.stringify(data), cookieOptions);
};

export const removeData = (key: string, cookieOptions?: CookieAttributes): void => {
  jsCookie.remove(key, cookieOptions);
};
