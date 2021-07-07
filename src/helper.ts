export const isObject = (data: unknown): boolean => {
  return Object.prototype.toString.call(data) === '[object Object]';
};
