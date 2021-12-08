import React from 'react'
import { Link as LinkRouter} from "react-router-dom";

/**
 * Componente usado para representar los hipervínculos de la página
 * @member
 * @example
 * const routes = [ 
 *  {
 *    link: "/consultorios",
 *    name: "Consultorios"
 *  },
 *  ...
 * ]
 * 
 * ...
 * 
 * {routes.map((item,key) => (
 *   <Button
 *     key={key}
 *     onClick={handleCloseNavMenu}
 *     sx={{ my: 2, color: "white", display: "block" }}
 *   >
 *     <Link link={item.link}>{item.name}</Link>
 *   </Button>
 * ))}
 */
export const Link = (props) => {
    const {
        children,
        link
    } = props;

    return (
        <LinkRouter to={`${link}`} style={{ textDecoration: 'none', color: 'white' }}>{children}</LinkRouter>
    )
};