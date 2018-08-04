
$(document).ready(function(){
  var selfGif = $("#test-image");
  $('.materialboxed').materialbox();
  $('.parallax').parallax();

 function start() {
    $("#self-gif")
      .attr("src", "./assets/img/Type.gif")
      .addClass("animated zoomIn");

  };

  start()

  function empty() {
    $("#start-container").empty()
  }

  function startFadeOut() {
    $("#self-gif")
      .removeClass("animated fadeIn")
      .addClass("animated zoomOut");
      setTimeout(empty, 500)
  } 

  function reveal() {
    $("#page-container")
      .removeClass("hidden")
      .addClass("animated zoomIn")
    $("#page-footer")
      .removeClass("hidden")
      .addClass("animated zoomIn")
  }


setTimeout(startFadeOut, 1000 * 4)
setTimeout(reveal, 1000 * 5)

// Wrap every letter in a span
$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });




  
  });

  
