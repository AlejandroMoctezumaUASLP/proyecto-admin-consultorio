import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import ErrorIcon from "@mui/icons-material/Error";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from 'react';
import { itemContext } from '../../pages/itemContext';

export function CardDoctor(props) {
  // Se asignan los nombres de las variables a la Card por medio de props
  const { className, especialidad, telefono, nombre, itemId } = props;

  // Estados de modales
  const [expanded, setExpanded] = React.useState(false);
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={className}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
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
          subheader="September 14, 2016"
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
