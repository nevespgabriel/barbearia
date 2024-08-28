const db = [];
let proximoId = 1;
const barbearia = require("./barbearia.js");

const model = (body, id=proximoId) => {
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