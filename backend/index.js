const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const {pacienteController, medicoController, consultorioController, consultaController} = require('./controllers');
require('dotenv').config()

app.use(bodyParser());
app.use(cors());

// Se crea el arreglo de rutas
const router = express.Router();

// Se inicia la conexión con la BD en Mongo
mongoose
    .connect(
        //"mongodb://127.0.0.1:27017/doctores"
        process.env.MONGO_CONNECTION_STRING
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

// CRUD de Pacientes
router.post("/pacientes", pacienteController.createPatient);
router.get("/pacientes/:id", pacienteController.findPatient);
router.get("/pacientes", pacienteController.getPatients);
router.put("/pacientes/:id", pacienteController.updatePatient);
router.delete("/pacientes/:id", pacienteController.deletePatient);

// CRUD de Medico
router.post("/medicos", medicoController.createMedic);
router.get("/medicos/:id", medicoController.findMedic);
router.get("/medicos", medicoController.getMedics);
router.put("/medicos/:id", medicoController.updateMedic);
router.delete("/medicos/:id", medicoController.deleteMedic);

// CRUD de Consultorio
router.post("/consultorios", consultorioController.createOffice);
router.get("/consultorios/:id", consultorioController.findOffice);
router.get("/consultorios", consultorioController.getOffices);
router.put("/consultorios/:id", consultorioController.updateOffice);
router.delete("/consultorios/:id", consultorioController.deleteOffice);

// CRUD de Consulta
router.post("/consultas", consultaController.createAppointment);
router.get("/consultas/:id", consultaController.findAppointment);
router.get("/consultas", consultaController.getAppointments);
router.put("/consultas/:id", consultaController.updateAppointment);
router.delete("/consultas/:id", consultaController.deleteAppointment);
router.put("/consultas/:id/prioridad", consultaController.changePrioridadAppointment);
router.put("/consultas/:id/cancel", consultaController.cancelAppointment);

// Se pasa router al api
app.use('/api', router);

// Se inicia el servicio en el puerto 8000
app.listen(process.env.PORT || 80, () => {
    console.log('Listening port: 3000');
});

