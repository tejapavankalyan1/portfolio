import { motion, useReducedMotion } from "framer-motion";

const achievements = [
  {
    metric: "Best Employee",
    title: "Recognized for design-led execution",
    description:
      "Awarded for bringing clarity and polish to product delivery while maintaining engineering focus.",
  },
  {
    metric: "3+ major builds",
    title: "Enterprise-grade delivery experience",
    description:
      "Contributed to systems where workflow reliability, permissions, and reporting accuracy really mattered.",
  },
  {
    metric: "AI research",
    title: "Explainability mindset",
    description:
      "Worked on pharmacovigilance-focused explainable AI, reinforcing a practical approach to trustworthy models.",
  },
  {
    metric: "Backend depth",
    title: "Structured thinking under real workflow pressure",
    description:
      "Delivered systems where permissions, orchestration, data integrity, and UI quality all had to work together.",
  },
];

const PremiumAchievements = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="section-shell">
      <div className="section-frame">
        <div className="section-header">
          <span className="section-kicker">Signals</span>
          <h2 className="section-title">Evidence of execution, not just intent.</h2>
          <p className="section-intro">
            The strongest signal is consistent delivery across product feel,
            backend structure, and AI-assisted system design.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.metric}
              className="achievement-card glass-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="achievement-metric">{achievement.metric}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumAchievements;
