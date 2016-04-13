alert('Welcome To Get To Know Shawn Farrow Trivia Game');
var correctAnswers = 0;
var incorrectAnswers = 0;
//question1
var answerOne = prompt('Was Shawn born in Lakewood?').toLowerCase();
console.log('Was Shawn born in Lakewood? user answer = ' + answerOne);

if(answerOne === 'y' || answerOne === 'yes'){
  alert('Incorrect, Shawn was born in Tacoma.');
  incorrectAnswers++;
}
else{
  alert('Correct, Shawn was born at Tacoma General Hospital in Tacoma, WA.');
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
  alert('Incorrect, Shawn has an 1 older brother named Dwight');
  incorrectAnswers++;
}
//question3
var answerThree = prompt('Did Shawn go to Lakes High School?').toLowerCase();
console.log('Did Shawn go to Lakes High School? user answer = ' + answerThree);
if(answerThree === 'y' || answerThree === 'yes'){
  alert('Incorrect, Shawn went to Clover Park High School');
  incorrectAnswers++;
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
  incorrect++;
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
  incorrectAnswers++;
}
else{
  alert('Correct, Shawn writes with his left hand but throws a ball with his right hand');
  correctAnswers++;
}

if(correctAnswers === 3){
  alert('Congratulations, You got all the answers correct');
}
else{
  alert('Game Over\n\nScore:\n' + correctAnswers + ' correct\n' + incorrectAnswers + ' incorrect');
}
