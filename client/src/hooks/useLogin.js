import { useState } from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const navigate = useNavigate()
  const { login } = useGlobalContext()

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: null,
    password: null,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: null,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let isValid = true
    const newErrors = {
      name: null,
      password: null,
    }

    // Check if the user's name is "admin"
    if (formData.name !== 'admin') {
      newErrors.name = "Only 'admin' can log in."
      isValid = false
    }

    // Check for password length
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.'
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      login('admin')
      navigate('/')
    }
  }

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useLogin
