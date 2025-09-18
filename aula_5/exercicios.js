// 1) Desenvolver um algoritmo em JavaScript que exiba os números ímpares de 1 a 100

// let i = 1;
// while(i < 100){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i += 1;
// }

// for(let i = 1; i < 100; i += 1) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }


// 2) Faça um programa para imprimir os múltiplos de 5, no intervalo de 1 até 500

// let i = 1;
// while(i < 500){
//     if(i % 5 === 0){
//         console.log(i);
//     }
//     i += 1;
// }

// for(let i = 0; i < 500; i += 1) {
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// 3) Faça um programa em JavaScript que leia um número inteiro positivo e mostre todos os números a partir dele até zero (decrescente).  

// let numero = prompt("Digite um número: ")
// numero = parseInt(numero);
// if(numero > 0){
//     for(i = 0; i <= numero; i += 1){
//         console.log(numero - i);
//     }
// }

// let num = prompt("Digite um número: ")
// num = parseInt(num);
// if(num > 0){
//     i = 0;
//     while(i <= num){
//         console.log(num - i);
//         i += 1;
//     }
// }

// 4) Desenvolver um algoritmo em JavaScript que exibe o resultado do fatorial de um número inteiro informado pelo usuário

// let num = prompt("Digite um número: ");
// num = parseInt(num);
// let total = 1;
// for(let i = 1; i <= num; i += 1){
//     total *= i;
// }
// console.log(total)

// let num = prompt("Digite um núemro: ")
// num = parseInt(num);
// let total = 1;
// let i = 1;
// while( i <= num){
//     total *= i;
//     i += 1;
// }
// console.log(total)

// 5)Foi realizada uma pesquisa entre os habitantes de uma dada região. Foram recolhidos os dados de idade, sexo (M/F) e salário. Construa um programa em JavaScript que informe:
// a - a média de salário do grupo; 
// b - maior e menor idade do grupo; 
// c - quantidade de mulheres com salário até R$5000,00. 
// Encerre a entrada de dados quando for digitada uma idade negativa.


let qtd_entradas = 0;
let qtd_mulheres = 0;
let idade;
let sexo;
let salario;
idade = parseInt(idade);
while(true){
    idade = parseInt(prompt("Digite a sua idade: "));
    if (idade < 0){break;
    sexo = prompt("Digite o seu sexo: (M/F)");
    salario = parseInt(prompt("Digite o seu salário: "));
    } 
}



