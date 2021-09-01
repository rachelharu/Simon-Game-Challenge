var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
// var randomNumber;

//starts game
$(document).keypress(function() {
  if (!started) {
    level++;
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});

//starts sequence
function nextSequence() {
  level++;
  $("#level-title").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //animations and sounds
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//checks users click and sends lights and animations to corresponding button
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  //alert(userChosenColour);
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);

});

//function to check user answers
function checkAnswer(currentLevel){
// if (userClickedPattern == gamePattern)
//  {
//    console.log("yes");
//  } else {
//    console.log("poop");
//  }
if (JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern)){
  console.log("success");
} else {
  console.log("wrong");
}

//return JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern);
}


// function for sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//function for animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}
