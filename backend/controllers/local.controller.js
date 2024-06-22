const Local = require('../models/local');
const localCtrl = {}

/**
 * Obtiene todos los locales
 */
localCtrl.getLocales = async (req, res) => {
    var locales = await Local.find();
    res.json(locales);
}

/**
 * Da de alta un local
 */
localCtrl.createLocal = async (req, res) => {
    var local = new Local(req.body);
    try{
        await local.save();
        res.json({
        'status': '1',
        'msg': 'Local creado.'})
    }catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear el local.'
        })
    }
}

/**
 * Obtiene un local por ID
 */
localCtrl.getLocal = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
}

/**
 * Modifica un local
 */
localCtrl.editLocal = async (req, res) => {
    const vlocal = new Local(req.body);
    try{
        await Local.updateOne({_id: req.body._id}, vlocal);
        res.json({
           'status': '1',
           'msg': 'Local modificado.'
        })
    } catch (error) {
        res.status(400).json({
           'status': '0',
           'msg': 'Error al modificar el local.'
        })
    }
}

/**
 * Elimina un local
 */
 localCtrl.deleteLocal = async (req, res) => {
    try{
        await Local.deleteOne({_id: req.params.id});
        res.json({
           status: '1',
           msg: 'Local eliminado.'
        })
    } catch (error) {
        res.status(400).json({
           'status': '0',
           'msg': 'Error al eliminar el local.'
        })
    }
}

module.exports = localCtrl;