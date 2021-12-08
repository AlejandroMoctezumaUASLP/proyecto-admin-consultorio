import React from 'react'
import styles from './PagesStyle.module.css'

/**
 * Página de inicio del panel de Administrador. Se puede llegar también al presionar el logo
 * @member
 */
export const MainPage = () => {
    return (
    <div className={styles.containerMain}>
        <h1>Panel de Administrador</h1>
        <h2>Por favor, seleccione una opción</h2>
    </div>
    );
};