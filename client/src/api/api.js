import axios from 'axios'

// Base URL
const BASE_URL = import.meta.env.VITE_BASE_URL

console.log('BASE URL:', BASE_URL)

// Function to fetch all shoes
export const getAllShoes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/shoes`)
    console.log(res.data)
    return res.data.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Function to fetch a specific shoe by its ID
export const getShoe = async (shoeId) => {
  try {
    const res = await axios.get(`${BASE_URL}/shoes/${shoeId}`)
    return res.data.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

// Function to update shoe details
export const updateShoeData = async (shoe, shoeId) => {
  try {
    const res = await axios.put(`${BASE_URL}/shoes/${shoeId}`, shoe)
    console.log(res.data.data)
    return res.data.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

// Function to post a new shoe to the database
export const postShoeData = async (shoe) => {
  try {
    const res = await axios.post(`${BASE_URL}/shoes`, shoe)
    return res.data.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

// Function to delete a shoe from the database
export const deleteShoe = async (shoeId) => {
  try {
    await axios.delete(`${BASE_URL}/shoes/${shoeId}`)
  } catch (error) {
    console.error(error)
    throw error
  }
}
