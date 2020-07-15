//função sem retorno
function ImprimirSoma (a, b)
{console.log(a+b)}
ImprimirSoma (2,3)
ImprimirSoma (2)
ImprimirSoma (2,10,4,5,6) //ignora os números que não estão na função
ImprimirSoma ()

//função com retorno
function Soma (a,b = 1)
{return a + b}
console.log (Soma())
console.log (Soma(2,4))
console.log(Soma(2))
