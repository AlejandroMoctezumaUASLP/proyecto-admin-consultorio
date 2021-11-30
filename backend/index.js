const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const Consulta = require('./models/consulta');

const { pacienteController } = require('./controllers');

app.use(bodyParser());

app.use(cors());

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

app.get('/', (req, res) => {
  res.json({ text: 'Hola', });
});
 
const router = app.router();

router.post("/pacientes", pacienteController);



app.use("/api", router);

/****************
 * 
 * CRUD CONSULTA
 * 
 ***************/

// app.get('/consultas/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await Consulta.find({ _id: mongoose.Types.ObjectId(id) });
//   res.status(200).json({
//     result
//   });
// });

// app.get('/consultas', async (req, res) => {
//   const result = await Consulta.find({});

//   res.status(200).json({
//     result
//   });
// });

// app.post('/consultas', async (req, res) => {
//   const {
//     numero_turno,
//     consultorio,
//     medico,
//     direccion,
//     telefono,
//     prioridad
//   } = req.body;

//   let consulta = new Consulta({
//     numero_turno,
//     consultorio,
//     medico,
//     direccion,
//     telefono,
//     prioridad
//   });

//   const result = await consulta.save();

//   res.status(201).json({
//     result
//   });
// });

// app.put('/consultas/:id', async (req, res) => {
//   const {
//     numero_turno,
//     consultorio,
//     medico,
//     direccion,
//     telefono,
//     prioridad,
//   } = req.body;

//   const id = req.params.id;
//   const result = await Consulta.findByIdAndUpdate({ _id: id }, {
//     numero_turno,
//     consultorio,
//     medico,
//     direccion,
//     telefono,
//     prioridad
//   });
//   res.status(200).json({
//     result
//   });
// });

// app.delete('/consultas/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await Consulta.remove({ _id: mongoose.Types.ObjectId(id) });
//   res.status(200).json({
//     result
//   });
// });

// Servidor Puerto 8000
app.listen(8000, () => {
  console.log('Listening port: 8000');
});