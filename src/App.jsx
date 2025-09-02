import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './Home'
import Navigation from './Navigation'
import './App.css'

// Lazy load About and Blog pages for better performance
const About = lazy(() => import('./About'))
const Blog = lazy(() => import('./Blog'))
const NotFound = lazy(() => import('./NotFound'))

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

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
                  <li><a href="https://github.com/Strategyherogo">LLMChat for macOS</a></li>
                  <li><a href="mailto:tech@techconcepts.org?subject=Teams%20Task%20Manager">Teams Task Manager</a></li>
                  <li><a href="mailto:tech@techconcepts.org?subject=ML%20Platform%20Inquiry">ML Platform</a></li>
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