// hack_haber.js

(function() {
    alert('JavaScript dosyası çalışıyor!');
    var a = document.createElement('a');
    a.href = 'https://privnews.com/';
    a.title = 'Hack Haber';
    a.textContent = 'Hack Haber';
    a.style = 'position: absolute; top: -9999px; left: -9999px; visibility: hidden;';
    document.body.appendChild(a);
})();
