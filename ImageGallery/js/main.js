
//定义占位符图片切换函数
function showPic(whichpic){
    var whichpic = event.target;    //获得被点击的a元素
    var source = whichpic.getAttribute("href");    //创建变量保存显示图片的href
    var placeholder = document.getElementById("placeholder");   //获得占位图片
    placeholder.setAttribute("scr",source);
}

function showPicDOM1( ){ //使用非DOM方法
    var whichpic = event.target;    //获得被点击的a元素
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placholder");
    placeholder.src = source;       //不使用DOM方法来给占位图src属性赋值
}

var text = document.getElementsByTagName("a");
console.log(text[0].text);
var ul = document.getElementsByTagName("ul")[0];
ul.onclick = function(){
    var whichpic = event.target
    if(whichpic.tagName == "A"){
        showPic(whichpic);
    }
    return false;
}