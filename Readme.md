# simple-browser-store

1. 安装 ,[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install simple-browser-store
yarn add simple-browser-store
```

2. 使用

```js
import { getData, setData, removeData } from 'simple-browser-store';
```

3. typescript 类型定义

```js
export declare type Type = 'cookie' | 'localStorage' | 'sessionStorage';

export declare const getData: (type: Type, key: string) => Record<string, unknown>;

export declare const setData: (
  type: Type,
  key: string,
  value: Record<string, unknown> | null,
  cookieOptions?: CookieAttributes
) => void;

export declare const removeData: (type: Type, key: string) => void;

```
