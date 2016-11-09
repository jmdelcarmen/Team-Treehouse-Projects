//Create overlay
  //append overlay to body
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="close-up">')
var $caption = $('<p></p>');
var $span = $('<span></span>')

$caption.append($span);
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$("#gallery a").click(function(event) {
  event.preventDefault();
  
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  
  var spanCap = $(this).children("h4").text();
  $span.text(spanCap);
  
  $overlay.fadeIn();
})

$overlay.click(function () {
  $(this).fadeOut();
});


