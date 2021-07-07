import { Type } from './type';
export declare const getData: (type: Type, key: string) => Record<string, unknown> | null;
export declare const setData: (type: Type, key: string, value: Record<string, unknown> | null) => void;
export declare const removeData: (type: Type, key: string) => void;
