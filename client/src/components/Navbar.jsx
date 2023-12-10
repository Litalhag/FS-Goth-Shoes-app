import { useState, useRef } from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { FaBars } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'

import { links, social } from '../data'

const Navbar = () => {
  const { user, logout } = useGlobalContext()

  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Goth Shoes</h3>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              if (text === 'Add Product' && (!user || !user.isAdmin)) {
                return null
              }
              return (
                <li key={id}>
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
        <div className="admin-log">
          {user && <p className="username">{`Hello ${user.name}`}</p>}
          {!user && (
            <Link to="/logIn" className="primary-btn login-btn-nav">
              Login
            </Link>
          )}
          {user && (
            <Link to="/" className="primary-btn login-btn-nav" onClick={logout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
