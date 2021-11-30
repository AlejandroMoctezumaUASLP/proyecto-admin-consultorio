const mongoose = require('mongoose');
const Paciente = require('../models/paciente');

module.exports = {
    create: (body) => new Paciente(body).save()
}