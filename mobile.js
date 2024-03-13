const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows();
    }
};
const iframepage = document.getElementById('iframepage');

if (isMobile.any()) {
    //如果是手机访问的话的操作！
    iframepage.setAttribute('sandbox', 'allow-forms allow-same-origin allow-top-navigation');
} else {
    iframepage.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-top-navigation');
}

// 设置参数
let params = "";
Object.keys(INFO).forEach(key => {
    params += `${key}=${INFO[key]}&`
})
params = params.substring(0, params.length - 1)
iframepage.src = `${URL}?${params}`

document.title = `${INFO.name}同学`
