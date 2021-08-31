import { StorageType } from './type';
import { CookieAttributes } from 'js-cookie';
/**
 * 从cookie/localStorage/sessionStorage获取key对应的数据
 *
 * @param {StorageType} type
 * @param {string} key
 * @return {*}  {Record<string, unknown>}
 */
export declare const getData: (type: StorageType, key: string) => Record<string, unknown>;
/**
 * 保存数据到cookie/localStorage/sessionStorage,如果是cookie，可以设置cookie 属性，e.g. expires/path/domain/secure/sameSite
 * cookie option 参考：https://www.npmjs.com/package/js-cookie
 *
 * @param {StorageType} type
 * @param {string} key
 * @param {Record<string, unknown>} value
 * @param {CookieAttributes} [cookieOptions]
 * @return {*}  {void}
 */
export declare const setData: (type: StorageType, key: string, value: Record<string, unknown>, cookieOptions?: CookieAttributes) => void;
/**
 *  删除数据
 *
 * @param {StorageType} type
 * @param {string} key
 * @param {CookieAttributes} [cookieOptions]
 * @return {*}  {void}
 */
export declare const removeData: (type: StorageType, key: string, cookieOptions?: CookieAttributes) => void;
