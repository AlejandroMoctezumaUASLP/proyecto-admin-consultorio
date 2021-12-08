const { consultorioService } = require('../services');

/**
 * Implementa los controladores de las rutas de /consultorios:
 * 
 * <ul style="list-style: none;">
 *  <li> createOffice: Crea un consultorio
 *  <li> findOffice: Busca en base a un ID. También se pueden remplazar los IDs anidados por un objeto
 *  <li> getOffices: Regresa todos los registros. También se pueden remplazar los IDs anidados por un objeto
 *  <li> updateOffice: Actualiza un consultorio
 *  <li> deleteOffice: Borra un consultorio
 * </ul>
 * @exports consultorioController
 */
module.exports = {
    createOffice: async (req, res) => {
        const {
            direccion,
            telefono,
            nombre,
            medicos,
            capacidad
        } = req.body;

        let medico = {
            direccion,
            telefono,
            nombre,
            medicos,
            capacidad
        };

        const result = await consultorioService.create(medico);

        res.status(201).json({
            result
        });
    },
    findOffice: async (req, res) => {
        const id = req.params.id;
        const include = req.query["include"];
        let arrayInclude = "";
        if (include)
            arrayInclude = include.replaceAll("."," ");

        const result = await consultorioService.getById(id, arrayInclude);

        res.status(200).json({
            result
        });
    },
    getOffices: async (req, res) => {
        const include = req.query["include"];
        let arrayInclude = "";
        if (include)
            arrayInclude = include.replaceAll("."," ");
        
        const result = await consultorioService.getAll(arrayInclude);

        res.status(200).json({
            result
        });
    },
    updateOffice: async (req, res) => {
        const {
            direccion,
            telefono,
            nombre,
            medicos,
            capacidad
        } = req.body;

        const id = req.params.id;
        const result = await consultorioService.update({_id: id}, {
            direccion,
            telefono,
            nombre,
            medicos,
            capacidad
        });

        res.status(200).json({
            result
        });
    },
    deleteOffice: async (req, res) => {
        const id = req.params.id;
        const result = await consultorioService.delete({_id: id});

        res.status(200).json({
            result
        });
    }
}