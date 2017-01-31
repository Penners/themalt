var nav = document.getElementById("menu");

window.onscroll = function(){

  if (document.body.scrollTop > 120){
    nav.className = "menu scrolled";
  }
  if (document.body.scrollTop < 120){
    nav.className = "menu";
  }
};


$( document ).ready(function(){

    $('.menu-button').click(function(){
    $('.menu-wrapper').toggle();
    if ($('.menu-wrapper').is(':visible')){
      console.log('menu is visible change icon');
      $('#menu-icon').removeClass('fa-bars').addClass('fa-times');
    }
    else {
      $('#menu-icon').removeClass('fa-times').addClass('fa-bars');
      console.log('menu not visible change icon');
    }
  })


  $(window).on('resize', function(){
    if ($(window).width() > 480){
      $('.menu-wrapper').show();
      $('#menu-icon').removeClass('fa-times fa-bars').addClass('fa-bars');
      console.log("show menu");
    }
  })

  $(window).on('resize', function(){
    if ($(window).width() <= 481){
      $('.menu-wrapper').hide();
      console.log("show menu");
    }
  })


});
