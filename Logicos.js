function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //Operadores do tipo curto circuito - Analisando a primeira variável já é possível dar o resultado
    const comprarTV50 = trabalho1 && trabalho2 
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //Operador bitwase XOU
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //Operador unário

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}


}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))
console.log(compras(false,true))