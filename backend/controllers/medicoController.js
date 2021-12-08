const { medicoService } = require('../services');

/**
 * Implementa los controladores de las rutas de /medicos:
 * 
 * <ul style="list-style: none;">
 *  <li> createMedic: Crea un medico.
 *  <li> findMedic: Busca en base a un ID.
 *  <li> getMedics: Regresa todos los registros.
 *  <li> updateMedic: Actualiza un medico.
 *  <li> deleteMedic: Borra un medico.
 * </ul>
 * @exports medicoController
 */
module.exports = {
    createMedic: async (req, res) => {
        const {
            especialidad,
            telefono,
            nombre
        } = req.body;

        let medico = {
            especialidad,
            telefono,
            nombre
        };

        const result = await medicoService.create(medico);

        res.status(201).json({
            result
        });
    },
    findMedic: async (req, res) => {
        const id = req.params.id;
        const result = await medicoService.getById(id);

        res.status(200).json({
            result
        });
    },
    getMedics: async (req, res) => {
        const result = await medicoService.getAll();

        res.status(200).json({
            result
        });
    },
    updateMedic: async (req, res) => {
        const {
            especialidad,
            telefono,
            nombre
        } = req.body;

        const id = req.params.id;
        const result = await medicoService.update({_id: id}, {
            especialidad,
            telefono,
            nombre
        });

        res.status(200).json({
            result
        });
    },
    deleteMedic: async (req, res) => {
        const id = req.params.id;
        const result = await medicoService.delete({_id: id});

        res.status(200).json({
            result
        });
    }
}