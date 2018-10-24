function showPic(pic) {
    //改变图片位置信息
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    //改变图片说明文字
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

window.onload = function() {
    var body_element = document.getElementsByTagName("body")[0];

}
//浏览器网页弹窗
window.onload = function() {
    function popUp(winURL) {
        window.open(winURL, "popup", "width=1200,height=680");
    }
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                alert(1);
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}