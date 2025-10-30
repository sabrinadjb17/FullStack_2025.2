// PACOTE COLORS
require("colors");

var http = require("http");
var express = require("express");
let bodyParser = require("body-parser") //adicionado por conta do post ---- De forma simplificada, estas linhas dizem para o servidor que a informação recebida do site está inserida no corpo da página


var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false })); //adicionado por conta do post
app.use(bodyParser.json()); //adicionado por conta do post
app.set('view engine', 'ejs');//adicionado ejs
app.set('views', './views'); //adicionado ejs


var server = http.createServer(app);
server.listen(80);

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

// porta 80 é a padrão, não precisa colocar no endereço

// --------------------------------------------------------------------------------------------------------------------------------------------
// AULA 02
// Para rodar o servidor: node .\servidor.js --- se estiver dentro de varias pastas, colocar cd e o caminho para depois execultar o noe.

// função precisa de dois parametros requisição e reposta (que devolve ao cliente)
app.get('/', function(requisicao, resposta){ //qundo ele buscar o metodo get / (vai automaticamnete pro index.htmlvai dar um resposta ao usuário
 resposta.redirect('index.html'); //redireciona a pagina
}) 
// http://localhost/aula10.html -- roda no nagevador 
// rendirect - redireciona, render(sempre busca na pasta viwes) - renderiza o arquivo e envia para o cliente (usado para ejs)

// função para usar os inputs com o get 
app.get('/cadastrar', function(requisicao, resposta){ 
 console.log('Requisição recebida por get');

 let nome = requisicao.query.nome; //pega as informações que vem da requisição, query é o nome da barra de endereço tbm (url), utilizado apenas no get 
 let email = requisicao.query.email; //essas variaveis devem ser declaradas no input  do html 
 let telefone = requisicao.query.telefone; 
 let nascimento = requisicao.query.nascimento;
 console.log(nome, email, telefone, nascimento); //as informações vão aparecer no terminal dentro do servidor rodando...

 resposta.render('resposta.ejs', {metodo: "GET", nome, email, telefone, nascimento}); //entre chaver se adiciona a variavel e o valor dela :""
}) 



// função para usar os inputs com o post
app.post('/cadastrar', function(requisicao, resposta){ 
 console.log('Requisição recebida por post');

let nome = requisicao.body.nome; //modificação de 'query' para 'body' pois o post pega as informações do corpo da página 
 let email = requisicao.body.email; 
 let telefone = requisicao.body.telefone; 
 let nascimento = requisicao.body.nascimento;
 console.log(nome, email, telefone, nascimento); // apenas dessa forma dá erro, precisa ser incluidas outras linhas 

 resposta.render('resposta.ejs', {metodo: "POST", nome, email, telefone, nascimento});
}) 


//função para o uso do for 
app.get('/for', function(requisicao, resposta){
    let qtde = requisicao.query.qtde;
    console.log(qtde);
    resposta.render('for.ejs', {qtde})
})