import React from "react";
import { Modal } from "./Modal";
import styles from "./FormStyle.module.css";

/**
 * Componente con el que se genera el formulario dentro de una modal
 * @member
 * @property {string} titulo Titulo a poner en la Modal
 * @property {state} isOpen Estado para determinar si la modal está abierta
 * @property {function} changeModalState Función para cambiar el valor de "isOpen"
 * @property {object} children Contiene los campos del Formulario
 * @example
 * <FormModal
 *   titulo="Datos de Consultorio"
 *   isOpen={modalOpen}
 *   changeModalState={changeModalState}
 * >
 *   <TextField ... />
 *   <DropdownForm ... />
 *   <SubmitButton ... />
 * </FormModal>
 */

export const FormModal = (props) => {
  const { titulo, isOpen, changeModalState, children } = props;

  return (
    <Modal titulo={titulo} isOpen={isOpen} changeModalState={changeModalState}>
      <div className={`${styles.flexForm}`}>
        {
            children
        }
      </div>
    </Modal>
  );
};
