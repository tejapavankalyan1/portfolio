import { motion, useReducedMotion } from "framer-motion";

const heroStats = [
  { value: "4+", label: "Production systems shipped" },
  { value: "AI/ML", label: "Intelligent product focus" },
  { value: "Full Stack", label: "Frontend to backend delivery" },
];

const signalNodes = [
  { label: "Inference Layer", value: "Adaptive workflow scoring" },
  { label: "Service Mesh", value: "Scalable API coordination" },
  { label: "UI Layer", value: "Responsive interface systems" },
];

const terminalLines = [
  "boot.sequence > models.ready",
  "api.cluster > routes.stable",
  "signal.graph > analytics.streaming",
  "render.node > interface.live",
];

const telemetryCards = [
  { title: "System Load", value: "72%", meta: "balanced across compute lanes" },
  { title: "Pipeline Sync", value: "11 flows", meta: "real-time ingestion active" },
  { title: "Model Trust", value: "XAI-ready", meta: "interpretable outputs enabled" },
];

const PremiumHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero section-shell">
      <div className="section-frame hero-frame">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            AI/ML engineer | full-stack product builder
          </div>

          <div className="hero-status-rail">
            <span className="hero-status-pill">Neural systems online</span>
            <span className="hero-status-text">Building intelligent products with production discipline</span>
          </div>

          <h1 className="hero-title">
            Building AI-powered products with full-stack execution and system-level clarity.
          </h1>

          <p className="hero-description hero-description-legacy">
            I’m Teja Pavan Kalyan K, an AI/ML and backend engineer focused on
            resilient APIs, trustworthy model-assisted workflows, and polished
            interfaces that make complex systems feel intelligent and calm.
          </p>

          <p className="hero-description">
            I'm Teja Pavan Kalyan K, an AI/ML and Full Stack Developer focused
            on resilient APIs, intelligent workflows, scalable backend systems,
            and polished frontend experiences that make complex products feel
            precise and intuitive.
          </p>

          <div className="hero-actions">
            <button
              className="button-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enter project systems
            </button>

            <a
              href="https://www.linkedin.com/in/tejapavankalyank/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero-stats-grid">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat-card glass-panel">
                <span className="hero-stat-value">{item.value}</span>
                <span className="hero-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="hero-orbit hero-orbit-a" />
          <div className="hero-orbit hero-orbit-b" />
          <div className="hero-beam hero-beam-a" />
          <div className="hero-beam hero-beam-b" />

     

          <div className="hero-console glass-panel">
            <div className="console-topbar">
              <span />
              <span />
              <span />
              <p>runtime/portfolio-intelligence.ts</p>
            </div>

            <div className="console-grid hero-console-grid">
              <div className="console-card console-card-main">
                <span className="console-label">Primary operating mode</span>
                <strong>AI/ML + Full Stack Product Engineering</strong>
                <p>
                  Designing systems where inference, workflows, frontend
                  clarity, and backend reliability reinforce each other.
                </p>
              </div>

              <div className="hero-terminal">
                {terminalLines.map((line, index) => (
                  <div
                    key={line}
                    className="hero-terminal-line"
                    style={{ animationDelay: `${index * 0.8}s` }}
                  >
                    <span className="terminal-prompt">$</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="console-card">
                <span className="console-label">Runtime signals</span>
                <div className="signal-stack">
                  {signalNodes.map((node) => (
                    <div key={node.label} className="signal-node">
                      <span>{node.label}</span>
                      <strong>{node.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-data-stream">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="code-strip">
              <span>$ route --intelligence "trustworthy, observable, scalable"</span>
              <span className="code-cursor" />
            </div>
          </div>

          <div className="telemetry-stack">
            {telemetryCards.map((card) => (
              <div key={card.title} className="telemetry-card glass-panel">
                <span className="console-label">{card.title}</span>
                <strong>{card.value}</strong>
                <p>{card.meta}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-line" />
        <span>Scroll deeper into architecture, execution, and intelligent delivery</span>
      </div>
    </section>
  );
};

export default PremiumHero;
