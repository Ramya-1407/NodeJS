var chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.underline('Hello world!'));
console.log(chalk.blue.underline.bold('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(chalk.blue('Hello')+chalk.red('world!'));