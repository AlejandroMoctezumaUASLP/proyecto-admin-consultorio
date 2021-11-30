const mongoose = require('mongoose');

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