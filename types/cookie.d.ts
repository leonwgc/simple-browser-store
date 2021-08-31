import { CookieAttributes } from 'js-cookie';
/**
 * 获取数据
 *
 * @param {string} key
 * @return {*}  {Record<string, unknown>}
 */
export declare const getData: (key: string) => Record<string, unknown>;
/**
 * 存储数据
 *
 * @param {string} key
 * @param {Record<string, unknown>} value
 * @param {CookieAttributes} [cookieOptions]
 */
export declare const setData: (key: string, value: Record<string, unknown>, cookieOptions?: CookieAttributes) => void;
export declare const removeData: (key: string, cookieOptions?: CookieAttributes) => void;
