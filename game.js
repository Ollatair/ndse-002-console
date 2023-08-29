#!/usr/bin/env node
const readline = require('readline');

const secretNumber = Math.floor(Math.random() * 101);
const minRange = 0;
const maxRange = 100;

console.log(`Загадано число в диапазоне от ${minRange} до ${maxRange}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessNumber = () => {
  rl.question('Введите число: ', (answer) => {
    const number = parseInt(answer);

    if (isNaN(number)) {
      console.log('Некорректный ввод. Попробуйте снова.');
      guessNumber();
      return;
    }

    if (number === secretNumber) {
      console.log(`Отгадано число ${secretNumber}`);
      rl.close();
      return;
    }

    if (number < secretNumber) {
      console.log('Больше');
    } else {
      console.log('Меньше');
    }

    guessNumber();
  });
};

guessNumber();
