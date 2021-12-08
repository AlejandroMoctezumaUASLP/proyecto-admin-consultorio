const mongoose = require('mongoose');

/**
 * Schema del Médico.
 * 
 * @constructor medico
 * @property {String} especialidad Especialidad del médico.
 * @property {String} telefono Teléfono del médico.
 * @property {String} nombre Nombre del médico.
 */
const eventSchema = mongoose.Schema({
    especialidad: {
        type: String,
        maxlength: 200,
        required: [
            false,
            'Falta la especialidad'
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
}, {collection: 'Medicos'});

//module.exports.medicoSchema = eventSchema;

const Medico = mongoose.model('Medico', eventSchema);
module.exports.Medico = Medico;
module.exports.medicoSchema = eventSchema;