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
var monthName = ['January', 'February', 'March', 'April'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var february = [ ' ', ' ', ' ', ' ', ' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, ' ', ' '];
var date = new Date();
var m = date.getMonth();
var today = date.getDay();
var j = 1;

//TODO: gonna make this super easy and just make arrays with numbers and have the table load certain arrays based on the month.
function monthChange(month) {
  $('.month').html(monthName[month]);
  for(var i = 0; i < 5; i++) {
    $('.days').append('<tr></tr>');
    while(j < 36) {
      $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + february[j-1] + '</td>');
      if((j % 7) === 0) {
        j++;
        break;
      }
      j++;
    }
  }
};

function modal() {
  $('.days > tbody > tr > td').click(function() {
    $('.modal').fadeIn();
    $('body').css('overflow', 'hidden');
  });
  $('.modalform i').click(function() {
     $('.modal').fadeOut();
  });
}

$(document).ready(function() {
  monthChange(m);
  modal();
});
