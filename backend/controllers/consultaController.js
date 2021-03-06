'use strict'
const { consultaService } = require('../services');

/**
 * Implementa los controladores de las rutas de /consultas:
 * 
 * <ul style="list-style: none;">
 *  <li> createAppointment: Crea una consulta
 *  <li> findAppointment: Busca en base a un ID. También se pueden remplazar los IDs anidados por un objeto
 *  <li> getAppointment: Regresa todos los registros. También se pueden remplazar los IDs anidados por un objeto
 *  <li> updateAppointment: Actualiza una consulta
 *  <li> deleteAppointment: Borra una consulta
 * </ul>
 * @exports consultaController
 */
module.exports = {
    createAppointment: async (req, res) => {
        const {
            numero_turno,
            consultorio,
            medico,
            prioridad,
            fecha,
            hora,
            paciente
        } = req.body;

        let consulta = {
            numero_turno,
            consultorio,
            medico,
            prioridad,
            fecha,
            hora,
            paciente
        };

        const result = await consultaService.create(consulta);

        res.status(201).json({
            result
        });
    },
    findAppointment: async (req, res) => {
        const id = req.params.id;
        let include = ""
        include += req.query["include"];
        let arrayInclude = "";
        console.log(typeof include + include)
        if (include)
            include = include.split(".").join(" ")


        const result = await consultaService.getById({_id: id}, include);

        res.status(200).json({
            result
        });
    },
    getAppointments: async (req, res) => {
        let include = ""
        include += req.query["include"];
        let arrayInclude = "";
        console.log(typeof include + include)
        if (include)
            include = include.split(".").join(" ")

        const result = await consultaService.getAll(include);

        res.status(200).json({
            result
        });
    },
    updateAppointment: async (req, res) => {
        const {
            numero_turno,
            consultorio,
            medico,
            prioridad,
            fecha,
            hora,
            paciente
        } = req.body;

        const id = req.params.id;
        const result = await consultaService.update({_id: id}, {
            numero_turno,
            consultorio,
            medico,
            prioridad,
            fecha,
            hora,
            paciente
        });

        res.status(200).json({
            result
        });
    },
    deleteAppointment: async (req, res) => {
        const id = req.params.id;
        const result = await consultaService.delete({_id: id});

        res.status(200).json({
            result
        });
    },
    changePrioridadAppointment: async (req, res) => {
        const {
            prioridad,
        } = req.body;

        const id = req.params.id;
        const result = await consultaService.changePriority(id, prioridad);

        res.status(200).json({
            result
        });
    },
    changeAppointmentState: async (req, res) => {
        const { is_active } = req.body;

        const id = req.params.id
        const result = await consultaService.changeIsActive(id, is_active);

        res.status(200).json({
            result
        })
    }
}
