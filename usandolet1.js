let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)//diferentemente do var, o LET tem escopo dentro de blocos
}
console.log('fora =',numero)