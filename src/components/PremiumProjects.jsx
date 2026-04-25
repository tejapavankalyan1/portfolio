import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Skillora AI Platform",
    domain: "AI assessment system",
    description:
      "An AI-driven evaluation platform for interviews, assignments, competency reviews, and analytics-heavy decision support.",
    impact:
      "Merged AI-assisted evaluation with enterprise workflow control and reporting clarity.",
    technologies: ["React", "Python", "Django", "MongoDB", "Azure", "Analytics"],
    highlights: ["Role-based assessment flow", "Insight dashboards", "AI-powered evaluation support"],
    runtime: "Live scoring orchestration",
  },
  {
    id: 2,
    title: "Vendor Portal",
    domain: "Procurement operations",
    description:
      "A full procurement management product covering purchase requests, approvals, vendor records, workflow automation, and reporting.",
    impact:
      "Brought structure to a complex process with strong backend data modeling and UI clarity.",
    technologies: ["React", "Django", "PostgreSQL", "REST API"],
    highlights: ["Workflow orchestration", "Vendor lifecycle tracking", "Approval-ready dashboards"],
    runtime: "Approval state management",
  },
  {
    id: 3,
    title: "MSDS Intelligence System",
    domain: "Chemical data platform",
    description:
      "A safety-data solution that integrates PubChem and AI fallback logic to retrieve, manage, and export chemical intelligence.",
    impact:
      "Combined external APIs, failover logic, and compliance-oriented UX in one focused product.",
    technologies: ["Python", "React", "Django", "API Integration", "AI"],
    highlights: ["PubChem integration", "AI fallback retrieval", "Export-ready compliance data"],
    runtime: "External API failover logic",
  },
  {
    id: 4,
    title: "Explainable AI for Pharmacovigilance",
    domain: "Research + interpretability",
    description:
      "A research-led system using explainable AI methods like LIME to clarify adverse drug reaction predictions.",
    impact:
      "Strengthened model trust through interpretable outputs aimed at healthcare decision support.",
    technologies: ["Python", "Django", "LIME", "XAI", "Research pipelines"],
    highlights: ["Interpretability reports", "ADR insight pipeline", "Decision-support transparency"],
    runtime: "Transparent model reasoning",
  },
];

const PremiumProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell">
      <div className="section-frame">
        <div className="section-header">
          <span className="section-kicker">Builds</span>
          <h2 className="section-title">
            Products engineered around workflows, signal quality, and operational trust.
          </h2>
          <p className="section-intro">
            These systems were designed to handle structured work, layered
            permissions, external integrations, and the translation of complex
            logic into confident user experiences.
          </p>
        </div>

        <div className="projects-layout">
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                className={`project-card glass-panel ${selectedProject.id === project.id ? "active" : ""}`}
                onClick={() => setSelectedProject(project)}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="project-card-top">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-domain">{project.domain}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-runtime">{project.runtime}</div>
              </motion.button>
            ))}
          </div>

          <motion.article
            className="project-detail glass-panel"
            key={selectedProject.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-detail-top">
              <div>
                <span className="detail-label">Selected system</span>
                <h3>{selectedProject.title}</h3>
              </div>
              <span className="detail-badge">{selectedProject.domain}</span>
            </div>

            <p className="project-impact">{selectedProject.impact}</p>

            <div className="project-signal-rail">
              <span />
              <span />
              <span />
            </div>

            <div className="project-detail-grid">
              <div className="detail-block">
                <span className="detail-label">Why it matters</span>
                <p>{selectedProject.description}</p>
              </div>

              <div className="detail-block">
                <span className="detail-label">System highlights</span>
                <div className="highlight-list">
                  {selectedProject.highlights.map((highlight) => (
                    <span key={highlight} className="highlight-pill">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tech-grid">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default PremiumProjects;
