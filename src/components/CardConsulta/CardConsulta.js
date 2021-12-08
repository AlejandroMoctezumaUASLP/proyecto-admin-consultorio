import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

/**
 * Card que representa la información de una consulta
 * @member
 * @property {className} className Define el estilo del contenedor principal de la card
 * @property {numero_turno} numero_turno Numero de turno del paciente
 * @property {object} consultorio Contiene la información del consultorio. También se puede obtener solo el ID
 * @property {object} medico Contiene la información del medico. También se puede obtener solo el ID
 * @property {string} prioridad Prioridad de la consulta
 * @property {string} fecha Fecha de la consulta agendada
 * @property {string} hora Hora de la consulta agendada
 * @property {object} paciente Contiene la información del paciente. También se puede obtener solo el ID
 * @example
 * {consultas && consultas.map((item, key) => (
 *   <CardConsulta
 *     className={estilo}
 *     key={key}
 *     {...item}
 *   ></CardConsulta>
 * ))}
 */
export function CardConsulta(props) {
  // Se asignan los nombres de las variables a la Card por medio de props
  const { className, numero_turno, consultorio, medico, prioridad, fecha, hora, paciente } = props;

  // Estados de modales
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateModal = () => {
    setModalOpen(!modalOpen);
    setAnchorEl(null);
  };

  const deleteModal = () => {
    setModalOpen(!modalOpen);
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <Card sx={{ width: 250 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {paciente.nombre[0]}
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
          title={consultorio.nombre}
          subheader={"Paciente: " + paciente.nombre + " [Turno: " + numero_turno + " ]"}
        />
        <CardMedia
          component="img"
          height="194"
          image="Corpus.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Medico: {medico.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha: {fecha}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hora: {hora}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Prioridad: {prioridad}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
