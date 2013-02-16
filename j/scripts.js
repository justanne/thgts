// Functions
// Insert a divider bullet on a footer

function insBullet(){
    var w = $(window).width();

    // first dark bullet, does it already exist?
    if ( $(".right").children(".bullet:nth-child(1)").length ) {

    // prevent DOM stacking, remove existing
    $(".bullet:nth-child(1)").detach();
    }
    
    // check window size and insert a "new" bullet divider
    if (w < 480) {
    $(".right").prepend("<div class='bullet dark'></div>");
    }
}

// On document load
$(document).ready(function() {
  // Check window size for inserting bullet
  insBullet();

  // Popup Twitter
  $('#popup').click(function() {
  var width  = 400,
      height = 350,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;

  window.open(url, 'twitter', opts);

  return false;
  });

  $(".postdet input[type=text]").click(function() {
     $(this).select();
  });

});

// On window resize, call insBullet
$(window).resize(function() {
  insBullet();
});
