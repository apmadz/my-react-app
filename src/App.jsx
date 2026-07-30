import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">APMADZ</span>
        </div>
        <div className="nav-actions">
          <a
            href="https://github.com/apmadz/my-react-app"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            Vite + React Template
          </div>
          <h1 className="hero-title">
            The Intelligent Layer for Your React Apps.
          </h1>
          <p className="hero-subtitle">
            A modern, performant framework designed for clarity and rapid development. Clean code, instant feedback, and seamless workflow integration.
          </p>
          <div className="hero-cta">
            <button className="btn btn-glow">Launch App</button>
            <a
              href="https://github.com/apmadz/my-react-app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View Source
            </a>
          </div>
        </div>

        {/* Demo / Interactive Card */}
        <div className="hero-visual">
          <div className="glass-card">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="card-title">Interactive Counter</span>
            </div>
            <div className="card-body">
              <p className="counter-label">Current State</p>
              <div className="counter-display">
                Count: <span className="counter-value">{count}</span>
              </div>
              <button
                className="btn btn-counter"
                onClick={() => setCount((prev) => prev + 1)}
              >
                Increment State
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🧩</div>
          <h3>Modular Logic</h3>
          <p>Structured with reusable components and isolated styling for scalable application design.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Serverless Scale</h3>
          <p>Powered by Vite for lightning-fast HMR during development and optimized production builds.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Extensible UI</h3>
          <p>Clean, dark-mode design system with flexible CSS variable tokens ready for custom styling.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} APMADZ. Built with React & Vite.</p>
      </footer>
    </div>
  )
}