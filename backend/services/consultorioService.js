//const mongoose = require('mongoose');
const { Consultorio } = require('../models');

module.exports = {
    create: async (body) => new Consultorio(body).save(),
    getById: async (id) => Consultorio.findById(id).populate("medicos"),
    getAll: async () => Consultorio.find({}).populate("medicos"),
    update: async (_id, body) => Consultorio.findByIdAndUpdate(_id,body),
    delete: async (id) => Consultorio.findByIdAndRemove(id)
}