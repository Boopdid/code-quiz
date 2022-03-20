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
  answer.addEventListener("click", function () {
    console.log("You selected an answer.");
  });
});

//timer

//event listener

//
