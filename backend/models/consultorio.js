const mongoose = require('mongoose');
//const { medicoSchema } = require('./medico');

/**
 * Schema del Consultorio.
 * 
 * @constructor consultorio
 * @property {String} direccion Dirección del consultorio.
 * @property {String} telefono Teléfono del consultorio.
 * @property {String} nombre Nombre del consultorio.
 * @property {Array} medicos Arreglo con los IDs de los médicos del consultorio.
 * @property {Number} capacidad Capacidad máxima dentro del consultorio.
 */
const eventSchema = mongoose.Schema({
    direccion: {
        type: String,
        maxlength: 200,
        required: [
            true,
            'Falta la direccion'
        ],
    },
    telefono: {
        type: String,
        maxlength: 50,
        required: [
            false,
            'Falta el telefono'
        ],
    },
    nombre: {
        type: String,
        maxlength: 200,
        required: [
            true,
            'Falta el nombre'
        ],
    },
    medicos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medico"
    }],
    capacidad: {
        type: Number,
        required: [
            true,
            'Falta la capacidad'
        ],
    },

}, {collection: 'Consultorios'});

//module.exports.consultorioSchema = eventSchema;

const Consultorio = mongoose.model('Consultorio', eventSchema);
module.exports.Consultorio = Consultorio;
module.exports.consultorioSchema = eventSchema;
