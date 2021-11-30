const mongoose = require('mongoose');
const Medico = require('./medico');

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
    medicos: [ Medico ],
    capacidad: {
        type: Number,
        required: [
            true,
            'Falta la capacidad'
        ],
    },

}, {collection: 'consultorio'});

module.exports = mongoose.model('consultorio', eventSchema);
