import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "tejapavankalyank@gmail.com",
    href: "mailto:tejapavankalyank@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 96409 62211",
    href: "tel:+919640962211",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tejapavankalyank",
    href: "https://www.linkedin.com/in/tejapavankalyank/",
  },
];

const PremiumContact = () => {
  const [copied, setCopied] = useState("");
  const reduceMotion = useReducedMotion();

  const copyEmail = async () => {
    if (!navigator.clipboard) return;

    await navigator.clipboard.writeText("tejapavankalyan456@gmail.com");
    setCopied("Email copied");
    window.setTimeout(() => setCopied(""), 1800);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-frame contact-frame">
        <div className="section-header">
          <span className="section-kicker">Connect</span>
          <h2 className="section-title">
            Interested in building intelligent systems with production-grade polish?
          </h2>
          <p className="section-intro">
            I am open to opportunities where backend depth, AI thinking, and
            product execution all matter.
          </p>
        </div>

        <div className="contact-layout">
          <motion.div
            className="contact-panel glass-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="detail-label">Communication channels</span>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" ? "_blank" : undefined}
                  rel={link.label === "LinkedIn" ? "noreferrer" : undefined}
                  className="contact-link-card"
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>

            <div className="contact-actions">
              <button className="button-primary" onClick={copyEmail}>
                Copy email
              </button>
              <a className="button-secondary" href="mailto:tejapavankalyan456@gmail.com">
                Start a conversation
              </a>
            </div>

            <p className="copy-feedback">
              {copied ||
                "Usually responsive for product, platform, backend, and AI-focused discussions."}
            </p>
          </motion.div>

          <motion.div
            className="contact-panel glass-panel contact-story"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="detail-label">Working style</span>
            <h3>Calm execution, structured thinking, and product-level polish.</h3>
            <p>
              I enjoy problems where architecture, user experience, and
              business logic need to align. That usually means ambiguous
              systems, lots of moving parts, and the need for clear engineering
              decisions.
            </p>

            <div className="contact-signal-line">
              <span />
              <span />
              <span />
            </div>

            <div className="contact-availability">
              <div className="availability-card">
                <span className="detail-label">Best fit</span>
                <strong>AI products, backend platforms, workflow-heavy systems</strong>
              </div>
              <div className="availability-card">
                <span className="detail-label">Collaboration mode</span>
                <strong>Ownership, iteration speed, and engineering clarity</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;
