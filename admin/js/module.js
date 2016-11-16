
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
});