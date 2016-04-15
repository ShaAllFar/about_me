alert('Shawn Farrow Trivia Game');
var correctAnswers = 0;
var username = prompt('What is your name?');
alert('Hello ' + username + ', nice to meet you.');
//question 1-5

var questions = ['Was Shawn born in Lakewood?', 'Does Shawn have any siblings?', 'Does Shawn have any children?', 'Did Shawn play basketball in college?', 'Does Shawn write with his right hand?'];

var answers = [['no', 'n'], ['yes','y'], ['no', 'n'], ['no', 'n'], ['no', 'n']];

var correctResponses = ['Correct, he was born in Tacoma, but raised in Lakewood.', 'Correct, he has an older brother named Dwight.', 'Correct, he has no children. Being an uncle is good for now.', 'Correct, he played soccer in college.', 'Correct, he writes with his left, but throws a ball with his right'];

var incorrectResponses = ['Incorrect, he was born in Tacoma, but raised in Lakewood.','Wrong, he has an older brother named Dwight.','Incorrect, he has no children. Being an uncle is good for now.','Incorrect, he played soccer in college.','Incorrect, he writes with his left but throws a ball with his right.'];

var wrongAnswers = [['yes','y'], ['no', 'n'], ['yes','y'], ['yes','y'], ['yes','y']];

var incorrectInput = ('That is not a correct response. yes, y, no, or n are valid answers.');

function useQuestion(i){
  var userAnswer = prompt(questions[i]).toLowerCase();
  if (userAnswer === answers[i][0] || userAnswer === answers[i][1]){
    alert (correctResponses[i]);
    correctAnswers++;
  }
  else if (userAnswer === wrongAnswers[i][0] || userAnswer === wrongAnswers[i][1]){
    alert (incorrectResponses[i]);
  }
  else{
    alert (incorrectInput);
  }
}

for (var i = 0; i < questions.length; i++){
  useQuestion(i);
}

//question6
var guessTotal = 1;
var number = 3;
while(guessTotal <= 4){
  var userGuess = parseInt(prompt('Im thinking of a number between 1 - 10'));
  if(isNaN(userGuess)){
    alert('Input was not a number, try again');
    guessTotal--;
  }
  else if(userGuess === number){
    alert('Congratualtions, ' + username + ', you got it');
    correctAnswers++;
    break;
  }
  else if(userGuess > number){
    alert('Too High. A little lower ' + username + '.\n\n' + guessTotal + ' guesses');
  }
  else {
    alert('Too Low. A little higher ' + username + '.\n\n' + guessTotal + ' guesses');
  }
  guessTotal++;
}
//question 7
var guessTotal = 0;
var correctArray = ['wale','big sean','j. cole','drake'];
while (guessTotal < 6){
  var userInput = prompt('Name one of Shawn\'s current favorite rap artist.').toLowerCase();
  if (userInput === correctArray[0]){
    alert('Correct. ');
    correctAnswers++;
    break;
  }
  else if (userInput === correctArray[1]){
    alert('Correct.');
    correctAnswers++;
    break;
  }
else if (userInput === correctArray[2]){
  alert('Correct.');
  correctAnswers++;
  break;
}
else if (userInput === correctArray[3]){
  alert('Correct.');
  correctAnswers++;
  break;
}
  else{
  alert('try again.');
}
  guessTotal++;
}
if(guessTotal === 6){
  alert('The correct answers are: ' + correctArray[0] + ', ' + correctArray[1] + ', ' + correctArray[2] + ', and ' + correctArray[3]);
}
//totals
if(correctAnswers === 7){
  alert('Congratulations' + username + ', You got all the answers correct');
}
else{
  alert('Score: ' + correctAnswers + ' out of 7');
}
