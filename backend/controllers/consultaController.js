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
        const result = await consultaService.getByIdAndFill({_id: id});

        res.status(200).json({
            result
        });
    },
    getAppointments: async (req, res) => {
        const result = await consultaService.getAllAndFill();

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