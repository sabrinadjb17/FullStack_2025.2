// let tituto = document.getElementById('titulo').innerHTML; //printa o html referente ao id
// console.log(tituto);

// document.getElementById('nome').innerHTML = 'Sabrina'; //inner html muda o valor onde está o id

function exibeMensagem(){
    console.log('Exemplo de mensagem')
}


function exibeMensagemComParametro(texto){
    console.log(texto);
}
exibeMensagem();
exibeMensagem();
exibeMensagem();
exibeMensagemComParametro('texto 1');
exibeMensagemComParametro('texto 2');
exibeMensagemComParametro('texto 3');

function soma(a, b){
    let c = a + b;
    return c
}

function mult(a, b){
    let c = a * b;
    return c
}
console.log("A soma de " + 2 + " mais " + 6 + " é igual a " + soma(2,6));
console.log("A soma de " + 7 + " mais " + 9 + " é igual a " + soma(7,9));
console.log("A soma de " + 3 + " mais " + 8 + " é igual a " + soma(3,8));



function imprimeTexto(){
    let texto = document.getElementById("in_text").value;
    console.log(texto)
}

// exercicio 2
function imprimeIncrementos(){
    let x = parseInt(document.getElementById("in_e2").value)

    document.getElementById("resposta_e2").innerHTML = "";
    for (let i = 0; i < x; i += 1){
        console.log(i);
        let resposta = document.getElementById("resposta_e2").innerHTML + " " + i
        document.getElementById("resposta_e2").innerHTML = resposta;
    }
}

//exercicio 3
function imprimeSoma(){
    let a = parseInt(document.getElementById("in_1_e3").value);
    let b = parseInt(document.getElementById("in_2_e3").value);

    let c = soma(a, b);
    document.getElementById("resposta_e3").innerHTML = c;
}

//exemplo 4
function imprimeCalculo(){
    let a = parseInt(document.getElementById("in_1_e4").value);
    let b = parseInt(document.getElementById("in_2_e4").value);

    let c = 0
    if (a < 0 || b < 0){
            c = soma(a, b);
    } else{
            c = mult( a, b);
    }

    document.getElementById("resposta_e4").innerHTML = c;
}
