$(document).ready(function () {

  //Materialize Init
  $('.materialboxed').materialbox();
  $('.parallax').parallax();




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


  /* Starting animation section  */

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



  /* This starts the button click event section */


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

    $("#aboutme").animate({
      height: "700px",
    }, 1500, function () {
      $("#aboutme")
        .empty()
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
              <i class="fab fa-linkedin-in"></i><a target="_blank" href="www.linkedin.com/in/jonathanlascaze
              ">LinkedIn</a>
              <i class="fab fa-github-alt"></i><a target="_blank" href="https://github.io/Jlasc">Github</a>
              <i class="fas fa-file-pdf"></i><a href="./assets/files/JonLascaze2018.pdf" target="_blank">Resume</a> 
            </div>
            <div class="row aboutlinks">
              <i class="fab fa-stack-overflow"></i><a target="_blank" href="https://stackoverflow.com/users/10163364/jon-lascaze">Stack Overflow</a>
              <i class="far fa-envelope"></i><a href="mailto:lascaze.j@gmail.com">Email</a>
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
      .removeAttr("id", "newMe")
      .attr("id", "aboutme");

    $("#aboutme")
      .append("<p class='topics'>About</p>")
      .animate({
        height: "250px",
      }, 1500, function () {
        $("#aboutme")
          .removeAttr("style");
        });

        $("#applications").slideDown(1500, function () {
          $("#applications").removeClass("hidden-button");
        });

        $("#website").slideDown(1500, function () {
          $("#website").removeClass("hidden-button")
        });
     
  });


  //Portfolio Section
  var objectArray = [
    pictureArr = [
      "./assets/img/portfolio-images/crystal-collector.png",
      "./assets/img/portfolio-images/giftastic.png",
      "./assets/img/portfolio-images/nyt-search.png",
      "./assets/img/portfolio-images/psychic-game.png",
      "./assets/img/portfolio-images/rps.png",
      "./assets/img/portfolio-images/train-sched.png",
      "./assets/img/portfolio-images/trivia.png",
      "./assets/img/portfolio-images/w2di.png",
      "./assets/img/portfolio-images/word-guess-game.png"
    ],

    nameArr = [
      "<h5>Crystal Collector</h5>",
      "<h5>GifTastic</h5>",
      "<h5>New York Times Search</h5>",
      "<h5>Psychic Game</h5>",
      "<h5>Rock Paper Scissor</h5>",
      "<h5>Persistent Train Schedule</h5>",
      "<h5>Game of Thrones Trivia</h5>",
      "<h5>Weather 2 Do It</h5>",
      "<h5>Word Guess Game</h5>"
    ],

    descripArr = [
      "This game utilizes javascript math generators. Match the target number by clicking crystals that change in value each round.",
      "Gif search engine that utilizes the Giphy API",
      "Article search engine that utilizies the NYT API",
      "Computer randomly chooses a letter. Guess the letter before your attempts run out.",
      "My first javascript project. Classic rock-paper-scissors",
      "Mock train schedule that utilizes Firebase for persistent data",
      "Game of thrones themed Trivia. Showcase on timers and intervals and particles.",
      "First project apart of a student development team. Persistent to-do list that gives weather information, and also the ability to search for events using Meetup API",
      "Vegetable themed version of the classic hangman game"

    ],

    animateArr = [
      "imghvr-slide-up",
      "imghvr-reveal-down",
      "imghvr-reveal-up",
      "imghvr-hinge-left",
      "imghvr-fold-up",
      "imghvr-reveal-right",
      "imghvr-flip-vert",
      "imghvr-shutter-in-out-vert",
      "imghvr-zoom-out-down"
    ],

    linkArr = [
      "https://jlasc.github.io/unit-4-game/",
      "https://jlasc.github.io/GifTastic",
      "https://jlasc.github.io/NYT-Search",
      "https://jlasc.github.io/Psychic-Game",
      "https://jlasc.github.io/Rock-Paper-Scissor",
      "https://jlasc.github.io/Train-Scheduler",
      "https://jlasc.github.io/TriviaGame",
      "https://jlasc.github.io/ProjectUno",
      "https://jlasc.github.io/Word-Guess-Game",
    ]


  ];

  console.log(objectArray[0][0])


  // Application - grow
  $("#applications").on("click", function () {

    $("#website").slideUp(1500, function () {
      $("#website").addClass("hidden-button")
    });

    $("#aboutme").slideUp(1500, function () {
      $("#aboutme").addClass("hidden-button")
    });


    $("#applications").animate({
      height: "700px",
    }, 1500, function () {
      $("#applications").empty()
        .addClass("back-web")
        .removeAttr("id", "applications")
        .attr("id", "newApp");

      $("#newApp")
        .append($("<div>")
          .addClass("container")
          .attr("id", "appHolder"))
        .prepend(`<a class="waves-effect waves-light pulse btn black" id="back-app">Back</a></span>`);

      for (i = 0; i < objectArray[0].length; i++) {
        var appSection =

          `     
                <figure style="background-color:black;" class="${objectArray[3][i]} animated rubberBand">
                 <img class="sensei" src="${objectArray[0][i]}">
                <figcaption style="background-color:black;">
                  <h6>${objectArray[1][i]}</h6><br>
                  ${objectArray[2][i]}
                </figcaption>
                 <a href="${objectArray[4][i]}" target="_blank"></a>
                </figure>
          `
        $("#appHolder").append(appSection)
      }
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
      });

    $("#aboutme").slideDown(1500, function () {
      $("#aboutme").removeClass("hidden-button");
    });

    $("#website").slideDown(1500, function () {
      $("#website").removeClass("hidden-button")
    });



  });



  var webArray = [
    pictureArr = [
      "./assets/img/websites-images/first-responsive-site.png",
      "./assets/img/websites-images/jon-lascaze.png",
    ],

    nameArr = [
      "<h5>First Portfolio<h5>",
      "<h5>Current Portfolio<h5>",
    ],

    descripArr = [
      "This is my first responsive portfolio design.",
      "Utilizing techniques previously learned, I updated my portfolio to be completely dynamic, and responsive.",
    ],

    animateArr = [
      "imghvr-shutter-in-out-vert",
      "imghvr-zoom-out-down",
    ],

    linkArr = [
      "https://jlasc.github.io/Responsive-Portfolio/",
      "https://jlasc.github.io/JonLascaze/",
    ]
  ]


  //Website - grow
  $("#website").on("click", function () {

    $("#aboutme").slideUp(1500, function () {
      $("#aboutme").addClass("hidden-button")
    });
    $("#applications").slideUp(1500, function () {
      $("#applications").addClass("hidden-button")
    });
    $("#website").animate({
      height: "700px",
    }, 1500, function () {
      $("#website").empty()
        .addClass("back-web")
        .removeAttr("id", "website")
        .attr("id", "newWeb");

        $("#newWeb")
        .append($("<div>")
          .addClass("container")
          .attr("id", "webHolder"))
        .prepend(`<a class="waves-effect waves-light pulse btn black" id="back-web">Back</a></span>`);

      for (i = 0; i < webArray[0].length; i++) {
        var appSection =

          `     
                <figure style="background-color:black;" class="${webArray[3][i]} animated rubberBand">
                 <img class="sensei" src="${webArray[0][i]}">
                <figcaption style="background-color:black;">
                  <h6>${webArray[1][i]}</h6><br>
                  ${webArray[2][i]}
                </figcaption>
                 <a href="${webArray[4][i]}" target="_blank"></a>
                </figure>
          `
        $("#webHolder").append(appSection)
      }
    });


  });

  //Website - shrink
  $(document).on("click", "#back-web", function () {
    $("#newWeb")
      .empty()
      .removeClass("back-app")
      .removeAttr("id", "newWeb")
      .attr("id", "website");
      
      $("#aboutme").slideDown(1500, function () {
        $("#aboutme").removeClass("hidden-button")
      });
      $("#applications").slideDown(1500, function () {
        $("#applications").removeClass("hidden-button");
      });
      $("#website")
      .append("<p class='topics'>Websites</p>")
      .animate({
        height: "250px",
      }, 750, function () {
        $("#website")
          .removeAttr("style")
      });
  });





});
