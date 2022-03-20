var score = 0;
var time = 60;
var sectionShowing = "start";
function setTimerText(newTime) {
  var timerElement = document.getElementById("time");
  timerElement.innerHTML = `Time: ${newTime}`;
}
var startQuiz = document.getElementById("startQuiz");
startQuiz.addEventListener("click", function () {
  time = 60;
  setTimerText(time);
  var countdown = setInterval(function () {
    if (time <= 0) {
      clearInterval(countdown);
    }
    if (time != 0) {
      time -= 1;
      setTimerText(time);
    } else {
      if (sectionShowing != "scores") {
        var visibleSection = document.getElementById(sectionShowing);
        visibleSection.classList.add("hidden");
        var finishedSection = document.getElementById("finish");
        finishedSection.classList.remove("hidden");
        sectionShowing = "finish";
        var scoreElement = document.getElementById("finalScore");
        scoreElement.innerHTML = score;
      }
    }
  }, 1000);
  var startSection = document.getElementById("start");
  startSection.classList.add("hidden");
  var firstQuestion = document.getElementById("first");
  firstQuestion.classList.remove("hidden");
  sectionShowing = "first";
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
    sectionShowing = nextSection;
    if (buttonClasses.contains("right")) {
      console.log("You got it right");
      score += 10;
    } else {
      time -= 10;
      setTimerText(time);
      console.log("you got it wrong");
    }
    if (nextSection === "finish") {
      time = 0;
      setTimerText(time);
      var scoreElement = document.getElementById("finalScore");
      scoreElement.innerHTML = score;
    }
  });
});
var submitButton = document.getElementById("submitInitials");
submitButton.addEventListener("click", function () {
  var initials = document.getElementById("initials").value;
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  console.log(initials, scores);
  scores = scores.concat({
    score: score,
    initials: initials,
  });
  localStorage.setItem("scores", JSON.stringify(scores));
  var finishSection = document.getElementById("finish");
  finishSection.classList.add("hidden");
  var scoreSection = document.getElementById("scores");
  scoreSection.classList.remove("hidden");
  sectionShowing = "scores";
  var scoresList = document.getElementById("scorelist");
  scoresList.innerHTML = "";
  scores.forEach(function (score) {
    var li = document.createElement("li");
    li.innerHTML = `${score.initials}: ${score.score}`;
    scoresList.appendChild(li);
  });
});
var returnButton = document.getElementById("returnStart");
returnButton.addEventListener("click", function () {
  var scoreSection = document.getElementById("scores");
  scoreSection.classList.add("hidden");
  var startSection = document.getElementById("start");
  startSection.classList.remove("hidden");
  sectionShowing = "start";
});

var clearScoresButton = document.getElementById("clearScores");
clearScoresButton.addEventListener("click", function () {
  localStorage.clear();
  var scoresList = document.getElementById("scorelist");
  scoresList.innerHTML = "";
});

var viewScoreButton = document.getElementById("viewScores");
viewScoreButton.addEventListener("click", function () {
  time = 0;
  setTimerText(0);
  var visibleSection = document.getElementById(sectionShowing);
  visibleSection.classList.add("hidden");
  var scoreSection = document.getElementById("scores");
  scoreSection.classList.remove("hidden");
  sectionShowing = "scores";
  var scoresList = document.getElementById("scorelist");
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  scoresList.innerHTML = "";
  scores.forEach(function (score) {
    var li = document.createElement("li");
    li.innerHTML = `${score.initials}: ${score.score}`;
    scoresList.appendChild(li);
  });
});
