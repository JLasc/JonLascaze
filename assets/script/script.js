
$(document).ready(function(){
  
  //Materialize Init
  $('.materialboxed').materialbox();
  $('.parallax').parallax();


  //Starting Logo Animation
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


  //Reveals main cards
  function reveal() {
    $("#page-container").removeClass("hidden")
      .fadeOut(.05, function() {
         $("#page-container").fadeIn(1500)
      })
    $("#name-text").removeClass("hidden")
      .fadeOut(.05, function() {
         $("#name-text").fadeIn(1500)
      })
    $("#page-footer").removeClass("hidden")
      .fadeOut(.05, function() {
         $("#page-footer").fadeIn(1500)
      })
  }


setTimeout(startFadeOut, 1000 * 3.5)
setTimeout(reveal, 1000 * 4)

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


  //About Me - grow 
  $( "#aboutme" ).click(function() {
    $("#applications")
        .slideUp(1500, function() {
          $("#applications").addClass("hidden-button")
        });
    $("#website")
        .slideUp(1500, function() {
          $("#website").addClass("hidden-button")
        });
    $( "#aboutme" ).empty().animate({
      height: "700px",
    }, 1500, function() {
      $("#aboutme")
      .removeClass("white-text")
      .addClass("about-me black-text")
      .removeAttr("id", "aboutme")
      .attr("id", "newMe");

      var aboutSection = 
      `
      <div class="container">
      <div class="row">
      <img class="left self-picture" src="./assets/img/me.jpg">
      <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit tellus a turpis euismod porta. Phasellus efficitur lorem et dui luctus, in hendrerit dui congue. Suspendisse varius ultricies metus, ut venenatis nibh pulvinar ac. Suspendisse leo sem, dignissim eget felis sit amet, semper dictum ipsum. Praesent non aliquam neque, a fermentum sapien. Sed at ligula et mauris tristique laoreet. Duis sit amet justo eu turpis finibus dignissim at sed eros. Nulla interdum dolor neque, et elementum lorem egestas non. Praesent blandit lectus augue, vel pretium neque fringilla vel. Cras cursus felis ut ligula volutpat, ut condimentum massa mollis. Etiam erat erat, dictum tristique mauris sit amet, ullamcorper lacinia leo. Nullam at enim dapibus, tempor nibh a, dignissim erat. Praesent fermentum rhoncus quam at varius. Nunc bibendum urna vitae tempor vehicula. Integer faucibus mauris ut lacus consequat aliquet.</p>
      </div>
      <div class="row center-align">
      <ul>
      <li><i class="fab fa-linkedin-in"></i> LinkedIn</li>
      <li><i class="fab fa-github-alt"></i> Github</li>
      <li><i class="fab fa-stack-overflow"></i> Stack Overflow</li>
      <li><i class="far fa-envelope"></i> Email</li>
      <li><i class="fas fa-file-pdf"></i> Resume</li>
      </ul>
      </div>
      </div>
      <a class="waves-effect waves-light pulse btn black" id="back-about-me">Back</a>
      `
      $("#newMe").append(aboutSection);
    });
  });


  //About Me - shrink
  $(document).on("click", "#back-about-me", function(){
    $("#newMe")
    .empty()
    .removeClass("about-me black-text")
    .removeAttr("id", "newMe")
    .attr("id", "aboutme");

    $("#aboutme")
      .append("<p>About</p>")
      .animate({
          height: "250px",
        }, 750, function() {
          $("#aboutme")
            .removeAttr("style")
            .addClass("white-text");
            $("#applications").slideDown(1500, function() {
              $("#applications").removeClass("hidden-button");
            });
            $("#website").slideDown(1500, function() {
              $("#website").removeClass("hidden-button")
            });
          });
  });





// Application - grow
  $("#applications").on("click", function() {
    
    $("#aboutme").slideUp(1500, function() {
      $("#aboutme").addClass("hidden-button")
      $("#applications").animate({
        height: "700px",
      }, 1500, function() {
        $("#applications").empty()
        .removeClass("white-text")
        .addClass("about-me black-text")
        .removeAttr("id", "applications")
        .attr("id", "newApp"); 

      var appSection = 
      `
      <div class="container">
      <div class="row">
      <img class="left self-picture" src="./assets/img/me.jpg">
      <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit tellus a turpis euismod porta. Phasellus efficitur lorem et dui luctus, in hendrerit dui congue. Suspendisse varius ultricies metus, ut venenatis nibh pulvinar ac. Suspendisse leo sem, dignissim eget felis sit amet, semper dictum ipsum. Praesent non aliquam neque, a fermentum sapien. Sed at ligula et mauris tristique laoreet. Duis sit amet justo eu turpis finibus dignissim at sed eros. Nulla interdum dolor neque, et elementum lorem egestas non. Praesent blandit lectus augue, vel pretium neque fringilla vel. Cras cursus felis ut ligula volutpat, ut condimentum massa mollis. Etiam erat erat, dictum tristique mauris sit amet, ullamcorper lacinia leo. Nullam at enim dapibus, tempor nibh a, dignissim erat. Praesent fermentum rhoncus quam at varius. Nunc bibendum urna vitae tempor vehicula. Integer faucibus mauris ut lacus consequat aliquet.</p>
      </div>
      <div class="row center-align">
      <ul>
      <li><i class="fab fa-linkedin-in"></i> LinkedIn</li>
      <li><i class="fab fa-github-alt"></i> Github</li>
      <li><i class="fab fa-stack-overflow"></i> Stack Overflow</li>
      <li><i class="far fa-envelope"></i> Email</li>
      <li><i class="fas fa-file-pdf"></i> Resume</li>
      </ul>
      </div>
      </div>
      <a class="waves-effect waves-light pulse btn black" id="back-about-me">Back</a>
      `
      $("#newApp").append(appSection);
      });
    });

    $("#website").fadeOut(1500, function() {
      $("#website").addClass("hidden-button")
    });

    
  });






  
  });

  
