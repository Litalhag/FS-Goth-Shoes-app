const Form = ({
  handleSubmit,
  handleChange,
  handleDelete,
  handleCancel,
  shoe,
  errors,
  btnText,
}) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={shoe.name}
            onChange={handleChange}
            className={errors.name ? 'error-form' : ''}
          />
          <div className="error-message">{errors.name}</div>
        </div>

        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={shoe.price}
            onChange={handleChange}
            className={errors.price ? 'error-form' : ''}
          />
          <div className="error-message">{errors.price}</div>
        </div>

        <div className="input-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={shoe.image}
            onChange={handleChange}
            className={errors.image ? 'error-form' : ''}
          />
          <div className="error-message">{errors.image}</div>
        </div>

        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={shoe.description}
            onChange={handleChange}
            className={errors.description ? 'error-form' : ''}
          ></textarea>
          <div className="error-message">{errors.description}</div>
        </div>

        <button className="primary-btn form-btn" type="submit">
          {btnText}
        </button>
        <button
          onClick={handleCancel}
          className="primary-btn form-btn"
          type="button"
        >
          Cancel
        </button>
        {handleDelete && (
          <button onClick={handleDelete} className="delete-btn" type="button">
            Delete
          </button>
        )}
      </form>
    </div>
  )
}

export default Form
