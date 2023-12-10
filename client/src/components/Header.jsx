import { FaChevronDown } from 'react-icons/fa'

const Header = ({ onArrowClick }) => {
  return (
    <header className="header-img-text">
      <img
        className="goth-img-one"
        src="/img/Goth-Style-Inspiration-Women-Fashion.jpg"
      />
      <p className="goth-text">Goth Shoes</p>
      <FaChevronDown className="narrow-icon" onClick={onArrowClick} />
    </header>
  )
}
export default Header
