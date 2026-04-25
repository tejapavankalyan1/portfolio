import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const skillLanes = [
  {
    title: "AI / ML Systems",
    signal: "Model-assisted workflow design",
    tools: ["Python", "AI integration", "XAI", "Analytics", "Prompt orchestration"],
  },
  {
    title: "Backend Engineering",
    signal: "Reliable services and data movement",
    tools: ["Django", "REST APIs", "PostgreSQL", "MongoDB", "Role-based systems"],
  },
  {
    title: "Interface Engineering",
    signal: "Signal-rich, performance-aware interfaces",
    tools: ["React", "JavaScript", "Responsive UI", "Interaction design", "Performance"],
  },
  {
    title: "Delivery + Operations",
    signal: "Operational readiness and shipping discipline",
    tools: ["Git", "Azure", "API integration", "Debugging", "Production thinking"],
  },
];

const PremiumSkills = () => {
  const [activeLane, setActiveLane] = useState(skillLanes[0].title);
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell">
      <div className="section-frame">
        <div className="section-header">
          <span className="section-kicker">Stack</span>
          <h2 className="section-title">
            Capabilities mapped like an engineering control surface.
          </h2>
          <p className="section-intro">
            The value is in how these layers connect: models to workflows,
            interfaces to APIs, and data pipelines to decisions.
          </p>
        </div>

        <div className="skills-lanes skills-lanes-premium">
          {skillLanes.map((lane, index) => (
            <motion.article
              key={lane.title}
              className={`skill-lane glass-panel ${activeLane === lane.title ? "active" : ""}`}
              onMouseEnter={() => setActiveLane(lane.title)}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="skill-lane-top">
                <span className="skill-lane-index">0{index + 1}</span>
                <div className="skill-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <h3>{lane.title}</h3>
              <p>{lane.signal}</p>

              <div className="lane-meter">
                <span />
                <span />
                <span />
              </div>

              <div className="skill-chip-list">
                {lane.tools.map((tool) => (
                  <span key={tool} className="skill-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumSkills;
