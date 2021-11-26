const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    numero_turno: {
        type: Number,
        required: [
            true,
            'Falta el turno'
        ],
    },
    consultorio: {
        type: String,
        maxlength: 100,
        required: [
            true,
            'Falta el consultorio'
        ],
    },
    medico: {
        type: String,
        maxlength: 150,
        required: [
            true,
            'Falta el medico'
        ],
    },
    direccion: {
        type: String,
        maxlength: 300,
        required: [
            false,
        ],
    },
    telefono: {
        type: String,
        maxlength: 100,
        required: [
            false,
        ],
    },
    prioridad: {
        type: String,
        maxlength: 50,
        required: [
            true,
            'Falta la prioridad'
        ],
    },
}, {collection: 'consulta'});

module.exports = mongoose.model('consulta', eventSchema);
