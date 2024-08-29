let proximoId = 1;
const usuario = require("../controllers/usuario.js");

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       usuario.show(body.idUsuario)
    ){
        return {
            id: id,
            nome: body.nome,
            idUsuario: body.idUsuario
        }
    }
}