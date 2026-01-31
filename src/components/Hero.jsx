const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="wave">👋</span>
            <span className="hi">Hi, I'm</span>
          </div>

          <h1 className="name">
            <span className="name-first">Teja Pavan Kalyan K</span>
          </h1>

          <div className="typing-container">
            <span className="typing-text">
              Full Stack Developer | Building AI-Powered Solutions
            </span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Crafting intelligent solutions with cutting-edge technologies.
            1.5+ years of expertise in building scalable web applications
            and AI-powered systems at Audree Info Tech Pvt Ltd.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View My Work
              <div className="btn-shine"></div>
            </button>

            <a
              href="https://www.linkedin.com/in/tejapavankalyank/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1 floating-element">
              <div className="inner-shape"></div>
            </div>
            <div className="shape shape-2 floating-element">
              <div className="inner-shape"></div>
            </div>
            <div className="shape shape-3 floating-element">
              <div className="inner-shape"></div>
            </div>
          </div>

          <div className="code-snippet">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">portfolio.js</span>
            </div>

            <pre className="code-content">
{`const developer = {
  name: "Teja Pavan Kalyan",
  role: "Full Stack Developer",
  expertise: ["React", "Python", "Django", "AI"],
  experience: "1.5+ years",
  company: "Audree Info Tech",
  passion: "Building intelligent web solutions"
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
