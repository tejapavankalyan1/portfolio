import { motion, useReducedMotion } from "framer-motion";

const principles = [
  "Model-backed features should be observable, testable, and trustworthy in production.",
  "Good backend architecture removes chaos before users ever feel it.",
  "Premium interfaces come from systems clarity, not decoration alone.",
];

const experience = [
  {
    period: "2024 - Present",
    company: "Audree Info Tech Pvt Ltd",
    role: "Full Stack Developer | AI-enabled product delivery",
    summary:
      "Building enterprise products with workflow automation, analytics-rich dashboards, and backend services designed for reliability.",
  },
  {
    period: "Engineering mode",
    company: "AI + Backend Systems",
    role: "Platform thinking with product polish",
    summary:
      "Focused on translating hard system problems into clean interfaces, dependable APIs, and scalable information flow.",
  },
];

const metrics = [
  { label: "Delivery", value: "3+ major platforms" },
  { label: "Experience", value: "1.5+ years" },
  { label: "Specialty", value: "AI workflows + APIs" },
];

const PremiumAbout = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell">
      <div className="section-frame">
        <div className="section-header">
          <span className="section-kicker">Profile</span>
          <h2 className="section-title">
            A systems-minded engineer shaping intelligent software into clear,
            usable products.
          </h2>
          <p className="section-intro">
            My edge is in connecting technical depth to product confidence:
            backend services that stay stable, AI layers that feel grounded,
            and interfaces that reveal exactly the right amount of complexity.
          </p>
        </div>

        <div className="about-grid about-grid-premium">
          <motion.div
            className="about-story glass-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-chip">
              <span className="profile-avatar">TK</span>
              <div>
                <strong>Teja Pavan Kalyan K</strong>
                <p>AI/ML and Full Stack Developer focused on production-grade systems</p>
              </div>
            </div>

            <p>
              I work where data, logic, and decision support need to move
              together without friction. That includes orchestration-heavy
              backend services, analytics surfaces, role-based enterprise
              workflows, and AI features that create measurable operational
              value instead of novelty.
            </p>

            <div className="principles-list">
              {principles.map((principle) => (
                <div key={principle} className="principle-item">
                  <span className="principle-index" />
                  <p>{principle}</p>
                </div>
              ))}
            </div>

            <div className="profile-metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="profile-metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-timeline about-system-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {experience.map((item) => (
              <article key={item.company} className="timeline-card glass-panel">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span className="timeline-node" />
                </div>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <p>{item.summary}</p>
              </article>
            ))}

            <div className="system-grid-panel glass-panel">
              <div className="detail-label">Engineering signature</div>
              <div className="system-grid-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="system-grid-copy">
                <strong>Backend clarity. AI intention. Interface restraint.</strong>
                <p>
                  I like product experiences that feel composed even when the
                  infrastructure behind them is doing difficult work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;
