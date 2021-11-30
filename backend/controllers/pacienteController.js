const { pacienteService } = require('../services');
const Paciente = require('../models/paciente');

module.exports = {
    createPatient: async (req, res) => {
        const {
            telefono,
            nombre,
            edad
        } = req.body;

        let paciente = new Paciente({
            telefono,
            nombre,
            edad
        });

        const result = await pacienteService.create(paciente);

        res.status(201).json({
            result
        });
    }
}