$(document).ready(function(){
    loadPlugins();
   $('#ettings .nav a').click(function(e){
       e.preventDefault();
       var element = $(this);
       if(element.closest('li').hasClass('active'))
           return true;
       else
       {
           if($(element.attr('href')).length<=0)
           {
               $.ajax({
                  type:'POST',
                   url:load_settings,
                   data:{'settings':element.data('profile'),'_token':_token},
                   dataType:'json',
                   success:function(dataJson)
                   {
                       if(dataJson.status=='error')
                       {
                           $.growl.error({title:'',message:dataJson.msg});
                       }
                       else
                       {
                           window.history.pushState(element.text(),element.text(),page_url+element.data('profile'));
                           $('.tab-pane').removeClass('active');
                            $('.tab-content').append('<div id="profile_'+element.data('profile')+'" class="tab-pane active">'+dataJson.html+'</div>');
                           loadPlugins();
                       }
                   }
               });
               return true;
           }
       }
   });
    /**--------------------------------
     * settings js
     ----------------------------------*/
});
function loadPlugins()
{
    $('.switch').bootstrapSwitch({
        onColor: 'success',
        offColor :'danger',
        onText: onText,
        offText :offText
    });
}