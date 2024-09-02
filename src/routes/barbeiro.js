const express = require("express");
const router = express.Router();
const barbeiro_controller = require("../controllers/barbeiro.js");

router.post("/barbeiro", (req, res) => {
  const body = req.body;
  const code = barbeiro_controller.store(body);
  res.status(code).json();
});

router.get("/barbeiro", (req, res) => {
  const barbeiros = barbeiro_controller.index();
  res.json(barbeiros);
});

router.get("/barbeiro/:id", (req, res) => {
  const barbeiro = barbeiro_controller.show(req.params.id);
  res.json(barbeiro);
});

router.put("/barbeiro/:id", (req, res) => {
  const body = req.body;
  const code = barbeiro_controller.update(body, req.params.id);
  res.status(code).json();
});

router.delete("/barbeiro/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
