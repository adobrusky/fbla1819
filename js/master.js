//-------------------- ProjectA Dynamic Variables ---------------------------
var navItemWidth = 80;
var carouselInterval = 10000;
var navDuration = 600;
var navShrink = 2.5;
var carouselDirection = 'right'; //Accepts right or left
var carouselFade = 200;
var dropSpeed = 400;

//Fade animation for landing
function fadeDown() {
  $('.fade-down').css({'top':'0px','opacity':'1'});
};

//Change nav color. i could probably do this much better but oh well
function changeNavbarTheme() {
  var top = $(window).scrollTop();
  if((top > 0 && w >= 768) || w <= 768) {
    $('.nav').css('backgroundColor', '#1f1f1f');
    $('.nav-c').css('backgroundColor', '#1f1f1f');
  } else {
    $('.nav').css('backgroundColor', 'transparent');
    $('.nav-c').css('backgroundColor', 'transparent');
  };
};

$(document).ready(function() {
  changeNavbarTheme();
  fadeDown();
});

$(window).scroll(function() {
  changeNavbarTheme();
});

$(window).resize(function() {
  changeNavbarTheme();
});
