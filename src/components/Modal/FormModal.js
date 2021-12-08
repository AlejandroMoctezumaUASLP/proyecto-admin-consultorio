import React from "react";
import { Modal } from "./Modal";
import styles from "./FormStyle.module.css";

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
