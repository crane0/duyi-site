# duyi-site

1，通过 vue-cli@5.0.8 创建的项目。

> vue-cli@4.x 版本有[快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html)。5 版本删除了。所以此项目无法使用。

`components` 组件中的 `test.vue` 就是通过上面这个来测试用的。

## 首页相关知识点

1. 箭头的晃动动画实现。

2. 轮播图切换动画，添加过渡效果 transition 。

> 实现：修改轮播图容器的 `margin-top`

3. 滚轮滚动事件

4. 文字出现效果，获取宽度。

5. 首页图片晃动动画（第 17 节）。
   > 原理：div 中的图片大小 110%，鼠标滑动时图片运动方向相反即可。

## 文章详情页知识点

commit -【文章详情页 4】中，`src\views\Blog\Detail.vue` 和 `src\views\Blog\components\BlogTOC.vue` 这 2 个文件之间的互动。

1. 文章详情页内容滚动时，右侧列表页需要同步更新被选中的目录。

> 设置一个范围，比如浏览器窗口向下 200px 的范围内（`dom.getBoundingClientRect().top`）。只要详情的内容（标题，内容，底部）在这个范围内，就标记右侧对应目录。

2. 页面刷新后，自动定位。

> 当页面加载完成后 window.onload 执行时，vue 项目页面的元素只有 div#app，此时 url 中的 hash 会进行跳转，但是因为还没有通过 vue 生成对应的 DOM 元素，所以无法完成正确跳转。所以可以先将 hash 设为空，再设回来。

commit - 【文章详情页 5】中，增加了 toTop 组件。

主要问题：当切换页面时，滚动条会回到顶部，所以 toTop 组件应隐藏。

解决：在 `src\views\Blog\Detail.vue` 这样有滚动的组件中，在 `beforeDestroy` 中触发 `this.$bus.$emit("mainScroll");` 此时传参为 undefined，在 toTop 组件中做判断即可。

## 页面标题统一处理

因为每个路由有自己的标题，网站本身也有标题。所以可以定义 2 个方法来设置，最后统一处理。 `src\utils\titleController.js`

在特殊的页面，比如文章详情，单独再设置一次。 `src\views\Blog\Detail.vue`
