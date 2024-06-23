const Alquiler = require('./../models/alquiler');

const alquilerCtrl = {}

/**
 * Obtiene todos los alquileres
 */

alquilerCtrl.getAlquileres = async (req, res) => {
    var alquileres = await Alquiler.find();
    res.json(alquileres);
}

/**
 * Da de alta un alquiler
 */

alquilerCtrl.createAlquiler = async (req, res) => {
    var alquiler = new Alquiler(req.body);
    try{
        await alquiler.save();
        res.json({
            'status': '1',
            'msg': 'Alquiler creado'});
    }catch(error){
        res.status(400).json({
            'status' : '0',
            'msg': 'Error al crear el Alquiler'});
    }
}

/**
 * Obtiene un alquiler por su id
 */

alquilerCtrl.getAlquiler = async (req, res) => {
    var alquiler = await Alquiler.findById(req.params.id);
    res.json(alquiler);
}

/**
 * Edita un alquiler
 */

alquilerCtrl.editAlquiler = async (req, res) => {
    var valquiler = new Alquiler(req.body);
    try{
        await Alquiler.updateOne({_id: req.body._id}, valquiler);
        res.json({
            'status': '1',
            'msg': 'Alquiler modificado.'
        })
    }catch(error){
        res.status(400).json({
            'status' : '0',
            'msg': 'Error al modificar el alquiler.'
        })
    }
}

/**
 * Elimina un alquiler
 */

alquilerCtrl.deleteAlquiler = async (req, res) => {
    try{
        await Alquiler.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Alquiler eliminado.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el alquiler.'
        })
    }
}

module.exports = alquilerCtrl;