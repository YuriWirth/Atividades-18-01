

let tempoEmSegundos = Number(prompt("Digite um valor de tempo"))

function tempo(tempoEmSegundos){
    let tempoEmMinutos = parseInt((tempoEmSegundos % 3600) / 60 ) ;
    let tempoEmHoras = parseInt(tempoEmSegundos / 3600 ) ;
    let segundos = tempoEmSegundos % 60 ;
   
    console.log(tempoEmHoras, ":", tempoEmMinutos, ":", segundos);

}
tempo(tempoEmSegundos);