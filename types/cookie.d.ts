import { CookieAttributes } from 'js-cookie';
export declare const getData: (key: string) => Record<string, unknown>;
export declare const setData: (key: string, value: Record<string, unknown> | null, cookieOptions?: CookieAttributes) => void;
export declare const removeData: (key: string, cookieOptions?: CookieAttributes) => void;
