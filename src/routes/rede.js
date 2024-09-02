const express = require("express");
const router = express.Router();
const rede_controller = require("../controllers/rede.js");

router.post("/rede", (req, res) => {
  const body = req.body;
  const code = rede_controller.store(body);
  res.status(code).json();
});

router.get("/rede", (req, res) => {
  const redes = rede_controller.index();
  res.json(redes);
});

router.get("/rede/:id", (req, res) => {
  const rede = rede_controller.show(req.params.id);
  res.json(rede);
});

router.put("/rede/:id", (req, res) => {
  const body = req.body;
  const code = rede_controller.update(body, req.params.id);
  res.status(code).json();
});

router.delete("/rede/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
