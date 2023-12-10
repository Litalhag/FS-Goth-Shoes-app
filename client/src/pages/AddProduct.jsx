import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '../components'
import useForm from '../hooks/useForm'

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  })

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/')
  }

  const { handleChange, handleSubmit, errors } = useForm(product, setProduct)

  return (
    <main className="single-shoe-container">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        shoe={product}
        errors={errors}
        btnText="Add Product"
      />
    </main>
  )
}
export default AddProduct
