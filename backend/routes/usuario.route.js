const usuarioCtrl = require('./../controllers/usuario.controller');

const express = require('express');

const router = express.Router();

router.get('/', usuarioCtrl.getUsuarios);

router.get('/:id', usuarioCtrl.getUsuario);

router.post('/', usuarioCtrl.createUsuario);

router.put('/:id', usuarioCtrl.editUsuario);

module.exports = router;