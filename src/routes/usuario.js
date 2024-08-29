const express = require("express");
const router = express.Router();
const usuario_controller = require("../controllers/usuario.js");

router.post("/", (req, res) => {
    const body = req.body;
    const code = usuario_controller.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const usuarios = usuario_controller.index();
    res.json(usuarios);
})

router.get("/:id", (req, res) => {
    const usuario = usuario_controller.show(req.params.id);
    res.json(usuario);
});

router.put("/:id", (req, res) => {
    const body = req.body;
    const code = usuario_controller.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    usuario_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;