import brainGames from './brainGames.js';
import getUserAnswer from './cli.js';

const round = (question, correctAnswer) => {
  const userAnswer = getUserAnswer(`Question: ${question} `);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return 'failed';
  }
  return 'success';
};

const game = (greeting, questions, correctAnswers, numOfRounds) => {
  const username = brainGames();
  console.log(greeting);
  for (let i = 0; i < numOfRounds; i += 1) {
    if (round(questions[i], correctAnswers[i]) !== 'success') {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default game;
