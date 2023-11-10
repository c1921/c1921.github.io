document.addEventListener('DOMContentLoaded', function () {
    const iconContainer = document.getElementById('iconContainer');
    
    // 添加点击页面空白处的事件监听器
    document.addEventListener('click', function (event) {
        const clickedElement = event.target;

        // 检查是否是移动设备
        if (isMobile() && !clickedElement.closest('.icon-container')) {
            iconContainer.style.transform = iconContainer.style.transform === 'translateY(-100%)' ? 'translateY(0)' : 'translateY(-100%)';
        }
    });

    // 函数检查是否是移动设备
    function isMobile() {
        return window.innerWidth <= 500; // 这里使用 768 作为阈值，你可以根据需要调整
    }
});
