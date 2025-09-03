import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Navigation() {
  const { t } = useTranslation()
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
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/services">{t('nav.services')}</Link></li>
          <li><Link to="/case-studies">{t('nav.caseStudies')}</Link></li>
          <li><Link to="/about">{t('nav.about')}</Link></li>
          <li><Link to="/blog">{t('nav.blog')}</Link></li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              {t('nav.contact')}
            </a>
          </li>
          <li className="language-switcher-nav">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation