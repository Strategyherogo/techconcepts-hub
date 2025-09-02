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
      title: "The Hidden Tech Hub of Córdoba: Where History Meets Innovation",
      date: "December 2024",
      category: "Spanish Tech Ecosystem",
      excerpt: "Discover how Córdoba is transforming from a historical jewel to a thriving tech ecosystem with 300+ tech companies and innovative startups like Oleoestepa revolutionizing traditional industries through AI.",
      tags: ["Andalusia", "Tech Hubs", "Innovation", "AI"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Granada's Tech Renaissance: From Alhambra to Algorithms",
      date: "December 2024",
      category: "Spanish Tech Ecosystem",
      excerpt: "Exploring Granada's emergence as a tech powerhouse with the PTS Health Sciences Park hosting 100+ companies and the University of Granada driving AI research and quantum computing initiatives.",
      tags: ["Granada", "HealthTech", "University Innovation"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Seville: The AI Capital of Southern Europe",
      date: "November 2024",
      category: "Spanish Tech Ecosystem",
      excerpt: "How Seville is positioning itself as an AI leader with the Cartuja Science and Technology Park, 450+ tech companies, and major players like Airbus and Huawei establishing innovation centers.",
      tags: ["Seville", "AI", "Cartuja Park", "Innovation"],
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Building Chrome Extensions for VCs: The DealFlow Analytics Story",
      date: "November 2024",
      category: "Product Development",
      excerpt: "A deep dive into creating a Chrome extension that helps VCs analyze companies instantly. From SEC EDGAR integration to AI-powered scoring, learn how we built a tool that streamlines investment decisions.",
      tags: ["Chrome Extension", "VC Tools", "Product Launch"],
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "ML Models in Production: €1.2M Impact Case Study",
      date: "October 2024",
      category: "Machine Learning",
      excerpt: "How we increased payment recovery from 3% to 8% using XGBoost models. A detailed look at feature engineering, model deployment, and measuring real business impact in production environments.",
      tags: ["Machine Learning", "XGBoost", "Case Study", "FinTech"],
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "The Rise of Regional Tech Ecosystems in Spain",
      date: "October 2024",
      category: "Market Analysis",
      excerpt: "Why regional tech hubs are outperforming expectations in Spain. From Málaga's cybersecurity cluster to Valencia's gaming industry, discover the specialized strengths of each region.",
      tags: ["Spain", "Tech Ecosystem", "Regional Development"],
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Building SaaS Products for Microsoft Teams: A Technical Guide",
      date: "September 2024",
      category: "Product Development",
      excerpt: "Complete guide to building, monetizing, and distributing Teams apps. From SDK integration to store submission, learn the technical and business aspects of the Teams ecosystem.",
      tags: ["Microsoft Teams", "SaaS", "Enterprise Software"],
      readTime: "12 min read"
    },
    {
      id: 8,
      title: "LLM Integration Strategies: Supporting 9 Providers in One App",
      date: "September 2024",
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
            <div className="featured-badge">Featured Story</div>
            <h2>Andalusia's Tech Revolution: Beyond the Tourist Trail</h2>
            <p className="featured-excerpt">
              While millions visit Andalusia for its beaches and monuments, a quiet tech revolution is transforming 
              cities like Málaga, Seville, and Granada into innovation powerhouses. With over 2,000 tech companies 
              and specialized clusters in cybersecurity, aerospace, and health tech, Andalusia is rewriting its 
              economic narrative.
            </p>
            <div className="featured-meta">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Regional Innovation</span>
            </div>
            <a href="https://linkedin.com/in/evgoncharov" className="btn btn-primary">Read on LinkedIn →</a>
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