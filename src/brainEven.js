import getUserAnswer from './cli.js';
import brainGames from './brainGames.js';

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const game = () => {
  const maxNumber = 100;
  const randomNumber = getRandomNumber(maxNumber);
  const userAnswer = getUserAnswer(`Question: ${randomNumber} `);
  console.log(`Your answer: ${userAnswer}`);
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return 'failed';
  }
  return 'success';
};

const isGameFinishedFailed = () => game() !== 'success';

export default () => {
  const username = brainGames();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    if (isGameFinishedFailed()) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
