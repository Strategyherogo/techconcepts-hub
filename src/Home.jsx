import './App.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">10+ Production Applications</div>
          <h1 className="hero-title">Building Revenue-Generating Tech Products</h1>
          <p className="hero-subtitle">
            From Chrome extensions for VCs to ML models with €1.2M impact. 
            Creating intelligent solutions across web, mobile, and enterprise platforms.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">€1.2M</span>
              <span className="stat-label">Business Impact</span>
            </div>
            <div className="stat">
              <span className="stat-number">74-82%</span>
              <span className="stat-label">ML Accuracy</span>
            </div>
            <div className="stat">
              <span className="stat-number">9</span>
              <span className="stat-label">LLM Providers</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Live Products</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">View Live Products</a>
            <a href="https://github.com/Strategyherogo" className="btn btn-secondary">GitHub Portfolio</a>
          </div>
        </div>
      </section>

      {/* Live Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title">Production-Ready Products</h2>
          <p className="section-subtitle">Revenue-generating applications deployed and running in production</p>
          
          <div className="products-grid">
            {/* DealFlow Analytics */}
            <div className="product-card featured">
              <div className="product-status live">LIVE</div>
              <div className="product-icon">📊</div>
              <h3>DealFlow Analytics</h3>
              <p className="product-description">
                Chrome extension for VCs. One-click company analysis with AI-powered investment scoring (0-100), 
                PDF report generation, and integration with SEC, USPTO, and news sources.
              </p>
              <div className="product-tech">
                <span>FastAPI</span>
                <span>Claude AI</span>
                <span>Chrome Extension</span>
                <span>Redis</span>
              </div>
              <div className="product-links">
                <a href="https://monkfish-app-7otbm.ondigitalocean.app/health" className="product-link">API Health ✓</a>
                <a href="https://github.com/Strategyherogo/dealflow-analytics" className="product-link">GitHub →</a>
              </div>
            </div>

            {/* LLMChat */}
            <div className="product-card featured">
              <div className="product-status ready">READY</div>
              <div className="product-icon">💬</div>
              <h3>LLMChat for macOS</h3>
              <p className="product-description">
                Native macOS app supporting 9 LLM providers (OpenAI, Claude, Gemini, Groq, Mistral, etc.). 
                Document processing, streaming responses, secure Keychain storage.
              </p>
              <div className="product-tech">
                <span>Swift</span>
                <span>SwiftUI</span>
                <span>macOS 13+</span>
                <span>9 LLMs</span>
              </div>
              <div className="product-links">
                <a href="https://github.com/Strategyherogo" className="product-link">View on GitHub →</a>
              </div>
            </div>

            {/* Teams Task Manager */}
            <div className="product-card featured">
              <div className="product-status ready">STORE READY</div>
              <div className="product-icon">📋</div>
              <h3>Teams Task Manager</h3>
              <p className="product-description">
                Microsoft Teams app with intelligent task management. Theme detection, user context integration, 
                responsive design. Revenue model: Free/$9.99 Pro/$29.99 Enterprise.
              </p>
              <div className="product-tech">
                <span>React 19</span>
                <span>TypeScript</span>
                <span>Teams SDK</span>
                <span>$100K+ Potential</span>
              </div>
              <div className="product-links">
                <a href="mailto:tech@techconcepts.org?subject=Teams%20Task%20Manager%20Inquiry" className="product-link">Request Demo →</a>
              </div>
            </div>

            {/* Slack Task Bot */}
            <div className="product-card">
              <div className="product-status live">DEPLOYED</div>
              <div className="product-icon">🤖</div>
              <h3>Slack Task Bot</h3>
              <p className="product-description">
                AI-powered task detection from messages. Integrates with Todoist, Notion, Trello. 
                Running on DigitalOcean with PM2 monitoring.
              </p>
              <div className="product-tech">
                <span>Python</span>
                <span>GPT-4</span>
                <span>Slack Bolt</span>
                <span>DigitalOcean</span>
              </div>
              <div className="product-links">
                <a href="https://github.com/Strategyherogo/AppsTest" className="product-link">GitHub →</a>
              </div>
            </div>

            {/* ML Platform */}
            <div className="product-card">
              <div className="product-status development">B2B SAAS</div>
              <div className="product-icon">🧠</div>
              <h3>ML Platform</h3>
              <p className="product-description">
                4 production ML models: Payment Recovery (74.1%), Churn Prediction (78%), 
                Fraud Detection (82%), Lead Scoring (73%). Tiered pricing from $99-$2,999/month.
              </p>
              <div className="product-tech">
                <span>FastAPI</span>
                <span>XGBoost</span>
                <span>Stripe</span>
                <span>Redis</span>
              </div>
              <div className="product-links">
                <a href="mailto:tech@techconcepts.org?subject=ML%20Platform%20Enterprise%20Inquiry" className="product-link">Contact for Pricing →</a>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="product-card">
              <div className="product-status development">GROWTH TOOL</div>
              <div className="product-icon">📈</div>
              <h3>Marketing Automation</h3>
              <p className="product-description">
                Automated campaign management with SendGrid, Mixpanel analytics, 
                and Chrome Web Store integration for extension marketing.
              </p>
              <div className="product-tech">
                <span>TypeScript</span>
                <span>SendGrid</span>
                <span>Mixpanel</span>
                <span>Express</span>
              </div>
              <div className="product-links">
                <a href="mailto:tech@techconcepts.org?subject=Marketing%20Automation%20Inquiry" className="product-link">Get Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Proven Business Impact</h2>
          
          <div className="achievement-cards">
            <div className="achievement-card">
              <div className="achievement-icon">💰</div>
              <h3>Payment Recovery ML Model</h3>
              <p className="achievement-metric">€1.2M Impact</p>
              <p>Increased recovery rate from 3% to 8% by analyzing 210K transactions. 
              Production model achieving 74.1% accuracy with XGBoost.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🎯</div>
              <h3>Multi-Platform Deployment</h3>
              <p className="achievement-metric">4 App Stores</p>
              <p>Products ready for Chrome Web Store, Microsoft Teams Store, 
              Mac App Store, and DigitalOcean App Platform.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🚀</div>
              <h3>Production Systems</h3>
              <p className="achievement-metric">24/7 Uptime</p>
              <p>Multiple production services running on DigitalOcean with monitoring, 
              automated deployments, and real user traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="technologies">
        <div className="container">
          <h2 className="section-title">Technology Expertise</h2>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Languages & Frameworks</h3>
              <div className="tech-tags">
                <span>Python</span>
                <span>TypeScript</span>
                <span>Swift</span>
                <span>React 19</span>
                <span>FastAPI</span>
                <span>SwiftUI</span>
                <span>Node.js</span>
                <span>Express</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>AI & Machine Learning</h3>
              <div className="tech-tags">
                <span>XGBoost</span>
                <span>Claude API</span>
                <span>GPT-4</span>
                <span>9 LLM Providers</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Platforms & Tools</h3>
              <div className="tech-tags">
                <span>Chrome Extensions</span>
                <span>Microsoft Teams</span>
                <span>Slack Apps</span>
                <span>macOS Native</span>
                <span>DigitalOcean</span>
                <span>GitHub Actions</span>
                <span>Redis</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Business Integration</h3>
              <div className="tech-tags">
                <span>Stripe Payments</span>
                <span>SendGrid</span>
                <span>Mixpanel</span>
                <span>SEC EDGAR API</span>
                <span>USPTO API</span>
                <span>Todoist</span>
                <span>Notion</span>
                <span>Trello</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Let's Build Something Amazing Together</h2>
          <p>From MVPs to enterprise solutions, I deliver production-ready applications that generate real business value.</p>
          <div className="cta-buttons">
            <a href="mailto:tech@techconcepts.org" className="btn btn-primary">Send Email</a>
            <a href="https://github.com/Strategyherogo" className="btn btn-secondary">View GitHub</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home