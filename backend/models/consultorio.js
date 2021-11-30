const mongoose = require('mongoose');
//const { medicoSchema } = require('./medico');

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
