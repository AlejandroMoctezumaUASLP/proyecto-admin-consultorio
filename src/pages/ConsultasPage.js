import React, { useState, useEffect } from "react";
import { CardConsulta } from "../components";
import styles from "../App.module.css";

export const ConsultasPage = () => {
  // Datos a mostrar y modales
  const [consultas, setConsultas] = useState([]);

  // Cuando se carga por primera vez la página, se carga la lista de consultas
  useEffect(() => {
    async function obtenerConsultas() {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://guarded-caverns-69109.herokuapp.com/api/consultas?include=consultorio.medico.paciente",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setConsultas(result.result))
        .catch((error) => console.log("error", error));
    }

    obtenerConsultas();
  }, []);

  return (
    <div>
      <div className={`${styles.listContainer}`}>
        {consultas &&
          consultas.map((item, key) => (
            <CardConsulta
              className={`${styles.listItem}`}
              key={key}
              {...item}
            ></CardConsulta>
          ))}
      </div>
    </div>
  );
};
