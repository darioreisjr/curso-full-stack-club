const fs = require('fs');
const path = require('path');

//Criar uma pasta em um diretorio
fs.mkdir(path.join(__dirname, 'new-folder'), (error) => {
  console.log(error)
});

// Criar um arquivo nessa nova pasta
fs.writeFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'Hello from FSC!', (error) => {
  console.log(error)
})

//Adicionar conteudo a um arquivo
fs.appendFile(path.join(__dirname, 'new-folder', 'new-file.txt'), '\nHello again from FSC!', (error) => {
  console.log(error)
})

let fileContent = '';
//Ler um arquivo
fs.readFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'utf8', (error, data) => {
  fileContent = data;
  console.log('Conteudo do arquivo: ',fileContent);
})

