
import { useState } from 'react'
import './App.css'

function App() {

  const [activeMode, setActiveMode] = useState('balanced')

  const factoryData = {
    balanced: {
      efficiency: 78,
      health: 85,
      quality: 82,
      status: 'Balanced Production'
    },
    predictive: {
      efficiency: 92,
      health: 96,
      quality: 89,
      status: 'Predictive AI Active'
    },
    quality: {
      efficiency: 86,
      health: 90,
      quality: 98,
      status: 'Quality AI Active'
    }
  }

  const currentData = factoryData[activeMode]

  return (
    <div className="website">
      <nav className="navbar">
        <h2>NEXORA<span> INDUSTRIES</span></h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#agenda">Agenda</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">NEXORA FUTUREWORKS 2026</p>

        <h1>
          The Future of Manufacturing
          <span> Is Intelligent.</span>
        </h1>

        <p className="hero-description">
          Discover how Artificial Intelligence is transforming
          modern manufacturing through smarter decisions,
          predictive technology and intelligent production.
        </p>

        <div className="hero-buttons">
          <a href="#register" className="primary-btn">
            Reserve My Seat →
          </a>

          <a href="#about" className="secondary-btn">
            Explore Webinar
          </a>
        </div>

        <div className="event-info">
          <div>
            <strong>12 DEC 2026</strong>
            <small>Saturday</small>
          </div>

          <div>
            <strong>11:00 AM</strong>
            <small>Indian Standard Time</small>
          </div>

          <div>
            <strong>ONLINE</strong>
            <small>Live Webinar</small>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <p className="section-label">DISCOVER THE POSSIBILITIES</p>

          <h2>
            Manufacturing is changing.
            <span> Are you ready?</span>
          </h2>

          <p>
            Artificial Intelligence is transforming the way
            factories operate. From predicting machine failures
            to improving product quality, AI is helping industries
            move towards smarter and more efficient production.
          </p>

          <p>
            Join Nexora FutureWorks 2026 and explore practical
            ways AI can shape the next generation of manufacturing.
          </p>
        </div>

        <div className="about-highlight">
          <div className="highlight-icon">✦</div>
          <h3>Beyond Traditional Production</h3>
          <p>
            Explore intelligent systems that help manufacturing
            teams make better decisions.
          </p>
          <span>THE NEXT INDUSTRIAL ERA</span>
        </div>
      </section>

      <section className="challenges" id="challenges">
        <div className="challenges-header">
          <p className="section-label">THE INDUSTRY REALITY</p>

          <h2>
            The challenges behind
            <span> modern manufacturing.</span>
          </h2>

          <p>
            Traditional manufacturing faces several obstacles
            that affect productivity, operational costs and
            product quality.
          </p>
        </div>

        <div className="challenge-list">

          <div className="challenge-card">
            <div className="challenge-top">
              <span>01 / DOWNTIME</span>
              <span className="challenge-icon">◷</span>
            </div>

            <h3>Unexpected Machine Downtime</h3>

            <p>
              Sudden equipment failures interrupt production,
              delay deliveries and increase maintenance costs.
            </p>

            <span className="challenge-tag">Operational Risk</span>
          </div>

          <div className="challenge-card">
            <div className="challenge-top">
              <span>02 / EFFICIENCY</span>
              <span className="challenge-icon">↗</span>
            </div>

            <h3>Production Inefficiency</h3>

            <p>
              Manual processes and limited visibility make it
              difficult to optimize resources and workflows.
            </p>

            <span className="challenge-tag">Performance Gap</span>
          </div>

          <div className="challenge-card">
            <div className="challenge-top">
              <span>03 / QUALITY</span>
              <span className="challenge-icon">◎</span>
            </div>

            <h3>Quality Control Issues</h3>

            <p>
              Identifying product defects manually can be
              time-consuming and lead to inconsistent results.
            </p>

            <span className="challenge-tag">Quality Risk</span>
          </div>

        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="solutions-header">
          <p className="section-label">THE INTELLIGENT SHIFT</p>

          <h2>
            From challenges
            <span> to intelligent solutions.</span>
          </h2>

          <p>
            Artificial Intelligence transforms traditional
            manufacturing into a smarter, more connected
            and data-driven ecosystem.
          </p>
        </div>

        <div className="solutions-content">

          <div className="solution-intro">
            <span className="solution-label">AI IN ACTION</span>

            <h3>
              Smarter technology.
              <br />
              Stronger production.
            </h3>

            <p>
              Connect machines, data and intelligent systems
              to create manufacturing processes that continuously
              learn, adapt and improve.
            </p>

            <div className="solution-stat">
              <span>THE NEXT GENERATION</span>
              <strong>INDUSTRY 4.0</strong>
            </div>
          </div>

          <div className="solution-list">

            <div className="solution-item">
              <span className="solution-number">01</span>
              <div>
                <h3>Predictive Analytics</h3>
                <p>
                  Analyze machine data to anticipate potential
                  problems and support proactive maintenance.
                </p>
              </div>
              <span className="solution-symbol">↗</span>
            </div>

            <div className="solution-item">
              <span className="solution-number">02</span>
              <div>
                <h3>Intelligent Automation</h3>
                <p>
                  Use AI-driven systems to streamline workflows
                  and optimize production operations.
                </p>
              </div>
              <span className="solution-symbol">↗</span>
            </div>

            <div className="solution-item">
              <span className="solution-number">03</span>
              <div>
                <h3>AI Quality Inspection</h3>
                <p>
                  Apply intelligent vision systems to identify
                  product defects and support quality checks.
                </p>
              </div>
              <span className="solution-symbol">↗</span>
            </div>

          </div>
        </div>
      </section>

      <section className="simulator" id="simulator">
        <div className="simulator-header">
          <p className="section-label">EXPERIENCE THE FUTURE</p>

          <h2>
            Take control of your
            <span> smart factory.</span>
          </h2>

          <p>
            Explore how AI-powered systems can transform
            manufacturing performance. Select a mode
            and watch your factory respond.
          </p>
        </div>

        <div className="simulator-panel">
          <div className="simulator-top">
            <div>
              <span className="live-indicator"></span>
              FACTORY CONTROL CENTER
            </div>
            <span>LIVE SIMULATION</span>
          </div>

          <div className="simulator-body">
            <div className="factory-controls">
              <h3>AI Control Systems</h3>
              <p>Select an AI mode to simulate factory performance.</p>

              <button
                className={activeMode === 'balanced' ? 'mode-btn active' : 'mode-btn'}
                onClick={() => setActiveMode('balanced')}
              >
                <span>01</span>
                Balanced Production
                <span>→</span>
              </button>

              <button
                className={activeMode === 'predictive' ? 'mode-btn active' : 'mode-btn'}
                onClick={() => setActiveMode('predictive')}
              >
                <span>02</span>
                Predictive AI
                <span>→</span>
              </button>

              <button
                className={activeMode === 'quality' ? 'mode-btn active' : 'mode-btn'}
                onClick={() => setActiveMode('quality')}
              >
                <span>03</span>
                Quality Intelligence
                <span>→</span>
              </button>
            </div>

            <div className="factory-dashboard">
              <div className="dashboard-heading">
                <div>
                  <span>FACTORY PERFORMANCE</span>
                  <h3>{currentData.status}</h3>
                </div>
                <span className="system-status">● ACTIVE</span>
              </div>

              <div className="performance-metrics">

                <div className="metric-ring-card">
                  <div
                    className="metric-ring"
                    style={{ '--progress': `${currentData.efficiency}%` }}
                  >
                    <div className="metric-ring-inner">
                      <strong>{currentData.efficiency}%</strong>
                    </div>
                  </div>
                  <span>Production Efficiency</span>
                </div>

                <div className="metric-ring-card">
                  <div
                    className="metric-ring"
                    style={{ '--progress': `${currentData.health}%` }}
                  >
                    <div className="metric-ring-inner">
                      <strong>{currentData.health}%</strong>
                    </div>
                  </div>
                  <span>Machine Health</span>
                </div>

                <div className="metric-ring-card">
                  <div
                    className="metric-ring"
                    style={{ '--progress': `${currentData.quality}%` }}
                  >
                    <div className="metric-ring-inner">
                      <strong>{currentData.quality}%</strong>
                    </div>
                  </div>
                  <span>Product Quality</span>
                </div>

              </div>

              <p className="simulation-note">
                * Illustrative simulation values for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* WEBINAR AGENDA */}

<section className="agenda" id="agenda">
  <div className="agenda-header">
    <p className="section-label">THE WEBINAR JOURNEY</p>
    <h2>What You'll <span>Experience</span></h2>
    <p>
      A focused session designed to explore how AI is transforming
      modern manufacturing.
    </p>
  </div>

  <div className="agenda-timeline">

    <div className="agenda-item">
      <div className="agenda-time">11:00 AM</div>
      <div className="agenda-dot">01</div>
      <div className="agenda-content">
        <span>WELCOME SESSION</span>
        <h3>Opening & Industry Outlook</h3>
        <p>
          Discover the changing landscape of manufacturing
          and why intelligent technologies matter.
        </p>
      </div>
    </div>

    <div className="agenda-item">
      <div className="agenda-time">11:15 AM</div>
      <div className="agenda-dot">02</div>
      <div className="agenda-content">
        <span>CORE SESSION</span>
        <h3>AI in Smart Manufacturing</h3>
        <p>
          Explore predictive analytics, automation and
          AI-powered quality inspection.
        </p>
      </div>
    </div>

    <div className="agenda-item">
      <div className="agenda-time">11:35 AM</div>
      <div className="agenda-dot">03</div>
      <div className="agenda-content">
        <span>LIVE DEMONSTRATION</span>
        <h3>Inside the Intelligent Factory</h3>
        <p>
          Understand how AI insights can improve production
          efficiency and machine performance.
        </p>
      </div>
    </div>

    <div className="agenda-item">
      <div className="agenda-time">11:50 AM</div>
      <div className="agenda-dot">04</div>
      <div className="agenda-content">
        <span>INTERACTIVE DISCUSSION</span>
        <h3>Questions & Expert Insights</h3>
        <p>
          Discuss real-world challenges, opportunities
          and the future of industrial AI.
        </p>
      </div>
    </div>

    <div className="agenda-item">
      <div className="agenda-time">12:00 PM</div>
      <div className="agenda-dot">05</div>
      <div className="agenda-content">
        <span>CLOSING SESSION</span>
        <h3>Key Takeaways & Next Steps</h3>
        <p>
          Wrap up with practical insights for building
          a smarter manufacturing future.
        </p>
      </div>
    </div>

  </div>
</section>

{/* SPEAKER PROFILE */}

<section className="speaker" id="speaker">
  <div className="speaker-header">
    <p className="section-label">MEET YOUR SPEAKER</p>
    <h2>Learn From <span>Industry Experts</span></h2>
    <p>
      Gain practical perspectives on the technologies
      shaping the next generation of manufacturing.
    </p>
  </div>

  <div className="speaker-card">
    <div className="speaker-visual">
      <div className="speaker-avatar">NX</div>
      <span>FEATURED SPEAKER</span>
    </div>

    <div className="speaker-info">
      <p className="speaker-tag">INDUSTRY LEADERSHIP</p>
      <h3>Alex Morgan</h3>
      <h4>AI & Manufacturing Technology Specialist</h4>

      <p className="speaker-description">
        Exploring the intersection of artificial intelligence
        and industrial innovation, with a focus on smarter
        operations, predictive systems and future-ready factories.
      </p>

      <div className="speaker-expertise">
        <span>Industrial AI</span>
        <span>Smart Manufacturing</span>
        <span>Digital Transformation</span>
      </div>

      <div className="speaker-bottom">
        <span>KEYNOTE SESSION</span>
        <span>12 DECEMBER 2026</span>
      </div>
    </div>
  </div>
</section>

{/* REGISTRATION FORM */}

<section className="registration" id="register">
  <div className="registration-header">
    <p className="section-label">SECURE YOUR SPOT</p>
    <h2>Be Part of the <span>Future</span></h2>
    <p>
      Join industry professionals and explore the future
      of intelligent manufacturing.
    </p>
  </div>

  <div className="registration-card">
    <div className="registration-info">
      <span className="registration-label">NEXORA FUTUREWORKS 2026</span>
      <h3>Transform the Way You Think About Manufacturing.</h3>
      <p>
        Reserve your place in our exclusive online webinar
        and discover how AI is shaping tomorrow's factories.
      </p>

      <div className="registration-detail">
        <span>DATE</span>
        <strong>12 December 2026</strong>
      </div>

      <div className="registration-detail">
        <span>TIME</span>
        <strong>11:00 AM IST</strong>
      </div>

      <div className="registration-detail">
        <span>LOCATION</span>
        <strong>Online Webinar</strong>
      </div>
    </div>

    <form
      className="registration-form"
      onSubmit={(e) => {
        e.preventDefault()
        alert('Thank you! Your registration form has been submitted.')
        e.currentTarget.reset()
      }}
    >
      <h3>Register Now</h3>
      <p>Fill in your details to reserve your seat.</p>

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Work Email</label>
        <input
          type="email"
          id="email"
          placeholder="name@company.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          placeholder="Enter your company name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="jobRole">Job Role</label>
        <select id="jobRole" required defaultValue="">
          <option value="" disabled>Select your role</option>
          <option value="management">Management</option>
          <option value="engineering">Engineering</option>
          <option value="operations">Operations</option>
          <option value="technology">Technology / IT</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="registration-submit">
        Reserve My Seat <span>→</span>
      </button>

      <p className="form-note">
        By submitting, you agree to be contacted about this webinar.
      </p>
    </form>
  </div>
</section>

{/* FAQ SECTION */}

<section className="faq" id="faq">
  <div className="faq-header">
    <p className="section-label">GOT QUESTIONS?</p>
    <h2>Frequently Asked <span>Questions</span></h2>
    <p>Everything you need to know before joining the webinar.</p>
  </div>

  <div className="faq-list">
    <details className="faq-item">
      <summary>What is Nexora FutureWorks 2026?</summary>
      <p>
        It is an online webinar exploring how artificial intelligence
        is transforming manufacturing through automation,
        predictive analytics and intelligent quality inspection.
      </p>
    </details>

    <details className="faq-item">
      <summary>When will the webinar take place?</summary>
      <p>
        The webinar is scheduled for 12 December 2026 at
        11:00 AM IST.
      </p>
    </details>

    <details className="faq-item">
      <summary>Is this webinar conducted online?</summary>
      <p>
        Yes. This is planned as an online webinar.
        Joining instructions can be shared with registered participants.
      </p>
    </details>

    <details className="faq-item">
      <summary>Who can attend this webinar?</summary>
      <p>
        Manufacturing professionals, engineers, technology enthusiasts,
        students and anyone interested in industrial AI can attend.
      </p>
    </details>

    <details className="faq-item">
      <summary>Will there be a question and answer session?</summary>
      <p>
        Yes. The agenda includes an interactive discussion
        where participants can explore their questions.
      </p>
    </details>
  </div>
</section>

{/* FOOTER */}

<footer className="footer">
  <div className="footer-main">
    <div className="footer-brand">
      <h2>NEXORA <span>INDUSTRIES</span></h2>
      <p>
        Engineering a smarter industrial future through
        innovation, intelligence and technology.
      </p>
    </div>

    <div className="footer-links">
      <h3>EXPLORE</h3>
      <a href="#about">About Webinar</a>
      <a href="#challenges">Challenges</a>
      <a href="#agenda">Agenda</a>
      <a href="#register">Register</a>
    </div>

    <div className="footer-links">
      <h3>EVENT DETAILS</h3>
      <p>12 December 2026</p>
      <p>11:00 AM IST</p>
      <p>Online Webinar</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Nexora Industries. All rights reserved.</p>
    <a href="#home">Back to Top ↑</a>
  </div>
</footer>

    </div>
    
  )
  
}


export default App
