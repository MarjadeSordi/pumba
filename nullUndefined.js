let valor //não inicializada
console.log(valor)
//console.log(valor2)//i'ts not defined - significa que ele não foi declarado != de Undefined 

valor=null // ausência de valor
console.log(valor)
//console.log(valor.toString())//o nulo não tem referência para o to.string 

const prod ={}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.40
console.log(prod)

prod.preco = undefined // evite atribui de forma explícita o undefined 
console.log(!!prod.preco)
//delete prod.preco para retirar o undefined 
console.log (prod)

prod.preco=null // sem preço
console.log (!!prod.preco)
console.log(prod)