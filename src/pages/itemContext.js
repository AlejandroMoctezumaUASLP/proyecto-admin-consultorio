import React from 'react'

/**
 * Contexto que se usa para obtener el ID y la acción del CRUD a realizar
 * @member
 * @property {state} itemIndex ID del objeto seleccionado
 * @property {function} setItemIndex Función para cambiar el estado de "itemIndex"
 * @property {state} actionCard Acción a realizar en el registro
 * @property {function} setActionCard Función para cambiar el estado de "actionCard"
 */
export const itemContext = React.createContext({
    itemIndex: 0,
    setItemIndex: () => {},
    actionCard: "",
    setActionCrad: () => {},
  });