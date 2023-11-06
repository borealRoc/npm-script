const { rm, mkdir, exec, ls } = require('shelljs');
const chalk = require('chalk');
const path = require('path');

console.log(chalk.green('1. prebuild: remove dist folder, create dist/{images,styles,scripts} folder'));
rm('-rf', 'dist');
mkdir('-p', 'dist/images', 'dist/styles', 'dist/scripts');

console.log(chalk.green('2.1 build:images'));
const inputDir = 'client/images';
const outputDir = 'dist/images';
const imageminCommand = `npx imagemin-cli ${inputDir}/*.png --out-dir ${outputDir} --plugin=pngquant`;
exec(imageminCommand);

console.log(chalk.green('2.2 build:less'))
const lessFiles = ls('client/styles/*.less')
for (let lessFile of lessFiles) {
    const inputLessFile = lessFile
    const basename = path.basename(lessFile)
    const outputLessFile = `dist/styles/${basename.replace(/\.less$/, '.css')}`
    const lessCommand = `lessc ${inputLessFile} ${outputLessFile}`
    exec(lessCommand)
    const cssminCommand = `cssmin ${outputLessFile}`;
    exec(cssminCommand)
}