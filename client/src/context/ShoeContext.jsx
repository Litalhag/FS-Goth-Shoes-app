import { createContext, useEffect, useState } from 'react'
import {
  deleteShoe,
  getAllShoes,
  getShoe,
  postShoeData,
  updateShoeData,
} from '../api/api'
import { toast } from 'react-toastify'
import { showToast } from '../utils/utils'

// import {showToast} from '../utils/utils'

export const ShoeContext = createContext()

export const ShoeProvider = ({ children }) => {
  const [shoes, setShoes] = useState([])
  const [shoe, setShoe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchShoes = async () => {
    try {
      setIsLoading(true)
      const fetchedProducts = await getAllShoes() // function from api.js
      setShoes(fetchedProducts)
    } catch (error) {
      console.error('There was an error fetching data:', error)
      setShoes([]) // ensure products is an empty array in case of an error
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchShoes()
  }, [])

  const fetchShoe = async (id) => {
    try {
      const fetchedShoe = await getShoe(id)
      setShoe(fetchedShoe)
    } catch (error) {
      console.error('Error fetching the shoe:', error)
    }
  }

  const handleAddShoe = async (shoe) => {
    try {
      const newShoe = await postShoeData(shoe)
      setShoes([...shoes, newShoe])
      fetchShoes()
      showToast('Shoe added successfully!')
    } catch (error) {
      console.error('Error adding the shoe:', error)
      showToast('Error while adding shoe', 'error')
    }
  }

  const handleEditShoe = async (shoe, id) => {
    try {
      const editedShoe = await updateShoeData(shoe, id)
      setShoes(shoes.map((shoe) => (shoe.id === id ? editedShoe : shoe)))
      fetchShoes()
      showToast('Shoe updated successfully!')
    } catch (error) {
      console.error('Error editing the shoe:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteShoe(id)
      fetchShoes()
      showToast('Shoe deleted successfully!')
    } catch (error) {
      console.error('Error deleting the product:', error)
    }
  }

  return (
    <ShoeContext.Provider
      value={{
        shoes,
        shoe,
        isLoading,
        handleAddShoe,
        handleEditShoe,
        handleDelete,
        fetchShoe,
      }}
    >
      {children}
    </ShoeContext.Provider>
  )
}
