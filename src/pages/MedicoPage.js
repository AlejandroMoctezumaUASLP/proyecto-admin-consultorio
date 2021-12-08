import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { CardDoctor, FormModal, SubmitButton } from "../components";
import { CrudMedicos } from "../utils";
import { itemContext } from "./itemContext";
import styles from "../App.module.css";
import { TextField } from "@mui/material";

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

    if (itemIndex === 0)
      res = await CrudMedicos.createMedico(JSON.stringify(body));
    else
      res = await CrudMedicos.updateMedico(JSON.stringify(body),itemIndex);

    if (res !== "") {
      // Se limpian los valores
      setNombre("");
      setTelefono("");
      setEspecialidad("");

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

    function actualizarElemento() {
      // Se actualizan los valores de la forma
      const elemento = medicos.find(
        (elemento) => elemento._id === itemIndex
      );
      setNombre(elemento.nombre);
      setTelefono(elemento.telefono);
      setEspecialidad(elemento.especialidad);

      // Se abre la modal
      changeModalState();
    }

    // Se detecta si se quiere actualizar el elemento o eliminar
    if (itemIndex !== 0 && actionCard === "UPDATE") actualizarElemento();
    else if (itemIndex !== 0 && actionCard === "DELETE") borrarElemento();
  }, [itemIndex, actionCard]);

  // Se abre o cierra el modal
  const changeModalState = () => {
    setModalOpen(!modalOpen);
    if(!modalOpen) setActionCard("NADA");
  };

  const createModalState = () => {
    //Se limpian los valores del formulario
    setNombre("");
    setTelefono("");
    setEspecialidad("");

    // Se actualizan valores de control
    setItemIndex(0);
    setActionCard("NADA");
    changeModalState();
  }

  return (
    // La pantalla está envuelva en un Context
    <itemContext.Provider value={value}>
      {/* Modal para la creación de Médicos */}
      <div>
        <FormModal
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
        </FormModal>

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
