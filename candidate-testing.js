
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = '' ;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "1. Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [
  "1. Who was the first American woman in space? ",
   "2. True or false: 5 kilometer == 5000 meters? ", 
   "3. (5 + 3)/2 * 10 = ? ",
   "4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
   "5. What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","True", "40", "Trajectory", "3"];
let candidateAnswers = [];
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(' Name: ');
  console.log(' Hello: ' + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let answers = "";
  for (let i = 0; i < questions.length; i++){ 
    answers = input.question(questions[i]);
    candidateAnswers.push(answers);    
  }
  console.log(candidateAnswers);
 
}
function gradeQuiz(candidateAnswers){
 let point = 0
 let correctAnsNumber = 0
 for(let i=0; i < questions.length; i++){
   if ((correctAnswers[i]).toLowerCase()==(candidateAnswers[i]).toLowerCase())
   {
correctAnsNumber++
 }
 console.log(`${questions[i]}`);
 console.log('Your Answer: ', candidateAnswers[i]);
 console.log('Correct Answer: ', candidateAnswers[i]);
 }
 point =(correctAnsNumber / questions.length) * 100;
 console.log(point);
 console.log(`POINTS: ${point} % ${correctAnsNumber} of ${questions.length}`);
 if (point >= 80){
   console.log("PASS!");
  } else if (point <= 80) {
 console.log("FAIL!");}
 return point;
}
 
  function runProgram() {
  askForName();
  askQuestion();
  //askQuestions();
  gradeQuiz(this.candidateAnswers);
}
 
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
candidateName: candidateName,
question: question,
correctAnswer: correctAnswer,
candidateAnswer: candidateAnswer,
questions: questions,
correctAnswers: correctAnswers,
candidateAnswers: candidateAnswers,
gradeQuiz: gradeQuiz,
runProgram: runProgram
}