//-------------------- ProjectA Dynamic Variables ---------------------------
var navItemWidth = 80;
var carouselInterval = 10000;
var navDuration = 600;
var navShrink = 2.5;
var carouselDirection = 'right'; //Accepts right or left
var carouselFade = 200;
var dropSpeed = 400;

//Sliding animation time

//Change nav color
function changeNavbarTheme() {
  var top = $(window).scrollTop();
  if(top > 0) {
    $('.nav').css('backgroundColor', '#1f1f1f');
    $('.nav-c').css('backgroundColor', '#1f1f1f');
  } else {
    $('.nav').css('backgroundColor', 'transparent');
    $('.nav-c').css('backgroundColor', 'transparent');
  }
};

$(document).ready(function() {

});

$(document).scroll(function() {

});
