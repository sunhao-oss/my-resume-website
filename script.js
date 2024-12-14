document.addEventListener('DOMContentLoaded', function() {
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLanguage = 'zh'; // 默认显示中文

    const elements = document.querySelectorAll('[data-zh][data-en]');

    // 切换语言函数
    function switchLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }

    // 初始化为中文
    switchLanguage(currentLanguage);

    langToggleBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        switchLanguage(currentLanguage);
        langToggleBtn.textContent = currentLanguage === 'zh' ? 'ENGLISH' : '中文';
    });
});
