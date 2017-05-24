$(document).ready(function(){
  /********** sidebar **********/
  $('.sidebar .menu').click(function(){
    $(this).siblings('li.menu').removeClass('active').find('.sub-menu').slideUp();
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).children('.sub-menu').slideToggle();
    }
    else{
      $(this).removeClass('active');
      $(this).children('.sub-menu').slideUp();
    }
  });

  /********** filter select **********/
  $('.filter li').click(function(){
    $(this).closest('.dropdown-menu').find('.active').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.dropdown').find('.dropdown-toggle').html($(this).text()+'<span class="caret"></span>');
  });
});