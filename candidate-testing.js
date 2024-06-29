const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", 
                "True or false: 5 kilometer == 5000 meters? ", 
                "(5 + 3)/2 * 10 = ? ",
                "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  //Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");

}

function askQuestion() {
  //Ask candidate the question and add response to candidateAnswers array //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(`\n${i + 1}) ${questions[i]}`);
    candidateAnswers.push(candidateAnswer);
  }

}

function gradeQuiz(candidateAnswers) {

  //Question by Question Report with Spacing // 
  console.log(`\n#################################\n\tEVALUATION REPORT\n#################################\n\nCandidate Name: ${candidateName}\n`);
  
  let numCorrectAnswers = 0;
  
  for (let i = 0; i < candidateAnswers.length; i++) {
    
    let gradedQuestionMsg = `${i + 1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}\n`;

    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log(gradedQuestionMsg);
      numCorrectAnswers++;
    } else {
      console.log(gradedQuestionMsg);
    }
  }

  //Grade Calculation & Overall Evaluation //
  let grade = (numCorrectAnswers) / (questions.length) * 100;  
  let status = "UNDETERMINED";
  let evalMsg = `>>> Overall Grade: ${grade}% (${numCorrectAnswers} of ${questions.length} responses correct) <<<`;

  if (grade >= 80) {
    status = "PASSED";
    console.log(`${evalMsg}\n>>> Status: ${status} <<<`);
  } else {
    status = "FAILED";
    console.log(`${evalMsg}\n>>> Status: ${status} <<<`);
  }


  return grade;
}
//Test Comment for GitHub Actions
function runProgram() {
  askForName();
  //Greet candidate using their name //
   console.log(`\nWelcome to the test ${candidateName}!\n\n<<<<<<<<<<<<<<<<<  Questions  >>>>>>>>>>>>>>>>>`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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
};