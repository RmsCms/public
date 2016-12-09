$(document).ready(function(){
    $('#module').on("select2:select", function (e) {

         var module = e.params.data.id;
        $.ajax({
            type:'POST',
            url:loadHook,
            data:{'module':module,'_token':_token},
            dataType:'json',
            success:function(dataJson){
                if(dataJson.status !='error')
                {
                    $('#module').closest('div.form-group').after(dataJson.html);
                    $('#hook').select2('destroy');
                   var hook = $('#hook')
                        .find('option')
                        .remove()
                        .end();
                    $.each(dataJson.data,function(index,item){

                       hook.append('<option value="'+item+'">'+item+'</option>');
                    });
                    hook.select2({'width':'100%'});
                }
                else
                {
                    $.growl.error({'title':'',message:dataJson.msg})
                }
            }
        })
    });
});