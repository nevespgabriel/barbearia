const db = [];
let proximoId = 1;
const usuario = require("./usuario.js");

const model = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       usuario.show(idUsuario)
    ){
        return {
            id: id,
            nome: body.nome,
            idUsuario: body.idUsuario
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