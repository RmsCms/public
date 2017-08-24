$(document).ready(function () {
    // load tabs
    var tabs = ['#profile_1'];
    $('.roles a').click(function(){
        var id = $(this).attr('href');
        var _this = $(this);

        var index = tabs.indexOf(id);
       if(parseInt(index)>=0)
           return true;
        else
       {
            var role = $(this).data('role');
           $.ajax({
               url:load_role_url,
               data:{'_token':_token,'role':role},
               dataType:'json',
               cache:false,
               type:'POST',
               success:function(dataJson){
                   if(dataJson.status=='success')
                   {
                       $('div'+id).html(dataJson.html);
                       tabs.push(id);
                   }


               }
           });
       }
    });
    // click on checkboxes do something
    $( document ).on( "click", ".ajaxPower", function(){
        if ($(this).hasClass('all')) {
            //@todo something later
        }
        else {
            var controller = $(this).data('controller');
            var route = $(this).data('route');
            var role = $(this).data('role');
            $.ajax({
               url:update_permissions_url,
                data:{'controller':controller,'_token':_token,'route':route,'role':role},
                dataType:'json',
                cache:false,
                type:'POST',
                success:function(dataJson){
                    if(dataJson.status=='success')
                        $.growl.notice({ title:'', message: dataJson.msg });
                    else
                        $.growl.error({ title:'', message: dataJson.msg });
                }
            });
        }
    });
});
