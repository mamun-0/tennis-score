const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resetBtn = document.querySelector('#resetBtn');
const scoreSelection = document.querySelector('#scoreSelection');

const displayScore1 = document.querySelector('#displayScore1');
const displayScore2 = document.querySelector('#displayScore2');

let player1Score = 0;
let player2Score = 0;
let gameOver = false;
let winningScore = parseInt(scoreSelection.value);

player1Btn.addEventListener('click', function () {
  winningScore = parseInt(scoreSelection.value);
  if (!gameOver) {
    if (player1Score !== winningScore) {
      player1Score++;
      displayScore1.innerText = player1Score;
      if (player1Score === winningScore) {
        displayScore1.classList.add('win');
        displayScore2.classList.add('lose');
        gameOver = true;
      }
    }
  }
});

player2Btn.addEventListener('click', function () {
  winningScore = parseInt(scoreSelection.value);
  if (!gameOver) {
    if (player2Score !== winningScore) {
      player2Score++;
      displayScore2.innerText = player2Score;
      if (player2Score === winningScore) {
        displayScore2.classList.add('win');
        displayScore1.classList.add('lose');
        gameOver = true;
      }
    }
  }
});

scoreSelection.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});
resetBtn.addEventListener('click', reset);

function reset() {
  winningScore = parseInt(scoreSelection.value);
  player1Score = player2Score = 0;
  displayScore1.innerText = player1Score;
  displayScore2.innerText = player2Score;
  displayScore1.classList.remove('win', 'lose');
  displayScore2.classList.remove('win', 'lose');
  gameOver = false;
}
