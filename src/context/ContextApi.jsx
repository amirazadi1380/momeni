import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export default function ContextApi({children}) {
    const [theme,setTheme] = useState('light');
  return (
    <AppContext.Provider value={{theme,setTheme}}>{children}</AppContext.Provider>
  )
}
