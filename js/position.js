$(document).ready(function(){
   $('table tbody').sortable({
      update: function( event, ui ) {
        var data = $(this).sortable('serialize');
         $.ajax({
            type:'POST',
            url:ajax_position_url,
            dataType:'json',
            data:data+'&'+'_token='+_token,
            success:function(dataJson){
                if(dataJson.status=='success')
                {
                    $.growl.notice({title:'',message:dataJson.msg});
                }
                else
                {
                    $.growl.error({title:'',message:dataJson.msg});
                }
            }
         })
      }
   });
});