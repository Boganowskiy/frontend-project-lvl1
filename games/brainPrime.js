import { getRandomNumber } from '../src/getRandomNumber.js';
import game from '../src/index.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

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
