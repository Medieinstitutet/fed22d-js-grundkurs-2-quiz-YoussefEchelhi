import './style/style.scss';

//lägg ut beskrivning på sidan via JS:: annat sätt än att skriva 
const gameDescText = 'Testa dina matematikkunskaper!';
const gameDescription = document.querySelector('#gameDescription');

gameDescription.innerHTML = gameDescText;

//trycka på knappen, spelet startar.
document.querySelector('#startGameBtn').addEventListener('click', startGame);

//låter oss skriva in ett namn i input filen som sparas. '' Let gör att namnet kommer ändras för varje gång.
let playerName = '';

//detta är en array. man kan ha ett objekt i en array som beskriver flera egenskaper, i detta fall olika svarsalternativ.     
//array med (objekt) ska göra såhär på inlämningsuppgiften ....choklad lagring, spara namn, pris, rating, bilder, kategori
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


// funktion som säger vad som kommer att ske när man startar spelet. 
function startGame() {
  //spara spelarens namn
  playerName = document.querySelector('#playerNameInput').value;
 
  //dölj html elementen. vi döljer html elementen när vi skrivit in namn och tryckt på starta spel.
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  document.querySelector('#startGameBtn').style.display = 'none';
  document.querySelector('#nextWrapper').style.display = 'block';

  nextQuestion(); //ska finnas med för att denna säger att nästa fråga ska dyka upp
};

//variabler som ska beskriva vilken fråga det är och att frågorna har alternativ.
const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3'); 

//anropa ett event när du klickar vad ska ske när du väljer ett svarsalternativ, dvs titta på svaren
answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer); 

let currentQuestion = 0; //eftersom man i en sträng alltid börjar räkna med 0 sen 1,2,3.
let points = 0;

//funktion som säger att resultatet ska ses över
function checkAnswer(e){ //e eller evt förkortning på event
const userAnswer = e.currentTarget.innerHTML; //vilket svarsalternativ, = ...... detta får vi fram från inspektion i browsern.
//genom att skriva in console.dir(checkanswer) dir är ett annat sätt och logga och titta på browsern istället för log. man går in i roten direkt med dir.
const correctAnswer = questions[currentQuestion -1].correctAnswer;  //vilken är den aktuella frågan,
//varför -1? --> för att man i "nextQuestion" redan gått vidare till nästa fråga, vi är ute efter rätt svar för föregående fråga.
if (userAnswer == correctAnswer) { //jämföra frågans svar med vald knapp
//ge poäng
points++;
}else {
  //ge minus poäng läggs in här
}
}

const next = document.querySelector('#next');
next.addEventListener('click', nextQuestion);


//vad som ska ske när  man trycker på nästa fråga
function nextQuestion() {
  if (currentQuestion >= questions.length) { //ska vara här för att frågan inte ska köras klart innan man får input om att det inte finns fler frågor.
    gameOver();
    return;
  }

//skriv ut egenskaperna från arrayen (objeket)                                  kan användas att skriva ut objekten från chokladen.
questionTextDiv.innerHTML = questions[currentQuestion].questionText;
answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];

currentQuestion++; //+1 currentQuestion 0 currentQuestion +1;
}

//starta spelet igen efter avslutat spel
document.querySelector ('#restartGameBtn').addEventListener('click', restartGame);

//anropa en ny funktion, "spela om"
function restartGame(){
  document.querySelector('#gameOver').style.display ='none';
  document.querySelector('#questionContainer').classList.remove('hidden');
  document.querySelector('#nextWrapper').style.display = 'block';
  currentQuestion = 0;
  points = 0;
  nextQuestion();
}

//vad sker när man e klar med spelet
function gameOver() {
  // document.queryselector('#gameOver').classList.toggle ('hidden'); 
  //annat sätt att skriva istället för style och display
  document.querySelector('#gameOver').style.display = 'block'; 
  document.querySelector('#questionContainer').classList.add('hidden');
  document.querySelector('#pointsContainer').innerHTML = `Du ${playerName} fick ${points} poäng`;
  document.querySelector('#nextWrapper').style.display = 'none';
}
