import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { CardConsultorio, DropdownForm, FormModal, SubmitButton } from "../components";
import { CrudConsultorios } from "../utils";
import { itemContext } from "./itemContext";
import styles from "../App.module.css";
import { TextField } from "@mui/material";

export const ConsultorioPage = () => {
  // Datos a mostrar y modales
  const [listaMedicos, setListaMedicos] = useState([]);
  const [consultorios, setConsultorios] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Contextos
  const [itemIndex, setItemIndex] = useState(0);
  const [actionCard, setActionCard] = useState(null);
  const value = { itemIndex, setItemIndex, actionCard, setActionCard };

  // Estados del formulario
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");
  const [medicos, setMedicos] = useState([]);
  const [capacidad, setCapacidad] = useState(0);

  // Formulario para crear consultorio.
  // Al terminar, se recarga la página
  const submitForm = async (e) => {
    e.preventDefault();
    const body = { direccion, telefono, nombre, medicos, capacidad };
    let res = "";

    if (itemIndex === 0)
      res = await CrudConsultorios.createConsultorio(JSON.stringify(body));
    else
      res = await CrudConsultorios.updateConsultorio(JSON.stringify(body),itemIndex);

    if (res !== "") {
      // Se limpian los valores
      setDireccion("");
      setTelefono("");
      setNombre("");
      setMedicos([]);
      setCapacidad(0);

      setLoading(true);
    }

    changeModalState();
  };

  // Cuando se carga por primera vez la página, se carga una lista de médicos
  useEffect(() => {
    async function obtenerMedicos() {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://guarded-caverns-69109.herokuapp.com/api/medicos",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setListaMedicos(result.result))
        .catch((error) => console.log("error", error));
    }

    obtenerMedicos();
  }, []);

  // Cuando se realiza una acción, se vuelve a cargar la lista de consultorios
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (loading) {
      setActionCard("NADA");

      fetch(
        "https://guarded-caverns-69109.herokuapp.com/api/consultorios",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setConsultorios(result.result))
        .catch((error) => console.log("error", error));
      setLoading(false);
    }
  }, [loading]);

  // Cuando se detecta un nuevo index, se checa si se hace la acción de borrar
  useEffect(() => {
    async function borrarElemento() {
      const res = await CrudConsultorios.deleteConsultorio(itemIndex);

      if (res) {
        setItemIndex(0);
        setLoading(true);
      }
    }

    function actualizarElemento() {
      // Se actualizan los valores de la forma
      const elemento = consultorios.find(
        (elemento) => elemento._id === itemIndex
      );
      setDireccion(elemento.direccion);
      setTelefono(elemento.telefono);
      setNombre(elemento.nombre);
      setMedicos(elemento.medicos);
      setCapacidad(elemento.capacidad);

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
    if (!modalOpen) setActionCard("NADA");
  };

  const createModalState = () => {
    //Se limpian los valores del formulario
    setDireccion("");
    setTelefono("");
    setNombre("");
    setMedicos([]);
    setCapacidad(0);

    // Se actualizan valores de control
    setItemIndex(0);
    setActionCard("NADA");
    changeModalState();
  };

  return (
    // La pantalla está envuelva en un Context
    <itemContext.Provider value={value}>
      {/* Modal para la creación de Consultorios */}
      <div>
        <FormModal
          titulo="Datos de Consultorio"
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
            id="outlined-required"
            label="Capacidad"
            value={capacidad}
            onChange={(event) => {
              setCapacidad(event.target.value);
            }}
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Direccion"
            value={direccion}
            onChange={(event) => {
              setDireccion(event.target.value);
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
          <DropdownForm
            label="Medicos"
            medicos={listaMedicos}
            values={medicos}
            onChangeFunction={(event) => {
              const {
                target: { value },
              } = event;
              setMedicos(
                // On autofill we get a the stringified value.
                typeof value === "string" ? value.split(",") : value
              );
            }}
          />
          <SubmitButton title="Enviar" onClick={submitForm}></SubmitButton>
        </FormModal>

        {/* Botón para crear Consultorios */}
        <div className={`${styles.flexButton}`}>
          <Button
            sx={{
              backgroundColor: "#CACACA",
              padding: "10px",
            }}
            onClick={createModalState}
          >
            Crear Consultorio
          </Button>
        </div>

        {/* Contenedor con la lista de consultorios */}
        <div className={`${styles.listContainer}`}>
          {consultorios &&
            consultorios.map((item, key) => (
              <CardConsultorio
                className={`${styles.listItem}`}
                key={key}
                itemId={item._id}
                {...item}
              ></CardConsultorio>
            ))}
        </div>
      </div>
    </itemContext.Provider>
  );
};
