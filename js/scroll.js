// 检查浏览器是否支持LocalStorage
if (typeof(Storage) !== "undefined") {
    // 当页面加载时
    window.onload = function() {
      var scrollPosition = localStorage.getItem('scrollPosition');
      if (scrollPosition !== null) {
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition');
      }
    };
  
    // 在页面关闭时
    window.onbeforeunload = function() {
      localStorage.setItem('scrollPosition', window.pageYOffset);
    };
  } else {
    console.log("抱歉，您的浏览器不支持Web存储。");
  }
  