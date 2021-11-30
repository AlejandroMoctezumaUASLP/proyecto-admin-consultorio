const mongoose = require('mongoose');
// const { consultorioSchema } = require('./consultorio');
// const { medicoSchema } = require('./medico');
// const { pacienteSchema } = require('./paciente');

const eventSchema = mongoose.Schema({
    numero_turno: {
        type: Number,
        required: [
            true,
            'Falta el turno'
        ],
    },
    consultorio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consultorio"
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medico"
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
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Paciente"
    }
}, {collection: 'Consultas'});

//module.exports = mongoose.model('consulta', eventSchema);

const Consulta = mongoose.model('Consulta', eventSchema);
module.exports.Consulta = Consulta;
module.exports.consultaSchema = eventSchema;
