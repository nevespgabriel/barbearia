const express = require("express");
const router = express.Router();
const atendimento_controller = require("../controllers/atendimento.js");

router.post("/atendimento", (req, res) => {
    const body = req.body;
    const code = atendimento_controller.store(body);
    res.status(code).json();
});

router.get("/atendimento", (req, res) => {
    const atendimentos = atendimento_controller.index();
    res.json(atendimentos);
})

router.get("/atendimento/:id", (req, res) => {
    const atendimento = atendimento_controller.show(req.params.id);
    res.json(atendimento);
});

router.put("/atendimento/:id", (req, res) => {
    const body = req.body;
    const code = atendimento_controller.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/atendimento/:id", (req,res) => {
    atendimento_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;