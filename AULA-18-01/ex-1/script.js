/*User
Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2) */

let nota1= Number(prompt("Digite a primeira nota"))
let nota2= Number(prompt("Digite a segunda nota"))
let nota3= Number(prompt("Digite a terceira nota"))
let letra =prompt("Digite a letra A ou B")


function calcularMedia ( nota1, nota2, nota3, letra){
    if(letra == "A"){
        let mediaA = ( nota1 + nota2 + nota3) / 3
        console.log(mediaA)
    }else if(letra === "B"){
       let mediaB = ( nota1 * 5+ nota2 * 3 + nota3 * 2) / 10
       console.log(mediaB)
    } else {
      alert("Invalido")
    }
   
}
calcularMedia(nota1, nota2, nota3, letra)