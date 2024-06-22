const Propietario = require('../models/propietario');
const propietarioCtrl = {}

/**
 * Obtiene todos los propietarios
 */
propietarioCtrl.getPropietarios = async (req, res) => {
    var propietarios = await Propietario.find();
    res.json(propietarios);
}

/**
 * Da de alta un propietario
 */

propietarioCtrl.createPropietario = async (req, res) => {
    var propietario = new Propietario(req.body);
    try{
        await propietario.save();
        res.json({
            'status': '1',
            'msg': 'Propietario creado correctamente.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear el propietario.'
        })
    }
}

/**
 * Obtiene un propietario por su id
 */

propietarioCtrl.getPropietario = async (req, res) => {
    var propietario = await Propietario.findById(req.params.id);
    res.json(propietario);
}

/**
 * Edita un propietario
 */
propietarioCtrl.editPropietario = async (req, res) => {
    var vpropietario = new Propietario(req.body);
    try{
        await Propietario.updateOne({_id: req.body._id}, vpropietario);
        res.json({
            'status': '1',
            'msg': 'Propietario modificado.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al modificar el propietario.'
        })
    }
}

/**
 * Elimina un propietario
 */
propietarioCtrl.deletePropietario = async (req, res) => {
    try{
        await Propietario.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Propietario eliminado.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el propietario.'
        })
    }
}

module.exports = propietarioCtrl;