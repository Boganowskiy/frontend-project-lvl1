import readlineSync from 'readline-sync';

<<<<<<< HEAD
const getUserAnswer = (questionText) => {
  const answer = readlineSync.question(questionText);
  return answer;
};

export default getUserAnswer;
=======
const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default getUserName;
>>>>>>> e7fc48226e815b245217aa3fd845bfcab9ab5e8b
