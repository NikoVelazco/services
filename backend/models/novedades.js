const mongoose = require('mongoose');
const Usuario = require('./../models/usuario');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    usuario: {type: Schema.Types.ObjectId, ref: Usuario, required: true},
    texto: {type: String, required: true},
    estado: {type: String, required: true}
})

module.exports = mongoose.models.Novedad || mongoose.model('Novedad', NovedadSchema);