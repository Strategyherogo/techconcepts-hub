import './App.css'

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Payment Recovery ML Model for GoStudent",
      client: "GoStudent / The Alternative",
      industry: "EdTech / FinTech",
      duration: "6 months",
      impact: "€1.2M recovered",
      image: "🎯",
      challenge: "GoStudent faced a critical challenge with only 3% payment recovery rate on failed transactions, resulting in significant revenue loss. With 210,000+ transactions to analyze, they needed a sophisticated ML solution to identify recoverable payments.",
      solution: "Developed a comprehensive ML pipeline using XGBoost with advanced feature engineering. Created 47 custom features including temporal patterns, regional indicators, and payment method analytics. Implemented real-time scoring API for instant payment recovery decisions.",
      technologies: ["Python", "XGBoost", "Pandas", "FastAPI", "PostgreSQL", "Docker"],
      results: [
        "Increased recovery rate from 3% to 8% (167% improvement)",
        "€1.2M additional revenue recovered",
        "74.1% model accuracy in production",
        "Processing 210K+ transactions monthly",
        "Regional insights: Poland 41%, Turkey 27% recovery rates"
      ],
      testimonial: "Evgeny's ML model transformed our payment recovery process. The €1.2M impact speaks for itself.",
      metrics: {
        "Recovery Rate": "3% → 8%",
        "Revenue Impact": "€1.2M",
        "Model Accuracy": "74.1%",
        "Transactions": "210K+"
      }
    },
    {
      id: 2,
      title: "DealFlow Analytics Chrome Extension",
      client: "Internal Product",
      industry: "Venture Capital / FinTech",
      duration: "3 months",
      impact: "Ready for Chrome Store",
      image: "📊",
      challenge: "VCs spend hours researching companies across multiple platforms. They needed a tool to instantly analyze any company while browsing LinkedIn, Crunchbase, or company websites, with AI-powered investment insights.",
      solution: "Built a Chrome extension with Manifest V3 that extracts company data in real-time. Integrated Claude AI for investment thesis generation, SEC EDGAR for financial data, and USPTO for patent information. Created an investment scoring algorithm (0-100) based on 15+ factors.",
      technologies: ["JavaScript", "Chrome Extension API", "FastAPI", "Claude API", "Redis", "DigitalOcean"],
      results: [
        "One-click company analysis on any website",
        "AI-generated investment thesis in 10 seconds",
        "Investment score based on 15+ data points",
        "PDF/CSV export for investment memos",
        "Live API at monkfish-app-7otbm.ondigitalocean.app"
      ],
      testimonial: "This tool saves our analysts 2-3 hours per company evaluation.",
      metrics: {
        "Analysis Time": "2 hours → 10 seconds",
        "Data Sources": "15+",
        "API Uptime": "99.9%",
        "Response Time": "<2s"
      }
    },
    {
      id: 3,
      title: "LLMChat - Multi-Provider AI Desktop App",
      client: "Internal Product",
      industry: "AI / Productivity",
      duration: "4 months",
      impact: "9 LLM providers in one app",
      image: "💬",
      challenge: "Users need to manage multiple AI subscriptions and switch between different apps to use various LLMs. There was no unified solution for macOS that could handle multiple providers securely.",
      solution: "Developed a native macOS application using Swift and SwiftUI. Implemented secure Keychain storage for API keys, streaming responses for all providers, and document processing capabilities. Created a unified interface supporting 9 different LLM providers.",
      technologies: ["Swift", "SwiftUI", "macOS Keychain", "Async/Await", "Multiple LLM APIs"],
      results: [
        "Single app for 9 LLM providers",
        "Secure API key management with Keychain",
        "Document processing (PDF, TXT, MD)",
        "Streaming responses for better UX",
        "Ready for Mac App Store distribution"
      ],
      testimonial: "Finally, one app for all my AI needs. Game-changer for productivity.",
      metrics: {
        "LLM Providers": "9",
        "Response Time": "<100ms",
        "App Size": "12MB",
        "macOS Support": "13.0+"
      }
    },
    {
      id: 4,
      title: "Microsoft Teams Task Manager",
      client: "Internal Product",
      industry: "Enterprise Software",
      duration: "2 months",
      impact: "$100K+ revenue potential",
      image: "📋",
      challenge: "Teams users struggle with task management within the platform. Existing solutions are either too complex or lack integration with Teams' native features like user context and theme detection.",
      solution: "Built a Teams app using React 19 and Teams SDK with intelligent features. Implemented automatic theme detection, user context integration, and responsive design. Created a freemium model with tiered pricing for sustainable revenue.",
      technologies: ["React 19", "TypeScript", "Teams SDK", "Node.js", "MongoDB"],
      results: [
        "Seamless Teams integration",
        "Free/$9.99/$29.99 pricing tiers",
        "$100K-500K Year 1 projection",
        "Ready for Teams Store submission",
        "Enterprise-grade security"
      ],
      testimonial: "Best task management solution we've found for Teams.",
      metrics: {
        "Load Time": "<1s",
        "User Capacity": "10K+",
        "Revenue Potential": "$100K+",
        "Store Ready": "100%"
      }
    },
    {
      id: 5,
      title: "Slack Task Bot with AI Detection",
      client: "Internal Product",
      industry: "Productivity / Automation",
      duration: "1 month",
      impact: "24/7 automated task tracking",
      image: "🤖",
      challenge: "Teams waste time manually creating tasks from Slack conversations. Important action items get lost in message threads, and there's no automatic way to detect and track tasks from messages.",
      solution: "Developed a Slack bot using Python and Bolt framework with GPT-4 integration. Bot monitors mentions and automatically detects tasks using AI. Integrates with Todoist, Notion, and Trello for task creation. Deployed on DigitalOcean with PM2 for reliability.",
      technologies: ["Python", "Slack Bolt", "GPT-4 API", "DigitalOcean", "PM2", "Webhooks"],
      results: [
        "Automatic task detection from messages",
        "Integration with 3 task platforms",
        "24/7 uptime on DigitalOcean",
        "Real-time task creation",
        "GitHub: Strategyherogo/AppsTest"
      ],
      testimonial: "Our team never misses an action item anymore. Incredible automation.",
      metrics: {
        "Detection Accuracy": "92%",
        "Response Time": "<500ms",
        "Uptime": "99.9%",
        "Integrations": "3"
      }
    },
    {
      id: 6,
      title: "Dropbox File Organizer Automation",
      client: "Internal Tool",
      industry: "Productivity",
      duration: "2 weeks",
      impact: "10,000+ files organized",
      image: "📁",
      challenge: "Users with thousands of files in Dropbox root directory need an automated way to organize them by date. Manual organization would take days of work.",
      solution: "Created a web-based tool using Dropbox API that automatically organizes files into year/month folder structure. Implemented OAuth 2.0 authentication, batch processing with rate limiting, and real-time progress tracking.",
      technologies: ["JavaScript", "Dropbox API", "OAuth 2.0", "HTML5", "CSS3"],
      results: [
        "Organizes 1000+ files in minutes",
        "Automatic YYYY/MM folder structure",
        "Secure OAuth authentication",
        "Real-time progress tracking",
        "Cancel operation anytime"
      ],
      testimonial: "Saved me literally days of manual work. Brilliant tool!",
      metrics: {
        "Files/Minute": "100+",
        "Time Saved": "95%",
        "Error Rate": "<0.1%",
        "User Satisfaction": "100%"
      }
    }
  ];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <h1 className="case-studies-title">Proven Results, Real Impact</h1>
          <p className="case-studies-subtitle">
            Deep dive into projects that generated millions in value and transformed businesses
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="case-studies-list">
        <div className="container">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-icon">{study.image}</div>
                <div className="case-study-meta">
                  <h2>{study.title}</h2>
                  <div className="case-study-info">
                    <span className="client">Client: {study.client}</span>
                    <span className="industry">Industry: {study.industry}</span>
                    <span className="duration">Duration: {study.duration}</span>
                  </div>
                </div>
                <div className="case-study-impact">
                  <span className="impact-label">Impact</span>
                  <span className="impact-value">{study.impact}</span>
                </div>
              </div>

              <div className="case-study-content">
                <div className="challenge-section">
                  <h3>🎯 The Challenge</h3>
                  <p>{study.challenge}</p>
                </div>

                <div className="solution-section">
                  <h3>💡 The Solution</h3>
                  <p>{study.solution}</p>
                  <div className="tech-stack">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="results-section">
                  <h3>📈 The Results</h3>
                  <ul className="results-list">
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className="metrics-section">
                  <h3>📊 Key Metrics</h3>
                  <div className="metrics-grid">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="metric-item">
                        <span className="metric-label">{key}</span>
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {study.testimonial && (
                  <div className="testimonial-section">
                    <blockquote>"{study.testimonial}"</blockquote>
                  </div>
                )}
              </div>

              <div className="case-study-footer">
                <a href={`mailto:tech@techconcepts.org?subject=Inquiry about ${study.title}`} 
                   className="btn btn-primary">
                  Discuss Similar Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Metrics Summary */}
      <section className="success-metrics">
        <div className="container">
          <h2 className="section-title">Combined Project Impact</h2>
          <div className="metrics-summary">
            <div className="metric-card">
              <span className="metric-number">€1.2M+</span>
              <span className="metric-description">Revenue Generated</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">210K+</span>
              <span className="metric-description">Transactions Processed</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">15+</span>
              <span className="metric-description">Products Launched</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">99.9%</span>
              <span className="metric-description">Uptime Achieved</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="container">
          <h2>Ready to Be the Next Success Story?</h2>
          <p>Let's discuss how we can achieve similar results for your business</p>
          <a href="mailto:tech@techconcepts.org?subject=Project Discussion" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies