const express = require("express");
const router = express.Router();
const servico_controller = require("../controllers/servico.js");

router.post("/servico", (req, res) => {
  const body = req.body;
  const code = servico_controller.store(body);
  res.status(code).json();
});

router.get("/servico", (req, res) => {
  const servicos = servico_controller.index();
  res.json(servicos);
});

router.get("/servico/:id", (req, res) => {
  const servico = servico_controller.show(req.params.id);
  res.json(servico);
});

router.put("/servico/:id", (req, res) => {
  const body = req.body;
  const code = servico_controller.update(body, req.params.id);
  res.status(code).json();
});

router.delete("/servico/:id", (req, res) => {
  servico_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
