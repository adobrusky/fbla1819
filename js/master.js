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
var monthName = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var date = new Date();
var m = date.getMonth();
var today = date.getDay();
var j = 1;

//TODO: gonna make this super easy and just make arrays with numbers and have the table load certain arrays based on the month.
function monthChange(month, day, weekday) {
  $('.month').html(monthName[month]);
  for(var i = 0; i < 6; i++) {
    $('.days').append('<tr></tr>');
    while(j < 32) {
      $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + j + '</td>');
      if((j % 7) === 0) {
        j++;
        break;
      }
      j++;
    }
  }
};

$(document).ready(function() {
  monthChange(m, date.getDate(), today);
});
