//const mongoose = require('mongoose');
const { Medico } = require('../models');

module.exports = {
    create: async (body) => new Medico(body).save(),
    getById: async (id) => Medico.findById(id),
    getAll: async () => Medico.find({}),
    update: async (_id, body) => Medico.findByIdAndUpdate(_id,body),
    delete: async (id) => Medico.findByIdAndRemove(id)
}