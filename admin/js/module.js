
$(document).ready(function(){
    $(document).ready(function () {
        $('.delete').click(function (e) {
            e.preventDefault();
            var element = $(this);
            $.confirm({
                title: alert_msg,
                content: false,
                theme: 'white',
                confirm: function () {
                    element.siblings('form').submit();
                }
            });
        });
    });
    // collapse and expanded modules
    $('.author').click(function(){
        $(this).find('i').eq(0).toggleClass('fa-angle-down').toggleClass('fa-angle-left');
        var name = $(this).attr('id');
        $('.'+name).toggleClass('hidden');
    });
});

