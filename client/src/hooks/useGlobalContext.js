import { useContext } from 'react'

import { AppContext } from '../context/Context.jsx'

export const useGlobalContext = () => {
  return useContext(AppContext)
}
