const express = require("express")
const cliente_controller = require("./controllers/cliente.js");
const usuario_controller = require("./controllers/usuario.js");
const rede_controller = require("./controllers/rede.js");
const barbearia_controller = require("./controllers/barbearia.js");
const servico_controller = require("./controllers/servico.js");
const cep_endereco = require("./middlewares/cep_endereco.js");

const porta = 6000;
const app = express();
app.use(express.json());
//app.use(cep_endereco);

app.post("/cliente", (req, res) => {
    const body = req.body;
    const code = cliente_controller.store(body);
    res.status(code).json();
});

app.get("/cliente", (req, res) => {
    const clientes = cliente_controller.index();
    res.json(clientes);
})

app.get("/cliente/:id", (req, res) => {
    const cliente = cliente_controller.show(req.params.id);
    res.json(cliente);
});

app.put("/cliente/:id", (req, res) => {
    const body = req.body;
    const code = cliente_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/cliente/:id", (req,res) => {
    cliente_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/usuario", (req, res) => {
    const body = req.body;
    const code = usuario_controller.store(body);
    res.status(code).json();
});

app.get("/usuario", (req, res) => {
    const usuarios = usuario_controller.index();
    res.json(usuarios);
})

app.get("/usuario/:id", (req, res) => {
    const usuario = usuario_controller.show(req.params.id);
    res.json(usuario);
});

app.put("/usuario/:id", (req, res) => {
    const body = req.body;
    const code = usuario_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/usuario/:id", (req,res) => {
    usuario_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/rede", (req, res) => {
    const body = req.body;
    const code = rede_controller.store(body);
    res.status(code).json();
});

app.get("/rede", (req, res) => {
    const redes = rede_controller.index();
    res.json(redes);
})

app.get("/rede/:id", (req, res) => {
    const rede = rede_controller.show(req.params.id);
    res.json(rede);
});

app.put("/rede/:id", (req, res) => {
    const body = req.body;
    const code = rede_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/rede/:id", (req,res) => {
    rede_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/barbearia", cep_endereco, (req, res) => {
    //const body = req.body;
    //const code = barbearia_controller.store(body);
    //res.status(code).json();
    res.json(req.body);
});

app.get("/barbearia", (req, res) => {
    const barbearias = barbearia_controller.index();
    res.json(barbearias);
})

app.get("/barbearia/:id", (req, res) => {
    const barbearia = barbearia_controller.show(req.params.id);
    res.json(barbearia);
});

app.put("/barbearia/:id", (req, res) => {
    const body = req.body;
    const code = barbearia_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/barbearia/:id", (req,res) => {
    barbearia_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/barbeiro", (req, res) => {
    const body = req.body;
    const code = barbeiro_controller.store(body);
    res.status(code).json();
});

app.get("/barbeiro", (req, res) => {
    const barbeiros = barbeiro_controller.index();
    res.json(barbeiros);
})

app.get("/barbeiro/:id", (req, res) => {
    const barbeiro = barbeiro_controller.show(req.params.id);
    res.json(barbeiro);
});

app.put("/barbeiro/:id", (req, res) => {
    const body = req.body;
    const code = barbeiro_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/barbeiro/:id", (req,res) => {
    barbeiro_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/servico", (req, res) => {
    const body = req.body;
    const code = servico_controller.store(body);
    res.status(code).json();
});

app.get("/servico", (req, res) => {
    const servicos = servico_controller.index();
    res.json(servicos);
})

app.get("/servico/:id", (req, res) => {
    const servico = servico_controller.show(req.params.id);
    res.json(servico);
});

app.put("/servico/:id", (req, res) => {
    const body = req.body;
    const code = servico_controller.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/servico/:id", (req,res) => {
    servico_controller.destroy(req.params.id);
    res.json();
})

//========================================================================

app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})