import React from 'react';
import { Modal as ModalMUI } from "@mui/material";
import Box from "@mui/material/Box";

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