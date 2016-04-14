alert('Shawn Farrow Trivia Game');
var correctAnswers = 0;
var username = prompt('What is your name?');
alert('Hello ' + username + ', nice to meet you.');
//question 1-5

var questions = ['Was Shawn born in Lakewood?', 'Does Shawn have any siblings?', 'Did Shawn go to Lakes High School?', 'Did Shawn play basketball in college?', 'Does Shawn write with his right hand?'];

var answers = ['no', 'yes', 'no', 'no', 'no'];

var correctResponses = ['Correct, Shawn was born in Tacoma, WA. ', 'Correct, Shawn has an older brother named Dwight.', 'Correct, Shawn graduated from Clover Park in 2004.', 'Correct, no he played soccer in college.', 'Correct, he is left handed.'];

var wrongAnswers = ['yes', 'no', 'yes', 'yes', 'yes'];

var incorrect = ('That is not a correct response!!!');

function useQuestion(i){
  var userAnswer = prompt(questions[i]);
  if (userAnswer.toLowerCase() === answers[i]){
    alert (correctResponses[i]);
    correctAnswers++;
  }
  else if (userAnswer.toLowerCase() === wrongAnswers[i]){
    alert ('You are wrong!!!');
  }
  else{
    alert (incorrect);
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
    alert('Congratualtions ' + username + ', you got it');
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
