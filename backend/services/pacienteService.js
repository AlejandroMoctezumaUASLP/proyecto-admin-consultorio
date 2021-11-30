//const mongoose = require('mongoose');
const { Paciente } = require('../models');

module.exports = {
    create: async (body) => new Paciente(body).save(),
    getById: async (id) => Paciente.findById(id),
    getAll: async () => Paciente.find({}),
    update: async (_id, body) => Paciente.findByIdAndUpdate(_id,body),
    delete: async (id) => Paciente.findByIdAndRemove(id)
}