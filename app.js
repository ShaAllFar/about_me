alert('Shawn Farrow Trivia Game');
var correctAnswers = 0;
var username = prompt('What is your name?');
alert('Hello ' + username + ', nice to meet you.');
//question1
var answerOne = prompt('Was Shawn born in Lakewood?').toLowerCase();
console.log('Was Shawn born in Lakewood? user answer = ' + answerOne);
if(answerOne === 'y' || answerOne === 'yes'){
  alert('Incorrect, Shawn was born in Tacoma.');
}
else{
  alert('Correct, Shawn was born in Tacoma, WA. ');
  correctAnswers++;
}
//question2
var answerTwo = prompt('Does Shawn have any siblings?').toLowerCase();
console.log('Does Shawn have any siblings? user answer = ' + answerTwo);
if(answerTwo === 'y' || answerTwo === 'yes'){
  alert('Correct, Shawn has an older brother named Dwight');
  correctAnswers++;
}
else{
  alert('Incorrect, Shawn has an older brother named Dwight');
}
//question3
var answerThree = prompt('Did Shawn go to Lakes High School?').toLowerCase();
console.log('Did Shawn go to Lakes High School? user answer = ' + answerThree);
if(answerThree === 'y' || answerThree === 'yes'){
  alert('Incorrect, Shawn went to Clover Park High School');
}
else{
  alert('Correct, Shawn graduated from Clover Park in 2004');
  correctAnswers++;
}
//question4
var answerFour = prompt('Did Shawn play basketball in college?').toLowerCase();
console.log('Did Shawn play basketball in college? user answer = ' + answerFour);
if(answerFour === 'y' || answerFour === 'yes'){
  alert('Incorrect, Shawn played Basketball in high school');
}
else{
  alert('Correct, Shawn played Soccer for The Evergreen State College Geoducks');
  correctAnswers++;
}
//question5
var answerFive = prompt('Does Shawn write with his right hand?').toLowerCase();
console.log('Does Shawn write with his right hand? user answer = ' + answerFive);
if(answerFive === 'yes' || answerFive === 'y'){
  alert('Incorrect, Shawn writes with his left hand');
}
else{
  alert('Correct, Shawn writes with his left hand but throws a ball with his right hand');
  correctAnswers++;
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
