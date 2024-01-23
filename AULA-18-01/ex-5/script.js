/*5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio. */


function eNumeroPerfeito(numero) {
  if (numero <= 1) {
    return false;
  }

  let somaDivisores = 1;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }

  return somaDivisores === numero;
}

console.log(eNumeroPerfeito(numeroExemplo)); 
