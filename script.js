'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value); //here we use this to show that there is nothing in guess
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); //here we use this to show that there 23 value
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //console.log('No number added').textContent;
    document.querySelector('.message').textContent = 'NO number Added';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (secretNumber !== guess) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? 'Too low' : 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game:';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (secretNumber > guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game:';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (secretNumber < guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game:';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '? ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textcontext = 0;
});
