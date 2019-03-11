function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

function Quiz(question) {
  this.score = 0;

  this.questions = questions;

  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.question[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer) {
  this.questionIndex++;
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};

function populate() {
  if (quiz.isEnded()) {
    ShowScores();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showprogress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showprogress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Questions " + currentQuestionNumber + "of" + quiz.question.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id = 'score'> Your score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question(
    "What state is chicago in?",
    ["Washington", "Ohio", "Illinois"],
    "illinois"
  ),
  new Question(
    "What continent is Australia located in?",
    ["Australia", "Ohio", "Illinois"],
    "Australia"
  ),
  new Question(
    "What continent is New Zealand located in?",
    ["Washington", "Ohio", "Illinois"],
    "Australia"
  ),
  new Question("Is Java the same as Javascript", ["Yes", "No"], "No"),
  new Question(
    "China has the largest population compared to india",
    ["True", "false"],
    "True"
  )
];

var quiz = new quiz(questions);

populate();

// function Question(text, choices, answer) {
//   this.text = text;
//   this.choices = choices;
//   this.answer = answer;
// }

// Question.prototype.correctAnswer = function(choice) {
//   return choice === this.answer;
// };

// function Quiz(question) {
//   this.score = 0;

//   this.questions = questions;

//   this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function() {
//   return this.question[this.questionIndex];
// };

// Quiz.prototype.isEnded = function() {
//   return this.questions.length === this.questionIndex;
// };

// Quiz.prototype.guess = function(answer) {
//   this.questionIndex++;
//   if (this.getQuestionIndex().correctAnswer(answer)) {
//     this.score++;
//   }
// };
