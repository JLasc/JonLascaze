$(document).ready(function(){


    
  var i = 0;
  var txt = `Welcome to my website! I'm currently putting it all together. Please come back soon!`; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}




typeWriter()


  });

  