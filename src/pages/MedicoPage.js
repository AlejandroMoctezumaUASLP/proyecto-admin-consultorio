import React from "react";
import { CardDoctor, SubmitButton } from "../components";
import styles from "../App.module.css";
import { useState, useEffect } from "react";
import { DoctorModal } from "../components/Modal/DoctorModal";
import Button from "@mui/material/Button";
import { CrudMedicos } from "../utils";
import { TextField } from "@mui/material";
import { itemContext } from './itemContext';

export const MedicoPage = () => {
  const [medicos, setMedicos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [itemIndex, setItemIndex] = useState(null);
  const value = { itemIndex, setItemIndex };

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Presioné el pinche botón del modal");

    const body = { nombre, telefono, especialidad };
    console.log(JSON.stringify(body));

    const res = await CrudMedicos.createMedico(JSON.stringify(body));
    console.log(res);

    if (res) {
      //const auxMedicos = medicos;
      //setMedicos(medicos.append(res.result));
      setLoading(true);
    }

    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (loading) {
      fetch(
        "https://guarded-caverns-69109.herokuapp.com/api/medicos",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setMedicos(result.result))
        .catch((error) => console.log("error", error));
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    console.log(itemIndex);
  }, [itemIndex]);

  const changeModalState = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <itemContext.Provider value={value}>
      <div>
        <DoctorModal
          titulo="Crear Medico"
          isOpen={modalOpen}
          changeModalState={changeModalState}
        >
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            required
            id="outlined-basic"
            label="Telefono"
            value={telefono}
            onChange={(event) => {
              setTelefono(event.target.value);
            }}
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            required
            id="outlined-baisc"
            label="Especialidad"
            value={especialidad}
            onChange={(event) => {
              setEspecialidad(event.target.value);
            }}
            sx={{ paddingBottom: "10px" }}
          />
          <SubmitButton title="Enviar" onClick={submitForm}></SubmitButton>
        </DoctorModal>

        <div className={`${styles.flexButton}`}>
          <Button
            sx={{
              backgroundColor: "#CACACA",
              padding: "10px",
            }}
            onClick={changeModalState}
          >
            Crear Médico
          </Button>
        </div>

        <div className={`${styles.listContainer}`}>
          {medicos &&
            medicos.map((item, key) => (
              <CardDoctor
                className={`${styles.listItem}`}
                key={key}
                itemId={item._id}
                {...item}
              ></CardDoctor>
            ))}
        </div>
      </div>
    </itemContext.Provider>
  );
};
