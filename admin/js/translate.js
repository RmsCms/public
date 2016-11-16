$(document).ready(function(){
   $('#environment,#language').change(function(){
       var environment = $('#environment').val();
       var language = $('#language').val();
       if(environment==0)
           return true;
       $('#file').parent('div').addClass('hidden');
       $('#load').addClass('hidden');
       $.ajax({
           type:'POST',
           url:translate_environment,
           data:{'_token':_token,'environment':environment,'language':language},
           dataType:'json',
           success:function(dataJson)
           {
                if(dataJson.status=='success')
                {
                    $('#file').find('option').remove();
                    $.each(dataJson.files,function(e,item){
                        $('#file').append($('<option>', {value:item, text:item}));
                    });
                    $('#file').parent('div').removeClass('hidden');
                    $('#file').select2({width:'50%'});
                    $('#load').removeClass('hidden');
                }
                else
                {
                    $.growl.error({'title':'',message:dataJson.msg});
                }
           }
       })
   });
});