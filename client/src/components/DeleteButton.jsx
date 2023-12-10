import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useGlobalShoeContext } from '../hooks/useGlobalShoeContext'
import { showToast } from '../utils/utils'

const DeleteButton = ({ id }) => {
  const { user } = useGlobalContext()
  const { handleDelete } = useGlobalShoeContext()
  const navigate = useNavigate()

  const onDelete = async () => {
    // Check if the user is admin before proceeding
    if (!user || !user.isAdmin) {
      showToast('Only admin can delete products.', 'error')
      return
    }

    // Call the handleDelete function from the context
    try {
      if (id) {
        await handleDelete(id)
        navigate('/')
      }
    } catch (error) {
      console.error('Error deleting the product:', error)
      showToast(
        'There was an error deleting the product. Please try again later.',
        'error'
      )
    }
  }

  return (
    <button className="primary-btn" onClick={onDelete}>
      Delete Product
    </button>
  )
}

export default DeleteButton
