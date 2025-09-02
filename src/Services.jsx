import './App.css'

function Services() {
  const services = [
    {
      title: "Machine Learning Solutions",
      price: "From €5,000/month",
      description: "Production-ready ML models with proven ROI",
      features: [
        "Custom model development (XGBoost, Neural Networks)",
        "Feature engineering and optimization",
        "Production deployment with monitoring",
        "Performance guarantees (70%+ accuracy)",
        "Real-time inference APIs"
      ],
      caseStudy: "€1.2M recovered through payment prediction models",
      icon: "🧠"
    },
    {
      title: "Chrome Extension Development",
      price: "€15,000 - €40,000",
      description: "Enterprise-grade browser extensions",
      features: [
        "Manifest V3 compliant development",
        "API integrations (SEC, USPTO, custom)",
        "Chrome Web Store submission",
        "User analytics and tracking",
        "Ongoing maintenance available"
      ],
      caseStudy: "DealFlow Analytics: VC investment analysis tool",
      icon: "🔧"
    },
    {
      title: "SaaS Product Development",
      price: "From €25,000",
      description: "End-to-end SaaS application development",
      features: [
        "Full-stack development (React, Node.js, Python)",
        "Payment integration (Stripe, PayPal)",
        "Multi-tenant architecture",
        "Admin dashboards and analytics",
        "Deployment and DevOps setup"
      ],
      caseStudy: "Teams Task Manager: $100K+ revenue potential",
      icon: "🚀"
    },
    {
      title: "Enterprise Integrations",
      price: "€10,000 - €30,000",
      description: "Seamless integration with enterprise platforms",
      features: [
        "Microsoft Teams apps development",
        "Slack bot creation and deployment",
        "OAuth 2.0 implementation",
        "Webhook and real-time sync",
        "Enterprise security compliance"
      ],
      caseStudy: "Slack Task Bot: Automated task management",
      icon: "🔗"
    },
    {
      title: "Data Analytics Consulting",
      price: "€2,000/day",
      description: "Transform your data into actionable insights",
      features: [
        "SQL optimization and database design",
        "Custom analytics dashboards",
        "ETL pipeline development",
        "Business intelligence reports",
        "Performance optimization"
      ],
      caseStudy: "210K transactions analyzed for GoStudent",
      icon: "📊"
    },
    {
      title: "Technical Architecture Review",
      price: "€5,000 fixed",
      description: "Comprehensive technical audit and roadmap",
      features: [
        "Code quality assessment",
        "Scalability analysis",
        "Security vulnerability scan",
        "Performance bottleneck identification",
        "Detailed improvement roadmap"
      ],
      caseStudy: "Helped 3 startups scale to 100K+ users",
      icon: "🏗️"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery Call",
      description: "30-minute call to understand your needs and objectives",
      duration: "Day 1"
    },
    {
      step: 2,
      title: "Proposal & Estimate",
      description: "Detailed technical proposal with timeline and fixed pricing",
      duration: "Day 2-3"
    },
    {
      step: 3,
      title: "Development Sprint",
      description: "Agile development with weekly updates and demos",
      duration: "2-8 weeks"
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Deployment, documentation, and 30-day warranty",
      duration: "Final week"
    }
  ];

  const technologies = {
    "Languages": ["Python", "TypeScript", "JavaScript", "Swift", "SQL"],
    "Frameworks": ["React", "FastAPI", "Node.js", "Express", "SwiftUI"],
    "ML/AI": ["XGBoost", "Pandas", "Scikit-learn", "Claude API", "OpenAI"],
    "Cloud": ["DigitalOcean", "AWS", "GitHub Actions", "Docker", "PM2"],
    "Databases": ["PostgreSQL", "Redis", "SQLite", "MongoDB"],
    "Platforms": ["Chrome Extensions", "Microsoft Teams", "Slack", "macOS"]
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="services-title">Transform Your Ideas Into Revenue</h1>
          <p className="services-subtitle">
            From ML models to SaaS products, I deliver production-ready solutions 
            with measurable business impact
          </p>
          <div className="services-stats">
            <div className="stat-item">
              <span className="stat-value">€1.2M+</span>
              <span className="stat-label">Business Impact</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">74-82%</span>
              <span className="stat-label">ML Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">30 days</span>
              <span className="stat-label">Avg. Delivery</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">On-Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <h2 className="section-title">Services & Solutions</h2>
          <p className="section-subtitle">Choose from proven solutions or get a custom quote</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-case-study">
                  <strong>Success Story:</strong> {service.caseStudy}
                </div>
                <a href="mailto:tech@techconcepts.org?subject=Inquiry: {service.title}" 
                   className="btn btn-primary">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How We Work Together</h2>
          <p className="section-subtitle">Simple, transparent process from idea to deployment</p>
          
          <div className="process-timeline">
            {process.map((item) => (
              <div key={item.step} className="process-step">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="step-duration">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Technology Expertise</h2>
          <p className="section-subtitle">Modern tech stack for scalable solutions</p>
          
          <div className="tech-categories">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="tech-category">
                <h3>{category}</h3>
                <div className="tech-items">
                  {items.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-card">
            <h2>100% Satisfaction Guarantee</h2>
            <p>Every project comes with:</p>
            <ul>
              <li>✅ 30-day bug-fix warranty</li>
              <li>✅ Complete documentation</li>
              <li>✅ Source code ownership</li>
              <li>✅ Deployment support</li>
              <li>✅ Knowledge transfer session</li>
            </ul>
            <p className="guarantee-note">
              If you're not satisfied with the results, I'll work with you until you are 
              or provide a full refund.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's discuss your project and find the perfect solution</p>
          <div className="cta-buttons">
            <a href="mailto:tech@techconcepts.org?subject=Project Inquiry - Free Consultation" className="btn btn-primary">
              Schedule Free Consultation
            </a>
            <a href="mailto:tech@techconcepts.org?subject=Request 30-min Call" className="btn btn-secondary">
              Request 30-min Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services