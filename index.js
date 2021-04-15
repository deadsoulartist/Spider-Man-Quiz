var readlineSync = require("readline-sync");

//asking user his/her name
var userName = readlineSync.question("Whats your name? ");
console.log(
  "Welcome " +
    userName +
    '! to "Spider Man Quiz" \n --- Answer the 5 questions in a,b or c ---'
);

//data of highscores
var highScore = [
  {
    name: "Peter Parker",
    score: 5,
  },
  {
    name: "Spidey",
    score: 5,
  },
];

//score
var score = 0;

//function
function quiz(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns === ans) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
    score = score - 1;
  }

  console.log("Score: " + score);
  console.log("---------");
}

//array of objects
var ques = [
  {
    question: "Whos Spider Man?\na.Flash\nb.Harry\nc.Peter\n",
    answer: "c",
  },
  {
    question: "Whats Peter last name?\na.Parker\nb.Osbon\nc.Jane\n",
    answer: "a",
  },
  {
    question: "Where does Spider Man live?\na.London\nb.Texas\nc.New York\n",
    answer: "c",
  },
  {
    question: "Whos Peters uncle?\na.Ben\nb.Brad\nc.Brandon\n",
    answer: "a",
  },
  {
    question:
      "With Great powers comes great ____?\na.Money\nb.Responsibility\nc.Wisdom\n",
    answer: "b",
  },
];

//for loop
for (var i = 0; i < ques.length; i++) {
  var currentQue = ques[i];
  quiz(currentQue.question, currentQue.answer);
}

if (score > 0) {
  console.log("You win, Score : " + score);
} else {
  console.log("You lost");
}

var newUser = {
  name: userName,
  score: score,
};
highScore.push(newUser);

for (var i = 0; i < highScore.length; i++) {
  var userScore = highScore[i];
  console.log("High Scores:" + userScore.name, userScore.score);
}
