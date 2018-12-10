//-------------------- ProjectA Dynamic Variables ---------------------------
var navItemWidth = 80;
var carouselInterval = 10000;
var navDuration = 600;
var navShrink = 2.5;
var carouselDirection = 'right'; //Accepts right or left
var carouselFade = 200;
var dropSpeed = 400;

//Sliding animation time


//Dont mind the repetition of the images in the navchange im just lazy
$(document).ready(function() {
  navChange('#navchange', 'img/logo.png', 'img/logo.png');
});

$(document).scroll(function() {
  navChange('#navchange', 'img/logo.png', 'img/logo.png');
});
