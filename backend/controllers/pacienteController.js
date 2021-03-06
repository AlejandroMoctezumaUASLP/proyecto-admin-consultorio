const { pacienteService } = require('../services');

/**
 * Implementa los controladores de las rutas de /pacientes:
 * 
 * <ul style="list-style: none;">
 *  <li> createPatient: Crea un paciente.
 *  <li> findPatient: Busca en base a un ID.
 *  <li> getPatients: Regresa todos los registros.
 *  <li> updatePatient: Actualiza un paciente.
 *  <li> deletePatient: Borra un paciente.
 * </ul>
 * @exports pacienteController
 */
module.exports = {
    createPatient: async (req, res) => {
        const {
            telefono,
            nombre,
            edad
        } = req.body;

        let paciente = {
            telefono,
            nombre,
            edad
        };

        const result = await pacienteService.create(paciente);

        res.status(201).json({
            result
        });
    },
    findPatient: async (req, res) => {
        const id = req.params.id;
        const result = await pacienteService.getById(id);

        res.status(200).json({
            result
        });
    },
    getPatients: async (req, res) => {
        const result = await pacienteService.getAll();

        res.status(200).json({
            result
        });
    },
    updatePatient: async (req, res) => {
        const {
            telefono,
            nombre,
            edad
        } = req.body;

        const id = req.params.id;
        const result = await pacienteService.update({_id: id}, {
            telefono,
            nombre,
            edad
        });

        res.status(200).json({
            result
        });
    },
    deletePatient: async (req, res) => {
        const id = req.params.id;
        const result = await pacienteService.delete({_id: id});

        res.status(200).json({
            result
        });
    }
}