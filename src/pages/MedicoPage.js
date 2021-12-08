import React from "react";
import { CardDoctor, SubmitButton } from "../components";
import styles from "../App.module.css";
import { useState, useEffect } from "react";
import { DoctorModal } from "../components/Modal/DoctorModal";
import Button from "@mui/material/Button";
import { CrudMedicos } from "../utils";
import { TextField } from "@mui/material";
import { itemContext } from "./itemContext";

export const MedicoPage = () => {
  // Datos a mostrar y modales
  const [medicos, setMedicos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Contextos
  const [itemIndex, setItemIndex] = useState(0);
  const [actionCard, setActionCard] = useState(null);
  const value = { itemIndex, setItemIndex, actionCard, setActionCard };

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  // Formulario para crear médico.
  // Al terminar, se recarga la página
  const submitForm = async (e) => {
    e.preventDefault();
    const body = { nombre, telefono, especialidad };
    let res = "";
    console.log(itemIndex);

    if (itemIndex === 0) {
      console.log("Creando registro");
      res = await CrudMedicos.createMedico(JSON.stringify(body));
    } else {
      console.log("Editando registro");
      res = await CrudMedicos.updateMedico(JSON.stringify(body),itemIndex);
    }

    if (res != "") {
      //const auxMedicos = medicos;
      //setMedicos(medicos.append(res.result));
      setLoading(true);
    }

    changeModalState();
  };

  // Cuando se realiza una acción, se vuelve a cargar la lista de médicos
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (loading) {
      setActionCard("NADA");

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

  // Cuando se detecta un nuevo index, se checa si se hace la acción de borrar
  useEffect(() => {
    async function borrarElemento() {
      const res = await CrudMedicos.deleteMedico(itemIndex);

      if (res) {
        setItemIndex(0);
        setLoading(true);
      }
    }

    // Se detecta si se quiere actualizar el elemento o eliminar
    if (itemIndex != 0 && actionCard === "UPDATE") changeModalState();
    else if (itemIndex != 0 && actionCard === "DELETE") borrarElemento();
  }, [itemIndex, actionCard]);

  // Se abre o cierra el modal
  const changeModalState = () => {
    setModalOpen(!modalOpen);
    console.log("ID: ", itemIndex);
    console.log("ACCIÓN: ", actionCard);
    if(!modalOpen)
      setActionCard("NADA");
  };

  const createModalState = () => {
    setItemIndex(0);
    setActionCard("NADA");
    changeModalState();
  }

  return (
    // La pantalla está envuelva en un Context
    <itemContext.Provider value={value}>
      {/* Modal para la creación de Médicos */}
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

        {/* Botón para crear Médicos */}
        <div className={`${styles.flexButton}`}>
          <Button
            sx={{
              backgroundColor: "#CACACA",
              padding: "10px",
            }}
            onClick={createModalState}
          >
            Crear Médico
          </Button>
        </div>

        {/* Contenedor con la lista de médicos */}
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
