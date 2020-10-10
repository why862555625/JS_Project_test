// 图片懒加载原理实现
// getBoundingClientRect
// DOM 元素包含一个getBoundingClientRect 方法， 执行该方法返回当前DOM节点相关的Css边框集合，其中有一个Top 属性代表当前DOM 节点距离浏览器窗口顶部的高度，只需判断top值是否小于当前浏览器窗口的高度(window.innerHeight),若小于说明已经进入用户视野，然后替换为真正的图片即可
// 另外使用getBoundingClientRect 作图片懒加载需要注意三点
// 1。 因为需要监听scroll 事件，不停的判断top 的值和浏览器高度的关系，请对监听事件进行函数节流
// 2. 当屏幕首次渲染时，不会触发scroll 事件，请主动调用一次事件处理程序，否则若用户不滚动则首屏的图片会一直使用懒加载的默认图片
// 3. 当所有需要懒加载 的图片都被加载完，需要移除事件监听，避免不必要的内存占用
//
//
// intersectionObserver
// intersectionObserver作为一个构造函数，传入一个回调函数作为参数，生成一个实例observer，
//       这个实例有一个observe方法用来观察指定元素是否进入了用户的可视范围，随即触发传入构造函数中的回调函数
// 同时给回调函数传入一个entries 的参数，记录着这个实例观察的所有元素的对象，其中intersectionRatio 属性表示图片已经进入可视范围百分比，大于0 表示已经有部分进入了用户视野
// 此时替换为真实的图片，并且调用实例的unobtrusive 将这个img 元素从这个实例的观察列表的去除
//
