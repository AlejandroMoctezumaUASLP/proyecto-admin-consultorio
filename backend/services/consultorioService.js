//const mongoose = require('mongoose');
const { Consultorio } = require('../models');

/**
 * Implementa los servicios (conexiones a BD) de las rutas de /consultorios:
 * @exports consultorioService
 */
module.exports = {
    create: async (body) => new Consultorio(body).save(),
    getById: async (id, include) => Consultorio.findById(id).populate(include),
    getAll: async (include) => Consultorio.find({}).populate(include),
    update: async (_id, body) => Consultorio.findByIdAndUpdate(_id,body),
    delete: async (id) => Consultorio.findByIdAndRemove(id)
}