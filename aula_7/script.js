let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); //o d sempre tem q ser minusculo!!!

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();
	
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();


// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150); //move sem tocar no quadro
ctx.lineTo(60,10); //move traçando a linha 
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI); //2 primeiros numeros, depois a altura e a circunferencia contando os pi, (um circulo interio vai ter 2pi)
//1.5 pi é onde começa e 2.5 onde ele termina, contando de meio em meio
ctx.fill();
ctx.stroke();
ctx.closePath();


// texto
ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial" //tamanho e font usadas 
ctx.textAlign = "center";
ctx.fillText("Olá",200,350); // borda na frente e preenchimento atras, ao contrário é só mudar a ordem.
ctx.strokeText("Olá",205,350)
ctx.closePath();



//exercicio 01
let canvas2 = document.getElementById('canvas_2')
let ctx2 = canvas2.getContext('2d')

//QUADRADOS

//q vermelho
ctx2.beginPath();
ctx.lineWidth = 2; //largura da borda/linha
ctx2.strokeStyle = 'red'; //cria a borda
ctx2.fillStyle = 'red';
ctx2.strokeRect(0,0,50,50); 
ctx2.fillRect(0,0,50,50);
ctx2.closePath();
//q azul
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.closePath();
//q amarelo
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.closePath();
//q verde
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);
ctx2.closePath();


//LINHAS
//linha vermelha 
ctx2.beginPath();
ctx2.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx2.moveTo(400,400);
ctx2.lineTo(0,0);
ctx2.stroke();
ctx2.closePath();
//linha azul
ctx2.beginPath();
ctx2.strokeStyle = 'blue';
ctx2.lineWidth = 2;
ctx2.moveTo(400, 0);
ctx2.lineTo(0,400);
ctx2.stroke();
ctx2.closePath();
//linha verde
ctx2.beginPath();
ctx2.strokeStyle = 'green';
ctx2.lineWidth = 2;
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

//CIRCULOS
//meio circulo verde
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,100,2.0*Math.PI,3.0*Math.PI); //dois primeiros numeros são as coordenadas, o terceiro numero é o tamanhodo circulo.
ctx2.stroke();
ctx2.closePath();
