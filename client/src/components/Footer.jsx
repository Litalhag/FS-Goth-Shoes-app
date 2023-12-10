import React from 'react'

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Goth Shoes All rights reserved</p>
      <div className="footer-links">
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  )
}

export default Footer
