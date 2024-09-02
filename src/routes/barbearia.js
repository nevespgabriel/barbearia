const express = require("express");
const router = express.Router();
const barbearia_controller = require("../controllers/barbearia.js");

router.post("/barbearia", cep_endereco, (req, res) => {
  const body = req.body;
  const code = barbearia_controller.store(body);
  res.status(code).json();
  res.json(req.body);
});

router.get("/barbearia", (req, res) => {
  const barbearias = barbearia_controller.index();
  res.json(barbearias);
});

router.get("/barbearia/:id", (req, res) => {
  const barbearia = barbearia_controller.show(req.params.id);
  res.json(barbearia);
});

router.put("/barbearia/:id", cep_endereco, (req, res) => {
  const body = req.body;
  const code = barbearia_controller.update(body, req.params.id);
  res.status(code).json();
});

router.delete("/barbearia/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
