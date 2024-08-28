const db = [];
let proximoId = 1;
const barbeiro = require("./barbeiro.js");

const model = (body, id=proximoId) => {
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

const store = (body) => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 200;
    }
    return 400;
}

const show = (id) => db.find((el) => el.id == id);

const index = () => db;

const update = (id) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));
    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400;
}

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);
    if(index != -1){
        db.splice(index, 1);
    }
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}