$(document).ready(function(){
    $( "#user" ).autocomplete({
        source: function( request, response ) {
            $.ajax( {
                url: ajax_url,
                type:'POST',
                dataType: "jsonp",
                data: {
                    email: request.term,
                    _token:_token
                },
                success: function( data ) {
                    response( data );
                }
            } );
        },
        minLength: 2,
        select: function( event, ui ) {
            log( "Selected: " + ui.item.value + " aka " + ui.item.id );
        }
    } );
});