$(document).ready(function () {
    $('.destroy').click(function (e) {
        e.preventDefault();
        var element = $(this);
        $.confirm({
            title: alert_msg,
            content: false,
            theme: 'white',
            confirm: function () {
                var href = element.attr('href');
                $('body').append('<form id="delete_row" action="' + href + '" method="POST">' +
                    '<input type="hidden" name="_method" value="DELETE">' +
                    '<input type="hidden" name="_token" value="' + _token + '"></form>');
                $('#delete_row').submit();
            }
        });
    });
    $('table tbody').sortable({
        update: function( event, ui ) {
             var data = $(this).sortable('serialize');
            $.ajax({
                type:'POST',
                url:list_positions_update,
                dataType:'json',
                data:data+'&_token='+_token+'&controller='+controller+'&module='+module,
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