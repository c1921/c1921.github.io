var ls = window.localStorage;

// 页面每次加载的时候获取本地存储里面的值
if (ls.getItem('sTop')) {
   var oldStop = ls.getItem('sTop');

   // 获取到的值来设置页面滚动条的位置
   if (document.documentElement.scrollTop) {
       document.documentElement.scrollTop = oldStop;
   } else {
       document.body.scrollTop = oldStop;
   } 
} else {
   console.log('抱歉，找不到滚动条的值');
}

// 监听页面滚动条的状态（是否滚动）
window.addEventListener('scroll', function() {
   // 滚动时获取页面滚动条的位置
   var sTop = document.documentElement.scrollTop || document.body.scrollTop;

   // 滚动条的位置保存到本地存储里面
   ls.setItem('sTop', sTop);
}, false);
