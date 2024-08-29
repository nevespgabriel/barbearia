let proximoId = 1;
const barbeiro = require("../controllers/barbeiro.js");

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.preco > 0 &&
       !isNaN(body.preco) &&
       body.duracaoMinutos > 0 &&
       !isNaN(body.duracaoMinutos) &&
       barbeiro.show(body.idBarbeiro)
    ){
        return {
            id: id,
            nome: body.nome,
            preco: body.preco,
            duracaoMinutos: body.duracaoMinutos,
            idBarbeiro: body.idBarbeiro
        }
    }
}