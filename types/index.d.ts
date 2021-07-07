import { Type } from './type';
import { CookieAttributes } from 'js-cookie';
export declare const getData: (type: Type, key: string) => Record<string, unknown>;
export declare const setData: (type: Type, key: string, value: Record<string, unknown> | null, cookieOptions?: CookieAttributes) => void;
