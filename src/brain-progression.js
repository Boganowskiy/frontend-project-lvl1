import game from './index.js';
import { getRandomNumberMinMax, getRandomNumber } from './getRandomNumber.js';

const greeting = 'What number is missing in the progression?';

const getProgression = (lengthOfProgression, startOfProgression, stepOfProgression) => {
  const progression = [startOfProgression];
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    const previousValue = progression[i - 1];
    progression.push(previousValue + stepOfProgression);
  }
  return progression;
};

const removeRandomProgressionElement = (progression, position) => {
  const value = progression[position];
  const newProgression = progression.slice();
  newProgression[position] = '..';
  return [newProgression, value];
};

export default () => {
  const maxNumber = 100;
  const minLengthOfProgression = 5;
  const maxLengthOfProgression = 10;
  const numOfRounds = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const progressionLength = getRandomNumberMinMax(minLengthOfProgression, maxLengthOfProgression);
    const progressionStart = getRandomNumber(maxNumber);
    const progressionStep = getRandomNumber(maxNumber);
    const removedIndex = getRandomNumber(progressionLength);
    const currentProgression = getProgression(progressionLength, progressionStart, progressionStep);
    const [task, correctValue] = removeRandomProgressionElement(currentProgression, removedIndex);
    questions.push(task);
    correctAnswers.push(String(correctValue));
  }
  game(greeting, questions, correctAnswers, numOfRounds);
};
