
// Kyle added this line
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = '' ;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

const input = require('readline-sync');
let candidateName = '';
let question = ("1. Who was the first American woman in space? ");
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
  let answer = "";
  for (let i = 0; i < questions.length; i++){ 
    answer = input.question(questions[i]);
    candidateAnswers.push(input);    
}
}
function gradeQuiz(candidateAnswers){
  let candidateAnswers = Number(answer);
}
     
// function gradeQuiz(candidateAnswers) {
//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   //console.log(correctAnswer);
//   //console.log(candidateAnswer);
// let correctA = candidateAnswer[0] + correctAnswer[0];
// if (correctA = true + 'Correct') {
  
// }else (correctA != false + 'Incorrect') 
//   //console.log("Incorrect");
 
//   let correctB = candidateAnswers[0] + correctAnswers[0];
// if (correctB == true) {
//     console.log("Correct");}  
// else if (correctB == false) {
//   console.log("Incorrect");
//  }
//  let candMarks = candidateAnswers+candidateAnswers;
//  let corrMarks = correctAnswer + correctAnswers.length * 100;
//  var grade = 0;
//  for (var i = 0; i < corrMarks.length; i++){
//    grade += corrMarks[i];
//    var gradeAvg = (grade/correctAnswer/correctAnswers.length);
//  }
//  //console.log("Grade: " + (grade)/ correctAnswer/correctAnswers.length);
//  if (grade => 80 + 'PASS!'){
//        //console.log("PASS!");}
//         }else if (grade => 80 + 'FAIL!'){
//           //console.log("FAIL!");
//         }
// }
// }
function runProgram() {
  askForName();
  askQuestion();
  // askQuestions();
  //gradeQuiz(this.candidateAnswers);
}
 //var grade =  (candidateAnswer + candidateAnswers / question + questions.lenghth);
      //console.log(grade);
     // console.log(grade * 100);
      //if ([grade * 100] > [8 * 100]){
       // console.log("PASS!");}
        //else if ([grade * 100] > [8* 100]){
          //console.log("FAIL!");
        //}

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