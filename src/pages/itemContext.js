import React from 'react'

export const itemContext = React.createContext({
    itemIndex: 0,
    setItemIndex: () => {},
  });