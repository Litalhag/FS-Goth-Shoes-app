import { createContext, useState } from 'react'

export const AppContext = createContext()

const userFromLocalStorage = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(userFromLocalStorage)

  const login = (name) => {
    let isAdmin = false
    if (name === 'admin') {
      isAdmin = true
    }
    const userData = { name, isAdmin }
    localStorage.setItem('userData', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('userData')
    setUser(null)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
