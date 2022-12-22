import './style/style.scss';
import {shuffle} from './utils';

const gameDescText = 'Testa dina matematikkunskaper!';
const gameDescription: HTMLDivElement | null = document.querySelector('.gameDescription');

if (gameDescription) {
  gameDescription.innerHTML = gameDescText;
}


document.querySelector('.startGameBtn').addEventListener('click', startGame);

let playerName = '';

const questions = [
  {
    questionText: '11 x 11?', 
    answerOptions: [
      '121',
      '111',
      '112'
    ], 
    correctAnswer: '111',
  }, 
  {
    questionText: 'Vad är pi?', 
    answerOptions: [
      '3.14',
      '100',
      '4,10'
    ], 
    correctAnswer: '3.14',
  }
];


function startGame() {
  playerName = document.querySelector('#playerNameInput').value;
 
  gameDescription.style.display = 'none';
  document.querySelector('.playerDetails').classList.add('hidden');
  document.querySelector('.startGameBtn').classList.add('hidden');
  document.querySelector('#nextWrapper').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'flex';


  nextQuestion();
};

const questionTextDiv = document.querySelector('.questionText');
const answer1Btn = document.querySelector('.answer1');
const answer2Btn = document.querySelector('.answer2');
const answer3Btn = document.querySelector('.answer3'); 

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer); 

let currentQuestion = 0;
let points = 0;

function checkAnswer(e){ 
  const userAnswer = e.currentTarget.innerHTML;
  const correctAnswer = questions[currentQuestion -1].correctAnswer; 
  if (userAnswer == correctAnswer) {
    points++;
  }else if (points > 0) {
    points--;
  }
}

const next = document.querySelector('.next');
next.addEventListener('click', nextQuestion);


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

document.querySelector ('.restartGameBtn').addEventListener('click', restartGame);

function restartGame(){
  document.querySelector('#gameOver').style.display ='none';
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
