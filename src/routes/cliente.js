const express = require("express");
const router = express.Router();
const cliente_controller = require("../controllers/cliente.js");

router.post("/cliente", (req, res) => {
  const body = req.body;
  const code = cliente_controller.store(body);
  res.status(code).json();
});

router.get("/cliente", (req, res) => {
  const clientes = cliente_controller.index();
  res.json(clientes);
});

router.get("/cliente/:id", (req, res) => {
  const cliente = cliente_controller.show(req.params.id);
  res.json(cliente);
});

router.put("/cliente/:id", (req, res) => {
  const body = req.body;
  const code = cliente_controller.update(body, req.params.id);
  res.status(code).json();
});

router.delete("/cliente/:id", (req, res) => {
  cliente_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
