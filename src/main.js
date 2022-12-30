import './style/style.scss';
import { shuffle } from './utils';

const gameDescText = 'Testa dina matematikkunskaper!';
const gameDescription = document.querySelector('.gameDescription');
const questionTextDiv = document.querySelector('.questionText');
const answer1Btn = document.querySelector('.answer1');
const answer2Btn = document.querySelector('.answer2');
const answer3Btn = document.querySelector('.answer3');
const next = document.querySelector('.next');

if (gameDescription) {
  gameDescription.innerHTML = gameDescText;
}

document.querySelector('.startGameBtn').addEventListener('click', startGame);
document.querySelector('.restartGameBtn').addEventListener('click', restartGame);

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

answer1Btn.addEventListener('click', nextQuestion);
answer2Btn.addEventListener('click', nextQuestion);
answer3Btn.addEventListener('click', nextQuestion);

next.addEventListener('click', nextQuestion);

let currentQuestion = 0;
let points = 0;
let playerName = '';

const questions = [
  {
    questionText: 'Vad är 11 x 11?',
    answerOptions: [
      '121',
      '111',
      '112',
    ],
    correctAnswer: '111',
  },
  {
    questionText: 'Vad är pi?',
    answerOptions: [
      '3.14',
      '100',
      '4,10',
    ],
    correctAnswer: '3.14',
  },
  {
    questionText: 'Vilket tal är minst?',
    answerOptions: [
      '2,9',
      '2,89',
      '2,889',
    ],
    correctAnswer: '2,889',
  },
  {
    questionText: 'Vad blir 2*3+5?',
    answerOptions: [
      '16',
      '11',
      '10',
    ],
    correctAnswer: '11',
  },
  {
    questionText: 'Vilket tal är X? 6+x=12',
    answerOptions: [
      '6',
      '2',
      '5',
    ],
    correctAnswer: '6',
  },
  {
    questionText: 'Beräkna 0,5*20?',
    answerOptions: [
      '11',
      '10',
      '12',
    ],
    correctAnswer: '10',
  },
  {
    questionText: 'Beräkna 7*7?',
    answerOptions: [
      '50',
      '51',
      '49',
    ],
    correctAnswer: '49',
  },
  {
    questionText: 'Vad är roten ur 36?',
    answerOptions: [
      '7',
      '6',
      '8',
    ],
    correctAnswer: '6',
  },
  {
    questionText: 'Beräkna 100/4?',
    answerOptions: [
      '25',
      '20',
      '22',
    ],
    correctAnswer: '25',
  },
  {
    questionText: 'Vad blir X? 100=20*x',
    answerOptions: [
      '5',
      '4',
      '6',
    ],
    correctAnswer: '5',
  },
];

function startGame() {
  playerName = document.querySelector('#playerNameInput').value;
  gameDescription.style.display = 'none';
  document.querySelector('.playerDetails').classList.add('hidden');
  document.querySelector('.startGameBtn').classList.add('hidden');
  document.querySelector('#nextWrapper').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'flex';

  nextQuestion();
}

function checkAnswer(e) {
  const userAnswer = e.currentTarget.innerHTML;
  const correctAnswer = questions[currentQuestion - 1].correctAnswer;
  if (userAnswer === correctAnswer) {
    points++;
  } else if (points > 0) {
    points--;
  }
}

function nextQuestion() {
  if (currentQuestion >= shuffle(questions).length) {
    gameOver();
    return;
  }
  questionTextDiv.innerHTML = questions[currentQuestion].questionText;
  answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];
  currentQuestion++;
}

function restartGame() {
  document.querySelector('#gameOver').style.display = 'none';
  document.querySelector('#questionContainer').classList.remove('hidden');
  document.querySelector('#nextWrapper').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'flex';
  currentQuestion = 0;
  points = 0;
  nextQuestion();
}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'none';
  document.querySelector('.pointsContainer').innerHTML = `Du, ${playerName}, fick ${points} poäng.`;
  document.querySelector('#nextWrapper').style.display = 'none';
}
