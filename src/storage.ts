import { StorageType } from './type';
import { isObject } from './helper';

export const getData = (type: StorageType, key: string): Record<string, unknown> => {
  const dataStr = window[type].getItem(key);
  let data = {};

  if (dataStr) {
    try {
      data = JSON.parse(dataStr);
    } catch (ex) {}
  }

  return data;
};

export const setData = (type: StorageType, key: string, value: Record<string, unknown>): void => {
  if (isObject(value)) {
    window[type].setItem(key, JSON.stringify({ ...getData(type, key), ...value }));
  }
};

export const removeData = (type: StorageType, key: string): void => {
  window[type].removeItem(key);
};
