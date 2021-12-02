'use strict'
const { consultaService } = require('../services');

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
        const include = req.params.include
        include = include.split(",")
        const result = await consultaService.getById({_id: id}, include);

        res.status(200).json({
            result
        });
    },
    getAppointments: async (req, res) => {
        const include = req.params.include
        include = include.split(",")
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
    }
}