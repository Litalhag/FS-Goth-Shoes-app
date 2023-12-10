import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getShoe } from '../api/api'
import { EditButton, DeleteButton } from '../components'
import { useGlobalShoeContext } from '../hooks/useGlobalShoeContext'
import { useGlobalContext } from '../hooks/useGlobalContext'

const ProductPage = () => {
  const { shoe, isLoading, fetchShoe } = useGlobalShoeContext()
  const { user } = useGlobalContext()

  const { id } = useParams()

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/')
  }

  useEffect(() => {
    fetchShoe(id)
  }, [id])

  return (
    <main className="all-products">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="product-view">
          {shoe && (
            <div className="product-card-edit">
              <h3 className="product-name">{shoe.name}</h3>
              <img className="product-img" src={shoe.image} alt={shoe.name} />
              <p className="product-desc">{shoe.description}</p>
              <p className="product-price">${shoe.price}</p>
              {user && user.isAdmin && (
                <>
                  <EditButton id={id} />
                  <DeleteButton id={id} />
                </>
              )}
              <button
                onClick={handleCancel}
                className="primary-btn"
                type="button"
              >
                Cancel
              </button>{' '}
            </div>
          )}
        </div>
      )}
    </main>
  )
}

export default ProductPage
