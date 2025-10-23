// PACOTE COLORS
require("colors");

var http = require("http");
var express = require("express");

var app = express();
app.use(express.static("./public"));

var server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando ...".rainbow); //rainbow deixa colorido no terminal
// cd entra na pasta
// ls lista as pastas do arquivo
// ./ - ela mesma, ../- pasta anterior, usando o cd de entrar na pasta 
// clear  - limpa a tela do termianl
// npm install -- usado para baixar qualquer pacote 

// http://localhost:3000/ -- endereço da página do servidor, GET = metódo, / = ação
// localhost nome padrão para máquinas locais
// 127.0.0.1 -- meu endereço local onde acessa os servidores/ IP local

// ipconfing --  mostra o endereço de IP da máquina (Endereço IPv4), com esse ip é possível acessar outros servidor 

//arquivo .gitignore - colocar o nome da pasrta que deve ser ignorada no commit do github ex. node_modules/*