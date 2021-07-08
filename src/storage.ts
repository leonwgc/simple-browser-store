import { Type } from './type';

export const getData = (type: Type, key: string): Record<string, unknown> | null => {
  const dataStr = window[type].getItem(key);
  let data = null;

  if (dataStr) {
    try {
      data = JSON.parse(dataStr);
    } catch (ex) {}
  }

  return data;
};

export const setData = (type: Type, key: string, value: Record<string, unknown> | null): void => {
  if (!value) {
    return;
  }
  let data = getData(type, key);
  if (data) {
    data = { ...data, ...value };
  } else {
    data = value;
  }
  window[type].setItem(key, JSON.stringify(data));
};

export const removeData = (type: Type, key: string): void => {
  window[type].removeItem(key);
};
