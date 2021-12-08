import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { itemContext } from '../../pages';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import { useContext } from 'react';
import Typography from "@mui/material/Typography";

/**
 * Card que representa la información y los métodos disponibles para un médico
 * @member
 * @property {className} className Define el estilo del contenedor principal de la card
 * @property {string} especialidad Especialidad del Médico
 * @property {string} telefono Teléfono del Médico
 * @property {string} nombre Nombre del Médico
 * @property {number} itemId ID del Médico
 * @example
 * {medicos && medicos.map((item, key) => (
 *   <CardDoctor
 *     className={estilo}
 *     key={key}
 *     itemId={item._id}
 *     {...item}
 *   ></CardDoctor>
 * ))}
 */
export function CardDoctor(props) {
  // Se asignan los nombres de las variables a la Card por medio de props
  const { className, especialidad, telefono, nombre, itemId } = props;

  // Estados de modales
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Estados de contextos
  const { itemIndex , setItemIndex } = useContext(itemContext);
  const { actionCard , setActionCard } = useContext(itemContext);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateModal = () => {
    setModalOpen(!modalOpen);
    setItemIndex(itemId);
    setActionCard("UPDATE");
    setAnchorEl(null);
  };

  const deleteModal = () => {
    setModalOpen(!modalOpen);
    setItemIndex(itemId);
    setActionCard("DELETE");
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <Card sx={{ width: 250 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {nombre[4]}
            </Avatar>
          }
          action={
            <div>
              <IconButton
                aria-label="settings"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={updateModal}>Editar</MenuItem>
                <MenuItem onClick={deleteModal}>Eliminar</MenuItem>
              </Menu>
            </div>
          }
          title={nombre}
        />
        <CardMedia
          component="img"
          height="194"
          image="Corpus.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Especialidad: {especialidad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Telefono: {telefono}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
