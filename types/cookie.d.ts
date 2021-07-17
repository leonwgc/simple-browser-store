import { CookieAttributes } from 'js-cookie';
export declare const getData: (key: string) => Record<string, unknown>;
export declare const setData: (key: string, value: Record<string, unknown>, cookieOptions?: CookieAttributes) => void;
export declare const removeData: (key: string, cookieOptions?: CookieAttributes) => void;
