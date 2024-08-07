const path = require('path');
const fs = require('fs');

// console.log(__filename)
console.log(__dirname);

// pegar o nome de um arquivo
console.log('Nome do arquivo:', path.basename(__filename));

//pegar a extensão de um arquivo
console.log('Extensão do arquivo:', path.extname(__filename));

// Criar um arquivo no diretório do arquivo atual
fs.writeFile(path.join(__dirname, 'message.txt'), 'Welcome to FSC!', () => {});

