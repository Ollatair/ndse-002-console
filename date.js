#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
  .command({
    command: 'current',
    desc: 'Получить текущую дату и время',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Получить текущий год',
          type: 'boolean',
        })
        .option('month', {
          alias: 'm',
          describe: 'Получить текущий месяц',
          type: 'boolean',
        })
        .option('day', {
          alias: 'd',
          describe: 'Получить текущий день',
          type: 'boolean',
        });
    },
    handler: (argv) => {
      const now = new Date();

      if (argv.year) {
        console.log(`Текущий год: ${now.getFullYear()}`);
      } else if (argv.month) {
        console.log(`Текущий месяц: ${now.getMonth() + 1}`);
      } else if (argv.day) {
        console.log(`Текущий день: ${now.getDate()}`);
      } else {
        console.log(`Текущая дата и время: ${now.toISOString()}`);
      }
    },
  })
  .command({
    command: 'add',
    desc: 'Добавить указанное количество времени',
    builder: (yargs) => {
      yargs
        .option('day', {
          alias: 'd',
          describe: 'Добавить указанное количество дней',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Добавить указанное количество месяцев',
          type: 'number',
        })
        .option('year', {
          alias: 'y',
          describe: 'Добавить указанное количество лет',
          type: 'number',
        });
    },
    handler: (argv) => {
      const now = new Date();

      if (argv.day) {
        now.setDate(now.getDate() + argv.day);
      } else if (argv.month) {
        now.setMonth(now.getMonth() + argv.month);
      } else if (argv.year) {
        now.setFullYear(now.getFullYear() + argv.year);
      }

      console.log(`Дата и время после добавления: ${now.toISOString()}`);
    },
  })
  .command({
    command: 'sub',
    desc: 'Вычесть указанное количество времени',
    builder: (yargs) => {
      yargs
        .option('day', {
          alias: 'd',
          describe: 'Вычесть указанное количество дней',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Вычесть указанное количество месяцев',
          type: 'number',
        })
        .option('year', {
          alias: 'y',
          describe: 'Вычесть указанное количество лет',
          type: 'number',
        });
    },
    handler: (argv) => {
      const now = new Date();

      if (argv.day) {
        now.setDate(now.getDate() - argv.day);
      } else if (argv.month) {
        now.setMonth(now.getMonth() - argv.month);
      } else if (argv.year) {
        now.setFullYear(now.getFullYear() - argv.year);
      }

      console.log(`Дата и время после вычитания: ${now.toISOString()}`);
    },
  })
  .demandCommand()
  .help()
  .argv;
