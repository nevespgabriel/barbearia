let proximoId = 1;

module.exports = (body, id=proximoId) => {
    if(body.email != undefined &&
       body.email != "" &&
       body.senha != undefined &&
       body.senha != "" 
    ){
        return {
            id: id,
            email: body.email,
            senha: body.senha
        }
    }
}