# 一言 Node.JS SDK

本项目是基于 <developer.hitokoto.cn> 开放接口的官方 Node.JS SDK。项目使用 TypeScript 编写，提供强类型提示。

## 安装

在终端中输入：

```shell
yarn add @hitokoto/node-sdk # 如果你使用 npm 的话： npm install @hitokoto/node-sdk
```

## 使用

这里有几个注意点需要注意下：

* 登录接口会自动填充令牌，改变登录状态  
* 填充令牌之后需要手动验证下，才能使用  
* 所有异常都会通过 `Error` 方式抛出，注意捕获

### 在 TypeScript 中

```ts
import { SentenceApiV1, CoreApiV1 } from '@hitokoto/node-sdk'

// 使用核心接口
const coreApi = new CoreApiV1('填写你的令牌')
// 或者
const coreApi = new CoreApiV1()
coreApi.token = '你的令牌'
// 使用前验证令牌
try {
    coreApi
        .verifyToken(api => api.getUserInformation()) // 初次填充令牌需要认证，之后就不易了
        .then((userData: any) => { // 可以手动引入下暴露的接口
            console.log(userData)
        })
} catch (err) {
    console.error(err)
}

// 使用语句接口
const sentenceApi = new SentenceApiV1()

const sentences = [] // 可能需要手动导入一下类型： sentenceApiResponse[]
// 获取十句句子
for (let i = 0; i < 10; i++) {
    sentenceApi
        .getSentence()
        .then((sentence: any) => { // 可以手动引用下暴露的接口
            sentences.push(sentence)
        })
}
setTimeout(() => {
    console.log(sentences)
}, 3000) // 3 秒后取得句子
```

### 在 JS 中的使用

```js
import { SentenceApiV1, CoreApiV1 } from '@hitokoto/node-sdk'

// 使用核心接口
const coreApi = new CoreApiV1('填写你的令牌')
// 或者
const coreApi = new CoreApiV1()
coreApi.token = '你的令牌'
// 使用前验证令牌
try {
    coreApi
        .verifyToken(api => api.getUserInformation())
        .then((userData) => {
            console.log(userData)
        })
} catch (err) {
    console.error(err)
}

// 使用语句接口
const sentenceApi = new SentenceApiV1()

const sentences = []
// 获取十句句子
for (let i = 0; i < 10; i++) {
    sentenceApi
        .getSentence()
        .then((sentence) => {
            sentences.push(sentence)
        })
}
setTimeout(() => {
    console.log(sentences)
}, 3000) // 3 秒后取得句子
```

## 测试

我们使用 Jest 作为我们的测试驱动（当然，目前还没写完），你可以这样测试：

```shell
yarn test
```

## 如何参与维护

> 注意：我们使用 Yarn 2 作为我们的包管理器，在此之前你可能需要了解 Yarn 2 的相关知识。  

SDK 涉及的知识点：

* TypeScript
* `window.fetch`
* ES7 Decorator
* TypeScript Mixins
* Async/Await
