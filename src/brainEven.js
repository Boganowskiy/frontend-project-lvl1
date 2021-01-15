import game from './index.js';
import getRandomNumber from './getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const maxNumber = 100;
  const numOfRounds = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const number = getRandomNumber(maxNumber);
    questions.push(number);
    correctAnswers.push(getCorrectAnswer(number));
  }
  game(greeting, questions, correctAnswers, numOfRounds);
};
