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
    // remove
    return removeData(key, cookieOptions);
  }
  const oldData = getData(key);

  if (!oldData) {
    jsCookie.set(key, JSON.stringify(value), cookieOptions);
  } else {
    const newVal = { ...oldData, ...value };
    jsCookie.set(key, JSON.stringify(newVal));
  }
};

export const removeData = (key: string, cookieOptions?: CookieAttributes): void => {
  jsCookie.remove(key, cookieOptions);
};
