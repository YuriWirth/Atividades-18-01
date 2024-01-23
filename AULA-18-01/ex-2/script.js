/*Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */
let valor = Number(prompt("Escolha um número"));

function valorRetornado(valor){
      if(valor % 2 === 0){
        console.log("Seu", valor , "é falso")
      }else{
        console.log("Seu", valor , "é verdadeiro")

      }
}
valorRetornado(valor)
