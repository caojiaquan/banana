
require(["jquery-1.12.4.js","demo"],function(hhdhdh,dialog){
    //console.log(typeof dialog);
    //var aa = new dialog();
    var settings = {
        width:400,
        height:300,
        title:'haha',
        content:"index2.html"
    };

    $(".button").on('click',function(){
        var tan = new dialog();
        tan.open(settings);
    });
    //$(".dialog-close").on('click',function(){
    //    aa.close();
    //    alert(123);
    //});
    
});