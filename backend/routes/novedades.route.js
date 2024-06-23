const novedadCtrl = require('./../controllers/novedades.controller');

const express = require('express');

const router = express.Router();

router.get('/', novedadCtrl.getNovedades);

router.get('/:id', novedadCtrl.getNovedad);

router.post('/', novedadCtrl.createNovedad);

router.put('/:id', novedadCtrl.editNovedad);

router.delete('/:id', novedadCtrl.deleteNovedad);

module.exports = router;