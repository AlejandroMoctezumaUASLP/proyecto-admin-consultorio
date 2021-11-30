const mongoose = require('mongoose');

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
}, {collection: 'paciente'});

module.exports = mongoose.model('paciente', eventSchema);