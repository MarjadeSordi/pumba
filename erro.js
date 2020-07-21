function tratarErroeLancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.mensagem, 
        data: new Date
    }
}

function imprimirNomeGritando (obj) {
try {
    console.log(obj.name.toUppercase() + "!!!")
} catch (e){
    tratarErroeLancar(e)
    } finally {
    console.log('final')
    }
}
const obj = { nome: "Roberto"}
imprimirNomeGritando(obj)