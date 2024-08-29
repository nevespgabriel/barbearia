let proximoId = 1;

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.foto != undefined &&
       body.foto != "" &&
       body.bio != undefined &&
       body.bio != "" &&
       barbearia.show(body.idBarbearia)
    ){
        return {
            id: id,
            nome: body.nome,
            foto: body.foto,
            bio: body.bio,
            idBarbearia: body.idBarbearia
        }
    }
}