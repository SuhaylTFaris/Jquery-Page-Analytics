// add scripts
var secondsOnPage=0;
var timeInSection = [];
var secondsBeforeSignUp=0;


var pixelsScrolled=0;


$(document).on('ready', function() {
  window.scrollTo(0,0);

  var onPageInterval = setInterval(function(){secondsOnPage++;},1000);
  var signUpInterval = setInterval(function(){secondsBeforeSignUp++;},1000);
