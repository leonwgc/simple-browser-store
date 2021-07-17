基于 key-value 键值对(object 对象)的 cookie/localStorage/sessionStorage 浏览器存储

1. 安装 ,[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install simple-browser-store
yarn add simple-browser-store
```

2. 使用

```js
import { getData, setData, removeData } from 'simple-browser-store';

// cookie 存储
const appKey = '__app__';
const cookieData = getData('cookie', appKey);
setData('cookie', appKey, { newProp: 'new prop value' });

// localStorage 存储
const localStorageData = getData('localStorage', appKey);
setData('localStorage', appKey, { newProp: 'new prop value' });
```

3. typescript 类型定义

```js
export declare type StorageType = 'cookie' | 'localStorage' | 'sessionStorage';

export declare const getData: (type: StorageType, key: string) => Record<string, unknown>;

export declare const setData: (
  type: StorageType,
  key: string,
  value: Record<string, unknown>,
  cookieOptions?: CookieAttributes
) => void;

export declare const removeData: (type: StorageType, key: string,cookieOptions?: CookieAttributes) => void;

```

4. getData 返回包含 key-value 键值对的 object 对象(不会为 null)

5. setData 以对象扩展 (Object.assign)方式更新或者添加 key-value pair
