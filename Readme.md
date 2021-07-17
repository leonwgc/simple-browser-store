# simple-browser-store

基于 key-value 键值对(object对象)的 cookie/localStorage/sessionStorage 浏览器存储

1. 安装 ,[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install simple-browser-store
yarn add simple-browser-store
```

2. 使用

```js
import { getData, setData, removeData } from 'simple-browser-store';

const appKey='__app__';

const cookieData=getData('cookie',appKey);

setData('cookie',appKey,{newProp:'new prop value'});

```

3. typescript 类型定义

```js
export declare type Type = 'cookie' | 'localStorage' | 'sessionStorage';

export declare const getData: (type: Type, key: string) => Record<string, unknown>;

export declare const setData: (
  type: Type,
  key: string,
  value: Record<string, unknown>,
  cookieOptions?: CookieAttributes
) => void;

export declare const removeData: (type: Type, key: string) => void;

```

4. getData返回包含key-value键值对的object对象(不会为null)

5. setData以对象扩展 (Object.assign)方式更新或者添加key-value pair 