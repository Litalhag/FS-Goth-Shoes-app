import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form } from '../components'

import useForm from '../hooks/useForm'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useGlobalShoeContext } from '../hooks/useGlobalShoeContext'

const EditProduct = () => {
  const { user } = useGlobalContext()
  const { shoe, fetchShoe, handleDelete } = useGlobalShoeContext()
  const { id } = useParams()
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/')
  }

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  })

  const { handleChange, handleSubmit, errors } = useForm(
    product,
    setProduct,
    id
  )

  useEffect(() => {
    fetchShoe(id)
    if (shoe) {
      setProduct(shoe)
    }
  }, [id])

  const handleDeleteShoe = async () => {
    handleDelete(id)
    navigate('/')
  }

  return (
    <div className="single-shoe-container">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={user && user.isAdmin ? handleDeleteShoe : null}
        shoe={product}
        errors={errors}
        btnText="Update"
      />
    </div>
  )
}

export default EditProduct
