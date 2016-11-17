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
    // unregister module
    $(document).on('click','.unregister',function(e){
        e.preventDefault();
        var id = $(this).closest('tr').attr('id');
        var element = $(this);
        $.ajax({
            type:'POST',
            url:ajax_position_unregister,
            dataType:'json',
            data:{'_token':_token,'data':id},
            success:function(dataJson){
                if(dataJson.status=='success')
                {
                    $.growl.notice({title:'',message:dataJson.msg});
                    element.closest('tr').remove();
                }
                else
                {
                    $.growl.error({title:'',message:dataJson.msg});
                }
            }
        });
    });
});