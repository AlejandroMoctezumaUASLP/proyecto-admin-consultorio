const mongoose = require('mongoose');

/**
 * Schema del Médico.
 * 
 * @constructor paciente
 * @property {String} telefono Teléfono del paciente.
 * @property {String} nombre Nombre del paciente.
 * @property {Number} edad Edad del paciente.
 */
const eventSchema = mongoose.Schema({
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
    edad: {
        type: Number,
        required: [
            true,
            'Falta la edad'
        ],
    },
}, {collection: 'Pacientes'});

const Paciente = mongoose.model('Paciente', eventSchema);
module.exports.Paciente = Paciente;
module.exports.pacienteSchema = eventSchema;