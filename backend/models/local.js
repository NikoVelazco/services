const mongoose = require('mongoose');
const {Schema} = mongoose;

const LocalSchema = new Schema({
    nombreLocal: {type: String, required: true},
    superficie: {type: String, required: true},
    habilitado: {type: Boolean, required: true},
    costoMes: {type: Number, required: true},
    pathimagen: {type: String, required: true},
    alquilado: {type: Boolean, required: true}
})

module.exports = mongoose.models.Local || mongoose.model('Local', LocalSchema);