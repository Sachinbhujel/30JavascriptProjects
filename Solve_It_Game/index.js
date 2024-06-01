const operators = ["+", "-", "*", "/"];
const operators2 = ["+", "-", "*"];

function generateRandomQuestion() {
  const operand1 = Math.floor(Math.random() * 10) + 1;
  const operand2 = Math.floor(Math.random() * 10) + 1;
  const operand3 = Math.floor(Math.random() * 10) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const operator2 = operators2[Math.floor(Math.random() * operators2.length)];
  return `${operand1} ${operator} ${operand2} ${operator2} ${operand3}`;
}

let questions = Array.from({ length: 10 }, generateRandomQuestion);

let currentQuestionIndex = 0;
let timeLeft = 10;
let score = 0;
let timer;

function displayQuestion() {
  document.getElementById("question").innerText =
    questions[currentQuestionIndex];
}

function startQuiz() {
  displayQuestion();
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time_increase").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      checkAnswer();
    }
  }, 1000);
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value, 10);
  const correctAnswer = eval(questions[currentQuestionIndex]);
  if (userAnswer === correctAnswer) {
    score = score + 10;
    document.getElementById("score").innerText = score;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    timeLeft = 10;
    document.getElementById("answer").value = "";
    displayQuestion();
    startTimer();
  } else {
    document.getElementById("quiz_div").style.display = "none";
    document.getElementById("result").innerHTML = score;
    document.getElementById("answer_div").style.display = "flex";
  }
}

function submitAnswer() {
  clearInterval(timer);
  checkAnswer();
}

window.onload = startQuiz;
