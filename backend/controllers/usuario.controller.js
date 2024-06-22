const Usuario = require('../models/usuario');
const usuarioCtrl = {}

/**
 * Obtiene todos los usuarios
 */

usuarioCtrl.getUsuarios = async (req, res) => {
    var usuarios = await Usuario.find();
    res.json(usuarios);
}

/**
 * Da de alta un usuario
 */

usuarioCtrl.createUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try{
        await usuario.save();
        res.json({
            'status': '1',
            'msg': 'Usuario creado correctamente.'
        })
    }catch(err){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear el usuario.'
        })
    }
}

/**
 * Da de baja un usuario
 */
usuarioCtrl.deleteUsuario = async (req, res) => {
    try{
        await Usuario.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Usuario eliminado correctamente.'
        })
    }catch(err){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el usuario.'
        })
    }
}

/**
 * Actualiza un usuario
 */
usuarioCtrl.editUsuario = async (req, res) => {
    const vusuario = new Usuario(req.body);
    try{
        await Usuario.updateOne({_id: req.params.id}, vusuario);
        res.json({
            'status': '1',
            'msg': 'Usuario actualizado correctamente.'
        })
    }catch(err){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar el usuario.'
        })
    }
}

/**
 * Obtiene un usuario
 */

usuarioCtrl.getUsuario = async (req, res) => {
    var usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

module.exports = usuarioCtrl;

/**
 * ACA AGREGO ALGO
 */