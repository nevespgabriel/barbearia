let proximoId = 1;

module.exports = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.telefone != undefined &&
       body.telefone != "" &&
       body.email != undefined &&
       body.email != "" &&
       body.email.includes("@") &&
       body.senha != undefined &&
       body.senha != "" 
    ){
        return {
            id: id,
            nome: body.nome,
            telefone: body.telefone,
            email: body.email,
            senha: body.senha
        }
    }
}