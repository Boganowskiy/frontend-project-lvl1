import game from './index.js';

const greeting = 'What is the result of the expression?';

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const add = (num1, num2) => Number(num1) + Number(num2);
const minus = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;

const operations = [['+', add], ['-', minus], ['*', multi]];

const getCorrectAnswer = (num1, num2, operation) => String(operation(num1, num2));

export default () => {
  const maxNumber = 100;
  const numOfRounds = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const number1 = getRandomNumber(maxNumber);
    const number2 = getRandomNumber(maxNumber);
    const [operatorSymb, operation] = operations[getRandomNumber([operations.length - 1])];
    const question = `${number1} ${operatorSymb} ${number2}`;
    questions.push(question);
    correctAnswers.push(getCorrectAnswer(number1, number2, operation));
  }
  game(greeting, questions, correctAnswers, numOfRounds);
};
