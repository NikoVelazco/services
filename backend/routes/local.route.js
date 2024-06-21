const localCtrl = require('./../controllers/local.controller');

const express = require('express');

const router = express.Router();

router.get('/', localCtrl.getLocales);

router.get('/:id', localCtrl.getLocal);

router.post('/', localCtrl.createLocal);

router.put('/:id', localCtrl.editLocal);

router.delete('/:id', localCtrl.deleteLocal);

module.exports = router;