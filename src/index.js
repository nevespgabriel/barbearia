const express = require("express");
const cliente_router = require("./routes/cliente.js");
const rede_router = require("./routes/rede.js");
const barbearia_router = require("./routes/barbearia.js");
const servico_router = require("./routes/servico.js");
const usuario_router = require("./routes/usuario.js");
const atendimento_router = require("./routes/atendimento.js");
const barbeiro_router = require("./controllers/barbeiro.js");
const cep_endereco = require("./middlewares/cep_endereco.js");

const porta = 6000;
const app = express();
app.use(express.json());
app.use(cep_endereco);

app.use("/cliente", cliente_router);
app.use("/rede", rede_router);
app.use("/barbearia", barbearia_router);
app.use("/barbeiro", barbeiro_router);
app.use("/servico", servico_router);
app.use("/atendimento", atendimento_router);
app.use("/usuario", usuario_router);
app.listen(porta, () => {
  console.log(`Server running in ${porta} port.`);
});
