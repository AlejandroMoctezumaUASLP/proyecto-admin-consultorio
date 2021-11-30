const { Consulta } = require('../models');

module.exports = {
    create: async (body) => new Consulta(body).save(),
    getById: async (_id) => Consulta.findById(_id),
    getByIdAndFill: async (_id) => Consulta.findById(_id).populate(["consultorio","medico","paciente"]),
    getAll: async () => Consulta.find({}),
    getAllAndFill: async () => Consulta.find({}).populate(["consultorio","medico","paciente"]),
    update: async (_id, body) => Consulta.findByIdAndUpdate(_id,body),
    delete: async (id) => Consulta.findByIdAndRemove(id)
}