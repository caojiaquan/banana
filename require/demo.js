/**
 * Created by Administrator on 2017/2/13.
 */
define(["jquery-1.12.4.js"],function(){
    return {
        open:function(options){
            var defaultssettings = {
                width:400,
                height:300,
                title:'lala',
                content:222

            };
            $.extend(defaultssettings,options);
            var html = '<div class="dialog-container">'+
                ' <div class="dialog-mark">'+
                '<div class="dialog-box">'+
                '<div class="dialog-title">'+
                '<div class="dialog-open">hahahahah</div>'+
                '<div class="dialog-close">[*]</div>' +
                '</div>'+
                '</div>'+
                '<div class="dialog-content"></div> '+
                ' </div>'+
                '</div>';
            $("body").append(html);

            $(".dialog-content").load(defaultssettings.content);
            $(".dialog-close").on('click',function(){
                $("dialog-container").remove();
            });
        }
    }
});