import './App.css'

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Evgeny Goncharov</h1>
          <p className="about-subtitle">
            IT & Product Operations Director | Machine Learning Expert | Full-Stack Developer
          </p>
          <div className="about-location">📍 Madrid, Spain • 🌐 19K+ LinkedIn Followers</div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <div className="container">
          <div className="bio-content">
            <div className="bio-main">
              <h2>Building Technology That Delivers Impact</h2>
              <p>
                I'm a technology leader with over a decade of experience transforming ideas into 
                production-ready solutions that generate real business value. From developing ML models 
                that recovered €1.2M in payments to creating Chrome extensions for VCs, I bridge the gap 
                between cutting-edge technology and practical business applications.
              </p>
              
              <p>
                Currently based in Madrid, I serve as IT & Product Operations Director while building 
                a portfolio of revenue-generating SaaS products. My work spans from enterprise ML platforms 
                achieving 74-82% accuracy to consumer applications supporting 9 different LLM providers.
              </p>

              <p>
                Beyond coding, I'm passionate about the Spanish tech ecosystem, regularly writing about 
                innovation in Andalusia and other regions. I believe in building technology that not only 
                works but creates measurable impact for businesses and their customers.
              </p>

              <div className="bio-highlights">
                <h3>Key Achievements</h3>
                <ul>
                  <li>🚀 Increased payment recovery from 3% to 8% through ML models (€1.2M impact)</li>
                  <li>📊 Built and deployed 10+ production applications across multiple platforms</li>
                  <li>🤖 Developed ML models with 74-82% accuracy in production environments</li>
                  <li>💼 Created revenue-ready products with $100K+ annual potential</li>
                  <li>🌍 Growing thought leadership with 19K+ LinkedIn followers</li>
                  <li>🎓 Darden School of Business, University of Virginia alumnus</li>
                </ul>
              </div>
            </div>

            <div className="bio-sidebar">
              <div className="expertise-card">
                <h3>Core Expertise</h3>
                <div className="expertise-list">
                  <div className="expertise-item">
                    <span className="expertise-icon">🧠</span>
                    <div>
                      <strong>Machine Learning</strong>
                      <p>XGBoost, Pandas, Production ML Systems</p>
                    </div>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">🚀</span>
                    <div>
                      <strong>Full-Stack Development</strong>
                      <p>Python, TypeScript, Swift, React</p>
                    </div>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">☁️</span>
                    <div>
                      <strong>Cloud & DevOps</strong>
                      <p>DigitalOcean, GitHub Actions, Docker</p>
                    </div>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">📱</span>
                    <div>
                      <strong>Platform Development</strong>
                      <p>Chrome Extensions, Teams Apps, macOS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="languages-card">
                <h3>Languages</h3>
                <ul>
                  <li>🇬🇧 English - Full Professional</li>
                  <li>🇪🇸 Spanish - Professional Working</li>
                  <li>🇫🇷 French - Elementary</li>
                  <li>🇷🇺 Russian - Native</li>
                </ul>
              </div>

              <div className="interests-card">
                <h3>Current Focus</h3>
                <ul>
                  <li>🎙️ Tech podcasts & content creation</li>
                  <li>🏗️ Spanish tech ecosystem development</li>
                  <li>🤖 AI/ML implementation for enterprises</li>
                  <li>📈 SaaS product development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Present</div>
              <div className="timeline-content">
                <h3>IT & Product Operations Director</h3>
                <p className="company">Innovate Spain: The IT Chronicles</p>
                <p>Leading technology innovation and product development in the Spanish market, 
                focusing on bridging international tech with local ecosystems.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2023-2024</div>
              <div className="timeline-content">
                <h3>ML & Analytics Consultant</h3>
                <p className="company">GoStudent / The Alternative</p>
                <p>Developed ML models for payment recovery achieving €1.2M impact. 
                Built analytics systems processing 210K+ transactions with 74.1% accuracy.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Ongoing</div>
              <div className="timeline-content">
                <h3>Founder & Product Developer</h3>
                <p className="company">TechConcepts</p>
                <p>Building portfolio of SaaS products including DealFlow Analytics (Chrome extension), 
                Teams Task Manager, LLMChat for macOS, and enterprise ML platform.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Volunteer</div>
              <div className="timeline-content">
                <h3>Product Management Mentor</h3>
                <p className="company">Meander</p>
                <p>Mentoring aspiring product managers on strategy, execution, and career development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Whether you're looking to build an MVP, scale your product, or implement ML solutions, 
          I'm here to help turn your vision into reality.</p>
          <div className="cta-buttons">
            <a href="mailto:tech@techconcepts.org" className="btn btn-primary">Get in Touch</a>
            <a href="https://linkedin.com/in/evgoncharov" className="btn btn-secondary">LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About