
$(document).ready(function(){
   $('.delete').on('click',function(e){
       e.preventDefault();
       $(this).siblings('form').submit();
   });
});