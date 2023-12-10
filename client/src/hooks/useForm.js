import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalShoeContext } from './useGlobalShoeContext'

const useForm = (formData, setFormData, id) => {
  const [errors, setErrors] = useState({
    name: null,
    price: null,
    image: null,
    description: null,
  })

  const { handleAddShoe, handleEditShoe } = useGlobalShoeContext()

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValid = true

    let newErrors = {
      name: null,
      price: null,
      image: null,
      description: null,
    }

    // Name:
    if (!formData.name) {
      newErrors.name = 'Name is required.'
      isValid = false
    }

    // Price:
    if (!formData.price) {
      newErrors.price = 'Price is required.'
      isValid = false
    } else if (Number(formData.price) < 1) {
      newErrors.price = 'Price cannot be less than 1.'
      isValid = false
    }

    // Image:
    const imagePattern = /\.(jpeg|jpg|gif|png|webp)(\?.*)?$/i
    if (!formData.image || !imagePattern.test(formData.image)) {
      newErrors.image = 'Invalid image URL or format.'
      isValid = false
    }

    // Description:
    if (!formData.description) {
      newErrors.description = 'Description is required.'
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      if (id) {
        await handleEditShoe(formData, id)
      } else {
        await handleAddShoe(formData)
      }
      navigate('/')
    }
  }

  return { handleChange, handleSubmit, errors }
}

export default useForm
