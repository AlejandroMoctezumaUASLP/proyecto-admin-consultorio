import React from "react";
import { Modal } from "./Modal";
import styles from "./FormStyle.module.css";


const style = {
  paddingBottom: "2rem",
};

export const DoctorModal = (props) => {
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
