import React from 'react'
import useLogin from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { formData, errors, handleChange, handleSubmit } = useLogin()

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <div className="input-login">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error-form' : ''}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="input-login">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error-form' : ''}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <button className="primary-btn login-btn" type="submit">
          Login
        </button>
        <button
          onClick={handleCancel}
          className="primary-btn login-btn"
          type="button"
        >
          Cancel
        </button>
      </form>
    </section>
  )
}

export default Login
