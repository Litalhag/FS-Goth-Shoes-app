import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalShoeContext } from '../hooks/useGlobalShoeContext'

const ShoeList = () => {
  const { shoes, isLoading } = useGlobalShoeContext()

  const navigate = useNavigate()

  return (
    <main className="all-products">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="products-list">
          {shoes.map((shoe) => {
            const { id, name, image, description, price } = shoe
            return (
              <div
                className="product-card"
                key={id}
                onClick={() => navigate(`/product/${id}`)}
              >
                <h3 className="product-name">{name}</h3>
                <img className="product-img" src={image} alt={name} />
                <p className="product-desc">{description}</p>
                <p className="product-price">${price}</p>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}

export default ShoeList
