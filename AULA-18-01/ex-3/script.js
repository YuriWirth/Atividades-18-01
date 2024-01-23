
let numeroInteiro = Number(prompt("Digite um número inteiro e positivo"))
let numeroPrimo = 0

function primo (numeroInteiro) {
     for(let i = 1; i <= numeroInteiro; i++){
        if(numeroInteiro % i == 0){
             numeroPrimo ++;
          
        }
     }
     if(numeroPrimo == 2){
        console.log(true)
     }else{
       console.log(false)
     }
}
primo(numeroInteiro)