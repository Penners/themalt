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
})


$(window).on('resize', function(){
  if ($(window).width() > 480){
    $('.menu-wrapper').show();
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
