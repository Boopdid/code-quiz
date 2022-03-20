var score = 0;
var startQuiz = document.getElementById("startQuiz");
startQuiz.addEventListener("click", function () {
  var startSection = document.getElementById("start");
  startSection.classList.add("hidden");
  var firstQuestion = document.getElementById("first");
  firstQuestion.classList.remove("hidden");
  console.log("Ouch");
});

var selectedAnswer = document.querySelectorAll(".answer");
selectedAnswer.forEach(function (answer) {
  answer.addEventListener("click", function (event) {
    console.log("You selected an answer.", event);
    var buttonClasses = event.target.classList;
    console.log(buttonClasses);
    var currentQuestion = event.target.parentElement.id;
    console.log(currentQuestion);
    var nextSection = "";
    switch (currentQuestion) {
      case "first":
        nextSection = "second";
        break;
      case "second":
        nextSection = "third";
        break;
      case "third":
        nextSection = "fourth";
        break;
      case "fourth":
        nextSection = "fifth";
        break;
      case "fifth":
        nextSection = "finish";
        break;
    }
    event.target.parentElement.classList.add("hidden");
    var nextElement = document.getElementById(nextSection);
    nextElement.classList.remove("hidden");
    if (buttonClasses.contains("right")) {
      console.log("You got it right");
      score += 10;
    } else {
      console.log("you got it wrong");
    }
  });
});

//timer

//event listener

//
