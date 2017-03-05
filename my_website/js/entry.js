/**
 * Created by Administrator on 2017/2/27.
 */
(function(){
    var oDiv1 = document.getElementById('text');
    var oDiv2 = document.getElementById('text2');
    var oWelPage = document.getElementById("welPage");
    var oIcon = document.getElementById("welPage-icon");
    var oVideo = document.getElementById("video");
    oVideo.play();
    var str = "个人博客  记录点滴生活";
    var str2 = "Personal blog record a little life";
    function throwFont(str,elem,time){
        var arr = str.split("");
        var str2 = "";
        var timer = setInterval(function(){
            str2 = arr.shift();
            elem.innerHTML += str2;
            if(arr.length == 0){
                clearInterval(timer);
                oVideo.pause();
            }
        },time) ;
    }
    throwFont(str,oDiv1,280);
    throwFont(str2,oDiv2,100);
    oIcon.onclick = function(){
        oWelPage.style.bottom = document.body.clientHeight + "px";
        oWelPage.innerHTML = "";
    }
})();
