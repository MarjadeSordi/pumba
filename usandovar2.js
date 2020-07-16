var numero = 1 // escopo global ~ FUJA!
{
    var numero = 2
    console.log('dentro =',numero)//não tem escopo dentro de blocos, apenas se declarado uma function
}
console.log('fora =',numero)

