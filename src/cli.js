import readlineSync from 'readline-sync';

const getUserAnswer = (questionText) => {
  const answer = readlineSync.question(questionText);
  return answer;
};

export default getUserAnswer;
