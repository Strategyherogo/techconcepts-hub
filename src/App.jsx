import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">TechConcepts</div>
          <ul className="nav-menu">
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">TechConcepts Creation Hub</h1>
          <p className="hero-subtitle">
            Building intelligent solutions for modern businesses
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">🎙️</div>
              <h3>Tech Podcasts</h3>
              <p>Deep dives into technology trends, innovation stories from Spanish tech hubs, and conversations with industry leaders.</p>
              <a href="#" className="product-link">Listen Now →</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🔍</div>
              <h3>DealFlow Analytics</h3>
              <p>Chrome extension for VCs. One-click company analysis on LinkedIn, Crunchbase, or any website. AI-powered investment insights.</p>
              <a href="https://monkfish-app-7otbm.ondigitalocean.app" className="product-link">Learn More →</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🤖</div>
              <h3>Slack Task Bot</h3>
              <p>Intelligent task management for teams. Automatically tracks mentions, creates task lists, and keeps your team organized.</p>
              <a href="#" className="product-link">Add to Slack →</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🧠</div>
              <h3>AI Solutions</h3>
              <p>Custom AI implementations including ML models, LLM integrations, and intelligent automation for enterprise clients.</p>
              <a href="#" className="product-link">Explore AI →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose TechConcepts</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Production-Ready</h3>
              <p>All our products are battle-tested in production environments with real users.</p>
            </div>
            <div className="feature">
              <h3>Data-Driven</h3>
              <p>Leveraging advanced analytics and ML models to deliver measurable impact.</p>
            </div>
            <div className="feature">
              <h3>Enterprise-Grade</h3>
              <p>Built with security, scalability, and reliability as core principles.</p>
            </div>
            <div className="feature">
              <h3>Innovation Focus</h3>
              <p>Constantly exploring new technologies to solve tomorrow's challenges today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how TechConcepts can help you leverage technology for growth.</p>
          <a href="mailto:contact@techconcepts.io" className="btn btn-primary">Start a Conversation</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>TechConcepts</h4>
              <p>Building the future of business technology.</p>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="#">Podcasts</a></li>
                <li><a href="#">DealFlow Analytics</a></li>
                <li><a href="#">Slack Bot</a></li>
                <li><a href="#">AI Solutions</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://linkedin.com/in/evgoncharov">LinkedIn</a></li>
                <li><a href="https://github.com/Strategyherogo">GitHub</a></li>
                <li><a href="mailto:contact@techconcepts.io">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 TechConcepts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
