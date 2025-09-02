import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SEO() {
  const location = useLocation()

  useEffect(() => {
    // Define page-specific SEO data
    const seoData = {
      '/': {
        title: 'TechConcepts - ML Consultant Madrid | Chrome Extension Developer',
        description: 'Machine learning consultant in Madrid. Chrome extensions, SaaS development, ML models with €1.2M proven impact. Expert in Spain tech ecosystem.',
        keywords: 'machine learning consultant Madrid, Chrome extension developer, SaaS product development Spain, ML models business impact'
      },
      '/services': {
        title: 'Services - ML & SaaS Development Madrid | TechConcepts',
        description: 'Machine learning consulting, Chrome extension development, SaaS products in Madrid Spain. From €2,000/day. Proven €1.2M business impact.',
        keywords: 'ML consulting Madrid, Chrome extension development services, SaaS development Spain, enterprise integration'
      },
      '/case-studies': {
        title: 'Case Studies - €1.2M ML Impact | Chrome Extensions | TechConcepts',
        description: 'Real results: €1.2M payment recovery with ML, Chrome extensions for VCs, Teams apps. Proven success stories from Madrid-based consultant.',
        keywords: 'ML case studies, Chrome extension portfolio, SaaS success stories, payment recovery ML'
      },
      '/about': {
        title: 'Evgeny Goncharov - ML Expert & IT Director Madrid | TechConcepts',
        description: 'Madrid-based ML consultant and IT Director. 10+ production apps, €1.2M business impact, Darden MBA, 19K LinkedIn followers. Spanish tech expert.',
        keywords: 'Evgeny Goncharov, ML expert Madrid, IT Director Spain, Spanish tech ecosystem'
      },
      '/blog': {
        title: 'Spanish Tech Blog - ML & Innovation Insights | TechConcepts',
        description: 'Spanish tech ecosystem insights, ML implementation guides, Chrome extension tutorials. From Madrid tech consultant with 19K LinkedIn followers.',
        keywords: 'Spanish tech blog, ML tutorials, Chrome extension guides, Madrid tech ecosystem'
      }
    }

    // Get current path
    const currentPath = location.pathname
    const pageData = seoData[currentPath] || seoData['/']

    // Update document title
    document.title = pageData.title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = pageData.description

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = pageData.keywords

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = pageData.title

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.content = pageData.description

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) twitterTitle.content = pageData.title

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) twitterDescription.content = pageData.description

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://techconcepts.org${currentPath === '/' ? '' : '/#' + currentPath}`

  }, [location])

  return null
}

export default SEO