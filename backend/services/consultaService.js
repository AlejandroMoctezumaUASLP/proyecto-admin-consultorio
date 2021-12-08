const { Consulta } = require('../models');

/**
 * Implementa los servicios (conexiones a BD) de las rutas de /consultas:
 * @exports consultaService
 */
module.exports = {
    create: async (body) => new Consulta(body).save(),
    getAll: async (include) => Consulta.find({}).populate(include),
    getById: async (_id, include) => Consulta.findById(_id).populate(include),
    update: async (_id, body) => Consulta.findByIdAndUpdate(_id,body),
    delete: async (id) => Consulta.findByIdAndRemove(id)
}