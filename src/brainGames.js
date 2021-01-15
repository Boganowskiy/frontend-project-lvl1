import getUserAnswer from './cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const username = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};
