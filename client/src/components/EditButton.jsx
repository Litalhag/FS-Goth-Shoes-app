import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../hooks/useGlobalContext'

const EditButton = ({ id }) => {
  const navigate = useNavigate()

  const { user } = useGlobalContext()

  const handleEdit = () => {
    if (!user || !user.isAdmin) {
      alert('Only admin can edit products.')
      return
    }

    navigate(`/product/${id}/edit`)
  }

  return (
    <button className="primary-btn" onClick={handleEdit}>
      Edit Product
    </button>
  )
}

export default EditButton
