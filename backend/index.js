const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Consulta = require('./models/consulta');

app.use(bodyParser());

app.use(cors());

const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/doctores"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get('/',(req, res) => {
    res.json({text: 'Hola',});
    
});

app.get('/consultas', async (req, res) => {
    const respuesta = await Consulta.find({});
    
    res.status(200).json({
        respuesta
    });
});

app.listen(8000, () => {
    console.log('Listening port: 8000');
});

app.post('/consulta', (req, res) => {
    const {
        numero_turno,
        consultorio,
        medico,
        direccion,
        telefono,
        prioridad,
    } = req.body;

    let consulta = new Consulta({
        numero_turno,
        consultorio,
        medico,
        direccion,
        telefono,
        prioridad,
    });

    consulta.save();

    res.status(201).json({
        message: 'OK'
    });
});