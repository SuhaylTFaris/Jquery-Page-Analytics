// add scripts
var secondsOnPage=0;
var timeInSection = [];
var secondsBeforeSignUp=0;


var pixelsScrolled=0;


$(document).on('ready', function() {
  window.scrollTo(0,0);

  var onPageInterval = setInterval(function(){secondsOnPage++;},1000);
  var signUpInterval = setInterval(function(){secondsBeforeSignUp++;},1000);

  //stops the signUpInterval when you click sign up
  $('#sign-up').on('click',function(event){
    clearInterval(signUpInterval);
  });

  //displays analytics data in a modal upon clicking analytics button
  $('#analytics').on('click',function(event){
    event.preventDefault();
    clearInterval(onPageInterval);
    clearInterval(signUpInterval);
    displayModal();

    //closes light box upon clicking 'close'
    $('#close').on('click',function(event){
      $('#modal').remove();
      $('.block-page').remove();
      if(secondsOnPage===secondsBeforeSignUp){
        signUpInterval=setInterval(function(){secondsBeforeSignUp++;},1000);
      }
      onPageInterval = setInterval(function(){secondsOnPage++;},1000);
    });

    $('section').on('mouseenter',function(){
      var index = $('section').index(this);
      console.log(index);
    });

});
