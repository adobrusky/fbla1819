//-------------------- ProjectA Dynamic Variables ---------------------------
var navItemWidth = 80;
var carouselInterval = 10000;
var navDuration = 600;
var navShrink = 2.5;
var carouselDirection = 'right'; //Accepts right or left
var carouselFade = 200;
var dropSpeed = 400;


function fadeDown() {
  $('.fade-down').css({'top':'0px','opacity':'1'});
};

//Calendar vars
var monthName = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var date = new Date();
var m = date.getMonth(); //Work on this later

function monthChange(month, day) {
  $('.month').html('<i class="fa fa-caret-left"></i> ' + monthName[month] + ' ' + '<i class="fa fa-caret-right"></i>');
  $('.month > i').click(function() {
      month = month++;
  });
};

$(document).ready(function() {
  monthChange(m, date.getDate());
});
