const mongoose = require('mongoose');
const Consultorio = require('./consultorio');
const Medico = require('./medico');
const Paciente = require('./paciente');


const eventSchema = mongoose.Schema({
    numero_turno: {
        type: Number,
        required: [
            true,
            'Falta el turno'
        ],
    },
    consultorio: Consultorio,
    medico: Medico,
    direccion: {
        type: String,
        maxlength: 300,
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
    fecha: {
        type: String,
        maxlength: 100,
        required: [
            true,
            'Falta la fecha'
        ],
    },
    hora: {
        type: String,
        maxlength: 100,
        required: [
            true,
            'Falta la hora'
        ],
    },
    paciente: Paciente
}, {collection: 'consulta'});

module.exports = mongoose.model('consulta', eventSchema);
