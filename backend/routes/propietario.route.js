const propietarioCtrl = require('./../controllers/propietario.controller');

const express = require('express');

const router = express.Router();

router.get('/', propietarioCtrl.getPropietarios);

router.get('/:id', propietarioCtrl.getPropietario);

router.post('/', propietarioCtrl.createPropietario);

router.put('/:id', propietarioCtrl.editPropietario);

router.delete('/:id', propietarioCtrl.deletePropietario);

module.exports = router;