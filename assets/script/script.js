$(document).ready(function () {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBeTXDX_PXFyDFgYA78zci7UL98XlA7_fI",
      authDomain: "portfolio-api-a32a1.firebaseapp.com",
      databaseURL: "https://portfolio-api-a32a1.firebaseio.com",
      projectId: "portfolio-api-a32a1",
      storageBucket: "portfolio-api-a32a1.appspot.com",
      messagingSenderId: "30905765926"
    };
    firebase.initializeApp(config);
    var database = firebase.database();


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
      .fadeOut(.05, function () {
        $("#page-container").fadeIn(1500)
      })
    $("#name-text").removeClass("hidden")
      .fadeOut(.05, function () {
        $("#name-text").fadeIn(1500)
      })
    $("#page-footer").removeClass("hidden")
      .fadeOut(.05, function () {
        $("#page-footer").fadeIn(1500)
      })
  }


  setTimeout(startFadeOut, 1000 * 3.5)
  setTimeout(reveal, 1000 * 4)

  // Wrap every letter in a span
  $('.ml12').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml12 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function (el, i) {
        return 500 + 30 * i;
      }
    }).add({
      targets: '.ml12 .letter',
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: function (el, i) {
        return 100 + 30 * i;
      }
    });


  //About Me - grow 
  $("#aboutme").click(function () {
    $("#applications")
      .slideUp(1500, function () {
        $("#applications").addClass("hidden-button")
      });
    $("#website")
      .slideUp(1500, function () {
        $("#website").addClass("hidden-button")
      });
    $("#aboutme").empty().animate({
      height: "700px",
    }, 1500, function () {
      $("#aboutme")
        .addClass("about-me")
        .removeAttr("id", "aboutme")
        .attr("id", "newMe");

      var aboutSection =
        `
      <div class="container">
        <a class="waves-effect waves-light pulse btn black right-align" id="back-about-me">Back</a>
        <div class="row">
            <img class="left self-picture" src="./assets/img/me.jpg">
            <p class="text-justify">Deeply passionate about technology and learning new languages and building projects that showcase my abilities as a web developer. I’m resourceful, a fast learner, and methodical. Currently knowledgeable with HTML5, CSS3, Bootstrap, Materialize, Javascript, jQuery, AJAX, Firebase and counting. I have pursued full stack development by participating in UNH’s Full Stack bootcamp, which I will be completing November 2018.</p>

            <p class="text-justify">I pride myself in being  able to identify problems and come up with solutions, pay attention to detail and communicate effectively in a team atmosphere. Coming from the world of Higher Education and Customer Service I’ve had opportunities to showcase my abilities with building employee trackers and databases to house information, which led me to pursue the full stack program. I think this will compliment my degree in Finance/Economics and allow me to continue to utilize my education to help me step into a development role on the front or back end.</p>
            
            <p class="text-justify">
            Please check out my portfolio or my github account to see my work!
            </p>
          </div>
          <div class="row center-align aboutlinks">
              <i class="fab fa-linkedin-in"></i><a href="#">LinkedIn</a>
              <i class="fab fa-github-alt"></i><a href="#">Github</a>
              <i class="fas fa-file-pdf"></i><a href="#">Resume</a>
            </div>
            <div class="row aboutlinks">
              <i class="fab fa-stack-overflow"></i><a href="#">Stack Overflow</a>
              <i class="far fa-envelope"></i><a href="#">Email</a>
            </div>
            
        </div>
      </div>
      
      `
      $("#newMe").append(aboutSection).fadeIn("slow");
    });
  });


  //About Me - shrink
  $(document).on("click", "#back-about-me", function () {
    $("#newMe")
      .empty()
      .removeClass("about-me")
      .removeAttr("id", "newMe")
      .attr("id", "aboutme");

    $("#aboutme")
      .append("<p class='topics'>About</p>")
      .animate({
        height: "250px",
      }, 1500, function () {
        $("#aboutme")
          .removeAttr("style");
        $("#applications").slideDown(1500, function () {
          $("#applications").removeClass("hidden-button");
        });
        $("#website").slideDown(1500, function () {
          $("#website").removeClass("hidden-button")
        });
      });
  });


  // Application - grow
  $("#applications").on("click", function () {

    $("#aboutme").slideUp(1500, function () {
      $("#website").slideUp(1500, function () {
        $("#website").addClass("hidden-button")
      });
      $("#aboutme").addClass("hidden-button")
      $("#applications").animate({
        height: "700px",
      }, 1500, function () {
        $("#applications").empty()
          .addClass("about-me")
          .removeAttr("id", "applications")
          .attr("id", "newApp");

        $("#website").slideUp(1500, function () {
          $("#website").addClass("hidden-button")
        });


        function newPortfolioPic() {
          
          pictureObj = {
            one:"./assets/img/portfolio-images/crystal-collector.png",
            two:"./assets/img/portfolio-images/first-responsive-site.png",
            three:"./assets/img/portfolio-images/giftastic.png",
            four:"./assets/img/portfolio-images/nyt-search.png",
            five:"./assets/img/portfolio-images/psychic-game.png",
            six:"./assets/img/portfolio-images/rps.png",
            seven:"./assets/img/portfolio-images/train-sched.png",
            eight:"./assets/img/portfolio-images/trivia.png",
            nine:"./assets/img/portfolio-images/w2di.png",
            ten:"./assets/img/portfolio-images/word-guess-game.png"
          };
        

          animateObj = {
            one: "imghvr-slide-up",
            two: "imghvr-slide-down",
            three: "imghvr-reveal-down",
            four: "imghvr-reveal-up", 
            five: "imghvr-hinge-left",
            six: "imghvr-fold-up",
            seven: "imghvr-reveal-right",
            eight: "imghvr-flip-vert",
            nine: "imghvr-shutter-in-out-vert",
            ten: "imghvr-zoom-out-down"
          }


          for (i=0; i < pictureObj.length; i++){
            for(j=0; j < animateObj.length; j++){
              pictureTemplate = `
              <figure class="${animateObj[j]}">
                <img class="sensei" src="${pictureObj[i]}">
              <figcaption>
                <h6>Crystal Collector</h6><br>
                A game using javascript where the computer guesses a number. You must click the crystals to match that number.
              </figcaption>
               <a href="#"></a>
              </figure>` 
            }
          }
        };




        var appSection =
          `
      <div class="container">
        <a class="waves-effect waves-light pulse btn black" id="back-app">Back</a></span>
        <div class="row"> 
        <div class="col s6">
        <figure class="imghvr-flip-diag-1" style="background-color:black;">
        <img class="sensei" src="./assets/img/portfolio-images/crystal-collector.png">
        <figcaption>
          <h6>Crystal Collector</h6><br>
            A game using javascript where the computer guesses a number. You must click the crystals to match that number.
        </figcaption>
        <a href="#"></a>
        </figure>
        </div>
        </div>


        
      </div>
      `

        $("#newApp").append(appSection).fadeIn(1500);
      });
    });
  });


  //Application - shrink
  $(document).on("click", "#back-app", function () {
    $("#newApp")
      .empty()
      .removeClass("back-app")
      .removeAttr("id", "newApp")
      .attr("id", "applications");

    $("#applications")
      .append("<p class='topics'>Applications</p>")
      .animate({
        height: "250px",
      }, 750, function () {
        $("#applications")
          .removeAttr("style")
        $("#aboutme").slideDown(1500, function () {
          $("#applications").removeClass("hidden-button");
          $("#website").slideDown(1500, function () {
            $("#website").removeClass("hidden-button")
          });
        });

      });
  });



  //Website - grow
  $("#website").on("click", function () {

    $("#applications").slideUp(1500, function () {
      $("#aboutme").slideUp(1500, function () {
        $("#applications").addClass("hidden-button")
        $("#aboutme").addClass("hidden-button")
      });
      $("#website").animate({
        height: "700px",
      }, 1500, function () {
        $("#website").empty()
          .addClass("about-me")
          .removeAttr("id", "applications")
          .attr("id", "newWeb");

        var appSection =
          `
    <div class="container">
      <a class="waves-effect waves-light pulse btn black" id="back-web">Back</a></span>
    </div>
    `
        $("#newWeb").append(appSection);
      });
    });
  });

  //Website - shrink
  $(document).on("click", "#back-web", function () {
    $("#newWeb")
      .empty()
      .removeClass("back-app")
      .removeAttr("id", "newWeb")
      .attr("id", "website");

    $("#website")
      .append("<p class='topics'>Websites</p>")
      .animate({
        height: "250px",
      }, 750, function () {
        $("#applications")
          .removeAttr("style")
        $("#applications").slideDown(1500, function () {
          $("#applications").removeClass("hidden-button");
          $("#aboutme").slideDown(1500, function () {
            $("#aboutme").removeClass("hidden-button")
          });
        });

      });
  });





});
