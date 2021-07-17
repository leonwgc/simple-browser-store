import { StorageType } from './type';
export declare const getData: (type: StorageType, key: string) => Record<string, unknown>;
export declare const setData: (type: StorageType, key: string, value: Record<string, unknown>) => void;
export declare const removeData: (type: StorageType, key: string) => void;
