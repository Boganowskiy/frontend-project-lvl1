import game from './index.js';
import getRandomNumber from './getRandomNumber.js';

const greeting = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 < num2) return getGcd(num2, num1);

  if (!num2) return num1;
  return getGcd(num2, num1 % num2);
};

export default () => {
  const maxNumber = 100;
  const numOfRounds = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const number1 = getRandomNumber(maxNumber);
    const number2 = getRandomNumber(maxNumber);
    questions.push(`${number1}, ${number2}`);
    const correctAnswer = String(getGcd(number1, number2));
    correctAnswers.push(correctAnswer);
  }
  game(greeting, questions, correctAnswers, numOfRounds);
};
