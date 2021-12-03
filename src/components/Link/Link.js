import React from 'react'
import { Link as LinkRouter} from "react-router-dom";

export const Link = (props) => {
    const {
        children,
        link
    } = props;

    return (
        <LinkRouter to={`${link}`} style={{ textDecoration: 'none', color: 'white' }}>{children}</LinkRouter>
    )
};