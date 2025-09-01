import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="nav-brand">TechConcepts</Link>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="/#products">Products</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>TechConcepts</h4>
                <p>Building production-ready applications across web, mobile, and enterprise platforms.</p>
                <div className="footer-stats">
                  <span>10+ Products</span>
                  <span>•</span>
                  <span>€1.2M Impact</span>
                  <span>•</span>
                  <span>4 Live Services</span>
                </div>
              </div>
              <div className="footer-section">
                <h4>Live Products</h4>
                <ul>
                  <li><a href="https://monkfish-app-7otbm.ondigitalocean.app">DealFlow Analytics API</a></li>
                  <li><a href="#">LLMChat for macOS</a></li>
                  <li><a href="#">Teams Task Manager</a></li>
                  <li><a href="#">ML Platform</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://linkedin.com/in/evgoncharov">LinkedIn (19K followers)</a></li>
                  <li><a href="https://github.com/Strategyherogo">GitHub Portfolio</a></li>
                  <li><a href="mailto:tech@techconcepts.org">tech@techconcepts.org</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 TechConcepts by Evgeny Goncharov. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App