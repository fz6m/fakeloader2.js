# fakeloader2.js

*Version: 1.1*

页面加载 loading 动画插件库，支持单节点部分进行预加载。

## 使用

### 安装

```bash

    # 待撰写

```

### 引入

```html
    <!-- 本地 -->
    <script src="./dist/fakeloader2.min.js"></script>
    <!-- CDN -->
    <script src="https://cdn.jsdelivr.net/gh/fz6m/fakeloader2.js@1.1/dist/fakeloader2.min.js"></script>
```

或

```js

    import fakeloader from 'fakeloader2.js'

```

### 方法

```html
    <body>
        <table class="fake-loading">
            <!-- ... -->
        </table>
    </body>

    <script>
        // 开启
        FakeLoader.open()
        // 关闭
        FakeLoader.stop()

        // 可指定节点
        FakeLoader.open(document.body)
        FakeLoader.stop()

        // 可配置
        FakeLoader.open(
            document.getElementById('preloading')[0],
            {
                bgColor: 'hsla(0, 100%, 100%, .8)', // 加载时背景颜色
                loadingColor: 'rgba(0,0,0,.4)',     // 加载图标的颜色
                size: '50px',                       // 加载图标的大小
                spinner: 'spinner4'                 // 加载图标样式
            }
        )
        FakeLoader.stop()
    </script>
```

## 选项

**FakeLoader.open(el, config, callback)**

 * `el` ：可选，要加载 loading 的节点，不填时默认为第一个带有 `fake-loading` 类的节点。

 * `config` ：可选，配置对象。

     * `bgColor` | `hsla(0, 100%, 100%, .8)` ：加载背景颜色
     * `loadingColor` | `rgba(0,0,0,.4)` ：加载图标颜色
     * `size` | `50px` ：加载图标大小
     * `spinner` | `spinner4`  ：支持 `spinner1` ~ `spinner7` 多种加载动画

 * `callback` ：可选，开启加载后的回调函数。


**FakeLoader.stop(callback)**

 * `callback` ：关闭加载后的回调函数。

## 注意

1. 目前不支持多节点加载，只能 loading 一个节点。

2. 无论有无指定 `fake-loading` 类，被预加载的节点会由 `fake-loading` 带来 `position: relative;` 定位，这是为了使遮罩可以正确铺满该节点，请留意。

## 原项目

[joaopereirawd / fakeLoader.js](https://github.com/joaopereirawd/fakeLoader.js)