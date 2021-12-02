const { Consulta } = require('../models');

module.exports = {
    create: async (body) => new Consulta(body).save(),
    getAll: async (include) => Consulta.find({}).populate(include),
    //getAllWithConsultorioAndMedicoAndPaciente: async () => Consulta.find({}).populate(["consultorio","medico","paciente"]),
    getById: async (_id, include) => Consulta.findById(_id).populate(include),
    /*getByIdWithConsultorioAndMedicoAndPaciente: async (_id) => 
        Consulta.findById(_id).populate(["consultorio","medico","paciente"]),*/
    update: async (_id, body) => Consulta.findByIdAndUpdate(_id,body),
    delete: async (id) => Consulta.findByIdAndRemove(id)
}