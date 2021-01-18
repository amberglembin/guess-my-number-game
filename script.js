'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const changeBkgrdColor = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displaySecretNum = function (secretNum) {
  document.querySelector('.number').textContent = secretNum;
};
const boxWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No number!');

    // Correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    changeBkgrdColor('#60b347');
    displaySecretNum(secretNumber);
    boxWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      showScore(score);
    } else {
      displayMessage('You lost the game! 😢');
      showScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  changeBkgrdColor('#222');
  showScore(score);
  displaySecretNum('?');
  boxWidth('15rem');
});
