import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Handle hash changes for section navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '')
      if (sectionId === 'products' || sectionId === 'contact') {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [location])

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">TechConcepts</Link>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation