const { Consulta } = require('../models');

module.exports = {
    create: async (body) => new Consulta(body).save(),
    getAll: async (include) => Consulta.find({}).populate(include),
    getById: async (_id, include) => Consulta.findById(_id).populate(include),
    update: async (_id, body) => Consulta.findByIdAndUpdate(_id,body),
    delete: async (id) => Consulta.findByIdAndRemove(id)
}