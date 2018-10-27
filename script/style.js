function showPic(pic) {
    //获取图片的href属性
    var source = pic.getAttribute("href");
    //获取占位符
    if (!document.getElementById("placeholder")) return false;
    var placeholder = document.getElementById("placeholder");
    if (document.getElementById(description)) {
        //更新占位符
        placeholder.setAttribute("src", source);
        //使用文本的title属性更新文字描述
        var text = pic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
}



function body_element() {
    var body_element = document.getElementsByTagName("body")[0];
    // alert(body_element);
}
//浏览器网页弹窗
function popUp() {
    function popUp(winURL) {
        window.open(winURL, "popup", "width=1200,height=680");
    }
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(popUp());
addLoadEvent(body_element());