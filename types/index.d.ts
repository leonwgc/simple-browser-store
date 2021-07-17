import { StorageType } from './type';
import { CookieAttributes } from 'js-cookie';
export declare const getData: (type: StorageType, key: string) => Record<string, unknown>;
export declare const setData: (type: StorageType, key: string, value: Record<string, unknown>, cookieOptions?: CookieAttributes) => void;
export declare const removeData: (type: StorageType, key: string, cookieOptions?: CookieAttributes) => void;
