const Novedad = require('./../models/novedades');

const novedadCtrl = {}

/**
 * Obtiene todas las novedades
 */

novedadCtrl.getNovedades = async (req, res) => {
    var novedades = await Novedad.find();
    res.json(novedades);
}

/**
 * Obtiene una novedad
 *
 */

novedadCtrl.getNovedad = async (req, res) => {
    var novedad = await Novedad.findById(req.params.id);
    res.json(novedad);
}

/**
 * Da de alta una novedad
 */

novedadCtrl.createNovedad = async (req, res) => {
    var novedad = new Novedad(req.body);
    try{
        await novedad.save();
        res.json({
            'status' : '1',
            'msg': 'Novedad creada'});
    }catch(error){
        res.status(400).json({
            'status' : '0',
            'msg': 'Error al crear la novedad'});
    }
}

/**
 * Da de baja una novedad
 */

novedadCtrl.deleteNovedad = async (req, res) => {
    try{
        await Novedad.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Novedad eliminada.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar la novedad.'
        })
    }
}

/**
 * Modifica una Novedad
 */
novedadCtrl.editNovedad = async (req, res) => {
    var vnovedad = new Novedad(req.body)
    try{
        await Novedad.updateOne({_id: req.params.id}, vnovedad);
        res.json({
            'status': '1',
            'msg': 'Novedad modificada.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al modificar la novedad.'
        })
    }
}

module.exports = novedadCtrl;