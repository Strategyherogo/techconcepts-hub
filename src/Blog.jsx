import { useState } from 'react'
import './App.css'

function Blog() {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setNewsletterStatus('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')
      setTimeout(() => setNewsletterStatus(''), 5000)
    }
  }
  const blogPosts = [
    {
      id: 1,
      title: "Ourense: Spain's Thermal Capital Meets Digital Innovation",
      date: "July 2025",
      category: "Spanish Tech Ecosystem",
      excerpt: "Exploring how Ourense in Galicia is combining its famous thermal springs heritage with emerging tech initiatives, creating a unique blend of wellness tourism and digital transformation.",
      tags: ["Galicia", "Innovation", "Tourism Tech", "Digital Transformation"],
      readTime: "5 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/ourense-spains-thermal-capital-evgeny-goncharov"
    },
    {
      id: 2,
      title: "Parque Tecnológico de Córdoba: Andalusia's Innovation Hub",
      date: "June 2025",
      category: "Spanish Tech Ecosystem",
      excerpt: "Deep dive into Córdoba's Technology Park, showcasing how this historic city is building a thriving innovation ecosystem with 300+ tech companies and cutting-edge research facilities.",
      tags: ["Córdoba", "Tech Parks", "Andalusia", "Innovation"],
      readTime: "6 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/parque-tecnológico-de-córdoba-evgeny-goncharov"
    },
    {
      id: 3,
      title: "Granada: El Arma Secreta de España en MedTech",
      date: "June 2025",
      category: "Spanish Tech Ecosystem",
      excerpt: "Granada emerges as Spain's secret weapon in medical technology, with the PTS Health Sciences Park hosting 100+ biotech companies and pioneering research in personalized medicine.",
      tags: ["Granada", "MedTech", "HealthTech", "Biotechnology"],
      readTime: "7 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/granada-el-arma-secreta-españa-medtech-evgeny-goncharov"
    },
    {
      id: 4,
      title: "Sevilla: Del Flamenco Al Tech",
      date: "June 2025",
      category: "Spanish Tech Ecosystem",
      excerpt: "From flamenco to tech: How Seville is transforming its cultural heritage into a competitive advantage, attracting 450+ tech companies and becoming an AI innovation hub in Southern Europe.",
      tags: ["Seville", "AI", "Digital Transformation", "Cartuja"],
      readTime: "8 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/sevilla-del-flamenco-al-tech-evgeny-goncharov"
    },
    {
      id: 5,
      title: "Building Chrome Extensions for VCs: The DealFlow Analytics Story",
      date: "August 2025",
      category: "Product Development",
      excerpt: "A deep dive into creating a Chrome extension that helps VCs analyze companies instantly. From SEC EDGAR integration to AI-powered scoring, learn how we built a tool that streamlines investment decisions.",
      tags: ["Chrome Extension", "VC Tools", "Product Launch"],
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "ML Models in Production: €1.2M Impact Case Study",
      date: "May 2025",
      category: "Machine Learning",
      excerpt: "How we increased payment recovery from 3% to 8% using XGBoost models. A detailed look at feature engineering, model deployment, and measuring real business impact in production environments.",
      tags: ["Machine Learning", "XGBoost", "Case Study", "FinTech"],
      readTime: "10 min read"
    },
    {
      id: 7,
      title: "The Rise of AI-Driven Cybercrime: What Businesses Need to Know",
      date: "April 2025",
      category: "Cybersecurity",
      excerpt: "Analyzing the emergence of AI-powered cyber threats and how businesses can protect themselves. From deepfakes to automated attacks, understanding the new threat landscape.",
      tags: ["Cybersecurity", "AI", "Business Security", "Risk Management"],
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Innovate Spain Podcast: Tech Stories from the Iberian Peninsula",
      date: "March 2025",
      category: "Podcast & Media",
      excerpt: "Launching a tech podcast focused on Spanish innovation. Interviews with founders, deep dives into regional ecosystems, and insights into Europe's fastest-growing tech market.",
      tags: ["Podcast", "Spanish Tech", "Innovation", "Media"],
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Building SaaS Products for Microsoft Teams: A Technical Guide",
      date: "February 2025",
      category: "Product Development",
      excerpt: "Complete guide to building, monetizing, and distributing Teams apps. From SDK integration to store submission, learn the technical and business aspects of the Teams ecosystem.",
      tags: ["Microsoft Teams", "SaaS", "Enterprise Software"],
      readTime: "12 min read"
    },
    {
      id: 10,
      title: "LLM Integration Strategies: Supporting 9 Providers in One App",
      date: "January 2025",
      category: "AI & Development",
      excerpt: "Architectural decisions and implementation patterns for building LLMChat - a macOS app that seamlessly integrates OpenAI, Claude, Gemini, and 6 other LLM providers.",
      tags: ["LLM", "AI", "macOS Development", "Architecture"],
      readTime: "9 min read"
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-title">Tech Insights & Innovation Stories</h1>
          <p className="blog-subtitle">
            Exploring technology trends, regional innovation ecosystems, and practical product development insights
          </p>
          <div className="blog-stats">
            <span>19K+ LinkedIn Followers</span>
            <span>•</span>
            <span>50+ Articles Published</span>
            <span>•</span>
            <span>Focus on Spanish Tech</span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="container">
          <div className="featured-card">
            <div className="featured-badge">Latest Series</div>
            <h2>Spain's Hidden Tech Gems: A Journey Through Innovation</h2>
            <p className="featured-excerpt">
              From Ourense's thermal springs to Córdoba's tech parks, I'm documenting Spain's remarkable tech transformation. 
              Each city tells a unique story of how traditional industries are embracing digital innovation. With over 19K 
              followers on LinkedIn, this series explores the untold stories of Spanish tech ecosystems, revealing opportunities 
              that most international investors overlook.
            </p>
            <div className="featured-meta">
              <span>July 2025</span>
              <span>•</span>
              <span>Ongoing Series</span>
              <span>•</span>
              <span>Spanish Tech Ecosystem</span>
            </div>
            <a href="https://linkedin.com/in/evgoncharov" className="btn btn-primary">Follow the Series on LinkedIn →</a>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="blog-header">
            <h2>Latest Articles</h2>
            <div className="blog-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Spanish Tech</button>
              <button className="filter-btn">Product Dev</button>
              <button className="filter-btn">Machine Learning</button>
              <button className="filter-btn">Market Analysis</button>
            </div>
          </div>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">#{tag}</span>
                  ))}
                </div>
                <div className="blog-card-footer">
                  <span className="read-time">{post.readTime}</span>
                  <a href="https://linkedin.com/in/evgoncharov" className="read-more">Read on LinkedIn →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <h2>Stay Updated on Tech & Innovation</h2>
            <p>Get weekly insights on Spanish tech ecosystems, product development strategies, and ML implementation guides.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            {newsletterStatus && <p className="newsletter-success">{newsletterStatus}</p>}
            <p className="newsletter-note">Join 19K+ professionals following my tech journey</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="blog-topics">
        <div className="container">
          <h2>Key Topics I Cover</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🏗️</div>
              <h3>Regional Tech Ecosystems</h3>
              <p>Deep dives into Spanish tech hubs, from Andalusia to Valencia, uncovering hidden innovation centers and success stories.</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Practical ML implementation guides, production deployment strategies, and real-world case studies with measurable impact.</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🚀</div>
              <h3>Product Development</h3>
              <p>From Chrome extensions to Teams apps, sharing technical insights and business strategies for building successful products.</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">💼</div>
              <h3>B2B SaaS Growth</h3>
              <p>Marketing strategies, distribution channels, and monetization models for enterprise software and developer tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog