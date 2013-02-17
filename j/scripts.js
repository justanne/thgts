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

  // Copy short link
  $(".tweetThis").hover(function(){
    $(this).animate({
      marginLeft: "+3.5em" }, 500, function(){
        $(".shorty").show().click(function(){
        $(this).select();
      });
    });
  });

  // ...and on losing focus
  $(".shorty").mouseout(function(){
    $(".tweetThis").delay(1200).animate({ marginLeft: "0em" }, 500);
  $(this).delay(1200).fadeOut(200);
  });

});

// On window resize, call insBullet
$(window).resize(function() {
  insBullet();
});