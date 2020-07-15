//Armazenando um valor em uma variável
const ImprimirSoma = function (a,b) {
    console.log(a+b)
}

ImprimirSoma(2,4)

//Armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
}

console.log (soma(2,4))

//retorno implicito

const subtracao = (a,b) => a - b
console.log (subtracao (2,4))

const Imprimir2 = a => console.log(a)
Imprimir2('Marja')