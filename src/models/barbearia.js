let proximoId = 1;
const rede = require("../controllers/rede.js");

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.fotos != undefined &&
       body.fotos.length > 0 &&
       body.fotos.every(el => el != "") &&
       body.endereco.cep != undefined &&
       body.endereco.cep != "" &&
       body.endereco.cep != undefined &&
       body.endereco.cep != "" &&
       body.endereco.logradouro != undefined &&
       body.endereco.logradouro != "" &&
       body.endereco.bairro != undefined &&
       body.endereco.bairro != "" &&
       body.endereco.numero > 0 &&
       !isNaN(body.endereco.numero) &&
       !isNaN(body.coordenadas.latitude) &&
       !isNaN(body.coordenadas.longitude) &&
       rede.show(body.idRede)
    ){
        if(body.complemento == undefined){
            body.complemento = "";
        }
        return {
            id: id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            coordenadas: body.coordenadas,
            complemento: body.complemento,
            rede: body.idRede
        }
    }
}