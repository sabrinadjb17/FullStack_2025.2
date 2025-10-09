let idades = [18, 20] //mostra que tem um array no console e seus valores, também fornece a idexação
console.log(idades);

idades.push(25) //adiciona no final
console.log(idades);

let idade = idades.pop(); //tira o último valor
console.log(idade);
console.log(idades);

delete idades[0]; //apaga o calor da posição de idexação, o espaço em que ela estava continua lá
console.log(idades);
//outras operações com vetores no w3school


//orientação a objetos
//carro01
let carro_1 = {
    posicao: 0,
    cor: 'red', //atributos
    modelo: 'Corola',
    buzina: function(){
        console.log('bii bii');
    },
    andar: function(qtd){
        this.posicao += qtd //usa-se o this para relacionar ao atributo
    }
}

carro_1.buzina(); //imprime o valor da função ou METÓDO 

console.log('Posição atual: ' + carro_1.posicao);
carro_1.andar(3);
console.log('Posição atual: ' + carro_1.posicao);





//carro02
let carro_2 = {
    posicao: 0,
    cor: 'blue', //atributos
    modelo: 'Fusca',
    buzina: function(){
        console.log('fom fom');
    },
    andar: function(qtd){
        this.posicao += qtd //usa-se o this para relacionar ao atributo
    }
};

let carros = [carro_1, carro_2] //não tá aparecendo o nome do carro antes
for (let i = 0; i < carros.length; i++){ //length pega o tamanho
    let carro = carros[i];
    console.log(carro.modelo);
    carro.buzina()
}

//EXEMPLO1
//retangulo
let retangulo_1 = {
    lw: 2,
    cor_preenchimento: 'blue',
    cor_linha: 'red',
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.tw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
retangulo_1.desenha();

// retangulo_1.x  = 340;
// retangulo_1.y = 340;
// retangulo_1.cor_preenchimento = 'green';
retangulo_1.desenha();




let retangulo_2 = {
    lw: 2,
    cor_preenchimento: 'green',
    cor_linha: 'red',
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.tw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
};

retangulo_2.desenha();

//Colocar imagem
let imagem = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'ball.webp';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
};



//ANIMAÇÕES 
let aux = 1
function animacao(){ //função que desenha os dois quadrados 
    ctx.clearRect(0, 0, 400, 400);
    if (retangulo_1.x == 350){
        aux = -1;
    } 
    else if(retangulo_1.x == 0){
        aux = 1;
    }

    retangulo_1.x += aux;
    retangulo_1.desenha();
    retangulo_2.desenha();
    imagem.desenha();

    requestAnimationFrame(animacao);
};
animacao();


//PEGA VALORES PELO TECLADO/ inputs do teclado
document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let vel = 10 // velocidade
    if(tecla == 'ArrowUp'){ // sobe o quadrado
        retangulo_1.y -= vel;
    }

    if(tecla == 'ArrowDown'){ // desce o quadrado
        retangulo_1.y += vel;
    }

    if(tecla == 'ArrowLeft'){ // vai para direita
        retangulo_1.y -= vel;
    }

    if(tecla == 'ArrowRight'){ // vai para esquerda
        retangulo_1.y += vel;
    }
});


//PEGAR OS VALORES PELO MOUSE
document.addEventListener('mousemove', function(evento){
    let rect = canvas. getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    retangulo_2.x = x_mouse;
    retangulo_2.y = y_mouse;
});
