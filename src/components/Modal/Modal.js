import React from 'react';
import Box from "@mui/material/Box";
import { Modal as ModalMUI } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

/**
 * Componente de modal.
 * @member
 * @property {string} titulo Titulo a poner en la Modal
 * @property {state} isOpen Estado para determinar si la modal está abierta
 * @property {function} changeModalState Función para cambiar el valor de "isOpen"
 * @property {object} children Contiene los campos del Formulario
 */
export const Modal = (props) => {
    const {
        titulo,
        isOpen,
        changeModalState,
        children
    } = props;
    
    return (
      <ModalMUI
        open={isOpen}
        onClose={changeModalState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1 style={{textAlign: 'center'}}>{titulo}</h1>
            {children}
        </Box>
      </ModalMUI>  
    );
};