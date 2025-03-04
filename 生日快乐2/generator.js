document.getElementById('birthdayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const recipientName = document.getElementById('recipientName').value;
    const senderName = document.getElementById('senderName').value;
    const message = document.getElementById('message').value || '愿你的生日充满欢乐和温馨\n祝愿你心想事成，幸福安康！';
    const theme = document.getElementById('theme').value;
    
    // 创建URL参数
    const params = new URLSearchParams({
        to: recipientName,
        from: senderName,
        msg: message,
        theme: theme
    });
    
    // 生成唯一的URL
    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    // 生成短链接
    const baseUrl = 'https://你的域名.com/'; // 替换成你的实际域名
    const fullUrl = `${baseUrl}birthday.html?${params.toString()}&id=${uniqueId}`;
    
    // 显示生成的链接
    showShareDialog(fullUrl);
});

// 添加分享对话框
function showShareDialog(url) {
    const dialog = document.createElement('div');
    dialog.className = 'share-dialog';
    dialog.innerHTML = `
        <div class="share-content">
            <h3>祝福页面已生成！</h3>
            <p>复制下面的链接分享给好友：</p>
            <div class="url-container">
                <input type="text" value="${url}" readonly>
                <button onclick="copyUrl(this)">复制链接</button>
            </div>
            <div class="share-buttons">
                <button onclick="shareToWechat()">分享到微信</button>
                <button onclick="shareToQQ()">分享到QQ</button>
            </div>
        </div>
    `;
    document.body.appendChild(dialog);
}

// 添加复制功能
function copyUrl(button) {
    const input = button.previousElementSibling;
    input.select();
    document.execCommand('copy');
    button.textContent = '已复制！';
    setTimeout(() => button.textContent = '复制链接', 2000);
} 